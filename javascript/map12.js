	google.charts.load('upcoming', {'packages':['geochart']});
    google.charts.setOnLoadCallback(drawRegionsMap);

    function drawRegionsMap() {
var data1 = google.visualization.arrayToDataTable([
          ['Country', 'News'],
          ['China Mainland',13],
          ['Taiwan',12],
          ['Japan',5],
          ['South Korea',4],
          ['Iraq',4],
          ['United Kingdom',3],
          ['Iran',3],
          ['Germany',3],
          ['Australia',3],
          ['Turkey',3],
          ['Pakistan',3],
          ['Philippines',3],
          ['North Korea',3],
          ['Russia',2],
          ['Indonesia',2],
          ['Syria',2],
          ['Myanmar',2],
          ['Saudi-Arabia',2],
          ['Israel',1],
          ['United States',1],
          ['Ukraine',1],
          ['Poland',1],
          ['Afghanistan',1],
          ['Norway',1],
          ['India',1],
          ['Vietnam',1],
          ['Korea',1],
          ['Kuwait',1],
          ['Canada',1],
          ['Spain',1],
          ['Hong Kong',1]
        ]);
        var data2 = google.visualization.arrayToDataTable([
          ['Country', 'News'],
          ['United States',24],
          ['Japan',9],
          ['China Mainland',8],
          ['Taiwan',8],
          ['Syria',7],
          ['Belgium',7],
          ['Switzerland',6],
          ['Australia',4],
          ['South Korea',4],
          ['France',4],
          ['Nigeria',4],
          ['Uganda',3],
          ['Russia',3],
          ['Vietnam',3],
          ['Hong Kong',3],
          ['Turkey',2],
          ['Germany',2],
          ['New Zealand',2],
          ['Austria',2],
          ['Greece',2],
          ['United Kingdom',2],
          ['Philippines',2],
          ['Vatican',2],
          ['Canada',2],
          ['Spain',2],
          ['Central African Republic',2],
          ['Sweden',2],
          ['Myanmar',2],
          ['Malaysia',1],
          ['Indonesia',1],
          ['Swaziland',1],
          ['Afghanistan',1],
          ['Israel',1],
          ['Netherlands',1],
          ['Belarus',1],
          ['Denmark',1],
          ['Hungary',1],
          ['Ethiopia',1],
          ['Iraq',1],
          ['North Korea',1],
          ['Brazil',1],
          ['Norway',1],
          ['Cameroon',1],
          ['Pakistan',1],
          ['Sri Lanka',1],
          ['Papua New Guinea',1],
          ['Angola',1],
          ['Finland',1],
          ['India',1],
          ['Portugal',1],
          ['Iran',1],
          ['Cadar',1],
          ['Ukraine',1],
          ['Saudi-Arabia',1],
          ['Italy',1],
          ['Senegal',1],
          ['Korea',1],
          ['Somalia',1],
          ['South Africa',1]
        ]);
        var data3 = google.visualization.arrayToDataTable([
          ['Country', 'News'],
          ['United States',24],
          ['Belgium',10],
          ['Germany',6],
          ['North Korea',6],
          ['China Mainland',5],
          ['Australia',5],
          ['Brazil',5],
          ['Japan',5],
          ['Syria',4],
          ['Russia',3],
          ['Netherlands',3],
          ['Turkey',3],
          ['Iran',3],
          ['Austria',3],
          ['Argentina',3],
          ['Canada',3],
          ['Somalia',3],
          ['Taiwan',3],
          ['Burundi',3],
          ['Switzerland',2],
          ['Indonesia',2],
          ['Jamaica',2],
          ['Hong Kong',2],
          ['South Korea',2],
          ['Peru',2],
          ['France',2],
          ['Zimbabwe',2],
          ['Slovenia',2],
          ['United Kingdom',2],
          ['Myanmar',2],
          ['Macedonia',2],
          ['Benin',1],
          ['Korea',1],
          ['Cuba',1],
          ['Egypt',1],
          ['Chile',1],
          ['El Salvador',1],
          ['Colombia',1],
          ['Ethiopia',1],
          ['Tunisia',1],
          ['Fiji',1],
          ['Vietnam',1],
          ['New Zealand',1],
          ['Hungary',1],
          ['Niger',1],
          ['Spain',1],
          ['Nigeria',1],
          ['Ivory Coast',1],
          ['Cameroon',1],
          ['Tanzania',1],
          ['Pakistan',1],
          ['Dubai',1],
          ['Bolivia',1],
          ['Burkina Faso',1],
          ['Philippines',1],
          ['Greece',1],
          ['Mexico',1],
          ['Morocco',1]
        ]);
        var data4 = google.visualization.arrayToDataTable([
          ['Country', 'News'],
          ['United States',25],
          ['Belgium',11],
          ['Japan',10],
          ['Brazil',8],
          ['Canada',7],
          ['Nigeria',5],
          ['Taiwan',5],
          ['Panama',4],
          ['Russia',4],
          ['South Korea',4],
          ['Cuba',4],
          ['United Kingdom',4],
          ['Greece',4],
          ['Argentina',4],
          ['Germany',3],
          ['Myanmar',3],
          ['Australia',3],
          ['Ethiopia',3],
          ['Colombia',3],
          ['France',3],
          ['Venezuela',3],
          ['Turkey',2],
          ['Niger',2],
          ['Austria',2],
          ['Iceland',2],
          ['Sudan',2],
          ['Indonesia',2],
          ['Ukraine',2],
          ['Italy',2],
          ['Netherlands',2],
          ['Congo',1],
          ['Vietnam',1],
          ['Syria',1],
          ['El Salvador',1],
          ['Ghana',1],
          ['Libya',1],
          ['Benin',1],
          ['Luanda',1],
          ['Guatemala',1],
          ['India',1],
          ['Yemen',1],
          ['Ecuador',1],
          ['Peru',1],
          ['Egypt',1],
          ['Senegal',1],
          ['Bolivia',1],
          ['Iraq',1],
          ['New Zealand',1],
          ['Djibouti',1],
          ['Holy See',1],
          ['Uganda',1],
          ['China Mainland',1],
          ['Dominican',1],
          ['North Korea',1],
          ['Pakistan',1],
          ['Marley',1],
          ['Mexico',1],
          ['Kenya',1],
          ['Liberia',1]


        ]);
        var data5 = google.visualization.arrayToDataTable([
          ['Country', 'News'],
          ['United States',29],
          ['Canada',9],
          ['Germany',7],
          ['Iraq',6],
          ['North Korea',6],
          ['Nigeria',6],
          ['Egypt',6],
          ['Philippines',6],
          ['Brazil',6],
          ['France',5],
          ['Kenya',5],
          ['Australia',4],
          ['United Kingdom',4],
          ['Switzerland',4],
          ['Japan',4],
          ['Yemen',3],
          ['Venezuela',3],
          ['India',3],
          ['Belgium',3],
          ['South Sudan',3],
          ['Taiwan',3],
          ['Mexico',3],
          ['Panama',2],
          ['Turkey',2],
          ['South Korea',2],
          ['Colombia',2],
          ['El Salvador',2],
          ['Dominican Republic',2],
          ['Indonesia',2],
          ['Ecuador',2],
          ['Spain',2],
          ['Netherlands',2],
          ['Uganda',2],
          ['Austria',2],
          ['Russia',2],
          ['Tanzania',1],
          ['Zimbabwe',1],
          ['Guatemala',1],
          ['Papua New Guinea',1],
          ['Syria',1],
          ['Ethiopia',1],
          ['Libya',1],
          ['Poland',1],
          ['Hong Kong',1],
          ['Romania',1],
          ['Afghanistan',1],
          ['Mozambique',1],
          ['Greece',1],
          ['Serbia',1],
          ['Thailand',1],
          ['South Africa',1],
          ['Luanda',1],
          ['Myanmar',1],
          ['Honduras',1],
          ['Bengal',1],
          ['China Mainland',1],
          ['Italy',1],
          ['Sudan',1],
          ['Chad',1]

        ]);
        var data6 = google.visualization.arrayToDataTable([
          ['Country', 'News'],
          ['United States',26],
          ['France',10],
          ['United Kingdom',7],
          ['Brazil',7],
          ['Japan',7],
          ['Venezuela',6],
          ['Belgium',5],
          ['Turkey',4],
          ['Peru',4],
          ['China Mainland',4],
          ['Greece',4],
          ['Libya',4],
          ['Philippines',2],
          ['Switzerland',2],
          ['South Africa',2],
          ['Ghana',2],
          ['Cuba',2],
          ['Indonesia',2],
          ['Singapore',2],
          ['Vietnam',2],
          ['South Korea',2],
          ['Canada',2],
          ['Syria',2],
          ['Taiwan',2],
          ['Erectile Asia',1],
          ['Poland',1],
          ['Austria',1],
          ['Argentina',1],
          ['Haiti',1],
          ['Gambia',1],
          ['Sri Lanka',1],
          ['Germany',1],
          ['Chile',1],
          ['Tunisia',1],
          ['Senegal',1],
          ['Egypt',1],
          ['Somalia',1],
          ['Denmark',1],
          ['Iran',1],
          ['Palestine',1],
          ['Iraq',1],
          ['Papua New Guinea',1],
          ['Congo',1],
          ['Australia',1],
          ['Croatia',1],
          ['Nigeria',1],
          ['Bengal',1],
          ['North Korea',1],
          ['Pakistan',1],
          ['Myanmar',1],
          ['Kenya',1]



        ]);
        var data7 = google.visualization.arrayToDataTable([
          ['Country', 'News'],
          ['United States',31],
          ['United Kingdom',19],
          ['Venezuela',7],
          ['Turkey',6],
          ['Belgium',6],
          ['South Sudan',5],
          ['Brazil',5],
          ['Iraq',5],
          ['Japan',5],
          ['Germany',4],
          ['Syria',4],
          ['Indonesia',4],
          ['Canada',3],
          ['Nigeria',3],
          ['France',3],
          ['Italy',3],
          ['China Mainland',3],
          ['Netherlands',2],
          ['Australia',2],
          ['Somalia',2],
          ['India',2],
          ['Taiwan',2],
          ['North Korea',2],
          ['Saudi-Arabia',2],
          ['Colombia',2],
          ['Mongolia',2],
          ['Spain',1],
          ['Guatemala',1],
          ['Luxembourg',1],
          ['Iceland',1],
          ['South Korea',1],
          ['Morocco',1],
          ['Argentina',1],
          ['Mozambique',1],
          ['Israel',1],
          ['Myanmar',1],
          ['South Africa',1],
          ['Congo',1],
          ['Hungary',1],
          ['Egypt',1],
          ['Cambodia',1],
          ['Bengal',1],
          ['Chile',1],
          ['Panama',1],
          ['Mexico',1],
          ['Philippines',1],
          ['Yemen',1],
          ['Kenya',1],
          ['Luanda',1]

        ]);
        var data8 = google.visualization.arrayToDataTable([
          ['Country', 'News'],
          ['United States',39],
          ['Germany',10],
          ['Japan',9],
          ['United Kingdom',7],
          ['France',7],
          ['Mexico',6],
          ['Belgium',5],
          ['Turkey',5],
          ['Philippines',5],
          ['Brazil',5],
          ['China Mainland',4],
          ['Syria',4],
          ['Libya',4],
          ['Venezuela',4],
          ['Zambia',3],
          ['Russia',3],
          ['Afghanistan',3],
          ['Indonesia',2],
          ['Spain',2],
          ['South Korea',2],
          ['Austria',2],
          ['Argentina',2],
          ['Laos',2],
          ['South Africa',2],
          ['Democratic Republic of the Congo',2],
          ['South Sudan',2],
          ['Hong Kong',2],
          ['Thailand',2],
          ['Colombia',2],
          ['Ukraine',2],
          ['North Korea',2],
          ['India',2],
          ['Peru',2],
          ['Cuba',1],
          ['Taiwan',1],
          ['Switzerland',1],
          ['Guatemala',1],
          ['Tunisia',1],
          ['Sao Tome and Principe',1],
          ['Gambia',1],
          ['Somalia',1],
          ['Ethiopia',1],
          ['Haiti',1],
          ['Yemen',1],
          ['Iran',1],
          ['Belize',1],
          ['Australia',1],
          ['United Arab Emirates',1],
          ['Korea',1],
          ['Canada',1],
          ['Sweden',1],
          ['Pakistan',1],
          ['Panama',1],
          ['Norway',1],
          ['Netherlands',1]

        ]);
        var data9 = google.visualization.arrayToDataTable([
          ['Country', 'News'],
          ['United States',35],
          ['France',13],
          ['Syria',9],
          ['Brazil',6],
          ['Gabon',6],
          ['Germany',6],
          ['Italy',5],
          ['Spain',4],
          ['Turkey',4],
          ['Colombia',4],
          ['North Korea',4],
          ['Japan',4],
          ['Mexico',3],
          ['Afghanistan',2],
          ['Thailand',2],
          ['Australia',2],
          ['Canada',2],
          ['Myanmar',2],
          ['Laos',2],
          ['Belgium',2],
          ['Philippines',2],
          ['Zimbabwe',2],
          ['South Africa',1],
          ['Central African Republic',1],
          ['Greece',1],
          ['Kyrgyzstan',1],
          ['Vatican',1],
          ['Benin',1],
          ['South Sudan',1],
          ['Yemen',1],
          ['Tanzania',1],
          ['Croatia',1],
          ['China Mainland',1],
          ['Malaysia',1],
          ['Kenya',1],
          ['Democratic Republic of the Congo',1],
          ['South Korea',1],
          ['Denmark',1],
          ['Argentina',1],
          ['Nigeria',1],
          ['Taiwan',1],
          ['Bolivia',1],
          ['Hong Kong',1],
          ['Norway',1],
          ['United Kingdom',1],
          ['Austria',1],
          ['Uzbekistan',1],
          ['Russia',1],
          ['Venezuela',1],
          ['Singapore',1],
          ['Somalia',1],
          ['Libya',1],
          ['Luxembourg',1]

        ]);
        var data10 = google.visualization.arrayToDataTable([
          ['Country', 'News'],
          ['United States',34],
          ['Russia',6],
          ['Haiti',6],
          ['Colombia',5],
          ['Belgium',5],
          ['France',5],
          ['Germany',5],
          ['Philippines',4],
          ['Afghanistan',4],
          ['India',4],
          ['Singapore',3],
          ['Somalia',3],
          ['Japan',3],
          ['Ethiopia',3],
          ['United Kingdom',3],
          ['Thailand',2],
          ['Burundi',2],
          ['Hungary',2],
          ['Pakistan',2],
          ['South Korea',2],
          ['Austria',2],
          ['North Korea',2],
          ['Israel',2],
          ['Indonesia',2],
          ['Italy',2],
          ['Democratic Republic of the Congo',1],
          ['Algeria',1],
          ['Sudan',1],
          ['Jordan',1],
          ['Hong Kong',1],
          ['Korea',1],
          ['Egypt',1],
          ['Luanda',1],
          ['Iraq',1],
          ['Malaysia',1],
          ['Canada',1],
          ['Mexico',1],
          ['Saudi-Arabia',1],
          ['Montenegro',1],
          ['Ecuador',1],
          ['Niger',1],
          ['Spain',1],
          ['Nigeria',1],
          ['Syria',1],
          ['Brazil',1],
          ['Estonia',1],
          ['Greece',1],
          ['Venezuela',1],
          ['Congo',1],
          ['Poland',1]

        ]);
        var data11 = google.visualization.arrayToDataTable([
          ['Country', 'News'],
          ['United States',33],
          ['Japan',12],
          ['Belgium',10],
          ['South Korea',9],
          ['Russia',8],
          ['Germany',7],
          ['United Kingdom',5],
          ['Brazil',5],
          ['Venezuela',5],
          ['Canada',4],
          ['South Africa',3],
          ['Iraq',3],
          ['France',3],
          ['Nigeria',3],
          ['India',3],
          ['Italy',3],
          ['Hong Kong',2],
          ['Australia',2],
          ['Nicaragua',2],
          ['Syria',2],
          ['Pakistan',2],
          ['Libya',2],
          ['New Zealand',2],
          ['Colombia',2],
          ['Bulgaria',2],
          ['Kenya',2],
          ['Cuba',2],
          ['Spain',1],
          ['Somalia',1],
          ['Poland',1],
          ['Indonesia',1],
          ['Afghanistan',1],
          ['Ethiopia',1],
          ['Egypt',1],
          ['Lebanon',1],
          ['Vatican',1],
          ['North Korea',1],
          ['Vietnam',1],
          ['Norway',1],
          ['South Sudan',1],
          ['Honduras',1],
          ['Thailand',1],
          ['Peru',1],
          ['Philippines',1],
          ['Morocco',1],
          ['El Salvador',1],
          ['Mozambique',1],
          ['Madagascar',1],
          ['Mexico',1],
          ['Moldova',1]


        ]);
        var data12 = google.visualization.arrayToDataTable([
          ['Country', 'News'],
          ['United States',29],
          ['Japan',12],
          ['Colombia',7],
          ['Belgium',7],
          ['Brazil',7],
          ['France',7],
          ['Canada',6],
          ['South Korea',6],
          ['United Kingdom',6],
          ['Philippines',5],
          ['Cuba',5],
          ['Germany',5],
          ['Italy',5],
          ['Venezuela',5],
          ['Gambia',5],
          ['Haiti',4],
          ['Syria',3],
          ['Nigeria',3],
          ['Thailand',3],
          ['Turkey',3],
          ['Zimbabwe',3],
          ['Somalia',2],
          ['Russia',2],
          ['Bolivia',2],
          ['India',2],
          ['Solomon Islands',2],
          ['Indonesia',2],
          ['South Sudan',2],
          ['New Zealand',2],
          ['Ukraine',2],
          ['North Korea',2],
          ['Ghana',2],
          ['Ethiopia',1],
          ['Ecuador',1],
          ['Chile',1],
          ['Austria',1],
          ['Switzerland',1],
          ['Cameroon',1],
          ['Myanmar',1],
          ['Congo',1],
          ['South Africa',1],
          ['Vatican',1],
          ['Luanda',1],
          ['Vietnam',1],
          ['Egypt',1],
          ['Kenya',1],
          ['Mexico',1],
          ['Serbia',1],
          ['Central African Republic',1],
          ['Yemen',1],
          ['Netherlands',1],
          ['Australia',1],
          ['Peru',1],
          ['China Mainland',1],
          ['Democratic Republic of the Congo',1],
          ['Korea',1],
          ['Libya',1]

       
        ]);
       // '#F2F3F4',
//        #2980b9

       	var options = {height:615};
        options['colors'] = ['#f0f3f4', '#f7dc6f','#abebc6','#76d7c4','#5dade2','#2980b9'];
        var chart = new google.visualization.GeoChart(document.getElementById('heatMap1'));
        chart.draw(data1, options);
        
        var chart = new google.visualization.GeoChart(document.getElementById('heatMap2'));
        chart.draw(data2, options);
        
        var chart = new google.visualization.GeoChart(document.getElementById('heatMap3'));
        chart.draw(data3, options);
        
        var chart = new google.visualization.GeoChart(document.getElementById('heatMap4'));
        chart.draw(data4, options);
        
        var chart = new google.visualization.GeoChart(document.getElementById('heatMap5'));
        chart.draw(data5, options);
        
        var chart = new google.visualization.GeoChart(document.getElementById('heatMap6'));
        chart.draw(data6, options);
        
        var chart = new google.visualization.GeoChart(document.getElementById('heatMap7'));
        chart.draw(data7, options);
        
        var chart = new google.visualization.GeoChart(document.getElementById('heatMap8'));
        chart.draw(data8, options);
        
        var chart = new google.visualization.GeoChart(document.getElementById('heatMap9'));
        chart.draw(data9, options);
        
        var chart = new google.visualization.GeoChart(document.getElementById('heatMap10'));
        chart.draw(data10, options);

        var chart = new google.visualization.GeoChart(document.getElementById('heatMap11'));
        chart.draw(data11, options);

        var chart = new google.visualization.GeoChart(document.getElementById('heatMap12'));
        chart.draw(data12, options);
}