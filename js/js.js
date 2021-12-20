let map = new Datamap({
  element: document.getElementById('map'),
  scope: 'world', // Currently supports 'usa' and 'world', however with custom map data you can specify your own
  //setProjection: setProjection, // Returns a d3 path and projection functions
  projection: 'mercator', // Style of projection to be used. try "mercator"
  height: null, // If not null, datamaps will grab the height of 'element'
  width: null, // If not null, datamaps will grab the width of 'element',
  responsive: true, // If true, call `resize()` on the map object when it should adjust it's size
  data: data,
  done: function (datamap) {
    let allCountryCount = Object.keys(datamap.options.data).length;
    let allCountries = Object.values(datamap.options.data);
    let allFlagValues = allCountries.map(function (item) {
      if (item.flag) {
        return { country: item.name, flag: item.flag }
      }
    });
    let visitedCountries = allCountries.filter(function (item) {
      return item.fillKey === 1;
    });
    let visitedCountryCount = 0;
    for (const country of allCountries) {
      if (country.fillKey === 1) {
        visitedCountryCount += 1;
      }
    }
    let card = document.querySelector('#card');
    let mapCountries = document.querySelectorAll('.datamaps-subunit');
    let cardIcons = document.querySelectorAll('.icon');
    let iconArray = Array.from(cardIcons);
    let countryInfoItem = document.querySelectorAll('.country-info-item');
    let countryInfoItemArray = Array.from(countryInfoItem);
    let countryFlag = document.querySelector('#country-flag');
    let countryName = document.querySelector('#country-name');
    let initialCardText = document.querySelector('#initial-card-text');
    let countryCapital = document.querySelector('#country-capital');
    let countryCurrency = document.querySelector('#country-currency');
    let countryLanguage = document.querySelector('#country-language');
    let countrySubregion = document.querySelector('#country-subregion');
    let countryTimezone = document.querySelector('#country-timezone');
    let timeZoneInfoItem = document.querySelector('#time-zone');
    let moreInfoButton = document.getElementById('more-info');
    let closeInfoButton = document.getElementById('close-info');
    let visitedCountryDisplay = document.getElementById('country-count');

    visitedCountryDisplay.innerHTML = visitedCountryCount;

    for (const country of mapCountries) {
      country.addEventListener('click', function (event) {
        // Extract info from country-config
        let visitedStatus = JSON.parse(event.target.dataset.info).fillKey;
        let flagURL = JSON.parse(event.target.dataset.info).flag;
        let countryName = JSON.parse(event.target.dataset.info).name;
        if (visitedStatus === 1) {
          console.log('send request');
          // Add API call here
        }

        card.style.display = 'block';
        card.style.width = '240px';
        countryInfoItemArray.forEach((item) => {
          item.style.display = 'block';
        });
        timeZoneInfoItem.style.display = 'none';
        initialCardText.style.display = 'none';
        moreInfoButton.style.display = 'inline-block';
        closeInfoButton.style.display = 'inline-block';
        countryFlag.src = flagURL;
        countryName.innerText = event.target.__data__.properties.name;
        countryCapital.innerText = event.target.__data__.properties.capital;
        countryCurrency.innerText = event.target.__data__.properties.currencies[0].name;
        countrySubregion.innerText = event.target.__data__.properties.subregion;

        let allTimezones = [];
        event.target.__data__.properties.timezones.forEach(function (zone) {
          allTimezones.push(zone);
        });
        if (allTimezones.length === 1) {
          countryTimezone.innerText = 'Timezone: ' + allTimezones.join('');
        } else if (allTimezones.length > 1) {
          countryTimezone.innerText = 'Timezones: ' + allTimezones.join(', ');
        }

        let allLanguages = [];
        event.target.__data__.properties.languages.forEach(function (language) {
          allLanguages.push(language.name);
        });
        if (allLanguages.length === 1) {
          countryLanguage.innerText = allLanguages.join('');
        } else if (allLanguages.length > 1) {
          countryLanguage.innerText = allLanguages.join(', ');
        }
      });
    }
    // Console logs for debug
    console.log('All countries and regions:', allCountries);
    console.log('All countries and region count:', allCountryCount);
    console.log('visited countries:', visitedCountries);
    console.log('Visied country count:', visitedCountryCount);
    console.log('All countries with flag value:', allFlagValues);
    console.log('datamap', datamap);

  }, // Callback when the map is done drawing
  fills: {
    defaultFill: '#dcdee2',
    1: '#7c8aaa',
    // The keys in this object map to the "fillKey" of [data] or [bubbles]
  },
  dataType: 'json', // For use with dataUrl, currently 'json' or 'csv'. CSV should have an `id` column
  dataUrl: null, // If not null, datamaps will attempt to fetch this based on dataType ( default: json )
  geographyConfig: {
    dataUrl: null, // If not null, datamaps will fetch the map JSON (currently only supports topojson)
    hideAntarctica: true,
    hideHawaiiAndAlaska: false,
    borderWidth: 1,
    borderOpacity: 1,
    borderColor: '#FCFCFC',
    popupTemplate: function (geography, data) {
      // This function should just return a string

      let languages = [];
      let formattedLanguage = '';
      event.target.__data__.properties.languages.forEach(function (language) {
        languages.push(language.name);
      });
      if (languages.length === 1) {
        formattedLanguage = languages.join('');
      } else if (languages.length > 1) {
        formattedLanguage = languages.join(', ');
      }

      return `
    <div class="hoverinfo">
    <div id="country-info-content">
<p class="hover-country-name">${geography.properties.name}</p>
  </div>
  </div>`;
    },
    popupOnHover: true, // True to show the popup while hovering
    highlightOnHover: true,
    highlightFillColor: 'rgb(154, 130, 170)',
    highlightBorderColor: 'rgb(139, 115, 155)',
    highlightBorderWidth: 1,
    highlightBorderOpacity: 1,
  },
  bubblesConfig: {
    borderWidth: 2,
    borderOpacity: 1,
    borderColor: '#FFFFFF',
    popupOnHover: true, // True to show the popup while hovering
    radius: null,
    popupTemplate: function (geography, data) {
      // This function should just return a string
      return '<div class="hoverinfo"><strong>' + data.name + '</strong></div>';
    },
    fillOpacity: 0.75,
    animate: true,
    highlightOnHover: true,
    highlightFillColor: '#FC8D59',
    highlightBorderColor: 'rgba(250, 15, 160, 0.2)',
    highlightBorderWidth: 2,
    highlightBorderOpacity: 1,
    highlightFillOpacity: 0.85,
    exitDelay: 100, // Milliseconds
    key: JSON.stringify,
  },
  arcConfig: {
    strokeColor: '#DD1C77',
    strokeWidth: 1,
    arcSharpness: 1,
    animationSpeed: 600, // Milliseconds
    popupOnHover: false, // True to show the popup while hovering
    popupTemplate: function (geography, data) {
      // This function should just return a string
      // Case with latitude and longitude
      if (data.origin && data.destination && data.origin.latitude && data.origin.longitude && data.destination.latitude && data.destination.longitude) {
        return '<div class="hoverinfo"><strong>Arc</strong><br>Origin: ' + JSON.stringify(data.origin) + '<br>Destination: ' + JSON.stringify(data.destination) + '</div>';
      }
      // Case with only country name
      else if (data.origin && data.destination) {
        return '<div class="hoverinfo"><strong>Arc</strong><br>' + data.origin + ' -> ' + data.destination + '</div>';
      }
      // Missing information
      else {
        return '';
      }
    },
  },
});

// More info
let moreInfoButton = document.getElementById('more-info');
let closeInfoButton = document.getElementById('close-info');
let languageInfoItem = document.getElementById('language');
let currencyInfoItem = document.getElementById('currency');
let regionInfoItem = document.getElementById('region');
let capitalNameInfoItem = document.getElementById('capital-name');
let timeZone = document.getElementById('time-zone');

moreInfoButton.addEventListener('click', function () {
  languageInfoItem.style.display = languageInfoItem.style.display == 'none' ? 'block' : 'none';
  currencyInfoItem.style.display = currencyInfoItem.style.display == 'none' ? 'block' : 'none';
  regionInfoItem.style.display = regionInfoItem.style.display == 'none' ? 'block' : 'none';
  capitalNameInfoItem.style.display = capitalNameInfoItem.style.display == 'none' ? 'block' : 'none';
  timeZone.style.display = timeZone.style.display == 'none' ? 'block' : 'none';
});

closeInfoButton.addEventListener('click', function () {
  card.style.display = 'none';
});

//   Resize function for map
window.addEventListener('resize', function () {
  map.resize();
});
