import './assets/styles/style.css';
import { Navbar } from './Navbar'
import { Home } from './Home'
import { Menu } from './Menu'
import { Contact } from './Contact'
import { Footer } from './Footer'

(()=>{
    Navbar.build();
    Contact.build();
    Footer.build();

    let activePage = "Contact";
    let navLinks = [...document.getElementsByClassName('nav-item')];

    const setActivePage = (e, link)=>{
        
        if(link.innerHTML == activePage)
            return;
        removeActivePage();
        activePage = link.innerHTML;
        
        if(activePage == "Home")
            Home.build();
        else if(activePage == "Menu")
            Menu.build();
        else
            Contact.build();

    }

    const removeActivePage = ()=>{
        if(activePage == "Home")
            Home.remove();
        else if(activePage == "Menu")
            Menu.remove();
        else
            Contact.remove();
    };

    navLinks.forEach((link)=>{
        link.addEventListener('click', (e)=>{setActivePage(e, link)})
    });

})();
   

    



