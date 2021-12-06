import './style.css';
import { Navbar } from './Navbar'
import { Home } from './Home'
import { Menu } from './Menu'
import { Contact } from './Contact'

//import html from "./file.html";
   
    Navbar.build();
    Home.build();
    let activePage = "Home";
    let navLinks = [...document.getElementsByClassName('nav-item')];

    const setActivePage = (e, link)=>{
        
        if(link.innerHTML == activePage)
            return;
        removeCurrentPage();
        activePage = link.innerHTML;
        
        if(activePage == "Home")
            Home.build();
        else if(activePage == "Menu")
            Menu.build();
        else
            Contact.build();

    }

    const removeCurrentPage = ()=>{
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

    
    

    
    



// Menu.build();
// Contact.build();
    



