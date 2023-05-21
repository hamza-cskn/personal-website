<script>
    /** @type {import('./$types').PageData} */
    export let data;
</script>

<tr class="border-b dark:border-gray-700">
    <th scope="row"
        class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">{data.name}
    </th>
    <td class="px-4 py-3">{data.category}</td>
    <td class="px-4 py-3">{data.brand}</td>
    <td class="px-4 py-3">{data.price}</td>
    <td class="px-4 py-3 flex items-center justify-end">
        <button class="text-white hover:bg-green-400 p-2 bg-green-500 rounded">Purchase Now</button>
    </td>
</tr>