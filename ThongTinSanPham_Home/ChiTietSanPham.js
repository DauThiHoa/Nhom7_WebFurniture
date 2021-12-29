function zoomount(image) {
    var src = image.src;
    document.getElementById('anh').src = src;
}

function tru(giamSoLuong) {
    var so = parseInt(document.getElementById("soLuong").innerHTML);
    if (so == 1) {
        document.getElementById("soLuong").innerHTML = 1;
    } else {
        document.getElementById("soLuong").innerHTML = so - 1;
    }
}

function cong(tangSoLuong) {
    var so = parseInt(document.getElementById("soLuong").innerHTML);
    document.getElementById("soLuong").innerHTML = so + 1;
}