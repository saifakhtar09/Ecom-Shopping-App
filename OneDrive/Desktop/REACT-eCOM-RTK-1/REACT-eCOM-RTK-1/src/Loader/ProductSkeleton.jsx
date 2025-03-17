import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
const ProductSkeleton = () => {
    return (
        <div className="product-skeleton">
          <Skeleton height={300} width="100%" /> {/* Image placeholder */}
          <Skeleton height={20} width="100%" style={{ margin: "10px 0" }} /> {/* Title */}
          <Skeleton height={20} width="100%" /> {/* Price */}
        </div>
    )
}

export default ProductSkeleton