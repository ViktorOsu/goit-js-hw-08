// Описаний в документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const galleryListEl = document.querySelector('.gallery');

let instance = null;

const galleryItemsList = galleryItems.map(({preview, original, description}) => {
    return `
 <li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" 
      src="${preview}" 
      alt="${description}" />
   </a>
</li>
`;
}).join('');


galleryListEl.insertAdjacentHTML('beforeend', galleryItemsList);

console.log(galleryListEl);

var lightbox = new SimpleLightbox('.gallery a', {captionDelay: '250', captionsData: 'alt', captionPosition: 'bottom'});


