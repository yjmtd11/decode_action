//Thu Mar 05 2026 12:10:07 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
NAME = "温度新闻";
VALY = ["wdxwck"];
CK = "";
LOGS = 0;
usid = 0;
Notify = 1;
loginAttempts = 0;
nowhour = Math.round(new Date().getHours()).toString();
yqid = ["WD24BQT", "WD24PVA", "WD24BPU"];
const 蛋炒饭_0x44350e = require("fs");
const {
  v4: 蛋炒饭_0x4e0a97
} = require("uuid");
DCFHOST = process.env.DCFHOST;
dcfkey = encodeURIComponent(process.env.dcfkey);
IP = "";
IPCITY = "";
class 蛋炒饭_0x587353 {
  constructor(_0xdc9165) {
    this.phone = _0xdc9165.split("#")[0];
    this.pwd = _0xdc9165.split("#")[1];
    this.token = _0xdc9165.split("#")[2];
    this.txtoken = _0xdc9165.split("#")[3];
    this.dn = $.SJS(32, 0);
    let _0x41f724 = JSON.parse(Buffer.from(this.token.split(".")[1], "base64").toString("utf8"));
    let _0x496c19 = JSON.parse(_0x41f724.sub);
    this.idyq = $.randomArr(yqid);
    this.name = _0x496c19.name;
    this.userid = _0x496c19.thirdId;
    this._ = ++usid;
    this.f = "小主 [" + this._ + "] ";
    this.message = "";
    this.logs = true;
  }
  async ["getsign"](_0x2b10d0, _0x397f91) {
    let _0x29de92 = await $.readUUID();
    let _0x1420a2 = encodeURIComponent("wdxw蛋" + _0x2b10d0 + "蛋" + _0x397f91);
    let _0x21af11 = await $.task("get", "http://" + DCFHOST + "/check?DCFKEY=" + dcfkey + "&JSHOST=" + IP + "&MAC=" + _0x29de92 + "&DATA=" + _0x1420a2 + "&JSCITY=" + IPCITY, {});
    let _0x296329 = encodeURIComponent(_0x21af11.jiamiOutput);
    return _0x296329;
  }
  async ["getraskey"]() {
    let _0x292cd9 = $.time(13);
    let _0x1da659 = $.udid(1);
    let _0x2299a1 = $.SHA_Encrypt(1, "SHA256", "T_GOV&&S_WDXW&&" + _0x1da659 + "&&&&" + _0x292cd9 + "&&35c782a2");
    let _0x1a4919 = {
      "X-DEVICE-ID": this.dn,
      "X-TIMESTAMP": _0x292cd9,
      APPWEBWZAUTHORITY: "",
      "X-SITE-UID": "S_WDXW",
      "X-SIGNATURE": _0x2299a1,
      "X-USER-ID": "",
      "X-REQUEST-ID": _0x1da659,
      "X-SESSION-ID": "",
      "X-TENANT-UID": "T_GOV"
    };
    let _0x3f496d = await $.task("get", "https://wdappapi.wzrb.com.cn/wzrbapp/app/sys/publicKey", _0x1a4919);
    let _0x1003e6 = _0x3f496d.data.key;
    let _0x264075 = _0x3f496d.data.publicKey;
    return {
      raskey: _0x1003e6,
      publicKey: _0x264075
    };
  }
  async ["zmlogin"]() {
    let _0x58a665 = $.time(13);
    let _0x2999ad = $.udid(1);
    let _0x49bef7 = await this.getraskey();
    let _0x464630 = _0x49bef7.raskey.replace(/\n/g, "");
    let _0x273107 = await this.getsign(this.pwd, _0x464630);
    let _0x30f689 = _0x273107.replace(/%0A/g, "%3D");
    let _0x33e755 = $.SHA_Encrypt(1, "SHA256", "T_GOV&&S_WDXW&&" + _0x2999ad + "&&&&" + _0x58a665 + "&&35c782a2");
    let _0x4f09d6 = {
      "USER-AGENT": "8.1.0;" + this.dn + ";Xiaomi/2211133C;ANDROID;13;",
      "X-DEVICE-ID": this.dn,
      "X-TIMESTAMP": _0x58a665,
      APPWEBWZAUTHORITY: "",
      "X-SITE-UID": "S_WDXW",
      "X-SIGNATURE": _0x33e755,
      "X-USER-ID": "",
      "X-REQUEST-ID": _0x2999ad,
      "X-SESSION-ID": "",
      "X-TENANT-UID": "T_GOV"
    };
    let _0x2777dd = "rasPassword=" + _0x30f689 + "&username=" + this.phone + "&publicKey=" + _0x49bef7.publicKey + "&inviteCode=&longlat=%2C";
    let _0x53fa97 = await $.task("post", "https://wdappapi.wzrb.com.cn/wzrbapp/app/sys/login/byPassword", _0x4f09d6, _0x2777dd);
    _0x53fa97.code == 200 && (this.uid = _0x53fa97.data.userId, this.autoken = _0x53fa97.data.paAuthority, await this.getInviteInfo());
  }
  async ["login"]() {
    let _0x20a326 = {
      token: this.token
    };
    let _0xa1bb6 = "{}";
    let _0x1448a5 = await $.task("post", "https://mkapi2.xinhuamm.net/coinApi2/clapi/statistics/getStaticsInfo", _0x20a326, _0xa1bb6);
    if (_0x1448a5.status == 200) {
      {
        await this.zmlogin();
        console.log("【" + this.name + "】登陆成功,当前余额:" + _0x1448a5.obj.balance + "今日获得金币:" + _0x1448a5.obj.todayCoin + ",未结算剩余金币:" + _0x1448a5.obj.unsettledCoin + ",昨日兑换零钱:" + _0x1448a5.obj.yesterdayCashIncome);
        this.message += "【" + this.name + "】登陆成功,当前余额:" + _0x1448a5.obj.balance + "今日获得金币:" + _0x1448a5.obj.todayCoin + ",未结算剩余金币:" + _0x1448a5.obj.unsettledCoin + ",昨日兑换零钱:" + _0x1448a5.obj.yesterdayCashIncome;
        this.logs = true;
      }
    } else {
      if (loginAttempts < 10) {
        {
          loginAttempts++;
          await this.login();
        }
      } else {
        this.logs = false;
      }
    }
  }
  async ["getInviteInfo"]() {
    let _0x5be74f = {
      token: this.token
    };
    let _0x560d23 = "{}";
    let _0x267d7a = await $.task("post", "https://mkapi2.xinhuamm.net/coinApi2/clapi/invite/getInviteInfo", _0x5be74f, _0x560d23);
    _0x267d7a.status == 200 && _0x267d7a.obj.inviterId == null && (await this.invite());
  }
  async ["invite"]() {
    let _0x2299d4 = {
      "USER-AGENT": "8.1.0;" + this.dn + ";Xiaomi/2211133C;ANDROID;13;",
      dn: this.dn,
      token: this.token
    };
    let _0x1d7849 = "{\"inviteCode\":\"" + this.idyq + "\"}";
    let _0x38c53e = await $.task("post", "https://mkapi2.xinhuamm.net/coinApi2/clapi/invite/invite", _0x2299d4, _0x1d7849);
  }
  async ["wzlist"]() {
    let _0x3132e6 = {
      token: this.token
    };
    let _0x3e69c3 = "{}";
    let _0x19ce17 = await $.task("post", "https://mkapi2.xinhuamm.net/coinApi2/clapi/content/getHighContentList", _0x3132e6, _0x3e69c3);
    if (_0x19ce17.status == 200) {
      {
        for (let _0x599965 of _0x19ce17.list) {
          let _0x207a4b = _0x599965.contentId;
          let _0x3b2526 = _0x599965.title;
          await this.dotask(_0x207a4b, _0x3b2526);
        }
      }
    }
  }
  async ["dotask"](_0x375af5, _0x1f3d8e) {
    const _0x2df5dd = {
      2: "阅读",
      3: "点赞",
      4: "分享",
      5: "评论"
    };
    for (let _0x34d924 of [2, 3, 4, 5]) {
      let _0x4a1bc2 = $.time(13);
      let _0x4c9165 = $.udid(1);
      let _0x4d238f = $.SHA_Encrypt(1, "SHA256", "T_GOV&&S_WDXW&&" + _0x4c9165 + "&&" + this.autoken + "&&" + _0x4a1bc2 + "&&35c782a2");
      let _0x76119 = {
        "USER-AGENT": "8.1.0;" + this.dn + ";Xiaomi/2211133C;ANDROID;13;",
        "X-DEVICE-ID": this.dn,
        "X-TIMESTAMP": _0x4a1bc2,
        "X-SITE-UID": "S_WDXW",
        "X-SIGNATURE": _0x4d238f,
        "X-USER-ID": this.uid,
        "X-REQUEST-ID": _0x4c9165,
        "X-SESSION-ID": this.autoken,
        "X-TENANT-UID": "T_GOV"
      };
      let _0x4ffdb2 = "eventId=" + _0x34d924 + "&docId=" + _0x375af5;
      let _0x255f7e = await $.task("post", "https://wdappapi.wzrb.com.cn/hybapp/c/docs/cbyd/event", _0x76119, _0x4ffdb2);
      _0x255f7e.code == 0 && (console.log("【" + this.name + "】完成文章" + _0x1f3d8e + "的" + _0x2df5dd[_0x34d924] + "任务"), await $.wait(10000, 15000));
    }
  }
  async ["openbox"]() {
    let _0x3cc496 = {
      token: this.token
    };
    let _0x5ef2f4 = "{}";
    let _0x9bb467 = await $.task("post", "https://mkapi2.xinhuamm.net/coinApi2/clapi/coin/openTreasureBox", _0x3cc496, _0x5ef2f4);
    _0x9bb467.status == 200 && console.log("【" + this.name + "】开宝箱成功");
  }
  async ["cxlottery"]() {
    let _0x1890e0 = {
      Cookie: "token=" + this.token
    };
    let _0x1e0739 = await $.task("get", "https://ryapi.xinhuamm.net/lotteryapi/lottery/expandInfo/0749770ad20a49b1aeb6a8b5c64951d2", _0x1890e0);
    if (_0x1e0739.status == "200") {
      let _0x5ee0dd = _0x1e0739.data.availableJoinCount;
      if (_0x5ee0dd >= 1) {
        {
          await this.lottery(_0x5ee0dd);
        }
      } else {
        console.log("【" + this.name + "】暂无抽奖机会，快去完成任务吧！！");
      }
    }
  }
  async ["lottery"](_0x59309f) {
    for (let _0x271bfb = 0; _0x271bfb < _0x59309f; _0x271bfb++) {
      let _0x545e18 = {
        Cookie: "token=" + this.token
      };
      let _0x2f5337 = await $.task("get", "https://ryapi.xinhuamm.net/lotteryapi/lottery/draw?id=0749770ad20a49b1aeb6a8b5c64951d2&appId=5c5555d0f9c249de9de7c46904b506b1&password=&idcard=", _0x545e18);
      if (_0x2f5337.status == "200" && JSON.parse(_0x2f5337.data.extendInfo).amount) {
        {
          let _0x54d262 = JSON.parse(_0x2f5337.data.extendInfo).amount;
          let _0x49ccff = JSON.parse(_0x2f5337.data.extendInfo).ticket;
          console.log("【" + this.name + "】抽奖成功，抽中了" + _0x54d262 + "元");
          await this.lotterytx(_0x54d262, _0x49ccff);
        }
      }
    }
  }
  async ["lotterytx"](_0x3c2f09, _0x58a618) {
    const _0x41ecf9 = {
      rGgtU: "post",
      sWNUh: function (_0x32497f, _0x3982df) {
        return _0x32497f == _0x3982df;
      },
      nQXBZ: function (_0x22a61b, _0x246179) {
        return _0x22a61b === _0x246179;
      },
      PkFrg: "xgyCO",
      utIHk: "cCAvS"
    };
    let _0x63900d = "{\"token\":\"" + this.txtoken + "\",\"ticket\":\"" + _0x58a618 + "\"}";
    let _0x536eaa = await $.task("post", "https://ryapi.xinhuamm.net/lotteryapi/noLogin/redpack/redeem", {}, _0x63900d);
    _0x536eaa.status == 200 ? console.log("【" + this.name + "】提现" + _0x3c2f09 + "元成功") : console.log("【" + this.name + "】提现:" + _0x536eaa.msg);
  }
}
$ = 蛋炒饭_0xea8c83();
!(async () => {
  console.log("正在运行脚本：【" + NAME + "】V1.0.5");
  console.log("📢 请认真阅读以下声明\n 【免责声明】   \n📌 脚本文件仅用于测试和学习研究   \n📌 脚本文件任何人不得用于商业以及非法用途   \n📌 禁止任何公众号、自媒体进行任何形式的转发   \n📌 脚本文件请在下载试用后24小时内自行删除   \n📌 因使用脚本造成软件平台的一切损失皆由使用者承担   \n📌 脚本文件如有不慎被破解或修改由破解或修改者承担   \n📌 如不接受此条款请立即删除脚本文件");
  let _0x1f75c2 = await $.getkami();
  let _0x32b7e6 = await $.readUUID();
  if (_0x1f75c2.dcfkey) {
    _0x1f75c2.Notify != "" && console.log(_0x1f75c2.Notify);
    TSdata = $.time(13);
    if (_0x1f75c2.MAC == null) {
      console.log("请提交正确的MAC地址后再运行脚本！");
      return;
    } else {
      if (_0x1f75c2.MAC != null) {
        if (_0x1f75c2.MAC != _0x32b7e6) {
          let _0x264e3d = require("path");
          let _0x593364 = _0x264e3d.basename(__filename);
          console.log("本次MAC地址与数据库记录不匹配，停止运行文件[" + _0x593364 + "]");
          return;
        }
      }
    }
    if (_0x1f75c2.Delete == 1) {
      let _0x4e9504 = require("path");
      let _0x2fe18b = _0x4e9504.basename(__filename);
      console.log("关闭服务器跑路啦，帮你删除脚本文件[" + _0x2fe18b + "]");
      蛋炒饭_0x44350e.unlink(_0x2fe18b, _0x4f5326 => {});
      return;
    }
    if (TSdata <= _0x1f75c2.Data) {
      {
        console.log("尊贵的" + _0x1f75c2.UserName + "小主,您的卡密有效期到：" + _0x1f75c2.DataTime);
      }
    } else {
      let _0xdc3ab = require("path");
      let _0xf03f63 = _0xdc3ab.basename(__filename);
      console.log("卡密已过期，停止运行文件[" + _0xf03f63 + "]");
      return;
    }
    await $.ExamineCookie();
    if ($.cookie_list.length < _0x1f75c2.xianjin) {
      await $.Multithreading("login");
      let _0x2560d1 = $.cookie_list.filter(_0x4c6b63 => _0x4c6b63.logs == true);
      if (_0x2560d1.length == 0) {
        {
          console.log("Cookie格式错误 或 账号被禁封");
          return;
        }
      } else {
        await $.Multithreading("cxlottery");
        (nowhour == 12 || nowhour == 18 || nowhour == 0) && (await $.Multithreading("openbox"));
        nowhour != 0 && (await $.Multithreading("wzlist"));
      }
    } else {
      console.log("账号数量超过限制，请减少账号数量后重试！");
    }
  } else {
    if (_0x1f75c2.message == "更新成功") {
      {
        console.log("数据更新成功，请重新运行脚本");
        return;
      }
    } else {
      let _0x109732 = require("path");
      let _0x353988 = _0x109732.basename(__filename);
      console.log("无效卡密，停止运行文件[" + _0x353988 + "]");
      return;
    }
  }
  let _0x52b420 = [];
  for (let _0x28b604 of $.cookie_list) {
    {
      if (_0x28b604.message) {
        _0x52b420.push(_0x28b604.message);
      }
    }
  }
  if (_0x52b420.length > 0) {
    await $.SendMsg(_0x52b420.join("\n"));
  }
})().catch(_0x5d1354 => {
  console.log(_0x5d1354);
}).finally(() => {});
function 蛋炒饭_0xea8c83() {
  return new class {
    constructor() {
      this.cookie_list = [];
      this.message = "";
      this.CryptoJS = require("crypto-js");
      this.NodeRSA = require("node-rsa");
      this.request = require("request");
      this.Sha_Rsa = require("jsrsasign");
    }
    async ["Multithreading"](_0x219177, _0x140bc6, _0x327062) {
      const _0x56cc36 = {
        wJRTL: function (_0x477b4c, _0x1e82c1) {
          return _0x477b4c(_0x1e82c1);
        },
        eSeQL: "path"
      };
      let _0xca515c = [];
      !_0x327062 && (_0x327062 = 1);
      while (_0x327062--) {
        {
          for (let _0x2ff134 of $.cookie_list) {
            {
              _0xca515c.push(_0x2ff134[_0x219177](_0x140bc6));
            }
          }
        }
      }
      await Promise.allSettled(_0xca515c);
    }
    ["ExamineCookie"]() {
      let _0xfb8198 = process.env[VALY] || CK;
      let _0x13804d = 0;
      if (_0xfb8198) {
        for (let _0x2329f2 of _0xfb8198.split("\n").filter(_0x307736 => !!_0x307736)) {
          $.cookie_list.push(new 蛋炒饭_0x587353(_0x2329f2));
        }
        _0x13804d = $.cookie_list.length;
      } else {
        console.log("\n【" + NAME + "】：未填写变量: " + VALY);
      }
      console.log("共找到" + _0x13804d + "个账号");
      return $.cookie_list;
    }
    ["task"](_0x1d4ab2, _0x407b9b, _0x33a034, _0x1eb2fc, _0x7414ef) {
      const _0x1ae5e8 = {
        OVHeR: function (_0x5116ce, _0x2b9706) {
          return _0x5116ce + _0x2b9706;
        },
        QwnGh: function (_0x327634, _0x1fffaa) {
          return _0x327634 != _0x1fffaa;
        },
        ZSGHJ: function (_0x43f405, _0x303337) {
          return _0x43f405 !== _0x303337;
        },
        zIeeI: "jytbD",
        XFYZk: function (_0x15d65c, _0x136cff) {
          return _0x15d65c == _0x136cff;
        },
        sJDNv: "NUJVk",
        hWVkG: function (_0x135a49, _0x3d8f85) {
          return _0x135a49 !== _0x3d8f85;
        },
        VnJaR: "TXKbT",
        qmMkT: "bfUxv",
        zqCkW: function (_0x1d0be2, _0x1ed68a) {
          return _0x1d0be2 === _0x1ed68a;
        },
        IEeDk: "flxqS",
        DSOUQ: "gWjmE",
        HdqJe: "bMCHl",
        RsgMF: "ZiqRf",
        gCrpT: "iqPQM",
        NEFaP: "YwEZj",
        vGhxg: "ftRgc",
        Sjpkb: function (_0x1647c8, _0x3d71f4) {
          return _0x1647c8 + _0x3d71f4;
        },
        vwhVJ: "   API请求失败，请检查网络重试\n",
        iBWnn: function (_0x493d89, _0x494a3f) {
          return _0x493d89(_0x494a3f);
        }
      };
      if (_0x1d4ab2 == "delete") {
        {
          _0x1d4ab2 = _0x1d4ab2.toUpperCase();
        }
      } else {
        _0x1d4ab2 = _0x1d4ab2;
      }
      _0x1d4ab2 == "post" && (delete _0x33a034["content-type"], delete _0x33a034["Content-type"], delete _0x33a034["content-Type"], $.safeGet(_0x1eb2fc) ? _0x33a034["Content-Type"] = "application/json;charset=UTF-8" : _0x33a034["Content-Type"] = "application/x-www-form-urlencoded", _0x1eb2fc && (_0x33a034["Content-Length"] = $.lengthInUtf8Bytes(_0x1eb2fc)));
      _0x1d4ab2 == "get" && (delete _0x33a034["content-type"], delete _0x33a034["Content-type"], delete _0x33a034["content-Type"], delete _0x33a034["Content-Length"]);
      _0x33a034.Host = _0x407b9b.replace("//", "/").split("/")[1];
      return new Promise(async _0x3334a3 => {
        if (_0x1d4ab2.indexOf("T") < 0) {
          {
            var _0x35277c = {
              url: _0x407b9b,
              headers: _0x33a034,
              body: _0x1eb2fc,
              proxy: "http://" + _0x7414ef
            };
          }
        } else {
          {
            var _0x35277c = {
              url: _0x407b9b,
              headers: _0x33a034,
              form: JSON.parse(_0x1eb2fc),
              proxy: "http://" + _0x7414ef
            };
          }
        }
        !_0x7414ef && delete _0x35277c.proxy;
        this.request[_0x1d4ab2.toLowerCase()](_0x35277c, (_0x4b84ba, _0x595f6b, _0x4b8d81) => {
          try {
            if (_0x4b8d81) {
              {
                if (LOGS == 1) {
                  console.log("================ 请求 ================");
                  console.log(_0x35277c);
                  console.log("================ 返回 ================");
                  if ($.safeGet(_0x4b8d81)) {
                    console.log(JSON.parse(_0x4b8d81));
                  } else {
                    {
                      console.log(_0x4b8d81);
                    }
                  }
                }
              }
            }
          } catch (_0x3661f4) {
            {
              console.log(_0x3661f4, _0x407b9b + "\n" + _0x33a034);
            }
          } finally {
            {
              let _0x42712a = "";
              if (!_0x4b84ba) {
                if ($.safeGet(_0x4b8d81)) {
                  _0x42712a = JSON.parse(_0x4b8d81);
                } else {
                  if (_0x4b8d81.indexOf("/") != -1 && _0x4b8d81.indexOf("+") != -1) {
                    {
                      _0x42712a = _0x4b8d81;
                    }
                  } else {
                    _0x42712a = _0x4b8d81;
                  }
                }
              } else {
                {
                  _0x42712a = _0x407b9b + "   API请求失败，请检查网络重试\n" + _0x4b84ba;
                }
              }
              return _0x3334a3(_0x42712a);
            }
          }
        });
      });
    }
    async ["httpRequest"](_0x517d13) {
      {
        delete _0x517d13.fn;
        var _0x4c15e9 = require("request");
        return new Promise(_0x4a481c => {
          _0x4c15e9(_0x517d13, function (_0x4bddf1, _0x47e26f) {
            {
              if (_0x4bddf1) {
                throw new Error(_0x4bddf1);
              }
              let _0x3ad494 = _0x47e26f.body;
              _0x4a481c(_0x3ad494);
            }
          });
        });
      }
    }
    async ["readUUID"]() {
      const _0x4a4e08 = "uuid.txt";
      await $.generateUUID(_0x4a4e08);
      try {
        {
          const _0x4d95e4 = 蛋炒饭_0x44350e.readFileSync(_0x4a4e08, "utf8");
          const _0x5cf6ac = _0x4d95e4.trim();
          return _0x5cf6ac;
        }
      } catch (_0x210086) {
        {
          return null;
        }
      }
    }
    ["generateUUID"](_0x1e6285) {
      {
        if (蛋炒饭_0x44350e.existsSync(_0x1e6285)) {
          return;
        }
        const _0x5d4476 = 蛋炒饭_0x4e0a97();
        蛋炒饭_0x44350e.writeFile(_0x1e6285, _0x5d4476, "utf8", _0x4a9f18 => {
          if (_0x4a9f18) {
            {
              console.error("写入文件出错: " + _0x4a9f18.message);
              return;
            }
          }
        });
      }
    }
    async ["getkami"]() {
      let _0x2e311b = await $.readUUID();
      await $.getCurrentIP();
      await $.getIPCITY();
      let _0x406d8c = await $.task("get", "http://" + DCFHOST + "/querys?DCFKEY=" + dcfkey + "&MAC=" + _0x2e311b + "&JSHOST=" + IP + "&JSCITY=" + IPCITY, {});
      return _0x406d8c;
    }
    async ["getIPCITY"]() {
      let _0x397c6a = await $.task("get", "http://ip-api.com/json/" + IP + "?lang=zh-CN", {});
      let _0x67c602 = _0x397c6a.regionName + _0x397c6a.city;
      IPCITY = encodeURIComponent(_0x67c602);
    }
    async ["getCurrentIP"]() {
      let _0x15f792 = await $.task("get", "https://httpbin.org/ip", {});
      IP = _0x15f792.origin;
    }
    async ["SendMsg"](_0x234ed2) {
      {
        if (!_0x234ed2) {
          return;
        }
        if (Notify == 1) {
          var _0x24909d = require("./sendNotify");
          await _0x24909d.sendNotify(NAME, _0x234ed2);
        }
      }
    }
    ["lengthInUtf8Bytes"](_0x52a0c1) {
      let _0x12ac46 = encodeURIComponent(_0x52a0c1).match(/%[89ABab]/g);
      return _0x52a0c1.length + (_0x12ac46 ? _0x12ac46.length : 0);
    }
    ["randomArr"](_0xb9bed3) {
      return _0xb9bed3[parseInt(Math.random() * _0xb9bed3.length, 10)];
    }
    ["wait"](_0xc22fb0) {
      return new Promise(_0x28abdc => setTimeout(_0x28abdc, _0xc22fb0));
    }
    ["time"](_0x5afbae) {
      {
        if (_0x5afbae == 10) {
          {
            return Math.round(+new Date() / 1000);
          }
        } else {
          return +new Date();
        }
      }
    }
    ["timenow"]() {
      const _0x2c093d = new Date();
      const _0x365874 = _0x2c093d.getFullYear();
      const _0x1fc31e = String(_0x2c093d.getMonth() + 1).padStart(2, "0");
      const _0x42db8d = String(_0x2c093d.getDate()).padStart(2, "0");
      const _0x38186f = _0x365874 + "-" + _0x1fc31e + "-" + _0x42db8d;
      return _0x38186f;
    }
    ["safeGet"](_0x50eb05) {
      try {
        if (typeof JSON.parse(_0x50eb05) == "object") {
          return true;
        }
      } catch (_0x66461) {
        return false;
      }
    }
    ["SJS"](_0x43c82a, _0x1a476c) {
      const _0x2d3df1 = {
        eDLgi: function (_0x5e0c1c, _0xa0a52e) {
          return _0x5e0c1c(_0xa0a52e);
        },
        UoTXI: "path"
      };
      if (_0x1a476c == 0) {
        let _0x14b4e9 = "QWERTYUIOPASDFGHJKLZXCVBNM01234567890123456789";
        let _0x404cad = _0x14b4e9.length;
        let _0x4233de = "";
        for (let _0x44ea03 = 0; _0x44ea03 < _0x43c82a; _0x44ea03++) {
          {
            _0x4233de += _0x14b4e9.charAt(Math.floor(Math.random() * _0x404cad));
          }
        }
        return _0x4233de;
      } else {
        if (_0x1a476c == 1) {
          let _0x62c8d7 = "qwertyuiopasdfghjklzxcvbnm0123456789";
          let _0x36242 = _0x62c8d7.length;
          let _0x4ca693 = "";
          for (let _0x2f5ca2 = 0; _0x2f5ca2 < _0x43c82a; _0x2f5ca2++) {
            {
              _0x4ca693 += _0x62c8d7.charAt(Math.floor(Math.random() * _0x36242));
            }
          }
          return _0x4ca693;
        } else {
          {
            let _0x4fdff0 = "0123456789";
            let _0x48b7f0 = _0x4fdff0.length;
            let _0x4b1dac = "";
            for (let _0x465ad4 = 0; _0x465ad4 < _0x43c82a; _0x465ad4++) {
              _0x4b1dac += _0x4fdff0.charAt(Math.floor(Math.random() * _0x48b7f0));
            }
            return _0x4b1dac;
          }
        }
      }
    }
    ["udid"](_0x102561) {
      function _0x1b3167() {
        return ((1 + Math.random()) * 65536 | 0).toString(16).substring(1);
      }
      let _0x5aab6c = _0x1b3167() + _0x1b3167() + "-" + _0x1b3167() + "-" + _0x1b3167() + "-" + _0x1b3167() + "-" + _0x1b3167() + _0x1b3167() + _0x1b3167();
      if (_0x102561 == 0) {
        return _0x5aab6c.toUpperCase();
      } else {
        {
          return _0x5aab6c.toLowerCase();
        }
      }
    }
    ["rtjson"](_0x63f725, _0x507ab5, _0x75f37c, _0x15c748) {
      const _0xa06713 = {
        OQKpl: function (_0x134a9e, _0x3c3f9d) {
          return _0x134a9e(_0x3c3f9d);
        },
        KvcsH: function (_0x425d6e, _0x380c1f) {
          return _0x425d6e + _0x380c1f;
        },
        wFZEO: function (_0x1b5a8f, _0x82ceb4) {
          return _0x1b5a8f !== _0x82ceb4;
        },
        EGOxE: "eNILn",
        MBWEp: "Rbqkl"
      };
      return _0x15c748 == 0 ? JSON.stringify(_0x63f725.split(_0x507ab5).reduce((_0x2fdf17, _0x2ec363) => {
        {
          let _0x1a6c87 = _0x2ec363.split(_0x75f37c);
          _0x2fdf17[_0x1a6c87[0].trim()] = _0x1a6c87[1].trim();
          return _0x2fdf17;
        }
      }, {})) : _0x63f725.split(_0x507ab5).reduce((_0x446d3d, _0xba3833) => {
        let _0x24e8ad = _0xba3833.split(_0x75f37c);
        _0x446d3d[_0x24e8ad[0].trim()] = _0x24e8ad[1].trim();
        return _0x446d3d;
      }, {});
    }
    ["SHA_Encrypt"](_0x4265bc, _0x31268c, _0x377718) {
      {
        if (_0x4265bc == 0) {
          {
            return this.CryptoJS[_0x31268c](_0x377718).toString(this.CryptoJS.enc.Base64);
          }
        } else {
          return this.CryptoJS[_0x31268c](_0x377718).toString();
        }
      }
    }
  }();
}