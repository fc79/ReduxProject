import logo from './logo.svg';
import './App.css';
import UserList from './containers/student-detail'
import UserDetails from './containers/student-list';
import { useSelector } from 'react-redux';
import { selectUser } from './actions';

function App() {

  const user = useSelector(selectUser);
  return (
      <div className="container">
        <div className="row">
       <UserList/>
       </div>
       <div className="row">
       <UserDetails/>
      
       </div>
     
     </div>
  );
}

export default App;
