
function zoomountLeft (image){
    document.getElementById('trangKhung').src = "Image/Capture.PNG" ;
}
function zoomountRight (image){
    document.getElementById('trangKhung').src = "Capture1.PNG"  ;
}
function left (left){
    document.querySelector('.tenCacSanPhamNoiBat1').style.display = "none";
}
function right (right){
    document.querySelector('.tenCacSanPhamNoiBat1').style.display = "block"  ;
}

function left_SPM (SPM){
    document.querySelector('.tenCacSanPhamMoi3').style.display = "none";
}
function right_SPM (SPM){
    document.querySelector('.tenCacSanPhamMoi3').style.display = "block"  ;
}

function hot1 (hot1){
    document.querySelector('.DoDungVanPhong').style.display =  "none"  ;
    document.querySelector('.NoiThatGo').style.display = "none"  ;
}
function hot2 (hot2){
    document.querySelector('.DoDungVanPhong').style.display = "block"  ;
    document.querySelector('.NoiThatGo').style.display = "none"  ;
}
function hot3 (hot3){
    document.querySelector('.DoDungVanPhong').style.display =  "none"  ;
    document.querySelector('.NoiThatGo').style.display = "block"  ;
}

