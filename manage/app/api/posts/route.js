 import { NextResponse } from "next/server";
 import connect from "../../../db";
 import Post from "../../../models/Post";


 export const GET = async (req) =>{
     try{
         await connect();
         const posts = await Post.find();
         return new NextResponse("Hello I Am at route Get " + JSON.stringify(posts), {status: 200});

     }catch(error){
        return new NextResponse("Error in fetching "+ error ,{status: 500});
     }
 }