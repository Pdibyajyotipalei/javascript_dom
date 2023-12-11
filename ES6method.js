//for in
const array1 = [5,7,4,6,3,9]
for(let indexValues in array1)
console.log(indexValues)

//for of
const array2=[1,7,5,9,4,3]
for(let myValues of array2)
console.log(myValues)
//here for of return the element of the array

//for  each
//for each return defined means nothing we have to pass the out put manually
const values =[34,67,98,56,34,76]
const valReturn = values.forEach((item) => {
//    return item
console.log(item)
})
// console.log(valReturn);

//filter

const number = [2,3,4,5,8,7,5,9]
// const newArray = number.filter((item) =>{
//     return item>5;
// })
// console.log(newArray)

const myNumbs =[]
number.forEach((num) =>{
    if(num>6){
        myNumbs.push(num)
    }
})
console.log(myNumbs)
const Books=[
     {title:'Book One',genre:'fiction',publish:1981,edition:2004},
     {title:'Book two',genre:'fiction',publish:1992,edition:2004},
     {title:'Book three',genre:'non-fiction',publish:1999,edition:2008},
     {title:'Book four',genre:'history',publish:1989,edition:2007},
     {title:'Book five',genre:'fiction',publish:2000,edition:2010},
     {title:'Book six',genre:'science',publish:1987,edition:2014},
     {title:'Book seven',genre:'history',publish:1986,edition:2010},
     {title:'Book eight',genre:'science',publish:2011,edition:2016},
     {title:'Book nine',genre:'Non-fiction',publish:1981,edition:1989},

];
const findGener = Books.filter((gn) => gn.genre === 'history')
console.log(findGener);



//map method
//if you want same kind of changes then we we use map method like 

const numSeries = [1,2,3,4,5,6,7]
// const changeData = numSeries.map((data) => {
//     return data + 2;

// })
// console.log(numSeries);
// console.log(changeData);
//chaining
const newArray = numSeries
.map((data) => data + 2)
.map((data) => data * 10)
.filter((data) => data >40)
console.log(newArray);

//reduce method

const reduceSeries =[1,2,3,4,5]
const myTotal = reduceSeries.reduce(function chaneSeries(accumulator,currentValue){
    console.log(`accumulator : ${accumulator}and ${currentValue}`)
    return accumulator + currentValue
},5)
console.log(myTotal)

//using arrowfunction
const myTotal1 = reduceSeries.reduce((acc,currval) => acc+currval,0)
console.log(myTotal1)