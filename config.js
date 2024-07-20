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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_47_07_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjUxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDY3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTAyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNCxcbiAgICAgICAgNDYsXG4gICAgICAgIDUwLFxuICAgICAgICAyMyxcbiAgICAgICAgNDEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNTEsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTgyLFxuICAgICAgICA2MCxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDQyLFxuICAgICAgICA1OSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxLFxuICAgICAgICAxMjgsXG4gICAgICAgIDk3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDczLFxuICAgICAgICAzOSxcbiAgICAgICAgMTI1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgxLFxuICAgICAgICA0NCxcbiAgICAgICAgMjQ1LFxuICAgICAgICA0LFxuICAgICAgICAzOSxcbiAgICAgICAgMjksXG4gICAgICAgIDI4LFxuICAgICAgICAzLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNDQsXG4gICAgICAgIDM1LFxuICAgICAgICA1MCxcbiAgICAgICAgMzYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNjQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMjMsXG4gICAgICAgIDIxMixcbiAgICAgICAgOTMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNzMsXG4gICAgICAgIDc0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgOThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxODYsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMzIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMjcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMSxcbiAgICAgICAgODUsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMTgsXG4gICAgICAgIDExMixcbiAgICAgICAgMjI2LFxuICAgICAgICAxODIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjE1LFxuICAgICAgICA0NixcbiAgICAgICAgNzgsXG4gICAgICAgIDMxLFxuICAgICAgICAxOCxcbiAgICAgICAgNzAsXG4gICAgICAgIDYxLFxuICAgICAgICAxMSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyNDUsXG4gICAgICAgIDEyM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNzIsXG4gICAgICAgIDM2LFxuICAgICAgICAxOTIsXG4gICAgICAgIDg4LFxuICAgICAgICA2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDc2LFxuICAgICAgICAyNCxcbiAgICAgICAgMTUsXG4gICAgICAgIDMwLFxuICAgICAgICA3OSxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDUsXG4gICAgICAgIDMyLFxuICAgICAgICAyMixcbiAgICAgICAgODUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNDYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNjMsXG4gICAgICAgIDY3LFxuICAgICAgICA3MSxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTYsXG4gICAgICAgIDEyMixcbiAgICAgICAgNzFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNixcbiAgICAgICAgMTEwLFxuICAgICAgICA0OCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMDEsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTU2LFxuICAgICAgICA5NCxcbiAgICAgICAgNTAsXG4gICAgICAgIDExNSxcbiAgICAgICAgNjIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNjksXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxODIsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMixcbiAgICAgICAgMTY4LFxuICAgICAgICAxODEsXG4gICAgICAgIDExNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjQsXG4gICAgICAgIDIxNixcbiAgICAgICAgNjUsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTYyLFxuICAgICAgICA1MixcbiAgICAgICAgMTYsXG4gICAgICAgIDgwLFxuICAgICAgICA1NSxcbiAgICAgICAgODcsXG4gICAgICAgIDg5LFxuICAgICAgICAzMCxcbiAgICAgICAgMzYsXG4gICAgICAgIDQzLFxuICAgICAgICAxMjcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjUyLFxuICAgICAgICA1MCxcbiAgICAgICAgMTk4LFxuICAgICAgICA2NyxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDI2LFxuICAgICAgICAyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDU1LFxuICAgICAgICA5OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTAxXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgOTFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTksXG4gICAgICAgIDIzNixcbiAgICAgICAgMTgyLFxuICAgICAgICA3NixcbiAgICAgICAgMTcxLFxuICAgICAgICAxODcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNTIsXG4gICAgICAgIDc1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNjIsXG4gICAgICAgIDEyMixcbiAgICAgICAgMSxcbiAgICAgICAgMTM5LFxuICAgICAgICAzNCxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMyxcbiAgICAgICAgMjEyLFxuICAgICAgICAyNDIsXG4gICAgICAgIDMxLFxuICAgICAgICAzOCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTU0LFxuICAgICAgICAxOCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNjksXG4gICAgICAgIDEzMSxcbiAgICAgICAgNDIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjUsXG4gICAgICAgIDEwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTgyLFxuICAgICAgICA0NixcbiAgICAgICAgNjUsXG4gICAgICAgIDE2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDU3LFxuICAgICAgICA5NixcbiAgICAgICAgMTcyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjI1LFxuICAgICAgICAyOSxcbiAgICAgICAgODYsXG4gICAgICAgIDEwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDExNixcbiAgICAgICAgMTQyLFxuICAgICAgICA2NyxcbiAgICAgICAgNjIsXG4gICAgICAgIDUwLFxuICAgICAgICA2MyxcbiAgICAgICAgMCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE0MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjQ3LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjhnTGVMbWlnY2xtSTJkK3prOXgybXl1R3c5aHNFY2dneWs4SWxhTTdqdkk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMDEyOTk1NjM2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI0MDM3NEEwRUU3M0Y4NTE0OEI4MjU0N0E2MzUwRDcyQ1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjE1MDEyMzlcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMwMTI5OTU2MzZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjVCNkYxQ0M1RTA4MEFFRDI0OTlGOTIwRDkwREE1RjJDXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMTUwMTI0MFxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzAxMjk5NTYzNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMkQ1OTI3Qjc1QTY5MjRDNjU4NEU4QkEyOUMwNjAyRUFcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIxNTAxMjQ0XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMDEyOTk1NjM2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJDN0NEODNDMTY5QTVERTFDNjkyQUYzQ0FDRThDMkFGN1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjE1MDEyNDVcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiOVhEcjNBUnBSWHlPVnJJTFJpVVctZ1wiLFxuICBcInBob25lSWRcIjogXCIzYzRjMjljMC1jNzk5LTRiYjMtODNhZS04ODQ5Mjk1NjEyZThcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjUzLFxuICAgICAgMTkwLFxuICAgICAgNzAsXG4gICAgICA5NSxcbiAgICAgIDIzLFxuICAgICAgMjE2LFxuICAgICAgMTIsXG4gICAgICAxNyxcbiAgICAgIDEyOCxcbiAgICAgIDk4LFxuICAgICAgMTY0LFxuICAgICAgMTU3LFxuICAgICAgNjQsXG4gICAgICAxMSxcbiAgICAgIDI5LFxuICAgICAgNyxcbiAgICAgIDE2MyxcbiAgICAgIDE5MyxcbiAgICAgIDE2NixcbiAgICAgIDM2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE3OCxcbiAgICAgIDE5OSxcbiAgICAgIDEzNixcbiAgICAgIDIwNixcbiAgICAgIDExMCxcbiAgICAgIDk5LFxuICAgICAgNDAsXG4gICAgICAyMzksXG4gICAgICAxMDEsXG4gICAgICAxMDEsXG4gICAgICAxNTQsXG4gICAgICAxMzMsXG4gICAgICAxLFxuICAgICAgMTYxLFxuICAgICAgMTgzLFxuICAgICAgMTk2LFxuICAgICAgNjgsXG4gICAgICAxOTUsXG4gICAgICA3NixcbiAgICAgIDk3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlpLUEVWOVBFXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMwMTI5OTU2MzY6MTJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIxNTI4MTQ5NDQyNTYxOToxMkBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJOb3QgVVwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ09hdTU3OERFTE9NOExRR0dBVWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwieVo0dlFMaExvM0xQR3pGdW91TUJvRFhldmNvd1hTWUlpTVBCV01MdVJYdz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJSbnltRFlrVmovNW9lQ2E3Mi8rMkNWNjM0TGVwVzJBL0tzM2tsQkJqK1ZWWGVNbGNUQ2dwcXdXalIxbEprTXFKdEsweVc2Vm9RdUtIdXNxczN1cUhDZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCIyMnVIZG9zTkhoTVNTbDRrTjVCWE5PNEROUjRuTC9IbEM1Y0NHY0FQSVcvZWVWcExUdDRFV3pZWS9zSjVRdDV6aG5XRjhwWXB3UXUwRVQvaktMWU9oUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMwMTI5OTU2MzY6MTJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTI0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjE1MDEyMzgsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFKSUpcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUpJSi5qc29uIjogIntcImtleURhdGFcIjpcInFwelRjRFgya0tXRGx3aGFpaFA5QTIzRXRHbGdIWDdNS1dNTnRBM3Z5K0E9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6OTM5MTIwNDg2LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjAyOTQzNjkwNzVcIn0iCn0="  // PUT your SESSION_ID 


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
