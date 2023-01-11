export default function SideBarMenu({close, scrollToAbout, scrollToProjects}) {
    return (
        <div className="menu-side-bar">
            <i onClick={close} className="fa-regular fa-circle-xmark"></i>
            <h1 onClick={scrollToAbout} className="sidebar-first-h1">About</h1>
            <h1 onClick={scrollToProjects}>My projects</h1>
            <h1><a className="sidebar-resume" href="https://drive.google.com/file/d/1ImKyu5CtURV3UZKZBRHyNqqhFjv3BSFC/view?usp=sharing" target="_blank">Resume</a></h1>
            <div className="social-icons">
                    <a href="https://www.linkedin.com/in/veaceslav-cojocari-6582401b9/" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
                    <a href="https://github.com/CoSlava" target="_blank"><i className="fa-brands fa-square-github"></i></a>
                    <a href="https://www.facebook.com/coVeaceslav" target="_blank"><i className="fa-brands fa-square-facebook"></i></a>
            </div>
                    <a className="side-bar-email" href="mailto:someone@example.com"><p><i className="fa-solid fa-envelope"></i>vecojocari@gmail.com</p></a>
        </div>
    )
}