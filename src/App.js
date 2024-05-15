import logo from './logo.svg';
import './App.css';
import {Header} from "./components/Header";
import {Footer} from "./components/Footer";
import GlobalRouter from "./routes/GlobalRouter";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <GlobalRouter></GlobalRouter>
      <Footer></Footer>
    </div>
  );
}

export default App;
