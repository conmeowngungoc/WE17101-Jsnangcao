const FooterB = {
    render: () =>
    `<footer class="py-3 my-4">
    <ul class="nav justify-content-center border-bottom pb-3 mb-3">
      <li class="nav-item"><a href="/" class="nav-link px-2 text-muted">Home</a></li>
      <li class="nav-item"><a href="/news" class="nav-link px-2 text-muted">News</a></li>
      <li class="nav-item"><a href="/about" class="nav-link px-2 text-muted">About</a></li>
    </ul>
    <p class="text-center text-muted">Nguyễn Xuân Hậu</p>
  </footer>`
};


const Footer = {
    // render: function () {
    //     return '<div>Footer Components</div>';
    // }
    render: () =>(`<div>Footer Components</div>`)
    // render: (name ='WE17101') =>(`<div>${name}</div>`)
    // sau mũi tên là ngoặc tròn -> return kết quả
};

export default FooterB;