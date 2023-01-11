export default function Navbar({windowWidth, open, scrollToAbout, scrollToProjects}) {
    return (
        <div className="navbar">
            <h1>VC</h1>
            {windowWidth <= 700 && <i onClick={open} className="fa-solid fa-bars"></i>}
            {windowWidth > 700 &&
                <div className="navbar-links">
                    <p onClick={scrollToAbout}>About</p>
                    <p onClick={scrollToProjects}>My projects</p>
                    <p onClick={open}>Contact</p>
                    <a className="resume" href="https://drive.google.com/file/d/1ImKyu5CtURV3UZKZBRHyNqqhFjv3BSFC/view?usp=sharing" target="_blank">Resume</a>
                </div>
            }
        </div>
    )
}