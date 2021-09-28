

function $http(config)
{
    return function(config) {

		var url    = (/^(.*):\/\/([A-Za-z0-9\-\.]+):?([0-9]+)?(.*)$/).exec(config.url);
        var method = config.method || 'GET';
		
        if(url == null)  throw "Unable to parse URL";
	
		url = 
        {
			scheme: url[1],
			host  : url[2],
			port  : url[3] || (url[1] == "https" ? 443 : 80),
			path  : url[4]
		};

		if(url.scheme != "http") throw "non-http url's not supported yet!";

		var s = new Socket();

		if(!s.open("{0}:{1}".f(url.host, url.port), "binary")) throw "Can\'t connect to {0}:{}".f(url.host, url.port);

		var request = "{0} {1} HTTP/1.0\r\nConnection: close\r\nHost: {2}".f(method, url.path, url.host),
            header;

		if(config.payload) 
        {
			if(typeof config.payload === 'object') 
            {
				config.payload = JSON.stringify(config.payload);
				(config.headers = config.headers || {})["Content-Type"] = "application/json";
			}

			(config.headers = config.headers || {})["Content-Length"] = config.payload.length;
		}

		for(header in (config.headers || {})) 
        {
			request += "\r\n{0}: {1}".f(header, config.headers[header]);
		}

		s.write("{0}\r\n\r\n".f(request));

		if(config.payload) s.write(config.payload);


		var data, response, payload, http = {};
		data = s.read();
		while(!s.eof) data += s.read();

		var response = data.indexOf("\r\n\r\n");
		if(response == -1) throw "No HTTP payload found in the response!";

		payload  = data.substr(response + 4);
		response = data.substr(0, response);

		var http = /^HTTP\/([\d\.?]+) (\d+) (.*)\r/.exec(response), header;
		
        if(http == null) throw "No HTTP payload found in the response!";

		http = 
        {
			ver           : Number(http[1]),
			status        : Number(http[2]),
			statusMessage : http[3],
			headers       : {}
		};

		var httpregex = /(.*): (.*)\r/g;

		while(header = httpregex.exec(response)) http.headers[header[1]] = header[2];

		var contenttype = (http.headers["Content-Type"] || http.headers["content-type"] || '').split(";");
		var charset = config.charset || (contenttype[1] ? /charset=(.*)/.exec(contenttype[1])[1] : null);

		if(charset) payload = payload.toString(charset);
		contenttype = contenttype[0];

		if(config.forcejson || contenttype == "application/json") http.payload = JSON.parse(payload);
		else http.payload = payload;
		
		return http;
	}
};