
import './App.css';
import Home from './components/Home';
import Register from './components/Register';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import SignUp from './components/signUp';
import Login from './components/login';

function App() {
  return (
    // <div className="App">
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes >
    </>
    // {/* </div> */}
  );
}

export default App;
