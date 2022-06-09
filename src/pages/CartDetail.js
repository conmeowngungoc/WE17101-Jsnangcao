import reRender from "../helpers/reRender";

const CartDetail={
   
    render: ()=>{
        const cartItems=JSON.parse(localStorage.getItem('cart')|| '[]');
        return(
            cartItems.map(item => (
            `<div class='d-flex align-items-center justify-content-between my-2'>
                <div>
                    ${item.name}
                </div>
                <div>
                    <span>-</span>
                    <input value="${item.value}" style="width: 70px;">
                    <span>+</span>
                </div>
                <div>
                    Không có tiền
                </div>
                <div>
                    <button 
                    data-id ="${item.id}"
                    class='btn btn-danger' id='delete-cart-btn'>
                        Xóa
                    </button>
                </div>
            </div>`
            )).join('')
        )
    },
    afterRender:()=>{
        // 1: Tìm nút để tạo sự kiện xóa
        const deleteCartBtn = document.querySelector('#delete-cart-btn');
        deleteCartBtn.addEventListener('click',()=>{
            // Tìm id cần được xóa qua thuộc tính data-id
            const itemId = deleteCartBtn.dataset.id;
            // lấy danh sách giỏ hàng
            const cartItems=JSON.parse(localStorage.getItem('cart')|| '[]');
            // tạo 1 mảng mới từ mảng cũ nhưng đã loại bỏ sản phẩm có id là itemId
            const newCartItems = cartItems.filter((item)=> item.id !== itemId);
            // Lưu lại giỏ hàng và render lại view chi tiết và view Gh
            localStorage.setItem('cart',JSON.stringify(newCartItems));
            reRender('#content',CartDetail);
            reRender('#cart',Cart);
        });
    }
}
export default CartDetail;
