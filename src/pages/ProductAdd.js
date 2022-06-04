import { createProduct } from "../api/products";

const ProductAdd = {
    render: () => {
        return (
            `<div>
                <form>
                    <div class='form-group'>
                        <label>Tên sp</label>
                        <input class='form-control' id='name' />
                    </div>
                    <div class='form-group'>
                        <label>Price</label>
                        <input class='form-control' id='price' />
                    </div>
                    <div class='form-group'>
                        <label>Descripton</label>
                        <input class='form-control' id='description' />
                    </div>
                    <div class='form-group'>
                        <label>Status</label>

                        <select name="status" id="status">
                            <option value="1">Hiện</option>
                            <option value="0 sswszsss">Ẩn</option>
                        </select>
                    </div>
                    <div class='form-group'>
                        <button type='button' id="btn" class='btn btn-success'>Tạo mới</button>
                    </div>
                </form>
            </div>`
        )
    },
    afterRender: () => {
        const submitBtn = document.querySelector('#btn');
        submitBtn.addEventListener('click', async() => {
            const name = document.querySelector('#name').value;
            const description = document.querySelector('#description').value;
            const price = document.querySelector('#price').value;
            const status = document.querySelector('#status').value;

            // const submitData = {
            //     name: name,
            //     msv: msv,
            //     avatar: avatar,
            // };
            const submitData ={name, description, price,status};
            // createStudent(submitData);
            console.log(submitData);
            await createProduct (submitData);
            window.location.replace('/products');
        });
    }
};

export default ProductAdd;