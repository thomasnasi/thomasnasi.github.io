$(document).ready(function(){

  // var source = $("< /source>").attr("src", "src/vids/Cipriani.mp4").attr("type", "video/mp4").attr("loop")
  // var video = $("< /div>").addClass("video-Thom").text("Your browser does not support the video tag.").append(source)

  // $("#videos-list").append()

  var videos = $(".video");
  videos.hover(unmuteVideo, muteVideo);

});

function unmuteVideo(e) {
    $('video', this).get(0).muted = false;
}

function muteVideo(e) {
    $('video', this).get(0).muted = true;
}
