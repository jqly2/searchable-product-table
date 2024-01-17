import FilterableProductTable from './components/FilterableProductTable'; 
import {PRODUCTS} from './constants';

//Need to change out interface to type as they are comps props/states
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