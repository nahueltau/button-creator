import createPropertyCard from "./createPropertyCard.js";

class Property{
    static stylesTemplates = {};

    constructor(prop,[...controllers],{selector="button",subfix="",canHover=true}={}){
        this.name = prop;
        this.subfix = subfix;
        this.selector = selector;
        this.canHover = canHover;
        this.inputControllers = [...controllers]
        this.propertyCard = createPropertyCard(this.name, this.inputControllers,this.canHover);;
        this.addOnInputEvents();
        this.pupulateData(0);
    }
    addOnInputEvents(){
            //input update values events
            let inputs = this.propertyCard.querySelectorAll("input");
            inputs.forEach(input=>{
                input.addEventListener("input",()=>{this.setValue();})
                                    })
            let selects = this.propertyCard.querySelectorAll("select");
            selects.forEach(element=>{
                element.addEventListener("input",()=>{this.setValue();})
                                    })
    }
    pupulateData(index){
                //populate input data
                let buttons = Property.stylesTemplates;
                let value;
                value = buttons[index][this.name+this.subfix].trim();
                let arrayValue = value.split(" ");
                let hover;
                let arrayHover = [""]
                //check if hover is available
                if(buttons[index][this.name+this.subfix+"-hover"]){
                    hover = buttons[index][this.name+this.subfix+"-hover"].trim();
                    arrayHover = hover.split(" ");

                }


                this.inputControllers.forEach((controller,index)=>{
                    let value = arrayValue[index];
                    value =  value.replace(/px/,"");
                    let hover = arrayHover[index];
                    hover =  hover.replace(/px/,"");

                    //set value on input
                    controller.inputElement.children[1].value=value;
                    if(controller.hoverElement){
                        controller.hoverElement.children[1].value=hover;
                    }
                    


                })
               this.setValue();
   
    
         
    }
   setValue(){
       
        let value = "";
        let hover = "";
        //accumulate the values of the input controllers
        this.inputControllers.forEach(controller=> {
            hover+= " "+controller.hoverElement?.children[1].value+controller.unit;
            value+= " "+controller.inputElement.children[1].value+controller.unit;
        });
        //if hover turned off
        if([...this.propertyCard.classList].includes("hover-freeze")){
            hover = value;
        }
        //if card turned off
        if([...this.propertyCard.classList].includes("property-off")){
           
            value = "";
            hover = "initial";
    
        }
         //inject the values into the css variables
        document.documentElement.style.setProperty(`--${this.name}${this.subfix}`,value);
        if(hover!==""&&this.canHover===true){
            document.documentElement.style.setProperty(`--${this.name}${this.subfix}-hover`,hover);
        }
    }
  

}

export default Property;