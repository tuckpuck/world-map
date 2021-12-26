let data = {
  AFG: { fillKey: 2, name: 'Afghanistan', code: '004', flag: 'flags/afghanistan.svg' },
  ALA: { fillKey: 2, name: 'Åland Islands', code: '248', flag: 'flags/aland_islands.svg' },
  ALB: { fillKey: 2, name: 'Albania', code: '008', flag: 'flags/albania.svg' },
  DZA: { fillKey: 2, name: 'Algeria', code: '012', flag: 'flags/algeria.svg' },
  ASM: { fillKey: 2, name: 'American Samoa', code: '016', flag: 'flags/american_samoa.svg' },
  AND: { fillKey: 2, name: 'Andorra', code: '020', flag: 'flags/andorra.svg' },
  AGO: { fillKey: 2, name: 'Angola', code: '024', flag: 'flags/angola.svg' },
  AIA: { fillKey: 2, name: 'Anguilla', code: '660', flag: 'flags/anguilla.svg' },
  ATA: { fillKey: 2, name: 'Antarctica', code: '010' },
  ATG: { fillKey: 2, name: 'Antigua and Barbuda', code: '028', flag: 'flags/antigua_and_barbuda.svg' },
  ARG: { fillKey: 2, name: 'Argentina', code: '032', flag: 'flags/argentina.svg' },
  ARM: { fillKey: 2, name: 'Armenia', code: '051', flag: 'flags/armenia.svg' },
  ABW: { fillKey: 2, name: 'Aruba', code: '533', flag: 'flags/aruba.svg' },
  AUS: { fillKey: 2, name: 'Australia', code: '036', flag: 'flags/australia.svg' },
  AUT: { fillKey: 1, name: 'Austria', code: '040', flag: 'flags/austria.svg' },
  AZE: { fillKey: 2, name: 'Azerbaijan', code: '031', flag: 'flags/azerbaijan.svg' },
  BHS: { fillKey: 2, name: 'Bahamas', code: '044', flag: 'flags/bahamas.svg' },
  BHR: { fillKey: 2, name: 'Bahrain', code: '048', flag: 'flags/bahrain.svg' },
  BGD: { fillKey: 2, name: 'Bangladesh', code: '050', flag: 'flags/bangladesh.svg' },
  BRB: { fillKey: 2, name: 'Barbados', code: '052', flag: 'flags/barbados.svg' },
  BLR: { fillKey: 2, name: 'Belarus', code: '112', flag: 'flags/belarus.svg' },
  BEL: { fillKey: 1, name: 'Belgium', code: '056', flag: 'flags/belgium.svg' },
  BLZ: { fillKey: 1, name: 'Belize', code: '084', flag: 'flags/belize.svg' },
  BEN: { fillKey: 2, name: 'Benin', code: '204', flag: 'flags/benin.svg' },
  BMU: { fillKey: 2, name: 'Bermuda', code: '060', flag: 'flags/bermuda.svg' },
  BTN: { fillKey: 2, name: 'Bhutan', code: '064', flag: 'flags/bhutan.svg' },
  BOL: { fillKey: 2, name: 'Bolivia', code: '068', flag: 'flags/bolivia.svg' },
  BES: { fillKey: 2, name: 'Bonaire, Sint Eustatius and Saba', code: '535', flag: 'flags/bonaire.svg' },
  BIH: { fillKey: 2, name: 'Bosnia and Herzegovina', code: '070', flag: 'flags/bosnia_and_herzegovina.svg' },
  BWA: { fillKey: 2, name: 'Botswana', code: '072', flag: 'flags/botswana.svg' },
  BVT: { fillKey: 2, name: 'Bouvet Island', code: '074', flag: '' },
  BRA: { fillKey: 2, name: 'Brazil', code: '076', flag: 'flags/brazil.svg' },
  IOT: { fillKey: 2, name: 'British Indian Ocean Territory', code: '086', flag: 'flags/british_indian_ocean_territory.svg' },
  BRN: { fillKey: 2, name: 'Brunei', code: '096', flag: 'flags/brunei.svg' },
  BGR: { fillKey: 1, name: 'Bulgaria', code: '100', flag: 'flags/bulgaria.svg' },
  BFA: { fillKey: 2, name: 'Burkina Faso', code: '854', flag: 'flags/burkina_faso.svg' },
  BDI: { fillKey: 2, name: 'Burundi', code: '108', flag: 'flags/burundi.svg' },
  CPV: { fillKey: 2, name: 'Cabo Verde', code: '132', flag: 'flags/cape_verde.svg' },
  KHM: { fillKey: 2, name: 'Cambodia', code: '116', flag: 'flags/cambodia.svg' },
  CMR: { fillKey: 2, name: 'Cameroon', code: '120', flag: 'flags/cameroon.svg' },
  CAN: { fillKey: 1, name: 'Canada', code: '124', flag: 'flags/canada.svg' },
  CYM: { fillKey: 2, name: 'Cayman Islands', code: '136', flag: 'flags/cayman_islands.svg' },
  CAF: { fillKey: 2, name: 'Central African Republic', code: '140', flag: 'flags/central_african_republic.svg' },
  TCD: { fillKey: 2, name: 'Chad', code: '148', flag: 'flags/chad.svg' },
  CHL: { fillKey: 2, name: 'Chile', code: '152', flag: 'flags/chile.svg' },
  CHN: { fillKey: 1, name: 'China', code: '156', flag: 'flags/china.svg' },
  CXR: { fillKey: 2, name: 'Christmas Island', code: '162', flag: 'flags/christmas_island.svg' },
  CCK: { fillKey: 2, name: 'Cocos (Keeling) Islands', code: '166', flag: 'flags/cocos_islands.svg' },
  COL: { fillKey: 2, name: 'Colombia', code: '170', flag: 'flags/colombia.svg' },
  COM: { fillKey: 2, name: 'Comoros', code: '174', flag: 'flags/comoros.svg' },
  COG: { fillKey: 2, name: 'Congo', code: '178', flag: 'flags/congo.svg' },
  COD: { fillKey: 2, name: 'Democratic Republic of the Congo', code: '180', flag: 'flags/democratic_republic_of_the_congo.svg' },
  COK: { fillKey: 2, name: 'Cook Islands', code: '184', flag: 'flags/cook_islands.svg' },
  CRI: { fillKey: 2, name: 'Costa Rica', code: '188', flag: 'flags/costa_rica.svg' },
  CIV: { fillKey: 2, name: "Côte d'Ivoire", code: '384', flag: 'flags/ivory_coast.svg' },
  HRV: { fillKey: 1, name: 'Croatia', code: '191', flag: 'flags/croatia.svg' },
  CUB: { fillKey: 2, name: 'Cuba', code: '192', flag: 'flags/cuba.svg' },
  CUW: { fillKey: 2, name: 'Curaçao', code: '531', flag: 'flags/curacao.svg' },
  CYP: { fillKey: 2, name: 'Cyprus', code: '196', flag: 'flags/cyprus.svg' },
  CZE: { fillKey: 1, name: 'Czechia', code: '203', flag: 'flags/czech_republic.svg' },
  DNK: { fillKey: 2, name: 'Denmark', code: '208', flag: 'flags/denmark.svg' },
  DJI: { fillKey: 2, name: 'Djibouti', code: '262', flag: 'flags/djibouti.svg' },
  DMA: { fillKey: 2, name: 'Dominica', code: '212', flag: 'flags/dominica.svg' },
  DOM: { fillKey: 2, name: 'Dominican Republic', code: '214', flag: 'flags/dominican_republic.svg' },
  ECU: { fillKey: 1, name: 'Ecuador', code: '218', flag: 'flags/ecuador.svg' },
  EGY: { fillKey: 1, name: 'Egypt', code: '818', flag: 'flags/egypt.svg' },
  SLV: { fillKey: 2, name: 'El Salvador', code: '222', flag: 'flags/el_salvador.svg' },
  GNQ: { fillKey: 2, name: 'Equatorial Guinea', code: '226', flag: 'flags/equatorial_guinea.svg' },
  ERI: { fillKey: 2, name: 'Eritrea', code: '232', flag: 'flags/eritrea.svg' },
  EST: { fillKey: 2, name: 'Estonia', code: '233', flag: 'flags/estonia.svg' },
  SWZ: { fillKey: 2, name: 'Eswatini', code: '748', flag: 'flags/eswatini.svg' },
  ETH: { fillKey: 2, name: 'Ethiopia', code: '231', flag: 'flags/ethiopia.svg' },
  FLK: { fillKey: 2, name: 'Falkland Islands (Malvinas)', code: '238', flag: 'flags/falkland_islands.svg' },
  FRO: { fillKey: 2, name: 'Faroe Islands', code: '234', flag: 'flags/faroe_islands.svg' },
  FJI: { fillKey: 1, name: 'Fiji', code: '242', flag: 'flags/fiji.svg' },
  FIN: { fillKey: 2, name: 'Finland', code: '246', flag: 'flags/finland.svg' },
  FRA: { fillKey: 1, name: 'France', code: '250', flag: 'flags/france.svg' },
  GUF: { fillKey: 2, name: 'French Guiana', code: '254' },
  PYF: { fillKey: 2, name: 'French Polynesia', code: '258', flag: 'flags/french_polynesia.svg' },
  ATF: { fillKey: 2, name: 'French Southern Territories', code: '260', flag: 'flags/french_southern_and_antarctic_lands.svg' },
  GAB: { fillKey: 2, name: 'Gabon', code: '266' },
  GMB: { fillKey: 2, name: 'Gambia', code: '270' },
  GEO: { fillKey: 2, name: 'Georgia', code: '268' },
  DEU: { fillKey: 1, name: 'Germany', code: '276' },
  GHA: { fillKey: 2, name: 'Ghana', code: '288' },
  GIB: { fillKey: 2, name: 'Gibraltar', code: '292' },
  GRC: { fillKey: 1, name: 'Greece', code: '300' },
  GRL: { fillKey: 2, name: 'Greenland', code: '304' },
  GRD: { fillKey: 2, name: 'Grenada', code: '308' },
  GLP: { fillKey: 2, name: 'Guadeloupe', code: '312' },
  GUM: { fillKey: 2, name: 'Guam', code: '316' },
  GTM: { fillKey: 1, name: 'Guatemala', code: '320' },
  GGY: { fillKey: 2, name: 'Guernsey', code: '831' },
  GIN: { fillKey: 2, name: 'Guinea', code: '324' },
  GNB: { fillKey: 2, name: 'Guinea-Bissau', code: '624' },
  GUY: { fillKey: 2, name: 'Guyana', code: '328' },
  HTI: { fillKey: 2, name: 'Haiti', code: '332' },
  HMD: { fillKey: 2, name: 'Heard Island and McDonald Islands', code: '334' },
  VAT: { fillKey: 1, name: 'Holy See', code: '336' },
  HND: { fillKey: 2, name: 'Honduras', code: '340' },
  HKG: { fillKey: 2, name: 'Hong Kong', code: '344' },
  HUN: { fillKey: 1, name: 'Hungary', code: '348' },
  ISL: { fillKey: 2, name: 'Iceland', code: '352' },
  IND: { fillKey: 1, name: 'India', code: '356' },
  IDN: { fillKey: 1, name: 'Indonesia', code: '360' },
  IRN: { fillKey: 2, name: 'Iran (Islamic Republic of)', code: '364' },
  IRQ: { fillKey: 2, name: 'Iraq', code: '368' },
  IRL: { fillKey: 2, name: 'Ireland', code: '372' },
  IMN: { fillKey: 2, name: 'Isle of Man', code: '833' },
  ISR: { fillKey: 2, name: 'Israel', code: '376' },
  ITA: { fillKey: 1, name: 'Italy', code: '380' },
  JAM: { fillKey: 2, name: 'Jamaica', code: '388' },
  JPN: { fillKey: 1, name: 'Japan', code: '392' },
  JEY: { fillKey: 2, name: 'Jersey', code: '832' },
  JOR: { fillKey: 2, name: 'Jordan', code: '400' },
  KAZ: { fillKey: 2, name: 'Kazakhstan', code: '398' },
  KEN: { fillKey: 2, name: 'Kenya', code: '404' },
  KIR: { fillKey: 2, name: 'Kiribati', code: '296' },
  PRK: { fillKey: 2, name: "Korea (Democratic People's Republic of)", code: '408' },
  KOR: { fillKey: 2, name: 'Korea, Republic of', code: '410' },
  KWT: { fillKey: 1, name: 'Kuwait', code: '414' },
  KGZ: { fillKey: 2, name: 'Kyrgyzstan', code: '417' },
  LAO: { fillKey: 1, name: "Lao People's Democratic Republic", code: '418' },
  LVA: { fillKey: 2, name: 'Latvia', code: '428' },
  LBN: { fillKey: 2, name: 'Lebanon', code: '422' },
  LSO: { fillKey: 2, name: 'Lesotho', code: '426' },
  LBR: { fillKey: 2, name: 'Liberia', code: '430' },
  LBY: { fillKey: 2, name: 'Libya', code: '434' },
  LIE: { fillKey: 2, name: 'Liechtenstein', code: '438' },
  LTU: { fillKey: 2, name: 'Lithuania', code: '440' },
  LUX: { fillKey: 1, name: 'Luxembourg', code: '442' },
  MAC: { fillKey: 2, name: 'Macao', code: '446' },
  MDG: { fillKey: 2, name: 'Madagascar', code: '450' },
  MWI: { fillKey: 2, name: 'Malawi', code: '454' },
  MYS: { fillKey: 1, name: 'Malaysia', code: '458' },
  MDV: { fillKey: 2, name: 'Maldives', code: '462' },
  MLI: { fillKey: 2, name: 'Mali', code: '466' },
  MLT: { fillKey: 2, name: 'Malta', code: '470' },
  MHL: { fillKey: 2, name: 'Marshall Islands', code: '584' },
  MTQ: { fillKey: 2, name: 'Martinique', code: '474' },
  MRT: { fillKey: 2, name: 'Mauritania', code: '478' },
  MUS: { fillKey: 2, name: 'Mauritius', code: '480' },
  MYT: { fillKey: 2, name: 'Mayotte', code: '175' },
  MEX: { fillKey: 1, name: 'Mexico', code: '484' },
  FSM: { fillKey: 2, name: 'Micronesia (Federated States of)', code: '583' },
  MDA: { fillKey: 1, name: 'Moldova, Republic of', code: '498' },
  MCO: { fillKey: 1, name: 'Monaco', code: '492' },
  MNG: { fillKey: 2, name: 'Mongolia', code: '496' },
  MNE: { fillKey: 2, name: 'Montenegro', code: '499' },
  MSR: { fillKey: 2, name: 'Montserrat', code: '500' },
  MAR: { fillKey: 1, name: 'Morocco', code: '504' },
  MOZ: { fillKey: 2, name: 'Mozambique', code: '508' },
  MMR: { fillKey: 1, name: 'Myanmar', code: '104' },
  NAM: { fillKey: 2, name: 'Namibia', code: '516' },
  NRU: { fillKey: 2, name: 'Nauru', code: '520' },
  NPL: { fillKey: 1, name: 'Nepal', code: '524' },
  NLD: { fillKey: 1, name: 'Netherlands', code: '528' },
  NCL: { fillKey: 2, name: 'New Caledonia', code: '540' },
  NZL: { fillKey: 2, name: 'New Zealand', code: '554' },
  NIC: { fillKey: 2, name: 'Nicaragua', code: '558' },
  NER: { fillKey: 2, name: 'Niger', code: '562' },
  NGA: { fillKey: 2, name: 'Nigeria', code: '566' },
  NIU: { fillKey: 2, name: 'Niue', code: '570' },
  NFK: { fillKey: 2, name: 'Norfolk Island', code: '574' },
  MKD: { fillKey: 2, name: 'North Macedonia', code: '807' },
  MNP: { fillKey: 2, name: 'Northern Mariana Islands', code: '580' },
  NOR: { fillKey: 2, name: 'Norway', code: '578' },
  OMN: { fillKey: 2, name: 'Oman', code: '512' },
  PAK: { fillKey: 2, name: 'Pakistan', code: '586' },
  PLW: { fillKey: 2, name: 'Palau', code: '585' },
  PSE: { fillKey: 2, name: 'Palestine, State of', code: '275' },
  PAN: { fillKey: 2, name: 'Panama', code: '591' },
  PNG: { fillKey: 2, name: 'Papua New Guinea', code: '598' },
  PRY: { fillKey: 2, name: 'Paraguay', code: '600' },
  PER: { fillKey: 2, name: 'Peru', code: '604' },
  PHL: { fillKey: 2, name: 'Philippines', code: '608' },
  PCN: { fillKey: 2, name: 'Pitcairn', code: '612' },
  POL: { fillKey: 1, name: 'Poland', code: '616' },
  PRT: { fillKey: 1, name: 'Portugal', code: '620' },
  PRI: { fillKey: 2, name: 'Puerto Rico', code: '630' },
  QAT: { fillKey: 2, name: 'Qatar', code: '634' },
  REU: { fillKey: 2, name: 'Réunion', code: '638' },
  ROU: { fillKey: 1, name: 'Romania', code: '642' },
  RUS: { fillKey: 2, name: 'Russian Federation', code: '643' },
  RWA: { fillKey: 2, name: 'Rwanda', code: '646' },
  BLM: { fillKey: 2, name: 'Saint Barthélemy', code: '652' },
  SHN: { fillKey: 2, name: 'Saint Helena, Ascension and Tristan da Cunha', code: '654' },
  KNA: { fillKey: 2, name: 'Saint Kitts and Nevis', code: '659' },
  LCA: { fillKey: 2, name: 'Saint Lucia', code: '662' },
  MAF: { fillKey: 2, name: 'Saint Martin (French part)', code: '663' },
  SPM: { fillKey: 2, name: 'Saint Pierre and Miquelon', code: '666' },
  VCT: { fillKey: 2, name: 'Saint Vincent and the Grenadines', code: '670' },
  WSM: { fillKey: 2, name: 'Samoa', code: '882' },
  SMR: { fillKey: 2, name: 'San Marino', code: '674' },
  STP: { fillKey: 2, name: 'Sao Tome and Principe', code: '678' },
  SAU: { fillKey: 2, name: 'Saudi Arabia', code: '682' },
  SEN: { fillKey: 2, name: 'Senegal', code: '686' },
  SRB: { fillKey: 2, name: 'Serbia', code: '688' },
  SYC: { fillKey: 2, name: 'Seychelles', code: '690' },
  SLE: { fillKey: 2, name: 'Sierra Leone', code: '694' },
  SGP: { fillKey: 1, name: 'Singapore', code: '702' },
  SXM: { fillKey: 2, name: 'Sint Maarten (Dutch part)', code: '534' },
  SVK: { fillKey: 1, name: 'Slovakia', code: '703' },
  SVN: { fillKey: 2, name: 'Slovenia', code: '705' },
  SLB: { fillKey: 2, name: 'Solomon Islands', code: '090' },
  SOM: { fillKey: 2, name: 'Somalia', code: '706' },
  ZAF: { fillKey: 2, name: 'South Africa', code: '710' },
  SGS: { fillKey: 2, name: 'South Georgia and the South Sandwich Islands', code: '239' },
  SSD: { fillKey: 2, name: 'South Sudan', code: '728' },
  ESP: { fillKey: 1, name: 'Spain', code: '724' },
  LKA: { fillKey: 2, name: 'Sri Lanka', code: '144' },
  SDN: { fillKey: 2, name: 'Sudan', code: '729' },
  SUR: { fillKey: 2, name: 'Suriname', code: '740' },
  SJM: { fillKey: 2, name: 'Svalbard and Jan Mayen', code: '744' },
  SWE: { fillKey: 1, name: 'Sweden', code: '752' },
  CHE: { fillKey: 2, name: 'Switzerland', code: '756' },
  SYR: { fillKey: 2, name: 'Syrian Arab Republic', code: '760' },
  TWN: { fillKey: 2, name: 'Taiwan, Province of China', code: '158' },
  TJK: { fillKey: 2, name: 'Tajikistan', code: '762' },
  TZA: { fillKey: 2, name: 'Tanzania, United Republic of', code: '834' },
  THA: { fillKey: 1, name: 'Thailand', code: '764' },
  TLS: { fillKey: 2, name: 'Timor-Leste', code: '626' },
  TGO: { fillKey: 2, name: 'Togo', code: '768' },
  TKL: { fillKey: 2, name: 'Tokelau', code: '772' },
  TON: { fillKey: 2, name: 'Tonga', code: '776' },
  TTO: { fillKey: 2, name: 'Trinidad and Tobago', code: '780' },
  TUN: { fillKey: 2, name: 'Tunisia', code: '788' },
  TUR: { fillKey: 1, name: 'Turkey', code: '792' },
  TKM: { fillKey: 2, name: 'Turkmenistan', code: '795' },
  TCA: { fillKey: 2, name: 'Turks and Caicos Islands', code: '796' },
  TUV: { fillKey: 2, name: 'Tuvalu', code: '798' },
  UGA: { fillKey: 2, name: 'Uganda', code: '800' },
  UKR: { fillKey: 1, name: 'Ukraine', code: '804' },
  ARE: { fillKey: 2, name: 'United Arab Emirates', code: '784' },
  GBR: { fillKey: 1, name: 'United Kingdom of Great Britain and Northern Ireland', code: '826' },
  USA: { fillKey: 1, name: 'United States of America', code: '840' },
  UMI: { fillKey: 2, name: 'United States Minor Outlying Islands', code: '581' },
  URY: { fillKey: 2, name: 'Uruguay', code: '858' },
  UZB: { fillKey: 2, name: 'Uzbekistan', code: '860' },
  VUT: { fillKey: 2, name: 'Vanuatu', code: '548' },
  VEN: { fillKey: 2, name: 'Venezuela (Bolivarian Republic of)', code: '862' },
  VNM: { fillKey: 1, name: 'Vietnam', code: '704' },
  VGB: { fillKey: 1, name: 'Virgin Islands (British)', code: '092' },
  VIR: { fillKey: 2, name: 'Virgin Islands (U.S.)', code: '850' },
  WLF: { fillKey: 2, name: 'Wallis and Futuna', code: '876' },
  ESH: { fillKey: 2, name: 'Western Sahara', code: '732' },
  YEM: { fillKey: 2, name: 'Yemen', code: '887' },
  ZMB: { fillKey: 2, name: 'Zambia', code: '894' },
  ZWE: { fillKey: 2, name: 'Zimbabwe', code: '716' },
};
