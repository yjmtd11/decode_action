//Wed Jul 24 2024 15:03:58 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
NAME = "红旗智联";
VALY = ["hqzl"];
CK = "";
let appToken = process.env.weixinToken,
  dldz = process.env.xqkdddl,
  host = "https://hqapp.faw.cn";
const Vacation = "1.0.2",
  CryptoJS = require("crypto-js"),
  envSplitor = ["\n", "@"],
  LOGS = 0;
usid = 0;
class Bar {
  constructor(_0x3cf13c) {
    this.Authorization = _0x3cf13c.split("#")[0];
    this.aid = _0x3cf13c.split("#")[1];
    this.shengfen = _0x3cf13c.split("#")[2];
    this.chengshi = _0x3cf13c.split("#")[3];
    this.num = ++usid;
    this.headers = {
      "User-Agent": "okhttp/4.9.2",
      "Authorization": this.Authorization,
      "aid": this.aid,
      "platform": "2",
      "o35xzbbp": "qjzsuioa",
      "version": "5.0.0"
    };
  }
  async ["hqdl"]() {
    let _0x10d76d = await $.task("get", dldz, {
      "User-Agent": "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Mobile Safari/537.36"
    });
    this.dlip = _0x10d76d.split("\n")[0];
    console.log("账号" + this.num + "：代理IP：" + this.dlip);
  }
  async ["user_task_list"]() {
    await this.renwuleibiao();
    await $.wait($.RT(3000, 5000));
    await this.huati();
  }
  async ["login"]() {
    let _0x1722ea = await this.task("post", host + "/fawcshop/mall/v1/apiCus/getUserInfo", this.headers, "{\"userId\":\"" + this.aid + "\"}");
    if (_0x1722ea.code == "000000") {
      this.login = true;
      this.num = _0x1722ea.data.nickname;
      this.kcAppId = _0x1722ea.data.kcAppId;
      console.log(this.num + " 积分：" + _0x1722ea.data.scoreCount);
      _0x1722ea.data.isSignIn == 0 && (await this.qiandao());
    } else {
      let _0x34781f = _0x1722ea.msg;
      console.log("" + _0x34781f);
      if (appToken !== undefined) {
        await this.wxpusher(_0x34781f);
      }
      this.login = false;
      return;
    }
  }
  async ["wxpusher"](_0x5bb4cb) {
    let _0x401ccc = {
        "X-Requested-With": "com.tencent.mm",
        "User-Agent": "Dalvik/2.1.0 (Linux; U; Android 13; M2012K11AC Build/TKQ1.220829.002)"
      },
      _0x27200e = await this.task("get", "https://wxpusher.zjiecode.com/api/send/message/?appToken=" + appToken.split("#")[0] + "&content=" + encodeURI("" + NAME + _0x5bb4cb) + "&uid=" + appToken.split("#")[1], _0x401ccc);
    _0x27200e.code == 1000 ? console.log("微信通知" + _0x27200e.msg) : console.log("微信通知失败");
  }
  async ["renwuleibiao"]() {
    let _0x550612 = "任务列表",
      _0x228229 = await this.task("get", host + "/fawcshop/members/task/v3/getTaskList", this.headers);
    if (_0x228229.code == "000000") {
      let _0x228d33 = _0x228229.data.dailyTaskList,
        _0x2e0ee6 = _0x228d33.find(_0x3970e6 => _0x3970e6.taskCode === "PT-APP_share");
      _0x2e0ee6 && (await $.wait($.RT(3000, 5000)), await this.fenx());
      let _0xfc8610 = _0x228d33.find(_0xf20efa => _0xf20efa.taskCode === "PT-APP_comment");
      if (_0xfc8610) {
        await $.wait($.RT(3000, 5000));
        await this.leibiao();
        await $.wait($.RT(3000, 5000));
        await this._getText();
        await this.fapinglun();
      }
    } else {
      let _0xbe07e = _0x228229.msg;
      console.log(this.num + " " + _0x550612 + "：" + _0xbe07e);
    }
  }
  async ["leibiao"]() {
    let _0xed8423 = "列表",
      _0xa74eeb = await this.task("get", host + "/fawcshop/collect-sns/v1/dynamicTopic/getDynamicList?pageNo=1&refreshTime=" + $.timenow() + "&likeFlag=0&orderByRule=RULE15&pageSize=10", this.headers, "lotteryId=47&_csrf=" + this.cjid);
    if (_0xa74eeb.code == "000000") this.invid = _0xa74eeb.data[0].picList[0].invId, this.fTitlePicUrl = _0xa74eeb.data[$.RT(0, 9)].fTitlePicUrl;else {
      let _0x9779ec = _0xa74eeb.msg;
      console.log(this.num + " " + _0xed8423 + "：" + _0x9779ec);
    }
  }
  async ["qiandao"]() {
    let _0x58b46c = "签到",
      _0x41ca71 = $.time(13),
      _0x4cdbbc = $.SJS(64, 1);
    this.sign = DecryptCrypto("0", "AES", "CBC", "PKCS5Padding", "{\"scoreType\":\"2\"}" + _0x41ca71 + _0x4cdbbc, "rnt69cfvwbtr7yss", "do78hojtrjrszqvs");
    this.headers.signature = this.sign;
    this.headers.timestamp = _0x41ca71;
    this.headers.nonce = _0x4cdbbc;
    let _0x1b0212 = await this.task("post", host + "/fawcshop/collect-public/v1/score/addScore", this.headers, "{\"scoreType\":\"2\"}");
    _0x1b0212.code == "000000" ? console.log(this.num, _0x58b46c + ":" + _0x1b0212.data.score) : console.log(this.num, _0x58b46c + ":" + _0x1b0212.msg);
  }
  async ["_getText"]() {
    let _0x35fa96 = await this.task("get", "https://v1.hitokoto.cn/?c=e", this.headers);
    this.hitokoto = _0x35fa96.hitokoto;
  }
  async ["fapinglun"]() {
    let _0x2bb9ab = "发评论",
      _0x4b6670 = $.time(13),
      _0xcecb1d = $.SJS(64, 1);
    this.sign = DecryptCrypto("0", "AES", "CBC", "PKCS5Padding", "{\"commentContext\":\"" + this.hitokoto + "\",\"commentType\":\"8500\",\"contentId\":\"" + this.invid + "\",\"fileString\":[],\"parentId\":\"0\"}" + _0x4b6670 + _0xcecb1d, "rnt69cfvwbtr7yss", "do78hojtrjrszqvs");
    this.headers.timestamp = _0x4b6670;
    this.headers.nonce = _0xcecb1d;
    this.headers.signature = this.sign;
    let _0x5b702a = await this.task("post", host + "/fawcshop/collect-sns/v1/dynamicTopic/saveCommentDetailsRevision", this.headers, "{\"commentContext\":\"" + this.hitokoto + "\",\"commentType\":\"8500\",\"contentId\":\"" + this.invid + "\",\"parentId\":\"0\",\"fileString\":[]}");
    if (_0x5b702a.code == "000000") console.log(this.num, _0x2bb9ab + ":" + _0x5b702a.msg);else {
      console.log(this.num, _0x2bb9ab + ":" + _0x5b702a.msg);
    }
  }
  async ["huati"]() {
    let _0x5b2821 = "话题",
      _0x20f15e = await this.task("get", host + "/fawcshop/collect-sns/v1/dynamicTopic/getTopicList?pageNo=1&pageSize=10&keyWord=&isMyTopic=false ", this.headers);
    if (_0x20f15e.code == "000000") {
      let _0x2c47b2 = _0x20f15e.data.result[0].id;
      await $.wait($.RT(1000, 3000));
      await this._getText();
      await this.fadongtai(_0x2c47b2);
    } else {
      let _0x58bdd2 = _0x20f15e.msg;
      console.log(this.num + " " + _0x5b2821 + "：" + _0x58bdd2);
    }
  }
  async ["fadongtai"](_0x5330f2) {
    let _0x216442 = "发动态",
      _0x11b4dc = $.time(13),
      _0x17ebdd = $.SJS(64, 1);
    this.sign = DecryptCrypto("0", "AES", "CBC", "PKCS5Padding", "{\"city\":\"" + this.chengshi + "\",\"content\":\"" + this.hitokoto + "\",\"fileString\":[\"" + this.fTitlePicUrl + "\"],\"province\":\"" + this.shengfen + "\",\"tsId\":" + _0x5330f2 + "}" + _0x11b4dc + _0x17ebdd, "rnt69cfvwbtr7yss", "do78hojtrjrszqvs");
    this.headers.timestamp = _0x11b4dc;
    this.headers.nonce = _0x17ebdd;
    this.headers.signature = this.sign;
    let _0x2d95cf = await this.task("post", host + "/fawcshop/collect-sns/v1/dynamicTopic/saveDynamicInfoImgUrl", this.headers, "{\"province\":\"" + this.shengfen + "\",\"city\":\"" + this.chengshi + "\",\"tsId\":" + _0x5330f2 + ",\"content\":\"" + this.hitokoto + "\",\"fileString\":[\"" + this.fTitlePicUrl + "\"]}");
    if (_0x2d95cf.code == "000000") {
      console.log(this.num, _0x216442 + ":" + _0x2d95cf.msg);
      await $.wait($.RT(1000, 3000));
      await this.dongtaileibiao();
    } else {
      console.log(this.num, _0x216442 + ":" + _0x2d95cf.msg);
    }
  }
  async ["dongtaileibiao"]() {
    let _0x5a5ec0 = "动态列表",
      _0x9ed5b1 = await this.task("get", host + "/fawcshop/collect-sns/v1/dynamicTopic/getDynamicList?visitedAid=" + this.kcAppId + "&pageNo=1&refreshTime=" + $.timenow() + "&likeFlag=1&pageSize=10", this.headers);
    if (_0x9ed5b1.code == "000000") {
      let _0x4b7e1d = _0x9ed5b1.data.length,
        _0x3317a0 = _0x9ed5b1.data[_0x4b7e1d - 1].picList[0].invId;
      await $.wait($.RT(1000, 3000));
      await this.shandongtai(_0x3317a0);
    } else console.log(this.num, _0x5a5ec0 + ":" + _0x9ed5b1.msg);
  }
  async ["shandongtai"](_0x43fd09) {
    let _0x4df09d = "删动态",
      _0x32758c = await this.task("post", host + "/fawcshop/collect-sns/v1/dynamicTopic/deleteInvitationById", this.headers, "{\"id\":" + _0x43fd09 + ",\"busType\":1}");
    _0x32758c.code == "000000" ? console.log(this.num, _0x4df09d + "成功") : console.log(this.num, _0x4df09d + ":" + _0x32758c.msg);
  }
  async ["fenx"]() {
    let _0x52ab2c = "分享",
      _0x356574 = $.time(13),
      _0x183f7f = $.SJS(64, 1);
    this.sign = DecryptCrypto("0", "AES", "CBC", "PKCS5Padding", "{\"scoreType\":\"4\"}" + _0x356574 + _0x183f7f, "rnt69cfvwbtr7yss", "do78hojtrjrszqvs");
    this.headers.signature = this.sign;
    this.headers.timestamp = _0x356574;
    this.headers.nonce = _0x183f7f;
    let _0x53fa39 = await this.task("post", host + "/fawcshop/collect-public/v1/score/addScore", this.headers, "{\"scoreType\":\"4\"}");
    _0x53fa39.code == "000000" ? console.log(this.num, _0x52ab2c + ":" + _0x53fa39.data.score) : console.log(this.num, _0x52ab2c + ":" + _0x53fa39.msg);
  }
  async ["xinxi"]() {
    let _0x232af7 = await this.task("post", host + "/fawcshop/mall/v1/apiCus/getUserInfo", this.headers, "{\"userId\":\"" + this.aid + "\"}");
    if (_0x232af7.code == "000000") console.log(this.num + " 积分：" + _0x232af7.data.scoreCount);else {
      let _0x1d4014 = _0x232af7.msg;
      console.log("" + _0x1d4014);
      appToken !== undefined && (await this.wxpusher(_0x1d4014));
    }
  }
  async ["task"](_0x2bb033, _0xbe0cb, _0x43e450, _0x46a536) {
    _0x2bb033 == "delete" ? _0x2bb033 = _0x2bb033.toUpperCase() : _0x2bb033 = _0x2bb033;
    const _0x165a32 = require("request");
    if (_0x2bb033 == "post") {
      delete _0x43e450["Content-Type"];
      delete _0x43e450["content-type"];
      delete _0x43e450["Content-Length"];
      delete _0x43e450["content-length"];
      if ($.safeGet(_0x46a536)) {
        _0x43e450["content-type"] = "application/json;charset=utf-8";
      } else _0x43e450["content-type"] = "application/x-www-form-urlencoded";
      _0x46a536 && (_0x43e450["content-length"] = $.lengthInUtf8Bytes(_0x46a536));
    }
    _0x2bb033 == "get" && (delete _0x43e450["Content-Type"], delete _0x43e450["content-length"], delete _0x43e450["content-type"], delete _0x43e450["Content-Length"]);
    _0x43e450.Host = _0xbe0cb.replace("//", "/").split("/")[1];
    if (dldz == undefined) {
      if (_0x2bb033.indexOf("T") < 0) var _0x100bff = {
        "url": _0xbe0cb,
        "headers": _0x43e450,
        "body": _0x46a536,
        "timeout": 20000
      };else {
        var _0x100bff = {
          "url": _0xbe0cb,
          "headers": _0x43e450,
          "form": JSON.parse(_0x46a536),
          "timeout": 20000
        };
      }
    } else {
      if (_0x2bb033.indexOf("T") < 0) {
        var _0x100bff = {
          "url": _0xbe0cb,
          "headers": _0x43e450,
          "body": _0x46a536,
          "proxy": "http://" + this.dlip,
          "timeout": 20000
        };
      } else var _0x100bff = {
        "url": _0xbe0cb,
        "headers": _0x43e450,
        "form": JSON.parse(_0x46a536),
        "proxy": "http://" + this.dlip,
        "timeout": 20000
      };
    }
    return new Promise(async _0x26df7b => {
      _0x165a32[_0x2bb033.toLowerCase()](_0x100bff, async (_0x46937c, _0x21c7c1, _0x52448d) => {
        try {
          if (LOGS == 1) {
            console.log("==================请求==================");
            console.log(JSON.stringify(_0x100bff));
            console.log("==================返回==================");
            console.log(_0x52448d);
          }
        } catch (_0x4f728c) {} finally {
          if (!_0x46937c) $.safeGet(_0x52448d) ? _0x52448d = JSON.parse(_0x52448d) : _0x52448d = _0x52448d;else {
            if (dldz == undefined) console.log("请检查网络设置"), _0x52448d = JSON.parse("{\"code\":\"99\"}");else {
              await this.hqdl();
              _0x52448d = await this.task(_0x2bb033, _0xbe0cb, _0x43e450, _0x46a536);
            }
          }
          return _0x26df7b(_0x52448d);
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
      let _0x569050 = $.cookie_list.filter(_0x18f684 => _0x18f684.login == true);
      if (_0x569050.length == 0) {
        console.log("Cookie格式错误 或 账号被禁封");
        return;
      } else {
        console.log("\n-------- 任务列表 --------");
        await $.Multithreading("user_task_list");
        console.log("\n-------- 运行结果 --------");
      }
      for (let _0x8ae10 of $.cookie_list) {
        _0x8ae10.xinxi();
      }
    } else {
      console.log("当前使用代理网络运行脚本");
      await $.Multithreading("hqdl");
      console.log("\n-------- 用户信息 --------");
      await $.Multithreading("login");
      let _0x48cd33 = $.cookie_list.filter(_0x20e4d6 => _0x20e4d6.login == true);
      if (_0x48cd33.length == 0) {
        console.log("Cookie格式错误 或 账号被禁封");
        return;
      } else console.log("\n-------- 任务列表 --------"), await $.Multithreading("user_task_list"), console.log("\n-------- 运行结果 --------");
      for (let _0xb44347 of $.cookie_list) {
        _0xb44347.xinxi();
      }
    }
  }
})().catch(_0x2cf341 => {
  console.log(_0x2cf341);
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
    async ["Multithreading"](_0x20c286, _0x19ddec, _0x427fa2) {
      let _0x3dfeb5 = [];
      !_0x427fa2 && (_0x427fa2 = 1);
      while (_0x427fa2--) {
        for (let _0x56f183 of $.cookie_list) {
          _0x3dfeb5.push(_0x56f183[_0x20c286](_0x19ddec));
        }
      }
      await Promise.allSettled(_0x3dfeb5);
    }
    ["ExamineCookie"]() {
      let _0x1abc13 = process.env[VALY] || CK,
        _0x3293cd = 0;
      if (_0x1abc13) {
        for (let _0x131ec1 of envSplitor) {
          if (_0x1abc13.includes(_0x131ec1)) {
            this.splitor = _0x131ec1;
            break;
          }
        }
        for (let _0x41f1ab of _0x1abc13.split(this.splitor).filter(_0x291fac => !!_0x291fac)) {
          $.cookie_list.push(new Bar(_0x41f1ab));
        }
        _0x3293cd = $.cookie_list.length;
      } else console.log("\n【" + NAME + "】：未填写变量: " + VALY);
      return console.log("共找到" + _0x3293cd + "个账号"), $.cookie_list;
    }
    ["task"](_0x5138c4, _0x4f5c1b, _0x1751d8, _0x565624, _0x47f8d8) {
      _0x5138c4 == "delete" ? _0x5138c4 = _0x5138c4.toUpperCase() : _0x5138c4 = _0x5138c4;
      if (_0x5138c4 == "post") {
        delete _0x1751d8["content-type"];
        delete _0x1751d8["Content-type"];
        delete _0x1751d8["content-Type"];
        $.safeGet(_0x565624) ? _0x1751d8["Content-Type"] = "application/json;charset=UTF-8" : _0x1751d8["Content-Type"] = "application/x-www-form-urlencoded";
        _0x565624 && (_0x1751d8["Content-Length"] = $.lengthInUtf8Bytes(_0x565624));
      }
      return _0x5138c4 == "get" && (delete _0x1751d8["content-type"], delete _0x1751d8["Content-type"], delete _0x1751d8["content-Type"], delete _0x1751d8["Content-Length"]), _0x1751d8.Host = _0x4f5c1b.replace("//", "/").split("/")[1], new Promise(async _0x1a3dc0 => {
        if (_0x5138c4.indexOf("T") < 0) var _0x3690e5 = {
          "url": _0x4f5c1b,
          "headers": _0x1751d8,
          "body": _0x565624,
          "proxy": "http://" + _0x47f8d8
        };else var _0x3690e5 = {
          "url": _0x4f5c1b,
          "headers": _0x1751d8,
          "form": JSON.parse(_0x565624),
          "proxy": "http://" + _0x47f8d8
        };
        if (!_0x47f8d8) {
          delete _0x3690e5.proxy;
        }
        this.request[_0x5138c4.toLowerCase()](_0x3690e5, (_0x361fb2, _0x5dfdf3, _0x2af4a6) => {
          try {
            _0x2af4a6 && LOGS == 1 && (console.log("================ 请求 ================"), console.log(_0x3690e5), console.log("================ 返回 ================"), $.safeGet(_0x2af4a6) ? console.log(JSON.parse(_0x2af4a6)) : console.log(_0x2af4a6));
          } catch (_0x1379e5) {
            console.log(_0x1379e5, _0x4f5c1b + "\n" + _0x1751d8);
          } finally {
            let _0x5323bc = "";
            if (!_0x361fb2) {
              if ($.safeGet(_0x2af4a6)) _0x5323bc = JSON.parse(_0x2af4a6);else {
                if (_0x2af4a6.indexOf("/") != -1 && _0x2af4a6.indexOf("+") != -1) {
                  _0x5323bc = $.decrypts(_0x2af4a6);
                } else {
                  _0x5323bc = _0x2af4a6;
                }
              }
            } else {
              _0x5323bc = _0x4f5c1b + "   API请求失败，请检查网络重试\n" + _0x361fb2;
            }
            return _0x1a3dc0(_0x5323bc);
          }
        });
      });
    }
    ["task2"](_0xfeb244, _0x169a0a, _0x3fd14f, _0x3bcd73, _0x452674) {
      if (_0xfeb244 == "delete") _0xfeb244 = _0xfeb244.toUpperCase();else {
        _0xfeb244 = _0xfeb244;
      }
      _0xfeb244 == "post" && (delete _0x3fd14f["content-type"], delete _0x3fd14f["Content-type"], delete _0x3fd14f["content-Type"], $.safeGet(_0x3bcd73) ? _0x3fd14f["Content-Type"] = "application/json;charset=UTF-8" : _0x3fd14f["Content-Type"] = "application/x-www-form-urlencoded", _0x3bcd73 && (_0x3fd14f["Content-Length"] = $.lengthInUtf8Bytes(_0x3bcd73)));
      _0xfeb244 == "get" && (delete _0x3fd14f["content-type"], delete _0x3fd14f["Content-type"], delete _0x3fd14f["content-Type"], delete _0x3fd14f["Content-Length"]);
      _0x3fd14f.Host = _0x169a0a.replace("//", "/").split("/")[1];
      if (_0xfeb244.indexOf("T") < 0) var _0x3c068f = {
        "url": _0x169a0a,
        "headers": _0x3fd14f,
        "body": _0x3bcd73
      };else var _0x3c068f = {
        "url": _0x169a0a,
        "headers": _0x3fd14f,
        "form": JSON.parse(_0x3bcd73)
      };
      return new Promise(async _0x3b0fcd => {
        this.request[_0xfeb244.toLowerCase()](_0x3c068f, (_0x4a2c8e, _0x265820, _0x51f59f) => {
          try {
            _0x51f59f && LOGS == 1 && (console.log("================ 请求 ================"), console.log(_0x3c068f), console.log("================ 返回 ================"), $.safeGet(_0x51f59f) ? console.log(JSON.parse(_0x51f59f)) : console.log(_0x51f59f));
          } catch (_0x5e6fb8) {
            console.log(_0x5e6fb8, _0x169a0a + "\n" + _0x3fd14f);
          } finally {
            let _0x5ad9ff = "";
            if (!_0x4a2c8e) {
              if ($.safeGet(_0x51f59f)) _0x5ad9ff = _0x51f59f;else _0x51f59f.indexOf("/") != -1 && _0x51f59f.indexOf("+") != -1 ? _0x5ad9ff = $.decrypts(_0x51f59f) : _0x5ad9ff = _0x51f59f;
            } else _0x5ad9ff = _0x169a0a + "   API请求失败，请检查网络重试\n" + _0x4a2c8e;
            return _0x3b0fcd(_0x5ad9ff);
          }
        });
      });
    }
    ["lengthInUtf8Bytes"](_0x462e41) {
      let _0x13a0d3 = encodeURIComponent(_0x462e41).match(/%[89ABab]/g);
      return _0x462e41.length + (_0x13a0d3 ? _0x13a0d3.length : 0);
    }
    ["randomArr"](_0x3a1f65) {
      return _0x3a1f65[parseInt(Math.random() * _0x3a1f65.length, 10)];
    }
    ["wait"](_0x56b112) {
      return new Promise(_0x4f6ca6 => setTimeout(_0x4f6ca6, _0x56b112));
    }
    ["time"](_0x2a81ea) {
      if (_0x2a81ea == 10) {
        return Math.round(+new Date() / 1000);
      } else return +new Date();
    }
    ["timenow"](_0x492f40) {
      let _0x2d11a0 = new Date();
      if (_0x492f40 == undefined) {
        let _0x4109c6 = new Date(),
          _0x4acd3b = _0x4109c6.getFullYear() + "-",
          _0x3933c2 = (_0x4109c6.getMonth() + 1 < 10 ? "0" + (_0x4109c6.getMonth() + 1) : _0x4109c6.getMonth() + 1) + "-",
          _0x4742aa = _0x4109c6.getDate() + " ",
          _0x6ca9aa = _0x4109c6.getHours() + ":",
          _0x1f8205 = _0x4109c6.getMinutes() + ":",
          _0xa364b8 = _0x4109c6.getSeconds() + 1 < 10 ? "0" + _0x4109c6.getSeconds() : _0x4109c6.getSeconds();
        return _0x4acd3b + _0x3933c2 + _0x4742aa + _0x6ca9aa + _0x1f8205 + _0xa364b8;
      } else {
        if (_0x492f40 == 0) return _0x2d11a0.getFullYear();else {
          if (_0x492f40 == 1) return _0x2d11a0.getMonth() + 1 < 10 ? "0" + (_0x2d11a0.getMonth() + 1) : _0x2d11a0.getMonth() + 1;else {
            if (_0x492f40 == 2) {
              return _0x2d11a0.getDate();
            } else {
              if (_0x492f40 == 3) return _0x2d11a0.getHours();else {
                if (_0x492f40 == 4) return _0x2d11a0.getMinutes();else {
                  if (_0x492f40 == 5) return _0x2d11a0.getSeconds() + 1 < 10 ? "0" + _0x2d11a0.getSeconds() : _0x2d11a0.getSeconds();
                }
              }
            }
          }
        }
      }
    }
    ["safeGet"](_0x2b344d) {
      try {
        if (typeof JSON.parse(_0x2b344d) == "object") return true;
      } catch (_0x28ec68) {
        return false;
      }
    }
    ["SJS"](_0x129464, _0x5d4320) {
      if (_0x5d4320 == 0) {
        let _0x209bdb = "QWERTYUIOPASDFGHJKLZXCVBNM01234567890123456789",
          _0xcf3ad = _0x209bdb.length,
          _0x315441 = "";
        for (let _0xa7e9c9 = 0; _0xa7e9c9 < _0x129464; _0xa7e9c9++) {
          _0x315441 += _0x209bdb.charAt(Math.floor(Math.random() * _0xcf3ad));
        }
        return _0x315441;
      } else {
        if (_0x5d4320 == 1) {
          let _0x42471d = "qwertyuiopasdfghjklzxcvbnm0123456789",
            _0x4a4250 = _0x42471d.length,
            _0x51547a = "";
          for (let _0x341aac = 0; _0x341aac < _0x129464; _0x341aac++) {
            _0x51547a += _0x42471d.charAt(Math.floor(Math.random() * _0x4a4250));
          }
          return _0x51547a;
        } else {
          let _0x29b5ea = "0123456789",
            _0x837900 = _0x29b5ea.length,
            _0x250c19 = "";
          for (let _0x149816 = 0; _0x149816 < _0x129464; _0x149816++) {
            _0x250c19 += _0x29b5ea.charAt(Math.floor(Math.random() * _0x837900));
          }
          return _0x250c19;
        }
      }
    }
    ["udid"](_0x5cea46) {
      function _0x49e10f() {
        return ((1 + Math.random()) * 65536 | 0).toString(16).substring(1);
      }
      let _0x2a1161 = _0x49e10f() + _0x49e10f() + "-" + _0x49e10f() + "-" + _0x49e10f() + "-" + _0x49e10f() + "-" + _0x49e10f() + _0x49e10f() + _0x49e10f();
      return _0x5cea46 == 0 ? _0x2a1161.toUpperCase() : _0x2a1161.toLowerCase();
    }
    ["encodeUnicode"](_0x4171b9) {
      var _0x55bd74 = [];
      for (var _0x52efec = 0; _0x52efec < _0x4171b9.length; _0x52efec++) {
        _0x55bd74[_0x52efec] = ("00" + _0x4171b9.charCodeAt(_0x52efec).toString(16)).slice(-4);
      }
      return "\\u" + _0x55bd74.join("\\u");
    }
    ["decodeUnicode"](_0x4a033b) {
      return _0x4a033b = _0x4a033b.replace(/\\u/g, "%u"), unescape(unescape(_0x4a033b));
    }
    ["RT"](_0x3efd53, _0x5c5621) {
      return Math.round(Math.random() * (_0x5c5621 - _0x3efd53) + _0x3efd53);
    }
    ["arrNull"](_0x561a46) {
      var _0x5a477e = _0x561a46.filter(_0xb3ae8d => {
        return _0xb3ae8d && _0xb3ae8d.trim();
      });
      return _0x5a477e;
    }
    ["nowtime"]() {
      return new Date(new Date().getTime() + new Date().getTimezoneOffset() * 60 * 1000 + 8 * 60 * 60 * 1000);
    }
    ["timecs"]() {
      let _0x590987 = $.nowtime();
      return JSON.stringify(_0x590987).indexOf(" ") >= 0 && (_0x590987 = _0x590987.replace(" ", "T")), new Date(_0x590987).getTime() - 8 * 60 * 60 * 1000;
    }
    ["rtjson"](_0x237c5e, _0x3e2d25, _0x48ba97, _0x16b9ea) {
      if (_0x16b9ea == 0) return JSON.stringify(_0x237c5e.split(_0x3e2d25).reduce((_0x1fd33e, _0x1288dd) => {
        let _0x4da92f = _0x1288dd.split(_0x48ba97);
        return _0x1fd33e[_0x4da92f[0].trim()] = _0x4da92f[1].trim(), _0x1fd33e;
      }, {}));else {
        return _0x237c5e.split(_0x3e2d25).reduce((_0x519d0f, _0x19a75a) => {
          let _0x45d9dd = _0x19a75a.split(_0x48ba97);
          return _0x519d0f[_0x45d9dd[0].trim()] = _0x45d9dd[1].trim(), _0x519d0f;
        }, {});
      }
    }
    ["MD5Encrypt"](_0x3e45d8, _0x88ce6e) {
      if (_0x3e45d8 == 0) return this.CryptoJS.MD5(_0x88ce6e).toString().toLowerCase();else {
        if (_0x3e45d8 == 1) return this.CryptoJS.MD5(_0x88ce6e).toString().toUpperCase();else {
          if (_0x3e45d8 == 2) return this.CryptoJS.MD5(_0x88ce6e).toString().substring(8, 24).toLowerCase();else {
            if (_0x3e45d8 == 3) return this.CryptoJS.MD5(_0x88ce6e).toString().substring(8, 24).toUpperCase();
          }
        }
      }
    }
    ["SHA_Encrypt"](_0x53d4b2, _0x2acd9b, _0x1e2f93) {
      return _0x53d4b2 == 0 ? this.CryptoJS[_0x2acd9b](_0x1e2f93).toString(this.CryptoJS.enc.Base64) : this.CryptoJS[_0x2acd9b](_0x1e2f93).toString();
    }
    ["HmacSHA_Encrypt"](_0x404a7c, _0x3a9754, _0x1e3c0b, _0x11cc16) {
      if (_0x404a7c == 0) return this.CryptoJS[_0x3a9754](_0x1e3c0b, _0x11cc16).toString(this.CryptoJS.enc.Base64);else {
        return this.CryptoJS[_0x3a9754](_0x1e3c0b, _0x11cc16).toString();
      }
    }
    ["Base64"](_0x1cc352, _0x45796a) {
      if (_0x1cc352 == 0) {
        return this.CryptoJS.enc.Base64.stringify(this.CryptoJS.enc.Utf8.parse(_0x45796a));
      } else return this.CryptoJS.enc.Utf8.stringify(this.CryptoJS.enc.Base64.parse(_0x45796a));
    }
    ["DecryptCrypto"](_0x28ed57, _0x236cbc, _0x3701d8, _0x5380d0, _0x208b1d, _0x58d508, _0xb5c4f7) {
      if (_0x28ed57 == 0) {
        const _0x158a8a = this.CryptoJS[_0x236cbc].encrypt(this.CryptoJS.enc.Utf8.parse(_0x208b1d), this.CryptoJS.enc.Utf8.parse(_0x58d508), {
          "iv": this.CryptoJS.enc.Utf8.parse(_0xb5c4f7),
          "mode": this.CryptoJS.mode[_0x3701d8],
          "padding": this.CryptoJS.pad[_0x5380d0]
        });
        return _0x158a8a.toString();
      } else {
        const _0x506ade = this.CryptoJS[_0x236cbc].decrypt(_0x208b1d, this.CryptoJS.enc.Utf8.parse(_0x58d508), {
          "iv": this.CryptoJS.enc.Utf8.parse(_0xb5c4f7),
          "mode": this.CryptoJS.mode[_0x3701d8],
          "padding": this.CryptoJS.pad[_0x5380d0]
        });
        return _0x506ade.toString(this.CryptoJS.enc.Utf8);
      }
    }
    ["RSA"](_0x58331b, _0x448a58) {
      const _0x59f0ad = require("node-rsa");
      let _0x4822cf = new _0x59f0ad("-----BEGIN PUBLIC KEY-----\n" + _0x448a58 + "\n-----END PUBLIC KEY-----");
      return _0x4822cf.setOptions({
        "encryptionScheme": "pkcs1"
      }), _0x4822cf.encrypt(_0x58331b, "base64", "utf8");
    }
    ["SHA_RSA"](_0x2770c6, _0x516662) {
      let _0x111915 = this.Sha_Rsa.KEYUTIL.getKey("-----BEGIN PRIVATE KEY-----\n" + $.getNewline(_0x516662, 76) + "\n-----END PRIVATE KEY-----"),
        _0x448114 = new this.Sha_Rsa.KJUR.crypto.Signature({
          "alg": "SHA256withRSA"
        });
      _0x448114.init(_0x111915);
      _0x448114.updateString(_0x2770c6);
      let _0x52eabc = _0x448114.sign(),
        _0x4175f4 = this.Sha_Rsa.hextob64u(_0x52eabc);
      return _0x4175f4;
    }
  }();
}
async function RSA(_0x1028a2, _0x41ee86) {
  const _0x53d363 = require("node-rsa");
  let _0x233fb2 = new _0x53d363("-----BEGIN PUBLIC KEY-----\n" + _0x41ee86 + "\n-----END PUBLIC KEY-----");
  return _0x233fb2.setOptions({
    "encryptionScheme": "pkcs1"
  }), _0x233fb2.encrypt(_0x1028a2, "base64", "utf8");
}
function DecryptCrypto(_0x5bd3c9, _0x2611fb, _0x2b8c94, _0x9d85e5, _0x2190a4, _0xfae0fa, _0x5eb31b) {
  if (_0x2611fb !== "AES" || _0x2b8c94 !== "CBC" || _0x9d85e5 !== "PKCS5Padding") {
    throw new Error("Unsupported algorithm, mode or padding");
  }
  const _0x52b539 = CryptoJS.enc.Utf8.parse(_0xfae0fa),
    _0x27107b = CryptoJS.enc.Utf8.parse(_0x5eb31b);
  let _0x5923ab;
  if (_0x5bd3c9 === "0") _0x5923ab = CryptoJS.AES.encrypt(_0x2190a4, _0x52b539, {
    "iv": _0x27107b,
    "mode": CryptoJS.mode.CBC,
    "padding": CryptoJS.pad.Pkcs7
  }).toString();else {
    if (_0x5bd3c9 === "1") {
      const _0x59cf46 = CryptoJS.AES.decrypt({
        "ciphertext": CryptoJS.enc.Hex.parse(_0x2190a4)
      }, _0x52b539, {
        "iv": _0x27107b,
        "mode": CryptoJS.mode.CBC,
        "padding": CryptoJS.pad.Pkcs7
      });
      _0x5923ab = _0x59cf46.toString(CryptoJS.enc.Utf8);
    } else {
      throw new Error("Invalid action, use '0' for encryption and '1' for decryption");
    }
  }
  return _0x5923ab;
}
async function gpt() {
  this.url = $.Base64(1, "aHR0cDovL2ouamc4Ni5jbjo1MTAw");
  let _0x446442 = {
      "User-Agent": "Dalvik/2.1.0 (Linux; U; Android 13; M2012K11AC Build/TKQ1.220829.002)"
    },
    _0x5c241f = await $.task("get", this.url + "/banben/api.php?name=" + VALY, _0x446442);
  limit = _0x5c241f.Notice;
  ben = _0x5c241f.ben;
  Notice = _0x5c241f.Notice;
  if (Vacation !== ben && ben !== "undefined") {
    console.log("脚本版本：" + Vacation + "   最新版本：" + ben);
    console.log("开始更新脚本");
    const _0x30f3b5 = require("http"),
      _0x1ee2fa = require("fs"),
      _0x439969 = require("path"),
      {
        exec: _0x36e712
      } = require("child_process"),
      _0x4a73ed = this.url + "/banben/" + VALY + ".js",
      _0x2118b6 = _0x439969.basename(__filename),
      _0x29c7a1 = _0x30f3b5.get(_0x4a73ed, _0x2742dc => {
        const _0xec483c = _0x1ee2fa.createWriteStream(_0x2118b6);
        _0x2742dc.pipe(_0xec483c);
        _0xec483c.on("finish", () => {
          _0xec483c.close(() => {
            console.log("文件已保存为：", _0x2118b6);
            _0x36e712("node " + _0x2118b6, (_0x68b854, _0x4e8a49, _0x2d08c3) => {
              if (_0x68b854) {
                console.error("执行脚本时发生错误： " + _0x68b854);
                return;
              }
              console.log("开始运行新脚本\n" + _0x4e8a49);
            });
          });
        });
      });
    _0x29c7a1.on("error", _0x4b0f69 => {
      console.error("下载过程中发生错误：", _0x4b0f69.message);
      process.exit();
    });
  }
  const _0x58cdf2 = require("os"),
    _0x4d500d = _0x58cdf2.networkInterfaces();
  for (let _0x1fb1e6 in _0x4d500d) {
    const _0x10aba5 = _0x4d500d[_0x1fb1e6];
    for (let _0x56b810 of _0x10aba5) {
      if (!_0x56b810.internal && _0x56b810.mac !== "00:00:00:00:00:00") {
        this.macccc = _0x56b810.mac;
      }
    }
  }
  let _0x56ea0f = await $.task("get", "https://api.ipify.org", _0x446442),
    _0x353f04 = _0x56ea0f,
    _0x2b2c8e = process.env[VALY] || CK,
    _0x56fd0a = _0x2b2c8e.split("\n");
  const _0x137a86 = _0x56fd0a.length;
  let _0x54bde9 = await $.task("get", this.url + "/api.php?api=notice&app=10000", _0x446442);
  _0x54bde9.msg.app_gg !== undefined && console.log(_0x54bde9.msg.app_gg);
  await $.wait(100);
  if (_0x137a86 > Notice) {}
}