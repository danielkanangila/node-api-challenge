import React, { useState, useEffect } from "react";
import Form from '../Form';
import axios from "axios";

const Actions = ({actions, projectURL}) => {
    const [_actions, setActions] = useState([]);
    useEffect(() => {
        setActions(actions);
    }, [actions])
    const saveActions = data => {
        axios.post(`${projectURL}/actions`, data)
        .then(res => setActions([..._actions, res.data]))
        .catch(err => console.error(err.response));
    }
    return(
        <div className="comments actions">
            <Form 
                    submit={saveActions} 
                    defaultState={{description: "", notes: "", completed: ""}}
                    formTitle="Add action"
                    fields={[
                        {name: "description", type:"text"},
                        {name: "notes", type: "textarea"},
                        {name: "completed", type: "checkbox"}
                    ]} />
            <h2 className="comments-tile action">Actions</h2>
            {_actions?.map((action, index) => <Action {...action} key={index} url={projectURL} />)}
        </div>
    )
}

const Action = ({id, description, notes, completed, url}) => {
    const [__completed, setCompleted] = useState(completed);
    const updateCompleted = e => {
        
        axios.put(`${url}/actions/${id}`, {description, notes, completed: !e.target.value})
        .then(res => setCompleted(!__completed))
        .catch(err => console.error(err.response));
    }
    return(
        <div className="comment">
            <input onChange={updateCompleted} type="checkbox" name="completed" value={__completed} />
            <div>
                <p className="comment-contents">{description}</p>
                <p className="comment-contents">{notes}</p>
                <p className="comment-date">Completed: {__completed ? 'Yes': 'No'}</p>
            </div>
        </div>
    )
}

export default Actions;