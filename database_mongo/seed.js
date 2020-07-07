/* eslint-disable no-plusplus */
const faker = require('faker');
const icons = require('./iconURLs.js');

const platformsArray = ['steam', 'gog', 'epic', 'key', 'uPlay', 'origin', 'drmFree', 'epic'];
const OSarray = ['windows', 'linux', 'mac'];
const videoCards = ['AMD Radeon', 'NVIDIA GeForce'];
const processors = ['Intel Core i5', 'Intel Core i7', 'AMD FX-'];

const assignPlatforms = () => {
  const resultsArray = [];

  for (let i = 0; i < 100; i++) {
    const length = Math.floor(Math.random() * 3);

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
  for (let plats of resultsArray) {
    plats = plats.map((platform) => {
      return icons[platform];
    });
    urlsArray.push(plats);
  }
  console.log(urlsArray);

  return urlsArray;
};

const createSteamRatings = () => {
  const ratingsArray = [];
  while (ratingsArray.length < 100) {
    const rating = Math.ceil(Math.random() * 100);
    ratingsArray.push(rating);
  }
  console.log(ratingsArray);
  return ratingsArray;
};

const createSystemrequirements = () => {
  const requirementsDocs = [];

  for (let j = 0; j < 100; j++) {
    const requirements = {
      windows: {},
      mac: {},
      linux: {}
    };

    for (let i = 0; i < OSarray.length; i++) {
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
    }
    requirementsDocs.push(requirements);
  }
  console.log(requirementsDocs);
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
  console.log(developersArray);
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
  console.log(publishersArray);
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
  // for (let i = 0; i < 100; i++) {
  //   const limit = Math.ceil(Math.random() * 3);
  //   const linksSubArray = [];
  //   for (let j = 0; j < limit; j++) {
  //     linksSubArray.push(faker.fake(`{{company.companyName}}`));
  //   }
  //   linksArr.push(linksSubArray);
  // }
  console.log(linksArr.length);
  return linksArr;
};

assignPlatforms();
// createLinks();
// createSystemrequirements();
// createSteamRatings();
// createDevelopers();
// createPublishers();
//TODO -Figure out icons for platform, os
