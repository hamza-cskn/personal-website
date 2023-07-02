import {createBlog, getBlogs} from "../../../blog/+server.js";
import {getBlogByParam, getBlogNameByParam} from "../blog-resolver.js";

export async function GET({params, request}) {
    return new Response(JSON.stringify(await getBlogs()), {
        headers: {'Content-Type': 'application/json'},
        status: 200
    });
}
export async function POST({params, request}) {
    const blogName = getBlogNameByParam(params);
    const blogInDB = await getBlogByParam(params);

    if (blogInDB) {
        return new Response(JSON.stringify({message: "This blog already exists."}), {
            headers: {'Content-Type': 'application/json'}, status: 409
        });
    }

    const {title, content} = await request.json();

    //validate request
    if (!content) {
        return new Response(JSON.stringify({message: "Content must be specified."}), {
            headers: {'Content-Type': 'application/json'}, status: 400
        });
    }

    //if title section is not exists, then use first 10 character of content as default.
    const blog = {name: blogName, title: title || content.substring(0, 10), content: content};
    await createBlog(blog);

    return new Response(JSON.stringify(blog), {
        headers: {'Content-Type': 'application/json'},
        status: 200
    });
}
