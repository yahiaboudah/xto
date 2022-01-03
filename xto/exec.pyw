
class FileInterface():

    # static props:
    #   structure (FileInterface basic structure)
    intf_struct = {

        "MAJ": ('info', 'active_req'), # major
        "INF": ('contacts', 'requests_arch', 'requests_exec', 'requests_made'), # info
        "ACR": ('road', 'trac', 'seed', 'crop') # active request
    }

    # imports:
    #   json (data ser/deser)
    #   sys  ()
    #   os   (path operations)
    import json, sys, os

    @classmethod
    def validate_structure(self, oo):

        S = self.intf_struct
        if(
                all(k in oo               for k in S['MAJ'])
            and all(k in oo['info']       for k in S['INF'])
            and all(k in oo['active_req'] for k in S['ACR'])
        ): return True

        return False

    @classmethod
    def grab_interface(self, pp):
        
        if(not os.path.exists(pp)): return None
        
        with open(pp ,'r') as f:
            c = f.read()
        
        c = json.loads(c)
        if(not self.validate_structure(c)): return None

        return c

    @classmethod
    def load_interfaces(self, user_name = "bouda"):

        loaded = []

        path = "C:/Users/{0}/AppData/Roaming/PYJSX/interfaces.json".format(user_name)
        with open(path, 'r') as f: 
            interfaces = json.loads(f.read())
        
        for i in interfaces:
            i = self.grab_interface(i)
            if(not i): continue
            loaded.append(i)

        return loaded
    
    def __init__(self):
        pass

class PYJSX():

    @classmethod
    def jspy_args(ss):
        
        #boolean
        if(ss in ['true', 'false']): return ss.title()
        #string
        if(type(ss) is str):         return '"{0}"'.format(ss)
        
        #any
        return str(ss)

print(FileInterface.load_interfaces())

# def pyjsx_run():
    
#     import json, sys, os
    
#     def strr(ss):
#         if(ss in ['true', 'false']): return ss.title()
#         if(type(ss) is str):         return '"' + ss + '"'
#         return str(ss)

#     # load the interfaces array first:
#     interfaces = "C:/Users/bouda/AppData/Roaming/PYJSX/interfaces.txt"
#     with open(interfaces, 'w') as f:
#         interfaces = json.loads(interfaces)

#     for interf in interfaces:

#         intf_path   = interf
#         intf_name   = os.path.basename(interf)
#         exec_signal = os.path.dirname(interf) + '/executed_{N}.tmp'.format(N = intf_name)


#         with open(intf_path, 'r') as f: c = f.read()
#         if not c: return 'Python Error: interface corrupt'
        
#         intff = json.loads(c)
#         AR    = intff['active_req']
#         path  = AR   ['road']
#         func  = AR   ['trac']
        
#         name  = '.'.join(path.split('/')[-1].split('.')[0:-1])
#         args  = ','.join(strr(e) for e in AR['seed'])
#         sys.path.append(os.path.dirname(path))
        
#         try:
#             exec('import ' + name + ' as s')
#             result = eval('s.' + func + '(' + args + ')')
            
#         except Exception as e:
#             result = 'Python Error: {e}'.format(str(e).replace('\'', '\\\'')) 
        
#         intff['info']['reqs_exec'] = intff['info']['reqs_exec'] + 1
#         intff['active_req']['crop'] = result
        
#         # dump new interface with crop result
#         with open(intf_path, 'w', encoding='utf8') as f:
#             f.write(json.dumps(intff, indent =4))

#         # write signal file
#         with open(exec_signal, 'w') as ef: ef.write('')
    
#     return 0
# pyjsx_run()