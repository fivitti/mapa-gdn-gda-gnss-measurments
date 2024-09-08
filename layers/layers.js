var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Punktyharmonogramu_1 = new ol.format.GeoJSON();
var features_Punktyharmonogramu_1 = format_Punktyharmonogramu_1.readFeatures(json_Punktyharmonogramu_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Punktyharmonogramu_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Punktyharmonogramu_1.addFeatures(features_Punktyharmonogramu_1);
var lyr_Punktyharmonogramu_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Punktyharmonogramu_1, 
                style: style_Punktyharmonogramu_1,
                popuplayertitle: "Punkty harmonogramu",
                interactive: true,
                title: '<img src="styles/legend/Punktyharmonogramu_1.png" /> Punkty harmonogramu'
            });
var format_Miejscazatrzyma_2 = new ol.format.GeoJSON();
var features_Miejscazatrzyma_2 = format_Miejscazatrzyma_2.readFeatures(json_Miejscazatrzyma_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Miejscazatrzyma_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Miejscazatrzyma_2.addFeatures(features_Miejscazatrzyma_2);
var lyr_Miejscazatrzyma_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Miejscazatrzyma_2, 
                style: style_Miejscazatrzyma_2,
                popuplayertitle: "Miejsca zatrzymań",
                interactive: true,
                title: '<img src="styles/legend/Miejscazatrzyma_2.png" /> Miejsca zatrzymań'
            });
var group_harmonogramminuty = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "harmonogram-minuty"});
var group_optimal = new ol.layer.Group({
                                layers: [lyr_Punktyharmonogramu_1,lyr_Miejscazatrzyma_2,],
                                fold: "open",
                                title: "optimal"});
var group_worstnonstop = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "worst-nonstop"});

lyr_OSMStandard_0.setVisible(true);lyr_Punktyharmonogramu_1.setVisible(true);lyr_Miejscazatrzyma_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,group_optimal];
lyr_Punktyharmonogramu_1.set('fieldAliases', {'Date': 'Date', 'DOP': 'DOP', 'date_str': 'date_str', });
lyr_Miejscazatrzyma_2.set('fieldAliases', {'Arrive': 'Arrive', 'Depart': 'Depart', 'DurationMin': 'DurationMin', 'date_str': 'date_str', });
lyr_Punktyharmonogramu_1.set('fieldImages', {'Date': 'DateTime', 'DOP': 'TextEdit', 'date_str': 'TextEdit', });
lyr_Miejscazatrzyma_2.set('fieldImages', {'Arrive': 'DateTime', 'Depart': 'DateTime', 'DurationMin': 'Range', 'date_str': 'DateTime', });
lyr_Punktyharmonogramu_1.set('fieldLabels', {'Date': 'header label - always visible', 'DOP': 'header label - always visible', 'date_str': 'hidden field', });
lyr_Miejscazatrzyma_2.set('fieldLabels', {'Arrive': 'header label - always visible', 'Depart': 'header label - always visible', 'DurationMin': 'header label - always visible', 'date_str': 'hidden field', });
lyr_Miejscazatrzyma_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});