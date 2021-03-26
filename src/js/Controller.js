class Controller {
    constructor({title="Default",subfix=""}){
        this.subfix = subfix;
        this.title = title;
    }
   
}
class Input extends Controller {
    constructor({unit="", title="Default", type="text",subfix="", min=null,max=null}){
        super({title, subfix});
        this.unit = unit;
        this.type = type;
        this.min = min;
        this.max = max;
        this.inputElement = null;   
        this.hoverElement = null;
        this.createInput();
    }
    createInput(){

        //create input container
        let inputContainer = document.createElement("div");
        inputContainer.classList.add("selector");

        //create label
        let label = document.createElement("label");
        /* label.setAttribute("for",this.name+this.subfix+"-config") */
        label.innerText = this.title;
        inputContainer.appendChild(label)

         //create input
        let input = document.createElement("input");
        /* input.id = this.name+this.subfix+"-config"; */
        input.setAttribute("type",this.type);
        if(this.min !==null){
            input.setAttribute("min",this.min);
            input.setAttribute("max",this.max);
        }         
        inputContainer.appendChild(input)

        //init controller
        this.inputElement = inputContainer;

        //create hover container
        let hoverContainer = inputContainer.cloneNode([true]);
        hoverContainer.classList.add("hover-container");

        //hover label
        let hoverLabel = hoverContainer.children[0];
        hoverLabel.innerText = "";
        hoverLabel.removeAttribute("for");
        
        //hover input
        let hoverInput = hoverContainer.children[1];
       /*  hoverInput.id = "hover-"+this.name+this.subfix+"-config"; */
        hoverInput.classList.add("hover-input");
              
        //init controller
        this.hoverElement = hoverContainer;

    }
}
class Select extends Controller {
    constructor({title="Default",subfix="", options=[]}){
        super({title, subfix});
        this.unit = "";
        this.options = [...options];
        this.inputElement = null;   
        this.hoverElement = null;
        this.createSelect();
    }
    createSelect(){

        //create input container
        let inputContainer = document.createElement("div");
        inputContainer.classList.add("selector");

        //create label
        let label = document.createElement("label");
        /* label.setAttribute("for",this.name+this.subfix+"-config") */
        label.innerText = this.title;
        inputContainer.appendChild(label)


        //create select
        let select = document.createElement("select");
       /*  select.id = this.name+this.subfix+"-config"; */
        inputContainer.appendChild(select)
        //create options
        this.options.forEach(option=>{
            
            let optionNode = document.createElement("option");
            optionNode.value = option.toLowerCase();
            optionNode.innerText = option;
            select.appendChild(optionNode);
        })
        //init controller
        this.inputElement = inputContainer;

    }
}
export { Input, Select };