// main.js for ArcGIS API for JavaScript 4.x

require([
  "esri/Map",
  "esri/views/MapView",
  "esri/layers/FeatureLayer",
  "esri/symbols/TextSymbol",
  "esri/symbols/Font",
  "esri/layers/support/LabelClass", // Corrected module path
  "dojo/domReady!"
], function(
  Map,
  MapView,
  FeatureLayer,
  TextSymbol,
  Font,
  LabelClass
) {

  // *********************************** //
  // --------==CREATE THE MAP==--------- //
  // *********************************** //

  // Create the Map
  var map = new Map({
    basemap: "streets-vector" // Using vector basemap for better labeling
  });

  // Create the MapView
  var view = new MapView({
    container: "map", // Reference to the DOM node with id "map"
    map: map,
    center: [-90.65, 35.84], // Longitude, latitude
    zoom: 11
  });

  // *********************************** //
  // -----==MAP FEATURE VARIABLES==----- //
  // *********************************** //

  // Define map feature layers
  var addressPointNENA = new FeatureLayer({
    url: "https://jbmcsql.jonesboro.org:6443/arcgis/rest/services/Shared_Data/Craighead_Public_Safety_Data_with_Surrounding_Counties2024_2/MapServer/31",
    visible: false
  });
  var fireHydrants = new FeatureLayer({
    url: "https://jbmcsql.jonesboro.org:6443/arcgis/rest/services/Shared_Data/Craighead_Public_Safety_Data_with_Surrounding_Counties2024_2/MapServer/32",
    visible: false
  });
  var fireStations = new FeatureLayer({
    url: "https://jbmcsql.jonesboro.org:6443/arcgis/rest/services/Shared_Data/Craighead_Public_Safety_Data_with_Surrounding_Counties2024_2/MapServer/33",
    visible: false
  });
  var publicSchools = new FeatureLayer({
    url: "https://jbmcsql.jonesboro.org:6443/arcgis/rest/services/Shared_Data/Craighead_Public_Safety_Data_with_Surrounding_Counties2024_2/MapServer/43",
    visible: false
  });
  var stormDrainManholes = new FeatureLayer({
    url: "https://jbmcsql.jonesboro.org:6443/arcgis/rest/services/Shared_Data/Craighead_Public_Safety_Data_with_Surrounding_Counties2024_2/MapServer/34",
    visible: false
  });
  var roadCenterlines = new FeatureLayer({
    url: "https://jbmcsql.jonesboro.org:6443/arcgis/rest/services/Shared_Data/Craighead_Public_Safety_Data_with_Surrounding_Counties2024_2/MapServer/36",
    visible: false
  });
  var pipeInventoryPipelines = new FeatureLayer({
    url: "https://jbmcsql.jonesboro.org:6443/arcgis/rest/services/Shared_Data/Craighead_Public_Safety_Data_with_Surrounding_Counties2024_2/MapServer/35",
    visible: false
  });
  var overpasses = new FeatureLayer({
    url: "https://jbmcsql.jonesboro.org:6443/arcgis/rest/services/Shared_Data/Craighead_Public_Safety_Data_with_Surrounding_Counties2024_2/MapServer/44",
    visible: false
  });
  var railroadCOJ = new FeatureLayer({
    url: "https://jbmcsql.jonesboro.org:6443/arcgis/rest/services/Shared_Data/Craighead_Public_Safety_Data_with_Surrounding_Counties2024_2/MapServer/60",
    visible: false
  });
  var railroadAHTD = new FeatureLayer({
    url: "https://jbmcsql.jonesboro.org:6443/arcgis/rest/services/Shared_Data/Craighead_Public_Safety_Data_with_Surrounding_Counties2024_2/MapServer/45",
    visible: false
  });
  var waterways = new FeatureLayer({
    url: "https://jbmcsql.jonesboro.org:6443/arcgis/rest/services/Shared_Data/Craighead_Public_Safety_Data_with_Surrounding_Counties2024_2/MapServer/46",
    visible: false
  });
  var animalControlDistricts = new FeatureLayer({
    url: "https://jbmcsql.jonesboro.org:6443/arcgis/rest/services/Shared_Data/Craighead_Public_Safety_Data_with_Surrounding_Counties2024_2/MapServer/47",
    visible: false
  });
  var asuProperty = new FeatureLayer({
    url: "https://jbmcsql.jonesboro.org:6443/arcgis/rest/services/Shared_Data/Craighead_Public_Safety_Data_with_Surrounding_Counties2024_2/MapServer/48",
    visible: false
  });
  var cityESN = new FeatureLayer({
    url: "https://jbmcsql.jonesboro.org:6443/arcgis/rest/services/Shared_Data/Craighead_Public_Safety_Data_with_Surrounding_Counties2024_2/MapServer/49",
    visible: false
  });
  var countyESNAreas = new FeatureLayer({
    url: "https://jbmcsql.jonesboro.org:6443/arcgis/rest/services/Shared_Data/Craighead_Public_Safety_Data_with_Surrounding_Counties2024_2/MapServer/50",
    visible: false
  });
  var codeEnforcementBoundaries2023 = new FeatureLayer({
    url: "https://jbmcsql.jonesboro.org:6443/arcgis/rest/services/Shared_Data/Craighead_Public_Safety_Data_with_Surrounding_Counties2024_2/MapServer/38",
    visible: false
  });
  var craigheadCoCities = new FeatureLayer({
    url: "https://jbmcsql.jonesboro.org:6443/arcgis/rest/services/Shared_Data/Craighead_Public_Safety_Data_with_Surrounding_Counties2024_2/MapServer/51",
    visible: false
  });
  var craigheadCoLines = new FeatureLayer({
    url: "https://jbmcsql.jonesboro.org:6443/arcgis/rest/services/Shared_Data/Craighead_Public_Safety_Data_with_Surrounding_Counties2024_2/MapServer/52",
    visible: false
  });
  var fdRescueDist2021 = new FeatureLayer({
    url: "https://jbmcsql.jonesboro.org:6443/arcgis/rest/services/Shared_Data/Craighead_Public_Safety_Data_with_Surrounding_Counties2024_2/MapServer/53",
    visible: false
  });
  var fdServiceDist2012 = new FeatureLayer({
    url: "https://jbmcsql.jonesboro.org:6443/arcgis/rest/services/Shared_Data/Craighead_Public_Safety_Data_with_Surrounding_Counties2024_2/MapServer/54",
    visible: false
  });
  var fdStationFirstInDist2021 = new FeatureLayer({
    url: "https://jbmcsql.jonesboro.org:6443/arcgis/rest/services/Shared_Data/Craighead_Public_Safety_Data_with_Surrounding_Counties2024_2/MapServer/55",
    visible: false
  });
  var fdStationDist2015 = new FeatureLayer({
    url: "https://jbmcsql.jonesboro.org:6443/arcgis/rest/services/Shared_Data/Craighead_Public_Safety_Data_with_Surrounding_Counties2024_2/MapServer/59",
    visible: false
  });
  var fdTruck2021 = new FeatureLayer({
    url: "https://jbmcsql.jonesboro.org:6443/arcgis/rest/services/Shared_Data/Craighead_Public_Safety_Data_with_Surrounding_Counties2024_2/MapServer/56",
    visible: false
  });
  var jonesboroAirport = new FeatureLayer({
    url: "https://jbmcsql.jonesboro.org:6443/arcgis/rest/services/Shared_Data/Craighead_Public_Safety_Data_with_Surrounding_Counties2024_2/MapServer/58",
    visible: false
  });
  var fireDeptBrushTrucks = new FeatureLayer({
    url: "https://jbmcsql.jonesboro.org:6443/arcgis/rest/services/Shared_Data/Craighead_Public_Safety_Data_with_Surrounding_Counties2024_2/MapServer/42",
    visible: false
  });
  var jonesboroCityLimits = new FeatureLayer({
    url: "https://jbmcsql.jonesboro.org:6443/arcgis/rest/services/Shared_Data/Craighead_Public_Safety_Data_with_Surrounding_Counties2024_2/MapServer/39",
    visible: false
  });
  var parcels = new FeatureLayer({
    url: "https://jbmcsql.jonesboro.org:6443/arcgis/rest/services/Shared_Data/Craighead_Public_Safety_Data_with_Surrounding_Counties2024_2/MapServer/40",
    visible: false
  });
  var policeDistricts2022 = new FeatureLayer({
    url: "https://jbmcsql.jonesboro.org:6443/arcgis/rest/services/Shared_Data/Craighead_Public_Safety_Data_with_Surrounding_Counties2024_2/MapServer/41",
    visible: false
  });
  var countyFireDistricts2023 = new FeatureLayer({
    url: "https://jbmcsql.jonesboro.org:6443/arcgis/rest/services/Shared_Data/Craighead_Public_Safety_Data_with_Surrounding_Counties2024_2/MapServer/30",
    visible: false
  });
  var countySOPatrolDistricts = new FeatureLayer({
    url: "https://jbmcsql.jonesboro.org:6443/arcgis/rest/services/Shared_Data/Craighead_Public_Safety_Data_with_Surrounding_Counties2024_2/MapServer/61",
    visible: false
  });
  var automaticAidAgreements = new FeatureLayer({
    url: "https://jbmcsql.jonesboro.org:6443/arcgis/rest/services/Shared_Data/Craighead_Public_Safety_Data_with_Surrounding_Counties2024_2/MapServer/29",
    visible: false
  });

  // Define map layers array
  var mapLayers = [
    { name: "Address Point NENA (31)", layer: addressPointNENA },
    { name: "Fire Hydrants (32)", layer: fireHydrants },
    { name: "Fire Stations (33)", layer: fireStations },
    { name: "Public Schools (43)", layer: publicSchools },
    { name: "Storm Drain Manholes (34)", layer: stormDrainManholes },
    { name: "Road Centerlines (36)", layer: roadCenterlines },
    { name: "Pipe Inventory Pipelines (35)", layer: pipeInventoryPipelines },
    { name: "Overpasses (44)", layer: overpasses },
    { name: "Railroad COJ (60)", layer: railroadCOJ },
    { name: "Railroad AHTD Craighead (45)", layer: railroadAHTD },
    { name: "Waterways (46)", layer: waterways },
    { name: "Animal Control Districts (47)", layer: animalControlDistricts },
    { name: "ASU Property (48)", layer: asuProperty },
    { name: "City ESN (49)", layer: cityESN },
    { name: "County ESN Areas (50)", layer: countyESNAreas },
    { name: "Code Enforcement Boundaries 2023 (38)", layer: codeEnforcementBoundaries2023 },
    { name: "Craighead County Cities (51)", layer: craigheadCoCities },
    { name: "Craighead County Lines (52)", layer: craigheadCoLines },
    { name: "FD Rescue Dist 2021 (53)", layer: fdRescueDist2021 },
    { name: "FD Service Dist 2012 (54)", layer: fdServiceDist2012 },
    { name: "FD Station First In Dist 2021 (55)", layer: fdStationFirstInDist2021 },
    { name: "FD Station Dist 2015 (59)", layer: fdStationDist2015 },
    { name: "FD Truck 2021 (56)", layer: fdTruck2021 },
    { name: "Jonesboro Airport (58)", layer: jonesboroAirport },
    { name: "Fire Dept Brush Trucks (42)", layer: fireDeptBrushTrucks },
    { name: "Jonesboro City Limits (39)", layer: jonesboroCityLimits },
    { name: "Parcels (40)", layer: parcels },
    { name: "Police Districts 2022 (41)", layer: policeDistricts2022 },
    { name: "County Fire Districts 2023 (30)", layer: countyFireDistricts2023 },
    { name: "County SO Patrol Districts (61)", layer: countySOPatrolDistricts },
    { name: "Automatic Aid Agreements (29)", layer: automaticAidAgreements }
  ];

  // *********************************** //
  // -----==UNIT FEATURE VARIABLES==----- //
  // *********************************** //

  // Define unit feature layers
  var activeUnits = new FeatureLayer({
    url: "https://jbmcsql.jonesboro.org:6443/arcgis/rest/services/Hosted/Jonesboro___Active_Calls_and_Units_Map/FeatureServer/1",
    visible: false
  });

  var activeCalls = new FeatureLayer({
    url: "https://jbmcsql.jonesboro.org:6443/arcgis/rest/services/Hosted/Jonesboro___Active_Calls_and_Units_Map/FeatureServer/2",
    visible: false
  });

  // Define unit layers array
  var unitLayers = [
    { name: "Active Units", layer: activeUnits },
    { name: "Active Calls", layer: activeCalls }
  ];

  // ********************************************** //
  // -----==ENABLE LABELS FOR FEATURE LAYERS==----- //
  // ********************************************** //

  // Function to enable labels for a layer
  function enableLabels(layer, fieldName) {
    if (!fieldName) {
      console.warn(`No fieldName provided for labeling on layer: ${layer.title || layer.url}`);
      return;
    }

    var labelClass = new LabelClass({
      labelExpression: `{${fieldName}}`, // e.g., {OfficerName}
      symbol: new TextSymbol({
        color: "black",
        haloColor: "white",
        haloSize: "1px",
        font: {
          family: "Arial",
          size: 12,
          weight: "bold"
        }
      }),
      labelPlacement: "above-center",
      // Optional: Define scale ranges
      maxScale: 0, // No maximum scale
      minScale: 0   // No minimum scale
    });

    layer.labelingInfo = [labelClass];
    layer.labelsVisible = true;
  }

  // Apply labels to unit layers
  unitLayers.forEach(function(ulObj) {
    ulObj.layer.when(function() {
      console.log(`${ulObj.name} layer loaded.`);

      // Debug: Log all field names
      ulObj.layer.fields.forEach(function(field) {
        console.log(`${ulObj.name} Field: ${field.name}`);
      });
    }).catch(function(error) {
      console.error(`Error loading ${ulObj.name} layer:`, error);
    });
  });

  // ******************************************* //
  // -----==CREATE MAP FEATURE CHECKBOXES==----- //
  // ******************************************* //

  function createMapLayerToggles() {
    var featureLayerForm = document.getElementById('mapForm');
    featureLayerForm.innerHTML = "";

    mapLayers.forEach(function(flObj) {
      var label = document.createElement('label');
      label.className = "checkbox-inline";

      var checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.value = flObj.name;
      checkbox.style.marginRight = "5px";

      // Initialize checkbox based on layer visibility
      checkbox.checked = flObj.layer.visible;

      checkbox.addEventListener('change', function() {
        flObj.layer.visible = this.checked;
        console.log(`${flObj.name} layer visibility set to ${this.checked}`);
      });

      label.appendChild(checkbox);
      label.appendChild(document.createTextNode(flObj.name));
      featureLayerForm.appendChild(label);
      featureLayerForm.appendChild(document.createElement('br'));
    });

    console.log("Map layer checkboxes created.");
  }

  // ******************************************** //
  // -----==CREATE UNIT FEATURE CHECKBOXES==----- //
  // ******************************************** //

  function createUnitLayerToggles() {
    var unitForm = document.getElementById('unitForm');
    unitForm.innerHTML = "";

    unitLayers.forEach(function(ulObj) {
      var label = document.createElement('label');
      label.className = "checkbox-inline";

      var checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.value = ulObj.name;
      checkbox.style.marginRight = "5px";

      // Initialize checkbox based on layer visibility
      checkbox.checked = ulObj.layer.visible;

      checkbox.addEventListener('change', function() {
        ulObj.layer.visible = this.checked;
        console.log(`${ulObj.name} layer visibility set to ${this.checked}`);
      });

      label.appendChild(checkbox);
      label.appendChild(document.createTextNode(ulObj.name));
      unitForm.appendChild(label);
      unitForm.appendChild(document.createElement('br'));
    });

    console.log("Unit layer checkboxes created.");
  }

  // *************************************** //
  // -----==SET 5 SECOND REFRESH RATE==----- //
  // *************************************** //

  function refreshLayer(layer) {
    layer.refresh();
    console.log(`${layer.title || layer.url} refreshed at ${new Date().toLocaleTimeString()}`);
  }

  // **************************** //
  // -----==FUNCTION CALLS==----- //
  // **************************** //

  view.when(function() {
    console.log("Map loaded successfully!");

    // Add all map layers to the map
    map.addMany(mapLayers.map(obj => obj.layer));

    // Add all unit layers to the map
    map.addMany(unitLayers.map(obj => obj.layer));

    // Create checkboxes for toggling layers
    createMapLayerToggles();
    createUnitLayerToggles();

    // Set interval to refresh Active Units layer every 5 seconds
    var refreshInterval = 5000; // 5000 milliseconds = 5 seconds

    // Ensure the layer is loaded before attempting to refresh
    activeUnits.when(function() {
      console.log("Setting up refresh interval for Active Units layer.");
      setInterval(function() {
        refreshLayer(activeUnits);
      }, refreshInterval);
    }).catch(function(error) {
      console.error("Error loading Active Units layer for refresh setup:", error);
    });

  }).catch(function(error) {
    console.error("Error loading the map:", error);
  });

});