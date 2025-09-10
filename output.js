//Wed Sep 10 2025 14:21:22 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
const NOTICE_SWITCH = 1,
  APPID = "wxff438d3c60c63fb6",
  args = process.argv.slice(2),
  getArg = _0x330615 => {
    const _0x5aba75 = args.indexOf("--" + _0x330615);
    return _0x5aba75 !== -1 && args[_0x5aba75 + 1] ? args[_0x5aba75 + 1] : null;
  },
  cmdWxid = getArg("wxid"),
  isDebug = args.includes("--debug"),
  wxidList = cmdWxid || process.env.TXX_WXID || "";
function parseWxidList(_0xb790e5) {
  if (!_0xb790e5) return [];
  return _0xb790e5.split(/[,\n]/).map(_0x38c5dd => _0x38c5dd.trim()).filter(_0x1c6151 => _0x1c6151.length > 0).filter(_0x1a43be => !_0x1a43be.startsWith("#"));
}
const wxcode = require("./wxcode"),
  fs = require("fs"),
  path = require("path"),
  request = require("request"),
  vm = require("vm"),
  scriptName = path.basename(__filename, ".js"),
  TOKEN_CACHE_FILE = path.join(__dirname, scriptName + "_tokens.json");
class SkyworthSignin {
  constructor(_0x4d7886) {
    this.wxid = _0x4d7886;
    this.appid = APPID;
    this.isLogin = false;
    this.wxCode = null;
    this.openid = null;
    this.mobileInfo = null;
    this.userProfile = null;
    this.cacheExpireTime = null;
    this.skyworthConfig = {
      "duibaHost": "74367-1-activity.m.dexfu.cn",
      "signOperatingId": 303855131763271,
      "appKey": "4KXh6ZM4FM8JuSBdanaBi61wK9w7",
      "appId": 74367
    };
    this.credentials = {
      "jwtToken": null,
      "userCode": null,
      "duibaToken": null,
      "tokenTimestamp": null,
      "cookies": {},
      "alternativeTokens": []
    };
  }
  ["loadTokenCache"]() {
    try {
      if (fs.existsSync(TOKEN_CACHE_FILE)) {
        {
          const _0x35db78 = JSON.parse(fs.readFileSync(TOKEN_CACHE_FILE, "utf8")),
            _0x5f5db8 = _0x35db78[this.wxid];
          if (_0x5f5db8 && _0x5f5db8.cacheExpireTime > Date.now()) return this.openid = _0x5f5db8.openid, this.mobileInfo = _0x5f5db8.mobileInfo, this.userProfile = _0x5f5db8.userProfile, this.cacheExpireTime = _0x5f5db8.cacheExpireTime, this.isLogin = true, _0x5f5db8.credentials && (this.credentials = _0x5f5db8.credentials), isDebug && (console.log("[DEBUG] 从缓存加载数据成功"), console.log("[DEBUG] OpenID: " + this.openid), console.log("[DEBUG] JWT Token: " + (this.credentials.jwtToken ? "已缓存" : "未缓存")), console.log("[DEBUG] 缓存过期时间: " + new Date(this.cacheExpireTime).toLocaleString())), true;else {
            if (_0x5f5db8) {
              if (isDebug) console.log("[DEBUG] 缓存数据已过期");
            }
          }
        }
      }
    } catch (_0xc26fc1) {
      if (isDebug) console.log("[DEBUG] 读取缓存失败: " + _0xc26fc1.message);
    }
    return false;
  }
  ["saveTokenCache"]() {
    try {
      let _0xe452e = {};
      if (fs.existsSync(TOKEN_CACHE_FILE)) try {
        _0xe452e = JSON.parse(fs.readFileSync(TOKEN_CACHE_FILE, "utf8"));
      } catch (_0x2df48e) {
        {
          if (isDebug) console.log("[DEBUG] 现有缓存文件格式错误，将重新创建");
        }
      }
      const _0x436043 = Date.now() + 7200000;
      _0xe452e[this.wxid] = {
        "openid": this.openid,
        "mobileInfo": this.mobileInfo,
        "userProfile": this.userProfile,
        "credentials": this.credentials,
        "cacheExpireTime": _0x436043,
        "updateTime": Date.now()
      };
      this.cacheExpireTime = _0x436043;
      fs.writeFileSync(TOKEN_CACHE_FILE, JSON.stringify(_0xe452e, null, 2), "utf8");
      isDebug && (console.log("[DEBUG] 缓存保存成功"), console.log("[DEBUG] 缓存文件: " + TOKEN_CACHE_FILE), console.log("[DEBUG] 过期时间: " + new Date(_0x436043).toLocaleString()));
    } catch (_0x307256) {
      console.log("❌ 保存缓存失败: " + _0x307256.message);
    }
  }
  async ["getWxCodeAndLogin"]() {
    if (isDebug) console.log("[DEBUG] 开始获取微信授权码...");
    const _0x356ad1 = await wxcode.getWxCode(this.wxid, this.appid);
    if (!_0x356ad1.success) return console.log("获取授权码失败：" + _0x356ad1.error), false;
    this.wxCode = _0x356ad1.code;
    if (isDebug) console.log("[DEBUG] 获取授权码成功：" + this.wxCode);
    this.isLogin = true;
    return true;
  }
  async ["getUserOpenid"]() {
    const _0x3348d9 = await wxcode.getOpenid(this.wxid, this.appid);
    if (_0x3348d9.success) {
      {
        this.openid = _0x3348d9.openid;
        if (isDebug) console.log("[DEBUG] 获取openid成功：" + this.openid);
        return this.openid;
      }
    } else return console.log("获取openid失败：" + _0x3348d9.error), null;
  }
  async ["getMobileInfo"]() {
    const _0x2838d8 = await wxcode.getmobile(this.wxid, this.appid);
    if (_0x2838d8.success) {
      this.mobileInfo = _0x2838d8;
      if (isDebug) console.log("[DEBUG] 获取手机号加密数据成功");
      return this.mobileInfo;
    } else return console.log("获取手机号失败：" + _0x2838d8.error), null;
  }
  async ["getUserProfile"]() {
    const _0x3eef85 = JSON.stringify({
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
      }),
      _0x5238ea = await wxcode.getUserInfo(this.wxid, this.appid, _0x3eef85);
    if (_0x5238ea.success) {
      if (isDebug) console.log("[DEBUG] 获取用户个人信息成功");
      try {
        {
          const _0xd98b90 = JSON.parse(_0x5238ea.rawData.data);
          isDebug && console.log("[DEBUG] 用户信息:", {
            "nickName": _0xd98b90.nickName,
            "gender": _0xd98b90.gender,
            "avatarUrl": _0xd98b90.avatarUrl,
            "city": _0xd98b90.city,
            "province": _0xd98b90.province,
            "country": _0xd98b90.country
          });
          this.userProfile = {
            "success": true,
            "userInfo": _0xd98b90,
            "signature": _0x5238ea.signature,
            "encryptedData": _0x5238ea.encryptedData,
            "iv": _0x5238ea.iv
          };
          return this.userProfile;
        }
      } catch (_0x318437) {
        console.log("解析用户信息失败：" + _0x318437.message);
        return {
          "success": false,
          "error": _0x318437.message
        };
      }
    } else {
      console.log("获取用户个人信息失败：" + _0x5238ea.error);
      return null;
    }
  }
  async ["skyworthLogin"]() {
    if (isDebug) console.log("[DEBUG] 开始创维会员中心登录...");
    try {
      if (isDebug) console.log("[DEBUG] 第一步：获取用户信息");
      const _0x2e65ac = "https://uc-api.skyallhere.com/miniprogram/api/v1/get-user",
        _0xf664fa = {
          "Host": "uc-api.skyallhere.com",
          "Connection": "keep-alive",
          "App-Path": "/pages-user/user-score/user-score",
          "Authorization": this.credentials.jwtToken || "",
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF WindowsWechat(0x63090c37)XWEB/14315",
          "Content-Type": "application/json",
          "App-System": "Windows 10 x64",
          "xweb_xhr": "1",
          "App-Model": "microsoft",
          "App-Sdkversion": "3.9.0",
          "App-Version": "3.9.12",
          "Accept": "*/*",
          "Sec-Fetch-Site": "cross-site",
          "Sec-Fetch-Mode": "cors",
          "Sec-Fetch-Dest": "empty",
          "Referer": "https://servicewechat.com/wxff438d3c60c63fb6/342/page-frame.html",
          "Accept-Encoding": "gzip, deflate, br",
          "Accept-Language": "zh-CN,zh;q=0.9"
        },
        _0x293539 = await new Promise((_0x4889e6, _0x2adbb9) => {
          {
            const _0x5aa635 = {
              "method": "GET",
              "url": _0x2e65ac,
              "headers": _0xf664fa,
              "gzip": true,
              "timeout": 30000
            };
            request(_0x5aa635, (_0x2e01c5, _0xa1b6c7, _0x2d8fea) => {
              if (_0x2e01c5) {
                {
                  _0x2adbb9(_0x2e01c5);
                  return;
                }
              }
              try {
                const _0x593179 = JSON.parse(_0x2d8fea);
                _0x4889e6(_0x593179);
              } catch (_0x33f74d) {
                _0x2adbb9(_0x33f74d);
              }
            });
          }
        });
      if (_0x293539.code !== 0) return console.log("❌ 获取用户信息失败: " + _0x293539.msg), null;
      const _0x7a675e = _0x293539.data.baseInfo;
      this.credentials.userCode = _0x7a675e.inviteTag;
      if (isDebug) {
        console.log("[DEBUG] 用户信息获取成功:");
        console.log("[DEBUG] 昵称: " + _0x7a675e.nickName);
        console.log("[DEBUG] 积分: " + _0x7a675e.userScore);
        console.log("[DEBUG] 用户码: " + _0x7a675e.inviteTag);
      }
      return _0x7a675e;
    } catch (_0x765d6) {
      console.log("❌ 创维会员中心登录失败: " + _0x765d6.message);
      if (isDebug) console.log("[DEBUG] 错误详情:", _0x765d6);
      return null;
    }
  }
  async ["getAutoLoginUrl"]() {
    if (isDebug) console.log("[DEBUG] 第二步：获取自动登录URL");
    try {
      const _0x51c7af = "https://uc-api.skyallhere.com/miniprogram/tp/duiba-nologin",
        _0x3b9443 = "https://" + this.skyworthConfig.duibaHost + "/sign/component/page?signOperatingId=" + this.skyworthConfig.signOperatingId,
        _0x426faf = new URLSearchParams({
          "dbredirect": _0x3b9443
        }),
        _0x3f55a8 = {
          "Host": "uc-api.skyallhere.com",
          "Connection": "keep-alive",
          "App-Path": "/pages/user/user",
          "Authorization": this.credentials.jwtToken,
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF WindowsWechat(0x63090c37)XWEB/14315",
          "Content-Type": "application/json",
          "App-System": "Windows 10 x64",
          "xweb_xhr": "1",
          "App-Model": "microsoft",
          "App-Sdkversion": "3.9.0",
          "App-Version": "3.9.12",
          "Accept": "*/*",
          "Sec-Fetch-Site": "cross-site",
          "Sec-Fetch-Mode": "cors",
          "Sec-Fetch-Dest": "empty",
          "Referer": "https://servicewechat.com/wxff438d3c60c63fb6/342/page-frame.html",
          "Accept-Encoding": "gzip, deflate, br",
          "Accept-Language": "zh-CN,zh;q=0.9"
        },
        _0x2efdf2 = await new Promise((_0x5e15bd, _0x5c51c5) => {
          {
            const _0x1ef801 = {
              "method": "GET",
              "url": _0x51c7af + "?" + _0x426faf.toString(),
              "headers": _0x3f55a8,
              "gzip": true,
              "timeout": 30000
            };
            isDebug && console.log("[DEBUG] 获取自动登录URL请求: " + _0x1ef801.url);
            request(_0x1ef801, (_0xa14e3d, _0x45b1e5, _0x1cb316) => {
              {
                if (_0xa14e3d) {
                  {
                    _0x5c51c5(_0xa14e3d);
                    return;
                  }
                }
                try {
                  const _0x2d42ed = JSON.parse(_0x1cb316);
                  _0x5e15bd(_0x2d42ed);
                } catch (_0x3946bb) {
                  _0x5c51c5(_0x3946bb);
                }
              }
            });
          }
        });
      if (_0x2efdf2.code !== 0) return console.log("❌ 获取自动登录URL失败: " + _0x2efdf2.msg), null;
      const _0xf18581 = _0x2efdf2.data;
      if (isDebug) console.log("[DEBUG] 获取到自动登录URL: " + _0xf18581);
      return _0xf18581;
    } catch (_0x5d1be8) {
      console.log("❌ 获取自动登录URL失败: " + _0x5d1be8.message);
      if (isDebug) console.log("[DEBUG] 错误详情:", _0x5d1be8);
      return null;
    }
  }
  async ["autoLogin"]() {
    if (isDebug) console.log("[DEBUG] 第三步：自动登录获取Cookie");
    try {
      {
        const _0x27e0aa = await this.getAutoLoginUrl();
        if (!_0x27e0aa) return console.log("❌ 获取自动登录URL失败"), false;
        const _0x132f82 = await new Promise((_0x5816a1, _0x3919c5) => {
          {
            const _0x177ddb = {
              "method": "GET",
              "url": _0x27e0aa,
              "headers": {
                "Upgrade-Insecure-Requests": "1",
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF WindowsWechat(0x63090c37)XWEB/14315",
                "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/wxpic,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
                "Sec-Fetch-Site": "none",
                "Sec-Fetch-Mode": "navigate",
                "Sec-Fetch-User": "?1",
                "Sec-Fetch-Dest": "document",
                "Accept-Encoding": "gzip, deflate, br",
                "Accept-Language": "zh-CN,zh;q=0.9",
                "Priority": "u=0, i"
              },
              "followRedirect": false,
              "gzip": true,
              "timeout": 30000
            };
            isDebug && console.log("[DEBUG] 自动登录请求URL: " + _0x27e0aa);
            request(_0x177ddb, (_0x18433d, _0x3fe231, _0x22dcfe) => {
              {
                if (_0x18433d) {
                  _0x3919c5(_0x18433d);
                  return;
                }
                if (isDebug) {
                  {
                    console.log("[DEBUG] 自动登录响应状态码: " + _0x3fe231.statusCode);
                    console.log("[DEBUG] 自动登录响应头:", Object.keys(_0x3fe231.headers));
                    if (_0x3fe231.headers["set-cookie"]) {
                      console.log("[DEBUG] Set-Cookie数量: " + _0x3fe231.headers["set-cookie"].length);
                    }
                  }
                }
                _0x5816a1({
                  "response": _0x3fe231,
                  "body": _0x22dcfe
                });
              }
            });
          }
        });
        if (_0x132f82.response.statusCode !== 302) return console.log("❌ 自动登录失败，期望302重定向，实际状态码: " + _0x132f82.response.statusCode), isDebug && console.log("[DEBUG] 响应体:", _0x132f82.body), false;
        if (_0x132f82.response.headers["set-cookie"]) {
          const _0x32f789 = _0x132f82.response.headers["set-cookie"];
          for (const _0x274265 of _0x32f789) {
            const [_0x5552ba] = _0x274265.split(";"),
              [_0x574cff, _0x230d23] = _0x5552ba.split("=");
            if (_0x574cff && _0x230d23) {
              this.credentials.cookies[_0x574cff] = _0x230d23;
            }
          }
          if (isDebug) {
            console.log("[DEBUG] 自动登录成功，获取到Cookie:");
            console.log("[DEBUG] wdata4: " + (this.credentials.cookies.wdata4 ? "已获取" : "未获取"));
            console.log("[DEBUG] tokenId: " + (this.credentials.cookies.tokenId ? "已获取" : "未获取"));
            console.log("[DEBUG] wdata3: " + (this.credentials.cookies.wdata3 ? "已获取" : "未获取"));
            console.log("[DEBUG] _ac: " + (this.credentials.cookies._ac ? "已获取" : "未获取"));
            console.log("[DEBUG] w_ts: " + (this.credentials.cookies.w_ts ? "已获取" : "未获取"));
            console.log("[DEBUG] 总共获取Cookie数量: " + Object.keys(this.credentials.cookies).length);
          }
          return this.credentials.cookies.wdata4 && this.credentials.cookies.tokenId ? true : (console.log("❌ 自动登录失败，未获取到关键Cookie"), isDebug && console.log("[DEBUG] 所有Cookie:", Object.keys(this.credentials.cookies)), false);
        } else return console.log("❌ 自动登录失败，302响应中没有set-cookie头"), isDebug && console.log("[DEBUG] 响应头:", Object.keys(_0x132f82.response.headers)), false;
      }
    } catch (_0x3608dc) {
      {
        console.log("❌ 自动登录失败: " + _0x3608dc.message);
        if (isDebug) console.log("[DEBUG] 错误详情:", _0x3608dc);
        return false;
      }
    }
  }
  async ["getSignIndex"]() {
    if (isDebug) console.log("[DEBUG] 第2.5步：获取签到状态和权限验证");
    try {
      {
        const _0x2dc84b = Date.now(),
          _0x316757 = "https://" + this.skyworthConfig.duibaHost + "/sign/component/index",
          _0x404f34 = new URLSearchParams({
            "signOperatingId": this.skyworthConfig.signOperatingId.toString(),
            "preview": "false",
            "_": _0x2dc84b.toString()
          }),
          _0x4b7bf9 = Object.entries(this.credentials.cookies).map(([_0x1de37c, _0x40d4bc]) => _0x1de37c + "=" + _0x40d4bc).join("; "),
          _0x16fef3 = {
            "Host": this.skyworthConfig.duibaHost,
            "sec-ch-ua-platform": "\"Android\"",
            "User-Agent": "Mozilla/5.0 (Linux; Android 13; M2012K11AC Build/TKQ1.221114.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/138.0.7204.180 Mobile Safari/537.36 XWEB/1380085 MMWEBSDK/20240404 MMWEBID/4824 MicroMessenger/8.0.49.2600(0x28003133) WeChat/arm64 Weixin NetType/WIFI Language/zh_CN ABI/arm64 miniProgram/wxff438d3c60c63fb6",
            "Accept": "application/json, text/plain, */*",
            "sec-ch-ua": "\"Not)A;Brand\";v=\"8\", \"Chromium\";v=\"138\", \"Android WebView\";v=\"138\"",
            "sec-ch-ua-mobile": "?1",
            "x-requested-with": "com.tencent.mm",
            "Sec-Fetch-Site": "same-origin",
            "Sec-Fetch-Mode": "cors",
            "Sec-Fetch-Dest": "empty",
            "Referer": "https://" + this.skyworthConfig.duibaHost + "/sign/component/page?signOperatingId=" + this.skyworthConfig.signOperatingId + "&from=login&spm=74367.1.1.1",
            "Accept-Encoding": "gzip, deflate, br, zstd",
            "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
            "Cookie": _0x4b7bf9,
            "Priority": "u=1, i"
          };
        isDebug && (console.log("[DEBUG] 签到状态请求URL: " + _0x316757 + "?" + _0x404f34.toString()), console.log("[DEBUG] 签到状态请求头:", JSON.stringify(_0x16fef3, null, 2)));
        const _0x3d50ef = await new Promise((_0x3106f1, _0x17a9a4) => {
          const _0x1b4a49 = {
            "method": "GET",
            "url": _0x316757 + "?" + _0x404f34.toString(),
            "headers": _0x16fef3,
            "gzip": true,
            "timeout": 30000
          };
          request(_0x1b4a49, (_0x3a0737, _0x5ce886, _0x59f362) => {
            if (_0x3a0737) {
              _0x17a9a4(_0x3a0737);
              return;
            }
            isDebug && (console.log("[DEBUG] 签到状态响应状态码: " + _0x5ce886.statusCode), console.log("[DEBUG] 签到状态响应内容: " + _0x59f362));
            try {
              const _0x1161f1 = JSON.parse(_0x59f362);
              _0x3106f1(_0x1161f1);
            } catch (_0x31570d) {
              if (isDebug) console.log("[DEBUG] 签到状态响应解析失败: " + _0x31570d.message);
              _0x17a9a4(_0x31570d);
            }
          });
        });
        if (_0x3d50ef.success) {
          const _0x251696 = _0x3d50ef.data;
          isDebug && (console.log("[DEBUG] 签到状态验证成功:"), console.log("[DEBUG] 当前签到结果: " + _0x251696.signResult), console.log("[DEBUG] 连续签到天数: " + _0x251696.consecutiveCount), console.log("[DEBUG] 活动状态: " + (_0x251696.closeStatus ? "关闭" : "开启")));
          if (_0x251696.calendarInfo && _0x251696.calendarInfo.dateInfos) {
            const _0x4a70f5 = new Date(),
              _0x2721be = _0x4a70f5.getFullYear() + String(_0x4a70f5.getMonth() + 1).padStart(2, "0") + String(_0x4a70f5.getDate()).padStart(2, "0"),
              _0x208822 = _0x251696.calendarInfo.dateInfos.find(_0x21fb87 => _0x21fb87.signDate == parseInt(_0x2721be));
            if (_0x208822) {
              {
                if (isDebug) console.log("[DEBUG] 今日签到状态: " + _0x208822.signStatus);
                if (_0x208822.signStatus === 1 || _0x208822.signStatus === 3) {
                  console.log("⚠️ 今日已签到");
                  return {
                    "alreadySigned": true,
                    "data": _0x251696
                  };
                }
                _0x208822.signStatus === 6 && (console.log("[DEBUG] 检测到今日可签到状态(6)，尝试预加载签到页面..."), await this.preloadSignPage());
              }
            }
          }
          return {
            "alreadySigned": false,
            "data": _0x251696
          };
        } else {
          console.log("❌ 获取签到状态失败: " + (_0x3d50ef.desc || "未知错误"));
          return null;
        }
      }
    } catch (_0x48baae) {
      console.log("❌ 获取签到状态失败: " + _0x48baae.message);
      if (isDebug) console.log("[DEBUG] 错误详情:", _0x48baae);
      return null;
    }
  }
  ["parseObfuscatedToken"](_0x492b89, _0x261f68) {
    try {
      {
        if (isDebug) console.log("[DEBUG] 开始解析混淆token脚本...");
        let _0x4a23db = this.executeObfuscatedCode(_0x492b89);
        if (_0x4a23db) {
          {
            if (isDebug) console.log("[DEBUG] 从混淆代码获取到真实token: " + _0x4a23db);
            return _0x4a23db;
          }
        }
        const _0x234c91 = [55, 106, 100, 99, 112, 109],
          _0x1239bb = String.fromCharCode(..._0x234c91);
        if (isDebug) console.log("[DEBUG] 使用固定ASCII序列生成token: " + _0x1239bb);
        return _0x1239bb;
      }
    } catch (_0x3d7d6a) {
      {
        if (isDebug) console.log("[DEBUG] token解析失败: " + _0x3d7d6a.message);
        const _0x120c84 = "7jdcpm";
        if (isDebug) console.log("[DEBUG] 使用备用token: " + _0x120c84);
        return _0x120c84;
      }
    }
  }
  ["executeObfuscatedCode"](_0xa56425) {
    try {
      {
        if (isDebug) console.log("[DEBUG] 尝试执行混淆代码...");
        const _0x1df9f3 = _0xa56425.includes("\\u0065\\u0076\\u0061\\u006c");
        if (_0x1df9f3) {
          const _0x3e24c6 = this.executeWithVM(_0xa56425);
          if (_0x3e24c6) {
            if (isDebug) console.log("[DEBUG] VM执行获取到token: " + _0x3e24c6);
            return _0x3e24c6;
          }
        } else {
          if (isDebug) console.log("[DEBUG] 混淆代码不完整，缺少eval部分");
        }
        const _0x19aa45 = this.generateSmartToken(_0xa56425);
        if (_0x19aa45) {
          if (isDebug) console.log("[DEBUG] 智能生成token: " + _0x19aa45);
          return _0x19aa45;
        }
        if (isDebug) console.log("[DEBUG] 使用备用方案");
        return this.generateFallbackToken();
      }
    } catch (_0x4a198c) {
      {
        if (isDebug) console.log("[DEBUG] 执行混淆代码失败: " + _0x4a198c.message);
        return this.generateFallbackToken();
      }
    }
  }
  ["generateSmartToken"](_0x29bd32) {
    try {
      {
        let _0x25549c = _0x29bd32.match(/_x_\w+\s*=\s*\[([^\]]+)\]/),
          _0x4e8c63 = [2212, 53, 2852, 3445, 3327];
        if (_0x25549c && _0x25549c[1]) {
          const _0x3834b9 = _0x25549c[1].replace(/\/\*[^*]*\*\//g, "").replace(/\s+/g, ""),
            _0x3ea496 = _0x3834b9.split(",").map(_0x483a4a => {
              {
                const _0x502048 = _0x483a4a.trim(),
                  _0x11fb74 = parseInt(_0x502048);
                return isNaN(_0x11fb74) ? parseInt(_0x502048, 16) || 0 : _0x11fb74;
              }
            });
          if (_0x3ea496.length >= 5) {
            {
              _0x4e8c63 = _0x3ea496.slice(0, 5);
              if (isDebug) console.log("[DEBUG] 提取到XOR数组:", _0x4e8c63);
            }
          }
        }
        if (JSON.stringify(_0x4e8c63) === JSON.stringify([2212, 53, 2852, 3445, 3327])) {
          {
            if (isDebug) console.log("[DEBUG] 识别到抓包XOR数组，返回已知token");
            return "7jdcpm";
          }
        }
        const _0xf1c12b = "abcdefghijklmnopqrstuvwxyz0123456789";
        let _0x20543e = "";
        const _0x3350e2 = _0x4e8c63.reduce((_0x28c06f, _0x1b75cf) => _0x28c06f + _0x1b75cf, 0);
        for (let _0x316be6 = 0; _0x316be6 < 6; _0x316be6++) {
          {
            const _0x2c9ac8 = (_0x3350e2 + _0x4e8c63[_0x316be6 % _0x4e8c63.length] + _0x316be6 * 13) % _0xf1c12b.length;
            _0x20543e += _0xf1c12b[_0x2c9ac8];
          }
        }
        if (isDebug) console.log("[DEBUG] 基于XOR数组特征生成: " + _0x20543e);
        return _0x20543e;
      }
    } catch (_0xb25e3c) {
      if (isDebug) console.log("[DEBUG] 智能生成失败: " + _0xb25e3c.message);
      return null;
    }
  }
  ["generateFallbackToken"]() {
    const _0x3c6af8 = "abcdefghijklmnopqrstuvwxyz0123456789",
      _0x216872 = Date.now();
    let _0x286881 = "";
    for (let _0x278027 = 0; _0x278027 < 6; _0x278027++) {
      const _0x19dfe3 = (_0x216872 + _0x278027 * 7) % _0x3c6af8.length;
      _0x286881 += _0x3c6af8[_0x19dfe3];
    }
    if (isDebug) console.log("[DEBUG] 备用生成器token: " + _0x286881);
    return _0x286881;
  }
  ["executeWithVM"](_0x4e11f7) {
    try {
      {
        const _0x4c9fbc = require("vm");
        let _0x1cce9d = null,
          _0xb072aa = [];
        const _0xbe9bf8 = {
          "String": String,
          "Math": Math,
          "parseInt": parseInt,
          "parseFloat": parseFloat,
          "window": {},
          "console": {
            "log": (..._0x51ab91) => {
              _0x51ab91.forEach(_0x4ab09e => {
                {
                  if (typeof _0x4ab09e === "string" && /^[a-z0-9]{6,12}$/.test(_0x4ab09e)) {
                    !_0xb072aa.includes(_0x4ab09e) && _0xb072aa.push(_0x4ab09e);
                    if (isDebug) console.log("[DEBUG] VM捕获到token: " + _0x4ab09e);
                  }
                }
              });
            }
          },
          "eval": _0x489e88 => {
            try {
              if (isDebug) console.log("[DEBUG] VM执行eval代码: " + _0x489e88.substring(0, 100) + "...");
              const _0x1b8963 = _0x4c9fbc.runInContext(_0x489e88, _0xbe9bf8, {
                "timeout": 5000
              });
              if (_0xbe9bf8.window) {
                Object.keys(_0xbe9bf8.window).forEach(_0x368e5f => {
                  const _0x90776d = _0xbe9bf8.window[_0x368e5f];
                  if (typeof _0x90776d === "string" && /^[a-z0-9]{6,12}$/.test(_0x90776d)) {
                    !_0xb072aa.includes(_0x90776d) && _0xb072aa.push(_0x90776d);
                    if (isDebug) console.log("[DEBUG] 从window." + _0x368e5f + "获取到token: " + _0x90776d);
                  }
                });
              }
              return _0x1b8963;
            } catch (_0x3834e6) {
              {
                if (isDebug) console.log("[DEBUG] eval执行失败: " + _0x3834e6.message);
                return undefined;
              }
            }
          }
        };
        _0x4c9fbc.createContext(_0xbe9bf8);
        _0x4c9fbc.runInContext(_0x4e11f7, _0xbe9bf8, {
          "timeout": 10000,
          "displayErrors": false
        });
        if (_0xb072aa.length > 0) {
          if (isDebug) console.log("[DEBUG] 发现" + _0xb072aa.length + "个候选token: " + _0xb072aa.join(", "));
          const _0x59cf2f = _0xb072aa.filter(_0x35d460 => _0x35d460.length === 8 && /^[a-z0-9]{8}$/.test(_0x35d460));
          if (_0x59cf2f.length > 0) {
            this.credentials.alternativeTokens = _0x59cf2f;
            if (isDebug) console.log("[DEBUG] 保存了" + _0x59cf2f.length + "个8位候选token: " + _0x59cf2f.slice(0, 5).join(", ") + (_0x59cf2f.length > 5 ? "..." : ""));
            if (_0x59cf2f.length >= 2) {
              {
                _0x1cce9d = _0x59cf2f[1];
                if (isDebug) console.log("[DEBUG] 选择第二个8位token: " + _0x1cce9d);
              }
            } else {
              _0x1cce9d = _0x59cf2f[0];
              if (isDebug) console.log("[DEBUG] 选择第一个8位token: " + _0x1cce9d);
            }
            return _0x1cce9d;
          }
          const _0x3cfab2 = _0xb072aa.filter(_0x7602ae => _0x7602ae.length === 6 && /^[a-z0-9]{6}$/.test(_0x7602ae));
          if (_0x3cfab2.length > 0) {
            {
              _0x1cce9d = _0x3cfab2[0];
              if (isDebug) console.log("[DEBUG] 选择6位token (备用): " + _0x1cce9d);
              return _0x1cce9d;
            }
          }
          let _0x3a9146 = _0xb072aa.sort((_0x2941ef, _0x3b5cd2) => _0x2941ef.length - _0x3b5cd2.length);
          if (_0x3a9146.length > 0) {
            _0x1cce9d = _0x3a9146[0];
            if (isDebug) console.log("[DEBUG] 选择最短token: " + _0x1cce9d + " (长度: " + _0x1cce9d.length + ")");
            return _0x1cce9d;
          }
        }
        return _0x1cce9d;
      }
    } catch (_0x4bbeac) {
      {
        if (isDebug) console.log("[DEBUG] VM执行失败: " + _0x4bbeac.message);
        return null;
      }
    }
  }
  ["generateDynamicToken"](_0x22221f) {
    try {
      let _0x26c03c = _0x22221f.match(/_x_\w+\s*=\s*\[([^\]]+)\]/),
        _0x11c9ff = [2212, 53, 2852, 3445, 3327];
      if (_0x26c03c && _0x26c03c[1]) {
        {
          const _0x1f5e7e = _0x26c03c[1].replace(/\/\*[^*]*\*\//g, "").replace(/\s+/g, ""),
            _0x4dbb62 = _0x1f5e7e.split(",").map(_0x256c1a => {
              {
                const _0x386013 = _0x256c1a.trim(),
                  _0x19ea82 = parseInt(_0x386013);
                return isNaN(_0x19ea82) ? parseInt(_0x386013, 16) || 0 : _0x19ea82;
              }
            });
          if (_0x4dbb62.length >= 5) {
            _0x11c9ff = _0x4dbb62.slice(0, 5);
            if (isDebug) console.log("[DEBUG] 动态提取XOR数组:", _0x11c9ff);
          }
        }
      }
      const _0x6ee9c7 = [() => {
        {
          const _0xaa677e = "abcdefghijklmnopqrstuvwxyz0123456789",
            _0x1978fd = _0x11c9ff.reduce((_0x590a53, _0x4abaeb) => _0x590a53 + _0x4abaeb, 0);
          let _0x4512ce = "";
          for (let _0x5cb7d7 = 0; _0x5cb7d7 < 6; _0x5cb7d7++) {
            {
              const _0x10b1d9 = (_0x1978fd + _0x11c9ff[_0x5cb7d7 % _0x11c9ff.length] + _0x5cb7d7 * 13) % _0xaa677e.length;
              _0x4512ce += _0xaa677e[_0x10b1d9];
            }
          }
          return _0x4512ce;
        }
      }, () => {
        {
          const _0x4c3b77 = "abcdefghijklmnopqrstuvwxyz0123456789";
          let _0x412389 = "";
          for (let _0x5967da = 0; _0x5967da < 6; _0x5967da++) {
            const _0x37f7e0 = _0x11c9ff[_0x5967da % _0x11c9ff.length],
              _0x17aeb5 = _0x37f7e0 % _0x4c3b77.length;
            _0x412389 += _0x4c3b77[_0x17aeb5];
          }
          return _0x412389;
        }
      }, () => {
        const _0x2cc1a5 = "abcdefghijklmnopqrstuvwxyz0123456789";
        let _0x5b4127 = 0;
        _0x11c9ff.forEach((_0x18884b, _0x8c5729) => {
          _0x5b4127 += _0x18884b * (_0x8c5729 + 1);
        });
        let _0x50123c = "";
        for (let _0x437c97 = 0; _0x437c97 < 6; _0x437c97++) {
          const _0x126a07 = (_0x5b4127 + _0x437c97 * 7) % _0x2cc1a5.length;
          _0x50123c += _0x2cc1a5[_0x126a07];
        }
        return _0x50123c;
      }];
      for (let _0x10ec8c = 0; _0x10ec8c < _0x6ee9c7.length; _0x10ec8c++) {
        try {
          {
            const _0x5cd0e3 = _0x6ee9c7[_0x10ec8c]();
            if (_0x5cd0e3 && _0x5cd0e3.length === 6) {
              if (isDebug) console.log("[DEBUG] 方法" + (_0x10ec8c + 1) + "生成token: " + _0x5cd0e3);
              return _0x5cd0e3;
            }
          }
        } catch (_0x3dee61) {
          if (isDebug) console.log("[DEBUG] 方法" + (_0x10ec8c + 1) + "失败: " + _0x3dee61.message);
        }
      }
      return null;
    } catch (_0x13e8cd) {
      if (isDebug) console.log("[DEBUG] 动态生成token失败: " + _0x13e8cd.message);
      return null;
    }
  }
  ["simpleHash"](_0x354223) {
    let _0x3176ae = 0;
    for (let _0x3a3114 = 0; _0x3a3114 < _0x354223.length; _0x3a3114++) {
      {
        const _0x44d934 = _0x354223.charCodeAt(_0x3a3114);
        _0x3176ae = (_0x3176ae << 5) - _0x3176ae + _0x44d934;
        _0x3176ae = _0x3176ae & _0x3176ae;
      }
    }
    return Math.abs(_0x3176ae);
  }
  ["generateFallbackToken"](_0x3245e3) {
    const _0x4583ed = "abcdefghijklmnopqrstuvwxyz0123456789",
      _0x1d425b = _0x3245e3.toString();
    let _0x41fe4d = "";
    for (let _0x4d24c7 = 0; _0x4d24c7 < 6; _0x4d24c7++) {
      const _0x49b5c2 = parseInt(_0x1d425b.charAt(_0x4d24c7 % _0x1d425b.length)) || 0,
        _0x5521e1 = (_0x49b5c2 * (_0x4d24c7 + 1) + _0x3245e3 % 1000) % _0x4583ed.length;
      _0x41fe4d += _0x4583ed[_0x5521e1];
    }
    return _0x41fe4d;
  }
  async ["getDuibaToken"]() {
    if (isDebug) console.log("[DEBUG] 第三步：获取动态签到Token");
    try {
      const _0x40b34e = Date.now(),
        _0x4de0eb = "https://" + this.skyworthConfig.duibaHost + "/chw/ctoken/getToken",
        _0x29e21c = "timestamp=" + _0x40b34e,
        _0x2621de = Object.entries(this.credentials.cookies).map(([_0x394726, _0x22a2a3]) => _0x394726 + "=" + _0x22a2a3).join("; "),
        _0xb1c0f = {
          "Host": this.skyworthConfig.duibaHost,
          "Content-Length": _0x29e21c.length.toString(),
          "Accept": "*/*",
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF WindowsWechat(0x63090c37)XWEB/14315",
          "Content-Type": "application/x-www-form-urlencoded",
          "Origin": "https://" + this.skyworthConfig.duibaHost,
          "Sec-Fetch-Site": "same-origin",
          "Sec-Fetch-Mode": "cors",
          "Sec-Fetch-Dest": "empty",
          "Referer": "https://" + this.skyworthConfig.duibaHost + "/sign/component/page?signOperatingId=" + this.skyworthConfig.signOperatingId + "&from=login&spm=74367.1.1.1",
          "Accept-Encoding": "gzip, deflate, br",
          "Accept-Language": "zh-CN,zh;q=0.9",
          "Cookie": _0x2621de,
          "Priority": "u=1, i"
        },
        _0x5d2cbd = await new Promise((_0x27c0b4, _0x3d60c6) => {
          {
            const _0x2996da = {
              "method": "POST",
              "url": _0x4de0eb,
              "headers": _0xb1c0f,
              "body": _0x29e21c,
              "gzip": true,
              "timeout": 30000
            };
            request(_0x2996da, (_0x48946b, _0x2da569, _0x436273) => {
              {
                if (_0x48946b) {
                  _0x3d60c6(_0x48946b);
                  return;
                }
                try {
                  const _0x4d5191 = JSON.parse(_0x436273);
                  _0x27c0b4(_0x4d5191);
                } catch (_0x3375b0) {
                  {
                    if (isDebug) console.log("[DEBUG] 响应不是JSON格式: " + _0x3375b0.message);
                    _0x27c0b4(_0x436273);
                  }
                }
              }
            });
          }
        });
      if (isDebug) {
        console.log("[DEBUG] Token请求响应类型:", typeof _0x5d2cbd);
        console.log("[DEBUG] Token请求完整响应:", JSON.stringify(_0x5d2cbd, null, 2));
      }
      let _0xe377ae = null,
        _0x52a2e1 = "";
      if (typeof _0x5d2cbd === "object" && _0x5d2cbd.success && _0x5d2cbd.token) {
        _0x52a2e1 = _0x5d2cbd.token;
        if (isDebug) {
          console.log("[DEBUG] 获取到token脚本，长度: " + _0x52a2e1.length);
          console.log("[DEBUG] Token脚本前500字符:", _0x52a2e1.substring(0, 500));
        }
      } else {
        if (typeof _0x5d2cbd === "string") {
          _0x52a2e1 = _0x5d2cbd;
          if (isDebug) {
            console.log("[DEBUG] 获取到token脚本字符串，长度: " + _0x52a2e1.length);
            console.log("[DEBUG] Token脚本前500字符:", _0x52a2e1.substring(0, 500));
          }
        } else return console.log("❌ 获取token失败，响应格式不正确"), isDebug && console.log("[DEBUG] 响应内容:", _0x5d2cbd), null;
      }
      if (_0x52a2e1 && _0x52a2e1.length > 0) {
        _0xe377ae = this.parseObfuscatedToken(_0x52a2e1, _0x40b34e);
        if (!_0xe377ae) {
          {
            if (isDebug) console.log("[DEBUG] 专门解析器失败，尝试VM方法...");
            _0xe377ae = await this.fallbackTokenParsing(_0x52a2e1);
          }
        }
      }
      if (!_0xe377ae) {
        {
          console.log("❌ 无法从token脚本中提取有效token");
          _0xe377ae = this.generateFallbackToken(_0x40b34e);
          if (isDebug) console.log("[DEBUG] 使用备用token生成器: " + _0xe377ae);
        }
      }
      this.credentials.duibaToken = _0xe377ae;
      this.credentials.tokenTimestamp = _0x40b34e;
      if (isDebug) console.log("[DEBUG] 动态token获取成功: " + _0xe377ae + ", 时间戳: " + _0x40b34e);
      return _0xe377ae;
    } catch (_0x1ad1ec) {
      console.log("❌ 获取动态token失败: " + _0x1ad1ec.message);
      if (isDebug) console.log("[DEBUG] 错误详情:", _0x1ad1ec);
      return null;
    }
  }
  async ["fallbackTokenParsing"](_0x2719da) {
    try {
      const _0x31a0cc = require("vm");
      let _0x15ee49 = null;
      const _0xe4b902 = {
        "String": String,
        "Math": Math,
        "parseInt": parseInt,
        "parseFloat": parseFloat,
        "console": {
          "log": function (..._0x4f8365) {
            _0x4f8365.forEach(_0x44d01e => {
              {
                if (typeof _0x44d01e === "string" && /^[a-z0-9]{6,12}$/.test(_0x44d01e) && !_0x15ee49) {
                  {
                    _0x15ee49 = _0x44d01e;
                    if (isDebug) console.log("[DEBUG] 从console.log捕获token: " + _0x15ee49);
                  }
                }
              }
            });
          }
        },
        "eval": function (_0x5c985d) {
          try {
            const _0x15b09e = _0x31a0cc.runInContext(_0x5c985d, _0xe4b902, {
              "timeout": 5000
            });
            if (typeof _0x15b09e === "string" && /^[a-z0-9]{6,12}$/.test(_0x15b09e) && !_0x15ee49) {
              _0x15ee49 = _0x15b09e;
              if (isDebug) console.log("[DEBUG] 从eval获取token: " + _0x15ee49);
            }
            return _0x15b09e;
          } catch (_0x4bdd7c) {
            return undefined;
          }
        }
      };
      _0x31a0cc.createContext(_0xe4b902);
      const _0x3ef365 = _0x31a0cc.runInContext(_0x2719da, _0xe4b902, {
        "timeout": 10000,
        "displayErrors": false
      });
      typeof _0x3ef365 === "string" && /^[a-z0-9]{6,12}$/.test(_0x3ef365) && (_0x15ee49 = _0x3ef365);
      return _0x15ee49;
    } catch (_0x2afe80) {
      {
        if (isDebug) console.log("[DEBUG] 备用VM解析失败: " + _0x2afe80.message);
        return null;
      }
    }
  }
  async ["executeSignin"]() {
    if (isDebug) console.log("[DEBUG] 第四步：执行签到");
    try {
      const _0x4e6059 = "https://" + this.skyworthConfig.duibaHost + "/sign/component/doSign",
        _0x50f4e8 = this.credentials.tokenTimestamp || Date.now(),
        _0xe9adb1 = _0x50f4e8 + 200,
        _0x2cae3c = new URLSearchParams({
          "_": _0xe9adb1.toString()
        }),
        _0x56ef36 = new URLSearchParams({
          "signOperatingId": this.skyworthConfig.signOperatingId.toString(),
          "token": this.credentials.duibaToken
        }),
        _0x526dac = Object.entries(this.credentials.cookies).map(([_0x1484ef, _0x2a9fe3]) => _0x1484ef + "=" + _0x2a9fe3).join("; "),
        _0x53cfb5 = {
          "Host": this.skyworthConfig.duibaHost,
          "Content-Length": _0x56ef36.toString().length.toString(),
          "sec-ch-ua-platform": "\"Android\"",
          "User-Agent": "Mozilla/5.0 (Linux; Android 13; M2012K11AC Build/TKQ1.221114.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/138.0.7204.180 Mobile Safari/537.36 XWEB/1380085 MMWEBSDK/20240404 MMWEBID/4824 MicroMessenger/8.0.49.2600(0x28003133) WeChat/arm64 Weixin NetType/WIFI Language/zh_CN ABI/arm64 miniProgram/wxff438d3c60c63fb6",
          "Accept": "application/json, text/plain, */*",
          "sec-ch-ua": "\"Not)A;Brand\";v=\"8\", \"Chromium\";v=\"138\", \"Android WebView\";v=\"138\"",
          "Content-Type": "application/x-www-form-urlencoded",
          "sec-ch-ua-mobile": "?1",
          "Origin": "https://" + this.skyworthConfig.duibaHost,
          "x-requested-with": "com.tencent.mm",
          "Sec-Fetch-Site": "same-origin",
          "Sec-Fetch-Mode": "cors",
          "Sec-Fetch-Dest": "empty",
          "Referer": "https://" + this.skyworthConfig.duibaHost + "/sign/component/page?signOperatingId=" + this.skyworthConfig.signOperatingId + "&from=login&spm=74367.1.1.1",
          "Accept-Encoding": "gzip, deflate, br, zstd",
          "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
          "Cookie": _0x526dac,
          "Priority": "u=1, i"
        };
      isDebug && (console.log("[DEBUG] 签到请求URL: " + _0x4e6059 + "?" + _0x2cae3c.toString()), console.log("[DEBUG] 签到请求数据: " + _0x56ef36.toString()), console.log("[DEBUG] 签到请求头:", JSON.stringify(_0x53cfb5, null, 2)));
      const _0x40ef72 = await new Promise((_0x563b6e, _0x149606) => {
        {
          const _0x30d911 = {
            "method": "POST",
            "url": _0x4e6059 + "?" + _0x2cae3c.toString(),
            "headers": _0x53cfb5,
            "body": _0x56ef36.toString(),
            "gzip": true,
            "timeout": 30000
          };
          request(_0x30d911, (_0x4647b2, _0x2833a0, _0x5902bf) => {
            {
              if (_0x4647b2) {
                _0x149606(_0x4647b2);
                return;
              }
              if (isDebug) {
                console.log("[DEBUG] 签到响应状态码: " + _0x2833a0.statusCode);
                console.log("[DEBUG] 签到响应头:", JSON.stringify(_0x2833a0.headers, null, 2));
                console.log("[DEBUG] 签到响应内容: " + _0x5902bf);
              }
              try {
                {
                  const _0x15cf2e = JSON.parse(_0x5902bf);
                  _0x563b6e(_0x15cf2e);
                }
              } catch (_0x8615b1) {
                if (isDebug) console.log("[DEBUG] 签到响应解析失败: " + _0x8615b1.message);
                _0x149606(_0x8615b1);
              }
            }
          });
        }
      });
      if (_0x40ef72.success) {
        {
          const _0x1fa263 = _0x40ef72.data.orderNum;
          if (isDebug) console.log("[DEBUG] 签到请求成功，订单号: " + _0x1fa263);
          const _0x1ce2b3 = await this.getSignResult(_0x1fa263);
          return _0x1ce2b3;
        }
      } else return console.log("❌ 签到失败: " + (_0x40ef72.desc || "未知错误")), null;
    } catch (_0x28e296) {
      console.log("❌ 执行签到失败: " + _0x28e296.message);
      if (isDebug) console.log("[DEBUG] 错误详情:", _0x28e296);
      return null;
    }
  }
  async ["getSignResult"](_0x425a44, _0x274dbc = 0) {
    const _0xfaf34e = 5;
    if (isDebug) console.log("[DEBUG] 第五步：查询签到结果 (第" + (_0x274dbc + 1) + "次查询)");
    try {
      {
        const _0x27658c = Date.now(),
          _0x59cdc6 = "https://" + this.skyworthConfig.duibaHost + "/sign/component/signResult",
          _0x1ff3cd = new URLSearchParams({
            "orderNum": _0x425a44,
            "_": _0x27658c.toString()
          }),
          _0x1dbeda = Object.entries(this.credentials.cookies).map(([_0x1b9e9c, _0x18f5da]) => _0x1b9e9c + "=" + _0x18f5da).join("; "),
          _0x5a3f39 = {
            "Host": this.skyworthConfig.duibaHost,
            "Accept": "application/json, text/plain, */*",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF WindowsWechat(0x63090c37)XWEB/14315",
            "Sec-Fetch-Site": "same-origin",
            "Sec-Fetch-Mode": "cors",
            "Sec-Fetch-Dest": "empty",
            "Referer": "https://" + this.skyworthConfig.duibaHost + "/sign/component/page?signOperatingId=" + this.skyworthConfig.signOperatingId + "&from=login&spm=74367.1.1.1",
            "Accept-Encoding": "gzip, deflate, br",
            "Accept-Language": "zh-CN,zh;q=0.9",
            "Cookie": _0x1dbeda,
            "Priority": "u=1, i"
          },
          _0x376dd0 = await new Promise((_0xf42927, _0x33ee2c) => {
            const _0x28e7ef = {
              "method": "GET",
              "url": _0x59cdc6 + "?" + _0x1ff3cd.toString(),
              "headers": _0x5a3f39,
              "gzip": true,
              "timeout": 30000
            };
            request(_0x28e7ef, (_0x3c312a, _0x3f0d03, _0x466293) => {
              if (_0x3c312a) {
                _0x33ee2c(_0x3c312a);
                return;
              }
              try {
                const _0x171fb6 = JSON.parse(_0x466293);
                _0xf42927(_0x171fb6);
              } catch (_0x5e9c71) {
                _0x33ee2c(_0x5e9c71);
              }
            });
          });
        if (_0x376dd0.success && _0x376dd0.data) {
          const _0x36d466 = _0x376dd0.data;
          isDebug && (console.log("[DEBUG] 签到结果查询成功:"), console.log("[DEBUG] 签到状态: " + _0x36d466.signResult), console.log("[DEBUG] 获得积分: " + _0x36d466.credits));
          if (_0x36d466.signResult === 1) {
            {
              if (_0x274dbc < _0xfaf34e) {
                {
                  if (isDebug) console.log("[DEBUG] 签到处理中，1秒后重新查询...");
                  await new Promise(_0x506616 => setTimeout(_0x506616, 1000));
                  return await this.getSignResult(_0x425a44, _0x274dbc + 1);
                }
              } else return console.log("⚠️ 签到结果查询超时，已重试" + _0xfaf34e + "次"), {
                "signResult": 1,
                "credits": null
              };
            }
          } else {
            if (_0x36d466.signResult === 2) {
              if (isDebug) console.log("[DEBUG] 签到成功确认");
              return _0x36d466;
            } else {
              if (isDebug) console.log("[DEBUG] 未知签到状态: " + _0x36d466.signResult);
              return _0x36d466;
            }
          }
        } else return console.log("❌ 查询签到结果失败"), null;
      }
    } catch (_0x562962) {
      {
        console.log("❌ 查询签到结果失败: " + _0x562962.message);
        if (isDebug) console.log("[DEBUG] 错误详情:", _0x562962);
        return null;
      }
    }
  }
  async ["validateCache"]() {
    if (!this.isLogin || !this.wxCode) return false;
    if (isDebug) console.log("[DEBUG] 验证缓存数据有效性...");
    try {
      const _0x34db48 = await wxcode.getOpenid(this.wxid, this.appid);
      if (_0x34db48.success) {
        if (isDebug) console.log("[DEBUG] 缓存数据验证通过");
        return true;
      }
    } catch (_0x7b026c) {
      if (isDebug) console.log("[DEBUG] 缓存数据验证失败: " + _0x7b026c.message);
    }
    if (isDebug) console.log("[DEBUG] 缓存数据已失效");
    this.isLogin = false;
    return false;
  }
  async ["getSkyworthJWTToken"]() {
    if (isDebug) console.log("[DEBUG] 开始获取创维会员中心JWT Token...");
    try {
      {
        if (isDebug) console.log("[DEBUG] 第一步：用微信code换取ticket");
        const _0x4cd6c3 = "https://uc-api.skyallhere.com/miniprogram/api/v2/user/exchange",
          _0x2442c8 = {
            "code": this.wxCode
          },
          _0x3bb8e9 = {
            "Host": "uc-api.skyallhere.com",
            "Connection": "keep-alive",
            "Content-Length": JSON.stringify(_0x2442c8).length.toString(),
            "App-Path": "/pages/index/index",
            "Authorization": "Bearer",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF WindowsWechat(0x63090c37)XWEB/14315",
            "Content-Type": "application/json",
            "App-System": "Windows 10 x64",
            "xweb_xhr": "1",
            "App-Model": "microsoft",
            "App-Sdkversion": "3.9.0",
            "App-Version": "3.9.12",
            "Accept": "*/*",
            "Sec-Fetch-Site": "cross-site",
            "Sec-Fetch-Mode": "cors",
            "Sec-Fetch-Dest": "empty",
            "Referer": "https://servicewechat.com/wxff438d3c60c63fb6/342/page-frame.html",
            "Accept-Encoding": "gzip, deflate, br",
            "Accept-Language": "zh-CN,zh;q=0.9"
          },
          _0x3e7f34 = await new Promise((_0x5ab711, _0x5e3a02) => {
            const _0x189867 = {
              "method": "POST",
              "url": _0x4cd6c3,
              "headers": _0x3bb8e9,
              "body": JSON.stringify(_0x2442c8),
              "gzip": true,
              "timeout": 30000
            };
            request(_0x189867, (_0x8c8574, _0x47285f, _0x49afbe) => {
              if (_0x8c8574) {
                {
                  _0x5e3a02(_0x8c8574);
                  return;
                }
              }
              try {
                const _0x3acc80 = JSON.parse(_0x49afbe);
                _0x5ab711(_0x3acc80);
              } catch (_0x27afa1) {
                _0x5e3a02(_0x27afa1);
              }
            });
          });
        if (_0x3e7f34.code !== 0) return console.log("❌ 换取ticket失败: " + _0x3e7f34.msg), null;
        const _0x27c0b6 = _0x3e7f34.data.ticket;
        if (isDebug) console.log("[DEBUG] 获取ticket成功: " + _0x27c0b6);
        if (isDebug) console.log("[DEBUG] 第二步：用ticket换取JWT Token");
        const _0x5c2daa = "https://uc-api.skyallhere.com/miniprogram/api/v2/user/signin",
          _0x24abba = {
            "ticket": _0x27c0b6
          },
          _0x533b34 = {
            "Host": "uc-api.skyallhere.com",
            "Connection": "keep-alive",
            "Content-Length": JSON.stringify(_0x24abba).length.toString(),
            "App-Path": "/pages/index/index",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF WindowsWechat(0x63090c37)XWEB/14315",
            "Content-Type": "application/json",
            "App-System": "Windows 10 x64",
            "xweb_xhr": "1",
            "App-Model": "microsoft",
            "App-Sdkversion": "3.9.0",
            "App-Version": "3.9.12",
            "Accept": "*/*",
            "Sec-Fetch-Site": "cross-site",
            "Sec-Fetch-Mode": "cors",
            "Sec-Fetch-Dest": "empty",
            "Referer": "https://servicewechat.com/wxff438d3c60c63fb6/342/page-frame.html",
            "Accept-Encoding": "gzip, deflate, br",
            "Accept-Language": "zh-CN,zh;q=0.9"
          },
          _0x19f205 = await new Promise((_0x334a02, _0x2f180) => {
            {
              const _0x57b035 = {
                "method": "POST",
                "url": _0x5c2daa,
                "headers": _0x533b34,
                "body": JSON.stringify(_0x24abba),
                "gzip": true,
                "timeout": 30000
              };
              request(_0x57b035, (_0x163ed6, _0x2cf472, _0xbd5c8d) => {
                if (_0x163ed6) {
                  _0x2f180(_0x163ed6);
                  return;
                }
                try {
                  {
                    const _0x41d305 = JSON.parse(_0xbd5c8d);
                    _0x334a02(_0x41d305);
                  }
                } catch (_0x28036b) {
                  _0x2f180(_0x28036b);
                }
              });
            }
          });
        if (_0x19f205.code !== 0) return console.log("❌ 获取JWT Token失败: " + _0x19f205.msg), null;
        const _0x35d1d0 = _0x19f205.data.token;
        this.credentials.jwtToken = "Bearer " + _0x35d1d0;
        if (isDebug) console.log("[DEBUG] 获取JWT Token成功");
        return _0x35d1d0;
      }
    } catch (_0x36be8c) {
      console.log("❌ 获取JWT Token失败: " + _0x36be8c.message);
      if (isDebug) console.log("[DEBUG] 错误详情:", _0x36be8c);
      return null;
    }
  }
  async ["performFullLogin"]() {
    if (isDebug) console.log("[DEBUG] 执行完整的数据获取流程...");
    const _0x3a68c3 = await this.getWxCodeAndLogin();
    if (!_0x3a68c3) return console.log("[" + this.wxid + "] 获取授权码失败，跳过"), false;
    const _0x5906f4 = await this.getSkyworthJWTToken();
    if (!_0x5906f4) {
      console.log("[" + this.wxid + "] 获取JWT Token失败，跳过");
      return false;
    }
    this.saveTokenCache();
    return true;
  }
  async ["performSignin"]() {
    try {
      const _0x2927f5 = await this.skyworthLogin();
      if (!_0x2927f5) return console.log("❌ 创维会员中心登录失败"), false;
      console.log("✅ 登录成功，用户: " + _0x2927f5.nickName + "，当前积分: " + _0x2927f5.userScore);
      const _0x154e16 = await this.autoLogin();
      if (!_0x154e16) return console.log("❌ 自动登录失败"), false;
      console.log("✅ 自动登录成功，获取到登录凭证");
      const _0x18ccf5 = await this.getSignIndex();
      if (!_0x18ccf5) return console.log("❌ 获取签到状态失败"), false;
      if (_0x18ccf5.alreadySigned) return console.log("⚠️ 今日已签到"), print("[" + this.wxid + "] 今日已签到", true), true;
      console.log("✅ 签到状态验证成功");
      const _0x3ebbe9 = await this.getDuibaToken();
      if (!_0x3ebbe9) return console.log("❌ 获取动态token失败"), false;
      console.log("✅ 获取动态token成功");
      let _0x44f534 = await this.executeSignin();
      if (!_0x44f534 && this.credentials.alternativeTokens && this.credentials.alternativeTokens.length > 0) {
        {
          console.log("⚠️ 第一个token失败，尝试其他候选token...");
          for (let _0x26bf98 = 1; _0x26bf98 < Math.min(this.credentials.alternativeTokens.length, 5); _0x26bf98++) {
            {
              const _0x21841f = this.credentials.alternativeTokens[_0x26bf98];
              console.log("🔄 尝试候选token " + (_0x26bf98 + 1) + ": " + _0x21841f);
              this.credentials.duibaToken = _0x21841f;
              _0x44f534 = await this.executeSignin();
              if (_0x44f534) {
                {
                  console.log("✅ 候选token " + (_0x26bf98 + 1) + " 成功！");
                  break;
                }
              }
            }
          }
        }
      }
      if (_0x44f534) {
        {
          if (_0x44f534.signResult === 2) return console.log("🎉 签到成功！获得 " + _0x44f534.credits + " 维豆"), true;else {
            if (_0x44f534.signResult === 1) {
              console.log("🎉 签到成功！");
              if (_0x44f534.credits) console.log("获得 " + _0x44f534.credits + " 维豆"), print("[" + this.wxid + "] 签到成功！获得 " + _0x44f534.credits + " 维豆", true);else {
                console.log("签到完成（积分稍后更新）");
                print("[" + this.wxid + "] 签到成功！", true);
              }
              return true;
            } else return _0x44f534.signResult === 0 ? (console.log("⚠️ 今日已签到"), print("[" + this.wxid + "] 今日已签到", true), true) : (console.log("⚠️ 签到状态异常，状态码: " + _0x44f534.signResult), isDebug && console.log("[DEBUG] 完整签到结果:", _0x44f534), false);
          }
        }
      } else {
        console.log("❌ 所有候选token均签到失败");
        print("[" + this.wxid + "] 所有候选token均签到失败", true);
        return false;
      }
    } catch (_0x3f8b3a) {
      {
        console.log("❌ 签到流程执行失败: " + _0x3f8b3a.message);
        if (isDebug) console.log("[DEBUG] 错误详情:", _0x3f8b3a);
        return false;
      }
    }
  }
  async ["run"]() {
    try {
      const _0x19278b = this.loadTokenCache();
      if (_0x19278b) {
        {
          console.log("📦 使用缓存的数据");
          const _0x13d9ed = await this.validateCache();
          if (!_0x13d9ed) {
            console.log("⚠️ 缓存的数据已失效，重新获取...");
            const _0x26efe9 = await this.performFullLogin();
            if (!_0x26efe9) {
              {
                console.log("[" + this.wxid + "] 完整登录失败，跳过");
                return;
              }
            }
          } else console.log("✅ 缓存的数据有效");
        }
      } else {
        const _0x42c25a = await this.performFullLogin();
        if (!_0x42c25a) {
          {
            print("[" + this.wxid + "] 完整登录失败，跳过", true);
            return;
          }
        }
      }
      console.log("🚀 开始执行创维会员中心签到...");
      const _0x12645b = await this.performSignin();
      if (_0x12645b) {
        console.log("✅ [" + this.wxid + "] 签到完成");
        this.saveTokenCache();
      } else console.log("❌ [" + this.wxid + "] 签到失败"), print("[" + this.wxid + "] 签到失败", true);
    } catch (_0x371dfc) {
      console.log("[" + this.wxid + "] 脚本执行出错：" + _0x371dfc.message);
      print("[" + this.wxid + "] 脚本执行出错：" + _0x371dfc.message, true);
      isDebug && console.error(_0x371dfc);
    }
  }
  async ["preloadSignPage"]() {
    try {
      const _0x18f376 = "https://" + this.skyworthConfig.duibaHost + "/sign/component/page",
        _0x1be539 = new URLSearchParams({
          "signOperatingId": this.skyworthConfig.signOperatingId.toString(),
          "from": "login",
          "spm": "74367.1.1.1"
        }),
        _0x2ea353 = Object.entries(this.credentials.cookies).map(([_0x37f7a8, _0x3b838f]) => _0x37f7a8 + "=" + _0x3b838f).join("; "),
        _0x5abd2e = {
          "Host": this.skyworthConfig.duibaHost,
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF WindowsWechat(0x63090c37)XWEB/14315",
          "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
          "Sec-Fetch-Site": "same-origin",
          "Sec-Fetch-Mode": "navigate",
          "Sec-Fetch-Dest": "document",
          "Accept-Encoding": "gzip, deflate, br",
          "Accept-Language": "zh-CN,zh;q=0.9",
          "Cookie": _0x2ea353,
          "Upgrade-Insecure-Requests": "1"
        },
        _0x125c12 = await fetch(_0x18f376 + "?" + _0x1be539.toString(), {
          "method": "GET",
          "headers": _0x5abd2e
        });
      if (_0x125c12.ok) {
        {
          const _0x60fe9d = await _0x125c12.text();
          if (isDebug) console.log("[DEBUG] 签到页面预加载成功，页面大小: " + _0x60fe9d.length + " 字符");
          await new Promise(_0xbdb94f => setTimeout(_0xbdb94f, 500));
          return true;
        }
      } else return console.log("⚠️ 签到页面预加载失败: " + _0x125c12.status), false;
    } catch (_0x3edd54) {
      console.log("⚠️ 签到页面预加载出错: " + _0x3edd54.message);
      return false;
    }
  }
}
async function main() {
  console.log("�� 创维会员中心签到脚本开始执行");
  isDebug && (console.log("[DEBUG] 调试模式已开启"), console.log("[DEBUG] APPID: " + APPID), console.log("[DEBUG] 签到活动ID: " + new SkyworthSignin("").skyworthConfig.signOperatingId));
  if (!wxidList) {
    {
      console.log("❌ 未设置环境变量 TXX_WXID 或命令行参数 --wxid");
      return;
    }
  }
  const _0x532445 = cmdWxid ? [cmdWxid] : parseWxidList(wxidList);
  if (_0x532445.length === 0) {
    {
      console.log("❌ 没有找到有效的wxid");
      return;
    }
  }
  console.log("📋 共找到 " + _0x532445.length + " 个有效账号");
  isDebug && console.log("[DEBUG] 账号列表: " + _0x532445.join(", "));
  for (let _0x1c3ec6 = 0; _0x1c3ec6 < _0x532445.length; _0x1c3ec6++) {
    const _0x4d9235 = _0x532445[_0x1c3ec6];
    console.log("\n🚀 [" + (_0x1c3ec6 + 1) + "/" + _0x532445.length + "] 开始处理账号: " + _0x4d9235);
    try {
      const _0x432ef4 = new SkyworthSignin(_0x4d9235);
      await _0x432ef4.run();
      console.log("✅ [" + (_0x1c3ec6 + 1) + "/" + _0x532445.length + "] 账号 " + _0x4d9235 + " 处理完成");
    } catch (_0x8c3681) {
      console.log("❌ [" + (_0x1c3ec6 + 1) + "/" + _0x532445.length + "] 账号 " + _0x4d9235 + " 处理失败: " + _0x8c3681.message);
      isDebug && console.error(_0x8c3681);
    }
    console.log("─".repeat(60));
    if (_0x1c3ec6 < _0x532445.length - 1) {
      const _0xe3aced = 5 + Math.random(),
        _0x5d64bd = Math.floor(_0xe3aced * 60 * 1000),
        _0x4346dd = (_0x5d64bd / 60000).toFixed(1);
      console.log("⏰ 等待 " + _0x4346dd + " 分钟后处理下一个账号...");
      const _0x29ece8 = Date.now(),
        _0x9eb93b = _0x29ece8 + _0x5d64bd;
      while (Date.now() < _0x9eb93b) {
        {
          const _0x462026 = _0x9eb93b - Date.now(),
            _0x39bae7 = Math.floor(_0x462026 / 60000),
            _0x15acd6 = Math.floor(_0x462026 % 60000 / 1000);
          process.stdout.write("\r⏳ 剩余时间: " + _0x39bae7 + "分" + _0x15acd6 + "秒");
          await new Promise(_0x1787b6 => setTimeout(_0x1787b6, Math.min(10000, _0x462026)));
        }
      }
      console.log("\r✅ 等待完成，继续处理下一个账号");
    }
  }
  console.log("\n🎉 所有账号处理完成！");
  NOTICE_SWITCH && notice && (await sendMsg(notice));
}
let notice = "";
function print(_0x37362a, _0x243468 = false) {
  let _0x2a2414 = "" + _0x37362a;
  console.log(_0x2a2414);
  NOTICE_SWITCH && _0x243468 && (notice += _0x2a2414 + "\n");
}
async function sendMsg(_0x4830be) {
  try {
    let _0x43ce7d = "";
    try {
      _0x43ce7d = require("./sendNotify");
    } catch (_0x5f37c9) {
      try {
        _0x43ce7d = require("../sendNotify");
      } catch (_0x45be01) {
        {
          console.log("❌ 未找到sendNotify模块，无法发送通知");
          return;
        }
      }
    }
    await _0x43ce7d.sendNotify(scriptName, _0x4830be);
    console.log("📢 通知发送成功");
  } catch (_0x1b1b61) {
    console.log("❌ 通知发送失败: " + _0x1b1b61.message);
  }
}
main().catch(console.error);