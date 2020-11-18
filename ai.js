require('dotenv').config()

const aiClient = process.env.AI_TOKEN


const {Wit, log} = require('node-wit');

const client = new Wit({
  accessToken: aiClient,
  
});
const {interactive} = require('node-wit');
interactive(client);
// async function messageIn(message) {
//     let result = await client.message(message)
//     console.log(JSON.stringify(result));
// }

// messageIn('what do you know about toads?')