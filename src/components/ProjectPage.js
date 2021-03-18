import Projects from './Projects';

const ProjectPage = () => {
    return (
        <div className = 'project-page'>
           <h2> I'm most comfortable using <span className = 'accent'>MERNstack (MongoDB, Express.js, React.js, Node.js).</span></h2>
           <h2> I also have professional experience with PHP, SQl (SSMS, sqlite), and Salesforce Development. </h2>
           <h3> Below are a list of Projects I've worked on in my spare time:</h3>
           <Projects/>
        </div>
    )
}

export default ProjectPage
