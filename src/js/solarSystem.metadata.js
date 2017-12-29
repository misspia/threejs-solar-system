// https://pds.jpl.nasa.gov/planets/special/planets.htm
// https://stackoverflow.com/questions/11363170/units-of-three-js-calculating-rotation-orbit-speeds

// original units
// distance from sun: AU
// distance: km
// angle: degrees
// period: earth day
// orbit radius: AU

const DAY_SCALE = 0.01;
const KM_SCALE = 60000;
const AU_SCALE = 2;
// const AU_SCALE = 149597871 / KM_SCALE; // km


const calc = {
    gameDistance: (km) => {
      return km / KM_SCALE;
    },
    orbitRadius: (sunRadius, distanceFromSun) => {
      return sunRadius + (AU_SCALE * distanceFromSun);
    },
    radians: (degrees) => {
      return degrees * Math.PI / 180;
    },
    orbitSpeed: (earthDays) => { // also for revolution speed
      return DAY_SCALE / earthDays ;
    },
};

const data = {
  sun: {
    radius: 695700,
  },
  mercury: {
    radius: 2439.7,
    distanceFromSun: 0.387,
    orbitInclination: 7,
    orbitPeriod: 87.97,
    rotationPeriod: 58.65,
    obliquity: 0,
  },
  venus: {
    radius: 6052,
    distanceFromSun: 0.723,
    orbitInclination: 3.39,
    orbitPeriod: 224.7,
    rotationPeriod: 243.02,
    obliquity: 1.78,
  },
  earth: {
    radius: 6378,
    distanceFromSun: 1,
    orbitInclination: 0,
    orbitPeriod: 365.26,
    rotationPeriod: 1,
    obliquity: 23.4,
  },
  mars: {
    radius: 3393.5,
    distanceFromSun: 1.524,
    orbitInclination: 1.85,
    orbitPeriod: 686.98,
    rotationPeriod: 1.026,
    obliquity: 25,
  },
  jupiter: {
    radius: 71400,
    distanceFromSun: 5.203,
    orbitInclination: 1.3,
    orbitPeriod: 11.86,
    rotationPeriod: 0.41,
    obliquity: 3.08,
  },
  saturn: {
    radius: 60330,
    ringRadiusStart: 92000, //https://en.wikipedia.org/wiki/Rings_of_Saturn#Physical_characteristics
    ringRadiusEnd: 136775, // subdivisions B and A
    distanceFromSun: 9.537,
    orbitInclination: 2.49,
    orbitPeriod: 29.46,
    rotationPeriod: 0.44,
    obliquity: 26.7,
  },
  uranus: {
    radius: 25559,
    ringRadiusStart: 26840, //https://en.wikipedia.org/wiki/Rings_of_Uranus#List_of_properties
    ringRadiusEnd: 103000,
    distanceFromSun: 19.19,
    orbitInclination: 0.77,
    orbitPeriod: 30.685,
    rotationPeriod: 0.72,
    obliquity: 97.9,
  },
  neptune: {
    radius: 24764,
    ringRadiusStart: 40900, // https://en.wikipedia.org/wiki/Rings_of_Neptune#Properties
    ringRadiusEnd: 62932,
    distanceFromSun: 30.07,
    orbitInclination: 1.77,
    orbitPeriod: 60190,
    rotationPeriod: 0.67,
    obliquity: 29.6,
  }
}

export const sun = {
  radius: calc.gameDistance(data.sun.radius),
  color: 0xff691c, // 0xf1bf62  0xff850c
};

export const mercury = {
  radius: calc.gameDistance(data.mercury.radius),
  orbitRadius: calc.orbitRadius(sun.radius, data.mercury.distanceFromSun),
  orbitInclination: calc.radians(data.mercury.orbitInclination),
  orbitSpeed: calc.orbitSpeed(data.mercury.orbitPeriod),
  rotationSpeed: calc.orbitSpeed(data.mercury.rotationPeriod),
  obliquity: calc.radians(data.mercury.obliquity),
  color: 0xbcbabb,
};

export const venus = {
  radius: calc.gameDistance(data.venus.radius),
  orbitRadius: calc.orbitRadius(sun.radius, data.venus.distanceFromSun),
  orbitInclination: calc.radians(data.venus.orbitInclination),
  orbitSpeed: calc.orbitSpeed(data.venus.orbitPeriod),
  rotationSpeed: calc.orbitSpeed(data.venus.rotationPeriod),
  obliquity: calc.radians(data.venus.obliquity),
  color: 0xff4081 // 0xff80ab  0xf50057  0xf78181  0xf93c64
};

