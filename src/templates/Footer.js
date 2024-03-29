const Footer = () => {
    const view = `
    <div class="footer">
        <div class="social">
            <a href="https://www.instagram.com/muffin.dddd/">
                <div class="social-img"><img src="./resources/ig.svg" alt="Instagram"></div>
            </a>
            <a href="https://github.com/MuffinPlease">
                <div class="social-img"><img src="./resources/github.svg" alt="Github"></div>
            </a>
            <a href="">
                <div class="social-img"><img src="./resources/linkedin.svg" alt="Linkedin"></div>
            </a>
        </div>
        <div class="footer-about"><a href="#/about">About</a></div>
        <div class="footer-info">Single page aplication</div>
    </div>`
    return view;
}

export default Footer;