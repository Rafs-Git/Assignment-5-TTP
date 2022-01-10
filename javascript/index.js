let rowCount = 1;
let columnCount = 1;

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