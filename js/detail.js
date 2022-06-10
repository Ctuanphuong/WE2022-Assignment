const workList = [{
        id: 1,
        title: "Designing Dashboards with usability in mind",
        img: "https://res.cloudinary.com/phuong-fpoly/image/upload/v1654704956/Rectangle_4_hmzcwl.jpg",
        time: 2020,
        content: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
        type: " Dashboard, User Experience Design",
    },
    {
        id: 2,
        title: "Vibrant Portraits of 2020",
        img: "https://res.cloudinary.com/phuong-fpoly/image/upload/v1654653892/Rectangle_32_nonh8y.jpg",
        time: 2018,
        content: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
        type: "Illustration",
    },
    {
        id: 3,
        title: "36 Days of Malayalam type",
        img: "https://res.cloudinary.com/phuong-fpoly/image/upload/v1654653892/Rectangle_34_urmhpo.jpg",
        time: 2018,
        content: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
        type: "Typography",
    },
    {
        id: 4,
        title: "Components",
        img: "https://res.cloudinary.com/phuong-fpoly/image/upload/v1654695255/Rectangle_40_r9ijwx.png",
        time: 2018,
        content: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
        type: "Components, Design",
    },
    {
        id: 5,
        title: "Designing Landing pages ",
        img: "https://res.cloudinary.com/phuong-fpoly/image/upload/v1654697563/Rectangle_30_c0s6li.png",
        time: 2018,
        content: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
        type: "Website",
    },
];
// Lấy ID trên url
const id = new URLSearchParams(window.location.search).get("id");

function showWork(works) {
    // Nếu không phải 1 mảng hoặc không có giá trị trong mảng thì return false
    if (!Array.isArray(works) || works.length == 0) return false;

    let result = "";
    // Tìm phần tử trong mảng, nếu id trên url == id phần tử trong mảng
    // thì trả về object đấy
    const work = works.find((item) => item.id == id);

    // trả về kết quả là 1 chuỗi
    result = `<h1 class=" text-3xl md:text-[34px] font-bold max-w-lg">${work.title}</h1>`;
    return result;
}

function showTimeType(works) {
    // Nếu không phải 1 mảng hoặc không có giá trị trong mảng thì return false
    if (!Array.isArray(works) || works.length == 0) return false;

    let result = "";
    // Tìm phần tử trong mảng, nếu id trên url == id phần tử trong mảng
    // thì trả về object đấy
    const work = works.find((item) => item.id == id);

    // trả về kết quả là 1 chuỗi
    result = ` <span class="text-lg px-3 bg-[#FF7C7C] font-black text-white rounded-full mr-[17px] ">${work.time}</span>
    <span class=" text-xl font-normal ">${work.type}</span>`;
    return result;
}

function showContent(works) {
    // Nếu không phải 1 mảng hoặc không có giá trị trong mảng thì return false
    if (!Array.isArray(works) || works.length == 0) return false;

    let result = "";
    // Tìm phần tử trong mảng, nếu id trên url == id phần tử trong mảng
    // thì trả về object đấy
    const work = works.find((item) => item.id == id);

    // trả về kết quả là 1 chuỗi
    result = `<p class="text-base max-w-2xl">${work.content}</p>`;
    return result;
}

function showImg(works) {
    // Nếu không phải 1 mảng hoặc không có giá trị trong mảng thì return false
    if (!Array.isArray(works) || works.length == 0) return false;

    let result = "";
    // Tìm phần tử trong mảng, nếu id trên url == id phần tử trong mảng
    // thì trả về object đấy
    const work = works.find((item) => item.id == id);

    // trả về kết quả là 1 chuỗi
    result = `<img src="${work.img}" alt=" " class="w-full">`;
    return result;
}

document.getElementById("title").innerHTML = showWork(workList);
document.getElementById("timeandtype").innerHTML = showTimeType(workList);
document.getElementById("content").innerHTML = showContent(workList);
document.getElementById("Img").innerHTML = showImg(workList);