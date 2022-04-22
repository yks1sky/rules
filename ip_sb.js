/*
https://raw.githubusercontent.com/congcong0806/surge-list/master/Script/ipcheck.js
* [Panel]
* 网络信息 = script-name=网络信息, title="网络信息", content="请刷新", style=info, update-interval=60
* ...
* [Script]
* 网络信息 = type=generic,timeout=3,script-path=https://raw.githubusercontent.com/TributePaulWalker/Profiles/main/JavaScript/Surge/ipcheck.js
*/


$(document).ready(function() {
    $.getJSON("https://api.ip.sb/geoip?callback=?",
        function(json) {
            let emoji = getFlagEmoji(json.country_code)
            body = {
                title: "网络信息",
                content: `IP信息: ${json.ip}\n运营商: ${json.asn_organization}\nIP位置: ${emoji}${json.country} - ${json.city}`,
                icon: "link.icloud",
                'icon-color': "#5AC8FA"
              }
              $done(body);
        }
    );
});

function getFlagEmoji(countryCode) {
    const codePoints = countryCode
      .toUpperCase()
      .split('')
      .map(char =>  127397 + char.charCodeAt());
    return String.fromCodePoint(...codePoints);
}

