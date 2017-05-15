(function($)
{
    $(document).ready(function()
    {
        $.ajaxSetup(
        {
            cache: false,
            beforeSend: function() {
                $('.refresh').hide();
            },
            complete: function() {
                $('.refresh').hide();
                $('.refresh').show();
            },
            success: function() {
                $('.refresh').hide();
                $('.refresh').show();
            }
        });
        var $container = $(".refresh");
        $container.load(".refresh");
        var refreshId = setInterval(function()
        {
            $container.load('.refresh');
        }, 1000);
    });
})(jQuery);