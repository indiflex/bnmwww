import { TrashIcon, PencilSquareIcon } from '@heroicons/react/24/outline';
import { useReducer, useRef } from 'react';

const book = {
  id: 1,
  title: 'My Private Book',
  marks: [
    {
      id: 1,
      title: 'Title',
      image:
        'https://tailwindcss.com/_next/static/media/social-card-large.a6e71726.jpg',
      description: 'ddd',
    },
  ],
};

const mark = book.marks[0];

export const Mark = () => {
  const [isEditing, toggleEditing] = useReducer((pre) => !pre, !mark.id);
  const urlRef = useRef<HTMLInputElement>(null);

  return (
    <div className='group mb-1 box-border cursor-pointer rounded border-2 border-cyan-400 bg-white p-1 hover:bg-gray-50'>
      {isEditing ? (
        <>
          <input
            type='text'
            ref={urlRef}
            className='mb-2 w-full rounded p-1.5'
            placeholder='https://....'
          />
        </>
      ) : (
        <div>
          <div>
            {mark.image && (
              <img src={mark.image} alt={mark.title} className='w-full' />
            )}
          </div>
          <h3 className='m-1 font-medium text-slate-700'>
            {mark.id}.{mark.title}
          </h3>
          <p className='m-1 text-sm text-gray-500'>{mark.description}</p>
        </div>
      )}
      <div className='item-center group-vi mr-3 hidden justify-end group-hover:flex'>
        <button
          onClick={() => toggleEditing()}
          className='mb-1 mr-1 rounded-full bg-cyan-400 p-2 hover:bg-cyan-500'
        >
          <PencilSquareIcon className='w-4 text-white' />
        </button>
        <button className='mb-1 rounded-full bg-rose-400 p-2 hover:bg-rose-500'>
          <TrashIcon className='w-4 text-white' />
        </button>
      </div>
    </div>
  );
};
