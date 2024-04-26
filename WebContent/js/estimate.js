window.onload = function() {
    // 초기 설정
    initialize();
};

// 페이지 인덱스를 저장하는 변수
var currentPageIndex = 0;
// 페이지 ID 배열
var pages = ["sliderContainer", "structureSlider", "interiorSlider", "furnitureSlider"];

// 선택된 옵션 객체
var selectedOptions = {
    roomType: "",
    sizeType: "",
    structureType: "",
    interiorType: "",
    furnitureType: ""
};

// sliderContainer 변수 추가
var sliderContainer = document.getElementById("sliderContainer");

function initialize() {
    document.getElementById("roomSelect").value = "원룸";
    changeRoomType(document.getElementById("roomSelect").value);
    document.getElementById("sizeType").click();
    changeImage(selectedOptions.sizeType); 
    updateSelectedOptions();
}
function toggleSlider() {
    sliderContainer.style.display = sliderContainer.style.display === "none" ? "block" : "none";
    var furnitureSlider = document.getElementById("furnitureSlider");
    furnitureSlider.style.display = "none";
}


function toggleStructure() {
    // 구조 타입 페이지로 이동할 때 기본 이미지 업데이트
    changeImage(selectedOptions.structureType);
    var sliderContainer = document.getElementById("structureSlider");
    sliderContainer.style.display = "block";
    var furnitureSlider = document.getElementById("furnitureSlider");
    furnitureSlider.style.display = "none";
}


function toggleInteriorType() {
    var sliderContainer = document.getElementById("interiorSlider");
    sliderContainer.style.display = sliderContainer.style.display === "none" ? "block" : "none";
    var furnitureOptions = document.getElementById("furnitureOptions"); // 가구 선택 옵션을 담는 요소
    furnitureOptions.innerHTML = ""; // 기존에 있던 내용을 모두 지웁니다.
    furnitureOptions.style.display = "none"; // 가구 선택 옵션을 초기에는 숨깁니다.
}

