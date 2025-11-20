import './App.css';
import Greeting from './Greeting';
import UserCard from './UserCard';
import TaskList from './TaskList';   

function App() {
  return (
    <div className="App">
      <Greeting />
      <hr />                  
      <UserCard />
      <hr />    
      <TaskList />          
    </div>
  );
}

export default App;