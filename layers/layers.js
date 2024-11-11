var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

        var lyr_ESRISatelliteArcGISWorld_Imagery_1 = new ol.layer.Tile({
            'title': 'ESRI Satellite (ArcGIS/World_Imagery)',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var lyr_BranyanLocalAreaPlan_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "Branyan Local Area Plan",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/BranyanLocalAreaPlan_2.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [16949539.221882, -2866206.854473, 16955900.081150, -2862275.725751]
                            })
                        });
var format_Encumbrances_3 = new ol.format.GeoJSON();
var features_Encumbrances_3 = format_Encumbrances_3.readFeatures(json_Encumbrances_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Encumbrances_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Encumbrances_3.addFeatures(features_Encumbrances_3);
var lyr_Encumbrances_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Encumbrances_3, 
                style: style_Encumbrances_3,
                popuplayertitle: "Encumbrances",
                interactive: false,
                title: '<img src="styles/legend/Encumbrances_3.png" /> Encumbrances'
            });
var format_Localitieslocalities_4 = new ol.format.GeoJSON();
var features_Localitieslocalities_4 = format_Localitieslocalities_4.readFeatures(json_Localitieslocalities_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Localitieslocalities_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Localitieslocalities_4.addFeatures(features_Localitieslocalities_4);
var lyr_Localitieslocalities_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Localitieslocalities_4, 
                style: style_Localitieslocalities_4,
                popuplayertitle: "Localities — localities",
                interactive: false,
                title: '<img src="styles/legend/Localitieslocalities_4.png" /> Localities — localities'
            });
var format_Parcelsparcels_5 = new ol.format.GeoJSON();
var features_Parcelsparcels_5 = format_Parcelsparcels_5.readFeatures(json_Parcelsparcels_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Parcelsparcels_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Parcelsparcels_5.addFeatures(features_Parcelsparcels_5);
var lyr_Parcelsparcels_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Parcelsparcels_5, 
                style: style_Parcelsparcels_5,
                popuplayertitle: "Parcels — parcels",
                interactive: true,
                title: '<img src="styles/legend/Parcelsparcels_5.png" /> Parcels — parcels'
            });
var format_TopBranyanParcelsparcels_lotplan_dissolved_with_address_6 = new ol.format.GeoJSON();
var features_TopBranyanParcelsparcels_lotplan_dissolved_with_address_6 = format_TopBranyanParcelsparcels_lotplan_dissolved_with_address_6.readFeatures(json_TopBranyanParcelsparcels_lotplan_dissolved_with_address_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TopBranyanParcelsparcels_lotplan_dissolved_with_address_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TopBranyanParcelsparcels_lotplan_dissolved_with_address_6.addFeatures(features_TopBranyanParcelsparcels_lotplan_dissolved_with_address_6);
var lyr_TopBranyanParcelsparcels_lotplan_dissolved_with_address_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TopBranyanParcelsparcels_lotplan_dissolved_with_address_6, 
                style: style_TopBranyanParcelsparcels_lotplan_dissolved_with_address_6,
                popuplayertitle: "Top Branyan Parcels — parcels_lotplan_dissolved_with_address",
                interactive: true,
                title: '<img src="styles/legend/TopBranyanParcelsparcels_lotplan_dissolved_with_address_6.png" /> Top Branyan Parcels — parcels_lotplan_dissolved_with_address'
            });
var format_TopLeadBranyanParcels_7 = new ol.format.GeoJSON();
var features_TopLeadBranyanParcels_7 = format_TopLeadBranyanParcels_7.readFeatures(json_TopLeadBranyanParcels_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TopLeadBranyanParcels_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TopLeadBranyanParcels_7.addFeatures(features_TopLeadBranyanParcels_7);
var lyr_TopLeadBranyanParcels_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TopLeadBranyanParcels_7, 
                style: style_TopLeadBranyanParcels_7,
                popuplayertitle: "Top Lead Branyan Parcels",
                interactive: true,
                title: '<img src="styles/legend/TopLeadBranyanParcels_7.png" /> Top Lead Branyan Parcels'
            });
var group_Administrative = new ol.layer.Group({
                                layers: [lyr_Localitieslocalities_4,lyr_Parcelsparcels_5,lyr_TopBranyanParcelsparcels_lotplan_dissolved_with_address_6,lyr_TopLeadBranyanParcels_7,],
                                fold: "open",
                                title: "Administrative"});
var group_Encumbrances = new ol.layer.Group({
                                layers: [lyr_Encumbrances_3,],
                                fold: "open",
                                title: "Encumbrances"});
