//Mon Oct 14 2024 08:48:58 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
NAME = "瓜子乐消消2";
VALY = ["gzlxx"];
CK = "";
let _0x5c71ff = process.env.weixinToken,
  _0x250a9a = process.env.xqkdddl,
  _0x48cee = "https://gzlxx240531.yichengwangluo.net";
const _0x42de72 = "1.0.0",
  _0x30721f = ["\n", "@"],
  _0x263f79 = 0;
usid = 0;
class _0x544b1f {
  constructor(_0x5d41f5) {
    this.device = _0x5d41f5.split("#")[0];
    this.brand = _0x5d41f5.split("#")[1];
    this.model = _0x5d41f5.split("#")[2];
    this.sdk_release = _0x5d41f5.split("#")[3];
    this.Authorization = _0x5d41f5.split("#")[4];
    this.ssaid = _0x5d41f5.split("#")[5];
    this.store = _0x5d41f5.split("#")[6];
    this.num = ++usid;
    this.headers = {
      "User-Agent": "Dalvik/2.1.0 (Linux; U; Android " + this.sdk_release + "; " + this.model + " Build/UKQ1.230804.001)",
      "device": this.device,
      "oaid": this.device,
      "st": "",
      "store": this.store,
      "brand": this.brand,
      "model": this.model,
      "osversion": this.sdk_release,
      "platform": "1",
      "Authorization": this.Authorization,
      "ssaid": this.ssaid
    };
  }
  async ["hqdl"]() {
    let _0x37698a = await $.task("get", _0x250a9a, {
      "User-Agent": "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Mobile Safari/537.36"
    });
    this.dlip = _0x37698a.split("\n")[0];
    console.log("账号" + this.num + "：代理IP：" + this.dlip);
  }
  async ["user_task_list"]() {
    await this.qipao();
    await $.wait($.RT(1000, 3000));
    await this.qipao2();
    await $.wait($.RT(10000, 13000));
    await this.qipao3();
    await $.wait($.RT(1000, 3000));
    await this.qipao4();
    await $.wait($.RT(10000, 13000));
    await this.lingquan();
    await $.wait($.RT(1000, 3000));
    await this.quan();
  }
  async ["login"]() {
    let _0x613642 = await this.task("get", _0x48cee + "/api/v2/app/check/updates", this.headers);
    if (_0x613642.code == 0) {
      this.version = _0x613642.result.version;
      this.release = _0x613642.result.release;
      if (_0x613642.result.description !== "优化细节，提升体验") {
        console.log(_0x613642.result.description);
        if (_0x5c71ff !== undefined) {
          await this.wxpusher(_0x613642.result.description);
        }
      }
    }
    this.headers.version = this.version;
    this.headers.release = this.release;
    await this.loginaa();
  }
  async ["loginaa"]() {
    let _0x4fed4a = await this.task("get", _0x48cee + "/api/v2/member/profile", this.headers);
    if (_0x4fed4a.code == 0) this.login = true, this.num = _0x4fed4a.result.nickname, this.uuid = _0x4fed4a.result.uuid, console.log(this.num + "  余额：" + _0x4fed4a.result.cash_balance + "  提现券:" + _0x4fed4a.result.point);else {
      this.login = false;
      let _0x282f5e = _0x4fed4a;
      console.log(_0x282f5e);
      _0x5c71ff !== undefined && (await this.wxpusher(_0x282f5e));
    }
  }
  async ["wxpusher"](_0x489822) {
    let _0x59de55 = {
        "X-Requested-With": "com.tencent.mm",
        "User-Agent": "Dalvik/2.1.0 (Linux; U; Android 13; M2012K11AC Build/TKQ1.220829.002)"
      },
      _0x26f559 = await this.task("get", "https://wxpusher.zjiecode.com/api/send/message/?appToken=" + _0x5c71ff.split("#")[0] + "&content=" + encodeURI("" + _0x5c71ff.split("#")[2] + NAME + _0x489822) + "&uid=" + _0x5c71ff.split("#")[1], _0x59de55);
    _0x26f559.code == 1000 ? console.log("微信通知" + _0x26f559.msg) : console.log("微信通知失败");
  }
  async ["qipao"]() {
    let _0x67f052 = await this.task("post", _0x48cee + "/api/v2/zhuan/video", this.headers, "type=1");
    if (_0x67f052.code == 0) this.ticket = _0x67f052.result.ticket;else {
      let _0x2ce308 = _0x67f052.message;
      console.log("1" + _0x2ce308);
    }
  }
  async ["qipao2"]() {
    let _0x1e05d7 = await this.task("get", _0x48cee + "/api/v2/ads/action/load?minor=2&class=10000&channel=2&type=32", this.headers);
    if (_0x1e05d7.code == 0) this.tid = _0x1e05d7.result.tid;else {
      let _0x5ed820 = _0x1e05d7.message;
      console.log("2:" + _0x5ed820);
    }
  }
  async ["qipao3"]() {
    this.ecpm = $.RT(20, 30);
    let _0x5b830f = await this.task("get", _0x48cee + "/api/v2/ads/action/showed?class=10000&channel=2&type=32&ecpm=" + this.ecpm + "000.0&tid=" + this.tid + "&platformname=pangle", this.headers);
    if (_0x5b830f.code == 0) {} else {
      let _0x30a212 = _0x5b830f.message;
      console.log("3:" + _0x30a212);
    }
  }
  async ["qipao4"]() {
    this.udid = $.udid(1);
    let _0x260cdd = await this.task("post", _0x48cee + "/api/v2/ads/action/ssv", this.headers, "tid=" + this.tid + "&transid=" + this.udid);
    if (_0x260cdd.code == 0) {} else {
      let _0x1c53c7 = _0x260cdd.message;
      console.log("广告:" + _0x1c53c7);
    }
  }
  async ["qipao4"]() {
    let _0x1738e4 = await this.task("get", _0x48cee + "/api/v2/ads/action/completed?class=10000&channel=2&type=32&ticket=&ecpm=" + this.ecpm + "000.0&tid=" + this.tid + "&platformname=pangle&transid=" + this.udid, this.headers);
    if (_0x1738e4.code == 0) {} else {
      let _0x28d788 = _0x1738e4.message;
      console.log("5:" + _0x28d788);
    }
  }
  async ["lingquan"]() {
    let _0x5a13a1 = await this.task("post", _0x48cee + "/api/v2/eliminate/two", this.headers);
    if (_0x5a13a1.code == 0) {
      let _0x1d5cba = _0x5a13a1.result;
      this.count = _0x1d5cba.count;
      console.log(this.num + " 第" + this.count + "次 视频券：" + _0x1d5cba.coin);
    } else {
      let _0x41e485 = _0x5a13a1.message;
      console.log("领券:" + _0x41e485);
      if (_0x41e485 == "明天再领") return;
    }
  }
  async ["quan"]() {
    let _0x503ae6 = await this.task("get", _0x48cee + "/api/v2/member/profile", this.headers);
    _0x503ae6.code == 0 ? _0x503ae6.result.point >= 10000 ? (await $.wait($.RT(1000, 3000)), await this.chaxun()) : (await $.wait($.RT(15000, 19000)), await this.user_task_list()) : console.log("" + _0x503ae6);
  }
  async ["xinxi"]() {
    let _0x4ff359 = await this.task("get", _0x48cee + "/api/v2/member/profile", this.headers);
    if (_0x4ff359.code == 0) {
      console.log(this.num + " 余额：" + _0x4ff359.result.cash_balance + "  提现券:" + _0x4ff359.result.point);
    } else console.log("" + _0x4ff359);
  }
  async ["chaxun"]() {
    let _0x2ac248 = await this.task("get", _0x48cee + "/api/v3/cash/union", this.headers);
    if (_0x2ac248.code == 0) {
      let _0x3352f8 = _0x2ac248.result.items_1[0].badge,
        _0x300db5 = _0x2ac248.result.point;
      console.log(this.num + " 提现次数:" + _0x3352f8 + "  提现券:" + _0x300db5);
      _0x3352f8 !== 0 && _0x300db5 >= 10000 && (await this.tixian());
    } else console.log("提现:" + _0x2ac248.message);
  }
  async ["tixian"]() {
    let _0x35fe5e = await $.task("post", _0x48cee + "/api/v3/cash/union", this.headers, "pos=1&amount=1&lat=&lng=&root=0&sim=1&debug=0&model=" + this.model + "&power=0&vpn=0");
    _0x35fe5e.code == 0 ? console.log(this.num + " 提现:" + _0x35fe5e.result.title) : (console.log("提现:" + _0x35fe5e.message), _0x35fe5e.code == 40360 && (await $.wait($.RT(1000, 3000)), await this.tixianbul()));
  }
  async ["tixianbul"]() {
    await $.wait($.RT(1000, 3000));
    await this.tixian3331();
    await $.wait($.RT(1000, 3000));
    await this.tixianguang1();
    await $.wait($.RT(1000, 3000));
    await this.tixianguang2();
    await $.wait($.RT(5000, 8000));
    await this.tixianguang3();
    await $.wait($.RT(1000, 3000));
    await this.tixianguang33();
    await $.wait($.RT(1000, 3000));
    await this.tixianguang333();
    await $.wait($.RT(1000, 3000));
    await this.tixianguang4();
    await $.wait($.RT(7000, 7300));
    await this.appzhuce111();
    await $.wait($.RT(80000, 89000));
    await this.appzhuce222();
    await $.wait($.RT(10000, 13000));
    await this.tixian111();
  }
  async ["tixian3331"]() {
    let _0x574d07 = await this.task("get", _0x48cee + "/api/v3/videodown3/index?id=30", this.headers);
    if (_0x574d07.code == 0) {} else console.log("" + _0x574d07);
  }
  async ["tixianguang1"]() {
    let _0x578374 = await this.task("get", _0x48cee + "/api/v3/videodown3/start?id=30", this.headers);
    _0x578374.code == 0 ? this.ticket = _0x578374.result.ticket : console.log("" + _0x578374);
  }
  async ["tixianguang2"]() {
    let _0x12350c = await this.task("get", _0x48cee + "/api/v2/ads/action/load?minor=2&class=10000&channel=2&type=29", this.headers);
    if (_0x12350c.code == 0) {
      this.tid11 = _0x12350c.result.tid;
      this.gid = _0x12350c.result.aid;
    } else console.log("" + _0x12350c);
  }
  async ["tixianguang3"]() {
    this.suiji11 = $.RT(10000, 29000);
    let _0x490237 = await this.task("get", _0x48cee + "/api/v2/ads/action/showed?class=10000&channel=2&type=29&ecpm=" + this.suiji11 + ".0&tid=" + this.tid11 + "&6&platformname=baidu", this.headers);
    if (_0x490237.code == 0) {} else console.log("" + _0x490237);
  }
  async ["tixianguang33"]() {
    this.udid22 = $.udid(1);
    this.suiji22 = $.RT(2000000, 8900000);
    let _0x40c076 = await this.task("post", _0x48cee + "/api/v2/ads/action/ssv", this.headers, "tid=" + this.tid11 + "&transid=" + this.udid22);
    if (_0x40c076.code == 0) {} else console.log("" + _0x40c076);
  }
  async ["tixianguang333"]() {
    let _0x499dc2 = await this.task("get", _0x48cee + "/api/v2/ads/action/clicked?class=10000&channel=2&type=29&ecpm=" + this.suiji11 + ".0&tid=" + this.tid11 + "&platformname=baidu", this.headers);
    if (_0x499dc2.code == 0) {} else console.log("" + _0x499dc2);
  }
  async ["tixianguang4"]() {
    let _0x1c6bdf = await this.task("get", _0x48cee + "/api/v2/ads/action/completed?class=10000&channel=2&type=29&ticket=&ecpm=" + this.suiji11 + ".0&tid=" + this.tid11 + "&platformname=baidu&transid=" + this.udid22, this.headers);
    if (_0x1c6bdf.code == 0) {} else {
      console.log("" + _0x1c6bdf);
    }
  }
  async ["appzhuce111"]() {
    let _0x185d61 = await this.task("post", _0x48cee + "/api/v3/videodown3/index?id=30&ticket=" + this.ticket + "&t=011" + this.uuid, this.headers);
    if (_0x185d61.code == 0) {} else console.log("" + _0x185d61);
  }
  async ["appzhuce222"]() {
    let _0x379723 = await this.task("post", _0x48cee + "/api/v3/videodown3/index?id=30&ticket=" + this.ticket + "&t=8229015" + this.uuid, this.headers);
    if (_0x379723.code == 0) {
      console.log(this.num + " 券：" + _0x379723.result.coin);
    } else console.log("" + _0x379723.message);
  }
  async ["tixian111"]() {
    let _0xc195 = await $.task("post", _0x48cee + "/api/v3/cash/union", this.headers, "pos=1&amount=1&lat=&lng=&root=0&sim=1&debug=0&model=" + this.model + "&power=0&vpn=0");
    if (_0xc195.code == 0) {
      console.log(this.num + " 提现:" + _0xc195.result.title);
    } else {
      console.log("提现:" + _0xc195.message);
    }
  }
  async ["task"](_0x2da583, _0x598676, _0x2dff85, _0x375402) {
    if (_0x2da583 == "delete") _0x2da583 = _0x2da583.toUpperCase();else {
      _0x2da583 = _0x2da583;
    }
    const _0x56cff7 = require("request");
    _0x2da583 == "post" && (delete _0x2dff85["Content-Type"], delete _0x2dff85["content-type"], delete _0x2dff85["Content-Length"], delete _0x2dff85["content-length"], $.safeGet(_0x375402) ? _0x2dff85["content-type"] = "application/json;charset=utf-8" : _0x2dff85["content-type"] = "application/x-www-form-urlencoded", _0x375402 && (_0x2dff85["content-length"] = $.lengthInUtf8Bytes(_0x375402)));
    _0x2da583 == "get" && (delete _0x2dff85["Content-Type"], delete _0x2dff85["content-length"], delete _0x2dff85["content-type"], delete _0x2dff85["Content-Length"]);
    _0x2dff85.Host = _0x598676.replace("//", "/").split("/")[1];
    if (_0x250a9a == undefined) {
      if (_0x2da583.indexOf("T") < 0) {
        var _0x206ea4 = {
          "url": _0x598676,
          "headers": _0x2dff85,
          "body": _0x375402,
          "timeout": 20000
        };
      } else {
        var _0x206ea4 = {
          "url": _0x598676,
          "headers": _0x2dff85,
          "form": JSON.parse(_0x375402),
          "timeout": 20000
        };
      }
    } else {
      if (_0x2da583.indexOf("T") < 0) var _0x206ea4 = {
        "url": _0x598676,
        "headers": _0x2dff85,
        "body": _0x375402,
        "proxy": "http://" + this.dlip,
        "timeout": 20000
      };else {
        var _0x206ea4 = {
          "url": _0x598676,
          "headers": _0x2dff85,
          "form": JSON.parse(_0x375402),
          "proxy": "http://" + this.dlip,
          "timeout": 20000
        };
      }
    }
    return new Promise(async _0x18d490 => {
      _0x56cff7[_0x2da583.toLowerCase()](_0x206ea4, async (_0x5c4e47, _0x5108f9, _0xf4036a) => {
        try {
          _0x263f79 == 1 && (console.log("==================请求=================="), console.log(JSON.stringify(_0x206ea4)), console.log("==================返回=================="), console.log(_0xf4036a));
        } catch (_0x1a424e) {} finally {
          return !_0x5c4e47 ? $.safeGet(_0xf4036a) ? _0xf4036a = JSON.parse(_0xf4036a) : _0xf4036a = _0xf4036a : _0x250a9a == undefined ? (console.log("请检查网络设置"), _0xf4036a = JSON.parse("{\"code\":\"99\"}")) : (await this.hqdl(), _0xf4036a = await this.task(_0x2da583, _0x598676, _0x2dff85, _0x375402)), _0x18d490(_0xf4036a);
        }
      });
    });
  }
}
$ = _0x582f7e();
!(async () => {
  await _0x4c061b();
  let _0x5a777b = $.RT(150000, 1900000);
  console.log("随机延迟" + Math.round(_0x5a777b * 0.001) + "秒");
  await $.wait(_0x5a777b);
  console.log("[" + NAME + "] " + $.timenow(3) + ":" + $.timenow(4) + ":" + $.timenow(5));
  if (_0x42de72 == ben && ben !== "undefined") {
    console.log("📢 请认真阅读以下声明\n            【免责声明】   \n           📌 脚本文件仅用于测试和学习研究   \n           📌 脚本文件任何人不得用于商业以及非法用途   \n           📌 禁止任何公众号、自媒体进行任何形式的转发   \n           📌 脚本文件请在下载试用后24小时内自行删除   \n           📌 因使用脚本造成软件平台的一切损失皆由使用者承担   \n           📌 脚本文件如有不慎被破解或修改由破解或修改者承担   \n           📌 如不接受此条款请立即删除脚本文件");
    await $.ExamineCookie();
    if ($.cookie_list.length > limit) {
      console.log("已超出最大账号数，请重新设置账号数");
      return;
    }
    if (_0x250a9a == undefined) {
      console.log("当前使用本地网络运行脚本");
      console.log("\n-------- 用户信息 --------");
      await $.Multithreading("login");
      let _0x122316 = $.cookie_list.filter(_0x1982e0 => _0x1982e0.login == true);
      if (_0x122316.length == 0) {
        console.log("Cookie格式错误 或 账号被禁封");
        return;
      } else {
        console.log("\n-------- 任务列表 --------");
        await $.Multithreading("user_task_list");
        console.log("\n-------- 运行结果 --------");
      }
      for (let _0x418aa6 of $.cookie_list) {
        _0x418aa6.xinxi();
      }
    } else {
      console.log("当前使用代理网络运行脚本");
      await $.Multithreading("hqdl");
      console.log("\n-------- 用户信息 --------");
      await $.Multithreading("login");
      let _0x2a1aa8 = $.cookie_list.filter(_0x45443b => _0x45443b.login == true);
      if (_0x2a1aa8.length == 0) {
        console.log("Cookie格式错误 或 账号被禁封");
        return;
      } else console.log("\n-------- 任务列表 --------"), await $.Multithreading("user_task_list"), console.log("\n-------- 运行结果 --------");
      for (let _0x1492ff of $.cookie_list) {
        _0x1492ff.xinxi();
      }
    }
  }
})().catch(_0x5ea78a => {
  console.log(_0x5ea78a);
}).finally(() => {});
function _0x582f7e() {
  return new class {
    constructor() {
      this.cookie_list = [];
      this.message = "";
      this.CryptoJS = require("crypto-js");
      this.NodeRSA = require("node-rsa");
      this.request = require("request");
      this.Sha_Rsa = require("jsrsasign");
    }
    async ["Multithreading"](_0x3a27da, _0x432676, _0x1925be) {
      let _0x257f2e = [];
      !_0x1925be && (_0x1925be = 1);
      while (_0x1925be--) {
        for (let _0x305c59 of $.cookie_list) {
          _0x257f2e.push(_0x305c59[_0x3a27da](_0x432676));
        }
      }
      await Promise.allSettled(_0x257f2e);
    }
    ["ExamineCookie"]() {
      let _0x3ef156 = process.env[VALY] || CK,
        _0x165e3b = 0;
      if (_0x3ef156) {
        for (let _0x1b03ca of _0x30721f) {
          if (_0x3ef156.includes(_0x1b03ca)) {
            this.splitor = _0x1b03ca;
            break;
          }
        }
        for (let _0x162ca1 of _0x3ef156.split(this.splitor).filter(_0x5489de => !!_0x5489de)) {
          $.cookie_list.push(new _0x544b1f(_0x162ca1));
        }
        _0x165e3b = $.cookie_list.length;
      } else console.log("\n【" + NAME + "】：未填写变量: " + VALY);
      return console.log("共找到" + _0x165e3b + "个账号"), $.cookie_list;
    }
    ["task"](_0x4aea41, _0x20c53f, _0x5ef041, _0x1803ee, _0x1bdd99) {
      if (_0x4aea41 == "delete") {
        _0x4aea41 = _0x4aea41.toUpperCase();
      } else {
        _0x4aea41 = _0x4aea41;
      }
      if (_0x4aea41 == "post") {
        delete _0x5ef041["content-type"];
        delete _0x5ef041["Content-type"];
        delete _0x5ef041["content-Type"];
        if ($.safeGet(_0x1803ee)) _0x5ef041["Content-Type"] = "application/json;charset=UTF-8";else {
          _0x5ef041["Content-Type"] = "application/x-www-form-urlencoded";
        }
        _0x1803ee && (_0x5ef041["Content-Length"] = $.lengthInUtf8Bytes(_0x1803ee));
      }
      return _0x4aea41 == "get" && (delete _0x5ef041["content-type"], delete _0x5ef041["Content-type"], delete _0x5ef041["content-Type"], delete _0x5ef041["Content-Length"]), _0x5ef041.Host = _0x20c53f.replace("//", "/").split("/")[1], new Promise(async _0x5d3c67 => {
        if (_0x4aea41.indexOf("T") < 0) var _0xbdd6ec = {
          "url": _0x20c53f,
          "headers": _0x5ef041,
          "body": _0x1803ee,
          "proxy": "http://" + _0x1bdd99
        };else {
          var _0xbdd6ec = {
            "url": _0x20c53f,
            "headers": _0x5ef041,
            "form": JSON.parse(_0x1803ee),
            "proxy": "http://" + _0x1bdd99
          };
        }
        !_0x1bdd99 && delete _0xbdd6ec.proxy;
        this.request[_0x4aea41.toLowerCase()](_0xbdd6ec, (_0x1b92d4, _0x105867, _0x5cb6c0) => {
          try {
            if (_0x5cb6c0) {
              if (_0x263f79 == 1) {
                console.log("================ 请求 ================");
                console.log(_0xbdd6ec);
                console.log("================ 返回 ================");
                $.safeGet(_0x5cb6c0) ? console.log(JSON.parse(_0x5cb6c0)) : console.log(_0x5cb6c0);
              }
            }
          } catch (_0xc5b55f) {
            console.log(_0xc5b55f, _0x20c53f + "\n" + _0x5ef041);
          } finally {
            let _0x4f086b = "";
            if (!_0x1b92d4) {
              if ($.safeGet(_0x5cb6c0)) _0x4f086b = JSON.parse(_0x5cb6c0);else _0x5cb6c0.indexOf("/") != -1 && _0x5cb6c0.indexOf("+") != -1 ? _0x4f086b = $.decrypts(_0x5cb6c0) : _0x4f086b = _0x5cb6c0;
            } else _0x4f086b = _0x20c53f + "   API请求失败，请检查网络重试\n" + _0x1b92d4;
            return _0x5d3c67(_0x4f086b);
          }
        });
      });
    }
    ["task2"](_0x281453, _0x5009fb, _0x65630d, _0x46cafc, _0x351712) {
      _0x281453 == "delete" ? _0x281453 = _0x281453.toUpperCase() : _0x281453 = _0x281453;
      if (_0x281453 == "post") {
        delete _0x65630d["content-type"];
        delete _0x65630d["Content-type"];
        delete _0x65630d["content-Type"];
        if ($.safeGet(_0x46cafc)) {
          _0x65630d["Content-Type"] = "application/json;charset=UTF-8";
        } else {
          _0x65630d["Content-Type"] = "application/x-www-form-urlencoded";
        }
        _0x46cafc && (_0x65630d["Content-Length"] = $.lengthInUtf8Bytes(_0x46cafc));
      }
      _0x281453 == "get" && (delete _0x65630d["content-type"], delete _0x65630d["Content-type"], delete _0x65630d["content-Type"], delete _0x65630d["Content-Length"]);
      _0x65630d.Host = _0x5009fb.replace("//", "/").split("/")[1];
      if (_0x281453.indexOf("T") < 0) {
        var _0x23190c = {
          "url": _0x5009fb,
          "headers": _0x65630d,
          "body": _0x46cafc
        };
      } else var _0x23190c = {
        "url": _0x5009fb,
        "headers": _0x65630d,
        "form": JSON.parse(_0x46cafc)
      };
      return new Promise(async _0x162a39 => {
        this.request[_0x281453.toLowerCase()](_0x23190c, (_0x472842, _0x202d14, _0x18c5c5) => {
          try {
            if (_0x18c5c5) {
              if (_0x263f79 == 1) {
                console.log("================ 请求 ================");
                console.log(_0x23190c);
                console.log("================ 返回 ================");
                if ($.safeGet(_0x18c5c5)) {
                  console.log(JSON.parse(_0x18c5c5));
                } else console.log(_0x18c5c5);
              }
            }
          } catch (_0xdc6ef6) {
            console.log(_0xdc6ef6, _0x5009fb + "\n" + _0x65630d);
          } finally {
            let _0x681ea4 = "";
            if (!_0x472842) {
              if ($.safeGet(_0x18c5c5)) _0x681ea4 = _0x18c5c5;else {
                if (_0x18c5c5.indexOf("/") != -1 && _0x18c5c5.indexOf("+") != -1) {
                  _0x681ea4 = $.decrypts(_0x18c5c5);
                } else {
                  _0x681ea4 = _0x18c5c5;
                }
              }
            } else {
              _0x681ea4 = _0x5009fb + "   API请求失败，请检查网络重试\n" + _0x472842;
            }
            return _0x162a39(_0x681ea4);
          }
        });
      });
    }
    ["lengthInUtf8Bytes"](_0x647cdf) {
      let _0x399dc9 = encodeURIComponent(_0x647cdf).match(/%[89ABab]/g);
      return _0x647cdf.length + (_0x399dc9 ? _0x399dc9.length : 0);
    }
    ["randomArr"](_0x567c75) {
      return _0x567c75[parseInt(Math.random() * _0x567c75.length, 10)];
    }
    ["wait"](_0x42a22f) {
      return new Promise(_0x4c1fcd => setTimeout(_0x4c1fcd, _0x42a22f));
    }
    ["time"](_0x5d9ba8) {
      return _0x5d9ba8 == 10 ? Math.round(+new Date() / 1000) : +new Date();
    }
    ["timenow"](_0x3719c8) {
      let _0x480fdd = new Date();
      if (_0x3719c8 == undefined) {
        let _0x462d38 = new Date(),
          _0x444c8d = _0x462d38.getFullYear() + "-",
          _0x52ad69 = (_0x462d38.getMonth() + 1 < 10 ? "0" + (_0x462d38.getMonth() + 1) : _0x462d38.getMonth() + 1) + "-",
          _0x141315 = _0x462d38.getDate() + " ",
          _0x5ed07e = _0x462d38.getHours() + ":",
          _0x496932 = _0x462d38.getMinutes() + ":",
          _0x395934 = _0x462d38.getSeconds() + 1 < 10 ? "0" + _0x462d38.getSeconds() : _0x462d38.getSeconds();
        return _0x444c8d + _0x52ad69 + _0x141315 + _0x5ed07e + _0x496932 + _0x395934;
      } else {
        if (_0x3719c8 == 0) return _0x480fdd.getFullYear();else {
          if (_0x3719c8 == 1) return _0x480fdd.getMonth() + 1 < 10 ? "0" + (_0x480fdd.getMonth() + 1) : _0x480fdd.getMonth() + 1;else {
            if (_0x3719c8 == 2) {
              return _0x480fdd.getDate();
            } else {
              if (_0x3719c8 == 3) return _0x480fdd.getHours();else {
                if (_0x3719c8 == 4) return _0x480fdd.getMinutes();else {
                  if (_0x3719c8 == 5) {
                    return _0x480fdd.getSeconds() + 1 < 10 ? "0" + _0x480fdd.getSeconds() : _0x480fdd.getSeconds();
                  }
                }
              }
            }
          }
        }
      }
    }
    ["safeGet"](_0x5d663f) {
      try {
        if (typeof JSON.parse(_0x5d663f) == "object") return true;
      } catch (_0x359d31) {
        return false;
      }
    }
    ["SJS"](_0x3160b3, _0x3ab82e) {
      if (_0x3ab82e == 0) {
        let _0x2889f5 = "QWERTYUIOPASDFGHJKLZXCVBNM01234567890123456789",
          _0x454fd0 = _0x2889f5.length,
          _0x3a7ebf = "";
        for (let _0x3d5d05 = 0; _0x3d5d05 < _0x3160b3; _0x3d5d05++) {
          _0x3a7ebf += _0x2889f5.charAt(Math.floor(Math.random() * _0x454fd0));
        }
        return _0x3a7ebf;
      } else {
        if (_0x3ab82e == 1) {
          let _0x3133c1 = "qwertyuiopasdfghjklzxcvbnm0123456789",
            _0x2a31b8 = _0x3133c1.length,
            _0x1a7fef = "";
          for (let _0x50e228 = 0; _0x50e228 < _0x3160b3; _0x50e228++) {
            _0x1a7fef += _0x3133c1.charAt(Math.floor(Math.random() * _0x2a31b8));
          }
          return _0x1a7fef;
        } else {
          let _0x500974 = "0123456789",
            _0x3adede = _0x500974.length,
            _0x31212a = "";
          for (let _0x3c96aa = 0; _0x3c96aa < _0x3160b3; _0x3c96aa++) {
            _0x31212a += _0x500974.charAt(Math.floor(Math.random() * _0x3adede));
          }
          return _0x31212a;
        }
      }
    }
    ["udid"](_0x5cae3a) {
      function _0x11f43f() {
        return ((1 + Math.random()) * 65536 | 0).toString(16).substring(1);
      }
      let _0x1686d8 = _0x11f43f() + _0x11f43f() + "-" + _0x11f43f() + "-" + _0x11f43f() + "-" + _0x11f43f() + "-" + _0x11f43f() + _0x11f43f() + _0x11f43f();
      return _0x5cae3a == 0 ? _0x1686d8.toUpperCase() : _0x1686d8.toLowerCase();
    }
    ["encodeUnicode"](_0x5d8866) {
      var _0x417cc3 = [];
      for (var _0x3f4f9d = 0; _0x3f4f9d < _0x5d8866.length; _0x3f4f9d++) {
        _0x417cc3[_0x3f4f9d] = ("00" + _0x5d8866.charCodeAt(_0x3f4f9d).toString(16)).slice(-4);
      }
      return "\\u" + _0x417cc3.join("\\u");
    }
    ["decodeUnicode"](_0x16f886) {
      return _0x16f886 = _0x16f886.replace(/\\u/g, "%u"), unescape(unescape(_0x16f886));
    }
    ["RT"](_0x468cf6, _0x518d19) {
      return Math.round(Math.random() * (_0x518d19 - _0x468cf6) + _0x468cf6);
    }
    ["arrNull"](_0x3ef092) {
      var _0x2de5b6 = _0x3ef092.filter(_0x5322f1 => {
        return _0x5322f1 && _0x5322f1.trim();
      });
      return _0x2de5b6;
    }
    ["nowtime"]() {
      return new Date(new Date().getTime() + new Date().getTimezoneOffset() * 60 * 1000 + 8 * 60 * 60 * 1000);
    }
    ["timecs"]() {
      let _0x4612e8 = $.nowtime();
      return JSON.stringify(_0x4612e8).indexOf(" ") >= 0 && (_0x4612e8 = _0x4612e8.replace(" ", "T")), new Date(_0x4612e8).getTime() - 8 * 60 * 60 * 1000;
    }
    ["rtjson"](_0x3c34f6, _0xd8c918, _0x48e0c4, _0x1e2f10) {
      return _0x1e2f10 == 0 ? JSON.stringify(_0x3c34f6.split(_0xd8c918).reduce((_0x24f7f2, _0x55ad9b) => {
        let _0x170ba0 = _0x55ad9b.split(_0x48e0c4);
        return _0x24f7f2[_0x170ba0[0].trim()] = _0x170ba0[1].trim(), _0x24f7f2;
      }, {})) : _0x3c34f6.split(_0xd8c918).reduce((_0x296b99, _0x220a85) => {
        let _0x2f2902 = _0x220a85.split(_0x48e0c4);
        return _0x296b99[_0x2f2902[0].trim()] = _0x2f2902[1].trim(), _0x296b99;
      }, {});
    }
    ["MD5Encrypt"](_0x47da00, _0x142aba) {
      if (_0x47da00 == 0) {
        return this.CryptoJS.MD5(_0x142aba).toString().toLowerCase();
      } else {
        if (_0x47da00 == 1) {
          return this.CryptoJS.MD5(_0x142aba).toString().toUpperCase();
        } else {
          if (_0x47da00 == 2) {
            return this.CryptoJS.MD5(_0x142aba).toString().substring(8, 24).toLowerCase();
          } else {
            if (_0x47da00 == 3) return this.CryptoJS.MD5(_0x142aba).toString().substring(8, 24).toUpperCase();
          }
        }
      }
    }
    ["SHA_Encrypt"](_0x3b4654, _0x274bf3, _0x2bc8e5) {
      return _0x3b4654 == 0 ? this.CryptoJS[_0x274bf3](_0x2bc8e5).toString(this.CryptoJS.enc.Base64) : this.CryptoJS[_0x274bf3](_0x2bc8e5).toString();
    }
    ["HmacSHA_Encrypt"](_0x247226, _0x2878be, _0x41f0d9, _0x3f8368) {
      return _0x247226 == 0 ? this.CryptoJS[_0x2878be](_0x41f0d9, _0x3f8368).toString(this.CryptoJS.enc.Base64) : this.CryptoJS[_0x2878be](_0x41f0d9, _0x3f8368).toString();
    }
    ["Base64"](_0x372cb7, _0x4ec4fc) {
      return _0x372cb7 == 0 ? this.CryptoJS.enc.Base64.stringify(this.CryptoJS.enc.Utf8.parse(_0x4ec4fc)) : this.CryptoJS.enc.Utf8.stringify(this.CryptoJS.enc.Base64.parse(_0x4ec4fc));
    }
    ["DecryptCrypto"](_0xcdaa88, _0x48268a, _0x240175, _0x26556d, _0x12f2da, _0x27911a, _0x447942) {
      if (_0xcdaa88 == 0) {
        const _0x4ce8f9 = this.CryptoJS[_0x48268a].encrypt(this.CryptoJS.enc.Utf8.parse(_0x12f2da), this.CryptoJS.enc.Utf8.parse(_0x27911a), {
          "iv": this.CryptoJS.enc.Utf8.parse(_0x447942),
          "mode": this.CryptoJS.mode[_0x240175],
          "padding": this.CryptoJS.pad[_0x26556d]
        });
        return _0x4ce8f9.toString();
      } else {
        const _0x386e42 = this.CryptoJS[_0x48268a].decrypt(_0x12f2da, this.CryptoJS.enc.Utf8.parse(_0x27911a), {
          "iv": this.CryptoJS.enc.Utf8.parse(_0x447942),
          "mode": this.CryptoJS.mode[_0x240175],
          "padding": this.CryptoJS.pad[_0x26556d]
        });
        return _0x386e42.toString(this.CryptoJS.enc.Utf8);
      }
    }
    ["RSA"](_0x211434, _0x542ba5) {
      const _0x4042b7 = require("node-rsa");
      let _0x175a30 = new _0x4042b7("-----BEGIN PUBLIC KEY-----\n" + _0x542ba5 + "\n-----END PUBLIC KEY-----");
      return _0x175a30.setOptions({
        "encryptionScheme": "pkcs1"
      }), _0x175a30.encrypt(_0x211434, "base64", "utf8");
    }
    ["SHA_RSA"](_0x538bfa, _0x198fc2) {
      let _0x183519 = this.Sha_Rsa.KEYUTIL.getKey("-----BEGIN PRIVATE KEY-----\n" + $.getNewline(_0x198fc2, 76) + "\n-----END PRIVATE KEY-----"),
        _0x2d8690 = new this.Sha_Rsa.KJUR.crypto.Signature({
          "alg": "SHA256withRSA"
        });
      _0x2d8690.init(_0x183519);
      _0x2d8690.updateString(_0x538bfa);
      let _0x4b3994 = _0x2d8690.sign(),
        _0x551b65 = this.Sha_Rsa.hextob64u(_0x4b3994);
      return _0x551b65;
    }
  }();
}
async function _0x399586(_0x1b60ed, _0x38290f) {
  const _0x77886f = require("node-rsa");
  let _0x18c404 = new _0x77886f("-----BEGIN PUBLIC KEY-----\n" + _0x38290f + "\n-----END PUBLIC KEY-----");
  return _0x18c404.setOptions({
    "encryptionScheme": "pkcs1"
  }), _0x18c404.encrypt(_0x1b60ed, "base64", "utf8");
}
async function _0x4c061b() {
  this.url = $.Base64(1, "aHR0cDovL2ouamc4Ni5jbjo1MTAw");
  let _0x13f79e = {
      "User-Agent": "Dalvik/2.1.0 (Linux; U; Android 13; M2012K11AC Build/TKQ1.220829.002)"
    },
    _0x38e209 = await $.task("get", this.url + "/banben/api.php?name=" + VALY, _0x13f79e);
  _0x38e209.code == 200 ? (limit = _0x38e209.hao, ben = _0x38e209.ben, Notice = _0x38e209.Notice) : (VALY = "888", ben = 888, Notice = 0);
  if (_0x42de72 !== ben && ben !== "undefined") {
    console.log("脚本版本：" + _0x42de72 + "   最新版本：" + ben);
    console.log("开始更新脚本");
    const _0x900418 = require("http"),
      _0x13697b = require("fs"),
      _0x99db31 = require("path"),
      {
        exec: _0x470ca5
      } = require("child_process"),
      _0x3779d3 = this.url + "/banben/" + VALY + ".js",
      _0x187d13 = _0x99db31.basename(__filename),
      _0x6aa027 = _0x900418.get(_0x3779d3, _0x3bc197 => {
        const _0x4ecb5f = _0x13697b.createWriteStream(_0x187d13);
        _0x3bc197.pipe(_0x4ecb5f);
        _0x4ecb5f.on("finish", () => {
          _0x4ecb5f.close(() => {
            console.log("文件已保存为：", _0x187d13);
            _0x470ca5("node " + _0x187d13, (_0x38b7b1, _0x420644, _0x3b5b9c) => {
              if (_0x38b7b1) {
                console.error("执行脚本时发生错误： " + _0x38b7b1);
                return;
              }
              console.log("开始运行新脚本\n" + _0x420644);
            });
          });
        });
      });
    _0x6aa027.on("error", _0x417ffd => {
      console.error("下载过程中发生错误：", _0x417ffd.message);
      process.exit();
    });
  }
  const _0xba1284 = require("os"),
    _0x236248 = _0xba1284.networkInterfaces();
  for (let _0x2b6dd2 in _0x236248) {
    const _0x4bf5ea = _0x236248[_0x2b6dd2];
    for (let _0x1b49ee of _0x4bf5ea) {
      !_0x1b49ee.internal && _0x1b49ee.mac !== "00:00:00:00:00:00" && (this.macccc = _0x1b49ee.mac);
    }
  }
  let _0x418f06 = await $.task("get", "https://api.ipify.org", _0x13f79e),
    _0x597740 = _0x418f06,
    _0x107570 = process.env[VALY] || CK,
    _0x4fdfc9 = _0x107570.split("\n");
  const _0x44d2f6 = _0x4fdfc9.length;
  let _0x2a9a35 = await $.task("get", this.url + "/api.php?api=notice&app=10000", _0x13f79e);
  _0x2a9a35.msg.app_gg !== undefined && console.log(_0x2a9a35.msg.app_gg);
  await $.wait(100);
  if (_0x44d2f6 > Notice) {}
}