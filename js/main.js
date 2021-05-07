import showHTMLcode from "./showHTMLcode.js";
import showCSScode from "./showCSScode.js";
import initProps from "./initProps.js";
import textAndNamespace from "./textAndNamespace.js";
import Property from "./Property.js";
import {buttons} from "/styles.json"
//ZOOM
let toggleZoom = _=>{document.querySelector(".viewport").classList.toggle("zoomed")}
[...document.querySelector(".scale-control").children].forEach(child=>child.addEventListener("click",toggleZoom))

//TEXT & NAMESPACE
textAndNamespace();

//STYLE PROPS

    Property.stylesTemplates = buttons;
    initProps(Property);
    //SHOW CODE
    const showCodeEventAdder = (inputs)=>{inputs.forEach(individualInput=>{individualInput.addEventListener("input",()=>{showCSScode();showHTMLcode();})})}
    let inputs = [...document.querySelectorAll("input")].concat([...document.querySelectorAll("select")]);
    showCodeEventAdder(inputs);

    showCSScode();
    showHTMLcode();

    
    //TEMPLATES
    let templates = document.querySelector(".templates")
    buttons.forEach((selector,index)=>{
       let cont = document.createElement("div")
       cont.id = "template-"+index;
       let style = document.createElement("style");
       cont.appendChild(style);

      //CONTAINER
       style.innerText+="#template-"+index+"{"
       for(let rule in selector.container.main){
           style.innerText+=rule+":"+selector.container.main[rule]+";"
       }
       style.innerText+="}"
      //BUTTON
       style.innerText+="#template-"+index+" button"+"{"
       for(let rule in selector.button.main){
           style.innerText+=rule+":"+selector.button.main[rule]+";"
       }
       style.innerText+="}"
       //HOVER
       style.innerText+="#template-"+index+" button:hover"+"{"
       for(let rule in selector.button.hover){
           style.innerText+=rule+":"+selector.button.hover[rule]+";"
       }
       style.innerText+="}"

       let but = document.createElement("button")

       but.addEventListener("click",()=>{
        document.querySelectorAll(".property-off").forEach(el=>el.classList.remove("property-off"))
        document.querySelectorAll(".hover-freeze").forEach(el=>el.classList.remove("hover-freeze"))
           Property.all.forEach(prop=>{
               prop.populate(index)
           })
           
           
       })
       cont.appendChild(but);
       but.innerText = "Extra";
       templates.appendChild(cont);
    })





