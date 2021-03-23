class Controller {
    constructor(id,{unit="",hover=false}={}){
        this.id = id;
        this.unit = unit;
        this.hover = hover;
        this.HTMLElement = document.querySelector(hover ?this.id.replace("#","#hover-"):this.id);   
    }
}
export default Controller;