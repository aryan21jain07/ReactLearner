
function customRender(reactElement, container){

//     const domElemment = document.createElement(reactElement.type)
//     domElemment.innerHTML = reactElement.children
//     domElemment.setAttribute("href", reactElement.props.href)
//     domElemment.setAttribute("target", reactElement.props.target)
//     container.appendChild(domElemment)
// }

 const domElemment = document.createElement(reactElement.type)
    domElemment.innerHTML = reactElement.children
    for(const prop in reactElement.props){
        domElemment.setAttribute(prop, reactElement.props[prop])
    }
  container.appendChild(domElemment)

}
const reactElement = {
    type : "a",
    props:{
        href :"https://www.google.com", 
        target :'_blank'
    },
     children : " click me to visit google "
}


const mainContainer = document.querySelector("#root") 

customRender(reactElement, mainContainer)