

export const Contact = (()=>{
    const content = document.getElementById("content");
    const build = ()=>{
        const section = document.createElement("div");
        section.id = "contact";
        content.appendChild(section);
    };

    const remove = ()=>{
        const contact = document.getElementById("contact");
        contact.remove();
    }

    return {
        build,
        remove
    }

    
})();