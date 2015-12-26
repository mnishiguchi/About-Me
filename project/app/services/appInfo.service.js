/**
 * appInfo
 */
(function() {

  // Module declaration.
  // none


  // --------------------------------------------------------------------------- //
  // --------------------------------------------------------------------------- //


  angular
    .module( "app" )
    .factory( "appInfo", appInfo );

  appInfo.$inject = [ ];
  function appInfo() {

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
        "app/contents/_about_me.template.html",
        "app/contents/_background.template.html",
        "app/contents/_projects.template.html",
        "app/contents/_blog.template.html",
        "app/contents/_resources.template.html",
        "app/contents/_contact.template.html",
      ]

    };
    return service;

  } // end appInfo


})();
