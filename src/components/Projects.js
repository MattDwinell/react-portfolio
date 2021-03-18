import Project from './Project'
import casualPhoto from './../images/profile_outside.jpeg'
import hangman from './../images/hangman.PNG'
import dndcharMaker from './../images/char_maker.PNG'
import dndArena from './../images/dnd_arena.PNG'
const Projects = () => {
    const projectList = [
    {tech:'tech: React, Reactrouter, Fetch', img: hangman, title: 'React Hangman', url: 'https://mattdwinell.github.io/react-hang-man'},
    { tech:'Always a work in progress',img: casualPhoto, title: 'Myself', url: 'https://www.google.com'},
    {tech:'Sql, Firebase, Restful API, Materalize', img: dndcharMaker, title: 'DnD Character Creator', url: 'https://dndcharcreator.herokuapp.com/assets/html/index.html'},
    {tech:'Firebase, API Calls, Materalize', img: dndArena, title: 'DnD Arena Game', url: 'https://mattdwinell.github.io/DnDTAFight/'}]
    return (
        <div className = 'projects'>
            {projectList.map((item, index)=> <Project tech={item.tech} title={item.title} url={item.url} img = {item.img} key={index} />)}
        </div>
    )
}

export default Projects
