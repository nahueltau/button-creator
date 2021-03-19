    const ColorInput = (id, title, value)=>{
          let component = document.createElement("div");
          let input = document.createElement("input");
          let label = document.createElement("label");
          label.setAttribute("for",id+"-config");
          let hoverButton = document.createElement("span");
          hoverButton.innerText = ":hover";
          input.id = id+"-config";
          
          input.type = "color";
          input.setAttribute("value",value);
          label.innerText = title;
          component.appendChild(label);
          component.appendChild(input);
          component.appendChild(hoverButton)

        return component.innerHTML;


    }
      
export default ColorInput;