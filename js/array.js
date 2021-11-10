function showArray() {
    $.ajax({
        url: "http://localhost/alaji/vues/array.html",
        type: "GET",
        success: function(response) {
            document.getElementById("container").innerHTML = response;
        }
    })
}