import "./index.css";

function helloComponent() {
    const element = document.createElement("h1");
    element.innerHTML = "Hello from Webpack and DW and others!!";

    return element;
}

document.getElementsByTagName("main")[0].appendChild(helloComponent());