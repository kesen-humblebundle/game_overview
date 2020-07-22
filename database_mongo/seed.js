/* eslint-disable no-plusplus */
const faker = require('faker');
const icons = require('./iconURLs.js');
const Overview = require('./index.js');

const platformsArray = ['steam', 'gog', 'epic', 'key', 'uPlay', 'origin', 'drmFree', 'epic'];
const OSarray = ['windows', 'linux', 'mac', 'oculusRift', 'htcVive', 'winMixedReal'];
const videoCards = ['AMD Radeon', 'NVIDIA GeForce'];
const processors = ['Intel Core i5', 'Intel Core i7', 'AMD FX-'];

const assignPlatforms = () => {
  const resultsArray = [];

  for (let i = 0; i < 100; i++) {
    let length = Math.ceil(Math.random() * 2);
    // let probablePlatform = Math.floor(Math.random() * 100);

    // if (probablePlatform < 10) {
    //   length = 0;
    // }

    const platformsSubArr = [];

    while (platformsSubArr.length < length) {
      const steamRnd = Math.random() * 100;
      let rndPlatformIndex = Math.floor(Math.random() * platformsArray.length);

      if (steamRnd > 25) {
        rndPlatformIndex = 0;
      }
      const platform = platformsArray[rndPlatformIndex];

      if (!platformsSubArr.includes(platformsArray[rndPlatformIndex])) {
        platformsSubArr.push(platform);
      }
    }
    resultsArray.push(platformsSubArr);
  }

  const urlsArray = [];
  // eslint-disable-next-line no-restricted-syntax
  for (let platforms of resultsArray) {
    platforms = platforms.map((platform) => {
      return [icons[platform][0], icons[platform][1], icons[platform][2]];
    });
    urlsArray.push(platforms);
  }

  return urlsArray;
};

const assignOS = () => {
  const osArray = [];

  for (let i = 0; i < 100; i++) {
    const gameOSArray = [];

    while (gameOSArray.length < 1) {
      const windowsProb = Math.random() * 100;
      const macProb = Math.random() * 100;
      const linuxProb = Math.random() * 100;
      const virtualProb = Math.random() * 100;
      const winMixedRealProb = Math.random() * 100;

      if (windowsProb < 60) {
        gameOSArray.push([icons.windows[0], icons.windows[1], icons.windows[2]]);
      }
      if (macProb < 40) {
        gameOSArray.push([icons.mac[0], icons.mac[1], icons.mac[2]]);
      }
      if (linuxProb < 40) {
        gameOSArray.push([icons.linux[0], icons.linux[1], icons.linux[2]]);
      }
      if (gameOSArray.length < 1 && virtualProb > 50) {
        gameOSArray.push([icons.oculusRift[0], icons.oculusRift[1], icons.oculusRift[2]]);
        gameOSArray.push([icons.htcVive[0], icons.htcVive[1], icons.htcVive[2]]);

        if (winMixedRealProb < 30) {
          gameOSArray.push([icons.winMixedReal[0], icons.winMixedReal[1], icons.winMixedReal[2]]);
          gameOSArray.unshift([icons.windows[0], icons.windows[1], icons.windows[2]]);
        }
      }
    }
    if (gameOSArray.length === 1 && gameOSArray[0] === icons.linux) {
      gameOSArray.push(icons.windows[0], icons.windows[1], icons.windows[2]);
    }
    osArray.push(gameOSArray);
  }

  return osArray;
};

const productOSes = assignOS();

const createSteamRatings = () => {
  const ratingsArray = [];
  while (ratingsArray.length < 100) {
    const rating = Math.ceil(Math.random() * 100);
    ratingsArray.push(rating);
  }

  return ratingsArray;
};

