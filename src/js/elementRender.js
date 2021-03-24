import Input from "./Input.js";
//RENDER INPUTS PROGRAMMATICALLY
function elementRender(selectors){

    selectors.forEach(element=>{
       
        //REGULAR VALUE
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
        //HOVER VALUE
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
        clone.classList.add("hover-container");
        element.insertAdjacentElement("afterend",clone);
        /* clone.parentElement.classList.add("hover-freeze"); */
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
            e.target.parentElement.classList.toggle("property-off");
            let fireEvent = new Event("input");
            cloneInput.dispatchEvent(fireEvent);

        })
        element.parentElement.appendChild(x);
       
    })
}
export default elementRender;