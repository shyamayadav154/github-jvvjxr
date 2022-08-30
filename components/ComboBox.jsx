/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { useState } from 'react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';
import { Combobox } from '@headlessui/react';

const people = [
  { id: 1, name: 'Leslie Alexander' },
  { id: 1, name: 'Leslie Alexander' },
  { id: 1, name: 'Leslie Alexander' },
  { id: 1, name: 'Leslie Alexander' },
  { id: 1, name: 'Leslie Alexander' },

  // More users...
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Example() {
  const [query, setQuery] = useState('');
  const [selectedPerson, setSelectedPerson] = useState();

  const filteredPeople =
    query === ''
      ? currencies
      : currencies.filter((person) => {
          return person.country.toLowerCase().includes(query.toLowerCase()) || person.currency_code?.toLowerCase().includes(query.toLowerCase())
        });

  return (
    <Combobox
      as="div"
      value={selectedPerson?.currency_code}
      onChange={setSelectedPerson}
    >
      <Combobox.Label className="block text-sm font-medium text-gray-700">
        Assigned to
      </Combobox.Label>
      <div className="relative mt-1 p-2 border border-blue-500">
        <div className="grid grid-cols-[50px_1fr] gap-2">

        <Combobox.Input
          className="  border-0 border-b focus:border-b border-gray-300 bg-white py-2 pl-3  shadow-sm   focus:outline-none text-sm  focus:ring-0"
          onChange={(event) => setQuery(event.target.value)}
          displayValue={(person) => person}
        />
        <input type="text"  className={` border-0  p-0 bg-inherit translate-y-px pl-2 border-b  border-transparent  focus:border-indigo-600 focus:ring-0 text-md text-gray-900  tracking-wide `}/>
        </div>
        {/* <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
          <ChevronUpDownIcon
            className="h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </Combobox.Button> */}

        {filteredPeople.length > 0 && (
          <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {filteredPeople.map((person) => (
              <Combobox.Option
                key={person.country}
                value={person}
                className={({ active }) =>
                  classNames(
                    'relative cursor-default select-none py-2 pl-3 pr-9',
                    active ? 'bg-indigo-600 text-white' : 'text-gray-900'
                  )
                }
              >
                {({ active, selected }) => (
                  <>
                    <span
                      className={classNames(
                        'block truncate',
                        selected && 'font-semibold'
                      )}
                    >
                      {person.country}({person.currency_code})
                    </span>

                    {selected && (
                      <span
                        className={classNames(
                          'absolute inset-y-0 right-0 flex items-center pr-4',
                          active ? 'text-white' : 'text-indigo-600'
                        )}
                      >
                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                      </span>
                    )}
                  </>
                )}
              </Combobox.Option>
            ))}
          </Combobox.Options>
        )}
      </div>
    </Combobox>
  );
}

const currencies = [
  {
    country: 'Afghanistan',
    currency_code: 'AFN',
  },
  {
    country: 'Albania',
    currency_code: 'ALL',
  },
  {
    country: 'Algeria',
    currency_code: 'DZD',
  },
  {
    country: 'American Samoa',
    currency_code: 'USD',
  },
  {
    country: 'Andorra',
    currency_code: 'EUR',
  },
  {
    country: 'Angola',
    currency_code: 'AOA',
  },
  {
    country: 'Anguilla',
    currency_code: 'XCD',
  },
  {
    country: 'Antarctica',
    currency_code: 'XCD',
  },
  {
    country: 'Antigua and Barbuda',
    currency_code: 'XCD',
  },
  {
    country: 'Argentina',
    currency_code: 'ARS',
  },
  {
    country: 'Armenia',
    currency_code: 'AMD',
  },
  {
    country: 'Aruba',
    currency_code: 'AWG',
  },
  {
    country: 'Australia',
    currency_code: 'AUD',
  },
  {
    country: 'Austria',
    currency_code: 'EUR',
  },
  {
    country: 'Azerbaijan',
    currency_code: 'AZN',
  },
  {
    country: 'Bahamas',
    currency_code: 'BSD',
  },
  {
    country: 'Bahrain',
    currency_code: 'BHD',
  },
  {
    country: 'Bangladesh',
    currency_code: 'BDT',
  },
  {
    country: 'Barbados',
    currency_code: 'BBD',
  },
  {
    country: 'Belarus',
    currency_code: 'BYR',
  },
  {
    country: 'Belgium',
    currency_code: 'EUR',
  },
  {
    country: 'Belize',
    currency_code: 'BZD',
  },
  {
    country: 'Benin',
    currency_code: 'XOF',
  },
  {
    country: 'Bermuda',
    currency_code: 'BMD',
  },
  {
    country: 'Bhutan',
    currency_code: 'BTN',
  },
  {
    country: 'Bolivia',
    currency_code: 'BOB',
  },
  {
    country: 'Bosnia and Herzegovina',
    currency_code: 'BAM',
  },
  {
    country: 'Botswana',
    currency_code: 'BWP',
  },
  {
    country: 'Bouvet Island',
    currency_code: 'NOK',
  },
  {
    country: 'Brazil',
    currency_code: 'BRL',
  },
  {
    country: 'British Indian Ocean Territory',
    currency_code: 'USD',
  },
  {
    country: 'Brunei',
    currency_code: 'BND',
  },
  {
    country: 'Bulgaria',
    currency_code: 'BGN',
  },
  {
    country: 'Burkina Faso',
    currency_code: 'XOF',
  },
  {
    country: 'Burundi',
    currency_code: 'BIF',
  },
  {
    country: 'Cambodia',
    currency_code: 'KHR',
  },
  {
    country: 'Cameroon',
    currency_code: 'XAF',
  },
  {
    country: 'Canada',
    currency_code: 'CAD',
  },
  {
    country: 'Cape Verde',
    currency_code: 'CVE',
  },
  {
    country: 'Cayman Islands',
    currency_code: 'KYD',
  },
  {
    country: 'Central African Republic',
    currency_code: 'XAF',
  },
  {
    country: 'Chad',
    currency_code: 'XAF',
  },
  {
    country: 'Chile',
    currency_code: 'CLP',
  },
  {
    country: 'China',
    currency_code: 'CNY',
  },
  {
    country: 'Christmas Island',
    currency_code: 'AUD',
  },
  {
    country: 'Cocos (Keeling) Islands',
    currency_code: 'AUD',
  },
  {
    country: 'Colombia',
    currency_code: 'COP',
  },
  {
    country: 'Comoros',
    currency_code: 'KMF',
  },
  {
    country: 'Congo',
    currency_code: 'XAF',
  },
  {
    country: 'Cook Islands',
    currency_code: 'NZD',
  },
  {
    country: 'Costa Rica',
    currency_code: 'CRC',
  },
  {
    country: 'Croatia',
    currency_code: 'HRK',
  },
  {
    country: 'Cuba',
    currency_code: 'CUP',
  },
  {
    country: 'Cyprus',
    currency_code: 'EUR',
  },
  {
    country: 'Czech Republic',
    currency_code: 'CZK',
  },
  {
    country: 'Denmark',
    currency_code: 'DKK',
  },
  {
    country: 'Djibouti',
    currency_code: 'DJF',
  },
  {
    country: 'Dominica',
    currency_code: 'XCD',
  },
  {
    country: 'Dominican Republic',
    currency_code: 'DOP',
  },
  {
    country: 'East Timor',
    currency_code: 'USD',
  },
  {
    country: 'Ecuador',
    currency_code: 'ECS',
  },
  {
    country: 'Egypt',
    currency_code: 'EGP',
  },
  {
    country: 'El Salvador',
    currency_code: 'SVC',
  },
  {
    country: 'England',
    currency_code: 'GBP',
  },
  {
    country: 'Equatorial Guinea',
    currency_code: 'XAF',
  },
  {
    country: 'Eritrea',
    currency_code: 'ERN',
  },
  {
    country: 'Estonia',
    currency_code: 'EUR',
  },
  {
    country: 'Ethiopia',
    currency_code: 'ETB',
  },
  {
    country: 'Falkland Islands',
    currency_code: 'FKP',
  },
  {
    country: 'Faroe Islands',
    currency_code: 'DKK',
  },
  {
    country: 'Fiji Islands',
    currency_code: 'FJD',
  },
  {
    country: 'Finland',
    currency_code: 'EUR',
  },
  {
    country: 'France',
    currency_code: 'EUR',
  },
  {
    country: 'French Guiana',
    currency_code: 'EUR',
  },
  {
    country: 'French Polynesia',
    currency_code: 'XPF',
  },
  {
    country: 'French Southern territories',
    currency_code: 'EUR',
  },
  {
    country: 'Gabon',
    currency_code: 'XAF',
  },
  {
    country: 'Gambia',
    currency_code: 'GMD',
  },
  {
    country: 'Georgia',
    currency_code: 'GEL',
  },
  {
    country: 'Germany',
    currency_code: 'EUR',
  },
  {
    country: 'Ghana',
    currency_code: 'GHS',
  },
  {
    country: 'Gibraltar',
    currency_code: 'GIP',
  },
  {
    country: 'Greece',
    currency_code: 'EUR',
  },
  {
    country: 'Greenland',
    currency_code: 'DKK',
  },
  {
    country: 'Grenada',
    currency_code: 'XCD',
  },
  {
    country: 'Guadeloupe',
    currency_code: 'EUR',
  },
  {
    country: 'Guam',
    currency_code: 'USD',
  },
  {
    country: 'Guatemala',
    currency_code: 'QTQ',
  },
  {
    country: 'Guinea',
    currency_code: 'GNF',
  },
  {
    country: 'Guinea-Bissau',
    currency_code: 'CFA',
  },
  {
    country: 'Guyana',
    currency_code: 'GYD',
  },
  {
    country: 'Haiti',
    currency_code: 'HTG',
  },
  {
    country: 'Heard Island and McDonald Islands',
    currency_code: 'AUD',
  },
  {
    country: 'Holy See (Vatican City State)',
    currency_code: 'EUR',
  },
  {
    country: 'Honduras',
    currency_code: 'HNL',
  },
  {
    country: 'Hong Kong',
    currency_code: 'HKD',
  },
  {
    country: 'Hungary',
    currency_code: 'HUF',
  },
  {
    country: 'Iceland',
    currency_code: 'ISK',
  },
  {
    country: 'India',
    currency_code: 'INR',
  },
  {
    country: 'Indonesia',
    currency_code: 'IDR',
  },
  {
    country: 'Iran',
    currency_code: 'IRR',
  },
  {
    country: 'Iraq',
    currency_code: 'IQD',
  },
  {
    country: 'Ireland',
    currency_code: 'EUR',
  },
  {
    country: 'Israel',
    currency_code: 'ILS',
  },
  {
    country: 'Italy',
    currency_code: 'EUR',
  },
  {
    country: 'Ivory Coast',
    currency_code: 'XOF',
  },
  {
    country: 'Jamaica',
    currency_code: 'JMD',
  },
  {
    country: 'Japan',
    currency_code: 'JPY',
  },
  {
    country: 'Jordan',
    currency_code: 'JOD',
  },
  {
    country: 'Kazakhstan',
    currency_code: 'KZT',
  },
  {
    country: 'Kenya',
    currency_code: 'KES',
  },
  {
    country: 'Kiribati',
    currency_code: 'AUD',
  },
  {
    country: 'Kuwait',
    currency_code: 'KWD',
  },
  {
    country: 'Kyrgyzstan',
    currency_code: 'KGS',
  },
  {
    country: 'Laos',
    currency_code: 'LAK',
  },
  {
    country: 'Latvia',
    currency_code: 'LVL',
  },
  {
    country: 'Lebanon',
    currency_code: 'LBP',
  },
  {
    country: 'Lesotho',
    currency_code: 'LSL',
  },
  {
    country: 'Liberia',
    currency_code: 'LRD',
  },
  {
    country: 'Libyan Arab Jamahiriya',
    currency_code: 'LYD',
  },
  {
    country: 'Liechtenstein',
    currency_code: 'CHF',
  },
  {
    country: 'Lithuania',
    currency_code: 'LTL',
  },
  {
    country: 'Luxembourg',
    currency_code: 'EUR',
  },
  {
    country: 'Macao',
    currency_code: 'MOP',
  },
  {
    country: 'North Macedonia',
    currency_code: 'MKD',
  },
  {
    country: 'Madagascar',
    currency_code: 'MGF',
  },
  {
    country: 'Malawi',
    currency_code: 'MWK',
  },
  {
    country: 'Malaysia',
    currency_code: 'MYR',
  },
  {
    country: 'Maldives',
    currency_code: 'MVR',
  },
  {
    country: 'Mali',
    currency_code: 'XOF',
  },
  {
    country: 'Malta',
    currency_code: 'EUR',
  },
  {
    country: 'Marshall Islands',
    currency_code: 'USD',
  },
  {
    country: 'Martinique',
    currency_code: 'EUR',
  },
  {
    country: 'Mauritania',
    currency_code: 'MRO',
  },
  {
    country: 'Mauritius',
    currency_code: 'MUR',
  },
  {
    country: 'Mayotte',
    currency_code: 'EUR',
  },
  {
    country: 'Mexico',
    currency_code: 'MXN',
  },
  {
    country: 'Micronesia, Federated States of',
    currency_code: 'USD',
  },
  {
    country: 'Moldova',
    currency_code: 'MDL',
  },
  {
    country: 'Monaco',
    currency_code: 'EUR',
  },
  {
    country: 'Mongolia',
    currency_code: 'MNT',
  },
  {
    country: 'Montserrat',
    currency_code: 'XCD',
  },
  {
    country: 'Morocco',
    currency_code: 'MAD',
  },
  {
    country: 'Mozambique',
    currency_code: 'MZN',
  },
  {
    country: 'Myanmar',
    currency_code: 'MMR',
  },
  {
    country: 'Namibia',
    currency_code: 'NAD',
  },
  {
    country: 'Nauru',
    currency_code: 'AUD',
  },
  {
    country: 'Nepal',
    currency_code: 'NPR',
  },
  {
    country: 'Netherlands',
    currency_code: 'EUR',
  },
  {
    country: 'Netherlands Antilles',
    currency_code: 'ANG',
  },
  {
    country: 'New Caledonia',
    currency_code: 'XPF',
  },
  {
    country: 'New Zealand',
    currency_code: 'NZD',
  },
  {
    country: 'Nicaragua',
    currency_code: 'NIO',
  },
  {
    country: 'Niger',
    currency_code: 'XOF',
  },
  {
    country: 'Nigeria',
    currency_code: 'NGN',
  },
  {
    country: 'Niue',
    currency_code: 'NZD',
  },
  {
    country: 'Norfolk Island',
    currency_code: 'AUD',
  },
  {
    country: 'North Korea',
    currency_code: 'KPW',
  },
  {
    country: 'Northern Ireland',
    currency_code: 'GBP',
  },
  {
    country: 'Northern Mariana Islands',
    currency_code: 'USD',
  },
  {
    country: 'Norway',
    currency_code: 'NOK',
  },
  {
    country: 'Oman',
    currency_code: 'OMR',
  },
  {
    country: 'Pakistan',
    currency_code: 'PKR',
  },
  {
    country: 'Palau',
    currency_code: 'USD',
  },
  {
    country: 'Palestine',
    currency_code: null,
  },
  {
    country: 'Panama',
    currency_code: 'PAB',
  },
  {
    country: 'Papua New Guinea',
    currency_code: 'PGK',
  },
  {
    country: 'Paraguay',
    currency_code: 'PYG',
  },
  {
    country: 'Peru',
    currency_code: 'PEN',
  },
  {
    country: 'Philippines',
    currency_code: 'PHP',
  },
  {
    country: 'Pitcairn',
    currency_code: 'NZD',
  },
  {
    country: 'Poland',
    currency_code: 'PLN',
  },
  {
    country: 'Portugal',
    currency_code: 'EUR',
  },
  {
    country: 'Puerto Rico',
    currency_code: 'USD',
  },
  {
    country: 'Qatar',
    currency_code: 'QAR',
  },
  {
    country: 'Reunion',
    currency_code: 'EUR',
  },
  {
    country: 'Romania',
    currency_code: 'RON',
  },
  {
    country: 'Russian Federation',
    currency_code: 'RUB',
  },
  {
    country: 'Rwanda',
    currency_code: 'RWF',
  },
  {
    country: 'Saint Helena',
    currency_code: 'SHP',
  },
  {
    country: 'Saint Kitts and Nevis',
    currency_code: 'XCD',
  },
  {
    country: 'Saint Lucia',
    currency_code: 'XCD',
  },
  {
    country: 'Saint Pierre and Miquelon',
    currency_code: 'EUR',
  },
  {
    country: 'Saint Vincent and the Grenadines',
    currency_code: 'XCD',
  },
  {
    country: 'Samoa',
    currency_code: 'WST',
  },
  {
    country: 'San Marino',
    currency_code: 'EUR',
  },
  {
    country: 'Sao Tome and Principe',
    currency_code: 'STD',
  },
  {
    country: 'Saudi Arabia',
    currency_code: 'SAR',
  },
  {
    country: 'Scotland',
    currency_code: 'GBP',
  },
  {
    country: 'Senegal',
    currency_code: 'XOF',
  },
  {
    country: 'Serbia',
    currency_code: 'RSD',
  },
  {
    country: 'Seychelles',
    currency_code: 'SCR',
  },
  {
    country: 'Sierra Leone',
    currency_code: 'SLL',
  },
  {
    country: 'Singapore',
    currency_code: 'SGD',
  },
  {
    country: 'Slovakia',
    currency_code: 'EUR',
  },
  {
    country: 'Slovenia',
    currency_code: 'EUR',
  },
  {
    country: 'Solomon Islands',
    currency_code: 'SBD',
  },
  {
    country: 'Somalia',
    currency_code: 'SOS',
  },
  {
    country: 'South Africa',
    currency_code: 'ZAR',
  },
  {
    country: 'South Georgia and the South Sandwich Islands',
    currency_code: 'GBP',
  },
  {
    country: 'South Korea',
    currency_code: 'KRW',
  },
  {
    country: 'South Sudan',
    currency_code: 'SSP',
  },
  {
    country: 'Spain',
    currency_code: 'EUR',
  },
  {
    country: 'Sri Lanka',
    currency_code: 'LKR',
  },
  {
    country: 'Sudan',
    currency_code: 'SDG',
  },
  {
    country: 'Suriname',
    currency_code: 'SRD',
  },
  {
    country: 'Svalbard and Jan Mayen',
    currency_code: 'NOK',
  },
  {
    country: 'Swaziland',
    currency_code: 'SZL',
  },
  {
    country: 'Sweden',
    currency_code: 'SEK',
  },
  {
    country: 'Switzerland',
    currency_code: 'CHF',
  },
  {
    country: 'Syria',
    currency_code: 'SYP',
  },
  {
    country: 'Tajikistan',
    currency_code: 'TJS',
  },
  {
    country: 'Tanzania',
    currency_code: 'TZS',
  },
  {
    country: 'Thailand',
    currency_code: 'THB',
  },
  {
    country: 'The Democratic Republic of Congo',
    currency_code: 'CDF',
  },
  {
    country: 'Togo',
    currency_code: 'XOF',
  },
  {
    country: 'Tokelau',
    currency_code: 'NZD',
  },
  {
    country: 'Tonga',
    currency_code: 'TOP',
  },
  {
    country: 'Trinidad and Tobago',
    currency_code: 'TTD',
  },
  {
    country: 'Tunisia',
    currency_code: 'TND',
  },
  {
    country: 'Turkey',
    currency_code: 'TRY',
  },
  {
    country: 'Turkmenistan',
    currency_code: 'TMT',
  },
  {
    country: 'Turks and Caicos Islands',
    currency_code: 'USD',
  },
  {
    country: 'Tuvalu',
    currency_code: 'AUD',
  },
  {
    country: 'Uganda',
    currency_code: 'UGX',
  },
  {
    country: 'Ukraine',
    currency_code: 'UAH',
  },
  {
    country: 'United Arab Emirates',
    currency_code: 'AED',
  },
  {
    country: 'United Kingdom',
    currency_code: 'GBP',
  },
  {
    country: 'United States',
    currency_code: 'USD',
  },
  {
    country: 'United States Minor Outlying Islands',
    currency_code: 'USD',
  },
  {
    country: 'Uruguay',
    currency_code: 'UYU',
  },
  {
    country: 'Uzbekistan',
    currency_code: 'UZS',
  },
  {
    country: 'Vanuatu',
    currency_code: 'VUV',
  },
  {
    country: 'Venezuela',
    currency_code: 'VEF',
  },
  {
    country: 'Vietnam',
    currency_code: 'VND',
  },
  {
    country: 'Virgin Islands, British',
    currency_code: 'USD',
  },
  {
    country: 'Virgin Islands, U.S.',
    currency_code: 'USD',
  },
  {
    country: 'Wales',
    currency_code: 'GBP',
  },
  {
    country: 'Wallis and Futuna',
    currency_code: 'XPF',
  },
  {
    country: 'Western Sahara',
    currency_code: 'MAD',
  },
  {
    country: 'Yemen',
    currency_code: 'YER',
  },
  {
    country: 'Zambia',
    currency_code: 'ZMW',
  },
  {
    country: 'Zimbabwe',
    currency_code: 'ZWD',
  },
];
