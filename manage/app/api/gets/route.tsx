import {NextResponse} from "next/server";
import connect from "../../../db";
import Post from "../../../models/Post";

type MyObject = {
	Title: string;
	Description: string;
};

export const GET = async (req: any) => {
	try {
		await connect();
		const posts:MyObject[] = await Post.find();

		// await Post.insertMany();
		await Post.deleteMany({title: "Hello"});
		return new NextResponse("Hello I Am at route POSTS " +JSON.stringify(posts), {status: 200});
	} catch (error) {
		return new NextResponse("Error in fetching " + error, {status: 500});
	}
};
