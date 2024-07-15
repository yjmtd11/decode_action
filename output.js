//Mon Jul 15 2024 02:10:14 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
NAME = "红旗智联";
VALY = ["hqzl"];
CK = "";
let appToken = process.env.weixinToken,
  dldz = process.env.xqkdddl,
  host = "https://hqapp.faw.cn";
const Vacation = "1.0.1",
  CryptoJS = require("crypto-js"),
  envSplitor = ["\n", "@"],
  LOGS = 0;
usid = 0;
class Bar {
  constructor(_0x33ab1f) {
    this.Authorization = _0x33ab1f.split("#")[0];
    this.aid = _0x33ab1f.split("#")[1];
    this.shengfen = _0x33ab1f.split("#")[2];
    this.chengshi = _0x33ab1f.split("#")[3];
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
    let _0x3b3c91 = await $.task("get", dldz, {
      "User-Agent": "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Mobile Safari/537.36"
    });
    this.dlip = _0x3b3c91.split("\n")[0];
    console.log("账号" + this.num + "：代理IP：" + this.dlip);
  }
  async ["user_task_list"]() {
    await $.wait($.RT(1000, 3000));
    await this.leibiao();
    await $.wait($.RT(3000, 5000));
    await this._getText();
    await this.fapinglun();
    await $.wait($.RT(3000, 5000));
    await this.huati();
  }
  async ["login"]() {
    let _0x56804f = await this.task("post", host + "/fawcshop/mall/v1/apiCus/getUserInfo", this.headers, "{\"userId\":\"" + this.aid + "\"}");
    if (_0x56804f.code == "000000") this.login = true, this.num = _0x56804f.data.nickname, console.log(this.num + " 积分：" + _0x56804f.data.scoreCount), _0x56804f.data.isSignIn == 0 && (await this.qiandao());else {
      this.login = false;
      let _0x4b88ff = _0x56804f.msg;
      console.log("" + _0x4b88ff);
      if (appToken !== undefined) {
        await this.wxpusher(_0x4b88ff);
      }
    }
  }
  async ["wxpusher"](_0x51a7f3) {
    let _0x212d35 = {
        "X-Requested-With": "com.tencent.mm",
        "User-Agent": "Dalvik/2.1.0 (Linux; U; Android 13; M2012K11AC Build/TKQ1.220829.002)"
      },
      _0x41d8dd = await this.task("get", "https://wxpusher.zjiecode.com/api/send/message/?appToken=" + appToken.split("#")[0] + "&content=" + encodeURI("" + NAME + _0x51a7f3) + "&uid=" + appToken.split("#")[1], _0x212d35);
    _0x41d8dd.code == 1000 ? console.log("微信通知" + _0x41d8dd.msg) : console.log("微信通知失败");
  }
  async ["leibiao"]() {
    let _0x590ca0 = "列表",
      _0x2753c7 = await this.task("get", host + "/fawcshop/collect-sns/v1/dynamicTopic/getDynamicList?pageNo=1&refreshTime=" + $.timenow() + "&likeFlag=0&orderByRule=RULE15&pageSize=10", this.headers, "lotteryId=47&_csrf=" + this.cjid);
    if (_0x2753c7.code == "000000") this.invid = _0x2753c7.data[0].picList[0].invId, this.fTitlePicUrl = _0x2753c7.data[$.RT(0, 9)].fTitlePicUrl;else {
      let _0x3bdb06 = _0x2753c7.msg;
      console.log(this.num + " " + _0x590ca0 + "：" + _0x3bdb06);
    }
  }
  async ["qiandao"]() {
    let _0x23d233 = "签到",
      _0x22245b = $.time(13),
      _0x503328 = $.SJS(64, 1);
    this.sign = DecryptCrypto("0", "AES", "CBC", "PKCS5Padding", "{\"scoreType\":\"2\"}" + _0x22245b + _0x503328, "rnt69cfvwbtr7yss", "do78hojtrjrszqvs");
    this.headers.signature = this.sign;
    this.headers.timestamp = _0x22245b;
    this.headers.nonce = _0x503328;
    let _0x27cb92 = await this.task("post", host + "/fawcshop/collect-public/v1/score/addScore", this.headers, "{\"scoreType\":\"2\"}");
    _0x27cb92.code == "000000" ? console.log(this.num, _0x23d233 + ":" + _0x27cb92.data.score) : console.log(this.num, _0x23d233 + ":" + _0x27cb92.msg);
  }
  async ["_getText"]() {
    let _0x139bde = await this.task("get", "https://v1.hitokoto.cn/?c=e", this.headers);
    this.hitokoto = _0x139bde.hitokoto;
  }
  async ["fapinglun"]() {
    let _0xcc82cb = "发评论",
      _0x3e4ba5 = $.time(13),
      _0x340683 = $.SJS(64, 1);
    this.sign = DecryptCrypto("0", "AES", "CBC", "PKCS5Padding", "{\"commentContext\":\"" + this.hitokoto + "\",\"commentType\":\"8500\",\"contentId\":\"" + this.invid + "\",\"fileString\":[],\"parentId\":\"0\"}" + _0x3e4ba5 + _0x340683, "rnt69cfvwbtr7yss", "do78hojtrjrszqvs");
    this.headers.timestamp = _0x3e4ba5;
    this.headers.nonce = _0x340683;
    this.headers.signature = this.sign;
    let _0x510fc8 = await this.task("post", host + "/fawcshop/collect-sns/v1/dynamicTopic/saveCommentDetailsRevision", this.headers, "{\"commentContext\":\"" + this.hitokoto + "\",\"commentType\":\"8500\",\"contentId\":\"" + this.invid + "\",\"parentId\":\"0\",\"fileString\":[]}");
    if (_0x510fc8.code == "000000") console.log(this.num, _0xcc82cb + ":" + _0x510fc8.msg);else {
      console.log(this.num, _0xcc82cb + ":" + _0x510fc8.msg);
    }
  }
  async ["huati"]() {
    let _0x23e453 = "话题",
      _0x222aee = await this.task("get", host + "/fawcshop/collect-sns/v1/dynamicTopic/getTopicList?pageNo=1&pageSize=10&keyWord=&isMyTopic=false ", this.headers);
    if (_0x222aee.code == "000000") {
      let _0x4813a0 = _0x222aee.data.result[0].id;
      await $.wait($.RT(1000, 3000));
      await this._getText();
      await this.fadongtai(_0x4813a0);
    } else {
      let _0x47f23b = _0x222aee.msg;
      console.log(this.num + " " + _0x23e453 + "：" + _0x47f23b);
    }
  }
  async ["fadongtai"](_0x3172e5) {
    let _0x48392c = "发动态",
      _0x2fb8cb = $.time(13),
      _0x41de82 = $.SJS(64, 1);
    this.sign = DecryptCrypto("0", "AES", "CBC", "PKCS5Padding", "{\"city\":\"" + this.chengshi + "\",\"content\":\"" + this.hitokoto + "\",\"fileString\":[\"" + this.fTitlePicUrl + "\"],\"province\":\"" + this.shengfen + "\",\"tsId\":" + _0x3172e5 + "}" + _0x2fb8cb + _0x41de82, "rnt69cfvwbtr7yss", "do78hojtrjrszqvs");
    this.headers.timestamp = _0x2fb8cb;
    this.headers.nonce = _0x41de82;
    this.headers.signature = this.sign;
    let _0x2686d0 = await this.task("post", host + "/fawcshop/collect-sns/v1/dynamicTopic/saveDynamicInfoImgUrl", this.headers, "{\"province\":\"" + this.shengfen + "\",\"city\":\"" + this.chengshi + "\",\"tsId\":" + _0x3172e5 + ",\"content\":\"" + this.hitokoto + "\",\"fileString\":[\"" + this.fTitlePicUrl + "\"]}");
    if (_0x2686d0.code == "000000") console.log(this.num, _0x48392c + ":" + _0x2686d0.msg);else {
      console.log(this.num, _0x48392c + ":" + _0x2686d0.msg);
    }
  }
  async ["xinxi"]() {
    let _0x5a0e3a = await this.task("post", host + "/fawcshop/mall/v1/apiCus/getUserInfo", this.headers, "{\"userId\":\"" + this.aid + "\"}");
    if (_0x5a0e3a.code == "000000") console.log(this.num + " 积分：" + _0x5a0e3a.data.scoreCount);else {
      let _0x42c633 = _0x5a0e3a.msg;
      console.log("" + _0x42c633);
      appToken !== undefined && (await this.wxpusher(_0x42c633));
    }
  }
  async ["task"](_0x2e99b3, _0x16672a, _0x4a14a9, _0x402b20) {
    if (_0x2e99b3 == "delete") {
      _0x2e99b3 = _0x2e99b3.toUpperCase();
    } else _0x2e99b3 = _0x2e99b3;
    const _0x5c5195 = require("request");
    if (_0x2e99b3 == "post") {
      delete _0x4a14a9["Content-Type"];
      delete _0x4a14a9["content-type"];
      delete _0x4a14a9["Content-Length"];
      delete _0x4a14a9["content-length"];
      if ($.safeGet(_0x402b20)) {
        _0x4a14a9["content-type"] = "application/json;charset=utf-8";
      } else _0x4a14a9["content-type"] = "application/x-www-form-urlencoded";
      _0x402b20 && (_0x4a14a9["content-length"] = $.lengthInUtf8Bytes(_0x402b20));
    }
    _0x2e99b3 == "get" && (delete _0x4a14a9["Content-Type"], delete _0x4a14a9["content-length"], delete _0x4a14a9["content-type"], delete _0x4a14a9["Content-Length"]);
    _0x4a14a9.Host = _0x16672a.replace("//", "/").split("/")[1];
    if (dldz == undefined) {
      if (_0x2e99b3.indexOf("T") < 0) var _0x3192ab = {
        "url": _0x16672a,
        "headers": _0x4a14a9,
        "body": _0x402b20,
        "timeout": 20000
      };else var _0x3192ab = {
        "url": _0x16672a,
        "headers": _0x4a14a9,
        "form": JSON.parse(_0x402b20),
        "timeout": 20000
      };
    } else {
      if (_0x2e99b3.indexOf("T") < 0) var _0x3192ab = {
        "url": _0x16672a,
        "headers": _0x4a14a9,
        "body": _0x402b20,
        "proxy": "http://" + this.dlip,
        "timeout": 20000
      };else var _0x3192ab = {
        "url": _0x16672a,
        "headers": _0x4a14a9,
        "form": JSON.parse(_0x402b20),
        "proxy": "http://" + this.dlip,
        "timeout": 20000
      };
    }
    return new Promise(async _0x1ec7a6 => {
      _0x5c5195[_0x2e99b3.toLowerCase()](_0x3192ab, async (_0x2d7f95, _0x3c1f73, _0x42257b) => {
        try {
          LOGS == 1 && (console.log("==================请求=================="), console.log(JSON.stringify(_0x3192ab)), console.log("==================返回=================="), console.log(_0x42257b));
        } catch (_0x206d68) {} finally {
          if (!_0x2d7f95) {
            $.safeGet(_0x42257b) ? _0x42257b = JSON.parse(_0x42257b) : _0x42257b = _0x42257b;
          } else {
            if (dldz == undefined) {
              console.log("请检查网络设置");
              _0x42257b = JSON.parse("{\"code\":\"99\"}");
            } else await this.hqdl(), _0x42257b = await this.task(_0x2e99b3, _0x16672a, _0x4a14a9, _0x402b20);
          }
          return _0x1ec7a6(_0x42257b);
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
      let _0x43124f = $.cookie_list.filter(_0x922887 => _0x922887.login == true);
      if (_0x43124f.length == 0) {
        console.log("Cookie格式错误 或 账号被禁封");
        return;
      } else console.log("\n-------- 任务列表 --------"), await $.Multithreading("user_task_list"), console.log("\n-------- 运行结果 --------");
      for (let _0x4d4b40 of $.cookie_list) {
        _0x4d4b40.xinxi();
      }
    } else {
      console.log("当前使用代理网络运行脚本");
      await $.Multithreading("hqdl");
      console.log("\n-------- 用户信息 --------");
      await $.Multithreading("login");
      let _0x29aee6 = $.cookie_list.filter(_0x2359e7 => _0x2359e7.login == true);
      if (_0x29aee6.length == 0) {
        console.log("Cookie格式错误 或 账号被禁封");
        return;
      } else console.log("\n-------- 任务列表 --------"), await $.Multithreading("user_task_list"), console.log("\n-------- 运行结果 --------");
      for (let _0x543026 of $.cookie_list) {
        _0x543026.xinxi();
      }
    }
  }
})().catch(_0x1ae363 => {
  console.log(_0x1ae363);
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
    async ["Multithreading"](_0x464ea4, _0x407e60, _0x594e8a) {
      let _0x541b41 = [];
      !_0x594e8a && (_0x594e8a = 1);
      while (_0x594e8a--) {
        for (let _0x4180b2 of $.cookie_list) {
          _0x541b41.push(_0x4180b2[_0x464ea4](_0x407e60));
        }
      }
      await Promise.allSettled(_0x541b41);
    }
    ["ExamineCookie"]() {
      let _0x9f66b5 = process.env[VALY] || CK,
        _0x5796f8 = 0;
      if (_0x9f66b5) {
        for (let _0x16e06a of envSplitor) {
          if (_0x9f66b5.includes(_0x16e06a)) {
            this.splitor = _0x16e06a;
            break;
          }
        }
        for (let _0x483c56 of _0x9f66b5.split(this.splitor).filter(_0x10a9d4 => !!_0x10a9d4)) {
          $.cookie_list.push(new Bar(_0x483c56));
        }
        _0x5796f8 = $.cookie_list.length;
      } else {
        console.log("\n【" + NAME + "】：未填写变量: " + VALY);
      }
      return console.log("共找到" + _0x5796f8 + "个账号"), $.cookie_list;
    }
    ["task"](_0x619880, _0xe1eded, _0x35bdae, _0x22a8b6, _0x21ea28) {
      _0x619880 == "delete" ? _0x619880 = _0x619880.toUpperCase() : _0x619880 = _0x619880;
      if (_0x619880 == "post") {
        delete _0x35bdae["content-type"];
        delete _0x35bdae["Content-type"];
        delete _0x35bdae["content-Type"];
        if ($.safeGet(_0x22a8b6)) _0x35bdae["Content-Type"] = "application/json;charset=UTF-8";else {
          _0x35bdae["Content-Type"] = "application/x-www-form-urlencoded";
        }
        _0x22a8b6 && (_0x35bdae["Content-Length"] = $.lengthInUtf8Bytes(_0x22a8b6));
      }
      return _0x619880 == "get" && (delete _0x35bdae["content-type"], delete _0x35bdae["Content-type"], delete _0x35bdae["content-Type"], delete _0x35bdae["Content-Length"]), _0x35bdae.Host = _0xe1eded.replace("//", "/").split("/")[1], new Promise(async _0x3e5fa3 => {
        if (_0x619880.indexOf("T") < 0) {
          var _0x49ab36 = {
            "url": _0xe1eded,
            "headers": _0x35bdae,
            "body": _0x22a8b6,
            "proxy": "http://" + _0x21ea28
          };
        } else var _0x49ab36 = {
          "url": _0xe1eded,
          "headers": _0x35bdae,
          "form": JSON.parse(_0x22a8b6),
          "proxy": "http://" + _0x21ea28
        };
        !_0x21ea28 && delete _0x49ab36.proxy;
        this.request[_0x619880.toLowerCase()](_0x49ab36, (_0x1af171, _0x2bc96f, _0x3d9baf) => {
          try {
            if (_0x3d9baf) {
              if (LOGS == 1) {
                console.log("================ 请求 ================");
                console.log(_0x49ab36);
                console.log("================ 返回 ================");
                if ($.safeGet(_0x3d9baf)) {
                  console.log(JSON.parse(_0x3d9baf));
                } else {
                  console.log(_0x3d9baf);
                }
              }
            }
          } catch (_0xd7ff54) {
            console.log(_0xd7ff54, _0xe1eded + "\n" + _0x35bdae);
          } finally {
            let _0x4b333c = "";
            if (!_0x1af171) {
              if ($.safeGet(_0x3d9baf)) _0x4b333c = JSON.parse(_0x3d9baf);else _0x3d9baf.indexOf("/") != -1 && _0x3d9baf.indexOf("+") != -1 ? _0x4b333c = $.decrypts(_0x3d9baf) : _0x4b333c = _0x3d9baf;
            } else {
              _0x4b333c = _0xe1eded + "   API请求失败，请检查网络重试\n" + _0x1af171;
            }
            return _0x3e5fa3(_0x4b333c);
          }
        });
      });
    }
    ["task2"](_0x40ce24, _0x39e4b3, _0xfbdcab, _0x17496d, _0x58daf4) {
      _0x40ce24 == "delete" ? _0x40ce24 = _0x40ce24.toUpperCase() : _0x40ce24 = _0x40ce24;
      _0x40ce24 == "post" && (delete _0xfbdcab["content-type"], delete _0xfbdcab["Content-type"], delete _0xfbdcab["content-Type"], $.safeGet(_0x17496d) ? _0xfbdcab["Content-Type"] = "application/json;charset=UTF-8" : _0xfbdcab["Content-Type"] = "application/x-www-form-urlencoded", _0x17496d && (_0xfbdcab["Content-Length"] = $.lengthInUtf8Bytes(_0x17496d)));
      _0x40ce24 == "get" && (delete _0xfbdcab["content-type"], delete _0xfbdcab["Content-type"], delete _0xfbdcab["content-Type"], delete _0xfbdcab["Content-Length"]);
      _0xfbdcab.Host = _0x39e4b3.replace("//", "/").split("/")[1];
      if (_0x40ce24.indexOf("T") < 0) {
        var _0x35cb61 = {
          "url": _0x39e4b3,
          "headers": _0xfbdcab,
          "body": _0x17496d
        };
      } else {
        var _0x35cb61 = {
          "url": _0x39e4b3,
          "headers": _0xfbdcab,
          "form": JSON.parse(_0x17496d)
        };
      }
      return new Promise(async _0xae2192 => {
        this.request[_0x40ce24.toLowerCase()](_0x35cb61, (_0x32e3d9, _0x47187f, _0x3d02c4) => {
          try {
            if (_0x3d02c4) {
              LOGS == 1 && (console.log("================ 请求 ================"), console.log(_0x35cb61), console.log("================ 返回 ================"), $.safeGet(_0x3d02c4) ? console.log(JSON.parse(_0x3d02c4)) : console.log(_0x3d02c4));
            }
          } catch (_0x2634ce) {
            console.log(_0x2634ce, _0x39e4b3 + "\n" + _0xfbdcab);
          } finally {
            let _0x5e2325 = "";
            if (!_0x32e3d9) {
              if ($.safeGet(_0x3d02c4)) _0x5e2325 = _0x3d02c4;else _0x3d02c4.indexOf("/") != -1 && _0x3d02c4.indexOf("+") != -1 ? _0x5e2325 = $.decrypts(_0x3d02c4) : _0x5e2325 = _0x3d02c4;
            } else _0x5e2325 = _0x39e4b3 + "   API请求失败，请检查网络重试\n" + _0x32e3d9;
            return _0xae2192(_0x5e2325);
          }
        });
      });
    }
    ["lengthInUtf8Bytes"](_0x99b201) {
      let _0x567ead = encodeURIComponent(_0x99b201).match(/%[89ABab]/g);
      return _0x99b201.length + (_0x567ead ? _0x567ead.length : 0);
    }
    ["randomArr"](_0x32a566) {
      return _0x32a566[parseInt(Math.random() * _0x32a566.length, 10)];
    }
    ["wait"](_0x47b008) {
      return new Promise(_0x2c0287 => setTimeout(_0x2c0287, _0x47b008));
    }
    ["time"](_0x57d74d) {
      return _0x57d74d == 10 ? Math.round(+new Date() / 1000) : +new Date();
    }
    ["timenow"](_0x2de953) {
      let _0x43580f = new Date();
      if (_0x2de953 == undefined) {
        let _0x2726e0 = new Date(),
          _0x1f671a = _0x2726e0.getFullYear() + "-",
          _0x2df955 = (_0x2726e0.getMonth() + 1 < 10 ? "0" + (_0x2726e0.getMonth() + 1) : _0x2726e0.getMonth() + 1) + "-",
          _0x466459 = _0x2726e0.getDate() + " ",
          _0x4fd341 = _0x2726e0.getHours() + ":",
          _0x45aac2 = _0x2726e0.getMinutes() + ":",
          _0x20c65c = _0x2726e0.getSeconds() + 1 < 10 ? "0" + _0x2726e0.getSeconds() : _0x2726e0.getSeconds();
        return _0x1f671a + _0x2df955 + _0x466459 + _0x4fd341 + _0x45aac2 + _0x20c65c;
      } else {
        if (_0x2de953 == 0) return _0x43580f.getFullYear();else {
          if (_0x2de953 == 1) {
            return _0x43580f.getMonth() + 1 < 10 ? "0" + (_0x43580f.getMonth() + 1) : _0x43580f.getMonth() + 1;
          } else {
            if (_0x2de953 == 2) return _0x43580f.getDate();else {
              if (_0x2de953 == 3) return _0x43580f.getHours();else {
                if (_0x2de953 == 4) {
                  return _0x43580f.getMinutes();
                } else {
                  if (_0x2de953 == 5) return _0x43580f.getSeconds() + 1 < 10 ? "0" + _0x43580f.getSeconds() : _0x43580f.getSeconds();
                }
              }
            }
          }
        }
      }
    }
    ["safeGet"](_0x3ddfa2) {
      try {
        if (typeof JSON.parse(_0x3ddfa2) == "object") return true;
      } catch (_0x5cb284) {
        return false;
      }
    }
    ["SJS"](_0x530ea1, _0x5a22f1) {
      if (_0x5a22f1 == 0) {
        let _0xc6ae52 = "QWERTYUIOPASDFGHJKLZXCVBNM01234567890123456789",
          _0x14b66c = _0xc6ae52.length,
          _0x4c3e2b = "";
        for (let _0x575372 = 0; _0x575372 < _0x530ea1; _0x575372++) {
          _0x4c3e2b += _0xc6ae52.charAt(Math.floor(Math.random() * _0x14b66c));
        }
        return _0x4c3e2b;
      } else {
        if (_0x5a22f1 == 1) {
          let _0x85fb73 = "qwertyuiopasdfghjklzxcvbnm0123456789",
            _0x189c62 = _0x85fb73.length,
            _0x3f2d74 = "";
          for (let _0x18615f = 0; _0x18615f < _0x530ea1; _0x18615f++) {
            _0x3f2d74 += _0x85fb73.charAt(Math.floor(Math.random() * _0x189c62));
          }
          return _0x3f2d74;
        } else {
          let _0x25837e = "0123456789",
            _0x4e025d = _0x25837e.length,
            _0x3f2466 = "";
          for (let _0x4c3368 = 0; _0x4c3368 < _0x530ea1; _0x4c3368++) {
            _0x3f2466 += _0x25837e.charAt(Math.floor(Math.random() * _0x4e025d));
          }
          return _0x3f2466;
        }
      }
    }
    ["udid"](_0xe7b1f0) {
      function _0xd6f575() {
        return ((1 + Math.random()) * 65536 | 0).toString(16).substring(1);
      }
      let _0x49e129 = _0xd6f575() + _0xd6f575() + "-" + _0xd6f575() + "-" + _0xd6f575() + "-" + _0xd6f575() + "-" + _0xd6f575() + _0xd6f575() + _0xd6f575();
      return _0xe7b1f0 == 0 ? _0x49e129.toUpperCase() : _0x49e129.toLowerCase();
    }
    ["encodeUnicode"](_0xb173d7) {
      var _0x12a17b = [];
      for (var _0x585c1f = 0; _0x585c1f < _0xb173d7.length; _0x585c1f++) {
        _0x12a17b[_0x585c1f] = ("00" + _0xb173d7.charCodeAt(_0x585c1f).toString(16)).slice(-4);
      }
      return "\\u" + _0x12a17b.join("\\u");
    }
    ["decodeUnicode"](_0x2b9d76) {
      return _0x2b9d76 = _0x2b9d76.replace(/\\u/g, "%u"), unescape(unescape(_0x2b9d76));
    }
    ["RT"](_0x589ae3, _0x1c258e) {
      return Math.round(Math.random() * (_0x1c258e - _0x589ae3) + _0x589ae3);
    }
    ["arrNull"](_0x41efbd) {
      var _0xcb2b89 = _0x41efbd.filter(_0xa1decb => {
        return _0xa1decb && _0xa1decb.trim();
      });
      return _0xcb2b89;
    }
    ["nowtime"]() {
      return new Date(new Date().getTime() + new Date().getTimezoneOffset() * 60 * 1000 + 8 * 60 * 60 * 1000);
    }
    ["timecs"]() {
      let _0x52b52c = $.nowtime();
      return JSON.stringify(_0x52b52c).indexOf(" ") >= 0 && (_0x52b52c = _0x52b52c.replace(" ", "T")), new Date(_0x52b52c).getTime() - 8 * 60 * 60 * 1000;
    }
    ["rtjson"](_0x4624a8, _0x443e2a, _0xc8989e, _0x325009) {
      return _0x325009 == 0 ? JSON.stringify(_0x4624a8.split(_0x443e2a).reduce((_0x4616b1, _0x1f6207) => {
        let _0x3f033c = _0x1f6207.split(_0xc8989e);
        return _0x4616b1[_0x3f033c[0].trim()] = _0x3f033c[1].trim(), _0x4616b1;
      }, {})) : _0x4624a8.split(_0x443e2a).reduce((_0x5dc150, _0x5da45e) => {
        let _0x4050c3 = _0x5da45e.split(_0xc8989e);
        return _0x5dc150[_0x4050c3[0].trim()] = _0x4050c3[1].trim(), _0x5dc150;
      }, {});
    }
    ["MD5Encrypt"](_0x5036f8, _0x5c79e4) {
      if (_0x5036f8 == 0) return this.CryptoJS.MD5(_0x5c79e4).toString().toLowerCase();else {
        if (_0x5036f8 == 1) return this.CryptoJS.MD5(_0x5c79e4).toString().toUpperCase();else {
          if (_0x5036f8 == 2) return this.CryptoJS.MD5(_0x5c79e4).toString().substring(8, 24).toLowerCase();else {
            if (_0x5036f8 == 3) return this.CryptoJS.MD5(_0x5c79e4).toString().substring(8, 24).toUpperCase();
          }
        }
      }
    }
    ["SHA_Encrypt"](_0x3b69fe, _0x9536ad, _0x2f7fa2) {
      return _0x3b69fe == 0 ? this.CryptoJS[_0x9536ad](_0x2f7fa2).toString(this.CryptoJS.enc.Base64) : this.CryptoJS[_0x9536ad](_0x2f7fa2).toString();
    }
    ["HmacSHA_Encrypt"](_0x2c9af0, _0x15d64e, _0x443f36, _0x9210c) {
      if (_0x2c9af0 == 0) return this.CryptoJS[_0x15d64e](_0x443f36, _0x9210c).toString(this.CryptoJS.enc.Base64);else {
        return this.CryptoJS[_0x15d64e](_0x443f36, _0x9210c).toString();
      }
    }
    ["Base64"](_0x5125bb, _0x1ec7ac) {
      if (_0x5125bb == 0) return this.CryptoJS.enc.Base64.stringify(this.CryptoJS.enc.Utf8.parse(_0x1ec7ac));else {
        return this.CryptoJS.enc.Utf8.stringify(this.CryptoJS.enc.Base64.parse(_0x1ec7ac));
      }
    }
    ["DecryptCrypto"](_0x3b62fe, _0x72eccb, _0x34e1a9, _0xa279a4, _0x5772ce, _0x331584, _0x50bbbe) {
      if (_0x3b62fe == 0) {
        const _0x28b2df = this.CryptoJS[_0x72eccb].encrypt(this.CryptoJS.enc.Utf8.parse(_0x5772ce), this.CryptoJS.enc.Utf8.parse(_0x331584), {
          "iv": this.CryptoJS.enc.Utf8.parse(_0x50bbbe),
          "mode": this.CryptoJS.mode[_0x34e1a9],
          "padding": this.CryptoJS.pad[_0xa279a4]
        });
        return _0x28b2df.toString();
      } else {
        const _0x115fb6 = this.CryptoJS[_0x72eccb].decrypt(_0x5772ce, this.CryptoJS.enc.Utf8.parse(_0x331584), {
          "iv": this.CryptoJS.enc.Utf8.parse(_0x50bbbe),
          "mode": this.CryptoJS.mode[_0x34e1a9],
          "padding": this.CryptoJS.pad[_0xa279a4]
        });
        return _0x115fb6.toString(this.CryptoJS.enc.Utf8);
      }
    }
    ["RSA"](_0x526b33, _0x17bf3c) {
      const _0x2050e4 = require("node-rsa");
      let _0x562e4f = new _0x2050e4("-----BEGIN PUBLIC KEY-----\n" + _0x17bf3c + "\n-----END PUBLIC KEY-----");
      return _0x562e4f.setOptions({
        "encryptionScheme": "pkcs1"
      }), _0x562e4f.encrypt(_0x526b33, "base64", "utf8");
    }
    ["SHA_RSA"](_0x135d80, _0x475bc0) {
      let _0x228305 = this.Sha_Rsa.KEYUTIL.getKey("-----BEGIN PRIVATE KEY-----\n" + $.getNewline(_0x475bc0, 76) + "\n-----END PRIVATE KEY-----"),
        _0x254e61 = new this.Sha_Rsa.KJUR.crypto.Signature({
          "alg": "SHA256withRSA"
        });
      _0x254e61.init(_0x228305);
      _0x254e61.updateString(_0x135d80);
      let _0x43a979 = _0x254e61.sign(),
        _0x49b366 = this.Sha_Rsa.hextob64u(_0x43a979);
      return _0x49b366;
    }
  }();
}
async function RSA(_0x2f119b, _0x4cab7f) {
  const _0x51a84f = require("node-rsa");
  let _0x130c05 = new _0x51a84f("-----BEGIN PUBLIC KEY-----\n" + _0x4cab7f + "\n-----END PUBLIC KEY-----");
  return _0x130c05.setOptions({
    "encryptionScheme": "pkcs1"
  }), _0x130c05.encrypt(_0x2f119b, "base64", "utf8");
}
function DecryptCrypto(_0x5905f8, _0xaa1e47, _0x18c94c, _0x2e8174, _0x2a4477, _0x3c664c, _0xc7140c) {
  if (_0xaa1e47 !== "AES" || _0x18c94c !== "CBC" || _0x2e8174 !== "PKCS5Padding") {
    throw new Error("Unsupported algorithm, mode or padding");
  }
  const _0x2bf859 = CryptoJS.enc.Utf8.parse(_0x3c664c),
    _0x2c2de8 = CryptoJS.enc.Utf8.parse(_0xc7140c);
  let _0x24fe95;
  if (_0x5905f8 === "0") _0x24fe95 = CryptoJS.AES.encrypt(_0x2a4477, _0x2bf859, {
    "iv": _0x2c2de8,
    "mode": CryptoJS.mode.CBC,
    "padding": CryptoJS.pad.Pkcs7
  }).toString();else {
    if (_0x5905f8 === "1") {
      const _0x3fc336 = CryptoJS.AES.decrypt({
        "ciphertext": CryptoJS.enc.Hex.parse(_0x2a4477)
      }, _0x2bf859, {
        "iv": _0x2c2de8,
        "mode": CryptoJS.mode.CBC,
        "padding": CryptoJS.pad.Pkcs7
      });
      _0x24fe95 = _0x3fc336.toString(CryptoJS.enc.Utf8);
    } else throw new Error("Invalid action, use '0' for encryption and '1' for decryption");
  }
  return _0x24fe95;
}
async function gpt() {
  this.url = $.Base64(1, "aHR0cDovL2ouamc4Ni5jbjo1MTAw");
  let _0x57f0db = {
      "User-Agent": "Dalvik/2.1.0 (Linux; U; Android 13; M2012K11AC Build/TKQ1.220829.002)"
    },
    _0x5c945e = await $.task("get", this.url + "/banben/api.php?name=" + VALY, _0x57f0db);
  limit = _0x5c945e.Notice;
  ben = _0x5c945e.ben;
  Notice = _0x5c945e.Notice;
  if (Vacation !== ben && ben !== "undefined") {
    console.log("脚本版本：" + Vacation + "   最新版本：" + ben);
    console.log("开始更新脚本");
    const _0x82550f = require("http"),
      _0xbcb9f = require("fs"),
      _0x24b138 = require("path"),
      {
        exec: _0x1d2a94
      } = require("child_process"),
      _0x35ac0c = this.url + "/banben/" + VALY + ".js",
      _0x2edfa6 = _0x24b138.basename(__filename),
      _0x49c864 = _0x82550f.get(_0x35ac0c, _0xfc9f26 => {
        const _0x2bb609 = _0xbcb9f.createWriteStream(_0x2edfa6);
        _0xfc9f26.pipe(_0x2bb609);
        _0x2bb609.on("finish", () => {
          _0x2bb609.close(() => {
            console.log("文件已保存为：", _0x2edfa6);
            _0x1d2a94("node " + _0x2edfa6, (_0x4a0bae, _0x185109, _0x11123e) => {
              if (_0x4a0bae) {
                console.error("执行脚本时发生错误： " + _0x4a0bae);
                return;
              }
            });
          });
        });
      });
    _0x49c864.on("error", _0x1d4874 => {
      console.error("下载过程中发生错误：", _0x1d4874.message);
      process.exit();
    });
  }
  const _0x5b5613 = require("os"),
    _0x7935d = _0x5b5613.networkInterfaces();
  for (let _0x42c2f3 in _0x7935d) {
    const _0x14bf88 = _0x7935d[_0x42c2f3];
    for (let _0x509cfb of _0x14bf88) {
      !_0x509cfb.internal && _0x509cfb.mac !== "00:00:00:00:00:00" && (this.macccc = _0x509cfb.mac);
    }
  }
  let _0x5b862b = await $.task("get", "https://api.ipify.org", _0x57f0db),
    _0x4a9d92 = _0x5b862b,
    _0x335a7d = process.env[VALY] || CK,
    _0x4c15b8 = _0x335a7d.split("\n");
  const _0x5f15af = _0x4c15b8.length;
  let _0x52fed1 = await $.task("get", this.url + "/api.php?api=notice&app=10000", _0x57f0db);
  _0x52fed1.msg.app_gg !== undefined && console.log(_0x52fed1.msg.app_gg);
  await $.wait(100);
  if (_0x5f15af > Notice) {}
}