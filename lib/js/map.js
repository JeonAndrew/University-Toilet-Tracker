// Initialize and add the map
let map;

async function initMap() {
  // The location of Urbana Champaign
  const position = {lat: 40.10770169905355, lng: -88.22720954614097};
  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  // The map, centered at the Quad
  map = new Map(document.getElementById("map"), {
    zoom: 15,
    center: position,
    mapId: "quadMap",
  });

  // The marker, positioned at halleneGateway
  const halleneGatewayMarker = new AdvancedMarkerElement({
    map: map,
    position: {lat: 40.10883509604532, lng: -88.2197703307983},
    title: "halleneGatewayMarker",
  });

  halleneGatewayMarker.addListener("click", () => {
    map.setZoom(17);
    map.setCenter(halleneGatewayMarker.position);
  });
  
}

initMap();
