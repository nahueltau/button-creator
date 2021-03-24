const showCSScode = ()=>{
    let cssViewer = document.querySelector(".css-code-container");
    cssViewer.innerHTML = "";
    let elementToShow = [{selector:"button",subfix:""},{selector:"button:hover",subfix:"-hover"},{selector:"container",subfix:"-container"}];
    let propsToShow = ["background-color","transition","cursor","border-radius","border-width","border-color","border-style","padding","color","font-size","text-transform","box-shadow"];
    for(let ele of elementToShow){

                cssViewer.innerHTML += `<span class="css-selector">.${document.querySelector("#namespace-content-config").value}${ele.selector}<span><span class="css-bracket">{<span><br>`
                propsToShow.forEach(prop=>{
                    let value = getComputedStyle(document.documentElement).getPropertyValue(`--${prop}${ele.subfix}`);
                    if(value==="inherit"){value=""}
                    if(ele.subfix==="-hover"){
                        if(getComputedStyle(document.documentElement).getPropertyValue(`--${prop}${ele.subfix}`)==getComputedStyle(document.documentElement).getPropertyValue(`--${prop}`)){
                           value=""; 
                        }

                    }
                    if(value!==""){
                         cssViewer.innerHTML += `<span class="css-prop">${prop}:<span><span class="css-value">${value}<span><span class="css-semicolon">;<span><br>`;
                    }
                       
                    
                
                })
                cssViewer.innerHTML += `<span class="css-bracket">}<span><br><br>`


    }
}
export default showCSScode;