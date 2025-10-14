//Tue Oct 14 2025 16:24:23 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
const _0x37bac8 = require("request"),
  _0x102fef = require("querystring"),
  {
    SocksProxyAgent: _0x154ba1
  } = require("socks-proxy-agent");
process.noDeprecation = true;
(!process.env.km || process.env.km.trim() === "") && (console.log("❌ 未检测到 km 环境变量，请先在环境变量中新增 km 变量（极速版卡密）"), process.exit(1));
function _0x7d331a() {
  const _0x2967f5 = ["正在观看广告", "认真观看中...", "浏览广告内容", "模拟用户行为", "观看视频广告", "保持活跃状态", "广告浏览中", "正常观看时长"];
  return _0x2967f5[Math.floor(Math.random() * _0x2967f5.length)];
}
const _0x2e477b = process.env.DEV_MODE === "1" || process.env.DEV_MODE === "true";
function _0x349a11() {
  const _0x1af3ee = process.env.Task;
  if (!_0x1af3ee) return console.log("未设置Task环境变量，将执行所有任务 (food, box, look)"), ["food", "box", "look"];
  const _0x30c845 = _0x1af3ee.split(",").map(_0x138d3c => _0x138d3c.trim().toLowerCase()).filter(Boolean),
    _0x490684 = ["food", "box", "look"],
    _0x25e0f2 = _0x30c845.filter(_0x1fc157 => _0x490684.includes(_0x1fc157));
  if (_0x25e0f2.length === 0) return console.log("Task环境变量中没有有效任务，将执行所有任务 (food, box, look)"), ["food", "box", "look"];
  console.log("从Task环境变量中解析到要执行的任务: " + _0x25e0f2.join(", "));
  return _0x25e0f2;
}
function _0x4eff69(_0x475f41) {
  const _0x354d00 = String(_0x475f41 || "").trim().split("#");
  if (_0x354d00.length < 2) return null;
  const _0xf03b3f = _0x354d00[0],
    _0x4b14cf = _0x354d00.slice(1, _0x354d00.length - (_0x354d00.length >= 3 ? 1 : 0)).join("#");
  let _0x52e1bd = null;
  if (_0x354d00.length >= 3) {
    {
      const _0x18c2a5 = _0x354d00[_0x354d00.length - 1].trim();
      if (_0x18c2a5.includes("|")) {
        console.log("开始解析代理格式: " + _0x18c2a5);
        const _0x10785f = _0x18c2a5.split("|");
        if (_0x10785f.length >= 2) {
          {
            const [_0x24f0c7, _0x412b9e, _0x52d5b5, _0x4d5cfa] = _0x10785f;
            _0x52e1bd = "socks5://" + _0x52d5b5 + ":" + _0x4d5cfa + "@" + _0x24f0c7 + ":" + _0x412b9e;
          }
        }
      } else _0x52e1bd = /^socks5:\/\/.+/i.test(_0x18c2a5) ? _0x18c2a5 : null;
      !_0x52e1bd && console.log("⚠️ 代理字段不是 socks5:// URL，忽略：" + _0x18c2a5);
    }
  }
  return {
    "salt": _0x4b14cf,
    "cookie": _0xf03b3f,
    "proxyUrl": _0x52e1bd
  };
}
function _0x5ebbb4() {
  const _0x461040 = [],
    _0x48766a = new Set();
  let _0x449276 = 0;
  const _0x1c71f3 = parseInt(process.env.MAX_KSCK_INDEX || "666", 10) || 666;
  console.log("开始检查 ksck1 到 ksck" + _0x1c71f3 + " 环境变量...");
  for (let _0x552d11 = 1; _0x552d11 <= _0x1c71f3; _0x552d11++) {
    {
      const _0x14672f = "ksck" + _0x552d11,
        _0xbb89bb = process.env[_0x14672f];
      if (_0xbb89bb) {
        {
          const _0xe60112 = _0xbb89bb.trim();
          if (!_0x48766a.has(_0xe60112)) {
            {
              const _0x4661c0 = _0x4eff69(_0xe60112);
              if (_0x4661c0) _0x4661c0.index = ++_0x449276, _0x4661c0.source = _0x14672f, _0x461040.push(_0x4661c0), _0x48766a.add(_0xe60112);else {
                console.log("⚠️ " + _0x14672f + " 格式错误，忽略: " + _0xe60112);
              }
            }
          } else console.log("⚠️ " + _0x14672f + " 配置重复，忽略: " + _0xe60112);
        }
      }
    }
  }
  const ksckValue = process.env.ksck;
  if (ksckValue) {
    console.log("检测到 ksck 环境变量，解析中...");
    const _0x3feb9c = ksckValue.split("&").map(_0x57de05 => _0x57de05.trim()).filter(Boolean);
    console.log("从 ksck 环境变量中解析到 " + _0x3feb9c.length + " 个配置");
    for (const _0xd8dcc6 of _0x3feb9c) {
      if (!_0x48766a.has(_0xd8dcc6)) {
        const _0x3573b6 = _0x4eff69(_0xd8dcc6);
        if (_0x3573b6) {
          _0x3573b6.index = ++_0x449276;
          _0x3573b6.source = "ksck";
          _0x461040.push(_0x3573b6);
          _0x48766a.add(_0xd8dcc6);
        } else console.log("⚠️ ksck 配置格式错误，忽略: " + _0xd8dcc6);
      } else console.log("⚠️ ksck 配置重复，忽略: " + _0xd8dcc6);
    }
  }
  _0x461040.length === 0 ? console.log("❌ 未找到任何有效的账号配置（检查 ksck 或 ksck1 到 ksck" + _0x1c71f3 + "）") : console.log("✅ 共加载 " + _0x461040.length + " 个有效账号配置");
  return _0x461040;
}
const _0x3f130a = _0x5ebbb4(),
  _0x1cc5fd = _0x3f130a.length,
  _0x148174 = _0x349a11(),
  _0x4e935a = parseInt(process.env.COIN_LIMIT || "500000", 10) || 500000,
  _0x5a97d3 = parseInt(process.env.ROUNDS || "50", 10) || 35,
  _0x19e8ac = parseInt(process.env.LOW_REWARD_THRESHOLD || "10", 10) || 10,
  _0x4235c4 = parseInt(process.env.LOW_REWARD_LIMIT || "3", 10) || 3;
