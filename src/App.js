import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import FollowerConfig from './components/FollowerConfig';

function App() {
  const [viewMode, setViewMode] = useState('list'); // 'list' or 'card'
  
  return (
    <div className='container-fluid'>
      <header className=' my-4 '>
        <h1 className='mb-4 text-center' style={{fontSize:'51px'}}>Twubric</h1>
        <div className='px-2 d-flex justify-content-center'>
          <button
            className={`btn btn-${viewMode === 'list' ? 'dark' : 'outline-dark'} m-2`}
            onClick={() => setViewMode('list')}
          >
            List View
          </button>
          <button
            className={`btn btn-${viewMode === 'card' ? 'dark' : 'outline-dark'} m-2 `}
            onClick={() => setViewMode('card')}
          >
            Card View
          </button>
        </div>
      </header>
      <FollowerConfig viewMode={viewMode} />
    </div>
  );
}

export default App;
