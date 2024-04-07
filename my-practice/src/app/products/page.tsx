import Link from "next/link"



const Products = () => {
  const productId = 300;
    return (
      <div>
        <Link href="/" >Home</Link>
        <h1>Products</h1>
        <h2>
          <Link href="products/1">
            Product 1
          </Link>
        </h2>
        <h2>
          <Link href="products/2">
            Product 2
          </Link>
        </h2>
        <h2>
          <Link href={`products/${productId}`} replace>
            Product 3
          </Link>
        </h2>
        
      </div>
    )
  }
  
  export default Products