import { useEffect, useRef } from 'react';

export const Login = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwdRef = useRef<HTMLInputElement>(null);

  const login = () => {
    console.log('login');
  };

  useEffect(() => {
    if (emailRef.current) emailRef.current.focus();
  }, []);

  return (
    <div className='container mt-5 p-5 text-center'>
      <h1 className='mb-5 text-xl font-bold'>Sign-In</h1>
      <div className='mx-auto'>
        <input
          type='email'
          ref={emailRef}
          onFocus={() => emailRef.current?.select()}
          className='mb-2 w-80 rounded border-2 border-cyan-500 p-2'
          placeholder='email address...'
        />
      </div>
      <div className='mx-auto'>
        <input
          type='password'
          ref={passwdRef}
          className='mb-2 w-80 rounded border-2 border-cyan-500 p-2'
          placeholder='password...'
        />

        <div className='mx-auto'>
          <button
            onClick={login}
            className='mt-3 w-80 rounded-md bg-cyan-400 p-2 font-medium text-white hover:bg-cyan-500'
          >
            SignIn
          </button>
        </div>
      </div>
    </div>
  );
};
