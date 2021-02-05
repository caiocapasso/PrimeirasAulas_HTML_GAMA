(function () {
  var flickrKey = "a79dbdd1d24bbdf97f202f74ff0b63ec";
  var flickrBaseUrl =
    "https://api.flickr.com/services/rest/?method=flickr.photos.search&format=json&nojsoncallback=1&api_key=";
  var suffixUrl = "q";

  function getPhotos(searchTerm) {
    let URL = `${flickrBaseUrl}${flickrKey}&text=${searchTerm}`;

    return fetch(URL)
      .then((response) => response.json())
      .then((data) => data.photos.photo);
  }

  function createFlickrThumb(photoData) {
    let link = document.createElement("a");
    link.setAttribute("href", photoData.large);
    link.setAttribute("target", "_blank");

    let image = document.createElement("img");
    image.setAttribute("src", photoData.thumb);
    image.setAttribute("alt", photoData.title);

    link.appendChild(image);

    return link;
  }

  var app = document.querySelector("#app");
  var searchForm = app.querySelector(".search-form");
  var searchTerm = app.querySelector(".search-input");
  var results = app.querySelector("#results");

  searchForm.addEventListener("submit", function (e) {
    e.preventDefault();
    var filter = searchTerm.value;
    results.innerText = "Carregando...";

    getPhotos(filter).then(function (result) {
      results.innerText = "";
      result.forEach(function (photo) {
        const url = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.webp`;
        const thumbnail = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_${suffixUrl}.webp`;

        let item = createFlickrThumb({
          thumb: thumbnail,
          large: url,
          title: photo.title,
        });

        results.appendChild(item);
      });
    });
  });
})();
