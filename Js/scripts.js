        $(document).ready(function() {
            $('#mycarousel').carousel({interval: 2000});
            $('#carouselButton').click(function(){
                if ($('#carouselButton').children('span').hasClass('fa-pause')){
                    $('#mycarousel').carousel('pause');
                    $('#carouselButton').children('span').removeClass('fa-pause');
                    $('#carouselButton').children('span').addClass('fa-play');
                }
                else if ($('#carouselButton').children('span').hasClass('fa-play')){
                    $('#mycarousel').carousel('cycle');
                    $('#carouselButton').children('span').removeClass('fa-play');
                    $('#carouselButton').children('span').addClass('fa-pause');
                }
            });

            $('#loginid').click(function(){
                $('#loginModal').modal({
                    keyboard: false
                })
            })
            $('#closemodal').click(function(){
                $('#loginModal').modal('toggle')
            })
            $('#cancelmodal').click(function(){
                $('#loginModal').modal('toggle')
            })

            $('#reservetable').click(function(){
                $('#reserveModal').modal({
                    keyboard: false
                })
            })
            $('#reserveClose').click(function(){
                $('#reserveModal').modal('toggle')
            })
            $('#reserveCancel').click(function(){
                $('#reserveModal').modal('toggle')
            })
            $('.btn-group').on('click', '.btn', function() {
                $(this).addClass('active').siblings().removeClass('active');
            });
        });