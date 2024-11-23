var rows = 3;
var columns = 3;

var currTile;
var otherTile; // Blank tile

var turns = 0;

// Order of images to load
var imgOrder = ["4", "2", "8", "5", "1", "6", "7", "9", "3"]; // Matches your file names (e.g., 1.png)

window.onload = function () {
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {
            let tile = document.createElement("img");
            tile.id = r.toString() + "-" + c.toString();
            tile.src = "Puzzle/" + imgOrder.shift() + ".png"; // File path for images

            // DRAG FUNCTIONALITY
            tile.addEventListener("dragstart", dragStart);
            tile.addEventListener("dragover", dragOver);
            tile.addEventListener("dragenter", dragEnter);
            tile.addEventListener("dragleave", dragLeave);
            tile.addEventListener("drop", dragDrop);
            tile.addEventListener("dragend", dragEnd);

            document.getElementById("board").append(tile); // Add tile to the board
        }
    }
};

function dragStart() {
    currTile = this; // The tile being dragged
}

function dragOver(e) {
    e.preventDefault(); // Allow dropping
}

function dragEnter(e) {
    e.preventDefault(); // Allow dropping
}

function dragLeave() {
    // Optional: You can handle visual feedback here
}

function dragDrop() {
    otherTile = this; // The tile being dropped onto
}

function dragEnd() {
    if (!otherTile.src.includes("3.png")) {
        return; // Only allow swapping with the blank tile
    }

    let currCoords = currTile.id.split("-"); // ex: "0-0" -> ["0", "0"]
    let r = parseInt(currCoords[0]);
    let c = parseInt(currCoords[1]);

    let otherCoords = otherTile.id.split("-");
    let r2 = parseInt(otherCoords[0]);
    let c2 = parseInt(otherCoords[1]);

    let moveLeft = r == r2 && c2 == c - 1;
    let moveRight = r == r2 && c2 == c + 1;

    let moveUp = c == c2 && r2 == r - 1;
    let moveDown = c == c2 && r2 == r + 1;

    let isAdjacent = moveLeft || moveRight || moveUp || moveDown;

    if (isAdjacent) {
        let currImg = currTile.src;
        let otherImg = otherTile.src;

        currTile.src = otherImg;
        otherTile.src = currImg;

        turns += 1; // Increment the turn counter
        document.getElementById("turns").innerText = turns; // Update the turn display
    }
}