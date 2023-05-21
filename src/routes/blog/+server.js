import pkg from 'pg';
const {Client} = pkg;

let client;

connectToDatabase();

export async function connectToDatabase() {
    console.log("connecting to database");
    client = new Client({
        user: process.env.DB_BLOG_USER || "postgres",
        host: process.env.DB_BLOG_HOST || "127.0.0.1",
        database: process.env.DB_BLOG_DATABASE || "blogs",
        password: process.env.DB_BLOG_PASSWORD,
        port: process.env.DB_BLOG_PORT || 5432
      });
    await client.connect()
        .then(() => console.log("Connected to PostgreSQL database successfully."))
        .catch(err => {
            console.log("An error  occurred: " + err);
            console.log("Credentials: " + (process.env.DB_BLOG_USER || "postgres") + " | " + (process.env.DB_BLOG_HOST || "127.0.0.1") + " | " + (process.env.DB_BLOG_DATABASE || "blogs") + " | " + (process.env.DB_BLOG_PORT || 5432))
        });
}

export async function getBlog(id) {
    const sql = "SELECT * FROM public.blogs WHERE ID='" + id + "'";

    console.log("Executing: " + sql);
    const query = await client.query(sql);
    console.log(query);
    return query.rows[0];
}

export async function deleteBlog(id) {
    const sql = "DELETE FROM public.blogs WHERE ID='" + id + "'"
    console.log("Executing: " + sql);
    const query = await client.query(sql);
    console.log(query);
}

export async function createBlog(blog) {
    const sql = "INSERT INTO public.blogs VALUES ('" + fixQuotesForSQL(blog.name) + "','" + fixQuotesForSQL(blog.title) + "','" + fixQuotesForSQL(blog.description) + "', NOW())";
    console.log("Executing: " + sql);
    const query = await client.query(sql);
    console.log(query);
}

export async function updateBlog(blog) {
    const sql = getUpdateSQLString(blog);
    console.log("Executing: " + sql);
    const query = await client.query(sql);
    console.log(query);
}

function getUpdateSQLString(blog) {
    let updatePart = "";
    if (blog.title) {
        updatePart += "title='" + fixQuotesForSQL(blog.title) + "'"
    }
    if (blog.content) {
        if (updatePart !== "")
            updatePart += ","
        updatePart += "content='" + fixQuotesForSQL(blog.content) + "'"
    }
    return "UPDATE public.blogs SET " + updatePart + " WHERE ID='" + fixQuotesForSQL(blog.id) + "'";
}

function fixQuotesForSQL(text) {
    if (text === undefined || text === null) return text;
    return text.replace("'", "''")
}
