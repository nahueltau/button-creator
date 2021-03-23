import Input from "./Input.js";
//RENDER INPUTS PROGRAMMATICALLY
function elementRender(selectors){

    selectors.forEach(element=>{
        let value;

        if(element.getAttribute("data-bind")){
            value = getComputedStyle(document.documentElement).getPropertyValue(`--${element.getAttribute("data-bind")}`).trim();
            let arrayValue = value.split(" ");
            value = arrayValue[element.getAttribute("data-order")];
            value =  value.replace(/px/,"");
        }else{
            value = getComputedStyle(document.documentElement).getPropertyValue(`--${element.id}`).trim();
            value =  value.replace(/px/,"");
        }
        element.innerHTML = Input(element.getAttribute("data-type"),`${element.id}`,element.getAttribute("data-title"), value, element.getAttribute("data-min"), element.getAttribute("data-max"));

        let hoverValue;

        if(element.getAttribute("data-bind")){
            hoverValue = getComputedStyle(document.documentElement).getPropertyValue(`--${element.getAttribute("data-bind")}-hover`).trim();
            let hoverArrayValue = hoverValue.split(" ");
            hoverValue = hoverArrayValue[element.getAttribute("data-order")];
            hoverValue =  hoverValue.replace(/px/,"");
        }else{
            hoverValue = getComputedStyle(document.documentElement).getPropertyValue(`--${element.id}-hover`).trim();
            hoverValue =  hoverValue.replace(/px/,"");
        }
        
        let clone = element.cloneNode([true])
        clone.id = "hover-"+clone.id;
        clone.classList.add("hover-container")
        element.insertAdjacentElement("afterend",clone);
        let cloneInput = clone.querySelector("input");
        let cloneLabel = clone.querySelector("label");
        cloneLabel.innerHTML = ""
        cloneInput.id = "hover-"+cloneInput.id;
        cloneInput.value = hoverValue;
        cloneInput.setAttribute("value",hoverValue);
    })
}
export default elementRender;