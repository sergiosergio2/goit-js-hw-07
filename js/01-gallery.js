import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');
let modal;
gallery.insertAdjacentHTML('beforeend', creatGalleryToHtml());
gallery.addEventListener ('click', creatModalImages);
document.addEventListener ("keydown", closeWithEsc);

function addGalleryItemHtml(item) {
    return `<div class = "gallery__item">
    <a class="gallery__link" href="${item.original}">
    <img class="gallery__image"
    src="${item.preview}"
    alt="${item.description}"/>
    </a>
    </div>`;
}

function creatGalleryToHtml () {
    //console.log(galleryItems);
    return galleryItems.map(addGalleryItemHtml).join("");
     
    
}

function creatModalImages (evt) {
    console.log("test");
    console.log(evt);
    console.log(evt.currentTarget);
    if (evt.target.nodeName === "IMG") {
        modal = basicLightbox.create(`
        <img width="1400" height="900" src="${evt.path[0].currentSrc}" alt="${evt.path[0].alt}">`);
        modal.show();
    }
    evt.preventDefault();
}
function closeWithEsc (evt) {
    if (evt.code === "Escape" && modal.visible()) {
        modal.close();
    }
}
