import { Component } from "react";
import Userfor from "./Formapplication/Userfor";
import Showtable from "./Formapplication/Showtable";
import Home from "./Formapplication/Home";
import Update from "./Formapplication/Update";
import Read from "./Formapplication/Read";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

class App extends Component {

  routeData = [
    {
    
      path : '/',
      element : <Home></Home>,

    },

    {
    
      path : '/adduser',
      element : <Userfor></Userfor>,

    },

    {
    
      path : '/showuser',
      element : <Showtable/>,

    },

    {
    
      path : '/readuser/:id',
      element : <Read/>,

    },
    {
    
      path : '/update/:id',
      element : <Update></Update>,

    },
  
  ];
approuter = createBrowserRouter(this.routeData)
render(){
  return (<RouterProvider router={this.approuter} 
 
  />
  )
}
}
export default App;