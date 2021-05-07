const showHTMLcode = ()=>{
    let buttonText = document.querySelector(".html-button-text");
    let viewCode =  document.querySelector("#text-content-config").value;
    buttonText.innerText = viewCode;
}
export default showHTMLcode;