export const earth = {
  radius: calc.gameDistance(data.earth.radius),
  orbitRadius: calc.orbitRadius(sun.radius, data.earth.distanceFromSun),
  orbitInclination: calc.radians(data.earth.orbitInclination),
  orbitSpeed: calc.orbitSpeed(data.earth.orbitPeriod),
  rotationSpeed: calc.orbitSpeed(data.earth.rotationPeriod),
  obliquity: calc.radians(data.earth.obliquity),
  color: 0x6b93d6, // 0x4f4cb0  0x6b93d6  0xc3eee7
  landColor: 0x9fc164,
};

export const mars = {
  radius: calc.gameDistance(data.mars.radius),
  orbitRadius: calc.orbitRadius(sun.radius, data.mars.distanceFromSun),
  orbitInclination: calc.radians(data.mars.orbitInclination),
  orbitSpeed: calc.orbitSpeed(data.mars.orbitPeriod),
  rotationSpeed: calc.orbitSpeed(data.mars.rotationPeriod),
  obliquity: calc.radians(data.mars.obliquity),
  color: 0xed4036
};

export const jupiter = {
  radius: calc.gameDistance(data.jupiter.radius),
  orbitRadius: calc.orbitRadius(sun.radius, data.jupiter.distanceFromSun),
  orbitInclination: calc.radians(data.jupiter.orbitInclination),
  orbitSpeed: calc.orbitSpeed(data.jupiter.orbitPeriod),
  rotationSpeed: calc.orbitSpeed(data.jupiter.rotationPeriod),
  obliquity: calc.radians(data.jupiter.obliquity),
  color: 0xf3d0b6
};

export const saturn = {
  radius: calc.gameDistance(data.saturn.radius),
  ringRadius: calc.gameDistance(data.saturn.ringRadiusStart),
  ringThickness: calc.gameDistance(data.saturn.ringRadiusEnd - data.saturn.ringRadiusStart),
  orbitRadius: calc.orbitRadius(sun.radius, data.saturn.distanceFromSun),
  orbitInclination: calc.radians(data.saturn.orbitInclination),
  orbitSpeed: calc.orbitSpeed(data.saturn.orbitPeriod),
  rotationSpeed: calc.orbitSpeed(data.saturn.rotationPeriod),
  obliquity: calc.radians(data.saturn.obliquity),
  color: 0xf7d770,
  ringColor: 0xf29432
};

export const uranus = {
  radius: calc.gameDistance(data.uranus.radius),
  ringRadius: calc.gameDistance(data.uranus.ringRadiusStart),
  ringThickness: calc.gameDistance(data.uranus.ringRadiusEnd - data.uranus.ringRadiusStart),
  orbitRadius: calc.orbitRadius(sun.radius, data.uranus.distanceFromSun),
  orbitInclination: calc.radians(data.uranus.orbitInclination),
  orbitSpeed: calc.orbitSpeed(data.uranus.orbitPeriod),
  rotationSpeed: calc.orbitSpeed(data.uranus.rotationPeriod),
  obliquity: calc.radians(data.uranus.obliquity),
  color: 0x40dee1,
  ringColor: 0xe8b481, // 0x90abbc 0xbfb3be #ef7d6e
};

export const neptune = {
  radius: calc.gameDistance(data.neptune.radius),
  ringRadius: calc.gameDistance(data.neptune.ringRadiusStart),
  ringThickness: calc.gameDistance(data.neptune.ringRadiusEnd - data.neptune.ringRadiusStart),
  orbitRadius: calc.orbitRadius(sun.radius, data.neptune.distanceFromSun),
  orbitInclination: calc.radians(data.neptune.orbitInclination),
  orbitSpeed: calc.orbitSpeed(data.neptune.orbitPeriod),
  rotationSpeed: calc.orbitSpeed(data.neptune.rotationPeriod),
  obliquity: calc.radians(data.neptune.obliquity),
  color: 0x4566ff,
  ringColor: 0xbb5889, // 0x04f5ef 0x81d4fa 0xb3e5fc
};
