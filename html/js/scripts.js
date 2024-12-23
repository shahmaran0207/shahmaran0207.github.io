window.addEventListener('DOMContentLoaded', event => {

    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) return;

        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }
    };

    navbarShrink();

    document.addEventListener('scroll', navbarShrink);

    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    new SimpleLightbox({
        elements: '#portfolio a.portfolio-box'
    });
});


<!-- 각 포트폴리오를 열었을때 배경의 스크롤을 방지하기 위한 코드 -->
$('#portfolioModal2').on('shown.bs.modal', function () {
    $('body').addClass('modal-open');
});

$('#portfolioModal2').on('hidden.bs.modal', function () {
    $('body').removeClass('modal-open');
});

$('#portfolioModal3').on('shown.bs.modal', function () {
    $('body').addClass('modal-open');
});

$('#portfolioModal3').on('hidden.bs.modal', function () {
    $('body').removeClass('modal-open');
});

$('#portfolioModal4').on('shown.bs.modal', function () {
    $('body').addClass('modal-open');
});

$('#portfolioModal4').on('hidden.bs.modal', function () {
    $('body').removeClass('modal-open');
});

$('#portfolioModal5').on('shown.bs.modal', function () {
    $('body').addClass('modal-open');
});

$('#portfolioModal5').on('hidden.bs.modal', function () {
    $('body').removeClass('modal-open');
});

$('#portfolioModal6').on('shown.bs.modal', function () {
    $('body').addClass('modal-open');
});

$('#portfolioModal6').on('hidden.bs.modal', function () {
    $('body').removeClass('modal-open');
});

$('#portfolioModal7').on('shown.bs.modal', function () {
    $('body').addClass('modal-open');
});

$('#portfolioModal7').on('hidden.bs.modal', function () {
    $('body').removeClass('modal-open');
});

$('#portfolioModal8').on('shown.bs.modal', function () {
    $('body').addClass('modal-open');
});

$('#portfolioModal8').on('hidden.bs.modal', function () {
    $('body').removeClass('modal-open');
});

$('#portfolioModal9').on('shown.bs.modal', function () {
    $('body').addClass('modal-open');
});

$('#portfolioModal9').on('hidden.bs.modal', function () {
    $('body').removeClass('modal-open');
});

$('#portfolioModal10').on('shown.bs.modal', function () {
    $('body').addClass('modal-open');
});

$('#portfolioModal10').on('hidden.bs.modal', function () {
    $('body').removeClass('modal-open');
});

$('#portfolioModal11').on('shown.bs.modal', function () {
    $('body').addClass('modal-open');
});

$('#portfolioModal11').on('hidden.bs.modal', function () {
    $('body').removeClass('modal-open');
});

$('#portfolioModal12').on('shown.bs.modal', function () {
    $('body').addClass('modal-open');
});

$('#portfolioModal12').on('hidden.bs.modal', function () {
    $('body').removeClass('modal-open');
});

$('#portfolioModal13').on('shown.bs.modal', function () {
    $('body').addClass('modal-open');
});

$('#portfolioModal13').on('hidden.bs.modal', function () {
    $('body').removeClass('modal-open');
});

$('#portfolioModal14').on('shown.bs.modal', function () {
    $('body').addClass('modal-open');
});

$('#portfolioModal14').on('hidden.bs.modal', function () {
    $('body').removeClass('modal-open');
});

$('#portfolioModal15').on('shown.bs.modal', function () {
    $('body').addClass('modal-open');
});

$('#portfolioModal15').on('hidden.bs.modal', function () {
    $('body').removeClass('modal-open');
});

$('#portfolioModal16').on('shown.bs.modal', function () {
    $('body').addClass('modal-open');
});

$('#portfolioModal16').on('hidden.bs.modal', function () {
    $('body').removeClass('modal-open');
});

$('#portfolioModal17').on('shown.bs.modal', function () {
    $('body').addClass('modal-open');
});

$('#portfolioModal17').on('hidden.bs.modal', function () {
    $('body').removeClass('modal-open');
});

$('#portfolioModal18').on('shown.bs.modal', function () {
    $('body').addClass('modal-open');
});

$('#portfolioModal18').on('hidden.bs.modal', function () {
    $('body').removeClass('modal-open');
});