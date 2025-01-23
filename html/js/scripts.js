document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        // 위/아래로 이동하는 애니메이션
        const backEnd = document.getElementById("back-end-container");
        backEnd.style.transform = "translateY(-67%)";

        const developer = document.getElementById("developer-container");
        developer.style.transform = "translateY(27%)";

        // 새로운 내용 표시
        setTimeout(() => {
            const newContent = document.getElementById("new-content");
            newContent.style.display = "flex"; // 새로운 콘텐츠를 표시
            newContent.style.opacity = "0";
            newContent.style.transition = "opacity 0.5s ease-in";

            setTimeout(() => {
                newContent.style.opacity = "1"; // 서서히 보이게
            }, 10);
        }, 1000); // 글자 이동 후 1초 뒤
    }, 600); // 화면 진입 후 0.6초 뒤
});

$('#Header-container').load('/html/Header.html');
$('#Aboutme-container').load('/html/Aboutme.html');
$('#interview-container').load('/html/Interview.html');
$('#Skills-container').load('/html/Skills.html');
$('#Portfolio-detail-container').load('/html/Portfolio-Details.html');
$('#Portfolio-container').load('/html/Portfolio.html');

const options = document.querySelectorAll('.option');

options.forEach(option => {
    option.addEventListener('click', () => {
        // 'selected' 클래스 제거
        document.querySelector('.option.selected').classList.remove('selected');
        // 클릭된 option에 'selected' 클래스 추가
        option.classList.add('selected');
    });
});

document.getElementById('openModal').addEventListener('click', function () {
    document.getElementById('modal').style.display = 'flex';
    document.body.style.overflow = 'hidden'; // 모달이 열리면 외부 스크롤 막기
});

// 기존 방식으로 모달 열기
document.getElementById('openModal').addEventListener('click', function () {
    openModal('modal1'); // 예시: 첫 번째 모달 열기
});

function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden'; // 모달이 열리면 외부 스크롤 막기
    }
}

// 모달 닫기
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = ''; // 모달이 닫히면 외부 스크롤 복원
    }
}

