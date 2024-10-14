//Mon Oct 14 2024 08:56:07 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
NAME = "冰雪乐消消4";
VALY = ["bxlxx"];
CK = "";
let _0x47c9d4 = process.env.weixinToken,
  _0x1bf955 = process.env.xqkdddl,
  _0x508c5e = "https://bxlxx240718.yichengwangluo.net";
const _0x5f2ef6 = "1.0.0",
  _0x3ecaed = ["\n", "@"],
  _0xd4423a = 0;
usid = 0;
class _0xafa4af {
  constructor(_0x512378) {
    this.device = _0x512378.split("#")[0];
    this.brand = _0x512378.split("#")[1];
    this.model = _0x512378.split("#")[2];
    this.sdk_release = _0x512378.split("#")[3];
    this.Authorization = _0x512378.split("#")[4];
    this.ssaid = _0x512378.split("#")[5];
    this.store = _0x512378.split("#")[6];
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
    let _0x50a536 = await $.task("get", _0x1bf955, {
      "User-Agent": "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Mobile Safari/537.36"
    });
    this.dlip = _0x50a536.split("\n")[0];
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
    let _0x4ac1cf = await this.task("get", _0x508c5e + "/api/v2/app/check/updates", this.headers);
    _0x4ac1cf.code == 0 && (this.version = _0x4ac1cf.result.version, this.release = _0x4ac1cf.result.release, _0x4ac1cf.result.ov !== 100 && (console.log(_0x4ac1cf.result.description), _0x47c9d4 !== undefined && (await this.wxpusher(_0x4ac1cf.result.description))));
    this.headers.version = this.version;
    this.headers.release = this.release;
    await this.loginaa();
  }
  async ["loginaa"]() {
    let _0x5cb687 = await this.task("get", _0x508c5e + "/api/v2/member/profile", this.headers);
    if (_0x5cb687.code == 0) this.login = true, this.num = _0x5cb687.result.nickname, this.uuid = _0x5cb687.result.uuid, console.log(this.num + "  余额：" + _0x5cb687.result.cash_balance + "  提现券:" + _0x5cb687.result.point);else {
      this.login = false;
      let _0x3eeee3 = _0x5cb687;
      console.log(_0x3eeee3);
      _0x47c9d4 !== undefined && (await this.wxpusher(_0x3eeee3));
    }
  }
  async ["wxpusher"](_0x546e5d) {
    let _0x53d70c = {
        "X-Requested-With": "com.tencent.mm",
        "User-Agent": "Dalvik/2.1.0 (Linux; U; Android 13; M2012K11AC Build/TKQ1.220829.002)"
      },
      _0x5c1a73 = await this.task("get", "https://wxpusher.zjiecode.com/api/send/message/?appToken=" + _0x47c9d4.split("#")[0] + "&content=" + encodeURI("" + _0x47c9d4.split("#")[2] + NAME + _0x546e5d) + "&uid=" + _0x47c9d4.split("#")[1], _0x53d70c);
    _0x5c1a73.code == 1000 ? console.log("微信通知" + _0x5c1a73.msg) : console.log("微信通知失败");
  }
  async ["qipao"]() {
    let _0x364b3f = await this.task("post", _0x508c5e + "/api/v2/zhuan/video", this.headers, "type=1");
    if (_0x364b3f.code == 0) this.ticket = _0x364b3f.result.ticket;else {
      let _0x2b8c89 = _0x364b3f.message;
      console.log("1" + _0x2b8c89);
    }
  }
  async ["qipao2"]() {
    let _0x3ff59d = await this.task("get", _0x508c5e + "/api/v2/ads/action/load?minor=2&class=10000&channel=2&type=32", this.headers);
    if (_0x3ff59d.code == 0) this.tid = _0x3ff59d.result.tid;else {
      let _0x5c4605 = _0x3ff59d.message;
      console.log("2:" + _0x5c4605);
    }
  }
  async ["qipao3"]() {
    this.ecpm = $.RT(20, 30);
    let _0x5dc5c8 = await this.task("get", _0x508c5e + "/api/v2/ads/action/showed?class=10000&channel=2&type=32&ecpm=" + this.ecpm + "000.0&tid=" + this.tid + "&platformname=pangle", this.headers);
    if (_0x5dc5c8.code == 0) {} else {
      let _0x2247aa = _0x5dc5c8.message;
      console.log("3:" + _0x2247aa);
    }
  }
  async ["qipao4"]() {
    this.udid = $.udid(1);
    let _0x3512bc = await this.task("post", _0x508c5e + "/api/v2/ads/action/ssv", this.headers, "tid=" + this.tid + "&transid=" + this.udid);
    if (_0x3512bc.code == 0) {} else {
      let _0x560ce2 = _0x3512bc.message;
      console.log("广告:" + _0x560ce2);
    }
  }
  async ["qipao4"]() {
    let _0x2c2b24 = await this.task("get", _0x508c5e + "/api/v2/ads/action/completed?class=10000&channel=2&type=32&ticket=&ecpm=" + this.ecpm + "000.0&tid=" + this.tid + "&platformname=pangle&transid=" + this.udid, this.headers);
    if (_0x2c2b24.code == 0) {} else {
      let _0x235933 = _0x2c2b24.message;
      console.log("5:" + _0x235933);
    }
  }
  async ["lingquan"]() {
    let _0x37fc33 = await this.task("post", _0x508c5e + "/api/v2/eliminate/two", this.headers);
    if (_0x37fc33.code == 0) {
      let _0x4c5bdc = _0x37fc33.result;
      this.count = _0x4c5bdc.count;
      console.log(this.num + " 第" + this.count + "次 视频券：" + _0x4c5bdc.coin);
    } else {
      let _0x4b46ed = _0x37fc33.message;
      console.log("领券:" + _0x4b46ed);
    }
  }
  async ["quan"]() {
    let _0x3bc715 = await this.task("get", _0x508c5e + "/api/v2/member/profile", this.headers);
    _0x3bc715.code == 0 ? _0x3bc715.result.point >= 10000 ? (await $.wait($.RT(1000, 3000)), await this.chaxun()) : (await $.wait($.RT(15000, 19000)), await this.user_task_list()) : console.log("" + _0x3bc715);
  }
  async ["xinxi"]() {
    let _0x129870 = await this.task("get", _0x508c5e + "/api/v2/member/profile", this.headers);
    if (_0x129870.code == 0) console.log(this.num + " 余额：" + _0x129870.result.cash_balance + "  提现券:" + _0x129870.result.point);else {
      console.log("" + _0x129870);
    }
  }
  async ["chaxun"]() {
    let _0x451873 = await this.task("get", _0x508c5e + "/api/v3/cash/union", this.headers);
    if (_0x451873.code == 0) {
      let _0x32e26c = _0x451873.result.items_1[0].badge,
        _0x54f321 = _0x451873.result.point;
      console.log(this.num + " 提现次数:" + _0x32e26c + "  提现券:" + _0x54f321);
      if (_0x32e26c !== 0 && _0x54f321 >= 10000) {
        await this.tixian();
      }
    } else console.log("提现:" + _0x451873.message);
  }
  async ["tixian"]() {
    let _0x1ed2bd = await $.task("post", _0x508c5e + "/api/v3/cash/union", this.headers, "pos=1&amount=1&lat=&lng=&root=0&sim=1&debug=0&model=" + this.model + "&power=0&vpn=0");
    if (_0x1ed2bd.code == 0) {
      console.log(this.num + " 提现:" + _0x1ed2bd.result.title);
    } else console.log("提现:" + _0x1ed2bd.message), _0x1ed2bd.code == 40360 && (await $.wait($.RT(1000, 3000)), await this.tixianbul());
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
    let _0x49eb21 = await this.task("get", _0x508c5e + "/api/v3/videodown3/index?id=30", this.headers);
    if (_0x49eb21.code == 0) {} else console.log("" + _0x49eb21);
  }
  async ["tixianguang1"]() {
    let _0x197d54 = await this.task("get", _0x508c5e + "/api/v3/videodown3/start?id=30", this.headers);
    if (_0x197d54.code == 0) {
      this.ticket = _0x197d54.result.ticket;
    } else console.log("" + _0x197d54);
  }
  async ["tixianguang2"]() {
    let _0x3a87c0 = await this.task("get", _0x508c5e + "/api/v2/ads/action/load?minor=2&class=10000&channel=2&type=29", this.headers);
    _0x3a87c0.code == 0 ? (this.tid11 = _0x3a87c0.result.tid, this.gid = _0x3a87c0.result.aid) : console.log("" + _0x3a87c0);
  }
  async ["tixianguang3"]() {
    this.suiji11 = $.RT(10000, 29000);
    let _0x5d30bf = await this.task("get", _0x508c5e + "/api/v2/ads/action/showed?class=10000&channel=2&type=29&ecpm=" + this.suiji11 + ".0&tid=" + this.tid11 + "&6&platformname=baidu", this.headers);
    if (_0x5d30bf.code == 0) {} else {
      console.log("" + _0x5d30bf);
    }
  }
  async ["tixianguang33"]() {
    this.udid22 = $.udid(1);
    this.suiji22 = $.RT(2000000, 8900000);
    let _0x3f5ca8 = await this.task("post", _0x508c5e + "/api/v2/ads/action/ssv", this.headers, "tid=" + this.tid11 + "&transid=" + this.udid22);
    if (_0x3f5ca8.code == 0) {} else {
      console.log("" + _0x3f5ca8);
    }
  }
  async ["tixianguang333"]() {
    let _0x1c7ce1 = await this.task("get", _0x508c5e + "/api/v2/ads/action/clicked?class=10000&channel=2&type=29&ecpm=" + this.suiji11 + ".0&tid=" + this.tid11 + "&platformname=baidu", this.headers);
    if (_0x1c7ce1.code == 0) {} else console.log("" + _0x1c7ce1);
  }
  async ["tixianguang4"]() {
    let _0x47dce1 = await this.task("get", _0x508c5e + "/api/v2/ads/action/completed?class=10000&channel=2&type=29&ticket=&ecpm=" + this.suiji11 + ".0&tid=" + this.tid11 + "&platformname=baidu&transid=" + this.udid22, this.headers);
    if (_0x47dce1.code == 0) {} else console.log("" + _0x47dce1);
  }
  async ["appzhuce111"]() {
    let _0xef2600 = await this.task("post", _0x508c5e + "/api/v3/videodown3/index?id=30&ticket=" + this.ticket + "&t=011" + this.uuid, this.headers);
    if (_0xef2600.code == 0) {} else {
      console.log("" + _0xef2600);
    }
  }
  async ["appzhuce222"]() {
    let _0xf2f5e3 = await this.task("post", _0x508c5e + "/api/v3/videodown3/index?id=30&ticket=" + this.ticket + "&t=8229015" + this.uuid, this.headers);
    _0xf2f5e3.code == 0 ? console.log(this.num + " 券：" + _0xf2f5e3.result.coin) : console.log("" + _0xf2f5e3.message);
  }
  async ["tixian111"]() {
    let _0x3780cc = await $.task("post", _0x508c5e + "/api/v3/cash/union", this.headers, "pos=1&amount=1&lat=&lng=&root=0&sim=1&debug=0&model=" + this.model + "&power=0&vpn=0");
    _0x3780cc.code == 0 ? console.log(this.num + " 提现:" + _0x3780cc.result.title) : console.log("提现:" + _0x3780cc.message);
  }
  async ["task"](_0xc5e973, _0x54ef09, _0x28a928, _0x5a2959) {
    _0xc5e973 == "delete" ? _0xc5e973 = _0xc5e973.toUpperCase() : _0xc5e973 = _0xc5e973;
    const _0x46a295 = require("request");
    if (_0xc5e973 == "post") {
      delete _0x28a928["Content-Type"];
      delete _0x28a928["content-type"];
      delete _0x28a928["Content-Length"];
      delete _0x28a928["content-length"];
      $.safeGet(_0x5a2959) ? _0x28a928["content-type"] = "application/json;charset=utf-8" : _0x28a928["content-type"] = "application/x-www-form-urlencoded";
      if (_0x5a2959) {
        _0x28a928["content-length"] = $.lengthInUtf8Bytes(_0x5a2959);
      }
    }
    _0xc5e973 == "get" && (delete _0x28a928["Content-Type"], delete _0x28a928["content-length"], delete _0x28a928["content-type"], delete _0x28a928["Content-Length"]);
    _0x28a928.Host = _0x54ef09.replace("//", "/").split("/")[1];
    if (_0x1bf955 == undefined) {
      if (_0xc5e973.indexOf("T") < 0) var _0x5f435d = {
        "url": _0x54ef09,
        "headers": _0x28a928,
        "body": _0x5a2959,
        "timeout": 20000
      };else {
        var _0x5f435d = {
          "url": _0x54ef09,
          "headers": _0x28a928,
          "form": JSON.parse(_0x5a2959),
          "timeout": 20000
        };
      }
    } else {
      if (_0xc5e973.indexOf("T") < 0) {
        var _0x5f435d = {
          "url": _0x54ef09,
          "headers": _0x28a928,
          "body": _0x5a2959,
          "proxy": "http://" + this.dlip,
          "timeout": 20000
        };
      } else {
        var _0x5f435d = {
          "url": _0x54ef09,
          "headers": _0x28a928,
          "form": JSON.parse(_0x5a2959),
          "proxy": "http://" + this.dlip,
          "timeout": 20000
        };
      }
    }
    return new Promise(async _0x647710 => {
      _0x46a295[_0xc5e973.toLowerCase()](_0x5f435d, async (_0x44d2bd, _0x5bab34, _0x29ef6b) => {
        try {
          _0xd4423a == 1 && (console.log("==================请求=================="), console.log(JSON.stringify(_0x5f435d)), console.log("==================返回=================="), console.log(_0x29ef6b));
        } catch (_0x1f276e) {} finally {
          if (!_0x44d2bd) $.safeGet(_0x29ef6b) ? _0x29ef6b = JSON.parse(_0x29ef6b) : _0x29ef6b = _0x29ef6b;else {
            if (_0x1bf955 == undefined) console.log("请检查网络设置"), _0x29ef6b = JSON.parse("{\"code\":\"99\"}");else {
              await this.hqdl();
              _0x29ef6b = await this.task(_0xc5e973, _0x54ef09, _0x28a928, _0x5a2959);
            }
          }
          return _0x647710(_0x29ef6b);
        }
      });
    });
  }
}
$ = _0x2ca047();
!(async () => {
  await _0x4a779e();
  let _0x55f0fa = $.RT(150000, 1900000);
  console.log("随机延迟" + Math.round(_0x55f0fa * 0.001) + "秒");
  await $.wait(_0x55f0fa);
  console.log("[" + NAME + "] " + $.timenow(3) + ":" + $.timenow(4) + ":" + $.timenow(5));
  if (_0x5f2ef6 == ben && ben !== "undefined") {
    console.log("📢 请认真阅读以下声明\n            【免责声明】   \n           📌 脚本文件仅用于测试和学习研究   \n           📌 脚本文件任何人不得用于商业以及非法用途   \n           📌 禁止任何公众号、自媒体进行任何形式的转发   \n           📌 脚本文件请在下载试用后24小时内自行删除   \n           📌 因使用脚本造成软件平台的一切损失皆由使用者承担   \n           📌 脚本文件如有不慎被破解或修改由破解或修改者承担   \n           📌 如不接受此条款请立即删除脚本文件");
    await $.ExamineCookie();
    if ($.cookie_list.length > limit) {
      console.log("已超出最大账号数，请重新设置账号数");
      return;
    }
    if (_0x1bf955 == undefined) {
      console.log("当前使用本地网络运行脚本");
      console.log("\n-------- 用户信息 --------");
      await $.Multithreading("login");
      let _0x1ff425 = $.cookie_list.filter(_0x278a39 => _0x278a39.login == true);
      if (_0x1ff425.length == 0) {
        console.log("Cookie格式错误 或 账号被禁封");
        return;
      } else console.log("\n-------- 任务列表 --------"), await $.Multithreading("user_task_list"), console.log("\n-------- 运行结果 --------");
      for (let _0x5b2640 of $.cookie_list) {
        _0x5b2640.xinxi();
      }
    } else {
      console.log("当前使用代理网络运行脚本");
      await $.Multithreading("hqdl");
      console.log("\n-------- 用户信息 --------");
      await $.Multithreading("login");
      let _0x23686f = $.cookie_list.filter(_0x3eaf4e => _0x3eaf4e.login == true);
      if (_0x23686f.length == 0) {
        console.log("Cookie格式错误 或 账号被禁封");
        return;
      } else console.log("\n-------- 任务列表 --------"), await $.Multithreading("user_task_list"), console.log("\n-------- 运行结果 --------");
      for (let _0x362485 of $.cookie_list) {
        _0x362485.xinxi();
      }
    }
  }
})().catch(_0x30ef80 => {
  console.log(_0x30ef80);
}).finally(() => {});
function _0x2ca047() {
  return new class {
    constructor() {
      this.cookie_list = [];
      this.message = "";
      this.CryptoJS = require("crypto-js");
      this.NodeRSA = require("node-rsa");
      this.request = require("request");
      this.Sha_Rsa = require("jsrsasign");
    }
    async ["Multithreading"](_0x44d943, _0x49b8ff, _0x2a480f) {
      let _0xe6a678 = [];
      !_0x2a480f && (_0x2a480f = 1);
      while (_0x2a480f--) {
        for (let _0x33f674 of $.cookie_list) {
          _0xe6a678.push(_0x33f674[_0x44d943](_0x49b8ff));
        }
      }
      await Promise.allSettled(_0xe6a678);
    }
    ["ExamineCookie"]() {
      let _0x34508e = process.env[VALY] || CK,
        _0x3ffa16 = 0;
      if (_0x34508e) {
        for (let _0x27146a of _0x3ecaed) {
          if (_0x34508e.includes(_0x27146a)) {
            this.splitor = _0x27146a;
            break;
          }
        }
        for (let _0x35e14e of _0x34508e.split(this.splitor).filter(_0x2bc900 => !!_0x2bc900)) {
          $.cookie_list.push(new _0xafa4af(_0x35e14e));
        }
        _0x3ffa16 = $.cookie_list.length;
      } else console.log("\n【" + NAME + "】：未填写变量: " + VALY);
      return console.log("共找到" + _0x3ffa16 + "个账号"), $.cookie_list;
    }
    ["task"](_0x8960ea, _0x51f2e9, _0x1b2080, _0x314811, _0x1b4e9) {
      _0x8960ea == "delete" ? _0x8960ea = _0x8960ea.toUpperCase() : _0x8960ea = _0x8960ea;
      if (_0x8960ea == "post") {
        delete _0x1b2080["content-type"];
        delete _0x1b2080["Content-type"];
        delete _0x1b2080["content-Type"];
        $.safeGet(_0x314811) ? _0x1b2080["Content-Type"] = "application/json;charset=UTF-8" : _0x1b2080["Content-Type"] = "application/x-www-form-urlencoded";
        _0x314811 && (_0x1b2080["Content-Length"] = $.lengthInUtf8Bytes(_0x314811));
      }
      return _0x8960ea == "get" && (delete _0x1b2080["content-type"], delete _0x1b2080["Content-type"], delete _0x1b2080["content-Type"], delete _0x1b2080["Content-Length"]), _0x1b2080.Host = _0x51f2e9.replace("//", "/").split("/")[1], new Promise(async _0x55418b => {
        if (_0x8960ea.indexOf("T") < 0) {
          var _0x55172e = {
            "url": _0x51f2e9,
            "headers": _0x1b2080,
            "body": _0x314811,
            "proxy": "http://" + _0x1b4e9
          };
        } else {
          var _0x55172e = {
            "url": _0x51f2e9,
            "headers": _0x1b2080,
            "form": JSON.parse(_0x314811),
            "proxy": "http://" + _0x1b4e9
          };
        }
        !_0x1b4e9 && delete _0x55172e.proxy;
        this.request[_0x8960ea.toLowerCase()](_0x55172e, (_0x5819bd, _0x5b6e3c, _0x443a5a) => {
          try {
            _0x443a5a && _0xd4423a == 1 && (console.log("================ 请求 ================"), console.log(_0x55172e), console.log("================ 返回 ================"), $.safeGet(_0x443a5a) ? console.log(JSON.parse(_0x443a5a)) : console.log(_0x443a5a));
          } catch (_0x4e8faf) {
            console.log(_0x4e8faf, _0x51f2e9 + "\n" + _0x1b2080);
          } finally {
            let _0x4e1206 = "";
            if (!_0x5819bd) {
              if ($.safeGet(_0x443a5a)) {
                _0x4e1206 = JSON.parse(_0x443a5a);
              } else {
                if (_0x443a5a.indexOf("/") != -1 && _0x443a5a.indexOf("+") != -1) {
                  _0x4e1206 = $.decrypts(_0x443a5a);
                } else _0x4e1206 = _0x443a5a;
              }
            } else _0x4e1206 = _0x51f2e9 + "   API请求失败，请检查网络重试\n" + _0x5819bd;
            return _0x55418b(_0x4e1206);
          }
        });
      });
    }
    ["task2"](_0x4eb515, _0x4a801c, _0x479912, _0x2145ed, _0x2e5039) {
      _0x4eb515 == "delete" ? _0x4eb515 = _0x4eb515.toUpperCase() : _0x4eb515 = _0x4eb515;
      if (_0x4eb515 == "post") {
        delete _0x479912["content-type"];
        delete _0x479912["Content-type"];
        delete _0x479912["content-Type"];
        if ($.safeGet(_0x2145ed)) {
          _0x479912["Content-Type"] = "application/json;charset=UTF-8";
        } else {
          _0x479912["Content-Type"] = "application/x-www-form-urlencoded";
        }
        _0x2145ed && (_0x479912["Content-Length"] = $.lengthInUtf8Bytes(_0x2145ed));
      }
      _0x4eb515 == "get" && (delete _0x479912["content-type"], delete _0x479912["Content-type"], delete _0x479912["content-Type"], delete _0x479912["Content-Length"]);
      _0x479912.Host = _0x4a801c.replace("//", "/").split("/")[1];
      if (_0x4eb515.indexOf("T") < 0) var _0x2ae2ef = {
        "url": _0x4a801c,
        "headers": _0x479912,
        "body": _0x2145ed
      };else var _0x2ae2ef = {
        "url": _0x4a801c,
        "headers": _0x479912,
        "form": JSON.parse(_0x2145ed)
      };
      return new Promise(async _0x4bf3ca => {
        this.request[_0x4eb515.toLowerCase()](_0x2ae2ef, (_0x427936, _0x75ff10, _0x3f8c69) => {
          try {
            if (_0x3f8c69) {
              _0xd4423a == 1 && (console.log("================ 请求 ================"), console.log(_0x2ae2ef), console.log("================ 返回 ================"), $.safeGet(_0x3f8c69) ? console.log(JSON.parse(_0x3f8c69)) : console.log(_0x3f8c69));
            }
          } catch (_0x41a2b8) {
            console.log(_0x41a2b8, _0x4a801c + "\n" + _0x479912);
          } finally {
            let _0x5dfc4d = "";
            if (!_0x427936) {
              if ($.safeGet(_0x3f8c69)) _0x5dfc4d = _0x3f8c69;else _0x3f8c69.indexOf("/") != -1 && _0x3f8c69.indexOf("+") != -1 ? _0x5dfc4d = $.decrypts(_0x3f8c69) : _0x5dfc4d = _0x3f8c69;
            } else _0x5dfc4d = _0x4a801c + "   API请求失败，请检查网络重试\n" + _0x427936;
            return _0x4bf3ca(_0x5dfc4d);
          }
        });
      });
    }
    ["lengthInUtf8Bytes"](_0x31e128) {
      let _0x375ba1 = encodeURIComponent(_0x31e128).match(/%[89ABab]/g);
      return _0x31e128.length + (_0x375ba1 ? _0x375ba1.length : 0);
    }
    ["randomArr"](_0xd62000) {
      return _0xd62000[parseInt(Math.random() * _0xd62000.length, 10)];
    }
    ["wait"](_0x131749) {
      return new Promise(_0x341409 => setTimeout(_0x341409, _0x131749));
    }
    ["time"](_0x5c5b7d) {
      if (_0x5c5b7d == 10) {
        return Math.round(+new Date() / 1000);
      } else return +new Date();
    }
    ["timenow"](_0x592b5e) {
      let _0x3a098c = new Date();
      if (_0x592b5e == undefined) {
        let _0x43b20f = new Date(),
          _0x1fb311 = _0x43b20f.getFullYear() + "-",
          _0x143a91 = (_0x43b20f.getMonth() + 1 < 10 ? "0" + (_0x43b20f.getMonth() + 1) : _0x43b20f.getMonth() + 1) + "-",
          _0x5e1a7c = _0x43b20f.getDate() + " ",
          _0x4c0b40 = _0x43b20f.getHours() + ":",
          _0x4b444f = _0x43b20f.getMinutes() + ":",
          _0x3da140 = _0x43b20f.getSeconds() + 1 < 10 ? "0" + _0x43b20f.getSeconds() : _0x43b20f.getSeconds();
        return _0x1fb311 + _0x143a91 + _0x5e1a7c + _0x4c0b40 + _0x4b444f + _0x3da140;
      } else {
        if (_0x592b5e == 0) return _0x3a098c.getFullYear();else {
          if (_0x592b5e == 1) {
            return _0x3a098c.getMonth() + 1 < 10 ? "0" + (_0x3a098c.getMonth() + 1) : _0x3a098c.getMonth() + 1;
          } else {
            if (_0x592b5e == 2) {
              return _0x3a098c.getDate();
            } else {
              if (_0x592b5e == 3) return _0x3a098c.getHours();else {
                if (_0x592b5e == 4) return _0x3a098c.getMinutes();else {
                  if (_0x592b5e == 5) return _0x3a098c.getSeconds() + 1 < 10 ? "0" + _0x3a098c.getSeconds() : _0x3a098c.getSeconds();
                }
              }
            }
          }
        }
      }
    }
    ["safeGet"](_0x244a07) {
      try {
        if (typeof JSON.parse(_0x244a07) == "object") return true;
      } catch (_0x3ad4ab) {
        return false;
      }
    }
    ["SJS"](_0x50ed44, _0x4ccd7f) {
      if (_0x4ccd7f == 0) {
        let _0x5efb38 = "QWERTYUIOPASDFGHJKLZXCVBNM01234567890123456789",
          _0x3afd6d = _0x5efb38.length,
          _0x50143c = "";
        for (let _0x1bbae7 = 0; _0x1bbae7 < _0x50ed44; _0x1bbae7++) {
          _0x50143c += _0x5efb38.charAt(Math.floor(Math.random() * _0x3afd6d));
        }
        return _0x50143c;
      } else {
        if (_0x4ccd7f == 1) {
          let _0x384bba = "qwertyuiopasdfghjklzxcvbnm0123456789",
            _0x19165d = _0x384bba.length,
            _0x385402 = "";
          for (let _0x3f206e = 0; _0x3f206e < _0x50ed44; _0x3f206e++) {
            _0x385402 += _0x384bba.charAt(Math.floor(Math.random() * _0x19165d));
          }
          return _0x385402;
        } else {
          let _0x4cea48 = "0123456789",
            _0x5c3b0b = _0x4cea48.length,
            _0x233720 = "";
          for (let _0xdebfee = 0; _0xdebfee < _0x50ed44; _0xdebfee++) {
            _0x233720 += _0x4cea48.charAt(Math.floor(Math.random() * _0x5c3b0b));
          }
          return _0x233720;
        }
      }
    }
    ["udid"](_0x3f45c3) {
      function _0x1afc30() {
        return ((1 + Math.random()) * 65536 | 0).toString(16).substring(1);
      }
      let _0x555021 = _0x1afc30() + _0x1afc30() + "-" + _0x1afc30() + "-" + _0x1afc30() + "-" + _0x1afc30() + "-" + _0x1afc30() + _0x1afc30() + _0x1afc30();
      if (_0x3f45c3 == 0) return _0x555021.toUpperCase();else {
        return _0x555021.toLowerCase();
      }
    }
    ["encodeUnicode"](_0x3dde59) {
      var _0xafe826 = [];
      for (var _0x273ff0 = 0; _0x273ff0 < _0x3dde59.length; _0x273ff0++) {
        _0xafe826[_0x273ff0] = ("00" + _0x3dde59.charCodeAt(_0x273ff0).toString(16)).slice(-4);
      }
      return "\\u" + _0xafe826.join("\\u");
    }
    ["decodeUnicode"](_0x533b98) {
      return _0x533b98 = _0x533b98.replace(/\\u/g, "%u"), unescape(unescape(_0x533b98));
    }
    ["RT"](_0x3d725c, _0x231ff6) {
      return Math.round(Math.random() * (_0x231ff6 - _0x3d725c) + _0x3d725c);
    }
    ["arrNull"](_0x3c142f) {
      var _0x241e3b = _0x3c142f.filter(_0x3537ca => {
        return _0x3537ca && _0x3537ca.trim();
      });
      return _0x241e3b;
    }
    ["nowtime"]() {
      return new Date(new Date().getTime() + new Date().getTimezoneOffset() * 60 * 1000 + 8 * 60 * 60 * 1000);
    }
    ["timecs"]() {
      let _0x52ca1d = $.nowtime();
      return JSON.stringify(_0x52ca1d).indexOf(" ") >= 0 && (_0x52ca1d = _0x52ca1d.replace(" ", "T")), new Date(_0x52ca1d).getTime() - 8 * 60 * 60 * 1000;
    }
    ["rtjson"](_0x334b75, _0x3dab16, _0x45549d, _0x3aa756) {
      return _0x3aa756 == 0 ? JSON.stringify(_0x334b75.split(_0x3dab16).reduce((_0x5073e5, _0x4d4a78) => {
        let _0x212315 = _0x4d4a78.split(_0x45549d);
        return _0x5073e5[_0x212315[0].trim()] = _0x212315[1].trim(), _0x5073e5;
      }, {})) : _0x334b75.split(_0x3dab16).reduce((_0x1c2fce, _0x36f2f6) => {
        let _0x25fa06 = _0x36f2f6.split(_0x45549d);
        return _0x1c2fce[_0x25fa06[0].trim()] = _0x25fa06[1].trim(), _0x1c2fce;
      }, {});
    }
    ["MD5Encrypt"](_0x5c3e89, _0x1706de) {
      if (_0x5c3e89 == 0) return this.CryptoJS.MD5(_0x1706de).toString().toLowerCase();else {
        if (_0x5c3e89 == 1) {
          return this.CryptoJS.MD5(_0x1706de).toString().toUpperCase();
        } else {
          if (_0x5c3e89 == 2) return this.CryptoJS.MD5(_0x1706de).toString().substring(8, 24).toLowerCase();else {
            if (_0x5c3e89 == 3) {
              return this.CryptoJS.MD5(_0x1706de).toString().substring(8, 24).toUpperCase();
            }
          }
        }
      }
    }
    ["SHA_Encrypt"](_0x18203b, _0x3f8094, _0x25946a) {
      return _0x18203b == 0 ? this.CryptoJS[_0x3f8094](_0x25946a).toString(this.CryptoJS.enc.Base64) : this.CryptoJS[_0x3f8094](_0x25946a).toString();
    }
    ["HmacSHA_Encrypt"](_0x213abd, _0x25bb74, _0x4225f8, _0x2476ae) {
      if (_0x213abd == 0) {
        return this.CryptoJS[_0x25bb74](_0x4225f8, _0x2476ae).toString(this.CryptoJS.enc.Base64);
      } else return this.CryptoJS[_0x25bb74](_0x4225f8, _0x2476ae).toString();
    }
    ["Base64"](_0x520c13, _0x4d26ec) {
      return _0x520c13 == 0 ? this.CryptoJS.enc.Base64.stringify(this.CryptoJS.enc.Utf8.parse(_0x4d26ec)) : this.CryptoJS.enc.Utf8.stringify(this.CryptoJS.enc.Base64.parse(_0x4d26ec));
    }
    ["DecryptCrypto"](_0x2c171e, _0x283d0f, _0x9edd3, _0x22a57f, _0x4752c0, _0x2d4d59, _0x43180d) {
      if (_0x2c171e == 0) {
        const _0x43e857 = this.CryptoJS[_0x283d0f].encrypt(this.CryptoJS.enc.Utf8.parse(_0x4752c0), this.CryptoJS.enc.Utf8.parse(_0x2d4d59), {
          "iv": this.CryptoJS.enc.Utf8.parse(_0x43180d),
          "mode": this.CryptoJS.mode[_0x9edd3],
          "padding": this.CryptoJS.pad[_0x22a57f]
        });
        return _0x43e857.toString();
      } else {
        const _0x2c5b68 = this.CryptoJS[_0x283d0f].decrypt(_0x4752c0, this.CryptoJS.enc.Utf8.parse(_0x2d4d59), {
          "iv": this.CryptoJS.enc.Utf8.parse(_0x43180d),
          "mode": this.CryptoJS.mode[_0x9edd3],
          "padding": this.CryptoJS.pad[_0x22a57f]
        });
        return _0x2c5b68.toString(this.CryptoJS.enc.Utf8);
      }
    }
    ["RSA"](_0x4ccd6c, _0x502cf4) {
      const _0x50619 = require("node-rsa");
      let _0x2e5da6 = new _0x50619("-----BEGIN PUBLIC KEY-----\n" + _0x502cf4 + "\n-----END PUBLIC KEY-----");
      return _0x2e5da6.setOptions({
        "encryptionScheme": "pkcs1"
      }), _0x2e5da6.encrypt(_0x4ccd6c, "base64", "utf8");
    }
    ["SHA_RSA"](_0x17b8b9, _0x10a1c7) {
      let _0x358027 = this.Sha_Rsa.KEYUTIL.getKey("-----BEGIN PRIVATE KEY-----\n" + $.getNewline(_0x10a1c7, 76) + "\n-----END PRIVATE KEY-----"),
        _0x332c57 = new this.Sha_Rsa.KJUR.crypto.Signature({
          "alg": "SHA256withRSA"
        });
      _0x332c57.init(_0x358027);
      _0x332c57.updateString(_0x17b8b9);
      let _0x1f31da = _0x332c57.sign(),
        _0x5c4303 = this.Sha_Rsa.hextob64u(_0x1f31da);
      return _0x5c4303;
    }
  }();
}
async function _0x1d8bcf(_0x153c53, _0x466bd4) {
  const _0x382356 = require("node-rsa");
  let _0x5d1a89 = new _0x382356("-----BEGIN PUBLIC KEY-----\n" + _0x466bd4 + "\n-----END PUBLIC KEY-----");
  return _0x5d1a89.setOptions({
    "encryptionScheme": "pkcs1"
  }), _0x5d1a89.encrypt(_0x153c53, "base64", "utf8");
}
async function _0x4a779e() {
  this.url = $.Base64(1, "aHR0cDovL2ouamc4Ni5jbjo1MTAw");
  let _0x2525c4 = {
      "User-Agent": "Dalvik/2.1.0 (Linux; U; Android 13; M2012K11AC Build/TKQ1.220829.002)"
    },
    _0x37dd99 = await $.task("get", this.url + "/banben/api.php?name=" + VALY, _0x2525c4);
  _0x37dd99.code == 200 ? (limit = _0x37dd99.hao, ben = _0x37dd99.ben, Notice = _0x37dd99.Notice) : (VALY = "888", ben = 888, Notice = 0);
  if (_0x5f2ef6 !== ben && ben !== "undefined") {
    console.log("脚本版本：" + _0x5f2ef6 + "   最新版本：" + ben);
    console.log("开始更新脚本");
    const _0x5b03b2 = require("http"),
      _0xabf4cb = require("fs"),
      _0x5699c9 = require("path"),
      {
        exec: _0x2192e0
      } = require("child_process"),
      _0x55d467 = this.url + "/banben/" + VALY + ".js",
      _0x3d8c2a = _0x5699c9.basename(__filename),
      _0xdfb772 = _0x5b03b2.get(_0x55d467, _0x2a6f83 => {
        const _0x210fd7 = _0xabf4cb.createWriteStream(_0x3d8c2a);
        _0x2a6f83.pipe(_0x210fd7);
        _0x210fd7.on("finish", () => {
          _0x210fd7.close(() => {
            console.log("文件已保存为：", _0x3d8c2a);
            _0x2192e0("node " + _0x3d8c2a, (_0x3cd48b, _0x34a1b9, _0x407bc7) => {
              if (_0x3cd48b) {
                console.error("执行脚本时发生错误： " + _0x3cd48b);
                return;
              }
              console.log("开始运行新脚本\n" + _0x34a1b9);
            });
          });
        });
      });
    _0xdfb772.on("error", _0x553023 => {
      console.error("下载过程中发生错误：", _0x553023.message);
      process.exit();
    });
  }
  const _0x39715c = require("os"),
    _0x396d2e = _0x39715c.networkInterfaces();
  for (let _0x1d8ef3 in _0x396d2e) {
    const _0x2a728f = _0x396d2e[_0x1d8ef3];
    for (let _0x1ecc85 of _0x2a728f) {
      if (!_0x1ecc85.internal && _0x1ecc85.mac !== "00:00:00:00:00:00") {
        this.macccc = _0x1ecc85.mac;
      }
    }
  }
  let _0x3f9efb = await $.task("get", "https://api.ipify.org", _0x2525c4),
    _0x4aff3c = _0x3f9efb,
    _0x28cb91 = process.env[VALY] || CK,
    _0x4ff0e8 = _0x28cb91.split("\n");
  const _0x1a18f9 = _0x4ff0e8.length;
  let _0x59f29d = await $.task("get", this.url + "/api.php?api=notice&app=10000", _0x2525c4);
  _0x59f29d.msg.app_gg !== undefined && console.log(_0x59f29d.msg.app_gg);
  await $.wait(100);
  if (_0x1a18f9 > Notice) {}
}