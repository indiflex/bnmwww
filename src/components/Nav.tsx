// import { MagnifyingGlassCircleIcon } from '@heroicons/react/24/outline';
import { BookmarkSquareIcon } from '@heroicons/react/24/outline';
import { NavLink } from 'react-router-dom';
import { ogscrap } from '../utils/ogs';

export const Nav = () => {
  return (
    <nav className='bg-cyan-100x flex items-center justify-between px-2 shadow'>
      <div>
        <h1 className='flex text-2xl font-medium text-slate-700'>
          <BookmarkSquareIcon className='w-8 text-cyan-500' />
          <span className='hidden font-bold text-rose-700 sm:block'>
            <NavLink to='/' replace>
              Book & Mark
            </NavLink>
          </span>
          <span
            // onClick={() => scrap('https://tailwindcss.com')}
            // onClick={() => scrap('https://naver.com')}
            onClick={async () => {
              const res = await ogscrap('https://naver.com');
              console.log(res);
            }}
            aria-hidden={true}
            className='font-bold text-rose-700 sm:hidden'
          >
            <NavLink to='/' replace>
              B & M
            </NavLink>
          </span>
        </h1>
      </div>
      <div>
        {/* <MagnifyingGlassCircleIcon className='w-4 absolute h-8' /> */}
      </div>
    </nav>
  );
};