function toggleFurnitureOptions(interiorType) {
    var furnitureOptions = document.getElementById('furnitureOptions');
    furnitureOptions.innerHTML = ""; // 가구 선택 옵션 초기화

    // 선택된 인테리어 타입에 따라 가구 선택 옵션을 추가
    switch (interiorType) {
        case "화이트톤":
            furnitureOptions.innerHTML = `
  			 <a href="#" class="category-type" onclick="toggleCategory('bed')">침대</a>
    			<div id="bedOptions" style="display: none;">
                <a href="#" class="furniture-type" onclick="changeFurniture('화이트 침대')">화이트 침대</a>
				<a href="#" class="furniture-type" onclick="changeFurniture('화이트 베개')">화이트 베개</a>
				<a href="#" class="furniture-type" onclick="changeFurniture('화이트 이불')">화이트 이불</a>
				<a href="#" class="furniture-type" onclick="changeFurniture('화이트 침구세트')">화이트 침구세트</a>
				<a href="#" class="furniture-type" onclick="changeFurniture('베이직 침대')">베이직 침대</a>
				<a href="#" class="furniture-type" onclick="changeFurniture('베이직 베개')">베이직 베개</a>
				<a href="#" class="furniture-type" onclick="changeFurniture('베이직 이불')">베이직 이불</a>
				<a href="#" class="furniture-type" onclick="changeFurniture('베이직 침구세트')">베이직 침구세트</a>
				</div>
			<a href="#" class="category-type" onclick="toggleCategory('sofa')">소파</a>	
				<div id="sofaOptions" style="display: none;">
				<a href="#" class="furniture-type" onclick="changeFurniture('화이트 소파')">화이트 소파</a>
				<a href="#" class="furniture-type" onclick="changeFurniture('베이직 소파')">베이직 소파</a>
				</div>
			<a href="#" class="category-type" onclick="toggleCategory('carpet')">카페트</a>	
				<div id="carpetOptions" style="display: none;">
				<a href="#" class="furniture-type" onclick="changeFurniture('화이트 카페트')">화이트 카페트</a>
				<a href="#" class="furniture-type" onclick="changeFurniture('베이직 카페트')">베이직 카페트</a>
				</div>
			<a href="#" class="category-type" onclick="toggleCategory('picture')">액자</a>	
				<div id="pictureOptions" style="display: none;">
				<a href="#" class="furniture-type" onclick="changeFurniture('화이트 액자')">화이트 액자</a>
				<a href="#" class="furniture-type" onclick="changeFurniture('베이직 액자')">베이직 액자</a>
				</div>
			<a href="#" class="category-type" onclick="toggleCategory('curten')">커튼</a>	
				<div id="curtenOptions" style="display: none;">			
				<a href="#" class="furniture-type" onclick="changeFurniture('화이트 커튼')">화이트 커튼</a>
				<a href="#" class="furniture-type" onclick="changeFurniture('베이직 커튼')">베이직 커튼</a>
				</div>
			<a href="#" class="category-type" onclick="toggleCategory('chair')">의자</a>	
				<div id="chairOptions" style="display: none;">			
				<a href="#" class="furniture-type" onclick="changeFurniture('화이트 의자')">화이트 의자</a>
				<a href="#" class="furniture-type" onclick="changeFurniture('베이직 의자')">베이직 의자</a>
				</div>
			<a href="#" class="category-type" onclick="toggleCategory('table')">테이블</a>	
				<div id="tableOptions" style="display: none;">			
				<a href="#" class="furniture-type" onclick="changeFurniture('화이트 테이블')">화이트 테이블</a>
				<a href="#" class="furniture-type" onclick="changeFurniture('베이직 테이블')">베이직 테이블</a>
				</div>
            `;
            break;
        case "블랙모노톤":
            furnitureOptions.innerHTML = `
  			 <a href="#" class="category-type" onclick="toggleCategory('bed')">침대</a>
    			<div id="bedOptions" style="display: none;">
                <a href="#" class="furniture-type" onclick="changeFurniture('블랙 침대')">블랙 침대</a>
				<a href="#" class="furniture-type" onclick="changeFurniture('블랙 베개')">블랙 베개</a>
				<a href="#" class="furniture-type" onclick="changeFurniture('블랙 이불')">블랙 이불</a>
				<a href="#" class="furniture-type" onclick="changeFurniture('블랙 침구세트')">블랙 침구세트</a>
				<a href="#" class="furniture-type" onclick="changeFurniture('화이트 침대')">화이트톤 침대</a>
				<a href="#" class="furniture-type" onclick="changeFurniture('화이트 베개')">화이트톤 베개</a>
				<a href="#" class="furniture-type" onclick="changeFurniture('화이트 이불')">화이트톤 이불</a>
				<a href="#" class="furniture-type" onclick="changeFurniture('화이트 침구세트')">화이트톤 침구세트</a>
				</div>
			<a href="#" class="category-type" onclick="toggleCategory('sofa')">소파</a>	
				<div id="sofaOptions" style="display: none;">
				<a href="#" class="furniture-type" onclick="changeFurniture('블랙 소파')">블랙 소파</a>
				<a href="#" class="furniture-type" onclick="changeFurniture('화이트 소파')">화이트톤 소파</a>
				</div>
			<a href="#" class="category-type" onclick="toggleCategory('carpet')">카페트</a>	
				<div id="carpetOptions" style="display: none;">
				<a href="#" class="furniture-type" onclick="changeFurniture('블랙 카페트')">블랙 카페트</a>
				<a href="#" class="furniture-type" onclick="changeFurniture('화이트 카페트')">화이트 카페트</a>
				</div>
			<a href="#" class="category-type" onclick="toggleCategory('picture')">액자</a>	
				<div id="pictureOptions" style="display: none;">
				<a href="#" class="furniture-type" onclick="changeFurniture('블랙 액자')">블랙 액자</a>
				<a href="#" class="furniture-type" onclick="changeFurniture('화이트 액자')">화이트 액자</a>
				</div>
			<a href="#" class="category-type" onclick="toggleCategory('curten')">커튼</a>	
				<div id="curtenOptions" style="display: none;">			
				<a href="#" class="furniture-type" onclick="changeFurniture('블랙 커튼')">블랙 커튼</a>
				<a href="#" class="furniture-type" onclick="changeFurniture('화이트 커튼')">화이트 커튼</a>
				</div>
			<a href="#" class="category-type" onclick="toggleCategory('chair')">의자</a>	
				<div id="chairOptions" style="display: none;">			
				<a href="#" class="furniture-type" onclick="changeFurniture('블랙 의자')">블랙 의자</a>
				<a href="#" class="furniture-type" onclick="changeFurniture('화이트 의자')">화이트 의자</a>
				</div>
			<a href="#" class="category-type" onclick="toggleCategory('table')">테이블</a>	
				<div id="tableOptions" style="display: none;">			
				<a href="#" class="furniture-type" onclick="changeFurniture('블랙 테이블')">블랙 테이블</a>
				<a href="#" class="furniture-type" onclick="changeFurniture('화이트 테이블')">화이트 테이블</a>
				<a href="#" class="furniture-type" onclick="changeFurniture('모노 테이블')">모노 테이블</a>
				</div>
            `;
            break;
        case "브라운톤":
            furnitureOptions.innerHTML = `
  			 <a href="#" class="category-type" onclick="toggleCategory('bed')">침대</a>
    			<div id="bedOptions" style="display: none;">
                <a href="#" class="furniture-type" onclick="changeFurniture('브라운 침대')">브라운 침대</a>
				<a href="#" class="furniture-type" onclick="changeFurniture('브라운 베개')">브라운 베개</a>
				<a href="#" class="furniture-type" onclick="changeFurniture('브라운 이불')">브라운 이불</a>
				<a href="#" class="furniture-type" onclick="changeFurniture('브라운 침구세트')">브라운 침구세트</a>
				</div>
			<a href="#" class="category-type" onclick="toggleCategory('sofa')">소파</a>	
				<div id="sofaOptions" style="display: none;">
				<a href="#" class="furniture-type" onclick="changeFurniture('브라운 소파')">브라운 소파</a>
				</div>
			<a href="#" class="category-type" onclick="toggleCategory('carpet')">카페트</a>	
				<div id="carpetOptions" style="display: none;">
				<a href="#" class="furniture-type" onclick="changeFurniture('브라운 카페트')">브라운 카페트</a>
				</div>
			<a href="#" class="category-type" onclick="toggleCategory('picture')">액자</a>	
				<div id="pictureOptions" style="display: none;">
				<a href="#" class="furniture-type" onclick="changeFurniture('브라운 액자')">브라운 액자</a>
				</div>
			<a href="#" class="category-type" onclick="toggleCategory('curten')">커튼</a>	
				<div id="curtenOptions" style="display: none;">			
				<a href="#" class="furniture-type" onclick="changeFurniture('브라운 커튼')">브라운 커튼</a>
				</div>
			<a href="#" class="category-type" onclick="toggleCategory('chair')">의자</a>	
				<div id="chairOptions" style="display: none;">			
				<a href="#" class="furniture-type" onclick="changeFurniture('브라운 의자')">브라운 의자</a>
				</div>
			<a href="#" class="category-type" onclick="toggleCategory('table')">테이블</a>	
				<div id="tableOptions" style="display: none;">			
				<a href="#" class="furniture-type" onclick="changeFurniture('브라운 테이블')">브라운 테이블</a>
				<a href="#" class="furniture-type" onclick="changeFurniture('화이트 테이블')">화이트 테이블</a>
				</div>
            `;
            break;
        case "커스텀":
            furnitureOptions.innerHTML = `
  			 <a href="#" class="category-type" onclick="toggleCategory('bed')">침대</a>
    			<div id="bedOptions" style="display: none;">
                <a href="#" class="furniture-type" onclick="changeFurniture('블랙 침대')">블랙 침대</a>
				<a href="#" class="furniture-type" onclick="changeFurniture('블랙 베개')">블랙 베개</a>
				<a href="#" class="furniture-type" onclick="changeFurniture('블랙 이불')">블랙 이불</a>
				<a href="#" class="furniture-type" onclick="changeFurniture('블랙 침구세트')">블랙 침구세트</a>
				<a href="#" class="furniture-type" onclick="changeFurniture('화이트 침대')">화이트톤 침대</a>
				<a href="#" class="furniture-type" onclick="changeFurniture('화이트 베개')">화이트톤 베개</a>
				<a href="#" class="furniture-type" onclick="changeFurniture('화이트 이불')">화이트톤 이불</a>
				<a href="#" class="furniture-type" onclick="changeFurniture('화이트 침구세트')">화이트톤 침구세트</a>
                <a href="#" class="furniture-type" onclick="changeFurniture('브라운 침대')">브라운 침대</a>
				<a href="#" class="furniture-type" onclick="changeFurniture('브라운 베개')">브라운 베개</a>
				<a href="#" class="furniture-type" onclick="changeFurniture('브라운 이불')">브라운 이불</a>
				<a href="#" class="furniture-type" onclick="changeFurniture('브라운 침구세트')">브라운 침구세트</a>
                <a href="#" class="furniture-type" onclick="changeFurniture('블루 침대')">블루 침대</a>
				<a href="#" class="furniture-type" onclick="changeFurniture('블루 베개')">블루 베개</a>
				<a href="#" class="furniture-type" onclick="changeFurniture('블루 이불')">블루 이불</a>
				<a href="#" class="furniture-type" onclick="changeFurniture('블루 침구세트')">블루 침구세트</a>
                <a href="#" class="furniture-type" onclick="changeFurniture('베이직 침대')">베이직 침대</a>
				<a href="#" class="furniture-type" onclick="changeFurniture('베이직 베개')">베이직 베개</a>
				<a href="#" class="furniture-type" onclick="changeFurniture('베이직 이불')">베이직 이불</a>
				<a href="#" class="furniture-type" onclick="changeFurniture('베이직 침구세트')">베이직 침구세트</a>
				</div>
			<a href="#" class="category-type" onclick="toggleCategory('sofa')">소파</a>	
				<div id="sofaOptions" style="display: none;">
				<a href="#" class="furniture-type" onclick="changeFurniture('화이트 소파')">화이트 소파</a>
				<a href="#" class="furniture-type" onclick="changeFurniture('블랙 소파')">블랙 소파</a>
				<a href="#" class="furniture-type" onclick="changeFurniture('브라운 소파')">브라운 소파</a>
				<a href="#" class="furniture-type" onclick="changeFurniture('블루 소파')">블루 소파</a>
				<a href="#" class="furniture-type" onclick="changeFurniture('베이직 소파')">베이직 소파</a>
				</div>
			<a href="#" class="category-type" onclick="toggleCategory('carpet')">카페트</a>	
				<div id="carpetOptions" style="display: none;">
				<a href="#" class="furniture-type" onclick="changeFurniture('화이트 카페트')">화이트 카페트</a>
				<a href="#" class="furniture-type" onclick="changeFurniture('블랙 카페트')">블랙 카페트</a>
				<a href="#" class="furniture-type" onclick="changeFurniture('브라운 카페트')">브라운 카페트</a>
				<a href="#" class="furniture-type" onclick="changeFurniture('블루 카페트')">블루 카페트</a>
				<a href="#" class="furniture-type" onclick="changeFurniture('베이직 카페트')">베이직 카페트</a>
				</div>
			<a href="#" class="category-type" onclick="toggleCategory('picture')">액자</a>	
				<div id="pictureOptions" style="display: none;">
				<a href="#" class="furniture-type" onclick="changeFurniture('화이트 액자')">화이트 액자</a>
				<a href="#" class="furniture-type" onclick="changeFurniture('블랙 액자')">블랙 액자</a>
				<a href="#" class="furniture-type" onclick="changeFurniture('브라운 액자')">브라운 액자</a>
				<a href="#" class="furniture-type" onclick="changeFurniture('블루 액자')">블루 액자</a>
				<a href="#" class="furniture-type" onclick="changeFurniture('베이직 액자')">베이직 액자</a>
				</div>
			<a href="#" class="category-type" onclick="toggleCategory('curten')">커튼</a>	
				<div id="curtenOptions" style="display: none;">			
				<a href="#" class="furniture-type" onclick="changeFurniture('화이트 커튼')">화이트 커튼</a>
				<a href="#" class="furniture-type" onclick="changeFurniture('블랙 커튼')">블랙 커튼</a>
				<a href="#" class="furniture-type" onclick="changeFurniture('브라운 커튼')">브라운 커튼</a>
				<a href="#" class="furniture-type" onclick="changeFurniture('블루 커튼')">블루 커튼</a>
				<a href="#" class="furniture-type" onclick="changeFurniture('베이직 커튼')">베이직 커튼</a>
				</div>
			<a href="#" class="category-type" onclick="toggleCategory('chair')">의자</a>	
				<div id="chairOptions" style="display: none;">			
				<a href="#" class="furniture-type" onclick="changeFurniture('화이트 의자')">화이트 의자</a>
				<a href="#" class="furniture-type" onclick="changeFurniture('블랙 의자')">블랙 의자</a>
				<a href="#" class="furniture-type" onclick="changeFurniture('브라운 의자')">브라운 의자</a>
				<a href="#" class="furniture-type" onclick="changeFurniture('블루 의자')">블루 의자</a>
				<a href="#" class="furniture-type" onclick="changeFurniture('베이직 의자')">베이직 의자</a>
				</div>
			<a href="#" class="category-type" onclick="toggleCategory('table')">테이블</a>	
				<div id="tableOptions" style="display: none;">	
				<a href="#" class="furniture-type" onclick="changeFurniture('화이트 테이블')">화이트 테이블</a>
				<a href="#" class="furniture-type" onclick="changeFurniture('블랙 테이블')">블랙 테이블</a>
				<a href="#" class="furniture-type" onclick="changeFurniture('브라운 테이블')">브라운 테이블</a>
				<a href="#" class="furniture-type" onclick="changeFurniture('블루 테이블')">블루 테이블</a>						
				<a href="#" class="furniture-type" onclick="changeFurniture('베이직 테이블')">베이직 테이블</a>
				</div>
            `;
            break;
        default:
            // 기본값으로 화이트톤 가구 선택
            furnitureOptions.innerHTML = `
                <a href="#" class="furniture-type" onclick="changeFurniture('침대')">화이트톤 침대</a>
                <a href="#" class="furniture-type" onclick="changeFurniture('소파')">화이트톤 소파</a>
                <!-- 기타 가구 옵션 추가 -->
            `;
    }
}
function toggleCategory(category) {
    var optionsContainer = document.getElementById(category + "Options");
    optionsContainer.style.display = optionsContainer.style.display === "none" ? "block" : "none";
}

