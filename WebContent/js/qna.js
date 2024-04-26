/**
 * 
 */document.getElementById('inquiryForm').addEventListener('submit', function(event) {
    event.preventDefault(); // 폼 제출 기본 동작 방지

    // 폼 입력값 가져오기
    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // 팝업 생성
    var popup = document.createElement('div');
    popup.className = 'popup';
    popup.innerHTML = `
        <div class="popup-content">
            <h2>문의사항이 접수되었습니다.</h2>
            <p>빠른 시일 내에 답변드리겠습니다.</p>
            <button id="popupCloseBtn">확인</button>
        </div>
    `;
    document.body.appendChild(popup);

    // 팝업 확인 버튼 이벤트 처리
    document.getElementById('popupCloseBtn').addEventListener('click', function() {
        document.body.removeChild(popup); // 팝업 제거
        window.location.href = "../index.html"; // index 페이지로 이동
    });
});