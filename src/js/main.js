import showHTMLcode from "./showHTMLcode.js";
import showCSScode from "./showCSScode.js";
import elementRender from "./elementRender.js";
import Input from "./Input.js";
import Controller from "./Controller.js";
import Property from "./Property.js";
//ZOOM
let toggleZoom = _=>{document.querySelector(".viewport").classList.toggle("zoomed")}
[...document.querySelector(".scale-control").children].forEach(child=>child.addEventListener("click",toggleZoom))
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
                        individualProperty.injectValue();
                        showCSScode();
                        
                     })
                    })
                    individualProperty.setValue();
                    individualProperty.injectValue();
    })                  
}
 //RENDER ELEMENTS TO DOM
 let selectors = document.querySelectorAll(".selector-object");
//elementRender(selectors);


//LOAD EVENT
window.addEventListener("load",()=>{
   



    //ADDING EVENTS TO HTML ELEMENTS
    

    
});

fetch("./styles.json")
.then(response=>response.json())
.then(({buttons})=>{
   
    
    selectors.forEach(element=>{
       
        //REGULAR VALUE
        let value;
        //getting the value of the prop from the json object, the if statement divides the props that are influenced by multiple input vs single input
        if(element.getAttribute("data-bind")){
            value = buttons[0][`${element.getAttribute("data-bind")}`].trim();
            let arrayValue = value.split(" ");
            value = arrayValue[element.getAttribute("data-order")];
            value =  value.replace(/px/,"");
        }else{
            
            value = buttons[0][element.id].trim();
            value =  value.replace(/px/,"");
           
        }
        
        element.innerHTML = Input(element.getAttribute("data-type"),`${element.id}`,element.getAttribute("data-title"), value, element.getAttribute("data-min"), element.getAttribute("data-max"));
        
        //HOVER VALUE
        let hoverValue;

        if(element.getAttribute("data-bind")){
            hoverValue = buttons[0][`${element.getAttribute("data-bind")}-hover`].trim();
            let hoverArrayValue = hoverValue.split(" ");
            hoverValue = hoverArrayValue[element.getAttribute("data-order")];
            hoverValue =  hoverValue.replace(/px/,"");
        }else{
            hoverValue = buttons[0][`${element.id}-hover`].trim();
            hoverValue =  hoverValue.replace(/px/,"");
        }
        
        let clone = element.cloneNode([true])
        clone.id = "hover-"+clone.id;
        clone.classList.add("hover-container");
        element.insertAdjacentElement("afterend",clone);
        let cloneInput = clone.querySelector("input");
        cloneInput.classList.add("hover-input");
        let cloneLabel = clone.querySelector("label");
        cloneLabel.innerHTML = "";
        cloneLabel.removeAttribute("for");
        cloneLabel.addEventListener("click",(e)=>{
            e.target.parentElement.parentElement.classList.toggle("hover-freeze");
            let fireEvent = new Event("input");
            cloneInput.dispatchEvent(fireEvent);
        })
        if(hoverValue===""){
            cloneLabel.parentElement.parentElement.classList.toggle("hover-freeze");
        }
        cloneInput.id = "hover-"+cloneInput.id;
        cloneInput.value = hoverValue;
        cloneInput.setAttribute("value",hoverValue);

        //XX
        let x = document.createElement("span");
        x.innerText = "+"
        x.classList.add("remove-property-button");
        x.addEventListener("click",(e)=>{
            let fireEvent = new Event("input");
            e.target.parentElement.classList.toggle("hover-freeze");
            cloneInput.dispatchEvent(fireEvent);
            e.target.parentElement.classList.toggle("property-off");
            
            
            cloneInput.dispatchEvent(fireEvent);

        })
        element.parentElement.appendChild(x);
       
    })
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

    propertiesArrayEventAdder(buttonPropsArray);
    propertiesArrayEventAdder(backgroundPropsArray);

    showCSScode();
    showHTMLcode();
})