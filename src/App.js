import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home,AboutMe,Food,Taco,Cappuchino,GnocchiLihapullat,Cake } from "./Pages";
import Footer from './Components/Footer/Footer';
import ScrollToTop from './Scripts/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop/>
      <div className='App'>
        <Routes>
          <Route key={1} path="/WebMobProjekti" element ={[<Home />, <Footer />]} />
          <Route key={2} path="/WebMobProjekti/recipes" element ={[<Food />, <Footer />]} />
          <Route key={3} path="/WebMobProjekti/about_me" element ={[<AboutMe />, <Footer />]} />
          <Route key={4} path="/WebMobProjekti/recipes/tacos" element ={[<Taco />, <Footer />]} />
          <Route key={5} path="/WebMobProjekti/recipes/cappuchino" element ={[<Cappuchino />, <Footer />]} />
          <Route key={6} path="/WebMobProjekti/recipes/gnocchi_lihapulla_vuoka" element ={[<GnocchiLihapullat />, <Footer />]} />
          <Route key={7} path="/WebMobProjekti/recipes/berrycake" element ={[<Cake />, <Footer />]} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
