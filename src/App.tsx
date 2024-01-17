import FilterableProductTable from './components/FilterableProductTable'; 
import {PRODUCTS} from './constants';

function App() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <body>
          <FilterableProductTable products={PRODUCTS}/>
        </body>
      </div>
    );
  }
  
  export default App;