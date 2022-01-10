let rowCount = 1;
let columnCount = 1;


document.getElementById("add-column").addEventListener("click", () => {
    let rows = document.querySelectorAll("tr");
    columnCount++
    for (let i = 0; i < rows.length; i++) {
        let newCell = document.createElement("td");
        newCell.innerHTML = '<button class = "color-grid"></button>'
        rows[i].append(newCell)
    }
})
let test = "test"
