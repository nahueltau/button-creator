import showHTMLcode from "./showHTMLcode.js";
import showCSScode from "./showCSScode.js";
import initProps from "./initProps.js";
import textAndNamespace from "./textAndNamespace.js";
import Property from "./Property.js";

//ZOOM
let toggleZoom = _=>{document.querySelector(".viewport").classList.toggle("zoomed")}
[...document.querySelector(".scale-control").children].forEach(child=>child.addEventListener("click",toggleZoom))

//TEXT & NAMESPACE
textAndNamespace();

//STYLE PROPS
fetch("./styles.json")
.then(response=>response.json())
.then(({buttons})=>{
    Property.stylesTemplates = buttons;
    initProps(Property);
    //SHOW CODE
    const showCodeEventAdder = (inputs)=>{inputs.forEach(individualInput=>{individualInput.addEventListener("input",()=>{showCSScode();showHTMLcode();})})}
    let inputs = [...document.querySelectorAll("input")].concat([...document.querySelectorAll("select")]);
    showCodeEventAdder(inputs);

    showCSScode();
    showHTMLcode();
})




