function initMap() {
    // Latitude and Longitude
    var myLatLng = { lat: 45.1808, lng: 5.7225 };

    var map = new google.maps.Map(document.getElementById('google-maps'), {
        zoom: 17,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Foch - Ferrié, Grenoble' // Title Location
    });
}