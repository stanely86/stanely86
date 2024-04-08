const iname = document.getElementById("name")
const password = document.getElementById("password")
const form = document.getElementById("form")
const errorElement = document.getElementById("error")

form.addEventListener('submit', (e)=>{

    let messages = []

    if(password.value.length<8){
        messages.push("Password need at least 8 digits")
    }

    if(iname.value=''){
        messages.push("Name can not be empty")
    }
    
    if(messages.length>0){
        e.preventDefault()
        errorElement.innerHTML = messages
    }

})



