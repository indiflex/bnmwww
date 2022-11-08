import { Mark } from './Mark';

const book = {
  id: 1,
  title: 'My Private Book',
  marks: [{ id: 1, title: 'Title' }],
};

export const Book = () => {
  return (
    <div className='mr-3 w-64 flex-shrink-0 rounded bg-gray-200 p-1.5'>
      <div className='h-[80vh] overflow-y-scroll xs:h-[82vh] sm:h-[84vh] md:h-[86vh] xl:h-[88vh]'>
        <div className='flex items-center justify-between text-xl font-bold text-slate-700'>
          <h3>{book.title}</h3>
          <div className='text-sm'>Follow</div>
        </div>
        {book.marks.length ? (
          book.marks.map((mark) => <Mark key={mark.id} />)
        ) : (
          <hr className='border-3 mt-0 mb-3 border-white' />
        )}
      </div>
      <button className='float-right mt-2 rounded-full bg-cyan-400 px-4 py-1 font-medium text-white hover:bg-cyan-500'>
        + Add Mark
      </button>
    </div>
  );
};
