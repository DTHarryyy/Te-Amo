// change background color
addEventListener("DOMContentLoaded", ()=>{
    const colorPicker = document.getElementById('colorBox');
    const color = localStorage.getItem("background");
    if(color){
        document.body.style.backgroundColor = color;
        colorPicker.value = color;
    }

    // Load saved color from local storage when the page loads
    colorPicker.addEventListener("input", ()=>{
        const selectedColor = colorPicker.value;
        localStorage.setItem("background", selectedColor);
        document.body.style.backgroundColor = selectedColor;
    })
})

//container color functionality
addEventListener("DOMContentLoaded", ()=>{
    const color = document.getElementById("colorBox2");
    const data = localStorage.getItem("colorContainer");
    
    color.addEventListener("input", ()=>{
        const selectedColor = color.value;
        localStorage.setItem("colorContainer", selectedColor);
        document.documentElement.style.setProperty("--white", selectedColor);
    })

    if(data){
        color.value = data;
        document.documentElement.style.setProperty("--white", data);
    }
})