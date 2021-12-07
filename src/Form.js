export const Form = ((action = "#", method = "#")=>{ 
    const _action = action;
    const _method = method; 

    const _init = ()=>{
        const form = document.createElement("form");
        const ul = document.createElement("ul");
        form.appendChild(ul);
        form.action = _action;
        form.method = _method;

        return form;
    }

    const _form = _init();
    const addLabel = ()=>{

    };
    const get = () =>{
        return _form;
    };

    return {
        get,
        addLabel
    }

    
});