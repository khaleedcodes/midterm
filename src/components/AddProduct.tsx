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
        <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6">Add Product</h2>
            <div className="mb-4">
                <label className="block text-gray-700">Product Name:</label>
                <input
                    type="text"
                    name="name"
                    value={product.name}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border border-gray-300 rounded mt-2"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Price:</label>
                <input
                    type="number"
                    name="price"
                    value={product.price}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border border-gray-300 rounded mt-2"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Description:</label>
                <textarea
                    name="description"
                    value={product.description}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border border-gray-300 rounded mt-2"
                ></textarea>
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Category:</label>
                <input
                    type="text"
                    name="category"
                    value={product.category}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border border-gray-300 rounded mt-2"
                />
            </div>
            <button
                type="submit"
                className="w-full bg-blue-500 text-white p-2 rounded mt-4 hover:bg-blue-600"
            >
                Add Product
            </button>
        </form>
    );
};

export default AddProduct;
