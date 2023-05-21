export function load({url}) {
    const page = parseInt(url.searchParams.get("page")) || 1;
    return {
        page: page,
        products: [{
            name: "MacBook Pro 2023",
            category: 'Notebook',
            brand: 'Apple',
            price: (1258941).toLocaleString("en-US", {style: "currency", currency: "TRY"})
        }, {
            name: "MacBook Pro 2023",
            category: 'Notebook',
            brand: 'Apple',
            price: (129481981249).toLocaleString("en-US", {style: "currency", currency: "EUR"})
        }]
    }
}