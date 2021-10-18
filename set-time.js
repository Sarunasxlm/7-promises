async function setTime(time) {
 
return new Promise((resolve, reject) =>{
   setTimeout(() => {
       resolve(time + 's');
    }, 1000);
});
};

(async () => {
console.log("start");
const ats1 = await setTime(1);
console.log(ats1);
const ats2 = await setTime(2);
console.log(ats2);
const ats3 = await setTime(3);
console.log(ats3);
console.log("done");
})()


// async function accountant(money1, money2) {

//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (Math.random() > 0.5) {
//                 resolve(money1 + money2);
//             } else {
//                 reject(new Error('Vejas nupute'))
//             }
//         }, 1000);
//     });
// };

// (async () => {
//     console.log("start");
// try {
//         const ats1 = await accountant(20, 20);
//     console.log(ats1);

//     const ats2 = await accountant(ats1, 50);
//     console.log(ats2);
// } catch (error) {
//     console.log(error)
// };


//     console.log("done");
// })()
