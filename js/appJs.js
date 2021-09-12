

jQuery(function($){

        $('.pruebaWayp').waypoint(function() {
            $(this).toggleClass('fadeInRight animated');   
        },
        {
            offset: '80%',
            triggerOnce: true
        });
        $('.pruebaWaypB').waypoint(function() {
            $(this).toggleClass('fadeInLeftBig animated');   
        },
        {
            offset: '100%',
            triggerOnce: true
        });
        $('.pruebaWaypC').waypoint(function() {
            $(this).toggleClass('fadeInRightBig animated');   
        },
        {
            offset: '100%',
            triggerOnce: true
        });


        $('.pruebaWayp1').waypoint(function() {
            $(this).toggleClass('fadeIn animated');   
        },
        {
            offset: '80%',
            triggerOnce: true
        });
        $('.pruebaWayp2').waypoint(function() {
            $(this).toggleClass('fadeIn animated');   
        },
        {
            offset: '60%',
            triggerOnce: true
        });
        $('.pruebaWayp3').waypoint(function() {
            $(this).toggleClass('fadeIn animated');   
        },
        {
            offset: '67%',
            triggerOnce: true
        });
        $('.pruebaWayp4').waypoint(function() {
            $(this).toggleClass('fadeIn animated');   
        },
        {
            offset: '45%',
            triggerOnce: true
        });


        $('.pruebaWaypM').waypoint(function() {
            $(this).toggleClass('bounceIn animated');   
        },
        {
            offset: '60%',
            triggerOnce: true
        });
 });
  