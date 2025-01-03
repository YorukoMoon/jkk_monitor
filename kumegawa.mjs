import fetch from 'node-fetch';

const url = "https://jhomes.to-kousya.or.jp/search/jkknet/service/akiyaJyoukenRef";
let token = ""; // 用于存储 token
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
    "token": "9F682171A841FDF754A7C51EEC4301AC",
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
    "cookie": "koushinflg=0; JSESSIONID=C2D05uwXTZarhOrKATq-sbGR.112M7MF",
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
//定义函数，获取久米川房源情况
function kumegawaFetch() {
    fetch(url, {
        method: "POST",
        headers: headers,
        body: formData.toString()
    }).then(response => response.arrayBuffer())//获取二进制的response以便解码
        .then(buffer => {
            // 使用 shift_jis 解码（Windows-31J 兼容）
            const decoder = new TextDecoder('shift_jis');
            const text = decoder.decode(buffer);
            console.log("解码后的响应:", text);
        })
        .catch(error => console.error("请求出错:", error));
}

// 每 10 秒发送一次请求获取房源
async function fetchData() {
    console.log('开始获取房源');
    if (!token) {
        console.warn("未获取到 token，跳过请求");
        return;
    }

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: headers,
            body: formData.toString()
        });

        if (response) {
            const buffer = await response.arrayBuffer();
            // 使用 shift_jis 解码（Windows-31J 兼容）
            const decoder = new TextDecoder('shift_jis');
            const text = decoder.decode(buffer);
            console.log("解码后的响应:", text);
        } else {
            console.error("房源请求失败");
        }
    } catch (error) {
        console.error("房源请求时出错:", error);
    }
}


//定义函数，刷新token
function tokenFetch() {
    console.log(1);
    fetch('https://jhomes.to-kousya.or.jp/search/jkknet/service/akiyaJyoukenStartInit', {
        method: 'POST',
        headers: {
            'Host': 'jhomes.to-kousya.or.jp',
            'Connection': 'keep-alive',
            'Content-Length': '106',
            'Cache-Control': 'max-age=0',
            'sec-ch-ua': '"Google Chrome";v="131", "Chromium";v="131", "Not_A Brand";v="24"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
            'Origin': 'https://jhomes.to-kousya.or.jp',
            'Content-Type': 'application/x-www-form-urlencoded',
            'Upgrade-Insecure-Requests': '1',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
            'Sec-Fetch-Site': 'same-origin',
            'Sec-Fetch-Mode': 'navigate',
            'Sec-Fetch-Dest': 'document',
            'Referer': 'https://jhomes.to-kousya.or.jp/search/jkknet/service/akiyaJyoukenStartInit',
            'Accept-Encoding': 'gzip, deflate, br, zstd',
            'Accept-Language': 'en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7,ja;q=0.6',
            'Cookie': 'koushinflg=1; JSESSIONID=C2D05uwXTZarhOrKATq-sbGR.112M7MF'
        },
        body: 'redirect=true&url=https%3A%2F%2Fjhomes.to-kousya.or.jp%2Fsearch%2Fjkknet%2Fservice%2FakiyaJyoukenStartInit'
    }).then(response => response.text()) // 获取文本形式的响应
        .then(data => {
            //对响应正则匹配，提取token
            const match = data.match(/name=token value="([^"]+)"/);
            if (match) {
                const tokenValue = match[1];
                console.log("提取到的 token:", tokenValue);
                //给表单数据赋值token
                formData.set("token", tokenValue);
            } else {
                console.log("未找到 token");
            }
        })
        .catch(error => console.error("请求出错:", error));
}

//每 10 分钟获取一次 token
async function fetchToken() {
    try {
        const response = await fetch("https://jhomes.to-kousya.or.jp/search/jkknet/service/akiyaJyoukenStartInit", {
            method: "POST",
            headers: {
                'Host': 'jhomes.to-kousya.or.jp',
                'Connection': 'keep-alive',
                'Content-Length': '106',
                'Cache-Control': 'max-age=0',
                'sec-ch-ua': '"Google Chrome";v="131", "Chromium";v="131", "Not_A Brand";v="24"',
                'sec-ch-ua-mobile': '?0',
                'sec-ch-ua-platform': '"Windows"',
                'Origin': 'https://jhomes.to-kousya.or.jp',
                'Content-Type': 'application/x-www-form-urlencoded',
                'Upgrade-Insecure-Requests': '1',
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
                'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
                'Sec-Fetch-Site': 'same-origin',
                'Sec-Fetch-Mode': 'navigate',
                'Sec-Fetch-Dest': 'document',
                'Referer': 'https://jhomes.to-kousya.or.jp/search/jkknet/service/akiyaJyoukenStartInit',
                'Accept-Encoding': 'gzip, deflate, br, zstd',
                'Accept-Language': 'en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7,ja;q=0.6',
                'Cookie': 'koushinflg=1; JSESSIONID=C2D05uwXTZarhOrKATq-sbGR.112M7MF'
            },
            body: 'redirect=true&url=https%3A%2F%2Fjhomes.to-kousya.or.jp%2Fsearch%2Fjkknet%2Fservice%2FakiyaJyoukenStartInit'
        });

        if (response) {
            const data = await response.text();
            //对响应正则匹配，提取token
            const match = data.match(/name=token value="([^"]+)"/);
            if (match) {
                token = match[1];
                console.log("提取到的 token:", token);
                //给表单数据赋值token
                formData.set("token", token);
            } else {
                console.log("未找到 token");
            }
        } else {
            console.error("获取 token 失败");
        }
        console.log('token刷新完毕');
    } catch (error) {
        console.error("请求 token 时出错:", error);
    }
}

console.log(2);

 // 启动token请求，每 10 分钟获取一次 token
fetchToken(); // 立即执行一次
setInterval(fetchToken, 10 * 60 * 1000); // 每 10 分钟执行一次

// 启动房源请求，每 10 秒使用最新的 token 请求
setInterval(fetchData, 10 * 1000); // 每 10 秒执行一次
