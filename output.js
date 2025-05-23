//Fri May 23 2025 10:37:52 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
NAME = "泰康在线";
VALY = ["tkzxck"];
CK = "";
LOGS = 0;
usid = 0;
nowhour = Math.round(new Date().getHours()).toString();
Notify = 1;
const 蛋炒饭_0x4642de = require("fs");
const {
  v4: 蛋炒饭_0x16e615
} = require("uuid");
DCFHOST = process.env.DCFHOST;
dcfkey = encodeURIComponent(process.env.dcfkey);
IP = "";
IPCITY = "";
class 蛋炒饭_0x23abe5 {
  constructor(_0x1ffb2b) {
    this._ = ++usid;
    this.f = "小主 [" + this._ + "] ";
    this.memberid = atob(_0x1ffb2b.split("#")[0]);
    this.token = _0x1ffb2b.split("#")[1];
    this.fromid = _0x1ffb2b.split("#")[2];
    this.did = $.SJS(59, 1);
    this.message = "";
    this.logs = true;
  }
  async ["sign"](_0x38ab88) {
    let _0x410ab1 = $.DecryptCrypto("0", "AES", "ECB", "Pkcs7", _0x38ab88, "EEue2kxI0oh2GBJh");
    return _0x410ab1;
  }
  async ["sign2"](_0x2d7f7f) {
    let _0x3d10aa = $.DecryptCrypto2("0", "AES", "ECB", "Pkcs7", _0x2d7f7f, "xdh3OmA5gEMMy0Mz");
    return _0x3d10aa;
  }
  async ["getcoordinate"]() {
    let _0x2b0e7f = {
      "User-Agent": "Apifox/1.0.0 (https://www.apifox.cn)"
    };
    let _0x322fde = await $.task("get", "https://ipapi.co/json", _0x2b0e7f);
    let _0x3ba240 = _0x322fde.longitude + "13" + "," + _0x322fde.latitude + "34";
    return _0x3ba240;
  }
  async ["signin"]() {
    let _0x4d34ef = await this.getcoordinate();
    let _0x1063de = _0x4d34ef.split(",")[0];
    let _0x1d74c6 = _0x4d34ef.split(",")[1];
    let _0x3b07a6 = "{\"memberid\":\"" + this.memberid + "\",\"token\":\"" + this.token + "\",\"unionid\":\"\",\"deviceId\":\"" + this.did + "\",\"fromid\":\"71673\",\"platform\":\"APP\",\"coordinate\":\"" + _0x4d34ef + "\",\"gpsLongitude\":\"" + _0x1063de + "\",\"gpsLatitude\":\"" + _0x1d74c6 + "\",\"os\":\"android\"}";
    let _0x344526 = await this.sign(_0x3b07a6);
    let _0x23431f = "{\"enc\":true,\"encData\":\"" + _0x344526 + "\"}";
    let _0x5bc8d6 = await $.task("post", "https://m.tk.cn/activity_execute/rest/membergoldbean/sign", {}, _0x23431f);
    _0x5bc8d6.error_code == 0 && console.log(this.f + " 签到成功");
  }
  async ["tasklist"]() {
    let _0x422392 = "{\"memberid\":\"" + this.memberid + "\",\"token\":\"" + this.token + "\",\"platform\":\"APP\"}";
    let _0x4d4158 = await this.sign(_0x422392);
    let _0x37c9c8 = "{\"enc\":true,\"encData\":\"" + _0x4d4158 + "\"}";
    let _0x1fdb8b = await $.task("post", "https://m.tk.cn/activity_execute/rest/membergoldbean/queryTask", {}, _0x37c9c8);
    if (_0x1fdb8b.error_code == 0) {
      for (let _0x1a5a46 of _0x1fdb8b.data) {
        {
          if (_0x1a5a46.taskCode == "browse" && _0x1a5a46.statusDesc == "未完成") {
            {
              let _0x5cd048 = _0x1a5a46.viewToken;
              let _0x51b9db = _0x1a5a46.taskName;
              let _0x185c7c = _0x1a5a46.activityId;
              let _0x3b9611 = _0x1a5a46.assignmentId;
              let _0x527506 = _0x1a5a46.assignmentType;
              let _0x304cbd = _0x1a5a46.taskCode;
              await this.view(_0x5cd048, _0x51b9db, _0x185c7c, _0x3b9611, _0x527506, _0x304cbd);
            }
          }
          if (_0x1a5a46.taskCode == "VIEW_MEMBER" && _0x1a5a46.statusDesc == "未完成") {
            let _0xf62779 = _0x1a5a46.viewToken;
            await this.viewvip(_0xf62779);
          }
          if (_0x1a5a46.taskCode == "ANSWER" && _0x1a5a46.statusDesc == "去完成") {
            {
              await this.answer2();
            }
          }
          if (_0x1a5a46.statusDesc == "去完成") {
            let _0xb8fd2c = _0x1a5a46.taskToken;
            let _0x339b0f = _0x1a5a46.taskName;
            let _0x5a21b6 = _0x1a5a46.activityId;
            let _0x5c63dc = _0x1a5a46.assignmentId;
            let _0x5f284c = _0x1a5a46.assignmentType;
            let _0x14f0f5 = _0x1a5a46.taskCode;
            switch (_0x14f0f5) {
              case "CUSTOM_MADE":
              case "BROWSE_ARTICLES":
              case "SHARE_PRODUCT":
                await this.dotask(_0xb8fd2c, _0x339b0f, _0x5a21b6, _0x5c63dc, _0x5f284c, _0x14f0f5);
                break;
              default:
                break;
            }
          }
        }
      }
    }
  }
  async ["view"](_0x1d8f8c, _0x5b0d83, _0x2243b8, _0x55c1f4, _0x2490c0, _0x3f4044) {
    const _0x427d62 = {
      IPIOV: "5|4|1|0|2|3",
      fmkXo: function (_0xa02851, _0x590c62) {
        return _0xa02851(_0x590c62);
      },
      Vnulh: "node-rsa",
      FzSYL: "crypto-js",
      sVPBS: function (_0x46c6fd, _0x11f8bf) {
        return _0x46c6fd(_0x11f8bf);
      },
      kreJy: "request",
      Qwwqn: function (_0xa12c22, _0x5ea8ca) {
        return _0xa12c22(_0x5ea8ca);
      },
      iJExr: "jsrsasign",
      BhXnC: function (_0x3a1f59, _0x23875e) {
        return _0x3a1f59 * _0x23875e;
      },
      EiqqQ: function (_0x342b36, _0x15a51f) {
        return _0x342b36 / _0x15a51f;
      },
      ofzzv: function (_0xcdabb1, _0x5a937e) {
        return _0xcdabb1 + _0x5a937e;
      },
      FOiIV: "post",
      XSLrm: function (_0x5e869c, _0x27e825) {
        return _0x5e869c == _0x27e825;
      },
      BcHuD: function (_0x967f81, _0x5303b2) {
        return _0x967f81 !== _0x5303b2;
      },
      bANwJ: "tQlwZ"
    };
    await this.startview(_0x2243b8, _0x55c1f4, _0x2490c0, _0x3f4044);
    await this.startview2(_0x1d8f8c);
    let _0x40da73 = "{\"memberId\":\"" + this.memberid + "\",\"token\":\"" + this.token + "\",\"platform\":\"WAP\",\"fromId\":\"71673\"}";
    let _0x2bdc28 = await this.sign2(_0x40da73);
    let _0x322eb1 = $.time(13);
    let _0xd7b708 = 60000 * Math.floor(_0x322eb1 / 60000);
    let _0x19a586 = _0x322eb1 + Math.random().toString(36).substr(-8);
    let _0x56655a = $.MD5Encrypt(0, $.MD5Encrypt(0, "zehsmfluqja" + _0x19a586 + _0xd7b708 + "d0ZGEyNGM4MmI3ODZOVE"));
    let _0x4b734a = "{\"clientId\":\"zehsmfluqja\",\"nonStr\":\"" + _0x19a586 + "\",\"timestamp\":\"" + _0x322eb1 + "\",\"sign\":\"" + _0x56655a + "\"}";
    let _0x461f41 = await this.sign2(_0x4b734a);
    let _0x4198aa = {
      signature: _0x461f41,
      authorization: _0x2bdc28
    };
    let _0x60cb17 = "{\"viewToken\":\"" + _0x1d8f8c + "\"}";
    let _0x2f27ab = await $.task("post", "https://f.tk.cn/promotion/net-camp-api/api/callback/browse", _0x4198aa, _0x60cb17);
    if (_0x2f27ab.error_code == 0) {
      {
        console.log(this.f + " " + _0x5b0d83 + _0x2f27ab.data.msg);
      }
    }
  }
  async ["startview2"](_0x374e7c) {
    let _0x21bf89 = await $.task("get", "https://f.tk.cn/tkproperty/nprd/N202200230/?recall=A&sp=1&ct=Y&air=Y&rt=C&source_type=task&browse_duration=13&fromId=71673&viewToken=" + _0x374e7c + "&memberId=" + this.memberid + "&memberToken=" + this.token, {});
    await $.wait(15000, 20000);
  }
  async ["startview"](_0x1b9ae5, _0x54973a, _0x5a714f, _0x555dc3) {
    let _0x3bb9d4 = "{\"memberId\":\"" + this.memberid + "\",\"token\":\"" + this.token + "\",\"eventType\":\"" + _0x555dc3 + "\",\"activityCode\":\"membergoldbean\",\"activityId\":\"" + _0x1b9ae5 + "\",\"assignmentId\":\"" + _0x54973a + "\",\"assignmentType\":\"" + _0x5a714f + "\"}";
    let _0x3a7b54 = await this.sign(_0x3bb9d4);
    let _0x22a320 = "{\"enc\":true,\"encData\":\"" + _0x3a7b54 + "\"}";
    let _0x2fc122 = await $.task("post", "https://m.tk.cn/activity_execute/rest/noseEvent/saveNoseEventLog", {}, _0x22a320);
  }
  async ["viewvip"](_0x30462d) {
    await this.startviewvip();
    let _0x2317f4 = "{\"viewToken\":\"" + _0x30462d + "\",\"memberId\":\"" + this.memberid + "\",\"token\":\"" + this.token + "\",\"platform\":\"APP\",\"deviceId\":\"" + this.did + "\"}";
    let _0xc4469b = await this.sign(_0x2317f4);
    let _0x23f8d1 = "{\"enc\":true,\"encData\":\"" + _0xc4469b + "\"}";
    let _0x303e6d = await $.task("post", "https://m.tk.cn/activity_execute/rest/membergoldbean/viewProductCallback", {}, _0x23f8d1);
    _0x303e6d.error_code == 0 && console.log(this.f + " " + _0x303e6d.data.msg);
  }
  async ["startviewvip"]() {
    let _0x1d6e1c = encodeURIComponent("params={\"memberid\":\"" + this.memberid + "\",\"token\":\"" + this.token + "\",\"platform\":\"APP\",\"fromid\":\"71673\"}");
    let _0x40baa5 = "api_s=member.core&api_m=rightsinform&" + _0x1d6e1c;
    let _0x392c54 = await $.task("post", "https://m.tk.cn/member_api/", {}, _0x40baa5);
    await $.wait(15000, 20000);
  }
  async ["dotask"](_0x2f1a7b, _0x4b7524, _0x44a248, _0x38dd85, _0x13b793, _0x3661ef) {
    await this.startview(_0x44a248, _0x38dd85, _0x13b793, _0x3661ef);
    let _0x1a3a26 = "{\"memberId\":\"" + this.memberid + "\",\"taskToken\":\"" + _0x2f1a7b + "\"}";
    let _0x1aeab6 = await this.sign(_0x1a3a26);
    let _0x46ac8c = "{\"enc\":true,\"encData\":\"" + _0x1aeab6 + "\"}";
    let _0xc204bc = await $.task("post", "https://m.tk.cn/activity_execute/rest/callback/taskCallBack", {}, _0x46ac8c);
    _0xc204bc.error_code == 0 && console.log(this.f + " " + _0x4b7524 + _0xc204bc.data);
  }
  async ["answer"](_0x3f517d) {
    let _0x4f6236 = $.time(13);
    let _0x17da47 = 60000 * Math.floor(_0x4f6236 / 60000);
    let _0x3150fd = _0x4f6236 + Math.random().toString(36).substr(-8);
    let _0x55388f = $.MD5Encrypt(0, $.MD5Encrypt(0, "zehsmfluqja" + _0x3150fd + _0x17da47 + "d0ZGEyNGM4MmI3ODZOVE"));
    let _0x40b51e = "{\"clientId\":\"zehsmfluqja\",\"nonStr\":\"" + _0x3150fd + "\",\"timestamp\":\"" + _0x4f6236 + "\",\"sign\":\"" + _0x55388f + "\"}";
    let _0x5d9954 = await this.sign2(_0x40b51e);
    let _0x25b5fd = {
      signature: _0x5d9954
    };
    let _0x115334 = "{\"memberId\":\"" + this.memberid + "\",\"token\":\"" + this.token + "\",\"unionId\":\"" + _0x3f517d + "\",\"platform\":\"APP\",\"fromId\":\"" + this.fromid + "\",\"nickName\":\"\",\"headUrl\":\"\",\"xcxOpenId\":\"\",\"gzhOpenId\":\"\"}";
    let _0x3c0359 = await this.sign(_0x115334);
    let _0x11de1 = "{\"enc\":true,\"encData\":\"" + _0x3c0359 + "\"}";
    let _0x379224 = await $.task("post", "https://m.tk.cn/promotion/activity_execute/rest/tk/answer/mainPage", _0x25b5fd, _0x11de1);
    if (_0x379224.error_code == 0) {
      {
        let _0x726db7 = _0x379224.data.questionDetail.answer;
        return _0x726db7;
      }
    }
  }
  async ["getunionid"]() {
    let _0x5e5992 = "api_s=member.userbind&api_m=selectwxbindbymemberid&params=%7B%22platform%22%3A%22APP%22%2C%22memberid%22%3A%22" + this.memberid + "%22%2C%22token%22%3A%22" + this.token + "%22%2C%22fromid%22%3A%22" + this.fromid + "%22%7D";
    let _0x4a460d = await $.task("post", "https://m.tk.cn/member_api/", {}, _0x5e5992);
    if (_0x4a460d.code == "sys_success") {
      {
        let _0x5e3f85 = _0x4a460d.data.bindid;
        return _0x5e3f85;
      }
    }
  }
  async ["answer2"]() {
    let _0x5bb743 = await this.getunionid();
    let _0x399ba6 = await this.answer(_0x5bb743);
    let _0x308e9d = $.time(13);
    let _0x21d794 = 60000 * Math.floor(_0x308e9d / 60000);
    let _0x4f0103 = _0x308e9d + Math.random().toString(36).substr(-8);
    let _0x5de702 = $.MD5Encrypt(0, $.MD5Encrypt(0, "zehsmfluqja" + _0x4f0103 + _0x21d794 + "d0ZGEyNGM4MmI3ODZOVE"));
    let _0x5c1d2c = "{\"clientId\":\"zehsmfluqja\",\"nonStr\":\"" + _0x4f0103 + "\",\"timestamp\":\"" + _0x308e9d + "\",\"sign\":\"" + _0x5de702 + "\"}";
    let _0x8c7d6a = await this.sign2(_0x5c1d2c);
    let _0x1a08b7 = {
      signature: _0x8c7d6a
    };
    let _0x51ffed = "{\"memberId\":\"" + this.memberid + "\",\"token\":\"" + this.token + "\",\"result\":\"" + _0x399ba6 + "\",\"deviceId\":\"" + this.did + "\",\"os\":\"android\",\"platform\":\"APP\",\"fromId\":\"" + this.fromid + "\"}";
    let _0x4cadb3 = await this.sign(_0x51ffed);
    let _0x215337 = "{\"enc\":true,\"encData\":\"" + _0x4cadb3 + "\"}";
    let _0x3dc6fb = await $.task("post", "https://m.tk.cn/promotion/activity_execute/rest/tk/answer/answer", _0x1a08b7, _0x215337);
    await this.staranswer();
    await this.dotask2(_0x5bb743);
    await this.dotask3(_0x5bb743);
  }
  async ["staranswer"]() {
    let _0x414cdf = "{\"memberId\":\"" + this.memberid + "\",\"token\":\"" + this.token + "\",\"eventType\":\"ANSWER\",\"activityCode\":\"membergoldbean\"}";
    let _0x19e1bf = await this.sign(_0x414cdf);
    let _0x1c4baf = "{\"enc\":true,\"encData\":\"" + _0x19e1bf + "\"}";
    let _0x5e5d87 = await $.task("post", "https://m.tk.cn/activity_execute/rest/noseEvent/saveNoseEventLog", {}, _0x1c4baf);
  }
  async ["dotask2"](_0x240cee) {
    let _0x3d7407 = $.time(13);
    let _0xb2642e = 60000 * Math.floor(_0x3d7407 / 60000);
    let _0x2d56a2 = _0x3d7407 + Math.random().toString(36).substr(-8);
    let _0xabb74f = $.MD5Encrypt(0, $.MD5Encrypt(0, "zehsmfluqja" + _0x2d56a2 + _0xb2642e + "d0ZGEyNGM4MmI3ODZOVE"));
    let _0x45635c = "{\"clientId\":\"zehsmfluqja\",\"nonStr\":\"" + _0x2d56a2 + "\",\"timestamp\":\"" + _0x3d7407 + "\",\"sign\":\"" + _0xabb74f + "\"}";
    let _0x29f805 = await this.sign2(_0x45635c);
    let _0x447720 = {
      signature: _0x29f805
    };
    let _0x27d5ec = "{\"memberId\":\"" + this.memberid + "\",\"token\":\"" + this.token + "\",\"unionId\":\"" + _0x240cee + "\",\"platform\":\"APP\",\"fromId\":\"" + this.fromid + "\",\"nickName\":\"\",\"headUrl\":\"\",\"xcxOpenId\":\"\",\"gzhOpenId\":\"\"}";
    let _0x4339df = await this.sign(_0x27d5ec);
    let _0x2380d8 = "{\"enc\":true,\"encData\":\"" + _0x4339df + "\"}";
    let _0x2a292e = await $.task("post", "https://m.tk.cn/promotion/activity_execute/rest/tk/answer/getReport", _0x447720, _0x2380d8);
  }
  async ["dotask3"](_0x54a71c) {
    let _0x4062f9 = await this.getcoordinate();
    let _0x33ea6a = "{\"memberid\":\"" + this.memberid + "\",\"token\":\"" + this.token + "\",\"deviceId\":\"" + this.did + "\",\"fromid\":\"" + this.fromid + "\",\"platform\":\"APP\",\"coordinate\":\"" + _0x4062f9 + "\",\"unionid\":\"" + _0x54a71c + "\"}";
    let _0x3dd9a0 = await this.sign(_0x33ea6a);
    let _0x5830aa = "{\"enc\":true,\"encData\":\"" + _0x3dd9a0 + "\"}";
    let _0x7008dc = await $.task("post", "https://m.tk.cn/activity_execute/rest/membergoldbean/mainPage", {}, _0x5830aa);
    _0x7008dc.error_code == 0 && console.log(this.f + " " + _0x7008dc.data.memberGoldbeanTaskToastVos[0].toastMessage);
    console.log(this.f + " 目前金币" + _0x7008dc.data.allbeans);
  }
  async ["userinfo"]() {
    let _0x535239 = await this.getunionid();
    let _0x24ae8b = await this.getcoordinate();
    let _0x32656d = "{\"memberid\":\"" + this.memberid + "\",\"token\":\"" + this.token + "\",\"deviceId\":\"" + this.did + "\",\"fromid\":\"" + this.fromid + "\",\"platform\":\"APP\",\"coordinate\":\"" + _0x24ae8b + "\",\"unionid\":\"" + _0x535239 + "\"}";
    let _0x108208 = await this.sign(_0x32656d);
    let _0x2fba3b = "{\"enc\":true,\"encData\":\"" + _0x108208 + "\"}";
    let _0x33cff2 = await $.task("post", "https://m.tk.cn/activity_execute/rest/membergoldbean/mainPage", {}, _0x2fba3b);
    _0x33cff2.error_code == 0 && (console.log(this.f + " 目前金币" + _0x33cff2.data.allbeans), this.message += this.f + " 目前金币" + _0x33cff2.data.allbeans);
  }
}
$ = 蛋炒饭_0x4db7a7();
!(async () => {
  console.log("正在运行脚本：【" + NAME + "】V1.0.3");
  console.log("📢 请认真阅读以下声明\n 【免责声明】   \n📌 脚本文件仅用于测试和学习研究   \n📌 脚本文件任何人不得用于商业以及非法用途   \n📌 禁止任何公众号、自媒体进行任何形式的转发   \n📌 脚本文件请在下载试用后24小时内自行删除   \n📌 因使用脚本造成软件平台的一切损失皆由使用者承担   \n📌 脚本文件如有不慎被破解或修改由破解或修改者承担   \n📌 如不接受此条款请立即删除脚本文件");
  let _0x5ed544 = await $.getkami();
  let _0xf1ac9b = await $.readUUID();
  if (_0x5ed544.dcfkey) {
    _0x5ed544.Notify != "" && console.log(_0x5ed544.Notify);
    TSdata = $.time(13);
    if (_0x5ed544.MAC == null) {
      console.log("请提交正确的MAC地址后再运行脚本！");
      return;
    } else {
      if (_0x5ed544.MAC != null) {
        {
          if (_0x5ed544.MAC != _0xf1ac9b) {
            let _0x3e4005 = require("path");
            let _0x1fcf87 = _0x3e4005.basename(__filename);
            console.log("本次MAC地址与数据库记录不匹配，停止运行文件[" + _0x1fcf87 + "]");
            return;
          }
        }
      }
    }
    if (_0x5ed544.Delete == 1) {
      {
        let _0x1bcba0 = require("path");
        let _0x28bf78 = _0x1bcba0.basename(__filename);
        console.log("关闭服务器跑路啦，帮你删除脚本文件[" + _0x28bf78 + "]");
        蛋炒饭_0x4642de.unlink(_0x28bf78, _0x24e122 => {});
        return;
      }
    }
    if (TSdata <= _0x5ed544.Data) {
      console.log("尊贵的" + _0x5ed544.UserName + "小主,您的卡密有效期到：" + _0x5ed544.DataTime);
    } else {
      let _0x3107aa = require("path");
      let _0x354006 = _0x3107aa.basename(__filename);
      console.log("卡密已过期，停止运行文件[" + _0x354006 + "]");
      return;
    }
    await $.ExamineCookie();
    $.cookie_list.length < _0x5ed544.xianjin ? (await $.Multithreading("signin"), await $.Multithreading("tasklist"), await $.Multithreading("userinfo")) : console.log("账号数量超过限制，请减少账号数量后重试！");
  } else {
    if (_0x5ed544.message == "更新成功") {
      console.log("数据更新成功，请重新运行脚本");
      return;
    } else {
      let _0xfae14d = require("path");
      let _0x46598d = _0xfae14d.basename(__filename);
      console.log("无效卡密，停止运行文件[" + _0x46598d + "]");
      return;
    }
  }
  let _0x3b0aac = [];
  for (let _0x5d9282 of $.cookie_list) {
    if (_0x5d9282.message) {
      _0x3b0aac.push(_0x5d9282.message);
    }
  }
  if (_0x3b0aac.length > 0) {
    await $.SendMsg(_0x3b0aac.join("\n"));
  }
})().catch(_0x576129 => {
  console.log(_0x576129);
}).finally(() => {});
function 蛋炒饭_0x4db7a7() {
  return new class {
    constructor() {
      this.cookie_list = [];
      this.message = "";
      this.CryptoJS = require("crypto-js");
      this.NodeRSA = require("node-rsa");
      this.request = require("request");
      this.Sha_Rsa = require("jsrsasign");
    }
    async ["Multithreading"](_0x111d3f, _0x961b8f, _0x845329) {
      const _0x30f354 = {
        zoopG: "QWERTYUIOPASDFGHJKLZXCVBNM01234567890123456789",
        MhzBY: function (_0x16aab1, _0x3615e0) {
          return _0x16aab1 < _0x3615e0;
        },
        bIZGO: function (_0x2588fb, _0x5eeccc) {
          return _0x2588fb * _0x5eeccc;
        }
      };
      {
        let _0x4f2589 = [];
        if (!_0x845329) {
          {
            _0x845329 = 1;
          }
        }
        while (_0x845329--) {
          {
            for (let _0x5710c9 of $.cookie_list) {
              {
                _0x4f2589.push(_0x5710c9[_0x111d3f](_0x961b8f));
              }
            }
          }
        }
        await Promise.allSettled(_0x4f2589);
      }
    }
    ["ExamineCookie"]() {
      const _0x448cf6 = {
        iyXEf: function (_0xc0c3fa, _0x5946f7) {
          return _0xc0c3fa * _0x5946f7;
        }
      };
      {
        let _0x2f7fe8 = process.env[VALY] || CK;
        let _0xa279d1 = 0;
        if (_0x2f7fe8) {
          {
            for (let _0x112d45 of _0x2f7fe8.split("\n").filter(_0x384cfb => !!_0x384cfb)) {
              $.cookie_list.push(new 蛋炒饭_0x23abe5(_0x112d45));
            }
            _0xa279d1 = $.cookie_list.length;
          }
        } else {
          console.log("\n【" + NAME + "】：未填写变量: " + VALY);
        }
        console.log("共找到" + _0xa279d1 + "个账号");
        return $.cookie_list;
      }
    }
    ["task"](_0x320a9f, _0xaecf1c, _0x27dff3, _0x334076, _0x18e62e) {
      const _0x221b30 = {
        KMeYe: "1|2|4|3|0",
        XGiut: "Content-Length",
        dEAqa: "content-type",
        nKITn: "Content-type",
        obqkS: "Content-Type",
        eWdKk: "application/json;charset=UTF-8",
        iifqR: "application/x-www-form-urlencoded",
        SjGME: "content-Type",
        GmuOX: function (_0x382ce7, _0x2d8bea) {
          return _0x382ce7 + _0x2d8bea;
        },
        EzUdF: "http://",
        JkJZJ: function (_0x50d1a2, _0x1d72b6) {
          return _0x50d1a2 == _0x1d72b6;
        },
        ZlmtS: function (_0x286794, _0xbc532e) {
          return _0x286794 / _0xbc532e;
        },
        FknjC: function (_0x182f35, _0x583a0b) {
          return _0x182f35 !== _0x583a0b;
        },
        jtqhc: "YZEOs",
        iFfDS: "fbZWb",
        iNSaO: function (_0x5cfdc4, _0x1611e7) {
          return _0x5cfdc4 === _0x1611e7;
        },
        NxzFb: "NmscZ",
        JYshw: "wBXbR",
        VjLuJ: function (_0x1eafc5, _0x520f84) {
          return _0x1eafc5 != _0x520f84;
        },
        hdTFk: function (_0x5da234, _0x2f3e34) {
          return _0x5da234 != _0x2f3e34;
        },
        gmxwt: function (_0x5e5c11, _0x710afa) {
          return _0x5e5c11 !== _0x710afa;
        },
        VNQxn: "srDOP",
        iQuSN: "lRXRH",
        VdqJL: function (_0x2ddc12, _0x48c6dc) {
          return _0x2ddc12 + _0x48c6dc;
        },
        vwgoo: function (_0x302797, _0x3f3c7f) {
          return _0x302797 + _0x3f3c7f;
        },
        RbvXX: "   API请求失败，请检查网络重试\n",
        iRSLn: function (_0x171cac, _0x4083dc) {
          return _0x171cac(_0x4083dc);
        },
        bmnbl: "xdh3OmA5gEMMy0Mz",
        JqRTf: function (_0x5b702b, _0x5d4a29) {
          return _0x5b702b < _0x5d4a29;
        },
        PtuUZ: function (_0x4e2a7b, _0x536a40) {
          return _0x4e2a7b + _0x536a40;
        },
        vmRWz: function (_0x40617a, _0x23cc44) {
          return _0x40617a === _0x23cc44;
        },
        bDFep: "FDPvT",
        mGJWR: function (_0x428c4e, _0x3a900e) {
          return _0x428c4e + _0x3a900e;
        },
        ZCJWe: function (_0x54f7b0, _0x30fa16) {
          return _0x54f7b0 === _0x30fa16;
        },
        VLsLr: "ENenL",
        PonuC: "proxy"
      };
      _0x320a9f == "delete" ? _0x320a9f = _0x320a9f.toUpperCase() : _0x320a9f = _0x320a9f;
      if (_0x320a9f == "post") {
        {
          delete _0x27dff3["content-type"];
          delete _0x27dff3["Content-type"];
          delete _0x27dff3["content-Type"];
          $.safeGet(_0x334076) ? _0x27dff3["Content-Type"] = "application/json;charset=UTF-8" : _0x27dff3["Content-Type"] = "application/x-www-form-urlencoded";
          _0x334076 && (_0x27dff3["Content-Length"] = $.lengthInUtf8Bytes(_0x334076));
        }
      }
      if (_0x320a9f == "get") {
        {
          delete _0x27dff3["content-type"];
          delete _0x27dff3["Content-type"];
          delete _0x27dff3["content-Type"];
          delete _0x27dff3["Content-Length"];
        }
      }
      _0x27dff3.Host = _0xaecf1c.replace("//", "/").split("/")[1];
      return new Promise(async _0x2e1a80 => {
        if (_0x320a9f.indexOf("T") < 0) {
          var _0x408e21 = {
            url: _0xaecf1c,
            headers: _0x27dff3,
            body: _0x334076,
            proxy: "http://" + _0x18e62e
          };
        } else {
          {
            var _0x408e21 = {
              url: _0xaecf1c,
              headers: _0x27dff3,
              form: JSON.parse(_0x334076),
              proxy: "http://" + _0x18e62e
            };
          }
        }
        if (!_0x18e62e) {
          {
            delete _0x408e21.proxy;
          }
        }
        this.request[_0x320a9f.toLowerCase()](_0x408e21, (_0x181a8d, _0x46b814, _0x5d67df) => {
          try {
            _0x5d67df && LOGS == 1 && (console.log("================ 请求 ================"), console.log(_0x408e21), console.log("================ 返回 ================"), $.safeGet(_0x5d67df) ? console.log(JSON.parse(_0x5d67df)) : console.log(_0x5d67df));
          } catch (_0x1d7ff9) {
            console.log(_0x1d7ff9, _0xaecf1c + "\n" + _0x27dff3);
          } finally {
            let _0xe2c12b = "";
            if (!_0x181a8d) {
              if ($.safeGet(_0x5d67df)) {
                _0xe2c12b = JSON.parse(_0x5d67df);
              } else {
                if (_0x5d67df.indexOf("/") != -1 && _0x5d67df.indexOf("+") != -1) {
                  _0xe2c12b = _0x5d67df;
                } else {
                  {
                    _0xe2c12b = _0x5d67df;
                  }
                }
              }
            } else {
              _0xe2c12b = _0xaecf1c + "   API请求失败，请检查网络重试\n" + _0x181a8d;
            }
            return _0x2e1a80(_0xe2c12b);
          }
        });
      });
    }
    async ["readUUID"]() {
      {
        const _0xffa6d5 = "uuid.txt";
        await $.generateUUID(_0xffa6d5);
        try {
          {
            const _0x2cf3c3 = 蛋炒饭_0x4642de.readFileSync(_0xffa6d5, "utf8");
            const _0x3837b0 = _0x2cf3c3.trim();
            return _0x3837b0;
          }
        } catch (_0xa08dcd) {
          {
            return null;
          }
        }
      }
    }
    ["generateUUID"](_0x3f0c4c) {
      const _0x19af92 = {
        yyBYJ: function (_0x2c1075, _0x224e8d) {
          return _0x2c1075 + _0x224e8d;
        },
        lHzvV: function (_0x411cba, _0x543683) {
          return _0x411cba * _0x543683;
        },
        bXTDl: function (_0x3371dc, _0x5ec7e4) {
          return _0x3371dc - _0x5ec7e4;
        },
        Ktcnj: function (_0x131806, _0x47c7df) {
          return _0x131806 === _0x47c7df;
        },
        sNCyc: "aNUdT"
      };
      {
        if (蛋炒饭_0x4642de.existsSync(_0x3f0c4c)) {
          return;
        }
        const _0x4e5181 = 蛋炒饭_0x16e615();
        蛋炒饭_0x4642de.writeFile(_0x3f0c4c, _0x4e5181, "utf8", _0x4f37bb => {
          if (_0x4f37bb) {
            {
              console.error("写入文件出错: " + _0x4f37bb.message);
              return;
            }
          }
        });
      }
    }
    async ["getkami"]() {
      let _0x4d98e3 = await $.readUUID();
      await $.getCurrentIP();
      await $.getIPCITY();
      let _0x15102a = await $.task("get", "http://" + DCFHOST + "/querys?DCFKEY=" + dcfkey + "&MAC=" + _0x4d98e3 + "&JSHOST=" + IP + "&JSCITY=" + IPCITY, {});
      return _0x15102a;
    }
    async ["getIPCITY"]() {
      let _0x301cf2 = await $.task("get", "http://ip-api.com/json/" + IP + "?lang=zh-CN", {});
      let _0x19075f = _0x301cf2.regionName + _0x301cf2.city;
      IPCITY = encodeURIComponent(_0x19075f);
    }
    async ["getCurrentIP"]() {
      let _0x384da5 = await $.task("get", "https://httpbin.org/ip", {});
      IP = _0x384da5.origin;
    }
    async ["SendMsg"](_0x5a9109) {
      if (!_0x5a9109) {
        return;
      }
      if (Notify == 1) {
        var _0x3b655e = require("./sendNotify");
        await _0x3b655e.sendNotify(NAME, _0x5a9109);
      }
    }
    ["lengthInUtf8Bytes"](_0x5342f7) {
      let _0x867ce5 = encodeURIComponent(_0x5342f7).match(/%[89ABab]/g);
      return _0x5342f7.length + (_0x867ce5 ? _0x867ce5.length : 0);
    }
    ["randomArr"](_0x49273c) {
      {
        return _0x49273c[parseInt(Math.random() * _0x49273c.length, 10)];
      }
    }
    ["wait"](_0x3bf11c) {
      return new Promise(_0x4c0740 => setTimeout(_0x4c0740, _0x3bf11c));
    }
    ["time"](_0x365b49) {
      {
        return _0x365b49 == 10 ? Math.round(+new Date() / 1000) : +new Date();
      }
    }
    ["timenow"](_0x4e0e10) {
      let _0x22dc95 = new Date();
      if (_0x4e0e10 == undefined) {
        let _0x318dd3 = new Date();
        let _0x479f98 = _0x318dd3.getFullYear() + "-";
        let _0x320dfb = (_0x318dd3.getMonth() + 1 < 10 ? "0" + (_0x318dd3.getMonth() + 1) : _0x318dd3.getMonth() + 1) + "-";
        let _0xd41816 = _0x318dd3.getDate() + " ";
        let _0x3bffb1 = _0x318dd3.getHours() + ":";
        let _0x48b144 = _0x318dd3.getMinutes() + ":";
        let _0x3bcb80 = _0x318dd3.getSeconds() + 1 < 10 ? "0" + _0x318dd3.getSeconds() : _0x318dd3.getSeconds();
        return _0x479f98 + _0x320dfb + _0xd41816 + _0x3bffb1 + _0x48b144 + _0x3bcb80;
      } else {
        if (_0x4e0e10 == 0) {
          return _0x22dc95.getFullYear();
        } else {
          if (_0x4e0e10 == 1) {
            return _0x22dc95.getMonth() + 1 < 10 ? "0" + (_0x22dc95.getMonth() + 1) : _0x22dc95.getMonth() + 1;
          } else {
            if (_0x4e0e10 == 2) {
              return _0x22dc95.getDate();
            } else {
              if (_0x4e0e10 == 3) {
                return _0x22dc95.getHours();
              } else {
                if (_0x4e0e10 == 4) {
                  return _0x22dc95.getMinutes();
                } else {
                  if (_0x4e0e10 == 5) {
                    return _0x22dc95.getSeconds() + 1 < 10 ? "0" + _0x22dc95.getSeconds() : _0x22dc95.getSeconds();
                  }
                }
              }
            }
          }
        }
      }
    }
    ["safeGet"](_0x1e1285) {
      {
        try {
          if (typeof JSON.parse(_0x1e1285) == "object") {
            return true;
          }
        } catch (_0x3d6846) {
          return false;
        }
      }
    }
    ["SJS"](_0x37e10a, _0x428be6) {
      if (_0x428be6 == 0) {
        let _0x24c235 = "QWERTYUIOPASDFGHJKLZXCVBNM01234567890123456789";
        let _0x2e2a66 = _0x24c235.length;
        let _0x4fa103 = "";
        for (let _0x223b20 = 0; _0x223b20 < _0x37e10a; _0x223b20++) {
          _0x4fa103 += _0x24c235.charAt(Math.floor(Math.random() * _0x2e2a66));
        }
        return _0x4fa103;
      } else {
        if (_0x428be6 == 1) {
          {
            let _0x38fbd0 = "qwertyuiopasdfghjklzxcvbnm0123456789";
            let _0x146130 = _0x38fbd0.length;
            let _0x172ac8 = "";
            for (let _0x42f9bd = 0; _0x42f9bd < _0x37e10a; _0x42f9bd++) {
              _0x172ac8 += _0x38fbd0.charAt(Math.floor(Math.random() * _0x146130));
            }
            return _0x172ac8;
          }
        } else {
          let _0x1cc3fc = "0123456789";
          let _0x4886d7 = _0x1cc3fc.length;
          let _0x533a9a = "";
          for (let _0x2b01a7 = 0; _0x2b01a7 < _0x37e10a; _0x2b01a7++) {
            {
              _0x533a9a += _0x1cc3fc.charAt(Math.floor(Math.random() * _0x4886d7));
            }
          }
          return _0x533a9a;
        }
      }
    }
    ["udid"](_0x22cf9e) {
      {
        function _0x9e4b1d() {
          const _0x26825a = {
            LziwB: function (_0x3f42a2, _0x4b4fb7) {
              return _0x3f42a2(_0x4b4fb7);
            },
            xVJtK: "path"
          };
          {
            return ((1 + Math.random()) * 65536 | 0).toString(16).substring(1);
          }
        }
        let _0x1141f1 = _0x9e4b1d() + _0x9e4b1d() + "-" + _0x9e4b1d() + "-" + _0x9e4b1d() + "-" + _0x9e4b1d() + "-" + _0x9e4b1d() + _0x9e4b1d() + _0x9e4b1d();
        if (_0x22cf9e == 0) {
          {
            return _0x1141f1.toUpperCase();
          }
        } else {
          return _0x1141f1.toLowerCase();
        }
      }
    }
    ["encodeUnicode"](_0x359d00) {
      {
        var _0x5c712f = [];
        for (var _0x7a5bc = 0; _0x7a5bc < _0x359d00.length; _0x7a5bc++) {
          _0x5c712f[_0x7a5bc] = ("00" + _0x359d00.charCodeAt(_0x7a5bc).toString(16)).slice(-4);
        }
        return "\\u" + _0x5c712f.join("\\u");
      }
    }
    ["decodeUnicode"](_0x5cb81f) {
      _0x5cb81f = _0x5cb81f.replace(/\\u/g, "%u");
      return unescape(unescape(_0x5cb81f));
    }
    RT(_0x4d5860, _0xf8c769) {
      return Math.round(Math.random() * (_0xf8c769 - _0x4d5860) + _0x4d5860);
    }
    ["arrNull"](_0x5ff5a4) {
      const _0x2a7395 = {
        PXlhB: function (_0x44afd6, _0x3d4e4b) {
          return _0x44afd6 < _0x3d4e4b;
        },
        IvZfU: function (_0x1f7caa, _0x38f927) {
          return _0x1f7caa + _0x38f927;
        }
      };
      {
        var _0x42bee1 = _0x5ff5a4.filter(_0x2a9fab => {
          {
            return _0x2a9fab && _0x2a9fab.trim();
          }
        });
        return _0x42bee1;
      }
    }
    ["nowtime"]() {
      return new Date(new Date().getTime() + new Date().getTimezoneOffset() * 60 * 1000 + 28800000);
    }
    ["timecs"]() {
      {
        let _0x5ab1a6 = $.nowtime();
        if (JSON.stringify(_0x5ab1a6).indexOf(" ") >= 0) {
          {
            _0x5ab1a6 = _0x5ab1a6.replace(" ", "T");
          }
        }
        return new Date(_0x5ab1a6).getTime() - 28800000;
      }
    }
    ["rtjson"](_0x54b0e6, _0x5dd450, _0x180f98, _0x352688) {
      if (_0x352688 == 0) {
        return JSON.stringify(_0x54b0e6.split(_0x5dd450).reduce((_0x252876, _0x52e881) => {
          {
            let _0x5dea7b = _0x52e881.split(_0x180f98);
            _0x252876[_0x5dea7b[0].trim()] = _0x5dea7b[1].trim();
            return _0x252876;
          }
        }, {}));
      } else {
        {
          return _0x54b0e6.split(_0x5dd450).reduce((_0x1322ad, _0x2df93f) => {
            let _0x113a9d = _0x2df93f.split(_0x180f98);
            _0x1322ad[_0x113a9d[0].trim()] = _0x113a9d[1].trim();
            return _0x1322ad;
          }, {});
        }
      }
    }
    ["MD5Encrypt"](_0x354974, _0x51b5d6) {
      const _0x5bc5a0 = {
        jTMpJ: function (_0x15d090, _0x2e2fa1) {
          return _0x15d090(_0x2e2fa1);
        },
        dTLTP: "path"
      };
      if (_0x354974 == 0) {
        return this.CryptoJS.MD5(_0x51b5d6).toString().toLowerCase();
      } else {
        if (_0x354974 == 1) {
          {
            return this.CryptoJS.MD5(_0x51b5d6).toString().toUpperCase();
          }
        } else {
          if (_0x354974 == 2) {
            {
              return this.CryptoJS.MD5(_0x51b5d6).toString().substring(8, 24).toLowerCase();
            }
          } else {
            if (_0x354974 == 3) {
              {
                return this.CryptoJS.MD5(_0x51b5d6).toString().substring(8, 24).toUpperCase();
              }
            }
          }
        }
      }
    }
    ["SHA_Encrypt"](_0x38e09d, _0x5e9a4d, _0x29de83) {
      {
        return _0x38e09d == 0 ? this.CryptoJS[_0x5e9a4d](_0x29de83).toString(this.CryptoJS.enc.Base64) : this.CryptoJS[_0x5e9a4d](_0x29de83).toString();
      }
    }
    ["HmacSHA_Encrypt"](_0x46d27d, _0x2dab00, _0x24c544, _0x10e57b) {
      return _0x46d27d == 0 ? this.CryptoJS[_0x2dab00](_0x24c544, _0x10e57b).toString(this.CryptoJS.enc.Base64) : this.CryptoJS[_0x2dab00](_0x24c544, _0x10e57b).toString();
    }
    ["Base64"](_0x530399, _0x13fd27) {
      return _0x530399 == 0 ? this.CryptoJS.enc.Base64.stringify(this.CryptoJS.enc.Utf8.parse(_0x13fd27)) : this.CryptoJS.enc.Utf8.stringify(this.CryptoJS.enc.Base64.parse(_0x13fd27));
    }
    ["DecryptCrypto"](_0xa466cd, _0x2302e1, _0x218d10, _0x36dac0, _0xdb91b2, _0x2ee0ba, _0x54f901) {
      {
        if (_0xa466cd == 0) {
          const _0x297ca8 = this.CryptoJS[_0x2302e1].encrypt(this.CryptoJS.enc.Utf8.parse(_0xdb91b2), this.CryptoJS.enc.Utf8.parse(_0x2ee0ba), {
            iv: this.CryptoJS.enc.Utf8.parse(_0x54f901),
            mode: this.CryptoJS.mode[_0x218d10],
            padding: this.CryptoJS.pad[_0x36dac0]
          });
          return _0x297ca8.ciphertext.toString().toUpperCase();
        } else {
          const _0x4426e1 = this.CryptoJS[_0x2302e1].decrypt(_0xdb91b2, this.CryptoJS.enc.Utf8.parse(_0x2ee0ba), {
            iv: this.CryptoJS.enc.Utf8.parse(_0x54f901),
            mode: this.CryptoJS.mode[_0x218d10],
            padding: this.CryptoJS.pad[_0x36dac0]
          });
          return _0x4426e1.toString(this.CryptoJS.enc.Utf8);
        }
      }
    }
    ["DecryptCrypto2"](_0x4c2c07, _0x1b5efe, _0x19333d, _0x35bb6c, _0x5e7398, _0x3516a6, _0x1ec79c) {
      const _0x47f0c1 = this.CryptoJS[_0x1b5efe].encrypt(this.CryptoJS.enc.Utf8.parse(_0x5e7398), this.CryptoJS.enc.Utf8.parse(_0x3516a6), {
        iv: this.CryptoJS.enc.Utf8.parse(_0x1ec79c),
        mode: this.CryptoJS.mode[_0x19333d],
        padding: this.CryptoJS.pad[_0x35bb6c]
      });
      return _0x47f0c1.ciphertext.toString();
    }
    ["RSA"](_0x691fe6, _0x5dcbcb) {
      const _0x31dc4f = require("node-rsa");
      let _0x29e8a0 = new _0x31dc4f("-----BEGIN PUBLIC KEY-----\n" + _0x5dcbcb + "\n-----END PUBLIC KEY-----");
      _0x29e8a0.setOptions({
        encryptionScheme: "pkcs1"
      });
      return _0x29e8a0.encrypt(_0x691fe6, "base64", "utf8");
    }
    ["SHA_RSA"](_0x2fc82e, _0x4e00dc) {
      let _0x221326 = this.Sha_Rsa.KEYUTIL.getKey("-----BEGIN PRIVATE KEY-----\n" + $.getNewline(_0x4e00dc, 76) + "\n-----END PRIVATE KEY-----");
      let _0x334368 = new this.Sha_Rsa.KJUR.crypto.Signature({
        alg: "SHA256withRSA"
      });
      _0x334368.init(_0x221326);
      _0x334368.updateString(_0x2fc82e);
      let _0x8cebae = _0x334368.sign();
      let _0x1f1ec6 = this.Sha_Rsa.hextob64u(_0x8cebae);
      return _0x1f1ec6;
    }
  }();
}