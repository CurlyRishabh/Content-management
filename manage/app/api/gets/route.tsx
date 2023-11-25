import {NextResponse} from "next/server";
import connect from "../../../db";
import Post from "../../../models/Post";

type MyObject = {
	Title: string;
	Age: number;
};

export const GET = async (req: any) => {
	try {
		await connect();
		const posts:MyObject[] = await Post.find();
		const title = posts[0];
		console.log(Object.keys
			(title));
		
		posts.forEach((jake)=>{
			
			console.log(jake);
			console.log(jake.Title);
		});
		
		// console.log(titles);
		return new NextResponse("Hello I Am at route POSTS " + posts + JSON.stringify(posts), {status: 200});
	} catch (error) {
		return new NextResponse("Error in fetching " + error, {status: 500});
	}
};
