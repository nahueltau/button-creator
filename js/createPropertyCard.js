export default function createPropertyCard(name, inputControllers, canHover){
                 //create card wrapper
                 let wrapper = document.createElement("div");
                 wrapper.classList.add(`property-wrapper`);
                 wrapper.classList.add(`${name}-card`);
                 
     
                 //append input containers from contollers
                 inputControllers.forEach(controller=>{
                     
                     wrapper.appendChild(controller.inputElement);
                     //if hover input available
                     if(canHover){
                             let hoverLabel = controller.hoverElement.children[0];
                             let hoverInput = controller.hoverElement.children[1];
                             wrapper.appendChild(controller.hoverElement);
                             //hover freeze event
                             hoverLabel.addEventListener("click",(e)=>{
                             wrapper.classList.toggle("hover-freeze");
                             let fireEvent = new Event("input");
                             hoverInput.dispatchEvent(fireEvent);})
                         }
                 })            

                 //close card
                 let closeCard = document.createElement("span");
                 closeCard.innerText = "+"
                 closeCard.classList.add("remove-property-button");
                 wrapper.appendChild(closeCard);
     
                 //close card event
                 let firstInput = inputControllers[0].inputElement.children[1];
                 let fireEvent = new Event("input");
     
                 closeCard.addEventListener("click",()=>{
                 wrapper.classList.toggle("hover-freeze");
                 firstInput.dispatchEvent(fireEvent);
                 wrapper.classList.toggle("property-off");
                 firstInput.dispatchEvent(fireEvent);})
             
                 //inject in DOM
                 let element = document.querySelector("#button-"+name)
                 element.replaceWith(wrapper);
     
     
                 //RETURN PROPERTY WRAPPER HTML NODE
                 return wrapper;

}