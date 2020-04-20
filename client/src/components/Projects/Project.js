import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";
import { Main } from "../styled-components";
import Form from "../Form";
import ProjectCard from "./ProjectCard";
import Actions from "../Actions/Actions";

const Project = () => {
    const [project, setProject] = useState({});
    const [projectToEdit, setProjectToEdit] = useState(null);
    const params = useParams();
    const history = useHistory();
    const url = `${process.env.REACT_APP_API_URL}/projects/${params.id}`;

    useEffect(() => {
        axios.get(url)
        .then(res => setProject(res.data))
        .catch(err => console.error(err));
    }, []);

    const deleteProject = id => {
        axios.delete(url)
        .then(res => {
            history.push("/")
        })
        .catch(err => console.error(err.response))
    }

    const saveProject = data => {
        axios.put(url, data)
        .then(res => {
            setProject(res.data);
            closeForm();
        })
        .catch(err => console.error(err.response));
    }

    const closeForm = () => {
        setProjectToEdit(null)
    }

    return(
        <Main>
            {projectToEdit &&
                <Form 
                    submit={saveProject} 
                    defaultState={projectToEdit}
                    formTitle="Edit"
                    fields={[
                        {name: "name", type:"text"},
                        {name: "description", type: "textarea"},
                        {name: "completed", type: "checkbox"},
                    ]}
                    hasReset={true}
                    close={closeForm} />
            }
            {!projectToEdit &&
                <ProjectCard 
                    {...project} 
                    setProjectToEdit={setProjectToEdit} 
                    deleteProject={deleteProject} />
            }
            <Actions actions={project.actions} projectURL={url} />
        </Main>
    )
}

export default Project;