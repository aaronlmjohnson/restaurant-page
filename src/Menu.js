import Beer from './assets/images/beer.png';
import Salad from './assets/images/salad.png';
import Hamburger from './assets/images/hamburger.png';
import Wings from './assets/images/wings.png';
import Steak from './assets/images/steak.png';

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
        //const item = _createMenuItem(beer, "Beer");

        const items = {Hamburger, Salad, Beer, Wings, Steak};

        for(const item in items){
            const menuItem = _createMenuItem(items[item], item);
            menuItems.appendChild(menuItem);
        }

        //menuItems.appendChild(item);
        return menuItems;
    };

    const _createMenuItem = (src, itemName)=>{
        const itemDiv = document.createElement("div");
        itemDiv.classList.add("menu-item");
        

        itemDiv.appendChild(_createMenuImg(src));
        itemDiv.appendChild(_createMenuTitle(itemName));
        

        return itemDiv;
    };

    const _createMenuImg = (src)=>{
        const item = document.createElement("img") ;
        item.classList.add("menu-img");
        item.src = src;

        return item
    };

    const _createMenuTitle = (itemName) =>{
        const title = document.createElement("h3");
        title.classList.add("menu-item-title");
        title.innerText = itemName;

        return title
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