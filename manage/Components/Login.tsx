'use client'

import React from 'react';
import { useState } from "react";


export default function Login() {
    const [age, setAge] = useState("");
	const [title, setTitle] = useState("");

    const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
		const res = await fetch("api/posts", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({age, title}),
		});
	} catch (error) {
		console.log("Error during registration: ", error);
	}
    };
  return (
		<div>
			Login
			<form onSubmit={handleSubmit}>
				<input onChange={(e) => setAge(e.target.value)} type="text" placeholder="Age" />
				<input onChange={(e) => setTitle(e.target.value)} type="text" placeholder="Title" />
				<button className="bg-green-600 text-white font-bold cursor-pointer px-6 py-2">Login</button>
			</form>
		</div>
  );
}
