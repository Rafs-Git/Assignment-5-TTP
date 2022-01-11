let rowCount = 1;
let columnCount = 1;
let currentColor = ""

function createNewCell() {
    const cell = document.createElement("td")
    const button = document.createElement("p")
    button.id = "color-grid"
    button.addEventListener("mouseover", function(e) {
        if (e.buttons == 1) {
            button.style.backgroundColor = currentColor
            }
    })
    button.addEventListener("mousedown", ()=> {
        button.style.backgroundColor = currentColor
    })
    cell.append(button)
    return cell;
}
//Initial state
const grid = document.getElementById("main-table")
const firstRow = document.createElement("tr")
const firstCell = createNewCell()
firstRow.append(firstCell)
grid.append(firstRow)
//This function does the logic for adding a row into the grid
document.getElementById("add-row").addEventListener("click", () => {
    rowCount++;
    const newRow = document.createElement("tr");
    for (let i = 0; i < columnCount; i++) {
        const newCell = createNewCell()
        newRow.append(newCell)
    }
    document.getElementById("main-table").append(newRow)
})

//This function does the logic of adding a column into the grid
document.getElementById("add-column").addEventListener("click", () => {
    const rows = document.querySelectorAll("tr");
    columnCount++
    for (let i = 0; i < rows.length; i++) {
        const newCell = createNewCell()
        rows[i].append(newCell)
    }
})

//This function does the logic of removing the last row from the grid
document.getElementById("remove-row").addEventListener("click", () => {
    if (rowCount < 2) {
        return;
    }
    const allRows = document.querySelectorAll("tr");
    const lastRow = allRows[allRows.length - 1]
    grid.removeChild(lastRow)
    rowCount--;
})

//This function does the logic of removing the last column from the grid
document.getElementById("remove-column").addEventListener("click", () => {
    if (columnCount < 2) {
        return;
    }
    const allRows = document.querySelectorAll("tr")
    for (let i = 0; i < allRows.length; i++) {
        allRows[i].lastChild.remove()   
    }
    columnCount--
})

//This function will reset the grid back to having one uncolored cell
document.getElementById("reset").addEventListener("click", () => {
    if (rowCount < 2 && columnCount < 2) {
        return;
    }
    currentColor = ""
    while (grid.hasChildNodes()) {
        grid.lastChild.remove();
    }

    //reinitializing state
    const newRow = document.createElement("tr")
    const newCell = createNewCell()
    newRow.append(newCell)
    grid.append(newRow)
    rowCount = 1;
    columnCount = 1;
})



//This function will get the current Selected color
function reply_click(clicked_id) {
    //alert(clicked_id)
    currentColor = clicked_id
    console.log(currentColor)
}

//This function will fill all grid
/*let table = document.getElementById("main-table")
document.getElementById("paint-fillAll-buttons").addEventListener("click", () => {
    for (let row = 0; row < columnCount; row++) {
        for (let col = 0; col < rowCount; col++) {
            //Get Access to the specific button
            let currentBtn = document.getElementById("main-table").rows[row].cells[col]
            //Color the button by using currentColor
            currentBtn.style.backgroundColor = currentColor
        }
    }

})*/
let td = document.getElementsByTagName('p #color-grid')
document.getElementById("paint-fillAll-buttons").addEventListener("click", () => {
    console.log(td)
    document.querySelectorAll('p').forEach(e => e.style.backgroundColor = currentColor)
})
//This function will fill color to All Unedited Square
document.getElementById("paint-fillUnedited-buttons").addEventListener("click", () => {
    for (let r = 0; r < columnCount; r++) {
        for (let c = 0; c < rowCount; c++) {
            let current = document.getElementById("main-table").rows[r].cells[c]
            //let bcolor = current.style.backgroundColor
            //console.log(bcolor + "test")
            if (!current.style.backgroundColor) {
                current.style.backgroundColor = currentColor
                console.log(r)
            }
         

        }
    }
})

/*document.getElementById("paint-clearAll-buttons").addEventListener("click", () => {

})*/

//All the buttons from the dropdown menu
//Added logic to change currentcolor to the selected one
/*document.getElementById("blue").addEventListener("click", () => {
    currentColor = "blue"
})
document.getElementById("red").addEventListener("click", () => {
    currentColor = "red"
})
document.getElementById("green").addEventListener("click", () => {
    currentColor = "green"
})
document.getElementById("pink").addEventListener("click", () => {
    currentColor = "pink"
})
document.getElementById("orange").addEventListener("click", () => {
    currentColor = "orange"
})
document.getElementById("white").addEventListener("click", () => {
    currentColor = "white"
})
document.getElementById("yellow").addEventListener("click", () => {
    currentColor = "yellow"
})
document.getElementById("black").addEventListener("click", () => {
    currentColor = "black"
})*/
