    const RangeInput = (id, title, value, min, max)=>{
          let component = document.createElement("div");
          let input = document.createElement("input");
          let label = document.createElement("label");
          label.setAttribute("for",id+"-config");
          input.id = id+"-config";
          
          input.type = "range";
          input.min = min;
          input.max = max;
          input.setAttribute("value",value);
          label.innerText = title;
          component.appendChild(label);
          component.appendChild(input);

        return component.innerHTML;


    }
      
export default RangeInput;