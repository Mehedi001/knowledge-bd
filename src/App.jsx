import './App.css'
import Header from './components/Header/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import Blogsbody from './components/blogsbody/Blogsbody';
import Blogpage from './components/blogpage/Blogpage';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Blogsbody></Blogsbody>
      <Blogpage></Blogpage>
      <Toaster></Toaster>
    </div>
  )
}

export default App
