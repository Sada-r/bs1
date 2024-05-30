// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const ProductTable = () => {
//   const [products, setProducts] = useState([]);

// useEffect(() => {
//     axios.get('https://dummyjson.com/products')
//       .then(response => {
//         if (Array.isArray(response.data)) {
//           setProducts(response.data);
//         } else {
//           console.error('Unexpected response format. Expected an array.');
//         }
//       })
//       .catch(error => {
//         console.error('Error fetching data:', error);
//       });
//   }, []);
  

//   return (
//     <div>
//       <h2>Product Table</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Name</th>
//             <th>Price</th>
//             <th>Description</th>
//           </tr>
//         </thead>
//         <tbody>
//           {products.map(product => (
//             <tr key={product.id}>
//               <td>{product.id}</td>
//               <td>{product.name}</td>
//               <td>{product.price}</td>
//               <td>{product.description}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default ProductTable;

import React, { useState, useEffect } from 'react'; 
import axios from "axios"; 
import './App.css'; 
  
function App() { 
    const [data, setData] = useState(); 
  
    useEffect(() => { 
        axios.get('http://localhost:5000/api/products').then( 
            response => { 
                setData(response.data); 
            } 
        ).catch(error => { 
            console.error(error); 
        }) 
    }, []) 
  
    return ( 
        <div className="App"> 
            { 
                <div className='products'> 
                    {data?.map((data) => { 
                        return ( 
                            <div key={data.id}> 
                                <img className='img'
                                    src={data.image} 
                                    alt="img" /> 
                                <h1>{data.name}</h1> 
                                <h2>{data.description}</h2> 
                                <h3>price : ₹{data.price}</h3>
                            </div> 
                        ); 
                    }) 
                    } 
                </div> 
            } 
        </div> 
    ); 
} 
export default App;
