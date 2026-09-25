import React from 'react'
import cosmeticsdata from '../assets/cosmeticsdata'

const CosmeticsCard = ({ product }: { product: (typeof cosmeticsdata)[number] }) => {
  return (
    <div>
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>${(product.price / 100).toFixed(2)}</p>
    </div>
  )
}

export default CosmeticsCard