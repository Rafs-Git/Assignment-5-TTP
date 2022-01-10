let rowCount = 1;
let columnCount = 1;

document.getElementById("remove-row").addEventListener("click", () => {
    if (rowCount < 2) {
        return;
    }
    const allRows = document.querySelectorAll("tr");
    const lastRow = allRows[allRows.length - 1]
    document.getElementById("main-table").removeChild(lastRow)
    rowCount--;
})

