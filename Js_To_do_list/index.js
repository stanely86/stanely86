import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push, onValue, remove } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseURL: "https://playground-41e8b-default-rtdb.firebaseio.com/"
}

const app = initializeApp(appSettings)
const database = getDatabase(app)
const shoppingListInDB = ref(database, "shoppingList")

const inputFieldEl = document.getElementById("input-field")
const addButtonEl = document.getElementById("add-button")
const shoppingListEl = document.getElementById("shopping-list")
const decription = document.getElementById("input-decription")
const tasksEl = document.getElementById("taskSelection")
const dateTime = document.getElementById("input-dataTime")


addButtonEl.addEventListener("click", function(e) {
    let inputValue = inputFieldEl.value
    let inputValue2 = decription.value
    let inputValue3 = tasksEl.value
    let inputValue4 = dateTime.value

    /* prevent null */
    const anyNull = inputValue == "" || inputValue2 == "" || inputValue3 == ""
    if(anyNull){
        e.preventDefault();
    }else{
        push(shoppingListInDB, [inputValue, inputValue2, inputValue3, inputValue4])
    }
    
    clearInputFieldEl()
})

onValue(shoppingListInDB, function(snapshot) {
    if (snapshot.exists()) {
        let itemsArray = Object.entries(snapshot.val())
    
        clearShoppingListEl()
        
        for (let i = 0; i < itemsArray.length; i++) {
            let currentItem = itemsArray[i]
            let currentItemID = currentItem[0]
            let currentItemValue = currentItem[1]
            
            appendItemToShoppingListEl(currentItem)
        }    
    } else {
        shoppingListEl.innerHTML = "No items here... yet"
    }
})

function clearShoppingListEl() {
    shoppingListEl.innerHTML = ""
}

function clearInputFieldEl() {
    inputFieldEl.value = ""
}

function appendItemToShoppingListEl(item) {
    let itemID = item[0]
    let itemValue = item[1] // Show TASK name 
    
    let newEl = document.createElement("li")
    
    newEl.innerHTML = `
        <ul>
        <li>${itemValue[0]}</li>
        <li>${itemValue[1]}</li> 
        <li>${itemValue[2]}</li>
        <li>${itemValue[3]}</li>
        <ul>
    `
        
    newEl.addEventListener("dblclick", function() {
        let exactLocationOfItemInDB = ref(database, `shoppingList/${itemID}`)
        let deleteAns = deleteItem()
        if (deleteAns){
            remove(exactLocationOfItemInDB)
        }
        
    })
    shoppingListEl.append(newEl)
}

document.getElementById('switchMode').addEventListener('click',()=> {
    document.body.classList.toggle('blue')});

/*
window.addEventListener('DOMContentLoaded', () => {

        fetch('nav.html')
            .then(response => response.text())
            .then(html => {
                document.getElementById('nav').innerHTML = html;

                ///Verify switch Mode

                const navElement = document.getElementById('nav');
                if (navElement.innerHTML.trim() === '') {
                        console.log('The navigation is empty.');
                } else {
                        document.getElementById('switchMode').addEventListener('click',()=> {document.body.classList.toggle('blue')});
                }

            }); 
    }
)
*/


function deleteItem(deleteAns) {
    var result = confirm("Are you sure you want to delete this item?");

    if (result) {
        alert("Item deleted successfully!");
        return deleteAns = 1;
    } else {
        alert("Deletion canceled.");
        return deleteAns = 0;
    }
}



