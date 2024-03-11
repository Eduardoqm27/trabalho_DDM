
function showImages() {

    const imageUrls = [
        './imagens/prototipagem1.png',
        './imagens/prototipagem2.png',
        './imagens/prototipagem3.png',
        
    ];

    const imageContainer = document.getElementById('imageContainer');
    imageContainer.innerHTML = '';
    imageUrls.forEach(function (url) {
        const imgElement = document.createElement('img');
        imgElement.src = url;
        imgElement.alt = 'Imagem';
        imageContainer.appendChild(imgElement);
    });
}

document.getElementById('showImagesButton').addEventListener('click', showImages);
document.getElementById('hideImagesButton').addEventListener('click', function () {
document.getElementById('imageContainer').innerHTML = '';

});