document.addEventListener("keydown", function(event) {
    const key = event.key;
    const keycode = key.code || event.keyCode || event.which; 
    document.getElementById("2").innerText = `You pressed ${key}`;
    document.getElementById("4").innerText = keycode;
    
});
