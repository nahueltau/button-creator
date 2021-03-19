const getDOMInputs = ()=>{
    let DOMInputs = {
        containerBackground: document.querySelector("#background-container-config"),
        textContent: document.querySelector("#text-content-config"),
        borderRadius: document.querySelector("#border-radius-config"),
        borderWidth: document.querySelector("#border-width-config"),
        borderColor: document.querySelector("#border-color-config"),
        borderStyle: document.querySelector("#border-style-config"),
        paddingX: document.querySelector("#padding-x-config"),
        paddingY: document.querySelector("#padding-y-config"),
        backgroundColor: document.querySelector("#background-color-config"),
        textColor: document.querySelector("#text-color-config"),
        fontSize: document.querySelector("#font-size-config"),
        textTransform: document.querySelector("#text-transform-config"),
        boxShadowX: document.querySelector("#shadow-x-config"),
        boxShadowY: document.querySelector("#shadow-y-config"),
        boxShadowBlur: document.querySelector("#shadow-blur-config"),
        boxShadowColor: document.querySelector("#shadow-color-config")
    }
    return DOMInputs;
}
export default getDOMInputs;