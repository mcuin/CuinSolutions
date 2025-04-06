import React from "react";
import './projectscard.css'
import Card from "@mui/material/Card";
import CardHeader from '@mui/material/CardHeader';
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import projects from "./projects";
import Link from "next/link";
import Avatar from "@mui/material/Avatar";
import Image from "next/image";

const ProjectCard = () => {

    const projectItems = projects.map(project => 
        <li key={project.id}>
            <Card>
                <CardHeader
                avatar = {<Avatar>
                    <Image src={project.projectIcon} alt="Project Icon" />
                </Avatar>}
                    title = {project.projectTitle}
                    subheader = {project.projectStatus}
                />
                <CardContent>
                {project.description}
                </CardContent>
                <CardActions>
                    <Link href="/liftingDice">Learn More</Link>
                </CardActions>
            </Card>
            
        </li>
    )

    return(
        <div className="projects-container">
        <h1 className="projects-title">Projects</h1>
        <ul className="projects-list">{projectItems}</ul>
        </div>
    )
}

export default ProjectCard;