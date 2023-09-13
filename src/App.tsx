import { BrowserRouter } from 'react-router-dom';

import {
  About,
  Contact,
  Hero,
  Navbar,
  Tech,
  Works,
} from './components';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Tech />
        <Works />
        <div className='relative z-0'>
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;