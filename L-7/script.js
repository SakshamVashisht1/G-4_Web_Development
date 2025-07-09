// console.log('SCRIPT START')

// const grandParent = document.getElementById('grandParent')
// const parent = document.getElementById('parent')
// const child = document.getElementById('child')

// grandParent.addEventListener('click', (event) => {
//     console.log('THIS IS RED BLOCK')
//     event.stopPropagation()
// }, false)
// parent.addEventListener('click', () => {
//     console.log('THIS IS GREEN BLOCK')
// })
// child.addEventListener('click', () => {
//     console.log('THIS IS BLUE BLOCK')
// })

// const productList = document.getElementById("productList");

// productList.addEventListener("click", (event)=>{
//     // console.log("Products");
//     if(event.target.tagName === "LI"){
//         console.log("Clicked on : ", event.target.textContent);
//     }
// })

// If i want to add a new element.

// const newElement = document.createElement("li");
// newElement.textContent = "Bottle";
// productList.appendChild(newElement);

///////////////////////////////////////////////////////////////////

const textBox = document.getElementById('textBox')
let debounceTimeout
textBox.addEventListener('input', (event) => {
    clearTimeout(debounceTimeout)
    debounceTimeout = setTimeout(() => {
        console.log('Searched for : ', event.target.value)
    }, 300)
})