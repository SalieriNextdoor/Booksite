import $ from 'jquery';

function setStarScore() {
function triggerChange(selector,evt) {
    let ev = new Event(evt, { bubbles: true });
    let el = $(selector)[0]

    el.dispatchEvent(ev);
  };

    $("#1-star").on("click", () => $("#1-star").attr("clicked", "yes"))
    $("#2-star").on("click", () => $("#2-star").attr("clicked", "yes"))
    $("#3-star").on("click", () => $("#3-star").attr("clicked", "yes"))
    $("#4-star").on("click", () => $("#4-star").attr("clicked", "yes"))
    $("#5-star").on("click", () => $("#5-star").attr("clicked", "yes"))
    $("#1-star").on("mouseenter", () => {
      $("#1-star").attr("clicked", "no").removeClass().addClass("far fa-star")
      $("#2-star").attr("clicked", "no").removeClass().addClass("far fa-star")
      $("#3-star").attr("clicked", "no").removeClass().addClass("far fa-star")
      $("#4-star").attr("clicked", "no").removeClass().addClass("far fa-star")
      $("#5-star").attr("clicked", "no").removeClass().addClass("far fa-star")
      const position = $("#1-star").offset().left + $("#1-star").width()/2;
      $("#1-star").on("mousemove", (e) => {
        if (position > e.pageX) {
          $("#1-star").removeClass()
          $("#1-star").addClass("fas fa-star-half-alt")
          $("#score-input").val(0.5);
          triggerChange('#score-input','input');
        } else {
          $("#1-star").removeClass()
          $("#1-star").addClass("fas fa-star")
          $("#score-input").val(1.0);
          triggerChange('#score-input','input');
      }})});
    $("#1-star").on("mouseleave", () => {
      if ($("#1-star").attr('clicked') !== "yes") {
        $("#1-star").removeClass()
        $("#1-star").addClass("far fa-star")
        $("#score-input").val(null);
        triggerChange('#score-input','input');
    }})
    

      $("#2-star").on("mouseenter", () => {
      $("#1-star").attr("clicked", "no").removeClass().addClass("far fa-star")
      $("#2-star").attr("clicked", "no").removeClass().addClass("far fa-star")
      $("#3-star").attr("clicked", "no").removeClass().addClass("far fa-star")
      $("#4-star").attr("clicked", "no").removeClass().addClass("far fa-star")
      $("#5-star").attr("clicked", "no").removeClass().addClass("far fa-star")
      const position = $("#2-star").offset().left + $("#2-star").width()/2;
      $("#2-star").on("mousemove", (e) => {
        $("#1-star").removeClass()
        $("#1-star").addClass("fas fa-star")
        if (position > e.pageX) {
          $("#2-star").removeClass()
          $("#2-star").addClass("fas fa-star-half-alt")
          $("#score-input").val(1.5);
          triggerChange('#score-input','input');
        } else {
          $("#2-star").removeClass()
          $("#2-star").addClass("fas fa-star")
          $("#score-input").val(2.0);
          triggerChange('#score-input','input');
      }})});
    $("#2-star").on("mouseleave", () => {
      if ($("#2-star").attr('clicked') !== "yes") {
      $("#1-star").removeClass()
      $("#1-star").addClass("far fa-star")
      $("#2-star").removeClass()
      $("#2-star").addClass("far fa-star")
      $("#score-input").val(null);
      triggerChange('#score-input','input');
    }})
  
      $("#3-star").on("mouseenter", () => {
        $("#1-star").attr("clicked", "no").removeClass().addClass("far fa-star")
      $("#2-star").attr("clicked", "no").removeClass().addClass("far fa-star")
      $("#3-star").attr("clicked", "no").removeClass().addClass("far fa-star")
      $("#4-star").attr("clicked", "no").removeClass().addClass("far fa-star")
      $("#5-star").attr("clicked", "no").removeClass().addClass("far fa-star")
      const position = $("#3-star").offset().left + $("#3-star").width()/2;
      $("#3-star").on("mousemove", (e) => {
        $("#1-star").removeClass()
        $("#1-star").addClass("fas fa-star")
        $("#2-star").removeClass()
        $("#2-star").addClass("fas fa-star")
        if (position > e.pageX) {
          $("#3-star").removeClass()
          $("#3-star").addClass("fas fa-star-half-alt")
          $("#score-input").val(2.5);
          triggerChange('#score-input','input');
        } else {
          $("#3-star").removeClass()
          $("#3-star").addClass("fas fa-star")
          $("#score-input").val(3.0);
          triggerChange('#score-input','input');
      }})});
    $("#3-star").on("mouseleave", () => {
      if ($("#3-star").attr('clicked') !== "yes") {
      $("#1-star").removeClass()
      $("#1-star").addClass("far fa-star")
      $("#2-star").removeClass()
      $("#2-star").addClass("far fa-star")
      $("#3-star").removeClass()
      $("#3-star").addClass("far fa-star")
      $("#score-input").val(null);
      triggerChange('#score-input','input');}})
  
      $("#4-star").on("mouseenter", () => {
        $("#1-star").attr("clicked", "no").removeClass().addClass("far fa-star")
      $("#2-star").attr("clicked", "no").removeClass().addClass("far fa-star")
      $("#3-star").attr("clicked", "no").removeClass().addClass("far fa-star")
      $("#4-star").attr("clicked", "no").removeClass().addClass("far fa-star")
      $("#5-star").attr("clicked", "no").removeClass().addClass("far fa-star")
      const position = $("#4-star").offset().left + $("#4-star").width()/2;
      $("#4-star").on("mousemove", (e) => {
        $("#1-star").removeClass()
        $("#1-star").addClass("fas fa-star")
        $("#2-star").removeClass()
        $("#2-star").addClass("fas fa-star")
        $("#3-star").removeClass()
        $("#3-star").addClass("fas fa-star")
        if (position > e.pageX) {
          $("#4-star").removeClass()
          $("#4-star").addClass("fas fa-star-half-alt")
          $("#score-input").val(3.5);
          triggerChange('#score-input','input');
        } else {
          $("#4-star").removeClass()
          $("#4-star").addClass("fas fa-star")
          $("#score-input").val(4.0);
          triggerChange('#score-input','input');
      }})});
    $("#4-star").on("mouseleave", () => {
      if ($("#4-star").attr('clicked') !== "yes") {
          $("#1-star").removeClass()
          $("#1-star").addClass("far fa-star")
          $("#2-star").removeClass()
          $("#2-star").addClass("far fa-star")
          $("#3-star").removeClass()
          $("#3-star").addClass("far fa-star")
          $("#4-star").removeClass()
          $("#4-star").addClass("far fa-star")
          $("#score-input").val(null);
          triggerChange('#score-input','input');}})
    
      $("#5-star").on("mouseenter", () => {
      $("#1-star").attr("clicked", "no").removeClass().addClass("far fa-star")
      $("#2-star").attr("clicked", "no").removeClass().addClass("far fa-star")
      $("#3-star").attr("clicked", "no").removeClass().addClass("far fa-star")
      $("#4-star").attr("clicked", "no").removeClass().addClass("far fa-star")
      $("#5-star").attr("clicked", "no").removeClass().addClass("far fa-star")
      const position = $("#5-star").offset().left + $("#5-star").width()/2;
      $("#5-star").on("mousemove", (e) => {
        $("#1-star").removeClass()
        $("#1-star").addClass("fas fa-star")
        $("#2-star").removeClass()
        $("#2-star").addClass("fas fa-star")
        $("#3-star").removeClass()
        $("#3-star").addClass("fas fa-star")
        $("#4-star").removeClass()
        $("#4-star").addClass("fas fa-star")
        if (position > e.pageX) {
          $("#5-star").removeClass()
          $("#5-star").addClass("fas fa-star-half-alt")
          $("#score-input").val(4.5);
          triggerChange('#score-input','input');
        } else {
          $("#5-star").removeClass()
          $("#5-star").addClass("fas fa-star")
          $("#score-input").val(5.0);
          triggerChange('#score-input','input');
      }})});
    $("#5-star").on("mouseleave", () => {
      if ($("#5-star").attr('clicked') !== "yes") {
      $("#1-star").removeClass()
      $("#1-star").addClass("far fa-star")
      $("#2-star").removeClass()
      $("#2-star").addClass("far fa-star")
      $("#3-star").removeClass()
      $("#3-star").addClass("far fa-star")
      $("#4-star").removeClass()
      $("#4-star").addClass("far fa-star")
      $("#5-star").removeClass()
      $("#5-star").addClass("far fa-star")
      $("#score-input").val(null);
      triggerChange('#score-input','input');}})}

      export {setStarScore};