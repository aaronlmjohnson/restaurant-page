import './style.css';

(()=>{
    const content = document.getElementById("content");

    const createNavBar = ()=>{
        const nav = document.createElement("nav");
        const navItems = document.createElement("ul");
        navItems.classList.add("navbar");

        nav.appendChild(navItems);
        createNavListItems(navItems);
        content.appendChild(nav);
    };
    
    const createNavListItems = (navItems)=>{
        ["Menu", "About", "Contact"].forEach((item)=>{
            const navItem = document.createElement("li");
            console.log(item);
            navItem.innerText = item;
            navItems.appendChild(navItem);
        });
    };
    
    createNavBar();
})();



