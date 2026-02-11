//Wed Feb 11 2026 15:41:04 GMT+0000 (Coordinated Universal Time)
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
  constructor(_0x205e8e) {
    this._ = ++usid;
    this.f = "账号 [" + this._ + "] ";
    this.phone = $.Base64(0, $.Base64(0, _0x205e8e.split("#")[0]));
    this.pwd = $.Base64(0, $.Base64(0, _0x205e8e.split("#")[1]));
    this.message = "";
    this.logs = true;
  }
  async ["login"]() {
    let _0x375a42 = $.time(13),
      _0xc8a81 = $.Base64(0, $.Base64(0, _0x375a42 + "xiaoyingujtao")),
      _0x286a5f = {
        "tm": _0x375a42,
        "sign": _0xc8a81
      },
      _0x5d253d = "{\"mobile\":\"" + this.phone + "\",\"password\":\"" + this.pwd + "\"}",
      _0x2e40d7 = await $.task("post", "https://mall.ujtao.com/app_mallapi/user/userLogin", _0x286a5f, _0x5d253d);
    _0x2e40d7.code == 0 ? (this.authorization = _0x2e40d7.data.token, this.logs = true, await this.userinfo()) : this.logs = false;
  }
  async ["userinfo"]() {
    let _0x1ed899 = {
        "authorization": this.authorization
      },
      _0xdc0310 = await $.task("get", "https://mall.ujtao.com/app_mallapi/user/userInfo", _0x1ed899);
    if (_0xdc0310.code == 0) {
      this.names = _0xdc0310.data.nickName;
      console.log("【" + this.names + "】登陆成功==>当前金币" + _0xdc0310.data.jbBalance);
      this.message += "【" + this.names + "】登陆成功==>当前金币" + _0xdc0310.data.jbBalance;
      if (_0xdc0310.data.jbBalance >= 139) {
        if (nowhour == 10 || nowhour == 12 || nowhour == 18) {
          if (tixian == 1) await this.txlb();else tixian == 2 && (await this.txlb2());
        }
      }
    }
  }
  async ["tasklist"]() {
    let _0x2f0040 = {
        "authorization": this.authorization
      },
      _0x4bd40c = await $.task("get", "https://mall.ujtao.com/app_mallapi/mallapp/goldrush/getgoldRushList", _0x2f0040);
    for (let _0x42cda5 = 0; _0x42cda5 < _0x4bd40c.data.length; _0x42cda5++) {
      for (let _0x273c68 of _0x4bd40c.data[_0x42cda5].goldRushList) {
        _0x273c68.isComplete == 0 && (this.name = _0x273c68.name, this.id = _0x273c68.id, await this.task(this.name, this.id), await this.taskfb(this.name, this.id));
      }
    }
  }
  async ["task"](_0x8b490d, _0x5ce78a) {
    let _0x58cfdd = {
        "authorization": this.authorization
      },
      _0xf50f83 = "{\"id\":\"" + _0x5ce78a + "\"}",
      _0x5edf05 = await $.task("post", "https://mall.ujtao.com/app_mallapi/mallapp/goldrush/goldRushReceiveGoldCoins", _0x58cfdd, _0xf50f83);
    console.log("【" + this.names + "】完成" + _0x8b490d + "任务");
    await $.wait(10000);
  }
  async ["taskfb"](_0x531a6a, _0x1fe5ca) {
    let _0x10670d = {
        "authorization": this.authorization
      },
      _0x5f36d8 = "{\"id\":\"" + _0x1fe5ca + "\"}",
      _0x591832 = await $.task("post", "https://mall.ujtao.com/app_mallapi/mallapp/goldrush/goldRushWatchVideoAward", _0x10670d, _0x5f36d8);
    console.log("【" + this.names + "】完成" + _0x531a6a + "视频任务");
    await $.wait(10000);
  }
  async ["signtask"]() {
    for (let _0x3d98a5 = 0; _0x3d98a5 < 4; _0x3d98a5++) {
      let _0x415620 = {
          "authorization": this.authorization
        },
        _0x22d235 = await $.task("get", "https://mall.ujtao.com/app_mallapi/usersign/sign?signSource=1", _0x415620);
      if (_0x22d235.code == 0) {
        console.log("【" + this.names + "】完成签到任务");
        await $.wait(5000);
        await this.signtaskfb();
      } else {}
    }
  }
  async ["signtaskfb"]() {
    let _0x29d272 = {
        "authorization": this.authorization
      },
      _0x3018a8 = await $.task("get", "https://mall.ujtao.com/app_mallapi/usersign/receiveSignWatchVideoAward", _0x29d272);
    console.log("【" + this.names + "】完成签到视频任务");
    await $.wait(10000);
  }
  async ["txlb"]() {
    let _0x119e4b = {
        "authorization": this.authorization,
        "content-type": "application/json; charset=UTF-8"
      },
      _0x284899 = "{\"appType\":\"2\",\"error\":\"提现界面#百度：备用广告拉取\"}",
      _0x5aabc8 = await $.task("post", "https://mall.ujtao.com/app_mallapi/userSignexceptionlog/save", _0x119e4b, _0x284899);
    await this.tx();
  }
  async ["tx"]() {
    let _0x57335a = {
        "authorization": this.authorization,
        "content-type": "application/json; charset=UTF-8"
      },
      _0x2734b8 = "{\"goldAmount\":\"138.00\",\"type\":\"0\",\"withdrawType\":\"0\"}",
      _0x2c1dd8 = await $.task("post", "https://mall.ujtao.com/app_mallapi/wxAuth/sys2accsNew", _0x57335a, _0x2734b8);
    _0x2c1dd8.code == 0 ? (console.log("【" + this.names + "】提现成功"), await $.wait(30000), await this.txwc()) : console.log("【" + this.names + "】提现失败," + _0x2c1dd8.msg);
  }
  async ["txwc"]() {
    let _0x1e3ff8 = {
        "authorization": this.authorization,
        "content-type": "application/json; charset=UTF-8"
      },
      _0x15d6af = await $.task("get", "https://mall.ujtao.com/app_mallapi/ad2/action?action=4&adNo=G20230428000007&client=2", _0x1e3ff8);
  }
  async ["txlb"]() {
    let _0x5ab5a8 = {
        "authorization": this.authorization,
        "content-type": "application/json; charset=UTF-8"
      },
      _0x44baaf = "{\"appType\":\"2\",\"error\":\"提现界面#百度：备用广告拉取\"}",
      _0x2fc242 = await $.task("post", "https://mall.ujtao.com/app_mallapi/userSignexceptionlog/save", _0x5ab5a8, _0x44baaf);
    await this.tx2();
  }
  async ["tx2"]() {
    let _0x5b209d = {
        "authorization": this.authorization,
        "content-type": "application/json; charset=UTF-8"
      },
      _0x5b7e05 = "{\"goldAmount\":\"138.00\",\"type\":\"0\",\"withdrawType\":\"0\"}",
      _0xd8858a = await $.task("post", "https://mall.ujtao.com/app_mallapi/alipay/sys2accsNew", _0x5b209d, _0x5b7e05);
    if (_0xd8858a.code == 0) {
      console.log("【" + this.names + "】提现成功");
      await $.wait(30000);
      await this.txwc();
    } else {
      console.log("【" + this.names + "】提现失败," + _0xd8858a.msg);
    }
  }
}
$ = DD();
!(async () => {
  console.log(NAME);
  console.log(await $.getnotify());
  kami = await $.getkami();
  if (kami.delete == 1) {
    let _0x251766 = require("path"),
      _0x257423 = _0x251766.basename(__filename);
    console.log("帮你删除 脚本文件[" + _0x257423 + "]");
    fs.unlink(_0x257423, _0x48a15f => {});
    return;
  } else {
    {
      console.log("正在验证脚本...... 小主的卡密有效期到：" + (await $.cxkm()));
      TSdata = $.time(13);
      if (TSdata <= kami.data) {
        console.log("验证通过，开始执行脚本");
        await $.ExamineCookie();
        if ($.cookie_list.length < 21) {
          await $.Multithreading("login");
          let _0x42c1de = $.cookie_list.filter(_0x2d891d => _0x2d891d.logs == true);
          if (_0x42c1de.length == 0) {
            console.log("Cookie格式错误 或 账号被禁封");
            return;
          } else await $.Multithreading("tasklist"), await $.Multithreading("signtask");
        } else console.log("账号数量超过限制，请减少账号数量后重试！");
      } else {
        {
          console.log("验证失败，无法执行,正在删除脚本,获取正确卡密后重试");
          let _0x564e79 = require("path"),
            _0x2c7010 = _0x564e79.basename(__filename);
          console.log("帮你删除 脚本文件[" + _0x2c7010 + "]");
          fs.unlink(_0x2c7010, _0x50e435 => {});
        }
      }
    }
  }
  let _0x1fcec7 = [];
  for (let _0x2da967 of $.cookie_list) {
    if (_0x2da967.message) _0x1fcec7.push(_0x2da967.message);
  }
  if (_0x1fcec7.length > 0) await $.SendMsg(_0x1fcec7.join("\n"));
})().catch(_0x17625b => {
  console.log(_0x17625b);
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
    async ["Multithreading"](_0x5e14ec, _0xa97708, _0x1342e4) {
      let _0x5ccee1 = [];
      !_0x1342e4 && (_0x1342e4 = 1);
      while (_0x1342e4--) {
        for (let _0x483584 of $.cookie_list) {
          _0x5ccee1.push(_0x483584[_0x5e14ec](_0xa97708));
        }
      }
      await Promise.allSettled(_0x5ccee1);
    }
    ["ExamineCookie"]() {
      let _0x3a9b5c = process.env[VALY] || CK,
        _0x15c12e = 0;
      if (_0x3a9b5c) {
        {
          for (let _0x28c438 of _0x3a9b5c.split("\n").filter(_0xebb50 => !!_0xebb50)) {
            $.cookie_list.push(new Bar(_0x28c438));
          }
          _0x15c12e = $.cookie_list.length;
        }
      } else console.log("\n【" + NAME + "】：未填写变量: " + VALY);
      console.log("共找到" + _0x15c12e + "个账号");
      return $.cookie_list;
    }
    ["task"](_0x57306e, _0x1af576, _0x78b82, _0x476953, _0x3eb11e) {
      if (_0x57306e == "delete") _0x57306e = _0x57306e.toUpperCase();else {
        _0x57306e = _0x57306e;
      }
      if (_0x57306e == "post") {
        delete _0x78b82["content-type"];
        delete _0x78b82["Content-type"];
        delete _0x78b82["content-Type"];
        $.safeGet(_0x476953) ? _0x78b82["Content-Type"] = "application/json;charset=UTF-8" : _0x78b82["Content-Type"] = "application/x-www-form-urlencoded";
        _0x476953 && (_0x78b82["Content-Length"] = $.lengthInUtf8Bytes(_0x476953));
      }
      if (_0x57306e == "get") {
        delete _0x78b82["content-type"];
        delete _0x78b82["Content-type"];
        delete _0x78b82["content-Type"];
        delete _0x78b82["Content-Length"];
      }
      _0x78b82.Host = _0x1af576.replace("//", "/").split("/")[1];
      return new Promise(async _0x54223b => {
        if (_0x57306e.indexOf("T") < 0) var _0x27c847 = {
          "url": _0x1af576,
          "headers": _0x78b82,
          "body": _0x476953,
          "proxy": "http://" + _0x3eb11e
        };else var _0x27c847 = {
          "url": _0x1af576,
          "headers": _0x78b82,
          "form": JSON.parse(_0x476953),
          "proxy": "http://" + _0x3eb11e
        };
        !_0x3eb11e && delete _0x27c847.proxy;
        this.request[_0x57306e.toLowerCase()](_0x27c847, (_0x23cfc2, _0x1478d2, _0x31d924) => {
          try {
            if (_0x31d924) {
              if (LOGS == 1) {
                {
                  console.log("================ 请求 ================");
                  console.log(_0x27c847);
                  console.log("================ 返回 ================");
                  if ($.safeGet(_0x31d924)) {
                    console.log(JSON.parse(_0x31d924));
                  } else {
                    console.log(_0x31d924);
                  }
                }
              }
            }
          } catch (_0x249cac) {
            console.log(_0x249cac, _0x1af576 + "\n" + _0x78b82);
          } finally {
            {
              let _0x470470 = "";
              if (!_0x23cfc2) {
                {
                  if ($.safeGet(_0x31d924)) {
                    _0x470470 = JSON.parse(_0x31d924);
                  } else _0x31d924.indexOf("/") != -1 && _0x31d924.indexOf("+") != -1 ? _0x470470 = _0x31d924 : _0x470470 = _0x31d924;
                }
              } else _0x470470 = _0x1af576 + "   API请求失败，请检查网络重试\n" + _0x23cfc2;
              return _0x54223b(_0x470470);
            }
          }
        });
      });
    }
    async ["getkami"]() {
      {
        dcfkey = process.env.dcfkey;
        let _0x398531 = {
            "Host": "gitee.com",
            "User-Agent": "Mozilla/5.0 (Linux; U; Android 12; zh-cn; M2102J2SC Build/SKQ1.211006.001) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1"
          },
          _0x381c48 = await $.task("get", "https://gitee.com/danchaofan112138/data/raw/master/kami.json", _0x398531);
        const _0x3be79c = _0x381c48.vip;
        var _0x3135f9 = _0x3be79c,
          _0x28c77e = dcfkey,
          _0x274f69 = {};
        JSON.stringify(_0x3be79c).indexOf(dcfkey) != -1 && _0x3135f9.map((_0x5302a9, _0x279403) => {
          _0x28c77e === _0x5302a9.name && (_0x274f69 = _0x5302a9);
        });
        return _0x274f69;
      }
    }
    async ["cxkm"]() {
      {
        var _0x24dd0f = await $.getkami();
        let _0x527851 = new Date(parseInt(_0x24dd0f.data)),
          _0x3bd9a0 = _0x527851.getFullYear() + "-",
          _0x395b2f = (_0x527851.getMonth() + 1 < 10 ? "0" + (_0x527851.getMonth() + 1) : _0x527851.getMonth() + 1) + "-",
          _0xfc5341 = _0x527851.getDate() + " ",
          _0x790416 = _0x527851.getHours() + ":",
          _0x28fecf = _0x527851.getMinutes() + ":",
          _0x1fa3af = _0x527851.getSeconds() + 1 < 10 ? "0" + _0x527851.getSeconds() : _0x527851.getSeconds(),
          _0x403255 = _0x3bd9a0 + _0x395b2f + _0xfc5341 + _0x790416 + _0x28fecf + _0x1fa3af;
        return _0x403255;
      }
    }
    async ["getnotify"]() {
      let _0x2877ca = {
          "Host": "gitee.com",
          "User-Agent": "Mozilla/5.0 (Linux; U; Android 12; zh-cn; M2102J2SC Build/SKQ1.211006.001) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1"
        },
        _0x3b14a5 = await $.task("get", "https://gitee.com/danchaofan112138/data/raw/master/notify.json", _0x2877ca);
      const _0x5e4d6d = _0x3b14a5.notify;
      return _0x5e4d6d;
    }
    async ["SendMsg"](_0x417e45) {
      if (!_0x417e45) return;
      if (Notify == 1) {
        var _0x1627ff = require("./sendNotify");
        await _0x1627ff.sendNotify(NAME, _0x417e45);
      } else {}
    }
    ["lengthInUtf8Bytes"](_0x4862e0) {
      let _0x3eec31 = encodeURIComponent(_0x4862e0).match(/%[89ABab]/g);
      return _0x4862e0.length + (_0x3eec31 ? _0x3eec31.length : 0);
    }
    ["randomArr"](_0x4362aa) {
      return _0x4362aa[parseInt(Math.random() * _0x4362aa.length, 10)];
    }
    ["wait"](_0x495302) {
      return new Promise(_0x4f9859 => setTimeout(_0x4f9859, _0x495302));
    }
    ["time"](_0x116b21) {
      if (_0x116b21 == 10) return Math.round(+new Date() / 1000);else {
        return +new Date();
      }
    }
    ["timenow"](_0x1773f9) {
      {
        let _0x3abecf = new Date();
        if (_0x1773f9 == undefined) {
          {
            let _0x7e0eab = new Date(),
              _0x3a051 = _0x7e0eab.getFullYear() + "-",
              _0x598a8f = (_0x7e0eab.getMonth() + 1 < 10 ? "0" + (_0x7e0eab.getMonth() + 1) : _0x7e0eab.getMonth() + 1) + "-",
              _0x1afb29 = _0x7e0eab.getDate() + " ",
              _0x100002 = _0x7e0eab.getHours() + ":",
              _0x5c917d = _0x7e0eab.getMinutes() + ":",
              _0x1c66cb = _0x7e0eab.getSeconds() + 1 < 10 ? "0" + _0x7e0eab.getSeconds() : _0x7e0eab.getSeconds();
            return _0x3a051 + _0x598a8f + _0x1afb29 + _0x100002 + _0x5c917d + _0x1c66cb;
          }
        } else {
          if (_0x1773f9 == 0) return _0x3abecf.getFullYear();else {
            if (_0x1773f9 == 1) {
              return _0x3abecf.getMonth() + 1 < 10 ? "0" + (_0x3abecf.getMonth() + 1) : _0x3abecf.getMonth() + 1;
            } else {
              if (_0x1773f9 == 2) {
                return _0x3abecf.getDate();
              } else {
                if (_0x1773f9 == 3) return _0x3abecf.getHours();else {
                  if (_0x1773f9 == 4) {
                    return _0x3abecf.getMinutes();
                  } else {
                    if (_0x1773f9 == 5) {
                      return _0x3abecf.getSeconds() + 1 < 10 ? "0" + _0x3abecf.getSeconds() : _0x3abecf.getSeconds();
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    ["safeGet"](_0x2d01b5) {
      try {
        if (typeof JSON.parse(_0x2d01b5) == "object") return true;
      } catch (_0x15e5c6) {
        return false;
      }
    }
    ["SJS"](_0x52af2e, _0x1f01cd) {
      if (_0x1f01cd == 0) {
        {
          let _0x45a8ea = "QWERTYUIOPASDFGHJKLZXCVBNM01234567890123456789",
            _0x195737 = _0x45a8ea.length,
            _0x589cd6 = "";
          for (let _0x3696a9 = 0; _0x3696a9 < _0x52af2e; _0x3696a9++) {
            _0x589cd6 += _0x45a8ea.charAt(Math.floor(Math.random() * _0x195737));
          }
          return _0x589cd6;
        }
      } else {
        if (_0x1f01cd == 1) {
          let _0x8d0d91 = "qwertyuiopasdfghjklzxcvbnm0123456789",
            _0xec571c = _0x8d0d91.length,
            _0x5e1374 = "";
          for (let _0x478d98 = 0; _0x478d98 < _0x52af2e; _0x478d98++) {
            _0x5e1374 += _0x8d0d91.charAt(Math.floor(Math.random() * _0xec571c));
          }
          return _0x5e1374;
        } else {
          {
            let _0x3aa6d9 = "0123456789",
              _0x22f16d = _0x3aa6d9.length,
              _0x39306c = "";
            for (let _0x2df2d1 = 0; _0x2df2d1 < _0x52af2e; _0x2df2d1++) {
              _0x39306c += _0x3aa6d9.charAt(Math.floor(Math.random() * _0x22f16d));
            }
            return _0x39306c;
          }
        }
      }
    }
    ["udid"](_0x45c602) {
      function _0x28ca8a() {
        return ((1 + Math.random()) * 65536 | 0).toString(16).substring(1);
      }
      let _0x3c3871 = _0x28ca8a() + _0x28ca8a() + "-" + _0x28ca8a() + "-" + _0x28ca8a() + "-" + _0x28ca8a() + "-" + _0x28ca8a() + _0x28ca8a() + _0x28ca8a();
      if (_0x45c602 == 0) {
        return _0x3c3871.toUpperCase();
      } else return _0x3c3871.toLowerCase();
    }
    ["encodeUnicode"](_0x3fd41c) {
      var _0x464aff = [];
      for (var _0x43a1fc = 0; _0x43a1fc < _0x3fd41c.length; _0x43a1fc++) {
        _0x464aff[_0x43a1fc] = ("00" + _0x3fd41c.charCodeAt(_0x43a1fc).toString(16)).slice(-4);
      }
      return "\\u" + _0x464aff.join("\\u");
    }
    ["decodeUnicode"](_0x580c7f) {
      _0x580c7f = _0x580c7f.replace(/\u/g, "%u");
      return unescape(unescape(_0x580c7f));
    }
    ["RT"](_0x3cc492, _0xd7b5cf) {
      return Math.round(Math.random() * (_0xd7b5cf - _0x3cc492) + _0x3cc492);
    }
    ["arrNull"](_0x323c7b) {
      var _0x428485 = _0x323c7b.filter(_0x668bd8 => {
        return _0x668bd8 && _0x668bd8.trim();
      });
      return _0x428485;
    }
    ["nowtime"]() {
      return new Date(new Date().getTime() + new Date().getTimezoneOffset() * 60 * 1000 + 28800000);
    }
    ["timecs"]() {
      {
        let _0x5470ed = $.nowtime();
        JSON.stringify(_0x5470ed).indexOf(" ") >= 0 && (_0x5470ed = _0x5470ed.replace(" ", "T"));
        return new Date(_0x5470ed).getTime() - 28800000;
      }
    }
    ["rtjson"](_0x50aeb9, _0x28eb73, _0x2dbd35, _0x4101b3) {
      return _0x4101b3 == 0 ? JSON.stringify(_0x50aeb9.split(_0x28eb73).reduce((_0x2504bb, _0x2b1ca5) => {
        {
          let _0x244f8d = _0x2b1ca5.split(_0x2dbd35);
          _0x2504bb[_0x244f8d[0].trim()] = _0x244f8d[1].trim();
          return _0x2504bb;
        }
      }, {})) : _0x50aeb9.split(_0x28eb73).reduce((_0x6f983f, _0x46c50d) => {
        let _0x465701 = _0x46c50d.split(_0x2dbd35);
        _0x6f983f[_0x465701[0].trim()] = _0x465701[1].trim();
        return _0x6f983f;
      }, {});
    }
    ["MD5Encrypt"](_0x54f3e7, _0x3e4247) {
      if (_0x54f3e7 == 0) return this.CryptoJS.MD5(_0x3e4247).toString().toLowerCase();else {
        if (_0x54f3e7 == 1) return this.CryptoJS.MD5(_0x3e4247).toString().toUpperCase();else {
          if (_0x54f3e7 == 2) return this.CryptoJS.MD5(_0x3e4247).toString().substring(8, 24).toLowerCase();else {
            if (_0x54f3e7 == 3) return this.CryptoJS.MD5(_0x3e4247).toString().substring(8, 24).toUpperCase();
          }
        }
      }
    }
    ["SHA_Encrypt"](_0x227f8c, _0x510b15, _0x1f306a) {
      {
        if (_0x227f8c == 0) {
          return this.CryptoJS[_0x510b15](_0x1f306a).toString(this.CryptoJS.enc.Base64);
        } else {
          return this.CryptoJS[_0x510b15](_0x1f306a).toString();
        }
      }
    }
    ["HmacSHA_Encrypt"](_0x120cc2, _0x3981f1, _0x322b59, _0x5682e3) {
      if (_0x120cc2 == 0) return this.CryptoJS[_0x3981f1](_0x322b59, _0x5682e3).toString(this.CryptoJS.enc.Base64);else {
        return this.CryptoJS[_0x3981f1](_0x322b59, _0x5682e3).toString();
      }
    }
    ["Base64"](_0x62f37d, _0x5f2506) {
      return _0x62f37d == 0 ? this.CryptoJS.enc.Base64.stringify(this.CryptoJS.enc.Utf8.parse(_0x5f2506)) : this.CryptoJS.enc.Utf8.stringify(this.CryptoJS.enc.Base64.parse(_0x5f2506));
    }
    ["DecryptCrypto"](_0x2c419d, _0x38e848, _0x13eed5, _0x4960db, _0x53a3f0, _0x3b4e97, _0x5c77a1) {
      {
        if (_0x2c419d == 0) {
          const _0x58830c = this.CryptoJS[_0x38e848].encrypt(this.CryptoJS.enc.Utf8.parse(_0x53a3f0), this.CryptoJS.enc.Utf8.parse(_0x3b4e97), {
            "iv": this.CryptoJS.enc.Utf8.parse(_0x5c77a1),
            "mode": this.CryptoJS.mode[_0x13eed5],
            "padding": this.CryptoJS.pad[_0x4960db]
          });
          return _0x58830c.toString();
        } else {
          {
            const _0x37eaaa = this.CryptoJS[_0x38e848].decrypt(_0x53a3f0, this.CryptoJS.enc.Utf8.parse(_0x3b4e97), {
              "iv": this.CryptoJS.enc.Utf8.parse(_0x5c77a1),
              "mode": this.CryptoJS.mode[_0x13eed5],
              "padding": this.CryptoJS.pad[_0x4960db]
            });
            return _0x37eaaa.toString(this.CryptoJS.enc.Utf8);
          }
        }
      }
    }
    ["RSA"](_0x4d6b23, _0x5afa70) {
      {
        const _0x2cb410 = require("node-rsa");
        let _0xf3615b = new _0x2cb410("-----BEGIN PUBLIC KEY-----\n" + _0x5afa70 + "\n-----END PUBLIC KEY-----");
        _0xf3615b.setOptions({
          "encryptionScheme": "pkcs1"
        });
        return _0xf3615b.encrypt(_0x4d6b23, "base64", "utf8");
      }
    }
    ["SHA_RSA"](_0x139da6, _0x34698a) {
      let _0x5be1d4 = this.Sha_Rsa.KEYUTIL.getKey("-----BEGIN PRIVATE KEY-----\n" + $.getNewline(_0x34698a, 76) + "\n-----END PRIVATE KEY-----"),
        _0x2c1be5 = new this.Sha_Rsa.KJUR.crypto.Signature({
          "alg": "SHA256withRSA"
        });
      _0x2c1be5.init(_0x5be1d4);
      _0x2c1be5.updateString(_0x139da6);
      let _0x5a30ca = _0x2c1be5.sign(),
        _0x1e0c7b = this.Sha_Rsa.hextob64u(_0x5a30ca);
      return _0x1e0c7b;
    }
  }();
}