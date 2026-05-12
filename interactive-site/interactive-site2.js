
// const modelImages = ["" , ""] Put images here mhmhm
// moar images for the differences of before and after a reality bender affects things. this is page 2 btw

const imgElement = document.getElementById('model-frame');

const preload = new Image();
preload.src = modelImages[1];

imgElement.addEventListener('mouseenter', () => {
     imgElement.src = modelImages[1];
});

imgElement.addEventListener('mouseleave', () => {
     imgElement.src = modelImages[0];
});
