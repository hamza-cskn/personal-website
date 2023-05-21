<script>
    import Blog from "./Blog.svelte";
    import NavBar from "../../../components/NavBar.svelte";
    import Footer from "../../../components/Footer.svelte";

    /** @type {import('./$types').PageData} */
    export let data;
</script>

<NavBar/>

<div style="min-height: 100vh">
    <Blog {data}/>
</div>
<Footer/>