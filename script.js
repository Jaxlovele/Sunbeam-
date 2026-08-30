const grid = document.getElementById("grid");

for (let i = 0; i < 20 * 20; i++) {
    const cell = document.createElement("div");
    cell.className = "cell";
    grid.appendChild(cell);
}

