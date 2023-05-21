<script>
    import "../../app.postcss";
    import NavBar from "../../components/NavBar.svelte";
    import Footer from "../../components/Footer.svelte";
    import Leaderboard from "./Leaderboard.svelte";

    export let data;
</script>

<head>
    <link href='https://fonts.googleapis.com/css?family=Inter:100,200,300,400,500,600,700,800,900' rel='stylesheet'
          type='text/css'>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Poppins">
</head>
<main>
    <NavBar/>
    <Leaderboard {data}/>
    <Footer/>
</main>
