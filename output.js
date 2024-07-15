//Mon Jul 15 2024 04:03:45 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
NAME = "优品淘金";
VALY = ["yptjck"];
CK = "";
LOGS = 0;
usid = 0;
nowhour = Math.round(new Date().getHours()).toString();
Notify = 1;
const 蛋炒饭_0x22ea58 = require("fs"),
  {
    v4: 蛋炒饭_0x2227d8
  } = require("uuid");
DCFHOST = process.env.DCFHOST;
dcfkey = encodeURIComponent(process.env.dcfkey);
IP = "";
IPCITY = "";
class 蛋炒饭_0x82fd21 {
  constructor(_0x1386eb) {
    this._ = ++usid;
    this.f = "账号 [" + this._ + "] ";
    this.phone = $.Base64(0, $.Base64(0, _0x1386eb.split("#")[0]));
    this.pwd = $.Base64(0, $.Base64(0, _0x1386eb.split("#")[1]));
    this.tixian = _0x1386eb.split("#")[2];
    this.message = "";
    this.logs = true;
  }
  async ["login"]() {
    let _0xf5ea3 = $.time(13),
      _0x43021d = $.Base64(0, $.Base64(0, _0xf5ea3 + "xiaoyingujtao")),
      _0x2e8569 = {
        tm: _0xf5ea3,
        sign: _0x43021d
      },
      _0x593e39 = "{\"mobile\":\"" + this.phone + "\",\"password\":\"" + this.pwd + "\"}",
      _0x2a23b4 = await $.task("post", "https://mall.ujtao.com/app_mallapi/user/userLogin", _0x2e8569, _0x593e39);
    if (_0x2a23b4.code == 0) {
      this.authorization = _0x2a23b4.data.token;
      this.logs = true;
      await this.userinfo();
    } else {
      this.logs = false;
    }
  }
  async ["userinfo"]() {
    const _0x4168d1 = {
      authorization: this.authorization
    };
    let _0x1c2a0f = await $.task("get", "https://mall.ujtao.com/app_mallapi/user/userInfo", _0x4168d1);
    if (_0x1c2a0f.code == 0) {
      this.names = _0x1c2a0f.data.nickName;
      console.log("【" + this.names + "】登陆成功==>当前金币" + _0x1c2a0f.data.jbBalance);
      this.message += "【" + this.names + "】登陆成功==>当前金币" + _0x1c2a0f.data.jbBalance;
      if (_0x1c2a0f.data.jbBalance >= 139) {
        if (nowhour == 10 || nowhour == 14 || nowhour == 18) {
          if (this.tixian == 1) {
            await this.txlb();
          } else {
            this.tixian == 2 && (await this.txlb2());
          }
        }
      }
    }
  }
  async ["tasklist"]() {
    const _0x47874b = {
      authorization: this.authorization
    };
    let _0x2c4be0 = await $.task("get", "https://mall.ujtao.com/app_mallapi/mallapp/goldrush/getgoldRushList", _0x47874b);
    for (let _0xb9a03b = 0; _0xb9a03b < _0x2c4be0.data.length; _0xb9a03b++) {
      for (let _0x539935 of _0x2c4be0.data[_0xb9a03b].goldRushList) {
        _0x539935.isComplete == 0 && (this.name = _0x539935.name, this.id = _0x539935.id, await this.task(this.name, this.id), await this.taskfb(this.name, this.id));
      }
    }
  }
  async ["task"](_0x19bfe5, _0x19a929) {
    console.log("【" + this.names + "】完成" + _0x19bfe5 + "任务");
    await $.wait(10000);
  }
  async ["taskfb"](_0x2d9197, _0x5c9548) {
    console.log("【" + this.names + "】完成" + _0x2d9197 + "视频任务");
    await $.wait(10000);
  }
  async ["signtask"]() {
    for (let _0x4d6005 = 0; _0x4d6005 < 4; _0x4d6005++) {
      const _0x4c993b = {
        authorization: this.authorization
      };
      let _0x6dd930 = await $.task("get", "https://mall.ujtao.com/app_mallapi/usersign/sign?signSource=1", _0x4c993b);
      if (_0x6dd930.code == 0) {
        console.log("【" + this.names + "】完成签到任务");
        await $.wait(5000);
        await this.signtaskfb();
      }
    }
  }
  async ["signtaskfb"]() {
    console.log("【" + this.names + "】完成签到视频任务");
    await $.wait(10000);
  }
  async ["txlb"]() {
    await this.tx();
  }
  async tx() {
    const _0x107ba1 = {
      authorization: this.authorization,
      "content-type": "application/json; charset=UTF-8"
    };
    let _0x46144e = "{\"goldAmount\":\"138.00\",\"type\":\"0\",\"withdrawType\":\"0\"}",
      _0x4f26bd = await $.task("post", "https://mall.ujtao.com/app_mallapi/wxAuth/sys2accsNew", _0x107ba1, _0x46144e);
    if (_0x4f26bd.code == 0) {
      console.log("【" + this.names + "】提现成功");
      await $.wait(30000);
      await this.txwc();
    } else {
      console.log("【" + this.names + "】提现失败," + _0x4f26bd.msg);
    }
  }
  async ["txwc"]() {}
  async ["txlb2"]() {
    await this.tx2();
  }
  async ["tx2"]() {
    const _0x3dfa06 = {
      authorization: this.authorization,
      "content-type": "application/json; charset=UTF-8"
    };
    let _0x5db5c9 = "{\"goldAmount\":\"138.00\",\"type\":\"0\",\"withdrawType\":\"0\"}",
      _0x37f994 = await $.task("post", "https://mall.ujtao.com/app_mallapi/alipay/sys2accsNew", _0x3dfa06, _0x5db5c9);
    _0x37f994.code == 0 ? (console.log("【" + this.names + "】提现成功"), await $.wait(30000), await this.txwc()) : console.log("【" + this.names + "】提现失败," + _0x37f994.msg);
  }
}
$ = 蛋炒饭_0x59275f();
!(async () => {
  console.log("正在运行脚本：【" + NAME + "】V1.03");
  console.log("📢 请认真阅读以下声明\n 【免责声明】   \n📌 脚本文件仅用于测试和学习研究   \n📌 脚本文件任何人不得用于商业以及非法用途   \n📌 禁止任何公众号、自媒体进行任何形式的转发   \n📌 脚本文件请在下载试用后24小时内自行删除   \n📌 因使用脚本造成软件平台的一切损失皆由使用者承担   \n📌 脚本文件如有不慎被破解或修改由破解或修改者承担   \n📌 如不接受此条款请立即删除脚本文件");
  let _0x1500d4 = await $.getkami(),
    _0x2caf89 = await $.readUUID();
  if (_0x1500d4.dcfkey) {
    if (_0x1500d4.Notify != "") {
      console.log(_0x1500d4.Notify);
    }
    TSdata = $.time(13);
    if (_0x1500d4.MAC == null) {
      console.log("请提交正确的MAC地址后再运行脚本！");
      return;
    } else {
      if (_0x1500d4.MAC != null) {
        if (_0x1500d4.MAC != _0x2caf89) {
          let _0x100c98 = require("path"),
            _0x440eb5 = _0x100c98.basename(__filename);
          console.log("本次MAC地址与数据库记录不匹配，停止运行文件[" + _0x440eb5 + "]");
          return;
        }
      }
    }
    if (_0x1500d4.Delete == 1) {
      let _0xc4f2af = require("path"),
        _0x350813 = _0xc4f2af.basename(__filename);
      console.log("关闭服务器跑路啦，帮你删除脚本文件[" + _0x350813 + "]");
      蛋炒饭_0x22ea58.unlink(_0x350813, _0x3afcd6 => {});
      return;
    }
    if (TSdata <= _0x1500d4.Data) {
      console.log("尊贵的" + _0x1500d4.UserName + "小主,您的卡密有效期到：" + _0x1500d4.DataTime);
    } else {
      let _0x4e5592 = require("path"),
        _0x441544 = _0x4e5592.basename(__filename);
      console.log("卡密已过期，停止运行文件[" + _0x441544 + "]");
      return;
    }
    await $.ExamineCookie();
    if ($.cookie_list.length < 21) {
      await $.Multithreading("login");
      let _0x4caf39 = $.cookie_list.filter(_0x45389b => _0x45389b.logs == true);
      if (_0x4caf39.length == 0) {
        console.log("Cookie格式错误 或 账号被禁封");
        return;
      } else {
        await $.Multithreading("tasklist");
        await $.Multithreading("signtask");
      }
    } else {
      console.log("账号数量超过限制，请减少账号数量后重试！");
    }
  } else {
    if (_0x1500d4.message == "更新成功") {
      console.log("数据更新成功，请重新运行脚本");
      return;
    } else {
      let _0x159d3d = require("path"),
        _0xda712 = _0x159d3d.basename(__filename);
      console.log("无效卡密，停止运行文件[" + _0xda712 + "]");
      return;
    }
  }
  let _0x3c9417 = [];
  for (let _0x3e39ba of $.cookie_list) {
    if (_0x3e39ba.message) {
      _0x3c9417.push(_0x3e39ba.message);
    }
  }
  if (_0x3c9417.length > 0) {
    await $.SendMsg(_0x3c9417.join("\n"));
  }
})().catch(_0x56ce12 => {
  console.log(_0x56ce12);
}).finally(() => {});
function 蛋炒饭_0x59275f() {
  return new class {
    constructor() {
      this.cookie_list = [];
      this.message = "";
      this.CryptoJS = require("crypto-js");
      this.NodeRSA = require("node-rsa");
      this.request = require("request");
      this.Sha_Rsa = require("jsrsasign");
    }
    async ["Multithreading"](_0x4beac9, _0x4fbe90, _0x16c8e2) {
      let _0x4d0f8b = [];
      if (!_0x16c8e2) {
        _0x16c8e2 = 1;
      }
      while (_0x16c8e2--) {
        for (let _0xc61663 of $.cookie_list) {
          _0x4d0f8b.push(_0xc61663[_0x4beac9](_0x4fbe90));
        }
      }
      await Promise.allSettled(_0x4d0f8b);
    }
    ["ExamineCookie"]() {
      let _0x5a20ef = process.env[VALY] || CK,
        _0x4fdb19 = 0;
      if (_0x5a20ef) {
        for (let _0xf19818 of _0x5a20ef.split("\n").filter(_0x2b514e => !!_0x2b514e)) {
          $.cookie_list.push(new 蛋炒饭_0x82fd21(_0xf19818));
        }
        _0x4fdb19 = $.cookie_list.length;
      } else {
        console.log("\n【" + NAME + "】：未填写变量: " + VALY);
      }
      console.log("共找到" + _0x4fdb19 + "个账号");
      return $.cookie_list;
    }
    ["task"](_0x5db380, _0x52a5fd, _0x43e7b8, _0x4a2343, _0x5bf4ad) {
      if (_0x5db380 == "delete") {
        _0x5db380 = _0x5db380.toUpperCase();
      } else {
        _0x5db380 = _0x5db380;
      }
      if (_0x5db380 == "post") {
        delete _0x43e7b8["content-type"];
        delete _0x43e7b8["Content-type"];
        delete _0x43e7b8["content-Type"];
        $.safeGet(_0x4a2343) ? _0x43e7b8["Content-Type"] = "application/json;charset=UTF-8" : _0x43e7b8["Content-Type"] = "application/x-www-form-urlencoded";
        _0x4a2343 && (_0x43e7b8["Content-Length"] = $.lengthInUtf8Bytes(_0x4a2343));
      }
      _0x5db380 == "get" && (delete _0x43e7b8["content-type"], delete _0x43e7b8["Content-type"], delete _0x43e7b8["content-Type"], delete _0x43e7b8["Content-Length"]);
      _0x43e7b8.Host = _0x52a5fd.replace("//", "/").split("/")[1];
      return new Promise(async _0xb9d926 => {
        if (_0x5db380.indexOf("T") < 0) {
          var _0x4ac3f9 = {
            url: _0x52a5fd,
            headers: _0x43e7b8,
            body: _0x4a2343,
            proxy: "http://" + _0x5bf4ad
          };
        } else {
          var _0x4ac3f9 = {
            url: _0x52a5fd,
            headers: _0x43e7b8,
            form: JSON.parse(_0x4a2343),
            proxy: "http://" + _0x5bf4ad
          };
        }
        !_0x5bf4ad && delete _0x4ac3f9.proxy;
        this.request[_0x5db380.toLowerCase()](_0x4ac3f9, (_0x23f8d8, _0x2ca61a, _0x5b2c8a) => {
          try {
            if (_0x5b2c8a) {
              LOGS == 1 && (console.log("================ 请求 ================"), console.log(_0x4ac3f9), console.log("================ 返回 ================"), $.safeGet(_0x5b2c8a) ? console.log(JSON.parse(_0x5b2c8a)) : console.log(_0x5b2c8a));
            }
          } catch (_0x4b8a22) {
            console.log(_0x4b8a22, _0x52a5fd + "\n" + _0x43e7b8);
          } finally {
            let _0x4ca043 = "";
            if (!_0x23f8d8) {
              if (!("XRDQu" === "jCjUi")) {
                if ($.safeGet(_0x5b2c8a)) {
                  _0x4ca043 = JSON.parse(_0x5b2c8a);
                } else {
                  _0x5b2c8a.indexOf("/") != -1 && _0x5b2c8a.indexOf("+") != -1 ? _0x4ca043 = _0x5b2c8a : _0x4ca043 = _0x5b2c8a;
                }
              }
            } else {
              _0x4ca043 = _0x52a5fd + "   API请求失败，请检查网络重试\n" + _0x23f8d8;
            }
            return _0xb9d926(_0x4ca043);
          }
        });
      });
    }
    async ["readUUID"]() {
      const _0x78581 = "uuid.txt";
      await $.generateUUID(_0x78581);
      try {
        const _0x3c8291 = 蛋炒饭_0x22ea58.readFileSync(_0x78581, "utf8"),
          _0x1facd5 = _0x3c8291.trim();
        return _0x1facd5;
      } catch (_0x34c4) {
        return null;
      }
    }
    ["generateUUID"](_0x1239f3) {
      if (蛋炒饭_0x22ea58.existsSync(_0x1239f3)) {
        return;
      }
      const _0x25de81 = 蛋炒饭_0x2227d8();
      蛋炒饭_0x22ea58.writeFile(_0x1239f3, _0x25de81, "utf8", _0xa90194 => {
        if (_0xa90194) {
          console.error("写入文件出错: " + _0xa90194.message);
          return;
        }
      });
    }
    async ["getkami"]() {
      let _0xba85a0 = await $.readUUID();
      await $.getCurrentIP();
      await $.getIPCITY();
      let _0x18b57b = await $.task("get", "http://" + DCFHOST + "/querys?DCFKEY=" + dcfkey + "&MAC=" + _0xba85a0 + "&JSHOST=" + IP + "&JSCITY=" + IPCITY, {});
      return _0x18b57b;
    }
    async ["getIPCITY"]() {
      let _0x5d54ca = await $.task("get", "http://ip-api.com/json/" + IP + "?lang=zh-CN", {}),
        _0x410197 = _0x5d54ca.regionName + _0x5d54ca.city;
      IPCITY = encodeURIComponent(_0x410197);
    }
    async ["getCurrentIP"]() {
      let _0x320e69 = await $.task("get", "https://httpbin.org/ip", {});
      IP = _0x320e69.origin;
    }
    async ["SendMsg"](_0x27f48e) {
      if (!_0x27f48e) {
        return;
      }
      if (Notify == 1) {
        var _0x4a93a2 = require("./sendNotify");
        await _0x4a93a2.sendNotify(NAME, _0x27f48e);
      }
    }
    ["lengthInUtf8Bytes"](_0x3addad) {
      let _0x2b683f = encodeURIComponent(_0x3addad).match(/%[89ABab]/g);
      return _0x3addad.length + (_0x2b683f ? _0x2b683f.length : 0);
    }
    ["randomArr"](_0x6c508a) {
      return _0x6c508a[parseInt(Math.random() * _0x6c508a.length, 10)];
    }
    ["wait"](_0x17e078) {
      return new Promise(_0x542b52 => setTimeout(_0x542b52, _0x17e078));
    }
    ["time"](_0x25a607) {
      return _0x25a607 == 10 ? Math.round(+new Date() / 1000) : +new Date();
    }
    ["timenow"](_0x3f4da3) {
      let _0x43d425 = new Date();
      if (_0x3f4da3 == undefined) {
        let _0x2ac23f = new Date(),
          _0x1fb6ea = _0x2ac23f.getFullYear() + "-",
          _0x486b60 = (_0x2ac23f.getMonth() + 1 < 10 ? "0" + (_0x2ac23f.getMonth() + 1) : _0x2ac23f.getMonth() + 1) + "-",
          _0x3fc68b = _0x2ac23f.getDate() + " ",
          _0x52f99d = _0x2ac23f.getHours() + ":",
          _0x292778 = _0x2ac23f.getMinutes() + ":",
          _0x67a282 = _0x2ac23f.getSeconds() + 1 < 10 ? "0" + _0x2ac23f.getSeconds() : _0x2ac23f.getSeconds();
        return _0x1fb6ea + _0x486b60 + _0x3fc68b + _0x52f99d + _0x292778 + _0x67a282;
      } else {
        if (_0x3f4da3 == 0) {
          return _0x43d425.getFullYear();
        } else {
          if (_0x3f4da3 == 1) {
            return _0x43d425.getMonth() + 1 < 10 ? "0" + (_0x43d425.getMonth() + 1) : _0x43d425.getMonth() + 1;
          } else {
            if (_0x3f4da3 == 2) {
              return _0x43d425.getDate();
            } else {
              if (_0x3f4da3 == 3) {
                return _0x43d425.getHours();
              } else {
                if (_0x3f4da3 == 4) {
                  return _0x43d425.getMinutes();
                } else {
                  if (_0x3f4da3 == 5) {
                    return _0x43d425.getSeconds() + 1 < 10 ? "0" + _0x43d425.getSeconds() : _0x43d425.getSeconds();
                  }
                }
              }
            }
          }
        }
      }
    }
    ["safeGet"](_0x5c6fa6) {
      try {
        if (typeof JSON.parse(_0x5c6fa6) == "object") {
          return true;
        }
      } catch (_0x114862) {
        return false;
      }
    }
    ["SJS"](_0x5282de, _0x105a55) {
      if (_0x105a55 == 0) {
        let _0x5f2d1b = "QWERTYUIOPASDFGHJKLZXCVBNM01234567890123456789",
          _0x433f23 = _0x5f2d1b.length,
          _0x142474 = "";
        for (let _0x3453fa = 0; _0x3453fa < _0x5282de; _0x3453fa++) {
          _0x142474 += _0x5f2d1b.charAt(Math.floor(Math.random() * _0x433f23));
        }
        return _0x142474;
      } else {
        if (_0x105a55 == 1) {
          let _0x5cc35e = "qwertyuiopasdfghjklzxcvbnm0123456789",
            _0x47a7ce = _0x5cc35e.length,
            _0x2a8363 = "";
          for (let _0x184d9f = 0; _0x184d9f < _0x5282de; _0x184d9f++) {
            _0x2a8363 += _0x5cc35e.charAt(Math.floor(Math.random() * _0x47a7ce));
          }
          return _0x2a8363;
        } else {
          let _0x21d715 = "0123456789",
            _0x5b8069 = _0x21d715.length,
            _0x19ef2f = "";
          for (let _0x50f9a9 = 0; _0x50f9a9 < _0x5282de; _0x50f9a9++) {
            _0x19ef2f += _0x21d715.charAt(Math.floor(Math.random() * _0x5b8069));
          }
          return _0x19ef2f;
        }
      }
    }
    ["udid"](_0x1fb386) {
      function _0x585b15() {
        return ((1 + Math.random()) * 65536 | 0).toString(16).substring(1);
      }
      let _0x4d7e5e = _0x585b15() + _0x585b15() + "-" + _0x585b15() + "-" + _0x585b15() + "-" + _0x585b15() + "-" + _0x585b15() + _0x585b15() + _0x585b15();
      if (_0x1fb386 == 0) {
        return _0x4d7e5e.toUpperCase();
      } else {
        return _0x4d7e5e.toLowerCase();
      }
    }
    ["encodeUnicode"](_0x32e5d0) {
      var _0xf891bc = [];
      for (var _0x1880ed = 0; _0x1880ed < _0x32e5d0.length; _0x1880ed++) {
        _0xf891bc[_0x1880ed] = ("00" + _0x32e5d0.charCodeAt(_0x1880ed).toString(16)).slice(-4);
      }
      return "\\u" + _0xf891bc.join("\\u");
    }
    ["decodeUnicode"](_0x400833) {
      _0x400833 = _0x400833.replace(/\\u/g, "%u");
      return unescape(unescape(_0x400833));
    }
    RT(_0xf10b29, _0x50c227) {
      return Math.round(Math.random() * (_0x50c227 - _0xf10b29) + _0xf10b29);
    }
    ["arrNull"](_0x392203) {
      var _0xb3b7e3 = _0x392203.filter(_0x20c176 => {
        return _0x20c176 && _0x20c176.trim();
      });
      return _0xb3b7e3;
    }
    ["nowtime"]() {
      return new Date(new Date().getTime() + new Date().getTimezoneOffset() * 60 * 1000 + 8 * 60 * 60 * 1000);
    }
    ["timecs"]() {
      let _0x386754 = $.nowtime();
      JSON.stringify(_0x386754).indexOf(" ") >= 0 && (_0x386754 = _0x386754.replace(" ", "T"));
      return new Date(_0x386754).getTime() - 8 * 60 * 60 * 1000;
    }
    ["rtjson"](_0x4dba68, _0x5d8b26, _0xb87c4f, _0x38b1ec) {
      if (_0x38b1ec == 0) {
        return JSON.stringify(_0x4dba68.split(_0x5d8b26).reduce((_0x573cec, _0x2fa637) => {
          let _0x37c9b6 = _0x2fa637.split(_0xb87c4f);
          _0x573cec[_0x37c9b6[0].trim()] = _0x37c9b6[1].trim();
          return _0x573cec;
        }, {}));
      } else {
        return _0x4dba68.split(_0x5d8b26).reduce((_0x528928, _0x33df7b) => {
          let _0x54cbe7 = _0x33df7b.split(_0xb87c4f);
          _0x528928[_0x54cbe7[0].trim()] = _0x54cbe7[1].trim();
          return _0x528928;
        }, {});
      }
    }
    ["MD5Encrypt"](_0x43ae52, _0x128a76) {
      if (_0x43ae52 == 0) {
        return this.CryptoJS.MD5(_0x128a76).toString().toLowerCase();
      } else {
        if (_0x43ae52 == 1) {
          return this.CryptoJS.MD5(_0x128a76).toString().toUpperCase();
        } else {
          if (_0x43ae52 == 2) {
            return this.CryptoJS.MD5(_0x128a76).toString().substring(8, 24).toLowerCase();
          } else {
            if (_0x43ae52 == 3) {
              return this.CryptoJS.MD5(_0x128a76).toString().substring(8, 24).toUpperCase();
            }
          }
        }
      }
    }
    ["SHA_Encrypt"](_0x49d4ba, _0x47138b, _0x2403bd) {
      return _0x49d4ba == 0 ? this.CryptoJS[_0x47138b](_0x2403bd).toString(this.CryptoJS.enc.Base64) : this.CryptoJS[_0x47138b](_0x2403bd).toString();
    }
    ["HmacSHA_Encrypt"](_0x186260, _0x5110c4, _0x2c9c9b, _0x319638) {
      if (_0x186260 == 0) {
        return this.CryptoJS[_0x5110c4](_0x2c9c9b, _0x319638).toString(this.CryptoJS.enc.Base64);
      } else {
        return this.CryptoJS[_0x5110c4](_0x2c9c9b, _0x319638).toString();
      }
    }
    ["Base64"](_0x36181c, _0x4acb5f) {
      return _0x36181c == 0 ? this.CryptoJS.enc.Base64.stringify(this.CryptoJS.enc.Utf8.parse(_0x4acb5f)) : this.CryptoJS.enc.Utf8.stringify(this.CryptoJS.enc.Base64.parse(_0x4acb5f));
    }
    ["DecryptCrypto"](_0x2280c6, _0x42eb5e, _0x4b9bce, _0xe5e3e5, _0x3c90c0, _0x52f074, _0x4b8c2c) {
      if (_0x2280c6 == 0) {
        const _0x6edb1b = this.CryptoJS[_0x42eb5e].encrypt(this.CryptoJS.enc.Utf8.parse(_0x3c90c0), this.CryptoJS.enc.Utf8.parse(_0x52f074), {
          iv: this.CryptoJS.enc.Utf8.parse(_0x4b8c2c),
          mode: this.CryptoJS.mode[_0x4b9bce],
          padding: this.CryptoJS.pad[_0xe5e3e5]
        });
        return _0x6edb1b.toString();
      } else {
        const _0x575e7f = this.CryptoJS[_0x42eb5e].decrypt(_0x3c90c0, this.CryptoJS.enc.Utf8.parse(_0x52f074), {
          iv: this.CryptoJS.enc.Utf8.parse(_0x4b8c2c),
          mode: this.CryptoJS.mode[_0x4b9bce],
          padding: this.CryptoJS.pad[_0xe5e3e5]
        });
        return _0x575e7f.toString(this.CryptoJS.enc.Utf8);
      }
    }
    ["RSA"](_0x1c0d83, _0x5bd2c4) {
      const _0x32cec3 = require("node-rsa");
      let _0x27319b = new _0x32cec3("-----BEGIN PUBLIC KEY-----\n" + _0x5bd2c4 + "\n-----END PUBLIC KEY-----");
      _0x27319b.setOptions({
        encryptionScheme: "pkcs1"
      });
      return _0x27319b.encrypt(_0x1c0d83, "base64", "utf8");
    }
    ["SHA_RSA"](_0x11a9ee, _0x288533) {
      let _0x537962 = this.Sha_Rsa.KEYUTIL.getKey("-----BEGIN PRIVATE KEY-----\n" + $.getNewline(_0x288533, 76) + "\n-----END PRIVATE KEY-----"),
        _0x14508b = new this.Sha_Rsa.KJUR.crypto.Signature({
          alg: "SHA256withRSA"
        });
      _0x14508b.init(_0x537962);
      _0x14508b.updateString(_0x11a9ee);
      let _0x5ef022 = _0x14508b.sign(),
        _0x195aff = this.Sha_Rsa.hextob64u(_0x5ef022);
      return _0x195aff;
    }
  }();
}