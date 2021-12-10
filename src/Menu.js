import beer from './assets/images/beer.png';
import salad from './assets/images/salad.png';
import hamburger from './assets/images/hamburger.png';
import wings from './assets/images/wings.png';
import steak from './assets/images/steak.png';

export const Menu = (()=>{
    const content = document.getElementById("content");
    const build = ()=>{
        const menu = _createMenuDiv();

        content.appendChild(menu);
    };

    const _createMenuDiv = ()=>{
        const div = document.createElement("div");
        div.id = "menu";
        const h1 = document.createElement("h1");
        h1.id = "menu-title";
        h1.innerText = "Menu";
        div.appendChild(h1);
        div.appendChild(_createMenuItems());
       
        
        
        return div;

    };

    const _createMenuItems = ()=>{
        const menuItems = document.createElement("div");
        menuItems.id = "menu-items";
        const item = _createMenuItem(beer);

        menuItems.appendChild(item);
        return menuItems;
    };

    const _createMenuItem = (src)=>{
        const item = document.createElement("img") ;
        item.classList.add("menu-item");
        item.src = src;

        return item;
    };

    const remove = ()=>{
        const menu = document.getElementById("menu");
        menu.remove();
    }

    return {
        build,
        remove
    }

    
})();