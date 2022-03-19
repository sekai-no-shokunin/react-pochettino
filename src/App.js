import './App.css';
import NavBar from './components/NavBar/NavBar';
import ListProduct from './components/ListProduct/ListProduct';
function App() {
  return (
    <div className="App">
      <NavBar />
      <ListProduct title = "Productos de la semana"/>
    </div>
  );
}

export default App;
