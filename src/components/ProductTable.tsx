import React from 'react';

type Product = {
  category: string;
  price:string;
  stocked:boolean;
  name:string;
}

type ProductTableProps<T> = {
  products: T[];
  filterText:string;
  inStockOnly:boolean;
}

type ProductCategoryRowProps = {
  category:string;
  key:string;
}

type ProductRowProps = {
  product:Product;
  key:string
}

const ProductCategoryRow: React.FC<ProductCategoryRowProps> = ({category} ) => {
  return (
    <tr>
      <th colSpan={2}>
        {category}
      </th>
    </tr>
  );
}

const ProductRow: React.FC<ProductRowProps> = ( {product} ) => {
    const name = product.stocked ? product.name :
      <span style={{ color: 'red' }}>
        {product.name}
      </span>;
  
    return (
      <tr>
        <td>{name}</td>
        <td>{product.price}</td>
      </tr>
    );
}
  
const ProductTable: React.FC<ProductTableProps<Product>> = ({
    products, 
    filterText, 
    inStockOnly
}) => {
  const rows:React.ReactNode[] = [];
  let lastCategory:string | null = null;
  
  products.forEach((product) => {
    if (
      product.name.toLowerCase().indexOf(
        filterText.toLowerCase()
      ) === -1
    ) {
      return;
    }
    if (inStockOnly && !product.stocked) {
      return;
    }
    if (product.category !== lastCategory) {
        rows.push(
          <ProductCategoryRow
            category={product.category}
            key={product.category} 
          />
        );
    }
    rows.push(
      <ProductRow
        product={product}
        key={product.name} 
      /> 
    );
    lastCategory = product.category;
    
  });
  
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }

export default ProductTable;