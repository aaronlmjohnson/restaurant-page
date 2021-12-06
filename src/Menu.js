

export const Menu = (()=>{
    const content = document.getElementById("content");
    const build = ()=>{
        const section = document.createElement("div");
        section.id = "menu";
        content.appendChild(section);
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