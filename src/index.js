import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';
import {BrowserRouter,Route,Routes} from "react-router";
import HomePage from './routes/homepage/homePage';
import SearchPage from './routes/searchPage/searchPage';
import AuthPage from './routes/authPage/AuthPage';
import CreatePage from './routes/createPage/createPage';
import PostPage from './routes/postPage/postPage';
import ProfilePage from './routes/profilePage/profilePage';
// ... other imports like HomePage, SearchPage, etc.
import Setting from './routes/setting/Setting'; // <-- ADD THIS LINE
import MainLayout from './routes/layouts/mainLayout';

import {QueryClient,QueryClientProvider} from '@tanstack/react-query'
import { IKContext } from 'imagekitio-react';


const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <IKContext urlEndpoint="https://ik.imagekit.io/himank2004">
    <BrowserRouter>
    <Routes>
      <Route element={<MainLayout/>}>

      <Route path='/' element={<HomePage/>}/>
      <Route path='/search' element={<SearchPage/>}/>
      
      <Route path='/create' element={<CreatePage/>}/>
      <Route path='/pins/:id' element={<PostPage/>}/>
      <Route path='/:userName' element={<ProfilePage/>}/> 
      <Route path='/setting' element={<Setting/>}/>     
      
      </Route>
      <Route path='/auth' element={<AuthPage/>}/>
    </Routes>
    </BrowserRouter>
    </IKContext>
    </QueryClientProvider> 
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
