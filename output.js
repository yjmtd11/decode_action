//Thu Sep 04 2025 13:28:19 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
const NOTICE_SWITCH = 1;
const APPID = "wx27e219ff3142b7c8";
const API_BASE_URL = "https://p.xpfarm.cn/treemp";
const args = process.argv.slice(2);
const getArg = _0x412dbc => {
  const _0x26a46b = args.indexOf("--" + _0x412dbc);
  return _0x26a46b !== -1 && args[_0x26a46b + 1] ? args[_0x26a46b + 1] : null;
};
const cmdWxid = getArg("wxid");
const isDebug = args.includes("--debug");
const onlySignIn = args.includes("--signin") || args.includes("-s");
const wxidList = cmdWxid || process.env.XPNC_WXID || "";
const PROXY_API = "http://bapi.51daili.com/B9F75C46B&skey=autoaddwhiteip";
const PROXY_FROM_ENV = process.env.xqkdddl || "";
const useProxy = args.includes("--proxy") || args.includes("-p") || !!PROXY_FROM_ENV;
let currentProxy = null;
let proxyFailCount = 0;
let useDirectConnection = false;
async function getProxy(_0x5daffb = PROXY_API) {
  try {
    const _0x10d11c = require("request");
    return new Promise((_0x280a61, _0x5bf960) => {
      _0x10d11c({
        url: _0x5daffb,
        timeout: 10000
      }, (_0x525245, _0xb5ed79, _0x5daf59) => {
        if (_0x525245) {
          console.log("❌ 获取代理出错: " + _0x525245.message);
          _0x280a61(null);
          return;
        }
        const _0x51a0f7 = _0x5daf59.trim();
        _0x51a0f7 && _0x51a0f7.includes(":") ? (console.log("🌐 获取代理成功: " + _0x51a0f7), _0x280a61("http://" + _0x51a0f7)) : (console.log("❌ 获取代理失败: " + _0x5daf59), _0x280a61(null));
      });
    });
  } catch (_0xb22a09) {
    console.log("❌ 获取代理出错: " + _0xb22a09.message);
    return null;
  }
}
function parseWxidList(_0x2fdb55) {
  if (!_0x2fdb55) {
    return [];
  }
  return _0x2fdb55.split("\n").map(_0x42a57c => _0x42a57c.trim()).filter(_0x5bf427 => _0x5bf427.length > 0).filter(_0x234caf => !_0x234caf.startsWith("#"));
}
const wxcode = require("./wxcode");
const fs = require("fs");
const path = require("path");
const scriptName = path.basename(__filename, ".js");
const TOKEN_CACHE_FILE = path.join(__dirname, scriptName + "_tokens.json");
class ScriptTemplate {
  constructor(_0x574958) {
    this.wxid = _0x574958;
    this.appid = APPID;
    this.isLogin = false;
    this.wxCode = null;
    this.openid = null;
    this.unionid = null;
    this.token = null;
    this.mobileInfo = null;
    this.userProfile = null;
    this.cacheExpireTime = null;
    this.remarkName = wxcode.getRemarkName(_0x574958);
  }
  loadTokenCache() {
    try {
      if (fs.existsSync(TOKEN_CACHE_FILE)) {
        const _0x23d3a5 = JSON.parse(fs.readFileSync(TOKEN_CACHE_FILE, "utf8"));
        const _0x5d4930 = _0x23d3a5[this.wxid];
        if (_0x5d4930 && _0x5d4930.cacheExpireTime > Date.now()) {
          this.openid = _0x5d4930.openid;
          this.unionid = _0x5d4930.unionid;
          this.token = _0x5d4930.token;
          this.mobileInfo = _0x5d4930.mobileInfo;
          this.userProfile = _0x5d4930.userProfile;
          this.cacheExpireTime = _0x5d4930.cacheExpireTime;
          this.isLogin = true;
          isDebug && (console.log("[DEBUG] [" + this.remarkName + "] 从缓存加载数据成功（不包含wxCode）"), console.log("[DEBUG] [" + this.remarkName + "] OpenID: " + this.openid), console.log("[DEBUG] [" + this.remarkName + "] Token: " + this.token), console.log("[DEBUG] [" + this.remarkName + "] 缓存过期时间: " + new Date(this.cacheExpireTime).toLocaleString()));
          return true;
        } else {
          if (_0x5d4930) {
            if (isDebug) {
              console.log("[DEBUG] [" + this.remarkName + "] 缓存数据已过期");
            }
          }
        }
      }
    } catch (_0x3b9cc6) {
      if (isDebug) {
        console.log("[DEBUG] [" + this.remarkName + "] 读取缓存失败: " + _0x3b9cc6.message);
      }
    }
    return false;
  }
  saveTokenCache() {
    try {
      let _0x25ed80 = {};
      if (fs.existsSync(TOKEN_CACHE_FILE)) {
        try {
          _0x25ed80 = JSON.parse(fs.readFileSync(TOKEN_CACHE_FILE, "utf8"));
        } catch (_0x5ce1ea) {
          if (isDebug) {
            console.log("[DEBUG] [" + this.remarkName + "] 现有缓存文件格式错误，将重新创建");
          }
        }
      }
      const _0x2c2683 = Date.now() + 7200000;
      _0x25ed80[this.wxid] = {
        openid: this.openid,
        unionid: this.unionid,
        token: this.token,
        mobileInfo: this.mobileInfo,
        userProfile: this.userProfile,
        cacheExpireTime: _0x2c2683,
        updateTime: Date.now()
      };
      this.cacheExpireTime = _0x2c2683;
      fs.writeFileSync(TOKEN_CACHE_FILE, JSON.stringify(_0x25ed80, null, 2), "utf8");
      isDebug && (console.log("[DEBUG] [" + this.remarkName + "] 缓存保存成功"), console.log("[DEBUG] [" + this.remarkName + "] 缓存文件: " + TOKEN_CACHE_FILE), console.log("[DEBUG] [" + this.remarkName + "] 过期时间: " + new Date(_0x2c2683).toLocaleString()));
    } catch (_0x5ef20f) {
      console.log("❌ [" + this.remarkName + "] 保存缓存失败: " + _0x5ef20f.message);
    }
  }
  async getWxCodeAndLogin() {
    if (isDebug) {
      console.log("[DEBUG] [" + this.remarkName + "] 获取微信授权码...");
    }
    const _0x1d4545 = await wxcode.getWxCode(this.wxid, this.appid);
    if (!_0x1d4545.success) {
      if (isDebug) {
        console.log("[" + this.remarkName + "] 获取授权码失败：" + _0x1d4545.error);
      }
      return false;
    }
    this.wxCode = _0x1d4545.code;
    if (isDebug) {
      console.log("[DEBUG] [" + this.remarkName + "] 获取授权码成功：" + this.wxCode);
    }
    this.isLogin = true;
    return true;
  }
  async getUserOpenid() {
    const _0x3f4afc = await wxcode.getOpenid(this.wxid, this.appid);
    if (_0x3f4afc.success) {
      this.openid = _0x3f4afc.openid;
      if (isDebug) {
        console.log("[DEBUG] [" + this.remarkName + "] 获取openid成功：" + this.openid);
      }
      return this.openid;
    } else {
      console.log("[" + this.remarkName + "] 获取openid失败：" + _0x3f4afc.error);
      return null;
    }
  }
  async getMobileInfo() {
    const _0x2fbbf2 = await wxcode.getmobile(this.wxid, this.appid);
    if (_0x2fbbf2.success) {
      this.mobileInfo = _0x2fbbf2;
      if (isDebug) {
        console.log("[DEBUG] [" + this.remarkName + "] 获取手机号加密数据成功");
      }
      return this.mobileInfo;
    } else {
      console.log("[" + this.remarkName + "] 获取手机号失败：" + _0x2fbbf2.error);
      return null;
    }
  }
  async getUserProfile() {
    const _0x29b370 = JSON.stringify({
      api_name: "webapi_getuserprofile",
      data: {
        app_version: 68,
        desc: "用于获取您的个人信息",
        lang: "en",
        version: "3.7.12"
      },
      env: 1,
      operate_directly: false,
      show_confirm: true,
      tid: Date.now() * 1000000 + Math.floor(Math.random() * 1000000),
      with_credentials: true
    });
    const _0x1559b7 = await wxcode.getUserInfo(this.wxid, this.appid, _0x29b370);
    if (_0x1559b7.success) {
      if (isDebug) {
        console.log("[DEBUG] [" + this.remarkName + "] 获取用户个人信息成功");
      }
      try {
        const _0x3c2db3 = _0x1559b7.rawData;
        isDebug && console.log("[DEBUG] [" + this.remarkName + "] 云函数完整数据:", {
          signature: _0x3c2db3.signature,
          encryptedData: _0x3c2db3.encryptedData?.["substring"](0, 50) + "...",
          iv: _0x3c2db3.iv,
          cloud_id: _0x3c2db3.cloud_id,
          err_no: _0x3c2db3.err_no
        });
        const _0x3ef65d = JSON.parse(_0x3c2db3.data);
        isDebug && console.log("[DEBUG] [" + this.remarkName + "] 解析的用户信息:", {
          nickName: _0x3ef65d.nickName,
          gender: _0x3ef65d.gender,
          avatarUrl: _0x3ef65d.avatarUrl,
          city: _0x3ef65d.city,
          province: _0x3ef65d.province,
          country: _0x3ef65d.country
        });
        this.userProfile = {
          success: true,
          userInfo: _0x3ef65d,
          signature: _0x3c2db3.signature,
          encryptedData: _0x3c2db3.encryptedData,
          iv: _0x3c2db3.iv,
          rawData: _0x3c2db3
        };
        return this.userProfile;
      } catch (_0x4b1b58) {
        console.log("[" + this.remarkName + "] 解析用户信息失败：" + _0x4b1b58.message);
        isDebug && console.log("[DEBUG] [" + this.remarkName + "] 原始数据:", _0x1559b7.rawData);
        return {
          success: false,
          error: _0x4b1b58.message
        };
      }
    } else {
      if (isDebug) {
        console.log("[" + this.remarkName + "] 获取用户个人信息失败：" + _0x1559b7.error);
      }
      return null;
    }
  }
  async apiRequest(_0x3b0be8, _0xe2bf5e = {}, _0x4f3e16 = true) {
    const _0x2bf9b3 = "" + API_BASE_URL + _0x3b0be8;
    const _0x390248 = JSON.stringify(_0xe2bf5e);
    const _0x5bf6d5 = {
      host: "p.xpfarm.cn",
      "content-length": _0x390248.length.toString(),
      xweb_xhr: "1",
      contenttype: "[object Undefined]",
      "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF WindowsWechat(0x63090c37)XWEB/14315",
      "content-type": "application/json",
      accept: "*/*",
      "sec-fetch-site": "cross-site",
      "sec-fetch-mode": "cors",
      "sec-fetch-dest": "empty",
      referer: "https://servicewechat.com/wx27e219ff3142b7c8/68/page-frame.html",
      "accept-encoding": "gzip, deflate, br",
      "accept-language": "zh-CN,zh;q=0.9",
      priority: "u=1, i"
    };
    _0x4f3e16 && this.token && (_0x5bf6d5.authorization = this.token);
    try {
      let _0x45dbe6 = 0;
      if (_0x3b0be8.includes("getTasks")) {
        _0x45dbe6 = Math.floor(Math.random() * 500) + 100;
      } else {
        _0x3b0be8.includes("completeTask") || _0x3b0be8.includes("receiveTaskReward") || _0x3b0be8.includes("drawTaskReward") ? _0x45dbe6 = Math.floor(Math.random() * 3000) + 2000 : _0x45dbe6 = Math.floor(Math.random() * 1000) + 500;
      }
      _0x45dbe6 > 0 && (isDebug && console.log("[DEBUG] [" + this.remarkName + "] 等待 " + (_0x45dbe6 / 1000).toFixed(1) + " 秒后请求 " + _0x3b0be8), await new Promise(_0x379ad6 => setTimeout(_0x379ad6, _0x45dbe6)));
      const _0x1aab8f = useProxy && currentProxy ? currentProxy.replace("http://", "") : undefined;
      const _0x1d29f4 = await wxcode.task("post", _0x2bf9b3, _0x5bf6d5, _0x390248, _0x1aab8f);
      isDebug && (console.log("[DEBUG] [" + this.remarkName + "] API请求: " + _0x3b0be8), console.log("[DEBUG] [" + this.remarkName + "] 请求体: " + _0x390248 + " (长度: " + _0x390248.length + ")"), console.log("[DEBUG] [" + this.remarkName + "] 请求数据:", _0xe2bf5e), _0x1aab8f && console.log("[DEBUG] [" + this.remarkName + "] 使用代理: " + _0x1aab8f), console.log("[DEBUG] [" + this.remarkName + "] 响应数据:", _0x1d29f4));
      if (_0x1d29f4 && _0x1d29f4.code === 10200 && _0x1d29f4.message.includes("手速太快")) {
        const _0x57fdb3 = Math.floor(Math.random() * 3000) + 5000;
        console.log("⏳ [" + this.remarkName + "] " + _0x1d29f4.message + "，等待 " + (_0x57fdb3 / 1000).toFixed(1) + " 秒后重试...");
        await new Promise(_0x44e9cc => setTimeout(_0x44e9cc, _0x57fdb3));
        const _0x4ecab9 = {
          ..._0x5bf6d5
        };
        _0x4f3e16 && this.token && (_0x4ecab9.authorization = this.token);
        isDebug && (console.log("[DEBUG] [" + this.remarkName + "] 重试请求头:", _0x4ecab9), console.log("[DEBUG] [" + this.remarkName + "] 重试token: " + this.token));
        const _0x55c436 = await wxcode.task("post", _0x2bf9b3, _0x4ecab9, _0x390248, _0x1aab8f);
        isDebug && console.log("[DEBUG] [" + this.remarkName + "] 重试响应:", _0x55c436);
        return _0x55c436;
      }
      _0x1d29f4 && _0x1d29f4.code === 10500 && _0x1d29f4.message.includes("身份信息失效") && console.log("🔑 [" + this.remarkName + "] Token已失效，需要重新登录");
      return _0x1d29f4;
    } catch (_0x7895c9) {
      useProxy && !useDirectConnection && (_0x7895c9.message.includes("tunneling socket could not be established") || _0x7895c9.message.includes("ECONNREFUSED") || _0x7895c9.message.includes("ETIMEDOUT") || _0x7895c9.message.includes("statusCode=900")) ? (proxyFailCount++, console.log("🌐 [" + this.remarkName + "] 代理连接失败 (" + proxyFailCount + "/2): " + _0x7895c9.message), proxyFailCount >= 2 && (useDirectConnection = true, console.log("🔗 [" + this.remarkName + "] 改用直连模式"))) : console.log("[" + this.remarkName + "] API请求失败 " + _0x3b0be8 + ": " + _0x7895c9.message);
      return {
        success: false,
        error: _0x7895c9.message
      };
    }
  }
  async xpFarmCodeToInfo() {
    if (isDebug) {
      console.log("[DEBUG] [" + this.remarkName + "] 兴攀农场登录第一步：获取openid和unionid");
    }
    const _0x2761fe = await this.apiRequest("/wx.Login/codeToInfo", {
      code: this.wxCode
    }, false);
    return _0x2761fe && _0x2761fe.code === 1000 ? (this.openid = _0x2761fe.data.openid, this.unionid = _0x2761fe.data.unionid, isDebug && (console.log("[DEBUG] [" + this.remarkName + "] 获取openid成功: " + this.openid), console.log("[DEBUG] [" + this.remarkName + "] 获取unionid成功: " + this.unionid)), true) : (console.log("[" + this.remarkName + "] 获取openid失败: " + (_0x2761fe?.["message"] || "未知错误")), false);
  }
  async xpFarmLogin() {
    if (isDebug) {
      console.log("[DEBUG] [" + this.remarkName + "] 兴攀农场登录第二步：通过云函数获取用户信息");
    }
    try {
      const _0x2cfb4d = await this.getUserProfile();
      if (!_0x2cfb4d || !_0x2cfb4d.success) {
        console.log("[" + this.remarkName + "] 获取用户信息失败");
        return false;
      }
      isDebug && (console.log("[DEBUG] [" + this.remarkName + "] 云函数返回的原始数据:", _0x2cfb4d.rawData), console.log("[DEBUG] [" + this.remarkName + "] 用户信息:", _0x2cfb4d.userInfo), console.log("[DEBUG] [" + this.remarkName + "] 签名信息:", {
        signature: _0x2cfb4d.signature,
        encryptedData: _0x2cfb4d.encryptedData?.["substring"](0, 50) + "...",
        iv: _0x2cfb4d.iv
      }));
      let _0x13b9dc = "95_p_QSVi8wFdA3qKewTOX5eUI6Hi-PPA9_T-1rzGl92xKlGBvQoIzEF7rhhBM";
      try {
        _0x2cfb4d.rawData && _0x2cfb4d.rawData.cloud_id ? (_0x13b9dc = _0x2cfb4d.rawData.cloud_id, isDebug && console.log("[DEBUG] [" + this.remarkName + "] 从cloud_id提取cloudID: " + _0x13b9dc)) : isDebug && console.log("[DEBUG] [" + this.remarkName + "] 未找到cloud_id，使用默认cloudID: " + _0x13b9dc);
      } catch (_0x214411) {
        isDebug && console.log("[DEBUG] [" + this.remarkName + "] 提取cloudID失败，使用默认值: " + _0x214411.message);
      }
      const _0xc25f56 = {
        cloudID: _0x13b9dc,
        encryptedData: _0x2cfb4d.encryptedData,
        iv: _0x2cfb4d.iv,
        signature: _0x2cfb4d.signature,
        userInfo: _0x2cfb4d.userInfo,
        rawData: JSON.stringify(_0x2cfb4d.userInfo),
        errMsg: "getUserProfile:ok",
        openid: this.openid,
        unionid: this.unionid
      };
      isDebug && console.log("[DEBUG] [" + this.remarkName + "] 构造的登录数据:", {
        cloudID: _0xc25f56.cloudID,
        openid: _0xc25f56.openid,
        unionid: _0xc25f56.unionid,
        userInfo: _0xc25f56.userInfo,
        hasEncryptedData: !!_0xc25f56.encryptedData,
        hasSignature: !!_0xc25f56.signature,
        hasIv: !!_0xc25f56.iv
      });
      const _0x118b9e = await this.apiRequest("/wx.Login/index", _0xc25f56, false);
      return _0x118b9e && _0x118b9e.code === 1000 ? (this.token = _0x118b9e.data.token, isDebug && (console.log("[DEBUG] [" + this.remarkName + "] 登录成功，获取token: " + this.token), console.log("[DEBUG] [" + this.remarkName + "] 绑定手机号: " + _0x118b9e.data.mobile)), true) : (console.log("[" + this.remarkName + "] 登录失败: " + (_0x118b9e?.["message"] || "未知错误")), isDebug && _0x118b9e && console.log("[DEBUG] [" + this.remarkName + "] 登录失败详情:", _0x118b9e), false);
    } catch (_0x186930) {
      console.log("[" + this.remarkName + "] 登录过程出错: " + _0x186930.message);
      isDebug && console.error("[DEBUG] [" + this.remarkName + "] 登录错误详情:", _0x186930);
      return false;
    }
  }
  isInCheckInTime() {
    const _0x204e75 = new Date();
    const _0x5ae4b7 = _0x204e75.getHours();
    const _0x25e3dd = _0x204e75.getMinutes();
    const _0x2516b3 = _0x5ae4b7 * 60 + _0x25e3dd;
    const _0x2445c9 = 690;
    const _0x39e8ae = 810;
    const _0x59d55f = _0x2516b3 >= _0x2445c9 && _0x2516b3 <= _0x39e8ae;
    isDebug && (console.log("[DEBUG] [" + this.remarkName + "] 当前时间: " + _0x204e75.toLocaleTimeString()), console.log("[DEBUG] [" + this.remarkName + "] 打卡时间: 11:30-13:30"), console.log("[DEBUG] [" + this.remarkName + "] 是否在打卡时间内: " + _0x59d55f));
    return _0x59d55f;
  }
  isInSecondCheckInTime() {
    const _0x1b8317 = new Date();
    const _0x2eb32f = _0x1b8317.getHours();
    const _0x2bf3b5 = _0x1b8317.getMinutes();
    const _0x4c2a28 = _0x2eb32f * 60 + _0x2bf3b5;
    const _0x2e729f = 1050;
    const _0x5de134 = 1170;
    const _0x458303 = _0x4c2a28 >= _0x2e729f && _0x4c2a28 <= _0x5de134;
    isDebug && (console.log("[DEBUG] [" + this.remarkName + "] 当前时间: " + _0x1b8317.toLocaleTimeString()), console.log("[DEBUG] [" + this.remarkName + "] 二次打卡时间: 17:30-19:30"), console.log("[DEBUG] [" + this.remarkName + "] 是否在二次打卡时间内: " + _0x458303));
    return _0x458303;
  }
  async getTasks(_0x5ef78e = 3) {
    const _0x345936 = {
      1: "雨水任务",
      2: "肥料任务",
      3: "时间段打卡任务",
      4: "签到任务",
      5: "抽奖任务"
    };
    if (isDebug) {
      console.log("[DEBUG] [" + this.remarkName + "] 获取" + (_0x345936[_0x5ef78e] || "任务") + "列表 (type=" + _0x5ef78e + ")...");
    }
    const _0xc76667 = await this.apiRequest("/tree.Tasks/getTasks", {
      type: _0x5ef78e
    });
    if (_0xc76667 && _0xc76667.code === 1000) {
      if (isDebug) {
        console.log("[DEBUG] [" + this.remarkName + "] 获取" + (_0x345936[_0x5ef78e] || "任务") + "列表成功，共" + _0xc76667.data.length + "个任务");
      }
      return _0xc76667.data;
    } else {
      console.log("[" + this.remarkName + "] 获取" + (_0x345936[_0x5ef78e] || "任务") + "列表失败: " + (_0xc76667?.["message"] || "未知错误"));
      return null;
    }
  }
  async simulateWatchVideo(_0x35b61c = "任务") {
    const _0xf32000 = Math.floor(Math.random() * 4000) + 15000;
    console.log("📺 [" + this.remarkName + "] 模拟观看" + _0x35b61c + "视频，等待 " + (_0xf32000 / 1000).toFixed(1) + " 秒...");
    await new Promise(_0x1cf23e => setTimeout(_0x1cf23e, _0xf32000));
  }
  async completeTask(_0x3a5e01, _0x4707d6 = "任务", _0x3efdc7 = false) {
    if (isDebug) {
      console.log("[DEBUG] [" + this.remarkName + "] 完成" + _0x4707d6 + "，任务ID: " + _0x3a5e01);
    }
    _0x3efdc7 && (await this.simulateWatchVideo(_0x4707d6));
    const _0x433166 = await this.apiRequest("/tree.Tasks/completeTask", {
      task_id: _0x3a5e01
    });
    return _0x433166 && _0x433166.code === 1000 ? (console.log("✅ [" + this.remarkName + "] " + _0x4707d6 + "完成成功！"), true) : (console.log("❌ [" + this.remarkName + "] " + _0x4707d6 + "完成失败: " + (_0x433166?.["message"] || "未知错误")), false);
  }
  async receiveTaskReward(_0x1ab994, _0x3ce536 = "任务") {
    if (isDebug) {
      console.log("[DEBUG] [" + this.remarkName + "] 领取" + _0x3ce536 + "奖励，任务ID: " + _0x1ab994);
    }
    const _0x20060e = await this.apiRequest("/tree.Tasks/receiveTaskReward", {
      task_id: _0x1ab994
    });
    if (_0x20060e && _0x20060e.code === 1000) {
      const _0x405d4a = _0x20060e.data.reward || [];
      let _0x240aa1 = "";
      _0x405d4a.forEach(_0x50667d => {
        _0x240aa1 += _0x50667d.reward_type_name + "+" + _0x50667d.reward + " ";
      });
      console.log("🎁 [" + this.remarkName + "] " + _0x3ce536 + "奖励领取成功！获得: " + _0x240aa1);
      return {
        success: true,
        rewards: _0x405d4a
      };
    } else {
      !["观看完整视频奖励", "每日分享奖励", "天天抽奖奖励"].includes(_0x3ce536) && console.log("❌ [" + this.remarkName + "] " + _0x3ce536 + "奖励领取失败: " + (_0x20060e?.["message"] || "未知错误"));
      return {
        success: false
      };
    }
  }
  async drawTaskReward(_0x1d7cef, _0x39385b = "抽奖") {
    if (isDebug) {
      console.log("[DEBUG] [" + this.remarkName + "] 执行" + _0x39385b + "，任务ID: " + _0x1d7cef);
    }
    const _0x3ef13e = await this.apiRequest("/tree.Tasks/drawTaskReward", {
      task_id: _0x1d7cef
    });
    return _0x3ef13e && _0x3ef13e.code === 1000 ? (console.log("🎰 [" + this.remarkName + "] " + _0x39385b + "成功！奖励ID: " + _0x3ef13e.data.id), {
      success: true,
      rewardId: _0x3ef13e.data.id
    }) : (console.log("❌ [" + this.remarkName + "] " + _0x39385b + "失败: " + (_0x3ef13e?.["message"] || "未知错误")), {
      success: false
    });
  }
  async getRewardLog(_0x5def99) {
    if (isDebug) {
      console.log("[DEBUG] [" + this.remarkName + "] 获取奖励记录，任务类型: " + _0x5def99);
    }
    const _0x46dc16 = await this.apiRequest("/tree.Tasks/rewardLog", {
      task_type: _0x5def99
    });
    return _0x46dc16 && _0x46dc16.code === 1000 ? _0x46dc16.data.userRewardLog || [] : (console.log("[" + this.remarkName + "] 获取奖励记录失败: " + (_0x46dc16?.["message"] || "未知错误")), []);
  }
  async addWater() {
    isDebug && console.log("[DEBUG] [" + this.remarkName + "] 执行浇水操作");
    const _0x47b9d8 = await this.apiRequest("/tree.Tasks/addWater", {}, true);
    if (_0x47b9d8 && _0x47b9d8.success) {
      console.log("💧 [" + this.remarkName + "] 浇水成功！水滴: " + _0x47b9d8.data.water_value + ", 肥料: " + _0x47b9d8.data.fertilizer + ", 进度: " + (_0x47b9d8.data.progress * 100).toFixed(1) + "%");
      return {
        success: true,
        data: _0x47b9d8.data
      };
    } else {
      const _0x5e2c07 = _0x47b9d8?.["message"] || "未知错误";
      console.log("❌ [" + this.remarkName + "] 浇水失败: " + _0x5e2c07);
      _0x5e2c07.includes("您的果树已经成熟了，已经可以采摘了！") && print("🍎 [" + this.remarkName + "] 果树已成熟可以采摘！", true);
      return {
        success: false,
        message: _0x5e2c07
      };
    }
  }
  async addFertilizer() {
    isDebug && console.log("[DEBUG] [" + this.remarkName + "] 执行施肥操作");
    const _0x5e6a3e = await this.apiRequest("/tree.Tasks/addFertilizer", {
      type: 1
    }, true);
    if (_0x5e6a3e && _0x5e6a3e.success) {
      const _0x5d46c9 = _0x5e6a3e.data.fertilizer || 0;
      const _0x2b3145 = _0x5e6a3e.data.fertilizer_value || 0;
      console.log("🌱 [" + this.remarkName + "] 施肥成功！肥料值: " + _0x5d46c9 + ", 肥料库存: " + _0x2b3145);
      return {
        success: true,
        data: _0x5e6a3e.data
      };
    } else {
      console.log("❌ [" + this.remarkName + "] 施肥失败: " + (_0x5e6a3e?.["message"] || "未知错误"));
      return {
        success: false,
        message: _0x5e6a3e?.["message"] || "未知错误"
      };
    }
  }
  async getHomePage() {
    if (isDebug) {
      console.log("[DEBUG] [" + this.remarkName + "] 获取用户主页数据...");
    }
    const _0x2d6430 = await this.apiRequest("/tree.Tasks/getHomePage", {});
    if (_0x2d6430 && _0x2d6430.code === 1000) {
      const _0x43faed = _0x2d6430.data;
      isDebug && console.log("[DEBUG] [" + this.remarkName + "] 用户数据:", {
        water_value: _0x43faed.water_value,
        fertilizer: _0x43faed.fertilizer,
        integral: _0x43faed.integral,
        balance: _0x43faed.balance
      });
      return _0x43faed;
    } else {
      console.log("[" + this.remarkName + "] 获取用户数据失败: " + (_0x2d6430?.["message"] || "未知错误"));
      return null;
    }
  }
  async performSignIn() {
    console.log("📝 [" + this.remarkName + "] 开始执行签到流程...");
    try {
      const _0x4545ef = await this.getTasks(4);
      if (!_0x4545ef || _0x4545ef.length === 0) {
        console.log("❌ [" + this.remarkName + "] 未找到签到任务");
        return false;
      }
      let _0x55a3cb = false;
      isDebug && console.log("[DEBUG] [" + this.remarkName + "] 签到任务列表:", _0x4545ef.map(_0x2ce724 => ({
        id: _0x2ce724.id,
        name: _0x2ce724.name,
        sign_in_day: _0x2ce724.sign_in_day,
        is_completed: _0x2ce724.is_completed,
        is_enabled: _0x2ce724.is_enabled,
        work_type_name: _0x2ce724.work_type_name
      })));
      const _0x4d0143 = _0x4545ef.sort((_0x5a538b, _0x211bf5) => _0x5a538b.sign_in_day - _0x211bf5.sign_in_day);
      let _0x10de67 = null;
      let _0x3087a6 = 0;
      for (const _0x8377ad of _0x4d0143) {
        if (_0x8377ad.is_completed === 1) {
          console.log("✅ [" + this.remarkName + "] " + _0x8377ad.name + "已完成签到");
          _0x3087a6++;
          _0x55a3cb = true;
        } else {
          !_0x10de67 && _0x8377ad.is_completed === 0 && _0x8377ad.work_type_name === "无动作" && (_0x10de67 = _0x8377ad);
        }
      }
      if (_0x10de67) {
        console.log("📋 [" + this.remarkName + "] 今日签到任务: " + _0x10de67.name + " (第" + _0x10de67.sign_in_day + "天)");
        if (isDebug) {
          console.log("🎁 [" + this.remarkName + "] 签到奖励: " + _0x10de67.getReward.map(_0xd87c85 => _0xd87c85.reward_type_name + "+" + _0xd87c85.reward).join(", "));
        }
        const _0x4cd9be = await this.receiveTaskReward(_0x10de67.id, "签到" + _0x10de67.name);
        _0x4cd9be.success ? (_0x4cd9be.data && _0x4cd9be.data.reward_info ? console.log("🎉 [" + this.remarkName + "] 签到成功！获得: " + _0x4cd9be.data.reward_info) : console.log("🎉 [" + this.remarkName + "] 今日签到成功！已连续签到" + _0x10de67.sign_in_day + "天"), _0x55a3cb = true) : console.log("⚠️ [" + this.remarkName + "] 今日签到失败: " + (_0x4cd9be.message || "未知错误"));
      } else {
        _0x3087a6 > 0 && console.log("📅 [" + this.remarkName + "] 今日已完成签到，已连续签到" + _0x3087a6 + "天");
      }
      !_0x55a3cb && console.log("⚠️ [" + this.remarkName + "] 今日签到任务不可用或已完成");
      return _0x55a3cb;
    } catch (_0x3d7b7c) {
      console.log("❌ [" + this.remarkName + "] 签到流程出错: " + _0x3d7b7c.message);
      return false;
    }
  }
  async performLottery() {
    console.log("🎰 [" + this.remarkName + "] 开始执行抽奖流程...");
    try {
      const _0x3492a4 = await this.getHomePage();
      if (!_0x3492a4) {
        console.log("❌ [" + this.remarkName + "] 无法获取用户数据，跳过抽奖");
        return false;
      }
      const _0x2cc3c6 = await this.getTasks(5);
      if (!_0x2cc3c6 || _0x2cc3c6.length === 0) {
        console.log("❌ [" + this.remarkName + "] 未找到抽奖任务");
        return false;
      }
      let _0x4b0051 = false;
      for (const _0x3593ae of _0x2cc3c6) {
        if (_0x3593ae.name === "天天抽奖") {
          console.log("🎰 [" + this.remarkName + "] 找到抽奖任务: " + _0x3593ae.name);
          console.log("💰 [" + this.remarkName + "] 需要积分: " + _0x3593ae.use_integral + ", 当前积分: " + _0x3492a4.integral + ", 今日已完成: " + _0x3593ae.complete_num + "/" + _0x3593ae.day_num);
          if (_0x3492a4.integral < _0x3593ae.use_integral) {
            console.log("❌ [" + this.remarkName + "] 积分不足，无法抽奖 (需要" + _0x3593ae.use_integral + "，当前" + _0x3492a4.integral + ")");
            return false;
          }
          if (_0x3593ae.complete_num < _0x3593ae.day_num) {
            const _0x2de0f1 = await this.drawTaskReward(_0x3593ae.id, "天天抽奖");
            if (_0x2de0f1.success) {
              _0x4b0051 = true;
              try {
                await new Promise(_0x328e81 => setTimeout(_0x328e81, 1000));
                const _0x8d09aa = this.getRewardLog(5);
                const _0x5af001 = new Promise((_0xa118a2, _0xe47ab6) => setTimeout(() => _0xe47ab6(new Error("获取奖励记录超时")), 10000));
                const _0x382669 = await Promise.race([_0x8d09aa, _0x5af001]);
                if (_0x382669 && _0x382669.length > 0) {
                  const _0x4ad753 = _0x382669[0];
                  console.log("🎉 [" + this.remarkName + "] 抽奖获得: " + _0x4ad753.reward_type_name + "+" + _0x4ad753.reward);
                }
              } catch (_0x3224dd) {
                console.log("⚠️ [" + this.remarkName + "] 获取抽奖奖励详情失败: " + _0x3224dd.message);
              }
            }
          } else {
            console.log("✅ [" + this.remarkName + "] 今日抽奖次数已用完 (" + _0x3593ae.complete_num + "/" + _0x3593ae.day_num + ")");
            _0x4b0051 = true;
          }
          break;
        }
      }
      return _0x4b0051;
    } catch (_0x9b8ec2) {
      console.log("❌ [" + this.remarkName + "] 抽奖流程出错: " + _0x9b8ec2.message);
      return false;
    }
  }
  async performWaterAndFertilizerTasks() {
    console.log("💧 [" + this.remarkName + "] 开始执行领水和肥料任务...");
    let _0x1f8176 = true;
    try {
      console.log("💧 [" + this.remarkName + "] === 开始领水任务 ===");
      const _0x151cce = await this.performTasksByType(1, "领水");
      if (!_0x151cce) {
        _0x1f8176 = false;
      }
      console.log("🌱 [" + this.remarkName + "] === 开始领肥料任务 ===");
      const _0x176a69 = await this.performTasksByType(2, "领肥料");
      if (!_0x176a69) {
        _0x1f8176 = false;
      }
      return _0x1f8176;
    } catch (_0x53f8ee) {
      console.log("❌ [" + this.remarkName + "] 领水和肥料任务出错: " + _0x53f8ee.message);
      return false;
    }
  }
  async performTasksByType(_0x522198, _0x55da01) {
    try {
      const _0x118492 = await this.getTasks(_0x522198);
      if (!_0x118492 || _0x118492.length === 0) {
        console.log("❌ [" + this.remarkName + "] 未找到" + _0x55da01 + "任务");
        return false;
      }
      let _0x1eeeff = false;
      for (const _0x5a830c of _0x118492) {
        if (_0x5a830c.is_completed === 1 || _0x5a830c.complete_num >= _0x5a830c.day_num) {
          console.log("✅ [" + this.remarkName + "] " + _0x5a830c.name + "已完成");
          _0x1eeeff = true;
          continue;
        }
        if (_0x5a830c.work_type_name === "购买商品") {
          continue;
        }
        console.log("📋 [" + this.remarkName + "] 执行任务: " + _0x5a830c.name + " (" + _0x5a830c.work_type_name + ")");
        let _0x4eb343 = false;
        if (_0x5a830c.work_type_name === "看视频") {
          if (_0x5a830c.complete_num > 0) {
            console.log("📺 [" + this.remarkName + "] 视频已观看，直接领取奖励");
            const _0x4da44e = await this.receiveTaskReward(_0x5a830c.id, _0x5a830c.name + "奖励");
            _0x4eb343 = _0x4da44e.success;
          } else {
            const _0x58e474 = await this.completeTask(_0x5a830c.id, _0x5a830c.name + "(看视频)");
            if (_0x58e474.success) {
              await this.simulateWatchVideo(_0x5a830c.name);
              const _0x31b9b0 = await this.receiveTaskReward(_0x5a830c.id, _0x5a830c.name + "奖励");
              _0x4eb343 = _0x31b9b0.success;
            }
          }
        } else {
          if (_0x5a830c.work_type_name === "每日分享") {
            const _0x57d191 = await this.receiveTaskReward(_0x5a830c.id, _0x5a830c.name + "奖励");
            _0x4eb343 = _0x57d191.success;
          } else {
            if (_0x5a830c.work_type_name === "天天抽奖") {
              const _0x19003d = await this.drawTaskReward(_0x5a830c.id, _0x5a830c.name);
              if (_0x19003d.success) {
                console.log("🎉 [" + this.remarkName + "] " + _0x5a830c.name + "抽奖成功！");
                try {
                  const _0x3a753b = this.getRewardLog(_0x522198);
                  const _0x3d4e43 = new Promise((_0x2bf83f, _0x2538cc) => setTimeout(() => _0x2538cc(new Error("获取奖励记录超时")), 10000));
                  const _0x504bc7 = await Promise.race([_0x3a753b, _0x3d4e43]);
                  if (_0x504bc7 && _0x504bc7.length > 0) {
                    const _0x5f2fca = _0x504bc7[0];
                    console.log("🎁 [" + this.remarkName + "] 抽奖获得: " + _0x5f2fca.reward_type_name + "+" + _0x5f2fca.reward);
                  }
                } catch (_0x4bb74b) {
                  console.log("⚠️ [" + this.remarkName + "] 获取抽奖奖励详情失败: " + _0x4bb74b.message);
                }
                _0x4eb343 = true;
              }
            }
          }
        }
        _0x4eb343 ? (_0x1eeeff = true, console.log("✅ [" + this.remarkName + "] " + _0x5a830c.name + "完成成功")) : console.log("❌ [" + this.remarkName + "] " + _0x5a830c.name + "完成失败");
      }
      return _0x1eeeff;
    } catch (_0x49036a) {
      console.log("❌ [" + this.remarkName + "] " + _0x55da01 + "任务出错: " + _0x49036a.message);
      return false;
    }
  }
  async performWateringAndFertilizing() {
    try {
      const _0x49037d = await this.getHomePage();
      if (!_0x49037d) {
        console.log("❌ [" + this.remarkName + "] 获取主页数据失败");
        return false;
      }
      const _0x27faf5 = _0x49037d.water_value || 0;
      const _0xf4eeaa = _0x49037d.fertilizer || 0;
      const _0x4e56e0 = _0x49037d.fertilizer_value || 0;
      const _0x5ab37b = _0x49037d.progress || 0;
      console.log("🌱 [" + this.remarkName + "] 当前状态: 水滴值" + _0x27faf5 + " 肥料值" + _0xf4eeaa + " 肥料库存" + _0x4e56e0 + " 进度" + (_0x5ab37b * 100).toFixed(1) + "%");
      let _0x41cc25 = 0;
      let _0x454339 = 0;
      const _0x502114 = 50;
      if (_0x27faf5 <= 0) {
        console.log("💧 [" + this.remarkName + "] 水滴不足，跳过浇水操作");
      } else {
        console.log("💧 [" + this.remarkName + "] 开始浇水操作...");
        while (_0x454339 < _0x502114 && _0x27faf5 > 0) {
          const _0x335b07 = await this.addWater();
          if (_0x335b07.success) {
            _0x454339++;
            _0x41cc25++;
            console.log("💧 [" + this.remarkName + "] 第" + _0x454339 + "次浇水完成");
            if (_0x335b07.data.water_value <= 0) {
              console.log("💧 [" + this.remarkName + "] 水滴已用完，停止浇水");
              break;
            }
          } else {
            console.log("❌ [" + this.remarkName + "] 浇水失败，停止浇水操作");
            break;
          }
          const _0x16b2c2 = Math.floor(Math.random() * 2000) + 3000;
          console.log("⏳ [" + this.remarkName + "] 等待 " + (_0x16b2c2 / 1000).toFixed(1) + " 秒后继续...");
          await new Promise(_0x28f9a9 => setTimeout(_0x28f9a9, _0x16b2c2));
        }
      }
      console.log("💧 [" + this.remarkName + "] 浇水操作完成，共浇水" + _0x454339 + "次");
      let _0x28d330 = 0;
      const _0x75e2a5 = 10;
      if (_0x4e56e0 <= 0) {
        console.log("🌱 [" + this.remarkName + "] 肥料库存不足，跳过施肥操作");
      } else {
        console.log("🌱 [" + this.remarkName + "] 开始施肥操作...");
        while (_0x28d330 < _0x75e2a5 && _0x4e56e0 > 0) {
          const _0x1c3758 = await this.addFertilizer();
          if (_0x1c3758.success) {
            _0x28d330++;
            _0x41cc25++;
            console.log("🌱 [" + this.remarkName + "] 第" + _0x28d330 + "次施肥完成");
            if (_0x1c3758.data.fertilizer_value <= 0) {
              console.log("🌱 [" + this.remarkName + "] 肥料库存已用完，停止施肥");
              break;
            }
          } else {
            console.log("❌ [" + this.remarkName + "] 施肥失败，停止施肥操作");
            break;
          }
          const _0x51300f = Math.floor(Math.random() * 2000) + 3000;
          console.log("⏳ [" + this.remarkName + "] 等待 " + (_0x51300f / 1000).toFixed(1) + " 秒后继续...");
          await new Promise(_0x5d6add => setTimeout(_0x5d6add, _0x51300f));
        }
        console.log("🌱 [" + this.remarkName + "] 施肥操作完成，共施肥" + _0x28d330 + "次");
      }
      const _0x1b8857 = await this.getHomePage();
      if (_0x1b8857) {
        const _0x31727f = _0x1b8857.water_value || 0;
        const _0x524ea1 = _0x1b8857.fertilizer || 0;
        const _0x4fa1db = _0x1b8857.fertilizer_value || 0;
        const _0x1f8b9a = _0x1b8857.progress || 0;
        console.log("🌿 [" + this.remarkName + "] 最终状态: 水滴值" + _0x31727f + " 肥料值" + _0x524ea1 + " 肥料库存" + _0x4fa1db + " 进度" + (_0x1f8b9a * 100).toFixed(1) + "%");
      }
      return _0x41cc25 > 0;
    } catch (_0x41a142) {
      console.log("❌ [" + this.remarkName + "] 浇水施肥操作出错: " + _0x41a142.message);
      return false;
    }
  }
  async performOptimizedWaterAndFertilizerTasks() {
    let _0x20ddec = true;
    let _0x280487 = false;
    try {
      console.log("💧 [" + this.remarkName + "] === 开始领水任务 ===");
      const _0x407fca = await this.getTasks(1);
      if (_0x407fca && _0x407fca.length > 0) {
        for (const _0x2de1d5 of _0x407fca) {
          if (_0x2de1d5.work_type_name === "购买商品") {
            continue;
          }
          const _0x30ec3b = _0x2de1d5.is_completed === 1 || _0x2de1d5.complete_num >= _0x2de1d5.day_num;
          _0x30ec3b ? console.log("✅ [" + this.remarkName + "] " + _0x2de1d5.name + "已完成，尝试领取奖励") : console.log("📋 [" + this.remarkName + "] 执行任务: " + _0x2de1d5.name + " (" + _0x2de1d5.work_type_name + ")");
          if (isDebug) {
            console.log("🎁 [" + this.remarkName + "] 奖励: " + _0x2de1d5.getReward.map(_0x5f5ae5 => _0x5f5ae5.reward_type_name + "+" + _0x5f5ae5.reward).join(", "));
          }
          let _0x368ce2 = false;
          if (_0x2de1d5.work_type_name === "看视频") {
            if (_0x30ec3b || _0x2de1d5.complete_num > 0) {
              console.log("📺 [" + this.remarkName + "] 视频已观看，尝试领取奖励");
              const _0x5a62b0 = await this.receiveTaskReward(_0x2de1d5.id, _0x2de1d5.name + "奖励");
              _0x368ce2 = _0x5a62b0.success;
            } else {
              const _0x366860 = await this.completeTask(_0x2de1d5.id, _0x2de1d5.name + "(看视频)");
              if (_0x366860.success) {
                await this.simulateWatchVideo(_0x2de1d5.name);
                const _0x2296c4 = await this.receiveTaskReward(_0x2de1d5.id, _0x2de1d5.name + "奖励");
                _0x368ce2 = _0x2296c4.success;
              }
            }
          } else {
            if (_0x2de1d5.work_type_name === "每日分享") {
              const _0x361f66 = "领水分享";
              const _0x27bcfd = "雨水";
              if (_0x30ec3b) {
                console.log("📤 [" + this.remarkName + "] " + _0x361f66 + "任务已完成，尝试领取奖励");
                const _0x450da2 = await this.receiveTaskReward(_0x2de1d5.id, _0x361f66 + "奖励");
                _0x368ce2 = _0x450da2.success;
              } else {
                console.log("📤 [" + this.remarkName + "] 执行" + _0x361f66 + "任务 (task_id=" + _0x2de1d5.id + ")");
                const _0x59d6b2 = await this.completeTask(_0x2de1d5.id, "" + _0x361f66);
                if (_0x59d6b2) {
                  const _0x5a9309 = await this.receiveTaskReward(_0x2de1d5.id, _0x361f66 + "奖励");
                  _0x368ce2 = _0x5a9309.success;
                }
              }
              _0x368ce2 && (_0x280487 = true, console.log("📤 [" + this.remarkName + "] " + _0x361f66 + "完成并领取奖励成功！获得" + _0x27bcfd));
            } else {
              if (_0x2de1d5.work_type_name === "天天抽奖") {
                console.log("🎰 [" + this.remarkName + "] 尝试领取抽奖任务奖励");
                const _0x207cc2 = await this.receiveTaskReward(_0x2de1d5.id, _0x2de1d5.name + "奖励");
                _0x368ce2 = _0x207cc2.success;
              }
            }
          }
          _0x368ce2 ? console.log("✅ [" + this.remarkName + "] " + _0x2de1d5.name + "奖励领取成功") : console.log("❌ [" + this.remarkName + "] " + _0x2de1d5.name + "奖励领取失败");
        }
      }
      console.log("🌱 [" + this.remarkName + "] === 开始领肥料任务 ===");
      const _0x6629fe = await this.getTasks(2);
      if (_0x6629fe && _0x6629fe.length > 0) {
        for (const _0x1964db of _0x6629fe) {
          if (_0x1964db.work_type_name === "购买商品") {
            continue;
          }
          const _0x1d7ee2 = _0x1964db.is_completed === 1 || _0x1964db.complete_num >= _0x1964db.day_num;
          _0x1d7ee2 ? console.log("✅ [" + this.remarkName + "] " + _0x1964db.name + "已完成，尝试领取奖励") : console.log("📋 [" + this.remarkName + "] 执行任务: " + _0x1964db.name + " (" + _0x1964db.work_type_name + ")");
          if (isDebug) {
            console.log("🎁 [" + this.remarkName + "] 奖励: " + _0x1964db.getReward.map(_0x102835 => _0x102835.reward_type_name + "+" + _0x102835.reward).join(", "));
          }
          let _0x5c1a19 = false;
          if (_0x1964db.work_type_name === "看视频") {
            if (_0x1d7ee2 || _0x1964db.complete_num > 0) {
              console.log("📺 [" + this.remarkName + "] 视频已观看，尝试领取奖励");
              const _0x1fd686 = await this.receiveTaskReward(_0x1964db.id, _0x1964db.name + "奖励");
              _0x5c1a19 = _0x1fd686.success;
            } else {
              const _0x57cb9d = await this.completeTask(_0x1964db.id, _0x1964db.name + "(看视频)");
              if (_0x57cb9d.success) {
                await this.simulateWatchVideo(_0x1964db.name);
                const _0x407056 = await this.receiveTaskReward(_0x1964db.id, _0x1964db.name + "奖励");
                _0x5c1a19 = _0x407056.success;
              }
            }
          } else {
            if (_0x1964db.work_type_name === "每日分享") {
              const _0x3dd2dc = "领肥料分享";
              const _0x22c607 = "肥料";
              if (_0x1d7ee2) {
                console.log("📤 [" + this.remarkName + "] " + _0x3dd2dc + "任务已完成，尝试领取奖励");
                const _0x255622 = await this.receiveTaskReward(_0x1964db.id, _0x3dd2dc + "奖励");
                _0x5c1a19 = _0x255622.success;
              } else {
                console.log("📤 [" + this.remarkName + "] 执行" + _0x3dd2dc + "任务 (task_id=" + _0x1964db.id + ")");
                const _0x3cb5ba = await this.completeTask(_0x1964db.id, "" + _0x3dd2dc);
                if (_0x3cb5ba) {
                  const _0x385a88 = await this.receiveTaskReward(_0x1964db.id, _0x3dd2dc + "奖励");
                  _0x5c1a19 = _0x385a88.success;
                }
              }
              _0x5c1a19 && console.log("📤 [" + this.remarkName + "] " + _0x3dd2dc + "完成并领取奖励成功！获得" + _0x22c607);
            } else {
              if (_0x1964db.work_type_name === "天天抽奖") {
                console.log("🎰 [" + this.remarkName + "] 尝试领取抽奖任务奖励");
                const _0x3a1be8 = await this.receiveTaskReward(_0x1964db.id, _0x1964db.name + "奖励");
                _0x5c1a19 = _0x3a1be8.success;
              }
            }
          }
          _0x5c1a19 ? console.log("✅ [" + this.remarkName + "] " + _0x1964db.name + "奖励领取成功") : console.log("❌ [" + this.remarkName + "] " + _0x1964db.name + "奖励领取失败");
        }
      }
      return _0x20ddec;
    } catch (_0x3c7d31) {
      console.log("❌ [" + this.remarkName + "] 优化版领水和肥料任务出错: " + _0x3c7d31.message);
      return false;
    }
  }
  async performCheckIn() {
    console.log("🕐 [" + this.remarkName + "] 开始执行打卡流程...");
    try {
      if (!this.isInCheckInTime()) {
        const _0x5cbe58 = new Date();
        console.log("⏰ [" + this.remarkName + "] 当前时间 " + _0x5cbe58.toLocaleTimeString() + " 不在打卡时间范围内（11:30-13:30）");
        return false;
      }
      if (!this.token) {
        console.log("❌ [" + this.remarkName + "] 未找到有效的token，无法执行打卡");
        return false;
      }
      const _0x381e66 = await this.getHomePage();
      if (!_0x381e66) {
        console.log("❌ [" + this.remarkName + "] 获取用户数据失败，可能token已失效");
        return false;
      }
      console.log("💧 [" + this.remarkName + "] 打卡前水滴数量: " + _0x381e66.water_value);
      const _0x515f9d = await this.getTasks(3);
      if (!_0x515f9d || _0x515f9d.length === 0) {
        console.log("❌ [" + this.remarkName + "] 未找到可用的打卡任务");
        return false;
      }
      const _0x48ef48 = _0x515f9d.find(_0x4a505e => _0x4a505e.limit_time === "11:30-13:30" && _0x4a505e.name === "雨水" && _0x4a505e.is_enabled === 1);
      if (!_0x48ef48) {
        console.log("❌ [" + this.remarkName + "] 未找到11:30-13:30的雨水打卡任务");
        return false;
      }
      if (_0x48ef48.is_completed === 1) {
        console.log("✅ [" + this.remarkName + "] 今日已完成打卡，获得了" + (_0x48ef48.getReward[0]?.["reward"] || 100) + "水滴奖励");
        return true;
      }
      console.log("📋 [" + this.remarkName + "] 找到打卡任务: " + _0x48ef48.name + " (" + _0x48ef48.limit_time + ")");
      if (isDebug) {
        console.log("🎁 [" + this.remarkName + "] 奖励: " + (_0x48ef48.getReward[0]?.["reward"] || 100) + "水滴");
      }
      const _0x2f9be0 = await this.completeTask(_0x48ef48.id, "打卡任务", true);
      if (!_0x2f9be0) {
        return false;
      }
      await new Promise(_0x6b564 => setTimeout(_0x6b564, 1000));
      const _0x1331a3 = await this.receiveTaskReward(_0x48ef48.id, "打卡任务");
      await new Promise(_0x34e8af => setTimeout(_0x34e8af, 2000));
      const _0x52be09 = await this.getHomePage();
      if (_0x52be09 && _0x381e66) {
        const _0x10e077 = _0x52be09.water_value - _0x381e66.water_value;
        _0x10e077 > 0 ? console.log("🎉 [" + this.remarkName + "] 打卡成功！获得 " + _0x10e077 + " 水滴，当前水滴: " + _0x52be09.water_value) : console.log("✅ [" + this.remarkName + "] 打卡成功！当前水滴: " + _0x52be09.water_value);
      } else {
        console.log("✅ [" + this.remarkName + "] 打卡成功！");
      }
      return true;
    } catch (_0x22b57a) {
      console.log("❌ [" + this.remarkName + "] 打卡流程出错: " + _0x22b57a.message);
      return false;
    }
  }
  async performSecondCheckIn() {
    console.log("🕕 [" + this.remarkName + "] 开始执行二次打卡流程...");
    try {
      if (!this.isInSecondCheckInTime()) {
        const _0xe71fcc = new Date();
        console.log("⏰ [" + this.remarkName + "] 当前时间 " + _0xe71fcc.toLocaleTimeString() + " 不在二次打卡时间范围内（17:30-19:30）");
        return false;
      }
      if (!this.token) {
        console.log("❌ [" + this.remarkName + "] 未找到有效的token，无法执行二次打卡");
        return false;
      }
      const _0xc9fc8 = await this.getHomePage();
      if (!_0xc9fc8) {
        console.log("❌ [" + this.remarkName + "] 获取用户数据失败，可能token已失效");
        return false;
      }
      console.log("🌿 [" + this.remarkName + "] 二次打卡前肥料数量: " + _0xc9fc8.fertilizer);
      const _0x378b07 = await this.getTasks(3);
      if (!_0x378b07 || _0x378b07.length === 0) {
        console.log("❌ [" + this.remarkName + "] 未找到可用的二次打卡任务");
        return false;
      }
      const _0xe710ef = _0x378b07.find(_0xa75e60 => _0xa75e60.limit_time === "17:30-19:30" && _0xa75e60.name === "肥料" && _0xa75e60.is_enabled === 1);
      if (!_0xe710ef) {
        console.log("❌ [" + this.remarkName + "] 未找到17:30-19:30的肥料二次打卡任务");
        return false;
      }
      if (_0xe710ef.is_completed === 1) {
        console.log("✅ [" + this.remarkName + "] 今日已完成二次打卡，获得了" + (_0xe710ef.getReward[0]?.["reward"] || 30) + "肥料奖励");
        return true;
      }
      console.log("📋 [" + this.remarkName + "] 找到二次打卡任务: " + _0xe710ef.name + " (" + _0xe710ef.limit_time + ")");
      if (isDebug) {
        console.log("🎁 [" + this.remarkName + "] 奖励: " + (_0xe710ef.getReward[0]?.["reward"] || 30) + "肥料");
      }
      const _0x2154b9 = await this.completeTask(_0xe710ef.id, "二次打卡任务", true);
      if (!_0x2154b9) {
        return false;
      }
      await new Promise(_0x532118 => setTimeout(_0x532118, 1000));
      const _0x226288 = await this.receiveTaskReward(_0xe710ef.id, "二次打卡任务");
      await new Promise(_0x24e5f8 => setTimeout(_0x24e5f8, 2000));
      const _0x307355 = await this.getHomePage();
      if (_0x307355 && _0xc9fc8) {
        const _0x1c762c = _0x307355.fertilizer - _0xc9fc8.fertilizer;
        _0x1c762c > 0 ? console.log("🎉 [" + this.remarkName + "] 二次打卡成功！获得 " + _0x1c762c + " 肥料，当前肥料: " + _0x307355.fertilizer) : console.log("✅ [" + this.remarkName + "] 二次打卡成功！当前肥料: " + _0x307355.fertilizer);
      } else {
        console.log("✅ [" + this.remarkName + "] 二次打卡成功！");
      }
      return true;
    } catch (_0x18490f) {
      console.log("❌ [" + this.remarkName + "] 二次打卡流程出错: " + _0x18490f.message);
      return false;
    }
  }
  async checkAndHandleTokenExpiry() {
    if (!this.token || !this.isLogin) {
      console.log("🔑 [" + this.remarkName + "] Token不存在，需要重新登录");
      return await this.performFullLogin();
    }
    return true;
  }
  async performAllTasks() {
    console.log("🚀 [" + this.remarkName + "] 开始执行所有任务...");
    try {
      if (!(await this.checkAndHandleTokenExpiry())) {
        console.log("❌ [" + this.remarkName + "] 登录失败，无法执行任务");
        return false;
      }
      let _0x52c596 = await this.getHomePage();
      if (!_0x52c596) {
        console.log("🔑 [" + this.remarkName + "] Token可能已失效，尝试重新登录...");
        if (!(await this.performFullLogin())) {
          console.log("❌ [" + this.remarkName + "] 重新登录失败，无法执行任务");
          return false;
        }
        _0x52c596 = await this.getHomePage();
        if (!_0x52c596) {
          console.log("❌ [" + this.remarkName + "] 重新登录后仍无法获取用户数据");
          return false;
        }
      }
      console.log("👤 [" + this.remarkName + "] 当前状态: 水滴" + _0x52c596.water_value + " 肥料" + _0x52c596.fertilizer + " 积分" + _0x52c596.integral + " 余额" + _0x52c596.balance + "元");
      let _0x1a6eb0 = true;
      console.log("\n🎯 [" + this.remarkName + "] === 第一阶段：核心任务 ===");
      console.log("\n📝 [" + this.remarkName + "] === 开始签到 ===");
      const _0x26a42f = await this.performSignIn();
      if (!_0x26a42f) {
        _0x1a6eb0 = false;
      }
      console.log("\n🕐 [" + this.remarkName + "] === 开始打卡 ===");
      const _0x55466b = await this.performCheckIn();
      if (!_0x55466b) {
        _0x1a6eb0 = false;
      }
      console.log("\n🕕 [" + this.remarkName + "] === 开始二次打卡 ===");
      const _0x404bd5 = await this.performSecondCheckIn();
      if (!_0x404bd5) {
        _0x1a6eb0 = false;
      }
      console.log("\n🎰 [" + this.remarkName + "] === 开始抽奖 ===");
      const _0x4ae0d0 = await this.performLottery();
      if (!_0x4ae0d0) {
        _0x1a6eb0 = false;
      }
      console.log("\n🎁 [" + this.remarkName + "] === 第二阶段：任务奖励领取 ===");
      const _0x623c59 = await this.performOptimizedWaterAndFertilizerTasks();
      if (!_0x623c59) {
        _0x1a6eb0 = false;
      }
      console.log("\n🌿 [" + this.remarkName + "] === 第三阶段：资源消耗 ===");
      const _0x5c349b = await this.performWateringAndFertilizing();
      if (!_0x5c349b) {
        _0x1a6eb0 = false;
      }
      const _0x5b42de = await this.getHomePage();
      if (_0x5b42de) {
        const _0x55e8e7 = _0x5b42de.water_value - _0x52c596.water_value;
        const _0x8b2529 = _0x5b42de.fertilizer - _0x52c596.fertilizer;
        const _0x4ae212 = _0x5b42de.integral - _0x52c596.integral;
        console.log("💰 [" + this.remarkName + "] 最终状态: 水滴" + _0x5b42de.water_value + " 肥料" + _0x5b42de.fertilizer + " 积分" + _0x5b42de.integral + " 余额" + _0x5b42de.balance + "元");
      }
      return _0x1a6eb0;
    } catch (_0x1afc49) {
      console.log("❌ [" + this.remarkName + "] 执行任务出错: " + _0x1afc49.message);
      return false;
    }
  }
  async validateCache() {
    if (!this.isLogin || !this.token) {
      return false;
    }
    if (isDebug) {
      console.log("[DEBUG] [" + this.remarkName + "] 验证缓存数据有效性...");
    }
    try {
      const _0x140130 = await this.getHomePage();
      if (_0x140130) {
        if (isDebug) {
          console.log("[DEBUG] [" + this.remarkName + "] 缓存数据验证通过");
        }
        return true;
      }
    } catch (_0x19ebd4) {
      if (isDebug) {
        console.log("[DEBUG] [" + this.remarkName + "] 缓存数据验证失败: " + _0x19ebd4.message);
      }
    }
    if (isDebug) {
      console.log("[DEBUG] [" + this.remarkName + "] 缓存数据已失效");
    }
    this.isLogin = false;
    return false;
  }
  async performFullLogin() {
    if (isDebug) {
      console.log("[DEBUG] [" + this.remarkName + "] 执行兴攀农场登录流程...");
    }
    try {
      const _0x1da0fd = await this.getWxCodeAndLogin();
      if (!_0x1da0fd) {
        if (isDebug) {
          console.log("[" + this.remarkName + "] 获取微信授权码失败，跳过");
        }
        return false;
      }
      const _0x291e35 = await this.xpFarmCodeToInfo();
      if (!_0x291e35) {
        console.log("[" + this.remarkName + "] 兴攀农场获取openid失败，跳过");
        return false;
      }
      if (isDebug) {
        console.log("📱 [" + this.remarkName + "] 获取用户个人信息...");
      }
      await this.getUserProfile();
      const _0xf977bc = await this.xpFarmLogin();
      if (!_0xf977bc) {
        console.log("[" + this.remarkName + "] 兴攀农场登录失败，跳过");
        return false;
      }
      this.saveTokenCache();
      console.log("✅ [" + this.remarkName + "] 兴攀农场登录成功");
      return true;
    } catch (_0x19f594) {
      console.log("❌ [" + this.remarkName + "] 登录流程出错: " + _0x19f594.message);
      isDebug && console.error(_0x19f594);
      return false;
    }
  }
  async run() {
    try {
      if (useProxy && !useDirectConnection) {
        PROXY_FROM_ENV ? (currentProxy = await getProxy(PROXY_FROM_ENV), !currentProxy && (console.log("⚠️ [" + this.remarkName + "] 环境变量代理获取失败，尝试默认代理API"), currentProxy = await getProxy())) : (console.log("🌐 [" + this.remarkName + "] 正在获取代理..."), currentProxy = await getProxy());
        !currentProxy && console.log("⚠️ [" + this.remarkName + "] 获取代理失败，继续使用直连");
      } else {
        useDirectConnection && (console.log("🔗 [" + this.remarkName + "] 改用直连模式"), currentProxy = null);
      }
      const _0x112275 = await this.performFullLogin();
      if (!_0x112275) {
        console.log("❌ [" + this.remarkName + "] 登录失败，跳过");
        return;
      }
      onlySignIn ? await this.performSignIn() : await this.performAllTasks();
    } catch (_0x673d4a) {
      console.log("❌ [" + this.remarkName + "] 脚本执行出错：" + _0x673d4a.message);
      isDebug && console.error(_0x673d4a);
    }
  }
}
async function main() {
  console.log("🔔 脚本开始执行");
  isDebug && (console.log("[DEBUG] 调试模式已开启"), console.log("[DEBUG] APPID: " + APPID), console.log("[DEBUG] useProxy: " + useProxy), console.log("[DEBUG] PROXY_FROM_ENV: " + PROXY_FROM_ENV));
  if (!wxidList) {
    console.log("❌ 未设置环境变量 XPNC_WXID 或命令行参数 --wxid");
    return;
  }
  const _0x237a82 = cmdWxid ? [cmdWxid] : parseWxidList(wxidList);
  if (_0x237a82.length === 0) {
    console.log("❌ 没有找到有效的wxid");
    return;
  }
  console.log("📋 共找到 " + _0x237a82.length + " 个有效账号");
  isDebug && console.log("[DEBUG] 账号列表: " + _0x237a82.join(", "));
  for (let _0x803a5c = 0; _0x803a5c < _0x237a82.length; _0x803a5c++) {
    const _0xaa71bb = _0x237a82[_0x803a5c];
    const _0x581cb4 = wxcode.getRemarkName(_0xaa71bb);
    console.log("\n🚀 [" + (_0x803a5c + 1) + "/" + _0x237a82.length + "] 开始处理账号: " + _0x581cb4 + " (" + _0xaa71bb + ")");
    try {
      const _0x1ea37f = new ScriptTemplate(_0xaa71bb);
      await _0x1ea37f.run();
      console.log("✅ [" + (_0x803a5c + 1) + "/" + _0x237a82.length + "] 账号 " + _0x581cb4 + " 处理完成");
    } catch (_0xec91d0) {
      console.log("❌ [" + (_0x803a5c + 1) + "/" + _0x237a82.length + "] 账号 " + _0x581cb4 + " 处理失败: " + _0xec91d0.message);
      isDebug && console.error(_0xec91d0);
    }
    console.log("─".repeat(60));
    _0x803a5c < _0x237a82.length - 1 && (await new Promise(_0x256c41 => setTimeout(_0x256c41, 1000)));
  }
  console.log("\n🎉 所有账号处理完成！");
  NOTICE_SWITCH && notice && (await sendMsg(notice));
}
let notice = "";
function print(_0x43c6ce, _0x64df4c = false) {
  let _0x14024e = "" + _0x43c6ce;
  console.log(_0x14024e);
  NOTICE_SWITCH && _0x64df4c && (notice += _0x14024e + "\n");
}
async function sendMsg(_0x2ed8f2) {
  try {
    let _0x260d83 = "";
    try {
      _0x260d83 = require("./sendNotify");
    } catch (_0x45408a) {
      try {
        _0x260d83 = require("../sendNotify");
      } catch (_0x51e5e0) {
        console.log("❌ 未找到sendNotify模块，无法发送通知");
        return;
      }
    }
    await _0x260d83.sendNotify(scriptName, _0x2ed8f2);
    console.log("📢 通知发送成功");
  } catch (_0x4386d4) {
    console.log("❌ 通知发送失败: " + _0x4386d4.message);
  }
}
main().catch(console.error);