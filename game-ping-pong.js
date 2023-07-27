const body = document.querySelector("body");
const form = document.createElement("form");
const div1 = document.createElement('div');
const div2 = document.createElement('div');
const div3 = document.createElement('div');
const div4 = document.createElement('div');
const div5 = document.createElement('div');
const div6 = document.createElement('div');


const btnPlusOne = document.createElement("button");
const btnPlusTwo = document.createElement("button");
const btnReset = document.createElement("button");
const counterDisplayOne = document.createElement("h1");
const counterDisplayTwo = document.createElement("h1");
const video1 = document.createElement('video');
const round = document.createElement('h3');

body.appendChild(div1)
body.appendChild(div2)
body.appendChild(div3)
body.appendChild(div4)


div1.appendChild(video1);

div2.appendChild(counterDisplayOne);
div2.appendChild(counterDisplayTwo);

div4.appendChild(div5)
div4.appendChild(div6)

div5.appendChild(form);
div5.appendChild(btnPlusOne);
div5.appendChild(btnPlusTwo);
div6.appendChild(btnReset);



counterDisplayOne.innerText = 0;
counterDisplayTwo.innerText = 0;

let options = [
  { value: 3, text: "3" },
  { value: 5, text: "5" },
  { value: 7, text: "7" },
  { value: 10, text: "10" },
  { value: 15, text: "15" },
];

function createSelect(optionsList) {
  let select = document.createElement("select");

  for (let i = 0; i < optionsList.length; i++) {
    const element = optionsList[i];
    let option = document.createElement("option");
    option.setAttribute("value", element.value);
    option.innerText = element.text;
    select.appendChild(option);
  }

  return select;
}

const select = createSelect(options);
form.appendChild(select);

let counterOne = 0;
let counterTwo = 0;

btnPlusOne.addEventListener("click", () => {
  if (counterOne < selectValue) {
    counterOne++;
    counterDisplayOne.innerText = counterOne;
  }
});

btnPlusTwo.addEventListener("click", () => {
  if (counterTwo < selectValue) {
    counterTwo++;
    counterDisplayTwo.innerText = counterTwo;
  }
});

btnReset.addEventListener("click", () => {
  counterDisplayOne.innerText = 0;
  counterDisplayTwo.innerText = 0;
  counterOne = 0;
  counterTwo = 0;
});

let selectValue = 3;
select.addEventListener("change", () => {
  selectValue = document.querySelector("select").value;
});
div3.appendChild(round)
div3.appendChild(select);
//style

round.innerHTML=`Rondas `
round.style=`background-color:transparent; color:#27FF32; font-size:30px;font-weight: bold;font-family: 'Courier New', Courier, monospace;`
select.style=`color:#00e00f;text-align:center;font-size:30px;background-color:transparent; height:40px;border:none;font-weight: bold;font-family: 'Courier New', Courier, monospace;`


body.style=`display:flex; flex-direction:column;min-width:1180px; align-items:center;background-image: url(./img/fondo1.jpg);background-repeat:no-repeat;background-size: cover; `
div1.style=`margin-top: 2%;border-radius:5px;display:flex; flex-direction: column;align-items:center;width:300px; height:150px;`// background-image: url(./img/pingpong.png);background-repeat:no-repeat;background-size: cover; background-position: center;`
div3.style=`display:flex; flex-direction: row;align-items:center; margin-top: 2%; gap:1rem`

div2.style=`margin-top: 2%;width:300px;height:150px; display:flex; justify-content: space-around`
div4.style=`width:700px; display:flex; justify-content:space-around;margin-top:2%;  `
div5.style=`display:flex; flex-direction:row;gap:70px;`
div6.style=`display:flex;justify-content:end; align-items:center`

video1.src = `video.mp4`;
video1.autoplay=true;
video1.loop=true;
video1.style.objectFit =`cover`;
video1.style = `
position: center;
top: 0;
left: 0;
width: 150%;
height: 160%;
object-fit: cover;
z-index: 0;`


counterDisplayOne.style=`font-weight:bold;color:white;font-size:100px;`
counterDisplayTwo.style=`font-weight:bold;color:white;font-size:100px;`


btnPlusOne.innerText=`Player 1`
btnPlusOne.style=`
padding: 17px 40px;
font-weight:bold;
border-radius: 10px;
border: 0;
background-color: rgb(56, 129, 255);
letter-spacing: 1.5px;
font-size: 15px;
transition: all .3s ease;
box-shadow: rgb(46, 46, 201) 0px 10px 0px 0px;
color: hsl(0, 0%, 100%);`

btnPlusTwo.innerText=`Player 2`
btnPlusTwo.style=`
padding: 17px 40px;
font-weight:bold;
border-radius: 10px;
border: 0;
background-color: rgb(255, 56, 86);
letter-spacing: 1.5px;
font-size: 15px;
transition: all .3s ease;
box-shadow: rgb(186, 29, 52) 0px 10px 0px 0px;
color: hsl(0, 0%, 100%);`
btnReset.innerText=`Reset`
btnReset.style=`
font-size: 18px;
font-weight:bold;
  display: inline-block;
  outline: 0;
  border: 0;
  cursor: pointer;
  will-change: box-shadow,transform;
  background: radial-gradient( 100% 100% at 100% 0%, #89E5FF 0%, #ffe44e 100% );
  box-shadow: 0px 0.01em 0.01em rgb(45 35 66 / 40%), 0px 0.3em 0.7em -0.01em rgb(45 35 66 / 30%), inset 0px -0.01em 0px rgb(58 65 111 / 50%);
  padding: 0 2em;
  border-radius: 0.3em;
  color: #fff;
  height: 2.6em;
  text-shadow: 0 1px 0 rgb(0 0 0 / 40%);
  transition: box-shadow 0.15s ease, transform 0.15s ease;`
