const Welcome = () => {
    const scroll = ()=>{
        const projectPage = document.getElementById('proj-page');
        projectPage.scrollIntoView();
    }
    return (
        <div className = 'welcome'>
           <h1> Hello! My Name is Matthew Dwinell. </h1>
           <h2>I am a full stack web developer. &nbsp; <button className = 'welcome-btn' onClick = {scroll}> View my Work &darr;</button></h2>
        </div>
    )
}

export default Welcome