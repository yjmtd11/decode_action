//Fri May 23 2025 06:19:21 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
NAME = "看余杭抽奖";
VALY = ["kyhck"];
LOGS = 0;
CK = "";
LOGS = 0;
usid = 0;
Notify = 1;
const danchaofan_0x518af8 = require("fs");
const {
  v4: danchaofan_0x4967f2
} = require("uuid");
dcfhost = process.env.dcfhost;
dcfkey = process.env.dcfkey;
class danchaofan_0x694952 {
  constructor(_0x157eb6) {
    this.phone = _0x157eb6.split("#")[0];
    this.password = _0x157eb6.split("#")[1];
    this.deskey = "hzydbsv5";
    this.did = _0x157eb6.split("#")[2];
    this._ = ++usid;
    this.f = "小主 [" + this._ + "] ";
    this.message = "";
    this.logs = true;
  }
  async login() {
    let _0x492d55 = Buffer.from($.DecryptCrypto("0", "DES", "CBC", "Pkcs7", this.phone, this.deskey, this.deskey), "base64").toString("hex").toUpperCase();
    let _0x1e968a = Buffer.from($.DecryptCrypto("0", "DES", "CBC", "Pkcs7", this.password, this.deskey, this.deskey), "base64").toString("hex").toUpperCase();
    let _0x2d5b44 = "{\"data\":{\"password\":\"" + _0x1e968a + "\",\"loginName\":\"" + _0x492d55 + "\"},\"service\":\"core\",\"userDevice\":{\"os\":\"11\",\"deviceBrand\":\"Xiaomi\",\"deviceId\":\"" + this.did + "\",\"deviceType\":\"Xiaomi\",\"device\":\"android\",\"clientVersion\":\"4.1.2\"},\"api\":\"v2/login/loginByPwd\",\"token\":\"\"} ";
    let _0x47c407 = await $.task("post", "https://app.eyh.cn/gateway/api", {}, _0x2d5b44);
    if (_0x47c407.code == 0) {
      this.token = _0x47c407.data;
      console.log("【" + this.f + "】 登陆成功");
      this.logs = true;
    } else {
      this.logs = false;
    }
  }
  async readlist() {
    let _0x55c938 = $.time(13);
    let _0x10c84d = "{\"service\":\"media\",\"api\":\"spreadActivity/getAppUserSpreadActivity\",\"data\":{\"content\":\"null\"},\"userDevice\":{\"os\":\"13\",\"deviceBrand\":\"Xiaomi\",\"deviceId\":\"" + this.did + "\",\"equipmentId\":\"" + this.did + "\",\"deviceType\":\"Xiaomi 2211133C\",\"device\":\"android\",\"clientVersion\":\"5.0.1\"},\"traceId\":\"ZSHEQA9R" + _0x55c938 + "\",\"token\":\"" + this.token + "\"}";
    let _0x347fd5 = await $.task("post", "https://app.eyh.cn/gateway/api", {}, _0x10c84d);
    if (_0x347fd5.code == 0) {
      {
        console.log("【" + this.f + "】当前贡献值：" + _0x347fd5.data.dayContributionNum);
        let _0x134162 = _0x347fd5.data.lotteryNum;
        if (_0x347fd5.data.dayContributionNum < 30) {
          {
            console.log("           今日贡献值不满，继续做任务......");
            for (let _0xcb2b4 of _0x347fd5.data.spreadArticleVoList) {
              {
                if (_0xcb2b4.readStatus == 0) {
                  let _0x49c409 = "阅读";
                  let _0x48d5c5 = "column/readArticle";
                  await this.dotask(_0xcb2b4.articleId, _0xcb2b4.articleTitle, _0x48d5c5, _0x49c409);
                }
                if (_0xcb2b4.likesStatus == 0) {
                  let _0x460174 = "点赞";
                  let _0x433c53 = "article/savePraiseLog";
                  await this.dotask(_0xcb2b4.articleId, _0xcb2b4.articleTitle, _0x433c53, _0x460174);
                }
                if (_0xcb2b4.shareStatus == 0) {
                  {
                    let _0x489092 = "分享";
                    let _0x2d99c1 = "article/saveShareLog";
                    await this.dotask(_0xcb2b4.articleId, _0xcb2b4.articleTitle, _0x2d99c1, _0x489092);
                  }
                }
              }
            }
          }
        } else {
          {
            if (_0x134162 > 0) {
              {
                console.log("           今日贡献值已满，去抽奖咯......");
                await this.choujiang(_0x134162, _0x347fd5.data.lotteryActivityUid);
              }
            } else {
              console.log("           今日贡献值已满，且今日抽奖次数已用完，结束运行！");
            }
          }
        }
      }
    }
  }
  async dotask(_0x173cb0, _0x18fc68, _0xdda94d, _0x2c02d8) {
    let _0x303bab = $.time(13);
    let _0x9b315a = "{\"service\":\"media\",\"api\":\"" + _0xdda94d + "\",\"data\":{\"articleId\":" + _0x173cb0 + ",\"content\":\"null\"},\"userDevice\":{\"os\":\"13\",\"deviceBrand\":\"Xiaomi\",\"deviceId\":\"" + this.did + "\",\"equipmentId\":\"" + this.did + "\",\"deviceType\":\"Xiaomi 2211133C\",\"device\":\"android\",\"clientVersion\":\"5.0.1\"},\"traceId\":\"M4DN4CU9" + _0x303bab + "\",\"token\":\"" + this.token + "\"}";
    let _0x333777 = await $.task("post", "https://app.eyh.cn/gateway/api", {}, _0x9b315a);
    if (_0x333777.code == 0 && _0x333777.message == "success") {
      {
        console.log("【" + this.f + "】完成文章《" + _0x18fc68 + "》" + _0x2c02d8 + "任务成功");
        await $.wait(5000, 10000);
      }
    }
  }
  async choujiang(_0x5173d7, _0x207a20) {
    for (let _0x27ed4d = 0; _0x27ed4d < _0x5173d7; _0x27ed4d++) {
      {
        let _0x235bd6 = $.time(13);
        let _0x34c3ec = "{\"service\":\"media\",\"api\":\"lottery/lotteryActivityAward\",\"data\":{\"uid\":\"" + _0x207a20 + "\",\"content\":\"null\"},\"userDevice\":{\"os\":\"13\",\"deviceBrand\":\"Xiaomi\",\"deviceId\":\"" + this.did + "\",\"equipmentId\":\"" + this.did + "\",\"deviceType\":\"Xiaomi 2211133C\",\"device\":\"android\",\"clientVersion\":\"5.0.1\"},\"traceId\":\"M71Y6MLC" + _0x235bd6 + "\",\"token\":\"" + this.token + "\"}";
        let _0x400f8e = await $.task("post", "https://app.eyh.cn/gateway/api", {}, _0x34c3ec);
        if (_0x400f8e.code == 0) {
          {
            console.log("【" + this.f + "】抽奖成功，获得" + _0x400f8e.data.name);
            await $.wait(5000, 8000);
          }
        } else {
          console.log("【" + this.f + "】抽奖成功，获得了谢谢参与");
        }
      }
    }
  }
}
$ = danchaofan_0x3b9352();
!(async () => {
  console.log(NAME);
  let _0x5db978 = await $.getkami();
  let _0x78f0de = await $.readUUID();
  if (_0x5db978.dcfkey) {
    if (_0x5db978.Notify != "") {
      console.log(_0x5db978.Notify);
    }
    TSdata = $.time(13);
    if (_0x5db978.MAC == null) {
      {
        console.log("请提交正确的MAC地址后再运行脚本！");
        return;
      }
    } else {
      if (_0x5db978.MAC != null) {
        {
          if (_0x5db978.MAC != _0x78f0de) {
            {
              let _0x1495db = require("path");
              let _0x454184 = _0x1495db.basename(__filename);
              console.log("本次MAC地址与数据库记录不匹配，停止运行文件[" + _0x454184 + "]");
              return;
            }
          }
        }
      }
    }
    if (_0x5db978.Delete == 1) {
      {
        let _0x1950db = require("path");
        let _0x5e174f = _0x1950db.basename(__filename);
        console.log("关闭服务器跑路啦，帮你删除脚本文件[" + _0x5e174f + "]");
        danchaofan_0x518af8.unlink(_0x5e174f, _0x9d71b9 => {});
        return;
      }
    }
    if (TSdata <= _0x5db978.Data) {
      {
        console.log("尊贵的" + _0x5db978.UserName + "小主,您的卡密有效期到：" + _0x5db978.DataTime);
      }
    } else {
      {
        let _0xb15762 = require("path");
        let _0x5a05b5 = _0xb15762.basename(__filename);
        console.log("卡密已过期，停止运行文件[" + _0x5a05b5 + "]");
        return;
      }
    }
    await $.ExamineCookie();
    if ($.cookie_list.length < _0x5db978.xianjin) {
      {
        await $.Multithreading("login");
        let _0x524c1f = $.cookie_list.filter(_0x19de60 => _0x19de60.logs == true);
        if (_0x524c1f.length == 0) {
          console.log("Cookie格式错误 或 账号被禁封");
          return;
        } else {
          {
            await $.Multithreading("readlist");
          }
        }
      }
    } else {
      console.log("账号数量超过限制，请减少账号数量后重试！");
    }
  } else {
    {
      let _0x59752a = require("path");
      let _0x4e2e5c = _0x59752a.basename(__filename);
      console.log("无效卡密，停止运行文件[" + _0x4e2e5c + "]");
      return;
    }
  }
  let _0x38cc50 = [];
  for (let _0x5d6a8a of $.cookie_list) {
    if (_0x5d6a8a.message) {
      _0x38cc50.push(_0x5d6a8a.message);
    }
  }
  if (_0x38cc50.length > 0) {
    await $.SendMsg(_0x38cc50.join("\n"));
  }
})().catch(_0x159e9f => {
  console.log(_0x159e9f);
}).finally(() => {});
function danchaofan_0x3b9352() {
  return new class {
    constructor() {
      this.cookie_list = [];
      this.message = "";
      this.CryptoJS = require("crypto-js");
      this.NodeRSA = require("node-rsa");
      this.request = require("request");
      this.Sha_Rsa = require("jsrsasign");
    }
    async Multithreading(_0x33ddf5, _0xf8ba76, _0x3474d3) {
      let _0x551f66 = [];
      if (!_0x3474d3) {
        _0x3474d3 = 1;
      }
      while (_0x3474d3--) {
        for (let _0x849ae7 of $.cookie_list) {
          {
            _0x551f66.push(_0x849ae7[_0x33ddf5](_0xf8ba76));
          }
        }
      }
      await Promise.allSettled(_0x551f66);
    }
    ExamineCookie() {
      let _0xb43008 = process.env[VALY] || CK;
      let _0x54f654 = 0;
      if (_0xb43008) {
        for (let _0x364727 of _0xb43008.split("\n").filter(_0x3871f3 => !!_0x3871f3)) {
          {
            $.cookie_list.push(new danchaofan_0x694952(_0x364727));
          }
        }
        _0x54f654 = $.cookie_list.length;
      } else {
        console.log("\n【" + NAME + "】：未填写变量: " + VALY);
      }
      console.log("共找到" + _0x54f654 + "个账号");
      return $.cookie_list;
    }
    task(_0x292824, _0x6c9c64, _0x4b05a6, _0x7089b0, _0x4a038e) {
      if (_0x292824 == "delete") {
        {
          _0x292824 = _0x292824.toUpperCase();
        }
      } else {
        _0x292824 = _0x292824;
      }
      if (_0x292824 == "post") {
        {
          delete _0x4b05a6["content-type"];
          delete _0x4b05a6["Content-type"];
          delete _0x4b05a6["content-Type"];
          if ($.safeGet(_0x7089b0)) {
            _0x4b05a6["Content-Type"] = "application/json;charset=UTF-8";
          } else {
            {
              _0x4b05a6["Content-Type"] = "application/x-www-form-urlencoded";
            }
          }
          if (_0x7089b0) {
            {
              _0x4b05a6["Content-Length"] = $.lengthInUtf8Bytes(_0x7089b0);
            }
          }
        }
      }
      if (_0x292824 == "get") {
        delete _0x4b05a6["content-type"];
        delete _0x4b05a6["Content-type"];
        delete _0x4b05a6["content-Type"];
        delete _0x4b05a6["Content-Length"];
      }
      _0x4b05a6.Host = _0x6c9c64.replace("//", "/").split("/")[1];
      return new Promise(async _0x1d5ddb => {
        {
          if (_0x292824.indexOf("T") < 0) {
            var _0x1e5020 = {
              url: _0x6c9c64,
              headers: _0x4b05a6,
              body: _0x7089b0,
              proxy: "http://" + _0x4a038e
            };
          } else {
            var _0x1e5020 = {
              url: _0x6c9c64,
              headers: _0x4b05a6,
              form: JSON.parse(_0x7089b0),
              proxy: "http://" + _0x4a038e
            };
          }
          if (!_0x4a038e) {
            {
              delete _0x1e5020.proxy;
            }
          }
          this.request[_0x292824.toLowerCase()](_0x1e5020, (_0xf45a03, _0x476d41, _0x4ebea5) => {
            {
              try {
                {
                  if (_0x4ebea5) {
                    {
                      if (LOGS == 1) {
                        console.log("================ 请求 ================");
                        console.log(_0x1e5020);
                        console.log("================ 返回 ================");
                        if ($.safeGet(_0x4ebea5)) {
                          {
                            console.log(JSON.parse(_0x4ebea5));
                          }
                        } else {
                          console.log(_0x4ebea5);
                        }
                      }
                    }
                  }
                }
              } catch (_0x10670b) {
                {
                  console.log(_0x10670b, _0x6c9c64 + "\n" + _0x4b05a6);
                }
              } finally {
                let _0x511298 = "";
                if (!_0xf45a03) {
                  if ($.safeGet(_0x4ebea5)) {
                    {
                      _0x511298 = JSON.parse(_0x4ebea5);
                    }
                  } else {
                    if (_0x4ebea5.indexOf("/") != -1 && _0x4ebea5.indexOf("+") != -1) {
                      _0x511298 = _0x4ebea5;
                    } else {
                      _0x511298 = _0x4ebea5;
                    }
                  }
                } else {
                  _0x511298 = _0x6c9c64 + "   API请求失败，请检查网络重试\n" + _0xf45a03;
                }
                return _0x1d5ddb(_0x511298);
              }
            }
          });
        }
      });
    }
    async httpRequest(_0x1e32b5) {
      delete _0x1e32b5.fn;
      var _0x3b8f7f = require("request");
      return new Promise(_0x375aa4 => {
        {
          _0x3b8f7f(_0x1e32b5, function (_0x520805, _0x1f68d4) {
            if (_0x520805) {
              throw new Error(_0x520805);
            }
            let _0x388e3f = _0x1f68d4.body;
            _0x375aa4(_0x388e3f);
          });
        }
      });
    }
    async readUUID() {
      const _0x5e99c3 = "uuid.txt";
      await $.generateUUID(_0x5e99c3);
      try {
        const _0x34c9ab = danchaofan_0x518af8.readFileSync(_0x5e99c3, "utf8");
        const _0x2c2e74 = _0x34c9ab.trim();
        return _0x2c2e74;
      } catch (_0x7e556d) {
        return null;
      }
    }
    generateUUID(_0x3e0888) {
      if (danchaofan_0x518af8.existsSync(_0x3e0888)) {
        return;
      }
      const _0x11809f = danchaofan_0x4967f2();
      danchaofan_0x518af8.writeFile(_0x3e0888, _0x11809f, "utf8", _0x1fe6bd => {
        if (_0x1fe6bd) {
          {
            console.error("写入文件出错: " + _0x1fe6bd.message);
            return;
          }
        }
      });
    }
    async getkami() {
      {
        let _0x2120fd = await $.readUUID();
        let _0x4b663 = await $.task("get", "http://" + dcfhost + ":5705/query?dcf=" + dcfkey + "&MA=" + _0x2120fd, {});
        return _0x4b663;
      }
    }
    async SendMsg(_0x2b63ef) {
      if (!_0x2b63ef) {
        return;
      }
      if (Notify == 1) {
        {
          var _0xfd5658 = require("./sendNotify");
          await _0xfd5658.sendNotify(NAME, _0x2b63ef);
        }
      }
    }
    lengthInUtf8Bytes(_0x47c9b2) {
      let _0x344df7 = encodeURIComponent(_0x47c9b2).match(/%[89ABab]/g);
      return _0x47c9b2.length + (_0x344df7 ? _0x344df7.length : 0);
    }
    randomArr(_0x1bdf46) {
      return _0x1bdf46[parseInt(Math.random() * _0x1bdf46.length, 10)];
    }
    wait(_0x24b58f) {
      return new Promise(_0x2981ee => setTimeout(_0x2981ee, _0x24b58f));
    }
    time(_0x4194ae) {
      if (_0x4194ae == 10) {
        return Math.round(+new Date() / 1000);
      } else {
        return +new Date();
      }
    }
    timenow() {
      {
        const _0x13920c = new Date();
        const _0x2b8826 = _0x13920c.getFullYear();
        const _0x495bad = String(_0x13920c.getMonth() + 1).padStart(2, "0");
        const _0xe52113 = String(_0x13920c.getDate()).padStart(2, "0");
        const _0x5ca498 = _0x2b8826 + "-" + _0x495bad + "-" + _0xe52113;
        return _0x5ca498;
      }
    }
    safeGet(_0x44f52a) {
      {
        try {
          if (typeof JSON.parse(_0x44f52a) == "object") {
            {
              return true;
            }
          }
        } catch (_0xb6dd9f) {
          {
            return false;
          }
        }
      }
    }
    SJS(_0x4e004f, _0x56c786) {
      if (_0x56c786 == 0) {
        let _0x1b9f2a = "QWERTYUIOPASDFGHJKLZXCVBNM01234567890123456789";
        let _0x387e58 = _0x1b9f2a.length;
        let _0xe5ab1b = "";
        for (let _0xe9a4b7 = 0; _0xe9a4b7 < _0x4e004f; _0xe9a4b7++) {
          _0xe5ab1b += _0x1b9f2a.charAt(Math.floor(Math.random() * _0x387e58));
        }
        return _0xe5ab1b;
      } else {
        if (_0x56c786 == 1) {
          let _0x41eb5e = "qwertyuiopasdfghjklzxcvbnm0123456789";
          let _0x2669e4 = _0x41eb5e.length;
          let _0x50fa46 = "";
          for (let _0x331d6c = 0; _0x331d6c < _0x4e004f; _0x331d6c++) {
            _0x50fa46 += _0x41eb5e.charAt(Math.floor(Math.random() * _0x2669e4));
          }
          return _0x50fa46;
        } else {
          {
            let _0x45b9e6 = "0123456789";
            let _0x171e99 = _0x45b9e6.length;
            let _0x2995d3 = "";
            for (let _0x4c10a4 = 0; _0x4c10a4 < _0x4e004f; _0x4c10a4++) {
              _0x2995d3 += _0x45b9e6.charAt(Math.floor(Math.random() * _0x171e99));
            }
            return _0x2995d3;
          }
        }
      }
    }
    encodeUnicode(_0x106fb3) {
      {
        var _0x5101d5 = [];
        for (var _0x22e685 = 0; _0x22e685 < _0x106fb3.length; _0x22e685++) {
          _0x5101d5[_0x22e685] = ("00" + _0x106fb3.charCodeAt(_0x22e685).toString(16)).slice(-4);
        }
        return "\\u" + _0x5101d5.join("\\u");
      }
    }
    base64ToHex(_0x417649) {
      const _0x257bf3 = atob(_0x417649);
      const _0x2d3549 = new Uint8Array(_0x257bf3.length);
      for (let _0x5d09dc = 0; _0x5d09dc < _0x257bf3.length; _0x5d09dc++) {
        _0x2d3549[_0x5d09dc] = _0x257bf3.charCodeAt(_0x5d09dc);
      }
      let _0x5a0d0e = "";
      for (let _0xbac690 = 0; _0xbac690 < _0x2d3549.length; _0xbac690++) {
        const _0x14a938 = _0x2d3549[_0xbac690].toString(16).padStart(2, "0");
        _0x5a0d0e += _0x14a938;
      }
      return _0x5a0d0e;
    }
    decodeUnicode(_0x458571) {
      {
        _0x458571 = _0x458571.replace(/\\u/g, "%u");
        return unescape(unescape(_0x458571));
      }
    }
    RT(_0x4839e3, _0x2ae2ee) {
      return Math.round(Math.random() * (_0x2ae2ee - _0x4839e3) + _0x4839e3);
    }
    arrNull(_0x4d189a) {
      {
        var _0x15b3b3 = _0x4d189a.filter(_0x25c9af => {
          {
            return _0x25c9af && _0x25c9af.trim();
          }
        });
        return _0x15b3b3;
      }
    }
    nowtime() {
      {
        return new Date(new Date().getTime() + new Date().getTimezoneOffset() * 60 * 1000 + 28800000);
      }
    }
    timecs() {
      let _0x42b766 = $.nowtime();
      if (JSON.stringify(_0x42b766).indexOf(" ") >= 0) {
        {
          _0x42b766 = _0x42b766.replace(" ", "T");
        }
      }
      return new Date(_0x42b766).getTime() - 28800000;
    }
    rtjson(_0x217d79, _0x1ba1e3, _0x3bffdf, _0x287772) {
      {
        if (_0x287772 == 0) {
          {
            return JSON.stringify(_0x217d79.split(_0x1ba1e3).reduce((_0x14756c, _0x334c96) => {
              {
                let _0x6f9ff = _0x334c96.split(_0x3bffdf);
                _0x14756c[_0x6f9ff[0].trim()] = _0x6f9ff[1].trim();
                return _0x14756c;
              }
            }, {}));
          }
        } else {
          return _0x217d79.split(_0x1ba1e3).reduce((_0x52fbfc, _0x1b02c7) => {
            let _0x32da4d = _0x1b02c7.split(_0x3bffdf);
            _0x52fbfc[_0x32da4d[0].trim()] = _0x32da4d[1].trim();
            return _0x52fbfc;
          }, {});
        }
      }
    }
    MD5Encrypt(_0x5d6538, _0x239a0e) {
      if (_0x5d6538 == 0) {
        return this.CryptoJS.MD5(_0x239a0e).toString().toLowerCase();
      } else {
        if (_0x5d6538 == 1) {
          return this.CryptoJS.MD5(_0x239a0e).toString().toUpperCase();
        } else {
          if (_0x5d6538 == 2) {
            {
              return this.CryptoJS.MD5(_0x239a0e).toString().substring(8, 24).toLowerCase();
            }
          } else {
            if (_0x5d6538 == 3) {
              {
                return this.CryptoJS.MD5(_0x239a0e).toString().substring(8, 24).toUpperCase();
              }
            }
          }
        }
      }
    }
    SHA_Encrypt(_0x65e7b8, _0x3c7a36, _0x5aeb70) {
      if (_0x65e7b8 == 0) {
        return this.CryptoJS[_0x3c7a36](_0x5aeb70).toString(this.CryptoJS.enc.Base64);
      } else {
        return this.CryptoJS[_0x3c7a36](_0x5aeb70).toString();
      }
    }
    HmacSHA_Encrypt(_0x3671d1, _0xb6450d, _0x21b1ad, _0x47ae94) {
      {
        if (_0x3671d1 == 0) {
          return this.CryptoJS[_0xb6450d](_0x21b1ad, _0x47ae94).toString(this.CryptoJS.enc.Base64);
        } else {
          return this.CryptoJS[_0xb6450d](_0x21b1ad, _0x47ae94).toString();
        }
      }
    }
    Base64(_0x464c20, _0x268c02) {
      {
        if (_0x464c20 == 0) {
          return this.CryptoJS.enc.Base64.stringify(this.CryptoJS.enc.Utf8.parse(_0x268c02));
        } else {
          return this.CryptoJS.enc.Utf8.stringify(this.CryptoJS.enc.Base64.parse(_0x268c02));
        }
      }
    }
    DecryptCrypto(_0x3fddad, _0x321182, _0x3a7d76, _0x163961, _0xab5384, _0x5e3d2a, _0x23ac62) {
      {
        if (_0x3fddad == 0) {
          const _0x5d5503 = {
            iv: this.CryptoJS.enc.Utf8.parse(_0x23ac62),
            mode: this.CryptoJS.mode[_0x3a7d76],
            padding: this.CryptoJS.pad[_0x163961]
          };
          const _0x1e1bed = this.CryptoJS[_0x321182].encrypt(this.CryptoJS.enc.Utf8.parse(_0xab5384), this.CryptoJS.enc.Utf8.parse(_0x5e3d2a), _0x5d5503);
          return _0x1e1bed.toString();
        } else {
          const _0x39e057 = {
            iv: this.CryptoJS.enc.Utf8.parse(_0x23ac62),
            mode: this.CryptoJS.mode[_0x3a7d76],
            padding: this.CryptoJS.pad[_0x163961]
          };
          const _0x338846 = this.CryptoJS[_0x321182].decrypt(_0xab5384, this.CryptoJS.enc.Utf8.parse(_0x5e3d2a), _0x39e057);
          return _0x338846.toString(this.CryptoJS.enc.Utf8);
        }
      }
    }
    RSA(_0x341af6, _0x3f3717) {
      const _0x175132 = require("node-rsa");
      let _0x1b999e = new _0x175132("-----BEGIN PUBLIC KEY-----\n" + _0x3f3717 + "\n-----END PUBLIC KEY-----");
      const _0x39586b = {
        encryptionScheme: "pkcs1"
      };
      _0x1b999e.setOptions(_0x39586b);
      return _0x1b999e.encrypt(_0x341af6, "base64", "utf8");
    }
    getSHA1withRSA(_0xb527e9) {
      {
        const _0x2ce2da = rs.KEYUTIL.getKey(privateKeyString);
        const _0x55651c = {
          alg: "SHA1withRSA"
        };
        const _0x21f39a = new rs.KJUR.crypto.Signature(_0x55651c);
        _0x21f39a.init(_0x2ce2da);
        _0x21f39a.updateString(_0xb527e9);
        const _0x1e64a7 = _0x21f39a.sign();
        const _0x3a8317 = rs.hextob64u(_0x1e64a7);
        return _0x3a8317;
      }
    }
    hexToBase64(_0x3246b1) {
      {
        const _0x5c9a00 = [];
        for (let _0x38c665 = 0; _0x38c665 < _0x3246b1.length; _0x38c665 += 2) {
          {
            _0x5c9a00.push(parseInt(_0x3246b1.substr(_0x38c665, 2), 16));
          }
        }
        const _0x4b02cb = btoa(String.fromCharCode(..._0x5c9a00));
        return _0x4b02cb;
      }
    }
    Sha1withRsa(_0x2e58f3) {
      const {
        KEYUTIL,
        KJUR,
        b64utoutf8,
        utf8tob64
      } = require("jsrsasign");
      const _0x4246f7 = KEYUTIL.getKey(Key);
      const _0x90cf27 = {
        alg: "SHA1withRSA"
      };
      const _0x16618d = new KJUR.crypto.Signature(_0x90cf27);
      _0x16618d.init(_0x4246f7);
      _0x16618d.updateString(_0x2e58f3);
      const _0xb9dcfb = _0x16618d.sign();
      let _0xe41b78 = $.hexToBase64(_0xb9dcfb);
      return _0xe41b78;
    }
  }();
}