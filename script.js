const inputBox = document.getElementById("input-box");
//selects th einput box
const listContainer = document.getElementById("list-container");
//selects the list container and adds a variable to it.


//the function is called when the 'add' button is clicked
function addTask() {
    if (inputBox.value === '') {
        //checks if the input box is empty
        alert("You must type something");
    }
    //returns the message above indicating user must type sth.
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
//creates the list element and assigns it to a variable called li, sets its content equal to valu in the input box
//adds the list element to the list container, the task body.
        let span = document.createElement("span");
        span.innerHTML = "&times;";
        li.appendChild(span);
//creates an element called span, sets its inner value to be a cross, the '\u0097' produces an 'x'
//adds the span to each list element created.
    }
    inputBox.value= "";
    //sets the value to an empty string so the user won't have to manually clear the input box.
    saveData();
//calls the function to save the data to the browser
}

listContainer.addEventListener("click", function(e){
    //checking what element was clicked
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
//localStorage - feature allowing one to save their data to browser.
//.setItem("", ) - saves data to the local storage.
//takes two parameters, the name and the actual data
}

function showData(){
    listContainer.innerHTML = localStorage.getItem("data");
    //display the tasks
}
showData();