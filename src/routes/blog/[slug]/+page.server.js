/** @type {import('./$types').PageLoad} */
export async function load({ fetch, params }) {
    const res = await fetch(`/api/v1/blog/${params.slug}`);
    return await res.json();
}