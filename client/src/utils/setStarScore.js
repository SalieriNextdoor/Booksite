import $ from 'jquery';

function setStarScore() {

  function triggerChange(selector,evt) {
      let ev = new Event(evt, { bubbles: true });
      let el = $(selector)[0]

      el.dispatchEvent(ev);
    };

  function addOriginalClasses(class_list) {
    for(let i=0;i<5;i++) {
      $(`#${i+1}-star`).removeClass().addClass(class_list[i]);
    }
  }

  let class_list = [$("#1-star").attr('class'), $("#2-star").attr('class'), $("#3-star").attr('class'), $("#4-star").attr('class'), $("#5-star").attr('class')]

  for(let i=1;i<=5;i++) {
    let position;
    // eslint-disable-next-line
    $(`#${i}-star`).on("click", () => {
      $(`#${i}-star`).attr("clicked", "yes");
      class_list = [$("#1-star").attr('class'), $("#2-star").attr('class'), $("#3-star").attr('class'), $("#4-star").attr('class'), $("#5-star").attr('class')]
    })
    $(`#${i}-star`).on("mouseenter", () => {
      for(let j=1;j<=5;j++) {
        $(`#${j}-star`).attr("clicked", "no")
      }
      position = $(`#${i}-star`).offset().left + $(`#${i}-star`).width()/2;
    })
    $(`#${i}-star`).on("mousemove", (e) => {
      for(let j=1;j<i;j++) {
        $(`#${j}-star`).removeClass().addClass("fas fa-star")
      }
      for(let j=5; j>i;j--) {
        $(`#${j}-star`).removeClass().addClass("far fa-star")
      }
      if (position > e.pageX) {
        $(`#${i}-star`).removeClass().addClass("fas fa-star-half-alt")
        $("#score-input").val(i-0.5);
        triggerChange('#score-input','input');
      } else {
        $(`#${i}-star`).removeClass().addClass("fas fa-star")
        $("#score-input").val(i);
        triggerChange('#score-input','input');
      }
    })
    // eslint-disable-next-line
    $(`#stars`).on("mouseleave", () => {
      if ($(`#1-star`).attr("clicked") !== "yes" && $(`#2-star`).attr("clicked") !== "yes" && $(`#3-star`).attr("clicked") !== "yes" && $(`#4-star`).attr("clicked") !== "yes" && $(`#5-star`).attr("clicked") !== "yes") {
        addOriginalClasses(class_list);
        $("#score-input").val(null);
        triggerChange('#score-input','input');
      }
    }) 
  }
}

export {setStarScore};