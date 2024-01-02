type data = {
	name: string;
};

export async function GET() {
	return Response.json({messege: "hello world", l: "asdas"});
}
