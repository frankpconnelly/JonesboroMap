require([
  "esri/map",
  "esri/layers/ArcGISDynamicMapServiceLayer",
  "esri/layers/FeatureLayer",
  "dojo/domReady!"
], function(Map, ArcGISDynamicMapServiceLayer, FeatureLayer) {

  // Default visible layers for the dynamic map
  var defaultVisibleLayers = [36, 52];

  // Create the map
  var map = new Map("map", {
    center: [-90.65, 35.84],
    zoom: 11,
    basemap: "streets"
  });

  // Add dynamic map service layer
  var dynamicLayer = new ArcGISDynamicMapServiceLayer("https://jbmcsql.jonesboro.org:6443/arcgis/rest/services/Shared_Data/Craighead_Public_Safety_Data_with_Surrounding_Counties2024_2/MapServer");
  map.addLayer(dynamicLayer);

  // Add feature layer for units
  var unitsLayer = new ArcGISDynamicMapServiceLayer("https://jbmcsql.jonesboro.org:6443/arcgis/rest/services/Hosted/Jonesboro___Active_Calls_and_Units_Map/FeatureServer");
  map.addLayer(unitsLayer);

  // Create layer toggles for the dynamic layer
  dynamicLayer.on("load", function() {
    console.log("Dynamic layer loaded.");
    var layerInfos = dynamicLayer.layerInfos;
    var layerForm = document.getElementById('layerForm');
    layerForm.innerHTML = ""; // Clear previous content

    // Set initial visible layers
    dynamicLayer.setVisibleLayers(defaultVisibleLayers);

    // Create checkboxes for each sub-layer
    layerInfos.forEach(function(info) {
      var label = document.createElement('label');
      label.className = "checkbox-inline";

      var checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.value = info.id;
      checkbox.checked = defaultVisibleLayers.indexOf(info.id) !== -1;
      checkbox.style.marginRight = "5px";

      // Event listener for layer visibility toggle
      checkbox.addEventListener('change', function() {
        var checkedBoxes = layerForm.querySelectorAll('input[type=checkbox]:checked');
        var newVisibleLayers = Array.from(checkedBoxes).map(cb => parseInt(cb.value, 10));
        dynamicLayer.setVisibleLayers(newVisibleLayers.length > 0 ? newVisibleLayers : [-1]);
      });

      label.appendChild(checkbox);
      label.appendChild(document.createTextNode(info.name));
      layerForm.appendChild(label);
      layerForm.appendChild(document.createElement('br'));
    });

    console.log("Dynamic layer checkboxes created.");
  });

  // Create toggles for the "Units" feature layer
  unitsLayer.on("load", function() {
    console.log("Units layer loaded.");
    var sublayerInfos = unitsLayer.layerInfos;
    var unitsForm = document.getElementById('unitsForm');
    unitsForm.innerHTML = ""; // Clear previous content

    // Create checkboxes for each sub-layer in the "Units" layer
    sublayerInfos.forEach(function(info) {
      var label = document.createElement('label');
      label.className = "checkbox-inline";

      var checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.value = info.id;
      checkbox.checked = info.defaultVisibility; // Set based on sub-layer's default visibility
      checkbox.style.marginRight = "5px";

      // Event listener for sub-layer visibility toggle
      checkbox.addEventListener('change', function() {
        var checkedBoxes = unitsForm.querySelectorAll('input[type=checkbox]:checked');
        var visibleSublayers = Array.from(checkedBoxes).map(cb => parseInt(cb.value, 10));
        unitsLayer.setVisibleLayers(visibleSublayers.length > 0 ? visibleSublayers : [-1]);
      });

      label.appendChild(checkbox);
      label.appendChild(document.createTextNode(info.name));
      unitsForm.appendChild(label);
      unitsForm.appendChild(document.createElement('br'));
    });

    console.log("Units layer checkboxes created.");
  });

  map.on("load", function() {
    console.log("Map loaded successfully!");
  });
});
