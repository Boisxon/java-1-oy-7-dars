// const num1 = [2, 4, 9, 10, 45, 67, 8, 90] ('Boshlanishidagi array');
// console.log(num1);
// const son = [2, 4, 10, 8, 90] ('Juft sonlarga ajratilgan array');
// console.log(son);

// ("Juft sonlarga ajratilgan array")
// ("Boshlanishidagi array")



// const num1 = [2, 4, 9, 10, 45, 67, 8, 90, 52 && " Boshlanishidagi array"] ;
// console.log(num1);

// const son = [2, 4, 10, 8, 90, 42 && "Juft sonlarga ajratilgan array"];
// console.log(son);


// const num1 = [2, 4, 9, 10, 45, 67, 8, 90, "Boshlanishidagi array"];
// console.log(num1);

// const son = [2, 4, 10, 8, 90,  "Juft sonlarga ajratilgan array"];
// console.log(son);



// const num1 = [2, 4, 9, 10, 45, 67, 8, 90, "Boshlanishidagi array"];
// console.log("num1 array:");
// for (let i = 0; i < num1.length; i++) {
//   console.log(num1[i]);
// }

// const son = [2, 4, 10, 8, 90, "Juft sonlarga ajratilgan array"];
// console.log("son array:");
// for (let i = 0; i < son.length; i++) {
//   console.log(son[i]);
// }





// const userName = prompt("Ism kiriting");

// console.log(userName);



// if (userName.length > 5) {
//     alert("sizning ismingizda 5 harifdan kop")
// }else if (userName.length < 5){
//     alert("sizning ismingizda 5 hariftan kam")
// }else if (userName.length == 5){
//     alert("Sizning ismingizda 5 xarif bor")
// }           




// for (let index = 10; index >= 0; index--){
//     console.log(index)
// }




// uy ishi //

const oquvchilar = [1,52,53,2,78,54,63,45,2,4];
const juft = [];
const toq = [];


for (let index = 0; index < oquvchilar.length; index++){
    if (oquvchilar[index] % 2 == 0){
        juft.push(oquvchilar[index])
    }
    else {
        toq.push(oquvchilar[index])
    }
}
console.log(juft);
console.log(toq);


// const userPasword = +prompt("Parolingizni kiriting")
// const userLogin = +prompt("loginingizni kiriting")

// const oquvchilar = [
//     {
//        name: "Boisxon",
//        parol:5454,
//        login:4545,
//     },
//     {
//         name: "Hayot",
//         parol:2525,
//         login:5252,
//     },
//     {
//         name: "Ismoil",
//         parol:5656,
//         login:2626,
//     },
//     {
//         name: "Ibrohim",
//         parol:4545,
//         login:5454,
//     }
// ]
// for (let index = 0; index < oquvchilar.length; index++){
//     if (oquvchilar[index].parol == userPasword && oquvchilar[index].login == userLogin){
//         console.log(`${oquvchilar[index.name]} qush kelibsiz`)
//     }
// }




// for( let index = 0; index < oquvchilar.length;index++) {
//     if(oquvchilar[index].parol == userPasword && oquvchilar[index].login == userLogin) {
//       console.log(`${index.name}qush kelibsiz`);
//     }else{
//       console.log("notori kiritingiz");
//     }
//        }