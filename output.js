//Sat Jan 04 2025 12:48:56 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
NAME = "河马剧场";
VALY = ["hmjc"];
CK = "";
let appToken = process.env.weixinToken,
  dldz = process.env.xqkdddl,
  host = "https://freevideo.zqqds.cn";
const Vacation = "1.0.2",
  CryptoJS = require("crypto-js"),
  envSplitor = ["\n", "@"],
  LOGS = 0;
usid = 0;
class Bar {
  constructor(_0x2c5c86) {
    this.num = _0x2c5c86.split("#")[0];
    this.datas = _0x2c5c86.split("#")[1];
    this.headers = {
      "User-Agent": "okhttp/4.10.0",
      "datas": this.datas
    };
  }
  async ["hqdl"]() {
    let _0x5961bf = await $.task("get", dldz, {
      "User-Agent": "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Mobile Safari/537.36"
    });
    this.dlip = _0x5961bf.split("\n")[0];
    console.log("账号" + this.num + "：代理IP：" + this.dlip);
  }
  async ["user_task_list"]() {
    await $.wait($.RT(1000, 3000));
    await this.renwu();
    await $.wait($.RT(1000, 3000));
  }
  async ["login"]() {
    let _0xdd04bd = await this.task("post", host + "/free-video-portal/portal/1301", this.headers, "c1aeb0b06a84c255afe63d4db0797686");
    if (_0xdd04bd.code == 0) {
      this.login = true;
      let _0x3fd3b3 = JSON.parse(DecryptCrypto("1", "AES", "CBC", "PKCS5Padding", _0xdd04bd.data, "dzkjgfyxgshylgzm", "apiupdownedcrypt"));
      console.log(this.num + "  金币：" + _0x3fd3b3.golds + " 余额：" + _0x3fd3b3.cashBalance);
      let _0x2fe963 = _0x3fd3b3.taskSetList[0].taskList,
        _0x54d5a0 = _0x2fe963.find(_0x50d7bd => _0x50d7bd.taskTitle === "签到");
      if (_0x54d5a0) {
        if (_0x54d5a0.taskStatus !== 3) {
          let _0x2e4b17 = _0x54d5a0.taskAction,
            _0x8ca701 = _0x54d5a0.taskId;
          await this.qiandao(_0x8ca701, _0x2e4b17);
        }
      }
      let _0x54b064 = _0x2fe963.find(_0x5eb099 => _0x5eb099.taskTitle === "看剧领金币");
      if (_0x54b064) {
        if (_0x54b064.taskStatus !== 3) {
          await this.yuedu();
          let _0x450c71 = 5;
          while (_0x450c71 <= 350) {
            let _0x113ff7 = _0x54b064.taskId;
            await $.wait($.RT(5000, 7000));
            await this.shizhang(_0x450c71, _0x113ff7);
            _0x450c71 += 5;
          }
        }
      }
      let _0x3680f9 = _0x2fe963.find(_0xb74032 => _0xb74032.taskTitle === "看下方剧10分钟领金币");
      if (_0x3680f9) {
        if (_0x3680f9.taskStatus !== 3) {
          let _0x1debd5 = _0x3680f9.taskId,
            _0x5ec83d = "看下方剧10分钟领金币",
            _0xbbec2d = _0x3680f9.videoInfos[0].bookId,
            _0x4af441 = _0x3680f9.taskId;
          await this.kanjifan(_0xbbec2d, _0x1debd5);
          await this.kanju(_0x4af441, _0x5ec83d);
        }
      }
    } else {
      this.login = false;
      let _0x21626b = _0xdd04bd.msg;
      console.log("" + _0x21626b);
      appToken !== undefined && (await this.wxpusher(_0x21626b));
    }
  }
  async ["yuedu"]() {
    let _0x4e3fb5 = DecryptCrypto("0", "AES", "CBC", "PKCS5Padding", "{\"pageFlag\": \"\"}", "dzkjgfyxgshylgzm", "apiupdownedcrypt"),
      _0x1486f8 = base64ToHex(_0x4e3fb5),
      _0x48fe8a = await this.task("post", host + "/free-video-portal/portal/1110", this.headers, _0x1486f8),
      _0x1367f8 = JSON.parse(DecryptCrypto("1", "AES", "CBC", "PKCS5Padding", _0x48fe8a.data, "dzkjgfyxgshylgzm", "apiupdownedcrypt"));
    if (_0x48fe8a.code == 0) {
      this.bookId = _0x1367f8.content[0].bookId;
      this.chapterId = _0x1367f8.content[0].chapterId;
    } else {
      let _0x14a115 = _0x48fe8a.message;
      console.log("1" + _0x14a115);
    }
  }
  async ["wxpusher"](_0x1e6e24) {
    let _0x2d1f3f = {
        "X-Requested-With": "com.tencent.mm",
        "User-Agent": "Dalvik/2.1.0 (Linux; U; Android 13; M2012K11AC Build/TKQ1.220829.002)"
      },
      _0x26267e = await this.task("get", "https://wxpusher.zjiecode.com/api/send/message/?appToken=" + appToken.split("#")[0] + "&content=" + encodeURI("" + NAME + _0x1e6e24) + "&uid=" + appToken.split("#")[1], _0x2d1f3f);
    _0x26267e.code == 1000 ? console.log("微信通知" + _0x26267e.msg) : console.log("微信通知失败");
  }
  async ["qiandao"](_0x3377d4, _0x1d32cf) {
    let _0x2e521c = "签到",
      _0xbc43f9 = DecryptCrypto("0", "AES", "CBC", "PKCS5Padding", "{\"action\":" + _0x1d32cf + ",\"taskId\":" + _0x3377d4 + "}", "dzkjgfyxgshylgzm", "apiupdownedcrypt"),
      _0x24dd7d = base64ToHex(_0xbc43f9),
      _0x42be01 = await this.task("post", host + "/free-video-portal/portal/1302", this.headers, _0x24dd7d),
      _0x4e9bee = JSON.parse(DecryptCrypto("1", "AES", "CBC", "PKCS5Padding", _0x42be01.data, "dzkjgfyxgshylgzm", "apiupdownedcrypt"));
    if (_0x42be01.code == 0) console.log(this.num + "  " + _0x2e521c + " ：" + _0x4e9bee.msg), await $.wait($.RT(5000, 8000)), await this.kanshipin();else {
      let _0x256b89 = _0x42be01.message;
      console.log("1" + _0x256b89);
    }
  }
  async ["kanshipin"]() {
    let _0x404adc = "签到后看视频",
      _0x2d856e = DecryptCrypto("0", "AES", "CBC", "PKCS5Padding", "{\"taskId\":102,\"awardVideoToken\":null,\"buttonClickTime\":" + $.time(13) + "}", "dzkjgfyxgshylgzm", "apiupdownedcrypt"),
      _0x219017 = base64ToHex(_0x2d856e),
      _0x5c819e = await this.task("post", host + "/free-video-portal/portal/1303", this.headers, _0x219017),
      _0x4cdb57 = JSON.parse(DecryptCrypto("1", "AES", "CBC", "PKCS5Padding", _0x5c819e.data, "dzkjgfyxgshylgzm", "apiupdownedcrypt"));
    if (_0x5c819e.code == 0) {
      console.log(this.num + "  " + _0x404adc + " ：" + _0x4cdb57.message);
    } else {
      let _0x34919c = _0x5c819e.message;
      console.log("2:" + _0x34919c);
    }
  }
  async ["kanjifan"](_0x1326e6, _0xdd212f) {
    let _0x4b71c3 = "看下方剧10分钟领金币",
      _0x3d541b = DecryptCrypto("0", "AES", "CBC", "PKCS5Padding", "{\"bookId\": \"" + _0x1326e6 + "\"}", "dzkjgfyxgshylgzm", "apiupdownedcrypt"),
      _0x5af2be = base64ToHex(_0x3d541b),
      _0x385987 = await this.task("post", host + "/free-video-portal/portal/1131", this.headers, _0x5af2be),
      _0x380af5 = JSON.parse(DecryptCrypto("1", "AES", "CBC", "PKCS5Padding", _0x385987.data, "dzkjgfyxgshylgzm", "apiupdownedcrypt"));
    if (_0x385987.code == 0) {
      console.log(this.num + "  " + _0x4b71c3);
      let _0x56a2d4 = 5;
      while (_0x56a2d4 <= 120) {
        this.bookId = _0x380af5.videoInfo.bookId;
        this.chapterId = _0x380af5.videoInfo.chapterId;
        await $.wait($.RT(5000, 7000));
        await this.shizhang(_0x56a2d4, _0xdd212f);
        _0x56a2d4 += 5;
      }
    } else {
      let _0x5627af = _0x385987.message;
      console.log("2:" + _0x5627af);
    }
  }
  async ["renwu"]() {
    let _0x228622 = "用户信息",
      _0x51f394 = await this.task("post", host + "/free-video-portal/portal/1301", this.headers, "c1aeb0b06a84c255afe63d4db0797686");
    if (_0x51f394.code == 0) {
      let _0x16f1f0 = JSON.parse(DecryptCrypto("1", "AES", "CBC", "PKCS5Padding", _0x51f394.data, "dzkjgfyxgshylgzm", "apiupdownedcrypt")),
        _0x147220 = _0x16f1f0.taskSetList[0].taskList,
        _0x336177 = _0x147220.find(_0x2b048d => _0x2b048d.taskTitle === "定时宝箱任务");
      _0x336177 && (await this.baoxiang(_0x336177.taskId));
      let _0x3eef0b = _0x147220.find(_0x3b457e => _0x3b457e.taskTitle === "看小视频领金币");
      if (_0x3eef0b) {
        if (_0x3eef0b.proNum !== 5) {
          let _0x27f75f = "看小视频领金币",
            _0x2ccfac = _0x3eef0b.taskId;
          await this.kanxiao(_0x2ccfac, _0x27f75f);
        }
      }
      let _0x1b3001 = _0x147220.find(_0x464780 => _0x464780.taskTitle === "看剧领金币");
      if (_0x1b3001) {
        if (_0x1b3001.taskStatus !== 3) {
          for (let _0x45f8b4 = 0; _0x45f8b4 <= 7; _0x45f8b4++) {
            let _0xfcc850 = "看剧领金币",
              _0x232c97 = _0x1b3001.taskId;
            await this.kanju(_0x232c97, _0xfcc850);
          }
        }
      }
    } else {
      this.login = false;
      let _0xf6c5a = _0x51f394;
      console.log(_0x228622 + ":" + _0xf6c5a);
      await this.wxpusher(_0xf6c5a);
    }
  }
  async ["shizhang"](_0x4994af, _0x331fc8) {
    let _0x156a58 = "时长",
      _0x5275e3 = DecryptCrypto("0", "AES", "CBC", "PKCS5Padding", "{\"action\":36,\"taskId\":" + _0x331fc8 + ",\"readDuration\":" + _0x4994af + ",\"bookId\":\"" + this.bookId + "\",\"chapterId\":\"" + this.chapterId + "\",\"scene\":2}", "dzkjgfyxgshylgzm", "apiupdownedcrypt"),
      _0xc747c0 = base64ToHex(_0x5275e3),
      _0x1eb3a4 = await this.task("post", host + "/free-video-portal/portal/1302", this.headers, _0xc747c0),
      _0x16e8e2 = JSON.parse(DecryptCrypto("1", "AES", "CBC", "PKCS5Padding", _0x1eb3a4.data, "dzkjgfyxgshylgzm", "apiupdownedcrypt"));
    if (_0x1eb3a4.code == 0) console.log(this.num + "  " + _0x156a58 + " ：" + _0x16e8e2.totalReadDuration);else {
      let _0x1c06a9 = _0x16e8e2.message;
      console.log(_0x156a58 + ":" + _0x1c06a9);
    }
  }
  async ["baoxiang"](_0x3606f1) {
    let _0x3d9b1c = "宝箱",
      _0x466edb = DecryptCrypto("0", "AES", "CBC", "PKCS5Padding", "{\"taskId\":" + _0x3606f1 + ",\"buttonClickTime\":" + $.time(13) + ",\"signDay\":null}", "dzkjgfyxgshylgzm", "apiupdownedcrypt"),
      _0x32a475 = base64ToHex(_0x466edb),
      _0x163ba7 = await this.task("post", host + "/free-video-portal/portal/1303", this.headers, _0x32a475),
      _0x5727d1 = JSON.parse(DecryptCrypto("1", "AES", "CBC", "PKCS5Padding", _0x163ba7.data, "dzkjgfyxgshylgzm", "apiupdownedcrypt"));
    if (_0x163ba7.code == 0) {
      console.log(this.num + "  " + _0x3d9b1c + " ：" + _0x5727d1.message);
      let _0x1441a8 = _0x5727d1.afterAwardVideoTaskVo.taskId,
        _0x309e59 = _0x5727d1.awardVideoToken;
      await this.jikanshipin(_0x1441a8, _0x309e59);
    } else {
      let _0x53aeed = _0x5727d1.message;
      console.log(_0x3d9b1c + ":" + _0x53aeed);
    }
  }
  async ["kanju"](_0x34fe12, _0x10493f) {
    let _0x3bfe2f = DecryptCrypto("0", "AES", "CBC", "PKCS5Padding", "{\"taskId\":" + _0x34fe12 + ",\"buttonClickTime\":" + $.time(13) + ",\"signDay\":null}", "dzkjgfyxgshylgzm", "apiupdownedcrypt"),
      _0x4b1898 = base64ToHex(_0x3bfe2f),
      _0x43d0fd = await this.task("post", host + "/free-video-portal/portal/1303", this.headers, _0x4b1898),
      _0x5ef94c = JSON.parse(DecryptCrypto("1", "AES", "CBC", "PKCS5Padding", _0x43d0fd.data, "dzkjgfyxgshylgzm", "apiupdownedcrypt"));
    if (_0x43d0fd.code == 0) {
      console.log(this.num + "  " + _0x10493f + " ：" + _0x5ef94c.message);
      await $.wait($.RT(5000, 8000));
      let _0x3bbe4e = _0x5ef94c.afterAwardVideoTaskVo.taskId,
        _0x1dc86b = _0x5ef94c.awardVideoToken;
      await this.jikanshipin(_0x3bbe4e, _0x1dc86b);
    } else {
      let _0x3095be = _0x5ef94c.message;
      console.log(_0x10493f + ":" + _0x3095be);
    }
  }
  async ["kanxiao"](_0x45e747, _0x1139c3) {
    let _0x27aeef = DecryptCrypto("0", "AES", "CBC", "PKCS5Padding", "{\"taskId\":" + _0x45e747 + ",\"buttonClickTime\":" + $.time(13) + ",\"signDay\":null}", "dzkjgfyxgshylgzm", "apiupdownedcrypt"),
      _0x28e7e4 = base64ToHex(_0x27aeef),
      _0x5a61b8 = await this.task("post", host + "/free-video-portal/portal/1303", this.headers, _0x28e7e4),
      _0x15a1f0 = JSON.parse(DecryptCrypto("1", "AES", "CBC", "PKCS5Padding", _0x5a61b8.data, "dzkjgfyxgshylgzm", "apiupdownedcrypt"));
    if (_0x5a61b8.code == 0) console.log(this.num + "  " + _0x1139c3 + " ：" + _0x15a1f0.message);else {
      let _0x808c24 = _0x15a1f0.message;
      console.log(_0x1139c3 + ":" + _0x808c24);
    }
  }
  async ["jikanshipin"](_0x589f3c, _0x4cd713) {
    let _0x56bc7e = "看小视频再领",
      _0x333838 = DecryptCrypto("0", "AES", "CBC", "PKCS5Padding", "{\"taskId\":" + _0x589f3c + ",\"awardVideoToken\":\"" + _0x4cd713 + "\",\"buttonClickTime\":" + $.time(13) + "}", "dzkjgfyxgshylgzm", "apiupdownedcrypt"),
      _0x2869f6 = base64ToHex(_0x333838),
      _0x333820 = await this.task("post", host + "/free-video-portal/portal/1303", this.headers, _0x2869f6),
      _0x108a0a = JSON.parse(DecryptCrypto("1", "AES", "CBC", "PKCS5Padding", _0x333820.data, "dzkjgfyxgshylgzm", "apiupdownedcrypt"));
    if (_0x333820.code == 0) console.log(this.num + "  " + _0x56bc7e + " ：" + _0x108a0a.message);else {
      let _0x19d99b = _0x333820.message;
      console.log(_0x56bc7e + ":" + _0x19d99b);
    }
  }
  async ["zichanc"]() {
    let _0x3f99f2 = "资产中心",
      _0x3df43c = DecryptCrypto("0", "AES", "CBC", "PKCS5Padding", "{}", "dzkjgfyxgshylgzm", "apiupdownedcrypt"),
      _0x17c996 = base64ToHex(_0x3df43c),
      _0xdbb269 = await this.task("post", host + "/free-video-portal/portal/1854", this.headers, _0x17c996),
      _0x3800a7 = JSON.parse(DecryptCrypto("1", "AES", "CBC", "PKCS5Padding", _0xdbb269.data, "dzkjgfyxgshylgzm", "apiupdownedcrypt"));
    if (_0xdbb269.code == 0) {
      let _0x23dce4 = _0x3800a7.cashOutAmountList[0].cashoutAmount;
      if (_0x3800a7.canCashOut !== 0 && _0x3800a7.cashBalance >= _0x23dce4) {
        let _0x37b71e = _0x3800a7.cashOutAmountList[0].id,
          _0x58536d = _0x3800a7.cashOutAmountList[0].dataHashVal;
        await this.tixian(_0x37b71e, _0x58536d, _0x23dce4);
      }
    } else {
      let _0x358648 = _0xdbb269.message;
      console.log(_0x3f99f2 + ":" + _0x358648);
    }
  }
  async ["tixian"](_0x5288d2, _0x38e48d, _0x197dbd) {
    let _0x3eee56 = "提现",
      _0x2cbde6 = DecryptCrypto("0", "AES", "CBC", "PKCS5Padding", "{ \"amountId\": " + _0x5288d2 + ",\"dataHashVal\": " + _0x38e48d + ",\"type\": \"cash\"}", "dzkjgfyxgshylgzm", "apiupdownedcrypt"),
      _0x52aeba = base64ToHex(_0x2cbde6),
      _0xaccb91 = await this.task("post", host + "/free-video-portal/portal/1856", this.headers, _0x52aeba);
    if (_0xaccb91.code == 0) console.log(this.num + "  " + _0x3eee56 + "成功 ：" + _0x197dbd + "块");else {
      let _0x1b267b = _0xaccb91.message;
      console.log(_0x3eee56 + ":" + _0x1b267b);
    }
  }
  async ["xinxi"]() {
    let _0x4759fa = await this.task("post", host + "/free-video-portal/portal/1301", this.headers, "c1aeb0b06a84c255afe63d4db0797686");
    if (_0x4759fa.code == 0) {
      let _0xb57662 = JSON.parse(DecryptCrypto("1", "AES", "CBC", "PKCS5Padding", _0x4759fa.data, "dzkjgfyxgshylgzm", "apiupdownedcrypt"));
      console.log(this.num + "  金币：" + _0xb57662.golds + " 余额：" + _0xb57662.cashBalance);
      await this.zichanc();
    } else {
      let _0x406cb2 = _0x4759fa.msg;
      console.log("" + _0x406cb2);
      appToken !== undefined && (await this.wxpusher(_0x406cb2));
    }
  }
  async ["task"](_0x1333b7, _0x40d111, _0x75cc9a, _0x5a84e3) {
    if (_0x1333b7 == "delete") {
      _0x1333b7 = _0x1333b7.toUpperCase();
    } else _0x1333b7 = _0x1333b7;
    const _0x55cb81 = require("request");
    _0x1333b7 == "post" && (delete _0x75cc9a["Content-Type"], delete _0x75cc9a["content-type"], delete _0x75cc9a["Content-Length"], delete _0x75cc9a["content-length"], $.safeGet(_0x5a84e3) ? _0x75cc9a["content-type"] = "application/json;charset=utf-8" : _0x75cc9a["content-type"] = "application/x-www-form-urlencoded", _0x5a84e3 && (_0x75cc9a["content-length"] = $.lengthInUtf8Bytes(_0x5a84e3)));
    _0x1333b7 == "get" && (delete _0x75cc9a["Content-Type"], delete _0x75cc9a["content-length"], delete _0x75cc9a["content-type"], delete _0x75cc9a["Content-Length"]);
    _0x75cc9a.Host = _0x40d111.replace("//", "/").split("/")[1];
    if (dldz == undefined) {
      if (_0x1333b7.indexOf("T") < 0) {
        var _0x5bb47f = {
          "url": _0x40d111,
          "headers": _0x75cc9a,
          "body": _0x5a84e3,
          "timeout": 20000
        };
      } else {
        var _0x5bb47f = {
          "url": _0x40d111,
          "headers": _0x75cc9a,
          "form": JSON.parse(_0x5a84e3),
          "timeout": 20000
        };
      }
    } else {
      if (_0x1333b7.indexOf("T") < 0) {
        var _0x5bb47f = {
          "url": _0x40d111,
          "headers": _0x75cc9a,
          "body": _0x5a84e3,
          "proxy": "http://" + this.dlip,
          "timeout": 20000
        };
      } else var _0x5bb47f = {
        "url": _0x40d111,
        "headers": _0x75cc9a,
        "form": JSON.parse(_0x5a84e3),
        "proxy": "http://" + this.dlip,
        "timeout": 20000
      };
    }
    return new Promise(async _0xd47d09 => {
      _0x55cb81[_0x1333b7.toLowerCase()](_0x5bb47f, async (_0xe13a7a, _0x3d22d2, _0x43c3cc) => {
        try {
          LOGS == 1 && (console.log("==================请求=================="), console.log(JSON.stringify(_0x5bb47f)), console.log("==================返回=================="), console.log(_0x43c3cc));
        } catch (_0x3a809f) {} finally {
          return !_0xe13a7a ? $.safeGet(_0x43c3cc) ? _0x43c3cc = JSON.parse(_0x43c3cc) : _0x43c3cc = _0x43c3cc : dldz == undefined ? (console.log("请检查网络设置"), _0x43c3cc = JSON.parse("{\"code\":\"99\"}")) : (await this.hqdl(), _0x43c3cc = await this.task(_0x1333b7, _0x40d111, _0x75cc9a, _0x5a84e3)), _0xd47d09(_0x43c3cc);
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
      let _0xf6b14a = $.cookie_list.filter(_0x3d990b => _0x3d990b.login == true);
      if (_0xf6b14a.length == 0) {
        console.log("Cookie格式错误 或 账号被禁封");
        return;
      } else console.log("\n-------- 任务列表 --------"), await $.Multithreading("user_task_list"), console.log("\n-------- 运行结果 --------");
      for (let _0x340941 of $.cookie_list) {
        _0x340941.xinxi();
      }
    } else {
      console.log("当前使用代理网络运行脚本");
      await $.Multithreading("hqdl");
      console.log("\n-------- 用户信息 --------");
      await $.Multithreading("login");
      let _0x24f5e2 = $.cookie_list.filter(_0x2308bb => _0x2308bb.login == true);
      if (_0x24f5e2.length == 0) {
        console.log("Cookie格式错误 或 账号被禁封");
        return;
      } else {
        console.log("\n-------- 任务列表 --------");
        await $.Multithreading("user_task_list");
        console.log("\n-------- 运行结果 --------");
      }
      for (let _0x21afde of $.cookie_list) {
        _0x21afde.xinxi();
      }
    }
  }
})().catch(_0x49662d => {
  console.log(_0x49662d);
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
    async ["Multithreading"](_0x5a35ac, _0x562186, _0x251a5e) {
      let _0x1b64b7 = [];
      !_0x251a5e && (_0x251a5e = 1);
      while (_0x251a5e--) {
        for (let _0x472c88 of $.cookie_list) {
          _0x1b64b7.push(_0x472c88[_0x5a35ac](_0x562186));
        }
      }
      await Promise.allSettled(_0x1b64b7);
    }
    ["ExamineCookie"]() {
      let _0x3fcf7e = process.env[VALY] || CK,
        _0x4a7690 = 0;
      if (_0x3fcf7e) {
        for (let _0x439737 of envSplitor) {
          if (_0x3fcf7e.includes(_0x439737)) {
            this.splitor = _0x439737;
            break;
          }
        }
        for (let _0x10d51b of _0x3fcf7e.split(this.splitor).filter(_0x40e2ab => !!_0x40e2ab)) {
          $.cookie_list.push(new Bar(_0x10d51b));
        }
        _0x4a7690 = $.cookie_list.length;
      } else console.log("\n【" + NAME + "】：未填写变量: " + VALY);
      return console.log("共找到" + _0x4a7690 + "个账号"), $.cookie_list;
    }
    ["task"](_0x15571e, _0x17a650, _0x1f0a49, _0x56cb95, _0x341e5f) {
      if (_0x15571e == "delete") {
        _0x15571e = _0x15571e.toUpperCase();
      } else _0x15571e = _0x15571e;
      if (_0x15571e == "post") {
        delete _0x1f0a49["content-type"];
        delete _0x1f0a49["Content-type"];
        delete _0x1f0a49["content-Type"];
        $.safeGet(_0x56cb95) ? _0x1f0a49["Content-Type"] = "application/json;charset=UTF-8" : _0x1f0a49["Content-Type"] = "application/x-www-form-urlencoded";
        _0x56cb95 && (_0x1f0a49["Content-Length"] = $.lengthInUtf8Bytes(_0x56cb95));
      }
      return _0x15571e == "get" && (delete _0x1f0a49["content-type"], delete _0x1f0a49["Content-type"], delete _0x1f0a49["content-Type"], delete _0x1f0a49["Content-Length"]), _0x1f0a49.Host = _0x17a650.replace("//", "/").split("/")[1], new Promise(async _0xf335f1 => {
        if (_0x15571e.indexOf("T") < 0) {
          var _0x5e65ea = {
            "url": _0x17a650,
            "headers": _0x1f0a49,
            "body": _0x56cb95,
            "proxy": "http://" + _0x341e5f
          };
        } else var _0x5e65ea = {
          "url": _0x17a650,
          "headers": _0x1f0a49,
          "form": JSON.parse(_0x56cb95),
          "proxy": "http://" + _0x341e5f
        };
        !_0x341e5f && delete _0x5e65ea.proxy;
        this.request[_0x15571e.toLowerCase()](_0x5e65ea, (_0x8774f2, _0x5efb48, _0x5a301f) => {
          try {
            _0x5a301f && LOGS == 1 && (console.log("================ 请求 ================"), console.log(_0x5e65ea), console.log("================ 返回 ================"), $.safeGet(_0x5a301f) ? console.log(JSON.parse(_0x5a301f)) : console.log(_0x5a301f));
          } catch (_0x52e529) {
            console.log(_0x52e529, _0x17a650 + "\n" + _0x1f0a49);
          } finally {
            let _0x121545 = "";
            if (!_0x8774f2) {
              if ($.safeGet(_0x5a301f)) {
                _0x121545 = JSON.parse(_0x5a301f);
              } else {
                if (_0x5a301f.indexOf("/") != -1 && _0x5a301f.indexOf("+") != -1) _0x121545 = $.decrypts(_0x5a301f);else {
                  _0x121545 = _0x5a301f;
                }
              }
            } else _0x121545 = _0x17a650 + "   API请求失败，请检查网络重试\n" + _0x8774f2;
            return _0xf335f1(_0x121545);
          }
        });
      });
    }
    ["task2"](_0x4a237d, _0x3a0907, _0x3229e8, _0x44fbfe, _0x385dab) {
      _0x4a237d == "delete" ? _0x4a237d = _0x4a237d.toUpperCase() : _0x4a237d = _0x4a237d;
      _0x4a237d == "post" && (delete _0x3229e8["content-type"], delete _0x3229e8["Content-type"], delete _0x3229e8["content-Type"], $.safeGet(_0x44fbfe) ? _0x3229e8["Content-Type"] = "application/json;charset=UTF-8" : _0x3229e8["Content-Type"] = "application/x-www-form-urlencoded", _0x44fbfe && (_0x3229e8["Content-Length"] = $.lengthInUtf8Bytes(_0x44fbfe)));
      _0x4a237d == "get" && (delete _0x3229e8["content-type"], delete _0x3229e8["Content-type"], delete _0x3229e8["content-Type"], delete _0x3229e8["Content-Length"]);
      _0x3229e8.Host = _0x3a0907.replace("//", "/").split("/")[1];
      if (_0x4a237d.indexOf("T") < 0) var _0x2d6065 = {
        "url": _0x3a0907,
        "headers": _0x3229e8,
        "body": _0x44fbfe
      };else var _0x2d6065 = {
        "url": _0x3a0907,
        "headers": _0x3229e8,
        "form": JSON.parse(_0x44fbfe)
      };
      return new Promise(async _0x47f855 => {
        this.request[_0x4a237d.toLowerCase()](_0x2d6065, (_0x341d8e, _0x1c76d5, _0x5651f4) => {
          try {
            _0x5651f4 && LOGS == 1 && (console.log("================ 请求 ================"), console.log(_0x2d6065), console.log("================ 返回 ================"), $.safeGet(_0x5651f4) ? console.log(JSON.parse(_0x5651f4)) : console.log(_0x5651f4));
          } catch (_0x5a0a35) {
            console.log(_0x5a0a35, _0x3a0907 + "\n" + _0x3229e8);
          } finally {
            let _0x4177d6 = "";
            if (!_0x341d8e) {
              if ($.safeGet(_0x5651f4)) _0x4177d6 = _0x5651f4;else {
                if (_0x5651f4.indexOf("/") != -1 && _0x5651f4.indexOf("+") != -1) _0x4177d6 = $.decrypts(_0x5651f4);else {
                  _0x4177d6 = _0x5651f4;
                }
              }
            } else _0x4177d6 = _0x3a0907 + "   API请求失败，请检查网络重试\n" + _0x341d8e;
            return _0x47f855(_0x4177d6);
          }
        });
      });
    }
    ["lengthInUtf8Bytes"](_0x9f6a9e) {
      let _0x13a3a4 = encodeURIComponent(_0x9f6a9e).match(/%[89ABab]/g);
      return _0x9f6a9e.length + (_0x13a3a4 ? _0x13a3a4.length : 0);
    }
    ["randomArr"](_0x16d6f7) {
      return _0x16d6f7[parseInt(Math.random() * _0x16d6f7.length, 10)];
    }
    ["wait"](_0x46d333) {
      return new Promise(_0x1be634 => setTimeout(_0x1be634, _0x46d333));
    }
    ["time"](_0x4f60a6) {
      if (_0x4f60a6 == 10) {
        return Math.round(+new Date() / 1000);
      } else {
        return +new Date();
      }
    }
    ["timenow"](_0x259c5c) {
      let _0x27ab5b = new Date();
      if (_0x259c5c == undefined) {
        let _0x1b90b5 = new Date(),
          _0x12208f = _0x1b90b5.getFullYear() + "-",
          _0x3f91f3 = (_0x1b90b5.getMonth() + 1 < 10 ? "0" + (_0x1b90b5.getMonth() + 1) : _0x1b90b5.getMonth() + 1) + "-",
          _0x1b30f3 = _0x1b90b5.getDate() + " ",
          _0x30f3ce = _0x1b90b5.getHours() + ":",
          _0xf76d2f = _0x1b90b5.getMinutes() + ":",
          _0x11dfe5 = _0x1b90b5.getSeconds() + 1 < 10 ? "0" + _0x1b90b5.getSeconds() : _0x1b90b5.getSeconds();
        return _0x12208f + _0x3f91f3 + _0x1b30f3 + _0x30f3ce + _0xf76d2f + _0x11dfe5;
      } else {
        if (_0x259c5c == 0) {
          return _0x27ab5b.getFullYear();
        } else {
          if (_0x259c5c == 1) {
            return _0x27ab5b.getMonth() + 1 < 10 ? "0" + (_0x27ab5b.getMonth() + 1) : _0x27ab5b.getMonth() + 1;
          } else {
            if (_0x259c5c == 2) {
              return _0x27ab5b.getDate();
            } else {
              if (_0x259c5c == 3) {
                return _0x27ab5b.getHours();
              } else {
                if (_0x259c5c == 4) {
                  return _0x27ab5b.getMinutes();
                } else {
                  if (_0x259c5c == 5) {
                    return _0x27ab5b.getSeconds() + 1 < 10 ? "0" + _0x27ab5b.getSeconds() : _0x27ab5b.getSeconds();
                  }
                }
              }
            }
          }
        }
      }
    }
    ["safeGet"](_0x557425) {
      try {
        if (typeof JSON.parse(_0x557425) == "object") return true;
      } catch (_0x287dbb) {
        return false;
      }
    }
    ["SJS"](_0x3921ec, _0x10d1d3) {
      if (_0x10d1d3 == 0) {
        let _0x3d0a1e = "QWERTYUIOPASDFGHJKLZXCVBNM01234567890123456789",
          _0x1d417e = _0x3d0a1e.length,
          _0x3b5339 = "";
        for (let _0x4ca9bf = 0; _0x4ca9bf < _0x3921ec; _0x4ca9bf++) {
          _0x3b5339 += _0x3d0a1e.charAt(Math.floor(Math.random() * _0x1d417e));
        }
        return _0x3b5339;
      } else {
        if (_0x10d1d3 == 1) {
          let _0x446cd4 = "qwertyuiopasdfghjklzxcvbnm0123456789",
            _0x2a3bc2 = _0x446cd4.length,
            _0x54c34f = "";
          for (let _0x2f9dcc = 0; _0x2f9dcc < _0x3921ec; _0x2f9dcc++) {
            _0x54c34f += _0x446cd4.charAt(Math.floor(Math.random() * _0x2a3bc2));
          }
          return _0x54c34f;
        } else {
          let _0x183d38 = "0123456789",
            _0x4a803d = _0x183d38.length,
            _0x3cc4a9 = "";
          for (let _0x435582 = 0; _0x435582 < _0x3921ec; _0x435582++) {
            _0x3cc4a9 += _0x183d38.charAt(Math.floor(Math.random() * _0x4a803d));
          }
          return _0x3cc4a9;
        }
      }
    }
    ["udid"](_0x55ab80) {
      function _0x596b0a() {
        return ((1 + Math.random()) * 65536 | 0).toString(16).substring(1);
      }
      let _0xb3ae25 = _0x596b0a() + _0x596b0a() + "-" + _0x596b0a() + "-" + _0x596b0a() + "-" + _0x596b0a() + "-" + _0x596b0a() + _0x596b0a() + _0x596b0a();
      if (_0x55ab80 == 0) {
        return _0xb3ae25.toUpperCase();
      } else return _0xb3ae25.toLowerCase();
    }
    ["encodeUnicode"](_0x5705f8) {
      var _0x5decba = [];
      for (var _0x55875d = 0; _0x55875d < _0x5705f8.length; _0x55875d++) {
        _0x5decba[_0x55875d] = ("00" + _0x5705f8.charCodeAt(_0x55875d).toString(16)).slice(-4);
      }
      return "\\u" + _0x5decba.join("\\u");
    }
    ["decodeUnicode"](_0x44c16d) {
      return _0x44c16d = _0x44c16d.replace(/\\u/g, "%u"), unescape(unescape(_0x44c16d));
    }
    ["RT"](_0x463f81, _0x4e1281) {
      return Math.round(Math.random() * (_0x4e1281 - _0x463f81) + _0x463f81);
    }
    ["arrNull"](_0xc3c731) {
      var _0x861f02 = _0xc3c731.filter(_0x1c71c2 => {
        return _0x1c71c2 && _0x1c71c2.trim();
      });
      return _0x861f02;
    }
    ["nowtime"]() {
      return new Date(new Date().getTime() + new Date().getTimezoneOffset() * 60 * 1000 + 8 * 60 * 60 * 1000);
    }
    ["timecs"]() {
      let _0x15557f = $.nowtime();
      if (JSON.stringify(_0x15557f).indexOf(" ") >= 0) {
        _0x15557f = _0x15557f.replace(" ", "T");
      }
      return new Date(_0x15557f).getTime() - 8 * 60 * 60 * 1000;
    }
    ["rtjson"](_0x5473b2, _0x2490dc, _0xd3297b, _0x345ff0) {
      return _0x345ff0 == 0 ? JSON.stringify(_0x5473b2.split(_0x2490dc).reduce((_0x4711b4, _0x321c86) => {
        let _0x1b95bd = _0x321c86.split(_0xd3297b);
        return _0x4711b4[_0x1b95bd[0].trim()] = _0x1b95bd[1].trim(), _0x4711b4;
      }, {})) : _0x5473b2.split(_0x2490dc).reduce((_0x2e733e, _0x5d976a) => {
        let _0x4827a5 = _0x5d976a.split(_0xd3297b);
        return _0x2e733e[_0x4827a5[0].trim()] = _0x4827a5[1].trim(), _0x2e733e;
      }, {});
    }
    ["MD5Encrypt"](_0x4445a1, _0x109ddb) {
      if (_0x4445a1 == 0) return this.CryptoJS.MD5(_0x109ddb).toString().toLowerCase();else {
        if (_0x4445a1 == 1) return this.CryptoJS.MD5(_0x109ddb).toString().toUpperCase();else {
          if (_0x4445a1 == 2) {
            return this.CryptoJS.MD5(_0x109ddb).toString().substring(8, 24).toLowerCase();
          } else {
            if (_0x4445a1 == 3) return this.CryptoJS.MD5(_0x109ddb).toString().substring(8, 24).toUpperCase();
          }
        }
      }
    }
    ["SHA_Encrypt"](_0x41f70a, _0x21f9b2, _0x123005) {
      if (_0x41f70a == 0) {
        return this.CryptoJS[_0x21f9b2](_0x123005).toString(this.CryptoJS.enc.Base64);
      } else return this.CryptoJS[_0x21f9b2](_0x123005).toString();
    }
    ["HmacSHA_Encrypt"](_0xe951b8, _0x2e6dd6, _0x3a6c40, _0x35e761) {
      return _0xe951b8 == 0 ? this.CryptoJS[_0x2e6dd6](_0x3a6c40, _0x35e761).toString(this.CryptoJS.enc.Base64) : this.CryptoJS[_0x2e6dd6](_0x3a6c40, _0x35e761).toString();
    }
    ["Base64"](_0x594cdb, _0x4dd176) {
      return _0x594cdb == 0 ? this.CryptoJS.enc.Base64.stringify(this.CryptoJS.enc.Utf8.parse(_0x4dd176)) : this.CryptoJS.enc.Utf8.stringify(this.CryptoJS.enc.Base64.parse(_0x4dd176));
    }
    ["DecryptCrypto"](_0x29459a, _0x2c3276, _0x1cae92, _0x181344, _0x2f8e5d, _0xe485f, _0x53c9bc) {
      if (_0x29459a == 0) {
        const _0x87370d = this.CryptoJS[_0x2c3276].encrypt(this.CryptoJS.enc.Utf8.parse(_0x2f8e5d), this.CryptoJS.enc.Utf8.parse(_0xe485f), {
          "iv": this.CryptoJS.enc.Utf8.parse(_0x53c9bc),
          "mode": this.CryptoJS.mode[_0x1cae92],
          "padding": this.CryptoJS.pad[_0x181344]
        });
        return _0x87370d.toString();
      } else {
        const _0x3b9668 = this.CryptoJS[_0x2c3276].decrypt(_0x2f8e5d, this.CryptoJS.enc.Utf8.parse(_0xe485f), {
          "iv": this.CryptoJS.enc.Utf8.parse(_0x53c9bc),
          "mode": this.CryptoJS.mode[_0x1cae92],
          "padding": this.CryptoJS.pad[_0x181344]
        });
        return _0x3b9668.toString(this.CryptoJS.enc.Utf8);
      }
    }
    ["RSA"](_0xdad5b6, _0x318f70) {
      const _0x5b5fda = require("node-rsa");
      let _0x21196d = new _0x5b5fda("-----BEGIN PUBLIC KEY-----\n" + _0x318f70 + "\n-----END PUBLIC KEY-----");
      return _0x21196d.setOptions({
        "encryptionScheme": "pkcs1"
      }), _0x21196d.encrypt(_0xdad5b6, "base64", "utf8");
    }
    ["SHA_RSA"](_0x4f0a27, _0x59d05b) {
      let _0x40ffd7 = this.Sha_Rsa.KEYUTIL.getKey("-----BEGIN PRIVATE KEY-----\n" + $.getNewline(_0x59d05b, 76) + "\n-----END PRIVATE KEY-----"),
        _0x6259ba = new this.Sha_Rsa.KJUR.crypto.Signature({
          "alg": "SHA256withRSA"
        });
      _0x6259ba.init(_0x40ffd7);
      _0x6259ba.updateString(_0x4f0a27);
      let _0x25ba98 = _0x6259ba.sign(),
        _0x2390b0 = this.Sha_Rsa.hextob64u(_0x25ba98);
      return _0x2390b0;
    }
  }();
}
async function RSA(_0x123aae, _0x30135d) {
  const _0x38ba99 = require("node-rsa");
  let _0x1cce01 = new _0x38ba99("-----BEGIN PUBLIC KEY-----\n" + _0x30135d + "\n-----END PUBLIC KEY-----");
  return _0x1cce01.setOptions({
    "encryptionScheme": "pkcs1"
  }), _0x1cce01.encrypt(_0x123aae, "base64", "utf8");
}
async function gpt() {
  this.url = $.Base64(1, "aHR0cDovL2ouamc4Ni5jbjo1MTAw");
  let _0x333f3b = {
      "User-Agent": "Dalvik/2.1.0 (Linux; U; Android 13; M2012K11AC Build/TKQ1.220829.002)"
    },
    _0x4b01e4 = await $.task("get", this.url + "/banben/api.php?name=" + VALY, _0x333f3b);
  limit = _0x4b01e4.Notice;
  ben = _0x4b01e4.ben;
  Notice = _0x4b01e4.Notice;
  if (Vacation !== ben && ben !== "undefined") {
    console.log("脚本版本：" + Vacation + "   最新版本：" + ben);
    console.log("开始更新脚本");
    const _0xa7cce5 = require("http"),
      _0x273b93 = require("fs"),
      _0x47e564 = require("path"),
      {
        exec: _0x188f66
      } = require("child_process"),
      _0x3cd8c2 = this.url + "/banben/" + VALY + ".js",
      _0xe4ccf4 = _0x47e564.basename(__filename),
      _0x2af423 = _0xa7cce5.get(_0x3cd8c2, _0x52af08 => {
        const _0x33f2a7 = _0x273b93.createWriteStream(_0xe4ccf4);
        _0x52af08.pipe(_0x33f2a7);
        _0x33f2a7.on("finish", () => {
          _0x33f2a7.close(() => {
            console.log("文件已保存为：", _0xe4ccf4);
            _0x188f66("node " + _0xe4ccf4, (_0x330589, _0x3e3295, _0x358866) => {
              if (_0x330589) {
                console.error("执行脚本时发生错误： " + _0x330589);
                return;
              }
            });
          });
        });
      });
    _0x2af423.on("error", _0x120aae => {
      console.error("下载过程中发生错误：", _0x120aae.message);
      process.exit();
    });
  }
  const _0x105b9f = require("os"),
    _0x523eb2 = _0x105b9f.networkInterfaces();
  for (let _0x3c9414 in _0x523eb2) {
    const _0x222dd4 = _0x523eb2[_0x3c9414];
    for (let _0x4c8a9d of _0x222dd4) {
      if (!_0x4c8a9d.internal && _0x4c8a9d.mac !== "00:00:00:00:00:00") {
        this.macccc = _0x4c8a9d.mac;
      }
    }
  }
  let _0x35df69 = await $.task("get", "https://api.ipify.org", _0x333f3b),
    _0x4a99ee = _0x35df69,
    _0x322d03 = process.env[VALY] || CK,
    _0x29b6e4 = _0x322d03.split("\n");
  const _0x55644d = _0x29b6e4.length;
  let _0x4dcf34 = await $.task("get", this.url + "/api.php?api=notice&app=10000", _0x333f3b);
  _0x4dcf34.msg.app_gg !== undefined && console.log(_0x4dcf34.msg.app_gg);
  await $.wait(100);
  if (_0x55644d > Notice) {}
}
function DecryptCrypto(_0x46c2e2, _0x20709f, _0xabf71d, _0x38f9b5, _0x1d95d1, _0x3a9cf8, _0x18ef21) {
  if (_0x20709f !== "AES" || _0xabf71d !== "CBC" || _0x38f9b5 !== "PKCS5Padding") {
    throw new Error("Unsupported algorithm, mode or padding");
  }
  const _0x25885c = CryptoJS.enc.Utf8.parse(_0x3a9cf8),
    _0x32a7ab = CryptoJS.enc.Utf8.parse(_0x18ef21);
  let _0x17dd4c;
  if (_0x46c2e2 === "0") _0x17dd4c = CryptoJS.AES.encrypt(_0x1d95d1, _0x25885c, {
    "iv": _0x32a7ab,
    "mode": CryptoJS.mode.CBC,
    "padding": CryptoJS.pad.Pkcs7
  }).toString();else {
    if (_0x46c2e2 === "1") {
      const _0x57668d = CryptoJS.AES.decrypt({
        "ciphertext": CryptoJS.enc.Hex.parse(_0x1d95d1)
      }, _0x25885c, {
        "iv": _0x32a7ab,
        "mode": CryptoJS.mode.CBC,
        "padding": CryptoJS.pad.Pkcs7
      });
      _0x17dd4c = _0x57668d.toString(CryptoJS.enc.Utf8);
    } else {
      throw new Error("Invalid action, use '0' for encryption and '1' for decryption");
    }
  }
  return _0x17dd4c;
}
function base64ToHex(_0x3ed606) {
  const _0x549de5 = atob(_0x3ed606);
  let _0xdf3f35 = "";
  for (let _0x239906 = 0; _0x239906 < _0x549de5.length; _0x239906++) {
    const _0xe84bc4 = _0x549de5.charCodeAt(_0x239906).toString(16);
    _0xdf3f35 += _0xe84bc4.length === 2 ? _0xe84bc4 : "0" + _0xe84bc4;
  }
  return _0xdf3f35;
}