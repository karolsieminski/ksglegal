// Sticky menu
(function() {
    // When the user scrolls the page, execute myFunction 
    window.onscroll = function() {addSticky()};

    // Get the header
    var header = document.querySelector(".page-header");

    // Get the offset position of the navbar
    var sticky = header.offsetTop;

    // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
    function addSticky() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
    }
})();

// Smoth Scroll
(function(){
    // Select all links with hashes

    const menu = $('.page-header-nav');

$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    console.log(menu);
    $(menu).toggleClass('expanded');
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top - 100
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          // var $target = $(target);
          // $target.focus();
          // if ($target.is(":focus")) { // Checking if the target was focused
          //   return false;
          // } else {
          //   $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
          //   $target.focus(); // Set focus again
          // };
        });
      }
    }
  });
})();

// grid
(function(){
  const gridItems = $(".grid-item");
  const gridOfItems = $(".grid");

  gridOfItems.click((ev) => {
      const clickedItem = ev.target;
      const clickedItemContent = $(clickedItem).children(".grid-item__content");
      if($(clickedItem).hasClass("grid-item")) {
          $(clickedItemContent).toggleClass("showed");
      }
  });

})();

// expanding lists
(function() { 
  const showAllBtns = $('.show-all-btn');
 

  $(showAllBtns).click((ev) => {
    const clickedBtn = ev.target;
    const practiceAreas = $(clickedBtn).prev('.practice-areas')[0];
    let isExpanded = $(clickedBtn).data('expanded');

    if(!isExpanded) {
      $(clickedBtn)
        .text("Zwiń")
        .data('expanded', true);
    }
    else {
      $(clickedBtn)
        .text("Zobacz Wszystkie")
        .data('expanded', false);
    }    
    $(practiceAreas).toggleClass("expanded");
  });

})();

(function() {
  const btn = $('.show-list-btn');
  const list = $(btn).prev('.skills-list')[0];
  let isExpanded = false;

  $(btn).click((ev) => {
    if(isExpanded) 
      $(btn).text("Zobacz Więcej");
    else       
      $(btn).text("Zwiń");

      isExpanded = !isExpanded;
    $(list).toggleClass('expanded');
  });
})();

// expand articles
(function() {
  const articlesList = $('.articles-list');

  $(articlesList).click((ev) => {
    const clickedItem = ev.target;

    if(!$(clickedItem).hasClass('read-more-btn')) return false;

    const article = $(clickedItem).prev('.articles-list-item__text')[0];
    let isExpanded = $(clickedItem).data('expanded');

    if(!isExpanded) {
      $(clickedItem)
        .text('Zwiń')
        .data('expanded', true);
    } else {
      $(clickedItem)
        .text('Czytaj całość')
        .data('expanded', false);
    }

    $(article).toggleClass('expanded');
    
  });

})();

// expanding menu
(function() {
  const menuBtn = $('.hamburger-btn')[0];
  const menu = $(menuBtn).next('.page-header-nav');

  $(menuBtn).click((ev) => {
    $(menu).toggleClass('expanded');
  });
})();

// expand team-member__desc
(function() {
  const showTextBtns = $('.show-text-btn');

  $(showTextBtns).each(function(index) {
    const btn = $(this);
    $(btn).click((ev) => {
      const showed = $(btn).data('showed');
      $(btn).prev('.team-member__desc').toggleClass('showed');
      if (!showed) {
        $(btn)
          .text('Zwiń')
          .data('showed', true);
      } else {
        $(btn)
          .text('Pokaż wszystko')
          .data('showed', false);
      }
    });
  });
  
})();