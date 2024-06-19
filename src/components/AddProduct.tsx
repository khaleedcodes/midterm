// src/components/AddProduct.tsx
import React, { useState, ChangeEvent, FormEvent } from 'react';

interface Product {
    name: string;
    price: string;
    description: string;
    category: string;
}

const AddProduct: React.FC = () => {
    const [product, setProduct] = useState<Product>({
        name: '',
        price: '',
        description: '',
        category: '',
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setProduct({
            ...product,
            [name]: value,
        });
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        alert(JSON.stringify(product, null, 2));
        console.log(product);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Product Name:</label>
                <input type="text" name="name" value={product.name} onChange={handleChange} required />
            </div>
            <div>
                <label>Price:</label>
                <input type="number" name="price" value={product.price} onChange={handleChange} required />
            </div>
            <div>
                <label>Description:</label>
                <textarea name="description" value={product.description} onChange={handleChange} required></textarea>
            </div>
            <div>
                <label>Category:</label>
                <input type="text" name="category" value={product.category} onChange={handleChange} required />
            </div>
            <button type="submit">Add Product</button>
        </form>
    );
};

export default AddProduct;
