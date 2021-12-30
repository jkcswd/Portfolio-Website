import { useState } from 'react';
import '../styles/Project.css';

const Project = (props) => {
  const [hover, setHover] = useState(false)
  const onHover = () => {
    setHover(true)
  }
  const onLeave = () => {
    setHover(false)
  }

  return (
    <div className="Project" onMouseEnter={onHover} onMouseLeave={onLeave}>
      {hover && 
        <p className="info">{props.info}</p>
      }
      <img src={process.env.PUBLIC_URL + props.imageUrl} alt={props.imageAlt}/>

    </div>
  );
}

export default Project;