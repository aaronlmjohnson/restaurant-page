

export const Contact = (()=>{
    const content = document.getElementById("content");
    const build = ()=>{
        const section = document.createElement("div");
        section.id = "contact";
        content.appendChild(content);
    };

    return {
        build
    }

    
})();