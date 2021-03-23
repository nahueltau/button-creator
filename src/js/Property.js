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
        //this.camelCase = prop.match(/\-[a-z]/)!==null ? prop.replace(/\-[a-z]/, prop.match(/\-[a-z]/)[0].slice(1).toUpperCase()) : prop;
    }
    setValue(){
        this.value = "";
        this.hover = "";
        this._inputControllers.forEach(controller=> controller.hover ? this.hover+= " "+controller.HTMLElement.value+controller.unit : this.value+= " "+controller.HTMLElement.value+controller.unit);

           
        }
  
    injectValue(){
        document.documentElement.style.setProperty(`--${this.name}${this.subfix}`,this.value);
        if(this.hover!==""){
            document.documentElement.style.setProperty(`--${this.name}-hover`,this.hover);
        }
    }
}

export default Property;