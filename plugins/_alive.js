import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
  let caption = `
╭────═[𝗭𝗘𝗘𝗦𝗛𝗔𝗡-MD-v1]═────⋆
│╭───────────────···
┴│☂︎    HEY ${conn.getName(m.sender)}
⬡│☂︎ 🤪I\'m alive now..🥰
┬╰────────────────···
┠─────═[ INFO BOT ]═─────⋆
│╭────────────────···
┴│            *𝗭𝗘𝗘𝗦𝗛𝗔𝗡-MD-v1*
⬡│☂︎ *WHATSAPP BOT CODED BY👇🏽*
⬡│☂︎           *𝐙𝐄𝐄𝐒𝐇𝐀𝐍 𝐀𝐧𝐬𝐚𝐫𝐢🇵🇰*
⬡│☂︎           *OWNER:👇🏽*
⬡│☂︎ *wa.me/923242711784*
⬡│☂︎ *Don\'t call owner or you will be*
⬡│☂︎ *Ignored or blocked without*
⬡│☂︎           *warning 🥴😹*
┬│☂︎ *Hehehehe...🤪😸😸*
│╰────────────────···
┠─────═[ GUIDE ]═─────⋆
│╭────────────────···
┴│☂︎ _*👇🏽Litle Guide to use bot👇🏽*_
⬡│☂︎ .menu *All menu of bot*
⬡│☂︎ .sticker *Image to sticker*
⬡│☂︎ .play *Youtube video/audio*
┬│☂︎ .gimage *Google image downloader*
│╰────────────────···
╰──────────═┅═───────
*Thanks For Using 𝗭𝗘𝗘𝗦𝗛𝗔𝗡-MD-v1 ✍🏽🌿🥰*
`.trim()
  m.reply(caption)
}
handler.help = ['alive']
handler.tags = ['bot check']
handler.command = /^(alive|Hi)$/i


export default handler
