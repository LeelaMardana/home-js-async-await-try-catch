const ALBUMS_URL = 'https://jsonplaceholder.typicode.com/albums';
const dataContainer = document.querySelector('.data-container');

const createAlbumItem = text => {
  const albumItem = document.createElement('li');
  albumItem.innerText = text;
  return albumItem;
};

const toggleLoader = () => {
  const loaderHTML = document.querySelector('#loader');
  const isHidden = loaderHTML.getAttribute('hidden') !== null;
  if (isHidden) {
    loaderHTML.removeAttribute('hidden');
  } else {
    loaderHTML.setAttribute('hidden', '');
  }
};

const renderAlbums = async () => {
  toggleLoader();
  try {
    const response = await fetch(ALBUMS_URL);
    const albums = await response.json();
    albums.forEach(item => dataContainer.append(createAlbumItem(item.title)));
  } catch {
    dataContainer.innerText =
      'Произошла ошибка в получении данных об альбомах...';
  } finally {
    toggleLoader();
  }
};

renderAlbums();
