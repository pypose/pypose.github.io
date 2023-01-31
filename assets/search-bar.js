docsearch({
  apiKey: "014864aca4b426377e200f2222f239c5",
  indexName: "prod_pypose",
  inputSelector: "#search-input",
  debug: false // Set debug to true if you want to inspect the dropdown
});

docsearch({
  apiKey: '014864aca4b426377e200f2222f239c5',
  indexName: 'prod_pypose',
  inputSelector: '#mobile-search-input',
  algoliaOptions: {
    hitsPerPage: 5
  },
  debug: false // Set debug to true if you want to inspect the dropdown
});

$("#search-icon").on("click", function() {
  $(this).hide();
  $("#close-search").show();
  $(".search-border")
    .addClass("active-background")
    .animate({ width: "100%" }, "slow");
  $("#search-input")
    .addClass("active-search-icon")
    .focus();
  $(".main-menu-item").hide();
  $(".header-logo").addClass("active-header");
});

$("#close-search").on("click", function() {
  $(this).hide();
  $("#search-icon").show();
  $(".search-border")
    .attr("style", "")
    .removeClass("active-background");
  $("#search-input")
    .removeClass("active-search-icon")
    .val("");
  $(".main-menu-item").fadeIn("slow");
  $(".header-logo").removeClass("active-header");
});
