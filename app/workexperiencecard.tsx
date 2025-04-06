import './workexperiencecard.css'
import workExperience from "./workexperience";
import { Card, CardContent, CardHeader } from '@mui/material';

const WorkExperienceCard = () => {

    const workExperienceItems = workExperience.map(workExperience => 
        <li key={workExperience.id}>
            <Card>
                <CardHeader
                title={workExperience.jobTitle}
                subheader={workExperience.jobTimeline} />
                <CardContent>
                {workExperience.jobSubTitle}
                </CardContent>
            </Card>
        </li>
    )

    return (
        <div className="work-experience-container">
        <h1 className='work-experience-title'>Work Experience</h1>
        <ul className='work-experience-list'>{workExperienceItems}</ul>
        </div>
    )
}

export default WorkExperienceCard;