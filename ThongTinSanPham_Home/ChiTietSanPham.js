var anhNho = document.getElementById("anhDau");
alert(anhNho.src);

function zoomount (image){
    var src = image.src ;
    document.getElementById('anhDau').style.backgroundImage = "url("+src+")";
}