/*
https://raw.githubusercontent.com/congcong0806/surge-list/master/Script/ipcheck.js
* [Panel]
* 网络信息 = script-name=网络信息, title="网络信息", content="请刷新", style=info, update-interval=60
* ...
* [Script]
* 网络信息 = type=generic,timeout=3,script-path=https://raw.githubusercontent.com/TributePaulWalker/Profiles/main/JavaScript/Surge/ipcheck.js
*/

let url = "http://ip-api.com/json/?fields=status,message,country,countryCode,region,regionName,city,zip,lat,lon,timezone,isp,org,as,asname,query"

$httpClient.get(url, function(error, response, data){
    let jsonData = JSON.parse(data)
    let ip = jsonData.query
    let country = jsonData.country
    let emoji = getFlagEmoji(jsonData.countryCode)
    let city = jsonData.city
    let org = jsonData.org
    let asname = jsonData.asname

  function ISP_ValidCheck(para) {
  if(para) {
  return para
  } else
  {
  return asname
//emojis[getRandomInt(emojis.length)]
  }
}  
    let result = ISP_ValidCheck(org)
  body = {
    title: "𝗜𝗣_𝗜𝗡𝗙𝗢",
    content: `𝗜𝗣: ${ip}\n𝗜𝗦𝗣: ${result}\n𝗟𝗼𝗰𝗮𝘁𝗶𝗼𝗻: ${emoji}${country} - ${city}`,
    icon: "link.icloud",
    'icon-color': "#0047AB"
  }
  $done(body);
});


function getFlagEmoji(countryCode) {
    const codePoints = countryCode
      .toUpperCase()
      .split('')
      .map(char =>  127397 + char.charCodeAt());
    return String.fromCodePoint(...codePoints);
}