function changeRoomType(roomType) {
    selectedOptions.roomType = roomType;
    // 평수 타입 선택 옵션 초기화
    sliderContainer.innerHTML = "";

    // 선택된 방 유형에 따라 평수 타입 선택 옵션 추가
    switch (roomType) {
        case "원룸":
            addSizeOption("4~6평");
            addSizeOption("7~9평");
            addSizeOption("10평 이상");
            // 원룸 선택 시 기본적으로 첫 번째 평수 타입을 선택한 것으로 설정
            selectedOptions.sizeType = "4~6평";
            break;
        case "투룸":
            addSizeOption("10~14평");
            addSizeOption("15평 이상");
            // 투룸 선택 시 기본적으로 첫 번째 평수 타입을 선택한 것으로 설정
            selectedOptions.sizeType = "10~14평";
            break;
        case "오피스텔":
            addSizeOption("7~9평");
            addSizeOption("10평 이상");
            // 오피스텔 선택 시 기본적으로 첫 번째 평수 타입을 선택한 것으로 설정
            selectedOptions.sizeType = "7~9평";
            break;
        default:
            // 기본값으로 원룸 설정
            addSizeOption("4~6평");
            addSizeOption("7~9평");
            addSizeOption("10평 이상");
            // 원룸 선택 시 기본적으로 첫 번째 평수 타입을 선택한 것으로 설정
            selectedOptions.sizeType = "4~6평";
    }
    // 이미지 변경
    changeImage(selectedOptions.sizeType);
    updateSelectedOptions();
}

