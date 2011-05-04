$(function() {
    if ($("#backchannels").length > 0) {
  
      setTimeout(updateBackchannels, 10000);
  }
});

function updateBackchannels() {

  var after = $(".backchannel:first-child").attr("data-time");
  $.getScript("/backchannels.js?&after=" + after)
    setTimeout(updateBackchannels, 10000);
}

// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults
