$(".otherWeb").on("click", (e)=>{
    const main = document.querySelector("#mainContents");
    const other = document.querySelector("#otherWebSec");
    if(e.target.classList.contains("otherSites")){
        $("#mainContents").fadeOut(400, ()=>{
            main.style.display = "none";
        })
        setTimeout(()=>{
            $("#otherWebSec").fadeIn(2000, ()=>{
                other.style.display = "flex";
            })
        },800)
        e.target.classList = "";
        e.target.classList.add("ri-home-5-line", "backToHome");
    }
    else if(e.target.classList.contains("backToHome")){
        $("#mainContents").fadeIn(2000, ()=>{
            main.style.display = "flex";
        })
        $("#otherWebSec").fadeOut(400, ()=>{
            other.style.display = "none";
        })
        main.style.display = "flex";
        other.style.display = "none"
        e.target.classList = "";
        e.target.classList.add("ri-apps-2-add-line", "otherSites");
    }
})