    var indexes = [];

window.onload = function() {
    var boardsList = document.querySelectorAll(".board");
    var slideshowIds = Array.prototype.slice.call(boardsList).map(function(element) {
        return element.id;
    });
  
  function showSlide(slideshow, index) {
    var figures = slideshow.getElementsByClassName("board-fig");
    for (i = 0; i < figures.length; i++) {
      figures[i].classList.remove("selected");
      figures[i].closest(".board-col").classList.remove("selected");
    }
    slideshow.getElementsByClassName("board-fig")[index].classList.add("selected");
    slideshow.getElementsByClassName("board-fig")[index].closest(".board-col").classList.add("selected");
}


    closeBoardSlides = function() {
      let elems = document.getElementsByClassName("board");
      [].forEach.call(elems, function(el) {
        el.classList.remove("slides");
        var figures = el.getElementsByClassName("board-fig");
        for (i = 0; i < figures.length; i++) {
          figures[i].classList.remove("selected");
          figures[i].closest(".board-col").classList.remove("selected");
        }
      });
    }

    clickBoardArrow = function() {
      console.log("This");
      console.log(this);
        var slideshow = this.closest(".board");
        var slideshowId = slideshow.id;
        var arrIndex = slideshowIds.indexOf(slideshowId);
        var index = indexes[arrIndex];
        var slideCount = slideshow.getElementsByClassName("board-fig").length;
        
        if (this.classList.contains("board-arrow-l")) {
            if (index <= 0) indexes[arrIndex] = slideCount - 1;
            else indexes[arrIndex]--;
        }
        else {
            if (index >= slideCount - 1) indexes[arrIndex] = 0;
            else indexes[arrIndex]++;
        }
        showSlide(slideshow, indexes[arrIndex]);
    }

    document.onkeypress = function (e) {
      var slideshow = document.getElementsByClassName("board")[0];
            var slideshowId = slideshow.id;
            var arrIndex = slideshowIds.indexOf(slideshowId);
            var index = indexes[arrIndex];
            var slideCount = slideshow.querySelector(".board-fig").length;
            
      switch(e.which) {
                case 37: // left
              if (index <= 0) indexes[arrIndex] = slideCount - 1;
                    else indexes[arrIndex]--;
                    showSlide(slideshow, indexes[arrIndex]);
                break;

                case 39: // right
              if (index >= slideCount - 1) indexes[arrIndex] = 0;
                    else indexes[arrIndex]++;
        showSlide(slideshow, indexes[arrIndex]);
                break;

                default: return; // exit this handler for other keys
            }
            e.preventDefault(); // prevent the default action (scroll / move caret)
    }

    clickBoardFig = function() {
      console.log("SLideshow");
      console.log(slideshow);
        var slideshow = this.closest(".board");
        var slideshowId = slideshow.id;
        var arrIndex = slideshowIds.indexOf(slideshowId);
        var index = Array.prototype.indexOf.call(slideshow.getElementsByClassName("board-fig"), this);
        indexes[arrIndex] = index;
        showSlide(slideshow, index);
        slideshow.classList.add("slides");
    }

var boardFigs = document.getElementsByClassName("board-fig");
  for (var i = 0; i < boardFigs.length; i++) {
    boardFigs[i].addEventListener('click', clickBoardFig, false);
}

  var boardArrows = document.getElementsByClassName("board-arrow");
  for (var i = 0; i < boardArrows.length; i++) {
    boardArrows[i].addEventListener('click', clickBoardArrow, false);
}

}