const createSystemRequirements = () => {
  const requirementsDocs = [];

  for (let j = 0; j < 100; j++) {
    const requirements = {
      windows: {},
      mac: {},
      linux: {}
    };

    for (let i = 0; i < 3; i++) {
      // this next line is for creating a version for any particular OS
      requirements[OSarray[i]].OS = `${OSarray[i]} ${Math.ceil(Math.random() * 5 + 5)} ${faker.fake(
        '{{random.word}}'
      )}`;
      requirements[OSarray[i]].Processor = `${processors[Math.floor(Math.random() * 3)]} ${
        Math.ceil(Math.random() * 10) * 1000
      }`;
      requirements[OSarray[i]].Memory = `${Math.ceil(Math.random() * 2) * 2 * 4} GB`;
      requirements[OSarray[i]].Graphics = `${videoCards[1]} ${
        Math.ceil(Math.random() * 100) * 10
      } ${Math.ceil(Math.random() * 2) * 2}GB / ${videoCards[0]} ${
        Math.ceil(Math.random() * 100) * 10
      } ${Math.ceil(Math.random() * 2) * 2}GB`;
      requirements[OSarray[i]].DirectX = `Version ${Math.ceil(Math.random() * 4) + 8}`;
      requirements[OSarray[i]].Network = 'Broadband Internet';
      requirements[OSarray[i]].Storage = `${Math.ceil(Math.random() * 10 + 10) * 5} GB`;
      if (
        productOSes[j].includes(icons.oculusRift) ||
        productOSes[j].includes(icons.htcVive) ||
        productOSes[j].includes(icons.winMixedReal)
      ) {
        requirements.vrSupport = {
          headsets: faker.fake(
            `{{commerce.productName}}, {{commerce.productName}}, {{commerce.productName}}`
          ),
          input: faker.fake(`{{commerce.productAdjective}}, {{commerce.productName}}`),
          playArea: faker.fake(`{{company.catchPhraseAdjective}}`)
        };
      }
    }
    requirementsDocs.push(requirements);
  }

  return requirementsDocs;
};

const createDevelopers = () => {
  const developersArray = [];

  while (developersArray.length < 100) {
    const developer = faker.fake(`{{company.companyName}}`);
    if (!developersArray.includes(developer)) {
      developersArray.push(developer);
    }
  }

  return developersArray;
};

const createPublishers = () => {
  const publishersArray = [];

  while (publishersArray.length < 100) {
    let publisher = faker.fake(`{{random.word}} {{random.word}}`);
    const pubArray = publisher.split(' ');

    pubArray[0] = pubArray[0][0].toUpperCase() + pubArray[0].slice(1);
    pubArray[1] = pubArray[1][0].toUpperCase() + pubArray[1].slice(1);
    publisher = pubArray.join(' ');

    if (!publishersArray.includes(publisher)) {
      publishersArray.push(publisher);
    }
  }

  return publishersArray;
};

const createLinks = () => {
  const linksArr = [];

  for (let i = 0; i < 100; i++) {
    const limit = Math.ceil(Math.random() * 3);
    const linksSubArray = [];
    for (let j = 0; j < limit; j++) {
      const link = faker.fake(`{{company.companyName}}`);
      linksSubArray.push(link);
    }
    linksArr.push(linksSubArray);
  }

  return linksArr;
};

const productPlatforms = assignPlatforms();
const productLinks = createLinks();
const productSysReq = createSystemRequirements();
const productSteamRate = createSteamRatings();
const productDevelopers = createDevelopers();
const productPublishers = createPublishers();

const seed = () => {
  const docsArray = [];

  for (let i = 0; i < 100; i++) {
    const newDoc = {};

    newDoc.steam_rating = null;
    newDoc.product_id = i + 1;
    newDoc.platforms = productPlatforms[i];
    newDoc.os = productOSes[i];
    newDoc.developer = productDevelopers[i];
    newDoc.publisher = productPublishers[i];
    if (!productOSes[i].includes(icons.windows)) {
      if (
        !productOSes[i].includes(icons.oculusRift) &&
        !productOSes[i].includes(icons.htcVive) &&
        !productOSes[i].includes(icons.winMixedReal)
      ) {
        delete productSysReq[i].windows;
      }
    }
    if (!productOSes[i].includes(icons.mac)) {
      delete productSysReq[i].mac;
    }
    if (!productOSes[i].includes(icons.linux)) {
      delete productSysReq[i].linux;
    }
    newDoc.system_req = productSysReq[i];
    newDoc.links = productLinks[i];
    for (let j = 0; j < productPlatforms[i].length; j++) {
      // console.log(i, productPlatforms[i][j]);
      if (newDoc.platforms[j].includes(icons.steam[0])) {
        newDoc['steam_rating'] = productSteamRate[i];
      }
    }
    docsArray.push(newDoc);
  }
  console.log(docsArray);
  return docsArray;
};

const addManyOverviews = (array) => {
  Overview.insertMany(array, (err) => {
    if (err) {
      throw err;
    }
    console.log('seeded DB!');
  });
};

const seedData = seed();

addManyOverviews(seedData);
