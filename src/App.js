import Welcome from './components/Welcome'
import ProjectPage from './components/ProjectPage'
import About from './components/AboutPage'
function App() {
  return (
    <div className="container">
        <Welcome/>
        <ProjectPage />
        <About/>
    </div>
  );
}

export default App;
