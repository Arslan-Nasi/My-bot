toconst fs = require('fs-extra')
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


global.devs = "923012995696" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923012995696";




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


global.SESSION_ID = process.env.SESSION_ID || "SUHAIL_18_32_07_22_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjExLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNjEsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTU5LFxuICAgICAgICA5NCxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgOTgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNyxcbiAgICAgICAgNzksXG4gICAgICAgIDU4LFxuICAgICAgICA0LFxuICAgICAgICA3NSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMSxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDU2LFxuICAgICAgICA0NyxcbiAgICAgICAgNDEsXG4gICAgICAgIDg5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0NixcbiAgICAgICAgOTYsXG4gICAgICAgIDAsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjAxLFxuICAgICAgICAxNzYsXG4gICAgICAgIDM1LFxuICAgICAgICA2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDAsXG4gICAgICAgIDQxLFxuICAgICAgICAxODcsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgOCxcbiAgICAgICAgOTUsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTA4LFxuICAgICAgICAzOCxcbiAgICAgICAgNDksXG4gICAgICAgIDExOSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAzMCxcbiAgICAgICAgMzIsXG4gICAgICAgIDExMyxcbiAgICAgICAgMzksXG4gICAgICAgIDMxLFxuICAgICAgICAyMTEsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjE1LFxuICAgICAgICA0NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICA5NCxcbiAgICAgICAgMTUzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxODksXG4gICAgICAgIDk3LFxuICAgICAgICAxMTcsXG4gICAgICAgIDYyLFxuICAgICAgICA1NixcbiAgICAgICAgODksXG4gICAgICAgIDI2LFxuICAgICAgICA5NixcbiAgICAgICAgMjEyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDI5LFxuICAgICAgICAyNDEsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTQ2LFxuICAgICAgICA2NCxcbiAgICAgICAgMjIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDQwLFxuICAgICAgICAwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTEwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNDgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDEzLFxuICAgICAgICAzNSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDQxLFxuICAgICAgICA2NSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMDEsXG4gICAgICAgIDk2LFxuICAgICAgICA4MCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMjEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNzYsXG4gICAgICAgIDEwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTU1LFxuICAgICAgICA4MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAyNixcbiAgICAgICAgMTc2LFxuICAgICAgICAxMTUsXG4gICAgICAgIDk2LFxuICAgICAgICAyMSxcbiAgICAgICAgMjksXG4gICAgICAgIDU1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE2NixcbiAgICAgICAgOSxcbiAgICAgICAgNzIsXG4gICAgICAgIDM0LFxuICAgICAgICA0MixcbiAgICAgICAgODEsXG4gICAgICAgIDg5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDExMixcbiAgICAgICAgMTAzLFxuICAgICAgICAxODUsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDI1LFxuICAgICAgICA0NCxcbiAgICAgICAgMTMwLFxuICAgICAgICA0NixcbiAgICAgICAgNixcbiAgICAgICAgMTcsXG4gICAgICAgIDY4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNCxcbiAgICAgICAgNyxcbiAgICAgICAgMTgsXG4gICAgICAgIDkyLFxuICAgICAgICA0NSxcbiAgICAgICAgMTcsXG4gICAgICAgIDIwMixcbiAgICAgICAgNzksXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMzMsXG4gICAgICAgIDE3LFxuICAgICAgICAxNTEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTM4LFxuICAgICAgICA1LFxuICAgICAgICA1NyxcbiAgICAgICAgMjAsXG4gICAgICAgIDQyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjMzLFxuICAgICAgICA2MixcbiAgICAgICAgMjE5LFxuICAgICAgICA0MCxcbiAgICAgICAgNDAsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgNzBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDg3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDc1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMTUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIyMixcbiAgICAgICAgNzEsXG4gICAgICAgIDYzLFxuICAgICAgICAxMDksXG4gICAgICAgIDIyOSxcbiAgICAgICAgOTYsXG4gICAgICAgIDIzLFxuICAgICAgICAxMjEsXG4gICAgICAgIDMyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE2LFxuICAgICAgICA1NixcbiAgICAgICAgMCxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTQ1LFxuICAgICAgICA0MCxcbiAgICAgICAgMTUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNDQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNTgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNTAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTAzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDkyLFxuICAgICAgICA0NCxcbiAgICAgICAgMTc1LFxuICAgICAgICA2MixcbiAgICAgICAgMjI1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMCxcbiAgICAgICAgMjgsXG4gICAgICAgIDI0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMyxcbiAgICAgICAgMjM3LFxuICAgICAgICA0MixcbiAgICAgICAgNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNjYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiSE5BNDRmMDNVSjF0SDJwWXVXM1p6NmJUaFBiTUxwUm9udTM3SmMxeVZjUT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiUzVGdkJYZDlTYk9sUzNBY1JpaWJFUVwiLFxuICBcInBob25lSWRcIjogXCJmZmRjNTE1Ny00NWJkLTRlMTctOGEzMS01NTk5NTYwOGIxMGJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTM1LFxuICAgICAgNzIsXG4gICAgICAxNzEsXG4gICAgICA2NSxcbiAgICAgIDIwMSxcbiAgICAgIDE0NixcbiAgICAgIDI0MCxcbiAgICAgIDE4MixcbiAgICAgIDEwNCxcbiAgICAgIDQ4LFxuICAgICAgMyxcbiAgICAgIDMxLFxuICAgICAgMzQsXG4gICAgICAyMTYsXG4gICAgICAxNTMsXG4gICAgICAxMTQsXG4gICAgICA1OSxcbiAgICAgIDE4MSxcbiAgICAgIDE2OSxcbiAgICAgIDIyNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA5MixcbiAgICAgIDE2LFxuICAgICAgMTI4LFxuICAgICAgMjA3LFxuICAgICAgMTMzLFxuICAgICAgMTg5LFxuICAgICAgMjIyLFxuICAgICAgMCxcbiAgICAgIDE2MixcbiAgICAgIDExMixcbiAgICAgIDk5LFxuICAgICAgMTgsXG4gICAgICAxODYsXG4gICAgICA5NixcbiAgICAgIDI1NSxcbiAgICAgIDE5NSxcbiAgICAgIDIzMCxcbiAgICAgIDQxLFxuICAgICAgNDYsXG4gICAgICAyNDZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiSFpUS1c1UFJcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzAxMjk5NTYzNjoxNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjE1MjgxNDk0NDI1NjE5OjE1QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ09hdTU3OERFSzdMK3JRR0dBZ2dBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwieVo0dlFMaExvM0xQR3pGdW91TUJvRFhldmNvd1hTWUlpTVBCV01MdVJYdz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJpWkVyaytVMFd6UDBnRXlENjZySUlQem1MeEM0RDBpdVhhR1VEUHRvOWt2aFVGeE5GcElTUHpyR05NS3F0VkZXcThOVG05V3VNaC9SWkJQRkVieTFEdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJoaUxYdVVDOFA5K0JLSDUrUzNpOEcxdUZTbUh1NXBObkFEOU85bkV3WEdzNnpTRnVxbnNjanM0V1JSTEt0WFU0YzBkbkxWTTRkTW9HOEdrSWhMMDZEUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMwMTI5OTU2MzY6MTVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTI0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjE2NzMxMzYsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFKSUpcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUpJSi5qc29uIjoge30KfQ==" 


module.exports = {

  menu: process.env.MENU || "𝙆𝙞𝙣𝙜 𝘼𝙣𝙤𝙣𝙮𝙢𝙤𝙪𝙨👑", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || " ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𝙆𝙞𝙣𝙜 𝘼𝙣𝙤𝙣𝙮𝙢𝙤𝙪𝙨👑 ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
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
