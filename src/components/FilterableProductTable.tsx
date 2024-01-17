import {useState, FC} from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

interface Product {
  category: string,
  price:string,
  stocked:boolean,
  name:string
}

interface FilterableProductTableProps<T> {
  products: T[];
}

const FilterableProductTable: FC<FilterableProductTableProps<Product>> = ({products }) => {
  const [filterText, setFilterText] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);

  return (
    <div>
      <SearchBar 
        filterText={filterText} 
        inStockOnly={inStockOnly} 
        onFilterTextChange={setFilterText} 
        onInStockOnlyChange={setInStockOnly} />
      <ProductTable 
        products={products} 
        filterText={filterText}
        inStockOnly={inStockOnly} />
    </div>
  );
}

export default FilterableProductTable