import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);

const gallery = document.querySelector('.gallery');

const imageItem = galleryItems
 .map((image) => `<div class="gallery__item">
  <a class="gallery__link" href="${image.original}">
    <img
      class="gallery__image"
      src="${image.preview}"
      data-source="${image.original}"
      alt="${image.description}"
    />
  </a>
</div>`)
        .join('');

gallery.insertAdjacentHTML("beforeend", imageItem);
  
gallery.addEventListener('click', clickEvent);

function clickEvent(event) {
    event.preventDefault();

    if (event.target.nodeName !== 'IMG') {
        return
    }

    const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
`)
instance.show()

    document.addEventListener('keydown', modalClose);

    function modalClose(event) {
        if (event.code === 'Escape') {
         instance.close()  
       }

    }
   return gallery.removeEventListener;
}


