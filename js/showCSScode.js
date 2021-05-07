const showCSScode = ()=>{
    //SELECT CONTAINER
    let cssViewer = document.querySelector(".css-code-container");
    //EMPTY CONTAINER
    cssViewer.innerHTML = "";
    //ELEMENTS & PROPS TO SHOW
    let elementToShow = [{selector:"button",subfix:""},{selector:"button:hover",subfix:"-hover"},{selector:"container",subfix:"-container"}];
    let propsToShow = ["background-color","transition","cursor","border-radius","border-width","border-color","border-style","padding","color","font-size","text-transform","box-shadow"];
    for(let ele of elementToShow){
                //SELECTOR
                cssViewer.innerHTML += `<span class="css-selector">.${document.querySelector("#namespace-content-config").value}${ele.selector}<span><span class="css-bracket">{<span><br>`
                //PROPS
                propsToShow.forEach(prop=>{
                    //GET VALUE FROM STYLESHEET
                    let value = getComputedStyle(document.documentElement).getPropertyValue(`--${prop}${ele.subfix}`);
                    //EMPTY VALUE IF NOT SET
                    if(value==="inherit"){value=""}
                    //CHECK IF HOVER VALUE EXISTS
                    if(ele.subfix==="-hover"){
                        //EMPTY VALUE IF HOVER VALUE IS THE SAME AS MAIN VALUE
                        if(getComputedStyle(document.documentElement).getPropertyValue(`--${prop}${ele.subfix}`)==getComputedStyle(document.documentElement).getPropertyValue(`--${prop}`)){
                           value=""; 
                        }

                    }
                    //IF VALUE EXISTS, ADD RULE TO HTML   
                    if(value!==""){
                         cssViewer.innerHTML += `<span class="css-prop">${prop}:<span><span class="css-value">${value}<span><span class="css-semicolon">;<span><br>`;
                    }
                       
                    
                
                })
                //CLOSE SELECTOR
                cssViewer.innerHTML += `<span class="css-bracket">}<span><br><br>`


    }
}
export default showCSScode;