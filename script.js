"use strict";
///////////////////////////////////
// 유튜브 영상 처리
//////////////////////////////////

// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement("script");

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player("player", {
    // height: "360",
    // width: "640",
    // videoId: "M7lc1UVf-VE",
    events: {
      onReady: onPlayerReady,
      onStateChange: onPlayerStateChange,
    },
  });
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
  event.target.playVideo();
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING && !done) {
    setTimeout(stopVideo, 6000);
    done = true;
  }
}
function stopVideo() {
  player.stopVideo();
}
///////////////////////////////////////////////////////////////////////////////////
// go_to_page
//////////////////////////////////////////////////////////////////////////////////
function go_page(page) {
  const section = document.querySelector(".home__container");
  const nav = document.querySelector(".nav__list");
  const active = document.querySelector(".nav__list .active");
  const frame = document.querySelector("#home");
  if (page == 1) {
    document.location.href = "index.html";
    active.classList.remove("active");
    const sec = nav.children[0];
    sec.classList.add("active");
  }
  if (page == 2) {
    document.location.href = "portfolio.html";
    active.classList.remove("active");
    const sec = nav.children[1];
    sec.classList.add("active");
  }
  if (page == 3) {
    document.location.href = "about.html";
    active.classList.remove("active");
    const sec = nav.children[2];
    sec.classList.add("active");
  }
  if (page == 4) {
    document.location.href = "contact.html";
    active.classList.remove("active");
    const sec = nav.children[3];
    sec.classList.add("active");
  }

  stopVideo();
  window.scrollTo({ top: 0, left: 0, behavior: "auto" });
}
