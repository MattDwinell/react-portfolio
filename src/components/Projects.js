import Project from './Project'
import casualPhoto from './../images/profile_outside.jpeg'
import hangman from './../images/hangman.PNG'
import dndcharMaker from './../images/char_maker.PNG'
import dndArena from './../images/dnd_arena.PNG'
import tileGame from './../images/sliding_tile_game.PNG'
import plantr from './../images/plantr_profile_page.PNG'
const Projects = () => {
    const projectList = [
    {tech:'tech: React, Reactrouter, Fetch', img: hangman, title: 'React Hangman', url: 'https://mattdwinell.github.io/react-hang-man', repo: 'https://github.com/MattDwinell/react-hang-man'},
    { tech:'Always a work in progress',img: casualPhoto, title: 'Myself', url: '#about', repo: null},
    {tech:'Sql, Firebase, Node, Express, Materalize', img: dndcharMaker, title: 'DnD Character Creator', url: 'https://dndcharcreator.herokuapp.com/assets/html/index.html', repo: 'https://github.com/MattDwinell/dndcharSQLVersion'},
    {tech:'Firebase, API Calls, Materalize', img: dndArena, title: 'DnD Arena Game', url: 'https://mattdwinell.github.io/DnDTAFight/', repo: 'https://github.com/MattDwinell/DnDTAFight'}
    ,
    {tech:'jquery, simple algorithms', img: tileGame, title: 'Custom Tile Game', url: 'https://mattdwinell.github.io/word-tile-game/', repo: 'https://github.com/MattDwinell/word-tile-game'}
    ,
    {tech:'SQL, Node, Express, Firebase', img: plantr, title: 'Social Gardening Mockup', url: 'https://plantrgardening.herokuapp.com/profile', repo: 'https://github.com/MattDwinell/Plantr'}]


    return (
        <div className = 'projects'>
            {projectList.map((item, index)=> <Project tech={item.tech} title={item.title} url={item.url} img = {item.img} key={index} repo={item.repo}/> )}
        </div>
    )
}

export default Projects
