$(document).ready(function(){

  $('#ue-gallery__modal > .close').click(function(){

    $('#ue-gallery__modal').modal({hide:true});
  });

  $('.ue-gallery__thumbnail').click(function(){
    var full_image = $(this).attr('full-image');
      console.log(full_image);
   $('.ue-gallery__img').attr('src',full_image);

      $('#ue-gallery__modal').modal({show:true});

  });

    $(".filter-button").click(function(){
        var value = $(this).attr('data-filter');

        if(value == "all")
        {
            //$('.filter').removeClass('hidden');
            $('.filter').show('1000');
        }
        else
        {
//            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
//            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
            $(".filter").not('.'+value).hide('3000');
            $('.filter').filter('.'+value).show('3000');

        }
    });

    if ($(".filter-button").removeClass("active")) {
$(this).removeClass("active");
}
$(this).addClass("active");

});
