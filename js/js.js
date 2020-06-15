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
    let countryVisitedCount = Object.keys(datamap.options.data).length;
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

    for (const country of mapCountries) {
      country.addEventListener('click', function (event) {
        let visitedStatus = JSON.parse(event.target.dataset.info).fillKey;

        if (visitedStatus === 1) {
          console.log('send request');
          // Add API call here
        }
      });

      country.addEventListener('click', function (event) {
        let visitedStatus = JSON.parse(event.target.dataset.info).fillKey;
        if (visitedStatus === 1) {
          country.style.cursor = 'pointer';
        }
        countryInfoItemArray.forEach((item) => {
          item.style.display = 'block';
        });
        timeZoneInfoItem.style.display = 'none';
        initialCardText.style.display = 'none';
        moreInfoButton.style.display = 'block';
        countryFlag.src = event.target.__data__.properties.flag;
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
      // <img style="width:30px;margin:8px auto;" src=${event.target.__data__.properties.flag}></img>
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

<div class="hover-info-line"
  <span class="icon" id="capital-icon">  
      <svg width="24" height="24" preserveAspectRatio="xMinYMin slice" overflow="visible" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><g transform="scale(.9)"><path d="M24 24h-24v-2h.998l.009-6h21.993v6h1v2zm-3-6h-18v4h2v-2c0-.552.448-1 1-1s1 .448 1 1v2h2v-2c0-.552.448-1 1-1s1 .448 1 1v2h2v-2c0-.552.448-1 1-1s1 .448 1 1v2h2v-2c0-.552.448-1 1-1s1 .448 1 1v2h2v-4zm2-3h-21.991l.003-2h3.988v-3h2v3h2v-3h2v3h2v-3h2v3h2v-3h2v3h4v2zm-8-13h-3v1c2.966 0 6.158 1.979 7 6h-14c.547-3.78 3.638-5.827 6-6v-3h4v2zm.954 5c-.88-1.1-2.229-2-3.954-2-1.96 0-3.264.837-4.086 2h8.04z"/></g></svg>
  </span>
  <p class="info-item-text" id="country-capital">${event.target.__data__.properties.capital}</p>
  </div>

<br/>

<div class="hover-info-line"
  <span class="icon" id="language-icon">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" preserveAspectRatio="xMinYMin slice" overflow="visible" viewBox="0 0 24 24"><g transform="scale(.9)"><path d="M7.961 7.5h1.303l2.47 6.5h-1.349l-.538-1.5h-2.438l-.535 1.5h-1.392l2.479-6.5zm1.517 3.965l-.857-2.451-.851 2.451h1.708zm8.092-1.402c.062-.243.1-.426.135-.605l-1.1-.214-.109.5c-.371-.054-.767-.061-1.166-.021.009-.268.025-.531.049-.784h1.229v-1.042h-1.081c.054-.265.099-.424.144-.575l-1.074-.322c-.079.263-.145.521-.211.897h-1.226v1.042h1.092c-.028.337-.046.686-.051 1.038-1.207.443-1.719 1.288-1.719 2.054 0 .904.714 1.7 1.842 1.598 1.401-.128 2.337-1.186 2.885-2.487.567.327.805.876.591 1.385-.197.471-.78.919-1.892.896v1.121c1.234.019 2.448-.45 2.925-1.583.465-1.108-.066-2.318-1.263-2.898zm-1.446.766c-.175.387-.404.771-.697 1.075-.045-.323-.076-.676-.093-1.054.268-.035.537-.041.79-.021zm-1.894.362c.03.473.084.909.158 1.298-.997.183-1.037-.801-.158-1.298zm-2.23-8.191c5.514 0 10 3.592 10 8.007 0 4.917-5.145 7.961-9.91 7.961-1.937 0-3.384-.397-4.394-.644-1 .613-1.594 1.037-4.272 1.82.535-1.373.722-2.748.601-4.265-.837-1-2.025-2.4-2.025-4.872 0-4.415 4.486-8.007 10-8.007zm0-2c-6.338 0-12 4.226-12 10.007 0 2.05.739 4.063 2.047 5.625.055 1.83-1.023 4.456-1.993 6.368 2.602-.47 6.301-1.508 7.978-2.536 1.417.345 2.774.503 4.059.503 7.083 0 11.91-4.837 11.91-9.961-.001-5.811-5.702-10.006-12.001-10.006z"/></g></svg>
          </span>
      <p class="info-item-text" id="country-language">${formattedLanguage}</p>
      </div>
<br/>
<div class="hover-info-line"
  <span class="icon" id="currency-icon">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" preserveAspectRatio="xMinYMin slice" overflow="visible" viewBox="0 0 24 24"><g transform="scale(.9)"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4 14.083c0-2.145-2.232-2.742-3.943-3.546-1.039-.54-.908-1.829.581-1.916.826-.05 1.675.195 2.443.465l.362-1.647c-.907-.276-1.719-.402-2.443-.421v-1.018h-1v1.067c-1.945.267-2.984 1.487-2.984 2.85 0 2.438 2.847 2.81 3.778 3.243 1.27.568 1.035 1.75-.114 2.011-.997.226-2.269-.168-3.225-.54l-.455 1.644c.894.462 1.965.708 3 .727v.998h1v-1.053c1.657-.232 3.002-1.146 3-2.864z"/></g></svg>
          </span>
      <p class="info-item-text" id="country-currency">${event.target.__data__.properties.currencies[0].name}</p>
</div>
<br/>
<div class="hover-info-line"
    <span class="icon" id="region-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g transform="scale(.9)"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm1.608 9.476l-1.608-5.476-1.611 5.477c-.429.275-.775.658-1.019 1.107l-5.37 1.416 5.37 1.416c.243.449.589.833 1.019 1.107l1.611 5.477 1.618-5.479c.428-.275.771-.659 1.014-1.109l5.368-1.412-5.368-1.413c-.244-.452-.592-.836-1.024-1.111zm-1.608 4.024c-.828 0-1.5-.672-1.5-1.5s.672-1.5 1.5-1.5 1.5.672 1.5 1.5-.672 1.5-1.5 1.5zm5.25 3.75l-2.573-1.639c.356-.264.67-.579.935-.934l1.638 2.573zm-2.641-8.911l2.64-1.588-1.588 2.639c-.29-.407-.645-.761-1.052-1.051zm-5.215 7.325l-2.644 1.586 1.589-2.641c.29.408.646.764 1.055 1.055zm-1.005-6.34l-1.638-2.573 2.573 1.638c-.357.264-.672.579-.935.935z"/></g></svg>
            </span>
        <p class="info-item-text" id="country-subregion">${event.target.__data__.properties.subregion}</p>
        </div>

          
        <button id="more-info">Flip it</button>
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

//   Resize function for map
window.addEventListener('resize', function () {
  map.resize();
});
