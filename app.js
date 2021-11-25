// //   arguments=process.argv.slice(2)
// // const sum=arguments.reduce((acc,val)=>Number(acc)+Number(val))
// // console.log(sum)


// // const fs = require("fs")//globale module
// // var contents = fs.readFileSync(process.argv[2])  

// // const read= fs.readFileSync('./work.js')
// // //console.log(read.toString())
// // const arrayOfStrings=content.toString().split("\n")
// // console.log(arrayOfStrings.length - 1)


// const fs = require("fs")//globale module
// fs.readFile(process.argv[2],'utf8',(err,data)=>{
    
// })  


// //console.log(read.toString())
// const arrayOfStrings=content.toString().split("\n")
// console.log(arrayOfStrings.length - 1)

const buf = Buffer.from('Hey!')
console.log(buf)

const buff = Buffer.from('Hey!')
console.log(buff[0]) //72
console.log(buff[1]) //101
console.log(buff[2]) //121