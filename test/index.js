import Ajv from 'ajv';
import * as data from '../data.js';

const ajv = new Ajv();
const { cities, places } = data.load();

const citySchema = {
  type: 'object',
  additionalProperties: false,
  required: ['id', 'name', 'country', 'timezone', 'coordinates', 'url', 'places', 'flag'],
  properties: {
    id: { type: 'string' },
    name: { type: 'string' },
    country: { type: 'string' },
    timezone: { type: 'string' },
    flag: { type: 'string' },
    
    // processed properties
    coordinates: { type: 'array', items: { type: 'number' } },

    // generated properties
    url: { type: 'string' },
    places: { type: 'array' },
    redirects: { type: 'array' },
    count: { type: 'number' },
  }
}

for (const city of cities) {
  const valid = ajv.validate(citySchema, city);
  if (!valid) {
    console.log(city.name);
    console.log(ajv.errors);
    process.exit(-1);
  }
}

const types = [
  'Cafe',
  'Bar',
  'Restaurant',
  'Lobby',
  'Library',
  'Coworking Space',
  'Public Space',
  'Event Space',
  'Lounge',
  'Booth',
  'Bookstore',
  'Hotel',
  'Pub'
];

const placeSchema = {
  type: 'object',
  additionalProperties: false,
  required: ['name', 'type', 'area', 'coordinates'],
  properties: {

    // raw data properties
    contributors: { type: ['array', 'null'], items: { type: 'string' } },
    added: { type: ['string', 'null'], pattern: "\\d\\d-\\d\\d-\\d\\d" },
    updated: { type: ['string', 'null'], pattern: "\\d\\d-\\d\\d-\\d\\d" },
    name: { type: 'string' },
    type: { type: 'string', enum: types },
    area: { type: ['string', 'null'] },
    google_maps: { type: ['string', 'null'] },
    address: { type: ['object', 'string', 'null'] },
    station: { type: ['string', 'null'] },
    wifi: { type: ['integer', 'null'], minimum: 0, maximum: 5 },
    speed: { type: ['number', 'null'] },
    power: { type: ['number', 'null'], minimum: 0, maximum: 5 },
    vacancy: { type: ['number', 'null'], minimum: 0, maximum: 5 },
    comfort: { type: ['number', 'null'], minimum: 1, maximum: 5 },
    quiet: { type: ['number', 'null'], minimum: 1, maximum: 5 },
    drinks: { type: ['number', 'null'], minimum: 0, maximum: 5 },
    food: { type: ['number', 'null'], minimum: 0, maximum: 5 },
    price: { type: ['number', 'null'], minimum: 1, maximum: 5 },
    view: { type: ['number', 'null'], minimum: 0, maximum: 5 },
    toilets: { type: ['number', 'null'], minimum: 0, maximum: 5 },
    music: { type: ['boolean', 'null'] },
    smoking: { type: ['boolean', 'null'] },
    standing_tables: { type: ['boolean', 'null'] },
    outdoor_seating: { type: ['boolean', 'null'] },
    cash_only: { type: ['boolean', 'null'] },
    animals: { type: ['boolean', 'null'] },
    lactose_free_milk: { type: ['boolean', 'null'] },
    time_limit: { type: ['boolean', 'null'] },
    closed: { type: ['boolean', 'null'] },
    tips: { type: 'array', items: { type: 'string' } },
    facebook: { type: ['string', 'null'] },
    instagram: { type: ['string', 'null'] },
    website: { type: ['string', 'null'] },
    telephone: { type: ['string', 'null'] },
    content: { type: 'string' },
    temporarily_closed: { type: ['boolean', 'null'] },

    // legacy data properties
    opens: { type: ['string', 'null'] },
    closes: { type: ['string', 'null'] },

    // processed data properties
    coordinates: { type: 'array', items: { type: 'number' } },
    hours: { type: ['array', 'null'], items: { type: ['array', 'null'] } },
    images: { type: ['array', 'null'], items: { type: 'string' } },

    // generated properties
    id: { type: 'string' },
    url: { type: 'string' },
    city: { type: 'string' },
    cityUrl: { type: 'string' },
    cityName: { type: 'string' },
    file: { type: 'string' },
    score: { type: 'number' },
    review: { type: ['object', 'string'] },

    features: { type: ['object', 'string'] },
    redirect_old_city: { type: ['string', 'null'] },
  }
}

for (const place of places) {
  if (place.redirect) {
    continue;
  }
  const valid = ajv.validate(placeSchema, place);
  if (!valid) {
    console.log(place.name);
    console.log(ajv.errors);
    process.exit(-1);
  }
}
