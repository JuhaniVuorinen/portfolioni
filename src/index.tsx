import React from 'react';
import './index.module.scss'
import SomeExampleComponent from './components/example/someExampleComponent'
import MyFirstComponent from './components/myFirstComponent';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AboutMe from './components/aboutMe/aboutMe';
import Footer from './components/footer/footer';
import Projects from './components/Projects/Projects';
import CV from './components/CV/CV';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}></Route>
        <Route path='/example' element={<SomeExampleComponent />} />
        <Route path='/AboutMe' element={<AboutMe />} />
        <Route path='/Footer' element={<Footer />} />
        <Route path='/Projects' element={<Projects />} />
        <Route path='/CV' element={<CV />} />
        
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
