const updateCode = (addHoverFunction,load)=>{
    showHTMLcode();
    showCSScode(addHoverFunction,load);
}

//HTML CODE SHOW
const showHTMLcode = ()=>{
    let htmlViewer = document.querySelector(".html-code-container");
    let viewCode =  document.querySelector(".container").outerHTML;
    htmlViewer.innerText = viewCode;
}
//CSS SHOW CODE
const showCSScode = (addHoverFunction,load)=>{
    let cssViewer = document.querySelector(".css-code-container");
    cssViewer.innerHTML = "";
    let elementToShow = [{selector:".button",subfix:""},{selector:".button:hover",subfix:"-hover"},{selector:".container",subfix:"-container"}];
    let propsToShow = ["background-color","transition","cursor","border-radius","border-width","border-color","border-style","padding","color","font-size","text-transform","box-shadow"];
    for(let ele of elementToShow){

                cssViewer.innerHTML += `<span class="css-selector">${ele.selector}<span><span class="css-bracket">{<span><br>`
                propsToShow.forEach(prop=>{
                    let value = getComputedStyle(document.documentElement).getPropertyValue(`--${prop}${ele.subfix}`);
                    if(ele.subfix==="-hover"){
                        if(getComputedStyle(document.documentElement).getPropertyValue(`--${prop}${ele.subfix}`)==getComputedStyle(document.documentElement).getPropertyValue(`--${prop}`)){
                         value="";   
                        }else{
                            if(load===true){
                                    let addHoverButtons = document.querySelectorAll(".add-hover");
                            addHoverButtons.forEach(e=>{
                                if(e.getAttribute("data-bind")===prop){
                                    addHoverFunction(e);
                                }
                               
                            })
                            load = false;
                            }
                        
                        }
                        
                    }
                    if(value!==""){
                         cssViewer.innerHTML += `<span class="css-prop">${prop}:<span><span class="css-value">${value}<span><span class="css-semicolon">;<span><br>`;
                    }
                       
                    
                
                })
                cssViewer.innerHTML += `<span class="css-bracket">}<span><br><br>`


    }
}
export default updateCode;