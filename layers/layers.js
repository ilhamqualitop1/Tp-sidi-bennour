ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:26191").setExtent([215838.183311, 247310.278953, 216152.774787, 247527.544953]);
var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_LimitecarrireZogaria_1 = new ol.format.GeoJSON();
var features_LimitecarrireZogaria_1 = format_LimitecarrireZogaria_1.readFeatures(json_LimitecarrireZogaria_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:26191'});
var jsonSource_LimitecarrireZogaria_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimitecarrireZogaria_1.addFeatures(features_LimitecarrireZogaria_1);
var lyr_LimitecarrireZogaria_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LimitecarrireZogaria_1, 
                style: style_LimitecarrireZogaria_1,
                popuplayertitle: 'Limite carrière Zogaria',
                interactive: true,
                title: '<img src="styles/legend/LimitecarrireZogaria_1.png" /> Limite carrière Zogaria'
            });
var format_LimitecarrireBenyeffou_2 = new ol.format.GeoJSON();
var features_LimitecarrireBenyeffou_2 = format_LimitecarrireBenyeffou_2.readFeatures(json_LimitecarrireBenyeffou_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:26191'});
var jsonSource_LimitecarrireBenyeffou_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimitecarrireBenyeffou_2.addFeatures(features_LimitecarrireBenyeffou_2);
var lyr_LimitecarrireBenyeffou_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LimitecarrireBenyeffou_2, 
                style: style_LimitecarrireBenyeffou_2,
                popuplayertitle: 'Limite carrière Ben yeffou',
                interactive: true,
                title: '<img src="styles/legend/LimitecarrireBenyeffou_2.png" /> Limite carrière Ben yeffou'
            });
var format_LimitecarrireBouchane_3 = new ol.format.GeoJSON();
var features_LimitecarrireBouchane_3 = format_LimitecarrireBouchane_3.readFeatures(json_LimitecarrireBouchane_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:26191'});
var jsonSource_LimitecarrireBouchane_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimitecarrireBouchane_3.addFeatures(features_LimitecarrireBouchane_3);
var lyr_LimitecarrireBouchane_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LimitecarrireBouchane_3, 
                style: style_LimitecarrireBouchane_3,
                popuplayertitle: 'Limite carrière Bouchane',
                interactive: true,
                title: '<img src="styles/legend/LimitecarrireBouchane_3.png" /> Limite carrière Bouchane'
            });
var format_LimitecarrireDayaelbayda_4 = new ol.format.GeoJSON();
var features_LimitecarrireDayaelbayda_4 = format_LimitecarrireDayaelbayda_4.readFeatures(json_LimitecarrireDayaelbayda_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:26191'});
var jsonSource_LimitecarrireDayaelbayda_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimitecarrireDayaelbayda_4.addFeatures(features_LimitecarrireDayaelbayda_4);
var lyr_LimitecarrireDayaelbayda_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LimitecarrireDayaelbayda_4, 
                style: style_LimitecarrireDayaelbayda_4,
                popuplayertitle: 'Limite carrière Daya el bayda',
                interactive: true,
                title: '<img src="styles/legend/LimitecarrireDayaelbayda_4.png" /> Limite carrière Daya el bayda'
            });
var format_LimitecarrireGuerrando_5 = new ol.format.GeoJSON();
var features_LimitecarrireGuerrando_5 = format_LimitecarrireGuerrando_5.readFeatures(json_LimitecarrireGuerrando_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:26191'});
var jsonSource_LimitecarrireGuerrando_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimitecarrireGuerrando_5.addFeatures(features_LimitecarrireGuerrando_5);
var lyr_LimitecarrireGuerrando_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LimitecarrireGuerrando_5, 
                style: style_LimitecarrireGuerrando_5,
                popuplayertitle: 'Limite carrière Guerrando',
                interactive: true,
                title: '<img src="styles/legend/LimitecarrireGuerrando_5.png" /> Limite carrière Guerrando'
            });
var format_LimitecarrireMoustaphahoud_6 = new ol.format.GeoJSON();
var features_LimitecarrireMoustaphahoud_6 = format_LimitecarrireMoustaphahoud_6.readFeatures(json_LimitecarrireMoustaphahoud_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:26191'});
var jsonSource_LimitecarrireMoustaphahoud_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimitecarrireMoustaphahoud_6.addFeatures(features_LimitecarrireMoustaphahoud_6);
var lyr_LimitecarrireMoustaphahoud_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LimitecarrireMoustaphahoud_6, 
                style: style_LimitecarrireMoustaphahoud_6,
                popuplayertitle: 'Limite carrière Moustapha houd',
                interactive: true,
                title: '<img src="styles/legend/LimitecarrireMoustaphahoud_6.png" /> Limite carrière Moustapha houd'
            });
