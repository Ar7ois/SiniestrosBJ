var size = 0;
var placement = 'point';

var style_Cluster_Siniestros_2 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("Siniestros");
    var labelText = "";
    size = 0;
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    if (value >= 1.000000 && value <= 47.000000) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,255,255,0.631)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(255,245,240,0.631)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 47.000000 && value <= 106.000000) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,255,255,0.631)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(252,190,165,0.631)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 106.000000 && value <= 175.000000) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,255,255,0.631)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(251,112,80,0.631)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 175.000000 && value <= 241.000000) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,255,255,0.631)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(211,32,32,0.631)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 241.000000 && value <= 343.000000) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,255,255,0.631)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(103,0,13,0.631)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    };

    return style;
};
