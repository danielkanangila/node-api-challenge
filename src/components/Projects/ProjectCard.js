import React from "react";
import { useLocation, Link } from "react-router-dom";

const ProjectCard = ({id, name, description, completed, setProjectToEdit, deleteProject}) => {
    const location = useLocation();

    return(
        <div className="post">
            {location.pathname === '/' && 
                <Link className="post-link" to={`/${id}`}></Link>
            }
            <h2 className="post-title">{name}</h2>
            <p className="post-contents">{description}</p>
            <p className="post-date">Completed: {completed ? 'Yes': 'No'}</p>
            {location.pathname !== '/' && 
                <p className="post-action">
                    <span 
                        onClick={() => setProjectToEdit({id, name, description, completed})} 
                        className="btn btn-primary small lightenblue">
                            Edit
                    </span>
                    <span onClick={e => deleteProject(id)} className="btn btn-danger small lightenred">Delete</span>
                </p>
            }
        </div>
    )
}

export default ProjectCard;