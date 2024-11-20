const suggestions = {
    "Artist 1": "artist1.html",
    "Artist 2": "artist2.html",
    "Artist 3": "artist3.html",
    "Artist 4": "artist4.html",
    "Artist 5": "artist5.html",
    "Artist 6": "artist6.html",
    "Artist 7": "artist7.html",
    "Artist 8": "artist8.html",
    "Artist 9": "artist9.html",
    "Artist 10": "artist10.html",
};

const searchInput = document.querySelector(".searchInput");
const input = searchInput.querySelector("input");
const resultBox = searchInput.querySelector(".resultBox");

input.onkeyup = (e) => {
    const userData = e.target.value;
    let emptyArray = [];
    if (userData) {
        emptyArray = Object.keys(suggestions).filter((data) => {
            return data.toLowerCase().startsWith(userData.toLowerCase());
        });

        emptyArray = emptyArray.map((data) => {
            return `<li>${data}</li>`;
        });

        searchInput.classList.add("active");
        showSuggestions(emptyArray);

        const allList = resultBox.querySelectorAll("li");
        allList.forEach((item) => {
            item.setAttribute("onclick", "select(this)");
        });
    } else {
        searchInput.classList.remove("active");
    }
};

function showSuggestions(list) {
    let listData;
    if (!list.length) {
        listData = `<li>No results found</li>`;
    } else {
        listData = list.join('');
    }
    resultBox.innerHTML = listData;
}

function select(element) {
    const selectedText = element.textContent;
    const selectedLink = suggestions[selectedText];
    if (selectedLink) {
        window.location.href = selectedLink;
    } else {
        alert("No URL found for this selection");
    }
    searchInput.classList.remove("active");
}
