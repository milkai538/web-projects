const modelImages = ["cornballwall.jpg" , "montauklake.jpg"]

const imgElement = document.getElementById('model-frame');

const preload = new Image();
preload.src = modelImages[1];

imgElement.addEventListener('mouseenter', () => {
     imgElement.src = modelImages[1];
});

imgElement.addEventListener('mouseleave', () => {
     imgElement.src = modelImages[0];
});
