
//==================================Weather API=============================================================//
var proxy = 'https://cors-anywhere.herokuapp.com/';
var apiLinkDS = "https://api.darksky.net/forecast/e2c8b7bba44a193f5ef7d56f5cc0ede3/10.3539171,123.9114687";
//==============================================================================================================//


$.get({
    url: proxy+apiLinkDS,
    crossDomain: true,
    // method: "GET",
    success: function (data) {
        console.log(JSON.stringify(data))
        console.log(JSON.stringify(data.currently))
        var icons = new Skycons(),
            list = [],
            i;
        var icon = JSON.stringify(data.currently.icon);
        list.push(icon.substring(1, icon.length - 1))
        $('canvas').attr('id', list[0])
        // console.log( $('canvas').attr('id'))
        for (i = list.length; i--;)
            icons.set(list[i], list[i]);

        // console.log(list[0])

        icons.play();
        $("#contents").append(
            '<li class="list-group-item"><strong>Summary:</strong> ' + JSON.stringify(data.daily.summary) + "</li>" +
            '<li class="list-group-item"><strong>Temperature:</strong>   ' + JSON.stringify(data.currently.temperature) + "&#176;C</li>" +
            '<li class="list-group-item"><strong>Humidity:</strong> ' + JSON.stringify(data.currently.humidity) + "</li>"

        )
    }
});