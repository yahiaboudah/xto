/*******************************************************************************
        TODO:           ---
		Name:           button
		Desc:           A button widget.
		Kind:           Widget.
		Created:        2108 (YYMM)
		Modified:       2108 (YYMM)
*******************************************************************************/

/**************************************************************************************************************************************************************
=============================================================		 [Docs]  		===========================================================================

==> Button widget has 24 properties:

 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
 ▓         property         ▓      type       ▓           default            ▓              values               ▓                    desc                     ▓
 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
 ▓        characters        ▓     integer     ▓        (txt.len/2)+5         ▓             any:+int              ▓      num of characters to be displayed      ▓
 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
 ▓           text           ▓     string      ▓           (empty)            ▓              any:str              ▓     text to be displayed on the button      ▓
 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
 ▓         justify          ▓     string      ▓           "center"           ▓     ["center";"left";"right"]     ▓      Text justification in the button       ▓
 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
 ▓       shortcutKey        ▓     string      ▓          undefined           ▓         any:letter(ex:g)          ▓     the key that activates the onClick      ▓
 ▓                          ▓                 ▓                              ▓                                   ▓           function of the button            ▓
 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
 ▓          active          ▓     boolean     ▓             true             ▓             any:bool              ▓     whether the item has keyboard focus     ▓
 ▓                          ▓                 ▓                              ▓                                   ▓                                             ▓
 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
 ▓         visible          ▓     boolean     ▓             true             ▓             bool:any              ▓     controls the visibility of the butt     ▓
 ▓                          ▓                 ▓                              ▓                                   ▓                     on                      ▓
 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
 ▓         enabled          ▓     boolean     ▓             true             ▓             bool:any              ▓        enables or disables a button         ▓
 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
 ▓         helpTip          ▓     string      ▓           (empty)            ▓              any:str              ▓     modified the displayed help tip in      ▓
 ▓                          ▓                 ▓                              ▓                                   ▓          the event of a hoverover           ▓
 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
 ▓         type(RO)         ▓     string      ▓           "button"           ▓             "button"              ▓     static property that stores widget      ▓
 ▓                          ▓                 ▓                              ▓                                   ▓                    type                     ▓
 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
 ▓        window(RO)        ▓     object      ▓          Window({})          ▓            Window({})             ▓     static property that calls the wind     ▓
 ▓                          ▓                 ▓                              ▓                                   ▓              ow of the button               ▓
 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
 ▓        alignment         ▓     string      ▓            center            ▓     ["center";"left";"right"]     ▓           align within the parent           ▓
 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
 ▓      textDirection       ▓     string      ▓             null             ▓          ["ltr"; "rtl"]           ▓        specifies the text direction         ▓
 ▓                          ▓                 ▓                              ▓                                   ▓           (TESTED. DOES NOT WORK)           ▓
 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
 ▓         children         ▓      array      ▓              []              ▓              any:arr              ▓         An array of child elements          ▓
 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
 ▓        properties        ▓     object      ▓              {}              ▓            any:object             ▓     An object with user-assigned proper     ▓
 ▓                          ▓                 ▓                              ▓                                   ▓                  ty values                  ▓
 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
 ▓          bounds          ▓     object      ▓         {x:0; y:0;           ▓            {x:x; y:y;             ▓          The bounds of this button          ▓
 ▓                          ▓                 ▓      width:0; height:0}      ▓         width:w; height:h}        ▓                                             ▓
 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
 ▓       maximumSize        ▓      array      ▓            [x;y]             ▓            any:arr(2)             ▓     if (size > maximumSize) size = maxi     ▓
 ▓                          ▓                 ▓                              ▓                                   ▓                   mumSize                   ▓
 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
 ▓       minimumSize        ▓      array      ▓            [x;y]             ▓            any:arr(2)             ▓     if(size < minimumSize) size = minim     ▓
 ▓                          ▓                 ▓                              ▓                                   ▓                   umSize                    ▓
 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
 ▓      preferredSize       ▓      array      ▓            [x;y]             ▓            any:arr(2)             ▓     the preferredSize if size is undefi     ▓
 ▓                          ▓                 ▓                              ▓                                   ▓                     ned                     ▓
 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
 ▓           size           ▓      array      ▓            [x;y]             ▓            any:arr(2)             ▓        the fixed size of the button         ▓
 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
 ▓         location         ▓      array      ▓            [x;y]             ▓            any:arr(2)             ▓     (HAS TO BE DECLARED IN THE WIN ONSH     ▓
 ▓                          ▓                 ▓                              ▓                                   ▓     OW; IS DESTROYED WHEN WIN.LAYOUT(1)     ▓
 ▓                          ▓                 ▓                              ▓                                   ▓                  IS CALLED)                 ▓
 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
 ▓     windowBounds(RO)     ▓      array      ▓            [x;y]             ▓            any:arr(2)             ▓     The bounds relative to the top-leve     ▓
 ▓                          ▓                 ▓                              ▓                                   ▓               l parent window               ▓
 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
 ▓          indent          ▓       int       ▓              0               ▓             any:+int              ▓       The number of pixels to indent        ▓
 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
 ▓        parent(RO)        ▓     object      ▓         Container()          ▓           any:container           ▓     the parent container of the widget      ▓
 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
 ▓         graphics         ▓     object      ▓     ScriptUIGraphics({})     ▓          any:graphicsObj          ▓        Graphics object of the button        ▓
 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■

 ==> Button has 11 main functions:

 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
 ▓           method            ▓                   args                    ▓                    desc                     ▓
 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
 ▓      addEventListener       ▓         eventName(posit:str:null)         ▓             Register an event:              ▓
 ▓                             ▓         handler(posit:func:null)          ▓                  mouseover                  ▓
 ▓                             ▓     capturePhase(optional:bool:false)     ▓                  mousedown                  ▓
 ▓                             ▓                                           ▓                  mouseout                   ▓
 ▓                             ▓                                           ▓                   keydown                   ▓
 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
 ▓        dispatchEvent        ▓         eventName(posit:str:null)         ▓     simulate an event (ex.mousedown) wi     ▓
 ▓                             ▓                                           ▓           thout user intervention           ▓
 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
 ▓            hide             ▓                  (none)                   ▓               hide the button               ▓
 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
 ▓           notify            ▓       eventName(posit:str:onClick)        ▓          run the onClick function           ▓
 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
 ▓         onActivate          ▓                  (none)                   ▓     called when the button becomes acti     ▓
 ▓                             ▓                                           ▓                     ve                      ▓
 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
 ▓           onClick           ▓                  (none)                   ▓      called when the button is clicked      ▓
 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
 ▓        onDeactivate         ▓                  (none)                   ▓     called when the button becomes inac     ▓
 ▓                             ▓                                           ▓                    tive                     ▓
 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
 ▓           onDraw            ▓              (drawState({}))              ▓              customize button               ▓
 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
 ▓        onShortcutKey        ▓                  (none)                   ▓     called when the shortcutKey associa     ▓
 ▓                             ▓                                           ▓       ted with this button is clicked       ▓
 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
 ▓     removeEventListener     ▓       (exact same addEvent.. args)        ▓     remove the previously added Event l     ▓
 ▓                             ▓                                           ▓                   istener                   ▓
 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
 ▓            show             ▓                  (none)                   ▓               show the button               ▓
 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■

******************************************************************************/

//@include "../blocks/widget.jsx"

_Button = function _Button(cfg){	
    _Widget.call(this, cfg, "button");

	// validate/ sanitize arguments before passing them to this;
	//=========================================================

	this.characters = 0;
	this.text = "";
	
	this.justify = "center";
	this.shortcutKey = "";
	this.enabled = 1;
	this.active = 0;
	this.visible = 1;
	this.helpTip = "";
	this.properties = {};
	this.indent = 0;
	this.alignment = "center";

	//========================
	this.onClick = cfg.onClick;
	
	this.eventListeners = [
		// [eventName:str, function handler(){...}:func, capturePhase:bool]
		// ...
	]
	this.onActivate = cfg.onActivate;
	this.onDeactivate = cfg.onDeactivate;
	this.onShortcutKey = cfg.onShortcutKey;

}; Object.extends(_Button, _Widget);