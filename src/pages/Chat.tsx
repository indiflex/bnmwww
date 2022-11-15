import { useCallback, useEffect, useRef, useState } from 'react';
// import axios, { AxiosError, AxiosInstance } from 'axios';
import axios from 'axios';
import io, { Socket } from 'socket.io-client';

const { VITE_HOST } = import.meta.env;

interface IBookChat {
  id: number;
  book: number;
  speaker: number;
  msg: string;
}

interface IRes {
  bookchat: IBookChat[];
}

const DefaultMsg = {
  id: 0,
  book: 0,
  speaker: 0,
  msg: '',
};

// console.log('****************>>>', process.env);

const xapi = axios.create({
  // baseURL: `/api/bnmwww/0.1/`,
  baseURL: `${VITE_HOST}/api/bnmwww/0.1/`,
  withCredentials: true,
});

export const Chat = () => {
  const [chats, setChats] = useState<IBookChat[]>([DefaultMsg]);
  const [socket, setSocket] = useState<Socket>();
  const msgRef = useRef<HTMLTextAreaElement>(null);

  // const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io();
  // let socket: Socket;

  const clearChatBox = () => {
    if (msgRef.current) {
      msgRef.current.value = '';
      msgRef.current.focus();
      msgRef.current.style.height = '3rem';
    }
  };

  const addChat = () => {
    const msg = msgRef.current?.value;
    if (!msg?.trim()) {
      alert('메시지를 입력하세요!');
      return;
    }

    const chat = { id: new Date().getTime(), book: 1, speaker: 1, msg };

    socket?.emit('message', chat, (ret: string) => {
      console.log('🚀 ~ emit ret', ret);
      clearChatBox();
    });

    setChats((preChats) => [...preChats, chat]);
  };

  const msgInput = useCallback(() => {
    if (msgRef.current && msgRef.current.value) {
      msgRef.current.style.height = `1px`; // scrollHeight를 최적화하기위해 먼저 작게 만든다!
      msgRef.current.style.height = `${msgRef.current.scrollHeight}px`;
    }
  }, []);

  // const setSocketData = (evt: string, data: IBookChat) => {
  //   if (evt === 'message') {
  //     setChats((preMsgs: IBookChat[]) => [...preMsgs, data]);
  //   }
  // };

  const closeSocket = () => {
    console.log('close socket...', socket);
    if (socket) {
      socket.close();
    }
  };

  // const onSync = (data: any) =>

  const initializeSocket = useCallback(() => {
    console.debug('initializeSocke!!', socket?.connected);
    if (socket) {
      console.log('********Already Exists socket.......>>', socket?.connected);
      return;
    }

    const socketUrl = VITE_HOST;
    console.log('session.socketUrl>>>>>', socketUrl);
    const sock = io(socketUrl, {
      transports: ['websocket'],
    });
    sock.on('connect', () => {
      console.log('session.Connect....', socketUrl);
    });

    console.log('+++++++++++++++++++++++++++++++++++++++++++++++++++');
    sock.on('message', (data: IBookChat) => {
      console.log('session.onMessage::', data);
      // setSocketData('msg', data);
      setChats((preChats) => [...preChats, data]);
    });

    sock.on('disconnect', (reason: string) => {
      console.log('session.DisConnect....', reason);
    });

    setSocket(sock);
  }, []);

  useEffect(() => {
    if (msgRef.current) msgRef.current.focus();
    xapi.get<IRes>('bookchats/all').then((res) => {
      // console.log('res>>>', res.data);
      setChats(res.data.bookchat);
    });
    initializeSocket();

    return closeSocket;
  }, []);

  return (
    <div className='container mt-5 p-5 text-center'>
      <h1 className='mb-5 text-xl font-bold'>Chat {chats.length}</h1>
      <div className='mx-auto'>
        {chats.map((chat) => (
          <p key={chat.id}>{chat.msg}</p>
        ))}
      </div>
      <div className='mx-auto mt-5'>
        <textarea
          className='chat_area wid100 lp03remx'
          placeholder='메세지를 입력 하세요..'
          ref={msgRef}
          onInput={msgInput}
          onKeyPress={(evt) => {
            // console.log('evt=', evt);
            if (evt.key === 'Enter' && evt.ctrlKey) addChat();
          }}
        />
        <button onClick={addChat}>Send</button>
      </div>
    </div>
  );
};
