import {BrowserRouter as Router, Route, Routes, useParams} from 'react-router-dom';
import Header from './components/Header';
import NavMenu from './components/NavMenu';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import logo from '/images/image.png';
import './App.css';

function MainContentWrapper()
{
  const {subject} = useParams();
  return <MainContent subject={subject} />;
}

function App() {
  
  return (
    <>
    

      <img src={logo} className="logo" alt="Logo"/>
      
      <Header />

      <Router>
      <div>
        <NavMenu />
        <Routes>
          <Route path="/scp/:subject" element={<MainContentWrapper />} />
        </Routes>
      </div>
    </Router>
      <Footer />
    </>
  );
}

export default App;
