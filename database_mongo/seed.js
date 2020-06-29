const faker = require('faker');

const platformsArray = ['steam', 'gog', 'epic', 'key'];
const OSarray = ['Windows', 'Linux', 'Mac'];
const videoCards = ['AMD Radeon', 'NVIDIA GeForce'];
const processors = ['Intel Core i5', 'Intel Core i7', 'AMD FX-'];

const createSteamRatings = () => {
  const ratingsArray = [];
  while (ratingsArray.length < 100) {
    const rating = Math.ceil(Math.random() * 100);
    ratingsArray.push(rating);
  }
  return ratingsArray;
};

const createSystemrequirementss = () => {
  const requirementsDocs = [];

  for (let j = 0; j < 100; j++) {
    const requirements = {
      Windows: {},
      Mac: {},
      Linux: {}
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
  const linksObj = {};

  for (let i = 0; i < 100; i++) {
    const limit = Math.ceil(Math.random() * 3);
    const linksSubArray = [];
    for (let j = 0; j < limit; j++) {
      linksSubArray.push(faker.fake(`{{company.companyName}}`));
    }
    linksObj[i] = linksSubArray;
  }

  return linksObj;
};

// createPlatforms([]);
createLinks();
createSystemrequirementss();
createSteamRatings();
createDevelopers();
createPublishers();
