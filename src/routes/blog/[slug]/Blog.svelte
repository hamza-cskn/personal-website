<script>
    import "../../../app.postcss";
    import SvelteMarkdown from 'svelte-markdown';

    /** @type {import('./$types').PageData} */
    export let data;
</script>

<head>
    <link href='https://fonts.googleapis.com/css?family=Inter:100,200,300,400,500,600,700,800,900' rel='stylesheet'
          type='text/css'>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Poppins">
</head>

<main class="pt-8 pb-16 lg:pt-16 lg:pb-24 theme-bg-color-1">
    <div class="flex justify-between px-4 mx-auto max-w-screen-xl">
        <article class="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
            <header class="mb-4 lg:mb-6 not-format">
                <h1 class="mb-4 text-3xl text-center font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
                    {data.title}</h1>
            </header>

            <SvelteMarkdown source = {data.content} />

        </article>
    </div>
</main>