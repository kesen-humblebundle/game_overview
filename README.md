# Chris-app-overview

> This is a service representing the game system requirements and other specifications
> on the product page of our Humble Bundle clone. It fetches info about a particular
> product and displays relavent info in the same manner as the original site.

## Related Projects

- https://github.com/KichiUeda/Chris-app-service-traits
- https://github.com/KichiUeda/Rane-app-description-service
- https://github.com/KichiUeda/Micko_App_images_service
- https://github.com/KichiUeda/price_and_promotion
- https://KichiUeda/other_popular_games
- https://KichiUeda/Chris-proxy

## Table of Contents

1. Usage
2. Requirements
3. Development

## Usage

> must have mongodb installed
> start mongodb
> in terminal, root directory of project - npm run seedDB
> npm run build
> npm start
> navigate to -

- https://127.0.0.1:3002

> it will default to product id of 21, but you can add any id from 1 - 100 by adding a slash followed by the number

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

> points of note include:
> using React Portals to render to 2 divs
> creating a set of icon-like images to use in place of unavailable icons, 3 color variations for each
> creating 100 sets of random data to be displayed in service using faker.js, seeding into MongoDB
> having various OSes and Platforms show up with similar frequency to the Humble Bundle site

- https://docs.google.com/document/d/13szAGho6CJYVl-xcwYetM6qGHoC2zH8Ik-sWd9i2-80/edit#

### Installing Dependencies

From within the root directory:

> npm install
