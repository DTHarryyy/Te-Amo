updateTaskCounter()
function updateTaskCounter(){
    const ul = document.querySelectorAll(".taskContainer");
    ul.forEach((e)=>{
        const li = e.querySelectorAll("li").length;
        let span = e.querySelector(".taskCounter");
        span.textContent = li;
    })
}
const ul = document.querySelectorAll(".listOfTask");
ul.forEach(element => {
    element.addEventListener("click", (e)=>{
        if(e.target.classList.contains("taskClicked")){
            let ul = e.target.parentNode;
    
            let li = document.createElement("li");
            ul.insertBefore(li, ul.lastElementChild);

            let p = document.createElement("p");

            p.textContent = "This is an editable list item.";
            p.setAttribute("contenteditable", "true")
            li.appendChild(p)
            let deleteBtn = document.createElement("i");
            deleteBtn.classList.add("ri-close-line", "removeTask");
            li.appendChild(deleteBtn);  

            updateTaskCounter();
            saveData();
        }
        if(e.target.classList.contains("removeTask")){
            let li = $(e.target).parent();
            setTimeout(()=>{
                li.fadeOut(()=>{
                    li.remove();
                    updateTaskCounter();
                    saveData();
                });
            },500)
        }
    })
});
function saveData() {
    const headers = document.querySelectorAll(".textHeader");
    const headerData = Array.from(headers).map(header => header.textContent);
    localStorage.setItem("textHeaders", JSON.stringify(headerData));

    const containers = document.querySelectorAll(".taskContainer");
    const listData = Array.from(containers).map(container => ({
        header: container.querySelector(".textHeader").textContent,
        tasks: container.querySelector(".listOfTask").innerHTML
    }));
    localStorage.setItem("listData", JSON.stringify(listData));

    // local save task Counter
    const taskContainers = document.querySelectorAll(".taskContainer");
    // Loop through each task container
    taskContainers.forEach((container, index) => {
        const counter = container.querySelector(".taskCounter").textContent;
        // Save the counter value in localStorage, using the index to distinguish between different containers
        localStorage.setItem(`taskCounter_${index}`, counter);
    });
}

function loadData() {
    const storedHeaders = localStorage.getItem("textHeaders");
    if (storedHeaders) {
        const headerData = JSON.parse(storedHeaders);
        const headers = document.querySelectorAll(".textHeader");
        headers.forEach((header, index) => {
            if (headerData[index]) {
                header.textContent = headerData[index];
            }
        });
    }

    const storedListData = localStorage.getItem("listData");
    if (storedListData) {
        const listData = JSON.parse(storedListData);
        const containers = document.querySelectorAll(".taskContainer");
        containers.forEach((container, index) => {
            if (listData[index]) {
                const { header, tasks } = listData[index];
                container.querySelector(".textHeader").textContent = header;
                container.querySelector(".listOfTask").innerHTML = tasks;
            }
        });
    }
    
    // local save task counter
    const taskContainers = document.querySelectorAll(".taskContainer");

    // Loop through each task container
    taskContainers.forEach((container, index) => {
        // Get the saved counter value from localStorage
        // const savedCounter = localStorage.getItem(`taskCounter_${index}`);

        if (savedCounter !== null) {
            // Set the taskCounter's text content to the saved value
            container.querySelector(".taskCounter").textContent = savedCounter;
        }
    });
}


window.addEventListener('beforeunload', saveData);
window.addEventListener('DOMContentLoaded', loadData);
