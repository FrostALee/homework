import './App.css';
import {Route} from 'react-router-dom';
import Homework from './Homework'
import Detail from './Detail';
// import Text from './text';



function App () {


  return (
    <div className='App'>
      <Route path="/" exact>
        <Homework />
      </Route>
      <Route path="/detail" exact>
        <Detail />
      </Route>     
      {/* <Route path="/text" exact>
        <Text />
      </Route>       */}
    </div>
  )
};

export default App;
