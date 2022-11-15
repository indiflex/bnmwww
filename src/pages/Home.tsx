import { NavLink } from 'react-router-dom';

export const Home = () => {
  return (
    <div className='container p-5'>
      <div className='flex justify-between'>
        <h1>HOME</h1>
        <div>
          <NavLink to='/chat'>Chat</NavLink> |
          <NavLink to='/login'>SignIn</NavLink>
        </div>
      </div>
      <div className='pt-5 pl-5'>
        <input
          type='text'
          placeholder='search...'
          className='w-50 h-6 rounded bg-transparent px-2'
        />
      </div>
    </div>
  );
};
