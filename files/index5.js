let myLeads = []
let myOldLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const saveBtn = document.getElementById("save-btn")
const deleteBtn= document.getElementById("delete-btn")
const ulEl = document.getElementById("ul-el")
const parseMyLeads = JSON.parse(localStorage.getItem("myLeads"))

if(parseMyLeads){
    myLeads = parseMyLeads
    URL(myLeads)
}

function URL(leads){
    let url = " "
    for(let i=0; i<leads.length; i++){
        url += `<li><a target="_blank" href="${leads[i]}"> ${leads[i]} </a></li>`
    }
    ulEl.innerHTML = url
}

saveBtn.addEventListener("click", function (){
    chrome.tabs.query({active: true, currentWindow: true}, function (){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        URL(myLeads)
    })
})

inputBtn.addEventListener("click", function (){
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    URL(myLeads)
})

deleteBtn.addEventListener("dblclick", function (){
    myLeads = []
    localStorage.clear()
    URL(myLeads)
})

