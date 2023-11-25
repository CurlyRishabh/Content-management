 import { NextResponse } from "next/server";
 import connect from "../../../db";
 import Post from "../../../models/Post";


 export const POST = async (req,res) =>{
     try{
        // const {age,title} = await req.json(); 

         console.log("post");
         console.log(age+ title);
         //  await connect();
    //      const posts = await Post.find();
    //      const documentData = Object.keys(posts[0]._doc);
    // console.log(documentData);
    //      posts.forEach((jake) => {
    //             const temp = jake._doc;   
	// 			console.log(temp.Title);
    //             console.log(temp.Age)
	// 		});
    // res.json({message: "Data received successfully"});
         return new NextResponse("Hello I Am at route Get " + JSON.stringify({sfsd:"sfsdf"}), {status: 200});

     }catch(error){
        return new NextResponse("Error in fetching "+ error ,{status: 500});
     }
 }