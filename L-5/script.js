// function welcomeStudents(welcomeMessage, goodbyeMessage) {
//     console.log(
//         welcomeMessage +
//             ' ' +
//             this.studentName +
//             ' is a student of class ' +
//             this.studentClass +
//             ' ' +
//             goodbyeMessage
//     )
// }

// const student1 = {
//     studentName: 'Yash',
//     studentClass: 'G4',
// }
// const student2 = {
//     studentName: 'Arnav',
//     studentClass: 'G6',
// }

// // CALL

// welcomeStudents.call(student1, 'Good Morning', 'Bye')
// welcomeStudents.call(student2, 'Good Evening', 'Tata Bye Bye')

// // APPLY

// welcomeStudents.apply(student1, ['Good Morning', 'Bye'])
// welcomeStudents.apply(student2, ['Good Evening', 'Tata Bye Bye'])

// // BIND
// const s1 = welcomeStudents.bind(student1, 'Good Morning', 'Bye')
// const s2 = welcomeStudents.bind(student2, 'Good Evening', 'Tata Bye Bye')

// s1()
// s2()

// // NORMAL FUNCTION

// function sumOfThree(a, b, c) {
//     console.log(a + b + c)
// }

// sumOfThree(1, 2, 3)

// // CURRIED FUNCTION

// function sumOfThree(a) {
//     return function (b) {
//         return function (c) {
//             return a + b + c
//         }
//     }
// }

// console.log(sumOfThree(2)(4)(6))

// EVENT CAPTURING & EVENT BUBBLING

const grandParent = document.getElementById('grandParent')
const parent = document.getElementById('parent')
const child = document.getElementById('child')

// grandParent.addEventListener('click', () => {
//     console.log('GRANDPARENT CLICKED')
// })

// parent.addEventListener('click', () => {
//     console.log('PARENT CLICKED')
// })

// child.addEventListener('click', () => {
//     console.log('CHILD CLICKED')
// })

grandParent.addEventListener(
    'click',
    () => {
        console.log('GRANDPARENT CLICKED')
    },
    true
)

parent.addEventListener(
    'click',
    () => {
        console.log('PARENT CLICKED')
    },
    true
)

child.addEventListener(
    'click',
    () => {
        console.log('CHILD CLICKED')
    },
    true
)