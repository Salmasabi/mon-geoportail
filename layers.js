var wms_layers = [];


        var lyr_googlehybrid_0 = new ol.layer.Tile({
            'title': 'google hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_RegionGeo_1 = new ol.format.GeoJSON();
var features_RegionGeo_1 = format_RegionGeo_1.readFeatures(json_RegionGeo_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RegionGeo_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RegionGeo_1.addFeatures(features_RegionGeo_1);
var lyr_RegionGeo_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RegionGeo_1, 
                style: style_RegionGeo_1,
                popuplayertitle: 'RegionGeo',
                interactive: true,
    title: 'RegionGeo<br />\
    <img src="styles/legend/RegionGeo_1_0.png" /> 0 - 546<br />\
    <img src="styles/legend/RegionGeo_1_1.png" /> 546 - 1091<br />\
    <img src="styles/legend/RegionGeo_1_2.png" /> 1091 - 1637<br />\
    <img src="styles/legend/RegionGeo_1_3.png" /> 1637 - 2182<br />\
    <img src="styles/legend/RegionGeo_1_4.png" /> 2182 - 2728<br />\
    <img src="styles/legend/RegionGeo_1_5.png" /> 2728 - 3273<br />'
        });
var format_point_2 = new ol.format.GeoJSON();
var features_point_2 = format_point_2.readFeatures(json_point_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_point_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_point_2.addFeatures(features_point_2);
var lyr_point_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_point_2, 
                style: style_point_2,
                popuplayertitle: 'point',
                interactive: true,
                title: '<img src="styles/legend/point_2.png" /> point'
            });

lyr_googlehybrid_0.setVisible(true);lyr_RegionGeo_1.setVisible(true);lyr_point_2.setVisible(true);
var layersList = [lyr_googlehybrid_0,lyr_RegionGeo_1,lyr_point_2];
lyr_RegionGeo_1.set('fieldAliases', {'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'REGION': 'REGION', 'CODE_REGIO': 'CODE_REGIO', 'Artisanale': 'Artisanale', 'Côtiere': 'Côtiere', 'Hauturiere': 'Hauturiere', 'Jointure_Visite de securite des navires': 'Jointure_Visite de securite des navires', 'Jointure_Evenement de mer': 'Jointure_Evenement de mer', });
lyr_point_2.set('fieldAliases', {'fid': 'fid', 'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'REGION': 'REGION', 'CODE_REGIO': 'CODE_REGIO', 'Artisanale': 'Artisanale', 'Côtiere': 'Côtiere', 'Hauturiere': 'Hauturiere', });
lyr_RegionGeo_1.set('fieldImages', {'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'REGION': 'TextEdit', 'CODE_REGIO': 'Range', 'Artisanale': 'Range', 'Côtiere': 'Range', 'Hauturiere': 'Range', 'Jointure_Visite de securite des navires': 'Range', 'Jointure_Evenement de mer': 'Range', });
lyr_point_2.set('fieldImages', {'fid': 'TextEdit', 'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'REGION': 'TextEdit', 'CODE_REGIO': 'Range', 'Artisanale': 'Range', 'Côtiere': 'Range', 'Hauturiere': 'Range', });
lyr_RegionGeo_1.set('fieldLabels', {'AREA': 'no label', 'PERIMETER': 'no label', 'REGION': 'inline label - always visible', 'CODE_REGIO': 'no label', 'Artisanale': 'inline label - always visible', 'Côtiere': 'inline label - always visible', 'Hauturiere': 'inline label - always visible', 'Jointure_Visite de securite des navires': 'inline label - always visible', 'Jointure_Evenement de mer': 'inline label - always visible', });
lyr_point_2.set('fieldLabels', {'fid': 'no label', 'AREA': 'no label', 'PERIMETER': 'no label', 'REGION': 'inline label - always visible', 'CODE_REGIO': 'no label', 'Artisanale': 'inline label - always visible', 'Côtiere': 'inline label - always visible', 'Hauturiere': 'inline label - always visible', });
lyr_point_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});