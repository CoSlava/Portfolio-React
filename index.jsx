import React, {useState} from 'react'
import ReactDOM from 'react-dom/client'

import Navbar from "./components/Navbar"
import SideBarMenu from "./components/SideBarMenu"
import Body from "./components/Body"
import About from "./components/About"
import MyProjects from "./components/MyProjects"
import Footer from "./components/Footer"

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  window.addEventListener("resize", () => {
        setWindowWidth(window.innerWidth)
    })
    
    function openMenu(){
        setIsMenuOpen(true)
    }
    
    function closeMenu(){
        setIsMenuOpen(false)
    }
    
    function scrollToAbout(){
        setIsMenuOpen(false)
        setTimeout(() => {
            window.scroll({top: 510, behavior: 'smooth'})
        }, 100)
    }
    
    function scrollToProjects(){
        setIsMenuOpen(false)
        setTimeout(() => {
            window.scroll({top: 1300, behavior: 'smooth'})
        }, 100)
    }
  
  return (
    <div>
            {isMenuOpen && 
                <SideBarMenu 
                    close={closeMenu} 
                    scrollToAbout={scrollToAbout}
                    scrollToProjects={scrollToProjects}
                />
            }
            {!isMenuOpen && 
                <Navbar 
                    windowWidth={windowWidth}
                    open={openMenu}
                    scrollToAbout={scrollToAbout}
                    scrollToProjects={scrollToProjects}
                />
            }
            {!isMenuOpen && <Body scroll={scrollToAbout} />}
            {!isMenuOpen && <About />}
            {!isMenuOpen && <MyProjects />}
            {!isMenuOpen && <Footer />}
        </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)