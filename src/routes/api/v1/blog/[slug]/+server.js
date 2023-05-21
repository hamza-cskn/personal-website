import {createBlog, deleteBlog, getBlog, updateBlog} from "../../../../blog/+server.js";

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

async function getBlogByParam(params) {
    return await getBlogByName(getBlogNameByParam(params));
}

function getBlogNameByParam(params) {
    return params.slug;
}

async function getBlogByName(name) {
    return await getBlog(name)
}
