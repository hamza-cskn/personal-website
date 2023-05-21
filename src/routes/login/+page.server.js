/** @type {import('./$types').Actions} */
export const actions = {
    default: async ({ cookies, request }) => {
        console.log(request);
        const data = await request.formData();
        const email = data.get('email');
        const password = data.get('password');
        console.log(email);
        console.log(password);
    }
};