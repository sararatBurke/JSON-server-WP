$.getJSON("http://api.openweathermap.org/data/2.5/weather?q=Bangkok&units=imperial&appid=7d3357f65684a621b095667f5ebc5166",

function(data){
            console.log(data);

            var icon = "http://openweathermap.org/img/wn/" + 
            data.weather[0].icon + ".png";

            var temp =  Math.floor(data.main.temp) + '°F';

            var h = 'H:' + Math.floor(data.main.temp_max) + '°';
            var l = 'L:' + Math.floor(data.main.temp_min) + '°';
            
            var weather = data.weather[0].main;
            var city = data.name;

            $(".city").append(city);
            $(".icon").attr("src", icon);
            $(".weather").append(weather);
            $(".temp").append(temp);

            $(".hTemp").append(h);
            $(".lTemp").append(l);
      });