console.log("================================================================================");
console.log("                                  ⭐ 快手至尊金币至尊PLUS版 ⭐                                ");
console.log("                            🏆 安全稳定 · 高效收益 · 尊贵体验 🏆                        ");
console.log("                            🏆 tg频道 · https://t.me/+4ccNiabMEJkxZDVl 🏆                        ");
console.log("                           🏆 赞助购买https://new.lqfaka.com/shop/IMSZZ90F🏆                       ");
console.log("                           🏆 代理购买5r一月http://www.tianxingip.com/proxy/index/index/code/6350550/p/2457.html🏆                       ");
console.log("================🎉 系统初始化完成，快手至尊金币版启动成功！🎉");
console.log("💎 检测到环境变量配置：" + _0x1cc5fd + "个账号");
console.log("🎯 将执行以下任务：" + _0x148174.join(", "));
console.log("[备注：金币阈值配置为 " + _0x4e935a + " 金币（COIN_LIMIT=" + (process.env.COIN_LIMIT || "默认") + ")，轮数配置为 " + _0x5a97d3 + " 轮（ROUNDS=" + (process.env.ROUNDS || "默认") + ")，低奖励阈值 " + _0x19e8ac + " 金币（LOW_REWARD_THRESHOLD=" + (process.env.LOW_REWARD_THRESHOLD || "默认") + ")，低奖励上限 " + _0x4235c4 + " 次（LOW_REWARD_LIMIT=" + (process.env.LOW_REWARD_LIMIT || "默认") + ")]");
_0x1cc5fd > (process.env.MAX_CONCURRENCY || 999) && (console.log("错误: 检测到 " + _0x1cc5fd + " 个账号配置，最多只允许" + (process.env.MAX_CONCURRENCY || 999) + "个"), process.exit(1));
const _0x19687b = "http://110.42.98.174:32081",
  _0xe56128 = _0x19687b + "/sign_modified.php",
  _0x470574 = _0x19687b + "/queue_status";
