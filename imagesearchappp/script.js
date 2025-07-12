const accessKey = '0VWabpSRKnAEeag8KRNSeP3sJwjQ7hS74fyEIiinW24';
const searchForm = document.querySelector("form");
const searchInput = document.querySelector(".search-input");
const imagesContainer = document.querySelector(".images-container");
const loadMoreBtn = document.querySelector(".loadmore-btn");
 

let page = 1;
const fetchImages = async (query, pageNo) => {
  
    try {
        if (pageNo === 1) {
            imagesContainer.innerHTML = '';
        }

        const url = `https://api.unsplash.com/search/photos?query=${query}&per_page=28&page=${pageNo}&client_id=${accessKey}`;

        const response = await fetch(url);
        const data = await response.json();

        // console.log(data);

        data.results.forEach(photo => {

            //creating image element
            const imageElement = document.createElement('div');
            //image element wale div ko imageDiv classname diya h...
            imageElement.classList.add('imageDiv');
            imageElement.innerHTML = `<img src="${photo.urls.regular}"/>`

            //creating overlay element
            const overlayElement = document.createElement('div');
            overlayElement.classList.add('overlayDiv');

            //creating overlay text
            const overlayText = document.createElement('h3');
            overlayText.innerText = `${photo.alt_description}`

            overlayElement.appendChild(overlayText);
            imageElement.appendChild(overlayElement);
            imagesContainer.appendChild(imageElement);
        });

        if (data.total_pages === pageNo) {
            loadMoreBtn.style.display = "none";
        }
        else {
            loadMoreBtn.style.display = "block";
        }


    }catch{
        imagesContainer.innerHTML = `<h2>Failed to Fetch Images.</h2>`
    }


}
searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const inputText = searchInput.value.trim();
    if (inputText !== '') {
        imagesContainer.innerHTML = '';
        page = 1;
        fetchImages(inputText);
    }
    else {
        imagesContainer.innerHTML = `<h2>Please enter a search query.</h2>`
        if(loadMoreBtn.style.display="block"){
            loadMoreBtn.style.display = "none";
        }
    }
});


loadMoreBtn.addEventListener("click", () => {
    fetchImages(searchInput.value.trim(), ++page)

})