var format_LimitecarrireSocombay_7 = new ol.format.GeoJSON();
var features_LimitecarrireSocombay_7 = format_LimitecarrireSocombay_7.readFeatures(json_LimitecarrireSocombay_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:26191'});
var jsonSource_LimitecarrireSocombay_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimitecarrireSocombay_7.addFeatures(features_LimitecarrireSocombay_7);
var lyr_LimitecarrireSocombay_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LimitecarrireSocombay_7, 
                style: style_LimitecarrireSocombay_7,
                popuplayertitle: 'Limite carrière Socombay',
                interactive: true,
                title: '<img src="styles/legend/LimitecarrireSocombay_7.png" /> Limite carrière Socombay'
            });
var format_LimitecarrireTamda_8 = new ol.format.GeoJSON();
var features_LimitecarrireTamda_8 = format_LimitecarrireTamda_8.readFeatures(json_LimitecarrireTamda_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:26191'});
var jsonSource_LimitecarrireTamda_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimitecarrireTamda_8.addFeatures(features_LimitecarrireTamda_8);
var lyr_LimitecarrireTamda_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LimitecarrireTamda_8, 
                style: style_LimitecarrireTamda_8,
                popuplayertitle: 'Limite carrière Tamda',
                interactive: true,
                title: '<img src="styles/legend/LimitecarrireTamda_8.png" /> Limite carrière Tamda'
            });
var format_LimitecarrireTracotra_9 = new ol.format.GeoJSON();
var features_LimitecarrireTracotra_9 = format_LimitecarrireTracotra_9.readFeatures(json_LimitecarrireTracotra_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:26191'});
var jsonSource_LimitecarrireTracotra_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimitecarrireTracotra_9.addFeatures(features_LimitecarrireTracotra_9);
var lyr_LimitecarrireTracotra_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LimitecarrireTracotra_9, 
                style: style_LimitecarrireTracotra_9,
                popuplayertitle: 'Limite carrière Tracotra',
                interactive: true,
                title: '<img src="styles/legend/LimitecarrireTracotra_9.png" /> Limite carrière Tracotra'
            });
var format_Limitecarrirezmaneelkhir_10 = new ol.format.GeoJSON();
var features_Limitecarrirezmaneelkhir_10 = format_Limitecarrirezmaneelkhir_10.readFeatures(json_Limitecarrirezmaneelkhir_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:26191'});
var jsonSource_Limitecarrirezmaneelkhir_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Limitecarrirezmaneelkhir_10.addFeatures(features_Limitecarrirezmaneelkhir_10);
var lyr_Limitecarrirezmaneelkhir_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Limitecarrirezmaneelkhir_10, 
                style: style_Limitecarrirezmaneelkhir_10,
                popuplayertitle: 'Limite carrière zmane elkhir',
                interactive: true,
                title: '<img src="styles/legend/Limitecarrirezmaneelkhir_10.png" /> Limite carrière zmane elkhir'
            });

