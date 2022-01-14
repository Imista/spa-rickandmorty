const Header = () => {
    const view = `
    <div class="header-data">
        <h1 class="home">
            <a href="">
                <img src="../src/resources/Rick.svg" alt="Rick">Rick&Morty<img src="../src/resources/Morty.svg" alt="Morty">
            </a>
        </h1>
        <h1 class="about"> <a href="#/about">About</a> </h1>
    </div>
    `;
    return view;
}

export default Header;