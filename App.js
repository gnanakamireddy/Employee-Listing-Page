import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css';
import { Home } from './Home';
import { Add } from './Add';
import { Edit } from './Edit';
import { Read } from './Read';

function App() {
  return (
    <div>
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/add' element={<Add/>}/>
            <Route path='/edit/:id' element={<Edit/>}/>
            <Route path='/read/:id' element={<Read/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
