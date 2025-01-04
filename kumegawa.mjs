import fetch from 'node-fetch';

const url = "https://jhomes.to-kousya.or.jp/search/jkknet/service/akiyaJyoukenRef";

const formData = new URLSearchParams({
    "akiyaInitRM.akiyaRefM.checks": "43",
  "akiyaInitRM.akiyaRefM.jyutakuKanaName": "",
  "akiyaInitRM.akiyaRefM.ensenCd": "",
  "akiyaInitRM.akiyaRefM.bus": "1",
  "akiyaInitRM.akiyaRefM.yachinFrom": "0",
  "akiyaInitRM.akiyaRefM.yachinTo": "999999999",
  "akiyaInitRM.akiyaRefM.mensekiFrom": "0",
  "akiyaInitRM.akiyaRefM.mensekiTo": "9999.99",
  "akiyaInitRM.akiyaRefM.kaisoFrom": "",
  "akiyaInitRM.akiyaRefM.kaisoTo": "",
  "akiyaInitRM.akiyaRefM.yusenBoshu": "",
  "akiyaInitRM.akiyaRefM.bus": "",
  "akiyaInitRM.akiyaRefM.muki": "",
  "akiyaInitRM.akiyaRefM.jtkSbt": "",
  "akiyaInitRM.akiyaRefM.teishaku": "",
  "akiyaInitRM.akiyaRefM.renewal": "",
  "akiyaInitRM.akiyaRefM.fudosan": "",
  "akiyaInitRM.akiyaRefM.hojinKyk": "",
  "akiyaInitRM.akiyaRefM.equips": "",
  "token": "5E519A89AC6414313C6821325D61AFBB",
  "abcde": "EF8F0627B5A8184A6BA3E8705A00F068",
  "jklm": "E17511BF89D3A101AFEF10EBF1587561",
  "sen_flg": "1",
  "akiyaInitRM.akiyaRefM.allCheck": "",
  "akiyaInitRM.akiyaRefM.madoris": "",
  "akiyaInitRM.akiyaRefM.tanshinFlg": "",
  "akiyaInitRM.akiyaRefM.teishiKaiFlg": "",
  "akiyaInitRM.akiyaRefM.yuguFlg": "",
  "akiyaInitRM.akiyaRefM.ekiCd": ""
});
const headers = {
    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
    "accept-encoding": "gzip, deflate, br, zstd",
    "accept-language": "en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7,ja;q=0.6",
    "cache-control": "max-age=0",
    "connection": "keep-alive",
    "content-type": "application/x-www-form-urlencoded",
    "cookie": "koushinflg=0; JSESSIONID=G6ZMwICUQmHqIZG4auet4i4o.112M7MF",
    "host": "jhomes.to-kousya.or.jp",
    "origin": "https://jhomes.to-kousya.or.jp",
    "referer": "https://jhomes.to-kousya.or.jp/search/jkknet/service/akiyaJyoukenStartInit",
    "sec-ch-ua": "\"Google Chrome\";v=\"131\", \"Chromium\";v=\"131\", \"Not_A Brand\";v=\"24\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "document",
    "sec-fetch-mode": "navigate",
    "sec-fetch-site": "same-origin",
    "sec-fetch-user": "?1",
    "upgrade-insecure-requests": "1",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36"
};
setInterval(() => {
    fetch(url, {
        method: "POST",
        headers: headers,
        body: formData.toString()
    })
        .then(response => response.text())
        .then(html => {
            console.log("成功获取数据:", html);
        })
        .catch(error => console.error("请求出错:", error));
}, 5000);
