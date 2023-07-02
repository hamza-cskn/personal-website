import {deleteBlog, getBlog, updateBlog} from "../../../../blog/+server.js";
import {getBlogByParam, getBlogNameByParam} from "../../blog-resolver.js";

export async function GET({params}) {
    const blogInDB = await getBlogByParam(params);
    if (!blogInDB) {
        return new Response(JSON.stringify({message: "This blog does not exists."}), {
            headers: {'Content-Type': 'application/json'},
            status: 404
        });
    }
    return new Response(JSON.stringify(blogInDB), {headers: {'Content-Type': 'application/json'}, status: 200});
}

export async function DELETE({params}) {
    const blogName = getBlogNameByParam(params);
    const blogInDB = await getBlogByParam(params);

    if (!blogInDB) {
        return new Response(JSON.stringify({message: "This blog could not find."}), {
            headers: {'Content-Type': 'application/json'}, status: 404
        });
    }

    await deleteBlog(blogName)
    return new Response(JSON.stringify({message: "Blog successfully removed."}), {
        headers: {'Content-Type': 'application/json'}, status: 200
    });
}

export async function PUT({params, request}) {
    const blogInDB = await getBlogByParam(params);

    if (!blogInDB) {
        return new Response(JSON.stringify({message: "This blog could not find."}), {
            headers: {'Content-Type': 'application/json'}, status: 404
        });
    }

    const {title, content} = await request.json(); //should check/trim other attributes?

    blogInDB.title = title || blogInDB.title;
    blogInDB.content = content || blogInDB.content;

    await updateBlog(blogInDB)

    return new Response(JSON.stringify({message: "Blog successfully updated."}), {
        headers: {'Content-Type': 'application/json'}, status: 200
    });
}