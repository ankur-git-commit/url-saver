// Array to store leads
let myLeads = []

// Selecting DOM elements
const inputEL = document.querySelector("#input-el")
const inputBtn = document.querySelector("#input-btn")
const tabBtn = document.querySelector('#tab-btn')
const deleteBtn = document.querySelector('#delete-btn')
const ulEL = document.querySelector("#ul-el")

/**
 * Creates a list item with an anchor element and a hidden prefix span.
 * @returns {Object} An object containing the list item, anchor, and hidden prefix elements.
 */
function createListItem() {
    const li = document.createElement("li")
    const anchor = document.createElement("a")
    const hiddenPrefix = document.createElement('span')

    li.className = 'listMarker'
    anchor.target = "_blank"
    anchor.className = "leadLink"

    hiddenPrefix.style.display = 'none'
    hiddenPrefix.textContent = 'https://'

    return { li, anchor, hiddenPrefix }
}

/**
 * Renders the leads stored in myLeads array to the DOM.
 */
function renderLeads() {
    ulEL.innerHTML = ""
    
    const fragment = document.createDocumentFragment()
    const prefix = 'https://'
    myLeads = loadLeads()
    
    for (let i = 0; i < myLeads.length; i += 1) {
        // ulEL.innerHTML += `<li> ${myLeads[i]} </li>`
        const { li, anchor, hiddenPrefix } = createListItem()

        anchor.appendChild(hiddenPrefix)
        anchor.textContent =  myLeads[i]
        anchor.href = prefix + myLeads[i]

        li.appendChild(anchor)
        fragment.append(li)
    }

    ulEL.append(fragment)
}

/**
 * Loads leads from localStorage.
 * @returns {Array} Array of leads.
 */
function loadLeads(){
    const storedLeads = localStorage.getItem('myLeads')
    let leadsFromLocalStorage = myLeads

    if (storedLeads){
        leadsFromLocalStorage = JSON.parse(storedLeads)
    } 

    return leadsFromLocalStorage
}

/**
 * Saves the leads to localStorage.
 */
function saveLeads() {
    localStorage.setItem('myLeads', JSON.stringify(myLeads))
}

// Initial load of leads and rendering them
loadLeads()
renderLeads()

// Event listener for adding a new lead from input
inputBtn.addEventListener("click", function () {
    myLeads.push(inputEL.value)
    inputEL.value = ""
    
    saveLeads()
    renderLeads()
})

// Event listener for adding the current tab URL as a lead
tabBtn.addEventListener('click', function(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        // since only one tab should be active and in the current window at once
        // the return variable should only have one entry
        myLeads.push(tabs[0].url)
        saveLeads()
        renderLeads()
    })
})

// Event listener for deleting all leads on double click
deleteBtn.addEventListener('dblclick', function() {
    ulEL.textContent = ''
    localStorage.clear()
    myLeads = []
})
