import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AddBook from './AddBook';
import BlogDetails from './BlogDetails';

function App() {
  return (

  <Router> {/* Wrap the whole App in router so all components can use it 
          Navbar will always show*/}
    <div className="App">
        <Navbar/> 
      <div className="content">   
      {/* decide where we want our content to go when we go to diff pages. so we use switch here
      makes it so that only one route shows at any one time 
      all our routes go inside here*/}
        <Switch>

          <Route exact path="/"> {/* use exact to specify to only go into this route IF path matches exactly */}
            <Home/>
          </Route>

          <Route path="/AddBook">
            <AddBook/>
          </Route>

          <Route path="/books/:id">
              <BlogDetails />
          </Route>

        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;

//create an input box

//input and store in the .json

//delete book from json based on id