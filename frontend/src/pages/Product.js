import React, {useLayoutEffect} from 'react'

const Product = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  });
  
  return (
    <div>Product</div>
  )
}

export default Product