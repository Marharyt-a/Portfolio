import "../css/mainheader.css"

function MainHeader() {
    return (
        <header className="header">
            <div className="header_name">
                <h2>Marharyta Bakalo</h2>
                <p>Fullstack Developer</p>
            </div>

            <nav className="navbar">
                <a href="#about">About me</a>
                <a href="#capabilities">Capabilities</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
            </nav>
        </header>
    )
}

export default MainHeader