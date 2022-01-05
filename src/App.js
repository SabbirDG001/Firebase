import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/home/Home';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
function App() {
  return (
    <div className="App">
      <h2>Hello</h2>
      <BrowserRouter>
      <Routes>
      <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <Route path="login">
            <Login></Login>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
