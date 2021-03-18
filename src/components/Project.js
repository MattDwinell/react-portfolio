const Project = ({title, img, url, tech}) => {
    return (
        <>
        <div style={{backgroundImage: `url(${img})`}} className = 'project'>
           <a target="_blank" rel="noreferrer" href={url} className = 'titling'>{title}</a> 
           <p>{tech} </p>
           <div>repository:   </div>
        </div>
        
        </>
    )
}

Project.defaultProps = {
    title: 'title',
    img: './../images/casual_photo.jpeg',
    url: 'https://www.google.com',
    tech: 'html, css, javascript'
}
export default Project
