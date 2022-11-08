// import { MagnifyingGlassCircleIcon } from '@heroicons/react/24/outline';
import { BookmarkSquareIcon } from '@heroicons/react/24/outline';

export const Nav = () => {
  return (
    <nav className='bg-cyan-100x flex items-center justify-between px-2 shadow'>
      <div>
        <h1 className='flex text-2xl font-medium text-slate-700'>
          <BookmarkSquareIcon className='w-8 text-cyan-500' />
          <span className='hidden font-bold text-rose-700 sm:block'>
            Book & Mark
          </span>
          <span className='font-bold text-rose-700 sm:hidden'>B & M</span>
        </h1>
      </div>
      <div>
        {/* <MagnifyingGlassCircleIcon className='w-4 absolute h-8' /> */}

        <input
          type='text'
          placeholder='search...'
          className='h-6 w-24 rounded bg-transparent px-2'
        />
      </div>
    </nav>
  );
};
