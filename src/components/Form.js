import React, { useState, useEffect } from "react";

const Form = ({defaultState, submit, formTitle, fields, hasReset, close}) => {
    const [state, setState] = useState(defaultState);
    
    useEffect(() => {
        const abortController = new AbortController();
        setState(defaultState);
        return function cleanup() {
            abortController.abort()
        }
    }, [defaultState]);

    const handleChange = e => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = e => {
        e.preventDefault();
        submit(state);
        reset();
    }

    const reset = e => {
        if (close) close();
        const emptyState = []
        fields.forEach(field => emptyState[field.name] = "");
        setState(emptyState);
    }
    
    return(
        <form onSubmit={handleSubmit}>
            <h2>{formTitle}</h2>
            {fields.map((field, index) => {
                if (field.type === "textarea") {
                    return (
                    <div key={index} className="field">
                        <textarea
                            onChange={handleChange}
                            name={field.name}
                            value={state[field.name]}
                        >
                        </textarea>
                        <label>{field.name}</label>
                    </div>)
                }
                else {
                    return (
                        <div key={index} className={`field mb-20 ${field.name}`}>
                            <input 
                                onChange={handleChange} 
                                type={field.type} 
                                name={field.name}
                                value={state[field.name]} />
                            <label>{field.name}</label>
                        </div>
                    )
                }
            })}
            <div className="action">
                <button type="submit" className="btn btn-primary">Save</button>
                {hasReset && 
                    <button onClick={reset} type="reset" className="btn btn-default">Cancel</button>
                }
            </div>
        </form>
    );
};

export default Form;