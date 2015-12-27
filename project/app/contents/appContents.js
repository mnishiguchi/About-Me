/**
 * appContents
 */
(function() {

  // Module declaration.
  // none


  // --------------------------------------------------------------------------- //
  // --------------------------------------------------------------------------- //


  angular
    .module( "app" )
    .factory( "appContents", appContents );

  appContents.$inject = [ ];
  function appContents() {

    var service = {

      tabTitles: [
        "About me",
        "Background",
        "Projects",
        "Blog",
        "Resources",
        "Contact"
      ],
      tabUrls: [
        "app/contents/_about_me.html",
        "app/contents/_background.html",
        "app/contents/_projects.html",
        "app/contents/_blog.html",
        "app/contents/_resources.html",
        "app/contents/_contact.html",
      ]

    };
    return service;

  } // end appContents


})();
