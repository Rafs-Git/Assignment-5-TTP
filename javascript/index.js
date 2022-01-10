let rowCount = 1;
let columnCount = 1;
let currentColor = "white"
let grid = document.getElementById("main-table")
const firstRow = document.createElement("tr")
const firstCell = document.createElement("td")
const firstButton = document.createElement("button")
firstButton.className = "color-grid"
    firstButton.addEventListener("click", () => {
        this.style.backgroundColor = currentColor
    })
firstCell.append(firstButton)
firstRow.append(firstCell)
grid.append(firstRow)

//This function does the logic for adding a row into the grid
document.getElementById("add-row").addEventListener("click", () => {
    rowCount++;
    let newRow = document.createElement("tr");
    for (let i = 0; i < columnCount; i++) {
        let newCell = document.createElement("td");
        newCell.innerHTML = '<button class = "color-grid"></button>'
        newCell.addEventListener("click", () => {
            newCell.style.backgroundColor = currentColor
        })
        newRow.append(newCell)
    }
    document.getElementById("main-table").append(newRow)
})

//This function does the logic of adding a column into the grid
document.getElementById("add-column").addEventListener("click", () => {
    let rows = document.querySelectorAll("tr");
    columnCount++
    for (let i = 0; i < rows.length; i++) {
        let newCell = document.createElement("td");
        newCell.innerHTML = '<button class = "color-grid"></button>'
        newCell.addEventListener("click", () => {
            newCell.style.backgroundColor = currentColor
        })
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
    const allRows = document.querySelectorAll("tr");
    for (let i = 0; i < allRows.length; i++) {
        allRows[i].lastChild.remove();
    }
    columnCount--
})

//This function will reset the grid back to having one uncolored cell
document.getElementById("reset").addEventListener("click", () => {
    if (rowCount < 2 && columnCount < 2) {
        return;
    }
    currentColor = "white"
    while (grid.hasChildNodes()) {
        grid.lastChild.remove();
    }
    let newRow = document.createElement("tr")
    let newCell = document.createElement("td")
    newCell.innerHTML = '<button class = "color-grid"></button>'
    newCell.addEventListener("click", () => {
        newCell.style.backgroundColor = currentColor
    })
    newRow.append(newCell)
    grid.append(newRow)
    rowCount = 1;
    columnCount = 1;
})

//All the buttons from the dropdown menu
//Added logic to change currentcolor to the selected one
document.getElementById("blue").addEventListener("click", () => {
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
})