import { getProduct } from "../api/products";
import { formatMoney, formatStatus } from "../helpers/format";
const ProductDetail = {
    render: async (id) => {
        const response = await getProduct(id);
        const {data} = response; // const data = response.data;

        return (
            `<div>
                <div>ID: ${data.id}</div>
                <div>Name: ${data.name}</div>
                <div>Description: ${data.description}</div>
                <div> Price: ${formatMoney(data.price)}</div>
                <div> status: ${formatStatus(data.status)}</div>
            </div>`
        );
    }
};

export default ProductDetail;