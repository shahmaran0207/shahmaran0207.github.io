document.addEventListener("DOMContentLoaded", () => {
    // 페이지 로드 시 body overflow 초기화
    document.body.style.overflow = '';
    
    // 모든 모달 닫기
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        modal.classList.remove('active');
    });
    
    function updateTransform() {
        const backEnd = document.getElementById("back-end-container");
        const developer = document.getElementById("developer-container");
        const newContent = document.getElementById("new-content");

        if (!backEnd || !developer || !newContent) return;
        
        const windowWidth = window.innerWidth;
        console.log("현재 화면 너비:", windowWidth);

        // 초세밀 반응형 글자 위치 조정 (위아래 글자가 화면 끝에 보이도록)
        if (windowWidth <= 360) {
            developer.style.transform = "translateY(20%)";
            backEnd.style.transform = "translateY(-20%)";
        } else if (windowWidth <= 375) {
            developer.style.transform = "translateY(20%)";
            backEnd.style.transform = "translateY(-20%)";
        } else if (windowWidth <= 390) {
            developer.style.transform = "translateY(20%)";
            backEnd.style.transform = "translateY(-20%)";
        } else if (windowWidth <= 414) {
            developer.style.transform = "translateY(20%)";
            backEnd.style.transform = "translateY(-20%)";
        } else if (windowWidth <= 480) {
            developer.style.transform = "translateY(20%)";
            backEnd.style.transform = "translateY(-20%)";
        } else if (windowWidth <= 568) {
            developer.style.transform = "translateY(20%)";
            backEnd.style.transform = "translateY(-20%)";
        } else if (windowWidth <= 667) {
            developer.style.transform = "translateY(20%)";
            backEnd.style.transform = "translateY(-20%)";
        } else if (windowWidth <= 768) {
            developer.style.transform = "translateY(20%)";
            backEnd.style.transform = "translateY(-20%)";
        } else if (windowWidth <= 810) {
            developer.style.transform = "translateY(20%)";
            backEnd.style.transform = "translateY(-20%)";
        } else if (windowWidth <= 834) {
            developer.style.transform = "translateY(20%)";
            backEnd.style.transform = "translateY(-20%)";
        } else if (windowWidth <= 1023) {
            developer.style.transform = "translateY(20%)";
            backEnd.style.transform = "translateY(-20%)";
        } else if (windowWidth <= 1112) {
            developer.style.transform = "translateY(20%)";
            backEnd.style.transform = "translateY(-20%)";
        } else if (windowWidth <= 1194) {
            developer.style.transform = "translateY(20%)";
            backEnd.style.transform = "translateY(-20%)";
        } else if (windowWidth <= 1280) {
            developer.style.transform = "translateY(20%)";
            backEnd.style.transform = "translateY(-20%)";
        } else if (windowWidth <= 1365) {
            developer.style.transform = "translateY(20%)";
            backEnd.style.transform = "translateY(-20%)";
        } else if (windowWidth <= 1440) {
            developer.style.transform = "translateY(20%)";
            backEnd.style.transform = "translateY(-20%)";
        } else if (windowWidth <= 1535) {
            developer.style.transform = "translateY(20%)";
            backEnd.style.transform = "translateY(-20%)";
        } else if (windowWidth <= 1680) {
            developer.style.transform = "translateY(20%)";
            backEnd.style.transform = "translateY(-20%)";
        } else if (windowWidth <= 1920) {
            developer.style.transform = "translateY(20%)";
            backEnd.style.transform = "translateY(-20%)";
        } else if (windowWidth <= 2048) {
            developer.style.transform = "translateY(20%)";
            backEnd.style.transform = "translateY(-20%)";
        } else if (windowWidth <= 2560) {
            developer.style.transform = "translateY(20%)";
            backEnd.style.transform = "translateY(-20%)";
        } else if (windowWidth <= 3440) {
            developer.style.transform = "translateY(20%)";
            backEnd.style.transform = "translateY(-20%)";
        } else if (windowWidth <= 5120) {
            developer.style.transform = "translateY(20%)";
            backEnd.style.transform = "translateY(-20%)";
        } else {
            developer.style.transform = "translateY(20%)";
            backEnd.style.transform = "translateY(-20%)";
        }
    }

    // 애니메이션 시작
    setTimeout(() => {
        updateTransform();

        // 최종 콘텐츠 표시
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

// 반응형 텍스트 줄바꿈 처리
window.addEventListener("resize", function () {
    let element = document.querySelector(".starter-content.break");
    if (element) {
        if (window.innerWidth <= 1080) {
            element.innerHTML = "경험을 지닌,<br>";
        } else {
            element.innerHTML = "경험을 지닌,";
        }
    }
});

// 스크롤 인디케이터 클릭 이벤트
document.addEventListener('DOMContentLoaded', function() {
    const scrollLink = document.querySelector('.scroll-container a');
    if (scrollLink) {
        scrollLink.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('스크롤 인디케이터 클릭됨');
            // 나중에 다른 섹션으로 스크롤하는 코드 추가 예정
        });
    }

    // Aboutme, Interview, Skills 콘텐츠 동적 로드
    loadContent();
});

