    window.onload = () => {
        $("#1-star").click(() => $("#1-star").attr("clicked", "yes"))
        $("#2-star").click(() => $("#2-star").attr("clicked", "yes"))
        $("#3-star").click(() => $("#3-star").attr("clicked", "yes"))
        $("#4-star").click(() => $("#4-star").attr("clicked", "yes"))
        $("#5-star").click(() => $("#5-star").attr("clicked", "yes"))
        $("#1-star").mouseenter(() => {
          $("#1-star").attr("clicked", "no").removeClass().addClass("far fa-star")
          $("#2-star").attr("clicked", "no").removeClass().addClass("far fa-star")
          $("#3-star").attr("clicked", "no").removeClass().addClass("far fa-star")
          $("#4-star").attr("clicked", "no").removeClass().addClass("far fa-star")
          $("#5-star").attr("clicked", "no").removeClass().addClass("far fa-star")
          const position = $("#1-star").offset().left + $("#1-star").width()/2;
          $("#1-star").mousemove((e) => {
            if (position > e.pageX) {
              $("#1-star").removeClass()
              $("#1-star").addClass("fas fa-star-half-alt")
            } else {
              $("#1-star").removeClass()
              $("#1-star").addClass("fas fa-star")
          }})});
        $("#1-star").mouseleave(() => {
          if ($("#1-star").attr('clicked') != "yes") {
            $("#1-star").removeClass()
            $("#1-star").addClass("far fa-star")
        }})
        

          $("#2-star").mouseenter(() => {
          $("#1-star").attr("clicked", "no").removeClass().addClass("far fa-star")
          $("#2-star").attr("clicked", "no").removeClass().addClass("far fa-star")
          $("#3-star").attr("clicked", "no").removeClass().addClass("far fa-star")
          $("#4-star").attr("clicked", "no").removeClass().addClass("far fa-star")
          $("#5-star").attr("clicked", "no").removeClass().addClass("far fa-star")
          const position = $("#2-star").offset().left + $("#2-star").width()/2;
          $("#2-star").mousemove((e) => {
            $("#1-star").removeClass()
            $("#1-star").addClass("fas fa-star")
            if (position > e.pageX) {
              $("#2-star").removeClass()
              $("#2-star").addClass("fas fa-star-half-alt")
            } else {
              $("#2-star").removeClass()
              $("#2-star").addClass("fas fa-star")
          }})});
        $("#2-star").mouseleave(() => {
          if ($("#2-star").attr('clicked') != "yes") {
          $("#1-star").removeClass()
          $("#1-star").addClass("far fa-star")
          $("#2-star").removeClass()
          $("#2-star").addClass("far fa-star")}})
      
          $("#3-star").mouseenter(() => {
            $("#1-star").attr("clicked", "no").removeClass().addClass("far fa-star")
          $("#2-star").attr("clicked", "no").removeClass().addClass("far fa-star")
          $("#3-star").attr("clicked", "no").removeClass().addClass("far fa-star")
          $("#4-star").attr("clicked", "no").removeClass().addClass("far fa-star")
          $("#5-star").attr("clicked", "no").removeClass().addClass("far fa-star")
          const position = $("#3-star").offset().left + $("#3-star").width()/2;
          $("#3-star").mousemove((e) => {
            $("#1-star").removeClass()
            $("#1-star").addClass("fas fa-star")
            $("#2-star").removeClass()
            $("#2-star").addClass("fas fa-star")
            if (position > e.pageX) {
              $("#3-star").removeClass()
              $("#3-star").addClass("fas fa-star-half-alt")
            } else {
              $("#3-star").removeClass()
              $("#3-star").addClass("fas fa-star")
          }})});
        $("#3-star").mouseleave(() => {
          if ($("#3-star").attr('clicked') != "yes") {
          $("#1-star").removeClass()
          $("#1-star").addClass("far fa-star")
          $("#2-star").removeClass()
          $("#2-star").addClass("far fa-star")
          $("#3-star").removeClass()
          $("#3-star").addClass("far fa-star")}})
      
          $("#4-star").mouseenter(() => {
            $("#1-star").attr("clicked", "no").removeClass().addClass("far fa-star")
          $("#2-star").attr("clicked", "no").removeClass().addClass("far fa-star")
          $("#3-star").attr("clicked", "no").removeClass().addClass("far fa-star")
          $("#4-star").attr("clicked", "no").removeClass().addClass("far fa-star")
          $("#5-star").attr("clicked", "no").removeClass().addClass("far fa-star")
          const position = $("#4-star").offset().left + $("#4-star").width()/2;
          $("#4-star").mousemove((e) => {
            $("#1-star").removeClass()
            $("#1-star").addClass("fas fa-star")
            $("#2-star").removeClass()
            $("#2-star").addClass("fas fa-star")
            $("#3-star").removeClass()
            $("#3-star").addClass("fas fa-star")
            if (position > e.pageX) {
              $("#4-star").removeClass()
              $("#4-star").addClass("fas fa-star-half-alt")
            } else {
              $("#4-star").removeClass()
              $("#4-star").addClass("fas fa-star")
          }})});
        $("#4-star").mouseleave(() => {
          if ($("#4-star").attr('clicked') != "yes") {
              $("#1-star").removeClass()
              $("#1-star").addClass("far fa-star")
              $("#2-star").removeClass()
              $("#2-star").addClass("far fa-star")
              $("#3-star").removeClass()
              $("#3-star").addClass("far fa-star")
              $("#4-star").removeClass()
              $("#4-star").addClass("far fa-star")}})
        
          $("#5-star").mouseenter(() => {
          $("#1-star").attr("clicked", "no").removeClass().addClass("far fa-star")
          $("#2-star").attr("clicked", "no").removeClass().addClass("far fa-star")
          $("#3-star").attr("clicked", "no").removeClass().addClass("far fa-star")
          $("#4-star").attr("clicked", "no").removeClass().addClass("far fa-star")
          $("#5-star").attr("clicked", "no").removeClass().addClass("far fa-star")
          const position = $("#5-star").offset().left + $("#5-star").width()/2;
          $("#5-star").mousemove((e) => {
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
            } else {
              $("#5-star").removeClass()
              $("#5-star").addClass("fas fa-star")
          }})});
        $("#5-star").mouseleave(() => {
          if ($("#5-star").attr('clicked') != "yes") {
          $("#1-star").removeClass()
          $("#1-star").addClass("far fa-star")
          $("#2-star").removeClass()
          $("#2-star").addClass("far fa-star")
          $("#3-star").removeClass()
          $("#3-star").addClass("far fa-star")
          $("#4-star").removeClass()
          $("#4-star").addClass("far fa-star")
          $("#5-star").removeClass()
          $("#5-star").addClass("far fa-star")}})
      } 
