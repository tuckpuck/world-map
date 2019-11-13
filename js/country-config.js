let data = [
  { name: "Afghanistan", alpha3: "AFG", code: "004", visited: false },
  { name: "Åland Islands", alpha3: "ALA", code: "248", visited: false },
  { name: "Albania", alpha3: "ALB", code: "008", visited: false },
  { name: "Algeria", alpha3: "DZA", code: "012", visited: false },
  { name: "American Samoa", alpha3: "ASM", code: "016", visited: false },
  { name: "Andorra", alpha3: "AND", code: "020", visited: false },
  { name: "Angola", alpha3: "AGO", code: "024", visited: false },
  { name: "Anguilla", alpha3: "AIA", code: "660", visited: false },
  { name: "Antarctica", alpha3: "ATA", code: "010", visited: false },
  { name: "Antigua and Barbuda", alpha3: "ATG", code: "028", visited: false },
  { name: "Argentina", alpha3: "ARG", code: "032", visited: false },
  { name: "Armenia", alpha3: "ARM", code: "051", visited: false },
  { name: "Aruba", alpha3: "ABW", code: "533", visited: false },
  { name: "Australia", alpha3: "AUS", code: "036", visited: false },
  { name: "Austria", alpha3: "AUT", code: "040", visited: true },
  { name: "Azerbaijan", alpha3: "AZE", code: "031", visited: false },
  { name: "Bahamas", alpha3: "BHS", code: "044", visited: false },
  { name: "Bahrain", alpha3: "BHR", code: "048", visited: false },
  { name: "Bangladesh", alpha3: "BGD", code: "050", visited: false },
  { name: "Barbados", alpha3: "BRB", code: "052", visited: false },
  { name: "Belarus", alpha3: "BLR", code: "112", visited: false },
  { name: "Belgium", alpha3: "BEL", code: "056", visited: true },
  { name: "Belize", alpha3: "BLZ", code: "084", visited: true },
  { name: "Benin", alpha3: "BEN", code: "204", visited: false },
  { name: "Bermuda", alpha3: "BMU", code: "060", visited: false },
  { name: "Bhutan", alpha3: "BTN", code: "064", visited: false },
  {
    name: "Bolivia (Plurinational State of)",
    alpha3: "BOL",
    code: "068",
    visited: false
  },
  {
    name: "Bonaire, Sint Eustatius and Saba",
    alpha3: "BES",
    code: "535",
    visited: false
  },
  {
    name: "Bosnia and Herzegovina",
    alpha3: "BIH",
    code: "070",
    visited: false
  },
  { name: "Botswana", alpha3: "BWA", code: "072", visited: false },
  { name: "Bouvet Island", alpha3: "BVT", code: "074", visited: false },
  { name: "Brazil", alpha3: "BRA", code: "076", visited: false },
  {
    name: "British Indian Ocean Territory",
    alpha3: "IOT",
    code: "086",
    visited: false
  },
  { name: "Brunei Darussalam", alpha3: "BRN", code: "096", visited: false },
  { name: "Bulgaria", alpha3: "BGR", code: "100", visited: true },
  { name: "Burkina Faso", alpha3: "BFA", code: "854", visited: false },
  { name: "Burundi", alpha3: "BDI", code: "108", visited: false },
  { name: "Cabo Verde", alpha3: "CPV", code: "132", visited: false },
  { name: "Cambodia", alpha3: "KHM", code: "116", visited: false },
  { name: "Cameroon", alpha3: "CMR", code: "120", visited: false },
  { name: "Canada", alpha3: "CAN", code: "124", visited: true },
  { name: "Cayman Islands", alpha3: "CYM", code: "136", visited: false },
  {
    name: "Central African Republic",
    alpha3: "CAF",
    code: "140",
    visited: false
  },
  { name: "Chad", alpha3: "TCD", code: "148", visited: false },
  { name: "Chile", alpha3: "CHL", code: "152", visited: false },
  { name: "China", alpha3: "CHN", code: "156", visited: true },
  { name: "Christmas Island", alpha3: "CXR", code: "162", visited: false },
  {
    name: "Cocos (Keeling) Islands",
    alpha3: "CCK",
    code: "166",
    visited: false
  },
  { name: "Colombia", alpha3: "COL", code: "170", visited: false },
  { name: "Comoros", alpha3: "COM", code: "174", visited: false },
  { name: "Congo", alpha3: "COG", code: "178", visited: false },
  {
    name: "Congo, Democratic Republic of the",
    alpha3: "COD",
    code: "180",
    visited: false
  },
  { name: "Cook Islands", alpha3: "COK", code: "184", visited: false },
  { name: "Costa Rica", alpha3: "CRI", code: "188", visited: false },
  { name: "Côte d'Ivoire", alpha3: "CIV", code: "384", visited: false },
  { name: "Croatia", alpha3: "HRV", code: "191", visited: true },
  { name: "Cuba", alpha3: "CUB", code: "192", visited: false },
  { name: "Curaçao", alpha3: "CUW", code: "531", visited: false },
  { name: "Cyprus", alpha3: "CYP", code: "196", visited: false },
  { name: "Czechia", alpha3: "CZE", code: "203", visited: true },
  { name: "Denmark", alpha3: "DNK", code: "208", visited: false },
  { name: "Djibouti", alpha3: "DJI", code: "262", visited: false },
  { name: "Dominica", alpha3: "DMA", code: "212", visited: false },
  { name: "Dominican Republic", alpha3: "DOM", code: "214", visited: false },
  { name: "Ecuador", alpha3: "ECU", code: "218", visited: false },
  { name: "Egypt", alpha3: "EGY", code: "818", visited: true },
  { name: "El Salvador", alpha3: "SLV", code: "222", visited: false },
  { name: "Equatorial Guinea", alpha3: "GNQ", code: "226", visited: false },
  { name: "Eritrea", alpha3: "ERI", code: "232", visited: false },
  { name: "Estonia", alpha3: "EST", code: "233", visited: false },
  { name: "Eswatini", alpha3: "SWZ", code: "748", visited: false },
  { name: "Ethiopia", alpha3: "ETH", code: "231", visited: false },
  {
    name: "Falkland Islands (Malvinas)",
    alpha3: "FLK",
    code: "238",
    visited: false
  },
  { name: "Faroe Islands", alpha3: "FRO", code: "234", visited: false },
  { name: "Fiji", alpha3: "FJI", code: "242", visited: true },
  { name: "Finland", alpha3: "FIN", code: "246", visited: false },
  { name: "France", alpha3: "FRA", code: "250", visited: true },
  { name: "French Guiana", alpha3: "GUF", code: "254", visited: false },
  { name: "French Polynesia", alpha3: "PYF", code: "258", visited: false },
  {
    name: "French Southern Territories",
    alpha3: "ATF",
    code: "260",
    visited: false
  },
  { name: "Gabon", alpha3: "GAB", code: "266", visited: false },
  { name: "Gambia", alpha3: "GMB", code: "270", visited: false },
  { name: "Georgia", alpha3: "GEO", code: "268", visited: false },
  { name: "Germany", alpha3: "DEU", code: "276", visited: true },
  { name: "Ghana", alpha3: "GHA", code: "288", visited: false },
  { name: "Gibraltar", alpha3: "GIB", code: "292", visited: false },
  { name: "Greece", alpha3: "GRC", code: "300", visited: true },
  { name: "Greenland", alpha3: "GRL", code: "304", visited: false },
  { name: "Grenada", alpha3: "GRD", code: "308", visited: false },
  { name: "Guadeloupe", alpha3: "GLP", code: "312", visited: false },
  { name: "Guam", alpha3: "GUM", code: "316", visited: false },
  { name: "Guatemala", alpha3: "GTM", code: "320", visited: true },
  { name: "Guernsey", alpha3: "GGY", code: "831", visited: false },
  { name: "Guinea", alpha3: "GIN", code: "324", visited: false },
  { name: "Guinea-Bissau", alpha3: "GNB", code: "624", visited: false },
  { name: "Guyana", alpha3: "GUY", code: "328", visited: false },
  { name: "Haiti", alpha3: "HTI", code: "332", visited: false },
  {
    name: "Heard Island and McDonald Islands",
    alpha3: "HMD",
    code: "334",
    visited: false
  },
  { name: "Holy See", alpha3: "VAT", code: "336", visited: true },
  { name: "Honduras", alpha3: "HND", code: "340", visited: false },
  { name: "Hong Kong", alpha3: "HKG", code: "344", visited: false },
  { name: "Hungary", alpha3: "HUN", code: "348", visited: true },
  { name: "Iceland", alpha3: "ISL", code: "352", visited: false },
  { name: "India", alpha3: "IND", code: "356", visited: true },
  { name: "Indonesia", alpha3: "IDN", code: "360", visited: true },
  {
    name: "Iran (Islamic Republic of)",
    alpha3: "IRN",
    code: "364",
    visited: false
  },
  { name: "Iraq", alpha3: "IRQ", code: "368", visited: false },
  { name: "Ireland", alpha3: "IRL", code: "372", visited: false },
  { name: "Isle of Man", alpha3: "IMN", code: "833", visited: false },
  { name: "Israel", alpha3: "ISR", code: "376", visited: false },
  { name: "Italy", alpha3: "ITA", code: "380", visited: true },
  { name: "Jamaica", alpha3: "JAM", code: "388", visited: false },
  { name: "Japan", alpha3: "JPN", code: "392", visited: true },
  { name: "Jersey", alpha3: "JEY", code: "832", visited: false },
  { name: "Jordan", alpha3: "JOR", code: "400", visited: false },
  { name: "Kazakhstan", alpha3: "KAZ", code: "398", visited: false },
  { name: "Kenya", alpha3: "KEN", code: "404", visited: false },
  { name: "Kiribati", alpha3: "KIR", code: "296", visited: false },
  {
    name: "Korea (Democratic People's Republic of)",
    alpha3: "PRK",
    code: "408",
    visited: false
  },
  { name: "Korea, Republic of", alpha3: "KOR", code: "410", visited: false },
  { name: "Kuwait", alpha3: "KWT", code: "414", visited: true },
  { name: "Kyrgyzstan", alpha3: "KGZ", code: "417", visited: false },
  {
    name: "Lao People's Democratic Republic",
    alpha3: "LAO",
    code: "418",
    visited: true
  },
  { name: "Latvia", alpha3: "LVA", code: "428", visited: false },
  { name: "Lebanon", alpha3: "LBN", code: "422", visited: false },
  { name: "Lesotho", alpha3: "LSO", code: "426", visited: false },
  { name: "Liberia", alpha3: "LBR", code: "430", visited: false },
  { name: "Libya", alpha3: "LBY", code: "434", visited: false },
  { name: "Liechtenstein", alpha3: "LIE", code: "438", visited: false },
  { name: "Lithuania", alpha3: "LTU", code: "440", visited: false },
  { name: "Luxembourg", alpha3: "LUX", code: "442", visited: true },
  { name: "Macao", alpha3: "MAC", code: "446", visited: false },
  { name: "Madagascar", alpha3: "MDG", code: "450", visited: false },
  { name: "Malawi", alpha3: "MWI", code: "454", visited: false },
  { name: "Malaysia", alpha3: "MYS", code: "458", visited: true },
  { name: "Maldives", alpha3: "MDV", code: "462", visited: false },
  { name: "Mali", alpha3: "MLI", code: "466", visited: false },
  { name: "Malta", alpha3: "MLT", code: "470", visited: false },
  { name: "Marshall Islands", alpha3: "MHL", code: "584", visited: false },
  { name: "Martinique", alpha3: "MTQ", code: "474", visited: false },
  { name: "Mauritania", alpha3: "MRT", code: "478", visited: false },
  { name: "Mauritius", alpha3: "MUS", code: "480", visited: false },
  { name: "Mayotte", alpha3: "MYT", code: "175", visited: false },
  { name: "Mexico", alpha3: "MEX", code: "484", visited: true },
  {
    name: "Micronesia (Federated States of)",
    alpha3: "FSM",
    code: "583",
    visited: false
  },
  { name: "Moldova, Republic of", alpha3: "MDA", code: "498", visited: true },
  { name: "Monaco", alpha3: "MCO", code: "492", visited: true },
  { name: "Mongolia", alpha3: "MNG", code: "496", visited: false },
  { name: "Montenegro", alpha3: "MNE", code: "499", visited: false },
  { name: "Montserrat", alpha3: "MSR", code: "500", visited: false },
  { name: "Morocco", alpha3: "MAR", code: "504", visited: true },
  { name: "Mozambique", alpha3: "MOZ", code: "508", visited: false },
  { name: "Myanmar", alpha3: "MMR", code: "104", visited: true },
  { name: "Namibia", alpha3: "NAM", code: "516", visited: false },
  { name: "Nauru", alpha3: "NRU", code: "520", visited: false },
  { name: "Nepal", alpha3: "NPL", code: "524", visited: true },
  { name: "Netherlands", alpha3: "NLD", code: "528", visited: true },
  { name: "New Caledonia", alpha3: "NCL", code: "540", visited: false },
  { name: "New Zealand", alpha3: "NZL", code: "554", visited: false },
  { name: "Nicaragua", alpha3: "NIC", code: "558", visited: false },
  { name: "Niger", alpha3: "NER", code: "562", visited: false },
  { name: "Nigeria", alpha3: "NGA", code: "566", visited: false },
  { name: "Niue", alpha3: "NIU", code: "570", visited: false },
  { name: "Norfolk Island", alpha3: "NFK", code: "574", visited: false },
  { name: "North Macedonia", alpha3: "MKD", code: "807", visited: false },
  {
    name: "Northern Mariana Islands",
    alpha3: "MNP",
    code: "580",
    visited: false
  },
  { name: "Norway", alpha3: "NOR", code: "578", visited: false },
  { name: "Oman", alpha3: "OMN", code: "512", visited: false },
  { name: "Pakistan", alpha3: "PAK", code: "586", visited: false },
  { name: "Palau", alpha3: "PLW", code: "585", visited: false },
  { name: "Palestine, State of", alpha3: "PSE", code: "275", visited: false },
  { name: "Panama", alpha3: "PAN", code: "591", visited: false },
  { name: "Papua New Guinea", alpha3: "PNG", code: "598", visited: false },
  { name: "Paraguay", alpha3: "PRY", code: "600", visited: false },
  { name: "Peru", alpha3: "PER", code: "604", visited: false },
  { name: "Philippines", alpha3: "PHL", code: "608", visited: false },
  { name: "Pitcairn", alpha3: "PCN", code: "612", visited: false },
  { name: "Poland", alpha3: "POL", code: "616", visited: true },
  { name: "Portugal", alpha3: "PRT", code: "620", visited: true },
  { name: "Puerto Rico", alpha3: "PRI", code: "630", visited: false },
  { name: "Qatar", alpha3: "QAT", code: "634", visited: false },
  { name: "Réunion", alpha3: "REU", code: "638", visited: false },
  { name: "Romania", alpha3: "ROU", code: "642", visited: true },
  { name: "Russian Federation", alpha3: "RUS", code: "643", visited: false },
  { name: "Rwanda", alpha3: "RWA", code: "646", visited: false },
  { name: "Saint Barthélemy", alpha3: "BLM", code: "652", visited: false },
  {
    name: "Saint Helena, Ascension and Tristan da Cunha",
    alpha3: "SHN",
    code: "654",
    visited: false
  },
  { name: "Saint Kitts and Nevis", alpha3: "KNA", code: "659", visited: false },
  { name: "Saint Lucia", alpha3: "LCA", code: "662", visited: false },
  {
    name: "Saint Martin (French part)",
    alpha3: "MAF",
    code: "663",
    visited: false
  },
  {
    name: "Saint Pierre and Miquelon",
    alpha3: "SPM",
    code: "666",
    visited: false
  },
  {
    name: "Saint Vincent and the Grenadines",
    alpha3: "VCT",
    code: "670",
    visited: false
  },
  { name: "Samoa", alpha3: "WSM", code: "882", visited: false },
  { name: "San Marino", alpha3: "SMR", code: "674", visited: false },
  { name: "Sao Tome and Principe", alpha3: "STP", code: "678", visited: false },
  { name: "Saudi Arabia", alpha3: "SAU", code: "682", visited: false },
  { name: "Senegal", alpha3: "SEN", code: "686", visited: false },
  { name: "Serbia", alpha3: "SRB", code: "688", visited: false },
  { name: "Seychelles", alpha3: "SYC", code: "690", visited: false },
  { name: "Sierra Leone", alpha3: "SLE", code: "694", visited: false },
  { name: "Singapore", alpha3: "SGP", code: "702", visited: true },
  {
    name: "Sint Maarten (Dutch part)",
    alpha3: "SXM",
    code: "534",
    visited: false
  },
  { name: "Slovakia", alpha3: "SVK", code: "703", visited: true },
  { name: "Slovenia", alpha3: "SVN", code: "705", visited: false },
  { name: "Solomon Islands", alpha3: "SLB", code: "090", visited: false },
  { name: "Somalia", alpha3: "SOM", code: "706", visited: false },
  { name: "South Africa", alpha3: "ZAF", code: "710", visited: false },
  {
    name: "South Georgia and the South Sandwich Islands",
    alpha3: "SGS",
    code: "239",
    visited: false
  },
  { name: "South Sudan", alpha3: "SSD", code: "728", visited: false },
  { name: "Spain", alpha3: "ESP", code: "724", visited: true },
  { name: "Sri Lanka", alpha3: "LKA", code: "144", visited: false },
  { name: "Sudan", alpha3: "SDN", code: "729", visited: false },
  { name: "Suriname", alpha3: "SUR", code: "740", visited: false },
  {
    name: "Svalbard and Jan Mayen",
    alpha3: "SJM",
    code: "744",
    visited: false
  },
  { name: "Sweden", alpha3: "SWE", code: "752", visited: true },
  { name: "Switzerland", alpha3: "CHE", code: "756", visited: false },
  { name: "Syrian Arab Republic", alpha3: "SYR", code: "760", visited: false },
  {
    name: "Taiwan, Province of China",
    alpha3: "TWN",
    code: "158",
    visited: false
  },
  { name: "Tajikistan", alpha3: "TJK", code: "762", visited: false },
  {
    name: "Tanzania, United Republic of",
    alpha3: "TZA",
    code: "834",
    visited: false
  },
  { name: "Thailand", alpha3: "THA", code: "764", visited: true },
  { name: "Timor-Leste", alpha3: "TLS", code: "626", visited: false },
  { name: "Togo", alpha3: "TGO", code: "768", visited: false },
  { name: "Tokelau", alpha3: "TKL", code: "772", visited: false },
  { name: "Tonga", alpha3: "TON", code: "776", visited: false },
  { name: "Trinidad and Tobago", alpha3: "TTO", code: "780", visited: false },
  { name: "Tunisia", alpha3: "TUN", code: "788", visited: false },
  { name: "Turkey", alpha3: "TUR", code: "792", visited: false },
  { name: "Turkmenistan", alpha3: "TKM", code: "795", visited: false },
  {
    name: "Turks and Caicos Islands",
    alpha3: "TCA",
    code: "796",
    visited: false
  },
  { name: "Tuvalu", alpha3: "TUV", code: "798", visited: false },
  { name: "Uganda", alpha3: "UGA", code: "800", visited: false },
  { name: "Ukraine", alpha3: "UKR", code: "804", visited: true },
  { name: "United Arab Emirates", alpha3: "ARE", code: "784", visited: false },
  {
    name: "United Kingdom of Great Britain and Northern Ireland",
    alpha3: "GBR",
    code: "826",
    visited: true
  },
  {
    name: "United States of America",
    alpha3: "USA",
    code: "840",
    visited: true
  },
  {
    name: "United States Minor Outlying Islands",
    alpha3: "UMI",
    code: "581",
    visited: false
  },
  { name: "Uruguay", alpha3: "URY", code: "858", visited: false },
  { name: "Uzbekistan", alpha3: "UZB", code: "860", visited: false },
  { name: "Vanuatu", alpha3: "VUT", code: "548", visited: false },
  {
    name: "Venezuela (Bolivarian Republic of)",
    alpha3: "VEN",
    code: "862",
    visited: false
  },
  { name: "Vietnam", alpha3: "VNM", code: "704", visited: true },
  {
    name: "Virgin Islands (British)",
    alpha3: "VGB",
    code: "092",
    visited: true
  },
  { name: "Virgin Islands (U.S.)", alpha3: "VIR", code: "850", visited: false },
  { name: "Wallis and Futuna", alpha3: "WLF", code: "876", visited: false },
  { name: "Western Sahara", alpha3: "ESH", code: "732", visited: false },
  { name: "Yemen", alpha3: "YEM", code: "887", visited: false },
  { name: "Zambia", alpha3: "ZMB", code: "894", visited: false },
  { name: "Zimbabwe", alpha3: "ZWE", code: "716", visited: false }
];

