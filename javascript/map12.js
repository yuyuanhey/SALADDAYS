	google.charts.load('upcoming', {'packages':['geochart']});
    google.charts.setOnLoadCallback(drawRegionsMap);

    function drawRegionsMap() {
        var data1 = google.visualization.arrayToDataTable([
          ['Country', 'Popularity'],
          ['Germany', 1],
          ['US', 300],
          ['Brazil', 400],
          ['Canada', 500],
          ['France', 600],
          ['RU', 700],
          ['TW', 600],
          ['CN', 300]
        ]);
        var data2 = google.visualization.arrayToDataTable([
          ['Country', 'Popularity'],
          ['Germany', 1],
          ['US', 300],
          ['Brazil', 400],
          ['Canada', 500],
          ['France', 600],
          ['RU', 700],
          ['TW', 600],
          ['CN', 2000]
        ]);
        var data3 = google.visualization.arrayToDataTable([
          ['Country', 'Popularity'],
          ['Germany', 1],
          ['US', 300],
          ['Brazil', 400],
          ['Canada', 500],
          ['France', 600],
          ['RU', 2000],
          ['TW', 600],
          ['CN', 300]
        ]);
        var data4 = google.visualization.arrayToDataTable([
          ['Country', 'Popularity'],
          ['Germany', 1000],
          ['US', 300],
          ['Brazil', 400],
          ['Canada', 50],
          ['France', 600],
          ['RU', 700],
          ['TW', 60],
          ['CN', 200]
        ]);
        var data5 = google.visualization.arrayToDataTable([
          ['Country', 'Popularity'],
          ['Germany', 100],
          ['US', 30],
          ['Brazil', 40],
          ['Canada', 500],
          ['France', 800],
          ['RU', 700],
          ['TW', 600],
          ['CN', 200]
        ]);
        var data6 = google.visualization.arrayToDataTable([
          ['Country', 'Popularity'],
          ['Germany', 1],
          ['US', 300],
          ['Brazil', 40],
          ['Canada', 50],
          ['France', 60],
          ['RU', 700],
          ['TW', 60],
          ['CN', 2000]
        ]);
        var data7 = google.visualization.arrayToDataTable([
          ['Country', 'Popularity'],
          ['Germany', 100],
          ['US', 300],
          ['Brazil', 400],
          ['Canada', 500],
          ['France', 60],
          ['RU', 700],
          ['TW', 60],
          ['CN', 200]
        ]);
        var data8 = google.visualization.arrayToDataTable([
          ['Country', 'Popularity'],
          ['Germany', 100],
          ['US', 300],
          ['Brazil', 400],
          ['Canada', 500],
          ['France', 600],
          ['RU', 700],
          ['TW', 600],
          ['CN', 200]
        ]);
        var data9 = google.visualization.arrayToDataTable([
          ['Country', 'Popularity'],
          ['Germany', 100],
          ['US', 300],
          ['Brazil', 400],
          ['Canada', 500],
          ['France', 600],
          ['RU', 70],
          ['TW', 600],
          ['CN', 200]
        ]);
        var data10 = google.visualization.arrayToDataTable([
          ['Country', 'Popularity'],
          ['Germany', 1],
          ['US', 300],
          ['Brazil', 400],
          ['Canada', 50],
          ['France', 600],
          ['RU', 700],
          ['TW', 600],
          ['CN', 2000]
        ]);
        var data11 = google.visualization.arrayToDataTable([
          ['Country', 'Popularity'],
          ['Germany', 5],
          ['US', 600],
          ['Brazil', 400],
          ['Canada', 500],
          ['France', 600],
          ['RU', 700],
          ['TW', 600],
          ['CN', 20]
        ]);
        var data12 = google.visualization.arrayToDataTable([
          ['Country', 'Popularity'],
          ['Germany', 1],
          ['US', 300],
          ['Brazil', 400],
          ['Canada', 500],
          ['France', 2000],
          ['RU', 700],
          ['TW', 600],
          ['CN', 200]
        ]);
       

       	var options = {};
        options['colors'] = ['#FFB5B5','#FF9797', '#ff7575','#FF5151','#FF2D2D','#FF0000','#EA0000','#CE0000','#AE0000','#930000'];
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