$( document ).ready(function() {
    console.log( "ready!" );
    $('.gallery-item').magnificPopup({
        type: 'image',
        gallery:{
          enabled:true
        }
      });
      
});