const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "https://telegra.ph/file/58daeab7d47280639d46d.jpg" ;  
global.video= "https://telegra.ph/file/58daeab7d47280639d46d.jpg" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJPWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va920yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/58daeab7d47280639d46d.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𝙆𝙞𝙣𝙜 𝘼𝙣𝙤𝙣𝙮𝙢𝙤𝙪𝙨👑²²¹-ᴍᴅ" 


global.devs = "923277217945" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923277217945";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "true", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_05_08_07_15_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMDIsXG4gICAgICAgIDY3LFxuICAgICAgICA2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDIyNyxcbiAgICAgICAgOTYsXG4gICAgICAgIDk4LFxuICAgICAgICAxNjIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgODcsXG4gICAgICAgIDY0LFxuICAgICAgICAxODgsXG4gICAgICAgIDYxLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjAzLFxuICAgICAgICA0OCxcbiAgICAgICAgODAsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTE5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTA2LFxuICAgICAgICAxODMsXG4gICAgICAgIDgsXG4gICAgICAgIDkzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDk0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5OCxcbiAgICAgICAgNjYsXG4gICAgICAgIDQyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDM5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDczLFxuICAgICAgICAxMDMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjU0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDQwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjAzLFxuICAgICAgICA1MCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxODksXG4gICAgICAgIDEwMSxcbiAgICAgICAgNDEsXG4gICAgICAgIDc2LFxuICAgICAgICAxNzAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMCxcbiAgICAgICAgODIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMzRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE5NixcbiAgICAgICAgNzUsXG4gICAgICAgIDE0NixcbiAgICAgICAgNzAsXG4gICAgICAgIDY5LFxuICAgICAgICAyMTMsXG4gICAgICAgIDksXG4gICAgICAgIDU4LFxuICAgICAgICAyMjksXG4gICAgICAgIDIyNixcbiAgICAgICAgNzksXG4gICAgICAgIDE3NSxcbiAgICAgICAgNDMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAzMixcbiAgICAgICAgMjcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDg2LFxuICAgICAgICA0OCxcbiAgICAgICAgNTIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTA4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2NyxcbiAgICAgICAgNTMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNDcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTEwLFxuICAgICAgICA1LFxuICAgICAgICAxOCxcbiAgICAgICAgMzAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMzksXG4gICAgICAgIDE3OCxcbiAgICAgICAgNDMsXG4gICAgICAgIDE1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNjgsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTYsXG4gICAgICAgIDE5LFxuICAgICAgICA4OSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgOTYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMzcsXG4gICAgICAgIDE3MixcbiAgICAgICAgNzEsXG4gICAgICAgIDY1LFxuICAgICAgICAwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NCxcbiAgICAgICAgMjA5LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjE2LFxuICAgICAgICA3LFxuICAgICAgICAyMTksXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMixcbiAgICAgICAgOTMsXG4gICAgICAgIDQyLFxuICAgICAgICAyNDQsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTY0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDQwLFxuICAgICAgICA2OSxcbiAgICAgICAgODEsXG4gICAgICAgIDEsXG4gICAgICAgIDgwLFxuICAgICAgICA5OCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxODIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjQxLFxuICAgICAgICAzOCxcbiAgICAgICAgODYsXG4gICAgICAgIDcyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTEsXG4gICAgICAgIDEyNixcbiAgICAgICAgNjMsXG4gICAgICAgIDk3LFxuICAgICAgICA3OCxcbiAgICAgICAgMTg5LFxuICAgICAgICA4OSxcbiAgICAgICAgMTg2LFxuICAgICAgICA4NCxcbiAgICAgICAgMTUwLFxuICAgICAgICA2NCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDksXG4gICAgICAgIDE1NixcbiAgICAgICAgMTk0LFxuICAgICAgICAxODQsXG4gICAgICAgIDI3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDc3LFxuICAgICAgICAyNSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxODQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNDAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNjEsXG4gICAgICAgIDcyLFxuICAgICAgICAyOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA2NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgOTFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5MixcbiAgICAgICAgNTAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNDEsXG4gICAgICAgIDczLFxuICAgICAgICAyMDMsXG4gICAgICAgIDM4LFxuICAgICAgICAyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMDAsXG4gICAgICAgIDMxLFxuICAgICAgICA4NSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDM4LFxuICAgICAgICAyOSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTM4LFxuICAgICAgICA1MCxcbiAgICAgICAgNixcbiAgICAgICAgMTAyLFxuICAgICAgICA1NSxcbiAgICAgICAgMTk2LFxuICAgICAgICAyOSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxODksXG4gICAgICAgIDI0MixcbiAgICAgICAgMjgsXG4gICAgICAgIDcwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNjAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTQ3LFxuICAgICAgICA0LFxuICAgICAgICAxMzgsXG4gICAgICAgIDMsXG4gICAgICAgIDMzLFxuICAgICAgICAxNjIsXG4gICAgICAgIDQyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDU3LFxuICAgICAgICA1NixcbiAgICAgICAgMTcxLFxuICAgICAgICA5OCxcbiAgICAgICAgNTYsXG4gICAgICAgIDM5LFxuICAgICAgICAyNDIsXG4gICAgICAgIDQ1LFxuICAgICAgICA1MyxcbiAgICAgICAgMjE4LFxuICAgICAgICA5NCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMjQsXG4gICAgICAgIDIxLFxuICAgICAgICAxNjgsXG4gICAgICAgIDQwLFxuICAgICAgICA3MSxcbiAgICAgICAgOCxcbiAgICAgICAgM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTk5LFxuICBcImFkdlNlY3JldEtleVwiOiBcInIwZ2NZbHUvQ3QrdU83ZkhsVUtXbFVQODF1V2tua09QNm1WbFpUdGNtSm89XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMjc3MjE3OTQ1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI2RUI0NEMyODE2OTREMkIxMkVFODU0NUREQTAzQTAxOVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjEwMjAxMzVcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMyNzcyMTc5NDVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjJCMzZBNjBERjc1REI0RTZENTc1RERCODlEQTE5MjI5XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMTAyMDEzNVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJtdW1tQTR0bVQxaUlQUENFV0JkbmhBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjYyMTkzODQ3LTk0Y2EtNDQ5Ni05ZmM0LTQ2OTZhYmI3NmVhYlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1OSxcbiAgICAgIDE0NyxcbiAgICAgIDU3LFxuICAgICAgMjA3LFxuICAgICAgMTA2LFxuICAgICAgMTUsXG4gICAgICAxMzMsXG4gICAgICA1OSxcbiAgICAgIDEzMyxcbiAgICAgIDExMixcbiAgICAgIDE5OSxcbiAgICAgIDE2NyxcbiAgICAgIDE5MSxcbiAgICAgIDE5OCxcbiAgICAgIDE3MyxcbiAgICAgIDEyNSxcbiAgICAgIDE2MixcbiAgICAgIDI0NCxcbiAgICAgIDYwLFxuICAgICAgMjA4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE5NixcbiAgICAgIDY2LFxuICAgICAgMjI2LFxuICAgICAgMjA1LFxuICAgICAgMTM0LFxuICAgICAgOTQsXG4gICAgICA1OSxcbiAgICAgIDgzLFxuICAgICAgMjAsXG4gICAgICAxMDMsXG4gICAgICAyMjUsXG4gICAgICAxODQsXG4gICAgICA0NSxcbiAgICAgIDIwOCxcbiAgICAgIDU5LFxuICAgICAgMTcwLFxuICAgICAgMjM2LFxuICAgICAgMTM2LFxuICAgICAgMTksXG4gICAgICAyMTZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiRUw3Q1RXN05cIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzI3NzIxNzk0NToxNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNjU5NjY3ODg1ODc3MDc6MTRAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiQW5vbnltb3VzIPCfkqtcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNeVFuTWNFRU4vZDByUUdHQWNnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkl1ZGs1RkxONmR4aG9qbWtvZTJjY0xSYVU2OUREbXNjcEJmeEpmT1d4QjA9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiR28wVEVCMVIxSHE4Z3h0VUNLc0ZQbklMd0FZSDkzU1paeCswZ0lNY002dW1QTGZFNmdEL1I4eUNicVFoaURJQXNvZElUT1lpUWxESHpCckdtY1R4REE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiYkFRamNZYWx5a3RTeVRLUzNNMDNLekRERUVHSHBTaGRDK0p3TWtYQlM2QnovZ20zbjJTbEVOcmtwcEsxbUp4V0ZzeWxhcnBPZVdTbFZwSFRuZHBKQmc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMjc3MjE3OTQ1OjE0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAyOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxMDIwMTI5LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBZ0FBQnA2XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFnQUFCcDYuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJidDAwd0FlTDZhYWw3QkJESDVOMEhBSTdlUEZwclNZZFU5UW5tenoxOWRrPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEyMjMxMDA0OTIsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDIsNSw2LDhdfSxcInRpbWVzdGFtcFwiOlwiMTcyMDk3MzU2MzE5MFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "𝙆𝙞𝙣𝙜 𝘼𝙣𝙤𝙣𝙮𝙢𝙤𝙪𝙨👑",
  packname: process.env.PACK_NAME || "𝙆𝙞𝙣𝙜 𝘼𝙣𝙤𝙣𝙮𝙢𝙤𝙪𝙨👑",
  botname : process.env.BOT_NAME  || "𝙆𝙞𝙣𝙜 𝘼𝙣𝙤𝙣𝙮𝙢𝙤𝙪𝙨👑",
  ownername:process.env.OWNER_NAME|| "𝙆𝙞𝙣𝙜 𝘼𝙣𝙤𝙣𝙮𝙢𝙤𝙪𝙨👑",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
