require([
  "esri/map",
  "esri/layers/ArcGISDynamicMapServiceLayer",
  "esri/layers/FeatureLayer",
  "esri/layers/LabelLayer",         // Does this do anything? 
  "esri/symbols/TextSymbol",        // Does this do anything? 
  "esri/renderers/SimpleRenderer",  // Does this do anything? 
  "esri/layers/LabelClass",         // Does this do anything? 
  "dojo/domReady!"
], function(Map, ArcGISDynamicMapServiceLayer, FeatureLayer) {





  // *********************************** //
  // *********************************** //
  // --------==CREATE THE MAP==--------- //
  // *********************************** //
  // *********************************** //

  // Create the map
  var map = new Map("map", {
    center: [-90.65, 35.84],
    zoom: 11,
    basemap: "streets"
  });







  // *********************************** //
  // *********************************** //
  // -----==MAP FEATURE VARIABLES==----- //
  // *********************************** //
  // *********************************** //

  // Define map feature layers
  var addressPointNENA = new FeatureLayer("https://jbmcsql.jonesboro.org:6443/arcgis/rest/services/Shared_Data/Craighead_Public_Safety_Data_with_Surrounding_Counties2024_2/MapServer/31");
  var fireHydrants = new FeatureLayer("https://jbmcsql.jonesboro.org:6443/arcgis/rest/services/Shared_Data/Craighead_Public_Safety_Data_with_Surrounding_Counties2024_2/MapServer/32");
  var fireStations = new FeatureLayer("https://jbmcsql.jonesboro.org:6443/arcgis/rest/services/Shared_Data/Craighead_Public_Safety_Data_with_Surrounding_Counties2024_2/MapServer/33");
  var publicSchools = new FeatureLayer("https://jbmcsql.jonesboro.org:6443/arcgis/rest/services/Shared_Data/Craighead_Public_Safety_Data_with_Surrounding_Counties2024_2/MapServer/43");
  var stormDrainManholes = new FeatureLayer("https://jbmcsql.jonesboro.org:6443/arcgis/rest/services/Shared_Data/Craighead_Public_Safety_Data_with_Surrounding_Counties2024_2/MapServer/34");
  var roadCenterlines = new FeatureLayer("https://jbmcsql.jonesboro.org:6443/arcgis/rest/services/Shared_Data/Craighead_Public_Safety_Data_with_Surrounding_Counties2024_2/MapServer/36");
  var pipeInventoryPipelines = new FeatureLayer("https://jbmcsql.jonesboro.org:6443/arcgis/rest/services/Shared_Data/Craighead_Public_Safety_Data_with_Surrounding_Counties2024_2/MapServer/35");
  var overpasses = new FeatureLayer("https://jbmcsql.jonesboro.org:6443/arcgis/rest/services/Shared_Data/Craighead_Public_Safety_Data_with_Surrounding_Counties2024_2/MapServer/44");
  var railroadCOJ = new FeatureLayer("https://jbmcsql.jonesboro.org:6443/arcgis/rest/services/Shared_Data/Craighead_Public_Safety_Data_with_Surrounding_Counties2024_2/MapServer/60");
  var railroadAHTD = new FeatureLayer("https://jbmcsql.jonesboro.org:6443/arcgis/rest/services/Shared_Data/Craighead_Public_Safety_Data_with_Surrounding_Counties2024_2/MapServer/45");
  var waterways = new FeatureLayer("https://jbmcsql.jonesboro.org:6443/arcgis/rest/services/Shared_Data/Craighead_Public_Safety_Data_with_Surrounding_Counties2024_2/MapServer/46");
  var animalControlDistricts = new FeatureLayer("https://jbmcsql.jonesboro.org:6443/arcgis/rest/services/Shared_Data/Craighead_Public_Safety_Data_with_Surrounding_Counties2024_2/MapServer/47");
  var asuProperty = new FeatureLayer("https://jbmcsql.jonesboro.org:6443/arcgis/rest/services/Shared_Data/Craighead_Public_Safety_Data_with_Surrounding_Counties2024_2/MapServer/48");
  var cityESN = new FeatureLayer("https://jbmcsql.jonesboro.org:6443/arcgis/rest/services/Shared_Data/Craighead_Public_Safety_Data_with_Surrounding_Counties2024_2/MapServer/49");
  var countyESNAreas = new FeatureLayer("https://jbmcsql.jonesboro.org:6443/arcgis/rest/services/Shared_Data/Craighead_Public_Safety_Data_with_Surrounding_Counties2024_2/MapServer/50");
  var codeEnforcementBoundaries2023 = new FeatureLayer("https://jbmcsql.jonesboro.org:6443/arcgis/rest/services/Shared_Data/Craighead_Public_Safety_Data_with_Surrounding_Counties2024_2/MapServer/38");
  var craigheadCoCities = new FeatureLayer("https://jbmcsql.jonesboro.org:6443/arcgis/rest/services/Shared_Data/Craighead_Public_Safety_Data_with_Surrounding_Counties2024_2/MapServer/51");
  var craigheadCoLines = new FeatureLayer("https://jbmcsql.jonesboro.org:6443/arcgis/rest/services/Shared_Data/Craighead_Public_Safety_Data_with_Surrounding_Counties2024_2/MapServer/52");
  var fdRescueDist2021 = new FeatureLayer("https://jbmcsql.jonesboro.org:6443/arcgis/rest/services/Shared_Data/Craighead_Public_Safety_Data_with_Surrounding_Counties2024_2/MapServer/53");
  var fdServiceDist2012 = new FeatureLayer("https://jbmcsql.jonesboro.org:6443/arcgis/rest/services/Shared_Data/Craighead_Public_Safety_Data_with_Surrounding_Counties2024_2/MapServer/54");
  var fdStationFirstInDist2021 = new FeatureLayer("https://jbmcsql.jonesboro.org:6443/arcgis/rest/services/Shared_Data/Craighead_Public_Safety_Data_with_Surrounding_Counties2024_2/MapServer/55");
  var fdStationDist2015 = new FeatureLayer("https://jbmcsql.jonesboro.org:6443/arcgis/rest/services/Shared_Data/Craighead_Public_Safety_Data_with_Surrounding_Counties2024_2/MapServer/59");
  var fdTruck2021 = new FeatureLayer("https://jbmcsql.jonesboro.org:6443/arcgis/rest/services/Shared_Data/Craighead_Public_Safety_Data_with_Surrounding_Counties2024_2/MapServer/56");
  var jonesboroAirport = new FeatureLayer("https://jbmcsql.jonesboro.org:6443/arcgis/rest/services/Shared_Data/Craighead_Public_Safety_Data_with_Surrounding_Counties2024_2/MapServer/58");
  var fireDeptBrushTrucks = new FeatureLayer("https://jbmcsql.jonesboro.org:6443/arcgis/rest/services/Shared_Data/Craighead_Public_Safety_Data_with_Surrounding_Counties2024_2/MapServer/42");
  var jonesboroCityLimits = new FeatureLayer("https://jbmcsql.jonesboro.org:6443/arcgis/rest/services/Shared_Data/Craighead_Public_Safety_Data_with_Surrounding_Counties2024_2/MapServer/39");
  var parcels = new FeatureLayer("https://jbmcsql.jonesboro.org:6443/arcgis/rest/services/Shared_Data/Craighead_Public_Safety_Data_with_Surrounding_Counties2024_2/MapServer/40");
  var policeDistricts2022 = new FeatureLayer("https://jbmcsql.jonesboro.org:6443/arcgis/rest/services/Shared_Data/Craighead_Public_Safety_Data_with_Surrounding_Counties2024_2/MapServer/41");
  var countyFireDistricts2023 = new FeatureLayer("https://jbmcsql.jonesboro.org:6443/arcgis/rest/services/Shared_Data/Craighead_Public_Safety_Data_with_Surrounding_Counties2024_2/MapServer/30");
  var countySOPatrolDistricts = new FeatureLayer("https://jbmcsql.jonesboro.org:6443/arcgis/rest/services/Shared_Data/Craighead_Public_Safety_Data_with_Surrounding_Counties2024_2/MapServer/61");
  var automaticAidAgreements = new FeatureLayer("https://jbmcsql.jonesboro.org:6443/arcgis/rest/services/Shared_Data/Craighead_Public_Safety_Data_with_Surrounding_Counties2024_2/MapServer/29");

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

  // Enable labels for all feature layers dynamically
  mapLayers.forEach(function(flObj) {
    flObj.layer.on("load", function() {
      console.log(flObj.name + " layer loaded.");
      flObj.layer.setShowLabels(true); // Enable labels
    });
  });





  // ************************************ //
  // ************************************ //
  // -----==UNIT FEATURE VARIABLES==----- //
  // ************************************ //
  // ************************************ //

  // Define unit feature layers
  var activeUnits = new FeatureLayer("https://jbmcsql.jonesboro.org:6443/arcgis/rest/services/Hosted/Jonesboro___Active_Calls_and_Units_Map/FeatureServer/1")
  var activeCalls = new FeatureLayer("https://jbmcsql.jonesboro.org:6443/arcgis/rest/services/Hosted/Jonesboro___Active_Calls_and_Units_Map/FeatureServer/2")

  // Define unit layers array
  var unitLayers = [
    { name: "Active Units", layer: activeUnits },
    { name: "Active Calls", layer: activeCalls }
  ];

// Enable labels for all unit layers dynamically
unitLayers.forEach(function(ulObj) {
  ulObj.layer.on("load", function() {
    console.log(ulObj.name + " layer loaded.");
    ulObj.layer.setShowLabels(true);
  });
});



  

  // *********************************** //
  // *********************************** //
  // ----==MAP FEATURE CHECKBOXES==----- //
  // *********************************** //
  // *********************************** //

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

      checkbox.addEventListener('change', function() {
        if (this.checked) {
          // Add the layer to the map
          map.addLayer(flObj.layer);
        } else {
          // Remove the layer from the map
          map.removeLayer(flObj.layer);
        }
      });

      label.appendChild(checkbox);
      label.appendChild(document.createTextNode(flObj.name));
      featureLayerForm.appendChild(label);
      featureLayerForm.appendChild(document.createElement('br'));
    });

    console.log("Map layer checkboxes created.");
  }





  // *********************************** //
  // *********************************** //
  // -==CREATE UNIT FEATURE CHECKBOXES== //
  // *********************************** //
  // *********************************** //

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
  
      // Unit layers are off by default
      checkbox.checked = false;
  
      checkbox.addEventListener('change', function() {
        if (this.checked) {
          map.addLayer(ulObj.layer);
          ulObj.layer.on("load", function() {
            console.log(ulObj.name + " layer loaded.");
            ulObj.layer.setShowLabels(true);
            console.log(ulObj.name + " label loaded.");
          })
        } else {
          map.removeLayer(ulObj.layer);
        }
      });
  
      label.appendChild(checkbox);
      label.appendChild(document.createTextNode(ulObj.name));
      unitForm.appendChild(label);
      unitForm.appendChild(document.createElement('br'));
    });
  
    console.log("Unit layer checkboxes created.");
  }





  // *********************************** //
  // *********************************** //
  // --------==FUNCTION CALLS==--------- //
  // *********************************** //
  // *********************************** //

  map.on("load", function() {
    console.log("Map loaded successfully!");
    createMapLayerToggles();
    createUnitLayerToggles();
  });
});