//Sat Aug 16 2025 17:07:44 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
const NOTIFY_ENABLE = 0,
  $ = new Env("富士instax玩拍由我俱乐部");
let ckName = "instax",
  userCookie = checkEnv(($.isNode() ? process.env[ckName] : $.getdata(ckName)) || "");
const notify = $.isNode() ? require("./sendNotify") : "",
  wxcode = $.isNode() ? require("./wxcode") : null,
  fs = $.isNode() ? require("fs") : null,
  path = $.isNode() ? require("path") : null,
  WXID_RAW = process.env.TXX_WXID || "",
  WXID_LIST = WXID_RAW ? WXID_RAW.split("\n").filter(_0x2d5f1b => _0x2d5f1b.trim()) : [],
  APPID = "wx3cb572fbf3aa30c8",
  TOKEN_CACHE_FILE = "fushi_tokens.json";
!(async () => {
  console.log("==================================================\n 脚本执行 - 北京时间(UTC+8): " + new Date(new Date().getTime() + new Date().getTimezoneOffset() * 60 * 1000 + 28800000).toLocaleString() + " \n==================================================");
  $.log("\n=== 测试不带Authorization的接口请求 ===");
  await testWithoutAuth();
  await $.wait(2000);
  if (WXID_LIST.length > 0 && wxcode) {
    $.log("\n=== 使用微信code登录模式，共" + WXID_LIST.length + "个账号 ===");
    for (let _0x2577f2 = 0; _0x2577f2 < WXID_LIST.length; _0x2577f2++) {
      {
        const _0x5a4273 = WXID_LIST[_0x2577f2].trim();
        if (!_0x5a4273) continue;
        $.log("\n🚀 账号【" + (_0x2577f2 + 1) + "】开始处理: " + _0x5a4273);
        const _0xca4a2b = loadTokenCache();
        if (_0xca4a2b[_0x5a4273]) {
          $.log("找到缓存的token，验证有效性...");
          $.token = _0xca4a2b[_0x5a4273];
          const _0x15372b = await validateToken();
          _0x15372b ? $.log("缓存token有效，直接使用") : ($.log("缓存token已失效，重新获取..."), await loginWithWxCode(_0x5a4273));
        } else $.log("缓存中没有找到token，开始微信code登录"), await loginWithWxCode(_0x5a4273);
        if ($.token && $.userId) {
          await signIn();
          await $.wait(3000);
          await chance();
        }
        _0x2577f2 < WXID_LIST.length - 1 && (await $.wait(5000));
      }
    }
  } else {
    if (!userCookie?.["length"]) return console.log("没有找到CK哦");
    let _0x2fbfa0 = 1;
    for (let _0x49b086 of userCookie) {
      $.log("\n🚀 user:【" + _0x2fbfa0 + "】 start work\n");
      _0x2fbfa0++;
      $.token = _0x49b086;
      $.ckStatus = true;
      $.userId = null;
      await me();
      await $.wait(3000);
      $.userId && (await signIn(), await $.wait(3000), await chance());
    }
  }
  if (NOTIFY_ENABLE === 1) await $.sendMsg($.logs.join("\n"));else {
    $.log("通知已关闭，不发送通知");
  }
})().catch(_0x17be9b => console.log(_0x17be9b)).finally(() => $.done());
function loadTokenCache() {
  try {
    if (fs && fs.existsSync(TOKEN_CACHE_FILE)) {
      {
        const _0x396d26 = fs.readFileSync(TOKEN_CACHE_FILE, "utf8"),
          _0x28875c = JSON.parse(_0x396d26);
        $.log("从缓存文件加载token: " + TOKEN_CACHE_FILE);
        return _0x28875c;
      }
    }
  } catch (_0x4be76b) {
    $.log("读取token缓存失败: " + _0x4be76b.message);
  }
  return {};
}
function saveTokenCache(_0x436ba9, _0x12381f) {
  try {
    if (!fs) return;
    let _0x1041b3 = {};
    if (fs.existsSync(TOKEN_CACHE_FILE)) {
      {
        const _0x554afa = fs.readFileSync(TOKEN_CACHE_FILE, "utf8");
        _0x1041b3 = JSON.parse(_0x554afa);
      }
    }
    _0x1041b3[_0x436ba9] = _0x12381f;
    fs.writeFileSync(TOKEN_CACHE_FILE, JSON.stringify(_0x1041b3, null, 2));
    $.log("token已保存到缓存文件: " + TOKEN_CACHE_FILE);
  } catch (_0x310984) {
    $.log("保存token缓存失败: " + _0x310984.message);
  }
}
async function loginWithWxCode(_0x5af22d) {
  try {
    $.log("开始获取微信code...");
    const _0x30b794 = await wxcode.getWxCode(_0x5af22d, APPID);
    if (!_0x30b794.success) {
      $.log("获取微信code失败: " + _0x30b794.error);
      return;
    }
    $.log("获取微信code成功: " + _0x30b794.code);
    const _0x2cf135 = await getTokenWithCode(_0x30b794.code);
    if (_0x2cf135.success) $.token = _0x2cf135.token, $.log("获取token成功，保存到缓存..."), saveTokenCache(_0x5af22d, _0x2cf135.token), $.log("开始获取用户信息..."), await me();else {
      $.log("获取token失败: " + _0x2cf135.error);
    }
  } catch (_0x387903) {
    $.log("微信code登录过程出错: " + _0x387903.message);
  }
}
async function getTokenWithCode(_0x3a40cc) {
  let _0x525c20 = {
    "url": "https://instax.app.xcxd.net.cn/api/token",
    "method": "POST",
    "headers": {
      "Accept": "*/*",
      "Accept-Encoding": "gzip, deflate, br",
      "Accept-Language": "zh-CN,zh;q=0.9",
      "Connection": "keep-alive",
      "Content-Type": "application/json",
      "Host": "instax.app.xcxd.net.cn",
      "Referer": "https://servicewechat.com/wx3cb572fbf3aa30c8/134/page-frame.html",
      "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.49(0x18003137) NetType/WIFI Language/zh_CN"
    },
    "data": JSON.stringify({
      "mp_login_code": _0x3a40cc,
      "grant_type": "mp_login_code"
    })
  };
  try {
    let {
      data: _0x12e704
    } = await Request(_0x525c20);
    if (_0x12e704?.["error"] === false && _0x12e704.data?.["token"]) {
      $.log("获取token成功");
      return {
        "success": true,
        "token": _0x12e704.data.token,
        "refresh_token": _0x12e704.data.refresh_token,
        "expires_in": _0x12e704.data.expires_in
      };
    } else {
      return {
        "success": false,
        "error": _0x12e704?.["message"] || "获取token失败"
      };
    }
  } catch (_0x844bda) {
    return {
      "success": false,
      "error": "请求失败: " + _0x844bda.message
    };
  }
}
async function testWithoutAuth() {
  $.log("测试不带Authorization的接口请求...");
  let _0x4432d9 = {
      "url": "https://instax.app.xcxd.net.cn/api/me",
      "method": "GET",
      "headers": {
        "Accept": "*/*",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "zh-CN,zh;q=0.9",
        "Connection": "keep-alive",
        "Content-Type": "application/json",
        "Host": "instax.app.xcxd.net.cn",
        "Referer": "https://servicewechat.com/wx3cb572fbf3aa30c8/134/page-frame.html",
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.49(0x18003137) NetType/WIFI Language/zh_CN"
      }
    },
    {
      data: _0xc2402a
    } = await Request(_0x4432d9);
  $.log("不带Authorization请求结果: " + JSON.stringify(_0xc2402a));
  return _0xc2402a;
}
async function validateToken() {
  try {
    {
      let _0x12f2b4 = {
          "url": "https://instax.app.xcxd.net.cn/api/me",
          "method": "GET",
          "headers": {
            "Accept": "*/*",
            "Accept-Encoding": "gzip, deflate, br",
            "Accept-Language": "zh-CN,zh;q=0.9",
            "Authorization": "Bearer " + $.token,
            "Connection": "keep-alive",
            "Content-Type": "application/json",
            "Host": "instax.app.xcxd.net.cn",
            "Referer": "https://servicewechat.com/wx3cb572fbf3aa30c8/157/page-frame.html",
            "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.49(0x18003137) NetType/WIFI Language/zh_CN"
          }
        },
        {
          data: _0x35fec0
        } = await Request(_0x12f2b4);
      if (_0x35fec0 && _0x35fec0.error === false && _0x35fec0.data && _0x35fec0.data.user) {
        $.userId = _0x35fec0.data.user.id;
        return true;
      } else return false;
    }
  } catch (_0x38f613) {
    $.log("验证token时出错: " + _0x38f613.message);
    return false;
  }
}
async function me() {
  let _0x34d38c = {
      "url": "https://instax.app.xcxd.net.cn/api/me",
      "method": "GET",
      "headers": {
        "Accept": "*/*",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "zh-CN,zh;q=0.9",
        "Authorization": "Bearer " + $.token,
        "Connection": "keep-alive",
        "Content-Type": "application/json",
        "Host": "instax.app.xcxd.net.cn",
        "Referer": "https://servicewechat.com/wx3cb572fbf3aa30c8/134/page-frame.html",
        "Sec-Fetch-Dest": "empty",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Site": "cross-site",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF WindowsWechat(0x6309092b) XWEB/8555",
        "xweb_xhr": "1"
      }
    },
    {
      data: _0x4c9cc9
    } = await Request(_0x34d38c);
  if (_0x4c9cc9?.["error"] == false && _0x4c9cc9.data?.["user"]) $.userId = _0x4c9cc9.data.user.id, $.log("[" + _0x4c9cc9.data.user.nickname + "] 当前积分[" + _0x4c9cc9.data.user.credit + "] 等级[" + _0x4c9cc9.data.user.user_level_id + "]");else {
    {
      const _0xf4a1c7 = _0x4c9cc9?.["message"] || "token可能已失效";
      $.log("获取信息 失败[" + _0xf4a1c7 + "]");
    }
  }
}
async function signIn() {
  let _0x32872d = {
      "url": "https://instax.app.xcxd.net.cn/api/user/" + $.userId + "/sign-activity/23/sign",
      "method": "POST",
      "headers": {
        "Accept": "*/*",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "zh-CN,zh;q=0.9",
        "Authorization": "Bearer " + $.token,
        "Connection": "keep-alive",
        "Content-Type": "application/json",
        "Host": "instax.app.xcxd.net.cn",
        "Referer": "https://servicewechat.com/wx3cb572fbf3aa30c8/134/page-frame.html",
        "Sec-Fetch-Dest": "empty",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Site": "cross-site",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF WindowsWechat(0x6309092b) XWEB/8555",
        "xweb_xhr": "1"
      },
      "data": JSON.stringify({})
    },
    {
      data: _0x164e05
    } = await Request(_0x32872d);
  _0x164e05?.["error"] == false ? $.log("签到成功") : $.log("签到失败[" + _0x164e05 + "]");
}
async function chance() {
  let _0x1e4374 = {
      "url": "https://instax.app.xcxd.net.cn/api/user/" + $.userId + "/draw-activities/41/chance",
      "method": "GET",
      "headers": {
        "Accept": "*/*",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "zh-CN,zh;q=0.9",
        "Authorization": "Bearer " + $.token,
        "Connection": "keep-alive",
        "Content-Type": "application/json",
        "Host": "instax.app.xcxd.net.cn",
        "Referer": "https://servicewechat.com/wx3cb572fbf3aa30c8/134/page-frame.html",
        "Sec-Fetch-Dest": "empty",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Site": "cross-site",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF WindowsWechat(0x6309092b) XWEB/8555",
        "xweb_xhr": "1"
      }
    },
    {
      data: _0x1cf986
    } = await Request(_0x1e4374);
  if (_0x1cf986?.["error"] == false) {
    {
      $.log("查询抽奖次数 [" + _0x1cf986.data + "]");
      for (let _0x26e5eb = 0; _0x26e5eb < _0x1cf986.data; _0x26e5eb++) {
        await $.wait(3000);
        await draw();
      }
    }
  } else $.log("查询抽奖次数 失败[" + _0x1cf986.message + "]");
}
async function draw() {
  let _0x223265 = {
      "url": "https://instax.app.xcxd.net.cn/api/user/" + $.userId + "/draw-activities/41/draw",
      "method": "POST",
      "headers": {
        "Accept": "*/*",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "zh-CN,zh;q=0.9",
        "Authorization": "Bearer " + $.token,
        "Connection": "keep-alive",
        "Content-Type": "application/json",
        "Host": "instax.app.xcxd.net.cn",
        "Referer": "https://servicewechat.com/wx3cb572fbf3aa30c8/134/page-frame.html",
        "Sec-Fetch-Dest": "empty",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Site": "cross-site",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF WindowsWechat(0x6309092b) XWEB/8555",
        "xweb_xhr": "1"
      },
      "data": JSON.stringify({})
    },
    {
      data: _0x192c60
    } = await Request(_0x223265);
  if (_0x192c60?.["error"] == false) {
    $.log("抽奖成功 [" + _0x192c60.data.record.desc + "]");
  } else $.log("抽奖失败[" + _0x192c60.message + "]");
}
function checkEnv(_0x2417e0) {
  const _0x2bc95d = ["&", "\n"];
  let _0x461fb2 = _0x2417e0.split(_0x2bc95d.find(_0x5e6b3d => _0x2417e0.includes(_0x5e6b3d)) || "\n").filter(_0x196e86 => _0x196e86);
  console.log("共找到" + _0x461fb2.length + "个账号");
  return _0x461fb2;
}
function Env(_0x22e3da, _0x52e9a8) {
  return new class {
    constructor(_0x164ae4, _0x47f5a1) {
      {
        this.name = _0x164ae4;
        this.logs = [];
        this.logSeparator = "\n";
        this.startTime = new Date().getTime();
        Object.assign(this, _0x47f5a1);
        this.log("", "🔔" + this.name + ",开始!");
      }
    }
    ["isNode"]() {
      return "undefined" != typeof module && !!module.exports;
    }
    ["isQuanX"]() {
      return "undefined" != typeof $task;
    }
    ["queryStr"](_0xf43f92) {
      return Object.entries(_0xf43f92).map(([_0x4cafa2, _0x3d6b07]) => _0x4cafa2 + "=" + (typeof _0x3d6b07 === "object" ? JSON.stringify(_0x3d6b07) : _0x3d6b07)).join("&");
    }
    ["getURLParams"](_0x5a28e9) {
      {
        const _0x3c3dd9 = {},
          _0x4a557e = _0x5a28e9.split("?")[1];
        if (_0x4a557e) {
          {
            const _0x1e112c = _0x4a557e.split("&");
            _0x1e112c.forEach(_0x558c53 => {
              {
                const [_0x4771e3, _0x148c12] = _0x558c53.split("=");
                _0x3c3dd9[_0x4771e3] = _0x148c12;
              }
            });
          }
        }
        return _0x3c3dd9;
      }
    }
    ["isJSONString"](_0x130d47) {
      try {
        return JSON.parse(_0x130d47) && typeof JSON.parse(_0x130d47) === "object";
      } catch (_0x61b7b4) {
        return false;
      }
    }
    ["isJson"](_0x39895b) {
      var _0x350fb5 = typeof _0x39895b == "object" && Object.prototype.toString.call(_0x39895b).toLowerCase() == "[object object]" && !_0x39895b.length;
      return _0x350fb5;
    }
    async ["sendMsg"](_0x5568b4) {
      if (!_0x5568b4) return;
      if (this.isNode()) await notify.sendNotify(this.name, _0x5568b4);else {
        this.msg(this.name, "", _0x5568b4);
      }
    }
    ["randomNumber"](_0x197404) {
      {
        const _0x46f667 = "0123456789";
        return Array.from({
          "length": _0x197404
        }, () => _0x46f667[Math.floor(Math.random() * _0x46f667.length)]).join("");
      }
    }
    ["randomString"](_0x43b617) {
      const _0x434a3e = "abcdefghijklmnopqrstuvwxyz0123456789";
      return Array.from({
        "length": _0x43b617
      }, () => _0x434a3e[Math.floor(Math.random() * _0x434a3e.length)]).join("");
    }
    ["uuid"]() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (_0x3bab8b) {
        var _0x3bd5a8 = Math.random() * 16 | 0,
          _0x5a7c53 = _0x3bab8b == "x" ? _0x3bd5a8 : _0x3bd5a8 & 3 | 8;
        return _0x5a7c53.toString(16);
      });
    }
    ["time"](_0x113c0c) {
      {
        let _0x10ef76 = {
          "M+": new Date().getMonth() + 1,
          "d+": new Date().getDate(),
          "H+": new Date().getHours(),
          "m+": new Date().getMinutes(),
          "s+": new Date().getSeconds(),
          "q+": Math.floor((new Date().getMonth() + 3) / 3),
          "S": new Date().getMilliseconds()
        };
        /(y+)/.test(_0x113c0c) && (_0x113c0c = _0x113c0c.replace(RegExp.$1, (new Date().getFullYear() + "").substr(4 - RegExp.$1.length)));
        for (let _0x5f5980 in _0x10ef76) {
          new RegExp("(" + _0x5f5980 + ")").test(_0x113c0c) && (_0x113c0c = _0x113c0c.replace(RegExp.$1, 1 == RegExp.$1.length ? _0x10ef76[_0x5f5980] : ("00" + _0x10ef76[_0x5f5980]).substr(("" + _0x10ef76[_0x5f5980]).length)));
        }
        return _0x113c0c;
      }
    }
    ["msg"](_0x21e0ff = _0x22e3da, _0x4bca2e = "", _0x3c3fda = "", _0x30584c) {
      const _0x2afed7 = _0x51b68c => {
        if (!_0x51b68c) return _0x51b68c;else {
          if (typeof _0x51b68c === "string") return this.isQuanX() ? {
            "open-url": _0x51b68c
          } : undefined;else {
            if (typeof _0x51b68c === "object" && (_0x51b68c["open-url"] || _0x51b68c["media-url"])) {
              return this.isQuanX() ? _0x51b68c : undefined;
            } else return undefined;
          }
        }
      };
      if (!this.isMute) {
        if (this.isQuanX()) {
          $notify(_0x21e0ff, _0x4bca2e, _0x3c3fda, _0x2afed7(_0x30584c));
        }
      }
      let _0x115ec5 = ["", "==============📣系统通知📣=============="];
      _0x115ec5.push(_0x21e0ff);
      _0x4bca2e ? _0x115ec5.push(_0x4bca2e) : "";
      _0x3c3fda ? _0x115ec5.push(_0x3c3fda) : "";
      console.log(_0x115ec5.join("\n"));
      this.logs = this.logs.concat(_0x115ec5);
    }
    ["log"](..._0x1be0dd) {
      _0x1be0dd.length > 0 && (this.logs = [...this.logs, ..._0x1be0dd]);
      console.log(_0x1be0dd.join(this.logSeparator));
    }
    ["logErr"](_0x4f69d9, _0x3deeaa) {
      {
        const _0x10466d = !this.isQuanX();
        _0x10466d ? this.log("", "❗️" + this.name + ",错误!", _0x4f69d9.stack) : this.log("", "❗️" + this.name + ",错误!", _0x4f69d9);
      }
    }
    ["wait"](_0x19d097) {
      return new Promise(_0x36b95e => setTimeout(_0x36b95e, _0x19d097));
    }
    ["done"](_0x177749 = {}) {
      {
        const _0x46c0b5 = new Date().getTime(),
          _0x2f48be = (_0x46c0b5 - this.startTime) / 1000;
        this.log("", "🔔" + this.name + ",结束!🕛 " + _0x2f48be + "秒");
        this.log();
        this.isNode() && process.exit(1);
        this.isQuanX() && $done(_0x177749);
      }
    }
  }(_0x22e3da, _0x52e9a8);
}
async function Request(_0x28d910) {
  if ($.isNode()) {
    {
      const _0x17eec9 = require("axios");
      Request = async _0xdd92bc => {
        try {
          return await _0x17eec9.request(_0xdd92bc);
        } catch (_0xb819c0) {
          return _0xb819c0 && _0xb819c0.response ? _0xb819c0.response.data : "请求失败";
        }
      };
    }
  }
  $.isQuanX() && (Request = async _0x37b1c9 => {
    try {
      return await $task.fetch(_0x37b1c9);
    } catch (_0x4fc339) {
      return _0x4fc339 && _0x4fc339.error ? _0x4fc339.error : "请求失败";
    }
  });
  return await Request(_0x28d910);
}