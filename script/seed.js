'use strict'

const db = require('../server/db')
const {Projects, Posts} = require('../server/db/models')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const posts = await Promise.all([
    Posts.create({title: 'React-ing with the Elements', url: 'https://medium.com/@chansiky24/react-ing-with-the-elements-f10e867f022a', media: ''})
  ])
  const projects = await Promise.all([
    Projects.create({title: 'Code-Map', media: 'code-map-2.png', description:'Code-Map is a tutorial aggregation engine for self-learners of Code', url:'http://code-map.herokuapp.com/' , source: 'https://github.com/code-map/capstone-1804'}),
    Projects.create({title: 'EagleFox shopper', media: 'eaglefox-1.png', description:'EagleFox Shopper is a point of sale application for "OCTAT" goods', url:'http://eaglefox-shopper.herokuapp.com' , source: 'https://github.com/EagleFox-Grace-Shopper/grace-shopper'}),
    Projects.create({title: 'drawRTC', media: 'draw-1.png', description:'drawRTC is a peer to peer drawing application', url:'https://drawRTC.herokuapp.com' , source: 'https://github.com/chansiky/chatterbox'})
  ])

  console.log(`seeded ${posts.length} posts`)
  console.log(`seeded ${projects.length} posts`)
  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
