//Sat Sep 06 2025 12:31:21 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
const wxcode = require("./wxcode");
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const https = require("https");
const http = require("http");
const {
  URL
} = require("url");
const zlib = require("zlib");
const vm = require("vm");
global.window = global.window || {};
global.getDuibaToken = null;
const NOTICE_SWITCH = 1;
const APPID = "wx4080846d0cec2fd5";
const KAMI_API_URL = "http://kami.19820121.xyz/api/verify.php";
const KAMI_API_KEY = "6e62e481fe3f0ad007bb5a1df54bc0fa";
const args = process.argv.slice(2);
const getArg = _0x57393b => {
  const _0x493e81 = args.indexOf("--" + _0x57393b);
  return _0x493e81 !== -1 && args[_0x493e81 + 1] ? args[_0x493e81 + 1] : null;
};
const cmdWxid = getArg("wxid");
const cmdServer = getArg("server");
const isDebug = args.includes("--debug");
const wxidList = cmdWxid || process.env.TXX_WXID || "";
const kamiKey = process.env.TXX_KAMI || "";
cmdServer && (process.env.PHONECODE_SERVER = cmdServer, isDebug && console.log("[DEBUG] 设置服务器地址: " + cmdServer));
const scriptName = path.basename(__filename, ".js");
const TOKEN_CACHE_FILE = path.join(__dirname, scriptName + "_tokens.json");
function parseWxidList(_0x400d3d) {
  if (!_0x400d3d) {
    return [];
  }
  return _0x400d3d.split("\n").map(_0x34afe9 => _0x34afe9.trim()).filter(_0x39d5e2 => _0x39d5e2.length > 0).filter(_0x6b1568 => !_0x6b1568.startsWith("#"));
}
function generateDeviceId() {
  const _0x58ac09 = require("os");
  const _0x5d421f = _0x58ac09.hostname();
  const _0x4d1211 = _0x5d421f + "-node-script";
  const _0x13720d = crypto.createHash("md5").update(_0x4d1211).digest("hex").substring(0, 16);
  return _0x13720d;
}
async function verifyKami(_0x53deb2) {
  return new Promise((_0x178030, _0xfa8b05) => {
    if (!_0x53deb2) {
      _0x178030({
        success: false,
        code: 1,
        message: "未设置卡密，请设置环境变量 TXX_KAMI"
      });
      return;
    }
    const _0x7d2265 = generateDeviceId();
    const _0x5ab6d7 = new URL(KAMI_API_URL);
    _0x5ab6d7.searchParams.set("api_key", KAMI_API_KEY);
    _0x5ab6d7.searchParams.set("card_key", _0x53deb2);
    _0x5ab6d7.searchParams.set("device_id", _0x7d2265);
    const _0xf0ac1c = {
      hostname: _0x5ab6d7.hostname,
      port: _0x5ab6d7.port || (_0x5ab6d7.protocol === "https:" ? 443 : 80),
      path: _0x5ab6d7.pathname + _0x5ab6d7.search,
      method: "GET",
      headers: {
        "User-Agent": "Node.js Script"
      }
    };
    const _0x5da462 = _0x5ab6d7.protocol === "https:" ? https : http;
    const _0x2e7aeb = _0x5da462.request(_0xf0ac1c, _0x1fb014 => {
      let _0x51cc48 = "";
      _0x1fb014.on("data", _0x51a13d => {
        _0x51cc48 += _0x51a13d;
      });
      _0x1fb014.on("end", () => {
        if (!_0x51cc48 || _0x51cc48.trim() === "") {
          _0x178030({
            success: false,
            code: 3,
            message: "服务器返回空响应"
          });
          return;
        }
        try {
          const _0x2021e8 = JSON.parse(_0x51cc48);
          _0x2021e8.code === 0 ? _0x178030({
            success: true,
            code: _0x2021e8.code,
            message: _0x2021e8.message || _0x2021e8.msg,
            data: _0x2021e8.data
          }) : _0x178030({
            success: false,
            code: _0x2021e8.code,
            message: _0x2021e8.message || _0x2021e8.msg || "卡密验证失败"
          });
        } catch (_0x54f712) {
          _0x178030({
            success: false,
            code: 3,
            message: "解析响应失败: " + _0x54f712.message + "，原始响应: " + _0x51cc48
          });
        }
      });
    });
    _0x2e7aeb.on("error", _0x1c49cf => {
      _0x178030({
        success: false,
        code: 3,
        message: "网络请求失败: " + _0x1c49cf.message
      });
    });
    _0x2e7aeb.setTimeout(10000, () => {
      _0x2e7aeb.destroy();
      _0x178030({
        success: false,
        code: 3,
        message: "请求超时，请检查网络连接"
      });
    });
    _0x2e7aeb.end();
  });
}
async function makeRequest(_0x2f33f3) {
  return new Promise((_0x5c865d, _0x3592b9) => {
    const _0x8e6dcb = _0x2f33f3.protocol === "https:" ? https : http;
    const _0x2fd450 = _0x8e6dcb.request(_0x2f33f3, _0x44bd9b => {
      let _0x9892b9 = "";
      const _0x5e9a23 = _0x44bd9b.headers["content-encoding"];
      let _0x4225c9 = _0x44bd9b;
      if (_0x5e9a23 === "gzip") {
        _0x4225c9 = _0x44bd9b.pipe(zlib.createGunzip());
      } else {
        if (_0x5e9a23 === "deflate") {
          _0x4225c9 = _0x44bd9b.pipe(zlib.createInflate());
        } else {
          _0x5e9a23 === "br" && (_0x4225c9 = _0x44bd9b.pipe(zlib.createBrotliDecompress()));
        }
      }
      _0x4225c9.on("data", _0x235576 => {
        _0x9892b9 += _0x235576;
      });
      _0x4225c9.on("end", () => {
        if (_0x44bd9b.statusCode >= 200 && _0x44bd9b.statusCode < 400) {
          const _0x1cd2d2 = _0x2f33f3.expectJson !== false;
          if (_0x1cd2d2 && _0x44bd9b.statusCode < 300) {
            try {
              const _0x1932be = JSON.parse(_0x9892b9);
              _0x5c865d({
                success: true,
                statusCode: _0x44bd9b.statusCode,
                data: _0x1932be,
                headers: _0x44bd9b.headers
              });
            } catch (_0x3ea41d) {
              _0x5c865d({
                success: true,
                statusCode: _0x44bd9b.statusCode,
                data: _0x9892b9,
                headers: _0x44bd9b.headers,
                error: "JSON解析失败: " + _0x3ea41d.message
              });
            }
          } else {
            _0x5c865d({
              success: true,
              statusCode: _0x44bd9b.statusCode,
              data: _0x9892b9,
              headers: _0x44bd9b.headers
            });
          }
        } else {
          _0x5c865d({
            success: false,
            statusCode: _0x44bd9b.statusCode,
            error: "HTTP " + _0x44bd9b.statusCode,
            data: _0x9892b9,
            headers: _0x44bd9b.headers
          });
        }
      });
      _0x4225c9.on("error", _0x332c0f => {
        _0x5c865d({
          success: false,
          statusCode: _0x44bd9b.statusCode || 0,
          error: "流错误: " + _0x332c0f.message,
          data: _0x9892b9,
          headers: _0x44bd9b.headers || {}
        });
      });
    });
    _0x2fd450.on("error", _0x1b6641 => {
      _0x5c865d({
        success: false,
        statusCode: 0,
        error: "请求错误: " + _0x1b6641.message,
        data: "",
        headers: {}
      });
    });
    _0x2fd450.setTimeout(30000, () => {
      _0x2fd450.destroy();
      _0x5c865d({
        success: false,
        statusCode: 0,
        error: "请求超时",
        data: "",
        headers: {}
      });
    });
    _0x2f33f3.body && _0x2fd450.write(_0x2f33f3.body);
    _0x2fd450.end();
  });
}
class ScriptTemplate {
  constructor(_0x94de5b) {
    this.wxid = _0x94de5b;
    this.appid = APPID;
    this.isLogin = false;
    this.wxCode = null;
    this.openid = null;
    this.mobileInfo = null;
    this.userProfile = null;
    this.remarkName = typeof wxcode.getRemarkName === "function" ? wxcode.getRemarkName(_0x94de5b) : _0x94de5b;
    this.qmaiToken = null;
    this.duifaCookies = null;
    this.signOperatingId = null;
    this.duifaToken = null;
  }
  async getWxCodeAndLogin() {
    if (isDebug) {
      console.log("[DEBUG] [" + this.remarkName + "] 获取微信授权码...");
    }
    const _0x4cf06b = await wxcode.getWxCode(this.wxid, this.appid);
    if (!_0x4cf06b.success) {
      console.log("[" + this.remarkName + "] 获取授权码失败：" + _0x4cf06b.error);
      return false;
    }
    this.wxCode = _0x4cf06b.code;
    if (isDebug) {
      console.log("[DEBUG] [" + this.remarkName + "] 获取授权码成功：" + this.wxCode);
    }
    this.isLogin = true;
    return true;
  }
  async getQmaiInitialToken() {
    if (isDebug) {
      console.log("[DEBUG] [" + this.remarkName + "] 获取益禾堂初始token...");
    }
    const _0x5c550a = {
      hostname: "webapi.qmai.cn",
      port: 443,
      path: "/web/account-center/oauth/mini-app-login",
      method: "POST",
      protocol: "https:",
      headers: {
        Connection: "keep-alive",
        "Content-Type": "application/json",
        Accept: "v=1.0",
        "Qm-From": "wechat",
        "Qm-From-Type": "catering",
        "store-id": "203009",
        "Accept-Language": "zh-CN",
        "Qm-User-Token": "",
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.49(0x18003137) NetType/WIFI Language/zh_CN",
        Referer: "https://servicewechat.com/wx4080846d0cec2fd5/490/page-frame.html"
      },
      body: JSON.stringify({
        code: this.wxCode,
        eVersion: "1.0",
        appid: this.appid
      })
    };
    const _0x20b83c = await makeRequest(_0x5c550a);
    if (!_0x20b83c.success) {
      console.log("❌ [" + this.remarkName + "] 获取初始token失败: " + _0x20b83c.error);
      return false;
    }
    if (_0x20b83c.data.code === 0 && _0x20b83c.data.data && _0x20b83c.data.data.token) {
      this.qmaiToken = _0x20b83c.data.data.token;
      if (isDebug) {
        console.log("[DEBUG] [" + this.remarkName + "] 初始token获取成功");
      }
      return true;
    } else {
      console.log("❌ [" + this.remarkName + "] 初始token响应异常: " + JSON.stringify(_0x20b83c.data));
      return false;
    }
  }
  async getQmaiMobileToken() {
    if (isDebug) {
      console.log("[DEBUG] [" + this.remarkName + "] 获取手机号绑定token...");
    }
    const _0x563bfc = await wxcode.getmobile(this.wxid, this.appid);
    if (!_0x563bfc.success) {
      console.log("❌ [" + this.remarkName + "] 获取手机号失败: " + _0x563bfc.error);
      return false;
    }
    const _0x3f4a1d = {
      hostname: "webapi.qmai.cn",
      port: 443,
      path: "/web/account-center/oauth/bind-mobile",
      method: "POST",
      protocol: "https:",
      headers: {
        Connection: "keep-alive",
        "Content-Type": "application/json",
        Accept: "v=1.0",
        "Qm-From": "wechat",
        "Qm-From-Type": "catering",
        "store-id": "203009",
        "Accept-Language": "zh-CN",
        "Qm-User-Token": this.qmaiToken,
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.49(0x18003137) NetType/WIFI Language/zh_CN",
        Referer: "https://servicewechat.com/wx4080846d0cec2fd5/490/page-frame.html"
      },
      body: JSON.stringify({
        code: _0x563bfc.code,
        reg_activity_source: 0,
        is_update_mobile: 0,
        channel_code: "",
        flowScene: 1001,
        eVersion: "1.0",
        appid: this.appid
      })
    };
    const _0xc2762d = await makeRequest(_0x3f4a1d);
    if (!_0xc2762d.success) {
      console.log("❌ [" + this.remarkName + "] 获取手机号绑定token失败: " + _0xc2762d.error);
      return false;
    }
    if (_0xc2762d.data.code === 0 && _0xc2762d.data.data && _0xc2762d.data.data.loginToken && _0xc2762d.data.data.loginToken.token) {
      this.qmaiToken = _0xc2762d.data.data.loginToken.token;
      if (isDebug) {
        console.log("[DEBUG] [" + this.remarkName + "] 手机号绑定token获取成功");
      }
      return true;
    } else {
      console.log("❌ [" + this.remarkName + "] 手机号绑定token响应异常: " + JSON.stringify(_0xc2762d.data));
      return false;
    }
  }
  async getQmaiRedirectInfo() {
    if (isDebug) {
      console.log("[DEBUG] [" + this.remarkName + "] 获取跳转信息...");
    }
    const _0x111247 = {
      hostname: "webapi.qmai.cn",
      port: 443,
      path: "/web/catering/crm/member/redirect",
      method: "POST",
      protocol: "https:",
      headers: {
        Connection: "keep-alive",
        "Content-Type": "application/json",
        "Accept-Language": "zh-CN",
        "Qm-From": "wechat",
        "store-id": "203009",
        "Qm-User-Token": this.qmaiToken,
        "Qm-From-Type": "catering",
        Accept: "v=1.0",
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.49(0x18003137) NetType/WIFI Language/zh_CN",
        Referer: "https://servicewechat.com/wx4080846d0cec2fd5/490/page-frame.html"
      },
      body: JSON.stringify({
        redirectUrl: "https://86019.activity-12.m.duiba.com.cn/chw/visual-editor/skins?id=203576",
        appid: this.appid
      })
    };
    const _0x5bec6c = await makeRequest(_0x111247);
    if (!_0x5bec6c.success) {
      console.log("❌ [" + this.remarkName + "] 获取跳转信息失败: " + _0x5bec6c.error);
      return false;
    }
    if (_0x5bec6c.data.status && _0x5bec6c.data.data) {
      if (isDebug) {
        console.log("[DEBUG] [" + this.remarkName + "] 跳转信息获取成功");
      }
      return _0x5bec6c.data.data;
    } else {
      console.log("❌ [" + this.remarkName + "] 跳转信息响应异常: " + JSON.stringify(_0x5bec6c.data));
      return false;
    }
  }
  async getDuifaCookies(_0x3e7af4) {
    if (isDebug) {
      console.log("[DEBUG] [" + this.remarkName + "] 获取兑吧cookie...");
    }
    const _0x4ebc4e = {
      hostname: "86019-activity.dexfu.cn",
      port: 443,
      path: new URL(_0x3e7af4).pathname + "?" + new URL(_0x3e7af4).searchParams.toString(),
      method: "GET",
      protocol: "https:",
      headers: {
        Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        "Accept-Language": "zh-CN,zh-Hans;q=0.9",
        Connection: "keep-alive",
        "Accept-Encoding": "gzip, deflate, br",
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.49(0x18003137) NetType/WIFI Language/zh_CN miniProgram/wx4080846d0cec2fd5"
      },
      expectJson: false
    };
    const _0x1fde09 = await makeRequest(_0x4ebc4e);
    if (!_0x1fde09.success) {
      console.log("❌ [" + this.remarkName + "] 获取兑吧cookie失败: " + _0x1fde09.error);
      return false;
    }
    const _0x9a2996 = _0x1fde09.headers["set-cookie"] || _0x1fde09.headers["Set-Cookie"];
    if (_0x9a2996 && _0x9a2996.length > 0) {
      this.duifaCookies = _0x9a2996.map(_0x3b3013 => _0x3b3013.split(";")[0]).join("; ");
      if (isDebug) {
        console.log("[DEBUG] [" + this.remarkName + "] 兑吧cookie获取成功");
      }
      return true;
    } else {
      console.log("❌ [" + this.remarkName + "] 未找到兑吧cookie");
      return false;
    }
  }
  async getDuifaToken() {
    if (isDebug) {
      console.log("[" + this.remarkName + "] 获取兑吧token...");
    }
    try {
      const _0x497f3b = await this.extractKeyFromSignPage();
      if (!_0x497f3b) {
        throw new Error("无法从页面脚本中提取key");
      }
      isDebug && console.log("[DEBUG] [" + this.remarkName + "] 成功提取key: " + _0x497f3b);
      const _0x4035a5 = await this.callGetTokenApi();
      if (!_0x4035a5) {
        throw new Error("getToken接口调用失败");
      }
      isDebug && console.log("[DEBUG] [" + this.remarkName + "] 获取到token脚本，长度: " + _0x4035a5.length);
      global.window = global.window || {};
      try {
        const _0x205b2e = {
          window: global.window,
          global: global,
          console: console,
          setTimeout: global.setTimeout || function (_0x354a68, _0x55b8f3) {
            return 1;
          },
          clearTimeout: global.clearTimeout || function () {},
          Date: Date,
          Math: Math,
          parseInt: parseInt,
          parseFloat: parseFloat,
          isNaN: isNaN,
          isFinite: isFinite,
          String: String,
          Number: Number,
          Boolean: Boolean,
          Object: Object,
          Array: Array,
          JSON: JSON,
          RegExp: RegExp,
          Error: Error,
          TypeError: TypeError,
          ReferenceError: ReferenceError,
          SyntaxError: SyntaxError
        };
        vm.createContext(_0x205b2e);
        vm.runInContext(_0x4035a5, _0x205b2e);
        _0x205b2e.window && Object.assign(global.window, _0x205b2e.window);
        isDebug && console.log("[DEBUG] [" + this.remarkName + "] token脚本执行成功");
      } catch (_0x3d05fb) {
        isDebug && console.log("[DEBUG] [" + this.remarkName + "] token脚本执行失败: " + _0x3d05fb.message);
        throw new Error("执行token脚本失败: " + _0x3d05fb.message);
      }
      const _0x14cf75 = global.window[_0x497f3b];
      if (!_0x14cf75) {
        if (isDebug) {
          console.log("[DEBUG] [" + this.remarkName + "] window." + _0x497f3b + " = " + _0x14cf75);
          console.log("[DEBUG] [" + this.remarkName + "] window对象中的所有属性: " + Object.keys(global.window).join(", "));
          for (const _0x25564b of Object.keys(global.window)) {
            console.log("[DEBUG] [" + this.remarkName + "] window." + _0x25564b + " = " + global.window[_0x25564b] + " (" + typeof global.window[_0x25564b] + ")");
          }
        }
        throw new Error("无法使用key \"" + _0x497f3b + "\" 从window对象中获取token");
      }
      this.duifaToken = _0x14cf75;
      isDebug && console.log("[DEBUG] [" + this.remarkName + "] 成功获取兑吧token: " + this.duifaToken);
      return true;
    } catch (_0x147c36) {
      isDebug && console.log("[DEBUG] [" + this.remarkName + "] getDuifaToken失败: " + _0x147c36.message);
      throw _0x147c36;
    }
  }
  async extractKeyFromSignPage() {
    isDebug && console.log("[DEBUG] [" + this.remarkName + "] 开始从签到页面提取key...");
    const _0x1847b4 = {
      hostname: "86019-activity.dexfu.cn",
      port: 443,
      path: "/chw/visual-editor/skins?id=203576&from=login&spm=86019.1.1.1",
      method: "GET",
      protocol: "https:",
      headers: {
        host: "86019-activity.dexfu.cn",
        "upgrade-insecure-requests": "1",
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF WindowsWechat(0x63090a13) XWEB/8555",
        accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/wxpic,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
        "sec-fetch-site": "none",
        "sec-fetch-mode": "navigate",
        "sec-fetch-user": "?1",
        "sec-fetch-dest": "document",
        "accept-encoding": "gzip, deflate, br",
        "accept-language": "zh-CN,zh;q=0.9",
        cookie: this.duifaCookies,
        priority: "u=0, i"
      }
    };
    return new Promise((_0xffbde9, _0x5e8361) => {
      const _0x2a8cf = https.request(_0x1847b4, _0x305ea5 => {
        let _0x1cd5bc = "";
        if (_0x305ea5.headers["content-encoding"] === "gzip") {
          const _0x1f7ddf = zlib.createGunzip();
          _0x305ea5.pipe(_0x1f7ddf);
          _0x1f7ddf.on("data", _0x1a9ce6 => {
            _0x1cd5bc += _0x1a9ce6.toString();
          });
          _0x1f7ddf.on("end", () => {
            try {
              const _0x5c1055 = this.parseKeyFromSignPageHTML(_0x1cd5bc);
              _0xffbde9(_0x5c1055);
            } catch (_0x70a753) {
              _0x5e8361(_0x70a753);
            }
          });
        } else {
          _0x305ea5.on("data", _0x1e63a8 => {
            _0x1cd5bc += _0x1e63a8.toString();
          });
          _0x305ea5.on("end", () => {
            try {
              const _0x265216 = this.parseKeyFromSignPageHTML(_0x1cd5bc);
              _0xffbde9(_0x265216);
            } catch (_0x6690fd) {
              _0x5e8361(_0x6690fd);
            }
          });
        }
      });
      _0x2a8cf.on("error", _0xa7f4f1 => {
        _0x5e8361(new Error("获取签到页面失败: " + _0xa7f4f1.message));
      });
      _0x2a8cf.end();
    });
  }
  parseKeyFromSignPageHTML(_0x439f94) {
    isDebug && console.log("[DEBUG] [" + this.remarkName + "] 开始解析签到页面HTML中的脚本...");
    const _0x103269 = /<script\s+type=(['"])text\/javascript\1[^>]*>([\s\S]*?)<\/script>/gi;
    const _0x36e3b6 = [];
    let _0x47ded1;
    while ((_0x47ded1 = _0x103269.exec(_0x439f94)) !== null) {
      _0x36e3b6.push(_0x47ded1[2].trim());
    }
    isDebug && console.log("[DEBUG] [" + this.remarkName + "] 找到" + _0x36e3b6.length + "个script标签");
    if (_0x36e3b6.length < 6) {
      throw new Error("脚本数量不足，需要至少6个，实际找到" + _0x36e3b6.length + "个");
    }
    global.window = global.window || {};
    global.window.addEventListener = global.window.addEventListener || function () {};
    global.window.removeEventListener = global.window.removeEventListener || function () {};
    global.window.attachEvent = global.window.attachEvent || function () {};
    global.window.detachEvent = global.window.detachEvent || function () {};
    global.window.location = global.window.location || {
      href: ""
    };
    global.window.wx = global.window.wx || {
      miniProgram: {
        postMessage: function () {}
      }
    };
    global.window.devicePixelRatio = 1;
    global.window.innerWidth = 375;
    global.window.performance = {
      navigation: {
        type: 1
      }
    };
    global.document = global.document || {
      addEventListener: function () {},
      removeEventListener: function () {},
      createElement: function () {
        return {
          async: false,
          src: "",
          crossOrigin: "",
          onerror: function () {}
        };
      },
      head: {
        appendChild: function () {}
      },
      documentElement: {
        clientWidth: 375,
        style: {
          fontSize: "16px"
        },
        classList: {
          add: function () {}
        }
      },
      body: {
        style: {
          fontSize: "16px"
        }
      }
    };
    global.getDuibaToken = null;
    global.setTimeout = global.setTimeout || function (_0x5829ed, _0x2d5b0d) {
      return 1;
    };
    global.navigator = global.navigator || {
      userAgent: "Mozilla/5.0"
    };
    let _0x2c8135 = false;
    let _0x7b100b = -1;
    let _0x21588c = null;
    for (let _0x5e858c = 0; _0x5e858c < _0x36e3b6.length; _0x5e858c++) {
      if (_0x36e3b6[_0x5e858c].includes("获取token") || _0x36e3b6[_0x5e858c].includes("getDuibaToken")) {
        _0x7b100b = _0x5e858c;
        break;
      }
    }
    if (_0x7b100b >= 0) {
      try {
        isDebug && console.log("[DEBUG] [" + this.remarkName + "] 找到token脚本，执行第" + (_0x7b100b + 1) + "个脚本...");
        const _0x2f6e81 = {
          window: {},
          document: {
            addEventListener: function () {},
            removeEventListener: function () {},
            createElement: function (_0x4089f9) {
              return {
                async: false,
                src: "",
                crossOrigin: "",
                onerror: function () {},
                tagName: _0x4089f9.toUpperCase(),
                appendChild: function () {}
              };
            },
            head: {
              appendChild: function () {}
            },
            documentElement: {
              clientWidth: 375,
              style: {
                fontSize: "16px"
              },
              classList: {
                add: function () {}
              }
            },
            body: {
              style: {
                fontSize: "16px"
              }
            }
          },
          navigator: {
            userAgent: "Mozilla/5.0"
          },
          setTimeout: function (_0x16bb4c, _0x59de78) {
            return 1;
          },
          clearTimeout: function () {},
          console: console,
          getDuibaToken: undefined
        };
        _0x2f6e81.window.addEventListener = function () {};
        _0x2f6e81.window.removeEventListener = function () {};
        _0x2f6e81.window.attachEvent = function () {};
        _0x2f6e81.window.detachEvent = function () {};
        _0x2f6e81.window.location = {
          href: ""
        };
        _0x2f6e81.window.wx = {
          miniProgram: {
            postMessage: function () {}
          }
        };
        _0x2f6e81.window.devicePixelRatio = 1;
        _0x2f6e81.window.innerWidth = 375;
        _0x2f6e81.window.performance = {
          navigation: {
            type: 1
          }
        };
        vm.createContext(_0x2f6e81);
        vm.runInContext(_0x36e3b6[_0x7b100b], _0x2f6e81);
        if (isDebug) {
          console.log("[DEBUG] [" + this.remarkName + "] 第" + (_0x7b100b + 1) + "个脚本执行后，检查VM上下文:");
          const _0x555af1 = [];
          for (const _0xe0eda9 in _0x2f6e81) {
            typeof _0x2f6e81[_0xe0eda9] === "function" && _0x555af1.push(_0xe0eda9);
          }
          console.log("[DEBUG] [" + this.remarkName + "] VM函数: " + _0x555af1.join(", "));
          const _0x20068e = [];
          if (_0x2f6e81.window) {
            for (const _0x2a5d5f in _0x2f6e81.window) {
              typeof _0x2f6e81.window[_0x2a5d5f] === "function" && _0x20068e.push(_0x2a5d5f);
            }
          }
          console.log("[DEBUG] [" + this.remarkName + "] window函数: " + _0x20068e.join(", "));
          typeof _0x2f6e81.getDuibaToken === "function" && console.log("[DEBUG] [" + this.remarkName + "] vmContext.getDuibaToken已定义");
          typeof _0x2f6e81.window.getDuibaToken === "function" && console.log("[DEBUG] [" + this.remarkName + "] vmContext.window.getDuibaToken已定义");
        }
        if (typeof _0x2f6e81.getDuibaToken === "function") {
          _0x2c8135 = true;
          _0x21588c = _0x2f6e81.getDuibaToken;
          isDebug && console.log("[DEBUG] [" + this.remarkName + "] 在第" + (_0x7b100b + 1) + "个脚本中找到getDuibaToken函数(VM)");
        } else {
          typeof _0x2f6e81.window.getDuibaToken === "function" && (_0x2c8135 = true, _0x21588c = _0x2f6e81.window.getDuibaToken, isDebug && console.log("[DEBUG] [" + this.remarkName + "] 在第" + (_0x7b100b + 1) + "个脚本中找到getDuibaToken函数(window)"));
        }
      } catch (_0x3f0363) {
        isDebug && (console.log("[DEBUG] [" + this.remarkName + "] 第" + (_0x7b100b + 1) + "个脚本执行失败: " + _0x3f0363.message), console.log("[DEBUG] [" + this.remarkName + "] 错误堆栈: " + _0x3f0363.stack));
      }
    }
    if (!_0x2c8135) {
      for (let _0x49aa98 = 0; _0x49aa98 < _0x36e3b6.length; _0x49aa98++) {
        if (_0x49aa98 === _0x7b100b) {
          continue;
        }
        try {
          isDebug && console.log("[DEBUG] [" + this.remarkName + "] 尝试执行第" + (_0x49aa98 + 1) + "个脚本...");
          const _0x4e55b2 = {
            window: global.window || {},
            global: global,
            console: console,
            getDuibaToken: undefined
          };
          vm.createContext(_0x4e55b2);
          vm.runInContext(_0x36e3b6[_0x49aa98], _0x4e55b2);
          _0x4e55b2.getDuibaToken && (global.getDuibaToken = _0x4e55b2.getDuibaToken);
          _0x4e55b2.window && _0x4e55b2.window.getDuibaToken && (global.getDuibaToken = _0x4e55b2.window.getDuibaToken);
          if (typeof global.getDuibaToken === "function") {
            _0x21588c = global.getDuibaToken;
            _0x2c8135 = true;
            isDebug && console.log("[DEBUG] [" + this.remarkName + "] 在第" + (_0x49aa98 + 1) + "个脚本中找到getDuibaToken函数");
            break;
          }
        } catch (_0x1a7384) {
          isDebug && console.log("[DEBUG] [" + this.remarkName + "] 第" + (_0x49aa98 + 1) + "个脚本执行失败: " + _0x1a7384.message);
        }
      }
    }
    if (!_0x2c8135 || typeof _0x21588c !== "function") {
      if (isDebug) {
        console.log("[DEBUG] [" + this.remarkName + "] 所有脚本都尝试完毕，但未找到getDuibaToken函数");
        for (let _0x13ea4e = 0; _0x13ea4e < _0x36e3b6.length; _0x13ea4e++) {
          console.log("[DEBUG] [" + this.remarkName + "] 脚本" + (_0x13ea4e + 1) + "前100字符: " + _0x36e3b6[_0x13ea4e].substring(0, 100) + "...");
          (_0x36e3b6[_0x13ea4e].includes("getDuibaToken") || _0x36e3b6[_0x13ea4e].includes("获取token")) && (console.log("[DEBUG] [" + this.remarkName + "] 脚本" + (_0x13ea4e + 1) + "包含getDuibaToken关键字!"), console.log("[DEBUG] [" + this.remarkName + "] 脚本" + (_0x13ea4e + 1) + "完整内容: " + _0x36e3b6[_0x13ea4e]));
        }
      }
      throw new Error("getDuibaToken函数未定义");
    }
    const _0x4d5188 = /var\s+key\s+=\s+'([^']+)';/.exec(_0x21588c.toString());
    if (!_0x4d5188) {
      isDebug && console.log("[DEBUG] [" + this.remarkName + "] getDuibaToken函数内容: " + _0x21588c.toString());
      throw new Error("无法从getDuibaToken函数中提取key");
    }
    const _0x263df8 = _0x4d5188[1];
    isDebug && console.log("[DEBUG] [" + this.remarkName + "] 成功提取key: " + _0x263df8);
    return _0x263df8;
  }
  async extractKeyFromPage() {
    isDebug && console.log("[DEBUG] [" + this.remarkName + "] 开始从页面提取key...");
    const _0x4f360b = {
      hostname: "86019-activity.dexfu.cn",
      port: 443,
      path: "/chw/visual-editor/skins?id=203576&from=login&spm=86019.1.1.1",
      method: "GET",
      protocol: "https:",
      headers: {
        host: "86019-activity.dexfu.cn",
        "upgrade-insecure-requests": "1",
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF WindowsWechat(0x63090a13) XWEB/8555",
        accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
        "sec-fetch-site": "none",
        "sec-fetch-mode": "navigate",
        "sec-fetch-user": "?1",
        "sec-fetch-dest": "document",
        "accept-encoding": "gzip, deflate, br",
        "accept-language": "zh-CN,zh;q=0.9",
        cookie: this.duifaCookies,
        priority: "u=0, i"
      }
    };
    return new Promise((_0xe67bc8, _0x260a70) => {
      const _0x5d8ba7 = https.request(_0x4f360b, _0x12ac80 => {
        let _0x35def9 = "";
        if (_0x12ac80.headers["content-encoding"] === "gzip") {
          const _0x3be737 = zlib.createGunzip();
          _0x12ac80.pipe(_0x3be737);
          _0x3be737.on("data", _0x2c9b8d => {
            _0x35def9 += _0x2c9b8d.toString();
          });
          _0x3be737.on("end", () => {
            try {
              const _0x163a82 = this.parseKeyFromHTML(_0x35def9);
              _0xe67bc8(_0x163a82);
            } catch (_0x4e6b77) {
              _0x260a70(_0x4e6b77);
            }
          });
        } else {
          _0x12ac80.on("data", _0x3e2e3c => {
            _0x35def9 += _0x3e2e3c.toString();
          });
          _0x12ac80.on("end", () => {
            try {
              const _0x3fe73e = this.parseKeyFromHTML(_0x35def9);
              _0xe67bc8(_0x3fe73e);
            } catch (_0x4d1108) {
              _0x260a70(_0x4d1108);
            }
          });
        }
      });
      _0x5d8ba7.on("error", _0x10bb64 => {
        _0x260a70(new Error("获取页面失败: " + _0x10bb64.message));
      });
      _0x5d8ba7.end();
    });
  }
  parseKeyFromHTML(_0x4bbda2) {
    isDebug && console.log("[DEBUG] [" + this.remarkName + "] 开始解析HTML中的脚本...");
    const _0x30de68 = /<script\s+type=(['"])text\/javascript\1[^>]*>([\s\S]*?)<\/script>/gi;
    const _0x186434 = [];
    let _0x54a3a3;
    while ((_0x54a3a3 = _0x30de68.exec(_0x4bbda2)) !== null) {
      _0x186434.push(_0x54a3a3[2].trim());
    }
    isDebug && console.log("[DEBUG] [" + this.remarkName + "] 找到" + _0x186434.length + "个script标签");
    if (_0x186434.length < 3) {
      throw new Error("脚本数量不足，需要至少3个，实际找到" + _0x186434.length + "个");
    }
    global.window = global.window || {};
    global.getDuibaToken = null;
    let _0x36e0cc = null;
    let _0x5b0fb7 = false;
    for (let _0x5b36b5 = 0; _0x5b36b5 < _0x186434.length; _0x5b36b5++) {
      try {
        isDebug && console.log("[DEBUG] [" + this.remarkName + "] 尝试执行第" + (_0x5b36b5 + 1) + "个脚本...");
        const _0x5382f8 = {
          window: global.window || {},
          global: global,
          console: console,
          getDuibaToken: undefined
        };
        vm.createContext(_0x5382f8);
        vm.runInContext(_0x186434[_0x5b36b5], _0x5382f8);
        _0x5382f8.getDuibaToken && (global.getDuibaToken = _0x5382f8.getDuibaToken);
        _0x5382f8.window && _0x5382f8.window.getDuibaToken && (global.getDuibaToken = _0x5382f8.window.getDuibaToken);
        if (typeof global.getDuibaToken === "function") {
          _0x36e0cc = global.getDuibaToken;
          _0x5b0fb7 = true;
          isDebug && console.log("[DEBUG] [" + this.remarkName + "] 在第" + (_0x5b36b5 + 1) + "个脚本中找到getDuibaToken函数");
          break;
        }
      } catch (_0x3ecd93) {
        isDebug && console.log("[DEBUG] [" + this.remarkName + "] 第" + (_0x5b36b5 + 1) + "个脚本执行失败: " + _0x3ecd93.message);
      }
    }
    !_0x5b0fb7 && typeof global.getDuibaToken === "function" && (_0x36e0cc = global.getDuibaToken, _0x5b0fb7 = true);
    if (!_0x5b0fb7 || typeof _0x36e0cc !== "function") {
      if (isDebug) {
        console.log("[DEBUG] [" + this.remarkName + "] 脚本执行结果汇总:");
        for (let _0x1429e0 = 0; _0x1429e0 < Math.min(_0x186434.length, 10); _0x1429e0++) {
          console.log("[DEBUG] [" + this.remarkName + "] 脚本" + (_0x1429e0 + 1) + "前100字符: " + _0x186434[_0x1429e0].substring(0, 100) + "...");
        }
      }
      throw new Error("getDuibaToken函数未定义");
    }
    const _0x3ccf7c = /var\s+key\s+=\s+'([^']+)';/.exec(_0x36e0cc.toString());
    if (!_0x3ccf7c) {
      throw new Error("无法从getDuibaToken函数中提取key");
    }
    const _0x439404 = _0x3ccf7c[1];
    isDebug && console.log("[DEBUG] [" + this.remarkName + "] 成功提取key: " + _0x439404);
    return _0x439404;
  }
  async callGetTokenApi() {
    isDebug && console.log("[DEBUG] [" + this.remarkName + "] 调用getToken接口...");
    const _0x465d1b = Date.now();
    const _0x3f4d4b = {
      hostname: "86019-activity.dexfu.cn",
      port: 443,
      path: "/chw/ctoken/getToken",
      method: "POST",
      protocol: "https:",
      headers: {
        host: "86019-activity.dexfu.cn",
        "content-length": ("timestamp=" + _0x465d1b).length,
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF WindowsWechat(0x63090a13) XWEB/8555",
        "content-type": "application/x-www-form-urlencoded",
        accept: "*/*",
        origin: "https://86019-activity.dexfu.cn",
        "sec-fetch-site": "same-origin",
        "sec-fetch-mode": "cors",
        "sec-fetch-dest": "empty",
        referer: "https://86019-activity.dexfu.cn/sign/component/page?signOperatingId=" + this.signOperatingId,
        "accept-encoding": "gzip, deflate, br",
        "accept-language": "zh-CN,zh;q=0.9",
        cookie: this.duifaCookies
      },
      body: "timestamp=" + _0x465d1b,
      expectJson: true
    };
    try {
      const _0x4eaa3b = await makeRequest(_0x3f4d4b);
      if (!_0x4eaa3b.success) {
        isDebug && console.log("[DEBUG] [" + this.remarkName + "] getToken接口调用失败: " + _0x4eaa3b.statusCode);
        return null;
      }
      isDebug && console.log("[DEBUG] [" + this.remarkName + "] getToken接口调用成功，响应: " + JSON.stringify(_0x4eaa3b.data).substring(0, 200) + "...");
      return _0x4eaa3b.data && _0x4eaa3b.data.success && _0x4eaa3b.data.token ? (isDebug && console.log("[DEBUG] [" + this.remarkName + "] 成功获取token脚本，长度: " + _0x4eaa3b.data.token.length), _0x4eaa3b.data.token) : (isDebug && console.log("[DEBUG] [" + this.remarkName + "] getToken接口响应格式错误: " + JSON.stringify(_0x4eaa3b.data)), null);
    } catch (_0x452939) {
      isDebug && console.log("[DEBUG] [" + this.remarkName + "] getToken接口调用异常: " + _0x452939.message);
      return null;
    }
  }
  async performSignIn() {
    if (isDebug) {
      console.log("[DEBUG] [" + this.remarkName + "] 执行签到...");
    }
    try {
      await this.getDuifaToken();
      isDebug && console.log("[DEBUG] [" + this.remarkName + "] 签到前重新获取token成功: " + this.duifaToken);
    } catch (_0xe8ee0b) {
      console.log("❌ [" + this.remarkName + "] 获取签到token失败: " + _0xe8ee0b.message);
      return false;
    }
    const _0x26f744 = {
      hostname: "86019-activity.dexfu.cn",
      port: 443,
      path: "/sign/component/doSign?_=" + Date.now(),
      method: "POST",
      protocol: "https:",
      headers: {
        host: "86019-activity.dexfu.cn",
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF WindowsWechat(0x63090a13) XWEB/8555",
        "content-type": "application/x-www-form-urlencoded",
        accept: "application/json, text/plain, */*",
        origin: "https://86019-activity.dexfu.cn",
        "sec-fetch-site": "same-origin",
        "sec-fetch-mode": "cors",
        "sec-fetch-dest": "empty",
        referer: "https://86019-activity.dexfu.cn/sign/component/page?signOperatingId=" + this.signOperatingId,
        "accept-encoding": "gzip, deflate, br",
        "accept-language": "zh-CN,zh;q=0.9",
        cookie: this.duifaCookies
      },
      body: "signOperatingId=" + this.signOperatingId + "&token=" + this.duifaToken
    };
    const _0x5530c5 = await makeRequest(_0x26f744);
    if (!_0x5530c5.success) {
      console.log("❌ [" + this.remarkName + "] 签到请求失败: " + _0x5530c5.error);
      return false;
    }
    return _0x5530c5.data.success ? (console.log("✅ [" + this.remarkName + "] 签到成功！"), _0x5530c5.data.data) : (console.log("❌ [" + this.remarkName + "] 签到失败: " + (_0x5530c5.data.desc || "未知错误")), false);
  }
  async querySignResult(_0x5f01f6, _0x121415 = false) {
    if (isDebug) {
      console.log("[DEBUG] [" + this.remarkName + "] 查询签到结果...");
    }
    const _0x423dc1 = {
      hostname: "86019-activity.dexfu.cn",
      port: 443,
      path: "/sign/component/signResult?orderNum=" + _0x5f01f6 + "&_=" + Date.now(),
      method: "GET",
      protocol: "https:",
      headers: {
        host: "86019-activity.dexfu.cn",
        accept: "application/json, text/plain, */*",
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF WindowsWechat(0x63090a13) XWEB/8555",
        "sec-fetch-site": "same-origin",
        "sec-fetch-mode": "cors",
        "sec-fetch-dest": "empty",
        referer: "https://86019-activity.dexfu.cn/sign/component/page?signOperatingId=" + this.signOperatingId,
        "accept-encoding": "gzip, deflate, br",
        "accept-language": "zh-CN,zh;q=0.9",
        cookie: this.duifaCookies
      }
    };
    const _0x54de17 = await makeRequest(_0x423dc1);
    if (_0x54de17.success && _0x54de17.data.success) {
      const _0x479bc7 = _0x54de17.data.data;
      !_0x121415 && isDebug && console.log("[DEBUG] [" + this.remarkName + "] 签到结果: 状态=" + _0x479bc7.signResult + ", 积分=" + _0x479bc7.credits + ", 次数=" + _0x479bc7.times);
      return _0x479bc7;
    } else {
      if (!_0x121415) {
        if (isDebug) {
          console.log("[DEBUG] [" + this.remarkName + "] 查询签到结果失败");
        }
      }
      return null;
    }
  }
  async queryCredits() {
    if (isDebug) {
      console.log("[DEBUG] [" + this.remarkName + "] 查询积分...");
    }
    const _0x2f8253 = {
      hostname: "86019-activity.dexfu.cn",
      port: 443,
      path: "/ctool/getCredits?_=" + Date.now(),
      method: "POST",
      protocol: "https:",
      headers: {
        host: "86019-activity.dexfu.cn",
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF WindowsWechat(0x63090a13) XWEB/8555",
        "content-type": "application/x-www-form-urlencoded",
        accept: "application/json, text/plain, */*",
        origin: "https://86019-activity.dexfu.cn",
        "sec-fetch-site": "same-origin",
        "sec-fetch-mode": "cors",
        "sec-fetch-dest": "empty",
        referer: "https://86019-activity.dexfu.cn/sign/component/page?signOperatingId=" + this.signOperatingId,
        "accept-encoding": "gzip, deflate, br",
        "accept-language": "zh-CN,zh;q=0.9",
        cookie: this.duifaCookies
      },
      body: ""
    };
    const _0x23daa8 = await makeRequest(_0x2f8253);
    if (_0x23daa8.success && _0x23daa8.data.success) {
      const _0x14888e = _0x23daa8.data.data;
      console.log("💰 [" + this.remarkName + "] 当前积分: " + _0x14888e.consumerCredits + " " + _0x14888e.unitName);
      return _0x14888e;
    } else {
      console.log("❌ [" + this.remarkName + "] 查询积分失败");
      return null;
    }
  }
  async checkSignStatus() {
    if (isDebug) {
      console.log("[DEBUG] [" + this.remarkName + "] 检查签到状态...");
    }
    const _0x3cbec2 = {
      hostname: "86019-activity.dexfu.cn",
      port: 443,
      path: "/sign/component/index?signOperatingId=" + this.signOperatingId + "&preview=false&_=" + Date.now(),
      method: "GET",
      protocol: "https:",
      headers: {
        host: "86019-activity.dexfu.cn",
        accept: "application/json, text/plain, */*",
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF WindowsWechat(0x63090a13) XWEB/8555",
        "sec-fetch-site": "same-origin",
        "sec-fetch-mode": "cors",
        "sec-fetch-dest": "empty",
        referer: "https://86019-activity.dexfu.cn/sign/component/page?signOperatingId=" + this.signOperatingId,
        "accept-encoding": "gzip, deflate, br",
        "accept-language": "zh-CN,zh;q=0.9",
        cookie: this.duifaCookies
      }
    };
    const _0x52a26b = await makeRequest(_0x3cbec2);
    if (_0x52a26b.success && _0x52a26b.data.success) {
      return _0x52a26b.data.data.signResult;
    }
    return null;
  }
  async getSignOperatingId() {
    this.signOperatingId = "307439345658377";
    return true;
  }
  async performFullLogin() {
    if (isDebug) {
      console.log("[DEBUG] [" + this.remarkName + "] 执行完整的益禾堂登录流程...");
    }
    const _0x506a20 = await this.getWxCodeAndLogin();
    if (!_0x506a20) {
      if (isDebug) {
        console.log("[DEBUG] [" + this.remarkName + "] 获取授权码失败，跳过");
      }
      return false;
    }
    if (isDebug) {
      console.log("[DEBUG] [" + this.remarkName + "] 开始益禾堂登录流程...");
    }
    if (!(await this.getQmaiInitialToken())) {
      if (isDebug) {
        console.log("[DEBUG] [" + this.remarkName + "] 获取初始token失败");
      }
      return false;
    }
    if (!(await this.getQmaiMobileToken())) {
      if (isDebug) {
        console.log("[DEBUG] [" + this.remarkName + "] 绑定手机号失败");
      }
      return false;
    }
    const _0x3c0ddc = await this.getQmaiRedirectInfo();
    if (!_0x3c0ddc) {
      if (isDebug) {
        console.log("[DEBUG] [" + this.remarkName + "] 获取跳转信息失败");
      }
      return false;
    }
    if (!(await this.getDuifaCookies(_0x3c0ddc))) {
      if (isDebug) {
        console.log("[DEBUG] [" + this.remarkName + "] 获取兑吧cookie失败");
      }
      return false;
    }
    if (!(await this.getSignOperatingId())) {
      if (isDebug) {
        console.log("[DEBUG] [" + this.remarkName + "] 获取签到ID失败");
      }
      return false;
    }
    if (isDebug) {
      console.log("[DEBUG] [" + this.remarkName + "] 益禾堂登录流程完成");
    }
    return true;
  }
  async run() {
    try {
      const _0x1928b1 = await this.performFullLogin();
      if (!_0x1928b1) {
        if (isDebug) {
          console.log("[DEBUG] [" + this.remarkName + "] 完整登录失败，跳过当前账号");
        }
        return;
      }
      if (isDebug) {
        console.log("[DEBUG] [" + this.remarkName + "] 开始执行签到业务逻辑...");
      }
      const _0x5ea28c = await this.checkSignStatus();
      if (_0x5ea28c) {
        console.log("✅ [" + this.remarkName + "] 今日已签到");
      } else {
        const _0x5ada98 = await this.performSignIn();
        _0x5ada98 && (await this.querySignResult(_0x5ada98.orderNum, true));
      }
      await this.queryCredits();
    } catch (_0x435433) {
      console.log("❌ [" + this.remarkName + "] 脚本执行出错：" + _0x435433.message);
      isDebug && console.error(_0x435433);
    }
  }
}
async function main() {
  console.log("🔔 益禾堂自动签到脚本开始执行");
  console.log("🔓 卡密验证已关闭，跳过验证步骤");
  console.log("=".repeat(60) + "\n");
  console.log("🧸 温馨提示：150积分换3元券~求莫名堂写这个 🧸");
  console.log("=".repeat(60) + "\n");
  isDebug && (console.log("[DEBUG] 调试模式已开启"), console.log("[DEBUG] APPID: " + APPID));
  if (!wxidList) {
    console.log("❌ 未设置环境变量 TXX_WXID 或命令行参数 --wxid");
    return;
  }
  const _0x2a356f = cmdWxid ? [cmdWxid] : parseWxidList(wxidList);
  if (_0x2a356f.length === 0) {
    console.log("❌ 没有找到有效的wxid");
    return;
  }
  console.log("📋 共找到 " + _0x2a356f.length + " 个有效账号");
  isDebug && console.log("[DEBUG] 账号列表: " + _0x2a356f.join(", "));
  for (let _0x17a83c = 0; _0x17a83c < _0x2a356f.length; _0x17a83c++) {
    const _0x99fd97 = _0x2a356f[_0x17a83c];
    const _0x4f7c34 = typeof wxcode.getRemarkName === "function" ? wxcode.getRemarkName(_0x99fd97) : _0x99fd97;
    isDebug && console.log("\n[DEBUG] [" + (_0x17a83c + 1) + "/" + _0x2a356f.length + "] 开始处理账号: " + _0x4f7c34 + " (" + _0x99fd97 + ")");
    try {
      const _0x3284a9 = new ScriptTemplate(_0x99fd97);
      await _0x3284a9.run();
      isDebug && console.log("[DEBUG] [" + (_0x17a83c + 1) + "/" + _0x2a356f.length + "] 账号 " + _0x4f7c34 + " 处理完成");
    } catch (_0x4af3ac) {
      console.log("❌ [" + _0x4f7c34 + "] 处理失败: " + _0x4af3ac.message);
      isDebug && console.error(_0x4af3ac);
    }
    isDebug && console.log("─".repeat(60));
    _0x17a83c < _0x2a356f.length - 1 && (await new Promise(_0x12fa33 => setTimeout(_0x12fa33, 5000)));
  }
  console.log("\n🎉 所有账号处理完成！");
  NOTICE_SWITCH && notice && (await sendMsg(notice));
}
let notice = "";
function print(_0x155849, _0x10564d = false) {
  let _0x3321ae = "" + _0x155849;
  console.log(_0x3321ae);
  NOTICE_SWITCH && _0x10564d && (notice += _0x3321ae + "\n");
}
async function sendMsg(_0x478199) {
  try {
    let _0x5f52c6 = "";
    try {
      _0x5f52c6 = require("./sendNotify");
    } catch (_0x299e3d) {
      try {
        _0x5f52c6 = require("../sendNotify");
      } catch (_0x53a2a1) {
        console.log("❌ 未找到sendNotify模块，无法发送通知");
        return;
      }
    }
    await _0x5f52c6.sendNotify(scriptName, _0x478199);
    console.log("📢 通知发送成功");
  } catch (_0x348626) {
    console.log("❌ 通知发送失败: " + _0x348626.message);
  }
}
main().catch(console.error);