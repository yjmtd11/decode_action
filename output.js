//Thu May 29 2025 16:36:30 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
const _0x7c5542 = new Env("多多果园");
var _0x5a970f = (_0x7c5542.isNode() ? process.env.ddgyck : _0x7c5542.getdata("ddgyck")) || "",
  _0x9e2080 = "",
  _0x3b94d5 = 0,
  _0x4da9a1 = [],
  _0x107268 = new Date(),
  _0x23ef33 = _0x107268.getHours();
class _0x3ec43f {
  constructor(_0x1ae0b9) {
    this.ck = _0x1ae0b9.split("#");
    this.ckA = this.ck[0];
    this.ckB = this.ck[1];
    this.run = false;
    this.index = ++_0x3b94d5;
    this.msg = 1;
    this.water = 0;
    this.token = null;
    this.uid = null;
    this.nickName = "靓仔";
    this.treeType = null;
    this.fertilizerData = {
      "large": {
        "sum": 0,
        "id": []
      },
      "small": {
        "sum": 0,
        "id": []
      }
    };
    this.boxStatus = 0;
    this.luckyWaterStatus = 0;
  }
  async ["missionList"]() {
    let _0x4abde5 = {
        "url": "https://mobile.yangkeduo.com/proxy/api/api/manor/mission/list",
        "body": "{\"mission_types\":[36287,36288,37113,37341,37349,36286,30071,36001,36002,37298],\"fun_pl\":2}",
        "headers": {
          "accesstoken": this.ckA,
          "anti-token": this.ckB
        }
      },
      _0x2d4f24 = await _0x4185e1("post", _0x4abde5);
    if (!_0x2d4f24) {
      {
        return;
      }
    }
    if (_0x2d4f24.mission_list) {
      let _0x114ba1 = _0x2d4f24.mission_list;
      for (let _0xc23b13 in _0x114ba1) {
        {
          if (_0x114ba1[_0xc23b13].max_count - _0x114ba1[_0xc23b13].finished_count) {
            console.log(_0x114ba1[_0xc23b13]);
            await this.domission2(_0x114ba1[_0xc23b13].type);
            await _0x7c5542.wait(1000);
          }
        }
      }
    } else {
      _0x7c5542.log("获取任务列表失败");
    }
  }
  async ["domission2"](_0x24e3b0, _0x1bfd72) {
    let _0x5eb9a9 = {
        "url": "https://mobile.yangkeduo.com/proxy/api/api/fun-gateway/command/mission/complete",
        "body": "{\"mission_type\":\"" + _0x24e3b0 + "\",\"business_id\":3,\"biz_source\":\"SECKILL\"}",
        "headers": {
          "accesstoken": this.ckA,
          "anti-token": this.ckB
        }
      },
      _0x4fd209 = await _0x4185e1("post", _0x5eb9a9);
    if (!_0x4fd209) {
      return;
    }
    console.log(_0x4fd209);
    await this.gain(_0x24e3b0, _0x1bfd72);
  }
  async ["domission"](_0x5b8973, _0x5ab514) {
    let _0x2a4996 = {
        "url": "https://mobile.yangkeduo.com/proxy/api/api/manor/mission/complete",
        "body": "{\"mission_type\":" + _0x5b8973 + ",\"tubetoken\":\"" + this.token + "\",\"fun_pl\":2}",
        "headers": {
          "accesstoken": this.ckA,
          "anti-token": this.ckB
        }
      },
      _0xdb15cc = await _0x4185e1("post", _0x2a4996);
    if (!_0xdb15cc) {
      {
        return;
      }
    }
    _0x9e2080 = _0x5ab514 + "领取";
    if (_0xdb15cc.result) {
      let _0x323d6f = _0xdb15cc.reward_amount;
      this.reward += _0x323d6f;
      _0x7c5542.log(_0x9e2080 += ":获得" + _0x323d6f + "💧");
    } else if (_0xdb15cc.server_time) {
      _0x7c5542.log(_0x9e2080 += "失败：未知");
    } else {
      _0x7c5542.log(_0x9e2080 += "失败," + _0xdb15cc.error_msg);
    }
  }
  async ["gain2"](_0x384ee5, _0x499045) {
    let _0x6981dc = {
        "url": "https://mobile.yangkeduo.com/proxy/api/api/manor/mission/complete/gain",
        "body": "{\"mission_type\":" + _0x384ee5 + ",\"gain_time\":1,\"no_reward\":false,\"tubetoken\":\"" + this.token + "\",\"fun_pl\":2}",
        "headers": {
          "accesstoken": this.ckA,
          "anti-token": this.ckB
        }
      },
      _0x3eb942 = await _0x4185e1("post", _0x6981dc);
    if (!_0x3eb942) {
      {
        return;
      }
    }
    _0x9e2080 = _0x499045;
    if (_0x3eb942.reward_list) {
      let _0xf5cba6 = _0x3eb942.mission_list["" + _0x384ee5],
        _0x3a6fa5 = _0xf5cba6.max_count - _0xf5cba6.finished_count;
      let _0xd97535 = _0x3eb942.reward_list[0],
        _0xb81ee2 = "" + (_0xd97535.reward_type == 1 ? "💧" : "化肥"),
        _0x247725 = _0xd97535.reward_amount;
      _0x7c5542.log(_0x9e2080 + (": 获得" + _0xb81ee2 + "*" + _0x247725 + ",今日还可领" + _0x3a6fa5 + "次"));
    } else if (_0x3eb942.server_time) {
      _0x7c5542.log(_0x9e2080 += "失败：未知");
    } else {
      _0x7c5542.log(_0x9e2080 += "失败：" + _0x3eb942.error_msg);
    }
  }
  async ["gain"](_0xbb9e26, _0x58f881) {
    let _0x1433ee = {
        "url": "https://mobile.yangkeduo.com/proxy/api/api/manor/common/water/gain",
        "body": "{ \"type\":" + _0xbb9e26 + ", \"mission_type\": null, \"params\":{\"15\":30000}, \"tubetoken\": \"" + this.token + "\", \"fun_pl\": 2 } ",
        "headers": {
          "accesstoken": this.ckA,
          "anti-token": this.ckB
        }
      },
      _0x1220c3 = await _0x4185e1("post", _0x1433ee);
    if (!_0x1220c3) {
      {
        return;
      }
    }
    _0x9e2080 = _0x58f881;
    if (_0x1220c3.reward_list) {
      {
        let _0x251cb9 = _0x1220c3.reward_list[0].reward_amount;
        _0x7c5542.log(_0x9e2080 + (":获得" + _0x251cb9 + "💧"));
      }
    } else if (_0x1220c3.reward_amount) {
      {
        let _0x28be14 = parseInt(_0x1220c3.reward_amount / 1000);
        this.reward += _0x28be14;
        _0x7c5542.log(_0x9e2080 += ":获得" + _0x28be14 + "💧");
      }
    } else if (_0x1220c3.status == 3) {
      _0x7c5542.log(_0x9e2080 += "失败：已领取");
    } else if (_0x1220c3.server_time) {
      {
        _0x7c5542.log(_0x9e2080 += "失败：未知");
      }
    } else {
      {
        _0x7c5542.log(_0x9e2080 += "失败：" + _0x1220c3.error_msg);
      }
    }
  }
  async ["openBox"](_0x3f21bd) {
    let _0x1a8a39 = {
        "url": "https://mobile.yangkeduo.com/proxy/api/api/manor/withered/open/box",
        "body": "{ \"box_order\":" + _0x3f21bd + ", \"tubetoken\": \"" + this.token + "\", \"fun_pl\": 2 } ",
        "headers": {
          "accesstoken": this.ckA,
          "anti-token": this.ckB
        }
      },
      _0x4fcbe2 = await _0x4185e1("post", _0x1a8a39);
    if (!_0x4fcbe2) {
      {
        return;
      }
    }
    if (_0x4fcbe2.reward_list[0] || _0x4fcbe2.status == 1) {
      {
        _0x9e2080 = "宝箱开启成功，";
        if (_0x4fcbe2.reward_list[0].reward_type == 1) {
          _0x7c5542.log(_0x9e2080 += "获得水滴" + _0x4fcbe2.reward_list[0].reward_amount + " ");
        } else {
          _0x7c5542.log(_0x9e2080 += "奖励类型" + _0x4fcbe2.reward_list[0].reward_type + " ");
        }
      }
    } else if (_0x4fcbe2.status == 3) {
      _0x7c5542.log("此宝箱已开启");
    } else {
      _0x7c5542.log("宝箱开启失败");
    }
  }
  async ["gainWater"]() {
    let _0x1b90d3 = {
        "url": "https://mobile.yangkeduo.com/proxy/api/api/manor/gain/accumulate/water/reward",
        "headers": {
          "accesstoken": this.ckA,
          "anti-token": this.ckB
        }
      },
      _0x50d448 = await _0x4185e1("post", _0x1b90d3);
    if (!_0x50d448) {
      {
        return;
      }
    }
    _0x9e2080 = "蓄水瓶领取";
    if (_0x50d448.accumulate_water_vo) {
      let _0x5541ae = _0x50d448.accumulate_water_vo.reward_amount;
      this.water += _0x5541ae;
      _0x7c5542.log(_0x9e2080 += "成功：获得" + _0x5541ae + "水滴");
    } else {
      _0x7c5542.log(_0x9e2080 += "失败：" + _0x50d448.error_msg);
    }
  }
  async ["treeConfig"]() {
    let _0x3c3cac = {
        "url": "https://mobile.yangkeduo.com/proxy/api/api/manor-query/medal/wall/info",
        "headers": {
          "accesstoken": this.ckA,
          "anti-token": this.ckB
        }
      },
      _0x5e9315 = await _0x4185e1("post", _0x3c3cac);
    if (!_0x5e9315) {
      return;
    }
    let _0x542373 = _0x5e9315.frontConfig[this.treeType].fruitName;
    this.treeName = _0x542373;
  }
  async ["tree"]() {
    let _0x5e93e4 = {
        "url": "https://mobile.yangkeduo.com/proxy/api/api/manor/water/cost",
        "headers": {
          "accesstoken": this.ckA,
          "anti-token": this.ckB
        }
      },
      _0x4fb127 = await _0x4185e1("post", _0x5e93e4);
    if (!_0x4fb127) {
      return;
    }
    if (_0x4fb127.error_code) {
      _0x7c5542.log("获取果树信息失败");
    } else {
      if (!_0x4fb127.tubetoken) {
        {
          _0x7c5542.log("获取tubetoken失败");
        }
      }
      this.token = _0x4fb127.tubetoken;
      let _0x42a29e = _0x4fb127.shake_dice_activity_icon_vo;
      if (_0x42a29e && _0x42a29e.shake_dice_activity_vo) {
        {
          this.uid = _0x42a29e.shake_dice_activity_vo.user_shake_dice_vo.uid;
        }
      }
      this.treeType = _0x4fb127.product.type;
      this.water = _0x4fb127.now_water_amount;
      let _0x29ac7d = _0x4fb127.product.progress_text,
        _0x3ec7f0 = _0x29ac7d ? (100 - _0x29ac7d).toFixed(2) + "%" : "未结果";
      _0x9e2080 = "水壶：" + this.water + "💧,进度：" + _0x3ec7f0;
      _0x7c5542.log(this.msg ? _0x9e2080 : "浇水成功:" + _0x9e2080 + " ");
      if (_0x4fb127.accumulate_water_vo) {
        let _0x5f32de = _0x4fb127.accumulate_water_vo.activity_water_amount,
          _0x41d78c = _0x4fb127.accumulate_water_vo.accumulate_reward_vo.origin_value,
          _0x45898c = _0x4fb127.accumulate_water_vo.accumulate_reward_vo.end_value;
        _0x9e2080 = "蓄水瓶：" + _0x5f32de + "💧";
        if (_0x41d78c) {
          _0x9e2080 += ", 满" + _0x41d78c + "可得" + _0x45898c + " ";
        }
        if (this.msg) {
          _0x7c5542.log(_0x9e2080);
        }
      } else if (_0x23ef33 >= 7) {
        await this.gainWater();
      }
      if (_0x4fb127.cost_water_competition) {
        {
          let _0x2709ef = _0x4fb127.cost_water_competition,
            _0xb1a831 = _0x2709ef.current_rank,
            _0x57d454 = _0x2709ef.manor_reward_list[0].reward_amount,
            _0x492e01 = new Date(Number(_0x2709ef.end_timestamp + "000")),
            _0x56c795 = _0x492e01.getDate(),
            _0x273e10 = _0x492e01.getHours(),
            _0x71fc72 = _0x56c795 - _0x107268.getDate(),
            _0x5645e9 = _0x273e10 - _0x107268.getHours(),
            _0x1205f8 = _0x71fc72 == 0 ? _0x5645e9 + "小时" : _0x71fc72 + "天";
          if (this.msg) {
            _0x7c5542.log("浇水竞赛：排名第" + _0xb1a831 + "，剩余" + _0x1205f8 + "结束, 可得" + _0x57d454 + "💧");
          }
        }
      }
      if (_0x4fb127.divide_water_competition_vo) {
        let _0x538a86 = _0x4fb127.divide_water_competition_vo,
          _0x28f93e = _0x538a86.reward_amount,
          _0x3d134c = _0x538a86.pk_status;
        if (this.msg) {
          {
            _0x7c5542.log("PK奖励:可得" + _0x28f93e + "💧，PK" + (_0x3d134c == 2 ? "结束" : "进行中") + " ");
          }
        }
        if (_0x3d134c == 2) {
          await this.gain(33, "PK奖励");
          await _0x7c5542.wait(3000);
        }
      }
      if (_0x4fb127.withered_back_box_list) {
        {
          let _0x52c9aa = "",
            _0x47cc50 = 0;
          for (let _0x3851d2 of _0x4fb127.withered_back_box_list) {
            _0x52c9aa += "宝箱" + _0x3851d2.box_order + "," + (_0x3851d2.status == 3 ? "已" : "未") + " 开启\n";
            if (!this.boxStatus && _0x3851d2.status != 3) {
              {
                this.boxStatus = 1;
                _0x47cc50 = 1;
                await this.openBox(_0x3851d2.box_order);
                await _0x7c5542.wait(3000);
              }
            }
          }
          if (this.msg) {
            {
              _0x7c5542.log(_0x47cc50 ? _0x52c9aa : "宝箱已全部开启");
            }
          }
        }
      }
    }
    this.msg = 0;
  }
  async ["my"]() {
    let _0xd61605 = {
        "url": "https://mobile.yangkeduo.com/proxy/api/api/manor-query/friend/list/page",
        "headers": {
          "accesstoken": this.ckA,
          "anti-token": this.ckB
        }
      },
      _0xd3c4c7 = await _0x4185e1("post", _0xd61605);
    if (!_0xd3c4c7.error_code && _0xd3c4c7) {
      {
        this.run = true;
        this.nickName = _0xd3c4c7.current_user_info.nickname;
        _0x7c5542.log("你好, " + this.nickName + " ");
      }
    } else {
      {
        _0x7c5542.log("账号" + this.index + " 失效");
      }
    }
  }
  async ["f"]() {
    let _0x1b68a8 = {
        "url": "https://mobile.yangkeduo.com/proxy/api/api/manor-query/health/info?pdduid=7295622252&is_back=1",
        "headers": {
          "accesstoken": this.ckA,
          "anti-token": this.ckB
        }
      },
      _0x3c3248 = await _0x4185e1("post", _0x1b68a8);
    if (!_0x3c3248) {
      return;
    }
    if (_0x3c3248.backpack_goods_list) {
      this.fertilizerData = _0x3c3248.backpack_goods_list;
      let _0x4cdf43 = this.fertilizerData,
        _0x31abef = 0,
        _0x5a09e9 = 0;
      for (let _0xccd548 in _0x4cdf43) {
        if (_0x4cdf43[_0xccd548].type == 1) {
          {
            _0x31abef += _0x4cdf43[_0xccd548].available_amount;
          }
        } else if (_0x4cdf43[_0xccd548].type == 2) {
          _0x5a09e9 += _0x4cdf43[_0xccd548].available_amount;
        }
      }
      _0x7c5542.log("背包：大化肥" + _0x31abef + ",小化肥" + _0x5a09e9 + " ");
      if (_0x31abef != 0 || _0x5a09e9 != 0) {
        {
          if (this.water > 500) {
            _0x7c5542.log("剩余💧大于500，将优先使用大化肥");
            _0x31abef >= 1 ? this.fertilizer(1, _0x31abef) : this.fertilizer(2, _0x5a09e9);
          } else if (this.water > 200) {
            {
              _0x7c5542.log("剩余💧大于200，使用小化肥");
              this.fertilizer(2, _0x5a09e9);
            }
          } else {
            {
              _0x7c5542.log("剩余💧小于200，化肥先留着吧");
            }
          }
        }
      }
    } else {
      _0x7c5542.log("获取化肥信息失败");
    }
  }
  async ["fertilizer"](_0x5c93a1, _0x41b379) {
    let _0xa42255 = {
        "url": "https://mobile.yangkeduo.com/proxy/api/api/manor/use/backpack/goods",
        "body": "{ \"type\":" + _0x5c93a1 + ", \"source\": 35, \"exchange_amount\":" + _0x41b379 + ", \"tubetoken\": \"" + this.token + "\", \"fun_pl\": 2 } ",
        "headers": {
          "accesstoken": this.ckA,
          "anti-token": this.ckB
        }
      },
      _0x4228ec = await _0x4185e1("post", _0xa42255);
    if (!_0x4228ec) {
      return;
    }
    let _0x534cee = _0x5c93a1 == 1 ? "大" : "小";
    _0x9e2080 = "使用" + _0x534cee + " 化肥 * " + _0x41b379 + " ";
    if (_0x4228ec.health_degree) {
      _0x7c5542.log(_0x9e2080 += "成功, 当前养分：" + _0x4228ec.health_degree + " ");
    } else {
      _0x7c5542.log(_0x9e2080 += "失败：" + _0x4228ec.error_msg);
    }
  }
}
(async () => {
  if (await _0x102bc7()) {
    for (let _0xd088f8 of _0x4da9a1) {
      await _0xd088f8.my();
      await _0x7c5542.wait(1000);
      if (_0xd088f8.run) {
        await _0xd088f8.tree();
        await _0x7c5542.wait(2000);
        await _0xd088f8.gain(15, "水滴收集器");
        await _0x7c5542.wait(2000);
        if (_0x23ef33 >= 7 && _0x23ef33 <= 9) {
          {
            await _0xd088f8.gain2(36069, "打卡领化肥");
            await _0x7c5542.wait(2000);
            await _0xd088f8.gain2(36155, "打卡领水滴");
            await _0x7c5542.wait(2000);
            await _0xd088f8.domission(37265, "早餐福袋");
            await _0x7c5542.wait(3000);
            await _0xd088f8.gain2(37210, "每日领化肥");
            await _0x7c5542.wait(3000);
          }
        } else if (_0x23ef33 >= 12 && _0x23ef33 <= 14) {
          await _0xd088f8.domission(37265, "午餐福袋");
          await _0x7c5542.wait(3000);
          await _0xd088f8.gain2(36069, "打卡领化肥");
          await _0x7c5542.wait(2000);
          await _0xd088f8.gain2(37210, "每日领化肥");
          await _0x7c5542.wait(3000);
        } else if (_0x23ef33 >= 18 && _0x23ef33 <= 21) {
          await _0xd088f8.domission(37265, "晚餐福袋");
          await _0x7c5542.wait(3000);
          await _0xd088f8.gain2(37210, "每日领化肥");
          await _0x7c5542.wait(3000);
        }
        if (_0xd088f8.water > 100) {
          _0x7c5542.log("准备浇水");
          await _0xd088f8.f();
          await _0x7c5542.wait(1000);
          for (let _0x595ac0 = 10; _0x595ac0 < _0xd088f8.water - 100; _0x595ac0++) {
            {
              await _0xd088f8.tree();
            }
          }
        } else {
          {
            _0x7c5542.log("小于100💧，保留用于明天");
          }
        }
      }
    }
  }
})().catch(_0x4eebc2 => _0x7c5542.logErr(_0x4eebc2)).finally(() => _0x7c5542.done());
async function _0x102bc7() {
  if (!_0x5a970f) {
    _0x7c5542.log("找不到CK");
    return false;
  } else {
    let _0xadf51c;
    if (_0x5a970f.indexOf("@") != -1) {
      _0xadf51c = _0x5a970f.split("@");
    } else {
      _0xadf51c = _0x5a970f.split("\n");
    }
    for (let _0x24dc92 in _0xadf51c) {
      _0x4da9a1.push(new _0x3ec43f(_0xadf51c[_0x24dc92]));
    }
    _0x7c5542.log("共找到" + _0xadf51c.length + " 个CK");
    return true;
  }
}
var _0xe01d3d = require("request");
async function _0x4185e1(_0x1c4a15, _0xb9c0c2) {
  await _0x7c5542.wait(500);
  return new Promise(_0x41828b => {
    {
      _0xe01d3d[_0x1c4a15](_0xb9c0c2, async (_0x57fbb5, _0x336696, _0x38f17d) => {
        {
          try {
            {
              if (_0x57fbb5) {
                {
                  _0x7c5542.log("请求失败");
                  _0x41828b();
                }
              } else {
                _0x41828b(JSON.parse(_0x38f17d));
              }
            }
          } catch (_0x5acc93) {
            _0x7c5542.logErr(_0x5acc93);
          } finally {
            _0x41828b();
          }
        }
      });
    }
  });
}
_0xodJ = "jsjiami.com.v6";
function Env(t, e) {
  class s {
    constructor(t) {
      this.env = t;
    }
    send(t, e = "GET") {
      t = "string" == typeof t ? {
        url: t
      } : t;
      let s = this.get;
      "POST" === e && (s = this.post);
      return new Promise((e, i) => {
        s.call(this, t, (t, s, r) => {
          t ? i(t) : e(s);
        });
      });
    }
    get(t) {
      return this.send.call(this.env, t);
    }
    post(t) {
      return this.send.call(this.env, t, "POST");
    }
  }
  return new class {
    constructor(t, e) {
      this.name = t;
      this.http = new s(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = false;
      this.isNeedRewrite = false;
      this.logSeparator = "\n";
      this.encoding = "utf-8";
      this.startTime = new Date().getTime();
      Object.assign(this, e);
      this.log("仓库：https://wwgz.lanzoue.com/b0ec064he\n密码：2580\n", `\ud83d\udd14${this.name}, \u5f00\u59cb!`);
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
    isShadowrocket() {
      return "undefined" != typeof $rocket;
    }
    toObj(t, e = null) {
      try {
        return JSON.parse(t);
      } catch {
        return e;
      }
    }
    toStr(t, e = null) {
      try {
        return JSON.stringify(t);
      } catch {
        return e;
      }
    }
    getjson(t, e) {
      let s = e;
      const i = this.getdata(t);
      if (i) try {
        s = JSON.parse(this.getdata(t));
      } catch {}
      return s;
    }
    setjson(t, e) {
      try {
        return this.setdata(JSON.stringify(t), e);
      } catch {
        return false;
      }
    }
    getScript(t) {
      return new Promise(e => {
        this.get({
          url: t
        }, (t, s, i) => e(i));
      });
    }
    runScript(t, e) {
      return new Promise(s => {
        let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        i = i ? i.replace(/\n/g, "").trim() : i;
        let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        r = r ? 1 * r : 20;
        r = e && e.timeout ? e.timeout : r;
        const [o, h] = i.split("@"),
          n = {
            url: `http://${h}/v1/scripting/evaluate`,
            body: {
              script_text: t,
              mock_type: "cron",
              timeout: r
            },
            headers: {
              "X-Key": o,
              Accept: "*/*"
            }
          };
        this.post(n, (t, e, i) => s(i));
      }).catch(t => this.logErr(t));
    }
    loaddata() {
      if (!this.isNode()) return {};
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e);
        if (!s && !i) return {};
        {
          const i = s ? t : e;
          try {
            return JSON.parse(this.fs.readFileSync(i));
          } catch (t) {
            return {};
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e),
          r = JSON.stringify(this.data);
        s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r);
      }
    }
    lodash_get(t, e, s) {
      const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
      let r = t;
      for (const t of i) if (r = Object(r)[t], undefined === r) return s;
      return r;
    }
    lodash_set(t, e, s) {
      return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t);
    }
    getdata(t) {
      let e = this.getval(t);
      if (/^@/.test(t)) {
        const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t),
          r = s ? this.getval(s) : "";
        if (r) try {
          const t = JSON.parse(r);
          e = t ? this.lodash_get(t, i, "") : e;
        } catch (t) {
          e = "";
        }
      }
      return e;
    }
    setdata(t, e) {
      let s = false;
      if (/^@/.test(e)) {
        const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e),
          o = this.getval(i),
          h = i ? "null" === o ? null : o || "{}" : "{}";
        try {
          const e = JSON.parse(h);
          this.lodash_set(e, r, t);
          s = this.setval(JSON.stringify(e), i);
        } catch (e) {
          const o = {};
          this.lodash_set(o, r, t);
          s = this.setval(JSON.stringify(o), i);
        }
      } else s = this.setval(t, e);
      return s;
    }
    getval(t) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null;
    }
    setval(t, e) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), true) : this.data && this.data[e] || null;
    }
    initGotEnv(t) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      t && (t.headers = t.headers ? t.headers : {}, undefined === t.headers.Cookie && undefined === t.cookieJar && (t.cookieJar = this.ckjar));
    }
    get(t, e = () => {}) {
      if (t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
        "X-Surge-Skip-Scripting": false
      })), $httpClient.get(t, (t, s, i) => {
        !t && s && (s.body = i, s.statusCode = s.status);
        e(t, s, i);
      });else if (this.isQuanX()) this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
        hints: false
      })), $task.fetch(t).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o);
      }, t => e(t));else if (this.isNode()) {
        let s = require("iconv-lite");
        this.initGotEnv(t);
        this.got(t).on("redirect", (t, e) => {
          try {
            if (t.headers["set-cookie"]) {
              const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
              s && this.ckjar.setCookieSync(s, null);
              e.cookieJar = this.ckjar;
            }
          } catch (t) {
            this.logErr(t);
          }
        }).then(t => {
          const {
            statusCode: i,
            statusCode: r,
            headers: o,
            rawBody: h
          } = t;
          e(null, {
            status: i,
            statusCode: r,
            headers: o,
            rawBody: h
          }, s.decode(h, this.encoding));
        }, t => {
          const {
            message: i,
            response: r
          } = t;
          e(i, r, r && s.decode(r.rawBody, this.encoding));
        });
      }
    }
    post(t, e = () => {}) {
      const s = t.method ? t.method.toLocaleLowerCase() : "post";
      if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
        "X-Surge-Skip-Scripting": false
      })), $httpClient[s](t, (t, s, i) => {
        !t && s && (s.body = i, s.statusCode = s.status);
        e(t, s, i);
      });else if (this.isQuanX()) t.method = s, this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
        hints: false
      })), $task.fetch(t).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o);
      }, t => e(t));else if (this.isNode()) {
        let i = require("iconv-lite");
        this.initGotEnv(t);
        const {
          url: r,
          ...o
        } = t;
        this.got[s](r, o).then(t => {
          const {
            statusCode: s,
            statusCode: r,
            headers: o,
            rawBody: h
          } = t;
          e(null, {
            status: s,
            statusCode: r,
            headers: o,
            rawBody: h
          }, i.decode(h, this.encoding));
        }, t => {
          const {
            message: s,
            response: r
          } = t;
          e(s, r, r && i.decode(r.rawBody, this.encoding));
        });
      }
    }
    time(t, e = null) {
      const s = e ? new Date(e) : new Date();
      let i = {
        "M+": s.getMonth() + 1,
        "d+": s.getDate(),
        "H+": s.getHours(),
        "m+": s.getMinutes(),
        "s+": s.getSeconds(),
        "q+": Math.floor((s.getMonth() + 3) / 3),
        S: s.getMilliseconds()
      };
      /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length)));
      return t;
    }
    msg(e = t, s = "", i = "", r) {
      const o = t => {
        if (!t) return t;
        if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? {
          "open-url": t
        } : this.isSurge() ? {
          url: t
        } : undefined;
        if ("object" == typeof t) {
          if (this.isLoon()) {
            let e = t.openUrl || t.url || t["open-url"],
              s = t.mediaUrl || t["media-url"];
            return {
              openUrl: e,
              mediaUrl: s
            };
          }
          if (this.isQuanX()) {
            let e = t["open-url"] || t.url || t.openUrl,
              s = t["media-url"] || t.mediaUrl;
            return {
              "open-url": e,
              "media-url": s
            };
          }
          if (this.isSurge()) {
            let e = t.url || t.openUrl || t["open-url"];
            return {
              url: e
            };
          }
        }
      };
      if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) {
        let t = ["", "==============📣系统通知📣=============="];
        t.push(e);
        s && t.push(s);
        i && t.push(i);
        console.log(t.join("\n"));
        this.logs = this.logs.concat(t);
      }
    }
    log(...t) {
      t.length > 0 && (this.logs = [...this.logs, ...t]);
      console.log(t.join(this.logSeparator));
    }
    logErr(t, e) {
      const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      s ? this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t.stack) : this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t);
    }
    wait(t) {
      return new Promise(e => setTimeout(e, t));
    }
    done(t = {}) {
      const e = new Date().getTime(),
        s = (e - this.startTime) / 1000;
      this.log("", `\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`);
      this.log();
      (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t);
    }
  }(t, e);
}