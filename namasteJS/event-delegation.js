document.getElementById('category').addEventListener('click', (evt)=>{
    console.log('>> evt',evt);
    console.log('>> id',evt.target.id);
    // location.href = '/'+evt.target.id;
});

document.getElementById('form').addEventListener('keyup', (evt)=>{
    console.log('>> evt',evt);
    const val = evt.target.value;
    if(evt.target.dataset.uppercase != undefined){
        evt.target.value = val.toUpperCase();
    }
    // console.log('>> id',evt.target.id);
    // location.href = '/'+evt.target.id;
});