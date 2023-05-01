import React from 'react';

import './App.css';
import User from './components/User/User';
import Contract from './components/Contract/Contract';

function App() {
  const user1 = {
    name:"Atiqur Rahman",
    age:32,
    isRegister:true,
    language:["javascript", "python", "Rust", "java", "c++"]
  }
  return (
    <div className="App">
   <h1>Welcome To React-TypeScript</h1>
   <User name="Tawhid Afridi" age={2} isRegister={true} lang={["javascript", "React", "Python", "Rust"]}></User>
   <User name="Doly Akter" age={25} isRegister={false} lang={["Bangla", "Arobic", "English"]}></User>

   <Contract user={user1}></Contract>
    </div>
  );
}

export default App;
 