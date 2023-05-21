<script>
    import "../../app.postcss";
    import BlogCard from "./BlogCard.svelte";

    var data = {id: "hello", title: "title", content: "any content", author: "Hamza Coşkun", type: "Blog", time: Date()};

</script>

<head>
    <link href='https://fonts.googleapis.com/css?family=Inter:100,200,300,400,500,600,700,800,900' rel='stylesheet'
          type='text/css'>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Poppins">
</head>

<section class="theme-bg-color-1">
    <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div class="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
            <h2 class="mb-4 text-3xl lg:text-4xl tracking-tighter font-extrabold text-gray-900 dark:text-white">Blog</h2>
            <p class="font-light text-gray-500 sm:text-xl dark:text-gray-400">I love to share my experiences and learn from experiences of others.</p>
            <p class="font-light text-gray-400 sm:text-xl dark:text-gray-500 mt-3 italic">"You must learn from the mistakes of others. You can't possibly live long enough to make them all yourself."</p>
            <p class="font-light text-gray-400 sm:text-xl dark:text-gray-500">-Sam Levenson</p>
        </div>
        <div class="grid gap-8 lg:grid-cols-2">
            <BlogCard {data}/>
        </div>
    </div>
</section>