import { useState } from 'react';
import { Book } from '../components/Book';

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

export const MyBooks = () => {
  const [data] = useState(SampleData);
  return (
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
  );
};
