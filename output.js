//Mon Jul 15 2024 14:45:42 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const _0x150a3e = "赶集直招",
  _0x2a70a1 = new _0x458ba4(_0x150a3e);
let _0x3e8c12 = ["\n", "@"],
  _0x4ab859,
  _0x1bca34,
  _0x31bc86,
  _0x5f4432 = (_0x2a70a1.isNode() ? process.env.gjzzCookie : _0x2a70a1.getdata("gjzzCookie")) || "",
  _0x388fad = (_0x2a70a1.isNode() ? process.env.gjzzExtraTaskTime : _0x2a70a1.getdata("gjzzExtraTaskTime")) || 7,
  _0x2a6a9a = [],
  _0x4cccbe = 0,
  _0x887588 = 0,
  _0x377f3c = 10021701,
  _0x4fd67b = new Date().getHours(),
  _0x2c35e3 = [14, 221, 222],
  _0x5a14e1 = 5,
  _0x19cc4f = 1.02,
  _0x283deb = false,
  _0x24b9c6 = "gjzz",
  _0x50f95f = "https://leafxcy.coding.net/api/user/leafxcy/project/validcode/shared-depot/validCode/git/blob/master/code.json",
  _0x8351cb = "https://127.0.0.1/";
class _0x116c29 {
  constructor(_0x45e83c) {
    this.index = ++_0x4cccbe;
    this.name = this.index;
    this.valid = false;
    this.cookie = "cversion=\"10.16.21\"; " + _0x45e83c;
    this.tasks = [];
  }
  async getUserInfo(_0x7ec443 = false) {
    try {
      let _0x4efbf7 = "https://gjgrowthoper.58.com/user/userinfo",
        _0x34e01c = "",
        _0x350748 = _0x22fcba(_0x4efbf7, this.cookie, _0x34e01c);
      await _0x1b11ba("get", _0x350748);
      let _0x2d1f11 = _0x4ab859;
      if (!_0x2d1f11) {
        return;
      }
      if (_0x2d1f11.code == 0) {
        this.valid = true;
        this.name = _0x2d1f11.resultEntity.homeName;
        this.coin = _0x2d1f11.resultEntity.coinsNum;
        this.money = _0x2d1f11.resultEntity.moneyAmount;
        this.gradeInfo = _0x2d1f11.resultEntity.gradeInfoDto;
        this.gradeInfo.progressBar >= 100 && (await this.upgrade());
        this.gradeInfo.redPackageState == 1 && (await this.openRedPackage());
        _0x7ec443 && (_0x2a70a1.logAndNotify("账号：" + this.name), _0x2a70a1.logAndNotify("等级：" + this.gradeInfo.gradeId), _0x2a70a1.logAndNotify("进度：" + this.gradeInfo.progressBar + "% (" + this.gradeInfo.finishCount + "/" + this.gradeInfo.totalCount + ")"), _0x2a70a1.logAndNotify("余额：" + this.coin + "金币 ≈ " + this.money + "元"));
      } else {
        _0x2a70a1.logAndNotify("账号[" + this.index + "]CK失效: " + _0x2d1f11.message);
      }
    } catch (_0x110e31) {
      console.log(_0x110e31);
    } finally {}
  }
  async upgrade() {
    try {
      let _0x3bdbdd = "https://gjgrowthoper.58.com/task/upgrade",
        _0x1f69a5 = "",
        _0x4ddb74 = _0x22fcba(_0x3bdbdd, this.cookie, _0x1f69a5);
      await _0x1b11ba("get", _0x4ddb74);
      let _0x2dc120 = _0x4ab859;
      if (!_0x2dc120) {
        return;
      }
      _0x2dc120.code == 0 ? console.log("升级梦想小店成功") : console.log("升级梦想小店失败: " + _0x2dc120.msg);
    } catch (_0x1febfb) {
      console.log(_0x1febfb);
    } finally {}
  }
  async openRedPackage() {
    try {
      let _0x5e260e = "https://gjgrowthoper.58.com/goldCoinBall/graderedpackage",
        _0x284eef = "",
        _0x530ba8 = _0x22fcba(_0x5e260e, this.cookie, _0x284eef);
      await _0x1b11ba("get", _0x530ba8);
      let _0x58ef3c = _0x4ab859;
      if (!_0x58ef3c) {
        return;
      }
      if (_0x58ef3c.code == 0) {
        let _0x5b517b = _0x58ef3c.resultEntity.priceType == 1 ? "元" : "金币";
        if (!_0x58ef3c.resultEntity.goldCoinsNum) {
          console.log(_0x58ef3c);
        }
        console.log("领取每日任务进度红包成功，获得" + _0x58ef3c.resultEntity.goldCoinsNum + _0x5b517b);
      } else {
        console.log("领取每日任务进度红包失败: " + _0x58ef3c.msg);
      }
    } catch (_0x12c79a) {
      console.log(_0x12c79a);
    } finally {}
  }
  async clockin(_0x286e6d = "") {
    try {
      let _0x4cb733 = "https://gjgrowthoper.58.com/clock/clockin",
        _0x1d365d = _0x286e6d ? "state=" + _0x286e6d : "",
        _0x50091b = _0x22fcba(_0x4cb733, this.cookie, _0x1d365d);
      await _0x1b11ba("post", _0x50091b);
      let _0x56748f = _0x4ab859;
      if (!_0x56748f) {
        return;
      }
      _0x56748f.code == 0 ? _0x286e6d ? console.log("签到成功，签到天数：" + _0x56748f.resultEntity.accumulativeDays) : _0x56748f.resultEntity.state == 0 ? await this.clockin(1) : console.log("今天已签到，签到天数：" + _0x56748f.resultEntity.accumulativeDays) : console.log("账号[" + this.name + "]查询签到失败: " + _0x56748f.msg);
    } catch (_0x15c584) {
      console.log(_0x15c584);
    } finally {}
  }
  async getTaskList() {
    try {
      let _0x4b0936 = "https://gjgrowthoper.58.com/task/tasklist",
        _0x22c289 = "",
        _0x363414 = _0x22fcba(_0x4b0936, this.cookie, _0x22c289);
      await _0x1b11ba("get", _0x363414);
      let _0x50c3de = _0x4ab859;
      if (!_0x50c3de) {
        return;
      }
      if (_0x50c3de.code == 0) {
        for (let _0x4042c0 of _0x50c3de.resultEntity.taskDtos) {
          console.log(_0x4042c0.title + "[id=" + _0x4042c0.taskId + "] -- " + _0x4042c0.finishedCount + "/" + _0x4042c0.totalCount + "，" + (_0x4042c0.state == 1 ? "已" : "未") + "完成");
          if (_0x4042c0.title.indexOf("创建一份简历") > -1 || _0x4042c0.title.indexOf("搜一搜") > -1) {
            continue;
          }
          if (_0x4042c0.state == 0) {
            this.tasks.push(_0x4042c0);
          }
        }
      } else {
        console.log("查询任务列表失败: " + _0x50c3de.msg);
      }
    } catch (_0x3ede2e) {
      console.log(_0x3ede2e);
    } finally {}
  }
  async toFinishTask(_0x20d816) {
    try {
      let _0x55fa91 = "https://gjgrowthoper.58.com/task/tofinish?taskId=" + _0x20d816.taskId,
        _0x10fe81 = "",
        _0x293d01 = _0x22fcba(_0x55fa91, this.cookie, _0x10fe81);
      await _0x1b11ba("get", _0x293d01);
      let _0x1dac7b = _0x4ab859;
      if (!_0x1dac7b) {
        return;
      }
      if (_0x1dac7b.code == 0) {
        if (_0x1dac7b.resultEntity.code == 1) {
          console.log("开始任务[" + _0x20d816.title + "]成功");
          let _0x1fdeb6 = _0x20d816.totalCount - _0x20d816.finishedCount;
          for (let _0x3f6128 = 0; _0x3f6128 < _0x1fdeb6; _0x3f6128++) {
            await this.finishTask(_0x20d816);
          }
        } else {
          console.log("开始任务[" + _0x20d816.title + "]失败，可能不存在此任务");
        }
      } else {
        console.log("开始任务[" + _0x20d816.title + "]失败: " + _0x1dac7b.msg);
      }
    } catch (_0x594af4) {
      console.log(_0x594af4);
    } finally {}
  }
  async finishTask(_0x152956) {
    try {
      let _0x3efb44 = _0x2a70a1.randomString(14, "0123456789"),
        _0x4168a5 = "https://gjgrowthoper.58.com/task/finish?from=" + _0x152956.taskId,
        _0x78c317 = "uid=&uniqueId=" + _0x3efb44 + "&missionId=" + _0x152956.taskId,
        _0x41f9a9 = _0x22fcba(_0x4168a5, this.cookie, _0x78c317);
      await _0x1b11ba("post", _0x41f9a9);
      let _0x398414 = _0x4ab859;
      if (!_0x398414) {
        return;
      }
      _0x398414.code == 0 ? (_0x398414.data && _0x398414.data.code == 0 ? console.log("完成任务[" + _0x152956.title + "]成功") : console.log("完成任务[" + _0x152956.title + "]失败，可能已完成足够次数"), await this.getUserInfo()) : console.log("完成任务[" + _0x152956.title + "]失败: " + _0x398414.msg);
    } catch (_0x361f92) {
      console.log(_0x361f92);
    } finally {}
  }
  async queryTaskReward() {
    try {
      let _0x18d844 = "https://gjgrowthoper.58.com/goldCoinBall/query",
        _0x3f39f5 = "",
        _0x4efe14 = _0x22fcba(_0x18d844, this.cookie, _0x3f39f5);
      await _0x1b11ba("get", _0x4efe14);
      let _0x46ecfc = _0x4ab859;
      if (!_0x46ecfc) {
        return;
      }
      if (_0x46ecfc.code == 0) {
        if (!_0x46ecfc.resultEntity.awardList) {
          console.log("没有可领取的任务奖励");
          return;
        }
        for (let _0x419c7a of _0x46ecfc.resultEntity.awardList) {
          await this.obtainTaskReward(_0x419c7a);
        }
      } else {
        console.log("查询可领取的任务奖励失败: " + _0x46ecfc.msg);
      }
    } catch (_0x22c6d6) {
      console.log(_0x22c6d6);
    } finally {}
  }
  async obtainTaskReward(_0x30ccd1) {
    try {
      let _0x270cf1 = "https://gjgrowthoper.58.com/goldCoinBall/obtain",
        _0x2bdf5c = "awardId=" + _0x30ccd1.id + "&awardType=" + _0x30ccd1.awardType,
        _0x1c929e = _0x22fcba(_0x270cf1, this.cookie, _0x2bdf5c);
      await _0x1b11ba("post", _0x1c929e);
      let _0x2ae735 = _0x4ab859;
      if (!_0x2ae735) {
        return;
      }
      if (_0x2ae735.code == 0) {
        if (_0x2ae735.resultEntity.state == 0) {
          let _0x3c4e51 = _0x30ccd1.awardType == 1 ? "元(提现到微信)" : "金币";
          console.log("领取任务[" + _0x30ccd1.ballSource + "]奖励成功，获得" + _0x30ccd1.value + _0x3c4e51);
        } else {
          if (_0x2ae735.resultEntity.state == 6) {
            console.log("领取任务[" + _0x30ccd1.ballSource + "]奖励失败，提现需要人脸认证");
          } else {
            _0x2ae735.resultEntity.state == 7 ? console.log("领取任务[" + _0x30ccd1.ballSource + "]奖励失败，提现需要绑定微信") : console.log("领取任务[" + _0x30ccd1.ballSource + "]奖励失败，state=" + _0x2ae735.resultEntity.state);
          }
        }
      } else {
        console.log("领取任务[" + _0x30ccd1.ballSource + "]奖励失败: " + _0x2ae735.msg);
      }
    } catch (_0x3a97e5) {
      console.log(_0x3a97e5);
    } finally {}
  }
  async getPopularList() {
    try {
      let _0x135d56 = "https://api-coin-mall.58.com/api/product/getPopularList?num=19&moreDisplay=true&bizId=1&customize=2&bizLine=" + _0x377f3c,
        _0x514df3 = "",
        _0x261dec = _0x22fcba(_0x135d56, this.cookie, _0x514df3);
      _0x261dec.headers.Referer = "https://mjifen.58.com/";
      await _0x1b11ba("get", _0x261dec);
      let _0x55012f = _0x4ab859;
      if (!_0x55012f) {
        return;
      }
      if (_0x55012f.resultCode == 20) {
        let _0x1e5d95 = JSON.parse(_0x55012f.data).filter(_0xf38336 => _0xf38336.title.indexOf("京东E卡") > -1 || _0xf38336.title.indexOf("元红包") > -1).sort(function (_0x30fbff, _0x186843) {
            let _0xd3e633 = _0x30fbff.title.match(/(\d+)元/)[1],
              _0x45560e = _0x186843.title.match(/(\d+)元/)[1];
            return _0x30fbff.amount / _0xd3e633 - _0x186843.amount / _0x45560e;
          }),
          _0x3fff17 = false;
        for (let _0x10e701 of _0x1e5d95) {
          if (this.coin < _0x10e701.amount) {
            continue;
          }
          _0x2a70a1.logAndNotify("账号[" + this.index + "]准备兑换" + _0x10e701.title + "，需要" + _0x10e701.amount + "金币...");
          _0x3fff17 = true;
          await this.getToken(_0x10e701);
        }
        if (!_0x3fff17) {
          console.log("金币不足，无法兑换商品");
        }
      } else {
        console.log("查询兑换列表失败: " + _0x55012f.resultMessage);
      }
    } catch (_0x4fdbe3) {
      console.log(_0x4fdbe3);
    } finally {}
  }
  async getToken(_0x511614) {
    try {
      let _0xf3d5f1 = "https://api-coin-mall.58.com/api/order/getToken",
        _0x25a831 = "bizLine=" + _0x377f3c,
        _0x4a7de2 = _0x22fcba(_0xf3d5f1, this.cookie, _0x25a831);
      _0x4a7de2.headers.Referer = "https://mjifen.58.com/";
      await _0x1b11ba("post", _0x4a7de2);
      let _0x3af745 = _0x4ab859;
      if (!_0x3af745) {
        return;
      }
      if (_0x3af745.resultCode == 20) {
        let _0x59420d = JSON.parse(_0x3af745.data);
        _0x59420d.code == 0 && _0x59420d.isSuccess ? await this.createOrder(_0x511614, _0x59420d.data) : _0x2a70a1.logAndNotify("账号[" + this.index + "]兑换[" + _0x511614.title + "] -- 申请订单token失败: " + _0x59420d.msg);
      } else {
        _0x2a70a1.logAndNotify("账号[" + this.index + "]兑换[" + _0x511614.title + "] -- 申请订单token失败: " + _0x3af745.resultMessage);
      }
    } catch (_0x3efe25) {
      console.log(_0x3efe25);
    } finally {}
  }
  async createOrder(_0x1f1ec8, _0x2a7474) {
    try {
      let _0x36521a = _0x1f1ec8.title.match(/(\d+)元/)[1],
        _0x7d5d9c = "https://api-coin-mall.58.com/api/order/createOrder",
        _0x2ce19a = "bizLine=" + _0x377f3c + "&bizToken=" + _0x2a7474 + "&amount=" + _0x1f1ec8.amount + "&price=" + _0x36521a + "&deliveryType=2&orderSource=30&payAt=0&remark=&coinSkuId=" + _0x1f1ec8.id + "&skuName=" + encodeURIComponent(_0x1f1ec8.title) + "&quantity=1&unitAmount=" + _0x1f1ec8.amount + "&unitPrice=" + _0x36521a + "&addressId=0&winningLogId=0",
        _0x362b23 = _0x22fcba(_0x7d5d9c, this.cookie, _0x2ce19a);
      _0x362b23.headers.Referer = "https://mjifen.58.com/";
      await _0x1b11ba("post", _0x362b23);
      let _0x34700b = _0x4ab859;
      if (!_0x34700b) {
        return;
      }
      if (_0x34700b.resultCode == 20) {
        let _0x4efd0d = JSON.parse(_0x34700b.data);
        _0x4efd0d.code == 0 && _0x4efd0d.isSuccess ? await this.payOrder(_0x1f1ec8, _0x4efd0d.data) : _0x2a70a1.logAndNotify("账号[" + this.index + "]兑换[" + _0x1f1ec8.title + "] -- 申请订单orderId失败，请先进行实名和人脸认证");
      } else {
        _0x2a70a1.logAndNotify("账号[" + this.index + "]兑换[" + _0x1f1ec8.title + "] -- 申请订单orderId失败: " + _0x34700b.resultMessage);
      }
    } catch (_0x1cf2e1) {
      console.log(_0x1cf2e1);
    } finally {}
  }
  async payOrder(_0x2dbd19, _0x5b42df) {
    try {
      let _0x357d16 = "https://api-coin-mall.58.com/api/order/pay",
        _0xe2a4a3 = "bizLine=" + _0x377f3c + "&orderId=" + _0x5b42df + "&smsCode=&winningLogId=0",
        _0x48c30f = _0x22fcba(_0x357d16, this.cookie, _0xe2a4a3);
      _0x48c30f.headers.Referer = "https://mjifen.58.com/";
      await _0x1b11ba("post", _0x48c30f);
      let _0x562c2b = _0x4ab859;
      if (!_0x562c2b) {
        return;
      }
      if (_0x562c2b.resultCode == 20) {
        let _0x5a7959 = JSON.parse(_0x562c2b.data);
        _0x5a7959.key.code == 0 && _0x5a7959.key.isSuccess ? (this.coin -= _0x2dbd19.amount, _0x2a70a1.logAndNotify("账号[" + this.index + "]兑换[" + _0x2dbd19.title + "] -- 支付订单成功")) : _0x2a70a1.logAndNotify("账号[" + this.index + "]兑换[" + _0x2dbd19.title + "] -- 支付订单失败: " + _0x5a7959.msg);
      } else {
        _0x2a70a1.logAndNotify("账号[" + this.index + "]兑换[" + _0x2dbd19.title + "] -- 支付订单失败: " + _0x562c2b.resultMessage);
      }
    } catch (_0x4ac51e) {
      console.log(_0x4ac51e);
    } finally {}
  }
  async userTask() {
    _0x2a70a1.logAndNotify("\n============= 账号[" + this.index + "] =============");
    await this.getUserInfo();
    if (!this.valid) {
      return;
    }
    console.log("\n---------- 签到 ----------");
    await this.clockin();
    console.log("\n---------- 任务列表 ----------");
    await this.getTaskList();
    if (this.tasks.length > 0) {
      console.log("\n---------- 做任务 ----------");
      for (let _0xc095a of this.tasks) {
        await this.toFinishTask(_0xc095a);
      }
    }
    if (_0x4fd67b == _0x388fad) {
      for (let _0x38e33a of _0x2c35e3) {
        const _0x2e9ec0 = {
          title: _0x38e33a,
          taskId: _0x38e33a,
          totalCount: 1,
          finishedCount: 0
        };
        await this.toFinishTask(_0x2e9ec0);
      }
    }
    console.log("\n---------- 任务奖励 ----------");
    await this.queryTaskReward();
    console.log("\n---------- 账户信息 ----------");
    await this.getUserInfo(true);
    console.log("\n---------- 兑换商品 ----------");
    await this.getPopularList();
  }
}
!(async () => {
  if (typeof $request !== "undefined") {
    await _0x290096();
  } else {
    await _0x2e98bc();
    if (_0x283deb == false) {
      return;
    }
    if (!(await _0x34580e())) {
      return;
    }
    for (let _0x5bf616 of _0x2a6a9a) {
      await _0x5bf616.userTask();
    }
    await _0x2a70a1.showmsg();
  }
})().catch(_0x5c7c29 => console.log(_0x5c7c29)).finally(() => _0x2a70a1.done());
async function _0x290096() {
  if ($request.url.indexOf("gjgrowthoper.58.com/user/userinfo") > -1) {
    let _0x33b3d9 = $request.headers.Cookie.match(/(PPU=UID=[\w&=-]+;)/)[1],
      _0x32aaa4 = _0x33b3d9.match(/(UID=\d+)/)[1];
    if (_0x5f4432) {
      if (_0x5f4432.indexOf(_0x33b3d9) == -1) {
        if (_0x5f4432.indexOf(_0x32aaa4) == -1) {
          _0x5f4432 = _0x5f4432 + "\n" + _0x33b3d9;
          _0x2a70a1.setdata(_0x5f4432, "gjzzCookie");
          let _0x1371ae = _0x5f4432.split("\n");
          _0x2a70a1.msg("获取第" + _0x1371ae.length + "个ck成功: " + _0x33b3d9);
        } else {
          let _0x398a69 = _0x5f4432.split("\n"),
            _0x4653f6 = 0;
          for (_0x4653f6 = 0; _0x4653f6 < _0x398a69.length; _0x4653f6++) {
            if (_0x398a69[_0x4653f6].indexOf(_0x32aaa4) > -1) {
              _0x398a69[_0x4653f6] = _0x33b3d9;
              break;
            }
          }
          _0x5f4432 = _0x398a69.join("\n");
          _0x2a70a1.setdata(_0x5f4432, "gjzzCookie");
          _0x2a70a1.msg("更新第" + (_0x4653f6 + 1) + "个ck成功: " + _0x33b3d9);
        }
      }
    } else {
      _0x2a70a1.setdata(_0x33b3d9, "gjzzCookie");
      _0x2a70a1.msg("获取第1个ck成功: " + _0x33b3d9);
    }
  }
}
async function _0x34580e() {
  if (_0x5f4432) {
    let _0x329a2b = _0x3e8c12[0];
    for (let _0x192daa of _0x3e8c12) {
      if (_0x5f4432.indexOf(_0x192daa) > -1) {
        _0x329a2b = _0x192daa;
        break;
      }
    }
    for (let _0x5b5b37 of _0x5f4432.split(_0x329a2b)) {
      if (_0x5b5b37) {
        _0x2a6a9a.push(new _0x116c29(_0x5b5b37));
      }
    }
    _0x887588 = _0x2a6a9a.length;
  } else {
    console.log("未找到CK");
    return;
  }
  console.log("共找到" + _0x887588 + "个账号");
  return true;
}
async function _0x2e98bc(_0x142b3c = 0) {
  const _0x2fe8ff = {
    url: _0x50f95f
  };
  await _0x1b11ba("get", _0x2fe8ff);
  let _0x4234f7 = _0x4ab859;
  if (!_0x4234f7) {
    if (_0x142b3c < _0x5a14e1) {
      await _0x2e98bc(++_0x142b3c);
    }
    return;
  }
  _0x4234f7?.["code"] == 0 && (_0x4234f7 = JSON.parse(_0x4234f7.data.file.data));
  _0x4234f7?.["commonNotify"] && _0x4234f7.commonNotify.length > 0 && _0x2a70a1.logAndNotify(_0x4234f7.commonNotify.join("\n") + "\n");
  _0x4234f7?.["commonMsg"] && _0x4234f7.commonMsg.length > 0 && console.log(_0x4234f7.commonMsg.join("\n") + "\n");
  if (_0x4234f7[_0x24b9c6]) {
    let _0x2df68f = _0x4234f7[_0x24b9c6];
    _0x2df68f.status == 0 ? _0x19cc4f >= _0x2df68f.version ? (_0x283deb = true, _0x8351cb = "https://leafxcy.coding.net/api/user/leafxcy/project/validcode/shared-depot/validCode/git/blob/master/" + _0x24b9c6 + ".json", console.log(_0x2df68f.msg[_0x2df68f.status]), console.log(_0x2df68f.updateMsg), console.log("现在运行的脚本版本是：" + _0x19cc4f + "，最新脚本版本：" + _0x2df68f.latestVersion)) : console.log(_0x2df68f.versionMsg) : console.log(_0x2df68f.msg[_0x2df68f.status]);
  } else {
    console.log(_0x4234f7.errorMsg);
  }
}
async function _0x51ff5b(_0x6b49a7 = 0) {
  const _0x48f213 = {
    url: _0x8351cb
  };
  await _0x1b11ba("get", _0x48f213);
  let _0x3f8def = _0x4ab859;
  if (!_0x3f8def) {
    if (_0x6b49a7 < _0x5a14e1) {
      await _0x51ff5b(++_0x6b49a7);
    }
    return;
  }
  _0x3f8def?.["code"] == 0 && (_0x3f8def = JSON.parse(_0x3f8def.data.file.data));
  return;
}
function _0x22fcba(_0x2992ad, _0x54359d, _0x23a482 = "") {
  let _0x4a7000 = _0x2992ad.replace("//", "/").split("/")[1];
  const _0x188617 = {
    Host: _0x4a7000,
    Connection: "keep-alive",
    Cookie: _0x54359d
  };
  const _0x22c88e = {
    url: _0x2992ad,
    headers: _0x188617,
    timeout: 5000
  };
  _0x23a482 && (_0x22c88e.body = _0x23a482, _0x22c88e.headers["Content-Type"] = "application/x-www-form-urlencoded", _0x22c88e.headers["Content-Length"] = _0x22c88e.body ? _0x22c88e.body.length : 0);
  return _0x22c88e;
}
async function _0x1b11ba(_0x13ba29, _0x488589) {
  _0x4ab859 = null;
  _0x1bca34 = null;
  _0x31bc86 = null;
  return new Promise(_0x279177 => {
    _0x2a70a1.send(_0x13ba29, _0x488589, async (_0x1f4c01, _0x244d36, _0x2569f1) => {
      try {
        _0x1bca34 = _0x244d36;
        _0x31bc86 = _0x2569f1;
        if (_0x1f4c01) {
          console.log(_0x13ba29 + "请求失败");
          console.log(JSON.stringify(_0x1f4c01));
        } else {
          if (_0x2569f1.body) {
            if (typeof _0x2569f1.body == "object") {
              _0x4ab859 = _0x2569f1.body;
            } else {
              try {
                _0x4ab859 = JSON.parse(_0x2569f1.body);
              } catch (_0x1968f7) {}
            }
          }
        }
      } catch (_0x1491d3) {
        console.log(_0x1491d3);
      } finally {
        _0x279177();
      }
    });
  });
}
function _0x3a7be6(_0x48519a, _0x199ff0, _0x399be6, _0x4b2cb2, _0x385fcb, _0x23fa61) {
  return CryptoJS[_0x48519a].encrypt(CryptoJS.enc.Utf8.parse(_0x4b2cb2), CryptoJS.enc.Utf8.parse(_0x385fcb), {
    mode: CryptoJS.mode[_0x199ff0],
    padding: CryptoJS.pad[_0x399be6],
    iv: CryptoJS.enc.Utf8.parse(_0x23fa61)
  }).ciphertext.toString(CryptoJS.enc.Base64);
}
function _0x19a891(_0x31b6a8, _0x2ebfe4, _0x38872c, _0x457ff2, _0x38f846, _0x3d2818) {
  return CryptoJS[_0x31b6a8].decrypt({
    ciphertext: CryptoJS.enc.Base64.parse(_0x457ff2)
  }, CryptoJS.enc.Utf8.parse(_0x38f846), {
    mode: CryptoJS.mode[_0x2ebfe4],
    padding: CryptoJS.pad[_0x38872c],
    iv: CryptoJS.enc.Utf8.parse(_0x3d2818)
  }).toString(CryptoJS.enc.Utf8);
}
var _0x3336a2 = {
  _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
  encode: function (_0x3c029d) {
    var _0x21c987 = "";
    var _0x4b8250, _0x49f6be, _0x520bd3, _0x3edcae, _0xdb1a21, _0x22459d, _0x481d89;
    var _0x1c63f6 = 0;
    _0x3c029d = _0x3336a2._utf8_encode(_0x3c029d);
    while (_0x1c63f6 < _0x3c029d.length) {
      _0x4b8250 = _0x3c029d.charCodeAt(_0x1c63f6++);
      _0x49f6be = _0x3c029d.charCodeAt(_0x1c63f6++);
      _0x520bd3 = _0x3c029d.charCodeAt(_0x1c63f6++);
      _0x3edcae = _0x4b8250 >> 2;
      _0xdb1a21 = (_0x4b8250 & 3) << 4 | _0x49f6be >> 4;
      _0x22459d = (_0x49f6be & 15) << 2 | _0x520bd3 >> 6;
      _0x481d89 = _0x520bd3 & 63;
      if (isNaN(_0x49f6be)) {
        _0x22459d = _0x481d89 = 64;
      } else {
        isNaN(_0x520bd3) && (_0x481d89 = 64);
      }
      _0x21c987 = _0x21c987 + this._keyStr.charAt(_0x3edcae) + this._keyStr.charAt(_0xdb1a21) + this._keyStr.charAt(_0x22459d) + this._keyStr.charAt(_0x481d89);
    }
    return _0x21c987;
  },
  decode: function (_0x47d5cb) {
    var _0x46b3f9 = "";
    var _0x47280b, _0x165d31, _0x20495b;
    var _0x31793f, _0x2a6d2a, _0x4be35b, _0x4826b0;
    var _0x3fd6d1 = 0;
    _0x47d5cb = _0x47d5cb.replace(/[^A-Za-z0-9+/=]/g, "");
    while (_0x3fd6d1 < _0x47d5cb.length) {
      _0x31793f = this._keyStr.indexOf(_0x47d5cb.charAt(_0x3fd6d1++));
      _0x2a6d2a = this._keyStr.indexOf(_0x47d5cb.charAt(_0x3fd6d1++));
      _0x4be35b = this._keyStr.indexOf(_0x47d5cb.charAt(_0x3fd6d1++));
      _0x4826b0 = this._keyStr.indexOf(_0x47d5cb.charAt(_0x3fd6d1++));
      _0x47280b = _0x31793f << 2 | _0x2a6d2a >> 4;
      _0x165d31 = (_0x2a6d2a & 15) << 4 | _0x4be35b >> 2;
      _0x20495b = (_0x4be35b & 3) << 6 | _0x4826b0;
      _0x46b3f9 = _0x46b3f9 + String.fromCharCode(_0x47280b);
      _0x4be35b != 64 && (_0x46b3f9 = _0x46b3f9 + String.fromCharCode(_0x165d31));
      _0x4826b0 != 64 && (_0x46b3f9 = _0x46b3f9 + String.fromCharCode(_0x20495b));
    }
    _0x46b3f9 = _0x3336a2._utf8_decode(_0x46b3f9);
    return _0x46b3f9;
  },
  _utf8_encode: function (_0x578ae4) {
    _0x578ae4 = _0x578ae4.replace(/rn/g, "n");
    var _0x532157 = "";
    for (var _0x1f219d = 0; _0x1f219d < _0x578ae4.length; _0x1f219d++) {
      var _0x17b22a = _0x578ae4.charCodeAt(_0x1f219d);
      if (_0x17b22a < 128) {
        _0x532157 += String.fromCharCode(_0x17b22a);
      } else {
        _0x17b22a > 127 && _0x17b22a < 2048 ? (_0x532157 += String.fromCharCode(_0x17b22a >> 6 | 192), _0x532157 += String.fromCharCode(_0x17b22a & 63 | 128)) : (_0x532157 += String.fromCharCode(_0x17b22a >> 12 | 224), _0x532157 += String.fromCharCode(_0x17b22a >> 6 & 63 | 128), _0x532157 += String.fromCharCode(_0x17b22a & 63 | 128));
      }
    }
    return _0x532157;
  },
  _utf8_decode: function (_0x3e2d05) {
    var _0x336534 = "";
    var _0x3436c4 = 0;
    c1 = c2 = 0;
    var _0x5ebbe5 = c1;
    while (_0x3436c4 < _0x3e2d05.length) {
      _0x5ebbe5 = _0x3e2d05.charCodeAt(_0x3436c4);
      if (_0x5ebbe5 < 128) {
        _0x336534 += String.fromCharCode(_0x5ebbe5);
        _0x3436c4++;
      } else {
        _0x5ebbe5 > 191 && _0x5ebbe5 < 224 ? (c2 = _0x3e2d05.charCodeAt(_0x3436c4 + 1), _0x336534 += String.fromCharCode((_0x5ebbe5 & 31) << 6 | c2 & 63), _0x3436c4 += 2) : (c2 = _0x3e2d05.charCodeAt(_0x3436c4 + 1), c3 = _0x3e2d05.charCodeAt(_0x3436c4 + 2), _0x336534 += String.fromCharCode((_0x5ebbe5 & 15) << 12 | (c2 & 63) << 6 | c3 & 63), _0x3436c4 += 3);
      }
    }
    return _0x336534;
  }
};
function _0x3bd368(_0x4f9df8) {
  function _0x39ecbf(_0x712df0, _0x13d3b9) {
    return _0x712df0 << _0x13d3b9 | _0x712df0 >>> 32 - _0x13d3b9;
  }
  function _0x421244(_0x49d08a, _0x97c966) {
    var _0x424779, _0x2e7c94, _0x238b9c, _0x3d3d32, _0x56c966;
    _0x238b9c = 2147483648 & _0x49d08a;
    _0x3d3d32 = 2147483648 & _0x97c966;
    _0x424779 = 1073741824 & _0x49d08a;
    _0x2e7c94 = 1073741824 & _0x97c966;
    _0x56c966 = (1073741823 & _0x49d08a) + (1073741823 & _0x97c966);
    return _0x424779 & _0x2e7c94 ? 2147483648 ^ _0x56c966 ^ _0x238b9c ^ _0x3d3d32 : _0x424779 | _0x2e7c94 ? 1073741824 & _0x56c966 ? 3221225472 ^ _0x56c966 ^ _0x238b9c ^ _0x3d3d32 : 1073741824 ^ _0x56c966 ^ _0x238b9c ^ _0x3d3d32 : _0x56c966 ^ _0x238b9c ^ _0x3d3d32;
  }
  function _0x4800c0(_0x538a48, _0x4ce8d9, _0x4360ec) {
    return _0x538a48 & _0x4ce8d9 | ~_0x538a48 & _0x4360ec;
  }
  function _0x54de93(_0x18e293, _0x103cd6, _0x1acd47) {
    return _0x18e293 & _0x1acd47 | _0x103cd6 & ~_0x1acd47;
  }
  function _0x16058e(_0x2488de, _0xb62b9c, _0x3309da) {
    return _0x2488de ^ _0xb62b9c ^ _0x3309da;
  }
  function _0x470635(_0x108ae8, _0xa7cb3d, _0x5a0354) {
    return _0xa7cb3d ^ (_0x108ae8 | ~_0x5a0354);
  }
  function _0xfcdc94(_0x2a638b, _0x3eac80, _0x360dda, _0x28c67f, _0x8f6f5f, _0x2d9c90, _0x12eb9c) {
    _0x2a638b = _0x421244(_0x2a638b, _0x421244(_0x421244(_0x4800c0(_0x3eac80, _0x360dda, _0x28c67f), _0x8f6f5f), _0x12eb9c));
    return _0x421244(_0x39ecbf(_0x2a638b, _0x2d9c90), _0x3eac80);
  }
  function _0x32b3d5(_0x35f562, _0x3d2100, _0x183ecb, _0x269572, _0x2c5b18, _0x116c02, _0x238aaa) {
    _0x35f562 = _0x421244(_0x35f562, _0x421244(_0x421244(_0x54de93(_0x3d2100, _0x183ecb, _0x269572), _0x2c5b18), _0x238aaa));
    return _0x421244(_0x39ecbf(_0x35f562, _0x116c02), _0x3d2100);
  }
  function _0x4b6043(_0x3779e4, _0x7be561, _0x1ccd18, _0x70724c, _0x5f1eb4, _0x47b3ab, _0x22e781) {
    _0x3779e4 = _0x421244(_0x3779e4, _0x421244(_0x421244(_0x16058e(_0x7be561, _0x1ccd18, _0x70724c), _0x5f1eb4), _0x22e781));
    return _0x421244(_0x39ecbf(_0x3779e4, _0x47b3ab), _0x7be561);
  }
  function _0x212d5d(_0x3159ed, _0x3fa068, _0x3af97d, _0x4162bc, _0x1054a4, _0x12fb07, _0x21b3d1) {
    _0x3159ed = _0x421244(_0x3159ed, _0x421244(_0x421244(_0x470635(_0x3fa068, _0x3af97d, _0x4162bc), _0x1054a4), _0x21b3d1));
    return _0x421244(_0x39ecbf(_0x3159ed, _0x12fb07), _0x3fa068);
  }
  function _0x5daf6e(_0x3c262a) {
    for (var _0xfefd4a, _0xafbd2c = _0x3c262a.length, _0x5c7436 = _0xafbd2c + 8, _0x47bc3a = (_0x5c7436 - _0x5c7436 % 64) / 64, _0x27bd13 = 16 * (_0x47bc3a + 1), _0x367684 = new Array(_0x27bd13 - 1), _0x2ac71d = 0, _0x79392b = 0; _0xafbd2c > _0x79392b;) {
      _0xfefd4a = (_0x79392b - _0x79392b % 4) / 4;
      _0x2ac71d = _0x79392b % 4 * 8;
      _0x367684[_0xfefd4a] = _0x367684[_0xfefd4a] | _0x3c262a.charCodeAt(_0x79392b) << _0x2ac71d;
      _0x79392b++;
    }
    _0xfefd4a = (_0x79392b - _0x79392b % 4) / 4;
    _0x2ac71d = _0x79392b % 4 * 8;
    _0x367684[_0xfefd4a] = _0x367684[_0xfefd4a] | 128 << _0x2ac71d;
    _0x367684[_0x27bd13 - 2] = _0xafbd2c << 3;
    _0x367684[_0x27bd13 - 1] = _0xafbd2c >>> 29;
    return _0x367684;
  }
  function _0x40eb26(_0x5101e0) {
    var _0x2c5f9a,
      _0x12d0af,
      _0x4bfda7 = "",
      _0x474aa5 = "";
    for (_0x12d0af = 0; 3 >= _0x12d0af; _0x12d0af++) {
      _0x2c5f9a = _0x5101e0 >>> 8 * _0x12d0af & 255;
      _0x474aa5 = "0" + _0x2c5f9a.toString(16);
      _0x4bfda7 += _0x474aa5.substr(_0x474aa5.length - 2, 2);
    }
    return _0x4bfda7;
  }
  function _0x48a538(_0x316a48) {
    _0x316a48 = _0x316a48.replace(/\r\n/g, "\n");
    for (var _0xf71dc5 = "", _0x5ec14c = 0; _0x5ec14c < _0x316a48.length; _0x5ec14c++) {
      var _0x1b8b08 = _0x316a48.charCodeAt(_0x5ec14c);
      128 > _0x1b8b08 ? _0xf71dc5 += String.fromCharCode(_0x1b8b08) : _0x1b8b08 > 127 && 2048 > _0x1b8b08 ? (_0xf71dc5 += String.fromCharCode(_0x1b8b08 >> 6 | 192), _0xf71dc5 += String.fromCharCode(63 & _0x1b8b08 | 128)) : (_0xf71dc5 += String.fromCharCode(_0x1b8b08 >> 12 | 224), _0xf71dc5 += String.fromCharCode(_0x1b8b08 >> 6 & 63 | 128), _0xf71dc5 += String.fromCharCode(63 & _0x1b8b08 | 128));
    }
    return _0xf71dc5;
  }
  var _0x45b2e7,
    _0x1c355a,
    _0x4499c8,
    _0x8bc8a8,
    _0x12a4e2,
    _0x2534ea,
    _0x5d24dc,
    _0x556b4b,
    _0x373c3a,
    _0xc56c4a = [],
    _0x1f37aa = 7,
    _0x58e6e9 = 12,
    _0x4d6717 = 17,
    _0x191a0d = 22,
    _0x3d88fd = 5,
    _0x15723b = 9,
    _0x1c9e2e = 14,
    _0x470ce2 = 20,
    _0x5eece5 = 4,
    _0x24d91e = 11,
    _0x493956 = 16,
    _0x32f098 = 23,
    _0x126981 = 6,
    _0x41c0cf = 10,
    _0xe8e08f = 15,
    _0x3ca20f = 21;
  for (_0x4f9df8 = _0x48a538(_0x4f9df8), _0xc56c4a = _0x5daf6e(_0x4f9df8), _0x2534ea = 1732584193, _0x5d24dc = 4023233417, _0x556b4b = 2562383102, _0x373c3a = 271733878, _0x45b2e7 = 0; _0x45b2e7 < _0xc56c4a.length; _0x45b2e7 += 16) {
    _0x1c355a = _0x2534ea;
    _0x4499c8 = _0x5d24dc;
    _0x8bc8a8 = _0x556b4b;
    _0x12a4e2 = _0x373c3a;
    _0x2534ea = _0xfcdc94(_0x2534ea, _0x5d24dc, _0x556b4b, _0x373c3a, _0xc56c4a[_0x45b2e7 + 0], _0x1f37aa, 3614090360);
    _0x373c3a = _0xfcdc94(_0x373c3a, _0x2534ea, _0x5d24dc, _0x556b4b, _0xc56c4a[_0x45b2e7 + 1], _0x58e6e9, 3905402710);
    _0x556b4b = _0xfcdc94(_0x556b4b, _0x373c3a, _0x2534ea, _0x5d24dc, _0xc56c4a[_0x45b2e7 + 2], _0x4d6717, 606105819);
    _0x5d24dc = _0xfcdc94(_0x5d24dc, _0x556b4b, _0x373c3a, _0x2534ea, _0xc56c4a[_0x45b2e7 + 3], _0x191a0d, 3250441966);
    _0x2534ea = _0xfcdc94(_0x2534ea, _0x5d24dc, _0x556b4b, _0x373c3a, _0xc56c4a[_0x45b2e7 + 4], _0x1f37aa, 4118548399);
    _0x373c3a = _0xfcdc94(_0x373c3a, _0x2534ea, _0x5d24dc, _0x556b4b, _0xc56c4a[_0x45b2e7 + 5], _0x58e6e9, 1200080426);
    _0x556b4b = _0xfcdc94(_0x556b4b, _0x373c3a, _0x2534ea, _0x5d24dc, _0xc56c4a[_0x45b2e7 + 6], _0x4d6717, 2821735955);
    _0x5d24dc = _0xfcdc94(_0x5d24dc, _0x556b4b, _0x373c3a, _0x2534ea, _0xc56c4a[_0x45b2e7 + 7], _0x191a0d, 4249261313);
    _0x2534ea = _0xfcdc94(_0x2534ea, _0x5d24dc, _0x556b4b, _0x373c3a, _0xc56c4a[_0x45b2e7 + 8], _0x1f37aa, 1770035416);
    _0x373c3a = _0xfcdc94(_0x373c3a, _0x2534ea, _0x5d24dc, _0x556b4b, _0xc56c4a[_0x45b2e7 + 9], _0x58e6e9, 2336552879);
    _0x556b4b = _0xfcdc94(_0x556b4b, _0x373c3a, _0x2534ea, _0x5d24dc, _0xc56c4a[_0x45b2e7 + 10], _0x4d6717, 4294925233);
    _0x5d24dc = _0xfcdc94(_0x5d24dc, _0x556b4b, _0x373c3a, _0x2534ea, _0xc56c4a[_0x45b2e7 + 11], _0x191a0d, 2304563134);
    _0x2534ea = _0xfcdc94(_0x2534ea, _0x5d24dc, _0x556b4b, _0x373c3a, _0xc56c4a[_0x45b2e7 + 12], _0x1f37aa, 1804603682);
    _0x373c3a = _0xfcdc94(_0x373c3a, _0x2534ea, _0x5d24dc, _0x556b4b, _0xc56c4a[_0x45b2e7 + 13], _0x58e6e9, 4254626195);
    _0x556b4b = _0xfcdc94(_0x556b4b, _0x373c3a, _0x2534ea, _0x5d24dc, _0xc56c4a[_0x45b2e7 + 14], _0x4d6717, 2792965006);
    _0x5d24dc = _0xfcdc94(_0x5d24dc, _0x556b4b, _0x373c3a, _0x2534ea, _0xc56c4a[_0x45b2e7 + 15], _0x191a0d, 1236535329);
    _0x2534ea = _0x32b3d5(_0x2534ea, _0x5d24dc, _0x556b4b, _0x373c3a, _0xc56c4a[_0x45b2e7 + 1], _0x3d88fd, 4129170786);
    _0x373c3a = _0x32b3d5(_0x373c3a, _0x2534ea, _0x5d24dc, _0x556b4b, _0xc56c4a[_0x45b2e7 + 6], _0x15723b, 3225465664);
    _0x556b4b = _0x32b3d5(_0x556b4b, _0x373c3a, _0x2534ea, _0x5d24dc, _0xc56c4a[_0x45b2e7 + 11], _0x1c9e2e, 643717713);
    _0x5d24dc = _0x32b3d5(_0x5d24dc, _0x556b4b, _0x373c3a, _0x2534ea, _0xc56c4a[_0x45b2e7 + 0], _0x470ce2, 3921069994);
    _0x2534ea = _0x32b3d5(_0x2534ea, _0x5d24dc, _0x556b4b, _0x373c3a, _0xc56c4a[_0x45b2e7 + 5], _0x3d88fd, 3593408605);
    _0x373c3a = _0x32b3d5(_0x373c3a, _0x2534ea, _0x5d24dc, _0x556b4b, _0xc56c4a[_0x45b2e7 + 10], _0x15723b, 38016083);
    _0x556b4b = _0x32b3d5(_0x556b4b, _0x373c3a, _0x2534ea, _0x5d24dc, _0xc56c4a[_0x45b2e7 + 15], _0x1c9e2e, 3634488961);
    _0x5d24dc = _0x32b3d5(_0x5d24dc, _0x556b4b, _0x373c3a, _0x2534ea, _0xc56c4a[_0x45b2e7 + 4], _0x470ce2, 3889429448);
    _0x2534ea = _0x32b3d5(_0x2534ea, _0x5d24dc, _0x556b4b, _0x373c3a, _0xc56c4a[_0x45b2e7 + 9], _0x3d88fd, 568446438);
    _0x373c3a = _0x32b3d5(_0x373c3a, _0x2534ea, _0x5d24dc, _0x556b4b, _0xc56c4a[_0x45b2e7 + 14], _0x15723b, 3275163606);
    _0x556b4b = _0x32b3d5(_0x556b4b, _0x373c3a, _0x2534ea, _0x5d24dc, _0xc56c4a[_0x45b2e7 + 3], _0x1c9e2e, 4107603335);
    _0x5d24dc = _0x32b3d5(_0x5d24dc, _0x556b4b, _0x373c3a, _0x2534ea, _0xc56c4a[_0x45b2e7 + 8], _0x470ce2, 1163531501);
    _0x2534ea = _0x32b3d5(_0x2534ea, _0x5d24dc, _0x556b4b, _0x373c3a, _0xc56c4a[_0x45b2e7 + 13], _0x3d88fd, 2850285829);
    _0x373c3a = _0x32b3d5(_0x373c3a, _0x2534ea, _0x5d24dc, _0x556b4b, _0xc56c4a[_0x45b2e7 + 2], _0x15723b, 4243563512);
    _0x556b4b = _0x32b3d5(_0x556b4b, _0x373c3a, _0x2534ea, _0x5d24dc, _0xc56c4a[_0x45b2e7 + 7], _0x1c9e2e, 1735328473);
    _0x5d24dc = _0x32b3d5(_0x5d24dc, _0x556b4b, _0x373c3a, _0x2534ea, _0xc56c4a[_0x45b2e7 + 12], _0x470ce2, 2368359562);
    _0x2534ea = _0x4b6043(_0x2534ea, _0x5d24dc, _0x556b4b, _0x373c3a, _0xc56c4a[_0x45b2e7 + 5], _0x5eece5, 4294588738);
    _0x373c3a = _0x4b6043(_0x373c3a, _0x2534ea, _0x5d24dc, _0x556b4b, _0xc56c4a[_0x45b2e7 + 8], _0x24d91e, 2272392833);
    _0x556b4b = _0x4b6043(_0x556b4b, _0x373c3a, _0x2534ea, _0x5d24dc, _0xc56c4a[_0x45b2e7 + 11], _0x493956, 1839030562);
    _0x5d24dc = _0x4b6043(_0x5d24dc, _0x556b4b, _0x373c3a, _0x2534ea, _0xc56c4a[_0x45b2e7 + 14], _0x32f098, 4259657740);
    _0x2534ea = _0x4b6043(_0x2534ea, _0x5d24dc, _0x556b4b, _0x373c3a, _0xc56c4a[_0x45b2e7 + 1], _0x5eece5, 2763975236);
    _0x373c3a = _0x4b6043(_0x373c3a, _0x2534ea, _0x5d24dc, _0x556b4b, _0xc56c4a[_0x45b2e7 + 4], _0x24d91e, 1272893353);
    _0x556b4b = _0x4b6043(_0x556b4b, _0x373c3a, _0x2534ea, _0x5d24dc, _0xc56c4a[_0x45b2e7 + 7], _0x493956, 4139469664);
    _0x5d24dc = _0x4b6043(_0x5d24dc, _0x556b4b, _0x373c3a, _0x2534ea, _0xc56c4a[_0x45b2e7 + 10], _0x32f098, 3200236656);
    _0x2534ea = _0x4b6043(_0x2534ea, _0x5d24dc, _0x556b4b, _0x373c3a, _0xc56c4a[_0x45b2e7 + 13], _0x5eece5, 681279174);
    _0x373c3a = _0x4b6043(_0x373c3a, _0x2534ea, _0x5d24dc, _0x556b4b, _0xc56c4a[_0x45b2e7 + 0], _0x24d91e, 3936430074);
    _0x556b4b = _0x4b6043(_0x556b4b, _0x373c3a, _0x2534ea, _0x5d24dc, _0xc56c4a[_0x45b2e7 + 3], _0x493956, 3572445317);
    _0x5d24dc = _0x4b6043(_0x5d24dc, _0x556b4b, _0x373c3a, _0x2534ea, _0xc56c4a[_0x45b2e7 + 6], _0x32f098, 76029189);
    _0x2534ea = _0x4b6043(_0x2534ea, _0x5d24dc, _0x556b4b, _0x373c3a, _0xc56c4a[_0x45b2e7 + 9], _0x5eece5, 3654602809);
    _0x373c3a = _0x4b6043(_0x373c3a, _0x2534ea, _0x5d24dc, _0x556b4b, _0xc56c4a[_0x45b2e7 + 12], _0x24d91e, 3873151461);
    _0x556b4b = _0x4b6043(_0x556b4b, _0x373c3a, _0x2534ea, _0x5d24dc, _0xc56c4a[_0x45b2e7 + 15], _0x493956, 530742520);
    _0x5d24dc = _0x4b6043(_0x5d24dc, _0x556b4b, _0x373c3a, _0x2534ea, _0xc56c4a[_0x45b2e7 + 2], _0x32f098, 3299628645);
    _0x2534ea = _0x212d5d(_0x2534ea, _0x5d24dc, _0x556b4b, _0x373c3a, _0xc56c4a[_0x45b2e7 + 0], _0x126981, 4096336452);
    _0x373c3a = _0x212d5d(_0x373c3a, _0x2534ea, _0x5d24dc, _0x556b4b, _0xc56c4a[_0x45b2e7 + 7], _0x41c0cf, 1126891415);
    _0x556b4b = _0x212d5d(_0x556b4b, _0x373c3a, _0x2534ea, _0x5d24dc, _0xc56c4a[_0x45b2e7 + 14], _0xe8e08f, 2878612391);
    _0x5d24dc = _0x212d5d(_0x5d24dc, _0x556b4b, _0x373c3a, _0x2534ea, _0xc56c4a[_0x45b2e7 + 5], _0x3ca20f, 4237533241);
    _0x2534ea = _0x212d5d(_0x2534ea, _0x5d24dc, _0x556b4b, _0x373c3a, _0xc56c4a[_0x45b2e7 + 12], _0x126981, 1700485571);
    _0x373c3a = _0x212d5d(_0x373c3a, _0x2534ea, _0x5d24dc, _0x556b4b, _0xc56c4a[_0x45b2e7 + 3], _0x41c0cf, 2399980690);
    _0x556b4b = _0x212d5d(_0x556b4b, _0x373c3a, _0x2534ea, _0x5d24dc, _0xc56c4a[_0x45b2e7 + 10], _0xe8e08f, 4293915773);
    _0x5d24dc = _0x212d5d(_0x5d24dc, _0x556b4b, _0x373c3a, _0x2534ea, _0xc56c4a[_0x45b2e7 + 1], _0x3ca20f, 2240044497);
    _0x2534ea = _0x212d5d(_0x2534ea, _0x5d24dc, _0x556b4b, _0x373c3a, _0xc56c4a[_0x45b2e7 + 8], _0x126981, 1873313359);
    _0x373c3a = _0x212d5d(_0x373c3a, _0x2534ea, _0x5d24dc, _0x556b4b, _0xc56c4a[_0x45b2e7 + 15], _0x41c0cf, 4264355552);
    _0x556b4b = _0x212d5d(_0x556b4b, _0x373c3a, _0x2534ea, _0x5d24dc, _0xc56c4a[_0x45b2e7 + 6], _0xe8e08f, 2734768916);
    _0x5d24dc = _0x212d5d(_0x5d24dc, _0x556b4b, _0x373c3a, _0x2534ea, _0xc56c4a[_0x45b2e7 + 13], _0x3ca20f, 1309151649);
    _0x2534ea = _0x212d5d(_0x2534ea, _0x5d24dc, _0x556b4b, _0x373c3a, _0xc56c4a[_0x45b2e7 + 4], _0x126981, 4149444226);
    _0x373c3a = _0x212d5d(_0x373c3a, _0x2534ea, _0x5d24dc, _0x556b4b, _0xc56c4a[_0x45b2e7 + 11], _0x41c0cf, 3174756917);
    _0x556b4b = _0x212d5d(_0x556b4b, _0x373c3a, _0x2534ea, _0x5d24dc, _0xc56c4a[_0x45b2e7 + 2], _0xe8e08f, 718787259);
    _0x5d24dc = _0x212d5d(_0x5d24dc, _0x556b4b, _0x373c3a, _0x2534ea, _0xc56c4a[_0x45b2e7 + 9], _0x3ca20f, 3951481745);
    _0x2534ea = _0x421244(_0x2534ea, _0x1c355a);
    _0x5d24dc = _0x421244(_0x5d24dc, _0x4499c8);
    _0x556b4b = _0x421244(_0x556b4b, _0x8bc8a8);
    _0x373c3a = _0x421244(_0x373c3a, _0x12a4e2);
  }
  var _0x3cdfc4 = _0x40eb26(_0x2534ea) + _0x40eb26(_0x5d24dc) + _0x40eb26(_0x556b4b) + _0x40eb26(_0x373c3a);
  return _0x3cdfc4.toLowerCase();
}
function _0x458ba4(_0x15d12d, _0x561b5c) {
  "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
  return new class {
    constructor(_0xd79d44, _0x5af1fa) {
      this.name = _0xd79d44;
      this.notifyStr = "";
      this.startTime = new Date().getTime();
      Object.assign(this, _0x5af1fa);
      console.log(this.name + " 开始运行：\n");
    }
    isNode() {
      return "undefined" != typeof module && !!module.exports;
    }
    isQuanX() {
      return "undefined" != typeof $task;
    }
    isSurge() {
      return "undefined" != typeof $httpClient && "undefined" == typeof $loon;
    }
    isLoon() {
      return "undefined" != typeof $loon;
    }
    getdata(_0x3dbcdf) {
      let _0x476acf = this.getval(_0x3dbcdf);
      if (/^@/.test(_0x3dbcdf)) {
        const [, _0x413674, _0x90aa0f] = /^@(.*?)\.(.*?)$/.exec(_0x3dbcdf),
          _0x3d56bb = _0x413674 ? this.getval(_0x413674) : "";
        if (_0x3d56bb) {
          try {
            const _0x42e8e1 = JSON.parse(_0x3d56bb);
            _0x476acf = _0x42e8e1 ? this.lodash_get(_0x42e8e1, _0x90aa0f, "") : _0x476acf;
          } catch (_0x1a3047) {
            _0x476acf = "";
          }
        }
      }
      return _0x476acf;
    }
    setdata(_0x348546, _0x7aa4e8) {
      let _0x525d7a = !1;
      if (/^@/.test(_0x7aa4e8)) {
        const [, _0x2dfb99, _0xc34c3f] = /^@(.*?)\.(.*?)$/.exec(_0x7aa4e8),
          _0x30abbc = this.getval(_0x2dfb99),
          _0x392cd1 = _0x2dfb99 ? "null" === _0x30abbc ? null : _0x30abbc || "{}" : "{}";
        try {
          const _0x44c285 = JSON.parse(_0x392cd1);
          this.lodash_set(_0x44c285, _0xc34c3f, _0x348546);
          _0x525d7a = this.setval(JSON.stringify(_0x44c285), _0x2dfb99);
        } catch (_0x280e83) {
          const _0x2b29ec = {};
          this.lodash_set(_0x2b29ec, _0xc34c3f, _0x348546);
          _0x525d7a = this.setval(JSON.stringify(_0x2b29ec), _0x2dfb99);
        }
      } else {
        _0x525d7a = this.setval(_0x348546, _0x7aa4e8);
      }
      return _0x525d7a;
    }
    getval(_0x2e4d2e) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(_0x2e4d2e) : this.isQuanX() ? $prefs.valueForKey(_0x2e4d2e) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x2e4d2e]) : this.data && this.data[_0x2e4d2e] || null;
    }
    setval(_0x5996ac, _0x49c373) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(_0x5996ac, _0x49c373) : this.isQuanX() ? $prefs.setValueForKey(_0x5996ac, _0x49c373) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x49c373] = _0x5996ac, this.writedata(), !0) : this.data && this.data[_0x49c373] || null;
    }
    send(_0x15998b, _0x130e5e, _0x232613 = () => {}) {
      if (_0x15998b != "get" && _0x15998b != "post" && _0x15998b != "put" && _0x15998b != "delete") {
        console.log("无效的http方法：" + _0x15998b);
        return;
      }
      if (_0x15998b == "get" && _0x130e5e.headers) {
        delete _0x130e5e.headers["Content-Type"];
        delete _0x130e5e.headers["Content-Length"];
      } else {
        if (_0x130e5e.body && _0x130e5e.headers) {
          if (!_0x130e5e.headers["Content-Type"]) {
            _0x130e5e.headers["Content-Type"] = "application/x-www-form-urlencoded";
          }
        }
      }
      if (this.isSurge() || this.isLoon()) {
        if (this.isSurge() && this.isNeedRewrite) {
          _0x130e5e.headers = _0x130e5e.headers || {};
          const _0x10120a = {
            "X-Surge-Skip-Scripting": !1
          };
          Object.assign(_0x130e5e.headers, _0x10120a);
        }
        const _0xd2c78b = {
          method: _0x15998b,
          url: _0x130e5e.url,
          headers: _0x130e5e.headers,
          timeout: _0x130e5e.timeout,
          data: _0x130e5e.body
        };
        if (_0x15998b == "get") {
          delete _0xd2c78b.data;
        }
        $axios(_0xd2c78b).then(_0x4aee99 => {
          const {
              status: _0x52e446,
              request: _0x43a0f0,
              headers: _0x1fd672,
              data: _0x2b0cfb
            } = _0x4aee99,
            _0x522978 = {
              statusCode: _0x52e446,
              headers: _0x1fd672,
              body: _0x2b0cfb
            };
          _0x232613(null, _0x43a0f0, _0x522978);
        }).catch(_0x438b7d => console.log(_0x438b7d));
      } else {
        if (this.isQuanX()) {
          const _0x367ef7 = {
            hints: !1
          };
          _0x130e5e.method = _0x15998b.toUpperCase();
          this.isNeedRewrite && (_0x130e5e.opts = _0x130e5e.opts || {}, Object.assign(_0x130e5e.opts, _0x367ef7));
          $task.fetch(_0x130e5e).then(_0x2782c4 => {
            const {
                statusCode: _0x113129,
                request: _0x3fa7c7,
                headers: _0x22b40b,
                body: _0x23ebaf
              } = _0x2782c4,
              _0x3272d7 = {
                statusCode: _0x113129,
                headers: _0x22b40b,
                body: _0x23ebaf
              };
            _0x232613(null, _0x3fa7c7, _0x3272d7);
          }, _0x4bee82 => _0x232613(_0x4bee82));
        } else {
          if (this.isNode()) {
            this.got = this.got ? this.got : require("got");
            const {
                url: _0x5f1992,
                ..._0x5704b3
              } = _0x130e5e,
              _0x36c299 = {
                followRedirect: false
              };
            this.instance = this.got.extend(_0x36c299);
            this.instance[_0x15998b](_0x5f1992, _0x5704b3).then(_0x4f0f9c => {
              const {
                  statusCode: _0x33be81,
                  request: _0x53ba15,
                  headers: _0x575805,
                  body: _0x192c2e
                } = _0x4f0f9c,
                _0x450e29 = {
                  statusCode: _0x33be81,
                  headers: _0x575805,
                  body: _0x192c2e
                };
              _0x232613(null, _0x53ba15, _0x450e29);
            }, _0x20803c => {
              const {
                message: _0xa5068,
                response: _0x44faa9
              } = _0x20803c;
              _0x232613(_0xa5068, _0x44faa9, _0x44faa9 && _0x44faa9.body);
            });
          }
        }
      }
    }
    time(_0x22e140) {
      let _0x2c8952 = {
        "M+": new Date().getMonth() + 1,
        "d+": new Date().getDate(),
        "h+": new Date().getHours(),
        "m+": new Date().getMinutes(),
        "s+": new Date().getSeconds(),
        "q+": Math.floor((new Date().getMonth() + 3) / 3),
        S: new Date().getMilliseconds()
      };
      /(y+)/.test(_0x22e140) && (_0x22e140 = _0x22e140.replace(RegExp.$1, (new Date().getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let _0x5a2e3d in _0x2c8952) new RegExp("(" + _0x5a2e3d + ")").test(_0x22e140) && (_0x22e140 = _0x22e140.replace(RegExp.$1, 1 == RegExp.$1.length ? _0x2c8952[_0x5a2e3d] : ("00" + _0x2c8952[_0x5a2e3d]).substr(("" + _0x2c8952[_0x5a2e3d]).length)));
      return _0x22e140;
    }
    async showmsg() {
      if (!this.notifyStr) {
        return;
      }
      let _0x34b827 = this.name + " 运行通知\n\n" + this.notifyStr;
      if (_0x2a70a1.isNode()) {
        var _0x51cf40 = require("./sendNotify");
        console.log("\n============== 推送 ==============");
        await _0x51cf40.sendNotify(this.name, _0x34b827);
      } else {
        this.msg(_0x34b827);
      }
    }
    logAndNotify(_0x45094f) {
      console.log(_0x45094f);
      this.notifyStr += _0x45094f;
      this.notifyStr += "\n";
    }
    msg(_0x4caff0 = t, _0x5092a8 = "", _0x30cfa6 = "", _0x2ba6d5) {
      const _0x1764aa = _0x4ef941 => {
        if (!_0x4ef941) {
          return _0x4ef941;
        }
        if ("string" == typeof _0x4ef941) {
          return this.isLoon() ? _0x4ef941 : this.isQuanX() ? {
            "open-url": _0x4ef941
          } : this.isSurge() ? {
            url: _0x4ef941
          } : void 0;
        }
        if ("object" == typeof _0x4ef941) {
          if (this.isLoon()) {
            let _0x3ab521 = _0x4ef941.openUrl || _0x4ef941.url || _0x4ef941["open-url"],
              _0x380773 = _0x4ef941.mediaUrl || _0x4ef941["media-url"];
            const _0x41a31a = {
              openUrl: _0x3ab521,
              mediaUrl: _0x380773
            };
            return _0x41a31a;
          }
          if (this.isQuanX()) {
            let _0xb2c4da = _0x4ef941["open-url"] || _0x4ef941.url || _0x4ef941.openUrl,
              _0x4a8a29 = _0x4ef941["media-url"] || _0x4ef941.mediaUrl;
            const _0x3c591f = {
              "open-url": _0xb2c4da,
              "media-url": _0x4a8a29
            };
            return _0x3c591f;
          }
          if (this.isSurge()) {
            let _0x1bfaa3 = _0x4ef941.url || _0x4ef941.openUrl || _0x4ef941["open-url"];
            const _0x4582ec = {
              url: _0x1bfaa3
            };
            return _0x4582ec;
          }
        }
      };
      this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(_0x4caff0, _0x5092a8, _0x30cfa6, _0x1764aa(_0x2ba6d5)) : this.isQuanX() && $notify(_0x4caff0, _0x5092a8, _0x30cfa6, _0x1764aa(_0x2ba6d5)));
      let _0x59f0b0 = ["", "============== 系统通知 =============="];
      _0x59f0b0.push(_0x4caff0);
      _0x5092a8 && _0x59f0b0.push(_0x5092a8);
      _0x30cfa6 && _0x59f0b0.push(_0x30cfa6);
      console.log(_0x59f0b0.join("\n"));
    }
    getMin(_0x43721e, _0x113e6e) {
      return _0x43721e < _0x113e6e ? _0x43721e : _0x113e6e;
    }
    getMax(_0x13fb69, _0xbee87) {
      return _0x13fb69 < _0xbee87 ? _0xbee87 : _0x13fb69;
    }
    padStr(_0x1b10c7, _0x3aaaf2, _0x1f9fc3 = "0") {
      let _0x162ba0 = String(_0x1b10c7),
        _0x28456a = _0x3aaaf2 > _0x162ba0.length ? _0x3aaaf2 - _0x162ba0.length : 0,
        _0xadbfd7 = "";
      for (let _0x35d183 = 0; _0x35d183 < _0x28456a; _0x35d183++) {
        _0xadbfd7 += _0x1f9fc3;
      }
      _0xadbfd7 += _0x162ba0;
      return _0xadbfd7;
    }
    json2str(_0x15dc72, _0x230614, _0x5d0e90 = false) {
      let _0x3bb0fb = [];
      for (let _0x38d14f of Object.keys(_0x15dc72).sort()) {
        let _0x5d73b7 = _0x15dc72[_0x38d14f];
        if (_0x5d73b7 && _0x5d0e90) {
          _0x5d73b7 = encodeURIComponent(_0x5d73b7);
        }
        _0x3bb0fb.push(_0x38d14f + "=" + _0x5d73b7);
      }
      return _0x3bb0fb.join(_0x230614);
    }
    str2json(_0x1921d5, _0x500818 = false) {
      let _0x4b7fbf = {};
      for (let _0x5bd224 of _0x1921d5.split("&")) {
        if (!_0x5bd224) {
          continue;
        }
        let _0x2c2163 = _0x5bd224.indexOf("=");
        if (_0x2c2163 == -1) {
          continue;
        }
        let _0xf5952 = _0x5bd224.substr(0, _0x2c2163),
          _0x271d38 = _0x5bd224.substr(_0x2c2163 + 1);
        if (_0x500818) {
          _0x271d38 = decodeURIComponent(_0x271d38);
        }
        _0x4b7fbf[_0xf5952] = _0x271d38;
      }
      return _0x4b7fbf;
    }
    randomString(_0x577111, _0x4bd969 = "abcdef0123456789") {
      let _0xbaa4b7 = "";
      for (let _0x1276b8 = 0; _0x1276b8 < _0x577111; _0x1276b8++) {
        _0xbaa4b7 += _0x4bd969.charAt(Math.floor(Math.random() * _0x4bd969.length));
      }
      return _0xbaa4b7;
    }
    wait(_0x4f666c) {
      return new Promise(_0x396e99 => setTimeout(_0x396e99, _0x4f666c));
    }
    done(_0x1e7404 = {}) {
      const _0x358b35 = new Date().getTime(),
        _0x451de7 = (_0x358b35 - this.startTime) / 1000;
      console.log("\n" + this.name + " 运行结束，共运行了 " + _0x451de7 + " 秒！");
      if (this.isSurge() || this.isQuanX() || this.isLoon()) {
        $done(_0x1e7404);
      }
    }
  }(_0x15d12d, _0x561b5c);
}