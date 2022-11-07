
// 드래그할 대상 
const source = document.querySelector("#source");
source.addEventListener("dragstart", (ev) => {
    console.log("dragStart");
    ev.currentTarget.classList.add("dragging");
    ev.dataTransfer.clearData();
    ev.dataTransfer.setData("text/url-list", "https://www.naver.com");
    ev.dataTransfer.setData("text/plain", "https://www.naver.com");
});

// source.addEventListener("drag", (e) => { 
//     e.preventDefault();
//     // console.log("drag");
// });


// source.addEventListener("dragend", (e) => { 
//     e.preventDefault();
//     console.log("dragend");
// });


source.addEventListener("dragend", (ev) =>
    ev.target.classList.remove("dragging")
);


// // 드랍될 대상 
const target = document.querySelector("#target");

// dragover 핸들러 없으면 drop이 되지 않음
target.addEventListener("dragover", (ev) => {
    // console.log("dragOver");
    ev.preventDefault();
});


target.addEventListener("drop", (ev) => {
    console.log("Drop");
    ev.preventDefault();
    const url = ev.dataTransfer.getData("URL");
    console.log(url);
});

