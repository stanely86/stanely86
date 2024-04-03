window.addEventListener('DOMContentLoaded', () => {
    fetch('nav.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('nav').innerHTML = html;
        }); 

        const toggleButton = document.getElementsByClassName('toogle-button')[0]
        const navbarLinks = document.getElementsByClassName('nav-selection')[0]

        try{
            toggleButton.addEventListener('click', ()=>{
                navbarLinks.classList.toggle('active')
            })
        }catch{
            console.log("error")
        }
    
}
)
