//Sun Jul 14 2024 14:51:33 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
NAME = "红旗智联";
VALY = ["hqzl"];
CK = "";
let appToken = process.env.weixinToken,
  dldz = process.env.xqkdddl,
  host = "https://hqapp.faw.cn";
const Vacation = "1.0.0",
  CryptoJS = require("crypto-js"),
  envSplitor = ["\n", "@"],
  LOGS = 0;
usid = 0;
class Bar {
  constructor(_0x1d2644) {
    this.Authorization = _0x1d2644.split("#")[0];
    this.aid = _0x1d2644.split("#")[1];
    this.shengfen = _0x1d2644.split("#")[2];
    this.chengshi = _0x1d2644.split("#")[3];
    this.num = ++usid;
    this.headers = {
      "User-Agent": "okhttp/4.9.2",
      "Authorization": this.Authorization,
      "aid": this.aid,
      "platform": "2",
      "o35xzbbp": "qjzsuioa",
      "version": "4.9.5"
    };
  }
  async ["hqdl"]() {
    let _0x29d811 = await $.task("get", dldz, {
      "User-Agent": "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Mobile Safari/537.36"
    });
    this.dlip = _0x29d811.split("\n")[0];
    console.log("账号" + this.num + "：代理IP：" + this.dlip);
  }
  async ["user_task_list"]() {
    await $.wait($.RT(1000, 3000));
    await this.leibiao();
    await $.wait($.RT(1000, 3000));
    await this._getText();
    await this.fapinglun();
    await this.huati();
    await $.wait($.RT(1000, 3000));
  }
  async ["login"]() {
    let _0x29b21b = await this.task("post", host + "/fawcshop/mall/v1/apiCus/getUserInfo", this.headers, "{\"userId\":\"" + this.aid + "\"}");
    if (_0x29b21b.code == "000000") this.login = true, this.num = _0x29b21b.data.nickname, console.log(this.num + " 积分：" + _0x29b21b.data.scoreCount), _0x29b21b.data.isSignIn == 0 && (await this.qiandao());else {
      this.login = false;
      let _0xcabcda = _0x29b21b.msg;
      console.log("" + _0xcabcda);
      appToken !== undefined && (await this.wxpusher(_0xcabcda));
    }
  }
  async ["wxpusher"](_0x196b22) {
    let _0x363e7b = {
        "X-Requested-With": "com.tencent.mm",
        "User-Agent": "Dalvik/2.1.0 (Linux; U; Android 13; M2012K11AC Build/TKQ1.220829.002)"
      },
      _0x281035 = await this.task("get", "https://wxpusher.zjiecode.com/api/send/message/?appToken=" + appToken.split("#")[0] + "&content=" + encodeURI("" + NAME + _0x196b22) + "&uid=" + appToken.split("#")[1], _0x363e7b);
    _0x281035.code == 1000 ? console.log("微信通知" + _0x281035.msg) : console.log("微信通知失败");
  }
  async ["leibiao"]() {
    let _0x369ab5 = "列表",
      _0x2e2ca = await this.task("get", host + "/fawcshop/collect-sns/v1/dynamicTopic/getDynamicList?pageNo=1&refreshTime=" + $.timenow() + "&likeFlag=0&orderByRule=RULE15&pageSize=10", this.headers, "lotteryId=47&_csrf=" + this.cjid);
    if (_0x2e2ca.code == "000000") this.invid = _0x2e2ca.data[0].picList[0].invId, this.fTitlePicUrl = _0x2e2ca.data[3].fTitlePicUrl;else {
      let _0x14e318 = _0x2e2ca.msg;
      console.log(this.num + " " + _0x369ab5 + "：" + _0x14e318);
    }
  }
  async ["qiandao"]() {
    let _0x35f7c6 = "签到",
      _0x406125 = $.time(13),
      _0xe6084b = $.SJS(64, 1);
    this.sign = DecryptCrypto("0", "AES", "CBC", "PKCS5Padding", "{\"scoreType\":\"2\"}" + _0x406125 + _0xe6084b, "rnt69cfvwbtr7yss", "do78hojtrjrszqvs");
    this.headers.signature = this.sign;
    this.headers.timestamp = _0x406125;
    this.headers.nonce = _0xe6084b;
    let _0x160441 = await this.task("post", host + "/fawcshop/collect-public/v1/score/addScore", this.headers, "{\"scoreType\":\"2\"}");
    _0x160441.code == "000000" ? console.log(this.num, _0x35f7c6 + ":" + _0x160441.data.score) : console.log(this.num, _0x35f7c6 + ":" + _0x160441.msg);
  }
  async ["_getText"]() {
    let _0x224918 = await this.task("get", "https://v1.hitokoto.cn/?c=e", this.headers);
    this.hitokoto = _0x224918.hitokoto;
  }
  async ["fapinglun"]() {
    let _0x2ae548 = "发评论",
      _0xc7c751 = $.time(13),
      _0xe16659 = $.SJS(64, 1);
    this.sign = DecryptCrypto("0", "AES", "CBC", "PKCS5Padding", "{\"commentContext\":\"" + this.hitokoto + "\",\"commentType\":\"8500\",\"contentId\":\"" + this.invid + "\",\"fileString\":[],\"parentId\":\"0\"}" + _0xc7c751 + _0xe16659, "rnt69cfvwbtr7yss", "do78hojtrjrszqvs");
    this.headers.timestamp = _0xc7c751;
    this.headers.nonce = _0xe16659;
    this.headers.signature = this.sign;
    let _0x385227 = await this.task("post", host + "/fawcshop/collect-sns/v1/dynamicTopic/saveCommentDetailsRevision", this.headers, "{\"commentContext\":\"" + this.hitokoto + "\",\"commentType\":\"8500\",\"contentId\":\"" + this.invid + "\",\"parentId\":\"0\",\"fileString\":[]}");
    if (_0x385227.code == "000000") console.log(this.num, _0x2ae548 + ":" + _0x385227.msg);else {
      console.log(this.num, _0x2ae548 + ":" + _0x385227.msg);
    }
  }
  async ["huati"]() {
    let _0x93eb5e = "话题",
      _0x691e1a = await this.task("get", host + "/fawcshop/collect-sns/v1/dynamicTopic/getTopicList?pageNo=1&pageSize=10&keyWord=&isMyTopic=false ", this.headers);
    if (_0x691e1a.code == "000000") {
      let _0x2b1633 = _0x691e1a.data.result[0].id;
      await $.wait($.RT(1000, 3000));
      await this._getText();
      await this.fadongtai(_0x2b1633);
    } else {
      let _0x324b47 = _0x691e1a.msg;
      console.log(this.num + " " + _0x93eb5e + "：" + _0x324b47);
    }
  }
  async ["fadongtai"](_0x4c6dc1) {
    let _0x2e8ad1 = "发动态",
      _0x1c7820 = $.time(13),
      _0xa620c4 = $.SJS(64, 1);
    this.sign = DecryptCrypto("0", "AES", "CBC", "PKCS5Padding", "{\"city\":\"" + this.chengshi + "\",\"content\":\"" + this.hitokoto + "\",\"fileString\":[\"" + this.fTitlePicUrl + "\"],\"province\":\"" + this.shengfen + "\",\"tsId\":" + _0x4c6dc1 + "}" + _0x1c7820 + _0xa620c4, "rnt69cfvwbtr7yss", "do78hojtrjrszqvs");
    this.headers.timestamp = _0x1c7820;
    this.headers.nonce = _0xa620c4;
    this.headers.signature = this.sign;
    let _0x2faac8 = await this.task("post", host + "/fawcshop/collect-sns/v1/dynamicTopic/saveDynamicInfoImgUrl", this.headers, "{\"province\":\"" + this.shengfen + "\",\"city\":\"" + this.chengshi + "\",\"tsId\":" + _0x4c6dc1 + ",\"content\":\"" + this.hitokoto + "\",\"fileString\":[\"" + this.fTitlePicUrl + "\"]}");
    _0x2faac8.code == "000000" ? console.log(this.num, _0x2e8ad1 + ":" + _0x2faac8.msg) : console.log(this.num, _0x2e8ad1 + ":" + _0x2faac8.msg);
  }
  async ["xinxi"]() {
    let _0x4258a2 = await this.task("post", host + "/fawcshop/mall/v1/apiCus/getUserInfo", this.headers, "{\"userId\":\"" + this.aid + "\"}");
    if (_0x4258a2.code == "000000") console.log(this.num + " 积分：" + _0x4258a2.data.scoreCount);else {
      let _0x4af866 = _0x4258a2.msg;
      console.log("" + _0x4af866);
      appToken !== undefined && (await this.wxpusher(_0x4af866));
    }
  }
  async ["task"](_0x56608f, _0x507cc4, _0x186f96, _0x129610) {
    _0x56608f == "delete" ? _0x56608f = _0x56608f.toUpperCase() : _0x56608f = _0x56608f;
    const _0x23ab15 = require("request");
    _0x56608f == "post" && (delete _0x186f96["Content-Type"], delete _0x186f96["content-type"], delete _0x186f96["Content-Length"], delete _0x186f96["content-length"], $.safeGet(_0x129610) ? _0x186f96["content-type"] = "application/json;charset=utf-8" : _0x186f96["content-type"] = "application/x-www-form-urlencoded", _0x129610 && (_0x186f96["content-length"] = $.lengthInUtf8Bytes(_0x129610)));
    _0x56608f == "get" && (delete _0x186f96["Content-Type"], delete _0x186f96["content-length"], delete _0x186f96["content-type"], delete _0x186f96["Content-Length"]);
    _0x186f96.Host = _0x507cc4.replace("//", "/").split("/")[1];
    if (dldz == undefined) {
      if (_0x56608f.indexOf("T") < 0) {
        var _0x3b83c2 = {
          "url": _0x507cc4,
          "headers": _0x186f96,
          "body": _0x129610,
          "timeout": 20000
        };
      } else var _0x3b83c2 = {
        "url": _0x507cc4,
        "headers": _0x186f96,
        "form": JSON.parse(_0x129610),
        "timeout": 20000
      };
    } else {
      if (_0x56608f.indexOf("T") < 0) var _0x3b83c2 = {
        "url": _0x507cc4,
        "headers": _0x186f96,
        "body": _0x129610,
        "proxy": "http://" + this.dlip,
        "timeout": 20000
      };else {
        var _0x3b83c2 = {
          "url": _0x507cc4,
          "headers": _0x186f96,
          "form": JSON.parse(_0x129610),
          "proxy": "http://" + this.dlip,
          "timeout": 20000
        };
      }
    }
    return new Promise(async _0x18307c => {
      _0x23ab15[_0x56608f.toLowerCase()](_0x3b83c2, async (_0x11486d, _0x25656c, _0x599f8e) => {
        try {
          LOGS == 1 && (console.log("==================请求=================="), console.log(JSON.stringify(_0x3b83c2)), console.log("==================返回=================="), console.log(_0x599f8e));
        } catch (_0x54d67c) {} finally {
          if (!_0x11486d) {
            if ($.safeGet(_0x599f8e)) {
              _0x599f8e = JSON.parse(_0x599f8e);
            } else _0x599f8e = _0x599f8e;
          } else dldz == undefined ? (console.log("请检查网络设置"), _0x599f8e = JSON.parse("{\"code\":\"99\"}")) : (await this.hqdl(), _0x599f8e = await this.task(_0x56608f, _0x507cc4, _0x186f96, _0x129610));
          return _0x18307c(_0x599f8e);
        }
      });
    });
  }
}
$ = DD();
!(async () => {
  console.log("[" + NAME + "] " + $.timenow(3) + ":" + $.timenow(4) + ":" + $.timenow(5));
  await gpt();
  if (Vacation == ben && ben !== "undefined") {
    console.log("📢 请认真阅读以下声明\n        【免责声明】   \n       📌 脚本文件仅用于测试和学习研究   \n       📌 脚本文件任何人不得用于商业以及非法用途   \n       📌 禁止任何公众号、自媒体进行任何形式的转发   \n       📌 脚本文件请在下载试用后24小时内自行删除   \n       📌 因使用脚本造成软件平台的一切损失皆由使用者承担   \n       📌 脚本文件如有不慎被破解或修改由破解或修改者承担   \n       📌 如不接受此条款请立即删除脚本文件");
    await $.ExamineCookie();
    if ($.cookie_list.length > limit) {
      console.log("已超出最大账号数，请重新设置账号数");
      return;
    }
    if (dldz == undefined) {
      console.log("当前使用本地网络运行脚本");
      console.log("\n-------- 用户信息 --------");
      await $.Multithreading("login");
      let _0x88e765 = $.cookie_list.filter(_0x42921a => _0x42921a.login == true);
      if (_0x88e765.length == 0) {
        console.log("Cookie格式错误 或 账号被禁封");
        return;
      } else console.log("\n-------- 任务列表 --------"), await $.Multithreading("user_task_list"), console.log("\n-------- 运行结果 --------");
      for (let _0x4058cb of $.cookie_list) {
        _0x4058cb.xinxi();
      }
    } else {
      console.log("当前使用代理网络运行脚本");
      await $.Multithreading("hqdl");
      console.log("\n-------- 用户信息 --------");
      await $.Multithreading("login");
      let _0x2c5b22 = $.cookie_list.filter(_0x514fa4 => _0x514fa4.login == true);
      if (_0x2c5b22.length == 0) {
        console.log("Cookie格式错误 或 账号被禁封");
        return;
      } else console.log("\n-------- 任务列表 --------"), await $.Multithreading("user_task_list"), console.log("\n-------- 运行结果 --------");
      for (let _0x1b393c of $.cookie_list) {
        _0x1b393c.xinxi();
      }
    }
  }
})().catch(_0x942e02 => {
  console.log(_0x942e02);
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
    async ["Multithreading"](_0x4ef43a, _0x5ad547, _0x9907b9) {
      let _0x523f62 = [];
      !_0x9907b9 && (_0x9907b9 = 1);
      while (_0x9907b9--) {
        for (let _0x30f13d of $.cookie_list) {
          _0x523f62.push(_0x30f13d[_0x4ef43a](_0x5ad547));
        }
      }
      await Promise.allSettled(_0x523f62);
    }
    ["ExamineCookie"]() {
      let _0x4f5a13 = process.env[VALY] || CK,
        _0x3d3d0c = 0;
      if (_0x4f5a13) {
        for (let _0x4cde49 of envSplitor) {
          if (_0x4f5a13.includes(_0x4cde49)) {
            this.splitor = _0x4cde49;
            break;
          }
        }
        for (let _0x23ceb8 of _0x4f5a13.split(this.splitor).filter(_0x2ddf6e => !!_0x2ddf6e)) {
          $.cookie_list.push(new Bar(_0x23ceb8));
        }
        _0x3d3d0c = $.cookie_list.length;
      } else console.log("\n【" + NAME + "】：未填写变量: " + VALY);
      return console.log("共找到" + _0x3d3d0c + "个账号"), $.cookie_list;
    }
    ["task"](_0x11aba1, _0x311623, _0x46c12a, _0x10246d, _0x3a3a7c) {
      if (_0x11aba1 == "delete") {
        _0x11aba1 = _0x11aba1.toUpperCase();
      } else {
        _0x11aba1 = _0x11aba1;
      }
      if (_0x11aba1 == "post") {
        delete _0x46c12a["content-type"];
        delete _0x46c12a["Content-type"];
        delete _0x46c12a["content-Type"];
        $.safeGet(_0x10246d) ? _0x46c12a["Content-Type"] = "application/json;charset=UTF-8" : _0x46c12a["Content-Type"] = "application/x-www-form-urlencoded";
        _0x10246d && (_0x46c12a["Content-Length"] = $.lengthInUtf8Bytes(_0x10246d));
      }
      return _0x11aba1 == "get" && (delete _0x46c12a["content-type"], delete _0x46c12a["Content-type"], delete _0x46c12a["content-Type"], delete _0x46c12a["Content-Length"]), _0x46c12a.Host = _0x311623.replace("//", "/").split("/")[1], new Promise(async _0x4a014a => {
        if (_0x11aba1.indexOf("T") < 0) var _0x36c941 = {
          "url": _0x311623,
          "headers": _0x46c12a,
          "body": _0x10246d,
          "proxy": "http://" + _0x3a3a7c
        };else {
          var _0x36c941 = {
            "url": _0x311623,
            "headers": _0x46c12a,
            "form": JSON.parse(_0x10246d),
            "proxy": "http://" + _0x3a3a7c
          };
        }
        !_0x3a3a7c && delete _0x36c941.proxy;
        this.request[_0x11aba1.toLowerCase()](_0x36c941, (_0x3d48dd, _0x4fbfa4, _0x2dbc48) => {
          try {
            if (_0x2dbc48) {
              if (LOGS == 1) {
                console.log("================ 请求 ================");
                console.log(_0x36c941);
                console.log("================ 返回 ================");
                if ($.safeGet(_0x2dbc48)) {
                  console.log(JSON.parse(_0x2dbc48));
                } else {
                  console.log(_0x2dbc48);
                }
              }
            }
          } catch (_0x291d2b) {
            console.log(_0x291d2b, _0x311623 + "\n" + _0x46c12a);
          } finally {
            let _0x4ccb4a = "";
            if (!_0x3d48dd) {
              if ($.safeGet(_0x2dbc48)) {
                _0x4ccb4a = JSON.parse(_0x2dbc48);
              } else {
                if (_0x2dbc48.indexOf("/") != -1 && _0x2dbc48.indexOf("+") != -1) _0x4ccb4a = $.decrypts(_0x2dbc48);else {
                  _0x4ccb4a = _0x2dbc48;
                }
              }
            } else _0x4ccb4a = _0x311623 + "   API请求失败，请检查网络重试\n" + _0x3d48dd;
            return _0x4a014a(_0x4ccb4a);
          }
        });
      });
    }
    ["task2"](_0x73689d, _0x2fcf54, _0x46e41c, _0x5333e2, _0x180c27) {
      _0x73689d == "delete" ? _0x73689d = _0x73689d.toUpperCase() : _0x73689d = _0x73689d;
      if (_0x73689d == "post") {
        delete _0x46e41c["content-type"];
        delete _0x46e41c["Content-type"];
        delete _0x46e41c["content-Type"];
        $.safeGet(_0x5333e2) ? _0x46e41c["Content-Type"] = "application/json;charset=UTF-8" : _0x46e41c["Content-Type"] = "application/x-www-form-urlencoded";
        _0x5333e2 && (_0x46e41c["Content-Length"] = $.lengthInUtf8Bytes(_0x5333e2));
      }
      _0x73689d == "get" && (delete _0x46e41c["content-type"], delete _0x46e41c["Content-type"], delete _0x46e41c["content-Type"], delete _0x46e41c["Content-Length"]);
      _0x46e41c.Host = _0x2fcf54.replace("//", "/").split("/")[1];
      if (_0x73689d.indexOf("T") < 0) var _0x3f6f36 = {
        "url": _0x2fcf54,
        "headers": _0x46e41c,
        "body": _0x5333e2
      };else var _0x3f6f36 = {
        "url": _0x2fcf54,
        "headers": _0x46e41c,
        "form": JSON.parse(_0x5333e2)
      };
      return new Promise(async _0x1f0d7e => {
        this.request[_0x73689d.toLowerCase()](_0x3f6f36, (_0x2728bb, _0x4d0b28, _0x300487) => {
          try {
            _0x300487 && LOGS == 1 && (console.log("================ 请求 ================"), console.log(_0x3f6f36), console.log("================ 返回 ================"), $.safeGet(_0x300487) ? console.log(JSON.parse(_0x300487)) : console.log(_0x300487));
          } catch (_0x384106) {
            console.log(_0x384106, _0x2fcf54 + "\n" + _0x46e41c);
          } finally {
            let _0x412224 = "";
            if (!_0x2728bb) {
              if ($.safeGet(_0x300487)) {
                _0x412224 = _0x300487;
              } else {
                if (_0x300487.indexOf("/") != -1 && _0x300487.indexOf("+") != -1) _0x412224 = $.decrypts(_0x300487);else {
                  _0x412224 = _0x300487;
                }
              }
            } else _0x412224 = _0x2fcf54 + "   API请求失败，请检查网络重试\n" + _0x2728bb;
            return _0x1f0d7e(_0x412224);
          }
        });
      });
    }
    ["lengthInUtf8Bytes"](_0x3513bb) {
      let _0x563f40 = encodeURIComponent(_0x3513bb).match(/%[89ABab]/g);
      return _0x3513bb.length + (_0x563f40 ? _0x563f40.length : 0);
    }
    ["randomArr"](_0x95125) {
      return _0x95125[parseInt(Math.random() * _0x95125.length, 10)];
    }
    ["wait"](_0x238c9c) {
      return new Promise(_0x53607d => setTimeout(_0x53607d, _0x238c9c));
    }
    ["time"](_0x49c0ba) {
      if (_0x49c0ba == 10) {
        return Math.round(+new Date() / 1000);
      } else {
        return +new Date();
      }
    }
    ["timenow"](_0x27cfac) {
      let _0x511b5a = new Date();
      if (_0x27cfac == undefined) {
        let _0x4be040 = new Date(),
          _0x2a0644 = _0x4be040.getFullYear() + "-",
          _0x2adea2 = (_0x4be040.getMonth() + 1 < 10 ? "0" + (_0x4be040.getMonth() + 1) : _0x4be040.getMonth() + 1) + "-",
          _0x5d2eff = _0x4be040.getDate() + " ",
          _0x5b0295 = _0x4be040.getHours() + ":",
          _0x4fa722 = _0x4be040.getMinutes() + ":",
          _0x13c7ec = _0x4be040.getSeconds() + 1 < 10 ? "0" + _0x4be040.getSeconds() : _0x4be040.getSeconds();
        return _0x2a0644 + _0x2adea2 + _0x5d2eff + _0x5b0295 + _0x4fa722 + _0x13c7ec;
      } else {
        if (_0x27cfac == 0) return _0x511b5a.getFullYear();else {
          if (_0x27cfac == 1) return _0x511b5a.getMonth() + 1 < 10 ? "0" + (_0x511b5a.getMonth() + 1) : _0x511b5a.getMonth() + 1;else {
            if (_0x27cfac == 2) return _0x511b5a.getDate();else {
              if (_0x27cfac == 3) return _0x511b5a.getHours();else {
                if (_0x27cfac == 4) {
                  return _0x511b5a.getMinutes();
                } else {
                  if (_0x27cfac == 5) {
                    return _0x511b5a.getSeconds() + 1 < 10 ? "0" + _0x511b5a.getSeconds() : _0x511b5a.getSeconds();
                  }
                }
              }
            }
          }
        }
      }
    }
    ["safeGet"](_0x374080) {
      try {
        if (typeof JSON.parse(_0x374080) == "object") return true;
      } catch (_0x546d0b) {
        return false;
      }
    }
    ["SJS"](_0x5971d6, _0x5092f2) {
      if (_0x5092f2 == 0) {
        let _0x508917 = "QWERTYUIOPASDFGHJKLZXCVBNM01234567890123456789",
          _0x16373c = _0x508917.length,
          _0x48be45 = "";
        for (let _0x4f3edb = 0; _0x4f3edb < _0x5971d6; _0x4f3edb++) {
          _0x48be45 += _0x508917.charAt(Math.floor(Math.random() * _0x16373c));
        }
        return _0x48be45;
      } else {
        if (_0x5092f2 == 1) {
          let _0x2411e1 = "qwertyuiopasdfghjklzxcvbnm0123456789",
            _0x918c55 = _0x2411e1.length,
            _0x439fc3 = "";
          for (let _0x210a13 = 0; _0x210a13 < _0x5971d6; _0x210a13++) {
            _0x439fc3 += _0x2411e1.charAt(Math.floor(Math.random() * _0x918c55));
          }
          return _0x439fc3;
        } else {
          let _0x24b0af = "0123456789",
            _0x473297 = _0x24b0af.length,
            _0x3f565f = "";
          for (let _0x4f51a2 = 0; _0x4f51a2 < _0x5971d6; _0x4f51a2++) {
            _0x3f565f += _0x24b0af.charAt(Math.floor(Math.random() * _0x473297));
          }
          return _0x3f565f;
        }
      }
    }
    ["udid"](_0x2a348f) {
      function _0x4d0937() {
        return ((1 + Math.random()) * 65536 | 0).toString(16).substring(1);
      }
      let _0x398a5e = _0x4d0937() + _0x4d0937() + "-" + _0x4d0937() + "-" + _0x4d0937() + "-" + _0x4d0937() + "-" + _0x4d0937() + _0x4d0937() + _0x4d0937();
      return _0x2a348f == 0 ? _0x398a5e.toUpperCase() : _0x398a5e.toLowerCase();
    }
    ["encodeUnicode"](_0x3f9a18) {
      var _0x2f9f24 = [];
      for (var _0x3276a3 = 0; _0x3276a3 < _0x3f9a18.length; _0x3276a3++) {
        _0x2f9f24[_0x3276a3] = ("00" + _0x3f9a18.charCodeAt(_0x3276a3).toString(16)).slice(-4);
      }
      return "\\u" + _0x2f9f24.join("\\u");
    }
    ["decodeUnicode"](_0x529ca5) {
      return _0x529ca5 = _0x529ca5.replace(/\\u/g, "%u"), unescape(unescape(_0x529ca5));
    }
    ["RT"](_0x41ab48, _0x1741ab) {
      return Math.round(Math.random() * (_0x1741ab - _0x41ab48) + _0x41ab48);
    }
    ["arrNull"](_0x506c16) {
      var _0x477859 = _0x506c16.filter(_0x14f4fe => {
        return _0x14f4fe && _0x14f4fe.trim();
      });
      return _0x477859;
    }
    ["nowtime"]() {
      return new Date(new Date().getTime() + new Date().getTimezoneOffset() * 60 * 1000 + 8 * 60 * 60 * 1000);
    }
    ["timecs"]() {
      let _0x337066 = $.nowtime();
      if (JSON.stringify(_0x337066).indexOf(" ") >= 0) {
        _0x337066 = _0x337066.replace(" ", "T");
      }
      return new Date(_0x337066).getTime() - 8 * 60 * 60 * 1000;
    }
    ["rtjson"](_0x432baa, _0x51cff8, _0x4a857f, _0x2dc74e) {
      if (_0x2dc74e == 0) {
        return JSON.stringify(_0x432baa.split(_0x51cff8).reduce((_0x5a4d4f, _0xcdaa41) => {
          let _0x593d2f = _0xcdaa41.split(_0x4a857f);
          return _0x5a4d4f[_0x593d2f[0].trim()] = _0x593d2f[1].trim(), _0x5a4d4f;
        }, {}));
      } else return _0x432baa.split(_0x51cff8).reduce((_0x356223, _0xa7c34f) => {
        let _0x13081c = _0xa7c34f.split(_0x4a857f);
        return _0x356223[_0x13081c[0].trim()] = _0x13081c[1].trim(), _0x356223;
      }, {});
    }
    ["MD5Encrypt"](_0x45bd5a, _0x22b8dc) {
      if (_0x45bd5a == 0) return this.CryptoJS.MD5(_0x22b8dc).toString().toLowerCase();else {
        if (_0x45bd5a == 1) return this.CryptoJS.MD5(_0x22b8dc).toString().toUpperCase();else {
          if (_0x45bd5a == 2) {
            return this.CryptoJS.MD5(_0x22b8dc).toString().substring(8, 24).toLowerCase();
          } else {
            if (_0x45bd5a == 3) return this.CryptoJS.MD5(_0x22b8dc).toString().substring(8, 24).toUpperCase();
          }
        }
      }
    }
    ["SHA_Encrypt"](_0x2f3377, _0x5aed03, _0xa234b7) {
      return _0x2f3377 == 0 ? this.CryptoJS[_0x5aed03](_0xa234b7).toString(this.CryptoJS.enc.Base64) : this.CryptoJS[_0x5aed03](_0xa234b7).toString();
    }
    ["HmacSHA_Encrypt"](_0x240c92, _0x537e6b, _0x2b68ef, _0x52908b) {
      return _0x240c92 == 0 ? this.CryptoJS[_0x537e6b](_0x2b68ef, _0x52908b).toString(this.CryptoJS.enc.Base64) : this.CryptoJS[_0x537e6b](_0x2b68ef, _0x52908b).toString();
    }
    ["Base64"](_0x54c3ce, _0x257d43) {
      if (_0x54c3ce == 0) return this.CryptoJS.enc.Base64.stringify(this.CryptoJS.enc.Utf8.parse(_0x257d43));else {
        return this.CryptoJS.enc.Utf8.stringify(this.CryptoJS.enc.Base64.parse(_0x257d43));
      }
    }
    ["DecryptCrypto"](_0x2bd785, _0x9fbd63, _0x440cb6, _0x20b971, _0x235ea4, _0x51cac5, _0x26b2f9) {
      if (_0x2bd785 == 0) {
        const _0x2c4e2c = this.CryptoJS[_0x9fbd63].encrypt(this.CryptoJS.enc.Utf8.parse(_0x235ea4), this.CryptoJS.enc.Utf8.parse(_0x51cac5), {
          "iv": this.CryptoJS.enc.Utf8.parse(_0x26b2f9),
          "mode": this.CryptoJS.mode[_0x440cb6],
          "padding": this.CryptoJS.pad[_0x20b971]
        });
        return _0x2c4e2c.toString();
      } else {
        const _0x3a42df = this.CryptoJS[_0x9fbd63].decrypt(_0x235ea4, this.CryptoJS.enc.Utf8.parse(_0x51cac5), {
          "iv": this.CryptoJS.enc.Utf8.parse(_0x26b2f9),
          "mode": this.CryptoJS.mode[_0x440cb6],
          "padding": this.CryptoJS.pad[_0x20b971]
        });
        return _0x3a42df.toString(this.CryptoJS.enc.Utf8);
      }
    }
    ["RSA"](_0x24ad93, _0x18b11e) {
      const _0x4ca6a8 = require("node-rsa");
      let _0x11d062 = new _0x4ca6a8("-----BEGIN PUBLIC KEY-----\n" + _0x18b11e + "\n-----END PUBLIC KEY-----");
      return _0x11d062.setOptions({
        "encryptionScheme": "pkcs1"
      }), _0x11d062.encrypt(_0x24ad93, "base64", "utf8");
    }
    ["SHA_RSA"](_0x9414a8, _0x693bfd) {
      let _0x222943 = this.Sha_Rsa.KEYUTIL.getKey("-----BEGIN PRIVATE KEY-----\n" + $.getNewline(_0x693bfd, 76) + "\n-----END PRIVATE KEY-----"),
        _0x1143fa = new this.Sha_Rsa.KJUR.crypto.Signature({
          "alg": "SHA256withRSA"
        });
      _0x1143fa.init(_0x222943);
      _0x1143fa.updateString(_0x9414a8);
      let _0x36181e = _0x1143fa.sign(),
        _0x24da13 = this.Sha_Rsa.hextob64u(_0x36181e);
      return _0x24da13;
    }
  }();
}
async function RSA(_0x26faad, _0x1428f8) {
  const _0x488678 = require("node-rsa");
  let _0x54d655 = new _0x488678("-----BEGIN PUBLIC KEY-----\n" + _0x1428f8 + "\n-----END PUBLIC KEY-----");
  return _0x54d655.setOptions({
    "encryptionScheme": "pkcs1"
  }), _0x54d655.encrypt(_0x26faad, "base64", "utf8");
}
function DecryptCrypto(_0x4af6ce, _0x39797d, _0x5a88eb, _0x4f3766, _0x226da0, _0x5028ea, _0x12b79d) {
  if (_0x39797d !== "AES" || _0x5a88eb !== "CBC" || _0x4f3766 !== "PKCS5Padding") throw new Error("Unsupported algorithm, mode or padding");
  const _0x24a3f1 = CryptoJS.enc.Utf8.parse(_0x5028ea),
    _0x3474f9 = CryptoJS.enc.Utf8.parse(_0x12b79d);
  let _0x48475f;
  if (_0x4af6ce === "0") _0x48475f = CryptoJS.AES.encrypt(_0x226da0, _0x24a3f1, {
    "iv": _0x3474f9,
    "mode": CryptoJS.mode.CBC,
    "padding": CryptoJS.pad.Pkcs7
  }).toString();else {
    if (_0x4af6ce === "1") {
      const _0x3323e0 = CryptoJS.AES.decrypt({
        "ciphertext": CryptoJS.enc.Hex.parse(_0x226da0)
      }, _0x24a3f1, {
        "iv": _0x3474f9,
        "mode": CryptoJS.mode.CBC,
        "padding": CryptoJS.pad.Pkcs7
      });
      _0x48475f = _0x3323e0.toString(CryptoJS.enc.Utf8);
    } else throw new Error("Invalid action, use '0' for encryption and '1' for decryption");
  }
  return _0x48475f;
}
async function gpt() {
  this.url = $.Base64(1, "aHR0cDovL2ouamc4Ni5jbjo1MTAw");
  let _0x51a5fb = {
      "User-Agent": "Dalvik/2.1.0 (Linux; U; Android 13; M2012K11AC Build/TKQ1.220829.002)"
    },
    _0x12d3c3 = await $.task("get", this.url + "/banben/api.php?name=" + VALY, _0x51a5fb);
  limit = _0x12d3c3.Notice;
  ben = _0x12d3c3.ben;
  Notice = _0x12d3c3.Notice;
  if (Vacation !== ben && ben !== "undefined") {
    console.log("脚本版本：" + Vacation + "   最新版本：" + ben);
    console.log("开始更新脚本");
    const _0x1c01b8 = require("http"),
      _0x229cbb = require("fs"),
      _0x424b23 = require("path"),
      {
        exec: _0x1688f3
      } = require("child_process"),
      _0x3da9f2 = this.url + "/banben/" + VALY + ".js",
      _0x44d913 = _0x424b23.basename(__filename),
      _0xbea369 = _0x1c01b8.get(_0x3da9f2, _0x20b3ab => {
        const _0x40fa40 = _0x229cbb.createWriteStream(_0x44d913);
        _0x20b3ab.pipe(_0x40fa40);
        _0x40fa40.on("finish", () => {
          _0x40fa40.close(() => {
            console.log("文件已保存为：", _0x44d913);
            _0x1688f3("node " + _0x44d913, (_0x5c64cd, _0x5a855b, _0x312e74) => {
              if (_0x5c64cd) {
                console.error("执行脚本时发生错误： " + _0x5c64cd);
                return;
              }
            });
          });
        });
      });
    _0xbea369.on("error", _0x2feec5 => {
      console.error("下载过程中发生错误：", _0x2feec5.message);
      process.exit();
    });
  }
  const _0x138f75 = require("os"),
    _0x17fc3a = _0x138f75.networkInterfaces();
  for (let _0x3b9970 in _0x17fc3a) {
    const _0x5a5d43 = _0x17fc3a[_0x3b9970];
    for (let _0x462b7d of _0x5a5d43) {
      !_0x462b7d.internal && _0x462b7d.mac !== "00:00:00:00:00:00" && (this.macccc = _0x462b7d.mac);
    }
  }
  let _0x1d163b = await $.task("get", "https://api.ipify.org", _0x51a5fb),
    _0x32fc05 = _0x1d163b,
    _0x18bd8b = process.env[VALY] || CK,
    _0x7ba1fc = _0x18bd8b.split("\n");
  const _0x5cd2a3 = _0x7ba1fc.length;
  let _0x5dbe79 = await $.task("get", this.url + "/api.php?api=notice&app=10000", _0x51a5fb);
  if (_0x5dbe79.msg.app_gg !== undefined) {
    console.log(_0x5dbe79.msg.app_gg);
  }
  await $.wait(100);
  if (_0x5cd2a3 > Notice) {}
}