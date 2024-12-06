require([
  "esri/map",
  "esri/layers/ArcGISDynamicMapServiceLayer",
  "dojo/domReady!"
], function(Map, ArcGISDynamicMapServiceLayer) {

  // Set the default visible layers: Road Centerlines (36) and Craighead County Lines (52)
  var defaultVisibleLayers = [36, 52];

  // Create the map centered on Jonesboro, AR
  var map = new Map("map", {
    center: [-90.65, 35.84],
    zoom: 11,
    basemap: "streets" // Using an ArcGIS basemap for simplicity
  });

  var dynamicLayer = new ArcGISDynamicMapServiceLayer("https://jbmcsql.jonesboro.org:6443/arcgis/rest/services/Shared_Data/Craighead_Public_Safety_Data_with_Surrounding_Counties2024_2/MapServer");

  // Add layer to map
  map.addLayer(dynamicLayer);

  dynamicLayer.on("load", function(evt) {
    console.log("Dynamic layer loaded.");

    var layerInfos = dynamicLayer.layerInfos; // array of sub-layer info objects
    var layerForm = document.getElementById('layerForm');
    layerForm.innerHTML = ""; // Clear any previous content

    // Initially set the visible layers
    dynamicLayer.setVisibleLayers(defaultVisibleLayers);

    // Create checkboxes for each sub-layer
    layerInfos.forEach(function(info) {
      // Create label and checkbox
      var label = document.createElement('label');
      label.className = "checkbox-inline";

      var checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.value = info.id;

      // Check if this layer is in the default visible layers
      checkbox.checked = (defaultVisibleLayers.indexOf(info.id) !== -1);

      checkbox.style.marginRight = "5px";
      checkbox.addEventListener('change', function() {
        var checkedBoxes = layerForm.querySelectorAll('input[type=checkbox]:checked');
        var newVisibleLayers = Array.prototype.slice.call(checkedBoxes).map(function(cb) {
          return parseInt(cb.value, 10);
        });
        if (newVisibleLayers.length === 0) {
          // If no layers selected, hide all layers
          dynamicLayer.setVisibleLayers([-1]);
        } else {
          dynamicLayer.setVisibleLayers(newVisibleLayers);
        }
      });

      label.appendChild(checkbox);
      label.appendChild(document.createTextNode(info.name));
      layerForm.appendChild(label);
      layerForm.appendChild(document.createElement('br'));
    });

    console.log("Layer checkboxes created.");
  });

  map.on("load", function() {
    console.log("Map and dynamic layer loaded successfully!");
  });
});