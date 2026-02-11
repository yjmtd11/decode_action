//Wed Feb 11 2026 15:57:47 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
NAME = "优品淘金";
VALY = ["yptjck"];
CK = "";
LOGS = 0;
usid = 0;
nowhour = Math.round(new Date().getHours()).toString();
Notify = 1;
const fs = require("fs");
dcfkey = process.env.dcfkey;
class Bar {
  constructor(_0x1858e4) {
    this._ = ++usid;
    this.f = "账号 [" + this._ + "] ";
    this.phone = $.Base64(0, $.Base64(0, _0x1858e4.split("#")[0]));
    this.pwd = $.Base64(0, $.Base64(0, _0x1858e4.split("#")[1]));
    this.tixian = _0x1858e4.split("#")[2];
    this.message = "";
    this.logs = true;
  }
  async ["login"]() {
    let _0x174264 = $.time(13),
      _0x42cd6c = $.Base64(0, $.Base64(0, _0x174264 + "xiaoyingujtao")),
      _0xc1be42 = {
        "tm": _0x174264,
        "sign": _0x42cd6c
      },
      _0x1f9e19 = "{\"mobile\":\"" + this.phone + "\",\"password\":\"" + this.pwd + "\"}",
      _0x32da4e = await $.task("post", "https://mall.ujtao.com/app_mallapi/user/userLogin", _0xc1be42, _0x1f9e19);
    _0x32da4e.code == 0 ? (this.authorization = _0x32da4e.data.token, this.logs = true, await this.userinfo()) : this.logs = false;
  }
  async ["userinfo"]() {
    let _0xd5ab5e = {
        "authorization": this.authorization
      },
      _0x47278f = await $.task("get", "https://mall.ujtao.com/app_mallapi/user/userInfo", _0xd5ab5e);
    if (_0x47278f.code == 0) {
      this.names = _0x47278f.data.nickName;
      console.log("【" + this.names + "】登陆成功==>当前金币" + _0x47278f.data.jbBalance);
      this.message += "【" + this.names + "】登陆成功==>当前金币" + _0x47278f.data.jbBalance;
      if (_0x47278f.data.jbBalance >= 139) {
        if (nowhour == 10 || nowhour == 14 || nowhour == 18) {
          if (this.tixian == 1) await this.txlb();else this.tixian == 2 && (await this.txlb2());
        }
      }
    }
  }
  async ["tasklist"]() {
    let _0x57d44b = {
        "authorization": this.authorization
      },
      _0x1c5c62 = await $.task("get", "https://mall.ujtao.com/app_mallapi/mallapp/goldrush/getgoldRushList", _0x57d44b);
    for (let _0xbac734 = 0; _0xbac734 < _0x1c5c62.data.length; _0xbac734++) {
      for (let _0xf22b6a of _0x1c5c62.data[_0xbac734].goldRushList) {
        _0xf22b6a.isComplete == 0 && (this.name = _0xf22b6a.name, this.id = _0xf22b6a.id, await this.task(this.name, this.id), await this.taskfb(this.name, this.id));
      }
    }
  }
  async ["task"](_0x23c8fd, _0x497904) {
    let _0x356968 = {
        "authorization": this.authorization
      },
      _0x2f7f5f = "{\"id\":\"" + _0x497904 + "\"}",
      _0xc8784d = await $.task("post", "https://mall.ujtao.com/app_mallapi/mallapp/goldrush/goldRushReceiveGoldCoins", _0x356968, _0x2f7f5f);
    console.log("【" + this.names + "】完成" + _0x23c8fd + "任务");
    await $.wait(10000);
  }
  async ["taskfb"](_0x43f23b, _0x37e1b7) {
    let _0x152de1 = {
        "authorization": this.authorization
      },
      _0x1f428c = "{\"id\":\"" + _0x37e1b7 + "\"}",
      _0x538b46 = await $.task("post", "https://mall.ujtao.com/app_mallapi/mallapp/goldrush/goldRushWatchVideoAward", _0x152de1, _0x1f428c);
    console.log("【" + this.names + "】完成" + _0x43f23b + "视频任务");
    await $.wait(10000);
  }
  async ["signtask"]() {
    for (let _0x5e95fd = 0; _0x5e95fd < 4; _0x5e95fd++) {
      let _0x140b67 = {
          "authorization": this.authorization
        },
        _0x251d60 = await $.task("get", "https://mall.ujtao.com/app_mallapi/usersign/sign?signSource=1", _0x140b67);
      if (_0x251d60.code == 0) console.log("【" + this.names + "】完成签到任务"), await $.wait(5000), await this.signtaskfb();else {}
    }
  }
  async ["signtaskfb"]() {
    let _0x4a2155 = {
        "authorization": this.authorization
      },
      _0x239af5 = await $.task("get", "https://mall.ujtao.com/app_mallapi/usersign/receiveSignWatchVideoAward", _0x4a2155);
    console.log("【" + this.names + "】完成签到视频任务");
    await $.wait(10000);
  }
  async ["txlb"]() {
    let _0xecaa0f = {
        "authorization": this.authorization,
        "content-type": "application/json; charset=UTF-8"
      },
      _0x2150a5 = "{\"appType\":\"2\",\"error\":\"提现界面#百度：备用广告拉取\"}",
      _0x2d7fc7 = await $.task("post", "https://mall.ujtao.com/app_mallapi/userSignexceptionlog/save", _0xecaa0f, _0x2150a5);
    await this.tx();
  }
  async ["tx"]() {
    let _0x2172c8 = {
        "authorization": this.authorization,
        "content-type": "application/json; charset=UTF-8"
      },
      _0x2d0bdf = "{\"goldAmount\":\"138.00\",\"type\":\"0\",\"withdrawType\":\"0\"}",
      _0x471eb2 = await $.task("post", "https://mall.ujtao.com/app_mallapi/wxAuth/sys2accsNew", _0x2172c8, _0x2d0bdf);
    if (_0x471eb2.code == 0) console.log("【" + this.names + "】提现成功"), await $.wait(30000), await this.txwc();else {
      console.log("【" + this.names + "】提现失败," + _0x471eb2.msg);
    }
  }
  async ["txwc"]() {
    let _0x185226 = {
        "authorization": this.authorization,
        "content-type": "application/json; charset=UTF-8"
      },
      _0xeaffc4 = await $.task("get", "https://mall.ujtao.com/app_mallapi/ad2/action?action=4&adNo=G20230428000007&client=2", _0x185226);
  }
  async ["txlb2"]() {
    let _0x38b54e = {
        "authorization": this.authorization,
        "content-type": "application/json; charset=UTF-8"
      },
      _0x3d159f = "{\"appType\":\"2\",\"error\":\"提现界面#百度：备用广告拉取\"}",
      _0x5f4973 = await $.task("post", "https://mall.ujtao.com/app_mallapi/userSignexceptionlog/save", _0x38b54e, _0x3d159f);
    await this.tx2();
  }
  async ["tx2"]() {
    let _0x1e4a0a = {
        "authorization": this.authorization,
        "content-type": "application/json; charset=UTF-8"
      },
      _0x163743 = "{\"goldAmount\":\"138.00\",\"type\":\"0\",\"withdrawType\":\"0\"}",
      _0x38721b = await $.task("post", "https://mall.ujtao.com/app_mallapi/alipay/sys2accsNew", _0x1e4a0a, _0x163743);
    if (_0x38721b.code == 0) console.log("【" + this.names + "】提现成功"), await $.wait(30000), await this.txwc();else {
      console.log("【" + this.names + "】提现失败," + _0x38721b.msg);
    }
  }
}
$ = DD();
!(async () => {
  console.log(NAME);
  console.log(await $.getnotify());
  kami = await $.getkami();
  if (kami.delete == 1) {
    let _0x4b8198 = require("path"),
      _0x56b3dc = _0x4b8198.basename(__filename);
    console.log("帮你删除 脚本文件[" + _0x56b3dc + "]");
    fs.unlink(_0x56b3dc, _0x46f241 => {});
    return;
  } else {
    {
      console.log("正在验证脚本...... 小主的卡密有效期到：" + (await $.cxkm()));
      TSdata = $.time(13);
      if (TSdata <= kami.data) {
        {
          console.log("验证通过，开始执行脚本");
          await $.ExamineCookie();
          if ($.cookie_list.length < 21) {
            await $.Multithreading("login");
            let _0x28ed46 = $.cookie_list.filter(_0x57e6af => _0x57e6af.logs == true);
            if (_0x28ed46.length == 0) {
              {
                console.log("Cookie格式错误 或 账号被禁封");
                return;
              }
            } else await $.Multithreading("tasklist"), await $.Multithreading("signtask");
          } else console.log("账号数量超过限制，请减少账号数量后重试！");
        }
      } else {
        {
          console.log("验证失败，无法执行,正在删除脚本,获取正确卡密后重试");
          let _0x5e4f3b = require("path"),
            _0x98c00a = _0x5e4f3b.basename(__filename);
          console.log("帮你删除 脚本文件[" + _0x98c00a + "]");
          fs.unlink(_0x98c00a, _0x4cb7c2 => {});
        }
      }
    }
  }
  let _0x1b4f18 = [];
  for (let _0x142598 of $.cookie_list) {
    if (_0x142598.message) _0x1b4f18.push(_0x142598.message);
  }
  if (_0x1b4f18.length > 0) await $.SendMsg(_0x1b4f18.join("\n"));
})().catch(_0x27a5fd => {
  console.log(_0x27a5fd);
}).finally(() => {});
function DD() {
  return new class {
    constructor() {
      this.cookie_list = [];
      this.message = "";
      this.CryptoJS = require("crypto-js");
      this.NodeRSA = require("node-rsa");
      this.request = require("request");
      this.Sha_Rsa = require("jsrsasign");
    }
    async ["Multithreading"](_0x48010f, _0x133a71, _0x1b0657) {
      let _0xcb3fa2 = [];
      !_0x1b0657 && (_0x1b0657 = 1);
      while (_0x1b0657--) {
        for (let _0x43c8d0 of $.cookie_list) {
          _0xcb3fa2.push(_0x43c8d0[_0x48010f](_0x133a71));
        }
      }
      await Promise.allSettled(_0xcb3fa2);
    }
    ["ExamineCookie"]() {
      let _0x2f2e30 = process.env[VALY] || CK,
        _0x419ed9 = 0;
      if (_0x2f2e30) {
        {
          for (let _0x45dd70 of _0x2f2e30.split("\n").filter(_0x5dabea => !!_0x5dabea)) {
            $.cookie_list.push(new Bar(_0x45dd70));
          }
          _0x419ed9 = $.cookie_list.length;
        }
      } else console.log("\n【" + NAME + "】：未填写变量: " + VALY);
      console.log("共找到" + _0x419ed9 + "个账号");
      return $.cookie_list;
    }
    ["task"](_0x15f927, _0x51d95f, _0x1efd3e, _0x30460b, _0x230948) {
      _0x15f927 == "delete" ? _0x15f927 = _0x15f927.toUpperCase() : _0x15f927 = _0x15f927;
      if (_0x15f927 == "post") {
        delete _0x1efd3e["content-type"];
        delete _0x1efd3e["Content-type"];
        delete _0x1efd3e["content-Type"];
        if ($.safeGet(_0x30460b)) _0x1efd3e["Content-Type"] = "application/json;charset=UTF-8";else {
          _0x1efd3e["Content-Type"] = "application/x-www-form-urlencoded";
        }
        if (_0x30460b) {
          _0x1efd3e["Content-Length"] = $.lengthInUtf8Bytes(_0x30460b);
        }
      }
      _0x15f927 == "get" && (delete _0x1efd3e["content-type"], delete _0x1efd3e["Content-type"], delete _0x1efd3e["content-Type"], delete _0x1efd3e["Content-Length"]);
      _0x1efd3e.Host = _0x51d95f.replace("//", "/").split("/")[1];
      return new Promise(async _0x4af8eb => {
        if (_0x15f927.indexOf("T") < 0) var _0x7c2774 = {
          "url": _0x51d95f,
          "headers": _0x1efd3e,
          "body": _0x30460b,
          "proxy": "http://" + _0x230948
        };else var _0x7c2774 = {
          "url": _0x51d95f,
          "headers": _0x1efd3e,
          "form": JSON.parse(_0x30460b),
          "proxy": "http://" + _0x230948
        };
        !_0x230948 && delete _0x7c2774.proxy;
        this.request[_0x15f927.toLowerCase()](_0x7c2774, (_0x2faec1, _0x423bd5, _0x5934ca) => {
          try {
            if (_0x5934ca) {
              if (LOGS == 1) {
                console.log("================ 请求 ================");
                console.log(_0x7c2774);
                console.log("================ 返回 ================");
                $.safeGet(_0x5934ca) ? console.log(JSON.parse(_0x5934ca)) : console.log(_0x5934ca);
              }
            }
          } catch (_0x139ea8) {
            console.log(_0x139ea8, _0x51d95f + "\n" + _0x1efd3e);
          } finally {
            {
              let _0x269cea = "";
              if (!_0x2faec1) {
                if ($.safeGet(_0x5934ca)) _0x269cea = JSON.parse(_0x5934ca);else {
                  if (_0x5934ca.indexOf("/") != -1 && _0x5934ca.indexOf("+") != -1) {
                    _0x269cea = _0x5934ca;
                  } else _0x269cea = _0x5934ca;
                }
              } else _0x269cea = _0x51d95f + "   API请求失败，请检查网络重试\n" + _0x2faec1;
              return _0x4af8eb(_0x269cea);
            }
          }
        });
      });
    }
    async ["getkami"]() {
      dcfkey = process.env.dcfkey;
      let _0x4316af = {
          "Host": "gitee.com",
          "User-Agent": "Mozilla/5.0 (Linux; U; Android 12; zh-cn; M2102J2SC Build/SKQ1.211006.001) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1"
        },
        _0x3b7520 = await $.task("get", "https://gitee.com/danchaofan112138/data/raw/master/kami.json", _0x4316af);
      const _0x24cbf7 = _0x3b7520.vip;
      var _0x3ef77c = _0x24cbf7,
        _0xab0c92 = dcfkey,
        _0x3e922c = {};
      JSON.stringify(_0x24cbf7).indexOf(dcfkey) != -1 && _0x3ef77c.map((_0x4a1bcc, _0x9d007f) => {
        _0xab0c92 === _0x4a1bcc.name && (_0x3e922c = _0x4a1bcc);
      });
      return _0x3e922c;
    }
    async ["cxkm"]() {
      {
        var _0x1ea2ee = await $.getkami();
        let _0x2f9901 = new Date(parseInt(_0x1ea2ee.data)),
          _0x314654 = _0x2f9901.getFullYear() + "-",
          _0x1255e1 = (_0x2f9901.getMonth() + 1 < 10 ? "0" + (_0x2f9901.getMonth() + 1) : _0x2f9901.getMonth() + 1) + "-",
          _0x5143b2 = _0x2f9901.getDate() + " ",
          _0x51b698 = _0x2f9901.getHours() + ":",
          _0xa5339b = _0x2f9901.getMinutes() + ":",
          _0x2241c7 = _0x2f9901.getSeconds() + 1 < 10 ? "0" + _0x2f9901.getSeconds() : _0x2f9901.getSeconds(),
          _0x3fd4a5 = _0x314654 + _0x1255e1 + _0x5143b2 + _0x51b698 + _0xa5339b + _0x2241c7;
        return _0x3fd4a5;
      }
    }
    async ["getnotify"]() {
      let _0x8f329d = {
          "Host": "gitee.com",
          "User-Agent": "Mozilla/5.0 (Linux; U; Android 12; zh-cn; M2102J2SC Build/SKQ1.211006.001) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1"
        },
        _0x14d16e = await $.task("get", "https://gitee.com/danchaofan112138/data/raw/master/notify.json", _0x8f329d);
      const _0x30774f = _0x14d16e.notify;
      return _0x30774f;
    }
    async ["SendMsg"](_0x3bce3a) {
      if (!_0x3bce3a) return;
      if (Notify == 1) {
        var _0x3c816b = require("./sendNotify");
        await _0x3c816b.sendNotify(NAME, _0x3bce3a);
      } else {}
    }
    ["lengthInUtf8Bytes"](_0x41dee5) {
      let _0x2a07ec = encodeURIComponent(_0x41dee5).match(/%[89ABab]/g);
      return _0x41dee5.length + (_0x2a07ec ? _0x2a07ec.length : 0);
    }
    ["randomArr"](_0x52ce63) {
      return _0x52ce63[parseInt(Math.random() * _0x52ce63.length, 10)];
    }
    ["wait"](_0x29e4c3) {
      return new Promise(_0xe8eab9 => setTimeout(_0xe8eab9, _0x29e4c3));
    }
    ["time"](_0x1a3115) {
      if (_0x1a3115 == 10) {
        return Math.round(+new Date() / 1000);
      } else return +new Date();
    }
    ["timenow"](_0x4b061c) {
      {
        let _0x2ce3f5 = new Date();
        if (_0x4b061c == undefined) {
          let _0x157b9a = new Date(),
            _0x1c542f = _0x157b9a.getFullYear() + "-",
            _0x3df673 = (_0x157b9a.getMonth() + 1 < 10 ? "0" + (_0x157b9a.getMonth() + 1) : _0x157b9a.getMonth() + 1) + "-",
            _0x1d4982 = _0x157b9a.getDate() + " ",
            _0x58ad62 = _0x157b9a.getHours() + ":",
            _0x3dbc81 = _0x157b9a.getMinutes() + ":",
            _0x376268 = _0x157b9a.getSeconds() + 1 < 10 ? "0" + _0x157b9a.getSeconds() : _0x157b9a.getSeconds();
          return _0x1c542f + _0x3df673 + _0x1d4982 + _0x58ad62 + _0x3dbc81 + _0x376268;
        } else {
          if (_0x4b061c == 0) return _0x2ce3f5.getFullYear();else {
            if (_0x4b061c == 1) return _0x2ce3f5.getMonth() + 1 < 10 ? "0" + (_0x2ce3f5.getMonth() + 1) : _0x2ce3f5.getMonth() + 1;else {
              if (_0x4b061c == 2) {
                return _0x2ce3f5.getDate();
              } else {
                if (_0x4b061c == 3) return _0x2ce3f5.getHours();else {
                  if (_0x4b061c == 4) return _0x2ce3f5.getMinutes();else {
                    if (_0x4b061c == 5) return _0x2ce3f5.getSeconds() + 1 < 10 ? "0" + _0x2ce3f5.getSeconds() : _0x2ce3f5.getSeconds();
                  }
                }
              }
            }
          }
        }
      }
    }
    ["safeGet"](_0x1fa026) {
      try {
        if (typeof JSON.parse(_0x1fa026) == "object") {
          return true;
        }
      } catch (_0x3da90b) {
        return false;
      }
    }
    ["SJS"](_0x4e76bf, _0x3bceb1) {
      {
        if (_0x3bceb1 == 0) {
          {
            let _0x863ef3 = "QWERTYUIOPASDFGHJKLZXCVBNM01234567890123456789",
              _0x435b50 = _0x863ef3.length,
              _0x3a1aba = "";
            for (let _0x175155 = 0; _0x175155 < _0x4e76bf; _0x175155++) {
              _0x3a1aba += _0x863ef3.charAt(Math.floor(Math.random() * _0x435b50));
            }
            return _0x3a1aba;
          }
        } else {
          if (_0x3bceb1 == 1) {
            {
              let _0x4f3c94 = "qwertyuiopasdfghjklzxcvbnm0123456789",
                _0x31d7e9 = _0x4f3c94.length,
                _0x56dece = "";
              for (let _0x555b9d = 0; _0x555b9d < _0x4e76bf; _0x555b9d++) {
                _0x56dece += _0x4f3c94.charAt(Math.floor(Math.random() * _0x31d7e9));
              }
              return _0x56dece;
            }
          } else {
            {
              let _0x59067d = "0123456789",
                _0x16fe01 = _0x59067d.length,
                _0xec3298 = "";
              for (let _0x149c61 = 0; _0x149c61 < _0x4e76bf; _0x149c61++) {
                _0xec3298 += _0x59067d.charAt(Math.floor(Math.random() * _0x16fe01));
              }
              return _0xec3298;
            }
          }
        }
      }
    }
    ["udid"](_0x204c0b) {
      function _0x398974() {
        return ((1 + Math.random()) * 65536 | 0).toString(16).substring(1);
      }
      let _0x2ea62e = _0x398974() + _0x398974() + "-" + _0x398974() + "-" + _0x398974() + "-" + _0x398974() + "-" + _0x398974() + _0x398974() + _0x398974();
      return _0x204c0b == 0 ? _0x2ea62e.toUpperCase() : _0x2ea62e.toLowerCase();
    }
    ["encodeUnicode"](_0x943c21) {
      var _0x14d8df = [];
      for (var _0x387772 = 0; _0x387772 < _0x943c21.length; _0x387772++) {
        _0x14d8df[_0x387772] = ("00" + _0x943c21.charCodeAt(_0x387772).toString(16)).slice(-4);
      }
      return "\\u" + _0x14d8df.join("\\u");
    }
    ["decodeUnicode"](_0xb444f4) {
      _0xb444f4 = _0xb444f4.replace(/\u/g, "%u");
      return unescape(unescape(_0xb444f4));
    }
    ["RT"](_0x1ff867, _0x4a46cb) {
      return Math.round(Math.random() * (_0x4a46cb - _0x1ff867) + _0x1ff867);
    }
    ["arrNull"](_0x92e799) {
      {
        var _0x364586 = _0x92e799.filter(_0x3f4fd9 => {
          return _0x3f4fd9 && _0x3f4fd9.trim();
        });
        return _0x364586;
      }
    }
    ["nowtime"]() {
      return new Date(new Date().getTime() + new Date().getTimezoneOffset() * 60 * 1000 + 28800000);
    }
    ["timecs"]() {
      let _0xa3d29c = $.nowtime();
      if (JSON.stringify(_0xa3d29c).indexOf(" ") >= 0) {
        _0xa3d29c = _0xa3d29c.replace(" ", "T");
      }
      return new Date(_0xa3d29c).getTime() - 28800000;
    }
    ["rtjson"](_0x1adc3f, _0x4d3492, _0xa6539b, _0x52d37d) {
      if (_0x52d37d == 0) {
        return JSON.stringify(_0x1adc3f.split(_0x4d3492).reduce((_0x228cb5, _0x55b7ff) => {
          let _0x48fb4a = _0x55b7ff.split(_0xa6539b);
          _0x228cb5[_0x48fb4a[0].trim()] = _0x48fb4a[1].trim();
          return _0x228cb5;
        }, {}));
      } else {
        return _0x1adc3f.split(_0x4d3492).reduce((_0xe69eaf, _0x5e50d4) => {
          let _0x11ab81 = _0x5e50d4.split(_0xa6539b);
          _0xe69eaf[_0x11ab81[0].trim()] = _0x11ab81[1].trim();
          return _0xe69eaf;
        }, {});
      }
    }
    ["MD5Encrypt"](_0x446bae, _0x1e9748) {
      if (_0x446bae == 0) return this.CryptoJS.MD5(_0x1e9748).toString().toLowerCase();else {
        if (_0x446bae == 1) {
          return this.CryptoJS.MD5(_0x1e9748).toString().toUpperCase();
        } else {
          if (_0x446bae == 2) {
            return this.CryptoJS.MD5(_0x1e9748).toString().substring(8, 24).toLowerCase();
          } else {
            if (_0x446bae == 3) return this.CryptoJS.MD5(_0x1e9748).toString().substring(8, 24).toUpperCase();
          }
        }
      }
    }
    ["SHA_Encrypt"](_0x5ca2f8, _0x2cfddb, _0x510975) {
      return _0x5ca2f8 == 0 ? this.CryptoJS[_0x2cfddb](_0x510975).toString(this.CryptoJS.enc.Base64) : this.CryptoJS[_0x2cfddb](_0x510975).toString();
    }
    ["HmacSHA_Encrypt"](_0xbe3ecb, _0x29596c, _0x1a9808, _0x2e9c78) {
      {
        if (_0xbe3ecb == 0) return this.CryptoJS[_0x29596c](_0x1a9808, _0x2e9c78).toString(this.CryptoJS.enc.Base64);else {
          return this.CryptoJS[_0x29596c](_0x1a9808, _0x2e9c78).toString();
        }
      }
    }
    ["Base64"](_0x556c76, _0x568d47) {
      return _0x556c76 == 0 ? this.CryptoJS.enc.Base64.stringify(this.CryptoJS.enc.Utf8.parse(_0x568d47)) : this.CryptoJS.enc.Utf8.stringify(this.CryptoJS.enc.Base64.parse(_0x568d47));
    }
    ["DecryptCrypto"](_0x2c2dea, _0x2b5988, _0x3440d7, _0x1f98ff, _0x14b5d3, _0x5722f5, _0x59fbc2) {
      {
        if (_0x2c2dea == 0) {
          const _0x5bd2bb = this.CryptoJS[_0x2b5988].encrypt(this.CryptoJS.enc.Utf8.parse(_0x14b5d3), this.CryptoJS.enc.Utf8.parse(_0x5722f5), {
            "iv": this.CryptoJS.enc.Utf8.parse(_0x59fbc2),
            "mode": this.CryptoJS.mode[_0x3440d7],
            "padding": this.CryptoJS.pad[_0x1f98ff]
          });
          return _0x5bd2bb.toString();
        } else {
          const _0x51313f = this.CryptoJS[_0x2b5988].decrypt(_0x14b5d3, this.CryptoJS.enc.Utf8.parse(_0x5722f5), {
            "iv": this.CryptoJS.enc.Utf8.parse(_0x59fbc2),
            "mode": this.CryptoJS.mode[_0x3440d7],
            "padding": this.CryptoJS.pad[_0x1f98ff]
          });
          return _0x51313f.toString(this.CryptoJS.enc.Utf8);
        }
      }
    }
    ["RSA"](_0x542965, _0x58e9d3) {
      const _0x126c13 = require("node-rsa");
      let _0xa27874 = new _0x126c13("-----BEGIN PUBLIC KEY-----\n" + _0x58e9d3 + "\n-----END PUBLIC KEY-----");
      _0xa27874.setOptions({
        "encryptionScheme": "pkcs1"
      });
      return _0xa27874.encrypt(_0x542965, "base64", "utf8");
    }
    ["SHA_RSA"](_0x36e228, _0xc9aacd) {
      {
        let _0x31b00f = this.Sha_Rsa.KEYUTIL.getKey("-----BEGIN PRIVATE KEY-----\n" + $.getNewline(_0xc9aacd, 76) + "\n-----END PRIVATE KEY-----"),
          _0x92b2f0 = new this.Sha_Rsa.KJUR.crypto.Signature({
            "alg": "SHA256withRSA"
          });
        _0x92b2f0.init(_0x31b00f);
        _0x92b2f0.updateString(_0x36e228);
        let _0x43e96a = _0x92b2f0.sign(),
          _0x21e1c5 = this.Sha_Rsa.hextob64u(_0x43e96a);
        return _0x21e1c5;
      }
    }
  }();
}