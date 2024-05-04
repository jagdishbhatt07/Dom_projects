// const hex=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
// const btn =document.getElementById('btn')
// const color = document.querySelector('.color');
// btn.addEventListener('click',function(){
//     let hexcolor='#';
//     for (let i=0;i<6;i++){
//         hexcolor+=hex[getrandomnumber()]
//     }
//     color.textContent=hexcolor;
//     document.body.style.backgroundColor=hexcolor;
     
// });
// function getrandomnumber(){
//     return Math.floor(math.random()*hex.length)
// }
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");
const div= document.querySelector("main");

btn.addEventListener("click", function () {
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
        hexColor += hex[getRandomNumber()];
    }

    color.textContent = hexColor;
    div.style.backgroundColor = hexColor;
});

function getRandomNumber() {
    return Math.floor(Math.random() * hex.length)
};