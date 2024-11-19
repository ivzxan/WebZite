const suggestions = {
    "Moyano": "Images/Andrhea Moyano.png",
    "YouTube": "https://youtube.com",
    "YouTuber": "https://example.com/youtuber",
    "YouTube Channel": "https://example.com/youtube-channel",
    "Blogger": "https://example.com/blogger",
    "Bollywood": "https://example.com/bollywood",
    "Vlogger": "https://example.com/vlogger",
    "Vehicles": "https://example.com/vehicles",
    "Facebook": "https://facebook.com",
    "What does HTML stand for?": "https://example.com/html-meaning",
    "What does CSS stand for?": "https://example.com/css-meaning",
};

const searchInput = document.querySelector(".searchInput");
const input = searchInput.querySelector("input");
const resultBox = searchInput.querySelector(".resultBox");

input.onkeyup = (e) => {
    let userData = e.target.value;
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
        let allList = resultBox.querySelectorAll("li");
        for (let i = 0; i < allList.length; i++) {
            allList[i].setAttribute("onclick", "select(this)");
        }
    } else {
        searchInput.classList.remove("active");
    }
};

function select(element) {
    let selectedText = element.textContent;
    let selectedLink = suggestions[selectedText];

    if (selectedLink) {
        if (selectedLink.startsWith("Images/")) {
            window.location.href = `gallery.html?image=${encodeURIComponent(selectedText)}`;
        } else {
            window.open(selectedLink, "_blank");
        }
    } else {
        alert("No URL found for this selection");
    }
    searchInput.classList.remove("active");
}

function showSuggestions(list) {
    let listData;
    if (!list.length) {
        listData = "<li>No results found</li>";
    } else {
        listData = list.join("");
    }
    resultBox.innerHTML = listData;
}