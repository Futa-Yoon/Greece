var wms_layers = [];

var format__0 = new ol.format.GeoJSON();
var features__0 = format__0.readFeatures(json__0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__0.addFeatures(features__0);
var lyr__0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__0, 
                style: style__0,
                popuplayertitle: "границы страны",
                interactive: true,
                title: '<img src="styles/legend/_0.png" /> границы страны'
            });
var format__1 = new ol.format.GeoJSON();
var features__1 = format__1.readFeatures(json__1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__1.addFeatures(features__1);
var lyr__1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__1, 
                style: style__1,
                popuplayertitle: "университеты",
                interactive: true,
    title: 'университеты<br />\
    <img src="styles/legend/_1_0.png" /> 1 - 1<br />\
    <img src="styles/legend/_1_1.png" /> 1 - 11<br />\
    <img src="styles/legend/_1_2.png" /> 11 - 27<br />'
        });
var format__2 = new ol.format.GeoJSON();
var features__2 = format__2.readFeatures(json__2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__2.addFeatures(features__2);
var lyr__2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__2, 
                style: style__2,
                popuplayertitle: "рестораны",
                interactive: true,
    title: 'рестораны<br />\
    <img src="styles/legend/_2_0.png" /> 28 - 28<br />\
    <img src="styles/legend/_2_1.png" /> 28 - 337<br />\
    <img src="styles/legend/_2_2.png" /> 337 - 742<br />\
    <img src="styles/legend/_2_3.png" /> 742 - 2961<br />\
    <img src="styles/legend/_2_4.png" /> 2961 - 6326<br />'
        });

