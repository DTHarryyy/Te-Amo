// functionality for notification display and hide it
function closeNotif(){
    const notif = document.querySelector(".notificationCon");
    $(".notificationCon").fadeOut(200, ()=>{
        notif.style.display = "none";
    })
}
function showNotif(){
    const notif = document.querySelector(".notificationCon");
    $(".notificationCon").fadeIn(200, ()=>{
        notif.style.display = "block";
    })
}



function displaySection(){
    const taskCon = document.querySelector(".displaySec");
    if (taskCon.style.display === 'none' || taskCon.style.display === '') {
        $(".displaySec").fadeIn(400, ()=>{
            taskCon.style.display = 'flex';
        })
    } else {
        $(".displaySec").fadeOut(400, ()=>{
            taskCon.style.display = 'none';
        })
    }
}
window.addEventListener("DOMContentLoaded", ()=>{
    const loading = document.querySelector(".loadingCon");
    loading.style.display = 'none' 
})


$(".displaySec").on("click", (e)=>{
    const taskCon1 = document.querySelectorAll(".taskContainer")[0];
    const taskCon2 = document.querySelectorAll(".taskContainer")[1];
    const taskCon3 = document.querySelectorAll(".taskContainer")[2];

    const btn = document.querySelector(".displaySec");
    if(e.target.classList.contains("oneBtn")){
        taskCon1.style.display = 'block';
        taskCon2.style.display = 'none';
        taskCon3.style.display = 'none';
        
        btn.style.display = "none"
    }
    else if(e.target.classList.contains("twoBtn")){
        taskCon1.style.display = 'none';
        taskCon2.style.display = 'block';
        taskCon3.style.display = 'none';
    
        btn.style.display = "none"
    }
    else if(e.target.classList.contains("threeBtn")){
        taskCon1.style.display = 'none';
        taskCon2.style.display = 'none';
        taskCon3.style.display = 'block';
        btn.style.display = "none"
    }
    
})