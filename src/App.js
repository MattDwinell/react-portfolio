import Welcome from './components/Welcome'
import ProjectPage from './components/ProjectPage'
import About from './components/AboutPage'
import Footer from './components/Footer'
function App() {
  return (
    <div className="container">
        <Welcome/>
        <ProjectPage />
        <About/>
        <Footer/>
    </div>
  );
}

export default App;
