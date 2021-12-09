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

        return form;
    }

    const _form = _init();

    const addLabel = (forInput, labelName, type, name)=>{
        const ul = _form.getElementsByTagName("ul")[0];
        const li = document.createElement("li");
        const label = _createLabel(forInput, labelName);
        
        
        const input = type != "textarea" ?_createInput(forInput, type, name) :
                      _createTextArea(forInput, name, 4, 25);
        
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
        // if(type == "text" || type == "email" || type == "tel"){
        //     input.maxLength = "1";
        //     input.size = "50";
        // }
        input.type = type;
        input.id = id;
        if(type == "submit")
            input.value = type;
        else
            input.name = name;
        
        return input;
        
    };

    const addSubmit = () =>{
        const submit = _createInput("submit", "submit",  "submit");
        const li = document.createElement("li");
        li.appendChild(submit);
        const ul = _form.getElementsByTagName("ul")[0];
        ul.appendChild(li);

    }

    const _createTextArea = (id, name, rows, cols)=>{
        const area = document.createElement("textarea");
        area.id = id;
        area.name = name;
        area.rows = rows;
        area.cols = cols;

        return area;
    };


    const get = () =>{
        return _form;
    };

    return {
        get,
        addLabel,
        addSubmit
    }

    
});