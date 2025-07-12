const key = '0VWabpSRKnAEeag8KRNSeP3sJwjQ7hS74fyEIiinW24';
const searchForm = document.querySelector("form");
const searchInput = document.querySelector(".search-input");
const imagesContainer = document.querySelector(".image-container");
const loadMoreBtn = document.querySelector(".loadmore-btn");

let page = 1;

//Function to fetch images using Unsplash API
const fetchImages = async (query, pageNo) => {

    try {
        const url = `https://api.unsplash.com/search/photos?query=${query}&per_page=28&page=${pageNo}&client_id=${key}`;

        const response = await fetch(url);
        const data = await response.json();


        data.results.forEach(photo => {

            //creating image div
            const imageElement = document.createElement('div');
            imageElement.classList.add('imageDiv');

            imageElement.innerHTML = `<img src="${photo.urls.regular}" /> `

            //creating overlay div
            const overlayElement = document.createElement('div');
            overlayElement.classList.add('overlayDiv');

            //creating overlay text
            const overlayText = document.createElement('h3');
            overlayText.innerText = `${photo.alt_description}`

            imagesContainer.appendChild(imageElement);
            imageElement.appendChild(overlayElement);
            overlayElement.appendChild(overlayText);

        });

        if (data.total_pages == pageNo) {
            loadMoreBtn.style.display = "none";
        } else {
            loadMoreBtn.style.display = "block";
        }

    } catch {
        imagesContainer.innerHTML = `<h2>Failed to Fetch Images.</h2>`
        loadMoreBtn.style.display = "none";
    }


}

//Adding Event Listener to Load more button to fetch more images. 
loadMoreBtn.addEventListener("click", () => {
    fetchImages(searchInput.value.trim(), ++page);
})

//addding event listener to search form
searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const inputText = searchInput.value.trim();

    if (inputText != '') {
        imagesContainer.innerHTML = '';
        page = 1;
        fetchImages(inputText);

    } else {
        imagesContainer.innerHTML = `<h3> Please enter a search query.</h3> `
    } if (loadMoreBtn.style.display = "block") {
        loadMoreBtn.style.display = "none";
    }

});