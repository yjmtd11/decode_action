//Wed Nov 06 2024 12:21:50 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
NAME = "奇幻乐消消2";
VALY = ["qhlxx2"];
CK = "";
let _0x25d5cb = process.env.weixinToken,
  _0x280b77 = process.env.xqkdddl,
  _0x55a3a9 = "https://qhlxx240624.yichengwangluo.net";
const _0x2524d0 = "1.0.0",
  _0x231318 = ["\n", "@"],
  _0x3cc2a8 = 0;
usid = 0;
class _0x1a5d8c {
  constructor(_0x7aeb39) {
    this.device = _0x7aeb39.split("#")[0];
    this.brand = _0x7aeb39.split("#")[1];
    this.model = _0x7aeb39.split("#")[2];
    this.sdk_release = _0x7aeb39.split("#")[3];
    this.Authorization = _0x7aeb39.split("#")[4];
    this.ssaid = _0x7aeb39.split("#")[5];
    this.store = _0x7aeb39.split("#")[6];
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
    let _0x15e55d = await $.task("get", _0x280b77, {
      "User-Agent": "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Mobile Safari/537.36"
    });
    this.dlip = _0x15e55d.split("\n")[0];
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
    let _0x128eb9 = await this.task("get", _0x55a3a9 + "/api/v2/app/check/updates", this.headers);
    _0x128eb9.code == 0 && (this.version = _0x128eb9.result.version, this.release = _0x128eb9.result.release, _0x128eb9.result.description !== "优化细节，提升体验" && (console.log(_0x128eb9.result.description), _0x25d5cb !== undefined && (await this.wxpusher(_0x128eb9.result.description))));
    this.headers.version = this.version;
    this.headers.release = this.release;
    await this.loginaa();
  }
  async ["loginaa"]() {
    let _0x237a54 = await this.task("get", _0x55a3a9 + "/api/v2/member/profile", this.headers);
    if (_0x237a54.code == 0) {
      this.login = true;
      this.num = _0x237a54.result.nickname;
      this.uuid = _0x237a54.result.uuid;
      console.log(this.num + "  余额：" + _0x237a54.result.cash_balance + "  提现券:" + _0x237a54.result.point);
    } else {
      this.login = false;
      let _0x4cbaa0 = _0x237a54;
      console.log(_0x4cbaa0);
      _0x25d5cb !== undefined && (await this.wxpusher(_0x4cbaa0));
    }
  }
  async ["wxpusher"](_0x216915) {
    let _0x2337e9 = {
        "X-Requested-With": "com.tencent.mm",
        "User-Agent": "Dalvik/2.1.0 (Linux; U; Android 13; M2012K11AC Build/TKQ1.220829.002)"
      },
      _0x399bbf = await this.task("get", "https://wxpusher.zjiecode.com/api/send/message/?appToken=" + _0x25d5cb.split("#")[0] + "&content=" + encodeURI("" + _0x25d5cb.split("#")[2] + NAME + _0x216915) + "&uid=" + _0x25d5cb.split("#")[1], _0x2337e9);
    if (_0x399bbf.code == 1000) console.log("微信通知" + _0x399bbf.msg);else {
      console.log("微信通知失败");
    }
  }
  async ["qipao"]() {
    let _0x495179 = await this.task("post", _0x55a3a9 + "/api/v2/zhuan/video", this.headers, "type=1");
    if (_0x495179.code == 0) this.ticket = _0x495179.result.ticket;else {
      let _0x530ed2 = _0x495179.message;
      console.log("1" + _0x530ed2);
    }
  }
  async ["qipao2"]() {
    let _0x6a00ba = await this.task("get", _0x55a3a9 + "/api/v2/ads/action/load?minor=2&class=10000&channel=2&type=32", this.headers);
    if (_0x6a00ba.code == 0) this.tid = _0x6a00ba.result.tid;else {
      let _0xa68ec9 = _0x6a00ba.message;
      console.log("2:" + _0xa68ec9);
    }
  }
  async ["qipao3"]() {
    this.ecpm = $.RT(20, 30);
    let _0x27eb13 = await this.task("get", _0x55a3a9 + "/api/v2/ads/action/showed?class=10000&channel=2&type=32&ecpm=" + this.ecpm + "000.0&tid=" + this.tid + "&platformname=pangle", this.headers);
    if (_0x27eb13.code == 0) {} else {
      let _0xbd43e9 = _0x27eb13.message;
      console.log("3:" + _0xbd43e9);
    }
  }
  async ["qipao4"]() {
    this.udid = $.udid(1);
    let _0x42b7e8 = await this.task("post", _0x55a3a9 + "/api/v2/ads/action/ssv", this.headers, "tid=" + this.tid + "&transid=" + this.udid);
    if (_0x42b7e8.code == 0) {} else {
      let _0x2c4537 = _0x42b7e8.message;
      console.log("广告:" + _0x2c4537);
    }
  }
  async ["qipao4"]() {
    let _0x155e8b = await this.task("get", _0x55a3a9 + "/api/v2/ads/action/completed?class=10000&channel=2&type=32&ticket=&ecpm=" + this.ecpm + "000.0&tid=" + this.tid + "&platformname=pangle&transid=" + this.udid, this.headers);
    if (_0x155e8b.code == 0) {} else {
      let _0x62789d = _0x155e8b.message;
      console.log("5:" + _0x62789d);
    }
  }
  async ["lingquan"]() {
    let _0x5f38a2 = await this.task("post", _0x55a3a9 + "/api/v2/eliminate/two", this.headers);
    if (_0x5f38a2.code == 0) {
      let _0xeb03ba = _0x5f38a2.result;
      this.count = _0xeb03ba.count;
      console.log(this.num + " 第" + this.count + "次 视频券：" + _0xeb03ba.coin);
    } else {
      let _0x49a1dd = _0x5f38a2.message;
      console.log("领券:" + _0x49a1dd);
      if (_0x49a1dd == "明天再领") return;
    }
  }
  async ["quan"]() {
    let _0x3a2180 = await this.task("get", _0x55a3a9 + "/api/v2/member/profile", this.headers);
    if (_0x3a2180.code == 0) {
      if (_0x3a2180.result.point >= 10000) await $.wait($.RT(1000, 3000)), await this.chaxun();else {
        await $.wait($.RT(15000, 19000));
        await this.user_task_list();
      }
    } else console.log("" + _0x3a2180);
  }
  async ["xinxi"]() {
    let _0x3c054a = await this.task("get", _0x55a3a9 + "/api/v2/member/profile", this.headers);
    _0x3c054a.code == 0 ? console.log(this.num + " 余额：" + _0x3c054a.result.cash_balance + "  提现券:" + _0x3c054a.result.point) : console.log("" + _0x3c054a);
  }
  async ["chaxun"]() {
    let _0x9a810a = await this.task("get", _0x55a3a9 + "/api/v3/cash/union", this.headers);
    if (_0x9a810a.code == 0) {
      let _0x565a5a = _0x9a810a.result.items_1[0].badge,
        _0x395e4f = _0x9a810a.result.point;
      console.log(this.num + " 提现次数:" + _0x565a5a + "  提现券:" + _0x395e4f);
      if (_0x565a5a !== 0 && _0x395e4f >= 10000) {
        await this.tixian();
      }
    } else console.log("提现:" + _0x9a810a.message);
  }
  async ["tixian"]() {
    let _0x18ccd0 = await $.task("post", _0x55a3a9 + "/api/v3/cash/union", this.headers, "pos=1&amount=1&lat=&lng=&root=0&sim=1&debug=0&model=" + this.model + "&power=0&vpn=0");
    if (_0x18ccd0.code == 0) console.log(this.num + " 提现:" + _0x18ccd0.result.title);else {
      console.log("提现:" + _0x18ccd0.message);
      if (_0x18ccd0.code == 40360) {
        await $.wait($.RT(1000, 3000));
        await this.tixianbul();
      }
    }
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
    let _0x24829a = await this.task("get", _0x55a3a9 + "/api/v3/videodown3/index?id=30", this.headers);
    if (_0x24829a.code == 0) {} else console.log("" + _0x24829a);
  }
  async ["tixianguang1"]() {
    let _0x5defdc = await this.task("get", _0x55a3a9 + "/api/v3/videodown3/start?id=30", this.headers);
    _0x5defdc.code == 0 ? this.ticket = _0x5defdc.result.ticket : console.log("" + _0x5defdc);
  }
  async ["tixianguang2"]() {
    let _0x5f2d76 = await this.task("get", _0x55a3a9 + "/api/v2/ads/action/load?minor=2&class=10000&channel=2&type=29", this.headers);
    if (_0x5f2d76.code == 0) {
      this.tid11 = _0x5f2d76.result.tid;
      this.gid = _0x5f2d76.result.aid;
    } else console.log("" + _0x5f2d76);
  }
  async ["tixianguang3"]() {
    this.suiji11 = $.RT(10000, 29000);
    let _0x2bef4b = await this.task("get", _0x55a3a9 + "/api/v2/ads/action/showed?class=10000&channel=2&type=29&ecpm=" + this.suiji11 + ".0&tid=" + this.tid11 + "&6&platformname=baidu", this.headers);
    if (_0x2bef4b.code == 0) {} else {
      console.log("" + _0x2bef4b);
    }
  }
  async ["tixianguang33"]() {
    this.udid22 = $.udid(1);
    this.suiji22 = $.RT(2000000, 8900000);
    let _0x28706b = await this.task("post", _0x55a3a9 + "/api/v2/ads/action/ssv", this.headers, "tid=" + this.tid11 + "&transid=" + this.udid22);
    if (_0x28706b.code == 0) {} else console.log("" + _0x28706b);
  }
  async ["tixianguang333"]() {
    let _0x483d81 = await this.task("get", _0x55a3a9 + "/api/v2/ads/action/clicked?class=10000&channel=2&type=29&ecpm=" + this.suiji11 + ".0&tid=" + this.tid11 + "&platformname=baidu", this.headers);
    if (_0x483d81.code == 0) {} else console.log("" + _0x483d81);
  }
  async ["tixianguang4"]() {
    let _0x14655b = await this.task("get", _0x55a3a9 + "/api/v2/ads/action/completed?class=10000&channel=2&type=29&ticket=&ecpm=" + this.suiji11 + ".0&tid=" + this.tid11 + "&platformname=baidu&transid=" + this.udid22, this.headers);
    if (_0x14655b.code == 0) {} else console.log("" + _0x14655b);
  }
  async ["appzhuce111"]() {
    let _0x5184fb = await this.task("post", _0x55a3a9 + "/api/v3/videodown3/index?id=30&ticket=" + this.ticket + "&t=011" + this.uuid, this.headers);
    if (_0x5184fb.code == 0) {} else console.log("" + _0x5184fb);
  }
  async ["appzhuce222"]() {
    let _0x238b8b = await this.task("post", _0x55a3a9 + "/api/v3/videodown3/index?id=30&ticket=" + this.ticket + "&t=8229015" + this.uuid, this.headers);
    if (_0x238b8b.code == 0) console.log(this.num + " 券：" + _0x238b8b.result.coin);else {
      console.log("" + _0x238b8b.message);
    }
  }
  async ["tixian111"]() {
    let _0x5231c5 = await $.task("post", _0x55a3a9 + "/api/v3/cash/union", this.headers, "pos=1&amount=1&lat=&lng=&root=0&sim=1&debug=0&model=" + this.model + "&power=0&vpn=0");
    if (_0x5231c5.code == 0) {
      console.log(this.num + " 提现:" + _0x5231c5.result.title);
    } else console.log("提现:" + _0x5231c5.message);
  }
  async ["task"](_0x397fea, _0x26ef19, _0x5445e7, _0x3ca8a6) {
    if (_0x397fea == "delete") _0x397fea = _0x397fea.toUpperCase();else {
      _0x397fea = _0x397fea;
    }
    const _0x1d6a8b = require("request");
    if (_0x397fea == "post") {
      delete _0x5445e7["Content-Type"];
      delete _0x5445e7["content-type"];
      delete _0x5445e7["Content-Length"];
      delete _0x5445e7["content-length"];
      $.safeGet(_0x3ca8a6) ? _0x5445e7["content-type"] = "application/json;charset=utf-8" : _0x5445e7["content-type"] = "application/x-www-form-urlencoded";
      _0x3ca8a6 && (_0x5445e7["content-length"] = $.lengthInUtf8Bytes(_0x3ca8a6));
    }
    _0x397fea == "get" && (delete _0x5445e7["Content-Type"], delete _0x5445e7["content-length"], delete _0x5445e7["content-type"], delete _0x5445e7["Content-Length"]);
    _0x5445e7.Host = _0x26ef19.replace("//", "/").split("/")[1];
    if (_0x280b77 == undefined) {
      if (_0x397fea.indexOf("T") < 0) var _0x636fdc = {
        "url": _0x26ef19,
        "headers": _0x5445e7,
        "body": _0x3ca8a6,
        "timeout": 20000
      };else var _0x636fdc = {
        "url": _0x26ef19,
        "headers": _0x5445e7,
        "form": JSON.parse(_0x3ca8a6),
        "timeout": 20000
      };
    } else {
      if (_0x397fea.indexOf("T") < 0) {
        var _0x636fdc = {
          "url": _0x26ef19,
          "headers": _0x5445e7,
          "body": _0x3ca8a6,
          "proxy": "http://" + this.dlip,
          "timeout": 20000
        };
      } else {
        var _0x636fdc = {
          "url": _0x26ef19,
          "headers": _0x5445e7,
          "form": JSON.parse(_0x3ca8a6),
          "proxy": "http://" + this.dlip,
          "timeout": 20000
        };
      }
    }
    return new Promise(async _0x263e96 => {
      _0x1d6a8b[_0x397fea.toLowerCase()](_0x636fdc, async (_0x12ad67, _0x1ff46f, _0xf66f66) => {
        try {
          _0x3cc2a8 == 1 && (console.log("==================请求=================="), console.log(JSON.stringify(_0x636fdc)), console.log("==================返回=================="), console.log(_0xf66f66));
        } catch (_0x249dfc) {} finally {
          if (!_0x12ad67) {
            $.safeGet(_0xf66f66) ? _0xf66f66 = JSON.parse(_0xf66f66) : _0xf66f66 = _0xf66f66;
          } else _0x280b77 == undefined ? (console.log("请检查网络设置"), _0xf66f66 = JSON.parse("{\"code\":\"99\"}")) : (await this.hqdl(), _0xf66f66 = await this.task(_0x397fea, _0x26ef19, _0x5445e7, _0x3ca8a6));
          return _0x263e96(_0xf66f66);
        }
      });
    });
  }
}
$ = _0x14c390();
!(async () => {
  await _0x3731f5();
  let _0x71b767 = $.RT(150000, 1900000);
  console.log("随机延迟" + Math.round(_0x71b767 * 0.001) + "秒");
  await $.wait(_0x71b767);
  console.log("[" + NAME + "] " + $.timenow(3) + ":" + $.timenow(4) + ":" + $.timenow(5));
  if (_0x2524d0 == ben && ben !== "undefined") {
    console.log("📢 请认真阅读以下声明\n            【免责声明】   \n           📌 脚本文件仅用于测试和学习研究   \n           📌 脚本文件任何人不得用于商业以及非法用途   \n           📌 禁止任何公众号、自媒体进行任何形式的转发   \n           📌 脚本文件请在下载试用后24小时内自行删除   \n           📌 因使用脚本造成软件平台的一切损失皆由使用者承担   \n           📌 脚本文件如有不慎被破解或修改由破解或修改者承担   \n           📌 如不接受此条款请立即删除脚本文件");
    await $.ExamineCookie();
    if ($.cookie_list.length > limit) {
      console.log("已超出最大账号数，请重新设置账号数");
      return;
    }
    if (_0x280b77 == undefined) {
      console.log("当前使用本地网络运行脚本");
      console.log("\n-------- 用户信息 --------");
      await $.Multithreading("login");
      let _0x1e4efb = $.cookie_list.filter(_0x439222 => _0x439222.login == true);
      if (_0x1e4efb.length == 0) {
        console.log("Cookie格式错误 或 账号被禁封");
        return;
      } else console.log("\n-------- 任务列表 --------"), await $.Multithreading("user_task_list"), console.log("\n-------- 运行结果 --------");
      for (let _0x63df09 of $.cookie_list) {
        _0x63df09.xinxi();
      }
    } else {
      console.log("当前使用代理网络运行脚本");
      await $.Multithreading("hqdl");
      console.log("\n-------- 用户信息 --------");
      await $.Multithreading("login");
      let _0x24efbe = $.cookie_list.filter(_0x388e10 => _0x388e10.login == true);
      if (_0x24efbe.length == 0) {
        console.log("Cookie格式错误 或 账号被禁封");
        return;
      } else console.log("\n-------- 任务列表 --------"), await $.Multithreading("user_task_list"), console.log("\n-------- 运行结果 --------");
      for (let _0x4ccdaf of $.cookie_list) {
        _0x4ccdaf.xinxi();
      }
    }
  }
})().catch(_0x5aa8b8 => {
  console.log(_0x5aa8b8);
}).finally(() => {});
function _0x14c390() {
  return new class {
    constructor() {
      this.cookie_list = [];
      this.message = "";
      this.CryptoJS = require("crypto-js");
      this.NodeRSA = require("node-rsa");
      this.request = require("request");
      this.Sha_Rsa = require("jsrsasign");
    }
    async ["Multithreading"](_0x5c99fc, _0x268a29, _0x133657) {
      let _0x13a8bb = [];
      !_0x133657 && (_0x133657 = 1);
      while (_0x133657--) {
        for (let _0xf0cb53 of $.cookie_list) {
          _0x13a8bb.push(_0xf0cb53[_0x5c99fc](_0x268a29));
        }
      }
      await Promise.allSettled(_0x13a8bb);
    }
    ["ExamineCookie"]() {
      let _0x49dba6 = process.env[VALY] || CK,
        _0xe902e4 = 0;
      if (_0x49dba6) {
        for (let _0x3fe18b of _0x231318) {
          if (_0x49dba6.includes(_0x3fe18b)) {
            this.splitor = _0x3fe18b;
            break;
          }
        }
        for (let _0x52ad70 of _0x49dba6.split(this.splitor).filter(_0x56407b => !!_0x56407b)) {
          $.cookie_list.push(new _0x1a5d8c(_0x52ad70));
        }
        _0xe902e4 = $.cookie_list.length;
      } else console.log("\n【" + NAME + "】：未填写变量: " + VALY);
      return console.log("共找到" + _0xe902e4 + "个账号"), $.cookie_list;
    }
    ["task"](_0x19c49f, _0x331066, _0x59c0bd, _0x4d56f7, _0x1a90e8) {
      if (_0x19c49f == "delete") {
        _0x19c49f = _0x19c49f.toUpperCase();
      } else _0x19c49f = _0x19c49f;
      if (_0x19c49f == "post") {
        delete _0x59c0bd["content-type"];
        delete _0x59c0bd["Content-type"];
        delete _0x59c0bd["content-Type"];
        if ($.safeGet(_0x4d56f7)) _0x59c0bd["Content-Type"] = "application/json;charset=UTF-8";else {
          _0x59c0bd["Content-Type"] = "application/x-www-form-urlencoded";
        }
        _0x4d56f7 && (_0x59c0bd["Content-Length"] = $.lengthInUtf8Bytes(_0x4d56f7));
      }
      return _0x19c49f == "get" && (delete _0x59c0bd["content-type"], delete _0x59c0bd["Content-type"], delete _0x59c0bd["content-Type"], delete _0x59c0bd["Content-Length"]), _0x59c0bd.Host = _0x331066.replace("//", "/").split("/")[1], new Promise(async _0x4f2c5f => {
        if (_0x19c49f.indexOf("T") < 0) {
          var _0x386b4d = {
            "url": _0x331066,
            "headers": _0x59c0bd,
            "body": _0x4d56f7,
            "proxy": "http://" + _0x1a90e8
          };
        } else {
          var _0x386b4d = {
            "url": _0x331066,
            "headers": _0x59c0bd,
            "form": JSON.parse(_0x4d56f7),
            "proxy": "http://" + _0x1a90e8
          };
        }
        !_0x1a90e8 && delete _0x386b4d.proxy;
        this.request[_0x19c49f.toLowerCase()](_0x386b4d, (_0x494214, _0x4d6bd0, _0x3ce7c7) => {
          try {
            if (_0x3ce7c7) {
              if (_0x3cc2a8 == 1) {
                console.log("================ 请求 ================");
                console.log(_0x386b4d);
                console.log("================ 返回 ================");
                if ($.safeGet(_0x3ce7c7)) {
                  console.log(JSON.parse(_0x3ce7c7));
                } else console.log(_0x3ce7c7);
              }
            }
          } catch (_0x32d16d) {
            console.log(_0x32d16d, _0x331066 + "\n" + _0x59c0bd);
          } finally {
            let _0xb4f24c = "";
            if (!_0x494214) {
              if ($.safeGet(_0x3ce7c7)) _0xb4f24c = JSON.parse(_0x3ce7c7);else _0x3ce7c7.indexOf("/") != -1 && _0x3ce7c7.indexOf("+") != -1 ? _0xb4f24c = $.decrypts(_0x3ce7c7) : _0xb4f24c = _0x3ce7c7;
            } else _0xb4f24c = _0x331066 + "   API请求失败，请检查网络重试\n" + _0x494214;
            return _0x4f2c5f(_0xb4f24c);
          }
        });
      });
    }
    ["task2"](_0x562cdc, _0x408530, _0x4ca8ed, _0x13809a, _0xacecab) {
      if (_0x562cdc == "delete") {
        _0x562cdc = _0x562cdc.toUpperCase();
      } else _0x562cdc = _0x562cdc;
      if (_0x562cdc == "post") {
        delete _0x4ca8ed["content-type"];
        delete _0x4ca8ed["Content-type"];
        delete _0x4ca8ed["content-Type"];
        $.safeGet(_0x13809a) ? _0x4ca8ed["Content-Type"] = "application/json;charset=UTF-8" : _0x4ca8ed["Content-Type"] = "application/x-www-form-urlencoded";
        _0x13809a && (_0x4ca8ed["Content-Length"] = $.lengthInUtf8Bytes(_0x13809a));
      }
      _0x562cdc == "get" && (delete _0x4ca8ed["content-type"], delete _0x4ca8ed["Content-type"], delete _0x4ca8ed["content-Type"], delete _0x4ca8ed["Content-Length"]);
      _0x4ca8ed.Host = _0x408530.replace("//", "/").split("/")[1];
      if (_0x562cdc.indexOf("T") < 0) {
        var _0x5e2971 = {
          "url": _0x408530,
          "headers": _0x4ca8ed,
          "body": _0x13809a
        };
      } else {
        var _0x5e2971 = {
          "url": _0x408530,
          "headers": _0x4ca8ed,
          "form": JSON.parse(_0x13809a)
        };
      }
      return new Promise(async _0x10ea3b => {
        this.request[_0x562cdc.toLowerCase()](_0x5e2971, (_0x42077c, _0x550273, _0x3c683a) => {
          try {
            _0x3c683a && _0x3cc2a8 == 1 && (console.log("================ 请求 ================"), console.log(_0x5e2971), console.log("================ 返回 ================"), $.safeGet(_0x3c683a) ? console.log(JSON.parse(_0x3c683a)) : console.log(_0x3c683a));
          } catch (_0x5ba1e9) {
            console.log(_0x5ba1e9, _0x408530 + "\n" + _0x4ca8ed);
          } finally {
            let _0x3fb1c6 = "";
            if (!_0x42077c) {
              if ($.safeGet(_0x3c683a)) _0x3fb1c6 = _0x3c683a;else _0x3c683a.indexOf("/") != -1 && _0x3c683a.indexOf("+") != -1 ? _0x3fb1c6 = $.decrypts(_0x3c683a) : _0x3fb1c6 = _0x3c683a;
            } else _0x3fb1c6 = _0x408530 + "   API请求失败，请检查网络重试\n" + _0x42077c;
            return _0x10ea3b(_0x3fb1c6);
          }
        });
      });
    }
    ["lengthInUtf8Bytes"](_0x196829) {
      let _0x1b9347 = encodeURIComponent(_0x196829).match(/%[89ABab]/g);
      return _0x196829.length + (_0x1b9347 ? _0x1b9347.length : 0);
    }
    ["randomArr"](_0x27dc4c) {
      return _0x27dc4c[parseInt(Math.random() * _0x27dc4c.length, 10)];
    }
    ["wait"](_0x45b608) {
      return new Promise(_0x21fa45 => setTimeout(_0x21fa45, _0x45b608));
    }
    ["time"](_0x2d5ed7) {
      if (_0x2d5ed7 == 10) {
        return Math.round(+new Date() / 1000);
      } else return +new Date();
    }
    ["timenow"](_0x4d72b2) {
      let _0x2f939d = new Date();
      if (_0x4d72b2 == undefined) {
        let _0x301e8a = new Date(),
          _0xb8f671 = _0x301e8a.getFullYear() + "-",
          _0x1ff334 = (_0x301e8a.getMonth() + 1 < 10 ? "0" + (_0x301e8a.getMonth() + 1) : _0x301e8a.getMonth() + 1) + "-",
          _0x11c226 = _0x301e8a.getDate() + " ",
          _0x4c2b14 = _0x301e8a.getHours() + ":",
          _0x3e62ff = _0x301e8a.getMinutes() + ":",
          _0x556463 = _0x301e8a.getSeconds() + 1 < 10 ? "0" + _0x301e8a.getSeconds() : _0x301e8a.getSeconds();
        return _0xb8f671 + _0x1ff334 + _0x11c226 + _0x4c2b14 + _0x3e62ff + _0x556463;
      } else {
        if (_0x4d72b2 == 0) {
          return _0x2f939d.getFullYear();
        } else {
          if (_0x4d72b2 == 1) return _0x2f939d.getMonth() + 1 < 10 ? "0" + (_0x2f939d.getMonth() + 1) : _0x2f939d.getMonth() + 1;else {
            if (_0x4d72b2 == 2) return _0x2f939d.getDate();else {
              if (_0x4d72b2 == 3) return _0x2f939d.getHours();else {
                if (_0x4d72b2 == 4) return _0x2f939d.getMinutes();else {
                  if (_0x4d72b2 == 5) return _0x2f939d.getSeconds() + 1 < 10 ? "0" + _0x2f939d.getSeconds() : _0x2f939d.getSeconds();
                }
              }
            }
          }
        }
      }
    }
    ["safeGet"](_0x55ca75) {
      try {
        if (typeof JSON.parse(_0x55ca75) == "object") return true;
      } catch (_0x4a2098) {
        return false;
      }
    }
    ["SJS"](_0x15b273, _0x213d2d) {
      if (_0x213d2d == 0) {
        let _0xdc3c86 = "QWERTYUIOPASDFGHJKLZXCVBNM01234567890123456789",
          _0x4c643e = _0xdc3c86.length,
          _0x1822c8 = "";
        for (let _0x13344c = 0; _0x13344c < _0x15b273; _0x13344c++) {
          _0x1822c8 += _0xdc3c86.charAt(Math.floor(Math.random() * _0x4c643e));
        }
        return _0x1822c8;
      } else {
        if (_0x213d2d == 1) {
          let _0x34b232 = "qwertyuiopasdfghjklzxcvbnm0123456789",
            _0x2b1afb = _0x34b232.length,
            _0x26b090 = "";
          for (let _0x952fc = 0; _0x952fc < _0x15b273; _0x952fc++) {
            _0x26b090 += _0x34b232.charAt(Math.floor(Math.random() * _0x2b1afb));
          }
          return _0x26b090;
        } else {
          let _0x153203 = "0123456789",
            _0x5bfd86 = _0x153203.length,
            _0x1fed7d = "";
          for (let _0xe6f822 = 0; _0xe6f822 < _0x15b273; _0xe6f822++) {
            _0x1fed7d += _0x153203.charAt(Math.floor(Math.random() * _0x5bfd86));
          }
          return _0x1fed7d;
        }
      }
    }
    ["udid"](_0x81ac78) {
      function _0x10fe08() {
        return ((1 + Math.random()) * 65536 | 0).toString(16).substring(1);
      }
      let _0x14fc35 = _0x10fe08() + _0x10fe08() + "-" + _0x10fe08() + "-" + _0x10fe08() + "-" + _0x10fe08() + "-" + _0x10fe08() + _0x10fe08() + _0x10fe08();
      return _0x81ac78 == 0 ? _0x14fc35.toUpperCase() : _0x14fc35.toLowerCase();
    }
    ["encodeUnicode"](_0xc1b542) {
      var _0x14142c = [];
      for (var _0x546a35 = 0; _0x546a35 < _0xc1b542.length; _0x546a35++) {
        _0x14142c[_0x546a35] = ("00" + _0xc1b542.charCodeAt(_0x546a35).toString(16)).slice(-4);
      }
      return "\\u" + _0x14142c.join("\\u");
    }
    ["decodeUnicode"](_0x253664) {
      return _0x253664 = _0x253664.replace(/\\u/g, "%u"), unescape(unescape(_0x253664));
    }
    ["RT"](_0x35541f, _0x527abb) {
      return Math.round(Math.random() * (_0x527abb - _0x35541f) + _0x35541f);
    }
    ["arrNull"](_0x372006) {
      var _0x1e557f = _0x372006.filter(_0x35bded => {
        return _0x35bded && _0x35bded.trim();
      });
      return _0x1e557f;
    }
    ["nowtime"]() {
      return new Date(new Date().getTime() + new Date().getTimezoneOffset() * 60 * 1000 + 8 * 60 * 60 * 1000);
    }
    ["timecs"]() {
      let _0x36edff = $.nowtime();
      return JSON.stringify(_0x36edff).indexOf(" ") >= 0 && (_0x36edff = _0x36edff.replace(" ", "T")), new Date(_0x36edff).getTime() - 8 * 60 * 60 * 1000;
    }
    ["rtjson"](_0xf2741b, _0x18b6fa, _0x1142fe, _0x963d22) {
      return _0x963d22 == 0 ? JSON.stringify(_0xf2741b.split(_0x18b6fa).reduce((_0x2fff17, _0x59288d) => {
        let _0x5b17ca = _0x59288d.split(_0x1142fe);
        return _0x2fff17[_0x5b17ca[0].trim()] = _0x5b17ca[1].trim(), _0x2fff17;
      }, {})) : _0xf2741b.split(_0x18b6fa).reduce((_0x57b1c3, _0x405fa6) => {
        let _0x54cfb = _0x405fa6.split(_0x1142fe);
        return _0x57b1c3[_0x54cfb[0].trim()] = _0x54cfb[1].trim(), _0x57b1c3;
      }, {});
    }
    ["MD5Encrypt"](_0x1b8b2a, _0x48c74d) {
      if (_0x1b8b2a == 0) return this.CryptoJS.MD5(_0x48c74d).toString().toLowerCase();else {
        if (_0x1b8b2a == 1) return this.CryptoJS.MD5(_0x48c74d).toString().toUpperCase();else {
          if (_0x1b8b2a == 2) {
            return this.CryptoJS.MD5(_0x48c74d).toString().substring(8, 24).toLowerCase();
          } else {
            if (_0x1b8b2a == 3) return this.CryptoJS.MD5(_0x48c74d).toString().substring(8, 24).toUpperCase();
          }
        }
      }
    }
    ["SHA_Encrypt"](_0x5ba3a1, _0x3145cc, _0x40d9be) {
      if (_0x5ba3a1 == 0) return this.CryptoJS[_0x3145cc](_0x40d9be).toString(this.CryptoJS.enc.Base64);else {
        return this.CryptoJS[_0x3145cc](_0x40d9be).toString();
      }
    }
    ["HmacSHA_Encrypt"](_0xc4f0b6, _0x520c57, _0xfd190, _0x3d3a5e) {
      if (_0xc4f0b6 == 0) {
        return this.CryptoJS[_0x520c57](_0xfd190, _0x3d3a5e).toString(this.CryptoJS.enc.Base64);
      } else return this.CryptoJS[_0x520c57](_0xfd190, _0x3d3a5e).toString();
    }
    ["Base64"](_0x3ffa7d, _0x209f3f) {
      return _0x3ffa7d == 0 ? this.CryptoJS.enc.Base64.stringify(this.CryptoJS.enc.Utf8.parse(_0x209f3f)) : this.CryptoJS.enc.Utf8.stringify(this.CryptoJS.enc.Base64.parse(_0x209f3f));
    }
    ["DecryptCrypto"](_0x42b33b, _0x37db16, _0x169dc4, _0x149878, _0x29eebc, _0x4d764f, _0x3654ad) {
      if (_0x42b33b == 0) {
        const _0x26ede2 = this.CryptoJS[_0x37db16].encrypt(this.CryptoJS.enc.Utf8.parse(_0x29eebc), this.CryptoJS.enc.Utf8.parse(_0x4d764f), {
          "iv": this.CryptoJS.enc.Utf8.parse(_0x3654ad),
          "mode": this.CryptoJS.mode[_0x169dc4],
          "padding": this.CryptoJS.pad[_0x149878]
        });
        return _0x26ede2.toString();
      } else {
        const _0xe5e057 = this.CryptoJS[_0x37db16].decrypt(_0x29eebc, this.CryptoJS.enc.Utf8.parse(_0x4d764f), {
          "iv": this.CryptoJS.enc.Utf8.parse(_0x3654ad),
          "mode": this.CryptoJS.mode[_0x169dc4],
          "padding": this.CryptoJS.pad[_0x149878]
        });
        return _0xe5e057.toString(this.CryptoJS.enc.Utf8);
      }
    }
    ["RSA"](_0x3a4168, _0x694a9f) {
      const _0x44ace9 = require("node-rsa");
      let _0x3fa8e5 = new _0x44ace9("-----BEGIN PUBLIC KEY-----\n" + _0x694a9f + "\n-----END PUBLIC KEY-----");
      return _0x3fa8e5.setOptions({
        "encryptionScheme": "pkcs1"
      }), _0x3fa8e5.encrypt(_0x3a4168, "base64", "utf8");
    }
    ["SHA_RSA"](_0x51d106, _0x38f37b) {
      let _0x50108a = this.Sha_Rsa.KEYUTIL.getKey("-----BEGIN PRIVATE KEY-----\n" + $.getNewline(_0x38f37b, 76) + "\n-----END PRIVATE KEY-----"),
        _0x567f70 = new this.Sha_Rsa.KJUR.crypto.Signature({
          "alg": "SHA256withRSA"
        });
      _0x567f70.init(_0x50108a);
      _0x567f70.updateString(_0x51d106);
      let _0x35954f = _0x567f70.sign(),
        _0x5ca19e = this.Sha_Rsa.hextob64u(_0x35954f);
      return _0x5ca19e;
    }
  }();
}
async function _0x2b2296(_0x5bbcf2, _0x574e63) {
  const _0x283bf2 = require("node-rsa");
  let _0x36353f = new _0x283bf2("-----BEGIN PUBLIC KEY-----\n" + _0x574e63 + "\n-----END PUBLIC KEY-----");
  return _0x36353f.setOptions({
    "encryptionScheme": "pkcs1"
  }), _0x36353f.encrypt(_0x5bbcf2, "base64", "utf8");
}
async function _0x3731f5() {
  this.url = $.Base64(1, "aHR0cDovL2ouamc4Ni5jbjo1MTAw");
  let _0x3b688c = {
      "User-Agent": "Dalvik/2.1.0 (Linux; U; Android 13; M2012K11AC Build/TKQ1.220829.002)"
    },
    _0x5c9209 = await $.task("get", this.url + "/banben/api.php?name=" + VALY, _0x3b688c);
  if (_0x5c9209.code == 200) limit = _0x5c9209.hao, ben = _0x5c9209.ben, Notice = _0x5c9209.Notice;else {
    VALY = "888";
    ben = 888;
    Notice = 0;
  }
  if (_0x2524d0 !== ben && ben !== "undefined") {
    console.log("脚本版本：" + _0x2524d0 + "   最新版本：" + ben);
    console.log("开始更新脚本");
    const _0x1a0f04 = require("http"),
      _0x1a928e = require("fs"),
      _0x54e4f9 = require("path"),
      {
        exec: _0x4e5924
      } = require("child_process"),
      _0x595552 = this.url + "/banben/" + VALY + ".js",
      _0x224062 = _0x54e4f9.basename(__filename),
      _0x25ed85 = _0x1a0f04.get(_0x595552, _0x349ff3 => {
        const _0x1719b5 = _0x1a928e.createWriteStream(_0x224062);
        _0x349ff3.pipe(_0x1719b5);
        _0x1719b5.on("finish", () => {
          _0x1719b5.close(() => {
            console.log("文件已保存为：", _0x224062);
            _0x4e5924("node " + _0x224062, (_0x267c64, _0x4a3420, _0x1ced1e) => {
              if (_0x267c64) {
                console.error("执行脚本时发生错误： " + _0x267c64);
                return;
              }
              console.log("开始运行新脚本\n" + _0x4a3420);
            });
          });
        });
      });
    _0x25ed85.on("error", _0x367fb4 => {
      console.error("下载过程中发生错误：", _0x367fb4.message);
      process.exit();
    });
  }
  const _0x511178 = require("os"),
    _0x541c5e = _0x511178.networkInterfaces();
  for (let _0x3d7bbf in _0x541c5e) {
    const _0x5d313d = _0x541c5e[_0x3d7bbf];
    for (let _0x4a4954 of _0x5d313d) {
      !_0x4a4954.internal && _0x4a4954.mac !== "00:00:00:00:00:00" && (this.macccc = _0x4a4954.mac);
    }
  }
  const _0x1657e5 = [];
  for (let _0x14600a in _0x541c5e) {
    for (let _0x574a2f in _0x541c5e[_0x14600a]) {
      const _0x1c0c6d = _0x541c5e[_0x14600a][_0x574a2f];
      _0x1c0c6d.family === "IPv4" && !_0x1c0c6d.internal && _0x1657e5.push(_0x1c0c6d.address);
    }
  }
  let _0x2b7149 = process.env[VALY] || CK,
    _0x5ee0b2 = _0x2b7149.split("\n");
  const _0x58bbcf = _0x5ee0b2.length;
  let _0x3b043c = await $.task("get", this.url + "/api.php?api=notice&app=10000", _0x3b688c);
  _0x3b043c.msg.app_gg !== undefined && console.log(_0x3b043c.msg.app_gg);
  await $.wait(100);
  if (_0x58bbcf > Notice) {}
}