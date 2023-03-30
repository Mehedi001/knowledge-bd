import './App.css'
import Header from './components/Header/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import Blogsbody from './components/blogsbody/Blogsbody';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Blogsbody></Blogsbody>
    </div>
  )
}

export default App
