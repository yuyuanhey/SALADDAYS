var chart;
var chartDataBubble = [
  {
    "code": "DZA",
    "country": "Algeria",
    "count": 1,
    "index": 36.63,
    "continent": "Africa",
    "color": "#0000ff"
  },
  {
    "code": "AGO",
    "country": "Angola",
    "count": 1,
    "index": 37.84,
    "continent": "Africa",
    "color": "#0000ff"
  },
  {
    "code": "BEN",
    "country": "Benin",
    "count": 3,
    "index": 29.24,
    "continent": "Africa",
    "color": "#0000ff"
  },
  {
    "code": "BWA",
    "country": "Botswana",
    "count": 0,
    "index": 22.91,
    "continent": "Africa",
    "color": "#0000ff"
  },
  {
    "code": "BFA",
    "country": "Burkina Faso",
    "count": 1,
    "index": 23.79,
    "continent": "Africa",
    "color": "#0000ff"
  },
  {
    "code": "BDI",
    "country": "Burundi",
    "count": 5,
    "index": 42.39,
    "continent": "Africa",
    "color": "#0000ff"
  },
  {
    "code": "CMR",
    "country": "Cameroon",
    "count": 3,
    "index": 39.63,
    "continent": "Africa",
    "color": "#0000ff"
  },
  {
    "code": "CAF",
    "country": "Central African Republic",
    "count": 5,
    "index": "null",
    "continent": "Africa",
    "color": "#0000ff"
  },
  {
    "code": "TCD",
    "country": "Chad",
    "count": 1,
    "index": 40.17,
    "continent": "Africa",
    "color": "#0000ff"
  },
  {
    "code": "DJI",
    "country": "Djibouti",
    "count": 1,
    "index": 71.04,
    "continent": "Africa",
    "color": "#0000ff"
  },
  {
    "code": "EGY",
    "country": "Egypt",
    "count": 15,
    "index": 50.17,
    "continent": "Africa",
    "color": "#0000ff"
  },
  {
    "code": "ERI",
    "country": "Eritrea",
    "count": 0,
    "index": 84.86,
    "continent": "Africa",
    "color": "#0000ff"
  },
  {
    "code": "ETH",
    "country": "Ethiopia",
    "count": 1,
    "index": 41.38,
    "continent": "Africa",
    "color": "#0000ff"
  },
  {
    "code": "GAB",
    "country": "Gabon",
    "count": 6,
    "index": 31.38,
    "continent": "Africa",
    "color": "#0000ff"
  },
  {
    "code": "GMB",
    "country": "Gambia",
    "count": 7,
    "index": 44.5,
    "continent": "Africa",
    "color": "#0000ff"
  },
  {
    "code": "GHA",
    "country": "Ghana",
    "count": 5,
    "index": 15.5,
    "continent": "Africa",
    "color": "#0000ff"
  },
  {
    "code": "GIN",
    "country": "Guinea",
    "count": 0,
    "index": 32.56,
    "continent": "Africa",
    "color": "#0000ff"
  },
  {
    "code": "GNB",
    "country": "Guinea Bissau",
    "count": 0,
    "index": 28.7,
    "continent": "Africa",
    "color": "#0000ff"
  },
  {
    "code": "KEN",
    "country": "Kenya",
    "count": 12,
    "index": 32.07,
    "continent": "Africa",
    "color": "#0000ff"
  },
  {
    "code": "LSO",
    "country": "Lesotho",
    "count": 0,
    "index": 28.36,
    "continent": "Africa",
    "color": "#0000ff"
  },
  {
    "code": "LBR",
    "country": "Liberia",
    "count": 1,
    "index": 30.78,
    "continent": "Africa",
    "color": "#0000ff"
  },
  {
    "code": "MDG",
    "country": "Madagascar",
    "count": 1,
    "index": 27.43,
    "continent": "Africa",
    "color": "#0000ff"
  },
  {
    "code": "MWI",
    "country": "Malawi",
    "count": 0,
    "index": 26.41,
    "continent": "Africa",
    "color": "#0000ff"
  },
  {
    "code": "MLI",
    "country": "Mali",
    "count": 0,
    "index": 36.33,
    "continent": "Africa",
    "color": "#0000ff"
  },
  {
    "code": "MRT",
    "country": "Mauritania",
    "count": 0,
    "index": 25.27,
    "continent": "Africa",
    "color": "#0000ff"
  },
  {
    "code": "MAR",
    "country": "Morocco",
    "count": 3,
    "index": 39.19,
    "continent": "Africa",
    "color": "#0000ff"
  },
  {
    "code": "MOZ",
    "country": "Mozambique",
    "count": 3,
    "index": 29.98,
    "continent": "Africa",
    "color": "#0000ff"
  },
  {
    "code": "NAM",
    "country": "Namibia",
    "count": 0,
    "index": 12.5,
    "continent": "Africa",
    "color": "#0000ff"
  },
  {
    "code": "NER",
    "country": "Niger",
    "count": 4,
    "index": 23.85,
    "continent": "Africa",
    "color": "#0000ff"
  },
  {
    "code": "NGA",
    "country": "Nigeria",
    "count": 28,
    "index": 34.09,
    "continent": "Africa",
    "color": "#0000ff"
  },
  {
    "code": "COG",
    "country": "Republic of the Congo",
    "count": 0,
    "index": 44.31,
    "continent": "Africa",
    "color": "#0000ff"
  },
  {
    "code": "RWA",
    "country": "Rwanda",
    "count": 0,
    "index": 56.57,
    "continent": "Africa",
    "color": "#0000ff"
  },
  {
    "code": "SEN",
    "country": "Senegal",
    "count": 4,
    "index": 27.77,
    "continent": "Africa",
    "color": "#0000ff"
  },
  {
    "code": "SLE",
    "country": "Sierra Leone",
    "count": 0,
    "index": 28.47,
    "continent": "Africa",
    "color": "#0000ff"
  },
  {
    "code": "SOM",
    "country": "Somalia",
    "count": 15,
    "index": 72.31,
    "continent": "Africa",
    "color": "#0000ff"
  },
  {
    "code": "ZAF",
    "country": "South Africa",
    "count": 12,
    "index": 22.06,
    "continent": "Africa",
    "color": "#0000ff"
  },
  {
    "code": "SSD",
    "country": "South Sudan",
    "count": 14,
    "index": 38.04,
    "continent": "Africa",
    "color": "#0000ff"
  },
  {
    "code": "SDN",
    "country": "Sudan",
    "count": 4,
    "index": 72.34,
    "continent": "Africa",
    "color": "#0000ff"
  },
  {
    "code": "SWZ",
    "country": "Swaziland",
    "count": 1,
    "index": 47.28,
    "continent": "Africa",
    "color": "#0000ff"
  },
  {
    "code": "TGO",
    "country": "Togo",
    "count": 0,
    "index": 28.5,
    "continent": "Africa",
    "color": "#0000ff"
  },
  {
    "code": "TUN",
    "country": "Tunisia",
    "count": 3,
    "index": 38.68,
    "continent": "Africa",
    "color": "#0000ff"
  },
  {
    "code": "UGA",
    "country": "Uganda",
    "count": 6,
    "index": 31.65,
    "continent": "Africa",
    "color": "#0000ff"
  },
  {
    "code": "TZA",
    "country": "United Republic of Tanzania",
    "count": 0,
    "index": 28.09,
    "continent": "Africa",
    "color": "#0000ff"
  },
  {
    "code": "ESH",
    "country": "Western Sahara",
    "count": 0,
    "index": "null",
    "continent": "Africa",
    "color": "#0000ff"
  },
  {
    "code": "YEM",
    "country": "Yemen",
    "count": 8,
    "index": 66.36,
    "continent": "Africa",
    "color": "#ff0000"
  },
  {
    "code": "ZAR",
    "country": "Zaire",
    "count": 0,
    "index": "null",
    "continent": "Africa",
    "color": "#ff0000"
  },
  {
    "code": "ZMB",
    "country": "Zambia",
    "count": 4,
    "index": 34.35,
    "continent": "Africa",
    "color": "#ff0000"
  },
  {
    "code": "ZWE",
    "country": "Zimbabwe",
    "count": 8,
    "index": 39.19,
    "continent": "Africa",
    "color": "#ff0000"
  },
  {
    "code": "AFG",
    "country": "Afghanistan",
    "count": 13,
    "index": 37.44,
    "continent": "Asian",
    "color": "#ff0000"
  },
  {
    "code": "AIA",
    "country": "Australia",
    "count": 28,
    "index": 17.03,
    "continent": "Asian",
    "color": "#ff0000"
  },
  {
    "code": "BHR",
    "country": "Bahrain",
    "count": 0,
    "index": 58.69,
    "continent": "Asian",
    "color": "#ff0000"
  },
  {
    "code": "BGD",
    "country": "Bangladesh",
    "count": 0,
    "index": 42.95,
    "continent": "Asian",
    "color": "#ff0000"
  },
  {
    "code": "BTN",
    "country": "Bhutan",
    "count": 0,
    "index": 32.65,
    "continent": "Asian",
    "color": "#ff0000"
  },
  {
    "code": "BRN",
    "country": "Brunei Darussalam",
    "count": 0,
    "index": 36.76,
    "continent": "Asian",
    "color": "#ff0000"
  },
  {
    "code": "KHM",
    "country": "Cambodia",
    "count": 1,
    "index": 40.99,
    "continent": "Asian",
    "color": "#ff0000"
  },
  {
    "code": "COM",
    "country": "Comoros?",
    "count": 0,
    "index": "null",
    "continent": "Asian",
    "color": "#ff0000"
  },
  {
    "code": "COK",
    "country": "Cook Islands",
    "count": 0,
    "index": "null",
    "continent": "Asian",
    "color": "#ff0000"
  },
  {
    "code": "TMP",
    "country": "East Timor",
    "count": 0,
    "index": 32.63,
    "continent": "Asian",
    "color": "#ff0000"
  },
  {
    "code": "FJI",
    "country": "Fiji",
    "count": 1,
    "index": 31.28,
    "continent": "Asian",
    "color": "#ff0000"
  },
  {
    "code": "GUF",
    "country": "French Guiana",
    "count": 0,
    "index": "null",
    "continent": "Asian",
    "color": "#ff0000"
  },
  {
    "code": "IND",
    "country": "India",
    "count": 19,
    "index": 40.49,
    "continent": "Asian",
    "color": "#ff0000"
  },
  {
    "code": "IDN",
    "country": "Indonesia",
    "count": 22,
    "index": 40.75,
    "continent": "Asian",
    "color": "#ff0000"
  },
  {
    "code": "IRN",
    "country": "Iran",
    "count": 9,
    "index": 72.32,
    "continent": "Asian",
    "color": "#ff0000"
  },
  {
    "code": "IRQ",
    "country": "Iraq",
    "count": 22,
    "index": 47.76,
    "continent": "Asian",
    "color": "#ff0000"
  },
  {
    "code": "ISR",
    "country": "Israel",
    "count": 5,
    "index": 32.09,
    "continent": "Asian",
    "color": "#ff0000"
  },
  {
    "code": "JPN",
    "country": "Japan",
    "count": 85,
    "index": 26.95,
    "continent": "Asian",
    "color": "#ff0000"
  },
  {
    "code": "JOR",
    "country": "Jordan",
    "count": 1,
    "index": 42.07,
    "continent": "Asian",
    "color": "#ff0000"
  },
  {
    "code": "KAZ",
    "country": "Kazakhstan",
    "count": 1,
    "index": 53.46,
    "continent": "Asian",
    "color": "#ff0000"
  },
  {
    "code": "KIR",
    "country": "Kiribati",
    "count": 0,
    "index": "null",
    "continent": "Asian",
    "color": "#ff0000"
  },
  {
    "code": "KOR",
    "country": "Korea",
    "count": 6,
    "index": 26.55,
    "continent": "Asian",
    "color": "#ff0000"
  },
  {
    "code": "KWT",
    "country": "Kuwait",
    "count": 1,
    "index": 30.84,
    "continent": "Asian",
    "color": "#ff0000"
  },
  {
    "code": "KGZ",
    "country": "Kyrgyzstan",
    "count": 1,
    "index": 30.69,
    "continent": "Asian",
    "color": "#ff0000"
  },
  {
    "code": "LAO",
    "country": "Laos",
    "count": 4,
    "index": "null",
    "continent": "Asian",
    "color": "#ff0000"
  },
  {
    "code": "LBN",
    "country": "Lebanon",
    "count": 1,
    "index": 31.81,
    "continent": "Asian",
    "color": "#ff0000"
  },
  {
    "code": "LBY",
    "country": "Libya",
    "count": 14,
    "index": 45.99,
    "continent": "Asian",
    "color": "#ff0000"
  },
  {
    "code": "MYS",
    "country": "Malaysia",
    "count": 3,
    "index": 43.29,
    "continent": "Asian",
    "color": "#ff0000"
  },
  {
    "code": "MDV",
    "country": "Maldives",
    "count": 0,
    "index": 34.32,
    "continent": "Asian",
    "color": "#ff0000"
  },
  {
    "code": "MHL",
    "country": "Marshall Islands",
    "count": 0,
    "index": "null",
    "continent": "Asian",
    "color": "#ff0000"
  },
  {
    "code": "MNG",
    "country": "Mongolia",
    "count": 2,
    "index": 25.25,
    "continent": "Asian",
    "color": "#ff0000"
  },
  {
    "code": "MMR",
    "country": "Myanmar",
    "count": 15,
    "index": 42.08,
    "continent": "Asian",
    "color": "#ff0000"
  },
  {
    "code": "NPL",
    "country": "Nepal",
    "count": 0,
    "index": 32.71,
    "continent": "Asian",
    "color": "#ff0000"
  },
  {
    "code": "NCL",
    "country": "New Caledonia",
    "count": 0,
    "index": "null",
    "continent": "Asian",
    "color": "#ff0000"
  },
  {
    "code": "NZL",
    "country": "New Zealand",
    "count": 8,
    "index": 10.06,
    "continent": "Asian",
    "color": "#ff0000"
  },
  {
    "code": "PRK",
    "country": "North Korea",
    "count": 31,
    "index": 83.25,
    "continent": "Asian",
    "color": "#ff0000"
  },
  {
    "code": "OMN",
    "country": "Oman",
    "count": 0,
    "index": 38.83,
    "continent": "Asian",
    "color": "#ff0000"
  },
  {
    "code": "PAK",
    "country": "Pakistan",
    "count": 12,
    "index": 50.46,
    "continent": "Asian",
    "color": "#ff0000"
  },
  {
    "code": "PNG",
    "country": "Papua New Guinea",
    "count": 3,
    "index": 25.87,
    "continent": "Asian",
    "color": "#ff0000"
  },
  {
    "code": "PHL",
    "country": "Philippines",
    "count": 32,
    "index": 41.19,
    "continent": "Asian",
    "color": "#ff0000"
  },
  {
    "code": "QAT",
    "country": "Qatar",
    "count": 0,
    "index": 35.35,
    "continent": "Asian",
    "color": "#ff0000"
  },
  {
    "code": "SAU",
    "country": "Saudi Arabia",
    "count": 6,
    "index": 59.41,
    "continent": "Asian",
    "color": "#ff0000"
  },
  {
    "code": "SGP",
    "country": "Singapore",
    "count": 6,
    "index": 45.87,
    "continent": "Asian",
    "color": "#ff0000"
  },
  {
    "code": "SLB",
    "country": "Solomon Islands",
    "count": 2,
    "index": "null",
    "continent": "Asian",
    "color": "#ff0000"
  },
  {
    "code": "LKA",
    "country": "Sri Lanka",
    "count": 2,
    "index": 60.28,
    "continent": "Asian",
    "color": "#ff0000"
  },
  {
    "code": "SYR",
    "country": "Syria",
    "count": 40,
    "index": 77.29,
    "continent": "Asian",
    "color": "#ff0000"
  },
  {
    "code": "TJK",
    "country": "Tajikistan",
    "count": 0,
    "index": 36.19,
    "continent": "Asian",
    "color": "#ff0000"
  },
  {
    "code": "THA",
    "country": "Thailand",
    "count": 11,
    "index": 40.07,
    "continent": "Asian",
    "color": "#ff0000"
  },
  {
    "code": "TUR",
    "country": "Turkey",
    "count": 34,
    "index": 44.16,
    "continent": "Asian",
    "color": "#ff0000"
  },
  {
    "code": "TKM",
    "country": "Turkmenistan",
    "count": 0,
    "index": 80.83,
    "continent": "Asian",
    "color": "#ff0000"
  },
  {
    "code": "TUV",
    "country": "Tuvalu",
    "count": 0,
    "index": "null",
    "continent": "Asian",
    "color": "#ff0000"
  },
  {
    "code": "ARE",
    "country": "United Arab Emirates",
    "count": 1,
    "index": 36.73,
    "continent": "Asian",
    "color": "#ff0000"
  },
  {
    "code": "UZB",
    "country": "Uzbekistan",
    "count": 1,
    "index": 61.14,
    "continent": "Asian",
    "color": "#ff0000"
  },
  {
    "code": "VUT",
    "country": "Vanuatu",
    "count": 0,
    "index": "null",
    "continent": "Asian",
    "color": "#ff0000"
  },
  {
    "code": "VNM",
    "country": "Vietnam",
    "count": 10,
    "index": 72.63,
    "continent": "Asian",
    "color": "#ff0000"
  },
  {
    "code": "CHN",
    "country": "China",
    "count": 42,
    "index": 73.55,
    "continent": "Cross-strait",
    "color": "#ffff00"
  },
  {
    "code": "TWN",
    "country": "Taiwan",
    "count": 37,
    "index": 24.83,
    "continent": "Cross-strait",
    "color": "#ffff00"
  },
  {
    "code": "ALB",
    "country": "Albania",
    "count": 0,
    "index": 28.77,
    "continent": "Europe",
    "color": "#ff8000"
  },
  {
    "code": "AND",
    "country": "Andorra",
    "count": 0,
    "index": 19.87,
    "continent": "Europe",
    "color": "#ff8000"
  },
  {
    "code": "ARM",
    "country": "Armenia",
    "count": 0,
    "index": 28.43,
    "continent": "Europe",
    "color": "#ff8000"
  },
  {
    "code": "AUS",
    "country": "Austria",
    "count": 16,
    "index": 10.85,
    "continent": "Europe",
    "color": "#ff8000"
  },
  {
    "code": "AZE",
    "country": "Azerbaijan",
    "count": 0,
    "index": 58.41,
    "continent": "Europe",
    "color": "#ff8000"
  },
  {
    "code": "BLR",
    "country": "Belarus",
    "count": 1,
    "index": 47.98,
    "continent": "Europe",
    "color": "#ff8000"
  },
  {
    "code": "BEL",
    "country": "Belgium",
    "count": 71,
    "index": 11.98,
    "continent": "Europe",
    "color": "#ff8000"
  },
  {
    "code": "BIH",
    "country": "Bosnia and Herzegovina",
    "count": 0,
    "index": 27.51,
    "continent": "Europe",
    "color": "#ff8000"
  },
  {
    "code": "BGR",
    "country": "Bulgaria",
    "count": 2,
    "index": 32.91,
    "continent": "Europe",
    "color": "#ff8000"
  },
  {
    "code": "HRV",
    "country": "Croatia",
    "count": 2,
    "index": 26.12,
    "continent": "Europe",
    "color": "#ff8000"
  },
  {
    "code": "CYP",
    "country": "Cyprus",
    "count": 0,
    "index": 16.52,
    "continent": "Europe",
    "color": "#ff8000"
  },
  {
    "code": "CZE",
    "country": "Czech Republic",
    "count": 0,
    "index": 11.62,
    "continent": "Europe",
    "color": "#ff8000"
  },
  {
    "code": "DNK",
    "country": "Denmark",
    "count": 3,
    "index": 8.24,
    "continent": "Europe",
    "color": "#ff8000"
  },
  {
    "code": "EST",
    "country": "Estonia",
    "count": 1,
    "index": 11.19,
    "continent": "Europe",
    "color": "#ff8000"
  },
  {
    "code": "FIN",
    "country": "Finland",
    "count": 1,
    "index": 7.52,
    "continent": "Europe",
    "color": "#ff8000"
  },
  {
    "code": "FRA",
    "country": "France",
    "count": 63,
    "index": 21.15,
    "continent": "Europe",
    "color": "#ff8000"
  },
  {
    "code": "GEO",
    "country": "Georgia",
    "count": 0,
    "index": 27.7,
    "continent": "Europe",
    "color": "#ff8000"
  },
  {
    "code": "DEU",
    "country": "Germany",
    "count": 59,
    "index": 11.47,
    "continent": "Europe",
    "color": "#ff8000"
  },
  {
    "code": "GIB",
    "country": "Gibraltar",
    "count": 0,
    "index": "null",
    "continent": "Europe",
    "color": "#ff8000"
  },
  {
    "code": "GRC",
    "country": "Greece",
    "count": 14,
    "index": 31.01,
    "continent": "Europe",
    "color": "#ff8000"
  },
  {
    "code": "GRL",
    "country": "Greenland",
    "count": 0,
    "index": "null",
    "continent": "Europe",
    "color": "#ff8000"
  },
  {
    "code": "HUN",
    "country": "Hungary",
    "count": 5,
    "index": 27.44,
    "continent": "Europe",
    "color": "#ff8000"
  },
  {
    "code": "ISL",
    "country": "Iceland",
    "count": 3,
    "index": 13.87,
    "continent": "Europe",
    "color": "#ff8000"
  },
  {
    "code": "IRL",
    "country": "Ireland",
    "count": 0,
    "index": 11.2,
    "continent": "Europe",
    "color": "#ff8000"
  },
  {
    "code": "ITA",
    "country": "Italy",
    "count": 22,
    "index": 27.94,
    "continent": "Europe",
    "color": "#ff8000"
  },
  {
    "code": "LVA",
    "country": "Latvia",
    "count": 0,
    "index": 71.25,
    "continent": "Europe",
    "color": "#ff8000"
  },
  {
    "code": "LIE",
    "country": "Liechtenstein",
    "count": 0,
    "index": 17.67,
    "continent": "Europe",
    "color": "#ff8000"
  },
  {
    "code": "LTU",
    "country": "Lithuania",
    "count": 0,
    "index": 18.8,
    "continent": "Europe",
    "color": "#ff8000"
  },
  {
    "code": "LUX",
    "country": "Luxembourg",
    "count": 2,
    "index": 13.61,
    "continent": "Europe",
    "color": "#ff8000"
  },
  {
    "code": "MKD",
    "country": "Macedonia",
    "count": 2,
    "index": 36.26,
    "continent": "Europe",
    "color": "#ff8000"
  },
  {
    "code": "MCO",
    "country": "Monaco",
    "count": 0,
    "index": "null",
    "continent": "Europe",
    "color": "#ff8000"
  },
  {
    "code": "MNE",
    "country": "Montenegro",
    "count": 1,
    "index": 34.63,
    "continent": "Europe",
    "color": "#ff8000"
  },
  {
    "code": "NLD",
    "country": "Netherlands",
    "count": 13,
    "index": 9.22,
    "continent": "Europe",
    "color": "#ff8000"
  },
  {
    "code": "NOR",
    "country": "Norway",
    "count": 5,
    "index": 7.75,
    "continent": "Europe",
    "color": "#ff8000"
  },
  {
    "code": "POL",
    "country": "Poland",
    "count": 5,
    "index": 12.71,
    "continent": "Europe",
    "color": "#ff8000"
  },
  {
    "code": "PRT",
    "country": "Portugal",
    "count": 1,
    "index": 17.11,
    "continent": "Europe",
    "color": "#ff8000"
  },
  {
    "code": "SRB",
    "country": "Republic of Serbia",
    "count": 0,
    "index": 27.66,
    "continent": "Europe",
    "color": "#ff8000"
  },
  {
    "code": "ROU",
    "country": "Romania",
    "count": 1,
    "index": 24.9,
    "continent": "Europe",
    "color": "#ff8000"
  },
  {
    "code": "RUS",
    "country": "Russia",
    "count": 34,
    "index": 44.97,
    "continent": "Europe",
    "color": "#ff8000"
  },
  {
    "code": "SVK",
    "country": "Slovakia",
    "count": 0,
    "index": 11.66,
    "continent": "Europe",
    "color": "#ff8000"
  },
  {
    "code": "SVN",
    "country": "Slovenia",
    "count": 2,
    "index": 20.55,
    "continent": "Europe",
    "color": "#ff8000"
  },
  {
    "code": "ESP",
    "country": "Spain",
    "count": 15,
    "index": 19.95,
    "continent": "Europe",
    "color": "#ff8000"
  },
  {
    "code": "SWE",
    "country": "Sweden",
    "count": 3,
    "index": 9.47,
    "continent": "Europe",
    "color": "#ff8000"
  },
  {
    "code": "CHE",
    "country": "Switzerland",
    "count": 16,
    "index": 13.85,
    "continent": "Europe",
    "color": "#ff8000"
  },
  {
    "code": "UKR",
    "country": "Ukraine",
    "count": 8,
    "index": 39.1,
    "continent": "Europe",
    "color": "#ff8000"
  },
  {
    "code": "GBR",
    "country": "United Kingdom",
    "count": 63,
    "index": 20,
    "continent": "Europe",
    "color": "#ff8000"
  },
  {
    "code": "YUG",
    "country": "Yugoslavia",
    "count": 0,
    "index": "null",
    "continent": "Europe",
    "color": "#ff8000"
  },
  {
    "code": "CAN",
    "country": "Canada",
    "count": 41,
    "index": 10.99,
    "continent": "North America",
    "color": "#8000ff"
  },
  {
    "code": "CYM",
    "country": "Cayman Islands",
    "count": 0,
    "index": "null",
    "continent": "North America",
    "color": "#8000ff"
  },
  {
    "code": "USA",
    "country": "United States of America",
    "count": 330,
    "index": 24.41,
    "continent": "North America",
    "color": "#8000ff"
  },
  {
    "code": "ARG",
    "country": "Argentina",
    "count": 12,
    "index": 26.11,
    "continent": "South and Central America",
    "color": "#00ff00"
  },
  {
    "code": "BHS",
    "country": "Bahamas",
    "count": 0,
    "index": "null",
    "continent": "South and Central America",
    "color": "#00ff00"
  },
  {
    "code": "BLZ",
    "country": "Belize",
    "count": 1,
    "index": 18.54,
    "continent": "South and Central America",
    "color": "#00ff00"
  },
  {
    "code": "BOL",
    "country": "Bolivia",
    "count": 5,
    "index": 31.29,
    "continent": "South and Central America",
    "color": "#00ff00"
  },
  {
    "code": "BRA",
    "country": "Brazil",
    "count": 56,
    "index": 31.93,
    "continent": "South and Central America",
    "color": "#00ff00"
  },
  {
    "code": "CHL",
    "country": "Chile",
    "count": 4,
    "index": 23,
    "continent": "South and Central America",
    "color": "#00ff00"
  },
  {
    "code": "COL",
    "country": "Colombia",
    "count": 28,
    "index": 39.08,
    "continent": "South and Central America",
    "color": "#00ff00"
  },
  {
    "code": "CRI",
    "country": "Costa Rica",
    "count": 0,
    "index": 12.26,
    "continent": "South and Central America",
    "color": "#00ff00"
  },
  {
    "code": "CUB",
    "country": "Cuba",
    "count": 15,
    "index": 70.21,
    "continent": "South and Central America",
    "color": "#00ff00"
  },
  {
    "code": "COD",
    "country": "Democratic Republic of the Congo",
    "count": 7,
    "index": "null",
    "continent": "South and Central America",
    "color": "#00ff00"
  },
  {
    "code": "DOM",
    "country": "Dominican Republic",
    "count": 2,
    "index": 27.31,
    "continent": "South and Central America",
    "color": "#00ff00"
  },
  {
    "code": "ECU",
    "country": "Ecuador",
    "count": 5,
    "index": 33.65,
    "continent": "South and Central America",
    "color": "#00ff00"
  },
  {
    "code": "SLV",
    "country": "El Salvador",
    "count": 5,
    "index": "null",
    "continent": "South and Central America",
    "color": "#00ff00"
  },
  {
    "code": "GNQ",
    "country": "Equatorial Guinea",
    "count": 0,
    "index": 66.23,
    "continent": "South and Central America",
    "color": "#00ff00"
  },
  {
    "code": "FLK",
    "country": "Falkland Islands",
    "count": 0,
    "index": "null",
    "continent": "South and Central America",
    "color": "#00ff00"
  },
  {
    "code": "GTM",
    "country": "Guatemala",
    "count": 4,
    "index": 37.92,
    "continent": "South and Central America",
    "color": "#00ff00"
  },
  {
    "code": "GUY",
    "country": "Guyana",
    "count": 0,
    "index": 27.21,
    "continent": "South and Central America",
    "color": "#00ff00"
  },
  {
    "code": "HTI",
    "country": "Haiti",
    "count": 12,
    "index": 25.08,
    "continent": "South and Central America",
    "color": "#00ff00"
  },
  {
    "code": "HND",
    "country": "Honduras",
    "count": 2,
    "index": "null",
    "continent": "South and Central America",
    "color": "#00ff00"
  },
  {
    "code": "JAM",
    "country": "Jamaica",
    "count": 2,
    "index": 11.18,
    "continent": "South and Central America",
    "color": "#00ff00"
  },
  {
    "code": "MEX",
    "country": "Mexico",
    "count": 18,
    "index": 43.69,
    "continent": "South and Central America",
    "color": "#00ff00"
  },
  {
    "code": "MDA",
    "country": "Moldova",
    "count": 1,
    "index": 27.85,
    "continent": "South and Central America",
    "color": "#00ff00"
  },
  {
    "code": "NIC",
    "country": "Nicaragua",
    "count": 2,
    "index": 27.94,
    "continent": "South and Central America",
    "color": "#00ff00"
  },
  {
    "code": "PAN",
    "country": "Panama",
    "count": 8,
    "index": 28.98,
    "continent": "South and Central America",
    "color": "#00ff00"
  },
  {
    "code": "PRY",
    "country": "Paraguay",
    "count": 0,
    "index": 33.74,
    "continent": "South and Central America",
    "color": "#00ff00"
  },
  {
    "code": "PER",
    "country": "Peru",
    "count": 12,
    "index": 31.21,
    "continent": "South and Central America",
    "color": "#00ff00"
  },
  {
    "code": "PRI",
    "country": "Puerto Rico",
    "count": 0,
    "index": "null",
    "continent": "South and Central America",
    "color": "#00ff00"
  },
  {
    "code": "SUR",
    "country": "Suriname",
    "count": 0,
    "index": 18.2,
    "continent": "South and Central America",
    "color": "#00ff00"
  },
  {
    "code": "TTO",
    "country": "Trinidad and Tobago",
    "count": 0,
    "index": 22.39,
    "continent": "South and Central America",
    "color": "#00ff00"
  },
  {
    "code": "URY",
    "country": "Uruguay",
    "count": 0,
    "index": 15.94,
    "continent": "South and Central America",
    "color": "#00ff00"
  },
  {
    "code": "VEN",
    "country": "Venezuela",
    "count": 35,
    "index": 40.61,
    "continent": "South and Central America",
    "color": "#00ff00"
  }
];