lyr__0.setVisible(true);lyr__1.setVisible(true);lyr__2.setVisible(true);
var layersList = [lyr__0,lyr__1,lyr__2];
lyr__0.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'featurecla': 'featurecla', 'LEVEL': 'LEVEL', 'TYPE': 'TYPE', 'FORMAL_EN': 'FORMAL_EN', 'FORMAL_FR': 'FORMAL_FR', 'POP_EST': 'POP_EST', 'POP_RANK': 'POP_RANK', 'GDP_MD_EST': 'GDP_MD_EST', 'POP_YEAR': 'POP_YEAR', 'LASTCENSUS': 'LASTCENSUS', 'GDP_YEAR': 'GDP_YEAR', 'ECONOMY': 'ECONOMY', 'INCOME_GRP': 'INCOME_GRP', 'FIPS_10_': 'FIPS_10_', 'ISO_A2': 'ISO_A2', 'ISO_A3': 'ISO_A3', 'ISO_A3_EH': 'ISO_A3_EH', 'ISO_N3': 'ISO_N3', 'UN_A3': 'UN_A3', 'WB_A2': 'WB_A2', 'WB_A3': 'WB_A3', 'CONTINENT': 'CONTINENT', 'REGION_UN': 'REGION_UN', 'SUBREGION': 'SUBREGION', 'REGION_WB': 'REGION_WB', 'NAME_AR': 'NAME_AR', 'NAME_BN': 'NAME_BN', 'NAME_DE': 'NAME_DE', 'NAME_EN': 'NAME_EN', 'NAME_ES': 'NAME_ES', 'NAME_FR': 'NAME_FR', 'NAME_EL': 'NAME_EL', 'NAME_HI': 'NAME_HI', 'NAME_HU': 'NAME_HU', 'NAME_ID': 'NAME_ID', 'NAME_IT': 'NAME_IT', 'NAME_JA': 'NAME_JA', 'NAME_KO': 'NAME_KO', 'NAME_NL': 'NAME_NL', 'NAME_PL': 'NAME_PL', 'NAME_PT': 'NAME_PT', 'NAME_RU': 'NAME_RU', 'NAME_SV': 'NAME_SV', 'NAME_TR': 'NAME_TR', 'NAME_VI': 'NAME_VI', 'NAME_ZH': 'NAME_ZH', 'WB_NAME': 'WB_NAME', 'WB_RULES': 'WB_RULES', 'WB_REGION': 'WB_REGION', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr__1.set('fieldAliases', {'id': 'id', 'name': 'name', 'Y (широта)': 'Y (широта)', 'X (долгота': 'X (долгота', 'population': 'population', 'restaurant': 'restaurant', 'university': 'university', });
lyr__2.set('fieldAliases', {'id': 'id', 'name': 'name', 'Y (широта)': 'Y (широта)', 'X (долгота': 'X (долгота', 'population': 'population', 'restaurant': 'restaurant', 'university': 'university', });
lyr__0.set('fieldImages', {'OBJECTID': 'TextEdit', 'featurecla': 'TextEdit', 'LEVEL': 'Range', 'TYPE': 'TextEdit', 'FORMAL_EN': 'TextEdit', 'FORMAL_FR': 'TextEdit', 'POP_EST': 'TextEdit', 'POP_RANK': 'Range', 'GDP_MD_EST': 'TextEdit', 'POP_YEAR': 'Range', 'LASTCENSUS': 'Range', 'GDP_YEAR': 'Range', 'ECONOMY': 'TextEdit', 'INCOME_GRP': 'TextEdit', 'FIPS_10_': 'TextEdit', 'ISO_A2': 'TextEdit', 'ISO_A3': 'TextEdit', 'ISO_A3_EH': 'TextEdit', 'ISO_N3': 'TextEdit', 'UN_A3': 'TextEdit', 'WB_A2': 'TextEdit', 'WB_A3': 'TextEdit', 'CONTINENT': 'TextEdit', 'REGION_UN': 'TextEdit', 'SUBREGION': 'TextEdit', 'REGION_WB': 'TextEdit', 'NAME_AR': 'TextEdit', 'NAME_BN': 'TextEdit', 'NAME_DE': 'TextEdit', 'NAME_EN': 'TextEdit', 'NAME_ES': 'TextEdit', 'NAME_FR': 'TextEdit', 'NAME_EL': 'TextEdit', 'NAME_HI': 'TextEdit', 'NAME_HU': 'TextEdit', 'NAME_ID': 'TextEdit', 'NAME_IT': 'TextEdit', 'NAME_JA': 'TextEdit', 'NAME_KO': 'TextEdit', 'NAME_NL': 'TextEdit', 'NAME_PL': 'TextEdit', 'NAME_PT': 'TextEdit', 'NAME_RU': 'TextEdit', 'NAME_SV': 'TextEdit', 'NAME_TR': 'TextEdit', 'NAME_VI': 'TextEdit', 'NAME_ZH': 'TextEdit', 'WB_NAME': 'TextEdit', 'WB_RULES': 'TextEdit', 'WB_REGION': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr__1.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', 'Y (широта)': 'TextEdit', 'X (долгота': 'TextEdit', 'population': 'TextEdit', 'restaurant': 'TextEdit', 'university': 'TextEdit', });
lyr__2.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', 'Y (широта)': 'TextEdit', 'X (долгота': 'TextEdit', 'population': 'TextEdit', 'restaurant': 'TextEdit', 'university': 'TextEdit', });
lyr__0.set('fieldLabels', {'OBJECTID': 'hidden field', 'featurecla': 'hidden field', 'LEVEL': 'hidden field', 'TYPE': 'hidden field', 'FORMAL_EN': 'hidden field', 'FORMAL_FR': 'hidden field', 'POP_EST': 'hidden field', 'POP_RANK': 'hidden field', 'GDP_MD_EST': 'hidden field', 'POP_YEAR': 'hidden field', 'LASTCENSUS': 'hidden field', 'GDP_YEAR': 'hidden field', 'ECONOMY': 'hidden field', 'INCOME_GRP': 'hidden field', 'FIPS_10_': 'hidden field', 'ISO_A2': 'hidden field', 'ISO_A3': 'hidden field', 'ISO_A3_EH': 'hidden field', 'ISO_N3': 'hidden field', 'UN_A3': 'hidden field', 'WB_A2': 'hidden field', 'WB_A3': 'hidden field', 'CONTINENT': 'no label', 'REGION_UN': 'hidden field', 'SUBREGION': 'hidden field', 'REGION_WB': 'hidden field', 'NAME_AR': 'hidden field', 'NAME_BN': 'hidden field', 'NAME_DE': 'hidden field', 'NAME_EN': 'hidden field', 'NAME_ES': 'hidden field', 'NAME_FR': 'hidden field', 'NAME_EL': 'hidden field', 'NAME_HI': 'hidden field', 'NAME_HU': 'hidden field', 'NAME_ID': 'hidden field', 'NAME_IT': 'hidden field', 'NAME_JA': 'hidden field', 'NAME_KO': 'hidden field', 'NAME_NL': 'hidden field', 'NAME_PL': 'hidden field', 'NAME_PT': 'hidden field', 'NAME_RU': 'no label', 'NAME_SV': 'hidden field', 'NAME_TR': 'hidden field', 'NAME_VI': 'hidden field', 'NAME_ZH': 'hidden field', 'WB_NAME': 'hidden field', 'WB_RULES': 'hidden field', 'WB_REGION': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', });
lyr__1.set('fieldLabels', {'id': 'hidden field', 'name': 'no label', 'Y (широта)': 'header label - visible with data', 'X (долгота': 'header label - visible with data', 'population': 'header label - visible with data', 'restaurant': 'hidden field', 'university': 'no label', });
lyr__2.set('fieldLabels', {'id': 'hidden field', 'name': 'no label', 'Y (широта)': 'header label - visible with data', 'X (долгота': 'header label - visible with data', 'population': 'header label - visible with data', 'restaurant': 'no label', 'university': 'hidden field', });
lyr__2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});