// 평수 타입 선택 옵션을 추가하는 함수
function addSizeOption(sizeType) {
    var sizeLink = document.createElement("a");
    sizeLink.href = "#";
    sizeLink.className = "size-type";
    sizeLink.textContent = sizeType;
    sizeLink.onclick = function() {
        // 선택된 사이즈 타입을 변경하고 이미지 업데이트
        changeImage(sizeType);
        // 선택된 사이즈 타입을 업데이트하여 화면에 표시
        selectedOptions.sizeType = sizeType;
        updateSelectedOptions();
        // 평수 타입 옵션을 클릭했을 때 다음 페이지로 이동
        showNextPage();
    };
    sliderContainer.appendChild(sizeLink);
}

function changeImage(selectedSize) {
    var imageContainer = document.getElementById("imageContainer").querySelector("img");
    var imagePath = "";
    imageContainer.style.width = "1000px"; // 이미지 너비 조절
    imageContainer.style.height = "auto"; // 이미지 높이 자동 조절 (비율 유지)

    switch(selectedSize) {
        case "4~6평":
            imagePath = "../img/4.png";
            break;
        case "7~9평":
            imagePath = "../img/8.png";
            break;
        case "10평 이상":
            imagePath = "../img/10.png";
            break;
        case "15평 이상":
            imagePath = "../img/15.jpg";
            break;
        default:
            imagePath = "../img/101.jpg";
    }

    imageContainer.src = imagePath;
    selectedOptions.sizeType = selectedSize;
}

