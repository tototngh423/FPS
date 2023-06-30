// 이미지 슬라이드 구현
$("#slide > div:gt(0)").hide();

setInterval(function () {
  $("#slide > div:first")
    .fadeOut(1000)
    .next(2000)
    .fadeIn(1000)
    .end()
    .appendTo("#slide");
}, 3000);

// sign up클릭시 회원가입 폼으로 전환
let loginForm = document.querySelector("#login-Form"); //로그인폼

$(".sign-up").on("click", () => {
  loginForm.classList.add("hidden");

  $("#sign-up-Form").css({
    display: "block",
  });
});

// back버튼 누르면 로그인창으로
$("#button3").on("click", () => {
  loginForm.classList.remove("hidden");

  $("#sign-up-Form").css({
    display: "none",
  });
});
//오디오 재생
let music = new Audio(
  "../img/이번엔 한국이다! '배틀필드 6' 최초 공개 트레일러 4K (배틀필드 2042) (online-video-cutter.com).mp4"
);
function playMusic() {
  music.play();
}
function pauseMusic() {
  music.pause();
}

//영상구현
$(".movie").on("click", () => {
  $("#slide").css({
    visibility: "hidden",
  });
  $(".movie").css({
    visibility: "hidden",
  });
  $("#container").css({
    "background-image": "url(../img/배틀필드.gif)",
    // 배필영상
  });
  $("#audioContainer").css({
    display: "inherit",
  });
  $("#audioContainer2").css({
    display: "inherit",
  });
  playMusic();
});

// 링크 이동
$("#button2").on("click", () => {
  window.location.href = "../html/mindex.html";
});

// 오디오버튼
$("#audioContainer").on("click", () => {
  pauseMusic();
});
$("#audioContainer2").on("click", () => {
  playMusic();
});
