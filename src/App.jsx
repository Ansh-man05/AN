import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Soul, Contact, Home, Heart } from "./pages";
import Navbar  from './components/Navbar'; 

const App = () => {
  return (
    <main className='bg-slate-300/20'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} />
                  <Route path='/Soul' element={<Soul/> } />
                  <Route path='/Heart' element={<Heart/> } />
                  <Route path='/contact' element={<Contact/>} />
        </Routes>
      </Router>
    </main>
  );
};

export default App;