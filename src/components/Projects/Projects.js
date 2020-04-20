import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Main } from '../styled-components';
import Form from "../Form";
import ProjectCard from "./ProjectCard";

const url = `${process.env.REACT_APP_API_URL}/projects`;

const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        axios(url).then(res => {
            setProjects(res.data);
        })
    }, []);

    const saveNewProject = data => {
        axios.post(url, data)
        .then(res => setProjects([...projects, res.data]))
        .catch(err => console.error(err.response));
    }

    return(
        <Main>
            <Form 
                submit={saveNewProject} 
                defaultState={{name: "", description: ""}}
                formTitle="Add new project"
                fields={[
                    {name: "name", type:"text"},
                    {name: "description", type: "textarea"}
                ]} />
                {projects.map((project, index) => <ProjectCard key={index} {...project} />)}
        </Main>
    )
}

export default Projects;