// let count = 0;

// function Add(){
//     console.log('App 호출됨');
//     const [Alarms, setAlarms] = useState([]);
    
//     const addInputHandler = (enteredValue)
// }

// const btns = document.addEventListener(".tab-btn");
// const about = document.addEventListener(".about");


// about.addEventListener("click", function (e){
// //   const id = e.target.dataset.id;
//   if (id) {
//     btns.forEach(function (btn) {
//         btn.classList.remove("active");
//         e.target.classList.add("active");

//     });
//     articles.forEach(function(article){
//         article.classList.remove('active')
//     })
//     const element = document.getElementById(id);
//     element.classList.add("active");
//   }
// })
// let count = 0;

// function Add(){
//     console.log('App 호출됨');
//     const [Alarms, setAlarms] = useState([]);
    
//     const addInputHandler = (enteredValue)
// }




// const btns = document.quertSelecotrAll(".tab-btn");
// const about = document.querySelector(".about");


// about.addEventListener("click", function (e){
// //   const id = e.target.dataset.id;
//   if (id) {
//     btns.forEach(function (btn) {
//         btn.classList.remove("active");
//         e.target.classList.add("active");

//     });
//     articles.forEach(function(article){
//         article.classList.remove('active')
//     })
//     const element = document.getElementById(id);
//     element.classList.add("active");
//   }
// })


const alert = document.querySelector(".alert");
const form = document.querySelector(".alarm-form");
const alarm = document.getElementById("alarm");
const addalarmBtn = document.querySelector(".add-btn");
const deletealarmBtn = document.querySelector(".delete-btn");
const container = document.querySelector(".alarm-container");
const list = document.querySelector(".alarm-list");
const clearBtn = document.querySelector(".clear-btn");

let editElement;
let editFlag = false; //?
let editID = "";

form.addEventListener('add', addAlarm); 

//알람을 추가하면 추가되었습니다, 라는 알림창 뜨고
//알람이 울리면 빨간색 경고등 뜨고
function addAlarm(e){
    e.preventDefault();  //?
    // console.log(alarm.value);
    const value = alarm.value;
    const id = new Date().getTime().toInt();    //약간의 치팅
    console.log(id);
    if(value !== '' && editFlag === false){
        console.log("add item to the list");
    }else if(value !== '' && editFlag === true){
        console.log("editing");
    }else{
        console.log("please check your time", "danger");
    }
}
 
//display alert
function displayAlert(text, action){
    alert.textContent = text;
    alert.classList.add(`alert-${action}`);
}