function _0x1e8edf() {
  try {
    const _0x51e7e2 = _0x27d6f9 => {
        {
          const _0x2af614 = "0123456789abcdef";
          let _0x2e7fe6 = "";
          for (let _0x4c9224 = 0; _0x4c9224 < _0x27d6f9; _0x4c9224++) {
            _0x2e7fe6 += _0x2af614.charAt(Math.floor(Math.random() * _0x2af614.length));
          }
          return _0x2e7fe6;
        }
      },
      _0x194bd1 = _0x51e7e2(16),
      _0x464cf9 = "ANDROID_" + _0x194bd1;
    return _0x464cf9;
  } catch (_0xf6d95a) {
    {
      console.log("生成did失败: " + _0xf6d95a.message);
      const _0x4bc5eb = Date.now().toString(16).toUpperCase();
      return "ANDROID_" + _0x4bc5eb.substring(0, 16);
    }
  }
}
async function _0x5e9c79(_0x167349, _0x1b1a5e = null, _0x4c8067 = "Unknown Request") {
  const _0x1725ae = {
    ..._0x167349
  };
  if (_0x1b1a5e) try {
    _0x1725ae.agent = new _0x154ba1(_0x1b1a5e);
    _0x2e477b && console.log("[调试] " + _0x4c8067 + " 使用代理: " + _0x1b1a5e);
  } catch (_0x2f1cf1) {
    console.log("[错误] " + _0x4c8067 + " 代理URL无效(" + _0x2f1cf1.message + ")，尝试直连模式");
    _0x2e477b && console.log("[调试] 代理无效，自动切换到直连模式");
  } else {
    if (_0x2e477b) {
      console.log("[调试] 未配置代理，使用直连模式");
    }
  }
  if (_0x2e477b) {
    {
      const _0x20abd6 = _0x1725ae.method || "GET";
      console.log("[调试] " + _0x4c8067 + " -> " + _0x20abd6 + " " + _0x1725ae.url);
    }
  }
  return new Promise(_0x4f4c13 => {
    _0x37bac8(_0x1725ae, (_0x2b871c, _0x5949d1, _0x48747e) => {
      if (_0x2b871c) return _0x2b871c.name === "AggregateError" && Array.isArray(_0x2b871c.errors) ? console.log("[调试] " + _0x4c8067 + " 请求错误: AggregateError\n" + _0x2b871c.errors.map((_0x76e706, _0x19f244) => "  [" + _0x19f244 + "] " + (_0x76e706?.["message"] || _0x76e706)).join("\n")) : console.log("[调试] " + _0x4c8067 + " 请求错误: " + (_0x2b871c.message || String(_0x2b871c))), _0x4f4c13(null);
      if (!_0x5949d1 || _0x5949d1.statusCode !== 200) {
        {
          const _0x1b7acb = _0x5949d1 ? _0x5949d1.statusCode : "无响应";
          console.log("[调试] " + _0x4c8067 + " HTTP状态码异常: " + _0x1b7acb);
          return _0x4f4c13(null);
        }
      }
      try {
        _0x4f4c13(JSON.parse(_0x48747e));
      } catch {
        _0x4f4c13(_0x48747e);
      }
    });
  });
}
async function _0x3b128c(_0xab800c, _0x4d1feb = "代理连通性检测") {
  if (!_0xab800c) return {
    "ok": true,
    "msg": "✅ 未配置代理（直连模式）",
    "ip": "localhost"
  };
  const _0x4c8e60 = await _0x5e9c79({
    "method": "GET",
    "url": "https://ipinfo.io/json",
    "headers": {
      "User-Agent": "ProxyTester/1.0"
    },
    "timeout": 8000
  }, _0xab800c, _0x4d1feb + " → ipinfo.io");
  if (!_0x4c8e60) return {
    "ok": false,
    "msg": "❌ 无法通过代理访问 ipinfo.io",
    "ip": ""
  };
  const _0x5506c1 = _0x4c8e60.ip || _0x4c8e60.ip_address || "";
  return {
    "ok": true,
    "msg": "✅ SOCKS5代理正常，出口IP: " + (_0x5506c1 || "未知"),
    "ip": _0x5506c1 || "未知"
  };
}
const _0x3c5aec = new Set();
async function _0x35dd3c(_0x419251, _0x89a922, _0x196f0c = "?") {
  const _0x598966 = "https://nebula.kuaishou.com/rest/n/nebula/activity/earn/overview/basicInfo?source=bottom_guide_first",
    _0x2fdee2 = await _0x5e9c79({
      "method": "GET",
      "url": _0x598966,
      "headers": {
        "Host": "nebula.kuaishou.com",
        "User-Agent": "kwai-android aegon/3.56.0",
        "Cookie": _0x419251,
        "Content-Type": "application/x-www-form-urlencoded"
      },
      "timeout": 12000
    }, _0x89a922, "账号[" + _0x196f0c + "] 获取基本信息");
  if (_0x2fdee2 && _0x2fdee2.result === 1 && _0x2fdee2.data) {
    return {
      "nickname": _0x2fdee2.data.userData?.["nickname"] || null,
      "totalCoin": _0x2fdee2.data.totalCoin ?? null,
      "allCash": _0x2fdee2.data.allCash ?? null
    };
  }
  return null;
}
function _0x5939f2(_0x2fe819, _0x45e14f) {
  _0x2fe819 = String(_0x2fe819);
  if (_0x2fe819.length >= _0x45e14f) return _0x2fe819.substring(0, _0x45e14f);
  const _0x1c5328 = _0x45e14f - _0x2fe819.length,
    _0x53ce86 = Math.floor(_0x1c5328 / 2),
    _0x1cd57d = _0x1c5328 - _0x53ce86;
  return " ".repeat(_0x53ce86) + _0x2fe819 + " ".repeat(_0x1cd57d);
}
class _0x48a3f0 {
  constructor({
    index: _0x49257e,
    salt: _0x266dba,
    cookie: _0x351d39,
    nickname = "",
    proxyUrl = null,
    tasksToExecute = ["food", "box", "look"]
  }) {
    this.index = _0x49257e;
    this.salt = _0x266dba;
    this.cookie = _0x351d39;
    this.nickname = nickname || "账号" + _0x49257e;
    this.proxyUrl = proxyUrl;
    this.coinLimit = parseInt(process.env.COIN_LIMIT || "500000", 10) || 500000;
    this.lowRewardThreshold = parseInt(process.env.LOW_REWARD_THRESHOLD || "10", 10) || 10;
    this.lowRewardLimit = parseInt(process.env.LOW_REWARD_LIMIT || "3", 10) || 3;
    this.coinExceeded = false;
    this.tasksToExecute = tasksToExecute;
    this.extractCookieInfo();
    this.headers = {
      "Host": "nebula.kuaishou.com",
      "Connection": "keep-alive",
      "User-Agent": "Mozilla/5.0 (Linux; Android 10; MI 8 Lite Build/QKQ1.190910.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/87.0.4280.101 Mobile Safari/537.36",
      "Cookie": this.cookie,
      "content-type": "application/json"
    };
    this.taskReportPath = "/rest/r/ad/task/report";
    this.startTime = Date.now();
    this.endTime = this.startTime - 30000;
    this.queryParams = "mod=Xiaomi(MI 11)&appver=" + this.appver + "&egid=" + this.egid + "&did=" + this.did;
    this.taskConfigs = {
      "box": {
        "name": "宝箱广告",
        "businessId": 606,
        "posId": 20346,
        "subPageId": 100024064,
        "requestSceneType": 1,
        "taskType": 1
      },
      "look": {
        "name": "看广告得金币",
        "businessId": 672,
        "posId": 24067,
        "subPageId": 100026367,
        "requestSceneType": 1,
        "taskType": 1
      },
      "food": {
        "name": "饭补广告",
        "businessId": 9362,
        "posId": 24067,
        "subPageId": 100026367,
        "requestSceneType": 7,
        "taskType": 2
      }
    };
    this.taskStats = {};
    this.tasksToExecute.forEach(_0x14c0d2 => {
      this.taskConfigs[_0x14c0d2] && (this.taskStats[_0x14c0d2] = {
        "success": 0,
        "failed": 0,
        "totalReward": 0
      });
    });
    this.lowRewardStreak = 0;
    this.stopAllTasks = false;
    this.taskLimitReached = {};
    this.tasksToExecute.forEach(_0x3631af => {
      this.taskConfigs[_0x3631af] && (this.taskLimitReached[_0x3631af] = false);
    });
  }
  async ["checkCoinLimit"]() {
    try {
      const _0xd86c94 = await _0x35dd3c(this.cookie, this.proxyUrl, this.index);
      if (_0xd86c94 && _0xd86c94.totalCoin) {
        const _0x163803 = parseInt(_0xd86c94.totalCoin);
        if (_0x163803 >= this.coinLimit) return console.log("⚠️ 账号[" + this.nickname + "] 金币已达 " + _0x163803 + "，超过 " + this.coinLimit + " 阈值，将停止任务 [备注：超过金币阈值（COIN_LIMIT=" + (process.env.COIN_LIMIT || "默认500000") + ")]"), this.coinExceeded = true, this.stopAllTasks = true, true;
      }
      return false;
    } catch (_0x1d54f3) {
      console.log("账号[" + this.nickname + "] 金币检查异常: " + _0x1d54f3.message);
      return false;
    }
  }
  ["extractCookieInfo"]() {
    try {
      {
        const _0x1ccb94 = this.cookie.match(/egid=([^;]+)/),
          _0x4c8826 = this.cookie.match(/did=([^;]+)/),
          _0x59239a = this.cookie.match(/userId=([^;]+)/),
          _0x482284 = this.cookie.match(/kuaishou\.api_st=([^;]+)/),
          _0xa5dce3 = this.cookie.match(/appver=([^;]+)/);
        this.egid = _0x1ccb94 ? _0x1ccb94[1] : "";
        this.did = _0x4c8826 ? _0x4c8826[1] : "";
        this.userId = _0x59239a ? _0x59239a[1] : "";
        this.kuaishouApiSt = _0x482284 ? _0x482284[1] : "";
        this.appver = _0xa5dce3 ? _0xa5dce3[1] : "13.7.20.10468";
        if (!this.egid || !this.did) {
          console.log("账号[" + this.nickname + "] cookie格式可能无 egid 或 did，但继续尝试...");
        }
      }
    } catch (_0x2b26d4) {
      console.log("账号[" + this.nickname + "] 解析cookie失败: " + _0x2b26d4.message);
    }
  }
  ["getTaskStats"]() {
    return this.taskStats;
  }
  ["printTaskStats"]() {
    console.log("\n账号[" + this.nickname + "] 任务执行统计:");
    for (const [_0x1fc6bd, _0x50bcbd] of Object.entries(this.taskStats)) {
      const _0x1e496c = this.taskConfigs[_0x1fc6bd].name;
      console.log("  " + _0x1e496c + ": 成功" + _0x50bcbd.success + "次, 失败" + _0x50bcbd.failed + "次, 总奖励" + _0x50bcbd.totalReward + "金币");
    }
  }
  async ["retryOperation"](_0x3ee071, _0x95f4aa, _0x527e13 = 3, _0x1bc615 = 2000) {
    let _0x4ca973 = 0,
      _0x53d955 = null;
    while (_0x4ca973 < _0x527e13) {
      {
        try {
          const _0x38734e = await _0x3ee071();
          if (_0x38734e) return _0x38734e;
          _0x53d955 = new Error(_0x95f4aa + " 返回空结果");
        } catch (_0x336bb6) {
          _0x53d955 = _0x336bb6;
          console.log("账号[" + this.nickname + "] " + _0x95f4aa + " 异常: " + _0x336bb6.message);
        }
        _0x4ca973++;
        _0x4ca973 < _0x527e13 && (console.log("账号[" + this.nickname + "] " + _0x95f4aa + " 失败，重试 " + _0x4ca973 + "/" + _0x527e13), await new Promise(_0x3ec577 => setTimeout(_0x3ec577, _0x1bc615)));
      }
    }
    _0x2e477b && _0x53d955 && console.log("[调试] " + _0x95f4aa + " 最终失败: " + _0x53d955.message);
    return null;
  }
  async ["getAdInfo"](_0x1b4ef2) {
    try {
      {
        const _0x3dabca = "/rest/e/reward/mixed/ad",
          _0x3a3c85 = {
            "encData": "|encData|",
            "sign": "|sign|",
            "cs": "false",
            "client_key": "2ac2a76d",
            "videoModelCrowdTag": "1_23",
            "os": "android",
            "kuaishou.api_st": this.kuaishouApiSt,
            "uQaTag": "1##swLdgl:99#ecPp:-9#cmNt:-0#cmHs:-3#cmMnsl:-0"
          },
          _0x1753af = {
            "earphoneMode": "1",
            "mod": "Xiaomi(23116PN5BC)",
            "appver": this.appver,
            "isp": "CUCC",
            "language": "zh-cn",
            "ud": this.userId,
            "did_tag": "0",
            "net": "WIFI",
            "kcv": "1599",
            "app": "0",
            "kpf": "ANDROID_PHONE",
            "ver": "11.6",
            "android_os": "0",
            "boardPlatform": "pineapple",
            "kpn": "NEBULA",
            "androidApiLevel": "35",
            "country_code": "cn",
            "sys": "ANDROID_15",
            "sw": "1080",
            "sh": "2400",
            "abi": "arm64",
            "userRecoBit": "0"
          },
          _0xe7770c = {
            "appInfo": {
              "appId": "kuaishou_nebula",
              "name": "快手极速版",
              "packageName": "com.kuaishou.nebula",
              "version": this.appver,
              "versionCode": -1
            },
            "deviceInfo": {
              "osType": 1,
              "osVersion": "15",
              "deviceId": this.did,
              "screenSize": {
                "width": 1080,
                "height": 2249
              },
              "ftt": ""
            },
            "userInfo": {
              "userId": this.userId,
              "age": 0,
              "gender": ""
            },
            "impInfo": [{
              "pageId": 11101,
              "subPageId": _0x1b4ef2.subPageId,
              "action": 0,
              "browseType": 3,
              "impExtData": "{}",
              "mediaExtData": "{}"
            }]
          },
          _0x2bbf9c = Buffer.from(JSON.stringify(_0xe7770c)).toString("base64"),
          _0x4745a6 = await this.generateSignature2(_0x3dabca, _0x102fef.stringify({
            ..._0x1753af,
            ..._0x3a3c85
          }), this.salt, _0x2bbf9c);
        if (!_0x4745a6) {
          console.log("❌ 账号[" + this.nickname + "] 生成签名失败，无法获取" + _0x1b4ef2.name);
          return null;
        }
        const _0x38fcfa = {
          ..._0x1753af,
          "sig": _0x4745a6.sig,
          "__NS_sig3": _0x4745a6.__NS_sig3,
          "__NS_xfalcon": "",
          "__NStokensig": _0x4745a6.__NStokensig
        };
        _0x3a3c85.encData = _0x4745a6.encData;
        _0x3a3c85.sign = _0x4745a6.sign;
        const _0xfa52e5 = "https://api.e.kuaishou.com" + _0x3dabca + "?" + _0x102fef.stringify(_0x38fcfa),
          _0x564d31 = await _0x5e9c79({
            "method": "POST",
            "url": _0xfa52e5,
            "headers": {
              "Host": "api.e.kuaishou.com",
              "User-Agent": "kwai-android aegon/3.56.0",
              "Cookie": "kuaishou_api_st=" + this.kuaishouApiSt
            },
            "form": _0x3a3c85,
            "timeout": 12000
          }, this.proxyUrl, "账号[" + this.nickname + "] 获取广告");
        if (!_0x564d31) return null;
        if (_0x564d31.errorMsg === "OK" && _0x564d31.feeds && _0x564d31.feeds[0] && _0x564d31.feeds[0].ad) {
          const _0x3e083b = _0x564d31.feeds[0].caption || _0x564d31.feeds[0].ad?.["caption"] || "";
          _0x3e083b && console.log("✅ 账号[" + this.nickname + "] 成功获取到广告信息：" + _0x3e083b);
          const _0x1c67af = _0x564d31.feeds[0].exp_tag || "",
            _0x455415 = _0x1c67af.split("/")[1]?.["split"]("_")?.[0] || "";
          return {
            "cid": _0x564d31.feeds[0].ad.creativeId,
            "llsid": _0x455415
          };
        }
        if (_0x2e477b) {
          console.log("[调试] getAdInfo 原始响应:", JSON.stringify(_0x564d31));
        }
        return null;
      }
    } catch (_0x555ff1) {
      console.log("❌ 账号[" + this.nickname + "] 获取广告异常: " + _0x555ff1.message);
      return null;
    }
  }
  async ["generateSignature"](_0x1fdf91, _0x293124, _0x132a64, _0x1e406d) {
    try {
      const _0x15de85 = JSON.stringify({
          "businessId": _0x1e406d.businessId,
          "endTime": this.endTime,
          "extParams": "",
          "mediaScene": "video",
          "neoInfos": [{
            "creativeId": _0x1fdf91,
            "extInfo": "",
            "llsid": _0x293124,
            "requestSceneType": _0x1e406d.requestSceneType,
            "taskType": _0x1e406d.taskType,
            "watchExpId": "",
            "watchStage": 0
          }],
          "pageId": 11101,
          "posId": _0x1e406d.posId,
          "reportType": 0,
          "sessionId": "",
          "startTime": this.startTime,
          "subPageId": _0x1e406d.subPageId
        }),
        _0x21a8f6 = "bizStr=" + encodeURIComponent(_0x15de85) + "&cs=false&client_key=2ac2a76d",
        _0x31c518 = this.queryParams + "&" + _0x21a8f6,
        _0x196927 = await this.requestSignService({
          "urlpath": this.taskReportPath,
          "urldata": _0x31c518,
          "api_client_salt": this.salt
        }, "账号[" + this.nickname + "] 生成报告签名");
      if (!_0x196927 || !_0x196927.data) {
        return null;
      }
      return {
        "sig": _0x196927.data.sig,
        "sig3": _0x196927.data.__NS_sig3,
        "sigtoken": _0x196927.data.__NStokensig,
        "post": _0x21a8f6
      };
    } catch (_0x505848) {
      console.log("❌ 账号[" + this.nickname + "] 生成签名异常: " + _0x505848.message);
      return null;
    }
  }
  async ["generateSignature2"](_0x476266, _0xd32c3b, _0x58c180, _0xc9570) {
    const _0x3d5312 = await this.requestSignService({
      "urlpath": _0x476266,
      "urldata": _0xd32c3b,
      "api_client_salt": _0x58c180,
      "req_str": _0xc9570
    }, "账号[" + this.nickname + "] 生成广告签名");
    if (!_0x3d5312) return null;
    return _0x3d5312.data || _0x3d5312;
  }
  async ["submitReport"](_0x539a4f, _0xe9a4c, _0x52840a, _0x565cd1, _0xb97a9b, _0x4a8408) {
    try {
      {
        const _0x809499 = "https://api.e.kuaishou.com" + this.taskReportPath + "?" + (this.queryParams + "&sig=" + _0x539a4f + "&__NS_sig3=" + _0xe9a4c + "&__NS_xfalcon=&__NStokensig=" + _0x52840a),
          _0x15c1e1 = await _0x5e9c79({
            "method": "POST",
            "url": _0x809499,
            "headers": {
              "Host": "api.e.kuaishou.cn",
              "User-Agent": "kwai-android aegon/3.56.0",
              "Cookie": this.cookie,
              "Content-Type": "application/x-www-form-urlencoded"
            },
            "body": _0x565cd1,
            "timeout": 12000
          }, this.proxyUrl, "账号[" + this.nickname + "] 提交任务");
        if (!_0x15c1e1) return {
          "success": false,
          "reward": 0
        };
        if (_0x15c1e1.result === 1) {
          const _0x56d9f5 = _0x15c1e1.data?.["neoAmount"] || 0;
          console.log("💰 账号[" + this.nickname + "] " + _0x4a8408.name + _0x56d9f5 + "金币奖励！");
          _0x56d9f5 <= this.lowRewardThreshold ? (this.lowRewardStreak++, console.log("⚠️ 账号[" + this.nickname + "] [备注：奖励低于 LOW_REWARD_THRESHOLD=" + this.lowRewardThreshold + "] 金币低于阈值, 模拟下载应用提升权重^^^^^^"), this.did = _0x1e8edf(), this.lowRewardStreak >= this.lowRewardLimit && (console.log("🏁 账号[" + this.nickname + "] 连续" + this.lowRewardLimit + "次奖励≤" + this.lowRewardThreshold + "，停止全部任务 [备注：连续低奖励达到上限 LOW_REWARD_LIMIT=" + this.lowRewardLimit + "]"), this.stopAllTasks = true)) : this.lowRewardStreak = 0;
          return {
            "success": true,
            "reward": _0x56d9f5
          };
        }
        if ([20107, 20108, 1003, 415].includes(_0x15c1e1.result)) return console.log("⚠️ 账号[" + this.nickname + "] " + _0x4a8408.name + " 已达上限"), this.taskLimitReached[_0xb97a9b] = true, {
          "success": false,
          "reward": 0
        };
        console.log("❌ 账号[" + this.nickname + "] " + _0x4a8408.name + " 奖励失败，result=" + _0x15c1e1.result + " msg=" + (_0x15c1e1.data || ""));
        _0x2e477b && console.log("[调试] submitReport 原始响应:", JSON.stringify(_0x15c1e1));
        return {
          "success": false,
          "reward": 0
        };
      }
    } catch (_0x542fb2) {
      console.log("❌ 账号[" + this.nickname + "] 提交任务异常: " + _0x542fb2.message);
      return {
        "success": false,
        "reward": 0
      };
    }
  }
  async ["requestSignService"](_0x660410, _0x48bb24) {
    const _0x14ce99 = (process.env.km || "").trim();
    if (!_0x14ce99) return null;
    const _0x5c6166 = await _0x5e9c79({
      "method": "POST",
      "url": _0xe56128 + "?card_key=" + encodeURIComponent(_0x14ce99),
      "headers": {
        "Content-Type": "application/json",
        "User-Agent": "Mozilla/5.0",
        "X-Card-Key": _0x14ce99
      },
      "body": JSON.stringify(_0x660410),
      "timeout": 15000
    }, null, _0x48bb24 + "（签名服务）");
    if (!_0x5c6166) return null;
    if (_0x5c6166.success && _0x5c6166.status === "queued" && _0x5c6166.queue_id) {
      const _0x413c52 = await this.pollQueueStatus(_0x5c6166.queue_id);
      if (_0x413c52 && _0x413c52.success && (_0x413c52.status === "completed" || _0x413c52.status === "processed")) {
        return _0x413c52;
      }
      console.log("账号[" + this.nickname + "] 签名失败: " + (_0x413c52?.["error"] || _0x413c52?.["status"] || "未知"));
      return null;
    }
    if (_0x5c6166.success && (!_0x5c6166.status || _0x5c6166.status === "processed" || _0x5c6166.status === "completed")) return _0x5c6166;
    console.log("账号[" + this.nickname + "] 签名失败: " + (_0x5c6166.error || _0x5c6166.message || _0x5c6166.status || "未知"));
    return null;
  }
  async ["pollQueueStatus"](_0xefc5e0, _0x101e72 = 30000, _0x4821cd = 2000) {
    const _0x3f81f3 = Date.now();
    while (Date.now() - _0x3f81f3 < _0x101e72) {
      const _0x559b1d = await _0x5e9c79({
        "method": "GET",
        "url": _0x470574 + "?queue_id=" + encodeURIComponent(_0xefc5e0),
        "headers": {
          "User-Agent": "Mozilla/5.0"
        },
        "timeout": 10000
      }, null, "账号[" + this.nickname + "] 签名排队");
      if (_0x559b1d?.["success"]) {
        if (_0x559b1d.status === "completed" || _0x559b1d.status === "processed") return _0x559b1d;
        if (_0x559b1d.status === "failed") return _0x559b1d;
      }
      await new Promise(_0xa46bff => setTimeout(_0xa46bff, _0x4821cd));
    }
    return {
      "success": false,
      "status": "failed",
      "error": "queue_timeout"
    };
  }
  async ["executeTask"](_0x34ef73) {
    const _0x11d6f6 = this.taskConfigs[_0x34ef73];
    if (!_0x11d6f6) return console.log("❌ 账号[" + this.nickname + "] 未知任务: " + _0x34ef73), false;
    if (this.taskLimitReached[_0x34ef73]) return false;
    try {
      const _0x2d83b9 = await this.retryOperation(() => this.getAdInfo(_0x11d6f6), "获取" + _0x11d6f6.name + "信息", 3);
      if (!_0x2d83b9) return this.taskStats[_0x34ef73].failed++, false;
      const _0x3cdce6 = Math.floor(Math.random() * 10000) + 30000;
      console.log("🔍 账号[" + this.nickname + "] ==>" + _0x11d6f6.name + " " + _0x7d331a() + " " + Math.round(_0x3cdce6 / 1000) + " 秒");
      await new Promise(_0x5dbe07 => setTimeout(_0x5dbe07, _0x3cdce6));
      const _0x4eb227 = await this.retryOperation(() => this.generateSignature(_0x2d83b9.cid, _0x2d83b9.llsid, _0x34ef73, _0x11d6f6), "生成" + _0x11d6f6.name + "签名", 3);
      if (!_0x4eb227) return this.taskStats[_0x34ef73].failed++, false;
      const _0x49f7c8 = await this.retryOperation(() => this.submitReport(_0x4eb227.sig, _0x4eb227.sig3, _0x4eb227.sigtoken, _0x4eb227.post, _0x34ef73, _0x11d6f6), "提交" + _0x11d6f6.name + "报告", 3);
      if (_0x49f7c8?.["success"]) return this.taskStats[_0x34ef73].success++, this.taskStats[_0x34ef73].totalReward += _0x49f7c8.reward || 0, true;
      this.taskStats[_0x34ef73].failed++;
      return false;
    } catch (_0x54debf) {
      console.log("❌ 账号[" + this.nickname + "] 任务异常(" + _0x34ef73 + "): " + _0x54debf.message);
      this.taskStats[_0x34ef73].failed++;
      return false;
    }
  }
  async ["executeAllTasksByPriority"]() {
    const _0x547e79 = {};
    for (const _0x290a9f of this.tasksToExecute) {
      if (this.stopAllTasks) break;
      if (!this.taskConfigs[_0x290a9f]) {
        console.log("⚠️ 账号[" + this.nickname + "] 跳过未知任务: " + _0x290a9f);
        continue;
      }
      console.log("🚀 账号[" + this.nickname + "] 开始任务：" + this.taskConfigs[_0x290a9f].name);
      _0x547e79[_0x290a9f] = await this.executeTask(_0x290a9f);
      if (this.stopAllTasks) break;
      if (_0x290a9f !== this.tasksToExecute[this.tasksToExecute.length - 1]) {
        {
          const _0x2b69a6 = Math.floor(Math.random() * 8000) + 7000;
          console.log("⏱ 账号[" + this.nickname + "] 下一个任务，随机等待 " + Math.round(_0x2b69a6 / 1000) + " 秒");
          await new Promise(_0x5a461d => setTimeout(_0x5a461d, _0x2b69a6));
        }
      }
    }
    return _0x547e79;
  }
}
async function _0x1da865(_0x51278e, _0x299357, _0x43955f) {
  const _0xd7d890 = new Array(_0x51278e.length);
  let _0x3d1b10 = 0;
  async function _0xad384d() {
    while (true) {
      {
        const _0x17fd1e = _0x3d1b10++;
        if (_0x17fd1e >= _0x51278e.length) {
          return;
        }
        const _0x253f54 = _0x51278e[_0x17fd1e];
        try {
          _0xd7d890[_0x17fd1e] = await _0x43955f(_0x253f54, _0x17fd1e);
        } catch (_0x23174b) {
          console.log("并发执行异常（index=" + (_0x17fd1e + 1) + "）：" + _0x23174b.message);
          _0xd7d890[_0x17fd1e] = null;
        }
      }
    }
  }
  const _0x4259b2 = Array.from({
    "length": Math.min(_0x299357, _0x51278e.length)
  }, _0xad384d);
  await Promise.all(_0x4259b2);
  return _0xd7d890;
}
async function _0x598c47(_0xd4c15c, _0x181a2c = _0x5a97d3) {
  console.log("账号[" + _0xd4c15c.index + "]" + (_0xd4c15c.remark ? "（" + _0xd4c15c.remark + "）" : "") + " [备注：本账号将执行最多 " + _0x181a2c + " 轮任务]");
  if (_0xd4c15c.proxyUrl) {
    {
      console.log("账号[" + _0xd4c15c.index + "]" + (_0xd4c15c.remark ? "（" + _0xd4c15c.remark + "）" : "") + " 🔌 测试代理连接中...");
      const _0x4930d8 = await _0x3b128c(_0xd4c15c.proxyUrl, "账号[" + _0xd4c15c.index + "]");
      console.log("  - " + (_0x4930d8.ok ? "✅ 代理验证通过，IP: " + _0x4930d8.ip : "❌ 代理验证失败") + ": " + _0x4930d8.msg);
      if (_0x4930d8.ok && _0x4930d8.ip && _0x4930d8.ip !== "localhost") {
        _0x3c5aec.has(_0x4930d8.ip) && (console.log("\n⚠️ 存在相同代理IP（" + _0x4930d8.ip + "），请立即检查！"), process.exit(1));
        _0x3c5aec.add(_0x4930d8.ip);
      }
    }
  } else console.log("账号[" + _0xd4c15c.index + "] 未配置代理，走直连");
  console.log("账号[" + _0xd4c15c.index + "]" + (_0xd4c15c.remark ? "（" + _0xd4c15c.remark + "）" : "") + " 🔍 获取账号信息中...");
  let _0x24de86 = await _0x35dd3c(_0xd4c15c.cookie, _0xd4c15c.proxyUrl, _0xd4c15c.index),
    _0x4c26ad = _0x24de86?.["nickname"] || "账号" + _0xd4c15c.index;
  if (_0x24de86) {
    {
      const _0x27bdaa = _0x24de86.totalCoin != null ? _0x24de86.totalCoin : "未知",
        _0x5a83a4 = _0x24de86.allCash != null ? _0x24de86.allCash : "未知";
      console.log("账号[" + _0x4c26ad + "] ✅ 登录成功，💰 当前金币: " + _0x27bdaa + "，💸 当前余额: " + _0x5a83a4);
    }
  } else console.log("账号[" + _0x4c26ad + "] ❌ 基本信息获取失败，继续执行");
  const _0x389453 = new _0x48a3f0({
    ..._0xd4c15c,
    "nickname": _0x4c26ad,
    "tasksToExecute": _0x148174
  });
  await _0x389453.checkCoinLimit();
  if (_0x389453.coinExceeded) {
    {
      console.log("账号[" + _0x389453.nickname + "] 初始金币已超过阈值，不执行任务");
      const _0x18c756 = await _0x35dd3c(_0xd4c15c.cookie, _0xd4c15c.proxyUrl, _0xd4c15c.index),
        _0x2967ee = _0x24de86?.["totalCoin"] || 0,
        _0x438491 = _0x18c756?.["totalCoin"] || 0,
        _0x6af133 = _0x438491 - _0x2967ee,
        _0x118285 = _0x24de86?.["allCash"] || 0,
        _0x23d0c9 = _0x18c756?.["allCash"] || 0,
        _0x592b46 = _0x23d0c9 - _0x118285;
      return {
        "index": _0xd4c15c.index,
        "nickname": _0x4c26ad,
        "initialCoin": _0x2967ee,
        "finalCoin": _0x438491,
        "coinChange": _0x6af133,
        "initialCash": _0x118285,
        "finalCash": _0x23d0c9,
        "cashChange": _0x592b46,
        "stats": _0x389453.getTaskStats(),
        "coinLimitExceeded": true
      };
    }
  }
  for (let _0x2b1999 = 0; _0x2b1999 < _0x181a2c; _0x2b1999++) {
    {
      const _0xafb26e = Math.floor(Math.random() * 8000) + 8000;
      console.log("账号[" + _0x389453.nickname + "] ⌛ 第" + (_0x2b1999 + 1) + "轮，先随机等待 " + Math.round(_0xafb26e / 1000) + " 秒");
      await new Promise(_0x2fe590 => setTimeout(_0x2fe590, _0xafb26e));
      console.log("账号[" + _0x389453.nickname + "] 🚀 开始第" + (_0x2b1999 + 1) + "轮任务");
      const _0x54b45e = await _0x389453.executeAllTasksByPriority();
      Object.values(_0x54b45e).some(Boolean) ? console.log("账号[" + _0x389453.nickname + "] ✅ 第" + (_0x2b1999 + 1) + "轮执行完成") : console.log("账号[" + _0x389453.nickname + "] ⚠️ 第" + (_0x2b1999 + 1) + "轮没有成功任务");
      if (_0x389453.stopAllTasks) {
        {
          console.log("账号[" + _0x389453.nickname + "] 🏁 达到停止条件，终止后续轮次");
          break;
        }
      }
      if (_0x2b1999 < _0x181a2c - 1) {
        const _0x343903 = Math.floor(Math.random() * 10000) + 10000;
        console.log("账号[" + _0x389453.nickname + "] ⌛ 等待 " + Math.round(_0x343903 / 1000) + " 秒进入下一轮");
        await new Promise(_0x5147ed => setTimeout(_0x5147ed, _0x343903));
      }
    }
  }
  const _0x37f047 = await _0x35dd3c(_0xd4c15c.cookie, _0xd4c15c.proxyUrl, _0xd4c15c.index),
    _0x5e1d3a = _0x24de86?.["totalCoin"] || 0,
    _0x5d5587 = _0x37f047?.["totalCoin"] || 0,
    _0x2828e3 = _0x5d5587 - _0x5e1d3a,
    _0x1ffe3d = _0x24de86?.["allCash"] || 0,
    _0x9247be = _0x37f047?.["allCash"] || 0,
    _0x3adb83 = _0x9247be - _0x1ffe3d;
  _0x389453.printTaskStats();
  return {
    "index": _0xd4c15c.index,
    "nickname": _0x4c26ad,
    "initialCoin": _0x5e1d3a,
    "finalCoin": _0x5d5587,
    "coinChange": _0x2828e3,
    "initialCash": _0x1ffe3d,
    "finalCash": _0x9247be,
    "cashChange": _0x3adb83,
    "stats": _0x389453.getTaskStats(),
    "coinLimitExceeded": _0x389453.coinExceeded
  };
}
function _0x5d47d4(_0x31a1e4) {
  if (!_0x31a1e4.length) {
    console.log("\n没有可显示的账号信息。");
    return;
  }
  const _0x48f406 = _0x31a1e4.reduce((_0x56ad8c, _0x4bf8a7) => {
      return _0x56ad8c + (parseInt(_0x4bf8a7.initialCoin) || 0);
    }, 0),
    _0x3daa71 = _0x31a1e4.reduce((_0x2500c4, _0x4c7b64) => {
      return _0x2500c4 + (parseInt(_0x4c7b64.finalCoin) || 0);
    }, 0),
    _0x273bc1 = _0x3daa71 - _0x48f406,
    _0x343bb0 = _0x31a1e4.reduce((_0x11fdb1, _0x17fa6b) => {
      return _0x11fdb1 + (parseFloat(_0x17fa6b.initialCash) || 0);
    }, 0),
    _0x5edbfb = _0x31a1e4.reduce((_0x47f46f, _0x5cdeda) => {
      return _0x47f46f + (parseFloat(_0x5cdeda.finalCash) || 0);
    }, 0),
    _0x2767ff = _0x5edbfb - _0x343bb0;
  let _0x1dd778 = 0,
    _0x2ed8a9 = 0,
    _0x2daf2a = 0;
  _0x31a1e4.forEach(_0x5698a6 => {
    _0x5698a6.stats && Object.values(_0x5698a6.stats).forEach(_0x44ce09 => {
      _0x1dd778 += _0x44ce09.success + _0x44ce09.failed;
      _0x2ed8a9 += _0x44ce09.success;
      _0x2daf2a += _0x44ce09.totalReward;
    });
  });
  const _0x2a31fa = _0x1dd778 > 0 ? (_0x2ed8a9 / _0x1dd778 * 100).toFixed(1) : "0.0",
    _0x3a249e = _0x31a1e4.filter(_0x18f8f6 => _0x18f8f6.coinLimitExceeded).length;
  console.log("\n\n" + "=".repeat(80));
  console.log("|" + _0x5939f2("      快手养号任务执行结果汇总表      ", 78) + "|");
  console.log("=".repeat(80));
  console.log("|" + ("总账号数: " + _0x31a1e4.length).padEnd(22) + ("超过金币阈值账号: " + _0x3a249e).padEnd(22) + ("总任务数: " + _0x1dd778).padEnd(22) + ("任务成功率: " + _0x2a31fa + "%").padEnd(10) + "|");
  console.log("|" + ("总金币变化: " + _0x273bc1).padEnd(26) + ("总金币奖励: " + _0x2daf2a).padEnd(26) + ("总余额变化: " + _0x2767ff.toFixed(2)).padEnd(24) + "|");
  console.log("-".repeat(80));
  const _0xcb697d = ["序号", "账号昵称", "初始金币", "最终金币", "金币变化", "初始余额", "最终余额", "余额变化"],
    _0x1bca1f = [6, 16, 12, 12, 12, 12, 12, 12];
  let _0x2ed48f = "|";
  _0xcb697d.forEach((_0x2f92a7, _0xe438c) => {
    _0x2ed48f += _0x5939f2(_0x2f92a7, _0x1bca1f[_0xe438c]) + "|";
  });
  console.log(_0x2ed48f);
  let _0x129c0f = "|";
  _0x1bca1f.forEach(_0x847a10 => {
    _0x129c0f += "-".repeat(_0x847a10) + "|";
  });
  console.log(_0x129c0f);
  _0x31a1e4.forEach(_0x4c46af => {
    let _0x48c341 = "|";
    _0x48c341 += _0x5939f2(_0x4c46af.index, _0x1bca1f[0]) + "|";
    const _0x219213 = (_0x4c46af.nickname || "-") + (_0x4c46af.coinLimitExceeded ? " ⚠️" : "");
    _0x48c341 += _0x5939f2(_0x219213.substring(0, _0x1bca1f[1] - 2), _0x1bca1f[1]) + "|";
    _0x48c341 += _0x5939f2(_0x4c46af.initialCoin, _0x1bca1f[2]) + "|";
    _0x48c341 += _0x5939f2(_0x4c46af.finalCoin, _0x1bca1f[3]) + "|";
    const _0x3fe6b0 = _0x4c46af.coinChange >= 0 ? "+" + _0x4c46af.coinChange : _0x4c46af.coinChange;
    _0x48c341 += _0x5939f2(_0x3fe6b0, _0x1bca1f[4]) + "|";
    _0x48c341 += _0x5939f2(_0x4c46af.initialCash, _0x1bca1f[5]) + "|";
    _0x48c341 += _0x5939f2(_0x4c46af.finalCash, _0x1bca1f[6]) + "|";
    const _0x1537ba = _0x4c46af.cashChange >= 0 ? "+" + _0x4c46af.cashChange.toFixed(2) : _0x4c46af.cashChange.toFixed(2);
    _0x48c341 += _0x5939f2(_0x1537ba, _0x1bca1f[7]) + "|";
    console.log(_0x48c341);
  });
  console.log("=".repeat(80));
  console.log("|" + _0x5939f2("      任务执行完成，请查看详细结果      ", 78) + "|");
  console.log("=".repeat(80));
}
(async () => {
  const _0x2d1cec = _0x5ebbb4();
  console.log("共找到 " + _0x2d1cec.length + " 个有效账号");
  !_0x2d1cec.length && process.exit(1);
  const _0x6ef668 = parseInt(process.env.MAX_CONCURRENCY || process.env.CONCURRENCY || "888", 10) || 888,
    _0x411917 = parseInt(process.env.ROUNDS || "35", 10) || 35;
  console.log("\n防黑并发：" + _0x6ef668 + "    防黑轮数：" + _0x411917 + "\n");
  const _0x50c746 = [];
  await _0x1da865(_0x2d1cec, _0x6ef668, async _0x3f8a0b => {
    console.log("\n—— 🚀 开始账号[" + _0x3f8a0b.index + "]" + (_0x3f8a0b.remark ? "（" + _0x3f8a0b.remark + "）" : "") + " ——");
    try {
      const _0x348393 = await _0x598c47(_0x3f8a0b, _0x411917);
      _0x50c746.push({
        "index": _0x3f8a0b.index,
        "remark": _0x3f8a0b.remark || "无备注",
        "nickname": _0x348393?.["nickname"] || this.nickname,
        "initialCoin": _0x348393?.["initialCoin"] || 0,
        "finalCoin": _0x348393?.["finalCoin"] || 0,
        "coinChange": _0x348393?.["coinChange"] || 0,
        "initialCash": _0x348393?.["initialCash"] || 0,
        "finalCash": _0x348393?.["finalCash"] || 0,
        "cashChange": _0x348393?.["cashChange"] || 0,
        "stats": _0x348393?.["stats"] || {},
        "coinLimitExceeded": _0x348393?.["coinLimitExceeded"] || false
      });
    } catch (_0x5c1ad1) {
      console.log("账号[" + _0x3f8a0b.index + "] ❌ 执行异常：" + _0x5c1ad1.message);
      _0x50c746.push({
        "index": _0x3f8a0b.index,
        "remark": _0x3f8a0b.remark || "无备注",
        "nickname": this.nickname,
        "initialCoin": 0,
        "finalCoin": 0,
        "coinChange": 0,
        "initialCash": 0,
        "finalCash": 0,
        "cashChange": 0,
        "error": _0x5c1ad1.message
      });
    }
  });
  _0x50c746.sort((_0x295be7, _0x49f230) => _0x295be7.index - _0x49f230.index);
  console.log("\n全部完成。", "✅");
  console.log("\n---------------------------------------------- 账号信息汇总 ----------------------------------------------");
  _0x5d47d4(_0x50c746);
})();