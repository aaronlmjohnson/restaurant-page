import Logo from './logo.png';

export const Navbar = (()=>{
    const content = document.getElementById("content");

    const build = ()=>{
        const nav = document.createElement("nav");
        const navItems = document.createElement("ul");
        navItems.classList.add("navbar");

        _createLogo(nav);
        nav.appendChild(navItems);
        _createNavListItems(navItems);
        content.appendChild(nav);
    };
    
    const _createNavListItems = (navItems)=>{
        
        ["Home", "Menu", "Contact"].forEach((item)=>{
            const navItem = document.createElement("li");
            const link = document.createElement("a");
            link.className = "nav-item";
            link.innerText = item;
            link.href = "#";
            navItem.appendChild(link)
            navItems.appendChild(navItem);
        });
    };

    const _createLogo = (parent)=>{
        const logoDiv = document.createElement("div");
        logoDiv.id = "logo-div";
        const logo = document.createElement("img") ;
        logo.id = "logo";
        logo.src = Logo;
        logoDiv.appendChild(logo);
        parent.appendChild(logoDiv);

    }
    return {
        build
    }

})();