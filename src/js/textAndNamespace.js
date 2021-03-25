export default function textAndNamespace(){

    let button = document.querySelector(".container button");
    let namespacePlaces = document.querySelectorAll(".namespace-place");
    let buttonTextContent = document.querySelector("#text-content-config")
    let namespaceContent = document.querySelector("#namespace-content-config")
    function textContentUpdate(){
        button.innerText =  buttonTextContent.value;
    };
    function namespaceContentUpdate(){
        namespacePlaces.forEach(e=>e.innerText = namespaceContent.value);
    };
    namespaceContentUpdate();
    textContentUpdate();
    namespaceContent.addEventListener("input",namespaceContentUpdate);
    buttonTextContent.addEventListener("input",textContentUpdate);


}