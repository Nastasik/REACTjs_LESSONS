import React from 'react';

const ProjectList = (props) => {
    const {projects} = props;    
    
    return (
        <div className="portfolio">
            {projects.map((project, i) => (
                <div className="project" key={i}>
                    <img src = {project.img} alt={project.category}/>
                </div>
            ))}
        </div>
    )
}

export default ProjectList;
    