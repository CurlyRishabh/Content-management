import bcrypt from 'bcrypt';
import { NextApiRequest, NextApiResponse } from 'next';
import prismadb from '../../../lib/prismadb';
import {NextResponse} from "next/server";

export async function POST(req: Request) {
	try {
    const {email, name, password} = await req.json();
    console.log(email, name, password);

		const existingUser = await prismadb.user.findUnique({
			where: {
				email,
			},
		});

		if (existingUser) {
			return NextResponse.json({error: "Email taken"});
		}

		const hashedPassword = await bcrypt.hash(password, 12);

		const user = await prismadb.user.create({
			data: {
				email,
				name,
				hashedPassword,
				image: "",
				emailVerified: new Date(),
			},
		});

		return NextResponse.json(user);
	} catch (error) {
		return NextResponse.json({error: `Something went wrong: ${error}`});
	}
}