function upDate(previewPic) {
    let imageDiv = document.getElementById("image");
    imageDiv.innerHTML = previewPic.alt;
    imageDiv.style.backgroundImage = `url('${previewPic.src}')`;
    imageDiv.style.backgroundSize = "cover";
    imageDiv.style.backgroundPosition = "center";
    imageDiv.style.color = "white";
}

function undo() {
    let imageDiv = document.getElementById("image");
    imageDiv.innerHTML = "Select an image below to display details.";
    imageDiv.style.backgroundImage = "none";
    imageDiv.style.color = "black";
}

let images = document.querySelectorAll(".gallery img");

images.forEach(function(img) {

    img.addEventListener("mouseover", function() {
        upDate(this);
    });

    img.addEventListener("mouseleave", function() {
        undo();
    });

    img.addEventListener("focus", function() {
        upDate(this);
    });

    img.addEventListener("blur", function() {
        undo();
    });

});
