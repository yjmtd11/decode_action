//Wed Nov 05 2025 12:29:36 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
const Env = require("./env"),
  $ = new Env("悦秀会"),
  CKS = process.env.yxhck || "",
  WECHAT_SERVER = process.env.WECHAT_SERVER || "",
  Util = require("./Utils.js");
let Utils = undefined,
  sfbf = 0,
  appid = "wx4e6c5384b429c008",
  notice = "",
  wxidArr = {},
  tokenArr = {},
  headArr = {},
  end = [],
  blackbox = "",
  PUBLICKKEY = "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDHSAHeojLPOaeHt4os2kqdewrN7bn02OoC4NIWHMKzu49pXCuN9hRriW/EzNalHnm/WmwhI0ekEmb7Y2H2Cin0en77HRXwhpEBQCwcNK0PouBE9HEQoAvGyWjLQmJ5xxquvaG0vXgwA9W+n9+TJvskdfTjSWfp3GETCjvkKpU+owIDAQAB";
!(async () => {
  await main();
})().catch(_0xa66af9 => {
  $.log(_0xa66af9);
}).finally(() => {
  $.done({});
});
async function main() {
  if (!CKS) {
    {
      console.log("未填写ck");
      return;
    }
  }
  console.log("正在获取动态blackbox...");
  blackbox = await getBlackbox();
  if (!blackbox) {
    {
      console.log("获取blackbox失败，程序终止");
      return;
    }
  }
  console.log("获取blackbox成功: " + blackbox);
  Utils = Util.creatUtils();
  let _0x2e9b99 = Array.isArray(CKS) ? CKS : CKS.split("\n");
  for (const _0xe6a0f0 in _0x2e9b99) {
    let _0x5c9676 = _0x2e9b99[_0xe6a0f0];
    wxidArr[_0xe6a0f0] = _0x5c9676.split("#")[0];
    let _0x10d850 = _0x5c9676.split("#")[1] || Number(_0xe6a0f0) + 1;
    headArr[_0xe6a0f0] = "【账号 [" + _0x10d850 + "] 】";
    if (_0xe6a0f0 > 0) {
      {
        let _0x461aaf = $.randomInt(60000, 180000);
        console.log("等待 " + Math.floor(_0x461aaf / 1000) + " 秒后处理下一个账号...");
        await $.wait(_0x461aaf);
      }
    }
    sfbf ? begin(_0xe6a0f0) : await begin(_0xe6a0f0);
  }
  while (true) {
    await $.wait(10000);
    if (end.length == _0x2e9b99.length) {
      break;
    }
  }
  notice && (await sendMsg(notice));
}
async function begin(_0x40a465) {
  if (!(await checkToken(_0x40a465))) {
    {
      end.push(_0x40a465);
      return;
    }
  }
  let _0x1789fa = await comPost(_0x40a465, "https://member-gateway.yuexiu.com/gateway/member-process/info/queryMemberInfo", {
      "data": {
        "deviceChannel": "WECHAT",
        "businessChannel": "miniprogram",
        "channelCode": "wechat"
      }
    }),
    _0x33b1cf = _0x1789fa.data.mobile,
    _0x2310e3 = getUUID(),
    _0x48111a = Date.now(),
    _0x730838 = Utils.md5("mobile=" + _0x33b1cf + "&outOrderNo=" + _0x2310e3 + "&timestamp=" + _0x48111a + "Ww2sbzP4rjRNmQAmkjuj"),
    _0x29f1a9 = {
      "outOrderNo": _0x2310e3,
      "mobile": _0x33b1cf,
      "timestamp": _0x48111a,
      "sign": _0x730838
    },
    _0x4b4a72 = encrypt(_0x29f1a9),
    _0x433d6b = Utils.md5(PUBLICKKEY),
    _0x23b6ca = await comPost(_0x40a465, "https://member-gateway.yuexiu.com/gateway/memberTask/app/sign/signin", {
      "data": {
        "deviceChannel": "WECHAT",
        "businessChannel": "miniprogram",
        "channelCode": "wechat",
        "dataVerify": _0x4b4a72,
        "pubKeyHash": _0x433d6b
      },
      "tid": _0x2310e3
    });
  _0x23b6ca.code == "S0A00000" ? print(_0x40a465, "签到成功") : print(_0x40a465, "签到失败:" + _0x23b6ca.msg);
  let _0x54d8ab = await comPost(_0x40a465, "https://member-gateway.yuexiu.com/gateway/pointsAccount/app/queryAccount", {});
  _0x54d8ab.code == "S0A00000" ? print(_0x40a465, "当前积分:" + _0x54d8ab.data.availablePoints + ",即将过期积分:" + _0x54d8ab.data.expiredPoints) : print(_0x40a465, "查询积分失败:" + _0x54d8ab.msg);
  end.push(_0x40a465);
}
async function checkToken(_0x27b43b) {
  let _0x4b60d3 = "悦秀会-" + wxidArr[_0x27b43b];
  tokenArr[_0x27b43b] = $.getdata(_0x4b60d3) || "";
  if (tokenArr[_0x27b43b]) {
    let _0x2eea57 = await comPost(_0x27b43b, "https://member-gateway.yuexiu.com/gateway/member-process/info/queryMemberInfo", {
      "data": {
        "deviceChannel": "WECHAT",
        "businessChannel": "miniprogram",
        "channelCode": "wechat"
      }
    });
    if (_0x2eea57.code == "S0A00000") return true;
  }
  tokenArr[_0x27b43b] = "";
  let _0x3796f2 = await getWxCode(_0x27b43b);
  if (_0x3796f2.Code == 0) print(_0x27b43b, "获取微信code:" + _0x3796f2.Message);else return print(_0x27b43b, "获取微信code失败:" + _0x3796f2.Message, true), false;
  let _0x5b6b72 = await comPost(_0x27b43b, "https://member-gateway.yuexiu.com/gateway/member-process/wxLogin/autoLogin", {
    "data": {
      "deviceChannel": "WECHAT",
      "businessChannel": "miniprogram",
      "channelCode": "wechat",
      "avatarUrl": "",
      "nickname": "",
      "typeId": "3001",
      "code": _0x3796f2.Data.code,
      "blackbox": blackbox
    },
    "showLoading": true
  });
  if (_0x5b6b72.code == "S0A00000") {
    print(_0x27b43b, "登录成功");
    tokenArr[_0x27b43b] = _0x5b6b72.data.token;
    $.setdata(tokenArr[_0x27b43b], _0x4b60d3);
    return true;
  } else return print(_0x27b43b, "登录失败:" + _0x5b6b72.msg), false;
}
async function comPost(_0xef8e56, _0x214d68, _0x271dfb, _0x195330 = 5) {
  if (_0x195330 <= 0) {
    throw new Error("请求重试次数超限");
  }
  return new Promise((_0x35eec5, _0x575a5b) => {
    const _0xd511ab = {
      "url": _0x214d68,
      "headers": {
        "Host": "member-gateway.yuexiu.com",
        "Connection": "keep-alive",
        "xweb_xhr": "1",
        "x-Hrt-Mid-Appid": "API_AUTH_MINI",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF WindowsWechat(0x63090b13) XWEB/9129",
        "token": tokenArr[_0xef8e56],
        "blackbox": blackbox,
        "Content-Type": "application/json",
        "Accept": "*/*",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "zh-CN,zh;q=0.9"
      },
      "body": typeof _0x271dfb === "string" ? _0x271dfb : JSON.stringify(_0x271dfb)
    };
    $.post(_0xd511ab, async (_0x30b2de, _0x3bd0af, _0x3dcc63) => {
      try {
        _0x35eec5(JSON.parse(_0x3dcc63));
      } catch (_0x5b3210) {
        console.log(_0x214d68 + " API请求失败，剩余重试次数" + (_0x195330 - 1));
        comPost(_0xef8e56, _0x214d68, _0x271dfb, _0x195330 - 1).then(_0x35eec5).catch(_0x575a5b);
      }
    });
  });
}
async function getWxCode(_0x47f6bc) {
  const _0xe5e9f = {
    "url": WECHAT_SERVER + "/api/Wxapp/JSLogin",
    "headers": {
      "accept": "application/json",
      "Content-Type": "application/json"
    },
    "body": JSON.stringify({
      "appid": appid,
      "wxid": wxidArr[_0x47f6bc]
    })
  };
  return new Promise(_0x465629 => {
    $.post(_0xe5e9f, async (_0x43f125, _0x10bc47, _0xe6ecc0) => {
      try {
        _0x43f125 ? (console.log("" + JSON.stringify(_0x43f125)), console.log($.name + " API请求失败，请检查网路重试")) : _0x465629(JSON.parse(_0xe6ecc0));
      } catch (_0x5549e8) {
        $.logErr(_0x5549e8, _0x10bc47);
      } finally {
        _0x465629();
      }
    });
  });
}
async function getBlackbox() {
  const _0x223f1b = {
    "url": "https://test111.365676.xyz/api/v1/sms/get/blackbox",
    "headers": {
      "accept": "application/json",
      "Content-Type": "application/json"
    }
  };
  return new Promise(_0x3846fe => {
    $.get(_0x223f1b, async (_0x2c9470, _0x541723, _0x3babd9) => {
      try {
        if (_0x2c9470) console.log("获取blackbox失败: " + JSON.stringify(_0x2c9470)), _0x3846fe("");else {
          {
            let _0x5fc78a = JSON.parse(_0x3babd9);
            _0x5fc78a.token ? _0x3846fe(_0x5fc78a.token) : (console.log("blackbox接口返回格式错误: " + _0x3babd9), _0x3846fe(""));
          }
        }
      } catch (_0x57e057) {
        console.log("解析blackbox失败: " + _0x57e057);
        _0x3846fe("");
      }
    });
  });
}
function encrypt(_0x1f7343) {
  const _0x36db61 = require("node-rsa");
  let _0x2e9479 = new _0x36db61("-----BEGIN PUBLIC KEY-----\n" + PUBLICKKEY + "\n-----END PUBLIC KEY-----");
  _0x2e9479.setOptions({
    "encryptionScheme": "pkcs1"
  });
  return _0x2e9479.encrypt(_0x1f7343, "buffer", "utf8").toString("hex");
}
function getUUID() {
  for (var _0x2b6bc1 = 36, _0x460dd5 = [], _0x1f398b = "0123456789abcdef", _0x149667 = 0; _0x149667 < _0x2b6bc1; _0x149667++) _0x460dd5[_0x149667] = _0x1f398b.substr(Math.floor(16 * Math.random()), 1);
  _0x460dd5[14] = "4";
  _0x460dd5[19] = _0x1f398b.substr(3 & _0x460dd5[19] | 8, 1);
  _0x460dd5[8] = _0x460dd5[13] = _0x460dd5[18] = _0x460dd5[23] = "-";
  return _0x460dd5.join("");
}
function print(_0x263d51, _0x5a1f21, _0x7b21fb = true) {
  let _0x185d3e = "" + headArr[_0x263d51] + _0x5a1f21;
  console.log(_0x185d3e);
  _0x7b21fb && (notice += _0x185d3e + "\n");
}
async function sendMsg(_0x33ff6f) {
  if ($.isNode()) {
    let _0x46f593 = "";
    try {
      _0x46f593 = require("./sendNotify");
    } catch (_0x4fde89) {
      _0x46f593 = require("../sendNotify");
    }
    await _0x46f593.sendNotify($.name, _0x33ff6f);
  } else $.message($.name, "", _0x33ff6f);
}