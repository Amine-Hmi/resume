// external js: isotope.pkgd.js

// init Isotope
var iso = new Isotope( '.items', {
    itemSelector: '.grid-item',
    layoutMode: 'fitRows'
  });
  
  
  // bind filter button click
  var filtersElem = document.querySelectorAll('#filters li a');
  filtersElem.forEach((x)=>x.addEventListener( 'click', function( event ) {

    var filterValue = event.target.getAttribute('data-filter');
    // use matching filter function
    iso.arrange({ filter: filterValue });
  }));
  
  
  // change is-checked class on buttons
  var buttonGroups = document.querySelectorAll('#filters li a');
  for ( var i=0, len = buttonGroups.length; i < len; i++ ) {
    var buttonGroup = buttonGroups[i];
    radioButtonGroup( buttonGroup );
  }
  
  function radioButtonGroup( buttonGroup ) {
    buttonGroup.addEventListener( 'click', function( event ) {
      // only work with buttons
      event.preventDefault();
      document.querySelector('.current').classList.remove('current');
      console.log("clicked")
      event.target.classList.add('current');
    });
  }
  