import { headers,cookies } from "next/headers";
import { type NextRequest } from "next/server";

export async function GET(request: NextRequest){
    const requestsHeaders = new Headers(request.headers);
    console.log(requestsHeaders.get("Authorization"))
    const headerList = headers();
    const theme = request.cookies.get('theme');
    console.log(theme);

    cookies().set("resultsPerPage", "20");
    console.log(cookies().get("resultsPerPage"))
    console.log(headerList.get('Authorization'))
    // return new Response("chant and be happy Route date");
    return new Response("<h1>chant and be happy Route date</h1>", {headers: {
        "content-type" : "text/html",
        "Set-Cookie": "theme=dark"
    }});
}