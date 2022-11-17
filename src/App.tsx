// App.tsx
import ClickCount from './components/clickCount/clickCount';
import SomeExampleComponent from './components/example/someExampleComponent'
import React from 'react'
import AboutMe from './components/aboutMe/aboutMe';



//import MyFirstComponent from './components/myFirstComponent';

const App: React.FC = () => {
  return (
    <div>
      <AboutMe />
      <SomeExampleComponent />
      
    </div>
  )
}

export default App