const myLatlng = new google.maps.LatLng(52.478486, 13.428261);

export function loadMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    center: myLatlng,
    zoom: 16,
    mapId: "49d6428727713c4d",
  });

  var marker = new google.maps.Marker({
    position: myLatlng,
    title: "Hello World!",
  });

  marker.setMap(map);
}
