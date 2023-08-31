const btn =  document.querySelectorAll('button');
const body = document.querySelector('body')

btn.forEach(function(button){
    button.addEventListener('click',function(e){
        if(e.target.id === 'Grey'){
         body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'Yellow'){
         body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'Violet'){
         body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'Red'){
         body.style.backgroundColor = e.target.id;
        }  
    })
})