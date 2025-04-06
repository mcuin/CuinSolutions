import React from "react";
import './page.css'
import WorkExperienceCard from "./workexperiencecard";
import ProjectCard from "./projectscard";

export default function Home() {
    return (
        <div className="home-container">
            <div className="description-card">
                <h1 className="home-name">Mykal Cuin (Michael Quinn)</h1>
                <p className="home-subtitle">Native mobile applications developer</p>
                <p className="home-description">I have 9 years native mobile development experience across both Android using Kotlin and iOS using Swift. Whether it is taking over and existing project, overhauling an outdated project, or starting a new one from scratch I have experience in every part of the mobile development lifecycle.</p>
            </div>
        <WorkExperienceCard></WorkExperienceCard>
        <ProjectCard></ProjectCard>
        </div>
        
    );
};