document.addEventListener('DOMContentLoaded', function() {
const toggleButton = document.getElementsByClassName('toogle-button')[0]
const navbarLinks = document.getElementsByClassName('nav-selection')[0]

    try{
        toggleButton.addEventListener('click', ()=>{
            navbarLinks.classList.toggle('active')
        })
    }catch{
        console.log("error")
    }
});



