import './App.css';
import {Route} from 'react-router-dom';
import Homework from './Homework'
import Detail from './Detail';


function App () {
  return (
    <div className='App'>
      <Route path="/" exact>
        <Homework />
      </Route>
      <Route path="/detail/:day_Name" exact component={Detail}>
        {/* <Detail /> */}
      </Route>     
    </div>
  )
};

export default App;
