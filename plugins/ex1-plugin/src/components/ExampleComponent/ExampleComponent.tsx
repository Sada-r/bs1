// import React from 'react';

// export const ExampleComponent = () => (
//   <div>Hello World!</div>
// );

import React from 'react';
import ProductTable from './productDetails.js';
import App from './productDetails.js';

// function ExampleComponent() {
//   return (
//     <div className="App">
//       <ProductTable />
//     </div>
//   );
// }

// export default ExampleComponent;
export const ExampleComponent = () => {
  return (
    <div className="App">
      <ProductTable />
    </div>
  );
}

export const ExampleComponent1 = () => {
  return (
    <div className="products">
      <h1>Find the product details</h1>
      <App />
    </div>
  );
}