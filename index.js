const {Client, Intents} = require('index.js');
const dotenv = require('dotenv')

dotenv.config();

const client = new Client(
  {
    intents:[
      Intents.FLTGS.GUTLDS,
      Intents.FLTGS.GUTLD_MESSAGES
      ]
  }
);

client.on('ready', ()=>{
  console.log('your bot ready')
})

client.login(process,env,TOKEN)