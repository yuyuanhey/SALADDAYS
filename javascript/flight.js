var map;

// svg path for target icon
var targetSVG = "M9,0C4.029,0,0,4.029,0,9s4.029,9,9,9s9-4.029,9-9S13.971,0,9,0z M9,15.93 c-3.83,0-6.93-3.1-6.93-6.93S5.17,2.07,9,2.07s6.93,3.1,6.93,6.93S12.83,15.93,9,15.93 M12.5,9c0,1.933-1.567,3.5-3.5,3.5S5.5,10.933,5.5,9S7.067,5.5,9,5.5 S12.5,7.067,12.5,9z";
// svg path for plane icon
var planeSVG = "M19.671,8.11l-2.777,2.777l-3.837-0.861c0.362-0.505,0.916-1.683,0.464-2.135c-0.518-0.517-1.979,0.278-2.305,0.604l-0.913,0.913L7.614,8.804l-2.021,2.021l2.232,1.061l-0.082,0.082l1.701,1.701l0.688-0.687l3.164,1.504L9.571,18.21H6.413l-1.137,1.138l3.6,0.948l1.83,1.83l0.947,3.598l1.137-1.137V21.43l3.725-3.725l1.504,3.164l-0.687,0.687l1.702,1.701l0.081-0.081l1.062,2.231l2.02-2.02l-0.604-2.689l0.912-0.912c0.326-0.326,1.121-1.789,0.604-2.306c-0.452-0.452-1.63,0.101-2.135,0.464l-0.861-3.838l2.777-2.777c0.947-0.947,3.599-4.862,2.62-5.839C24.533,4.512,20.618,7.163,19.671,8.11z";

