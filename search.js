const suggestions = {
    "Andrhea Moyano": "Profile/Anchan.html",
"Bon Joriz Mahayhay": "Profile/Bon.html",
"Borromeo Princess Alejandra": "Profile/Borromeo.html",
"Buns": "Profile/Buns.html",
"Carlos Angelo Magpantay / un.jello": "Profile/Carlos.html",
"Ma. Chrisha Niña T. Lubina / Ninnyaa": "Profile/Chrisha.html",
"Deirdz Rey / Yera chan": "Profile/Deirdz.html",
"Carlos Miguel Yamio": "Profile/Eroxz.html",
"Hanna Mae Nuena Cardeno": "Profile/Hanna.html",
"John Ryan Bentulan": "Profile/John.html",
"Kanela Seguros": "Profile/Kanela.html",
"Leon Miguel Emano": "Profile/Leon.html",
"Michele Ann Red": "Profile/Red.html",
"Rio": "Profile/Rio.html",
"Rohan Van E. Co": "Profile/Rohan.html",
"Rosario, Lyckel Sean P. / Syno": "Profile/Rosario.html",
"Sanneho": "Profile/Sanneho.html",
"Dave Marfil/Vivid": "Profile/Vivid.html",
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
        listData = ``;
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


function filterImages() {
  const searchInput = document.querySelector('.searchInput input').value.toLowerCase();
  const images = document.querySelectorAll('.image');

  images.forEach(image => {
    const artStyles = image.getAttribute('data-styles').toLowerCase();

    if (artStyles.includes(searchInput)) {
      image.style.display = 'block'; 
    } else {
      image.style.display = 'none';  
    }
  });
}

document.querySelector('.searchInput input').addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    const searchInput = this.value;
    localStorage.setItem('searchQuery', searchInput); // 
    window.location.href = 'gallery.html'; 
  }
});

if (window.location.pathname.includes('gallery.html')) {
  window.addEventListener('load', () => {
    const searchQuery = localStorage.getItem('searchQuery') || '';
    document.querySelector('.searchInput input').value = searchQuery; 
    filterImages(); 
  });
}