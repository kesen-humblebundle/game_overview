# Game Overview Service

> This is a service representing the game system requirements and other specifications
> on the product page of our Humble Bundle clone. It fetches info about a particular
> product and displays relavent info in the same manner as the original site.
> A second div displays system requirements for a given id and includes a dropown to view more.

## Related Projects

- https://github.com/KichiUeda/Chris-app-service-traits
- https://github.com/KichiUeda/Rane-app-description-service
- https://github.com/KichiUeda/Micko_App_images_service
- https://github.com/KichiUeda/price_and_promotion
- https://KichiUeda/other_popular_games
- https://KichiUeda/Chris-proxy

## Table of Contents

1. Usage
2. Testing
3. Requirements
4. Development
5. CRUD Routes

## Usage

1. Must have mongodb installed
2. Start mongodb
3. Make sure to create a .env file at the root level with the following format:
```
OVERVIEW_PORT=3002
DATABASE='mongodb://localhost:27017/overview'
```
4. In terminal, from root directory of project > npm run seedDB
5. npm run build
6. npm start
7. Navigate to: https://127.0.0.1:3002

> The service will default to a product id of 21, but you can switch to any id from 1 - 100 inclusive by adding a slash followed by the number to the end of step 7

## Testing
This service uses jest and enzyme. 

From terminal in root directory:

To run all tests: > npm test

To run only the tests associated with CRUD routes: > npm run testCRUD

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

> Node v14.2 used for this project

- Node 6.13.0
- etc

## Development

> points of note include:
> using styled-components
> retrieving product id from browser - window.location.pathname
> using React Portals to render to 2 divs
> creating a set of icon-like images to use in place of unavailable icons, 3 color variations for each
> generating 100 sets of random data to be displayed in service using faker.js, seeding into MongoDB
> visit links to see sample response data:

- https://gist.github.com/Chris-Hesterman/4733262383bab09b7ce1cdbe596efbda
- https://gist.github.com/Chris-Hesterman/4733262383bab09b7ce1cdbe596efbda

> having various OSes and Platforms show up with similar frequency to the Humble Bundle site
> implementing dropdown window in System Requirements div with gradient sandwiched between text
> deploying to AWS ec2 instance

- https://docs.google.com/document/d/13szAGho6CJYVl-xcwYetM6qGHoC2zH8Ik-sWd9i2-80/edit#

## CRUD Routes
```
GET
Endpoint: /readOnly/:product_id

Response format:
  product_id: Number,
  platforms: Array,
  os: Array,
  developer: String,
  publisher: String,
  system_req: Object,
  links: Array,
  steam_rating: Number


POST
Endpoint: /newItem

-Requires an object to be sent in request body. product_id field is required:

  product_id: {
    type: Number,
    required: true
  },
  platforms: Array,
  os: Array,
  developer: String,
  publisher: String,
  system_req: Object,
  links: Array,
  steam_rating: Number


PUT
Endpoint: /updateItem

-Requires an object to be sent in request body with fields you would like updated. product_id is required to identify the item to update.


DELETE
Endpoint: /deleteItem/:product_id
```


### Installing Dependencies

From within the root directory:

> npm install
