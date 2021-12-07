

export const Contact = (()=>{
    const content = document.getElementById("content");
    const build = ()=>{
        const contact = createContactDiv();
        
        content.appendChild(contact);
    };

    const createContactDiv = ()=>{
        const contactDiv = document.createElement("div");
        contactDiv.id = "contact";
        contactDiv.appendChild(contactLeft());
        contactDiv.appendChild(contactRight());
        return contactDiv;

    };

    const contactLeft = ()=>{
        const left = document.createElement("div");
        left.id = 'contact-left';
        
        const h2 = document.createElement("h2");
        h2.innerText = "Contact Us Anytime!";
        const contactUs = document.createElement("p");
        contactUs.innerText = "Need something from us? You can contact us anytime by phone, e-mail, or via the form on this page.";

        left.appendChild(h2);
        left.appendChild(contactUs);
        left.appendChild(contactPhone());
        left.appendChild(contactEmail());

        return left;
    };

    const contactPhone = ()=>{
        const phone = document.createElement("p");
        phone.innerText = "Phone: 123-123-1234";

        return phone;

    }

    const contactEmail = ()=>{
        const email = document.createElement("p");
        email.innerHTML = "Email:"
        const emailLink = document.createElement("a");
        emailLink.href = "#";
        emailLink.innerText = " email@website.com";

        email.appendChild(emailLink);

        return email;
    };

    const contactRight = ()=>{
        const right = document.createElement("div");
        right.id = 'contact-right';

        return right;
    };

    const contactForm = ()=>{

    };

    const remove = ()=>{
        const contact = document.getElementById("contact");
        contact.remove();
    };

    return {
        build,
        remove
    }

    
})();