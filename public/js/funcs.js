(function ($) {
    $(function () {

        //initialize all modals           
        //$('.modal').modal();

        //or by click on trigger
        $('.trigger-modal').modal();

         $(".btn-showsidenav").sideNav();

         $(".button-collapse").sideNav({
         	 closeOnClick: true
         });
    }); // end of document ready
})(jQuery); // end of jQuery name space

/* Materialize Name space */
 // Materialize.toast(message, displayLength, className, completeCallback);
 // Materialize.toast('I am a toast!', 4000) // 4000 is the duration of the toast

  /* end of materialize name space */