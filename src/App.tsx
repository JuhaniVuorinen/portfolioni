// App.tsx
import ClickCount from './components/clickCount/clickCount';
import SomeExampleComponent from './components/example/someExampleComponent'
import React from 'react'
import AboutMe from './components/aboutMe/aboutMe';
import Navbar from './components/navbar/navbar';
import Homepage from './components/homePage/homepage';
import Footer from './components/footer/footer';

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Homepage />
      
       
    </div>
  )
}

export default App