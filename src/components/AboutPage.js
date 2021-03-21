import cilantro from './../images/cilantro_chair.jpeg'
const AboutPage = () => {
    return (
        <div id='about' className = 'about-page'><br></br><br></br>
           <div className = 'about-content'>
               <h2>About Matthew Dwinell</h2>
               <div class='blurb'>
              <p> I began my coding journey in a MERN stack web-development bootcamp. Before that, I worked in analytical chemistry as a data reviewer. While chemistry was challenging in its own way, I felt creatively stifled. Coding allows me to exercise both my creative side and my logical, problem-solving side. I'm currently a web developer at Cprime. These days I mostly learn by watching tutorials of a technology and then applying that learning to hands-on projects. 
                </p>
                <p>
                    When I'm not coding, I try to keep up with perhaps more hobbies than I have time for. I enjoy running DnD campaigns, playing chess, writing fiction, and juggling. I've gotten into cooking since the Covid-19 Pandemic began. In the beginning of the pandemic I adopted an excessively silly kitten, Cilantro. She likes to 'help' by walking all over my keyboard and then stealing my chair.
                </p>
                </div>
                <div class='cat-photo'>
                    <img width='100%' height = 'auto' src={cilantro} alt='cat pic'></img>
                </div>
                 </div>
        </div>
    )
}

export default AboutPage
