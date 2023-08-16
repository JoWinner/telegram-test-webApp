const { Telegraf } = require("telegraf");
require('dotenv').config()
const TOKEN = "6246982264:AAFvYirhlLRs_wAfXrt1-gRUOcGNTZEih1U"
const bot = new Telegraf(TOKEN);

const web_link = "https://telegram-test-web-app.vercel.app/";

bot.start((ctx) =>
  ctx.reply("Welcome :)))))", {
    reply_markup: {
      keyboard: [[{ text: "web app", web_app: { url: web_link } }]],
    },
  })
);

bot.launch();
