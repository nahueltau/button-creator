    const Input = (type,id, title, value, min, max)=>{
          let component = document.createElement("div");
          let input = document.createElement("input");
          let label = document.createElement("label");
          
          input.id = id+"-config";
          input.setAttribute("value",value);
          input.value = value;
          input.type = type;
          input.min = min;
          input.max = max;
          
          label.innerText = title;
          component.appendChild(label);
          component.appendChild(input);
          label.setAttribute("for",id+"-config");
        return component.innerHTML;


    }
      
export default Input;