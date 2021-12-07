export const Form = ((action = "#", method = "#")=>{ 
    const _action = action;
    const _method = method; 
    const _validInputs = ["button","checkbox","color","date","datetime-local",
                            "email","file","hidden","image","month","number",
                            "password","radio","range","reset","search","submit",
                            "tel","text", "time","url","week"];
    const _init = ()=>{
        const form = document.createElement("form");
        const ul = document.createElement("ul");
        form.appendChild(ul);
        form.action = _action;
        form.method = _method;
        console.log(form.getElementsByTagName("ul")[0]);
        return form;
    }

    const _form = _init();

    const addLabel = (forInput, labelName, type, name)=>{
        const ul = _form.getElementsByTagName("ul")[0];
        const li = document.createElement("li");
        const label = _createLabel(forInput, labelName);
        
        const input = _createInput(forInput, type, name);
        li.appendChild(label);
        li.appendChild(input);

        ul.appendChild(li);
    };

    const _createLabel = (forInput, labelName)=>{
        const label = document.createElement("label");
        label.htmlFor = forInput;
        label.innerHTML = labelName;

        return label;
    };

    const _createInput = (id, type, name)=>{
        if(!_validInputs.includes(type))
            return;
        const input = document.createElement("input");
        input.type = type;
        input.id = id;
        input.name = name;

        return input;
        
    };

    const get = () =>{
        return _form;
    };

    return {
        get,
        addLabel
    }

    
});