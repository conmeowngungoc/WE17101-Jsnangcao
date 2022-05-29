import Navigo from "navigo";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import News from "./pages/News";
// import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Student from "./pages/Student";

// Khởi tạo đối tượng router
const router = new Navigo('/',{linksSelector: 'a'});


const render= async (content) =>{
    // document.querySelector('#header').innerHTML = '<button class="btn btn-primary">Header Components</button>';
    document.querySelector('#header').innerHTML = Header.render();
    document.querySelector('#content').innerHTML = await content;
    document.querySelector('#footer').innerHTML = Footer.render();
}

router.on({
    '/': () => render(Home.render()),
    '/about':()=> render(About.render()),
    '/news':()=> render(News.render()),
    '/students':()=> render(Student.render()),
});
router.resolve();

// arrow fuction: const ten_ham = () =>{};
const arrowRender = () => {
    document.querySelector('#header').innerHTML = '<div>Header</div>';
    document.querySelector('#content').innerHTML = '<div>content</div>';
    document.querySelector('#footer').innerHTML = '<div>footer</div>';
};

const s = () =>2+3;
// cú pháp bình thường
function sum(a,b){
    return a+b;
};
//arrow function có return
const sum1=(a,b) =>{
    return a+b;
};

const sum2 =(a,b)=>a+b; // nếu chỉ có return

const display = (a) => console.log(a); // nếu chỉ có 1 tham số
const display1 = (a)=> alert(a);
// Callback: hàm được truyền vào dưới dạng 1 đối số, và thực thi trong 1 hàm

// const abc = (print) =>{
//     const result = sum(2,3);
//     // có nhiều cách hiển thị khác nhau, và phải nhập kq hiển thị từ result
//     print(result);
//     // display1(result);
//     // display(result);
// };
// abc(display1);

const loadScript = (src)=>{
    const scriptE = document.createElement('script');
    scriptE.src =src;
    scriptE.onload =()=> callback();
};

const khoitaosinhvien =()=>{
      var sinhVien ={}
}
loadScript('moment.min.js',()=>{
    var sinhVien ={};
    loadScript('https://cdn.com',()=>{
        //tính tuổi sv
        loadScript('https://cdn1.com',()=>{
            //12e422
        })
    })
});

//đếm chữ cái trong thông tin user
// const countString = (string,callback)=>{
//    setTimeout(() => {
//        console.log(string);
//        callback(string);
//    }, 1000);//sau khi kết thúc 1s thì mới chạy lần lượt cả 2 hàm
// }
// const countString2 = (string)=>console.log(string);
// const receiveUser =(user,callback,callback2) =>{
//     //lấy ra tên
//     const username = user.name;
//     //nhận tham số truyền vào là 1 trong 2 cách hiển thị tên
//     callback(username,callback2);
//     // countString(username);
// };

// receiveUser({name:"Nguyễn Xuân Hậu1"},countString,countString2);//gọi trước nhưng chậm 1s
// receiveUser({name:"Nguyễn Xuân Hậu2"},countString2);


//Promise

// let a =[];
// setTimeout(() => {
//     a=[1,2,3,4,5,6]
// }, 1000);
// console.log(a);

// Promise là đối tượng xử lý bất đồng bộ ở es6
// resolve thực thi khi đúng, và gtrị truyền vào resolve sẽ trả ở then
// reject thực thi khi sai, và giá trị truyền vào reject sẽ trả ở catch
const setValueA = () => new Promise((resolve, reject) => {
    let status = true;
    setTimeout(() => {
        if (status) {
            resolve([1, 2, 3]);
        } else {
            reject('bị lỗi');
        }
        // a = [1, 2, 3];
    }, 5000);
});

let a = [];

// setValueA()
//     .then((data) => {data.push(4); return data})
//     .then((data) => console.log(data))
//     .catch((error) => console.log(error));
// ;

// console.log(a);
// async/await

// - async: định nghĩa 1 hàm có thể xử lý vấn đề bất đồng bộ
// - await: định nghĩa 1 câu lệnh cần phải chờ thực thi rồi mói thực thi câu lệnh tiếp theo
// -- await phải nằm trong 1 hàm async thì mới dùng được
// -- await phải là 1 hàm trả về đối tượng Promise
const printA = async () => {
    // gọi làm setValueaA để chờ nhận kết quả [1,2,3]
    const result = await setValueA();
    // chờ setValueA thực thi xong và trả về kq [1,2,3]
    //thì mới chạy dòng tiếp theo là console.log
    console.log('chờ result nhận kết quả rồi mới ra log này',result);
    result.push(4);
    console.log('sau khi push nhận vè kế quả này',result);
}

printA();