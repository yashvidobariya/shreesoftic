import Header from './main/Header';
import Aboutus from './Pages/Aboutus';
import Services from './Pages/Services';
import Career from './Pages/Career';
import Contactus from './Pages/Contactus';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Footer from './main/Footer';
import Singleportfolio from './Single/Singleportfolio';
import Singleservice from './Single/Singleservice';
import Privacy from './footer-page/Privacy';
import Condition from './footer-page/Condition';
import Scrollingtop from './Scrollingtop';



function App() {
  return (
    <>
      {/* <AnimatedBalls /> */}
      <BrowserRouter>
        <Scrollingtop />
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/aboutus" element={<Aboutus />}></Route>
          <Route path="/services" element={<Services />}></Route>
          <Route path="/career" element={<Career />}></Route>
          <Route path="/contactus" element={<Contactus />}></Route>
          <Route path="/home/details/:id" element={<Singleportfolio />} />
          <Route path="services/servicedetails/:id" element={<Singleservice />} ></Route>
          <Route path="/privacy" element={<Privacy />}></Route>
          <Route path="/condition" element={<Condition />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
