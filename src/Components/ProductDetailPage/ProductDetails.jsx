import React from 'react'
import { useParams ,useNavigate} from 'react-router-dom'

const ProductDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const products = [
{ id: 1, name: "Laptop", price: 50000 },
{ id: 2, name: "Mobile", price: 20000 },
{ id: 3, name: "Headphones", price: 3000 }
    ];
    const product = products.find(p => p.id === Number(id));


if (!product) {
return <h3>Product not found</h3>;
}
  return (
      <div>
          <h2>{product.name}</h2>
<p>Price: ₹{product.price}</p>


<button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  )
}

export default ProductDetails