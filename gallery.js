let list = document.querySelectorAll('.list');
    function setActiveClass(){
        list.forEach((item) =>
        item.classList.remove('active'));
        this.classList.add('active');
    }
    list.forEach((item) =>
    item.addEventListener('click', setActiveClass));
    

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

document.querySelector('.searchInput input').addEventListener('input', filterImages);