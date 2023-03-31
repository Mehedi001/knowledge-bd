import './App.css'
import Header from './components/Header/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import Blogsbody from './components/blogsbody/Blogsbody';
import Blogpage from './components/blogpage/Blogpage';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Blogsbody></Blogsbody>
      <Blogpage></Blogpage>
    </div>
  )
}

export default App
