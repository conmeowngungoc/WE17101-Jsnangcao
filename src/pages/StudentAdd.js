import { createStudent, getStudent } from "../api/student";
import router from "../helpers/router";
import { updateStudent } from "../api/student";

const StudentAdd = {
    render: async(id) => {
       let student = {
            name:'',
            msv:'',
            avatar:'',
        };

        if (id) {
           const response = await getStudent(id); 
           student = response.data;
        }
        
        return (
            `<div>
                <form>
                    <div class='form-group'>
                        <label>Tên</label>
                        <input class='form-control' id='name' value="${student.name || ""}" />
                    </div>
                    <div class='form-group'>
                        <label>MSV</label>
                        <input class='form-control' id='msv' value="${student.msv || "" }" />
                    </div>
                    <div class='form-group'>
                        <label>Avatar</label>
                        <input class='form-control' id='avatar' value="${student.avatar || ""}" />
                    </div>
                    <div class='form-group'>
                        <button type='button' class='btn btn-success' id='btn'>Tạo mới</button>
                        ${id ? "Cập nhật":"Tạo mới"}
                    </div>
                </form>
            </div>`
        )
    },
    afterRender: (id) => {
        const submitBtn = document.querySelector('#btn');
        submitBtn.addEventListener('click', async () => {
            const name = document.querySelector('#name').value;
            const msv = document.querySelector('#msv').value;
            const avatar = document.querySelector('#avatar').value;

            const submitData = {
                name: name,
                msv: msv,
                avatar: avatar,
            };
            if (id) {
                await updateStudent(id,submitData);
            } else {
               await createStudent(submitData); 
            }
            
            router.navigate('/students');
        });
    }
};

export default StudentAdd;