function showApi() {
    $.ajax({
        url: "http://localhost/alaji/vues/api.html",
        type: "GET",
        dataType: "html",
        success: function(response) {
            document.getElementById("container").innerHTML = response;
            getCities();
        },
        error: function() {
            document.getElementById("container").innerHTML = "Une erreur s'est produite";
        }
    });
}

function getCities() {
    let url = "https://countriesnow.space/api/v0.1/countries/cities";
    let country = "France";
    $.ajax({
        url: url,
        type: "POST",
        data: { "country": country },
        dataType: "json",
        success: function(response) {
            response.data.forEach((element, key) => {
                let tag_option = document.createElement("option");
                tag_option.setAttribute("value", element);
                tag_option.innerHTML = element;
                document.getElementById("cities").appendChild(tag_option);
            })
        },
        error: function(err) {
            console.log("error", err)
        }
    });
}


function showWeather() {
    let city = document.getElementById("cities").value;
    let token = "ff831690bfd455dd1e580b0d56fba35c";
    let url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + token; /* url de l'api*/
    $.ajax({
        url: url,
        type: "GET",
        /*requete de type get, pour obtenir les données qu'on veut */
        dataType: "json",
        success: function(response) {
            showDatas(response, city);

        },
        error: function(err) {
            console.log("error", err)
        }
    });
}

function showDatas(datas) {
    console.log("OBJECT: ", datas.weather[0]);

    let object_to_array = Object.entries(datas.weather[0], );
    console.log("ARRAY: ", object_to_array);

    let target = document.getElementById("container");

    for (const [key, value] of object_to_array) {
        let new_paragraph = document.createElement('p');
        new_paragraph.innerHTML = "<div class='container-weather'><span>" + key + ":" + "</span> <span>" + value + "</span></div>"
        target.appendChild(new_paragraph);

    }
    /* ou function showDatas(response) {
        document.getElementById("container").innerHTML = response["weather"][0]["description"];
    } */
}