AmCharts.ready(function () {
    // XY Chart
    chart = new AmCharts.AmXYChart();

    chart.dataProvider = chartDataBubble;
    chart.startDuration = 1.5;

    // AXES
    // X
    var xAxis = new AmCharts.ValueAxis();
    xAxis.title = "新聞數";
    xAxis.position = "bottom";
    xAxis.axisAlpha = 0;
    xAxis.minMaxMultiplayer = 1;
    chart.addValueAxis(xAxis);

    // Y
    var yAxis = new AmCharts.ValueAxis();
    yAxis.title = "新聞自由指數";
    yAxis.position = "left";
    yAxis.minMaxMultiplier = 1;
    yAxis.axisAlpha = 0;
    chart.addValueAxis(yAxis);

    // GRAPHS
    var graph = new AmCharts.AmGraph();
    // graph.valueField = ;
    graph.minBulletSize = 10;
    graph.colorField = "color";
    graph.lineColor = "#ccc";
    graph.xField = "count";
    graph.yField = "index";
    graph.lineAlpha = 0;
    graph.fillAlphas = 0;
    graph.bulletAlpha = 1;
    graph.bullet = "round";
    graph.balloonText = "<p style='font-size:9px'>country:<b>[[country]]</b><br> in <b>[[continent]]</b><br>index:<b>[[index]]</b> count:<b>[[count]]</b><br></p>";
    chart.addGraph(graph);

    // CURSOR
    var chartCursor = new AmCharts.ChartCursor();
    chartCursor.valueLineBalloonEnabled = true;
    chart.addChartCursor(chartCursor);

    // WRITE
    chart.write("xyBubbles");
});