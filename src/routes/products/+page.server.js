import { mockProducts } from '../../lib/mockProducts';


/** @type {import('./$types').PageLoad} */
export function load({ params }) {

    /*
     * A real version might use something like /routes/products/[category]/[product_id], fetching data from the BE
     */

    return {
        products: mockProducts
    };
}
