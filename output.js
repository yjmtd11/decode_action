//Fri Aug 09 2024 13:45:00 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
NAME = "福田e家";
VALY = ["ftej"];
CK = "";
let _0x4112d9 = process.env.weixinToken,
  _0x1ccbcb = process.env.xqkdddl,
  _0x2f1da1 = "https://czyl.foton.com.cn";
const _0x2806fa = require("crypto"),
  _0x105642 = ["\n", "@"],
  _0x4de0fa = 0;
usid = 0;
class _0x100d8e {
  constructor(_0x1bff23) {
    this.phone = _0x1bff23.split("#")[0];
    this.password = _0x1bff23.split("#")[1];
    this.num = ++usid;
    this.headers = {
      "User-Agent": "web",
      "app-key": "7918d2d1a92a02cbc577adb8d570601e72d3b640",
      "token": "",
      "app-token": "58891364f56afa1b6b7dae3e4bbbdfbfde9ef489"
    };
  }
  async ["hqdl"]() {
    let _0x56cbca = await $.task("get", _0x1ccbcb, {
      "User-Agent": "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Mobile Safari/537.36"
    });
    this.dlip = _0x56cbca.split("\n")[0];
    console.log("账号" + this.num + "：代理IP：" + this.dlip);
  }
  async ["user_task_list"]() {
    await $.wait($.RT(1000, 3000));
    this.weiqiandao == "未签到" && (await this.qiandao());
    await $.wait($.RT(1000, 3000));
    await this.wenzhangleibiao();
    await $.wait($.RT(1000, 3000));
    await this._getText();
  }
  async ["login"]() {
    let _0x5ef747 = encodeURIComponent($.desede(0, this.phone, "fontone-exten@lx100$#365", "20171201")),
      _0x352844 = await this.task("post", _0x2f1da1 + "/ehomes-new/homeManager/getLoginMember", {
        "User-Agent": "okhttp/3.14.9"
      }, "{\"password\":\"" + this.password + "\",\"version_name\":\"7.3.17\",\"version_auth\":\"" + _0x5ef747 + "\",\"device_id\":\"isAppMarket\",\"device_model\":\"RedmiM2012K10C\",\"ip\":\"\",\"name\":\"" + this.phone + "\",\"version_code\":\"308\",\"deviceSystemVersion\":\"14\",\"device_type\":\"0\"}");
    if (_0x352844.code == 200) {
      this.login = true;
      this.num = this.phone;
      this.memberId = _0x352844.data.memberID;
      this.userId = _0x352844.data.uid;
      this.memberId2 = _0x352844.data.memberComplexCode;
      await $.wait(500);
      await this.login22();
    } else {
      this.login = false;
      let _0x317577 = _0x352844.msg;
      console.log("" + _0x317577);
      await this.wxpusher(_0x317577);
    }
  }
  async ["login22"]() {
    let _0x22dc5b = await this.task("post", _0x2f1da1 + "/ehomes-new/homeManager/api/Member/findMemberPointsInfo", this.headers, "{\"memberId\":\"" + this.memberId + "\",\"userId\":\"" + this.userId + "\",\"userType\":\"61\",\"uid\":\"" + this.userId + "\",\"mobile\":\"" + this.phone + "\",\"tel\":\"" + this.phone + "\",\"phone\":\"" + this.phone + "\",\"brandName\":\"\",\"seriesName\":\"\",\"token\":\"ebf76685e48d4e14a9de6fccc76483e3\",\"safeEnc\":" + ($.time(13) - 20216516) + ",\"businessId\":1}");
    if (_0x22dc5b.code == 200) console.log(this.num + " 积分：" + _0x22dc5b.data.pointValue), this.weiqiandao = _0x22dc5b.data.signFlag;else {
      let _0x41bc31 = _0x22dc5b.msg;
      console.log("" + _0x41bc31);
    }
  }
  async ["wxpusher"](_0x4f9777) {
    let _0x49c8fa = {
        "X-Requested-With": "com.tencent.mm",
        "User-Agent": "Dalvik/2.1.0 (Linux; U; Android 13; M2012K11AC Build/TKQ1.220829.002)"
      },
      _0x5524ed = await this.task("get", "https://wxpusher.zjiecode.com/api/send/message/?appToken=" + _0x4112d9.split("#")[0] + "&content=" + encodeURI("" + NAME + _0x4f9777) + "&uid=" + _0x4112d9.split("#")[1], _0x49c8fa);
    _0x5524ed.code == 1000 ? console.log("微信通知" + _0x5524ed.msg) : console.log("微信通知失败");
  }
  async ["qiandao"]() {
    let _0xabec1b = "签到",
      _0x39cf0e = await this.task("post", _0x2f1da1 + "/ehomes-new/homeManager/api/bonus/signActivity2nd", this.headers, "{\"memberId\": \"" + this.memberId2 + "\",\"userId\": \"" + this.userId + "\",\"userType\": \"61\",\"uid\": \"" + this.userId + "\",\"mobile\": \"" + this.phone + "\",\"tel\": \"" + this.phone + "\",\"phone\": \"" + this.phone + "\",\"brandName\": \"\",\"seriesName\": \"\",\"token\": \"ebf76685e48d4e14a9de6fccc76483e3\",\"safeEnc\": " + ($.time(13) - 20216516) + ",\"businessId\": 1}");
    if (_0x39cf0e.code == 200) console.log(_0xabec1b + ":获得" + _0x39cf0e.data.data.integral + "积分");else {
      let _0x17d5fe = _0x39cf0e.msg;
      console.log(_0xabec1b + ":" + _0x17d5fe);
    }
  }
  async ["wenzhangleibiao"]() {
    let _0x9d32ca = "文章列表",
      _0x451810 = await this.task("post", _0x2f1da1 + "/ehomes-new/ehomesCommunity/api/post/recommendPostList", this.headers, "{\"memberId\":\"" + this.memberId + "\",\"userId\":\"" + this.userId + "\",\"userType\":\"61\",\"uid\":\"" + this.userId + "\",\"mobile\":\"" + this.phone + "\",\"tel\":\"" + this.phone + "\",\"phone\":\"" + this.phone + "\",\"brandName\":\"\",\"seriesName\":\"\",\"token\":\"ebf76685e48d4e14a9de6fccc76483e3\",\"safeEnc\":" + ($.time(13) - 20216516) + ",\"businessId\":1,\"position\":\"1\",\"pageNumber\":\"1\",\"pageSize\":9}");
    if (_0x451810.code == 200) {
      let _0x5165c6 = _0x451810.data[0].navyId;
      await this.guanzhu(_0x5165c6);
      await $.wait($.RT(5000, 8000));
      await this.quxiaoguanzhu(_0x5165c6);
    } else {
      let _0x5ceadd = _0x451810.msg;
      console.log(_0x9d32ca + ":" + _0x5ceadd);
    }
  }
  async ["guanzhu"](_0x523056) {
    let _0x3d1c84 = "关注",
      _0x4eb9d3 = await this.task("post", _0x2f1da1 + "/ehomes-new/ehomesCommunity/api/post/follow2nd", this.headers, "{\"memberId\":\"" + this.memberId2 + "\",\"userId\":\"" + this.userId + "\",\"userType\":\"61\",\"uid\":\"" + this.userId + "\",\"mobile\":\"" + this.phone + "\",\"tel\":\"" + this.phone + "\",\"phone\":\"" + this.phone + "\",\"brandName\":\"\",\"seriesName\":\"\",\"token\":\"ebf76685e48d4e14a9de6fccc76483e3\",\"safeEnc\":" + ($.time(13) - 20216516) + ",\"businessId\":1,\"behavior\":\"1\",\"memberIdeds\":null,\"navyId\":\"" + _0x523056 + "\"}");
    if (_0x4eb9d3.code == 200) console.log(this.num + "：" + _0x3d1c84 + "成功");else {
      let _0x4f00a2 = _0x4eb9d3.msg;
      console.log(_0x3d1c84 + ":" + _0x4f00a2);
    }
  }
  async ["quxiaoguanzhu"](_0x40aa42) {
    let _0x4efaef = "取消关注",
      _0x80ed81 = await this.task("post", _0x2f1da1 + "/ehomes-new/ehomesCommunity/api/post/follow2nd", this.headers, "{\"memberId\":\"" + this.memberId2 + "\",\"userId\":\"" + this.userId + "\",\"userType\":\"61\",\"uid\":\"" + this.userId + "\",\"mobile\":\"" + this.phone + "\",\"tel\":\"" + this.phone + "\",\"phone\":\"" + this.phone + "\",\"brandName\":\"\",\"seriesName\":\"\",\"token\":\"ebf76685e48d4e14a9de6fccc76483e3\",\"safeEnc\":" + ($.time(13) - 20216516) + ",\"businessId\":1,\"behavior\":\"2\",\"memberIdeds\":null,\"navyId\":\"" + _0x40aa42 + "\"}");
    if (_0x80ed81.code == 200) console.log(this.num + "：" + _0x4efaef + "成功");else {
      let _0x589551 = _0x80ed81.msg;
      console.log(_0x4efaef + ":" + _0x589551);
    }
  }
  async ["_getText"]() {
    let _0x3ba806 = await this.task("get", "https://v1.hitokoto.cn/?c=e", this.headers),
      _0x6ad6d2 = _0x3ba806.hitokoto;
    await this.fawenzhang(_0x6ad6d2);
  }
  async ["fawenzhang"](_0x2fc4de) {
    let _0x3d36ed = "发表文章",
      _0x5e4bf6 = await this.task("post", _0x2f1da1 + "/ehomes-new/ehomesCommunity/api/post/addJson2nd", this.headers, "{\"memberId\":\"" + this.memberId2 + "\",\"userId\":\"" + this.userId + "\",\"userType\":\"61\",\"uid\":\"" + this.userId + "\",\"mobile\":\"" + this.phone + "\",\"tel\":\"" + this.phone + "\",\"phone\":\"" + this.phone + "\",\"brandName\":\"\",\"seriesName\":\"\",\"token\":\"ebf76685e48d4e14a9de6fccc76483e3\",\"safeEnc\":" + ($.time(13) - 20216516) + ",\"businessId\":1,\"content\":\"" + _0x2fc4de + "\",\"postType\":1,\"topicIdList\":[258],\"uploadFlag\":3,\"title\":\"\",\"urlList\":[]}");
    if (_0x5e4bf6.code == 200) console.log(this.num + "：" + _0x3d36ed + "成功"), await $.wait($.RT(8000, 13000)), await this.fatueleibiao();else {
      let _0x3b6e82 = _0x5e4bf6.msg;
      console.log(_0x3d36ed + ":" + _0x3b6e82);
    }
  }
  async ["fatueleibiao"]() {
    let _0x561a47 = "发帖列表",
      _0x4e36da = await this.task("post", _0x2f1da1 + "/ehomes-new/ehomesCommunity/api/mine/myPost", this.headers, "{\"memberId\":\"" + this.memberId + "\",\"userId\":\"" + this.userId + "\",\"userType\":\"61\",\"uid\":\"" + this.userId + "\",\"mobile\":\"" + this.phone + "\",\"tel\":\"" + this.phone + "\",\"phone\":\"" + this.phone + "\",\"brandName\":\"\",\"seriesName\":\"\",\"token\":\"ebf76685e48d4e14a9de6fccc76483e3\",\"safeEnc\":" + ($.time(13) - 20216516) + ",\"businessId\":1,\"businessId\":1,\"pageNumber\":1,\"pageSize\":10,\"type\":1}");
    if (_0x4e36da.code == 200) {
      await $.wait($.RT(2000, 3000));
      let _0x45ce6d = _0x4e36da.data[0].postId;
      await this.shantue(_0x45ce6d);
    } else {
      let _0x46a245 = _0x4e36da.msg;
      console.log(_0x561a47 + ":" + _0x46a245);
    }
  }
  async ["shantue"](_0x469de9) {
    let _0x44a082 = "删帖",
      _0x339318 = await this.task("post", _0x2f1da1 + "/ehomes-new/ehomesCommunity/api/mine/delete", this.headers, "{\"memberId\":\"" + this.memberId + "\",\"userId\":\"" + this.userId + "\",\"userType\":\"61\",\"uid\":\"" + this.userId + "\",\"mobile\":\"" + this.phone + "\",\"tel\":\"" + this.phone + "\",\"phone\":\"" + this.phone + "\",\"brandName\":\"\",\"seriesName\":\"\",\"token\":\"ebf76685e48d4e14a9de6fccc76483e3\",\"safeEnc\":" + ($.time(13) - 20216516) + ",\"businessId\":1,\"businessId\":1,\"postId\":" + _0x469de9 + "}");
    if (_0x339318.code == 200) console.log(this.num + "：" + _0x339318.msg);else {
      let _0x1ccee0 = _0x339318.msg;
      console.log(_0x44a082 + ":" + _0x1ccee0);
    }
  }
  async ["xinxi"]() {
    let _0xfde1bb = await this.task("post", _0x2f1da1 + "/ehomes-new/homeManager/api/Member/findMemberPointsInfo", this.headers, "{\"memberId\":\"" + this.memberId + "\",\"userId\":\"" + this.userId + "\",\"userType\":\"61\",\"uid\":\"" + this.userId + "\",\"mobile\":\"" + this.phone + "\",\"tel\":\"" + this.phone + "\",\"phone\":\"" + this.phone + "\",\"brandName\":\"\",\"seriesName\":\"\",\"token\":\"ebf76685e48d4e14a9de6fccc76483e3\",\"safeEnc\":" + ($.time(13) - 20216516) + ",\"businessId\":1}");
    if (_0xfde1bb.code == 200) console.log(this.num + " 积分：" + _0xfde1bb.data.pointValue);else {
      let _0x4f5186 = _0xfde1bb.msg;
      console.log("" + _0x4f5186);
    }
  }
  async ["task"](_0x1f3559, _0x140ed1, _0x1d00a5, _0x38cbea) {
    _0x1f3559 == "delete" ? _0x1f3559 = _0x1f3559.toUpperCase() : _0x1f3559 = _0x1f3559;
    const _0xe1f3c3 = require("request");
    if (_0x1f3559 == "post") {
      delete _0x1d00a5["Content-Type"];
      delete _0x1d00a5["content-type"];
      delete _0x1d00a5["Content-Length"];
      delete _0x1d00a5["content-length"];
      $.safeGet(_0x38cbea) ? _0x1d00a5["content-type"] = "application/json;charset=utf-8" : _0x1d00a5["content-type"] = "application/x-www-form-urlencoded";
      _0x38cbea && (_0x1d00a5["content-length"] = $.lengthInUtf8Bytes(_0x38cbea));
    }
    if (_0x1f3559 == "get") {
      delete _0x1d00a5["Content-Type"];
      delete _0x1d00a5["content-length"];
      delete _0x1d00a5["content-type"];
      delete _0x1d00a5["Content-Length"];
    }
    _0x1d00a5.Host = _0x140ed1.replace("//", "/").split("/")[1];
    if (_0x1ccbcb == undefined) {
      if (_0x1f3559.indexOf("T") < 0) var _0x2e0399 = {
        "url": _0x140ed1,
        "headers": _0x1d00a5,
        "body": _0x38cbea,
        "timeout": 20000
      };else {
        var _0x2e0399 = {
          "url": _0x140ed1,
          "headers": _0x1d00a5,
          "form": JSON.parse(_0x38cbea),
          "timeout": 20000
        };
      }
    } else {
      if (_0x1f3559.indexOf("T") < 0) var _0x2e0399 = {
        "url": _0x140ed1,
        "headers": _0x1d00a5,
        "body": _0x38cbea,
        "proxy": "http://" + this.dlip,
        "timeout": 20000
      };else var _0x2e0399 = {
        "url": _0x140ed1,
        "headers": _0x1d00a5,
        "form": JSON.parse(_0x38cbea),
        "proxy": "http://" + this.dlip,
        "timeout": 20000
      };
    }
    return new Promise(async _0x1a50fa => {
      _0xe1f3c3[_0x1f3559.toLowerCase()](_0x2e0399, async (_0x39126f, _0x17d658, _0x521609) => {
        try {
          _0x4de0fa == 1 && (console.log("==================请求=================="), console.log(JSON.stringify(_0x2e0399)), console.log("==================返回=================="), console.log(_0x521609));
        } catch (_0x5ffa57) {} finally {
          return !_0x39126f ? $.safeGet(_0x521609) ? _0x521609 = JSON.parse(_0x521609) : _0x521609 = _0x521609 : _0x1ccbcb == undefined ? (console.log("请检查网络设置"), _0x521609 = JSON.parse("{\"code\":\"99\"}")) : (await this.hqdl(), _0x521609 = await this.task(_0x1f3559, _0x140ed1, _0x1d00a5, _0x38cbea)), _0x1a50fa(_0x521609);
        }
      });
    });
  }
}
$ = _0x385dda();
!(async () => {
  console.log("[" + NAME + "] " + $.timenow(3) + ":" + $.timenow(4) + ":" + $.timenow(5));
  await _0x5bdfcb();
  console.log("📢 请认真阅读以下声明\n    【免责声明】   \n   📌 脚本文件仅用于测试和学习研究   \n   📌 脚本文件任何人不得用于商业以及非法用途   \n   📌 禁止任何公众号、自媒体进行任何形式的转发   \n   📌 脚本文件请在下载试用后24小时内自行删除   \n   📌 因使用脚本造成软件平台的一切损失皆由使用者承担   \n   📌 脚本文件如有不慎被破解或修改由破解或修改者承担   \n   📌 如不接受此条款请立即删除脚本文件");
  await $.ExamineCookie();
  if ($.cookie_list.length > ben) {
    console.log("已超出最大账号数，请重新设置账号数");
    return;
  }
  if (_0x1ccbcb == undefined) {
    console.log("当前使用本地网络运行脚本");
    console.log("\n-------- 用户信息 --------");
    await $.Multithreading("login");
    let _0xad9b29 = $.cookie_list.filter(_0x2a3a72 => _0x2a3a72.login == true);
    if (_0xad9b29.length == 0) {
      console.log("Cookie格式错误 或 账号被禁封");
      return;
    } else console.log("\n-------- 任务列表 --------"), await $.Multithreading("user_task_list"), console.log("\n-------- 运行结果 --------");
    for (let _0x27d5d2 of $.cookie_list) {
      _0x27d5d2.xinxi();
    }
  } else {
    console.log("当前使用代理网络运行脚本");
    await $.Multithreading("hqdl");
    console.log("\n-------- 用户信息 --------");
    await $.Multithreading("login");
    let _0x4af5a7 = $.cookie_list.filter(_0x34c25d => _0x34c25d.login == true);
    if (_0x4af5a7.length == 0) {
      console.log("Cookie格式错误 或 账号被禁封");
      return;
    } else console.log("\n-------- 任务列表 --------"), await $.Multithreading("user_task_list"), console.log("\n-------- 运行结果 --------");
    for (let _0x330ce5 of $.cookie_list) {
      _0x330ce5.xinxi();
    }
  }
})().catch(_0x5348f6 => {
  console.log(_0x5348f6);
}).finally(() => {});
function _0x385dda() {
  return new class {
    constructor() {
      this.cookie_list = [];
      this.message = "";
      this.CryptoJS = require("crypto-js");
      this.NodeRSA = require("node-rsa");
      this.request = require("request");
      this.Sha_Rsa = require("jsrsasign");
    }
    async ["Multithreading"](_0x3a0459, _0x2c1dfe, _0x4e8e20) {
      let _0x33fd98 = [];
      if (!_0x4e8e20) {
        _0x4e8e20 = 1;
      }
      while (_0x4e8e20--) {
        for (let _0x503800 of $.cookie_list) {
          _0x33fd98.push(_0x503800[_0x3a0459](_0x2c1dfe));
        }
      }
      await Promise.allSettled(_0x33fd98);
    }
    ["ExamineCookie"]() {
      let _0xd352e6 = process.env[VALY] || CK,
        _0x33bd2b = 0;
      if (_0xd352e6) {
        for (let _0x27e218 of _0x105642) {
          if (_0xd352e6.includes(_0x27e218)) {
            this.splitor = _0x27e218;
            break;
          }
        }
        for (let _0x180cb9 of _0xd352e6.split(this.splitor).filter(_0xe4edbd => !!_0xe4edbd)) {
          $.cookie_list.push(new _0x100d8e(_0x180cb9));
        }
        _0x33bd2b = $.cookie_list.length;
      } else {
        console.log("\n【" + NAME + "】：未填写变量: " + VALY);
      }
      return console.log("共找到" + _0x33bd2b + "个账号"), $.cookie_list;
    }
    ["task"](_0x4b7554, _0x28b112, _0x558ab7, _0x59ef42, _0x159369) {
      if (_0x4b7554 == "delete") _0x4b7554 = _0x4b7554.toUpperCase();else {
        _0x4b7554 = _0x4b7554;
      }
      if (_0x4b7554 == "post") {
        delete _0x558ab7["content-type"];
        delete _0x558ab7["Content-type"];
        delete _0x558ab7["content-Type"];
        if ($.safeGet(_0x59ef42)) {
          _0x558ab7["Content-Type"] = "application/json;charset=UTF-8";
        } else {
          _0x558ab7["Content-Type"] = "application/x-www-form-urlencoded";
        }
        _0x59ef42 && (_0x558ab7["Content-Length"] = $.lengthInUtf8Bytes(_0x59ef42));
      }
      return _0x4b7554 == "get" && (delete _0x558ab7["content-type"], delete _0x558ab7["Content-type"], delete _0x558ab7["content-Type"], delete _0x558ab7["Content-Length"]), _0x558ab7.Host = _0x28b112.replace("//", "/").split("/")[1], new Promise(async _0x4d5eb8 => {
        if (_0x4b7554.indexOf("T") < 0) var _0x575ee5 = {
          "url": _0x28b112,
          "headers": _0x558ab7,
          "body": _0x59ef42,
          "proxy": "http://" + _0x159369
        };else var _0x575ee5 = {
          "url": _0x28b112,
          "headers": _0x558ab7,
          "form": JSON.parse(_0x59ef42),
          "proxy": "http://" + _0x159369
        };
        if (!_0x159369) {
          delete _0x575ee5.proxy;
        }
        this.request[_0x4b7554.toLowerCase()](_0x575ee5, (_0x1373cd, _0x3c1ae0, _0x3dea29) => {
          try {
            _0x3dea29 && _0x4de0fa == 1 && (console.log("================ 请求 ================"), console.log(_0x575ee5), console.log("================ 返回 ================"), $.safeGet(_0x3dea29) ? console.log(JSON.parse(_0x3dea29)) : console.log(_0x3dea29));
          } catch (_0x32d3dc) {
            console.log(_0x32d3dc, _0x28b112 + "\n" + _0x558ab7);
          } finally {
            let _0x2e4626 = "";
            if (!_0x1373cd) {
              if ($.safeGet(_0x3dea29)) _0x2e4626 = JSON.parse(_0x3dea29);else {
                if (_0x3dea29.indexOf("/") != -1 && _0x3dea29.indexOf("+") != -1) {
                  _0x2e4626 = $.decrypts(_0x3dea29);
                } else _0x2e4626 = _0x3dea29;
              }
            } else _0x2e4626 = _0x28b112 + "   API请求失败，请检查网络重试\n" + _0x1373cd;
            return _0x4d5eb8(_0x2e4626);
          }
        });
      });
    }
    ["task2"](_0x4e7648, _0x17d3c0, _0x7b5c24, _0xdea280, _0x18452a) {
      if (_0x4e7648 == "delete") {
        _0x4e7648 = _0x4e7648.toUpperCase();
      } else {
        _0x4e7648 = _0x4e7648;
      }
      if (_0x4e7648 == "post") {
        delete _0x7b5c24["content-type"];
        delete _0x7b5c24["Content-type"];
        delete _0x7b5c24["content-Type"];
        if ($.safeGet(_0xdea280)) _0x7b5c24["Content-Type"] = "application/json;charset=UTF-8";else {
          _0x7b5c24["Content-Type"] = "application/x-www-form-urlencoded";
        }
        _0xdea280 && (_0x7b5c24["Content-Length"] = $.lengthInUtf8Bytes(_0xdea280));
      }
      _0x4e7648 == "get" && (delete _0x7b5c24["content-type"], delete _0x7b5c24["Content-type"], delete _0x7b5c24["content-Type"], delete _0x7b5c24["Content-Length"]);
      _0x7b5c24.Host = _0x17d3c0.replace("//", "/").split("/")[1];
      if (_0x4e7648.indexOf("T") < 0) var _0x488386 = {
        "url": _0x17d3c0,
        "headers": _0x7b5c24,
        "body": _0xdea280
      };else {
        var _0x488386 = {
          "url": _0x17d3c0,
          "headers": _0x7b5c24,
          "form": JSON.parse(_0xdea280)
        };
      }
      return new Promise(async _0x26db01 => {
        this.request[_0x4e7648.toLowerCase()](_0x488386, (_0x296b39, _0xdc9d09, _0x46ee14) => {
          try {
            if (_0x46ee14) {
              if (_0x4de0fa == 1) {
                console.log("================ 请求 ================");
                console.log(_0x488386);
                console.log("================ 返回 ================");
                if ($.safeGet(_0x46ee14)) {
                  console.log(JSON.parse(_0x46ee14));
                } else console.log(_0x46ee14);
              }
            }
          } catch (_0x4f10e4) {
            console.log(_0x4f10e4, _0x17d3c0 + "\n" + _0x7b5c24);
          } finally {
            let _0x581605 = "";
            if (!_0x296b39) {
              if ($.safeGet(_0x46ee14)) _0x581605 = _0x46ee14;else _0x46ee14.indexOf("/") != -1 && _0x46ee14.indexOf("+") != -1 ? _0x581605 = $.decrypts(_0x46ee14) : _0x581605 = _0x46ee14;
            } else _0x581605 = _0x17d3c0 + "   API请求失败，请检查网络重试\n" + _0x296b39;
            return _0x26db01(_0x581605);
          }
        });
      });
    }
    ["lengthInUtf8Bytes"](_0x448aee) {
      let _0x37d1fb = encodeURIComponent(_0x448aee).match(/%[89ABab]/g);
      return _0x448aee.length + (_0x37d1fb ? _0x37d1fb.length : 0);
    }
    ["randomArr"](_0x4b491e) {
      return _0x4b491e[parseInt(Math.random() * _0x4b491e.length, 10)];
    }
    ["wait"](_0x4075b0) {
      return new Promise(_0x1c4b92 => setTimeout(_0x1c4b92, _0x4075b0));
    }
    ["time"](_0xf7909) {
      return _0xf7909 == 10 ? Math.round(+new Date() / 1000) : +new Date();
    }
    ["timenow"](_0x33b92f) {
      let _0x589de6 = new Date();
      if (_0x33b92f == undefined) {
        let _0x574fea = new Date(),
          _0x5b281b = _0x574fea.getFullYear() + "-",
          _0x37a9c9 = (_0x574fea.getMonth() + 1 < 10 ? "0" + (_0x574fea.getMonth() + 1) : _0x574fea.getMonth() + 1) + "-",
          _0x15aa50 = _0x574fea.getDate() + " ",
          _0x183ac6 = _0x574fea.getHours() + ":",
          _0x825752 = _0x574fea.getMinutes() + ":",
          _0x3f0665 = _0x574fea.getSeconds() + 1 < 10 ? "0" + _0x574fea.getSeconds() : _0x574fea.getSeconds();
        return _0x5b281b + _0x37a9c9 + _0x15aa50 + _0x183ac6 + _0x825752 + _0x3f0665;
      } else {
        if (_0x33b92f == 0) return _0x589de6.getFullYear();else {
          if (_0x33b92f == 1) return _0x589de6.getMonth() + 1 < 10 ? "0" + (_0x589de6.getMonth() + 1) : _0x589de6.getMonth() + 1;else {
            if (_0x33b92f == 2) return _0x589de6.getDate();else {
              if (_0x33b92f == 3) return _0x589de6.getHours();else {
                if (_0x33b92f == 4) return _0x589de6.getMinutes();else {
                  if (_0x33b92f == 5) {
                    return _0x589de6.getSeconds() + 1 < 10 ? "0" + _0x589de6.getSeconds() : _0x589de6.getSeconds();
                  }
                }
              }
            }
          }
        }
      }
    }
    ["safeGet"](_0xdc6db9) {
      try {
        if (typeof JSON.parse(_0xdc6db9) == "object") return true;
      } catch (_0x45df0f) {
        return false;
      }
    }
    ["SJS"](_0x23bdd2, _0xd8aa0f) {
      if (_0xd8aa0f == 0) {
        let _0x1ea58 = "QWERTYUIOPASDFGHJKLZXCVBNM01234567890123456789",
          _0x16ee34 = _0x1ea58.length,
          _0x1b70a9 = "";
        for (let _0x366eb4 = 0; _0x366eb4 < _0x23bdd2; _0x366eb4++) {
          _0x1b70a9 += _0x1ea58.charAt(Math.floor(Math.random() * _0x16ee34));
        }
        return _0x1b70a9;
      } else {
        if (_0xd8aa0f == 1) {
          let _0xf0a42a = "qwertyuiopasdfghjklzxcvbnm0123456789",
            _0x59d91a = _0xf0a42a.length,
            _0x5f49aa = "";
          for (let _0x202035 = 0; _0x202035 < _0x23bdd2; _0x202035++) {
            _0x5f49aa += _0xf0a42a.charAt(Math.floor(Math.random() * _0x59d91a));
          }
          return _0x5f49aa;
        } else {
          let _0x3b83f4 = "0123456789",
            _0x6fe756 = _0x3b83f4.length,
            _0x149055 = "";
          for (let _0x59c210 = 0; _0x59c210 < _0x23bdd2; _0x59c210++) {
            _0x149055 += _0x3b83f4.charAt(Math.floor(Math.random() * _0x6fe756));
          }
          return _0x149055;
        }
      }
    }
    ["udid"](_0x1e8ff2) {
      function _0x72a420() {
        return ((1 + Math.random()) * 65536 | 0).toString(16).substring(1);
      }
      let _0x4983c2 = _0x72a420() + _0x72a420() + "-" + _0x72a420() + "-" + _0x72a420() + "-" + _0x72a420() + "-" + _0x72a420() + _0x72a420() + _0x72a420();
      return _0x1e8ff2 == 0 ? _0x4983c2.toUpperCase() : _0x4983c2.toLowerCase();
    }
    ["encodeUnicode"](_0x5ee5c3) {
      var _0xb18cfd = [];
      for (var _0x2260bf = 0; _0x2260bf < _0x5ee5c3.length; _0x2260bf++) {
        _0xb18cfd[_0x2260bf] = ("00" + _0x5ee5c3.charCodeAt(_0x2260bf).toString(16)).slice(-4);
      }
      return "\\u" + _0xb18cfd.join("\\u");
    }
    ["decodeUnicode"](_0x305a6c) {
      return _0x305a6c = _0x305a6c.replace(/\\u/g, "%u"), unescape(unescape(_0x305a6c));
    }
    ["RT"](_0x3a800a, _0x4a584a) {
      return Math.round(Math.random() * (_0x4a584a - _0x3a800a) + _0x3a800a);
    }
    ["arrNull"](_0x7b3786) {
      var _0x4c95e6 = _0x7b3786.filter(_0x3bc65f => {
        return _0x3bc65f && _0x3bc65f.trim();
      });
      return _0x4c95e6;
    }
    ["nowtime"]() {
      return new Date(new Date().getTime() + new Date().getTimezoneOffset() * 60 * 1000 + 8 * 60 * 60 * 1000);
    }
    ["timecs"]() {
      let _0x54f21f = $.nowtime();
      if (JSON.stringify(_0x54f21f).indexOf(" ") >= 0) {
        _0x54f21f = _0x54f21f.replace(" ", "T");
      }
      return new Date(_0x54f21f).getTime() - 8 * 60 * 60 * 1000;
    }
    ["rtjson"](_0x3411bd, _0x250942, _0x1dc7bc, _0xcb3da9) {
      return _0xcb3da9 == 0 ? JSON.stringify(_0x3411bd.split(_0x250942).reduce((_0x3cca30, _0x3c6071) => {
        let _0x25ed91 = _0x3c6071.split(_0x1dc7bc);
        return _0x3cca30[_0x25ed91[0].trim()] = _0x25ed91[1].trim(), _0x3cca30;
      }, {})) : _0x3411bd.split(_0x250942).reduce((_0x100fdd, _0x5186d0) => {
        let _0x5cd080 = _0x5186d0.split(_0x1dc7bc);
        return _0x100fdd[_0x5cd080[0].trim()] = _0x5cd080[1].trim(), _0x100fdd;
      }, {});
    }
    ["MD5Encrypt"](_0x99bdfd, _0x2de5da) {
      if (_0x99bdfd == 0) {
        return this.CryptoJS.MD5(_0x2de5da).toString().toLowerCase();
      } else {
        if (_0x99bdfd == 1) {
          return this.CryptoJS.MD5(_0x2de5da).toString().toUpperCase();
        } else {
          if (_0x99bdfd == 2) return this.CryptoJS.MD5(_0x2de5da).toString().substring(8, 24).toLowerCase();else {
            if (_0x99bdfd == 3) return this.CryptoJS.MD5(_0x2de5da).toString().substring(8, 24).toUpperCase();
          }
        }
      }
    }
    ["SHA_Encrypt"](_0x1847c5, _0x25db84, _0x4d39ca) {
      if (_0x1847c5 == 0) return this.CryptoJS[_0x25db84](_0x4d39ca).toString(this.CryptoJS.enc.Base64);else {
        return this.CryptoJS[_0x25db84](_0x4d39ca).toString();
      }
    }
    ["HmacSHA_Encrypt"](_0x1e2d94, _0x25da1b, _0x55ab53, _0x4021eb) {
      if (_0x1e2d94 == 0) {
        return this.CryptoJS[_0x25da1b](_0x55ab53, _0x4021eb).toString(this.CryptoJS.enc.Base64);
      } else {
        return this.CryptoJS[_0x25da1b](_0x55ab53, _0x4021eb).toString();
      }
    }
    ["Base64"](_0x2c4d66, _0x47eece) {
      return _0x2c4d66 == 0 ? this.CryptoJS.enc.Base64.stringify(this.CryptoJS.enc.Utf8.parse(_0x47eece)) : this.CryptoJS.enc.Utf8.stringify(this.CryptoJS.enc.Base64.parse(_0x47eece));
    }
    ["DecryptCrypto"](_0x2991d0, _0x4a6eab, _0x578705, _0x1b91a7, _0x25bd5f, _0x16949c, _0x36edb7) {
      if (_0x2991d0 == 0) {
        const _0x569c41 = this.CryptoJS[_0x4a6eab].encrypt(this.CryptoJS.enc.Utf8.parse(_0x25bd5f), this.CryptoJS.enc.Utf8.parse(_0x16949c), {
          "iv": this.CryptoJS.enc.Utf8.parse(_0x36edb7),
          "mode": this.CryptoJS.mode[_0x578705],
          "padding": this.CryptoJS.pad[_0x1b91a7]
        });
        return _0x569c41.toString();
      } else {
        const _0x4c0868 = this.CryptoJS[_0x4a6eab].decrypt(_0x25bd5f, this.CryptoJS.enc.Utf8.parse(_0x16949c), {
          "iv": this.CryptoJS.enc.Utf8.parse(_0x36edb7),
          "mode": this.CryptoJS.mode[_0x578705],
          "padding": this.CryptoJS.pad[_0x1b91a7]
        });
        return _0x4c0868.toString(this.CryptoJS.enc.Utf8);
      }
    }
    ["desede"](_0x1445ac, _0x55977a, _0x111ca6, _0x4a07cf) {
      if (_0x1445ac == 0) {
        const _0x3d6dbe = _0x2806fa.createCipheriv("des-ede3-cbc", _0x111ca6, _0x4a07cf);
        let _0x2401dd = _0x3d6dbe.update(_0x55977a, "utf8", "base64");
        return _0x2401dd += _0x3d6dbe.final("base64"), _0x2401dd;
      } else {
        const _0x54a3e7 = _0x2806fa.createDecipheriv("des-ede3-cbc", _0x111ca6, _0x4a07cf);
        let _0x23075f = _0x54a3e7.update(encrypted, "base64", "utf8");
        return _0x23075f += _0x54a3e7.final("utf8"), _0x23075f;
      }
    }
    ["RSA"](_0x3aaca5, _0x38a56e) {
      const _0x38409f = require("node-rsa");
      let _0xf6c6a6 = new _0x38409f("-----BEGIN PUBLIC KEY-----\n" + _0x38a56e + "\n-----END PUBLIC KEY-----");
      return _0xf6c6a6.setOptions({
        "encryptionScheme": "pkcs1"
      }), _0xf6c6a6.encrypt(_0x3aaca5, "base64", "utf8");
    }
    ["SHA_RSA"](_0x65552e, _0xce7f68) {
      let _0x25ea4c = this.Sha_Rsa.KEYUTIL.getKey("-----BEGIN PRIVATE KEY-----\n" + $.getNewline(_0xce7f68, 76) + "\n-----END PRIVATE KEY-----"),
        _0x4a59ec = new this.Sha_Rsa.KJUR.crypto.Signature({
          "alg": "SHA256withRSA"
        });
      _0x4a59ec.init(_0x25ea4c);
      _0x4a59ec.updateString(_0x65552e);
      let _0x344b24 = _0x4a59ec.sign(),
        _0x57aac7 = this.Sha_Rsa.hextob64u(_0x344b24);
      return _0x57aac7;
    }
  }();
}
async function _0x5cce5a(_0x83cd2c, _0x1995d1) {
  const _0x3adb72 = require("node-rsa");
  let _0x4e738e = new _0x3adb72("-----BEGIN PUBLIC KEY-----\n" + _0x1995d1 + "\n-----END PUBLIC KEY-----");
  return _0x4e738e.setOptions({
    "encryptionScheme": "pkcs1"
  }), _0x4e738e.encrypt(_0x83cd2c, "base64", "utf8");
}
async function _0x5bdfcb() {
  this.url = $.Base64(1, "aHR0cDovLzE4LjE3OS40MC4xNjI=");
  let _0x431332 = await $.task("get", this.url + "/js/hao.json", {
    "User-Agent": "Dalvik/2.1.0 (Linux; U; Android 13; M2012K11AC Build/TKQ1.220829.002)"
  });
  ben = _0x431332[VALY];
  await $.wait(100);
  let _0x153780 = process.env[VALY] || CK,
    _0x1bf421 = _0x153780.split("\n");
  const _0x2fb531 = _0x1bf421.length;
  if (_0x2fb531 > ben) {}
}