class Property{
    constructor(prop,[...controllersArray],{selector="button",stylesheet="button",subfix=""}={}){
        this.name = prop;
        this.subfix = subfix;
        this.selector = selector;
        this.stylesheet = stylesheet;
        this._inputControllers = [...controllersArray]
        this.value = "";
        this.hover = "";
        this.active = "";
    }
   setValue(){
       
        this.value = "";
        this.hover = "";
        this._inputControllers.forEach(controller=> {
            controller.hover ? this.hover+= " "+controller.HTMLElement.value+controller.unit : this.value+= " "+controller.HTMLElement.value+controller.unit;
        });
        
        if([...this._inputControllers[0].HTMLElement.parentElement.parentElement.classList].includes("hover-freeze")){
            this.hover = this.value;
        }

        if([...this._inputControllers[0].HTMLElement.parentElement.parentElement.classList].includes("property-off")){
           
            this.value = "";
            this.hover = "initial";
    
        }
           
        }
  
    injectValue(){
        
        document.documentElement.style.setProperty(`--${this.name}${this.subfix}`,this.value);
        if(this.hover!==""){
            document.documentElement.style.setProperty(`--${this.name}-hover`,this.hover);
        }

    }
}

export default Property;