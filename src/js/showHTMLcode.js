const showHTMLcode = ()=>{
    let htmlViewer = document.querySelector(".html-code-container");
    let viewCode =  document.querySelector(".container").outerHTML;
    htmlViewer.innerText = viewCode;
}
export default showHTMLcode;