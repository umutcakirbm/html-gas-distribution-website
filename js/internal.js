var map, marker;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 40.789123, lng: 30.3715683},
        scrollwheel: false,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        visible:true
    });
    marker = new google.maps.Marker({
        position: {lat: 40.789123, lng: 30.373757},
        map: map,
        title: 'AGDAŞ'
    });
}