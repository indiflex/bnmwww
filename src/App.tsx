// import { BeakerIcon } from '@heroicons/react/24/outline';

import { Route, Routes } from 'react-router-dom';
import { Nav } from './components/Nav';
import { Chat } from './pages/Chat';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { MyBooks } from './pages/MyBooks';
import { NotFound } from './pages/NotFound';

function App() {
  return (
    <div className='h-screen w-full overflow-y-hidden overflow-x-scroll'>
      <header>
        <Nav />
      </header>

      <main className=''>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/mybooks' element={<MyBooks />} />
          <Route path='/login' element={<Login />} />
          <Route path='/chat' element={<Chat />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </main>
      {/* <footer>Copyright Indiflex Senior Coding</footer> */}
    </div>
  );
}

export default App;