AmCharts.ready(function() {
    map = new AmCharts.AmMap();
   map.projection =  "equrirectangular";
    var dataProvider = {
        mapVar: AmCharts.maps.worldLow
    };

    map.areasSettings = {
        unlistedAreasColor: "grey"
    };
   	//地圖上的點點
    map.imagesSettings = {
        color: "#CC0000",
        rollOverColor: "#CC0000",
        selectedColor: "#000000"
    };

    //Taiwan
    var Taiwan = {
    	id: "taiwan1",
    	color: "green",
    	svgPath: targetSVG,
        title: "Taiwan",
        latitude: 23.8235,
        longitude: 120.8198,
        scale: 1.5,
        // zoomLevel: 2.74,
        // zoomLongitude:  120.8198,
        // zoomLatitude:23.8235,
        lines:[
        	//86-330 US 330
            {   latitudes: [23.8235, 38.411778],
               longitudes: [120.8198, -98.553364],color:"green",alpha: 0.5,arc:-0.8,thickness:1},
            //
            //72-85 Japan 85
            {   latitudes: [23.8235, 36.80675],
               longitudes: [120.8198, 140.087469],color:"yellow",alpha: 0.6,arc:-0.8,thickness:1},
            //
            //43-71 Belgium 71
            {   latitudes: [23.8235, 50.39425],
               longitudes: [120.8198, 4.542181],color:"blue",alpha: 0.7,arc:-0.8,thickness:1},
            ////France 63
            {   latitudes: [23.8235, 46.173687],
               longitudes: [120.8198, 2.202067],color:"blue",alpha: 0.7,arc:-0.8,thickness:1},
            ////UK 63
            {   latitudes: [23.8235, 54.506779],
               longitudes: [120.8198, -2.51431],color:"blue",alpha: 0.7,arc:-0.8,thickness:1},
            ////Germany 59
            {   latitudes: [23.8235, 50.829105],
               longitudes: [120.8198, 10.317574],color:"blue",alpha: 0.7,arc:-0.8,thickness:1},
            ////Brazil 56
            {   latitudes: [23.8235, -10.358738],
               longitudes: [120.8198, -52.321887],color:"red",alpha: 0.7,arc:-0.8,thickness:1},
            //
            //23-42 China Mainland 42
            {   latitudes: [23.8235, 34.492293],
               longitudes: [120.8198, 106.162739],color:"yellow",alpha: 0.8,arc:-0.8,thickness:1},
            ////Canada 41
            {   latitudes: [23.8235, 56.2335],
               longitudes: [120.8198, -109.263673],color:"green",alpha: 0.8,arc:-0.8,thickness:1},
            ////Syria 40
            {   latitudes: [23.8235, 34.613683],
               longitudes: [120.8198, 38.670217],color:"red",alpha: 0.8,arc:-0.8,thickness:1},
            ////South Korea 39
            {   latitudes: [23.8235, 36.417431],
               longitudes: [120.8198, 128.060561],color:"yellow",alpha: 0.8,arc:-0.8,thickness:1},
            ////Taiwan 37
            {   latitudes: [23.8235, 23.8235],
               longitudes: [120.8198, 120.8198],color:"yellow",alpha: 0.8,arc:-0.8,thickness:1},
            ////Venezuela 35
            {   latitudes: [23.8235, 6.353],
               longitudes: [120.8198, -66.104332],color:"red",alpha: 0.8,arc:-0.8,thickness:1},
            ////Russia 34
            {   latitudes: [23.8235, 61.391131],
               longitudes: [120.8198, 101.346092],color:"yellow",alpha: 0.8,arc:-0.8,thickness:1},
            //Turkey 34
            {   latitudes: [23.8235, 39.701437],
               longitudes: [120.8198, 35.997787],color:"yellow",alpha: 0.8,arc:-0.8,thickness:1},
            //Philippines 32
            {   latitudes: [23.8235, 13.272972],
               longitudes: [120.8198, 123.417326],color:"yellow",alpha: 0.8,arc:-0.8,thickness:1},
            //North Korea 31
            {   latitudes: [23.8235, 40.169836],
               longitudes: [120.8198, 126.70856],color:"yellow",alpha: 0.8,arc:-0.8,thickness:1},
            //Australia 28
            {   latitudes: [23.8235, -25.20791],
               longitudes: [120.8198, 132.143921],color:"yellow",alpha: 0.8,arc:-0.8,thickness:1},
            //Colombia 28
            {   latitudes: [23.8235, 4.853299],
               longitudes: [120.8198, -73.194041],color:"red",alpha: 0.8,arc:-0.8,thickness:1},
            //Nigeria 28
            {   latitudes: [23.8235, 9.678982],
               longitudes: [120.8198, 6.683109],color:"red",alpha: 0.8,arc:-0.8,thickness:1},
            //9-22 Indonesia 22
            {   latitudes: [23.8235, -0.134091],
               longitudes: [120.8198, 112.569075],color:"yellow",alpha: 0.9,arc:-0.8,thickness:1},
            //Iraq 22
            {   latitudes: [23.8235, 33.103339],
               longitudes: [120.8198, 43.856737],color:"yellow",alpha: 0.9,arc:-0.8,thickness:1},
            //Italy 22
            {   latitudes: [23.8235, 41.995131],
               longitudes: [120.8198, 14.082671],color:"blue",alpha: 0.9,arc:-0.8,thickness:1},
            //India 19
            {   latitudes: [23.8235, 22.278527],
               longitudes: [120.8198, 76.233429],color:"yellow",alpha: 0.9,arc:-0.8,thickness:1},
            //Mexico 18
            {   latitudes: [23.8235, 24.249346],
               longitudes: [120.8198, -104.319638],color:"red",alpha: 0.9,arc:-0.8,thickness:1},
            //Austria 16
            {   latitudes: [23.8235, 47.474492],
               longitudes: [120.8198, 14.310638],color:"blue",alpha: 0.9,arc:-0.8,thickness:1},
            //Switzerland 16
            {   latitudes: [23.8235, 46.836386],
               longitudes: [120.8198, 8.420011],color:"red",alpha: 0.9,arc:-0.8,thickness:1},
            //Cuba 15
            {   latitudes: [23.8235, 21.674948],
               longitudes: [120.8198, -78.238512],color:"red",alpha: 0.9,arc:-0.8,thickness:1},
            //Egypt 15
            {   latitudes: [23.8235, 27.214789],
               longitudes: [120.8198, 27.354548],color:"black",alpha: 0.9,arc:-0.8,thickness:1},
            //Myanmar 15
            {   latitudes: [23.8235, 22.06795],
               longitudes: [120.8198, 94.574826],color:"red",alpha: 0.9,arc:-0.8,thickness:1},
            //Somalia 15
            {   latitudes: [23.8235, 4.994271],
               longitudes: [120.8198, 46.450282],color:"red",alpha: 0.9,arc:-0.8,thickness:1},
            //Spain 15
            {   latitudes: [23.8235, 40.195778],
               longitudes: [120.8198, -3.085503],color:"blue",alpha: 0.9,arc:-0.8,thickness:1},
            //Greece 14
            {   latitudes: [23.8235, 39.38854],
               longitudes: [120.8198, 21.888451],color:"blue",alpha: 0.9,arc:-0.8,thickness:1},
            //Libya 14
            {   latitudes: [23.8235, 26.524087],
               longitudes: [120.8198, 18.043077],color:"red",alpha: 0.9,arc:-0.8,thickness:1},
            //South Sudan 14
            {   latitudes: [23.8235, 7.01084],
               longitudes: [120.8198, 30.666776],color:"red",alpha: 0.9,arc:-0.8,thickness:1},
            //Afghanistan	13
            {   latitudes: [23.8235, 33.530013],
               longitudes: [120.8198, 67.350789],color:"yellow",alpha: 0.9,arc:-0.8,thickness:1},
            //Hong Kong 13
            {   latitudes: [23.8235, 22.232369],
               longitudes: [120.8198, 114.06397],color:"yellow",alpha: 0.9,arc:-0.8,thickness:1},
            //Argentina 12
            {   latitudes: [23.8235, -34.570909],
               longitudes: [120.8198, -58.015536],color:"red",alpha: 0.9,arc:-0.8,thickness:1},
            //Ethiopia 12
            {   latitudes: [23.8235, 8.485274],
               longitudes: [120.8198, 40.273958],color:"red",alpha: 0.9,arc:-0.8,thickness:1},
            //Haiti 12
            {   latitudes: [23.8235, 18.562854],
               longitudes: [120.8198, -72.173306],color:"red",alpha: 0.9,arc:-0.8,thickness:1},
            //Kenya 12
            {   latitudes: [23.8235, -0.110973],
               longitudes: [120.8198, 37.560551],color:"black",alpha: 0.9,arc:-0.8,thickness:1},
            //Netherlands	12
            {   latitudes: [23.8235, 52.045512],
               longitudes: [120.8198, 5.174602],color:"red",alpha: 0.9,arc:-0.8,thickness:1},
            //Pakistan 12
            {   latitudes: [23.8235, 30.160382],
               longitudes: [120.8198, 69.200793],color:"red",alpha: 0.9,arc:-0.8,thickness:1},
            //Peru 12
            {   latitudes: [23.8235, -9.122757],
               longitudes: [120.8198, -75.030928],color:"red",alpha: 0.9,arc:-0.8,thickness:1},
            //South Africa 12
            {   latitudes: [23.8235, -30.390786],
               longitudes: [120.8198, 22.565028],color:"black",alpha: 0.9,arc:-0.8,thickness:1},
            //Thailand 11
            {   latitudes: [23.8235, 15.505224],
               longitudes: [120.8198, 101.000057],color:"yellow",alpha: 0.9,arc:-0.8,thickness:1},
            //Vietnam 10
            {   latitudes: [23.8235, 13.584647],
               longitudes: [120.8198, 108.170544],color:"yellow",alpha: 0.9,arc:-0.8,thickness:1},
            //Iran 9
            {   latitudes: [23.8235, 32.221076],
               longitudes: [120.8198, 53.400528],color:"yellow",alpha: 0.9,arc:-0.8,thickness:1},
            //
            //1-8 New Zealand	8
            {   latitudes: [23.8235, -40.574528],
               longitudes: [120.8198, 174.480774],color:"yellow",alpha: 1,arc:-0.8,thickness:1},
            //Panama 8
            {   latitudes: [23.8235, 8.275817],
               longitudes: [120.8198, -80.474794],color:"red",alpha: 1,arc:-0.8,thickness:1},
            //Ukraine 8
            {   latitudes: [23.8235, 48.194162],
               longitudes: [120.8198, 31.093371],color:"yellow",alpha: 1,arc:-0.8,thickness:1},
            //Yemen 8
            {   latitudes: [23.8235, 15.291088],
               longitudes: [120.8198, 48.293523],color:"yellow",alpha: 1,arc:-0.8,thickness:1},
            //Zimbabwe 8
            {   latitudes: [23.8235, -19.045214],
               longitudes: [120.8198, 29.100451],color:"black",alpha: 1,arc:-0.8,thickness:1},
            //Democratic Republic of the Congo 7
            {   latitudes: [23.8235, -4.03136],
               longitudes: [120.8198, 20.441061],color:"black",alpha: 1,arc:-0.8,thickness:1},
            //Gambia 7
            {   latitudes: [23.8235, 13.242756],
               longitudes: [120.8198, -15.181021],color:"black",alpha: 1,arc:-0.8,thickness:1},
            //Gabon 6
            {   latitudes: [23.8235, -0.535954],
               longitudes: [120.8198, 11.354171],color:"black",alpha: 1,arc:-0.8,thickness:1},
            //Korea 6
            {   latitudes: [23.8235, 37.33014],
               longitudes: [120.8198, 127.565936],color:"yellow",alpha: 1,arc:-0.8,thickness:1},
            //Saudi-Arabia 6
            {   latitudes: [23.8235, 23.421289],
               longitudes: [120.8198, 45.043871],color:"yellow",alpha: 1,arc:-0.8,thickness:1},
            //Singapore 6
            {   latitudes: [23.8235, 1.204484],
               longitudes: [120.8198, 103.491371],color:"yellow",alpha: 1,arc:-0.8,thickness:1},
            //Uganda 6
            {   latitudes: [23.8235, 1.181667],
               longitudes: [120.8198, 32.163219],color:"black",alpha: 1,arc:-0.8,thickness:1},
            //Bolivia 5
            {   latitudes: [23.8235, -16.275287],
               longitudes: [120.8198, -63.381152],color:"red",alpha: 1,arc:-0.8,thickness:1},
            //Burundi 5
            {   latitudes: [23.8235, -3.252668],
               longitudes: [120.8198, 29.553428],color:"red",alpha: 1,arc:-0.8,thickness:1},
            //Central African Republic 5
            {   latitudes: [23.8235, 6.255029],
               longitudes: [120.8198, 20.591404],color:"black",alpha: 1,arc:-0.8,thickness:1},
            //Congo 5
            {   latitudes: [23.8235, -0.13576],
               longitudes: [120.8198, 15.493301],color:"black",alpha: 1,arc:-0.8,thickness:1},
            //Ecuador 5
            {   latitudes: [23.8235, -1.515436],
               longitudes: [120.8198, -78.093314],color:"red",alpha: 1,arc:-0.8,thickness:1},
            //El Salvador 5
            {   latitudes: [23.8235, -13.464358],
               longitudes: [120.8198, -88.541827],color:"red",alpha: 1,arc:-0.8,thickness:1},
            //Ghana 5
            {   latitudes: [23.8235, 7.552128],
               longitudes: [120.8198, -1.010607],color:"red",alpha: 1,arc:-0.8,thickness:1},
            //Hungary 5
            {   latitudes: [23.8235, 47.090929],
               longitudes: [120.8198, 19.302939],color:"blue",alpha: 1,arc:-0.8,thickness:1},
            //Israel 5
            {   latitudes: [23.8235, 30.593214],
               longitudes: [120.8198, 34.512319],color:"yellow",alpha: 1,arc:-0.8,thickness:1},
            //Luanda 5
            {   latitudes: [23.8235, 8.503212],
               longitudes: [120.8198, 13.172362],color:"black",alpha: 1,arc:-0.8,thickness:1},
            //Norway 5
            {   latitudes: [23.8235, 61.293895],
               longitudes: [120.8198, 8.321775],color:"blue",alpha: 1,arc:-0.8,thickness:1},
            //Poland 5
            {   latitudes: [23.8235, 51.550998],
               longitudes: [120.8198, 19.084249],color:"blue",alpha: 1,arc:-0.8,thickness:1},
            //Vatican 5
            {   latitudes: [23.8235, 41.54105],
               longitudes: [120.8198, 12.27122],color:"red",alpha: 1,arc:-0.8,thickness:1},
            //Chile 4
            {   latitudes: [23.8235, -35.411461],
               longitudes: [120.8198, -71.293656],color:"red",alpha: 1,arc:-0.8,thickness:1},
            //Guatemala 4
            {   latitudes: [23.8235, 14.380569],
               longitudes: [120.8198, -90.302478],color:"red",alpha: 1,arc:-0.8,thickness:1},
            //Laos 4
            {   latitudes: [23.8235, 19.512257],
               longitudes: [120.8198, 102.294379],color:"red",alpha: 1,arc:-0.8,thickness:1},
            //Niger 4
            {   latitudes: [23.8235, 17.35257],
               longitudes: [120.8198, 8.133348],color:"black",alpha: 1,arc:-0.8,thickness:1},
            //Senegal 4
            {   latitudes: [23.8235, 14.53465],
               longitudes: [120.8198, -14.034654],color:"red",alpha: 1,arc:-0.8,thickness:1},
            //Sudan 4
            {   latitudes: [23.8235, 12.303873],
               longitudes: [120.8198, 30.13255],color:"black",alpha: 1,arc:-0.8,thickness:1},
            //Zambia 4
            {   latitudes: [23.8235, -13.080203],
               longitudes: [120.8198, 27.505759],color:"black",alpha: 1,arc:-0.8,thickness:1},
            //Bengal 3
            {   latitudes: [23.8235, 22.591232],
               longitudes: [120.8198, 87.511791],color:"black",alpha: 1,arc:-0.8,thickness:1},
            //Benin 3
            {   latitudes: [23.8235, 9.183157],
               longitudes: [120.8198, 2.19264],color:"red",alpha: 1,arc:-0.8,thickness:1},
            //Cameroon 3
            {   latitudes: [23.8235, 7.222246],
               longitudes: [120.8198, 12.201771],color:"black",alpha: 1,arc:-0.8,thickness:1},
            //Denmark 3
            {   latitudes: [23.8235, 56.19026],
               longitudes: [120.8198, 9.333125],color:"red",alpha: 1,arc:-0.8,thickness:1},
            //Iceland 3
            {   latitudes: [23.8235, 64.544462],
               longitudes: [120.8198, -18.550882],color:"blue",alpha: 1,arc:-0.8,thickness:1},
            //Malaysia 3
            {   latitudes: [23.8235, 3.023682],
               longitudes: [120.8198, 102.442943],color:"yellow",alpha: 1,arc:-0.8,thickness:1},
            //Marley 3
            {   latitudes: [23.8235, 17.341449],
               longitudes: [120.8198, -3.59462],color:"red",alpha: 1,arc:-0.8,thickness:1},
            //Morocco 3
            {   latitudes: [23.8235, 31.013707],
               longitudes: [120.8198, -1.184154],color:"blue",alpha: 1,arc:-0.8,thickness:1},
            //Mozambique 3
            {   latitudes: [23.8235, -17.525927],
               longitudes: [120.8198, 36.180575],color:"black",alpha: 1,arc:-0.8,thickness:1},
            //Papua New Guinea 3
            {   latitudes: [23.8235, -6.035556],
               longitudes: [120.8198, 143.190882],color:"red",alpha: 1,arc:-0.8,thickness:1},
            //Sweden 3
            {   latitudes: [23.8235, 59.592045],
               longitudes: [120.8198, 15.03297],color:"blue",alpha: 1,arc:-0.8,thickness:1},
            //Tanzania 3
            {   latitudes: [23.8235, -6.371953],
               longitudes: [120.8198, 35.200309],color:"black",alpha: 1,arc:-0.8,thickness:1},
            //Tunisia 3
            {   latitudes: [23.8235, 33.531291],
               longitudes: [120.8198, 9.3215],color:"black",alpha: 1,arc:-0.8,thickness:1},
            //Bulgaria 2
            {   latitudes: [23.8235, 42.513087],
               longitudes: [120.8198, 26.202803],color:"red",alpha: 1,arc:-0.8,thickness:1},
            //Croatia 2
            {   latitudes: [23.8235, 45.030903],
               longitudes: [120.8198, 15.195737],color:"black",alpha: 1,arc:-0.8,thickness:1},
            //Dominican Republic 2
            {   latitudes: [23.8235, 18.441319],
               longitudes: [120.8198, -70.122997],color:"black",alpha: 1,arc:-0.8,thickness:1},
            //Honduras 2
            {   latitudes: [23.8235, 15.031402],
               longitudes: [120.8198, -85.274883],color:"red",alpha: 1,arc:-0.8,thickness:1},
            //Jamaica 2
            {   latitudes: [23.8235, 18.063449],
               longitudes: [120.8198, -77.175103],color:"red",alpha: 1,arc:-0.8,thickness:1},
            //Luxembourg 2
            {   latitudes: [23.8235, 49.451119],
               longitudes: [120.8198, 6.130162],color:"red",alpha: 1,arc:-0.8,thickness:1},
            //Macedonia 2
            {   latitudes: [23.8235, 41.385468],
               longitudes: [120.8198, 21.483702],color:"red",alpha: 1,arc:-0.8,thickness:1},
            //Mongolia 2
            {   latitudes: [23.8235, 46.154684],
               longitudes: [120.8198, 104.282196],color:"red",alpha: 1,arc:-0.8,thickness:1},
            //Nicaragua 2
            {   latitudes: [23.8235, 12.401898],
               longitudes: [120.8198, -85.032801],color:"red",alpha: 1,arc:-0.8,thickness:1},
            //Serbia 2
            {   latitudes: [23.8235, 44.005717],
               longitudes: [120.8198, 21.000719],color:"red",alpha: 1,arc:-0.8,thickness:1},
            //Slovenia 2
            {   latitudes: [23.8235, 45.510751],
               longitudes: [120.8198, 15.441007],color:"black",alpha: 1,arc:-0.8,thickness:1},
            //Solomon Islands 2
            {   latitudes: [23.8235, -9.555576],
               longitudes: [120.8198, 159.445889],color:"red",alpha: 1,arc:-0.8,thickness:1},
            //Sri Lanka 2
            {   latitudes: [23.8235, 7.533399],
               longitudes: [120.8198, 80.461847],color:"yellow",alpha: 1,arc:-0.8,thickness:1},
            //Algeria 1
            {   latitudes: [23.8235, 28.020199],
               longitudes: [120.8198, 1.393465],color:"red",alpha: 1,arc:-0.8,thickness:1},
            //Angola 1
            {   latitudes: [23.8235, -11.120969],
               longitudes: [120.8198, 17.522599],color:"red",alpha: 1,arc:-0.8,thickness:1},
            //Belarus	1
            {   latitudes: [23.8235, 53.423531],
               longitudes: [120.8198, 27.57122],color:"red",alpha: 1,arc:-0.8,thickness:1},
            //Belize 1
            {   latitudes: [23.8235, 17.112356],
               longitudes: [120.8198, -88.295154],color:"red",alpha: 1,arc:-0.8,thickness:1},
            //Burkina Faso 1
            {   latitudes: [23.8235, 12.1418],
               longitudes: [120.8198, -1.334173],color:"red",alpha: 1,arc:-0.8,thickness:1},
            //Cadar 1
            {   latitudes: [23.8235, 25.211737],
               longitudes: [120.8198, 51.110198],color:"red",alpha: 1,arc:-0.8,thickness:1},
            //Cambodia 1
            {   latitudes: [23.8235, 12.335644],
               longitudes: [120.8198, 104.592747],color:"red",alpha: 1,arc:-0.8,thickness:1},
            //Chad 1
            {   latitudes: [23.8235, 15.2715],
               longitudes: [120.8198, 18.435595],color:"red",alpha: 1,arc:-0.8,thickness:1},
            //Djibouti 1
            {   latitudes: [23.8235, 11.49305],
               longitudes: [120.8198, 42.352499],color:"red",alpha: 1,arc:-0.8,thickness:1},
            //Dominican Republic 1
            {   latitudes: [23.8235, 18.44085],
               longitudes: [120.8198, -70.094554],color:"red",alpha: 1,arc:-0.8,thickness:1},
            //Dubai 1
            {   latitudes: [23.8235, 25.121746],
               longitudes: [120.8198, 55.161482],color:"red",alpha: 1,arc:-0.8,thickness:1},
            //Estonia 1
            {   latitudes: [23.8235, 58.354298],
               longitudes: [120.8198, 25.004899],color:"red",alpha: 1,arc:-0.8,thickness:1},
            //Fiji 1
            {   latitudes: [23.8235, -17.424814],
               longitudes: [120.8198, 178.035411],color:"red",alpha: 1,arc:-0.8,thickness:1},
            //Finland 1
            {   latitudes: [23.8235, 61.55268],
               longitudes: [120.8198, 25.445335],color:"red",alpha: 1,arc:-0.8,thickness:1},
            //Holy See 1
            {   latitudes: [23.8235, 41.54105],
               longitudes: [120.8198, 12.27122],color:"red",alpha: 1,arc:-0.8,thickness:1},
            //Ivory Coast 1
            {   latitudes: [23.8235, 7.322396],
               longitudes: [120.8198, -5.324949],color:"red",alpha: 1,arc:-0.8,thickness:1},
            //Jordan 1
            {   latitudes: [23.8235, 30.350659],
               longitudes: [120.8198, 36.141829],color:"red",alpha: 1,arc:-0.8,thickness:1},
            //Kuwait 1
            {   latitudes: [23.8235, 29.184198],
               longitudes: [120.8198, 47.285436],color:"red",alpha: 1,arc:-0.8,thickness:1},
            //Kyrgyzstan 1
            {   latitudes: [23.8235, 41.121577],
               longitudes: [120.8198, 74.455795],color:"red",alpha: 1,arc:-0.8,thickness:1},
            //Lebanon 1
            {   latitudes: [23.8235, 33.5117],
               longitudes: [120.8198, 35.514423],color:"red",alpha: 1,arc:-0.8,thickness:1},
            //Liberia 1
            {    latitudes: [23.8235, 6.2541],
            	longitudes: [120.8198, -9.25462],color:"red",alpha: 1,arc:-0.8,thickness:1} ,
            //Madagascar 1
            {    latitudes: [23.8235, -18.460101],
            	longitudes: [120.8198, 46.520879],color:"red",alpha: 1,arc:-0.8,thickness:1} ,
            //Moldova 1
            {    latitudes: [23.8235, 47.244187],
            	longitudes: [120.8198, 28.221159],color:"red",alpha: 1,arc:-0.8,thickness:1} ,
            //Montenegro 1
            {    latitudes: [23.8235, 42.4223124],
            	longitudes: [120.8198, 19.22278],color:"red",alpha: 1,arc:-0.8,thickness:1} ,
            //Palestine 1
            {    latitudes: [23.8235, 31.91222],
            	longitudes: [120.8198, 35.22028],color:"red",alpha: 1,arc:-0.8,thickness:1} ,
            //Portugal 1
            {    latitudes: [23.8235, 39.235954],
            	longitudes: [120.8198, -8.132803],color:"red",alpha: 1,arc:-0.8,thickness:1} ,
            //Romania 1
            {    latitudes: [23.8235, 45.563538],
            	longitudes: [120.8198, 24.580023 ],color:"red",alpha: 1,arc:-0.8,thickness:1} ,
            //Sao Tome and Principe 1
            {    latitudes: [23.8235, 0.11109],
            	longitudes: [120.8198, 6.364709 ],color:"red",alpha: 1,arc:-0.8,thickness:1} ,
            //Swaziland 1
            {   latitudes: [23.8235, -26.312101],
               longitudes: [120.8198, 31.275712],color:"red",alpha: 1,arc:-0.8,thickness:1},
            //United Arab Emirates 1
            {    latitudes: [23.8235, 23.252667],
            	longitudes: [120.8198, 53.505214 ],color:"red",alpha: 1,arc:-0.8,thickness:1} ,
            //Uzbekistan 1
            {   latitudes: [23.8235, 41.223897],
               longitudes: [120.8198, 64.350694],color:"red",alpha: 1,arc:-0.8,thickness:1}
        ]
    };

    // cities
    var cities = [
        Taiwan,
        
        // Taiwan4,
        // Taiwan5,
        // Taiwan6,
    //86-330 US 330
{   latitude:  38.411778,
longitude:  -98.553364,svgPath: targetSVG, title: "美國",scale: 2.4,color: "green"},

//72-85 Japan 85
{   latitude:  36.80675,
longitude:  140.087469,svgPath: targetSVG, title: "日本",scale: 1.8,color: "yellow"},

//43-71 Belgium 71
{   latitude:  50.39425,
longitude:  4.542181,svgPath: targetSVG, title: "比利時",scale: 1.2,color: "blue"},
////France 63
{   latitude:  46.173687,
longitude:  2.202067,svgPath: targetSVG, title: " 法國",scale: 1.2,color: "blue"},
////UK 63
{   latitude:  54.506779,
longitude:  -2.51431,svgPath: targetSVG, title: " 英國",scale: 1.2,color: "blue"},
////Germany 59
{   latitude:  50.829105,
longitude:  10.317574,svgPath: targetSVG, title: " 德國",scale: 1.2,color: "blue"},
////Brazil 56
{   latitude:  -10.358738,
longitude:  -52.321887,svgPath: targetSVG, title: "巴西",scale: 1.2},
//
//23-42 China Mainland 42
{   latitude:  34.492293,
longitude:  106.162739,svgPath: targetSVG, title: "中國大陸",scale: 0.9},
////Canada 41
{   latitude:  56.2335,
longitude:  -109.263673,svgPath: targetSVG, title: "加拿大",scale: 0.9},
////Syria 40
{   latitude:  34.613683,
longitude:  38.670217,svgPath: targetSVG, title: "敘利亞",scale: 0.9},
////South Korea 39
{   latitude:  36.417431,
longitude:  128.060561,svgPath: targetSVG, title: "南韓",scale: 0.9},
////Taiwan 37
{   latitude:  23.8235,
longitude:  120.8198,svgPath: targetSVG, title: "臺灣",scale: 0.9},
////Venezuela 35
{   latitude:  6.353,
longitude:  -66.104332,svgPath: targetSVG, title: "委內瑞拉",scale: 0.9},
////Russia 34
{   latitude:  61.391131,
longitude:  101.346092,svgPath: targetSVG, title: "俄羅斯",scale: 0.9},
//Turkey 34
{   latitude:  39.701437,
longitude:  35.997787,svgPath: targetSVG, title: "土耳其",scale: 0.9},
//Philippines 32
{   latitude:  13.272972,
longitude:  123.417326,svgPath: targetSVG, title: "菲律賓",scale: 0.9},
//North Korea 31
{   latitude:  40.169836,
longitude:  126.70856,svgPath: targetSVG, title: "北韓",scale: 0.9},
//Australia 28
{   latitude:  -25.20791,
longitude:  132.143921,svgPath: targetSVG, title: "澳洲",scale: 0.9},
//Colombia 28
{   latitude:  4.853299,
longitude:  -73.194041,svgPath: targetSVG, title: "哥倫比亞",scale: 0.9},
//Nigeria 28
{   latitude:  9.678982,
longitude:  6.683109,svgPath: targetSVG, title: "奈及利亞",scale: 0.9},
//#9-22 Indonesia 22
{   latitude:  -0.134091,
longitude:  112.569075,svgPath: targetSVG, title: "印尼",scale: 0.6},
//Iraq 22
{   latitude:  33.103339,
longitude:  43.856737,svgPath: targetSVG, title: "伊拉克",scale: 0.6},
//Italy 22
{   latitude:  41.995131,
longitude:  14.082671,svgPath: targetSVG, title: "義大利",scale: 0.6,color: "blue"},
//India 19
{   latitude:  22.278527,
longitude:  76.233429,svgPath: targetSVG, title: "印度",scale: 0.6},
//Mexico 18
{   latitude:  24.249346,
longitude:  -104.319638,svgPath: targetSVG, title: "墨西哥",scale: 0.6},
//Austria 16
{   latitude:  47.474492,
longitude:  14.310638,svgPath: targetSVG, title: "奧地利",scale: 0.6,color: "blue"},
//Switzerland 16
{   latitude:  46.836386,
longitude:  8.420011,svgPath: targetSVG, title: "瑞士",scale: 0.6},
//Cuba 15
{   latitude:  21.674948,
longitude:  -78.238512,svgPath: targetSVG, title: "古巴",scale: 0.6},
//Egypt 15
{   latitude:  27.214789,
longitude:  27.354548,svgPath: targetSVG, title: "埃及",scale: 0.6},
//Myanmar 15
{   latitude:  22.06795,
longitude:  94.574826,svgPath: targetSVG, title: "緬甸",scale: 0.6},
//Somalia 15
{   latitude:  4.994271,
longitude:  46.450282,svgPath: targetSVG, title: "索馬利亞",scale: 0.6},
//Spain 15
{   latitude:  40.195778,
longitude:  -3.085503,svgPath: targetSVG, title: "西班牙",scale: 0.6},
//Greece 14
{   latitude:  39.38854,
longitude:  21.888451,svgPath: targetSVG, title: "希臘",scale: 0.6},
//Libya 14
{   latitude:  26.524087,
longitude:  18.043077,svgPath: targetSVG, title: "利比亞",scale: 0.6},
//South Sudan 14
{   latitude:  7.01084,
longitude:  30.666776,svgPath: targetSVG, title: "南蘇丹",scale: 0.6},
//Afghanistan  13
{   latitude:  33.530013,
longitude:  67.350789,svgPath: targetSVG, title: "阿富汗",scale: 0.6},
//Hong Kong 13
{   latitude:  22.232369,
longitude:  114.06397,svgPath: targetSVG, title: "香港",scale: 0.6},
//Argentina 12
{   latitude:  -34.570909,
longitude:  -58.015536,svgPath: targetSVG, title: "阿根廷",scale: 0.6},
//Ethiopia 12
{   latitude:  8.485274,
longitude:  40.273958,svgPath: targetSVG, title: "衣索比亞",scale: 0.6},
//Haiti 12
{   latitude:  18.562854,
longitude:  -72.173306,svgPath: targetSVG, title: "海地",scale: 0.6},
//Kenya 12
{   latitude:  -0.110973,
longitude:  37.560551,svgPath: targetSVG, title: "肯亞",scale: 0.6},
//Netherlands  12
{   latitude:  52.045512,
longitude:  5.174602,svgPath: targetSVG, title: "荷蘭",scale: 0.6},
//Pakistan 12
{   latitude:  30.160382,
longitude:  69.200793,svgPath: targetSVG, title: "巴基斯坦",scale: 0.6},
//Peru 12
{   latitude:  -9.122757,
longitude:  -75.030928,svgPath: targetSVG, title: "祕魯",scale: 0.6},
//South Africa 12
{   latitude:  -30.390786,
longitude:  22.565028,svgPath: targetSVG, title: "南非",scale: 0.6},
//Thailand 11
{   latitude:  15.505224,
longitude:  101.000057,svgPath: targetSVG, title: "泰國",scale: 0.6},
//Vietnam 10
{   latitude:  13.584647,
longitude:  108.170544,svgPath: targetSVG, title: "越南",scale: 0.6},
//Iran 9
{   latitude:  32.221076,
longitude:  53.400528,svgPath: targetSVG, title: "伊朗",scale: 0.6},
//
//#1-8 New Zealand   8
{   latitude:  -40.574528,
longitude:  174.480774,svgPath: targetSVG, title: "紐西蘭",scale: 0.3},
//Panama 8
{   latitude:  8.275817,
longitude:  -80.474794,svgPath: targetSVG, title: "巴拿馬",scale: 0.3},
//Ukraine 8
{   latitude:  48.194162,
longitude:  31.093371,svgPath: targetSVG, title: "烏克蘭",scale: 0.3},
//Yemen 8
{   latitude:  15.291088,
longitude:  48.293523,svgPath: targetSVG, title: "葉門",scale: 0.3},
//Zimbabwe 8
{   latitude:  -19.045214,
longitude:  29.100451,svgPath: targetSVG, title: "辛巴威",scale: 0.3},
//Democratic Republic of the Congo 7
{   latitude:  -4.03136,
longitude:  20.441061,svgPath: targetSVG, title: "剛果民主共和國",scale: 0.3},
//Gambia 7
{   latitude:  13.242756,
longitude:  -15.181021,svgPath: targetSVG, title: "甘比亞",scale: 0.3},
//Gabon 6
{   latitude:  -0.535954,
longitude:  11.354171,svgPath: targetSVG, title: "加彭",scale: 0.3},
//Korea 6
{   latitude:  37.33014,
longitude:  127.565936,svgPath: targetSVG, title: "南韓",scale: 0.3},
//Saudi-Arabia 6
{   latitude:  23.421289,
longitude:  45.043871,svgPath: targetSVG, title: "沙烏地阿拉伯",scale: 0.3},
//Singapore 6
{   latitude:  1.204484,
longitude:  103.491371,svgPath: targetSVG, title: "新加玻",scale: 0.3},
//Uganda 6
{   latitude:  1.181667,
longitude:  32.163219,svgPath: targetSVG, title: "烏干達",scale: 0.3},
//Bolivia 5
{   latitude:  -16.275287,
longitude:  -63.381152,svgPath: targetSVG, title: "玻利維亞",scale: 0.3},
//Burundi 5
{   latitude:  -3.252668,
longitude:  29.553428,svgPath: targetSVG, title: "蒲隆地",scale: 0.3},
//Central African Republic 5
{   latitude:  6.255029,
longitude:  20.591404,svgPath: targetSVG, title: "中非共和國",scale: 0.3},
//Congo 5
{   latitude:  -0.13576,
longitude:  15.493301,svgPath: targetSVG, title: "剛果",scale: 0.3},
//Ecuador 5
{   latitude:  -1.515436,
longitude:  -78.093314,svgPath: targetSVG, title: "厄瓜多",scale: 0.3},
//El Salvador 5
{   latitude:  -13.464358,
longitude:  -88.541827,svgPath: targetSVG, title: "薩爾瓦多",scale: 0.3},
//Ghana 5
{   latitude:  7.552128,
longitude:  -1.010607,svgPath: targetSVG, title: "迦納",scale: 0.3},
//Hungary 5
{   latitude:  47.090929,
longitude:  19.302939,svgPath: targetSVG, title: "匈牙利",scale: 0.3},
//Israel 5
{   latitude:  30.593214,
longitude:  34.512319,svgPath: targetSVG, title: "以色列",scale: 0.3},
//Luanda 5
{   latitude:  8.503212,
longitude:  13.172362,svgPath: targetSVG, title: "盧安達",scale: 0.3},
//Norway 5
{   latitude:  61.293895,
longitude:  8.321775,svgPath: targetSVG, title: "挪威",scale: 0.3},
//Poland 5
{   latitude:  51.550998,
longitude:  19.084249,svgPath: targetSVG, title: "波蘭",scale: 0.3},
//Vatican 5
{   latitude:  41.54105,
longitude:  12.27122,svgPath: targetSVG, title: "梵蒂岡",scale: 0.3},
//Chile 4
{   latitude:  -35.411461,
longitude:  -71.293656,svgPath: targetSVG, title: "智利",scale: 0.3},
//Guatemala 4
{   latitude:  14.380569,
longitude:  -90.302478,svgPath: targetSVG, title: "瓜地馬拉",scale: 0.3},
//Laos 4
{   latitude:  19.512257,
longitude:  102.294379,svgPath: targetSVG, title: "寮國",scale: 0.3},
//Niger 4
{   latitude:  17.35257,
longitude:  8.133348,svgPath: targetSVG, title: "尼日",scale: 0.3},
//Senegal 4
{   latitude:  14.53465,
longitude:  -14.034654,svgPath: targetSVG, title: "塞內加爾",scale: 0.3},
//Sudan 4
{   latitude:  12.303873,
longitude:  30.13255,svgPath: targetSVG, title: "蘇丹",scale: 0.3},
//Zambia 4
{   latitude:  -13.080203,
longitude:  27.505759,svgPath: targetSVG, title: "尚比亞",scale: 0.3},
//Bengal 3
{   latitude:  22.591232,
longitude:  87.511791,svgPath: targetSVG, title: "孟加拉",scale: 0.3},
//Benin 3
{   latitude:  9.183157,
longitude:  2.19264,svgPath: targetSVG, title: "貝南",scale: 0.3},
//Cameroon 3
{   latitude:  7.222246,
longitude:  12.201771,svgPath: targetSVG, title: "喀麥隆",scale: 0.3},
//Denmark 3
{   latitude:  56.19026,
longitude:  9.333125,svgPath: targetSVG, title: "丹麥",scale: 0.3},
//Iceland 3
{   latitude:  64.544462,
longitude:  -18.550882,svgPath: targetSVG, title: "冰島",scale: 0.3},
//Malaysia 3
{   latitude:  3.023682,
longitude:  102.442943,svgPath: targetSVG, title: "馬來西亞",scale: 0.3},
//Marley 3
{   latitude:  17.341449,
longitude:  -3.59462,svgPath: targetSVG, title: "馬利",scale: 0.3},
//Morocco 3
{   latitude:  31.013707,
longitude:  -1.184154,svgPath: targetSVG, title: "摩洛哥",scale: 0.3},
//Mozambique 3
{   latitude:  -17.525927,
longitude:  36.180575,svgPath: targetSVG, title: "莫三比克",scale: 0.3},
//Papua New Guinea 3
{   latitude:  -6.035556,
longitude:  143.190882,svgPath: targetSVG, title: "巴布亞紐幾內亞",scale: 0.3},
//Sweden 3
{   latitude:  59.592045,
longitude:  15.03297,svgPath: targetSVG, title: "瑞典",scale: 0.3},
//Tanzania 3
{   latitude:  -6.371953,
longitude:  35.200309,svgPath: targetSVG, title: "坦尚尼亞",scale: 0.3},
//Tunisia 3
{   latitude:  33.531291,
longitude:  9.3215,svgPath: targetSVG, title: "突尼西亞",scale: 0.3},
//Bulgaria 2
{   latitude:  42.513087,
longitude:  26.202803,svgPath: targetSVG, title: "保加利亞",scale: 0.3},
//Croatia 2
{   latitude:  45.030903,
longitude:  15.195737,svgPath: targetSVG, title: "克羅埃西亞",scale: 0.3},
//Dominican Republic 2
{   latitude:  18.441319,
longitude:  -70.122997,svgPath: targetSVG, title: "多明尼加",scale: 0.3},
//Honduras 2
{   latitude:  15.031402,
longitude:  -85.274883,svgPath: targetSVG, title: "宏都拉斯",scale: 0.3},
//Jamaica 2
{   latitude:  18.063449,
longitude:  -77.175103,svgPath: targetSVG, title: "牙買加",scale: 0.3},
//Luxembourg 2
{   latitude:  49.451119,
longitude:  6.130162,svgPath: targetSVG, title: "盧森堡",scale: 0.3},
//Macedonia 2
{   latitude:  41.385468,
longitude:  21.483702,svgPath: targetSVG, title: "馬其頓",scale: 0.3},
//Mongolia 2
{   latitude:  46.154684,
longitude:  104.282196,svgPath: targetSVG, title: "蒙古",scale: 0.3},
//Nicaragua 2
{   latitude:  12.401898,
longitude:  -85.032801,svgPath: targetSVG, title: "尼加拉瓜",scale: 0.3},
//Serbia 2
{   latitude:  44.005717,
longitude:  21.000719,svgPath: targetSVG, title: "塞爾維亞",scale: 0.3},
//Slovenia 2
{   latitude:  45.510751,
longitude:  15.441007,svgPath: targetSVG, title: "斯洛維尼亞",scale: 0.3},
//Solomon Islands 2
{   latitude:  -9.555576,
longitude:  159.445889,svgPath: targetSVG, title: "索羅門群島",scale: 0.3},
//Sri Lanka 2
{   latitude:  7.533399,
longitude:  80.461847,svgPath: targetSVG, title: "斯里蘭卡",scale: 0.3},
//Algeria 1
{   latitude:  28.020199,
longitude:  1.393465,svgPath: targetSVG, title: "阿爾及利亞",scale: 0.3},
//Angola 1
{   latitude:  -11.120969,
longitude:  17.522599,svgPath: targetSVG, title: "安哥拉",scale: 0.3},
//Belarus   1
{   latitude:  53.423531,
longitude:  27.57122,svgPath: targetSVG, title: "白俄羅斯",scale: 0.3},
//Belize 1
{   latitude:  17.112356,
longitude:  -88.295154,svgPath: targetSVG, title: "貝里斯",scale: 0.3},
//Burkina Faso 1
{   latitude:  12.1418,
longitude:  -1.334173,svgPath: targetSVG, title: "布吉納法索",scale: 0.3},
//Cadar 1
{   latitude:  25.211737,
longitude:  51.110198,svgPath: targetSVG, title: "卡達",scale: 0.3},
//Cambodia 1
{   latitude:  12.335644,
longitude:  104.592747,svgPath: targetSVG, title: "柬埔寨",scale: 0.3},
//Chad 1
{   latitude:  15.2715,
longitude:  18.435595,svgPath: targetSVG, title: "查德",scale: 0.3},
//Djibouti 1
{   latitude:  11.49305,
longitude:  42.352499,svgPath: targetSVG, title: "吉布地",scale: 0.3},
//Dominican Republic 1
{   latitude:  18.44085,
longitude:  -70.094554,svgPath: targetSVG, title: "多明尼加",scale: 0.3},
//Dubai 1
{   latitude:  25.121746,
longitude:  55.161482,svgPath: targetSVG, title: "杜拜",scale: 0.3},
//Estonia 1
{   latitude:  58.354298,
longitude:  25.004899,svgPath: targetSVG, title: "愛沙尼亞",scale: 0.3},
//Fiji 1
{   latitude:  -17.424814,
longitude:  178.035411,svgPath: targetSVG, title: "斐濟",scale: 0.3},
//Finland 1
{   latitude:  61.55268,
longitude:  25.445335,svgPath: targetSVG, title: "芬蘭",scale: 0.3},
//Holy See 1
// {   latitude:  41.54105,
//    longitude:  12.27122,svgPath: targetSVG, title: "聖座",scale: 0.3},
//Ivory Coast 1
{   latitude:  7.322396,
longitude:  -5.324949,svgPath: targetSVG, title: "象牙海岸",scale: 0.3},
//Jordan 1
{   latitude:  30.350659,
longitude:  36.141829,svgPath: targetSVG, title: "約旦",scale: 0.3},
//Kuwait 1
{   latitude:  29.184198,
longitude:  47.285436,svgPath: targetSVG, title: "科威特",scale: 0.3},
//Kyrgyzstan 1
{   latitude:  41.121577,
longitude:  74.455795,svgPath: targetSVG, title: "吉爾吉斯",scale: 0.3},
//Lebanon 1
{   latitude:  33.5117,
longitude:  35.514423,svgPath: targetSVG, title: "黎巴嫩",scale: 0.3},
//Liberia 1
{    latitude:  6.2541,
longitude:  -9.25462,svgPath: targetSVG, title: "賴比瑞亞",scale: 0.3} ,
//Madagascar 1
{    latitude:  -18.460101,
longitude:  46.520879,svgPath: targetSVG, title: "馬達加斯加",scale: 0.3} ,
//Moldova 1
{    latitude:  47.244187,
longitude:  28.221159,svgPath: targetSVG, title: "摩爾多瓦",scale: 0.3} ,
//Montenegro 1
{    latitude:  42.4223124,
longitude:  19.22278,svgPath: targetSVG, title: "蒙特內哥羅",scale: 0.3} ,
//Palestine 1
{    latitude:  31.91222,
longitude:  35.22028,svgPath: targetSVG, title: "巴勒斯坦",scale: 0.3} ,
//Portugal 1
{    latitude:  39.235954,
longitude:  -8.132803,svgPath: targetSVG, title: "葡萄牙",scale: 0.3} ,
//Romania 1
{    latitude:  45.563538,
longitude:  24.580023,svgPath: targetSVG, title: "羅馬尼亞",scale: 0.3 } ,
//Sao Tome and Principe 1
{    latitude:  0.11109,
longitude:  6.364709 ,svgPath: targetSVG, title: "聖多美普林西比",scale: 0.3} ,
//Swaziland 1
{   latitude:  -26.312101,
longitude:  31.275712,svgPath: targetSVG, title: "史瓦濟蘭",scale: 0.3},
//United Arab Emirates 1
{    latitude:  23.252667,
longitude:  53.505214,svgPath: targetSVG, title: "阿拉伯聯合大公國",scale: 0.3 } ,
//Uzbekistan 1
{   latitude:  41.223897,
longitude:  64.350694,svgPath: targetSVG, title: "烏茲別克",scale: 0.3}];


   dataProvider.linkToObject = Taiwan;
   dataProvider.images = cities;
   map.dataProvider = dataProvider;
	map.backgroundZoomsToTop = true;
	map.linesAboveImages = true;
   map.write("flight");

});