function changeStructure(selectedStructure) {
    var imageContainer = document.getElementById("imageContainer").querySelector("img");
    var imagePath = "";
    imageContainer.style.width = "700px"; // 이미지 너비 조절
    imageContainer.style.height = "auto"; // 이미지 높이 자동 조절 (비율 유지)

    switch(selectedStructure) {
        case "오픈형":
            imagePath = "../img/4.jpeg";
            break;
        case "분리형":
            imagePath = "../img/type3.jpg";
            break;
        case "복층형":
            imagePath = "../img/bok.jpg";
            break;
        default:
            imagePath = "../img/3.jpg";
    }
    imageContainer.src = imagePath;
    selectedOptions.structureType = selectedStructure;
}

function changeInterior(selectedInterior) {
    var imageContainer = document.getElementById("imageContainer").querySelector("img");
    var imagePath = "";
     imageContainer.style.width = "1000px"; // 이미지 너비 조절
	 imageContainer.style.height = "800px"; // 이미지 높이 자동 조절 (비율 유지)

    switch(selectedInterior) {
        case "화이트톤":
            imagePath = "../img/white5.jpg";
            break;
        case "블랙모노톤":
            imagePath = "../img/995DEB4A5E12F92025.jpg";
            break;
        case "브라운톤":
            imagePath = "../img/005.jpg";
            break;
        case "커스텀":
            imagePath = "../img/custom.jpg";
            break;
        default:
            imagePath = "../img/white5.jpg";
    }
    imageContainer.src = imagePath;
    selectedOptions.interiorType = selectedInterior;
    toggleFurnitureOptions(selectedInterior);
}

