// import { BeakerIcon } from '@heroicons/react/24/outline';

import { useState } from 'react';
import { Book } from './components/Book';
import { Nav } from './components/Nav';

const SampleData = {
  books: [
    {
      id: 1,
      title: 'My Private Book',
      marks: [],
    },
    {
      id: 2,
      title: 'My Private Book',
      marks: [],
    },
    {
      id: 3,
      title: 'My Private Book',
      marks: [],
    },
  ],
};

function App() {
  const [data, setData] = useState(SampleData);
  return (
    <div className='h-screen w-full overflow-y-hidden overflow-x-scroll'>
      <header>
        <Nav />
      </header>

      <main className=''>
        <div className='flex items-start p-4'>
          {data.books.map((book) => (
            <Book key={book.id} />
          ))}
          <div>
            <button className='mr-2 w-64 rounded-sm bg-cyan-400 px-5 py-1 font-medium text-white hover:bg-cyan-500'>
              + Add Book
            </button>
          </div>
        </div>
      </main>
      {/* <footer>Copyright Indiflex Senior Coding</footer> */}
    </div>
  );
}

export default App;
