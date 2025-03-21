document.addEventListener("DOMContentLoaded", () => {
    function updateTransform() {
        const backEnd = document.getElementById("back-end-container");
        const developer = document.getElementById("developer-container");
        const newContent = document.getElementById("new-content");

        if (!backEnd || !developer || !newContent) return; // 요소가 없으면 함수 종료
        const windowWidth = window.innerWidth; // 브라우저 창의 가로 크기
        console.log("현재 화면 너비:", windowWidth); // 디버깅용

        if (window.innerWidth <= 914) {
            developer.style.transform = "translateY(320%)";
            backEnd.style.transform = "translateY(-60%)";

        }
        else if (window.innerWidth <= 1024) {
            developer.style.transform = "translateY(120%)";
            backEnd.style.transform = "translateY(-120%)";

        }
        else if (window.innerWidth <= 1034) {
            developer.style.transform = "translateY(120%)";
            backEnd.style.transform = "translateY(-120%)";

        }     else if (window.innerWidth <= 1198) {
            developer.style.transform = "translateY(110%)";
            backEnd.style.transform = "translateY(-315%)";

        } else if (window.innerWidth <= 1336) {
            developer.style.transform = "translateY(70%)";
            backEnd.style.transform = "translateY(-85%)";

        } else if (window.innerWidth <= 1369) {
            developer.style.transform = "translateY(55%)";
            backEnd.style.transform = "translateY(-85%)";

        } else if (window.innerWidth <= 1440) {
            developer.style.transform = "translateY(65%)";
            backEnd.style.transform = "translateY(-85%)";

        } else if (window.innerWidth <= 1600) {
            developer.style.transform = "translateY(60%)";
            backEnd.style.transform = "translateY(-75%)";

        } else if (window.innerWidth <= 1680) {
        developer.style.transform = "translateY(80%)";
        backEnd.style.transform = "translateY(-80%)";

        } else if (window.innerWidth >= 2560 && window.innerWidth <= 3440) {
            developer.style.transform = "translateY(80%)";
            backEnd.style.transform = "translateY(-60%)";

        } else {
            developer.style.transform = "translateY(55%)";
            backEnd.style.transform = "translateY(-75%)";
        }
    }

    // 처음 실행
    setTimeout(() => {
        updateTransform();

        // 새로운 내용 표시
        setTimeout(() => {
            const newContent = document.getElementById("new-content");
            newContent.style.display = "flex";
            newContent.style.opacity = "0";
            newContent.style.transition = "opacity 0.5s ease-in";

            setTimeout(() => {
                newContent.style.opacity = "1";
            }, 10);
        }, 1000);
    }, 600);

    // 창 크기 변경 시 적용
    window.addEventListener("resize", updateTransform);
});


$('#Starter-container').load('/html/Starter.html');
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

const wrap = document.getElementsByClassName('wrap')[0]; // 보일 영역
const container = document.getElementsByClassName('container');
let page = 0; // 영역 포지션 초기값
const lastPage = container.length - 1; // 마지막 페이지

window.addEventListener('wheel',(e)=>{
    e.preventDefault();
    if(e.deltaY > 0){
        page++;
    }else if(e.deltaY < 0){
        page--;
    }
    if(page < 0){
        page=0;
    }else if(page > lastPage){
        page = lastPage;
    }
    console.log(e.deltaY)
    wrap.style.top = page * -100 + 'vh';
},{passive:false}); // 디폴트 기능 제거 - 스크롤