function changeFurniture(selectedFurniture) {
   var imageContainer = document.getElementById("imageContainer").querySelector("img");
    var imagePath = "";
     imageContainer.style.width = "1000px"; // 이미지 너비 조절
	 imageContainer.style.height = "800px"; // 이미지 높이 자동 조절 (비율 유지)
    switch(selectedFurniture) {
        case "화이트 침대":
            imagePath = "../img/whitebed.png";
            break;
        case "화이트 베개":
           imagePath = "../img/whitepillo.jpg";
            break;
        case "화이트 이불":
          imagePath = "../img/white.jpg";
            break;
        case "화이트 침구세트":
            imagePath = "../img/whitebedset.jpg";
            break;
        case "화이트 소파":
            imagePath = "../img/whitesofa.jpg";
            break;
        case "화이트 액자":
            imagePath = "../img/whitephoto.jpg";
            break;
        case "화이트 카페트":
            imagePath = "../img/whitecarpet.jpg";
            break;
        case "화이트 커튼":
            imagePath = "../img/whitecuton.jpg";
            break;
        case "화이트 의자":
            imagePath = "../img/whitechair.jpg";
            break;
        case "화이트 테이블":
            imagePath = "../img/whitetable.jpg";
            break;
               case "블랙 침대":
            imagePath = "../img/blackbed.jpeg";
            break;
        case "블랙 베개":
            imagePath = "../img/blackpillo.jpg";
            break;
        case "블랙 이불":
            imagePath = "../img/black.jpg";
            break;
        case "블랙 침구세트":
            imagePath = "../img/blackset.jpg";
            break;
        case "블랙 소파":
            imagePath = "../img/blacksofa.jpg";
            break;
        case "블랙 액자":
            imagePath = "../img/blackphoto.jpg";
            break;
        case "블랙 카페트":
            imagePath = "../img/blackcarpet.jpg";
            break;
        case "블랙 커튼":
            imagePath = "../img/blackcutton.jpg";
            break;
        case "블랙 의자":
            imagePath = "../img/blackchair.jpg";
            break;
        case "블랙 테이블":
           imagePath = "../img/blacktable.jpg";
            break;
        case "브라운 침대":
            imagePath = "../img/brownbed.jpg";
            break;
        case "브라운 베개":
            imagePath = "../img/brownpillo.jpg";
            break;
        case "브라운 이불":
            imagePath = "../img/brown.jpg";
            break;
        case "브라운 침구세트":
            imagePath = "../img/brownset.jpg";
            break;
        case "브라운 소파":
            imagePath = "../img/brownsofa.jpg";
            break;
        case "브라운 액자":
            imagePath = "../img/brownphoto.jpg";
            break;
        case "브라운 카페트":
            imagePath = "../img/browncarpet.jpg";
            break;
        case "브라운 커튼":
            imagePath = "../img/browncutton.jpg";
            break;
        case "브라운 의자":
            imagePath = "../img/brownchair.jpg";
            break;
        case "브라운 테이블":
            imagePath = "../img/browntabel.jpg";
            break;
        case "블루 침대":
            imagePath = "../img/bluebed.jpg";
            break;
        case "블루 베개":
            imagePath = "../img/bluepillo.jpg";
            break;
        case "블루 이불":
            imagePath = "../img/blue.jpg";
            break;
        case "블루 침구세트":
            imagePath = "../img/blueset.jpg";
            break;
        case "블루 소파":
           imagePath = "../img/bluesofa.jpg";
            break;
        case "블루 액자":
            imagePath = "../img/bluephoto.jpg";
            break;
        case "블루 카페트":
            imagePath = "../img/bluecarpet.jpg";
            break;
        case "블루 커튼":
           imagePath = "../img/bluecutton.jpg";
            break;
        case "블루 의자":
           imagePath = "../img/bluechair.jpg";
            break;
        case "블루 테이블":
            imagePath = "../img/bluetable.jpg";
            break;
        case "베이직 침대":
            imagePath = "../img/basicbed.jpg";
            break;
        case "베이직 베개":
            imagePath = "../img/basicpillo.jpg";
            break;
        case "베이직 이불":
            imagePath = "../img/basic.jpg";
            break;
        case "베이직 침구세트":
            imagePath = "../img/basicset.png";
            break;
        case "베이직 소파":
            imagePath = "../img/basicsofa.jpg";
            break;
        case "베이직 액자":
            imagePath = "../img/basicphoto.jpg";
            break;
        case "베이직 카페트":
            imagePath = "../img/basiccarpet.jpg";
            break;
        case "베이직 커튼":
            imagePath = "../img/basiccutton.jpg";
            break;
        case "베이직 의자":
            imagePath = "../img/basicchair.jpg";
            break;
        case "베이직 테이블":
            imagePath = "../img/basicchair.jpg";
            break;
        default:
            // 기본적으로는 선택된 가구가 없을 때의 이미지로 변경
            changeImage("../img/whitebed.png");
    }
 	imageContainer.src = imagePath;
    if (selectedOptions.furnitureType !== "") {
        selectedOptions.furnitureType += "\n"+ selectedFurniture;
    } else {
        selectedOptions.furnitureType = selectedFurniture;
    }
    totalFurnitureCost += furniturePrices[selectedFurniture];
    updateTotalFurnitureCost();
    updateSelectedOptions();
}
// 선택된 가구의 총 가격을 저장하는 변수
var totalFurnitureCost = 0;

