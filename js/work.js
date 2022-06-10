const workList = [{
        id: 1,
        title: "Designing Dashboards",
        img: "https://res.cloudinary.com/phuong-fpoly/image/upload/v1654653892/Rectangle_30_wpqbz9.jpg",
        time: 2020,
        type: "Dashboard",
    },
    {
        id: 2,
        title: "Vibrant Portraits of 2020",
        img: "https://res.cloudinary.com/phuong-fpoly/image/upload/v1654653892/Rectangle_32_nonh8y.jpg",
        time: 2018,
        type: "Illustration",
    },
    {
        id: 3,
        title: "36 Days of Malayalam type",
        img: "https://res.cloudinary.com/phuong-fpoly/image/upload/v1654653892/Rectangle_34_urmhpo.jpg",
        time: 2018,
        type: "Typography",
    },
    {
        id: 4,
        title: "Components",
        img: "https://res.cloudinary.com/phuong-fpoly/image/upload/v1654695255/Rectangle_40_r9ijwx.png",
        time: 2018,
        type: "Components, Design",
    },
    {
        id: 5,
        title: "Designing Landing pages",
        img: "https://res.cloudinary.com/phuong-fpoly/image/upload/v1654697563/Rectangle_30_c0s6li.png",
        time: 2018,
        type: "Website",
    },

];

function showWorks(workmain) {
    if (!Array.isArray(workmain) || workmain.length == 0) return false;

    let result = "";
    for (let i = 0; i < workmain.length; i++) {
        const work = workmain[i];
        result += `
        <div class="md:grid md:grid-cols-[245px,auto] gap-[18px] pb-5 border-b border-[#E0E0E0] md:mb-[43px] mb-[22px] md:pb-[47px] max-w-3xl">
        <div>
            <img src="${work.img}" alt=" " class="md:w-[245] w-full">
        </div>
        <div>
            <div>
                <h3 class="md:mt-0 mt-[18px]">
                    <a href="detail.html?id=${work.id}" class="md:text-3xl text-2xl font-bold ">${work.title}</a>
                </h3>
            </div>
            <div class="space-x-6 md:py-5 py-4">
                <span class="text-lg font-bold text-white bg-[#142850] px-3 py-[2px] rounded-full ">${work.time}</span>
                <span class="text-[#8695A4] font-normal text-xl ">${work.type}</span>
            </div>
            <p class="text-base font-normal md:w-[100%] ">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
        </div>
    </div>
`;
    }
    return result;
}

document.getElementById("workmain").innerHTML = showWorks(workList);