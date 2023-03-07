import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home,AboutMe,Food,Recipes } from "./Pages";
import Footer from './Components/Footer/Footer';
import ScrollToTop from './Scripts/ScrollToTop';

function App() {
  return (
    <>
      <ScrollToTop/>
      <div className='App'>
        <Routes>
          <Route key={1} path="/WebMobProjekti" element ={[<Home />, <Footer />]} />
          <Route key={2} path="/WebMobProjekti/recipes" element ={[<Food />, <Footer />]} />
          <Route key={3} path="/WebMobProjekti/about_me" element ={[<AboutMe />, <Footer />]} />
          <Route key={4} path="/WebMobProjekti/recipes/*" element ={[<Recipes />, <Footer />]} />
        </Routes>
      </div>
    </>
  );
}

export default App;
