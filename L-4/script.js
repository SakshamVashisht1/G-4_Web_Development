// let userData = [
//     { firstName: 'Priyanshu', age: '21' },
//     { firstName: 'Pranav', age: '20' },
//     { firstName: 'Divesh', age: '23' },
// ]

// // map and filter

// let firstName = userData.map((data) => data.firstName)
// let output = userData.filter((data) => data.age > 20)

// console.log(firstName)
// console.log(output)

// PROMISES

// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("foo");
//   }, 300);
// });

// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject('I GOT PLACED')
//     }, 3000)
// })
// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject('I got rejected')
//     }, 3000)
// })

// promise
//     .then((res) => {
//         console.log(res)
//     })
//     .catch((err) => {
//         console.error('ERROR in first then: ', err)
//     })
//     .then(() => {
//         console.log('PARTY TIME')
//     })
//     .catch((err) => {
//         console.error('ERROR in second then: ', err)
//     })
//     .then(() => {
//         console.log('WORKING WORKING WORKING')
//     })
//     .catch((err) => {
//         console.error('ERROR in third then: ', err)
//     })
//     .then(() => {
//         console.log('LAYOFF')
//     })
//     .catch((err) => {
//         console.error('ERROR in fourth then: ', err)
//     })

// console.log(promise)
// console.log(promise2)

// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject('ASSIGNMENT COMPLETED BY YASH')
//     }, 2000)
// })

// const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject('ASSIGNMENT COMPLETED BY VINAYAK')
//     }, 3000)
// })

// const p3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject('ASSIGNMENT COMPLETED BY VANSH')
//     }, 5000)
// })

// const p4 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject('ASSIGNMENT COMPLETED BY GARG')
//     }, 4000)
// })

// Promise.all([p1, p2, p3, p4])
//     .then((res) => {
//         console.log(res)
//     })
//     .catch((err) => {
//         console.log('ERROR OCCURED: ', err)
//     })

// Promise.allSettled([p1, p2, p3, p4])
//     .then((res) => {
//         console.log(res)
//     })
//     .catch((err) => {
//         console.log('ERROR OCCURED: ', err)
//     })

// Promise.race([p1, p2, p3, p4])
//     .then((res) => {
//         console.log(res)
//     })
//     .catch((err) => {
//         console.log('ERROR OCCURED: ', err)
//     })

// Promise.any([p1, p2, p3, p4])
//     .then((res) => {
//         console.log(res)
//     })
//     .catch((err) => {
//         console.log('ERROR OCCURED: ', err)
//     })

// ASYNC AWAIT

// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('ASSIGNMENT COMPLETED BY VANSH')
//     }, 2000)
// })

// async function checkAssignment() {
//     const dataAssignment = await p1
//     console.log('Checking ASSIGNMENT: ', dataAssignment)
// }

// checkAssignment()

// FETCH

async function fetchProducts() {
    try {
        const res = await fetch('https://dummyjson.com/products')
        const data = await res.json()

        const products = data.products.map((product) => ({
            title: product.title,
            description: product.description,
            price: product.price,
        }))

        console.log(products)

        const productsContainer = document.getElementById('products')
        let htmlContent = ''

        products.forEach((product) => {
            htmlContent += `
                <div>
                    <h3>${product.title}</h3>
                    <p>${product.description}</p>
                    <p>Price: $${product.price}</p>
                </div>
            `
        })

        productsContainer.innerHTML = htmlContent
    } catch (err) {
        console.log('ERROR OCCURED: ', err.message)
    }
}

fetchProducts()