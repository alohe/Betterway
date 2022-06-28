// js video event listener
document
  .querySelectorAll(".video-container")
  .forEach(function (videoContainer) {
    let video = videoContainer.querySelector("video");
    let soundBtn = videoContainer.querySelector(".sound-btn");
    soundBtn.addEventListener("click", function () {
      if (video.muted) {
        video.muted = false;
        soundBtn.innerHTML = '<i class="fa fa-volume-up"></i>';
      } else {
        video.muted = true;
        soundBtn.innerHTML = '<i class="fa fa-volume-mute"></i>';
      }
    });
    video.addEventListener("click", function () {
      if (video.muted) {
        video.muted = false;
        soundBtn.innerHTML = '<i class="fa fa-volume-up"></i>';
      } else {
        video.muted = true;
        soundBtn.innerHTML = '<i class="fa fa-volume-mute"></i>';
      }
    });

    videoContainer.addEventListener("mouseover", function () {
      video.play();
      // remove active from all videos
      document
        .querySelectorAll(".video-container")
        .forEach(function (videoContainer) {
          videoContainer.classList.remove("active");
        });
      videoContainer.classList.add("active");
    });

    videoContainer.addEventListener("mouseout", function () {
      video.pause();
    });
  });
