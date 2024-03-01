// const myNew = document.getElementById("arrowright");
// const myNe = document.getElementById("arrowleft");

// myNew.addEventListener("click", () => {
//     myNe.style.visibility = 'visible';
// });


// let likeBtn = document.querySelector(".like_btn");
// let likeBtnActive = document.querySelector(".like_btn_active");

// let myLink = document.querySelector(".link_count").innerText;

// likeBtn.addEventListener("click", () => {
//     let newLike = Number(myLink) + 1;
//     const likeBtn = document.querySelectorAll(".like_btn");
//     likeBtn[1].classList.remove("like_btn_active");
//     likeBtn[0].classList.add("like_btn_active");
//     document.querySelector(".link_count").innerText = newLike;
// })

// likeBtnActive.addEventListener("click", () => {
//     let newLike = myLink;
//     const likeBtn = document.querySelectorAll(".like_btn");
//     likeBtn[0].classList.remove("like_btn_active");
//     likeBtn[1].classList.add("like_btn_active");
//     document.querySelector(".link_count").innerText = myLink;
// })



// let myItem1 = document.querySelector(".Item-13");
// let myIt1 = document.querySelector(".active-Item-13");

// myItem1.addEventListener("click", () => {
//     myItem1.style.display = 'none';
//     myIt1.style.display = 'flex';
// })

// myIt1.addEventListener("click", () => {
//     myIt1.style.display = 'none';
//     myItem1.style.display = 'flex';
// })

let a = document.querySelectorAll('.card');
for (let i = 0; i < a.length; i++) {
    let d = a[i].querySelector(".Item-10");
    d.addEventListener("click", ()=>{
        let e = a[i].querySelectorAll(".Item-10");
        for (let j = 0; j < e.length; j++) {           
            if (e[j].className === "Item-10 like_btn" ) {
                e[j].className = "Item-10 like_btn like_btn_active";
            } else if(e[j].className === "Item-10 like_btn like_btn_active") {
                e[j].className = "Item-10 like_btn";
            }
        }
    })
}