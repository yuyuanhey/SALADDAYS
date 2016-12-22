var test1 = {"test": [{
    "country": "Afghanistan",
    "code": "AFG",
    "count": 1
  }]};
var color = ["rgba(255, 0, 0, 1)", "rgba(255, 0, 0, 0.7)", "rgba(255, 0, 0, 0.5)", "rgba(255, 0, 0, 0.3)", "rgba(255, 0, 0, 0.1)"]
var colors = d3.scale.category20b();
var dataset = d3.csv("C:/Users/user/desktop/testWorld.csv",function(d){console.log(d);});
var basic_choropleth = new Datamap({
		element: document.getElementById("container"),
		geographyConfig: {
    		highlightBorderColor: '#bada55',
   			popupTemplate: function(geography, data) {
   				if(typeof data.count == 'undefined')
   					data.count = 0;
     			return '<div class="hoverinfo">' + geography.properties.name
     			+ " " +  data.count + ' ';
     		},
    		highlightBorderWidth: 3
  		},
	  // projection: 'mercator',
		fills: {
		AFGcolor: color[0],
	  	defaultFill: color[4],
	  	authorHasTraveledTo: color[3],
	  	try: "#ccc"
		},
		data: {
			"AFG": { "fillKey": "AFGcolor", "count": 100},
			"ALB": { "fillKey": "AFGcolor"}
			// DZA: { fillKey: "defaultFill"},
			// AND: { fillKey: "defaultFill"},
			// AGO: { fillKey: "authorHasTraveledTo"},
			// ARG: { fillKey: "authorHasTraveledTo"},
			// ARM: { fillKey: "authorHasTraveledTo"},
			// AIA: { fillKey: "authorHasTraveledTo"},
			// AUS: { fillKey: "authorHasTraveledTo"},
			// AZE: { fillKey: "authorHasTraveledTo"},
			// BHS: { fillKey: "authorHasTraveledTo"},
			// BHR: { fillKey: "authorHasTraveledTo"}

			/*d : {fillKey : "try"}
			USA: { fillKey: "authorHasTraveledTo" },
			JPN: { fillKey: "authorHasTraveledTo" },
			ITA: { fillKey: "authorHasTraveledTo" },
			CRI: { fillKey: "authorHasTraveledTo" },
			KOR: { fillKey: "authorHasTraveledTo" },
			DEU: { fillKey: "authorHasTraveledTo" },
			KOR: { fillKey: "authorHasTraveledTo"}
	    // GER: { fillKey: "try" },*/
    	}
}); 