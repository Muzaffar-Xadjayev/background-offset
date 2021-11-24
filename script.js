let box=document.querySelector('#quti');
// let button=document.getElementById('button');
// button.addEventListener('click',runEvent);
// button.addEventListener('dblclick',runEvent);
// button.addEventListener('mousedown',runEvent);
// button.addEventListener('mouseup',runEvent)
// button.addEventListener('mouseenter',runEvent)
// button.addEventListener('mouseover',runEvent)
// button.addEventListener('mouseout',runEvent)
// button.addEventListener('mouseleave',runEvent)
let output=document.querySelector('#output');
box.addEventListener('mousemove',runEvent);


function runEvent(e){
    console.log(e.type);
    output.innerHTML=`<h4>MouseX: ${e.offsetX} MouseY ${e.offsetY}<h4>`
    box.style.backgroundColor=`rgb(${e.offsetX},${e.offsetY},70)`
    document.body.style.backgroundColor=`rgb(${e.offsetX},${e.offsetY},70)`
}




// let button=document.querySelector('#button');
// button.addEventListener('click',runEvent)
// function runEvent(e){
    // let header=document.querySelector('#header-title');
    // console.log(e.targer.id);
    // console.log(`ID = ${e.target.id}`);
    // console.log(`class = ${e.target.className}`);
    // console.log(`value = ${e.target.textContent}`);
    // header.textContent='New header';
    // header.style.color='red'
    // let output=document.querySelector('#output');
    // output.textContent=header.textContent;
    // console.log(` clientX = ${e.clientX} clientY = ${e.clientY}`); 
    // console.log(`offsetX = ${e.offsetX} offsetY = ${e.offsetY}`);
    // console.log(e.shiftKey);
    // console.log(e.altKey);
    // console.log(e.ctrlKey);
    // if(e.altKey){
    //     console.log(`bosildi`);
    // }else{
    //     console.log('error');
    // }
// }



// let itemInput=document.querySelector('input[type=text]')
// let output=document.querySelector('#output');
// itemInput.addEventListener('keyup',runEvent)
// itemInput.addEventListener('keypress',runEvent)
// itemInput.addEventListener('focus',runEvent)
// itemInput.addEventListener('blur',runEvent)
// itemInput.addEventListener('cut',runEvent)
// itemInput.addEventListener('copy',runEvent)
// itemInput.addEventListener('paste',runEvent)
// itemInput.addEventListener('input',runEvent);


// function runEvent(e){
//     console.log(e.type);
//     output.innerHTML=`<h5>${e.target.value}</h5>`
// }