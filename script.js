const errorMessage = document.querySelector(".invisible");
const email = document.getElementById('email');
const button = document.querySelector('.button');
const article = document.querySelector('.article');
const doneMessage = document.querySelector('.doneMessage');
const doneAction = document.querySelector('.doneAction');
const dismissBtn = document.querySelector('.dismissBtn');
const mobileBg = document.querySelector('.mobileBg');

button.addEventListener('click', (e) => {
    e.preventDefault()
    const validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    
   if(validEmail.test(email.value)){
    doneAction.classList.remove("hidden");
    doneMessage.innerHTML=(`${email.value}`)
    article.classList.add("hidden");
    mobileBg.classList.add("hidden")
   }
   else{
    errorMessage.classList.remove("invisible")
   }
   
})

dismissBtn.addEventListener('click', ()=> {
    
    location.reload()
})