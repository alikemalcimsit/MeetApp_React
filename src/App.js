
import './App.css';
import HomePage from './components/HomePage';
import Navbar from './components/Navbar';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <div className="App">
        <Navbar/>
      <GlobalProvider>
    <HomePage/>
</GlobalProvider>
    </div>
  );
}

export default App;