// 콘텐츠 로드 함수
async function loadContent() {
    const contentContainer = document.querySelector('.profile-scroll-content');
    if (!contentContainer) {
        console.error('profile-scroll-content 요소를 찾을 수 없습니다.');
        return;
    }

    try {
        console.log('HTML 파일 로드 시작...');
        
        // 각 HTML 파일 로드
        const [aboutmeResponse, interviewResponse, skillsResponse, portfolioResponse, portfolioDetailsResponse] = await Promise.all([
            fetch('html/Aboutme.html').catch(err => { console.error('Aboutme.html 로드 실패:', err); throw err; }),
            fetch('html/Interview.html').catch(err => { console.error('Interview.html 로드 실패:', err); throw err; }),
            fetch('html/Skills.html').catch(err => { console.error('Skills.html 로드 실패:', err); throw err; }),
            fetch('html/Portfolio.html').catch(err => { console.error('Portfolio.html 로드 실패:', err); throw err; }),
            fetch('html/Portfolio-Details.html').catch(err => { console.error('Portfolio-Details.html 로드 실패:', err); throw err; })
        ]);

        console.log('모든 파일 응답 받음, 텍스트 변환 중...');

        const aboutmeHTML = await aboutmeResponse.text();
        const interviewHTML = await interviewResponse.text();
        const skillsHTML = await skillsResponse.text();
        const portfolioHTML = await portfolioResponse.text();
        const portfolioDetailsHTML = await portfolioDetailsResponse.text();

        console.log('텍스트 변환 완료, DOM에 삽입 중...');

        // 콘텐츠 삽입
        contentContainer.innerHTML = aboutmeHTML + interviewHTML + skillsHTML + portfolioHTML + portfolioDetailsHTML;
        
        console.log('콘텐츠 로드 완료');
        
        // 콘텐츠 로드 후 body overflow 다시 초기화
        document.body.style.overflow = '';
        
        // 모든 모달 닫기
        const modals = document.querySelectorAll('.modal');
        modals.forEach(modal => {
            modal.classList.remove('active');
        });
        
        // 콘텐츠 로드 후 스크롤 이벤트 리스너 추가
        setupScrollTitleChange();
        
        // Portfolio 필터 기능 추가
        setupPortfolioFilter();
    } catch (error) {
        console.error('콘텐츠 로드 실패:', error);
        console.error('오류 상세:', error.message, error.stack);
    }
}

