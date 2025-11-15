//Sat Nov 15 2025 15:18:55 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
const _0x7d83ff = new _0x3e2ced("趣头条");
const _0xe57b0f = "V1.0.0";
const _0x59e395 = "qttapp";
let _0x17e825 = _0x7d83ff.getjson(_0x59e395, []);
const _0x2ce0ef = _0x7d83ff.isNode() ? require("./sendNotify") : "";
let _0x1faf1f = _0x7d83ff.getdata("tguserid") || 1;
let _0x35d51a = _0x7d83ff.getdata("qttactivecode") || 0;
let _0x550410 = _0x7d83ff.getval("qttuserck") || 1;
let _0x598bfa = _0x7d83ff.getval("apiHost") || "http://106.15.104.124:8080";
let _0x10c264 = _0x7d83ff.getval("tz") || "1";
let _0x18ba53 = Math.round(new Date().getTime() / 1000).toString();
var _0x60dbe = "";
var _0x1bca66 = "";
let _0x2f1f50 = "";
let _0x3657bc = "";
let _0x511853 = [];
let _0xb653f4 = "";
let _0x15cf69 = "";
let _0x58b06a = "";
let _0x16f21b = "";
let _0x9db073 = "";
let _0xb60a7b = "";
let _0x30e5ee = "";
let _0x214258 = 1;
let _0x578517 = 1;
let _0x202836 = 1;
let _0x56a44d = 1;
let _0x22f947 = "";
let _0xf94480 = "";
if (_0x7d83ff.isNode()) {
  _0x17e825 = JSON.parse(process.env.QTTAPP);
  _0x1faf1f = process.env.TGUSERID;
  _0x35d51a = process.env.QTTACTIVECODE;
  if (process.env.APIHOST) {
    _0x598bfa = process.env.APIHOST;
  }
  _0x60dbe = new Date(new Date().getTime()).getHours();
  _0x1bca66 = new Date(new Date().getTime()).getMinutes();
  _0x7d83ff.log("🔔 当前环境: Node, 当前时间：" + _0x60dbe + "点");
} else {
  _0x60dbe = new Date().getHours();
  _0x1bca66 = new Date().getMinutes();
  _0x7d83ff.log("🔔 当前环境: 手机代理, 当前时间：" + _0x60dbe + "点");
}
!(async () => {
  if (typeof $request !== "undefined") {
    {
      await _0x5bb1dc();
    }
  } else {
    {
      if (!_0x35d51a || !_0x1faf1f || _0x1faf1f == 1 || _0x35d51a == 0 || _0x35d51a.length != 32) {
        {
          _0x7d83ff.log("⚠️ 抱歉，你没有权限运行此脚本, 请关注电报机器人: https://t.me/DavidLoveBot");
          return;
        }
      }
      await _0x466477(_0x59e395, _0x1faf1f, _0x35d51a);
      _0x7d83ff.log("📢 " + _0x9db073);
      _0x7d83ff.log("🔔 当前脚本版本号: " + _0xe57b0f + "，最新版本号: " + _0x58b06a);
      if (_0xe57b0f < _0x58b06a) {
        {
          _0x7d83ff.log("⚠️ 当前脚本版本号低于服务器版本，请更新脚本吧！");
          _0x33b04f("🔔 当前脚本版本号低于服务器版本，请更新脚本吧！");
          return;
        }
      }
      if (_0x15cf69 != true) {
        {
          _0x7d83ff.log("⚠️ 抱歉, 此脚本已停用。");
          return;
        }
      }
      if (_0x22f947 != true) {
        {
          _0x7d83ff.log("⚠️ 抱歉, 用户不合法，请先私聊机器人加入交流区。 https://t.me/DavidLoveBot");
          return;
        }
      }
      if (_0xb653f4 != true) {
        {
          _0x7d83ff.log("⚠️ 抱歉，你没有权限运行此脚本, 请关注电报机器人: https://t.me/DavidLoveBot");
          return;
        }
      }
      if (_0x30e5ee == true) {
        {
          _0x7d83ff.log("🔔 此脚本采用付费模式。🔒");
        }
      } else {
        {
          _0x7d83ff.log("🔔 此脚本采用免费模式。🔓");
        }
      }
      if (_0xb60a7b != true) {
        {
          _0x7d83ff.log("⚠️ 抱歉，你不是付费用户, 你没有权限运行此脚本, 需要使用请查看使用说明。");
          return;
        }
      } else {
        {
          if (_0x30e5ee == true) {
            {
              _0x7d83ff.log("🔔 尊敬的会员：您好，你是付费用户！🔐");
            }
          }
        }
      }
      if (_0x214258 > 1) {
        {
          _0x7d83ff.log("🔔 尊敬的会员，您好！你使用的是付费多用户授权账号，一次可以运行" + 3 * _0x214258 + "个账号。");
        }
      }
      if (_0x578517 > 1) {
        {
          _0x7d83ff.log("🔔 尊敬的会员，您好！你使用的是付费多用户授权账号，一共可以运行" + _0x202836 + "次, 已经运行了" + _0x56a44d + "次。");
        }
      }
      if (_0x16f21b != true) {
        {
          _0x7d83ff.log("⚠️ 抱歉,  该用户今天可能已经达到最大运行次数，明天再试吧！");
          return;
        }
      }
      if (_0x17e825.length > 3 * _0x214258) {
        {
          _0x7d83ff.log("⚠️ 当前用户一次最多运行" + 3 * _0x214258 + "个账号，需要增加账号请查看置顶说明。");
          return;
        }
      }
      if (_0x17e825.length == 0) {
        {
          _0x7d83ff.log("先抓取账号ck，再运行脚本吧！");
          return;
        }
      }
      _0x7d83ff.log("📢 一共发现了" + _0x17e825.length + "个账号");
      let _0x2b46b8 = [];
      for (let _0x45d634 = 0; _0x45d634 < _0x17e825.length; _0x45d634++) {
        {
          _0x2b46b8.push(_0x629667(_0x45d634));
          _0x511853.push(0);
        }
      }
      await Promise.allSettled(_0x2b46b8).then(_0x49407f => {
        {
          if (_0x2b46b8[_0x2b46b8.length - 1].notify == 1) {
            {
              _0x33b04f(_0x2f1f50);
            }
          }
        }
      });
    }
  }
})().catch(_0x252dbe => _0x7d83ff.logErr(_0x252dbe)).finally(() => _0x7d83ff.done());
async function _0x629667(_0x13df27) {
  return new Promise((_0x241de6, _0x3936be) => {
    {
      _0x7d83ff.log("[账号" + (_0x13df27 + 1) + "]: 开始执行 working......");
      _0x5e6105(_0x241de6, _0x13df27);
    }
  });
}
async function _0x5e6105(_0x4e29e9, _0x32261f) {
  await _0xd52e62(_0x32261f);
  await _0x4ba808(_0x32261f);
  await _0xe7f47a(_0x32261f);
  let _0x295ac7 = _0x17e825[_0x32261f].reader_urls.length;
  for (let _0x38e930 = 0; _0x38e930 < _0x295ac7; _0x38e930++) {
    {
      const _0x226d2f = _0x17e825[_0x32261f].reader_urls[_0x38e930];
      await _0x31e702(_0x226d2f, _0x32261f);
      await _0x7d83ff.wait(_0x5efbfc(5000, 10000));
    }
  }
  if (_0x511853[_0x32261f] > 0) {
    {
      _0x7d83ff.log("[账号" + (_0x32261f + 1) + "]: 本次一共阅读获得" + _0x511853[_0x32261f] + "金币 🎉");
      _0x2f1f50 += "[账号" + (_0x32261f + 1) + "]: 本次一共阅读获得" + _0x511853[_0x32261f] + "金币 🎉\n";
    }
  }
  await _0xc6e76f(_0x32261f);
  if (_0x60dbe >= 5 && _0x60dbe <= 9) {
    {
      await _0x5a5a1e("am", _0x32261f);
    }
  }
  if (_0x60dbe >= 20 && _0x60dbe <= 23) {
    {
      await _0x5a5a1e("pm", _0x32261f);
    }
  }
  await _0x13792d(_0x59e395, _0x1faf1f);
  _0x4e29e9();
}
async function _0x5bb1dc() {
  if ($request.url.match(/\/member\/v1\/get/)) {
    {
      const _0x4f827d = $request.url.split("?")[1];
      const _0xe8758 = $request.url.split("token=")[1].split("&")[0];
      const _0x373944 = $request.headers["X-Tk"];
      const _0x7087ad = $request.headers["User-Agent"];
      let _0x575955 = _0x550410 - 1;
      if (_0x17e825[_0x575955]) {
        {
          _0x17e825[_0x575955].user_info = _0x4f827d;
          _0x17e825[_0x575955].token = _0xe8758;
          _0x17e825[_0x575955].xTk = _0x373944;
          _0x17e825[_0x575955].ua = _0x7087ad;
          _0x17e825[_0x575955].notify = 1;
        }
      } else {
        {
          const _0x2af44c = {
            user_info: _0x4f827d,
            token: _0xe8758,
            xTk: _0x373944,
            ua: _0x7087ad,
            notify: 1
          };
          _0x17e825[_0x575955] = _0x2af44c;
        }
      }
      _0x7d83ff.setdata(JSON.stringify(_0x17e825, null, 2), "qttapp");
      _0x7d83ff.msg(_0x7d83ff.name, "趣头条账号" + (_0x575955 + 1) + "基础数据获取成功！🎉");
    }
  }
  if ($request.url.match(/\/readtimer\/report/)) {
    {
      const _0x3dee63 = $request.url.split("?")[1];
      let _0x3ccaf1 = _0x550410 - 1;
      let _0x1ca041 = _0x17e825[_0x3ccaf1].reader_urls || [];
      let _0x47ad5c = _0x1ca041.length;
      if (_0x47ad5c < 15) {
        {
          _0x1ca041.push(_0x3dee63);
          _0x17e825[_0x3ccaf1].reader_urls = _0x1ca041;
          _0x7d83ff.setdata(JSON.stringify(_0x17e825, null, 2), "qttapp");
          _0x7d83ff.msg(_0x7d83ff.name, "趣头条账号" + (_0x3ccaf1 + 1) + "第" + (_0x47ad5c + 1) + "条阅读数据获取成功！" + (_0x47ad5c + 1) + "/15 🎉");
        }
      } else {
        {
          _0x7d83ff.msg(_0x7d83ff.name, "趣头条账号" + (_0x3ccaf1 + 1) + "阅读数据已经获取到最大条数");
        }
      }
    }
  }
}
async function _0x4ba808(_0x3a1597) {
  let _0x5f39be = Math.round(new Date().getTime() / 1000).toString() + "000";
  const _0x2949f8 = "https://api.1sapp.com/sign/info?time=" + _0x5f39be + "&token=" + _0x17e825[_0x3a1597].token;
  let _0x1aaba5 = _0x3f1127(_0x2949f8, "", _0x3a1597);
  await _0xeb614c("get", _0x1aaba5, _0x45f1ea());
  let _0x3fd67f = _0x3657bc;
  if (_0x3fd67f.code == 0) {
    {
      const _0x19c307 = _0x3fd67f.data.signIn;
      if (_0x19c307.today == 0) {
        {
          await _0x307beb(_0x3a1597);
        }
      } else {
        {
          _0x7d83ff.log("[账号" + (_0x3a1597 + 1) + "]: 今天已完成签到");
          _0x2f1f50 += "[账号" + (_0x3a1597 + 1) + "]: 今天已完成签到 \n";
        }
      }
      extAds = _0x19c307.ext_ad;
      for (let _0x48fb5b = 0; _0x48fb5b < extAds.length; _0x48fb5b++) {
        {
          const _0x2e23ec = extAds[_0x48fb5b];
          const _0x2ff76d = _0x2e23ec.pos;
          _0x2e23ec.next_time == -1;
        }
      }
    }
  } else {
    {
      _0x7d83ff.log("[账号" + (_0x3a1597 + 1) + "]: 获取签到信息失败");
    }
  }
}
async function _0xd52e62(_0x136c34) {
  let _0x4f22e8 = Math.round(new Date().getTime() / 1000).toString() + "000";
  const _0x473eb8 = "https://api.1sapp.com/app/user/info/member/v1/get?" + _0x17e825[_0x136c34].user_info;
  let _0x36b48f = _0x3f1127(_0x473eb8, "", _0x136c34);
  await _0xeb614c("get", _0x36b48f, _0x45f1ea());
  let _0xdabfd4 = _0x3657bc;
  if (_0xdabfd4.code == 0) {
    {
      const _0x3369a5 = _0xdabfd4.data.find(_0x32e6cb => _0x32e6cb.key == "heard_module");
      const _0x74c54f = _0xdabfd4.data.find(_0x1faa6f => _0x1faa6f.key == "coin_info");
      _0x7d83ff.log("[账号" + (_0x136c34 + 1) + "]: [用户名] => " + _0x3369a5.data.member_info.nickname);
      _0x7d83ff.log("[账号" + (_0x136c34 + 1) + "]: [总金额] => " + _0x74c54f.newCoinSystem.remainderCoinsFormat / 10000 + "元");
      _0x7d83ff.log("[账号" + (_0x136c34 + 1) + "]: [今日金币] => " + _0x74c54f.newCoinSystem.todayCoinsFormat);
      _0x2f1f50 += "[账号" + (_0x136c34 + 1) + "]: [用户名] => " + _0x3369a5.data.member_info.nickname + "\n";
      _0x2f1f50 += "[账号" + (_0x136c34 + 1) + "]: [总金币] => " + _0x74c54f.newCoinSystem.remainderCoinsFormat / 10000 + "元\n";
      _0x2f1f50 += "[账号" + (_0x136c34 + 1) + "]: [今日金币] => " + _0x74c54f.newCoinSystem.todayCoinsFormat + "\n";
      const _0x1924fe = _0xdabfd4.data.find(_0x393f84 => _0x393f84.name == "菜单栏");
      for (let _0x307b8a = 0; _0x307b8a < _0x1924fe.data.length; _0x307b8a++) {
        {
          const _0x9c8b09 = _0x1924fe.data[_0x307b8a];
          if (_0x9c8b09.title.indexOf("邀请") != -1) {
            {
              await _0x2c90d5(_0x136c34);
            }
          }
        }
      }
    }
  } else {
    {
      _0x7d83ff.log("[账号" + (_0x136c34 + 1) + "]: 获取用户信息失败");
    }
  }
}
async function _0x307beb(_0x2e5684) {
  let _0x357384 = Math.round(new Date().getTime() / 1000).toString() + "000";
  const _0xd01b39 = "https://api.1sapp.com/sign/sign?time=" + _0x357384 + "&token=" + _0x17e825[_0x2e5684].token;
  let _0x39db1d = _0x3f1127(_0xd01b39, "", _0x2e5684);
  await _0xeb614c("get", _0x39db1d, _0x45f1ea());
  let _0x1ab9b9 = _0x3657bc;
  if (_0x1ab9b9.code == 0) {
    {
      _0x7d83ff.log("[账号" + (_0x2e5684 + 1) + "]: 恭喜你签到成功，获得" + _0x1ab9b9.data.amount + "金币，已连续签到" + _0x1ab9b9.data.continuationSignIn + "天🎉");
      _0x2f1f50 += "[账号" + (_0x2e5684 + 1) + "]: 恭喜你签到成功，获得" + _0x1ab9b9.data.amount + "金币，已连续签到" + _0x1ab9b9.data.continuationSignIn + "天🎉\n";
    }
  } else {
    {
      _0x7d83ff.log("[账号" + (_0x2e5684 + 1) + "]: " + _0x1ab9b9.message);
    }
  }
}
async function _0x31e702(_0x3f7b6e, _0x4aa60c) {
  const _0x506b89 = "https://api.1sapp.com/readtimer/report?" + _0x3f7b6e;
  let _0x415af3 = _0x3f1127(_0x506b89, "", _0x4aa60c);
  await _0xeb614c("get", _0x415af3, _0x45f1ea());
  let _0x5425f5 = _0x3657bc;
  if (_0x5425f5.code == 0) {
    {
      if (_0x5425f5.data.curr_task.amount > 0) {
        {
          _0x7d83ff.log("[账号" + (_0x4aa60c + 1) + "]: 恭喜你阅读获得" + _0x5425f5.data.curr_task.amount + "金币 🎉");
          _0x511853[_0x4aa60c] += _0x5425f5.data.curr_task.amount;
        }
      }
    }
  } else {
    {
      _0x7d83ff.log("[账号" + (_0x4aa60c + 1) + "]: " + _0x5425f5.message);
    }
  }
}
async function _0xc6e76f(_0x2c44a4) {
  let _0x492d66 = Math.round(new Date().getTime() / 1000).toString() + "000";
  const _0x189e5e = "https://qtt-turntable.qutoutiao.net/press_trigger?ts=" + _0x492d66 + "&token=" + _0x17e825[_0x2c44a4].token;
  let _0x4affac = _0x3f1127(_0x189e5e, "", _0x2c44a4);
  _0x4affac.headers.Host = "qtt-turntable.qutoutiao.net";
  await _0xeb614c("get", _0x4affac, _0x45f1ea());
  let _0x3dedd1 = _0x3657bc;
  if (_0x3dedd1.code == 1) {
    {
      if (_0x3dedd1.amount_coin) {
        {
          _0x7d83ff.log("[账号" + (_0x2c44a4 + 1) + "]: 转动转盘获得" + _0x3dedd1.amount_coin + "金币 🎉");
          _0x2f1f50 += "[账号" + (_0x2c44a4 + 1) + "]: 转动转盘获得" + _0x3dedd1.amount_coin + "金币 🎉\n";
        }
      }
    }
  }
}
async function _0x5a5a1e(_0x54bd14, _0x5bfcf4) {
  const _0x36498a = "https://million-api.aiclk.com/external/zfb/sleep_init?dtu=100&token=" + _0x17e825[_0x5bfcf4].token;
  let _0x1215c7 = _0x3f1127(_0x36498a, "", _0x5bfcf4);
  _0x1215c7.headers.Host = "million-api.aiclk.com";
  await _0xeb614c("post", _0x1215c7, _0x45f1ea());
  let _0x41548b = _0x3657bc;
  if (_0x41548b.code == 0) {
    {
      if (_0x41548b.data.morning.status == "2") {
        {
          await _0x502ee0(_0x54bd14, _0x5bfcf4);
        }
      }
      if (_0x41548b.data.night.status == "2") {
        {
          await _0x502ee0(_0x54bd14, _0x5bfcf4);
        }
      }
    }
  }
}
async function _0x2c90d5(_0x4f9cc6) {
  const _0x5d29f2 = "https://api.1sapp.com/member/inviteCode?dtu=100&token=" + _0x17e825[_0x4f9cc6].token + "&invite_code=" + _0xf94480;
  const _0x3bd626 = "dtu=100&xhi=200&invite_code=" + _0xf94480;
  let _0x2454cd = _0x3f1127(_0x5d29f2, _0x3bd626, _0x4f9cc6);
  await _0xeb614c("post", _0x2454cd, _0x45f1ea());
  let _0x2a6a2d = _0x3657bc;
  if (_0x2a6a2d.code == 0) {
    {
      _0x7d83ff.log("感谢支持！");
    }
  }
}
async function _0x502ee0(_0x31ba75, _0x1e7b0e) {
  const _0x292836 = "https://million-api.aiclk.com/external/zfb/sleep_coin?from=" + _0x31ba75 + "&dtu=100&token=" + _0x17e825[_0x1e7b0e].token;
  let _0x4d6a6b = _0x3f1127(_0x292836, "", _0x1e7b0e);
  _0x4d6a6b.headers.Host = "million-api.aiclk.com";
  await _0xeb614c("post", _0x4d6a6b, _0x45f1ea());
  let _0xba0a1c = _0x3657bc;
  if (_0xba0a1c.code == 0) {
    {
      _0x7d83ff.log("[账号" + (_0x1e7b0e + 1) + "]: 早睡早起获得" + _0xba0a1c.data.coin + "金币 🎉");
      _0x2f1f50 += "[账号" + (_0x1e7b0e + 1) + "]: 早睡早起获得" + _0xba0a1c.data.coin + "金币 🎉 \n";
    }
  }
}
async function _0x7855e8(_0x4e4eef, _0x5e85b1) {
  let _0x1a6e66 = Math.round(new Date().getTime() / 1000).toString() + "000";
  const _0x14b6ae = "https://api.1sapp.com/sign/adDone?pos=" + _0x4e4eef + "&time=" + _0x1a6e66 + "&token=" + _0x17e825[_0x5e85b1].token + "&version=30967000&xhi=200";
  let _0x3c8cc7 = _0x3f1127(_0x14b6ae, "", _0x5e85b1);
  await _0xeb614c("get", _0x3c8cc7, _0x45f1ea());
  let _0x2d8571 = _0x3657bc;
  if (_0x2d8571.code == 0) {
    {
      _0x7d83ff.log("[账号" + (_0x5e85b1 + 1) + "]:  观看位置" + (_0x4e4eef == "one" ? 1 : _0x4e4eef == "two" ? 2 : 3) + "广告成功 🎉");
    }
  } else {
    {
      _0x7d83ff.log("[账号" + (_0x5e85b1 + 1) + "]: " + _0x2d8571.message);
    }
  }
}
async function _0xe7f47a(_0x16384c) {
  let _0x23274c = Math.round(new Date().getTime() / 1000).toString() + "000";
  const _0x263e62 = "https://api.1sapp.com/mission/getIntPointRewardStatus?time=" + _0x23274c + "&token=" + _0x17e825[_0x16384c].token + "&dtu=100";
  let _0x3665bf = _0x3f1127(_0x263e62, "", _0x16384c);
  await _0xeb614c("get", _0x3665bf, _0x45f1ea());
  let _0x347de3 = _0x3657bc;
  if (_0x347de3.code == 0) {
    {
      if (_0x347de3.data.reward_status == 1) {
        {
          await _0x5c64b0(_0x16384c);
        }
      }
    }
  } else {
    {
      _0x7d83ff.log("[账号" + (_0x16384c + 1) + "]: 获取整点奖励信息失败");
    }
  }
}
async function _0x5c64b0(_0x3f2c10) {
  let _0x56afd5 = Math.round(new Date().getTime() / 1000).toString() + "000";
  const _0xdfa712 = "https://api.1sapp.com/mission/intPointReward?time=" + _0x56afd5 + "&token=" + _0x17e825[_0x3f2c10].token + "&dtu=100";
  let _0x215aff = _0x3f1127(_0xdfa712, "", _0x3f2c10);
  await _0xeb614c("get", _0x215aff, _0x45f1ea());
  let _0x3455e4 = _0x3657bc;
  if (_0x3455e4.code == 0) {
    {
      _0x7d83ff.log("[账号" + (_0x3f2c10 + 1) + "]: 领取整点奖励成功，获得" + _0x3455e4.data.amount + "金币 🎉");
      _0x2f1f50 += "[账号" + (_0x3f2c10 + 1) + "]: 领取整点奖励成功，获得" + _0x3455e4.data.amount + "金币 🎉\n";
    }
  } else {
    {
      _0x7d83ff.log("[账号" + (_0x3f2c10 + 1) + "]: " + _0x3455e4.message);
    }
  }
}
function _0x466477(_0x11220a, _0x232a68, _0x19dd76) {
  return new Promise((_0x216f8e, _0x14e327) => {
    {
      const _0x3b590d = _0x598bfa + "/script/permissions/lastest";
      const _0x547134 = {
        appName: _0x11220a,
        userId: _0x232a68,
        activityCode: _0x19dd76,
        version: _0xe57b0f
      };
      const _0x32ba2e = {
        "Content-Type": "application/json",
        accept: "application/json"
      };
      const _0xef894e = {
        url: _0x3b590d,
        headers: _0x32ba2e,
        body: JSON.stringify(_0x547134)
      };
      _0x7d83ff.post(_0xef894e, async (_0x58b99b, _0x4ab24b, _0x337f32) => {
        {
          const _0xedaa40 = _0x337f32.replace(/\"/g, "").slice(34);
          const _0x14496c = new _0xb815c9();
          result = JSON.parse(_0x14496c.decode(_0xedaa40));
          try {
            {
              _0x58b06a = result.version;
              _0xb653f4 = result.userAuth;
              _0x15cf69 = result.scriptAuth;
              _0x16f21b = result.runAuth;
              _0x9db073 = result.notify;
              _0xb60a7b = result.vipAuth;
              _0x30e5ee = result.isCharge;
              _0x214258 = result.runAcounts;
              _0x578517 = result.buyCount;
              _0x56a44d = result.runedCounts;
              _0x202836 = result.runTotalCounts;
              _0x22f947 = result.userRank;
              _0xf94480 = result.invicate;
            }
          } catch (_0x151705) {
            {
              _0x7d83ff.log(_0x151705);
            }
          }
          _0x216f8e();
        }
      });
    }
  });
}
function _0x13792d(_0x5de090, _0x56d2e4) {
  return new Promise((_0x17ae28, _0x258a87) => {
    {
      const _0x54054e = _0x598bfa + "/script/run/add";
      const _0x57ca90 = {
        appName: _0x5de090,
        userId: _0x56d2e4,
        activityCode: _0x35d51a,
        version: _0xe57b0f
      };
      const _0x5477f4 = {
        "Content-Type": "application/json",
        accept: "application/json"
      };
      const _0xeaf6d = {
        url: _0x54054e,
        headers: _0x5477f4,
        body: JSON.stringify(_0x57ca90)
      };
      _0x7d83ff.post(_0xeaf6d, async (_0x596eb7, _0x45884a, _0x290272) => {
        {
          const _0x49dde8 = _0x290272.replace(/\"/g, "");
          _0x17ae28();
        }
      });
    }
  });
}
function _0x3f1127(_0x4a76d1, _0x2ef552, _0x2efe8d) {
  const _0x52c8b1 = {
    Host: "api.1sapp.com",
    "User-Agent": _0x17e825[_0x2efe8d].ua,
    "X-Tk": _0x17e825[_0x2efe8d].xTk
  };
  let _0x29f3b5 = {
    url: _0x4a76d1,
    headers: _0x52c8b1
  };
  if (_0x2ef552) {
    {
      _0x29f3b5.body = _0x2ef552;
    }
  }
  return _0x29f3b5;
}
async function _0xeb614c(_0x23ea66, _0x45a82, _0x5b57b3) {
  _0x3657bc = null;
  return new Promise(_0x2cf0cd => {
    {
      _0x7d83ff[_0x23ea66](_0x45a82, async (_0x4f675d, _0x543a67, _0x229f80) => {
        {
          try {
            {
              if (_0x4f675d) {
                {
                  _0x7d83ff.log(_0x5b57b3 + ": " + _0x23ea66 + "请求失败");
                  _0x7d83ff.log(JSON.stringify(_0x4f675d));
                  _0x7d83ff.logErr(_0x4f675d);
                }
              } else {
                {
                  if (_0x509f0a(_0x229f80)) {
                    {
                      _0x3657bc = JSON.parse(_0x229f80);
                    }
                  }
                }
              }
            }
          } catch (_0x588018) {
            {
              _0x7d83ff.logErr(_0x588018, _0x543a67);
            }
          } finally {
            {
              _0x2cf0cd();
            }
          }
        }
      });
    }
  });
}
function _0x45f1ea() {
  return new Error().stack.split("\n")[3].split("@")[0];
}
function _0x509f0a(_0x471285) {
  try {
    {
      if (typeof JSON.parse(_0x471285) == "object") {
        {
          return true;
        }
      }
    }
  } catch (_0x1a69f1) {
    {
      console.log(_0x1a69f1);
      console.log("服务器访问数据为空，请检查自身设备网络情况");
      return false;
    }
  }
}
function _0x2239a8(_0x207fbe) {
  var _0x39c114 = Object.keys(_0x207fbe).map(function (_0x21c92f) {
    {
      return encodeURIComponent(_0x21c92f) + "=" + encodeURIComponent(_0x207fbe[_0x21c92f]);
    }
  }).join("&");
  return _0x39c114;
}
function _0x447bf3(_0x5ec010) {
  var _0x4ff468 = String.fromCharCode(_0x5ec010.charCodeAt(0) + _0x5ec010.length);
  for (var _0x5241b2 = 1; _0x5241b2 < _0x5ec010.length; _0x5241b2++) {
    {
      _0x4ff468 += String.fromCharCode(_0x5ec010.charCodeAt(_0x5241b2) + _0x5ec010.charCodeAt(_0x5241b2 - 1));
    }
  }
  return escape(_0x4ff468);
}
function _0x4e7236(_0x1535e6) {
  _0x1535e6 = unescape(_0x1535e6);
  var _0x56cb81 = String.fromCharCode(_0x1535e6.charCodeAt(0) - _0x1535e6.length);
  for (var _0x2db7e8 = 1; _0x2db7e8 < _0x1535e6.length; _0x2db7e8++) {
    {
      _0x56cb81 += String.fromCharCode(_0x1535e6.charCodeAt(_0x2db7e8) - _0x56cb81.charCodeAt(_0x2db7e8 - 1));
    }
  }
  return _0x56cb81;
}
function _0x5efbfc(_0x1df98d, _0xe5671d) {
  switch (arguments.length) {
    case 1:
      return parseInt(Math.random() * _0x1df98d + 1);
      break;
    case 2:
      return parseInt(Math.random() * (_0xe5671d - _0x1df98d + 1) + _0x1df98d);
      break;
    default:
      return 0;
      break;
  }
}
function _0x4254b2() {
  if (_0x10c264 == 1) {
    {
      _0x7d83ff.msg(_0x7d83ff.name, "", _0x7d83ff.message);
    }
  }
}
async function _0x33b04f(_0x269ed0) {
  if (_0x10c264 == 1) {
    {
      if (_0x7d83ff.isNode()) {
        {
          await _0x2ce0ef.sendNotify(_0x7d83ff.name, _0x269ed0);
        }
      } else {
        {
          _0x7d83ff.msg(_0x7d83ff.name, "", _0x269ed0);
        }
      }
    }
  } else {
    {
      _0x7d83ff.log(_0x269ed0);
    }
  }
}
function _0x4c9a08(_0x4197a3, _0x51e8b9) {
  _0x51e8b9 = _0x51e8b9 || "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let _0x2e30da = "";
  for (let _0x1d412a = 0; _0x1d412a < _0x4197a3; _0x1d412a++) {
    {
      let _0x10ec44 = Math.floor(Math.random() * _0x51e8b9.length);
      _0x2e30da += _0x51e8b9.substring(_0x10ec44, _0x10ec44 + 1);
    }
  }
  return _0x2e30da;
}
function _0x43082e(_0x4a1473) {
  var _0x2f72c4 = 8;
  var _0x3659f8 = 0;
  function _0x51a805(_0x2646c5, _0x1f6902) {
    {
      var _0x1e68d6 = (_0x2646c5 & 65535) + (_0x1f6902 & 65535);
      var _0x297084 = (_0x2646c5 >> 16) + (_0x1f6902 >> 16) + (_0x1e68d6 >> 16);
      return _0x297084 << 16 | _0x1e68d6 & 65535;
    }
  }
  function _0x1ac5a2(_0x395508, _0x100a2d) {
    {
      return _0x395508 >>> _0x100a2d | _0x395508 << 32 - _0x100a2d;
    }
  }
  function _0x4a2953(_0xcffaee, _0x4f4b1b) {
    {
      return _0xcffaee >>> _0x4f4b1b;
    }
  }
  function _0x52c448(_0x29271d, _0x35f22a, _0x3b0fba) {
    {
      return _0x29271d & _0x35f22a ^ ~_0x29271d & _0x3b0fba;
    }
  }
  function _0xf3a7fd(_0xee4456, _0x27bc87, _0x1bb608) {
    {
      return _0xee4456 & _0x27bc87 ^ _0xee4456 & _0x1bb608 ^ _0x27bc87 & _0x1bb608;
    }
  }
  function _0x2ce204(_0x249814) {
    {
      return _0x1ac5a2(_0x249814, 2) ^ _0x1ac5a2(_0x249814, 13) ^ _0x1ac5a2(_0x249814, 22);
    }
  }
  function _0x17a05a(_0x4efb9c) {
    {
      return _0x1ac5a2(_0x4efb9c, 6) ^ _0x1ac5a2(_0x4efb9c, 11) ^ _0x1ac5a2(_0x4efb9c, 25);
    }
  }
  function _0x390283(_0xb73d9) {
    {
      return _0x1ac5a2(_0xb73d9, 7) ^ _0x1ac5a2(_0xb73d9, 18) ^ _0x4a2953(_0xb73d9, 3);
    }
  }
  function _0x16e5bc(_0x33ee1e) {
    {
      return _0x1ac5a2(_0x33ee1e, 17) ^ _0x1ac5a2(_0x33ee1e, 19) ^ _0x4a2953(_0x33ee1e, 10);
    }
  }
  function _0x572ccd(_0x3f78fa, _0x152489) {
    {
      var _0x226ae9 = new Array(1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298);
      var _0x3d1d81 = new Array(1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225);
      var _0xf3e024 = new Array(64);
      var _0x3846f6;
      var _0x23ee4c;
      var _0x22ce66;
      var _0x4194a8;
      var _0x59ee05;
      var _0x1468b2;
      var _0x29aa07;
      var _0x352db1;
      var _0x1426dd;
      var _0x328eef;
      _0x3f78fa[_0x152489 >> 5] |= 128 << 24 - _0x152489 % 32;
      _0x3f78fa[(_0x152489 + 64 >> 9 << 4) + 15] = _0x152489;
      for (var _0x1ff780 = 0; _0x1ff780 < _0x3f78fa.length; _0x1ff780 += 16) {
        {
          _0x3846f6 = _0x3d1d81[0];
          _0x23ee4c = _0x3d1d81[1];
          _0x22ce66 = _0x3d1d81[2];
          _0x4194a8 = _0x3d1d81[3];
          _0x59ee05 = _0x3d1d81[4];
          _0x1468b2 = _0x3d1d81[5];
          _0x29aa07 = _0x3d1d81[6];
          _0x352db1 = _0x3d1d81[7];
          for (var _0x5c71e5 = 0; _0x5c71e5 < 64; _0x5c71e5++) {
            {
              if (_0x5c71e5 < 16) {
                _0xf3e024[_0x5c71e5] = _0x3f78fa[_0x5c71e5 + _0x1ff780];
              } else {
                _0xf3e024[_0x5c71e5] = _0x51a805(_0x51a805(_0x51a805(_0x16e5bc(_0xf3e024[_0x5c71e5 - 2]), _0xf3e024[_0x5c71e5 - 7]), _0x390283(_0xf3e024[_0x5c71e5 - 15])), _0xf3e024[_0x5c71e5 - 16]);
              }
              _0x1426dd = _0x51a805(_0x51a805(_0x51a805(_0x51a805(_0x352db1, _0x17a05a(_0x59ee05)), _0x52c448(_0x59ee05, _0x1468b2, _0x29aa07)), _0x226ae9[_0x5c71e5]), _0xf3e024[_0x5c71e5]);
              _0x328eef = _0x51a805(_0x2ce204(_0x3846f6), _0xf3a7fd(_0x3846f6, _0x23ee4c, _0x22ce66));
              _0x352db1 = _0x29aa07;
              _0x29aa07 = _0x1468b2;
              _0x1468b2 = _0x59ee05;
              _0x59ee05 = _0x51a805(_0x4194a8, _0x1426dd);
              _0x4194a8 = _0x22ce66;
              _0x22ce66 = _0x23ee4c;
              _0x23ee4c = _0x3846f6;
              _0x3846f6 = _0x51a805(_0x1426dd, _0x328eef);
            }
          }
          _0x3d1d81[0] = _0x51a805(_0x3846f6, _0x3d1d81[0]);
          _0x3d1d81[1] = _0x51a805(_0x23ee4c, _0x3d1d81[1]);
          _0x3d1d81[2] = _0x51a805(_0x22ce66, _0x3d1d81[2]);
          _0x3d1d81[3] = _0x51a805(_0x4194a8, _0x3d1d81[3]);
          _0x3d1d81[4] = _0x51a805(_0x59ee05, _0x3d1d81[4]);
          _0x3d1d81[5] = _0x51a805(_0x1468b2, _0x3d1d81[5]);
          _0x3d1d81[6] = _0x51a805(_0x29aa07, _0x3d1d81[6]);
          _0x3d1d81[7] = _0x51a805(_0x352db1, _0x3d1d81[7]);
        }
      }
      return _0x3d1d81;
    }
  }
  function _0x2c70fc(_0x4399f3) {
    {
      var _0x2630fa = Array();
      var _0x519ba4 = (1 << _0x2f72c4) - 1;
      for (var _0x531e0a = 0; _0x531e0a < _0x4399f3.length * _0x2f72c4; _0x531e0a += _0x2f72c4) {
        {
          _0x2630fa[_0x531e0a >> 5] |= (_0x4399f3.charCodeAt(_0x531e0a / _0x2f72c4) & _0x519ba4) << 24 - _0x531e0a % 32;
        }
      }
      return _0x2630fa;
    }
  }
  function _0xbf9fe0(_0x3d9d39) {
    {
      _0x3d9d39 = _0x3d9d39.replace(/\r\n/g, "\n");
      var _0x31e5c7 = "";
      for (var _0x2eaee7 = 0; _0x2eaee7 < _0x3d9d39.length; _0x2eaee7++) {
        {
          var _0x2120be = _0x3d9d39.charCodeAt(_0x2eaee7);
          if (_0x2120be < 128) {
            {
              _0x31e5c7 += String.fromCharCode(_0x2120be);
            }
          } else {
            if (_0x2120be > 127 && _0x2120be < 2048) {
              {
                _0x31e5c7 += String.fromCharCode(_0x2120be >> 6 | 192);
                _0x31e5c7 += String.fromCharCode(_0x2120be & 63 | 128);
              }
            } else {
              {
                _0x31e5c7 += String.fromCharCode(_0x2120be >> 12 | 224);
                _0x31e5c7 += String.fromCharCode(_0x2120be >> 6 & 63 | 128);
                _0x31e5c7 += String.fromCharCode(_0x2120be & 63 | 128);
              }
            }
          }
        }
      }
      return _0x31e5c7;
    }
  }
  function _0x5b5e86(_0xe7994d) {
    {
      var _0x5d68d6 = _0x3659f8 ? "0123456789ABCDEF" : "0123456789abcdef";
      var _0x523bb4 = "";
      for (var _0x204e42 = 0; _0x204e42 < _0xe7994d.length * 4; _0x204e42++) {
        {
          _0x523bb4 += _0x5d68d6.charAt(_0xe7994d[_0x204e42 >> 2] >> (3 - _0x204e42 % 4) * 8 + 4 & 15) + _0x5d68d6.charAt(_0xe7994d[_0x204e42 >> 2] >> (3 - _0x204e42 % 4) * 8 & 15);
        }
      }
      return _0x523bb4;
    }
  }
  _0x4a1473 = _0xbf9fe0(_0x4a1473);
  return _0x5b5e86(_0x572ccd(_0x2c70fc(_0x4a1473), _0x4a1473.length * _0x2f72c4));
}
function _0x18fd06(_0x548d80) {
  function _0x41abb8(_0x5d85a6, _0x2789cd) {
    {
      return _0x5d85a6 << _0x2789cd | _0x5d85a6 >>> 32 - _0x2789cd;
    }
  }
  function _0x48c238(_0x1fcc33, _0x171ffa) {
    {
      var _0xa77400;
      var _0x545e21;
      var _0x4e8a0d;
      var _0x3fbcf1;
      var _0x23ce82;
      _0x4e8a0d = 2147483648 & _0x1fcc33;
      _0x3fbcf1 = 2147483648 & _0x171ffa;
      _0xa77400 = 1073741824 & _0x1fcc33;
      _0x545e21 = 1073741824 & _0x171ffa;
      _0x23ce82 = (1073741823 & _0x1fcc33) + (1073741823 & _0x171ffa);
      return _0xa77400 & _0x545e21 ? 2147483648 ^ _0x23ce82 ^ _0x4e8a0d ^ _0x3fbcf1 : _0xa77400 | _0x545e21 ? 1073741824 & _0x23ce82 ? 3221225472 ^ _0x23ce82 ^ _0x4e8a0d ^ _0x3fbcf1 : 1073741824 ^ _0x23ce82 ^ _0x4e8a0d ^ _0x3fbcf1 : _0x23ce82 ^ _0x4e8a0d ^ _0x3fbcf1;
    }
  }
  function _0x19db7e(_0x8275d9, _0x219fbf, _0x4c3859) {
    {
      return _0x8275d9 & _0x219fbf | ~_0x8275d9 & _0x4c3859;
    }
  }
  function _0xb46b09(_0x17f8fd, _0x23fe6c, _0x144f54) {
    {
      return _0x17f8fd & _0x144f54 | _0x23fe6c & ~_0x144f54;
    }
  }
  function _0x482a8f(_0x4fd91b, _0x35fc24, _0xf4e630) {
    {
      return _0x4fd91b ^ _0x35fc24 ^ _0xf4e630;
    }
  }
  function _0x4b7d97(_0x25d0d5, _0x5179bb, _0x219425) {
    {
      return _0x5179bb ^ (_0x25d0d5 | ~_0x219425);
    }
  }
  function _0xfdba7c(_0x2461b5, _0x43ae0b, _0x2b476e, _0x403d36, _0x473fbf, _0x185ff3, _0x50d579) {
    {
      _0x2461b5 = _0x48c238(_0x2461b5, _0x48c238(_0x48c238(_0x19db7e(_0x43ae0b, _0x2b476e, _0x403d36), _0x473fbf), _0x50d579));
      return _0x48c238(_0x41abb8(_0x2461b5, _0x185ff3), _0x43ae0b);
    }
  }
  function _0x997dec(_0x8b3ef5, _0x4bed7a, _0x41dc58, _0x2264f6, _0xde0ed3, _0x5664d0, _0x1ff7c3) {
    {
      _0x8b3ef5 = _0x48c238(_0x8b3ef5, _0x48c238(_0x48c238(_0xb46b09(_0x4bed7a, _0x41dc58, _0x2264f6), _0xde0ed3), _0x1ff7c3));
      return _0x48c238(_0x41abb8(_0x8b3ef5, _0x5664d0), _0x4bed7a);
    }
  }
  function _0x364000(_0x5be722, _0x5df439, _0x597991, _0x4ce63f, _0x53a8db, _0x5888ff, _0x426b80) {
    {
      _0x5be722 = _0x48c238(_0x5be722, _0x48c238(_0x48c238(_0x482a8f(_0x5df439, _0x597991, _0x4ce63f), _0x53a8db), _0x426b80));
      return _0x48c238(_0x41abb8(_0x5be722, _0x5888ff), _0x5df439);
    }
  }
  function _0x35cd58(_0x1e02e2, _0x3ee0c0, _0x296f8b, _0x12d1a9, _0x1cad39, _0x5c3228, _0x5ac1f2) {
    {
      _0x1e02e2 = _0x48c238(_0x1e02e2, _0x48c238(_0x48c238(_0x4b7d97(_0x3ee0c0, _0x296f8b, _0x12d1a9), _0x1cad39), _0x5ac1f2));
      return _0x48c238(_0x41abb8(_0x1e02e2, _0x5c3228), _0x3ee0c0);
    }
  }
  function _0x155ed3(_0x51aa4b) {
    {
      for (var _0x818b2d, _0x2a1c49 = _0x51aa4b.length, _0x383807 = _0x2a1c49 + 8, _0xa68a34 = (_0x383807 - _0x383807 % 64) / 64, _0x931b10 = 16 * (_0xa68a34 + 1), _0x1dae69 = new Array(_0x931b10 - 1), _0xa8c3da = 0, _0x5b4cb9 = 0; _0x2a1c49 > _0x5b4cb9;) {
        _0x818b2d = (_0x5b4cb9 - _0x5b4cb9 % 4) / 4;
        _0xa8c3da = _0x5b4cb9 % 4 * 8;
        _0x1dae69[_0x818b2d] = _0x1dae69[_0x818b2d] | _0x51aa4b.charCodeAt(_0x5b4cb9) << _0xa8c3da;
        _0x5b4cb9++;
      }
      _0x818b2d = (_0x5b4cb9 - _0x5b4cb9 % 4) / 4;
      _0xa8c3da = _0x5b4cb9 % 4 * 8;
      _0x1dae69[_0x818b2d] = _0x1dae69[_0x818b2d] | 128 << _0xa8c3da;
      _0x1dae69[_0x931b10 - 2] = _0x2a1c49 << 3;
      _0x1dae69[_0x931b10 - 1] = _0x2a1c49 >>> 29;
      return _0x1dae69;
    }
  }
  function _0x399e11(_0x14f5fe) {
    {
      var _0x337e27;
      var _0x43b98a;
      var _0x5b2281 = "";
      var _0x2b65d8 = "";
      for (_0x43b98a = 0; 3 >= _0x43b98a; _0x43b98a++) {
        _0x337e27 = _0x14f5fe >>> 8 * _0x43b98a & 255;
        _0x2b65d8 = "0" + _0x337e27.toString(16);
        _0x5b2281 += _0x2b65d8.substr(_0x2b65d8.length - 2, 2);
      }
      return _0x5b2281;
    }
  }
  function _0x333da7(_0xdf8303) {
    {
      _0xdf8303 = _0xdf8303.replace(/\r\n/g, "\n");
      for (var _0x134256 = "", _0x50c6a9 = 0; _0x50c6a9 < _0xdf8303.length; _0x50c6a9++) {
        {
          var _0x276639 = _0xdf8303.charCodeAt(_0x50c6a9);
          128 > _0x276639 ? _0x134256 += String.fromCharCode(_0x276639) : _0x276639 > 127 && 2048 > _0x276639 ? (_0x134256 += String.fromCharCode(_0x276639 >> 6 | 192), _0x134256 += String.fromCharCode(63 & _0x276639 | 128)) : (_0x134256 += String.fromCharCode(_0x276639 >> 12 | 224), _0x134256 += String.fromCharCode(_0x276639 >> 6 & 63 | 128), _0x134256 += String.fromCharCode(63 & _0x276639 | 128));
        }
      }
      return _0x134256;
    }
  }
  var _0x3de1ea;
  var _0x293815;
  var _0x363faf;
  var _0x3eedc2;
  var _0x3dcce0;
  var _0x5406f8;
  var _0x1b449e;
  var _0x2693f7;
  var _0xad9f6b;
  var _0x443f56 = [];
  var _0x6dfc0e = 7;
  var _0x590267 = 12;
  var _0x5d2504 = 17;
  var _0x2e6afe = 22;
  var _0x374e8c = 5;
  var _0x1de8ff = 9;
  var _0x36f52d = 14;
  var _0x2b8daa = 20;
  var _0x1f8c9c = 4;
  var _0x3a269c = 11;
  var _0x4b8a2f = 16;
  var _0x52774e = 23;
  var _0x205acc = 6;
  var _0x2943a1 = 10;
  var _0x37a344 = 15;
  var _0x5110cc = 21;
  for (_0x548d80 = _0x333da7(_0x548d80), _0x443f56 = _0x155ed3(_0x548d80), _0x5406f8 = 1732584193, _0x1b449e = 4023233417, _0x2693f7 = 2562383102, _0xad9f6b = 271733878, _0x3de1ea = 0; _0x3de1ea < _0x443f56.length; _0x3de1ea += 16) {
    _0x293815 = _0x5406f8;
    _0x363faf = _0x1b449e;
    _0x3eedc2 = _0x2693f7;
    _0x3dcce0 = _0xad9f6b;
    _0x5406f8 = _0xfdba7c(_0x5406f8, _0x1b449e, _0x2693f7, _0xad9f6b, _0x443f56[_0x3de1ea + 0], _0x6dfc0e, 3614090360);
    _0xad9f6b = _0xfdba7c(_0xad9f6b, _0x5406f8, _0x1b449e, _0x2693f7, _0x443f56[_0x3de1ea + 1], _0x590267, 3905402710);
    _0x2693f7 = _0xfdba7c(_0x2693f7, _0xad9f6b, _0x5406f8, _0x1b449e, _0x443f56[_0x3de1ea + 2], _0x5d2504, 606105819);
    _0x1b449e = _0xfdba7c(_0x1b449e, _0x2693f7, _0xad9f6b, _0x5406f8, _0x443f56[_0x3de1ea + 3], _0x2e6afe, 3250441966);
    _0x5406f8 = _0xfdba7c(_0x5406f8, _0x1b449e, _0x2693f7, _0xad9f6b, _0x443f56[_0x3de1ea + 4], _0x6dfc0e, 4118548399);
    _0xad9f6b = _0xfdba7c(_0xad9f6b, _0x5406f8, _0x1b449e, _0x2693f7, _0x443f56[_0x3de1ea + 5], _0x590267, 1200080426);
    _0x2693f7 = _0xfdba7c(_0x2693f7, _0xad9f6b, _0x5406f8, _0x1b449e, _0x443f56[_0x3de1ea + 6], _0x5d2504, 2821735955);
    _0x1b449e = _0xfdba7c(_0x1b449e, _0x2693f7, _0xad9f6b, _0x5406f8, _0x443f56[_0x3de1ea + 7], _0x2e6afe, 4249261313);
    _0x5406f8 = _0xfdba7c(_0x5406f8, _0x1b449e, _0x2693f7, _0xad9f6b, _0x443f56[_0x3de1ea + 8], _0x6dfc0e, 1770035416);
    _0xad9f6b = _0xfdba7c(_0xad9f6b, _0x5406f8, _0x1b449e, _0x2693f7, _0x443f56[_0x3de1ea + 9], _0x590267, 2336552879);
    _0x2693f7 = _0xfdba7c(_0x2693f7, _0xad9f6b, _0x5406f8, _0x1b449e, _0x443f56[_0x3de1ea + 10], _0x5d2504, 4294925233);
    _0x1b449e = _0xfdba7c(_0x1b449e, _0x2693f7, _0xad9f6b, _0x5406f8, _0x443f56[_0x3de1ea + 11], _0x2e6afe, 2304563134);
    _0x5406f8 = _0xfdba7c(_0x5406f8, _0x1b449e, _0x2693f7, _0xad9f6b, _0x443f56[_0x3de1ea + 12], _0x6dfc0e, 1804603682);
    _0xad9f6b = _0xfdba7c(_0xad9f6b, _0x5406f8, _0x1b449e, _0x2693f7, _0x443f56[_0x3de1ea + 13], _0x590267, 4254626195);
    _0x2693f7 = _0xfdba7c(_0x2693f7, _0xad9f6b, _0x5406f8, _0x1b449e, _0x443f56[_0x3de1ea + 14], _0x5d2504, 2792965006);
    _0x1b449e = _0xfdba7c(_0x1b449e, _0x2693f7, _0xad9f6b, _0x5406f8, _0x443f56[_0x3de1ea + 15], _0x2e6afe, 1236535329);
    _0x5406f8 = _0x997dec(_0x5406f8, _0x1b449e, _0x2693f7, _0xad9f6b, _0x443f56[_0x3de1ea + 1], _0x374e8c, 4129170786);
    _0xad9f6b = _0x997dec(_0xad9f6b, _0x5406f8, _0x1b449e, _0x2693f7, _0x443f56[_0x3de1ea + 6], _0x1de8ff, 3225465664);
    _0x2693f7 = _0x997dec(_0x2693f7, _0xad9f6b, _0x5406f8, _0x1b449e, _0x443f56[_0x3de1ea + 11], _0x36f52d, 643717713);
    _0x1b449e = _0x997dec(_0x1b449e, _0x2693f7, _0xad9f6b, _0x5406f8, _0x443f56[_0x3de1ea + 0], _0x2b8daa, 3921069994);
    _0x5406f8 = _0x997dec(_0x5406f8, _0x1b449e, _0x2693f7, _0xad9f6b, _0x443f56[_0x3de1ea + 5], _0x374e8c, 3593408605);
    _0xad9f6b = _0x997dec(_0xad9f6b, _0x5406f8, _0x1b449e, _0x2693f7, _0x443f56[_0x3de1ea + 10], _0x1de8ff, 38016083);
    _0x2693f7 = _0x997dec(_0x2693f7, _0xad9f6b, _0x5406f8, _0x1b449e, _0x443f56[_0x3de1ea + 15], _0x36f52d, 3634488961);
    _0x1b449e = _0x997dec(_0x1b449e, _0x2693f7, _0xad9f6b, _0x5406f8, _0x443f56[_0x3de1ea + 4], _0x2b8daa, 3889429448);
    _0x5406f8 = _0x997dec(_0x5406f8, _0x1b449e, _0x2693f7, _0xad9f6b, _0x443f56[_0x3de1ea + 9], _0x374e8c, 568446438);
    _0xad9f6b = _0x997dec(_0xad9f6b, _0x5406f8, _0x1b449e, _0x2693f7, _0x443f56[_0x3de1ea + 14], _0x1de8ff, 3275163606);
    _0x2693f7 = _0x997dec(_0x2693f7, _0xad9f6b, _0x5406f8, _0x1b449e, _0x443f56[_0x3de1ea + 3], _0x36f52d, 4107603335);
    _0x1b449e = _0x997dec(_0x1b449e, _0x2693f7, _0xad9f6b, _0x5406f8, _0x443f56[_0x3de1ea + 8], _0x2b8daa, 1163531501);
    _0x5406f8 = _0x997dec(_0x5406f8, _0x1b449e, _0x2693f7, _0xad9f6b, _0x443f56[_0x3de1ea + 13], _0x374e8c, 2850285829);
    _0xad9f6b = _0x997dec(_0xad9f6b, _0x5406f8, _0x1b449e, _0x2693f7, _0x443f56[_0x3de1ea + 2], _0x1de8ff, 4243563512);
    _0x2693f7 = _0x997dec(_0x2693f7, _0xad9f6b, _0x5406f8, _0x1b449e, _0x443f56[_0x3de1ea + 7], _0x36f52d, 1735328473);
    _0x1b449e = _0x997dec(_0x1b449e, _0x2693f7, _0xad9f6b, _0x5406f8, _0x443f56[_0x3de1ea + 12], _0x2b8daa, 2368359562);
    _0x5406f8 = _0x364000(_0x5406f8, _0x1b449e, _0x2693f7, _0xad9f6b, _0x443f56[_0x3de1ea + 5], _0x1f8c9c, 4294588738);
    _0xad9f6b = _0x364000(_0xad9f6b, _0x5406f8, _0x1b449e, _0x2693f7, _0x443f56[_0x3de1ea + 8], _0x3a269c, 2272392833);
    _0x2693f7 = _0x364000(_0x2693f7, _0xad9f6b, _0x5406f8, _0x1b449e, _0x443f56[_0x3de1ea + 11], _0x4b8a2f, 1839030562);
    _0x1b449e = _0x364000(_0x1b449e, _0x2693f7, _0xad9f6b, _0x5406f8, _0x443f56[_0x3de1ea + 14], _0x52774e, 4259657740);
    _0x5406f8 = _0x364000(_0x5406f8, _0x1b449e, _0x2693f7, _0xad9f6b, _0x443f56[_0x3de1ea + 1], _0x1f8c9c, 2763975236);
    _0xad9f6b = _0x364000(_0xad9f6b, _0x5406f8, _0x1b449e, _0x2693f7, _0x443f56[_0x3de1ea + 4], _0x3a269c, 1272893353);
    _0x2693f7 = _0x364000(_0x2693f7, _0xad9f6b, _0x5406f8, _0x1b449e, _0x443f56[_0x3de1ea + 7], _0x4b8a2f, 4139469664);
    _0x1b449e = _0x364000(_0x1b449e, _0x2693f7, _0xad9f6b, _0x5406f8, _0x443f56[_0x3de1ea + 10], _0x52774e, 3200236656);
    _0x5406f8 = _0x364000(_0x5406f8, _0x1b449e, _0x2693f7, _0xad9f6b, _0x443f56[_0x3de1ea + 13], _0x1f8c9c, 681279174);
    _0xad9f6b = _0x364000(_0xad9f6b, _0x5406f8, _0x1b449e, _0x2693f7, _0x443f56[_0x3de1ea + 0], _0x3a269c, 3936430074);
    _0x2693f7 = _0x364000(_0x2693f7, _0xad9f6b, _0x5406f8, _0x1b449e, _0x443f56[_0x3de1ea + 3], _0x4b8a2f, 3572445317);
    _0x1b449e = _0x364000(_0x1b449e, _0x2693f7, _0xad9f6b, _0x5406f8, _0x443f56[_0x3de1ea + 6], _0x52774e, 76029189);
    _0x5406f8 = _0x364000(_0x5406f8, _0x1b449e, _0x2693f7, _0xad9f6b, _0x443f56[_0x3de1ea + 9], _0x1f8c9c, 3654602809);
    _0xad9f6b = _0x364000(_0xad9f6b, _0x5406f8, _0x1b449e, _0x2693f7, _0x443f56[_0x3de1ea + 12], _0x3a269c, 3873151461);
    _0x2693f7 = _0x364000(_0x2693f7, _0xad9f6b, _0x5406f8, _0x1b449e, _0x443f56[_0x3de1ea + 15], _0x4b8a2f, 530742520);
    _0x1b449e = _0x364000(_0x1b449e, _0x2693f7, _0xad9f6b, _0x5406f8, _0x443f56[_0x3de1ea + 2], _0x52774e, 3299628645);
    _0x5406f8 = _0x35cd58(_0x5406f8, _0x1b449e, _0x2693f7, _0xad9f6b, _0x443f56[_0x3de1ea + 0], _0x205acc, 4096336452);
    _0xad9f6b = _0x35cd58(_0xad9f6b, _0x5406f8, _0x1b449e, _0x2693f7, _0x443f56[_0x3de1ea + 7], _0x2943a1, 1126891415);
    _0x2693f7 = _0x35cd58(_0x2693f7, _0xad9f6b, _0x5406f8, _0x1b449e, _0x443f56[_0x3de1ea + 14], _0x37a344, 2878612391);
    _0x1b449e = _0x35cd58(_0x1b449e, _0x2693f7, _0xad9f6b, _0x5406f8, _0x443f56[_0x3de1ea + 5], _0x5110cc, 4237533241);
    _0x5406f8 = _0x35cd58(_0x5406f8, _0x1b449e, _0x2693f7, _0xad9f6b, _0x443f56[_0x3de1ea + 12], _0x205acc, 1700485571);
    _0xad9f6b = _0x35cd58(_0xad9f6b, _0x5406f8, _0x1b449e, _0x2693f7, _0x443f56[_0x3de1ea + 3], _0x2943a1, 2399980690);
    _0x2693f7 = _0x35cd58(_0x2693f7, _0xad9f6b, _0x5406f8, _0x1b449e, _0x443f56[_0x3de1ea + 10], _0x37a344, 4293915773);
    _0x1b449e = _0x35cd58(_0x1b449e, _0x2693f7, _0xad9f6b, _0x5406f8, _0x443f56[_0x3de1ea + 1], _0x5110cc, 2240044497);
    _0x5406f8 = _0x35cd58(_0x5406f8, _0x1b449e, _0x2693f7, _0xad9f6b, _0x443f56[_0x3de1ea + 8], _0x205acc, 1873313359);
    _0xad9f6b = _0x35cd58(_0xad9f6b, _0x5406f8, _0x1b449e, _0x2693f7, _0x443f56[_0x3de1ea + 15], _0x2943a1, 4264355552);
    _0x2693f7 = _0x35cd58(_0x2693f7, _0xad9f6b, _0x5406f8, _0x1b449e, _0x443f56[_0x3de1ea + 6], _0x37a344, 2734768916);
    _0x1b449e = _0x35cd58(_0x1b449e, _0x2693f7, _0xad9f6b, _0x5406f8, _0x443f56[_0x3de1ea + 13], _0x5110cc, 1309151649);
    _0x5406f8 = _0x35cd58(_0x5406f8, _0x1b449e, _0x2693f7, _0xad9f6b, _0x443f56[_0x3de1ea + 4], _0x205acc, 4149444226);
    _0xad9f6b = _0x35cd58(_0xad9f6b, _0x5406f8, _0x1b449e, _0x2693f7, _0x443f56[_0x3de1ea + 11], _0x2943a1, 3174756917);
    _0x2693f7 = _0x35cd58(_0x2693f7, _0xad9f6b, _0x5406f8, _0x1b449e, _0x443f56[_0x3de1ea + 2], _0x37a344, 718787259);
    _0x1b449e = _0x35cd58(_0x1b449e, _0x2693f7, _0xad9f6b, _0x5406f8, _0x443f56[_0x3de1ea + 9], _0x5110cc, 3951481745);
    _0x5406f8 = _0x48c238(_0x5406f8, _0x293815);
    _0x1b449e = _0x48c238(_0x1b449e, _0x363faf);
    _0x2693f7 = _0x48c238(_0x2693f7, _0x3eedc2);
    _0xad9f6b = _0x48c238(_0xad9f6b, _0x3dcce0);
  }
  var _0x5d2e2a = _0x399e11(_0x5406f8) + _0x399e11(_0x1b449e) + _0x399e11(_0x2693f7) + _0x399e11(_0xad9f6b);
  return _0x5d2e2a.toLowerCase();
}
function _0xb815c9() {
  var _0x476cfa = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  this.encode = function (_0x9189ae) {
    {
      var _0x5742a4 = "";
      var _0x35c0df;
      var _0x4ee153;
      var _0x5e6b13;
      var _0x415d34;
      var _0x4b8058;
      var _0x30b926;
      var _0x2bfbe0;
      var _0x26151d = 0;
      _0x9189ae = utf8Encode(_0x9189ae);
      while (_0x26151d < _0x9189ae.length) {
        {
          _0x35c0df = _0x9189ae.charCodeAt(_0x26151d++);
          _0x4ee153 = _0x9189ae.charCodeAt(_0x26151d++);
          _0x5e6b13 = _0x9189ae.charCodeAt(_0x26151d++);
          _0x415d34 = _0x35c0df >> 2;
          _0x4b8058 = (_0x35c0df & 3) << 4 | _0x4ee153 >> 4;
          _0x30b926 = (_0x4ee153 & 15) << 2 | _0x5e6b13 >> 6;
          _0x2bfbe0 = _0x5e6b13 & 63;
          if (isNaN(_0x4ee153)) {
            {
              _0x30b926 = _0x2bfbe0 = 64;
            }
          } else {
            if (isNaN(_0x5e6b13)) {
              {
                _0x2bfbe0 = 64;
              }
            }
          }
          _0x5742a4 = _0x5742a4 + _0x476cfa.charAt(_0x415d34) + _0x476cfa.charAt(_0x4b8058) + _0x476cfa.charAt(_0x30b926) + _0x476cfa.charAt(_0x2bfbe0);
        }
      }
      return _0x5742a4;
    }
  };
  this.decode = function (_0x345c22) {
    {
      var _0x418c00 = "";
      var _0x267898;
      var _0x1a3214;
      var _0x49128d;
      var _0x21c1d8;
      var _0x2ee322;
      var _0x37eb35;
      var _0x4526c1;
      var _0x291dc1 = 0;
      _0x345c22 = _0x345c22.replace(/[^A-Za-z0-9\+\/\=]/g, "");
      while (_0x291dc1 < _0x345c22.length) {
        {
          _0x21c1d8 = _0x476cfa.indexOf(_0x345c22.charAt(_0x291dc1++));
          _0x2ee322 = _0x476cfa.indexOf(_0x345c22.charAt(_0x291dc1++));
          _0x37eb35 = _0x476cfa.indexOf(_0x345c22.charAt(_0x291dc1++));
          _0x4526c1 = _0x476cfa.indexOf(_0x345c22.charAt(_0x291dc1++));
          _0x267898 = _0x21c1d8 << 2 | _0x2ee322 >> 4;
          _0x1a3214 = (_0x2ee322 & 15) << 4 | _0x37eb35 >> 2;
          _0x49128d = (_0x37eb35 & 3) << 6 | _0x4526c1;
          _0x418c00 = _0x418c00 + String.fromCharCode(_0x267898);
          if (_0x37eb35 !== 64) {
            {
              _0x418c00 = _0x418c00 + String.fromCharCode(_0x1a3214);
            }
          }
          if (_0x4526c1 !== 64) {
            {
              _0x418c00 = _0x418c00 + String.fromCharCode(_0x49128d);
            }
          }
        }
      }
      _0x418c00 = utf8Decode(_0x418c00);
      return _0x418c00;
    }
  };
  utf8Encode = function (_0x404bda) {
    {
      _0x404bda = _0x404bda.replace(/\r\n/g, "\n");
      var _0x59570c = "";
      for (var _0x136a66 = 0; _0x136a66 < _0x404bda.length; _0x136a66++) {
        {
          var _0x34ec9f = _0x404bda.charCodeAt(_0x136a66);
          if (_0x34ec9f < 128) {
            {
              _0x59570c += String.fromCharCode(_0x34ec9f);
            }
          } else {
            if (_0x34ec9f > 127 && _0x34ec9f < 2048) {
              {
                _0x59570c += String.fromCharCode(_0x34ec9f >> 6 | 192);
                _0x59570c += String.fromCharCode(_0x34ec9f & 63 | 128);
              }
            } else {
              {
                _0x59570c += String.fromCharCode(_0x34ec9f >> 12 | 224);
                _0x59570c += String.fromCharCode(_0x34ec9f >> 6 & 63 | 128);
                _0x59570c += String.fromCharCode(_0x34ec9f & 63 | 128);
              }
            }
          }
        }
      }
      return _0x59570c;
    }
  };
  utf8Decode = function (_0x5efe83) {
    {
      var _0x44f756 = "";
      var _0x1baa40 = 0;
      var _0x2cfbba = 0;
      var _0x44734e = 0;
      var _0x316412 = 0;
      while (_0x1baa40 < _0x5efe83.length) {
        {
          _0x2cfbba = _0x5efe83.charCodeAt(_0x1baa40);
          if (_0x2cfbba < 128) {
            {
              _0x44f756 += String.fromCharCode(_0x2cfbba);
              _0x1baa40++;
            }
          } else {
            if (_0x2cfbba > 191 && _0x2cfbba < 224) {
              {
                _0x44734e = _0x5efe83.charCodeAt(_0x1baa40 + 1);
                _0x44f756 += String.fromCharCode((_0x2cfbba & 31) << 6 | _0x44734e & 63);
                _0x1baa40 += 2;
              }
            } else {
              {
                _0x44734e = _0x5efe83.charCodeAt(_0x1baa40 + 1);
                _0x316412 = _0x5efe83.charCodeAt(_0x1baa40 + 2);
                _0x44f756 += String.fromCharCode((_0x2cfbba & 15) << 12 | (_0x44734e & 63) << 6 | _0x316412 & 63);
                _0x1baa40 += 3;
              }
            }
          }
        }
      }
      return _0x44f756;
    }
  };
}
function _0x1db962(_0x47b1f4) {
  function _0x16190d(_0x26edf5, _0x3033bb) {
    {
      var _0x263807 = _0x26edf5 << _0x3033bb | _0x26edf5 >>> 32 - _0x3033bb;
      return _0x263807;
    }
  }
  function _0x1a9331(_0x564ab5) {
    {
      var _0xc4f02f = "";
      var _0x2af2ea;
      var _0x3723f3;
      var _0x94eccf;
      for (_0x2af2ea = 0; _0x2af2ea <= 6; _0x2af2ea += 2) {
        {
          _0x3723f3 = _0x564ab5 >>> _0x2af2ea * 4 + 4 & 15;
          _0x94eccf = _0x564ab5 >>> _0x2af2ea * 4 & 15;
          _0xc4f02f += _0x3723f3.toString(16) + _0x94eccf.toString(16);
        }
      }
      return _0xc4f02f;
    }
  }
  function _0x3a43e8(_0x5e3a25) {
    {
      var _0x2d59c1 = "";
      var _0xb9b27a;
      var _0x275323;
      for (_0xb9b27a = 7; _0xb9b27a >= 0; _0xb9b27a--) {
        {
          _0x275323 = _0x5e3a25 >>> _0xb9b27a * 4 & 15;
          _0x2d59c1 += _0x275323.toString(16);
        }
      }
      return _0x2d59c1;
    }
  }
  function _0x9b3985(_0x4d0729) {
    {
      _0x4d0729 = _0x4d0729.replace(/\r\n/g, "\n");
      var _0x2fe845 = "";
      for (var _0x2ade34 = 0; _0x2ade34 < _0x4d0729.length; _0x2ade34++) {
        {
          var _0x1933dd = _0x4d0729.charCodeAt(_0x2ade34);
          if (_0x1933dd < 128) {
            {
              _0x2fe845 += String.fromCharCode(_0x1933dd);
            }
          } else {
            if (_0x1933dd > 127 && _0x1933dd < 2048) {
              {
                _0x2fe845 += String.fromCharCode(_0x1933dd >> 6 | 192);
                _0x2fe845 += String.fromCharCode(_0x1933dd & 63 | 128);
              }
            } else {
              {
                _0x2fe845 += String.fromCharCode(_0x1933dd >> 12 | 224);
                _0x2fe845 += String.fromCharCode(_0x1933dd >> 6 & 63 | 128);
                _0x2fe845 += String.fromCharCode(_0x1933dd & 63 | 128);
              }
            }
          }
        }
      }
      return _0x2fe845;
    }
  }
  var _0x2c06d2;
  var _0xe1a86d;
  var _0x175544;
  var _0x3952f6 = new Array(80);
  var _0x4d7e8b = 1732584193;
  var _0xdfa7e3 = 4023233417;
  var _0xbf49f7 = 2562383102;
  var _0x4d10df = 271733878;
  var _0x5e3d3d = 3285377520;
  var _0x4dfbba;
  var _0x40d9d3;
  var _0x5aacf7;
  var _0x48c794;
  var _0x5c8a11;
  _0x47b1f4 = _0x9b3985(_0x47b1f4);
  var _0x3aff85 = _0x47b1f4.length;
  var _0x8f02ac = new Array();
  for (_0xe1a86d = 0; _0xe1a86d < _0x3aff85 - 3; _0xe1a86d += 4) {
    {
      _0x175544 = _0x47b1f4.charCodeAt(_0xe1a86d) << 24 | _0x47b1f4.charCodeAt(_0xe1a86d + 1) << 16 | _0x47b1f4.charCodeAt(_0xe1a86d + 2) << 8 | _0x47b1f4.charCodeAt(_0xe1a86d + 3);
      _0x8f02ac.push(_0x175544);
    }
  }
  switch (_0x3aff85 % 4) {
    case 0:
      _0xe1a86d = 2147483648;
      break;
    case 1:
      _0xe1a86d = _0x47b1f4.charCodeAt(_0x3aff85 - 1) << 24 | 8388608;
      break;
    case 2:
      _0xe1a86d = _0x47b1f4.charCodeAt(_0x3aff85 - 2) << 24 | _0x47b1f4.charCodeAt(_0x3aff85 - 1) << 16 | 32768;
      break;
    case 3:
      _0xe1a86d = _0x47b1f4.charCodeAt(_0x3aff85 - 3) << 24 | _0x47b1f4.charCodeAt(_0x3aff85 - 2) << 16 | _0x47b1f4.charCodeAt(_0x3aff85 - 1) << 8 | 128;
      break;
  }
  _0x8f02ac.push(_0xe1a86d);
  while (_0x8f02ac.length % 16 != 14) {
    _0x8f02ac.push(0);
  }
  _0x8f02ac.push(_0x3aff85 >>> 29);
  _0x8f02ac.push(_0x3aff85 << 3 & 4294967295);
  for (_0x2c06d2 = 0; _0x2c06d2 < _0x8f02ac.length; _0x2c06d2 += 16) {
    {
      for (_0xe1a86d = 0; _0xe1a86d < 16; _0xe1a86d++) {
        _0x3952f6[_0xe1a86d] = _0x8f02ac[_0x2c06d2 + _0xe1a86d];
      }
      for (_0xe1a86d = 16; _0xe1a86d <= 79; _0xe1a86d++) {
        _0x3952f6[_0xe1a86d] = _0x16190d(_0x3952f6[_0xe1a86d - 3] ^ _0x3952f6[_0xe1a86d - 8] ^ _0x3952f6[_0xe1a86d - 14] ^ _0x3952f6[_0xe1a86d - 16], 1);
      }
      _0x4dfbba = _0x4d7e8b;
      _0x40d9d3 = _0xdfa7e3;
      _0x5aacf7 = _0xbf49f7;
      _0x48c794 = _0x4d10df;
      _0x5c8a11 = _0x5e3d3d;
      for (_0xe1a86d = 0; _0xe1a86d <= 19; _0xe1a86d++) {
        {
          _0x1ef57d = _0x16190d(_0x4dfbba, 5) + (_0x40d9d3 & _0x5aacf7 | ~_0x40d9d3 & _0x48c794) + _0x5c8a11 + _0x3952f6[_0xe1a86d] + 1518500249 & 4294967295;
          _0x5c8a11 = _0x48c794;
          _0x48c794 = _0x5aacf7;
          _0x5aacf7 = _0x16190d(_0x40d9d3, 30);
          _0x40d9d3 = _0x4dfbba;
          _0x4dfbba = _0x1ef57d;
        }
      }
      for (_0xe1a86d = 20; _0xe1a86d <= 39; _0xe1a86d++) {
        {
          _0x1ef57d = _0x16190d(_0x4dfbba, 5) + (_0x40d9d3 ^ _0x5aacf7 ^ _0x48c794) + _0x5c8a11 + _0x3952f6[_0xe1a86d] + 1859775393 & 4294967295;
          _0x5c8a11 = _0x48c794;
          _0x48c794 = _0x5aacf7;
          _0x5aacf7 = _0x16190d(_0x40d9d3, 30);
          _0x40d9d3 = _0x4dfbba;
          _0x4dfbba = _0x1ef57d;
        }
      }
      for (_0xe1a86d = 40; _0xe1a86d <= 59; _0xe1a86d++) {
        {
          _0x1ef57d = _0x16190d(_0x4dfbba, 5) + (_0x40d9d3 & _0x5aacf7 | _0x40d9d3 & _0x48c794 | _0x5aacf7 & _0x48c794) + _0x5c8a11 + _0x3952f6[_0xe1a86d] + 2400959708 & 4294967295;
          _0x5c8a11 = _0x48c794;
          _0x48c794 = _0x5aacf7;
          _0x5aacf7 = _0x16190d(_0x40d9d3, 30);
          _0x40d9d3 = _0x4dfbba;
          _0x4dfbba = _0x1ef57d;
        }
      }
      for (_0xe1a86d = 60; _0xe1a86d <= 79; _0xe1a86d++) {
        {
          _0x1ef57d = _0x16190d(_0x4dfbba, 5) + (_0x40d9d3 ^ _0x5aacf7 ^ _0x48c794) + _0x5c8a11 + _0x3952f6[_0xe1a86d] + 3395469782 & 4294967295;
          _0x5c8a11 = _0x48c794;
          _0x48c794 = _0x5aacf7;
          _0x5aacf7 = _0x16190d(_0x40d9d3, 30);
          _0x40d9d3 = _0x4dfbba;
          _0x4dfbba = _0x1ef57d;
        }
      }
      _0x4d7e8b = _0x4d7e8b + _0x4dfbba & 4294967295;
      _0xdfa7e3 = _0xdfa7e3 + _0x40d9d3 & 4294967295;
      _0xbf49f7 = _0xbf49f7 + _0x5aacf7 & 4294967295;
      _0x4d10df = _0x4d10df + _0x48c794 & 4294967295;
      _0x5e3d3d = _0x5e3d3d + _0x5c8a11 & 4294967295;
    }
  }
  var _0x1ef57d = _0x3a43e8(_0x4d7e8b) + _0x3a43e8(_0xdfa7e3) + _0x3a43e8(_0xbf49f7) + _0x3a43e8(_0x4d10df) + _0x3a43e8(_0x5e3d3d);
  return _0x1ef57d.toLowerCase();
}
function _0x3e2ced(_0x5e8036, _0x1ccfe4) {
  class _0x425e19 {
    constructor(_0x1e0316) {
      {
        this.env = _0x1e0316;
      }
    }
    send(_0x4b2937, _0x3da186 = "GET") {
      {
        _0x4b2937 = typeof _0x4b2937 === "string" ? {
          url: _0x4b2937
        } : _0x4b2937;
        let _0x5aba30 = this.get;
        if (_0x3da186 === "POST") {
          {
            _0x5aba30 = this.post;
          }
        }
        return new Promise((_0x381948, _0x560f7b) => {
          {
            _0x5aba30.call(this, _0x4b2937, (_0x541938, _0xc42654, _0x13312d) => {
              {
                if (_0x541938) {
                  _0x560f7b(_0x541938);
                } else {
                  _0x381948(_0xc42654);
                }
              }
            });
          }
        });
      }
    }
    get(_0x39ca70) {
      {
        return this.send.call(this.env, _0x39ca70);
      }
    }
    post(_0x4b1394) {
      {
        return this.send.call(this.env, _0x4b1394, "POST");
      }
    }
  }
  return new class {
    constructor(_0x2da0bd, _0x1723ff) {
      {
        this.name = _0x2da0bd;
        this.http = new _0x425e19(this);
        this.data = null;
        this.dataFile = "box.dat";
        this.logs = [];
        this.isMute = false;
        this.isNeedRewrite = false;
        this.logSeparator = "\n";
        this.startTime = new Date().getTime();
        Object.assign(this, _0x1723ff);
        this.log("", "🔔 " + this.name + ", 开始!");
      }
    }
    isNode() {
      {
        return "undefined" !== typeof module && !!module.exports;
      }
    }
    isQuanX() {
      {
        return "undefined" !== typeof $task;
      }
    }
    isSurge() {
      {
        return "undefined" !== typeof $httpClient && "undefined" === typeof $loon;
      }
    }
    isLoon() {
      {
        return "undefined" !== typeof $loon;
      }
    }
    isShadowrocket() {
      {
        return "undefined" !== typeof $rocket;
      }
    }
    toObj(_0x2ad295, _0x12e0f3 = null) {
      {
        try {
          {
            return JSON.parse(_0x2ad295);
          }
        } catch {
          {
            return _0x12e0f3;
          }
        }
      }
    }
    toStr(_0x5db216, _0x2e0135 = null) {
      {
        try {
          {
            return JSON.stringify(_0x5db216);
          }
        } catch {
          {
            return _0x2e0135;
          }
        }
      }
    }
    getjson(_0x172c65, _0x5713eb) {
      {
        let _0x33374f = _0x5713eb;
        const _0x47b6f2 = this.getdata(_0x172c65);
        if (_0x47b6f2) {
          {
            try {
              {
                _0x33374f = JSON.parse(this.getdata(_0x172c65));
              }
            } catch {}
          }
        }
        return _0x33374f;
      }
    }
    setjson(_0x5690c5, _0x2f846d) {
      {
        try {
          {
            return this.setdata(JSON.stringify(_0x5690c5), _0x2f846d);
          }
        } catch {
          {
            return false;
          }
        }
      }
    }
    getScript(_0xd2790d) {
      {
        return new Promise(_0x23b189 => {
          {
            const _0x1b444b = {
              url: _0xd2790d
            };
            this.get(_0x1b444b, (_0x46e16c, _0x1c57c3, _0x1e9014) => _0x23b189(_0x1e9014));
          }
        });
      }
    }
    runScript(_0x3ef941, _0x5e1183) {
      {
        return new Promise(_0x2d1ee6 => {
          {
            let _0x3eabc6 = this.getdata("@chavy_boxjs_userCfgs.httpapi");
            _0x3eabc6 = _0x3eabc6 ? _0x3eabc6.replace(/\n/g, "").trim() : _0x3eabc6;
            let _0xe67f3a = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
            _0xe67f3a = _0xe67f3a ? _0xe67f3a * 1 : 20;
            _0xe67f3a = _0x5e1183 && _0x5e1183.timeout ? _0x5e1183.timeout : _0xe67f3a;
            const [_0x1b1cfe, _0x5c30b8] = _0x3eabc6.split("@");
            const _0x444029 = {
              script_text: _0x3ef941,
              mock_type: "cron",
              timeout: _0xe67f3a
            };
            const _0x16929d = {
              "X-Key": _0x1b1cfe,
              Accept: "*/*"
            };
            const _0x3441be = {
              url: "http: //" + _0x5c30b8 + "/v1/scripting/evaluate",
              body: _0x444029,
              headers: _0x16929d
            };
            this.post(_0x3441be, (_0x385dfb, _0x27f290, _0x2ae4c4) => _0x2d1ee6(_0x2ae4c4));
          }
        }).catch(_0xdae68 => this.logErr(_0xdae68));
      }
    }
    loaddata() {
      {
        if (this.isNode()) {
          {
            this.fs = this.fs ? this.fs : require("fs");
            this.path = this.path ? this.path : require("path");
            const _0x23e51f = this.path.resolve(this.dataFile);
            const _0x5a54f9 = this.path.resolve(process.cwd(), this.dataFile);
            const _0x1177c5 = this.fs.existsSync(_0x23e51f);
            const _0x148055 = !_0x1177c5 && this.fs.existsSync(_0x5a54f9);
            if (_0x1177c5 || _0x148055) {
              {
                const _0x2a0998 = _0x1177c5 ? _0x23e51f : _0x5a54f9;
                try {
                  {
                    return JSON.parse(this.fs.readFileSync(_0x2a0998));
                  }
                } catch (_0xd8a314) {
                  {
                    return {};
                  }
                }
              }
            } else {
              return {};
            }
          }
        } else {
          return {};
        }
      }
    }
    writedata() {
      {
        if (this.isNode()) {
          {
            this.fs = this.fs ? this.fs : require("fs");
            this.path = this.path ? this.path : require("path");
            const _0x5ad952 = this.path.resolve(this.dataFile);
            const _0x2f19e1 = this.path.resolve(process.cwd(), this.dataFile);
            const _0x398f29 = this.fs.existsSync(_0x5ad952);
            const _0x2b95b6 = !_0x398f29 && this.fs.existsSync(_0x2f19e1);
            const _0x5a5418 = JSON.stringify(this.data);
            if (_0x398f29) {
              {
                this.fs.writeFileSync(_0x5ad952, _0x5a5418);
              }
            } else {
              if (_0x2b95b6) {
                {
                  this.fs.writeFileSync(_0x2f19e1, _0x5a5418);
                }
              } else {
                {
                  this.fs.writeFileSync(_0x5ad952, _0x5a5418);
                }
              }
            }
          }
        }
      }
    }
    lodash_get(_0x50b8fc, _0x1da196, _0x330012 = undefined) {
      {
        const _0x5ea827 = _0x1da196.replace(/[(d+)]/g, ".$1").split(".");
        let _0x107ad0 = _0x50b8fc;
        for (const _0x263a2e of _0x5ea827) {
          {
            _0x107ad0 = Object(_0x107ad0)[_0x263a2e];
            if (_0x107ad0 === undefined) {
              {
                return _0x330012;
              }
            }
          }
        }
        return _0x107ad0;
      }
    }
    lodash_set(_0x20bbf9, _0x3692b2, _0x164036) {
      {
        if (Object(_0x20bbf9) !== _0x20bbf9) {
          return _0x20bbf9;
        }
        if (!Array.isArray(_0x3692b2)) {
          _0x3692b2 = _0x3692b2.toString().match(/[^.[]]+/g) || [];
        }
        _0x3692b2.slice(0, -1).reduce((_0x55965f, _0x9d564a, _0x464d95) => Object(_0x55965f[_0x9d564a]) === _0x55965f[_0x9d564a] ? _0x55965f[_0x9d564a] : _0x55965f[_0x9d564a] = Math.abs(_0x3692b2[_0x464d95 + 1]) >> 0 === +_0x3692b2[_0x464d95 + 1] ? [] : {}, _0x20bbf9)[_0x3692b2[_0x3692b2.length - 1]] = _0x164036;
        return _0x20bbf9;
      }
    }
    getdata(_0x599bea) {
      {
        let _0x4b02c2 = this.getval(_0x599bea);
        if (/^@/.test(_0x599bea)) {
          {
            const [, _0x587cb4, _0x523918] = /^@(.*?).(.*?)$/.exec(_0x599bea);
            const _0x228a38 = _0x587cb4 ? this.getval(_0x587cb4) : "";
            if (_0x228a38) {
              {
                try {
                  {
                    const _0x413b25 = JSON.parse(_0x228a38);
                    _0x4b02c2 = _0x413b25 ? this.lodash_get(_0x413b25, _0x523918, "") : _0x4b02c2;
                  }
                } catch (_0x2271aa) {
                  {
                    _0x4b02c2 = "";
                  }
                }
              }
            }
          }
        }
        return _0x4b02c2;
      }
    }
    setdata(_0x4d3b1c, _0x5aa893) {
      {
        let _0x450bee = false;
        if (/^@/.test(_0x5aa893)) {
          {
            const [, _0xd53a35, _0x11f534] = /^@(.*?).(.*?)$/.exec(_0x5aa893);
            const _0x585a95 = this.getval(_0xd53a35);
            const _0x4f6475 = _0xd53a35 ? _0x585a95 === "null" ? null : _0x585a95 || "{}" : "{}";
            try {
              {
                const _0x4a300a = JSON.parse(_0x4f6475);
                this.lodash_set(_0x4a300a, _0x11f534, _0x4d3b1c);
                _0x450bee = this.setval(JSON.stringify(_0x4a300a), _0xd53a35);
              }
            } catch (_0x4b0f12) {
              {
                const _0xdc4d0d = {};
                this.lodash_set(_0xdc4d0d, _0x11f534, _0x4d3b1c);
                _0x450bee = this.setval(JSON.stringify(_0xdc4d0d), _0xd53a35);
              }
            }
          }
        } else {
          {
            _0x450bee = this.setval(_0x4d3b1c, _0x5aa893);
          }
        }
        return _0x450bee;
      }
    }
    getval(_0x372841) {
      {
        if (this.isSurge() || this.isLoon()) {
          {
            return $persistentStore.read(_0x372841);
          }
        } else {
          if (this.isQuanX()) {
            {
              return $prefs.valueForKey(_0x372841);
            }
          } else {
            if (this.isNode()) {
              {
                this.data = this.loaddata();
                return this.data[_0x372841];
              }
            } else {
              {
                return this.data && this.data[_0x372841] || null;
              }
            }
          }
        }
      }
    }
    setval(_0x46a7c6, _0x31c97d) {
      {
        if (this.isSurge() || this.isLoon()) {
          {
            return $persistentStore.write(_0x46a7c6, _0x31c97d);
          }
        } else {
          if (this.isQuanX()) {
            {
              return $prefs.setValueForKey(_0x46a7c6, _0x31c97d);
            }
          } else {
            if (this.isNode()) {
              {
                this.data = this.loaddata();
                this.data[_0x31c97d] = _0x46a7c6;
                this.writedata();
                return true;
              }
            } else {
              {
                return this.data && this.data[_0x31c97d] || null;
              }
            }
          }
        }
      }
    }
    initGotEnv(_0x4e408b) {
      {
        this.got = this.got ? this.got : require("got");
        this.cktough = this.cktough ? this.cktough : require("tough-cookie");
        this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
        if (_0x4e408b) {
          {
            _0x4e408b.headers = _0x4e408b.headers ? _0x4e408b.headers : {};
            if (undefined === _0x4e408b.headers.Cookie && undefined === _0x4e408b.cookieJar) {
              {
                _0x4e408b.cookieJar = this.ckjar;
              }
            }
          }
        }
      }
    }
    get(_0x5f935b, _0x637e36 = () => {}) {
      {
        if (_0x5f935b.headers) {
          {
            delete _0x5f935b.headers["Content-Type"];
            delete _0x5f935b.headers["Content-Length"];
          }
        }
        if (this.isSurge() || this.isLoon()) {
          {
            if (this.isSurge() && this.isNeedRewrite) {
              {
                _0x5f935b.headers = _0x5f935b.headers || {};
                const _0x2cae2d = {
                  "X-Surge-Skip-Scripting": false
                };
                Object.assign(_0x5f935b.headers, _0x2cae2d);
              }
            }
            $httpClient.get(_0x5f935b, (_0x1bf42f, _0x279ff3, _0x6c4b3f) => {
              {
                if (!_0x1bf42f && _0x279ff3) {
                  {
                    _0x279ff3.body = _0x6c4b3f;
                    _0x279ff3.statusCode = _0x279ff3.status;
                  }
                }
                _0x637e36(_0x1bf42f, _0x279ff3, _0x6c4b3f);
              }
            });
          }
        } else {
          if (this.isQuanX()) {
            {
              if (this.isNeedRewrite) {
                {
                  _0x5f935b.opts = _0x5f935b.opts || {};
                  const _0x37a544 = {
                    hints: false
                  };
                  Object.assign(_0x5f935b.opts, _0x37a544);
                }
              }
              $task.fetch(_0x5f935b).then(_0x5f1d51 => {
                {
                  const {
                    statusCode: _0x48238b,
                    statusCode,
                    headers,
                    body
                  } = _0x5f1d51;
                  const _0x4fed57 = {
                    status: _0x48238b,
                    statusCode: statusCode,
                    headers: headers,
                    body: body
                  };
                  _0x637e36(null, _0x4fed57, body);
                }
              }, _0x27425c => _0x637e36(_0x27425c));
            }
          } else {
            if (this.isNode()) {
              {
                this.initGotEnv(_0x5f935b);
                this.got(_0x5f935b).on("redirect", (_0x39e544, _0x25577f) => {
                  {
                    try {
                      {
                        if (_0x39e544.headers["set-cookie"]) {
                          {
                            const _0x5bc872 = _0x39e544.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                            if (_0x5bc872) {
                              {
                                this.ckjar.setCookieSync(_0x5bc872, null);
                              }
                            }
                            _0x25577f.cookieJar = this.ckjar;
                          }
                        }
                      }
                    } catch (_0x4819aa) {
                      {
                        this.logErr(_0x4819aa);
                      }
                    }
                  }
                }).then(_0x1a798 => {
                  {
                    const {
                      statusCode: _0x24c21f,
                      statusCode,
                      headers,
                      body
                    } = _0x1a798;
                    const _0x3f2511 = {
                      status: _0x24c21f,
                      statusCode: statusCode,
                      headers: headers,
                      body: body
                    };
                    _0x637e36(null, _0x3f2511, body);
                  }
                }, _0x502ad0 => {
                  {
                    const {
                      message: _0x514ba4,
                      response: _0x162f72
                    } = _0x502ad0;
                    _0x637e36(_0x514ba4, _0x162f72, _0x162f72 && _0x162f72.body);
                  }
                });
              }
            }
          }
        }
      }
    }
    post(_0x4460c3, _0x2c81eb = () => {}) {
      {
        const _0x3f390b = _0x4460c3.method ? _0x4460c3.method.toLocaleLowerCase() : "post";
        if (_0x4460c3.body && _0x4460c3.headers && !_0x4460c3.headers["Content-Type"]) {
          {
            _0x4460c3.headers["Content-Type"] = "application/x-www-form-urlencoded";
          }
        }
        if (_0x4460c3.headers) {
          delete _0x4460c3.headers["Content-Length"];
        }
        if (this.isSurge() || this.isLoon()) {
          {
            if (this.isSurge() && this.isNeedRewrite) {
              {
                _0x4460c3.headers = _0x4460c3.headers || {};
                const _0xd9cf3d = {
                  "X-Surge-Skip-Scripting": false
                };
                Object.assign(_0x4460c3.headers, _0xd9cf3d);
              }
            }
            $httpClient[_0x3f390b](_0x4460c3, (_0x7437ab, _0x115f45, _0x555e67) => {
              {
                if (!_0x7437ab && _0x115f45) {
                  {
                    _0x115f45.body = _0x555e67;
                    _0x115f45.statusCode = _0x115f45.status;
                  }
                }
                _0x2c81eb(_0x7437ab, _0x115f45, _0x555e67);
              }
            });
          }
        } else {
          if (this.isQuanX()) {
            {
              _0x4460c3.method = _0x3f390b;
              if (this.isNeedRewrite) {
                {
                  _0x4460c3.opts = _0x4460c3.opts || {};
                  const _0x27fe01 = {
                    hints: false
                  };
                  Object.assign(_0x4460c3.opts, _0x27fe01);
                }
              }
              $task.fetch(_0x4460c3).then(_0x26a969 => {
                {
                  const {
                    statusCode: _0x15d0b1,
                    statusCode,
                    headers,
                    body
                  } = _0x26a969;
                  const _0x5838ba = {
                    status: _0x15d0b1,
                    statusCode: statusCode,
                    headers: headers,
                    body: body
                  };
                  _0x2c81eb(null, _0x5838ba, body);
                }
              }, _0x24f10e => _0x2c81eb(_0x24f10e));
            }
          } else {
            if (this.isNode()) {
              {
                this.initGotEnv(_0x4460c3);
                const {
                  url,
                  ..._0x504340
                } = _0x4460c3;
                this.got[_0x3f390b](url, _0x504340).then(_0x1d99bf => {
                  {
                    const {
                      statusCode: _0x474493,
                      statusCode,
                      headers,
                      body
                    } = _0x1d99bf;
                    const _0x261117 = {
                      status: _0x474493,
                      statusCode: statusCode,
                      headers: headers,
                      body: body
                    };
                    _0x2c81eb(null, _0x261117, body);
                  }
                }, _0x5ea2fd => {
                  {
                    const {
                      message: _0x36187f,
                      response: _0x472b18
                    } = _0x5ea2fd;
                    _0x2c81eb(_0x36187f, _0x472b18, _0x472b18 && _0x472b18.body);
                  }
                });
              }
            }
          }
        }
      }
    }
    put(_0x403025, _0x493dd7 = () => {}) {
      {
        const _0x2167f6 = _0x403025.method ? _0x403025.method.toLocaleLowerCase() : "put";
        if (_0x403025.body && _0x403025.headers && !_0x403025.headers["Content-Type"]) {
          {
            _0x403025.headers["Content-Type"] = "application/x-www-form-urlencoded";
          }
        }
        if (_0x403025.headers) {
          delete _0x403025.headers["Content-Length"];
        }
        if (this.isSurge() || this.isLoon()) {
          {
            if (this.isSurge() && this.isNeedRewrite) {
              {
                _0x403025.headers = _0x403025.headers || {};
                const _0x31cb7b = {
                  "X-Surge-Skip-Scripting": false
                };
                Object.assign(_0x403025.headers, _0x31cb7b);
              }
            }
            $httpClient[_0x2167f6](_0x403025, (_0x560fff, _0x1cf023, _0x49368b) => {
              {
                if (!_0x560fff && _0x1cf023) {
                  {
                    _0x1cf023.body = _0x49368b;
                    _0x1cf023.statusCode = _0x1cf023.status;
                  }
                }
                _0x493dd7(_0x560fff, _0x1cf023, _0x49368b);
              }
            });
          }
        } else {
          if (this.isQuanX()) {
            {
              _0x403025.method = _0x2167f6;
              if (this.isNeedRewrite) {
                {
                  _0x403025.opts = _0x403025.opts || {};
                  const _0x2175b4 = {
                    hints: false
                  };
                  Object.assign(_0x403025.opts, _0x2175b4);
                }
              }
              $task.fetch(_0x403025).then(_0x4d4d0e => {
                {
                  const {
                    statusCode: _0x41716f,
                    statusCode,
                    headers,
                    body
                  } = _0x4d4d0e;
                  const _0x513b0f = {
                    status: _0x41716f,
                    statusCode: statusCode,
                    headers: headers,
                    body: body
                  };
                  _0x493dd7(null, _0x513b0f, body);
                }
              }, _0x2eb7f6 => _0x493dd7(_0x2eb7f6));
            }
          } else {
            if (this.isNode()) {
              {
                this.initGotEnv(_0x403025);
                const {
                  url,
                  ..._0x5e42a0
                } = _0x403025;
                this.got[_0x2167f6](url, _0x5e42a0).then(_0x317cbc => {
                  {
                    const {
                      statusCode: _0x5e180a,
                      statusCode,
                      headers,
                      body
                    } = _0x317cbc;
                    const _0x3bf0f2 = {
                      status: _0x5e180a,
                      statusCode: statusCode,
                      headers: headers,
                      body: body
                    };
                    _0x493dd7(null, _0x3bf0f2, body);
                  }
                }, _0x26706b => {
                  {
                    const {
                      message: _0x13d8c1,
                      response: _0x239169
                    } = _0x26706b;
                    _0x493dd7(_0x13d8c1, _0x239169, _0x239169 && _0x239169.body);
                  }
                });
              }
            }
          }
        }
      }
    }
    time(_0x17442e, _0x3d5007 = null) {
      {
        const _0x40c8a6 = _0x3d5007 ? new Date(_0x3d5007) : new Date();
        let _0x51bdb9 = {
          "M+": _0x40c8a6.getMonth() + 1,
          "d+": _0x40c8a6.getDate(),
          "H+": _0x40c8a6.getHours(),
          "m+": _0x40c8a6.getMinutes(),
          "s+": _0x40c8a6.getSeconds(),
          "q+": Math.floor((_0x40c8a6.getMonth() + 3) / 3),
          S: _0x40c8a6.getMilliseconds()
        };
        if (/(y+)/.test(_0x17442e)) {
          _0x17442e = _0x17442e.replace(RegExp.$1, (_0x40c8a6.getFullYear() + "").substr(4 - RegExp.$1.length));
        }
        for (let _0x5167e8 in _0x51bdb9) if (new RegExp("(" + _0x5167e8 + ")").test(_0x17442e)) {
          _0x17442e = _0x17442e.replace(RegExp.$1, RegExp.$1.length == 1 ? _0x51bdb9[_0x5167e8] : ("00" + _0x51bdb9[_0x5167e8]).substr(("" + _0x51bdb9[_0x5167e8]).length));
        }
        return _0x17442e;
      }
    }
    msg(_0x265961 = _0x5e8036, _0x48ef1e = "", _0x2be1d0 = "", _0x25c8c7) {
      const _0x2a89c6 = _0x65560 => {
        if (!_0x65560) {
          return _0x65560;
        }
        if (typeof _0x65560 === "string") {
          {
            if (this.isLoon()) {
              return _0x65560;
            } else {
              if (this.isQuanX()) {
                return {
                  "open-url": _0x65560
                };
              } else {
                if (this.isSurge()) {
                  return {
                    url: _0x65560
                  };
                } else {
                  return undefined;
                }
              }
            }
          }
        } else {
          if (typeof _0x65560 === "object") {
            {
              if (this.isLoon()) {
                {
                  let _0x36cb41 = _0x65560.openUrl || _0x65560.url || _0x65560["open-url"];
                  let _0x4de921 = _0x65560.mediaUrl || _0x65560["media-url"];
                  const _0x31b73d = {
                    openUrl: _0x36cb41,
                    mediaUrl: _0x4de921
                  };
                  return _0x31b73d;
                }
              } else {
                if (this.isQuanX()) {
                  {
                    let _0x56da7a = _0x65560["open-url"] || _0x65560.url || _0x65560.openUrl;
                    let _0x20e229 = _0x65560["media-url"] || _0x65560.mediaUrl;
                    const _0x459fcc = {
                      "open-url": _0x56da7a,
                      "media-url": _0x20e229
                    };
                    return _0x459fcc;
                  }
                } else {
                  if (this.isSurge()) {
                    {
                      let _0x215cfa = _0x65560.url || _0x65560.openUrl || _0x65560["open-url"];
                      const _0x4b1d60 = {
                        url: _0x215cfa
                      };
                      return _0x4b1d60;
                    }
                  }
                }
              }
            }
          } else {
            return undefined;
          }
        }
      };
      if (!this.isMute) {
        if (this.isSurge() || this.isLoon()) {
          $notification.post(_0x265961, _0x48ef1e, _0x2be1d0, _0x2a89c6(_0x25c8c7));
        } else {
          if (this.isQuanX()) {
            $notify(_0x265961, _0x48ef1e, _0x2be1d0, _0x2a89c6(_0x25c8c7));
          }
        }
      }
      if (!this.isMuteLog) {
        let _0x29eeae = ["", "==============📣系统通知📣=============="];
        _0x29eeae.push(_0x265961);
        _0x48ef1e ? _0x29eeae.push(_0x48ef1e) : "";
        _0x2be1d0 ? _0x29eeae.push(_0x2be1d0) : "";
        console.log(_0x29eeae.join("\n"));
        this.logs = this.logs.concat(_0x29eeae);
      }
    }
    log(..._0x23394a) {
      if (_0x23394a.length > 0) {
        this.logs = [...this.logs, ..._0x23394a];
      }
      console.log(_0x23394a.join(this.logSeparator));
    }
    logErr(_0x29e9ee, _0x2dbd77) {
      const _0x208983 = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      if (!_0x208983) {
        this.log("", "❗️" + this.name + ", 错误!", _0x29e9ee);
      } else {
        this.log("", "❗️" + this.name + ", 错误!", _0x29e9ee.stack);
      }
    }
    wait(_0x2bb9e1) {
      return new Promise(_0x234d70 => setTimeout(_0x234d70, _0x2bb9e1));
    }
    done(_0x19c652 = {}) {
      const _0x479ad4 = new Date().getTime();
      const _0x23cb92 = (_0x479ad4 - this.startTime) / 1000;
      this.log("", "🔔" + this.name + ", 结束!🕛" + _0x23cb92 + "秒");
      this.log();
      if (this.isSurge() || this.isQuanX() || this.isLoon()) {
        $done(_0x19c652);
      }
    }
  }(_0x5e8036, _0x1ccfe4);
}