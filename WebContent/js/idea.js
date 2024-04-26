/**
 * 
 */
window.onload = function() {
    showRoom("one_room"); // 페이지가 로드될 때 원룸 이미지를 기본으로 표시
};
var slideIndex = 0;

// 이미지 배열
var images = {
    "one_room": [],
    "two_room": [],
    "office_tel": []
};

// 이미지 추가 함수
function addImage(roomType, imagePath) {
    images[roomType].push(imagePath);
}

// 이미지를 보여주는 함수
function showSlides(roomType, index) {
    var modalImg = document.getElementById("modalImg");
    var imagesForRoom = images[roomType]; // 해당 카테고리의 이미지 배열
    // 인덱스가 이미지 배열 범위 내에 있는지 확인
    if (index >= 0 && index < imagesForRoom.length) {
        modalImg.src = imagesForRoom[index];
        slideIndex = index;
    }
}

// 다음 이미지 표시 함수
function plusSlides(n) {
    var roomType = document.querySelector(".additional-content:not([style='display: none;'])").id;
    showSlides(roomType, slideIndex + n);
}

function showRoom(roomType) {
    // 모든 추가적인 컨텐츠 숨김
    var contents = document.getElementsByClassName("additional-content");
    for (var i = 0; i < contents.length; i++) {
        contents[i].style.display = "none";
    }
    // 해당 roomType에 맞는 컨텐츠 보임
    document.getElementById(roomType).style.display = "block";
}

function openModal(imagePath) {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("modalImg");
    modal.style.display = "block";
    modalImg.src = imagePath;
    showSlides(slideIndex);
}

// 모달 닫기
function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}

// 이미지 추가
addImage("one_room", "../img/oneroom.jpg");
addImage("one_room", "../img/oneroom2.jfif");
addImage("one_room", "../img/oneroom3.avif");
addImage("one_room", "../img/oneroom4.jpg");
addImage("one_room", "../img/oneroom5.avif");
addImage("one_room", "../img/oneroom6.avif");
addImage("one_room", "../img/oneroom7.jpg");
addImage("one_room", "../img/oneroom8jpg.jpg");
addImage("one_room", "../img/oneroom9.jpeg");
addImage("one_room", "../img/oneroom10.jpeg");
addImage("one_room", "../img/oneroom11.png");
addImage("one_room", "../img/oneroom12.jpg");

                              

// 다른 카테고리에 대한 이미지 추가
addImage("two_room", "../img/tworoom.jpg");
addImage("two_room", "../img/tworoom2.avif");
addImage("two_room", "../img/tworoom3.avif");
addImage("two_room", "../img/tworoom4.avif");
addImage("two_room", "../img/tworoom5.avif");
addImage("two_room", "../img/tworoom6.avif");
addImage("two_room", "../img/tworoom7.avif");
addImage("two_room", "../img/tworoom8.avif");
addImage("two_room", "../img/tworoom9.avif");
addImage("two_room", "../img/tworoom10.avif");
addImage("two_room", "../img/tworoom11.avif");
addImage("two_room", "../img/tworoom12.avif");

addImage("office_tel", "../img/office_tel.jpg");
addImage("office_tel", "../img/office_tel1.jpg");
addImage("office_tel", "../img/office_tel2.jpg");
addImage("office_tel", "../img/office_tel3.jpg");
addImage("office_tel", "../img/office_tel4.jpg");
addImage("office_tel", "../img/office_tel5.jpg");
addImage("office_tel", "../img/office_tel6.jpg");
addImage("office_tel", "../img/office_tel7.jpeg");
addImage("office_tel", "../img/office_tel8.jpg");
addImage("office_tel", "../img/office_tel9.jpg");
addImage("office_tel", "../img/office_tel10.avif");
addImage("office_tel", "../img/office_tel11.jpg");