lyr_GoogleHybrid_0.setVisible(true);lyr_LimitecarrireZogaria_1.setVisible(true);lyr_LimitecarrireBenyeffou_2.setVisible(true);lyr_LimitecarrireBouchane_3.setVisible(true);lyr_LimitecarrireDayaelbayda_4.setVisible(true);lyr_LimitecarrireGuerrando_5.setVisible(true);lyr_LimitecarrireMoustaphahoud_6.setVisible(true);lyr_LimitecarrireSocombay_7.setVisible(true);lyr_LimitecarrireTamda_8.setVisible(true);lyr_LimitecarrireTracotra_9.setVisible(true);lyr_Limitecarrirezmaneelkhir_10.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_LimitecarrireZogaria_1,lyr_LimitecarrireBenyeffou_2,lyr_LimitecarrireBouchane_3,lyr_LimitecarrireDayaelbayda_4,lyr_LimitecarrireGuerrando_5,lyr_LimitecarrireMoustaphahoud_6,lyr_LimitecarrireSocombay_7,lyr_LimitecarrireTamda_8,lyr_LimitecarrireTracotra_9,lyr_Limitecarrirezmaneelkhir_10];
lyr_LimitecarrireZogaria_1.set('fieldAliases', {'Layer': 'Layer', 'Exploitant': 'Exploitant', 'X': 'X', 'Y': 'Y', 'Remblais 2': 'Remblais 2', 'Deblais 2': 'Deblais 2', '3 Date 3': '3 Date 3', 'Remblais 3': 'Remblais 3', 'Deblais 3': 'Deblais 3', 'Remb cumu3': 'Remb cumu3', 'Debl cumu3': 'Debl cumu3', 'Surface': 'Surface', 'Date 1': 'Date 1', 'Date 2': 'Date 2', 'Date 3': 'Date 3', 'Date 4': 'Date 4', 'Date 5': 'Date 5', 'Remblais 4': 'Remblais 4', 'Deblais 4': 'Deblais 4', 'Debl cumu4': 'Debl cumu4', 'Remblais 5': 'Remblais 5', 'Deblais 5': 'Deblais 5', 'Remb cumu5': 'Remb cumu5', 'Debl cumu5': 'Debl cumu5', 'Remb cumu4': 'Remb cumu4', });
lyr_LimitecarrireBenyeffou_2.set('fieldAliases', {'Layer': 'Layer', 'Exploitant': 'Exploitant', 'X': 'X', 'Y': 'Y', 'Remblais 3': 'Remblais 3', 'Deblais 3': 'Deblais 3', 'Remblais 2': 'Remblais 2', 'Deblais 2': 'Deblais 2', 'Rem cumu 3': 'Rem cumu 3', 'Deb cumu 3': 'Deb cumu 3', 'Surface': 'Surface', 'Date 1': 'Date 1', 'Date 2': 'Date 2', 'Date 3': 'Date 3', 'Date 4': 'Date 4', 'Date 5': 'Date 5', 'Remblais 4': 'Remblais 4', 'Deblais 4': 'Deblais 4', 'Remb cumu4': 'Remb cumu4', 'Debl cumu4': 'Debl cumu4', 'Remblais 5': 'Remblais 5', 'Deblais 5': 'Deblais 5', 'Remb cumu5': 'Remb cumu5', 'Debl cumu5': 'Debl cumu5', });
lyr_LimitecarrireBouchane_3.set('fieldAliases', {'Layer': 'Layer', 'Exploitant': 'Exploitant', 'X': 'X', 'Y': 'Y', 'Remblais 2': 'Remblais 2', 'Deblais 2': 'Deblais 2', 'Date 3': 'Date 3', 'Remb cumu3': 'Remb cumu3', 'Deb cumu3': 'Deb cumu3', 'Remblais 3': 'Remblais 3', 'Deblais 3': 'Deblais 3', 'Surface': 'Surface', 'Date 1': 'Date 1', 'Date 2': 'Date 2', 'Date 4': 'Date 4', 'Date 5': 'Date 5', 'Remblais 4': 'Remblais 4', 'Deblais 4': 'Deblais 4', 'Remb cumu4': 'Remb cumu4', 'Debl cumu4': 'Debl cumu4', 'Remblais 5': 'Remblais 5', 'Deblais 5': 'Deblais 5', 'Remb cumu5': 'Remb cumu5', 'Debl cumu5': 'Debl cumu5', });
lyr_LimitecarrireDayaelbayda_4.set('fieldAliases', {'Layer': 'Layer', 'Exploitant': 'Exploitant', 'X': 'X', 'Y': 'Y', 'Remblais 2': 'Remblais 2', 'Deblais 2': 'Deblais 2', 'Date 3': 'Date 3', 'Remblais 3': 'Remblais 3', 'Deblais 3': 'Deblais 3', 'Rem cumu 3': 'Rem cumu 3', 'Deb cumu 3': 'Deb cumu 3', 'Surface': 'Surface', 'Date 1': 'Date 1', 'Date 2': 'Date 2', 'Date 4': 'Date 4', 'Date 5': 'Date 5', 'Remblais 4': 'Remblais 4', 'Deblais 4': 'Deblais 4', 'Rem cumu4': 'Rem cumu4', 'Deb cumu4': 'Deb cumu4', 'Remblais 5': 'Remblais 5', 'Deblais 5': 'Deblais 5', 'Remb cumu5': 'Remb cumu5', 'Debl cumu5': 'Debl cumu5', });
lyr_LimitecarrireGuerrando_5.set('fieldAliases', {'Layer': 'Layer', 'Exploitant': 'Exploitant', 'X': 'X', 'Y': 'Y', 'Remblais 2': 'Remblais 2', 'Deblais 2': 'Deblais 2', 'Remblais 3': 'Remblais 3', 'Deblais 3': 'Deblais 3', 'Rem cum 3': 'Rem cum 3', 'Debl cum 3': 'Debl cum 3', 'Surface': 'Surface', 'Date 1': 'Date 1', 'Date 2': 'Date 2', 'Date 3': 'Date 3', 'Date 4': 'Date 4', 'Date 5': 'Date 5', 'Remblais 4': 'Remblais 4', 'Deblais 4': 'Deblais 4', 'Remb cumu4': 'Remb cumu4', 'Debl cumu4': 'Debl cumu4', 'Remblais 5': 'Remblais 5', 'Deblais 5': 'Deblais 5', 'Debl cumu5': 'Debl cumu5', 'Remb cumu5': 'Remb cumu5', });
lyr_LimitecarrireMoustaphahoud_6.set('fieldAliases', {'Layer': 'Layer', 'Exploitant': 'Exploitant', 'Remblais 2': 'Remblais 2', 'Deblais 2': 'Deblais 2', 'Date 3': 'Date 3', 'Remblais 3': 'Remblais 3', 'Deblais 3': 'Deblais 3', 'Rem cumu 3': 'Rem cumu 3', 'Deb cumu 3': 'Deb cumu 3', 'X': 'X', 'Y': 'Y', 'Surface': 'Surface', 'Date 1': 'Date 1', 'Date 2': 'Date 2', 'Date 4': 'Date 4', 'Date 5': 'Date 5', 'Remblais 4': 'Remblais 4', 'Deblais 4': 'Deblais 4', 'Remb cumu4': 'Remb cumu4', 'Debl cumu4': 'Debl cumu4', 'Remblais 5': 'Remblais 5', 'Deblais 5': 'Deblais 5', 'Debl cumu5': 'Debl cumu5', 'Remb cumu5': 'Remb cumu5', });
lyr_LimitecarrireSocombay_7.set('fieldAliases', {'Layer': 'Layer', 'Exploitant': 'Exploitant', 'X': 'X', 'Y': 'Y', 'Remblais 2': 'Remblais 2', 'Deblais 2': 'Deblais 2', 'Remblais 3': 'Remblais 3', 'Deblais 3': 'Deblais 3', 'Remb cum 3': 'Remb cum 3', 'Debl cumu3': 'Debl cumu3', 'Surface': 'Surface', 'Date 1': 'Date 1', 'Date 2': 'Date 2', 'Date 3': 'Date 3', 'Date 4': 'Date 4', 'Date 5': 'Date 5', 'Remblais 4': 'Remblais 4', 'Deblais 4': 'Deblais 4', 'Remb cumu4': 'Remb cumu4', 'Debl cumu4': 'Debl cumu4', 'Remblais 5': 'Remblais 5', 'Deblais 5': 'Deblais 5', 'Remb cumu5': 'Remb cumu5', 'Debl cumu5': 'Debl cumu5', });
lyr_LimitecarrireTamda_8.set('fieldAliases', {'Layer': 'Layer', 'Exploitant': 'Exploitant', 'X': 'X', 'Y': 'Y', 'Remblais 2': 'Remblais 2', 'Deblais 2': 'Deblais 2', 'Remblais 3': 'Remblais 3', 'Deblais 3': 'Deblais 3', 'Remb cumu3': 'Remb cumu3', 'Debl cumu3': 'Debl cumu3', 'Surface': 'Surface', 'Date 1': 'Date 1', 'Date 2': 'Date 2', 'Date 3': 'Date 3', 'Date 4': 'Date 4', 'Date 5': 'Date 5', 'Remblais 4': 'Remblais 4', 'Deblais 4': 'Deblais 4', 'Remb cumu4': 'Remb cumu4', 'Debl cumu4': 'Debl cumu4', 'Remblais 5': 'Remblais 5', 'Deblais 5': 'Deblais 5', 'Remb cumu5': 'Remb cumu5', 'Debl cumu5': 'Debl cumu5', });
lyr_LimitecarrireTracotra_9.set('fieldAliases', {'Layer': 'Layer', 'Exploitant': 'Exploitant', 'X': 'X', 'Y': 'Y', 'Remblais 2': 'Remblais 2', 'Deblais 2': 'Deblais 2', 'Remblais 3': 'Remblais 3', 'Deblais 3': 'Deblais 3', 'Remb cumu3': 'Remb cumu3', 'Debl cumu3': 'Debl cumu3', 'Surface': 'Surface', 'Date 1': 'Date 1', 'Date 2': 'Date 2', 'Date 3': 'Date 3', 'Date 4': 'Date 4', 'Date 5': 'Date 5', 'Remblais 4': 'Remblais 4', 'Deblais 4': 'Deblais 4', 'Remb cumu4': 'Remb cumu4', 'Debl cumu4': 'Debl cumu4', 'Remblais 5': 'Remblais 5', 'Deblais 5': 'Deblais 5', 'Remb cumu5': 'Remb cumu5', 'Debl cumu5': 'Debl cumu5', });
lyr_Limitecarrirezmaneelkhir_10.set('fieldAliases', {'Layer': 'Layer', 'Exploitant': 'Exploitant', 'X': 'X', 'Y': 'Y', 'Remblais 2': 'Remblais 2', 'Deblais 2': 'Deblais 2', 'Remblais 3': 'Remblais 3', 'Deblais 3': 'Deblais 3', 'Remb cumu3': 'Remb cumu3', 'Debl cumu3': 'Debl cumu3', 'Surface': 'Surface', 'Date 1': 'Date 1', 'Date 2': 'Date 2', 'Date 3': 'Date 3', 'Date 4': 'Date 4', 'Date 5': 'Date 5', 'Remblais 4': 'Remblais 4', 'Deblais 4': 'Deblais 4', 'Remb cumu4': 'Remb cumu4', 'Debl cumu4': 'Debl cumu4', 'Remblais 5': 'Remblais 5', 'Deblais 5': 'Deblais 5', 'Remb cumu5': 'Remb cumu5', 'Debl cumu5': 'Debl cumu5', });
lyr_LimitecarrireZogaria_1.set('fieldImages', {'Layer': 'TextEdit', 'Exploitant': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'Remblais 2': 'TextEdit', 'Deblais 2': 'TextEdit', '3 Date 3': 'DateTime', 'Remblais 3': 'TextEdit', 'Deblais 3': 'TextEdit', 'Remb cumu3': 'TextEdit', 'Debl cumu3': 'TextEdit', 'Surface': 'TextEdit', 'Date 1': 'DateTime', 'Date 2': 'DateTime', 'Date 3': 'DateTime', 'Date 4': 'DateTime', 'Date 5': 'DateTime', 'Remblais 4': 'TextEdit', 'Deblais 4': 'TextEdit', 'Debl cumu4': 'TextEdit', 'Remblais 5': 'TextEdit', 'Deblais 5': 'TextEdit', 'Remb cumu5': 'TextEdit', 'Debl cumu5': 'TextEdit', 'Remb cumu4': 'TextEdit', });
lyr_LimitecarrireBenyeffou_2.set('fieldImages', {'Layer': 'TextEdit', 'Exploitant': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'Remblais 3': 'TextEdit', 'Deblais 3': 'TextEdit', 'Remblais 2': 'TextEdit', 'Deblais 2': 'TextEdit', 'Rem cumu 3': 'TextEdit', 'Deb cumu 3': 'TextEdit', 'Surface': 'TextEdit', 'Date 1': 'DateTime', 'Date 2': 'DateTime', 'Date 3': 'DateTime', 'Date 4': 'DateTime', 'Date 5': 'DateTime', 'Remblais 4': 'TextEdit', 'Deblais 4': 'TextEdit', 'Remb cumu4': 'TextEdit', 'Debl cumu4': 'TextEdit', 'Remblais 5': 'TextEdit', 'Deblais 5': 'TextEdit', 'Remb cumu5': 'TextEdit', 'Debl cumu5': 'TextEdit', });
lyr_LimitecarrireBouchane_3.set('fieldImages', {'Layer': 'TextEdit', 'Exploitant': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'Remblais 2': 'TextEdit', 'Deblais 2': 'TextEdit', 'Date 3': 'DateTime', 'Remb cumu3': 'TextEdit', 'Deb cumu3': 'TextEdit', 'Remblais 3': 'TextEdit', 'Deblais 3': 'TextEdit', 'Surface': 'TextEdit', 'Date 1': 'DateTime', 'Date 2': 'DateTime', 'Date 4': 'DateTime', 'Date 5': 'DateTime', 'Remblais 4': 'TextEdit', 'Deblais 4': 'TextEdit', 'Remb cumu4': 'TextEdit', 'Debl cumu4': 'TextEdit', 'Remblais 5': 'TextEdit', 'Deblais 5': 'TextEdit', 'Remb cumu5': 'TextEdit', 'Debl cumu5': 'TextEdit', });
lyr_LimitecarrireDayaelbayda_4.set('fieldImages', {'Layer': 'TextEdit', 'Exploitant': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'Remblais 2': 'TextEdit', 'Deblais 2': 'TextEdit', 'Date 3': 'DateTime', 'Remblais 3': 'TextEdit', 'Deblais 3': 'TextEdit', 'Rem cumu 3': 'TextEdit', 'Deb cumu 3': 'TextEdit', 'Surface': 'TextEdit', 'Date 1': 'DateTime', 'Date 2': 'DateTime', 'Date 4': 'DateTime', 'Date 5': 'DateTime', 'Remblais 4': 'TextEdit', 'Deblais 4': 'TextEdit', 'Rem cumu4': 'TextEdit', 'Deb cumu4': 'TextEdit', 'Remblais 5': 'TextEdit', 'Deblais 5': 'TextEdit', 'Remb cumu5': 'TextEdit', 'Debl cumu5': 'TextEdit', });
lyr_LimitecarrireGuerrando_5.set('fieldImages', {'Layer': 'TextEdit', 'Exploitant': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'Remblais 2': 'TextEdit', 'Deblais 2': 'TextEdit', 'Remblais 3': 'TextEdit', 'Deblais 3': 'TextEdit', 'Rem cum 3': 'TextEdit', 'Debl cum 3': 'TextEdit', 'Surface': 'TextEdit', 'Date 1': 'DateTime', 'Date 2': 'DateTime', 'Date 3': 'DateTime', 'Date 4': 'DateTime', 'Date 5': 'DateTime', 'Remblais 4': 'TextEdit', 'Deblais 4': 'TextEdit', 'Remb cumu4': 'TextEdit', 'Debl cumu4': 'TextEdit', 'Remblais 5': 'TextEdit', 'Deblais 5': 'TextEdit', 'Debl cumu5': 'TextEdit', 'Remb cumu5': 'TextEdit', });
lyr_LimitecarrireMoustaphahoud_6.set('fieldImages', {'Layer': 'TextEdit', 'Exploitant': 'TextEdit', 'Remblais 2': 'TextEdit', 'Deblais 2': 'TextEdit', 'Date 3': 'DateTime', 'Remblais 3': 'TextEdit', 'Deblais 3': 'TextEdit', 'Rem cumu 3': 'TextEdit', 'Deb cumu 3': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'Surface': 'TextEdit', 'Date 1': 'DateTime', 'Date 2': 'DateTime', 'Date 4': 'DateTime', 'Date 5': 'DateTime', 'Remblais 4': 'TextEdit', 'Deblais 4': 'TextEdit', 'Remb cumu4': 'TextEdit', 'Debl cumu4': 'TextEdit', 'Remblais 5': 'TextEdit', 'Deblais 5': 'TextEdit', 'Debl cumu5': 'TextEdit', 'Remb cumu5': 'TextEdit', });
lyr_LimitecarrireSocombay_7.set('fieldImages', {'Layer': 'TextEdit', 'Exploitant': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'Remblais 2': 'TextEdit', 'Deblais 2': 'TextEdit', 'Remblais 3': 'TextEdit', 'Deblais 3': 'TextEdit', 'Remb cum 3': 'TextEdit', 'Debl cumu3': 'TextEdit', 'Surface': 'TextEdit', 'Date 1': 'DateTime', 'Date 2': 'DateTime', 'Date 3': 'DateTime', 'Date 4': 'DateTime', 'Date 5': 'DateTime', 'Remblais 4': 'TextEdit', 'Deblais 4': 'TextEdit', 'Remb cumu4': 'TextEdit', 'Debl cumu4': 'TextEdit', 'Remblais 5': 'TextEdit', 'Deblais 5': 'TextEdit', 'Remb cumu5': 'TextEdit', 'Debl cumu5': 'TextEdit', });
lyr_LimitecarrireTamda_8.set('fieldImages', {'Layer': 'TextEdit', 'Exploitant': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'Remblais 2': 'TextEdit', 'Deblais 2': 'TextEdit', 'Remblais 3': 'TextEdit', 'Deblais 3': 'TextEdit', 'Remb cumu3': 'TextEdit', 'Debl cumu3': 'TextEdit', 'Surface': 'TextEdit', 'Date 1': 'DateTime', 'Date 2': 'DateTime', 'Date 3': 'DateTime', 'Date 4': 'DateTime', 'Date 5': 'DateTime', 'Remblais 4': 'TextEdit', 'Deblais 4': 'TextEdit', 'Remb cumu4': 'TextEdit', 'Debl cumu4': 'TextEdit', 'Remblais 5': 'TextEdit', 'Deblais 5': 'TextEdit', 'Remb cumu5': 'TextEdit', 'Debl cumu5': 'TextEdit', });
lyr_LimitecarrireTracotra_9.set('fieldImages', {'Layer': 'TextEdit', 'Exploitant': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'Remblais 2': 'TextEdit', 'Deblais 2': 'TextEdit', 'Remblais 3': 'TextEdit', 'Deblais 3': 'TextEdit', 'Remb cumu3': 'TextEdit', 'Debl cumu3': 'TextEdit', 'Surface': 'TextEdit', 'Date 1': 'DateTime', 'Date 2': 'DateTime', 'Date 3': 'DateTime', 'Date 4': 'DateTime', 'Date 5': 'DateTime', 'Remblais 4': 'TextEdit', 'Deblais 4': 'TextEdit', 'Remb cumu4': 'TextEdit', 'Debl cumu4': 'TextEdit', 'Remblais 5': 'TextEdit', 'Deblais 5': 'TextEdit', 'Remb cumu5': 'TextEdit', 'Debl cumu5': 'TextEdit', });
lyr_Limitecarrirezmaneelkhir_10.set('fieldImages', {'Layer': 'TextEdit', 'Exploitant': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'Remblais 2': 'TextEdit', 'Deblais 2': 'TextEdit', 'Remblais 3': 'TextEdit', 'Deblais 3': 'TextEdit', 'Remb cumu3': 'TextEdit', 'Debl cumu3': 'TextEdit', 'Surface': 'TextEdit', 'Date 1': 'DateTime', 'Date 2': 'DateTime', 'Date 3': 'DateTime', 'Date 4': 'DateTime', 'Date 5': 'DateTime', 'Remblais 4': 'TextEdit', 'Deblais 4': 'TextEdit', 'Remb cumu4': 'TextEdit', 'Debl cumu4': 'TextEdit', 'Remblais 5': 'TextEdit', 'Deblais 5': 'TextEdit', 'Remb cumu5': 'TextEdit', 'Debl cumu5': 'TextEdit', });
lyr_LimitecarrireZogaria_1.set('fieldLabels', {'Layer': 'hidden field', 'Exploitant': 'inline label - always visible', 'X': 'inline label - always visible', 'Y': 'inline label - always visible', 'Remblais 2': 'inline label - always visible', 'Deblais 2': 'inline label - always visible', '3 Date 3': 'inline label - always visible', 'Remblais 3': 'inline label - always visible', 'Deblais 3': 'inline label - always visible', 'Remb cumu3': 'inline label - always visible', 'Debl cumu3': 'inline label - always visible', 'Surface': 'inline label - always visible', 'Date 1': 'inline label - always visible', 'Date 2': 'inline label - always visible', 'Date 3': 'inline label - always visible', 'Date 4': 'inline label - always visible', 'Date 5': 'inline label - always visible', 'Remblais 4': 'inline label - always visible', 'Deblais 4': 'inline label - always visible', 'Debl cumu4': 'inline label - always visible', 'Remblais 5': 'inline label - always visible', 'Deblais 5': 'inline label - always visible', 'Remb cumu5': 'inline label - always visible', 'Debl cumu5': 'inline label - always visible', 'Remb cumu4': 'inline label - always visible', });
lyr_LimitecarrireBenyeffou_2.set('fieldLabels', {'Layer': 'hidden field', 'Exploitant': 'inline label - always visible', 'X': 'inline label - always visible', 'Y': 'inline label - always visible', 'Remblais 3': 'inline label - always visible', 'Deblais 3': 'inline label - always visible', 'Remblais 2': 'inline label - always visible', 'Deblais 2': 'inline label - always visible', 'Rem cumu 3': 'inline label - always visible', 'Deb cumu 3': 'inline label - always visible', 'Surface': 'inline label - always visible', 'Date 1': 'inline label - always visible', 'Date 2': 'inline label - always visible', 'Date 3': 'inline label - always visible', 'Date 4': 'inline label - always visible', 'Date 5': 'inline label - always visible', 'Remblais 4': 'inline label - always visible', 'Deblais 4': 'inline label - always visible', 'Remb cumu4': 'inline label - always visible', 'Debl cumu4': 'inline label - always visible', 'Remblais 5': 'inline label - always visible', 'Deblais 5': 'inline label - always visible', 'Remb cumu5': 'inline label - always visible', 'Debl cumu5': 'inline label - always visible', });
lyr_LimitecarrireBouchane_3.set('fieldLabels', {'Layer': 'hidden field', 'Exploitant': 'inline label - always visible', 'X': 'inline label - always visible', 'Y': 'inline label - always visible', 'Remblais 2': 'inline label - always visible', 'Deblais 2': 'inline label - always visible', 'Date 3': 'inline label - always visible', 'Remb cumu3': 'inline label - always visible', 'Deb cumu3': 'inline label - always visible', 'Remblais 3': 'inline label - always visible', 'Deblais 3': 'inline label - always visible', 'Surface': 'inline label - always visible', 'Date 1': 'inline label - always visible', 'Date 2': 'inline label - always visible', 'Date 4': 'inline label - always visible', 'Date 5': 'inline label - always visible', 'Remblais 4': 'inline label - always visible', 'Deblais 4': 'inline label - always visible', 'Remb cumu4': 'inline label - always visible', 'Debl cumu4': 'inline label - always visible', 'Remblais 5': 'inline label - always visible', 'Deblais 5': 'inline label - always visible', 'Remb cumu5': 'inline label - always visible', 'Debl cumu5': 'inline label - always visible', });
lyr_LimitecarrireDayaelbayda_4.set('fieldLabels', {'Layer': 'hidden field', 'Exploitant': 'inline label - always visible', 'X': 'inline label - always visible', 'Y': 'inline label - always visible', 'Remblais 2': 'inline label - always visible', 'Deblais 2': 'inline label - always visible', 'Date 3': 'inline label - always visible', 'Remblais 3': 'inline label - always visible', 'Deblais 3': 'inline label - always visible', 'Rem cumu 3': 'inline label - always visible', 'Deb cumu 3': 'inline label - always visible', 'Surface': 'inline label - always visible', 'Date 1': 'inline label - always visible', 'Date 2': 'inline label - always visible', 'Date 4': 'inline label - always visible', 'Date 5': 'inline label - always visible', 'Remblais 4': 'inline label - always visible', 'Deblais 4': 'inline label - always visible', 'Rem cumu4': 'inline label - always visible', 'Deb cumu4': 'inline label - always visible', 'Remblais 5': 'inline label - always visible', 'Deblais 5': 'inline label - always visible', 'Remb cumu5': 'inline label - always visible', 'Debl cumu5': 'inline label - always visible', });
lyr_LimitecarrireGuerrando_5.set('fieldLabels', {'Layer': 'hidden field', 'Exploitant': 'inline label - always visible', 'X': 'inline label - always visible', 'Y': 'inline label - always visible', 'Remblais 2': 'inline label - always visible', 'Deblais 2': 'inline label - always visible', 'Remblais 3': 'inline label - always visible', 'Deblais 3': 'inline label - always visible', 'Rem cum 3': 'inline label - always visible', 'Debl cum 3': 'inline label - always visible', 'Surface': 'inline label - always visible', 'Date 1': 'inline label - always visible', 'Date 2': 'inline label - always visible', 'Date 3': 'inline label - always visible', 'Date 4': 'inline label - always visible', 'Date 5': 'inline label - always visible', 'Remblais 4': 'inline label - always visible', 'Deblais 4': 'inline label - always visible', 'Remb cumu4': 'inline label - always visible', 'Debl cumu4': 'inline label - always visible', 'Remblais 5': 'inline label - always visible', 'Deblais 5': 'inline label - always visible', 'Debl cumu5': 'inline label - always visible', 'Remb cumu5': 'inline label - always visible', });
lyr_LimitecarrireMoustaphahoud_6.set('fieldLabels', {'Layer': 'hidden field', 'Exploitant': 'inline label - always visible', 'Remblais 2': 'inline label - always visible', 'Deblais 2': 'inline label - always visible', 'Date 3': 'inline label - always visible', 'Remblais 3': 'inline label - always visible', 'Deblais 3': 'inline label - always visible', 'Rem cumu 3': 'inline label - always visible', 'Deb cumu 3': 'inline label - always visible', 'X': 'inline label - always visible', 'Y': 'inline label - always visible', 'Surface': 'inline label - always visible', 'Date 1': 'inline label - always visible', 'Date 2': 'inline label - always visible', 'Date 4': 'inline label - always visible', 'Date 5': 'inline label - always visible', 'Remblais 4': 'inline label - always visible', 'Deblais 4': 'inline label - always visible', 'Remb cumu4': 'inline label - always visible', 'Debl cumu4': 'inline label - always visible', 'Remblais 5': 'inline label - always visible', 'Deblais 5': 'inline label - always visible', 'Debl cumu5': 'inline label - always visible', 'Remb cumu5': 'inline label - always visible', });
lyr_LimitecarrireSocombay_7.set('fieldLabels', {'Layer': 'hidden field', 'Exploitant': 'inline label - always visible', 'X': 'inline label - always visible', 'Y': 'inline label - always visible', 'Remblais 2': 'inline label - always visible', 'Deblais 2': 'inline label - always visible', 'Remblais 3': 'inline label - always visible', 'Deblais 3': 'inline label - always visible', 'Remb cum 3': 'inline label - always visible', 'Debl cumu3': 'inline label - always visible', 'Surface': 'inline label - always visible', 'Date 1': 'inline label - always visible', 'Date 2': 'inline label - always visible', 'Date 3': 'inline label - always visible', 'Date 4': 'inline label - always visible', 'Date 5': 'inline label - always visible', 'Remblais 4': 'inline label - always visible', 'Deblais 4': 'inline label - always visible', 'Remb cumu4': 'inline label - always visible', 'Debl cumu4': 'inline label - always visible', 'Remblais 5': 'inline label - always visible', 'Deblais 5': 'inline label - always visible', 'Remb cumu5': 'inline label - always visible', 'Debl cumu5': 'inline label - always visible', });
lyr_LimitecarrireTamda_8.set('fieldLabels', {'Layer': 'hidden field', 'Exploitant': 'inline label - always visible', 'X': 'inline label - always visible', 'Y': 'inline label - always visible', 'Remblais 2': 'inline label - always visible', 'Deblais 2': 'inline label - always visible', 'Remblais 3': 'inline label - always visible', 'Deblais 3': 'inline label - always visible', 'Remb cumu3': 'inline label - always visible', 'Debl cumu3': 'inline label - always visible', 'Surface': 'inline label - always visible', 'Date 1': 'inline label - always visible', 'Date 2': 'inline label - always visible', 'Date 3': 'inline label - always visible', 'Date 4': 'inline label - always visible', 'Date 5': 'inline label - always visible', 'Remblais 4': 'inline label - always visible', 'Deblais 4': 'inline label - always visible', 'Remb cumu4': 'inline label - always visible', 'Debl cumu4': 'inline label - always visible', 'Remblais 5': 'inline label - always visible', 'Deblais 5': 'inline label - always visible', 'Remb cumu5': 'inline label - always visible', 'Debl cumu5': 'inline label - always visible', });
lyr_LimitecarrireTracotra_9.set('fieldLabels', {'Layer': 'hidden field', 'Exploitant': 'inline label - always visible', 'X': 'inline label - always visible', 'Y': 'inline label - always visible', 'Remblais 2': 'inline label - always visible', 'Deblais 2': 'inline label - always visible', 'Remblais 3': 'inline label - always visible', 'Deblais 3': 'inline label - always visible', 'Remb cumu3': 'inline label - always visible', 'Debl cumu3': 'inline label - always visible', 'Surface': 'inline label - always visible', 'Date 1': 'inline label - always visible', 'Date 2': 'inline label - always visible', 'Date 3': 'inline label - always visible', 'Date 4': 'inline label - always visible', 'Date 5': 'inline label - always visible', 'Remblais 4': 'inline label - always visible', 'Deblais 4': 'inline label - always visible', 'Remb cumu4': 'inline label - always visible', 'Debl cumu4': 'inline label - always visible', 'Remblais 5': 'inline label - always visible', 'Deblais 5': 'inline label - always visible', 'Remb cumu5': 'inline label - always visible', 'Debl cumu5': 'inline label - always visible', });
lyr_Limitecarrirezmaneelkhir_10.set('fieldLabels', {'Layer': 'hidden field', 'Exploitant': 'inline label - always visible', 'X': 'inline label - always visible', 'Y': 'inline label - always visible', 'Remblais 2': 'inline label - always visible', 'Deblais 2': 'inline label - always visible', 'Remblais 3': 'inline label - always visible', 'Deblais 3': 'inline label - always visible', 'Remb cumu3': 'inline label - always visible', 'Debl cumu3': 'inline label - always visible', 'Surface': 'inline label - always visible', 'Date 1': 'inline label - always visible', 'Date 2': 'inline label - always visible', 'Date 3': 'inline label - always visible', 'Date 4': 'inline label - always visible', 'Date 5': 'inline label - always visible', 'Remblais 4': 'inline label - always visible', 'Deblais 4': 'inline label - always visible', 'Remb cumu4': 'inline label - always visible', 'Debl cumu4': 'inline label - always visible', 'Remblais 5': 'inline label - always visible', 'Deblais 5': 'inline label - always visible', 'Remb cumu5': 'inline label - always visible', 'Debl cumu5': 'inline label - always visible', });
lyr_Limitecarrirezmaneelkhir_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});