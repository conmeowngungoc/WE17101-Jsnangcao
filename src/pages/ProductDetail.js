import { getProduct } from "../api/products";

const ProductDetail = {
    render: async (id) => {
        const response = await getProduct(id);
        const {data} = response; // const data = response.data;

        return (
            `<div>
                <div>ID: ${data.id}</div>
                <div>Name: ${data.name}</div>
                <div>Description: ${data.description}</div>
                <div>Status: ${data.status}</div>
            </div>`
        );
    }
};

export default ProductDetail;