// 각 가구의 가격을 정의한 객체
var furniturePrices = {
    "화이트 침대": 500000,
    "화이트 베개": 15000,
    "화이트 이불": 150000,
    "화이트 침구세트": 199000,
    "화이트 소파": 400000,
	"화이트 카페트": 50000,
	"화이트 액자": 5000,
	"화이트 커튼": 25000,
	"화이트 의자": 30000,
	"화이트 테이블": 50000,
	
	"블랙 침대": 500000,
    "블랙 베개": 15000,
    "블랙 이불": 150000,
    "블랙 침구세트": 199000,
    "블랙 소파": 400000,
	"블랙 카페트": 50000,
	"블랙 액자": 5000,
	"블랙 커튼": 25000,
	"블랙 의자": 30000,
	"블랙 테이블": 50000,
	
	"브라운 침대": 500000,
    "브라운 베개": 15000,
    "브라운 이불": 150000,
    "브라운 침구세트": 199000,
    "브라운 소파": 400000,
	"브라운 카페트": 50000,
	"브라운 액자": 5000,
	"브라운 커튼": 25000,
	"브라운 의자": 30000,
	"브라운 테이블": 50000,
	
	"블루 침대": 500000,
    "블루 베개": 15000,
    "블루 이불": 150000,
    "블루 침구세트": 199000,
    "블루 소파": 400000,
	"블루 카페트": 50000,
	"블루 액자": 5000,
	"블루 커튼": 25000,
	"블루 의자": 30000,
	"블루 테이블": 50000,
	
	"베이직 침대": 500000,
    "베이직 베개": 15000,
    "베이직 이불": 150000,
    "베이직 침구세트": 199000,
    "베이직 소파": 400000,
	"베이직 카페트": 50000,
	"베이직 액자": 5000,
	"베이직 커튼": 25000,
	"베이직 의자": 30000,
	"베이직 테이블": 50000,
	
	"모노 테이블": 50000,
	"모노 의자": 50000

};

function updateTotalFurnitureCost() {
    var totalCostElement = document.getElementById("totalCost");
    totalCostElement.textContent = "총 가격: " + totalFurnitureCost.toLocaleString() + "원";
}

function removeFurniture(furnitureName) {
    // 선택된 가구의 가격 차감
    totalFurnitureCost -= furniturePrices[furnitureName];

    // 총 가격 업데이트
    updateTotalFurnitureCost();

    // 선택된 가구 내역에서 해당 가구 제거
    for (var option in selectedOptions) {
        if (selectedOptions[option] !== "") {
            var remainingFurnitures = selectedOptions[option].split("\n").filter(function(furniture) {
                return furniture !== furnitureName;
            });
            selectedOptions[option] = remainingFurnitures.join("\n");
        }
    }
}
function showNextPage() {
    // 현재 보이는 슬라이더 컨테이너의 ID를 가져옴
    var currentSliderId = getCurrentSliderId();

    // 현재 보이는 슬라이더의 인덱스를 찾음
    var currentIndex = pages.indexOf(currentSliderId);

    // 현재 인덱스가 마지막 페이지보다 작은 경우 다음 페이지로 이동
    if (currentIndex < pages.length - 1) {
        // 선택된 옵션을 먼저 업데이트
        updateSelectedOptions();

        // 현재 페이지를 숨기고 다음 페이지를 보이도록 설정
        document.getElementById(currentSliderId).style.display = "none";
        var nextPageId = pages[currentIndex + 1];
        document.getElementById(nextPageId).style.display = "block";

        // 모든 페이지에 대해 선택 영역을 숨기거나 보이도록 설정
        switch(nextPageId) {
            case "structureSlider":
                document.getElementById("structureOptions").style.display = "block";
                document.getElementById("interiorOptions").style.display = "none";
                document.getElementById("furnitureOptions").style.display = "none";
                break;
            case "interiorSlider":
                document.getElementById("structureOptions").style.display = "block";
                document.getElementById("interiorOptions").style.display = "block";
                document.getElementById("furnitureOptions").style.display = "none";
                break;
            case "furnitureSlider":
                document.getElementById("structureOptions").style.display = "block";
                document.getElementById("interiorOptions").style.display = "block";
                document.getElementById("furnitureOptions").style.display = "block";
                break;
            default:
                // 기타 페이지일 경우 선택 영역을 보이지 않도록 설정
                document.getElementById("structureOptions").style.display = "none";
                document.getElementById("interiorOptions").style.display = "none";
                document.getElementById("furnitureOptions").style.display = "none";
        }

        // 이미지 업데이트
        switch(nextPageId) {
            case "sliderContainer":
                // 아무런 동작 필요 없음
                break;
            case "structureSlider":
                // 구조 타입 페이지이므로 이미지 업데이트
                changeImage(selectedOptions.sizeType);
                break;
            case "interiorSlider":
                // 인테리어 타입 페이지이므로 이미지 업데이트
                changeImage(selectedOptions.structureType);
                break;
            case "furnitureSlider":
                // 가구 타입 페이지이므로 이미지 업데이트
                changeImage(selectedOptions.interiorType);
                break;
            default:
                // 기타 페이지일 경우 아무런 동작 필요 없음
        }
    }
    // 페이지 이동 후에 선택된 옵션을 업데이트
    updateSelectedOptions();
}

