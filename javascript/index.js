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