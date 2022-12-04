import logo from './logo.svg';
import './App.css';
import Nav from './Component/Header/Nav';
import MealsField from './Component/MealsField/MealsField';

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <MealsField></MealsField>
    </div>
  );
}

export default App;
