<style>
    body {
        font-family: Arial, sans-serif;
        line-height: 1.6;
        margin: 0;
        padding: 0;
        background-color: #f0f8ff;
        color: #333;
    }

    header {
        background: #004080;
        color: #fff;
        padding: 1rem 0;
    }

    header .container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        max-width: 1100px;
        margin: 0 auto;
        padding: 0 2rem;
    }

    header h1 {
        margin: 0;
    }

    nav ul {
        list-style: none;
        padding: 0;
        display: flex;
    }

    nav ul li {
        margin-left: 1rem;
    }

    nav ul li a {
        color: #fff;
        text-decoration: none;
    }

    section {
        padding: 2rem 0;
    }

    section .container {
        max-width: 1100px;
        margin: 0 auto;
        padding: 0 2rem;
        text-align: center;
    }

    #about, #skills, #projects, #contact {
        background: #e6f2ff;
        margin-bottom: 2rem;
        padding: 2rem;
        box-shadow: 0 0 10px rgba(0, 64, 128, 0.1);
        border-radius: 20px; /* 값을 20px로 변경 */
    }

    h2 {
        color: #004080;
    }

    #skills ul {
        list-style: none;
        padding: 0;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }

    #skills ul li {
        margin: 10px;
    }

    #skills ul li img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
    }

    .project {
        margin-bottom: 2rem;
    }

    .project h3 {
        color: #004080;
    }

    footer {
        background: #004080;
        color: #fff;
        text-align: center;
        padding: 1rem 0;
    }

    footer p {
        margin: 0;
    }

    .contain {
        text-align: center;
    }
</style>

<header>
    <div class="container">
        <h1>박정은</h1>
        <nav>
            <ul>
                <li><a href="#about">소개</a></li>
                <li><a href="#skills">기술</a></li>
                <li><a href="#projects">프로젝트</a></li>
                <li><a href="#contact">연락처</a></li>
            </ul>
        </nav>
    </div>
</header>

<section id="about">
    <div class="container">
        <h2>소개</h2>
        <p>백엔드 개발자 박정은입니다. <br>다양한 데이터 분석 경험 및 웹사이트 제작 경험이 있습니다.</p>
    </div>
</section>

<section id="skills">
    <div class="container">
        <h2>기술</h2>
        <ul>
            <li><img src="github.png" alt="HTML"></li>
            <li><img src="https://via.placeholder.com/50?text=CSS" alt="CSS"></li>
            <li><img src="https://via.placeholder.com/50?text=JS" alt="JavaScript"></li>
            <li><img src="https://via.placeholder.com/50?text=React" alt="React"></li>
            <li><img src="https://via.placeholder.com/50?text=Node.js" alt="Node.js"></li>
            <!-- 더 많은 기술을 추가할 수 있습니다 -->
        </ul>
    </div>
</section>

<section id="projects">
    <div class="container">
        <h2>프로젝트</h2>
        <div class="project">
            <h3>프로젝트 1</h3>
            <p>프로젝트 1에 대한 설명입니다.</p>
        </div>
        <div class="project">
            <h3>프로젝트 2</h3>
            <p>프로젝트 2에 대한 설명입니다.</p>
        </div>
        <!-- 더 많은 프로젝트를 추가할 수 있습니다 -->
    </div>
</section>

<section id="contact">
    <div class="container">
        <h2>연락처</h2>
        <p>이메일: shahmaran0207@naver.com</p>
        <p>전화번호: 010-8517-1179</p>
    </div>
</section>

<footer>
    <div class="container">
        <p>&copy; 2024 박정은. All rights reserved.</p>
    </div>
</footer>
