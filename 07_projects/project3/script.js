const clock = document.getElementById('clock')
// const clock = document.querySelector('clock')  // isme se disi se bhi kr sakta ha me getElementById se krrha hu

setInterval(function(){
    let date = new Date();
    // console.log(date.toLocaleTimeString())
    clock.innerHTML = date.toLocaleTimeString();
}, 1000)