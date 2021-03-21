import updateCode from "./viewCodeUpdate.js";
import Input from "./Input.js";

function elementRender(){
    let selectors = document.querySelectorAll(".selector-object");
    selectors.forEach(element=>{
        element.innerHTML = Input(element.getAttribute("data-type"),`${element.id}`,element.getAttribute("data-title"), element.getAttribute("data-value"), element.getAttribute("data-min"), element.getAttribute("data-max"));
    })
}
function addHoverSelector(){
    let addHoverButtons = document.querySelectorAll(".add-hover");                                                                  //GET ADD HOVER HTML ELEMENTS
    addHoverButtons.forEach(element=>{                                                                                              //ADD EVENT TO CREATE HOVER INPUTS
        
        let dataId = element.getAttribute("data-id");                                                                           //FINDING PROPERTY TO ADD HOVER EFFECT                              
        let dataBind = element.getAttribute("data-bind");                                                                           //FINDING PROPERTY TO ADD HOVER EFFECT                              
        let parentClass = "."+dataId+"-wrapper";                                                                               //FORMATTING CLASS OF THE WRAPPER
        let children = document.querySelectorAll(parentClass+" .selector-object");
        console.log(children);
        let parentDiv = document.querySelector(parentClass);                                                                        //GETTING WRAPPER HTML ELEMENT


       




        element.addEventListener("click",()=>{
            let parent_property = {};                                                                                               //PROPERTY OBJECT
            buttonPropsArray.forEach(element=>{                                                                                     //FINDING A MATCH IN THE PROPERTY OBJECTS
                if(element.name === dataBind){
                    parent_property = element;
                }
            })

            children.forEach(e=>{
                let clone = e.cloneNode([true])
                clone.id = "hover-"+clone.id;
                clone.classList.add("hover-container")
                parentDiv.appendChild(clone)
                let cloneInput = document.querySelector("#"+clone.id+" input");
                cloneInput.id = "hover-"+cloneInput.id;
            })
            
            element.style.display="none";                                                                                            //HIDING "ADD CLASS CTA"


            let newControllers = [];
            parent_property._inputControllers.forEach(e=>{
                
                newControllers.push(new Controller("#hover-"+e.anchor.slice(1), e.unit,true))
                console.log(newControllers)
                })
                parent_property._inputControllers.push(...newControllers); 



                newControllers.forEach(e=>{
                    e.HTMLElement.addEventListener("input",()=>{
                                    parent_property.setValue();
                                    updateCode(elementStyleSheets[parent_property.stylesheet]);
                                    injectStyles(parent_property.selector, parent_property.stylesheet, buttonPropsArray);
                                    })
                                parent_property.setValue();

            })

        })
    })
}
addHoverSelector();
//CONFIG
let button = document.querySelector(".container button");
let buttonTextContent = document.querySelector("#text-content-config")
let textContentUpdate = ()=>{
    button.innerText =  buttonTextContent.value;
}
let buttonPropsArray = [];
let backgroundPropsArray = [];

//CLASSES
class Controller {
    constructor(anchor,unit="",hover=false){
        this.anchor = anchor;
        this.unit = unit;
        this.hover = hover;
        this.HTMLElement = document.querySelector(this.anchor);   
    }
}
class Property{
    constructor(prop,[...controllersArray],selector="button",stylesheet="button"){
        this.name = prop;
        this.selector = selector;
        this.stylesheet = stylesheet;
        this._inputControllers = [...controllersArray]
        this.value = "";
        this.hover = "";
        //this.camelCase = prop.match(/\-[a-z]/)!==null ? prop.replace(/\-[a-z]/, prop.match(/\-[a-z]/)[0].slice(1).toUpperCase()) : prop;
    }
    setValue(){
        this.value = "";
        this.hover = "";
        this._inputControllers.forEach(controller=> controller.hover ? this.hover+= " "+controller.HTMLElement.value+controller.unit : this.value+= " "+controller.HTMLElement.value+controller.unit);
    }
}

//STYLES OBJECTS
const elementStyleSheets = {

    button: document.querySelector("#button"),
    background: document.querySelector("#main"),
    hover: document.querySelector("#hover")   
}
const injectStyles = (selector, stylesheet, propsArray)=>{
    let style = "";
    let hover = "";
    
    for(let property of propsArray){
         if(property.stylesheet === stylesheet){
            style+=property.name+":"+property.value+";";
            if(property.hover!==""){
              hover+=property.name+":"+property.hover+";";    
            }
            
         }  
    }
    elementStyleSheets[stylesheet].innerText = `.${selector}{${style}}`;
    if(selector==="button"){
        elementStyleSheets["hover"].innerText = `.${selector}:hover{${hover}}`;
    }
    
}
const propertiesArrayEventAdder = (propsArray)=>{
    propsArray
    .forEach(individualProperty=>{
        
                    individualProperty._inputControllers
                    .forEach(controller=>{
           
                     controller.HTMLElement.addEventListener("input",()=>{
                        individualProperty.setValue();
                        
                        updateCode(elementStyleSheets[individualProperty.stylesheet]);
                        injectStyles(individualProperty.selector, individualProperty.stylesheet, propsArray);
                        
                     })
                     individualProperty.setValue();
                     
                    })
    })                  
}
//LOAD EVENT
window.addEventListener("load",()=>{
    //RENDER ELEMENTS TO DOM
    elementRender();
    //CREATE PROPERTY OBJECTS
    backgroundPropsArray.push(new Property("background-color",[new Controller("#background-container-config")],"container","background"));

    buttonPropsArray.push(new Property("background-color",[new Controller("#background-color-config")])); 
    buttonPropsArray.push(new Property("transition",[new Controller("#transition-config")])); 
    buttonPropsArray.push(new Property("cursor",[new Controller("#cursor-config")])); 
    buttonPropsArray.push(new Property("border-color",[new Controller("#border-color-config")])); 
    buttonPropsArray.push(new Property("color",[new Controller("#color-config")])); 
    buttonPropsArray.push(new Property("border-style",[new Controller("#border-style-config")])); 
    buttonPropsArray.push(new Property("text-transform",[new Controller("#text-transform-config")])); 
    buttonPropsArray.push(new Property("border-width",[new Controller("#border-width-config","px")])); 
    buttonPropsArray.push(new Property("border-radius",[new Controller("#border-radius-config","px")])); 
    buttonPropsArray.push(new Property("font-size",[new Controller("#font-size-config","px")])); 
    buttonPropsArray.push(new Property("box-shadow",[new Controller("#shadow-x-config","px"),new Controller("#shadow-y-config","px"),new Controller("#shadow-blur-config","px"),new Controller("#shadow-color-config")])); 
    buttonPropsArray.push(new Property("padding",[new Controller("#padding-y-config","px"),new Controller("#padding-x-config","px")])); 
    //ADDING EVENTS TO HTML ELEMENTS
    propertiesArrayEventAdder(buttonPropsArray);
    propertiesArrayEventAdder(backgroundPropsArray);          
    //ONLOAD STYLES
    injectStyles("container","background",backgroundPropsArray);
    injectStyles("button","button",buttonPropsArray);
    updateCode();

    //TEXT INPUT
    buttonTextContent.addEventListener("input",textContentUpdate);
    textContentUpdate();
    
    
});