var group_LocalAreaPlan = new ol.layer.Group({
                                layers: [lyr_BranyanLocalAreaPlan_2,],
                                fold: "open",
                                title: "Local Area Plan"});
var group_BaseLayer = new ol.layer.Group({
                                layers: [lyr_GoogleMaps_0,lyr_ESRISatelliteArcGISWorld_Imagery_1,],
                                fold: "open",
                                title: "Base Layer"});

lyr_GoogleMaps_0.setVisible(false);lyr_ESRISatelliteArcGISWorld_Imagery_1.setVisible(true);lyr_BranyanLocalAreaPlan_2.setVisible(true);lyr_Encumbrances_3.setVisible(true);lyr_Localitieslocalities_4.setVisible(true);lyr_Parcelsparcels_5.setVisible(true);lyr_TopBranyanParcelsparcels_lotplan_dissolved_with_address_6.setVisible(true);lyr_TopLeadBranyanParcels_7.setVisible(true);
var layersList = [group_BaseLayer,group_LocalAreaPlan,group_Encumbrances,group_Administrative];
lyr_Encumbrances_3.set('fieldAliases', {'id': 'id', });
lyr_Localitieslocalities_4.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'Locality': 'Locality', 'Post_Code': 'Post_Code', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_Parcelsparcels_5.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'plan_lot': 'PLAN_LOT', 'derm_landuse': 'DERM_LANDUSE', 'house_no': 'HOUSE_NO', 'street_name': 'STREET_NAME', 'street_type': 'STREET_TYPE', 'road_name': 'ROAD_NAME', 'locality': 'LOCALITY', 'address': 'ADDRESS', 'legal_area': 'LEGAL_AREA', 'full_address': 'FULL_ADDRESS', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_TopBranyanParcelsparcels_lotplan_dissolved_with_address_6.set('fieldAliases', {'fid': 'fid', 'LOTPLAN': 'LOTPLAN', 'area_ha': 'area_ha', 'locality': 'locality', 'local_auth': 'local_auth', 'address': 'address', 'NDH': 'NDH', 'Lead Link': 'Lead Link', });
lyr_TopLeadBranyanParcels_7.set('fieldAliases', {'fid': 'fid', 'Address': 'Address', 'Lotplan': 'Lotplan', 'Suburb': 'Suburb', 'Gross Ha': 'Gross Ha', 'NDH': 'NDH', });
lyr_Encumbrances_3.set('fieldImages', {'id': '', });
lyr_Localitieslocalities_4.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'Locality': 'TextEdit', 'Post_Code': 'Range', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Parcelsparcels_5.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'plan_lot': 'TextEdit', 'derm_landuse': 'TextEdit', 'house_no': 'TextEdit', 'street_name': 'TextEdit', 'street_type': 'TextEdit', 'road_name': 'TextEdit', 'locality': 'TextEdit', 'address': 'TextEdit', 'legal_area': 'TextEdit', 'full_address': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_TopBranyanParcelsparcels_lotplan_dissolved_with_address_6.set('fieldImages', {'fid': 'TextEdit', 'LOTPLAN': 'TextEdit', 'area_ha': 'TextEdit', 'locality': 'TextEdit', 'local_auth': 'TextEdit', 'address': 'TextEdit', 'NDH': 'TextEdit', 'Lead Link': '', });
lyr_TopLeadBranyanParcels_7.set('fieldImages', {'fid': '', 'Address': '', 'Lotplan': '', 'Suburb': '', 'Gross Ha': '', 'NDH': '', });
lyr_Encumbrances_3.set('fieldLabels', {'id': 'no label', });
lyr_Localitieslocalities_4.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'Locality': 'no label', 'Post_Code': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_Parcelsparcels_5.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'plan_lot': 'hidden field', 'derm_landuse': 'hidden field', 'house_no': 'hidden field', 'street_name': 'hidden field', 'street_type': 'hidden field', 'road_name': 'hidden field', 'locality': 'hidden field', 'address': 'inline label - always visible', 'legal_area': 'hidden field', 'full_address': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_TopBranyanParcelsparcels_lotplan_dissolved_with_address_6.set('fieldLabels', {'fid': 'no label', 'LOTPLAN': 'no label', 'area_ha': 'no label', 'locality': 'no label', 'local_auth': 'no label', 'address': 'no label', 'NDH': 'no label', 'Lead Link': 'no label', });
lyr_TopLeadBranyanParcels_7.set('fieldLabels', {'fid': 'hidden field', 'Address': 'inline label - always visible', 'Lotplan': 'inline label - always visible', 'Suburb': 'inline label - always visible', 'Gross Ha': 'inline label - always visible', 'NDH': 'inline label - always visible', });
lyr_TopLeadBranyanParcels_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});