function selectText(containerClass,event) {
    if(document.querySelector(".tooltip")===null){
    if (window.getSelection) {

        let range = document.createRange();
        range.selectNode(document.querySelector("."+containerClass));
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);
        
        document.execCommand('copy');
        range.selectNode(document.querySelector("svg"));
 
    }
    let e = event;
    event.target.parentElement.classList.add("tooltip");
    setTimeout(()=>{
        document.querySelector(".tooltip").classList.add("tooltip-fade");}
        ,700)
    setTimeout(()=>{
        document.querySelector(".tooltip").classList.remove("tooltip","tooltip-fade")}
        ,1000)
}}
document.querySelector(".html-select-icon").addEventListener("click",(e)=>{
    selectText('html-code-container',e)
})
document.querySelector(".css-select-icon").addEventListener("click",(e)=>{
    selectText('css-code-container',e)
})
