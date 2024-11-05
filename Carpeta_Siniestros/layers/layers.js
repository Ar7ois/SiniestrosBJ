var wms_layers = [];

var format_colonias_iecm_0 = new ol.format.GeoJSON();
var features_colonias_iecm_0 = format_colonias_iecm_0.readFeatures(json_colonias_iecm_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_colonias_iecm_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_colonias_iecm_0.addFeatures(features_colonias_iecm_0);
var lyr_colonias_iecm_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_colonias_iecm_0, 
                style: style_colonias_iecm_0,
                popuplayertitle: "colonias_iecm",
                interactive: true,
                title: '<img src="styles/legend/colonias_iecm_0.png" /> colonias_iecm'
            });
var format_AlcaldasUTM_1 = new ol.format.GeoJSON();
var features_AlcaldasUTM_1 = format_AlcaldasUTM_1.readFeatures(json_AlcaldasUTM_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AlcaldasUTM_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AlcaldasUTM_1.addFeatures(features_AlcaldasUTM_1);
var lyr_AlcaldasUTM_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AlcaldasUTM_1, 
                style: style_AlcaldasUTM_1,
                popuplayertitle: "AlcaldíasUTM",
                interactive: true,
                title: '<img src="styles/legend/AlcaldasUTM_1.png" /> AlcaldíasUTM'
            });
var format_Cluster_Siniestros_2 = new ol.format.GeoJSON();
var features_Cluster_Siniestros_2 = format_Cluster_Siniestros_2.readFeatures(json_Cluster_Siniestros_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cluster_Siniestros_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cluster_Siniestros_2.addFeatures(features_Cluster_Siniestros_2);
var lyr_Cluster_Siniestros_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cluster_Siniestros_2, 
                style: style_Cluster_Siniestros_2,
                popuplayertitle: "Cluster_Siniestros",
                interactive: true,
    title: 'Cluster_Siniestros<br />\
    <img src="styles/legend/Cluster_Siniestros_2_0.png" /> 1 - 47<br />\
    <img src="styles/legend/Cluster_Siniestros_2_1.png" /> 47 - 106<br />\
    <img src="styles/legend/Cluster_Siniestros_2_2.png" /> 106 - 175<br />\
    <img src="styles/legend/Cluster_Siniestros_2_3.png" /> 175 - 241<br />\
    <img src="styles/legend/Cluster_Siniestros_2_4.png" /> 241 - 343<br />'
        });
var format_BJ_24_3 = new ol.format.GeoJSON();
var features_BJ_24_3 = format_BJ_24_3.readFeatures(json_BJ_24_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BJ_24_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BJ_24_3.addFeatures(features_BJ_24_3);
var lyr_BJ_24_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BJ_24_3, 
                style: style_BJ_24_3,
                popuplayertitle: "BJ_24",
                interactive: true,
                title: '<img src="styles/legend/BJ_24_3.png" /> BJ_24'
            });
var format_S_23_4 = new ol.format.GeoJSON();
var features_S_23_4 = format_S_23_4.readFeatures(json_S_23_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_S_23_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_S_23_4.addFeatures(features_S_23_4);cluster_S_23_4 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_S_23_4
});
var lyr_S_23_4 = new ol.layer.Vector({
                declutter: false,
                source:cluster_S_23_4, 
                style: style_S_23_4,
                popuplayertitle: "S_23",
                interactive: true,
                title: '<img src="styles/legend/S_23_4.png" /> S_23'
            });

lyr_colonias_iecm_0.setVisible(true);lyr_AlcaldasUTM_1.setVisible(true);lyr_Cluster_Siniestros_2.setVisible(true);lyr_BJ_24_3.setVisible(true);lyr_S_23_4.setVisible(true);
var layersList = [lyr_colonias_iecm_0,lyr_AlcaldasUTM_1,lyr_Cluster_Siniestros_2,lyr_BJ_24_3,lyr_S_23_4];
lyr_colonias_iecm_0.set('fieldAliases', {'NOMDT': 'NOMDT', 'NOMUT': 'NOMUT', });
lyr_AlcaldasUTM_1.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'NOMGEO': 'NOMGEO', });
lyr_Cluster_Siniestros_2.set('fieldAliases', {'id': 'id', 'left': 'left', 'top': 'top', 'right': 'right', 'bottom': 'bottom', 'row_index': 'row_index', 'col_index': 'col_index', 'Siniestros': 'Siniestros', });
lyr_BJ_24_3.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'NOMGEO': 'NOMGEO', });
lyr_S_23_4.set('fieldAliases', {'folio': 'folio', 'fecha_crea': 'fecha_crea', 'hora_creac': 'hora_creac', 'dia_semana': 'dia_semana', 'tipo_incid': 'Tipo de siniestro', 'incidente_': 'Acontecimiento', 'alcaldia_i': 'Alcaldía', 'colonia_ca': 'Colonia', 'longitud': 'longitud', 'latitud': 'latitud', });
lyr_colonias_iecm_0.set('fieldImages', {'NOMDT': 'TextEdit', 'NOMUT': 'TextEdit', });
lyr_AlcaldasUTM_1.set('fieldImages', {'CVEGEO': 'TextEdit', 'NOMGEO': 'TextEdit', });
lyr_Cluster_Siniestros_2.set('fieldImages', {'id': 'TextEdit', 'left': 'TextEdit', 'top': 'TextEdit', 'right': 'TextEdit', 'bottom': 'TextEdit', 'row_index': 'TextEdit', 'col_index': 'TextEdit', 'Siniestros': 'TextEdit', });
lyr_BJ_24_3.set('fieldImages', {'CVEGEO': 'TextEdit', 'NOMGEO': 'TextEdit', });
lyr_S_23_4.set('fieldImages', {'folio': 'TextEdit', 'fecha_crea': 'TextEdit', 'hora_creac': 'TextEdit', 'dia_semana': 'TextEdit', 'tipo_incid': 'TextEdit', 'incidente_': 'TextEdit', 'alcaldia_i': 'TextEdit', 'colonia_ca': 'TextEdit', 'longitud': 'TextEdit', 'latitud': 'TextEdit', });
lyr_colonias_iecm_0.set('fieldLabels', {'NOMDT': 'no label', 'NOMUT': 'no label', });
lyr_AlcaldasUTM_1.set('fieldLabels', {'CVEGEO': 'no label', 'NOMGEO': 'no label', });
lyr_Cluster_Siniestros_2.set('fieldLabels', {'id': 'hidden field', 'left': 'hidden field', 'top': 'hidden field', 'right': 'hidden field', 'bottom': 'hidden field', 'row_index': 'hidden field', 'col_index': 'hidden field', 'Siniestros': 'inline label - always visible', });
lyr_BJ_24_3.set('fieldLabels', {'CVEGEO': 'no label', 'NOMGEO': 'no label', });
lyr_S_23_4.set('fieldLabels', {'folio': 'hidden field', 'fecha_crea': 'hidden field', 'hora_creac': 'hidden field', 'dia_semana': 'hidden field', 'tipo_incid': 'inline label - always visible', 'incidente_': 'inline label - always visible', 'alcaldia_i': 'inline label - always visible', 'colonia_ca': 'inline label - always visible', 'longitud': 'hidden field', 'latitud': 'hidden field', });
lyr_S_23_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});