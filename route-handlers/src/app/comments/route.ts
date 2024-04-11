
import { NextRequest } from "next/server";
import { comments } from "./data"

export async function GET(request: NextRequest){
    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get("query");
    const filteredComments = query ? comments.filter(cooment => cooment.text.includes(query)) : comments;
    return Response.json(filteredComments)
}

export async function POST(request: Request) {
    const comment = await request.json();
    const newCooment = {
        id: comments.length + 1,
        text: comment.text
    }

    comments.push(newCooment);
    return new Response(JSON.stringify(newCooment), {
        headers:{
            "content-Type":"application/json"
        },
        status: 201,
    })
}

