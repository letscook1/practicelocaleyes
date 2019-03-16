function weather(lat, lon) {
  // dark sky weather
  var apiKey = "";
  var queryURL =
    "https://api.darksky.net/forecast/" + apiKey + "/" + lat + "," + lon;
  // https://api.darksky.net/forecast/af81fcad465db28a02669a76a2404ff6/41.75,-81.28333
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    if (response.length > 0) {
      $("#weather_info").removeClass("d-none");
      $("#weather_card").append(
        "<div id='w'_icon'>Icon: " + response.currently.icon + "</div>"
      );
      $("#weather_card").append(
        "<p><b>Summary: </b>" + response.currently.summary + "</p>"
      );
      $("#weather_card").append(
        "<p><b>Temperature: </b>" + response.currently.temperature + "</p>"
      );
      $("#weather_card").append(
        "<p><b>Feels Like: </b>" + apparentTemperature + "</p>"
      );
      $("#weather_card").append(
        "<p><b>Humidity: </b>" + response.currently.humidity + "</p>"
      );
      $("#weather_card").append(
        "<p><b>Wind Speed: </b>" + response.currently.windSpeed + "</p>"
      );
      $("#weather_card").append(
        "<p><b>Gusts: </b>" + response.currently.windGust + "</p>"
      );
      $("#weather_card").append(
        "<p><b>Wind Direction: </b>" + response.currently.windBearing + "</p>"
      );
      $("#weather_card").append(
        "<p><b>Sunrise: </b>" + response.daily.data[0].SunriseTime + "</p>"
      );
      $("#weather_card").append(
        "<p><b>Sunset: </b>" + response.daily.data[0].SunsetTime + "</p>"
      );
    }
  });
  return;
}
