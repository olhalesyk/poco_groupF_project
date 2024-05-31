const jsonFilePath = './static/js/data.json';

fetch(jsonFilePath)
  .then(response => {
    if (!response.ok) {
      throw new Error('Failed to fetch JSON');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error fetching JSON:', error);
  }); 


let localTest = "";

saveToLocalStorage();
getTitle();


function saveToLocalStorage() {
    let title = document.querySelector("h1").textContent;
    localStorage.setItem("title", title);
    // alert("Title is saved.");
}

function getTitle() {
    let getLocalTitle = localStorage.getItem("title");
    // alert(getLocalTitle);
}