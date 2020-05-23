const notice = document.querySelector(".notice");
const noticeBtn = document.querySelector(".close-btn");

function closeNotice(){
    notice.style.display = "none";
}

noticeBtn.addEventListener("click",closeNotice);
