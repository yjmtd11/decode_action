//Sun Jul 14 2024 15:13:30 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const 哇哈哈_0x1da92e = new 哇哈哈_0x3eb9d1("捷途汽车");
let 哇哈哈_0x1cd09b = ["\n"],
  哇哈哈_0x4cc203 = 1,
  哇哈哈_0x1e0852,
  哇哈哈_0x29a4aa,
  哇哈哈_0x3d2b99,
  哇哈哈_0x59043e = (哇哈哈_0x1da92e.isNode() ? process.env.jtqcck : 哇哈哈_0x1da92e.getdata("jtqcck")) || "",
  哇哈哈_0x228146 = [],
  哇哈哈_0x27598a = 0,
  哇哈哈_0x1f28f7 = 0;
class 哇哈哈_0x57aedd {
  constructor(_0x19746d) {
    this.index = ++哇哈哈_0x27598a;
    this.name = this.index;
    this.valid = false;
    this.canRead = false;
    try {
      this.param = 哇哈哈_0x1da92e.str2json(_0x19746d);
      this.ckValid = true;
    } catch (_0x1ce347) {
      this.ckValid = false;
      哇哈哈_0x1da92e.logAndNotify("账号[" + this.index + "]CK格式错误");
    }
  }
  async ["get_key"]() {
    try {
      let _0x1a9dbc = "https://uaa-consumer.jetour.com.cn/api/v1/common/secret?access_token=&terminal=3",
        _0x5e2e25 = JSON.stringify({
          algorithm: "aes",
          username: "" + this.param.user,
          terminal: 3
        }),
        _0x398e23 = 哇哈哈_0x97b585(_0x1a9dbc, _0x5e2e25);
      await 哇哈哈_0x1ceaa2("post", _0x398e23);
      delete _0x398e23.headers["X-User-Token"];
      let _0x49d074 = 哇哈哈_0x1e0852;
      if (!_0x49d074) {
        return;
      }
      _0x49d074.status == 200 && (this.key = _0x49d074.data.random, this.iv = _0x49d074.data.iv);
    } catch (_0x4cea18) {
      console.log(_0x4cea18);
    } finally {
      return Promise.resolve(1);
    }
  }
  async ["login"]() {
    await this.get_key();
    try {
      let _0x178627 = this.param.pass + "|" + this.key,
        _0x3fbdb2 = 哇哈哈_0x349bf9(_0x178627, this.key, this.iv),
        _0xdba494 = "https://uaa-consumer.jetour.com.cn/api/v1/uaa/mobile/token/secret?access_token=&terminal=3",
        _0x37c696 = JSON.stringify({
          username: "" + this.param.user,
          password: "" + _0x3fbdb2,
          client_id: "bigapp",
          source: 2,
          deviceModel: "Redmi 22041211AC",
          version: "3.2.27",
          terminal: 3
        }),
        _0x243cde = 哇哈哈_0x97b585(_0xdba494, _0x37c696);
      await 哇哈哈_0x1ceaa2("post", _0x243cde);
      delete _0x243cde.headers["X-User-Token"];
      let _0x3d6cc6 = 哇哈哈_0x1e0852;
      if (!_0x3d6cc6) {
        return;
      }
      this.valid = true;
      this.canRead = true;
      _0x3d6cc6.status == 200 && (哇哈哈_0x1da92e.logAndNotify("账号[" + this.name + "] 登录 " + _0x3d6cc6.message), this.accessToken = _0x3d6cc6.data.accessToken, await 哇哈哈_0x1da92e.wait(哇哈哈_0x254aba(2500, 3500)));
    } catch (_0xaa4bd) {
      console.log(_0xaa4bd);
    } finally {
      return Promise.resolve(1);
    }
  }
  async my() {
    try {
      let _0x48ff62 = "https://mobile-consumer.jetour.com.cn/web/user/current/details?access_token=" + this.accessToken + "&sceneCode=signInScene&jumpUrlType=4&terminal=3",
        _0x2be910 = "",
        _0x16bd42 = 哇哈哈_0x97b585(_0x48ff62, _0x2be910);
      await 哇哈哈_0x1ceaa2("get", _0x16bd42);
      delete _0x16bd42.headers["X-User-Token"];
      let _0x362362 = 哇哈哈_0x1e0852;
      if (!_0x362362) {
        return;
      }
      if (_0x362362.status == 200) {
        哇哈哈_0x1da92e.logAndNotify("账号[" + this.name + "] 手机号 " + 哇哈哈_0x1da92e.phoneNum(_0x362362.data.mobile) + " 当前积分 " + _0x362362.data.payableBalance);
        await 哇哈哈_0x1da92e.wait(哇哈哈_0x254aba(2500, 3500));
      }
    } catch (_0x4b77d8) {
      console.log(_0x4b77d8);
    } finally {
      return Promise.resolve(1);
    }
  }
  async ["signin"]() {
    try {
      let _0x215208 = "https://mobile-consumer.jetour.com.cn/web/task/tasks/event-start?access_token=" + this.accessToken,
        _0x588d7d = "{\"eventCode\":\"SJ50001\"}",
        _0x4f2782 = 哇哈哈_0x3acf3a(_0x215208, _0x588d7d);
      await 哇哈哈_0x1ceaa2("post", _0x4f2782);
      let _0x35911b = 哇哈哈_0x1e0852;
      if (!_0x35911b) {
        return;
      }
      if (_0x35911b.status == 200) {
        哇哈哈_0x1da92e.logAndNotify("账号[" + this.name + "] 签到 " + _0x35911b.message);
        await 哇哈哈_0x1da92e.wait(哇哈哈_0x254aba(2500, 3500));
      }
    } catch (_0x552e2f) {
      console.log(_0x552e2f);
    } finally {
      return Promise.resolve(1);
    }
  }
  async ["tasklist"]() {
    try {
      let _0x5c3802 = "https://mobile-consumer.jetour.com.cn/web/taskCenter/task/userTaskDetails?access_token=" + this.accessToken + "&type=2&terminal=4",
        _0x225a71 = "",
        _0x167231 = 哇哈哈_0x3acf3a(_0x5c3802, _0x225a71);
      await 哇哈哈_0x1ceaa2("get", _0x167231);
      let _0x42ff6f = 哇哈哈_0x1e0852;
      if (!_0x42ff6f) {
        return;
      }
      if (_0x42ff6f.status == 200) {
        let _0x276b29 = _0x42ff6f.data;
        for (const _0x33989a of _0x276b29) {
          this.task_name = _0x33989a.taskName;
          this.taskDesc = _0x33989a.taskDesc;
          if (_0x33989a.status == 0) {
            if (_0x33989a.taskId == "3258942637843092243") {
              哇哈哈_0x1da92e.logAndNotify("账号[" + this.name + "] " + this.task_name + "，" + this.taskDesc);
              await this.share();
            }
            _0x33989a.taskId == "3490215906494491823" && (哇哈哈_0x1da92e.logAndNotify("账号[" + this.name + "] " + this.task_name + "，" + this.taskDesc), await this.browse());
            if (_0x33989a.taskId == "3528862881217388025") {
              哇哈哈_0x1da92e.logAndNotify("账号[" + this.name + "] " + this.task_name + "，" + this.taskDesc);
              await this.publish();
            }
          } else {
            哇哈哈_0x1da92e.logAndNotify("账号[" + this.name + "] " + this.task_name + ": 已完成");
          }
        }
      }
    } catch (_0x37cc01) {
      console.log(_0x37cc01);
    } finally {
      return Promise.resolve(1);
    }
  }
  async ["tz_list"]() {
    try {
      let _0x385e3e = 哇哈哈_0x254aba(2, 20),
        _0x91d336 = "https://mobile-consumer.jetour.com.cn/web/community/contents/hot-content?pageNo=" + _0x385e3e + "&pageSize=10&access_token=" + this.accessToken + "&terminal=3",
        _0x12ab82 = "",
        _0x97efcd = 哇哈哈_0x97b585(_0x91d336, _0x12ab82);
      await 哇哈哈_0x1ceaa2("get", _0x97efcd);
      delete _0x97efcd.headers["X-User-Token"];
      let _0x132fe3 = 哇哈哈_0x1e0852;
      if (!_0x132fe3) {
        return;
      }
      if (_0x132fe3.status == 200) {
        let _0x4c76b = 哇哈哈_0x254aba(0, 9);
        this.contentId = _0x132fe3.data.data[_0x4c76b].content2cVO.id;
      }
    } catch (_0x44b8d8) {
      console.log(_0x44b8d8);
    } finally {
      return Promise.resolve(1);
    }
  }
  async ["share_award"]() {
    try {
      let _0x1986dc = "https://mobile-consumer.jetour.com.cn/web/event/event-instances?access_token=" + this.accessToken + "&terminal=3",
        _0x11bc12 = "{\"eventCode\":\"SJ50015\",\"properties\":{\"share_content_id\":\"" + this.contentId + "\"},\"terminal\":3}",
        _0x5b968a = 哇哈哈_0x97b585(_0x1986dc, _0x11bc12);
      await 哇哈哈_0x1ceaa2("post", _0x5b968a);
      delete _0x5b968a.headers["X-User-Token"];
      let _0x19be76 = 哇哈哈_0x1e0852;
      if (!_0x19be76) {
        return;
      }
      if (_0x19be76.status == 200) {
        let _0x59cd1b = Math.floor(Math.random() * 6000) + 8000;
        哇哈哈_0x1da92e.logAndNotify("账号[" + this.name + "] 分享奖励 " + _0x19be76.message + " 随机等待" + _0x59cd1b / 1000 + "秒");
        await 哇哈哈_0x1da92e.wait(_0x59cd1b);
      }
    } catch (_0x587a9e) {
      console.log(_0x587a9e);
    } finally {
      return Promise.resolve(1);
    }
  }
  async ["share"]() {
    await this.tz_list();
    try {
      let _0x33d39a = "https://mobile-consumer.jetour.com.cn/web/community/contents/sharing?access_token=" + this.accessToken + "&terminal=3",
        _0x243247 = "{\"contentId\":\"" + this.contentId + "\",\"contentType\":\"动态\",\"shareType\":\"微信好友\",\"terminal\":3}",
        _0x4c2d20 = 哇哈哈_0x97b585(_0x33d39a, _0x243247);
      await 哇哈哈_0x1ceaa2("post", _0x4c2d20);
      delete _0x4c2d20.headers["X-User-Token"];
      let _0x5c4193 = 哇哈哈_0x1e0852;
      if (!_0x5c4193) {
        return;
      }
      if (_0x5c4193.status == 200) {
        let _0x43634f = Math.floor(Math.random() * 6000) + 8000;
        哇哈哈_0x1da92e.logAndNotify("账号[" + this.name + "] 分享 " + _0x5c4193.message + " 随机等待" + _0x43634f / 1000 + "秒");
        await 哇哈哈_0x1da92e.wait(_0x43634f);
        await this.share_award();
      }
    } catch (_0x418a48) {
      console.log(_0x418a48);
    } finally {
      return Promise.resolve(1);
    }
  }
  async ["browse"]() {
    await this.tz_list();
    try {
      let _0x2baf8d = "https://mobile-consumer.jetour.com.cn/web/community/contents/" + this.contentId + "?pvFlag=true&outApp=0&access_token=" + this.accessToken + "&terminal=3",
        _0x1ff089 = "",
        _0x2d2841 = 哇哈哈_0x97b585(_0x2baf8d, _0x1ff089);
      await 哇哈哈_0x1ceaa2("get", _0x2d2841);
      delete _0x2d2841.headers["X-User-Token"];
      let _0x7be437 = 哇哈哈_0x1e0852;
      if (!_0x7be437) {
        return;
      }
      if (_0x7be437.status == 200) {
        let _0x3d7ad9 = Math.floor(Math.random() * 6000) + 26000;
        哇哈哈_0x1da92e.logAndNotify("账号[" + this.name + "] 浏览帖子 " + _0x7be437.message + " 随机等待" + _0x3d7ad9 / 1000 + "秒");
        this.content_user_id = _0x7be437.data.authorId;
        this.content_user_name = _0x7be437.data.authorName;
        this.content_title = _0x7be437.data.title;
        this.content_duration = Math.floor(_0x3d7ad9 / 1000);
        await 哇哈哈_0x1da92e.wait(_0x3d7ad9);
        await this.browse_award();
      }
    } catch (_0x28d03c) {
      console.log(_0x28d03c);
    } finally {
      return Promise.resolve(1);
    }
  }
  async ["browse_award"]() {
    try {
      let _0x3bca4a = Math.round(new Date().getTime()).toString(),
        _0x4e8aea = "https://mobile-consumer.jetour.com.cn/web/event/event-instances?access_token=" + this.accessToken + "&terminal=3",
        _0x4557e5 = "{\"eventCode\":\"SJ50006\",\"properties\":{\"content_user_id\":\"" + this.content_user_id + "\",\"content_user_name\":\"" + this.content_user_name + "\",\"content_id\":\"" + this.contentId + "\",\"content_title\":\"" + this.content_title + "\",\"content_view_time\":" + _0x3bca4a + ",\"content_duration\":" + this.content_duration + "},\"terminal\":3}",
        _0x4cd1a8 = 哇哈哈_0x97b585(_0x4e8aea, _0x4557e5);
      await 哇哈哈_0x1ceaa2("post", _0x4cd1a8);
      delete _0x4cd1a8.headers["X-User-Token"];
      let _0x351834 = 哇哈哈_0x1e0852;
      if (!_0x351834) {
        return;
      }
      if (_0x351834.status == 200) {
        let _0x1521d1 = Math.floor(Math.random() * 6000) + 8000;
        哇哈哈_0x1da92e.logAndNotify("账号[" + this.name + "] 浏览奖励 " + _0x351834.message + " 随机等待" + _0x1521d1 / 1000 + "秒");
        await 哇哈哈_0x1da92e.wait(_0x1521d1);
      }
    } catch (_0x16ff25) {
      console.log(_0x16ff25);
    } finally {
      return Promise.resolve(1);
    }
  }
  async ["hitokoto"]() {
    try {
      let _0x208041 = "",
        _0x1f9e51 = "https://v2.jinrishici.com/sentence",
        _0x508272 = 哇哈哈_0x97b585(_0x1f9e51, _0x208041);
      await 哇哈哈_0x1ceaa2("get", _0x508272);
      let _0x5915d1 = 哇哈哈_0x1e0852;
      if (!_0x5915d1) {
        return;
      }
      _0x5915d1.status == "success" && (this.content_text = _0x5915d1.data.content, this.content_tt = _0x5915d1.data.origin.title);
    } catch (_0x4d5a8f) {
      console.log(_0x4d5a8f);
    } finally {}
  }
  async ["green_check"]() {
    await this.hitokoto();
    try {
      let _0x2537bc = "https://mobile-consumer.jetour.com.cn/web/community/common/green/check?access_token=" + this.param.access_token + "&terminal=3",
        _0xc399e7 = "{\"text\":\"" + this.content_tt + this.content_text + "\",\"imageUrls\":[],\"bizCode\":\"dynamic\",\"terminal\":3}",
        _0x3ca5c1 = 哇哈哈_0x97b585(_0x2537bc, _0xc399e7);
      await 哇哈哈_0x1ceaa2("post", _0x3ca5c1);
      delete _0x3ca5c1.headers["X-User-Token"];
      let _0xde9241 = 哇哈哈_0x1e0852;
      if (!_0xde9241) {
        return;
      }
      _0xde9241.status == 200 && (哇哈哈_0x1da92e.logAndNotify("账号[" + this.name + "] 绿色检查 " + _0xde9241.message), await 哇哈哈_0x1da92e.wait(1500), await this.word_check());
    } catch (_0x33c514) {
      console.log(_0x33c514);
    } finally {
      return Promise.resolve(1);
    }
  }
  async ["word_check"]() {
    try {
      let _0x2116d7 = "https://mobile-consumer.jetour.com.cn/web/community/common/sensitive-word/check?access_token=" + this.param.access_token + "&terminal=3",
        _0x5c5b4f = "{\"text\":\"" + this.content_tt + this.content_text + "\",\"terminal\":3}",
        _0x511048 = 哇哈哈_0x97b585(_0x2116d7, _0x5c5b4f);
      await 哇哈哈_0x1ceaa2("post", _0x511048);
      delete _0x511048.headers["X-User-Token"];
      let _0xfa787f = 哇哈哈_0x1e0852;
      if (!_0xfa787f) {
        return;
      }
      if (_0xfa787f.status == 200) {
        哇哈哈_0x1da92e.logAndNotify("账号[" + this.name + "] 严格检查 " + _0xfa787f.message);
        await 哇哈哈_0x1da92e.wait(1500);
        await this.publish();
      }
    } catch (_0x2292db) {
      console.log(_0x2292db);
    } finally {
      return Promise.resolve(1);
    }
  }
  async ["publish"]() {
    try {
      let _0x5b4f19 = "https://mobile-consumer.jetour.com.cn/web/event/event-instances?access_token=" + this.accessToken + "&terminal=3",
        _0x26c54d = JSON.stringify({
          contentType: 7,
          title: "" + this.content_tt,
          longitude: "",
          latitude: "",
          geoPosition: "",
          groupIds: [],
          detail: "[{\"type\":0,\"content\":\"" + this.content_text + "\"}]",
          index: "",
          topicIds: [],
          mentionedIds: [],
          activityId: "",
          activityName: "",
          terminal: 3
        }),
        _0x424342 = 哇哈哈_0x97b585(_0x5b4f19, _0x26c54d);
      await 哇哈哈_0x1ceaa2("post", _0x424342);
      delete _0x424342.headers["X-User-Token"];
      let _0x17360c = 哇哈哈_0x1e0852;
      if (!_0x17360c) {
        return;
      }
      console.log(_0x424342);
      console.log(_0x17360c);
      if (_0x17360c.status == 200) {
        哇哈哈_0x1da92e.logAndNotify("账号[" + this.name + "] 发帖 " + _0x17360c.message);
      }
    } catch (_0x396562) {
      console.log(_0x396562);
    } finally {
      return Promise.resolve(1);
    }
  }
}
!(async () => {
  if (!(typeof $request !== "undefined")) {
    if (!(await 哇哈哈_0x537d38())) {
      return;
    }
    let _0x37cf3d = [],
      _0x29f53b = 哇哈哈_0x228146.filter(_0x41eea8 => _0x41eea8.ckValid);
    if (_0x29f53b.length > 0 && _0x29f53b.length < 4) {
      哇哈哈_0x1da92e.logAndNotify("\n-------------- 账号检测 --------------");
      _0x37cf3d = [];
      for (let _0x4993a3 of _0x29f53b) {
        _0x37cf3d.push(_0x4993a3.login());
      }
      await Promise.all(_0x37cf3d);
      _0x29f53b = _0x29f53b.filter(_0x433b9a => _0x433b9a.valid);
      哇哈哈_0x1da92e.logAndNotify("\n--------------用户信息 --------------");
      _0x37cf3d = [];
      for (let _0x142ad3 of _0x29f53b.filter(_0x413003 => _0x413003.canRead)) {
        _0x37cf3d.push(_0x142ad3.my());
      }
      await Promise.all(_0x37cf3d);
      哇哈哈_0x1da92e.logAndNotify("\n-------------- 每日签到 --------------");
      _0x37cf3d = [];
      for (let _0x37392d of _0x29f53b.filter(_0x4042b3 => _0x4042b3.canRead)) {
        _0x37cf3d.push(_0x37392d.signin());
      }
      await Promise.all(_0x37cf3d);
      哇哈哈_0x1da92e.logAndNotify("\n-------------- 任务列表 --------------");
      _0x37cf3d = [];
      for (let _0x2373b9 of _0x29f53b.filter(_0x18b001 => _0x18b001.canRead)) {
        _0x37cf3d.push(_0x2373b9.tasklist());
      }
      await Promise.all(_0x37cf3d);
    } else {
      哇哈哈_0x1da92e.logAndNotify("账号数量超过限制，请减少账号后再跑脚本");
    }
    await 哇哈哈_0x1da92e.showmsg();
  }
})().catch(_0x3080a4 => console.log(_0x3080a4)).finally(() => 哇哈哈_0x1da92e.done());
function 哇哈哈_0x349bf9(_0x2353a4, _0x3a4311, _0x53f2ef) {
  const _0x2cea31 = require("crypto-js");
  _0x3a4311 = _0x2cea31.enc.Utf8.parse(_0x3a4311);
  _0x53f2ef = _0x2cea31.enc.Utf8.parse(_0x53f2ef);
  let _0x113c88 = _0x2cea31.enc.Utf8.parse(_0x2353a4),
    _0x4500b0 = _0x2cea31.AES.encrypt(_0x113c88, _0x3a4311, {
      iv: _0x53f2ef,
      mode: _0x2cea31.mode.CBC,
      padding: _0x2cea31.pad.Pkcs7
    });
  return _0x4500b0 + "";
}
function 哇哈哈_0x254aba(_0x33f878, _0x4788fe) {
  const _0x342c50 = {
    KtqOR: function (_0x4c0a2d, _0x5866c1) {
      const _0x4653fd = {};
      _0x4653fd.ghbgN = function (_0x2e4db5, _0x72e1eb) {
        return _0x2e4db5 == _0x72e1eb;
      };
      return _0x4c0a2d + _0x5866c1;
    },
    MIDZX: function (_0x5d61d3, _0x58a85a) {
      const _0x2a6fdd = {};
      _0x2a6fdd.tcoZG = function (_0x43cba0, _0x55fad2, _0x2ad793) {
        return _0x43cba0(_0x55fad2, _0x2ad793);
      };
      _0x2a6fdd.mqBEN = "oiTw";
      _0x2a6fdd.EALSA = function (_0x36e3ad, _0x2b2814, _0x45de76) {
        return _0x36e3ad(_0x2b2814, _0x45de76);
      };
      _0x2a6fdd.NMWkI = "4Ogk";
      _0x2a6fdd.pSfLe = function (_0x294fb6, _0x2f7089, _0x383106) {
        return _0x294fb6(_0x2f7089, _0x383106);
      };
      _0x2a6fdd.XEQuB = "n*t8";
      return _0x5d61d3 * _0x58a85a;
    },
    qrlKS: function (_0x596be8, _0x30b3a4) {
      return _0x596be8 + _0x30b3a4;
    },
    PSAtV: function (_0x14bf6c, _0x4ad0ff) {
      const _0x56694a = {};
      _0x56694a.bsIEv = function (_0x40cd4f, _0x408a5f, _0x45e492) {
        return _0x40cd4f(_0x408a5f, _0x45e492);
      };
      _0x56694a.KkYNc = "a2#O";
      _0x56694a.wMXmS = function (_0x5efa1b, _0x49d35a, _0x411b51) {
        return _0x5efa1b(_0x49d35a, _0x411b51);
      };
      _0x56694a.rsDBm = "M27E";
      _0x56694a.HOgGo = "uWpp";
      _0x56694a.MjgxL = function (_0x3e49e8, _0x368cb2, _0x436581) {
        return _0x3e49e8(_0x368cb2, _0x436581);
      };
      _0x56694a.CheEC = "iifn";
      _0x56694a.KlHpD = "R2zj";
      _0x56694a.OZXDz = function (_0x5846d0, _0x5c5d74, _0x4b4259) {
        return _0x5846d0(_0x5c5d74, _0x4b4259);
      };
      _0x56694a.iCwBb = "q!HK";
      return _0x14bf6c - _0x4ad0ff;
    }
  };
  _0x33f878 = Math.ceil(_0x33f878);
  _0x4788fe = Math.floor(_0x4788fe);
  return _0x342c50.KtqOR(Math.floor(_0x342c50.MIDZX(Math.random(), _0x342c50.qrlKS(_0x342c50.PSAtV(_0x4788fe, _0x33f878), 1))), _0x33f878);
}
async function 哇哈哈_0x31898c() {
  try {
    let _0x20f3fb = "https://v1.jinrishici.com/all.json",
      _0x241946 = "",
      _0x3cbe67 = 哇哈哈_0x97b585(_0x20f3fb, _0x241946);
    await 哇哈哈_0x1ceaa2("get", _0x3cbe67);
    let _0x4328d2 = 哇哈哈_0x1e0852;
    if (!_0x4328d2) {
      return;
    }
    哇哈哈_0x1da92e.logAndNotify("\n" + _0x4328d2.content + "  \n————《" + _0x4328d2.origin + "》" + _0x4328d2.author);
  } catch (_0x2fc82d) {
    console.log(_0x2fc82d);
  } finally {
    return Promise.resolve(1);
  }
}
async function 哇哈哈_0x537d38() {
  if (哇哈哈_0x59043e) {
    let _0x35b14c = 哇哈哈_0x1cd09b[0];
    for (let _0x3f1321 of 哇哈哈_0x1cd09b) {
      if (哇哈哈_0x59043e.indexOf(_0x3f1321) > -1) {
        _0x35b14c = _0x3f1321;
        break;
      }
    }
    for (let _0x525de5 of 哇哈哈_0x59043e.split(_0x35b14c)) {
      if (_0x525de5) {
        哇哈哈_0x228146.push(new 哇哈哈_0x57aedd(_0x525de5));
      }
    }
    哇哈哈_0x1f28f7 = 哇哈哈_0x228146.length;
  } else {
    console.log("\n❌未找到CK 请阅读脚本说明");
    return;
  }
  console.log("共找到" + 哇哈哈_0x1f28f7 + "个账号");
  return true;
}
function 哇哈哈_0x5f4bc8(_0x1b3eb7, _0xeba244, _0x412ed6) {
  var _0x51253f = CryptoJS.AES.encrypt(_0x1b3eb7, _0xeba244, {
    iv: _0x412ed6,
    mode: CryptoJS.mode.CBC
  });
  return _0x51253f.toString();
}
function 哇哈哈_0x97b585(_0x43b7a7, _0x1ffda4 = "") {
  let _0x109e08 = _0x43b7a7.replace("//", "/").split("/")[1],
    _0xd71aa7 = {
      url: _0x43b7a7,
      headers: {
        Host: _0x109e08,
        "user-agent": "Dart/2.17 (dart:io)",
        agent: "android",
        "X-User-Token": "H9VgROuVNNHVqrQ7WuHr4dIHioWghuaj"
      },
      timeout: 5000
    };
  _0x1ffda4 && (_0xd71aa7.body = _0x1ffda4, _0xd71aa7.headers["content-type"] = "application/json; charset=UTF-8", _0xd71aa7.headers["Content-Length"] = _0xd71aa7.body ? Buffer.byteLength(_0x1ffda4, "utf8") : 0);
  return _0xd71aa7;
}
function 哇哈哈_0x3acf3a(_0x41d372, _0x4536cf = "") {
  let _0x362eba = _0x41d372.replace("//", "/").split("/")[1],
    _0x5aebcd = {
      url: _0x41d372,
      headers: {
        Host: _0x362eba,
        "user-agent": "Mozilla/5.0 (Linux; Android 12; 22041211AC Build/SP1A.210812.016; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/115.0.5790.166 Mobile Safari/537.36 android/1.0.0",
        "Accept-Language": "zh-CN,zh"
      },
      timeout: 5000
    };
  _0x4536cf && (_0x5aebcd.body = _0x4536cf, _0x5aebcd.headers["content-type"] = "application/json", _0x5aebcd.headers["Content-Length"] = _0x5aebcd.body ? Buffer.byteLength(_0x4536cf, "utf8") : 0);
  return _0x5aebcd;
}
async function 哇哈哈_0x1ceaa2(_0x90aa48, _0x59d095) {
  哇哈哈_0x1e0852 = null;
  哇哈哈_0x29a4aa = null;
  哇哈哈_0x3d2b99 = null;
  return new Promise(_0x2fb8c1 => {
    哇哈哈_0x1da92e.send(_0x90aa48, _0x59d095, async (_0x257262, _0x29d49c, _0x4f30eb) => {
      try {
        哇哈哈_0x29a4aa = _0x29d49c;
        哇哈哈_0x3d2b99 = _0x4f30eb;
        if (_0x257262) {
          哇哈哈_0x1e0852 = JSON.parse(_0x29d49c.body);
        } else {
          if (_0x4f30eb.body) {
            if (typeof _0x4f30eb.body == "object") {
              哇哈哈_0x1e0852 = _0x4f30eb.body;
            } else {
              try {
                哇哈哈_0x1e0852 = JSON.parse(_0x4f30eb.body);
              } catch (_0x2adb52) {
                哇哈哈_0x1e0852 = _0x4f30eb.body;
              }
            }
          }
        }
      } catch (_0x2ffed8) {} finally {
        _0x2fb8c1();
      }
    });
  });
}
function 哇哈哈_0x3eb9d1(_0x444a69, _0x4cf60e) {
  "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
  return new class {
    constructor(_0x139809, _0x5bb1dd) {
      this.name = _0x139809;
      this.notifyStr = "";
      this.startTime = new Date().getTime();
      Object.assign(this, _0x5bb1dd);
      console.log(this.name + " 开始运行：");
    }
    ["isNode"]() {
      return "undefined" != typeof module && !!module.exports;
    }
    ["isQuanX"]() {
      return "undefined" != typeof $task;
    }
    ["isSurge"]() {
      return "undefined" != typeof $httpClient && "undefined" == typeof $loon;
    }
    ["isLoon"]() {
      return "undefined" != typeof $loon;
    }
    ["getdata"](_0x124a61) {
      let _0x5964ec = this.getval(_0x124a61);
      if (/^@/.test(_0x124a61)) {
        const [, _0x4b5ef6, _0xaf291c] = /^@(.*?)\.(.*?)$/.exec(_0x124a61),
          _0x22a06b = _0x4b5ef6 ? this.getval(_0x4b5ef6) : "";
        if (_0x22a06b) {
          try {
            const _0x5b5470 = JSON.parse(_0x22a06b);
            _0x5964ec = _0x5b5470 ? this.lodash_get(_0x5b5470, _0xaf291c, "") : _0x5964ec;
          } catch (_0x3dc6fa) {
            _0x5964ec = "";
          }
        }
      }
      return _0x5964ec;
    }
    ["setdata"](_0x47f66b, _0x319ee3) {
      let _0x2e2c2b = false;
      if (/^@/.test(_0x319ee3)) {
        const [, _0x24c002, _0x2a295a] = /^@(.*?)\.(.*?)$/.exec(_0x319ee3),
          _0x553591 = this.getval(_0x24c002),
          _0x4cc515 = _0x24c002 ? "null" === _0x553591 ? null : _0x553591 || "{}" : "{}";
        try {
          const _0x5df34a = JSON.parse(_0x4cc515);
          this.lodash_set(_0x5df34a, _0x2a295a, _0x47f66b);
          _0x2e2c2b = this.setval(JSON.stringify(_0x5df34a), _0x24c002);
        } catch (_0x240e47) {
          const _0x418d40 = {};
          this.lodash_set(_0x418d40, _0x2a295a, _0x47f66b);
          _0x2e2c2b = this.setval(JSON.stringify(_0x418d40), _0x24c002);
        }
      } else {
        _0x2e2c2b = this.setval(_0x47f66b, _0x319ee3);
      }
      return _0x2e2c2b;
    }
    ["getval"](_0xb00105) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(_0xb00105) : this.isQuanX() ? $prefs.valueForKey(_0xb00105) : this.isNode() ? (this.data = this.loaddata(), this.data[_0xb00105]) : this.data && this.data[_0xb00105] || null;
    }
    ["setval"](_0x3cbb9a, _0x485df0) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(_0x3cbb9a, _0x485df0) : this.isQuanX() ? $prefs.setValueForKey(_0x3cbb9a, _0x485df0) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x485df0] = _0x3cbb9a, this.writedata(), !0) : this.data && this.data[_0x485df0] || null;
    }
    ["send"](_0x5533a0, _0x3624c, _0x5efb88 = () => {}) {
      if (_0x5533a0 != "get" && _0x5533a0 != "post" && _0x5533a0 != "put" && _0x5533a0 != "delete") {
        console.log("无效的http方法：" + _0x5533a0);
        return;
      }
      if (_0x5533a0 == "get" && _0x3624c.headers) {
        delete _0x3624c.headers["content-type"];
        delete _0x3624c.headers["Content-Length"];
      } else {
        if (_0x3624c.body && _0x3624c.headers) {
          if (!_0x3624c.headers["content-type"]) {
            _0x3624c.headers["content-type"] = "application/json";
          }
        }
      }
      if (this.isSurge() || this.isLoon()) {
        const _0x3347e9 = {
          "X-Surge-Skip-Scripting": !1
        };
        this.isSurge() && this.isNeedRewrite && (_0x3624c.headers = _0x3624c.headers || {}, Object.assign(_0x3624c.headers, _0x3347e9));
        const _0x2067dc = {
          method: _0x5533a0,
          url: _0x3624c.url,
          headers: _0x3624c.headers,
          timeout: _0x3624c.timeout,
          data: _0x3624c.body
        };
        if (_0x5533a0 == "get") {
          delete _0x2067dc.data;
        }
        $axios(_0x2067dc).then(_0x4e2e9f => {
          const {
            status: _0x1991b4,
            request: _0x28b68b,
            headers: _0x335f56,
            data: _0x58c9da
          } = _0x4e2e9f;
          const _0x340f0c = {
            statusCode: _0x1991b4,
            headers: _0x335f56,
            body: _0x58c9da
          };
          _0x5efb88(null, _0x28b68b, _0x340f0c);
        }).catch(_0x794c34 => console.log(_0x794c34));
      } else {
        const _0x2d488b = {
          hints: !1
        };
        if (this.isQuanX()) {
          _0x3624c.method = _0x5533a0.toUpperCase();
          this.isNeedRewrite && (_0x3624c.opts = _0x3624c.opts || {}, Object.assign(_0x3624c.opts, _0x2d488b));
          $task.fetch(_0x3624c).then(_0x5d8cba => {
            const {
              statusCode: _0x45d082,
              request: _0x138568,
              headers: _0xe5e70f,
              body: _0x35d1bd
            } = _0x5d8cba;
            const _0x4babaa = {
              statusCode: _0x45d082,
              headers: _0xe5e70f,
              body: _0x35d1bd
            };
            _0x5efb88(null, _0x138568, _0x4babaa);
          }, _0x3b4d1d => _0x5efb88(_0x3b4d1d));
        } else {
          if (this.isNode()) {
            this.got = this.got ? this.got : require("got");
            const {
              url: _0x910dfc,
              ..._0x3e57e1
            } = _0x3624c;
            const _0x428d3e = {
              followRedirect: false
            };
            this.instance = this.got.extend(_0x428d3e);
            this.instance[_0x5533a0](_0x910dfc, _0x3e57e1).then(_0x56e4fc => {
              const {
                statusCode: _0x1465c1,
                request: _0x5cbca1,
                headers: _0x7d18c7,
                body: _0x229860
              } = _0x56e4fc;
              const _0x4ad554 = {
                statusCode: _0x1465c1,
                headers: _0x7d18c7,
                body: _0x229860
              };
              _0x5efb88(null, _0x5cbca1, _0x4ad554);
            }, _0x1c1d5c => {
              const {
                message: _0x3975dc,
                response: _0x3a6439
              } = _0x1c1d5c;
              _0x5efb88(_0x3975dc, _0x3a6439, _0x3a6439 && _0x3a6439.body);
            });
          }
        }
      }
    }
    ["time"](_0x42e6f2) {
      const _0x481e88 = {
        "M+": new Date().getMonth() + 1,
        "d+": new Date().getDate(),
        "h+": new Date().getHours(),
        "m+": new Date().getMinutes(),
        "s+": new Date().getSeconds(),
        "q+": Math.floor((new Date().getMonth() + 3) / 3),
        S: new Date().getMilliseconds()
      };
      /(y+)/.test(_0x42e6f2) && (_0x42e6f2 = _0x42e6f2.replace(RegExp.$1, (new Date().getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let _0x376057 in _0x481e88) new RegExp("(" + _0x376057 + ")").test(_0x42e6f2) && (_0x42e6f2 = _0x42e6f2.replace(RegExp.$1, 1 == RegExp.$1.length ? _0x481e88[_0x376057] : ("00" + _0x481e88[_0x376057]).substr(("" + _0x481e88[_0x376057]).length)));
      return _0x42e6f2;
    }
    async ["showmsg"]() {
      if (哇哈哈_0x4cc203 > 0) {
        if (!this.notifyStr) {
          return;
        }
        let _0x15a8c0 = this.name + " 运行通知\n" + this.notifyStr;
        if (哇哈哈_0x1da92e.isNode()) {
          var _0x4198b8 = require("./sendNotify");
          console.log("\n============== 推送 ==============");
          await _0x4198b8.sendNotify(this.name, _0x15a8c0);
        } else {
          this.msg(_0x15a8c0);
        }
      } else {
        console.log("\n============== 推送已关闭 ==============");
      }
    }
    ["logAndNotify"](_0x54e48f) {
      console.log(_0x54e48f);
      this.notifyStr += _0x54e48f;
      this.notifyStr += "\n";
    }
    ["msg"](_0x2b5c13 = t, _0x55793c = "", _0x4a11f4 = "", _0x4e07ec) {
      const _0x5cdf49 = _0x4af07e => {
        if (!_0x4af07e) {
          return _0x4af07e;
        }
        if ("string" == typeof _0x4af07e) {
          return this.isLoon() ? _0x4af07e : this.isQuanX() ? {
            "open-url": _0x4af07e
          } : this.isSurge() ? {
            url: _0x4af07e
          } : void 0;
        }
        if ("object" == typeof _0x4af07e) {
          if (this.isLoon()) {
            let _0x38ec22 = _0x4af07e.openUrl || _0x4af07e.url || _0x4af07e["open-url"],
              _0x24a22b = _0x4af07e.mediaUrl || _0x4af07e["media-url"];
            const _0x15c333 = {
              openUrl: _0x38ec22,
              mediaUrl: _0x24a22b
            };
            return _0x15c333;
          }
          if (this.isQuanX()) {
            let _0x2b2d11 = _0x4af07e["open-url"] || _0x4af07e.url || _0x4af07e.openUrl,
              _0x4b1f33 = _0x4af07e["media-url"] || _0x4af07e.mediaUrl;
            const _0x520486 = {
              "open-url": _0x2b2d11,
              "media-url": _0x4b1f33
            };
            return _0x520486;
          }
          if (this.isSurge()) {
            let _0x19d1f9 = _0x4af07e.url || _0x4af07e.openUrl || _0x4af07e["open-url"];
            const _0x29410d = {
              url: _0x19d1f9
            };
            return _0x29410d;
          }
        }
      };
      this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(_0x2b5c13, _0x55793c, _0x4a11f4, _0x5cdf49(_0x4e07ec)) : this.isQuanX() && $notify(_0x2b5c13, _0x55793c, _0x4a11f4, _0x5cdf49(_0x4e07ec)));
      let _0x3bed0d = ["", "============== 系统通知 =============="];
      _0x3bed0d.push(_0x2b5c13);
      _0x55793c && _0x3bed0d.push(_0x55793c);
      _0x4a11f4 && _0x3bed0d.push(_0x4a11f4);
      console.log(_0x3bed0d.join("\n"));
    }
    ["getMin"](_0x4abceb, _0x2d2650) {
      return _0x4abceb < _0x2d2650 ? _0x4abceb : _0x2d2650;
    }
    ["getMax"](_0xd87562, _0x595c1d) {
      return _0xd87562 < _0x595c1d ? _0x595c1d : _0xd87562;
    }
    ["padStr"](_0x341a45, _0x2cde79, _0x49c409 = "0") {
      let _0x19a510 = String(_0x341a45),
        _0x35ced9 = _0x2cde79 > _0x19a510.length ? _0x2cde79 - _0x19a510.length : 0,
        _0x3229e3 = "";
      for (let _0x225403 = 0; _0x225403 < _0x35ced9; _0x225403++) {
        _0x3229e3 += _0x49c409;
      }
      _0x3229e3 += _0x19a510;
      return _0x3229e3;
    }
    ["json2str"](_0x2c75b1, _0x1f3666, _0x47068f = false) {
      let _0x345df6 = [];
      for (let _0x1cb936 of Object.keys(_0x2c75b1).sort()) {
        let _0x52e6d5 = _0x2c75b1[_0x1cb936];
        if (_0x52e6d5 && _0x47068f) {
          _0x52e6d5 = encodeURIComponent(_0x52e6d5);
        }
        _0x345df6.push(_0x1cb936 + "=" + _0x52e6d5);
      }
      return _0x345df6.join(_0x1f3666);
    }
    ["str2json"](_0x33b1b4, _0x5bc8b2 = false) {
      let _0x2912f4 = {};
      for (let _0x2d04c8 of _0x33b1b4.split("&")) {
        if (!_0x2d04c8) {
          continue;
        }
        let _0x3ba3f6 = _0x2d04c8.indexOf("=");
        if (_0x3ba3f6 == -1) {
          continue;
        }
        let _0x5ac1ca = _0x2d04c8.substr(0, _0x3ba3f6),
          _0x31f6a2 = _0x2d04c8.substr(_0x3ba3f6 + 1);
        if (_0x5bc8b2) {
          _0x31f6a2 = decodeURIComponent(_0x31f6a2);
        }
        _0x2912f4[_0x5ac1ca] = _0x31f6a2;
      }
      return _0x2912f4;
    }
    ["randomString"](_0x35d581, _0x5de8fc = "abcdef0123456789") {
      let _0x2e2c4f = "";
      for (let _0x5edf39 = 0; _0x5edf39 < _0x35d581; _0x5edf39++) {
        _0x2e2c4f += _0x5de8fc.charAt(Math.floor(Math.random() * _0x5de8fc.length));
      }
      return _0x2e2c4f;
    }
    ["phoneNum"](_0x267dce) {
      if (_0x267dce.length == 11) {
        let _0x5f3d38 = _0x267dce.replace(/(\d{3})\d{4}(\d{4})/, "$1****$2");
        return _0x5f3d38;
      } else {
        return _0x267dce;
      }
    }
    ["randomList"](_0x1bfadf) {
      let _0x52e2c3 = Math.floor(Math.random() * _0x1bfadf.length);
      return _0x1bfadf[_0x52e2c3];
    }
    ["wait"](_0xe9934d) {
      return new Promise(_0x3d55fa => setTimeout(_0x3d55fa, _0xe9934d));
    }
    ["done"](_0x4cc3eb = {}) {
      const _0x365de4 = new Date().getTime(),
        _0xe7418c = (_0x365de4 - this.startTime) / 1000;
      console.log("\n" + this.name + " 运行结束，共运行了 " + _0xe7418c + " 秒！");
      if (this.isSurge() || this.isQuanX() || this.isLoon()) {
        $done(_0x4cc3eb);
      }
    }
  }(_0x444a69, _0x4cf60e);
}