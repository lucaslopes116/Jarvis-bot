require('dotenv').config()


const {Client, GatewayIntentBits} = require('discord.js')
const client = new Client({ intents: [
  GatewayIntentBits.Guilds,
  GatewayIntentBits.GuildMessages,
  GatewayIntentBits.MessageContent
]})

const {Configuration, OpenAIApi } = require('openai')
const configuration = new Configuration({
  organization: process.env.OPENAI_ORG,
  apiKey: process.env.CHAT_GPT_API_KEY,
})
const openai = new OpenAIApi(configuration)

client.on('messageCreate', async function(message){
  try{
    if(message.author.bot) return

    let messageUser = message.content.split('/bot')[1]

    if(!messageUser) {
      return
    }

    const gptResponse = await openai.createCompletion({
      model:'text-davinci-003',
      prompt: `ChatGPT is a friendly chatbot.\n\ ChatGPT: Hello, how are you? \n\ ${message.author.username}: ${message.content}\n\ ChatGPT: `,
      temperature: 0.9,
      max_tokens: 200,

      stop: ["ChatGPT:", "Lucas Lopes:" ],
    })
    message.reply(`${gptResponse.data.choices[0].text}`)
    console.log('RESPONSE GPT',gptResponse.data.choices)
    return
  }catch(err){
    console.log(err.response.data)
  }
})

client.login(process.env.DISCORD_TOKEN)
console.log('Jarvis ta on!')
