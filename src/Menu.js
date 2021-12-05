

export const Menu = (()=>{
    const content = document.getElementById("content");
    const build = ()=>{
        const section = document.createElement("div");
        section.id = "menu";
        content.appendChild(content);
    };

    return {
        build
    }

    
})();