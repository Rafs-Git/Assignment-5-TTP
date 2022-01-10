let rowCount = 1;
let columnCount = 1;

document.getElementById("add-row").addEventListener("click", () => {
    rowCount++;
    let newRow = document.createElement("tr");
    for (let i = 0; i < columnCount; i++) {
        let newCell = document.createElement("td");
        newCell.innerHTML = '<button class = "color-grid"></button>'
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
    document.getElementById("main-table").removeChild(lastRow)
    rowCount--;
})

//This function does the logic of removing the last column from the grid
document.getElementById("remove-column").addEventListener("click", () => {
    if (columnCount < 2) {
        return;
=======
    }
    document.getElementById("main-table").append(newRow)
})
