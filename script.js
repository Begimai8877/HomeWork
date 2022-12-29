// метод перебора  массив foreach. он ничего не возвращает.

// let arr = [1,2,3,3,4,5]

// let newArr = arr.foreach((el) =>{
//     if(el === 3){
//         console.log("a")
//     }else{
//         console.log(el)
//     }
// })

// let arr = [1, 2, 3 , 4, 5, "hello"]

// 3. filter. Перебирает массив. Возвращает новый массив с нужным количеством данных.

// let arr = [1, 2, 3, 4, 5]

// letnewArr = arr.filter((el,idx,a) =>{

// })

// 4. find. перебирает массив. возвращает первый элемент который подходит по условию.find
// возвращает тот тип данных который у элемента. 

// let a = Math.min(1,2,3,4)

// console.log(a)

// let a = Math.max(1,2,3,4)

// console.log(a)

// Math.min () из нескольких чисел выводит самое минималное let a = Math.min(1,2,3,4)
// Math.max () из нескольких чисел выводит самое максимальное let a = Math.max(1,2,3,4)

// 5. reduce. Метода который перебирает массив и возвращает нужный тип данных. 

let arr = [1, -4, 7, 12]
let newArr = arr.filter((el) =>{
    return el>0
})

let sum = newArr.reduce((acc,rec) =>{
    return acc + "" + rec
}, 0)

console.log (sum)

let name = "vanya"

let str = ""


// git init 
// git add .
// git commit -m "название"
// git push

