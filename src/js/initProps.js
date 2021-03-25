import {Input, Select} from "./Controller.js";


export default function initProps(Property){
        //CREATE PROPERTY OBJECTS
        new Property("background-color",[
            new Input({title:"color",type:"color"})
        ],{selector:"container",subfix:"-container", canHover:false});
    
        new Property("background-color",
                            [new Input({title:"color",type:"color"})]
                        );

        new Property("transition",[
            new Input({title:"transition"})
        ],{canHover:false}); 

        new Property("cursor",[
            new Input({title:"cursor"})
        ],{canHover:false}); 

        new Property("border-color",[
            new Input({title:"color",type:"color"})
        ]); 
        new Property("color",[
            new Input({title:"color",type:"color"})
        ]); 

        new Property("border-width",[
            new Input({title:"width",type:"range",unit:"px", min:0,max:50})
        ]); 

        new Property("border-radius",[
            new Input({title:"radius",type:"range",unit:"px", min:0,max:100})
        ]); 

        new Property("font-size",[
            new Input({title:"Size",type:"range",unit:"px", min:8,max:100})
        ]); 

        new Property("box-shadow",[
            new Input({title:"X",type:"range",unit:"px", min:-40,max:40}),
            new Input({title:"Y",type:"range",unit:"px", min:-40,max:40}),
            new Input({title:"Blur",type:"range",unit:"px", min:0,max:100}),
            new Input({title:"Spread",type:"range",unit:"px", min:0,max:100}),
            new Input({title:"color",type:"color"})
        ]); 

        new Property("padding",[
            new Input({title:"Y Direction",type:"range",unit:"px", min:0,max:100}),
            new Input({title:"X Direction",type:"range",unit:"px", min:0,max:100})
        ]);

        new Property("border-style",[
            new Select({title:"Style",options:["Solid","Inset","Outset","Groove", "Ridge","Doted","Dashed","Double","Hidden", "None"]})
        ],{canHover:false});
        
        new Property("text-transform",[
            new Select({title:"Transform",options:["Uppercase","Lowercase","Capitalize","None", "Initial", "Inherit"]})
        ],{canHover:false}); 

}