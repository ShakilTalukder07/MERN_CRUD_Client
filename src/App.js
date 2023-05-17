import './App.css';
import { Toaster } from 'react-hot-toast';
import Form from './components/Form';
import Items from './components/Items';

function App() {
  return (
    <div className="App">
      <Form></Form>
      <Items></Items>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
