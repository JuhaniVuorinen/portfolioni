// App.tsx
import SomeExampleComponent from './components/example/someExampleComponent'
import React from 'react'
import MyFirstComponent from './components/myFirstComponent';

const App: React.FC = () => {
  return (
    <div>
      <MyFirstComponent />
      <SomeExampleComponent />
    </div>
  )
}

export default App