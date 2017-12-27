// https://pds.jpl.nasa.gov/planets/special/planets.htm

// radius: km
// orbitRadius: avg distance form sun (AU)
// orbitAngle: plane inclination
// orbitSpeed: length of year Earth year (days)
// rotateSpeed: length of day in Earth days
// obliquity: axis tilt (degrees)

// const AU = ;

export const sun = {
  radius: 695700,
  color: 0xff691c, // 0xf1bf62  0xff850c
};

export const mercury = {
  radius: 2439.7,
  orbitRadius: 0.387,
  orbitAngle: 7,
  orbitSpeed: 87.97,
  rotateSpeed: 58.65,
  obliquity: 0,
  color: 0xbcbabb,
};

export const venus = {
  radius: 6052,
  orbitRadius: 0.723,
  orbitAngle: 3.39,
  orbitSpeed: 224.7,
  rotateSpeed: 243.02,
  obliquity: 1.78,
  color: 0xff4081 // 0xff80ab  0xf50057  0xf78181  0xf93c64
};

export const earth = {
  radius: 6378,
  orbitRadius: 1,
  orbitAngle: 0,
  orbitSpeed: 365.26,
  rotateSpeed: 1,
  obliquity: 23.4,
  color: 0xc3eee7, // 0x4f4cb0  0x6b93d6
  landColor: 0x9fc164,
};

export const mars = {
  radius: 3393.5,
  orbitRadius: 1.524,
  orbitAngle: 1.85,
  orbitSpeed: 686.98,
  rotateSpeed: 1.026,
  obliquity: 25,
  color: 0xed4036
};

export const jupiter = {
  radius: 71400,
  orbitRadius: 5.203,
  orbitAngle: 1.3,
  orbitSpeed: 11.86,
  rotateSpeed: 0.41,
  obliquity: 3.08,
  color: 0xf3d0b6
};

export const saturn = {
  radius: 60330,
  ringRadiusStart: 66900, //https://en.wikipedia.org/wiki/Rings_of_Saturn#Major_subdivisions
  ringRadiusEnd: 1300000,
  orbitRadius: 9.537,
  orbitAngle: 2.49,
  orbitSpeed: 29.46,
  rotateSpeed: 0.44,
  obliquity: 26.7,
  color: 0xf7d770,
  ringColor: 0xf29432
};

export const uranus = {
  radius: 25559,
  ringRadiusStart: 26840, //https://en.wikipedia.org/wiki/Rings_of_Uranus#List_of_properties
  ringRadiusEnd: 103000,
  orbitRadius: 19.19,
  orbitAngle: 0.77,
  orbitSpeed: 30.685,
  rotateSpeed: 0.72,
  obliquity: 97.9,
  color: 0x40dee1,
  ringColor: 0xe8b481, // 0x90abbc 0xbfb3be #ef7d6e
};

export const neptune = {
  radius: 24764,
  ringRadiusStart: 40900, // https://en.wikipedia.org/wiki/Rings_of_Neptune#Properties
  ringRadiusEnd: 62932,
  orbitRadius: 30.07,
  orbitAngle: 1.77,
  orbitSpeed: 60190,
  rotateSpeed: 0.67,
  obliquity: 29.6,
  color: 0x4566ff,
  ringColor: 0xbb5889, // 0x04f5ef 0x81d4fa 0xb3e5fc
};
