$(function () {

        $.ajax({
            url: "http://api.jambase.com/events?venueId=1092&page=0&api_key=a25ftqk3veqmjrznzjvanjxw",
            dataType: 'json',
            type: 'GET',
            success: function (events) {
                get(events);
                console.log(events);
            }

        });


        function get(events) {
            for (var i=0; i<events.Events.length;i++) {
              var show = events.Events[i];
              var artists = show.Artists;
              var date = show.Date;
              $('.output').append('<div class="date">' + show.Date + '</div><div class="clear"></div>');
              for (var j=0; j<artists.length;j++){
                var artist = artists[j];


                $('.output').append(
                '<div class="artist">' + artist.Name +
                '</div>'
                );
              }
              $('.output').append('<div class="clear"><a href="' + show.TicketUrl + '" target="_blank"><button class="button dark center">Get Tickets</button></a></div></div>');
            }





        }
});
