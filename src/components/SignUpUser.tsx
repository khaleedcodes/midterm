// src/components/SignUpUser.tsx
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

interface SignUpFormInputs {
    firstName: string;
    lastName: string;
    userName: string;
    email: string;
    password: string;
    confirmPassword: string;
}

const SignUpUser: React.FC = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm<SignUpFormInputs>();
    const password = watch("password", "");

    const onSubmit: SubmitHandler<SignUpFormInputs> = data => {
        if (data.password !== data.confirmPassword) {
            alert('Passwords do not match!');
        } else {
            alert(JSON.stringify(data, null, 2));
            console.log(data);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6">Sign Up</h2>
            <div className="mb-4">
                <label className="block text-gray-700">First Name:</label>
                <input
                    {...register("firstName", { required: true })}
                    className="w-full p-2 border border-gray-300 rounded mt-2"
                />
                {errors.firstName && <p className="text-red-500">First name is required</p>}
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Last Name:</label>
                <input
                    {...register("lastName", { required: true })}
                    className="w-full p-2 border border-gray-300 rounded mt-2"
                />
                {errors.lastName && <p className="text-red-500">Last name is required</p>}
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Username:</label>
                <input
                    {...register("userName", { required: true })}
                    className="w-full p-2 border border-gray-300 rounded mt-2"
                />
                {errors.userName && <p className="text-red-500">Username is required</p>}
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Email:</label>
                <input
                    {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                    className="w-full p-2 border border-gray-300 rounded mt-2"
                />
                {errors.email && <p className="text-red-500">Email is invalid</p>}
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Password:</label>
                <input
                    type="password"
                    {...register("password", { required: true })}
                    className="w-full p-2 border border-gray-300 rounded mt-2"
                />
                {errors.password && <p className="text-red-500">Password is required</p>}
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Confirm Password:</label>
                <input
                    type="password"
                    {...register("confirmPassword", { required: true })}
                    className="w-full p-2 border border-gray-300 rounded mt-2"
                />
                {errors.confirmPassword && <p className="text-red-500">Confirm password is required</p>}
            </div>
            <button
                type="submit"
                className="w-full bg-blue-500 text-white p-2 rounded mt-4 hover:bg-blue-600"
            >
                Sign Up
            </button>
        </form>
    );
};

export default SignUpUser;
