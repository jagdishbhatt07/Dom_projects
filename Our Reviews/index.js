let arr = [
    {
        id: 1,
        image: "abhi.jpeg",
        name:"Abhishek Gupta",
        job:"Founder & EX-CEO",
        description:"Genius is equally distributed, opportunities are not. Imagine, getting bright youth from rural areas, youth bereft of any opportunities."
    },
      {
        id: 2,
        image: "elon.jpeg",
        name:"Elon Musk",
        job:"CEO of Tesla",
        description:"Elon Musk was born in the year 1971 in South Africa. He is best known for co-founding Tesla Motors and SpaceX, but he first got his wealth as a PayPal co-founder. Tony Stark, the fictional character created, was heavily influenced by Musk (a.k.a. Iron Man)"
    },
      {
        id: 3,
        image: "mentor.jpeg",
        name:"Shivansh Rawat",
        job:"Software developer",
        description:"I'am from Srinagar Garhwal Uttarakhand ,I switched after completing graduation from Science to a Frontend developer. Seeing how a person can grow in the software industry if he/she puts efforts."

    },
      {
        id: 4,
        image: "micro.jpeg",
        name:"Satya Nadella",
        job:"CEO of Microsoft",
        description:"Satya Nadella (born August 19, 1967, Hyderabad, India) Indian-born business executive who was CEO of the computer software company Microsoft (2014– ).  engineering at Mangalore University (B.Sc., 1988)"
    },
      {
        id: 5,
        image: "download.jpeg",
        name:"Sunil Patil'",
        job:" tea stall",
        description:" Dolly, a chaiwala in Nagpur, gained social media fame for his unique chai preparation style. He collaborated with Bill Gates, impressed him with his skills, and uses theatrics to attract customers and boost his tea stall business."

    },
]


const photo = document.querySelector("#person-img");

// console.log(photo)
const author = document.querySelector(".name");
// console.log(author)
const job = document.querySelector(".job");
const info = document.querySelector(".description");

const left = document.querySelector(".left");
const right = document.querySelector(".right");
const random = document.querySelector(".random")


let currentItem = 0;

window.addEventListener("DOMContentLoaded", function () {

  showPerson();
});



function showPerson() {
  const item = arr[currentItem];
  photo.src = item.image;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.description;
}



right.addEventListener("click", () => {
  currentItem++;
  if (currentItem > arr.length - 1) {
    currentItem = 0;
  }
  showPerson();
});



left.addEventListener("click", () => {
  currentItem--;
  if (currentItem < 0) {
    currentItem = arr.length - 1;
  }
  showPerson();
});


random.addEventListener("click", () => {
  currentItem = Math.floor(Math.random() * arr.length);
  showPerson();

  console.log(currentItem);
});