let countriesVisitedCodes = [];
let countriesVisitedAlphas = [];
let countriesVisitedNames = [];
let countryDataObj = {};

data.map((country, index) => {
  if (country.visited === true) {
    countriesVisitedCodes.push(country.code);
    countriesVisitedAlphas.push(country.alpha3);
    countriesVisitedNames.push(country.name);
  }
});

countriesVisitedCodes.forEach((country, index) => {
  countryDataObj[index] = { fillKey: "visited" };
});

Object.keys(countryDataObj).forEach(function(ele) {
  countryDataObj[countriesVisitedAlphas[ele]] = countryDataObj[ele];
  countryDataObj[countriesVisitedAlphas[ele]].name = countriesVisitedNames[ele];
  countryDataObj[countriesVisitedAlphas[ele]].code = countriesVisitedCodes[ele];
  delete countryDataObj[ele];
});

let map = new Datamap({
  element: document.getElementById("map"),
  scope: "world", // Currently supports 'usa' and 'world', however with custom map data you can specify your own
  //setProjection: setProjection, // Returns a d3 path and projection functions
  projection: "mercator", // Style of projection to be used. try "mercator"
  height: null, // If not null, datamaps will grab the height of 'element'
  width: null, // If not null, datamaps will grab the width of 'element',
  responsive: true, // If true, call `resize()` on the map object when it should adjust it's size
  data: countryDataObj,
  done: function(datamap) {
    let countryVisitedCount = Object.keys(datamap.options.data).length;
    let mapCountries = document.querySelectorAll(".datamaps-subunit");
    let countryFlag = document.querySelector("#country-flag");
    let countryName = document.querySelector("#country-name");
    let countryCapital = document.querySelector("#country-capital");
    let countryCurrency = document.querySelector("#country-currency");
    let countryLanguage = document.querySelector("#country-language");

    for (const country of mapCountries) {
      country.addEventListener("click", function(event) {
        let countryCode = event.target.classList[1];

        let infoObject;
        let countryMetaInfo = Object.values(
          Object.assign({}, event.target.dataset)
        )[0];
        if (countryMetaInfo === undefined) {
          infoObject = '{"fillKey":"not-visited"}';
        } else {
          infoObject = countryMetaInfo;
        }

        let parsedInfoObject = JSON.parse(infoObject);
        let visitedStatus = Object.values(parsedInfoObject)[0];
        console.log(visitedStatus);

        if (countryCode && visitedStatus === "visited") {
          console.log("send request");
          // Add API call here
        }
      });

      country.addEventListener("mouseover", function(event) {
        countryFlag.src = event.target.__data__.properties.flag;
        countryName.innerText =
          "Country: " + event.target.__data__.properties.name;
        countryCapital.innerText =
          "Capital: " + event.target.__data__.properties.capital;
        countryCurrency.innerText =
          "Currency: " +
          "[" +
          event.target.__data__.properties.currencies[0].symbol +
          "]" +
          event.target.__data__.properties.currencies[0].name;

        let allLanguages = [];
        event.target.__data__.properties.languages.forEach(function(language) {
          allLanguages.push(language.name);
        });
        if (allLanguages.length === 1) {
          countryLanguage.innerText = "Language: " + allLanguages.join("");
        } else if (allLanguages.length > 1) {
          countryLanguage.innerText = "Languages: " + allLanguages.join(", ");
        }

        // console.log(event.target.__data__.properties);
      });
    }
  }, // Callback when the map is done drawing
  fills: {
    defaultFill: "#dcdee2",
    visited: "#7c8aaa"
    // The keys in this object map to the "fillKey" of [data] or [bubbles]
  },
  dataType: "json", // For use with dataUrl, currently 'json' or 'csv'. CSV should have an `id` column
  dataUrl: null, // If not null, datamaps will attempt to fetch this based on dataType ( default: json )
  geographyConfig: {
    dataUrl: null, // If not null, datamaps will fetch the map JSON (currently only supports topojson)
    hideAntarctica: true,
    hideHawaiiAndAlaska: false,
    borderWidth: 1,
    borderOpacity: 1,
    borderColor: "#FCFCFC",
    popupTemplate: function(geography, data) {
      // This function should just return a string
      return (
        '<div class="hoverinfo"><strong>' +
        geography.properties.name +
        "<strong></div>"
      );
    },
    popupOnHover: true, // True to show the popup while hovering
    highlightOnHover: true,
    highlightFillColor: "rgb(154, 130, 170)",
    highlightBorderColor: "rgb(139, 115, 155)",
    highlightBorderWidth: 1,
    highlightBorderOpacity: 1
  },
  bubblesConfig: {
    borderWidth: 2,
    borderOpacity: 1,
    borderColor: "#FFFFFF",
    popupOnHover: true, // True to show the popup while hovering
    radius: null,
    popupTemplate: function(geography, data) {
      // This function should just return a string
      return '<div class="hoverinfo"><strong>' + data.name + "</strong></div>";
    },
    fillOpacity: 0.75,
    animate: true,
    highlightOnHover: true,
    highlightFillColor: "#FC8D59",
    highlightBorderColor: "rgba(250, 15, 160, 0.2)",
    highlightBorderWidth: 2,
    highlightBorderOpacity: 1,
    highlightFillOpacity: 0.85,
    exitDelay: 100, // Milliseconds
    key: JSON.stringify
  },
  arcConfig: {
    strokeColor: "#DD1C77",
    strokeWidth: 1,
    arcSharpness: 1,
    animationSpeed: 600, // Milliseconds
    popupOnHover: false, // True to show the popup while hovering
    popupTemplate: function(geography, data) {
      // This function should just return a string
      // Case with latitude and longitude
      if (
        data.origin &&
        data.destination &&
        data.origin.latitude &&
        data.origin.longitude &&
        data.destination.latitude &&
        data.destination.longitude
      ) {
        return (
          '<div class="hoverinfo"><strong>Arc</strong><br>Origin: ' +
          JSON.stringify(data.origin) +
          "<br>Destination: " +
          JSON.stringify(data.destination) +
          "</div>"
        );
      }
      // Case with only country name
      else if (data.origin && data.destination) {
        return (
          '<div class="hoverinfo"><strong>Arc</strong><br>' +
          data.origin +
          " -> " +
          data.destination +
          "</div>"
        );
      }
      // Missing information
      else {
        return "";
      }
    }
  }
});

//   Resize function for map
window.addEventListener("resize", function() {
  map.resize();
});