function showPreviousPage() {
    // 현재 보이는 슬라이더 컨테이너의 ID를 가져옴
    var currentSliderId = getCurrentSliderId();

    // 현재 보이는 슬라이더의 인덱스를 찾음
    var currentIndex = pages.indexOf(currentSliderId);

    // 현재 인덱스가 첫 번째 페이지보다 큰 경우 이전 페이지로 이동
    if (currentIndex > 0) {
        // 현재 페이지를 숨기고 이전 페이지를 보이도록 설정
        document.getElementById(currentSliderId).style.display = "none";
        var previousPageId = pages[currentIndex - 1];
        document.getElementById(previousPageId).style.display = "block";

        // 페이지 이동 후에 선택된 옵션을 업데이트
        updateSelectedOptions();
    } else {
        // 만약 첫 번째 페이지인 경우, 인테리어 단계로 돌아가기
        document.getElementById(currentSliderId).style.display = "none";
        document.getElementById("interiorSlider").style.display = "block";

        // 선택된 옵션 업데이트
        updateSelectedOptions();
    }
}

function getCurrentSliderId() {
    // 현재 활성화된 슬라이더 컨테이너를 찾아서 ID 반환
    var sliderContainers = document.querySelectorAll(".slider-container");
    for (var i = 0; i < sliderContainers.length; i++) {
        if (sliderContainers[i].style.display !== "none") {
            return sliderContainers[i].id;
        }
    }
}
function updateSelectedOptions() {
    var selectedOptionsTable = document.getElementById('selectedOptionsTable');
    // 기존 행 제거
    selectedOptionsTable.innerHTML = `
        <tr>
            <th>옵션</th>
            <th>선택 내역</th>
            <th>삭제</th>
        </tr>
    `;
    // 각 가구 옵션에 대해 테이블에 행 추가
    for (var option in selectedOptions) {
        if (selectedOptions[option] !== "") {
            // 선택된 가구가 여러 개인 경우 각 가구를 개별적으로 처리
            var selectedFurnitures = selectedOptions[option].split("\n");
            selectedFurnitures.forEach(function(selectedFurniture) {
                var row = document.createElement('tr');

                // 옵션 이름
                var optionCell = document.createElement('td');
                optionCell.textContent = option;
                row.appendChild(optionCell);

                // 선택 내역
                var valueCell = document.createElement('td');
                valueCell.textContent = selectedFurniture;
                row.appendChild(valueCell);

                // 삭제 버튼 (가구 옵션인 경우에만 추가)
                if (option === "furnitureType") {
                    var removeButtonCell = document.createElement('td');
                    var removeButton = document.createElement('button');
                    removeButton.className = 'remove-button'; 
                    removeButton.textContent = '삭제';
                    removeButton.onclick = function() {
                        // 선택된 옵션 삭제
                        var optionName = this.parentElement.parentElement.children[0].textContent;
                        var selectedFurniture = this.parentElement.parentElement.children[1].textContent;

                        // 선택된 가구 중 삭제할 가구를 제외한 나머지 가구를 다시 선택 내역에 할당
                        selectedOptions[optionName] = selectedOptions[optionName].split("\n").filter(function(furniture) {
                            return furniture !== selectedFurniture;
                        }).join("\n");

                        // 테이블에서 해당 행 삭제
                        this.parentElement.parentElement.remove();

                        // 삭제할 때 총 금액 업데이트
                        removeFurniture(selectedFurniture);
                    };
                    removeButtonCell.appendChild(removeButton);
                    row.appendChild(removeButtonCell);
                }

                // 테이블에 행 추가
                selectedOptionsTable.appendChild(row);
            });
        }
    }
}

document.querySelector('.order-button').addEventListener('click', function() {
    // 팝업창 표시
    alert("주문이 완료되었습니다.");
});

// 주문 완료 팝업창에서 확인 버튼 클릭 시 index.html로 돌아가기
document.querySelector('.ok-button').addEventListener('click', function() {
    // index.html로 이동
    window.location.href = "../index.html"; // index.html에 맞게 경로를 수정해주세요
});
