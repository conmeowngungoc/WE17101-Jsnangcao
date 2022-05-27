import tintuc from '../news-data';

const News = {
    render: () =>
        `<div>
        ${tintuc.map((tin) => (
            `<div>
                <div class=" w-100 my-md-3 ps-md-3">
                    <div class="bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
                        <div class="my-3 py-3">
                            <h2 class="display-5">${tin.title}</h2>
                            <p class="lead">${tin.content}</p>
                        </div>
                        <div class="bg-light shadow-sm mx-auto" style="width: 80%; height: 300px; border-radius: 21px 21px 0 0;">${tin.img}</div>
                    </div>
                </div>
            </div>`

        ))
        }</div>`,

    // render: function () {
    //     let string = '<div>';

    //     for(let i = 0; i < tintuc.length; i++) {
    //         string += '<div>';
    //         string += tintuc[i].content;
    //         string += '</div>';
    //     }

    //     string += '</div>';

    //     return string;
    // }
};

export default News;