
async function initMap() {
    // Request needed libraries.
    const { Map, InfoWindow } = await google.maps.importLibrary("maps");
    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
    const map = new Map(document.getElementById("map"), {
      center: { lat: 37.39094933041195, lng: 37.02503913145092 },
      zoom: 10,
      mapId: "4504f8b37365c3d0",
    });
    const infoWindow = new InfoWindow();
    const draggableMarker = new AdvancedMarkerElement({
      map,
      position: { lat: 37.39094933041195, lng: 37.02503913145092 },
      gmpDraggable: true,
      title: "This marker is draggable.",
    });
  
    draggableMarker.addListener("dragend", (event) => {
      const position = draggableMarker.position;
       document.querySelector("#val1").value=`${Math.round(position.lat*1000)/1000}`;
       document.querySelector("#val2").value=`${Math.round(position.lng*1000)/1000}`;
      infoWindow.close();
      infoWindow.setContent(`Pin dropped at: ${position.lat}, ${position.lng}`);
      infoWindow.open(draggableMarker.map, draggableMarker);
    });

  }
  
  initMap();
  
