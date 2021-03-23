import showHTMLcode from "./showHTMLcode.js";
import showCSScode from "./showCSScode.js";
import elementRender from "./elementRender.js";
import Controller from "./Controller.js";
import Property from "./Property.js";
//CONFIG
let buttonPropsArray = [];
let backgroundPropsArray = [];
//TEXT & NAMESPACE
let button = document.querySelector(".container button");
let namespacePlaces = document.querySelectorAll(".namespace-place");
let buttonTextContent = document.querySelector("#text-content-config")
let namespaceContent = document.querySelector("#namespace-content-config")
function textContentUpdate(){
    button.innerText =  buttonTextContent.value;
};
function namespaceContentUpdate(){
    namespacePlaces.forEach(e=>e.innerText = namespaceContent.value);
};
namespaceContentUpdate();
textContentUpdate();
namespaceContent.addEventListener("input",namespaceContentUpdate);
buttonTextContent.addEventListener("input",textContentUpdate);

//ADDING EVENTS
const propertiesArrayEventAdder = (propsArray)=>{
    propsArray
    .forEach(individualProperty=>{
        
                    individualProperty._inputControllers
                    .forEach(controller=>{
                     controller.HTMLElement.addEventListener("input",()=>{
                        individualProperty.setValue();
                        showCSScode();
                        individualProperty.injectValue();
                     })
                    })
                    individualProperty.injectValue();
    })                  
}
 //RENDER ELEMENTS TO DOM
 let selectors = document.querySelectorAll(".selector-object");
 elementRender(selectors);
//CREATE PROPERTY OBJECTS
    backgroundPropsArray.push(new Property("background-color",[
        new Controller("#background-color-container-config")
    ],{selector:"container",stylesheet:"background",subfix:"-container"}));

    buttonPropsArray.push(new Property("background-color",[
        new Controller("#background-color-config"),
        new Controller("#background-color-config",{hover:true})
    ])); 
    buttonPropsArray.push(new Property("transition",[
        new Controller("#transition-config")
    ])); 
    buttonPropsArray.push(new Property("cursor",[
        new Controller("#cursor-config")
    ])); 
    buttonPropsArray.push(new Property("border-color",[
        new Controller("#border-color-config"),
        new Controller("#border-color-config",{hover:true})
    ])); 
    buttonPropsArray.push(new Property("color",[
        new Controller("#color-config"),
        new Controller("#color-config",{hover:true})
    ])); 
    buttonPropsArray.push(new Property("border-style",[
        new Controller("#border-style-config")
    ])); 
    buttonPropsArray.push(new Property("text-transform",[
        new Controller("#text-transform-config")
    ])); 
    buttonPropsArray.push(new Property("border-width",[
        new Controller("#border-width-config",{unit:"px"}),
        new Controller("#border-width-config",{unit:"px",hover:true})
    ])); 
    buttonPropsArray.push(new Property("border-radius",[
        new Controller("#border-radius-config",{unit:"px"}),
        new Controller("#border-radius-config",{unit:"px",hover:true})
    ])); 
    buttonPropsArray.push(new Property("font-size",[
        new Controller("#font-size-config",{unit:"px"}),
        new Controller("#font-size-config",{unit:"px",hover:true})
    ])); 
    buttonPropsArray.push(new Property("box-shadow",[
        new Controller("#shadow-x-config",{unit:"px"}),
        new Controller("#shadow-y-config",{unit:"px"}),
        new Controller("#shadow-blur-config",{unit:"px"}),
        new Controller("#shadow-spread-config",{unit:"px"}),
        new Controller("#shadow-color-config"),
        new Controller("#shadow-x-config",{unit:"px",hover:true}),
        new Controller("#shadow-y-config",{unit:"px",hover:true}),
        new Controller("#shadow-blur-config",{unit:"px",hover:true}),
        new Controller("#shadow-spread-config",{unit:"px",hover:true}),
        new Controller("#shadow-color-config",{hover:true})
    ])); 
    buttonPropsArray.push(new Property("padding",[
        new Controller("#padding-y-config",{unit:"px"}),
        new Controller("#padding-x-config",{unit:"px"}),
        new Controller("#padding-y-config",{unit:"px",hover:true}),
        new Controller("#padding-x-config",{unit:"px",hover:true})
    ])); 


//LOAD EVENT
window.addEventListener("load",()=>{
   



    //ADDING EVENTS TO HTML ELEMENTS
    propertiesArrayEventAdder(buttonPropsArray);
    propertiesArrayEventAdder(backgroundPropsArray);

    showCSScode();
    showHTMLcode();

    
});
