let myTexts = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn");
const tabBtn = document.getElementById("tab-btn");

let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myTexts"))

if (leadsFromLocalStorage) {
    myTexts = leadsFromLocalStorage
    render(myTexts)
}

function render(texts) {
    let listItems = "";
    for (let i = 0; i < texts.length; i++) {
        listItems += `
                <li>
                    <a target="_blank" href="${texts[i]}">
                        ${texts[i]}
                    </a>    
                </li>
        `
    }
    ulEl.innerHTML = listItems;
}

inputBtn.addEventListener("click", function () {
    if(inputEl.value == ""){
        return
    }
    myTexts.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myTexts", JSON.stringify(myTexts))
    render(myTexts)
})

tabBtn.addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        console.log("inside")
        myTexts.push(tabs[0].url);
        localStorage.setItem("myTexts", JSON.stringify(myTexts))
        render(myTexts)
    });
})

deleteBtn.addEventListener("dblclick", function () {
    console.log("dbl Clicked")
    localStorage.clear()
    myTexts = []
    render(myTexts)
})

