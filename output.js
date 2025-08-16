//Sat Aug 16 2025 17:00:23 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
var _0xf55ceb = 9;
const APPID = "wxc8c90950cf4546f6";
_0xf55ceb = "dnefgj".split("").reverse().join("");
const BASE_URL = "https://vip.foxech.com/index.php/api";
const SECRET_KEY = "f05df1ea".split("").reverse().join("");
var _0xf6a0e = 14;
const args = process.argv.slice(2);
_0xf6a0e = 13;
const getArg = name => {
  const index = args.indexOf(`--${name}`);
  return index !== -1 && args[index + 1] ? args[index + 1] : null;
};
var _0xeg5cf = 9;
const cmdWxid = getArg("dixw".split("").reverse().join(""));
_0xeg5cf = "qknpff";
var _0xg883ae;
const isDebug = args.includes("--debug");
_0xg883ae = 2;
const wxidList = cmdWxid || process.env.TXX_WXID || "";
function parseWxidList(wxidString) {
  if (!wxidString) return [];
  return wxidString.split("\n").map(wxid => wxid.trim()).filter(wxid => wxid.length > 0).filter(wxid => !wxid.startsWith("#"));
}
const wxcode = require("./wxcode");
var _0xc8794d = 8;
const fs = require("fs");
_0xc8794d = 7;
var _0x_0x595;
const path = require("path");
_0x_0x595 = 4;
var _0x9932b = 15;
const crypto = require("crypto");
_0x9932b = 15;
var _0x7c98d;
const scriptName = path.basename(__filename, ".js");
_0x7c98d = 9;
const TOKEN_CACHE_FILE = path.join(__dirname, `${scriptName}_tokens.json`);
function generateToken(timestamp, openid = "") {
  var _0x24de = 6;
  const _0x7958f = timestamp + SECRET_KEY + openid;
  _0x24de = 0;
  return crypto.createHash("5dm".split("").reverse().join("")).update(_0x7958f).digest("hex");
}
async function apiRequest(url, data = {}, openid = "") {
  return new Promise((resolve, reject) => {
    var _0x1eb = 15;
    const _0x4_0xg05 = Date.now();
    _0x1eb = 5;
    const _0x1gcg = generateToken(_0x4_0xg05, openid);
    var _0xa415b = 5;
    const _0x2614ea = {
      "timestamp": _0x4_0xg05,
      "token": _0x1gcg,
      "openid": openid,
      "seat_code": "",
      ...data
    };
    _0xa415b = 2;
    const _0xab22e = {
      "url": BASE_URL + url,
      "method": "POST",
      "headers": {
        "Content-Type": "application/json",
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.49(0x18003137) NetType/WIFI Language/zh_CN"
      },
      "body": JSON.stringify(_0x2614ea),
      "timeout": 30000
    };
    if (isDebug) {
      console.log(`[DEBUG] API请求: ${url}`);
      console.log(`[DEBUG] 请求数据:`, _0x2614ea);
    }
    var _0xc8f16e = 13;
    const _0xb201fd = require("request")(_0xab22e, (error, response, body) => {
      if (error) {
        if (isDebug) console.log(`[DEBUG] 请求错误:`, error);
        reject(new Error(`请求失败: ${error.message}`));
        return;
      }
      if (isDebug) {
        console.log(`[DEBUG] 响应状态码: ${response.statusCode}`);
        console.log(`[DEBUG] 响应内容: ${body}`);
      }
      try {
        var _0x5fee;
        const _0xd81ba = JSON.parse(body);
        _0x5fee = 13;
        if (isDebug) {
          console.log(`[DEBUG] API响应:`, _0xd81ba);
        }
        if (_0xd81ba.code === "200") {
          resolve(_0xd81ba);
        } else {
          reject(new Error(_0xd81ba.msg || "请求失败"));
        }
      } catch (e) {
        reject(new Error(`解析响应失败: ${e.message}, 原始响应: ${body}`));
      }
    });
    _0xc8f16e = 2;
    setTimeout(() => {
      if (!_0xb201fd.response) {
        _0xb201fd.abort();
        reject(new Error("时超求请".split("").reverse().join("")));
      }
    }, 30000);
  });
}
class ScriptTemplate {
  constructor(wxid) {
    this.wxid = wxid;
    this.appid = APPID;
    this.isLogin = false;
    this.wxCode = null;
    this.openid = null;
    this.mobileInfo = null;
    this.userProfile = null;
    this.cacheExpireTime = null;
    this.userInfo = null;
  }
  loadTokenCache() {
    try {
      if (fs.existsSync(TOKEN_CACHE_FILE)) {
        var _0x46g52b;
        const cacheData = JSON.parse(fs.readFileSync(TOKEN_CACHE_FILE, "utf8"));
        _0x46g52b = 2;
        var _0xa99ec;
        const userCache = cacheData[this.wxid];
        _0xa99ec = 11;
        if (userCache && userCache.cacheExpireTime > Date.now()) {
          this.openid = userCache.openid;
          this.cacheExpireTime = userCache.cacheExpireTime;
          if (isDebug) {
            console.log(`[DEBUG] 从缓存加载openid成功`);
            console.log(`[DEBUG] OpenID: ${this.openid}`);
            console.log(`[DEBUG] 缓存过期时间: ${new Date(this.cacheExpireTime).toLocaleString()}`);
          }
          return true;
        } else if (userCache) {
          if (isDebug) console.log(`[DEBUG] 缓存数据已过期`);
        }
      }
    } catch (error) {
      if (isDebug) console.log(`[DEBUG] 读取缓存失败: ${error.message}`);
    }
    return false;
  }
  saveTokenCache() {
    try {
      var _0xb768fc = 4;
      let cacheData = {};
      _0xb768fc = "gccdfk";
      if (fs.existsSync(TOKEN_CACHE_FILE)) {
        try {
          cacheData = JSON.parse(fs.readFileSync(TOKEN_CACHE_FILE, "utf8"));
        } catch (e) {
          if (isDebug) console.log(`[DEBUG] 现有缓存文件格式错误，将重新创建`);
        }
      }
      const expireTime = Date.now() + 31536000000;
      cacheData[this.wxid] = {
        "openid": this.openid,
        "cacheExpireTime": expireTime,
        "updateTime": Date.now()
      };
      this.cacheExpireTime = expireTime;
      fs.writeFileSync(TOKEN_CACHE_FILE, JSON.stringify(cacheData, null, 2), "utf8");
      if (isDebug) {
        console.log(`[DEBUG] 缓存保存成功`);
        console.log(`[DEBUG] 缓存文件: ${TOKEN_CACHE_FILE}`);
        console.log(`[DEBUG] 过期时间: ${new Date(expireTime).toLocaleString()}`);
      }
    } catch (error) {
      console.log(`❌ 保存缓存失败: ${error.message}`);
    }
  }
  async getWxCodeAndLogin() {
    if (isDebug) console.log(`[DEBUG] 开始获取微信授权码...`);
    var _0x4ee;
    const codeResult = await wxcode.getWxCode(this.wxid, this.appid);
    _0x4ee = 9;
    if (!codeResult.success) {
      console.log(`获取授权码失败：${codeResult.error}`);
      return false;
    }
    this.wxCode = codeResult.code;
    if (isDebug) console.log(`[DEBUG] 获取授权码成功：${this.wxCode}`);
    this.isLogin = true;
    return true;
  }
  async getUserOpenid() {
    const result = await wxcode.getOpenid(this.wxid, this.appid);
    if (result.success) {
      this.openid = result.openid;
      if (isDebug) console.log(`[DEBUG] 获取openid成功：${this.openid}`);
      return this.openid;
    } else {
      console.log(`获取openid失败：${result.error}`);
      return null;
    }
  }
  async getMobileInfo() {
    const result = await wxcode.getmobile(this.wxid, this.appid);
    if (result.success) {
      this.mobileInfo = result;
      if (isDebug) console.log(`[DEBUG] 获取手机号加密数据成功`);
      return this.mobileInfo;
    } else {
      console.log(`获取手机号失败：${result.error}`);
      return null;
    }
  }
  async getUserProfile() {
    var _0x888a = 15;
    const cloudFunctionData = JSON.stringify({
      "api_name": "webapi_getuserprofile",
      "data": {
        "app_version": 68,
        "desc": "用于获取您的个人信息",
        "lang": "en",
        "version": "3.7.12"
      },
      "env": 1,
      "operate_directly": false,
      "show_confirm": true,
      "tid": Date.now() * 1000000 + Math.floor(Math.random() * 1000000),
      "with_credentials": true
    });
    _0x888a = 13;
    var _0x6d75a;
    const result = await wxcode.getUserInfo(this.wxid, this.appid, cloudFunctionData);
    _0x6d75a = 0;
    if (result.success) {
      if (isDebug) console.log(`[DEBUG] 获取用户个人信息成功`);
      try {
        var _0xe8dg;
        const userInfo = JSON.parse(result.rawData.data);
        _0xe8dg = 9;
        if (isDebug) {
          console.log(`[DEBUG] 用户信息:`, {
            "nickName": userInfo.nickName,
            "gender": userInfo.gender,
            "avatarUrl": userInfo.avatarUrl,
            "city": userInfo.city,
            "province": userInfo.province,
            "country": userInfo.country
          });
        }
        this.userProfile = {
          "success": true,
          "userInfo": userInfo,
          "signature": result.signature,
          "encryptedData": result.encryptedData,
          "iv": result.iv
        };
        return this.userProfile;
      } catch (e) {
        console.log(`解析用户信息失败：${e.message}`);
        return {
          "success": false,
          "error": e.message
        };
      }
    } else {
      console.log(`获取用户个人信息失败：${result.error}`);
      return null;
    }
  }
  async loginToRobam() {
    try {
      if (isDebug) console.log(`[DEBUG] 开始老板微商城登录...`);
      var _0x2_0x4f2 = 1;
      const loginData = {
        "code": this.wxCode,
        "invite_code": "",
        "sinvite_code": ""
      };
      _0x2_0x4f2 = 6;
      const result = await apiRequest("/common/get_openid", loginData);
      if (result.data && result.data.userinfo) {
        this.userInfo = result.data.userinfo;
        this.openid = result.data.userinfo.openid;
        if (isDebug) {
          console.log(`[DEBUG] 登录成功，用户信息:`, {
            "openid": this.openid,
            "nickname": this.userInfo.nickname,
            "mobile": this.userInfo.mobile,
            "score": this.userInfo.total_score,
            "is_vip": this.userInfo.is_vip
          });
        }
        console.log(`✅ 登录成功！用户：${this.userInfo.nickname}，积分：${this.userInfo.total_score}`);
        return true;
      } else {
        console.log(`❌ 登录失败：未获取到用户信息`);
        return false;
      }
    } catch (error) {
      console.log(`❌ 登录失败：${error.message}`);
      return false;
    }
  }
  async dailySign() {
    try {
      if (!this.openid) {
        console.log(`❌ 签到失败：未登录`);
        return false;
      }
      if (isDebug) console.log(`[DEBUG] 开始签到...`);
      const result = await apiRequest("/member/user_sign", {}, this.openid);
      if (result.data) {
        const {
          "score": score,
          "percent": percent
        } = result.data;
        console.log(`✅ 签到成功！获得积分：${score}，签到进度：${percent}%`);
        return true;
      } else {
        console.log(`❌ 签到失败：未获取到签到结果`);
        return false;
      }
    } catch (error) {
      if (error.message.includes("已签到")) {
        console.log(`ℹ️ 今日已签到`);
        return true;
      } else {
        console.log(`❌ 签到失败：${error.message}`);
        return false;
      }
    }
  }
  async getTaskList() {
    try {
      if (isDebug) console.log(`[DEBUG] 获取任务列表...`);
      var _0x4966c = 0;
      const result = await apiRequest("/member/get_member_score_mission_list", {
        "page": 1,
        "limit": 10000
      }, this.openid);
      _0x4966c = 18;
      if (result.data && result.data.list) {
        if (isDebug) {
          console.log(`[DEBUG] 获取到${result.data.list.length}个任务`);
        }
        return result.data.list;
      } else {
        console.log(`❌ 获取任务列表失败`);
        return [];
      }
    } catch (error) {
      console.log(`❌ 获取任务列表失败：${error.message}`);
      return [];
    }
  }
  async browseProducts() {
    try {
      if (isDebug) console.log(`[DEBUG] 开始浏览商品任务...`);
      await new Promise(resolve => setTimeout(resolve, 2000));
      var _0x8ea = 14;
      const result = await apiRequest("tsil_sdoog_teg/nommoc/".split("").reverse().join(""), {
        "page": 1,
        "limit": 10,
        "cid": "",
        "keyword": ""
      }, this.openid);
      _0x8ea = 7;
      if (result.data && result.data.list && result.data.list.length > 0) {
        var _0xf45ccb = 13;
        const products = result.data.list.slice(0, 3);
        _0xf45ccb = 11;
        for (let i = 0; i < products.length; i++) {
          var _0x5b5b = 5;
          const product = products[i];
          _0x5b5b = 16;
          if (isDebug) console.log(`[DEBUG] 浏览商品${i + 1}: ${product.title}`);
          await apiRequest("/common/get_goods_detail", {
            "id": product.id
          }, this.openid);
          await new Promise(resolve => setTimeout(resolve, 2000));
        }
        console.log(`✅ 浏览商品任务完成！已浏览${products.length}个商品`);
        return true;
      } else {
        console.log(`❌ 浏览商品任务失败：未获取到商品列表`);
        return false;
      }
    } catch (error) {
      console.log(`❌ 浏览商品任务失败：${error.message}`);
      return false;
    }
  }
  async browseSeckill() {
    try {
      if (isDebug) console.log(`[DEBUG] 开始逛秒杀活动任务...`);
      await new Promise(resolve => setTimeout(resolve, 2000));
      var _0x942cb;
      const result = await apiRequest("/common/get_ms_goods_list", {
        "page": 1,
        "limit": 10
      }, this.openid);
      _0x942cb = 8;
      if (result.data && result.data.list) {
        if (isDebug) console.log(`[DEBUG] 获取到${result.data.list.length}个秒杀商品`);
        const seckillGoods = result.data.list.slice(0, 3);
        for (let i = 0; i < seckillGoods.length; i++) {
          const goods = seckillGoods[i];
          if (isDebug) console.log(`[DEBUG] 浏览秒杀商品${i + 1}: ${goods.title}`);
          await new Promise(resolve => setTimeout(resolve, 1500));
        }
        console.log(`✅ 逛秒杀活动任务完成！浏览了${seckillGoods.length}个秒杀商品`);
        return true;
      } else {
        console.log(`✅ 逛秒杀活动任务完成！（无秒杀商品）`);
        return true;
      }
    } catch (error) {
      console.log(`❌ 逛秒杀活动任务失败：${error.message}`);
      return false;
    }
  }
  async readArticles() {
    try {
      if (isDebug) console.log(`[DEBUG] 开始阅读文章任务...`);
      await new Promise(resolve => setTimeout(resolve, 2000));
      var _0xff885c;
      const result = await apiRequest("tsil_swen_teg/nommoc/".split("").reverse().join(""), {
        "page": 1,
        "limit": 10,
        "cid": ""
      }, this.openid);
      _0xff885c = 1;
      if (result.data && result.data.list && result.data.list.length > 0) {
        var _0xc38d5a = 9;
        const articles = result.data.list.slice(0, 3);
        _0xc38d5a = 7;
        var _0xcg453b;
        let readCount = 0;
        _0xcg453b = 7;
        for (let i = 0; i < articles.length; i++) {
          var _0xd917dd;
          const article = articles[i];
          _0xd917dd = "ncedad".split("").reverse().join("");
          if (isDebug) console.log(`[DEBUG] 阅读文章${i + 1}: ${article.title}`);
          try {
            await apiRequest("liated_swen_teg/nommoc/".split("").reverse().join(""), {
              "id": article.id
            }, this.openid);
            await new Promise(resolve => setTimeout(resolve, 2000));
            await apiRequest("/member/read_article", {
              "id": article.id,
              "article_num": i + 1
            }, this.openid);
            readCount++;
            if (isDebug) console.log(`[DEBUG] 文章${i + 1}阅读完成，获得积分`);
            await new Promise(resolve => setTimeout(resolve, 2000));
          } catch (error) {
            if (isDebug) console.log(`[DEBUG] 文章${i + 1}阅读失败: ${error.message}`);
            continue;
          }
        }
        console.log(`✅ 阅读文章任务完成！已阅读${readCount}篇文章，获得${readCount > 0 ? "5" : "0"}积分`);
        return readCount > 0;
      } else {
        console.log(`❌ 阅读文章任务失败：未获取到文章列表`);
        return false;
      }
    } catch (error) {
      console.log(`❌ 阅读文章任务失败：${error.message}`);
      return false;
    }
  }
  async executeDailyTasks() {
    try {
      console.log(`\n📋 开始执行每日任务...`);
      const taskList = await this.getTaskList();
      if (taskList.length === 0) {
        console.log(`❌ 未获取到任务列表，跳过任务执行`);
        return;
      }
      const dailyTasks = taskList.filter(task => task.type === 2 && task.is_over === 0);
      if (dailyTasks.length === 0) {
        console.log(`✅ 所有每日任务已完成！`);
        return;
      }
      console.log(`📝 发现${dailyTasks.length}个未完成的每日任务`);
      let completedCount = 0;
      let totalScore = 0;
      for (const task of dailyTasks) {
        console.log(`\n🎯 执行任务：${task.title} (${task.score}积分)`);
        var _0xd2eeb;
        let success = false;
        _0xd2eeb = 1;
        switch (task.id) {
          case 7:
            success = await this.browseProducts();
            break;
          case 8:
            success = await this.browseSeckill();
            break;
          case 12:
            success = await this.readArticles();
            break;
          case 16:
            success = await this.dailySign();
            break;
          default:
            console.log(`⚠️ 暂不支持任务ID ${task.id}: ${task.title}`);
            continue;
        }
        if (success) {
          completedCount++;
          totalScore += parseInt(task.score);
        }
        await new Promise(resolve => setTimeout(resolve, 3000));
      }
      console.log(`\n🎉 每日任务执行完成！`);
      console.log(`✅ 完成任务数：${completedCount}/${dailyTasks.length}`);
      console.log(`🏆 预计获得积分：${totalScore}分`);
    } catch (error) {
      console.log(`❌ 执行每日任务失败：${error.message}`);
    }
  }
  async validateCache() {
    if (!this.isLogin || !this.wxCode) return false;
    if (isDebug) console.log(`[DEBUG] 验证缓存数据有效性...`);
    try {
      const testResult = await wxcode.getOpenid(this.wxid, this.appid);
      if (testResult.success) {
        if (isDebug) console.log(`[DEBUG] 缓存数据验证通过`);
        return true;
      }
    } catch (error) {
      if (isDebug) console.log(`[DEBUG] 缓存数据验证失败: ${error.message}`);
    }
    if (isDebug) console.log(`[DEBUG] 缓存数据已失效`);
    this.isLogin = false;
    return false;
  }
  async performFullLogin() {
    if (isDebug) console.log(`[DEBUG] 执行完整的数据获取流程...`);
    var _0x3_0x477;
    const loginSuccess = await this.getWxCodeAndLogin();
    _0x3_0x477 = 12;
    if (!loginSuccess) {
      console.log(`[${this.wxid}] 获取授权码失败，跳过`);
      return false;
    }
    this.saveTokenCache();
    return true;
  }
  async run() {
    try {
      const cacheLoaded = this.loadTokenCache();
      if (cacheLoaded) {
        console.log(`📦 使用缓存的数据`);
        var _0xc5eb9c = 3;
        const cacheValid = await this.validateCache();
        _0xc5eb9c = 11;
        if (!cacheValid) {
          console.log(`⚠️ 缓存的数据已失效，重新获取...`);
          const fullLoginSuccess = await this.performFullLogin();
          if (!fullLoginSuccess) {
            console.log(`[${this.wxid}] 完整登录失败，跳过`);
            return;
          }
        } else {
          console.log(`✅ 缓存的数据有效`);
        }
      } else {
        const fullLoginSuccess = await this.performFullLogin();
        if (!fullLoginSuccess) {
          print(`[${this.wxid}] 完整登录失败，跳过`, true);
          return;
        }
      }
      console.log(`\n🏪 开始老板微商城任务...`);
      if (!this.openid) {
        console.log(`📱 开始登录老板微商城...`);
        const loginSuccess = await this.loginToRobam();
        if (!loginSuccess) {
          console.log(`❌ 登录失败，跳过后续任务`);
          return;
        }
        this.saveTokenCache();
      } else {
        console.log(`✅ 使用缓存的openid: ${this.openid}`);
      }
      await this.executeDailyTasks();
      console.log(`\n🎉 老板微商城任务完成！`);
    } catch (error) {
      console.log(`[${this.wxid}] 脚本执行出错：${error.message}`);
      if (isDebug) {
        console.error(error);
      }
    }
  }
}
async function main() {
  console.log(`🔔 脚本开始执行`);
  if (isDebug) {
    console.log(`[DEBUG] 调试模式已开启`);
    console.log(`[DEBUG] APPID: ${APPID}`);
  }
  if (!wxidList) {
    console.log(`❌ 未设置环境变量 TXX_WXID 或命令行参数 --wxid`);
    return;
  }
  const _0x4b291f = cmdWxid ? [cmdWxid] : parseWxidList(wxidList);
  if (_0x4b291f.length === 0) {
    console.log(`❌ 没有找到有效的wxid`);
    return;
  }
  console.log(`📋 共找到 ${_0x4b291f.length} 个有效账号`);
  if (isDebug) {
    console.log(`[DEBUG] 账号列表: ${_0x4b291f.join(" ,".split("").reverse().join(""))}`);
  }
  for (let i = 0; i < _0x4b291f.length; i++) {
    const _0x35c7c = _0x4b291f[i];
    console.log(`\n🚀 [${i + 1}/${_0x4b291f.length}] 开始处理账号: ${_0x35c7c}`);
    try {
      var _0x48c;
      const _0xcc19fc = new ScriptTemplate(_0x35c7c);
      _0x48c = 9;
      await _0xcc19fc.run();
      console.log(`✅ [${i + 1}/${_0x4b291f.length}] 账号 ${_0x35c7c} 处理完成`);
    } catch (error) {
      console.log(`❌ [${i + 1}/${_0x4b291f.length}] 账号 ${_0x35c7c} 处理失败: ${error.message}`);
      if (isDebug) {
        console.error(error);
      }
    }
    console.log("─".repeat(60));
    if (i < _0x4b291f.length - 1) {
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
  }
  console.log(`\n🎉 所有账号处理完成！`);
  if (NOTICE_SWITCH && notice) {
    await sendMsg(notice);
  }
}
let notice = "";
function print(msg, is_notice = false) {
  let _0x0bc = `${msg}`;
  console.log(_0x0bc);
  if (NOTICE_SWITCH && is_notice) {
    notice += `${_0x0bc}\n`;
  }
}
async function sendMsg(message) {
  try {
    var _0xb3920b = 13;
    let _0x93g4d = "";
    _0xb3920b = "lkkhil";
    try {
      _0x93g4d = require("./sendNotify");
    } catch (e) {
      try {
        _0x93g4d = require("../sendNotify");
      } catch (e2) {
        console.log("❌ 未找到sendNotify模块，无法发送通知");
        return;
      }
    }
    await _0x93g4d.sendNotify(scriptName, message);
    console.log("功成送发知通 \uDCE2\uD83D".split("").reverse().join(""));
  } catch (error) {
    console.log(`❌ 通知发送失败: ${error.message}`);
  }
}
main().catch(console.error);