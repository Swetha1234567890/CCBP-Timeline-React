// Write your code here
import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimelineCard = props => {
  const {projectDetails} = props
  const {
    imageUrl,
    projectUrl,
    projectTitle,
    description,
    duration,
  } = projectDetails

  return (
    <div className="project-card-container">
      <img src={imageUrl} className="image" alt="project" />
      <div className="sub-container">
        <h1 className="title">{projectTitle}</h1>
        <div className="mini-container">
          <AiFillCalendar color="#171f46" />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p className="description">{description}</p>
      <a className="project-link" href={projectUrl}>
        Visit
      </a>
    </div>
  )
}

export default ProjectTimelineCard
