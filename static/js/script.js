let localTest = "";

saveToLocalStorage();
getTitle();


function saveToLocalStorage() {
    let title = document.querySelector("h1").textContent;
    localStorage.setItem("title", title);
    alert("Title is saved.");
}

function getTitle() {
    let getLocalTitle = localStorage.getItem("title");
    alert(getLocalTitle);
}