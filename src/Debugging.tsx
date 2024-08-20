import React, { useEffect, useState } from 'react';
//import { Link } from 'react-router-dom';
import './index.css';

// Define the Product interface
export interface Product {
    id: number;
    title: string;
    price: number;
    quantity: number;
    total: number;
    discountPercentage: number;
    discountedTotal: number;
    thumbnail: string;
}

// Define the Cart interface
export interface Cart {
    id: number;
    products: Product[];
    total: number;
    discountedTotal: number;
    userId: number;
    totalProducts: number;
    totalQuantity: number;
}

// Define the Response interface for fetching carts
export interface CartResponse {
    carts: Cart[];
    total: number;
    skip: number;
    limit: number;
}

export default function Debugging() {
    const [carts, setCarts] = useState<Cart[]>([]); // Use Cart[] type for the state

    useEffect(() => {
        fetchCarts();
    }, []);

    const fetchCarts = async () => {
        const response = await fetch('https://dummyjson.com/carts');
        const cartData: CartResponse = await response.json(); // Use CartResponse type for the API response
        setCarts(cartData.carts); // Set the state with the fetched carts
    };

    return (
        <div className="container">
            {carts.map(cart => (
                <div key={cart.id} className="card">
                    <div className="card-header">
                        <h5 className="no-margin">Cart ID: {cart.id}</h5>
                        <p className="small hint-text">User ID: {cart.userId}</p>
                    </div>
                    <div className="card-description">
                        <h3 className="m-b-0">Total: ${cart.total}</h3>
                        <p>Discounted Total: ${cart.discountedTotal}</p>
                        <p>Total Products: {cart.totalProducts}</p>
                        <p>Total Quantity: {cart.totalQuantity}</p>
                    </div>
                    <div className="card-footer">
                        {/* <Link to={`/cart/${cart.id}`} className="text-success">
                            View Cart Details
                        </Link> */}
                    </div>
                    <div className="card-products">
                        {cart.products.map(product => (
                            <div key={product.id} className="product-card">
                                <img src={product.thumbnail} alt={product.title} className="product-thumbnail" />
                                <div className="product-info">
                                    <h5>{product.title}</h5>
                                    <p>Price: ${product.price}</p>
                                    <p>Quantity: {product.quantity}</p>
                                    <p>Total: ${product.total}</p>
                                    <p>Discount: {product.discountPercentage}%</p>
                                    <p>Discounted Total: ${product.discountedTotal}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}