// 스크롤에 따라 타이틀 변경
function setupScrollTitleChange() {
    const scrollContent = document.querySelector('.profile-scroll-content');
    const titleElement = document.querySelector('.profile-title-fixed');
    
    console.log('setupScrollTitleChange 호출됨');
    console.log('scrollContent:', scrollContent);
    console.log('titleElement:', titleElement);
    
    if (!scrollContent || !titleElement) {
        console.log('scrollContent 또는 titleElement가 없음');
        return;
    }
    
    // 섹션들 미리 찾아두기
    const interviewSection = document.querySelector('.interview-container');
    const skillsSection = document.querySelector('#high-skill');
    const portfolioSection = document.querySelector('.portfolio-section');
    
    console.log('interviewSection:', interviewSection);
    console.log('skillsSection:', skillsSection);
    console.log('portfolioSection:', portfolioSection);
    
    if (!interviewSection || !skillsSection) {
        console.log('interviewSection 또는 skillsSection이 없음');
        return;
    }
    
    scrollContent.addEventListener('scroll', function() {
        const scrollTop = scrollContent.scrollTop;
        const containerRect = scrollContent.getBoundingClientRect();
        
        // getBoundingClientRect로 현재 뷰포트 기준 위치 계산 후 스크롤 위치 더해서 절대 위치 계산
        const interviewTop = interviewSection.getBoundingClientRect().top - containerRect.top + scrollTop;
        const skillsTop = skillsSection.getBoundingClientRect().top - containerRect.top + scrollTop;
        const portfolioTop = portfolioSection ? portfolioSection.getBoundingClientRect().top - containerRect.top + scrollTop : Infinity;
        
        console.log('scrollTop:', scrollTop, 'skillsTop:', skillsTop, 'portfolioTop:', portfolioTop);
        
        // 스크롤 위치에 따라 타이틀 변경 (300px 여유를 둬서 섹션이 보이기 시작할 때 변경)
        if (portfolioSection && scrollTop >= portfolioTop - 300) {
            titleElement.textContent = 'Portfolio';
        } else if (scrollTop >= skillsTop - 300) {
            titleElement.textContent = 'Skills';
        } else if (scrollTop >= interviewTop - 300) {
            titleElement.textContent = 'Interview';
        } else {
            titleElement.textContent = 'Profile';
        }
    });
}


// Portfolio 필터 기능
function setupPortfolioFilter() {
    const options = document.querySelectorAll('.option');
    
    options.forEach(option => {
        option.addEventListener('click', function() {
            // 모든 옵션에서 selected 제거
            options.forEach(opt => opt.classList.remove('selected'));
            // 클릭한 옵션에 selected 추가
            this.classList.add('selected');
            
            const selectedValue = this.getAttribute('data-value');
            const portfolioItems = document.querySelectorAll('.portfolio-item');
            
            portfolioItems.forEach(item => {
                if (selectedValue === 'all' || item.classList.contains(selectedValue)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
}

// 아코디언 토글 함수 (Portfolio-Details.html에서 사용)
function toggleAccordion(element) {
    const parent = element.parentElement;
    parent.classList.toggle("active");
}


// 모달 열기
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        // 고정 아이콘 숨기기
        const fixedIcons = document.getElementById('fixed-icons');
        if (fixedIcons) {
            fixedIcons.style.display = 'none';
        }
    }
}

// 모달 닫기
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
        // 고정 아이콘 다시 보이기
        const fixedIcons = document.getElementById('fixed-icons');
        if (fixedIcons) {
            fixedIcons.style.display = 'flex';
        }
    }
}

// 모달 오버레이 클릭 시 닫기
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('modal-overlay')) {
        const modal = e.target.closest('.modal');
        if (modal) {
            modal.classList.remove('active');
            document.body.style.overflow = '';
            // 고정 아이콘 다시 보이기
            const fixedIcons = document.getElementById('fixed-icons');
            if (fixedIcons) {
                fixedIcons.style.display = 'flex';
            }
        }
    }
});

// 위로가기 버튼 클릭 시 Starter 페이지로 이동
document.addEventListener('DOMContentLoaded', function() {
    const upButton = document.querySelector('#fixed-icons a[href="#page-top"]');
    if (upButton) {
        upButton.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});
