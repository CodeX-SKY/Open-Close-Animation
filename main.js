let secret = document.querySelector(".secret"); 
let btn = document.querySelector(".btn");
let yes = document.querySelector(".yes");
let no = document.querySelector(".no");
let box = document.querySelector(".box"); 

function remove(){
    secret.classList.remove('secret-show' , 'secret-hide'); 
}

btn.addEventListener('click' , function(){
    if(secret.classList.contains("secret-show")){
        secret.classList.add("secret-hide")
        secret.addEventListener('animationend' , remove);
    } else {
        secret.classList.add("secret-show")
        secret.removeEventListener('animationend' , remove);
    }
})

no.addEventListener('click' , function(){
    if(secret.classList.contains("secret-hide")){
        secret.classList.add("secret-show")
        secret.removeEventListener('animationend' , remove);
    } else {
        secret.classList.add("secret-hide")
        secret.addEventListener('animationend' , remove);
    }
})

yes.addEventListener('click' , function(){
    if(secret.classList.contains("secret-hide")){
        secret.classList.add("secret-show")
        secret.removeEventListener('animationend' , remove);
    } else {
        secret.classList.add("secret-hide")
        secret.addEventListener('animationend' , remove);
    }
})

secret.addEventListener('click' , function(){
    if(secret.classList.contains("secret-hide")){
        secret.classList.add("secret-show")
        secret.removeEventListener('animationend' , remove);
    } else {
        secret.classList.add("secret-hide")
        secret.addEventListener('animationend' , remove);
    }
})