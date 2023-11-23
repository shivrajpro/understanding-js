document.getElementById("grandParent").addEventListener('click', ()=>{
    console.log('GRANDPARENT');
}, true)
document.getElementById("parent").addEventListener('click', ()=>{
    console.log('PARENT');
}, false)
document.getElementById("child").addEventListener('click', (e)=>{
    console.log('CHILD');
    e.stopPropagation();
}, true)