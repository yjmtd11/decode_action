//Sun Aug 17 2025 03:24:17 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
#!/usr/bin/env node
var _0x0ef3c = 15;
const fs = require("\u0066\u0073");
_0x0ef3c = 11;
var _0x04eg8e = 12;
const path = require("\u0070\u0061\u0074\u0068");
_0x04eg8e = 15;
var _0x22a9bc = 12;
const axios = require("\u0061\u0078\u0069\u006F\u0073");
_0x22a9bc = 9;
const process = require("\u0070\u0072\u006F\u0063\u0065\u0073\u0073");
const {
  "program": program
} = require("\u0063\u006F\u006D\u006D\u0061\u006E\u0064\u0065\u0072");
const crypto = require("\u0063\u0072\u0079\u0070\u0074\u006F");
try {
  var CryptoJS = require("\u0063\u0072\u0079\u0070\u0074\u006F\u002D\u006A\u0073");
} catch (e) {
  console['\u0077\u0061\u0072\u006E']("\u7528\u4F7F\u5E38\u6B63\u6CD5\u65E0\u80FD\u53EF\u80FD\u529F\u5E8F\u7A0B\u5C0F\u6D3E\u5955\u98CE\u4E1C\uFF0C\u5E93sj-otpyrc\u88C5\u5B89\u672A".split("").reverse().join(""));
  console['\u0077\u0061\u0072\u006E']("\u8BF7\u8FD0\u884C\u003A\u0020\u006E\u0070\u006D\u0020\u0069\u006E\u0073\u0074\u0061\u006C\u006C\u0020\u0063\u0072\u0079\u0070\u0074\u006F\u002D\u006A\u0073");
}
const DEFAULT_APPID = "50b9ab16463dc272xw".split("").reverse().join("");
const DFYP_CONFIG = {
  '\u0061\u0070\u0069\u0055\u0072\u006C': "\u0068\u0074\u0074\u0070\u0073\u003A\u002F\u002F\u0073\u0061\u0070\u0070\u002E\u0064\u0066\u006D\u0063\u002E\u0063\u006F\u006D\u002E\u0063\u006E\u002F\u0061\u0070\u0070\u0076\u0033\u002F\u0061\u0070\u0069",
  '\u006D\u0070\u0041\u0070\u0070\u0069\u0064': "\u0077\u0078\u0032\u0037\u0032\u0063\u0064\u0033\u0036\u0034\u0036\u0031\u0062\u0061\u0039\u0062\u0030\u0035",
  "appid": "\u0061\u0070\u0070\u0031\u0076\u0062\u0073\u0047\u0073\u0031\u0063\u0052\u0069\u0055\u0044\u0041\u0037\u0052\u0046\u0042\u004F\u0076\u0036\u005A\u0079\u0046\u006B\u0036\u0030\u0077\u006A\u0053\u007A\u0039\u005A",
  '\u0061\u0070\u0070\u006B\u0065\u0079': "JvIfhWqA8lzewUI5bxChXqsAbpIOIqERlSy4N9xBFeJJWTbyLGkxPrRK8COs7fM2EMhOOthshEEv576cDsSfVlhRC4U2rZVZYh9wThdOiQjXetT2c8DE7nS4XvfJGUHl",
  "apitype": "\u0038",
  '\u0061\u0070\u0070\u0063\u006F\u0064\u0065': "\u006D\u0069\u006E\u0069\u0070\u0072\u006F\u0067\u0072\u0061\u006D",
  '\u006C\u0061\u006E\u0067': "cn"
};
function getScriptInfo() {
  const _0xed618e = process['\u0061\u0072\u0067\u0076'][1];
  var _0xfceg5d;
  const _0x97a3dg = path['\u0062\u0061\u0073\u0065\u006E\u0061\u006D\u0065'](_0xed618e);
  _0xfceg5d = 9;
  var _0xaf_0x2f5 = 8;
  const _0x47679f = path['\u0062\u0061\u0073\u0065\u006E\u0061\u006D\u0065'](_0x97a3dg, path['\u0065\u0078\u0074\u006E\u0061\u006D\u0065'](_0x97a3dg));
  _0xaf_0x2f5 = 5;
  var _0xb1e;
  const _0x4ae3c = _0x47679f['\u0072\u0065\u0070\u006C\u0061\u0063\u0065'](new RegExp("]9-0Z-Az-a^[".split("").reverse().join(""), '\u0067'), '');
  _0xb1e = 6;
  var _0xg6a34e = 11;
  let _0xf_0x5dd = _0x4ae3c ? _0x4ae3c['\u0074\u006F\u0055\u0070\u0070\u0065\u0072\u0043\u0061\u0073\u0065']() : '';
  _0xg6a34e = 14;
  if (!_0xf_0x5dd) {
    const _0x35fcee = [];
    for (let i = 0; i < Math['\u006D\u0069\u006E'](_0x47679f['\u006C\u0065\u006E\u0067\u0074\u0068'], 3); i++) {
      var _0xf9f96a;
      const _0x34ba = _0x47679f[i];
      _0xf9f96a = 1;
      if (_0x34ba >= '\u4e00' && _0x34ba <= '\u9fff') {
        var _0x63c23a = 7;
        const _0x197f = (_0x34ba['\u0063\u0068\u0061\u0072\u0043\u006F\u0064\u0065\u0041\u0074'](0) - 19968) % 26;
        _0x63c23a = 9;
        _0x35fcee['\u0070\u0075\u0073\u0068'](String['\u0066\u0072\u006F\u006D\u0043\u0068\u0061\u0072\u0043\u006F\u0064\u0065'](65 + _0x197f));
      } else {
        try {
          const _0x88g6cg = _0x34ba['\u0063\u0068\u0061\u0072\u0043\u006F\u0064\u0065\u0041\u0074'](0) <= 127 ? _0x34ba['\u0074\u006F\u0055\u0070\u0070\u0065\u0072\u0043\u0061\u0073\u0065']() : "\u0058";
          _0x35fcee['\u0070\u0075\u0073\u0068'](_0x88g6cg);
        } catch (e) {
          _0x35fcee['\u0070\u0075\u0073\u0068']("\u0058");
        }
      }
    }
    _0xf_0x5dd = _0x35fcee['\u006C\u0065\u006E\u0067\u0074\u0068'] > 0 ? _0x35fcee['\u006A\u006F\u0069\u006E']('') : "CP".split("").reverse().join("");
  }
  if (_0xf_0x5dd['\u006C\u0065\u006E\u0067\u0074\u0068'] < 2) {
    _0xf_0x5dd += 'PC'['\u0073\u0075\u0062\u0073\u0074\u0072\u0069\u006E\u0067'](0, 2 - _0xf_0x5dd['\u006C\u0065\u006E\u0067\u0074\u0068']);
  }
  const _0x2bfa = _0xf_0x5dd['\u0074\u006F\u004C\u006F\u0077\u0065\u0072\u0043\u0061\u0073\u0065']();
  return {
    '\u0073\u0063\u0072\u0069\u0070\u0074\u0050\u0061\u0074\u0068': _0xed618e,
    "scriptName": _0x97a3dg,
    '\u0065\u006E\u0076\u0050\u0072\u0065\u0066\u0069\u0078': _0xf_0x5dd,
    "tokenName": _0x2bfa
  };
}
class HttpClient {
  constructor(debug = false) {
    this['\u0064\u0065\u0062\u0075\u0067'] = debug;
  }
  log(msg, level = "\u0069\u006E\u0066\u006F") {
    var _0x58b;
    const now = new Date()['\u0074\u006F\u0049\u0053\u004F\u0053\u0074\u0072\u0069\u006E\u0067']();
    _0x58b = 9;
    if (level === "gubed".split("").reverse().join("") && !this['\u0064\u0065\u0062\u0075\u0067']) {
      return;
    }
    if (level === "rorre".split("").reverse().join("")) {
      console['\u0065\u0072\u0072\u006F\u0072'](`${now} - ERROR - ${msg}`);
    } else if (level === "\u0077\u0061\u0072\u006E") {
      console['\u0077\u0061\u0072\u006E'](`${now} - WARN - ${msg}`);
    } else if (level === "\u0064\u0065\u0062\u0075\u0067") {
      console['\u0064\u0065\u0062\u0075\u0067'](`${now} - DEBUG - ${msg}`);
    } else {
      console['\u006C\u006F\u0067'](`${now} - INFO - ${msg}`);
    }
  }
  async post(url, data, headers = {}, timeout = 30000) {
    try {
      if (this['\u0064\u0065\u0062\u0075\u0067']) {
        this['\u006C\u006F\u0067'](`HTTP POST请求: ${url}`, "\u0064\u0065\u0062\u0075\u0067");
        this['\u006C\u006F\u0067'](`请求头: ${JSON['\u0073\u0074\u0072\u0069\u006E\u0067\u0069\u0066\u0079'](headers)}`, "\u0064\u0065\u0062\u0075\u0067");
        const dataStr = JSON['\u0073\u0074\u0072\u0069\u006E\u0067\u0069\u0066\u0079'](data);
        this['\u006C\u006F\u0067'](`请求体: ${dataStr['\u006C\u0065\u006E\u0067\u0074\u0068'] > 200 ? dataStr['\u0073\u0075\u0062\u0073\u0074\u0072\u0069\u006E\u0067'](0, 200) + "\u002E\u002E\u002E" : dataStr}`, "gubed".split("").reverse().join(""));
      }
      var _0xb_0x06f;
      const response = await axios['\u0070\u006F\u0073\u0074'](url, data, {
        '\u0068\u0065\u0061\u0064\u0065\u0072\u0073': headers,
        '\u0074\u0069\u006D\u0065\u006F\u0075\u0074': timeout
      });
      _0xb_0x06f = 2;
      if (this['\u0064\u0065\u0062\u0075\u0067']) {
        const respStr = JSON['\u0073\u0074\u0072\u0069\u006E\u0067\u0069\u0066\u0079'](response['\u0064\u0061\u0074\u0061']);
        this['\u006C\u006F\u0067'](`响应: ${respStr['\u006C\u0065\u006E\u0067\u0074\u0068'] > 200 ? respStr['\u0073\u0075\u0062\u0073\u0074\u0072\u0069\u006E\u0067'](0, 200) + "...".split("").reverse().join("") : respStr}`, "gubed".split("").reverse().join(""));
      }
      return response['\u0064\u0061\u0074\u0061'];
    } catch (error) {
      this['\u006C\u006F\u0067'](`HTTP请求失败: ${error['\u006D\u0065\u0073\u0073\u0061\u0067\u0065']}`, "\u0065\u0072\u0072\u006F\u0072");
      throw new Error(`HTTP请求失败: ${error['\u006D\u0065\u0073\u0073\u0061\u0067\u0065']}`);
    }
  }
  async dfypApiPost(api, uid = "", token = "", data = {}, extraHeaders = {}) {
    try {
      if (!CryptoJS) {
        throw new Error("\u7F3A\u5C11\u0063\u0072\u0079\u0070\u0074\u006F\u002D\u006A\u0073\u5E93\uFF0C\u65E0\u6CD5\u751F\u6210\u7B7E\u540D");
      }
      const noncestr = crypto['\u0072\u0061\u006E\u0064\u006F\u006D\u0042\u0079\u0074\u0065\u0073'](16)['\u0074\u006F\u0053\u0074\u0072\u0069\u006E\u0067']("\u0068\u0065\u0078");
      const timestamp = Date['\u006E\u006F\u0077']()['\u0074\u006F\u0053\u0074\u0072\u0069\u006E\u0067']();
      const jsonstr = JSON['\u0073\u0074\u0072\u0069\u006E\u0067\u0069\u0066\u0079'](data);
      const signs = uid ? this['\u005F\u0063\u0072\u0065\u0061\u0074\u0065\u004C\u006F\u0067\u0067\u0065\u0064\u0049\u006E\u0053\u0069\u0067\u006E\u0073']({
        "uid": uid,
        '\u0061\u0070\u0069': api,
        '\u006E\u006F\u006E\u0063\u0065\u0073\u0074\u0072': noncestr,
        '\u0074\u0069\u006D\u0065\u0073\u0074\u0061\u006D\u0070': timestamp,
        '\u0074\u006F\u006B\u0065\u006E': token
      }) : this['\u005F\u0063\u0072\u0065\u0061\u0074\u0065\u004C\u006F\u0067\u0069\u006E\u0053\u0069\u0067\u006E\u0073']({
        '\u0075\u0078\u0069\u0064': uid,
        '\u0061\u0070\u0069': api,
        "noncestr": noncestr,
        '\u0074\u0069\u006D\u0065\u0073\u0074\u0061\u006D\u0070': timestamp,
        '\u0074\u006F\u006B\u0065\u006E': token,
        '\u006A\u0073\u006F\u006E\u0073\u0074\u0072': jsonstr
      });
      var _0xca79af = 1;
      const headers = {
        'Host': 'sapp.dfmc.com.cn',
        "\u0043\u006F\u006E\u006E\u0065\u0063\u0074\u0069\u006F\u006E": "\u006B\u0065\u0065\u0070\u002D\u0061\u006C\u0069\u0076\u0065",
        'Content-Type': 'application/json',
        "\u006B\u0065\u0079\u0073\u0069\u0067\u006E": signs['\u006B\u0065\u0079\u0073\u0069\u0067\u006E'],
        "\u0061\u0070\u0070\u0063\u006F\u0064\u0065": DFYP_CONFIG['\u0061\u0070\u0070\u0063\u006F\u0064\u0065'],
        'lang': DFYP_CONFIG['\u006C\u0061\u006E\u0067'],
        'uid': uid,
        'api': api,
        "\u0061\u0070\u0069\u0074\u0079\u0070\u0065": DFYP_CONFIG['\u0061\u0070\u0069\u0074\u0079\u0070\u0065'],
        "\u006E\u006F\u006E\u0063\u0065\u0073\u0074\u0072": noncestr,
        "\u0073\u0069\u0067\u006E": signs['\u0073\u0069\u0067\u006E'],
        'appid': DFYP_CONFIG['\u0061\u0070\u0070\u0069\u0064'],
        "\u0074\u0069\u006D\u0065\u0073\u0074\u0061\u006D\u0070": timestamp,
        ...extraHeaders
      };
      _0xca79af = 10;
      if (this['\u0064\u0065\u0062\u0075\u0067']) {
        this['\u006C\u006F\u0067'](`发送东风奕派API请求: ${api}`, "\u0064\u0065\u0062\u0075\u0067");
        this['\u006C\u006F\u0067'](`请求数据: ${jsonstr['\u006C\u0065\u006E\u0067\u0074\u0068'] > 200 ? jsonstr['\u0073\u0075\u0062\u0073\u0074\u0072\u0069\u006E\u0067'](0, 200) + "\u002E\u002E\u002E" : jsonstr}`, "gubed".split("").reverse().join(""));
      }
      return await this['\u0070\u006F\u0073\u0074'](DFYP_CONFIG['\u0061\u0070\u0069\u0055\u0072\u006C'], data, headers);
    } catch (error) {
      throw new Error(`东风奕派API请求失败: ${error['\u006D\u0065\u0073\u0073\u0061\u0067\u0065']}`);
    }
  }
  _createLoginSigns(params) {
    const {
      "uxid": uxid,
      "api": api,
      "noncestr": noncestr,
      '\u0074\u0069\u006D\u0065\u0073\u0074\u0061\u006D\u0070': timestamp,
      "token": token,
      "jsonstr": jsonstr = ""
    } = params;
    const signs = {};
    const signStr = uxid + api + noncestr + timestamp + token + jsonstr;
    const keysignStr = DFYP_CONFIG['\u0061\u0070\u0070\u0069\u0064'] + DFYP_CONFIG['\u0061\u0070\u0070\u006B\u0065\u0079'] + api + noncestr + timestamp + jsonstr;
    signs['\u0073\u0069\u0067\u006E'] = CryptoJS['\u0053\u0048\u0041\u0035\u0031\u0032'](signStr)['\u0074\u006F\u0053\u0074\u0072\u0069\u006E\u0067']();
    signs['\u006B\u0065\u0079\u0073\u0069\u0067\u006E'] = CryptoJS['\u0053\u0048\u0041\u0035\u0031\u0032'](keysignStr)['\u0074\u006F\u0053\u0074\u0072\u0069\u006E\u0067']();
    return signs;
  }
  _createLoggedInSigns(params) {
    const {
      '\u0075\u0069\u0064': uid,
      '\u0061\u0070\u0069': api,
      "noncestr": noncestr,
      '\u0074\u0069\u006D\u0065\u0073\u0074\u0061\u006D\u0070': timestamp,
      '\u0074\u006F\u006B\u0065\u006E': token
    } = params;
    const signs = {};
    const signStr = uid + api + noncestr + timestamp + token;
    const keysignStr = DFYP_CONFIG['\u0061\u0070\u0070\u0069\u0064'] + DFYP_CONFIG['\u0061\u0070\u0070\u006B\u0065\u0079'] + api + noncestr + timestamp;
    signs['\u0073\u0069\u0067\u006E'] = CryptoJS['\u0053\u0048\u0041\u0035\u0031\u0032'](signStr)['\u0074\u006F\u0053\u0074\u0072\u0069\u006E\u0067']();
    signs['\u006B\u0065\u0079\u0073\u0069\u0067\u006E'] = CryptoJS['\u0053\u0048\u0041\u0035\u0031\u0032'](keysignStr)['\u0074\u006F\u0053\u0074\u0072\u0069\u006E\u0067']();
    return signs;
  }
}
class PhonecodeClient {
  constructor(server, wxid, appid, options = {}) {
    this['\u0073\u0065\u0072\u0076\u0065\u0072'] = server;
    this['\u0077\u0078\u0069\u0064'] = wxid;
    this['\u0061\u0070\u0070\u0069\u0064'] = appid || DEFAULT_APPID;
    this['\u0064\u0065\u0062\u0075\u0067\u004D\u006F\u0064\u0065'] = options['\u0064\u0065\u0062\u0075\u0067'] || false;
    this['\u0068\u0074\u0074\u0070\u0043\u006C\u0069\u0065\u006E\u0074'] = options['\u0068\u0074\u0074\u0070\u0043\u006C\u0069\u0065\u006E\u0074'] || new HttpClient(this['\u0064\u0065\u0062\u0075\u0067\u004D\u006F\u0064\u0065']);
    this['\u0065\u006E\u0061\u0062\u006C\u0065\u0044\u0066\u0079\u0070'] = options['\u0065\u006E\u0061\u0062\u006C\u0065\u0044\u0066\u0079\u0070'] !== false;
    if (options['\u0074\u006F\u006B\u0065\u006E\u0046\u0069\u006C\u0065']) {
      this['\u0074\u006F\u006B\u0065\u006E\u0046\u0069\u006C\u0065'] = options['\u0074\u006F\u006B\u0065\u006E\u0046\u0069\u006C\u0065'];
    } else {
      var _0xcd818d;
      const scriptInfo = getScriptInfo();
      _0xcd818d = 0;
      const tokenName = scriptInfo['\u0074\u006F\u006B\u0065\u006E\u004E\u0061\u006D\u0065'];
      const scriptPath = scriptInfo['\u0073\u0063\u0072\u0069\u0070\u0074\u0050\u0061\u0074\u0068'];
      this['\u0074\u006F\u006B\u0065\u006E\u0046\u0069\u006C\u0065'] = path['\u006A\u006F\u0069\u006E'](path['\u0064\u0069\u0072\u006E\u0061\u006D\u0065'](scriptPath), `${tokenName}_tokens.json`);
      this['\u006C\u006F\u0067'](`Token将保存至: ${this['\u0074\u006F\u006B\u0065\u006E\u0046\u0069\u006C\u0065']}`, "gubed".split("").reverse().join(""));
    }
  }
  log(msg, level = "\u0069\u006E\u0066\u006F") {
    const now = new Date()['\u0074\u006F\u0049\u0053\u004F\u0053\u0074\u0072\u0069\u006E\u0067']();
    if (level === "gubed".split("").reverse().join("") && !this['\u0064\u0065\u0062\u0075\u0067\u004D\u006F\u0064\u0065']) {
      return;
    }
    if (level === "\u0065\u0072\u0072\u006F\u0072") {
      console['\u0065\u0072\u0072\u006F\u0072'](`${now} - ERROR - ${msg}`);
    } else if (level === "nraw".split("").reverse().join("")) {
      console['\u0077\u0061\u0072\u006E'](`${now} - WARN - ${msg}`);
    } else if (level === "gubed".split("").reverse().join("")) {
      console['\u0064\u0065\u0062\u0075\u0067'](`${now} - DEBUG - ${msg}`);
    } else {
      console['\u006C\u006F\u0067'](`${now} - INFO - ${msg}`);
    }
  }
  async commonPost(url, body, headers = null) {
    if (headers === null) {
      headers = {
        'accept': 'application/json',
        "\u0063\u006F\u006E\u0074\u0065\u006E\u0074\u002D\u0074\u0079\u0070\u0065": 'application/json'
      };
    }
    let apiUrl = url;
    if (url['\u0073\u0074\u0061\u0072\u0074\u0073\u0057\u0069\u0074\u0068']("\u002F")) {
      let serverAddress = this['\u0073\u0065\u0072\u0076\u0065\u0072'];
      if (!serverAddress['\u0073\u0074\u0061\u0072\u0074\u0073\u0057\u0069\u0074\u0068']("\u0068\u0074\u0074\u0070\u003A\u002F\u002F") && !serverAddress['\u0073\u0074\u0061\u0072\u0074\u0073\u0057\u0069\u0074\u0068']("\u0068\u0074\u0074\u0070\u0073\u003A\u002F\u002F")) {
        serverAddress = `http://${serverAddress}`;
      }
      apiUrl = `${serverAddress}/api${url}`;
    }
    try {
      this['\u006C\u006F\u0067'](`请求URL: ${apiUrl}`, "\u0064\u0065\u0062\u0075\u0067");
      this['\u006C\u006F\u0067'](`请求Body: ${JSON['\u0073\u0074\u0072\u0069\u006E\u0067\u0069\u0066\u0079'](body)}`, "gubed".split("").reverse().join(""));
      const result = await this['\u0068\u0074\u0074\u0070\u0043\u006C\u0069\u0065\u006E\u0074']['\u0070\u006F\u0073\u0074'](apiUrl, body, headers);
      this['\u006C\u006F\u0067'](`响应结果: ${JSON['\u0073\u0074\u0072\u0069\u006E\u0067\u0069\u0066\u0079'](result)}`, "gubed".split("").reverse().join(""));
      return result;
    } catch (error) {
      this['\u006C\u006F\u0067'](`请求失败: ${error['\u006D\u0065\u0073\u0073\u0061\u0067\u0065']}`, "\u0065\u0072\u0072\u006F\u0072");
      return null;
    }
  }
  async getLoginCode() {
    this['\u006C\u006F\u0067']("\u5F00\u59CB\u83B7\u53D6\u5C0F\u7A0B\u5E8F\u767B\u5F55\u0063\u006F\u0064\u0065\u002E\u002E\u002E", "\u0064\u0065\u0062\u0075\u0067");
    try {
      const result = await this['\u0063\u006F\u006D\u006D\u006F\u006E\u0050\u006F\u0073\u0074']("\u002F\u0057\u0078\u0061\u0070\u0070\u002F\u004A\u0053\u004C\u006F\u0067\u0069\u006E", {
        '\u0041\u0070\u0070\u0069\u0064': this['\u0061\u0070\u0070\u0069\u0064'],
        '\u0057\u0078\u0069\u0064': this['\u0077\u0078\u0069\u0064']
      });
      if (!result || !result['\u0053\u0075\u0063\u0063\u0065\u0073\u0073']) {
        this['\u006C\u006F\u0067'](`获取小程序授权code失败`, "\u0065\u0072\u0072\u006F\u0072");
        return null;
      }
      const code = result['\u0044\u0061\u0074\u0061']?.code;
      this['\u006C\u006F\u0067'](`成功获取小程序授权code`, "gubed".split("").reverse().join(""));
      if (code) {
        const tokenData = {
          "code": code,
          "expireTime": Math['\u0066\u006C\u006F\u006F\u0072'](Date['\u006E\u006F\u0077']() / 1000) + 300
        };
        this['\u0073\u0061\u0076\u0065\u0054\u006F\u006B\u0065\u006E'](tokenData);
        this['\u006C\u006F\u0067']("!\u529F\u6210\u5B58\u4FDDedoC".split("").reverse().join(""), "gubed".split("").reverse().join(""));
      }
      return code;
    } catch (error) {
      this['\u006C\u006F\u0067'](`获取code过程出错: ${error['\u006D\u0065\u0073\u0073\u0061\u0067\u0065']}`, "\u0065\u0072\u0072\u006F\u0072");
      return null;
    }
  }
  codeToToken(code) {
    return {
      '\u0063\u006F\u0064\u0065': code,
      "expireTime": Math['\u0066\u006C\u006F\u006F\u0072'](Date['\u006E\u006F\u0077']() / 1000) + 300
    };
  }
  saveToken(tokenData) {
    try {
      let tokens = {};
      if (fs['\u0065\u0078\u0069\u0073\u0074\u0073\u0053\u0079\u006E\u0063'](this['\u0074\u006F\u006B\u0065\u006E\u0046\u0069\u006C\u0065'])) {
        var _0x2g72df;
        const content = fs['\u0072\u0065\u0061\u0064\u0046\u0069\u006C\u0065\u0053\u0079\u006E\u0063'](this['\u0074\u006F\u006B\u0065\u006E\u0046\u0069\u006C\u0065'], "8-ftu".split("").reverse().join(""));
        _0x2g72df = 11;
        tokens = JSON['\u0070\u0061\u0072\u0073\u0065'](content);
      }
      tokens[this['\u0077\u0078\u0069\u0064']] = {
        '\u0061\u0070\u0070\u0069\u0064': this['\u0061\u0070\u0070\u0069\u0064'],
        '\u0074\u0069\u006D\u0065\u0073\u0074\u0061\u006D\u0070': Math['\u0066\u006C\u006F\u006F\u0072'](Date['\u006E\u006F\u0077']() / 1000),
        '\u0075\u0070\u0064\u0061\u0074\u0065\u005F\u0074\u0069\u006D\u0065': new Date()['\u0074\u006F\u0049\u0053\u004F\u0053\u0074\u0072\u0069\u006E\u0067']()['\u0072\u0065\u0070\u006C\u0061\u0063\u0065']("\u0054", "\u0020")['\u0073\u0075\u0062\u0073\u0074\u0072'](0, 19),
        ...tokenData
      };
      fs['\u0077\u0072\u0069\u0074\u0065\u0046\u0069\u006C\u0065\u0053\u0079\u006E\u0063'](this['\u0074\u006F\u006B\u0065\u006E\u0046\u0069\u006C\u0065'], JSON['\u0073\u0074\u0072\u0069\u006E\u0067\u0069\u0066\u0079'](tokens, null, 2), "\u0075\u0074\u0066\u002D\u0038");
      this['\u006C\u006F\u0067'](`Token已保存`, "\u0064\u0065\u0062\u0075\u0067");
      return true;
    } catch (error) {
      this['\u006C\u006F\u0067'](`保存token失败: ${error['\u006D\u0065\u0073\u0073\u0061\u0067\u0065']}`, "rorre".split("").reverse().join(""));
      return false;
    }
  }
  getToken() {
    try {
      if (!fs['\u0065\u0078\u0069\u0073\u0074\u0073\u0053\u0079\u006E\u0063'](this['\u0074\u006F\u006B\u0065\u006E\u0046\u0069\u006C\u0065'])) {
        return null;
      }
      var _0x48ge9b = 8;
      const content = fs['\u0072\u0065\u0061\u0064\u0046\u0069\u006C\u0065\u0053\u0079\u006E\u0063'](this['\u0074\u006F\u006B\u0065\u006E\u0046\u0069\u006C\u0065'], "\u0075\u0074\u0066\u002D\u0038");
      _0x48ge9b = 16;
      const tokens = JSON['\u0070\u0061\u0072\u0073\u0065'](content);
      if (this['\u0077\u0078\u0069\u0064'] in tokens) {
        return tokens[this['\u0077\u0078\u0069\u0064']];
      }
      return null;
    } catch (error) {
      this['\u006C\u006F\u0067'](`获取已保存token失败: ${error['\u006D\u0065\u0073\u0073\u0061\u0067\u0065']}`, "\u0065\u0072\u0072\u006F\u0072");
      return null;
    }
  }
  async getMobileNumber() {
    this['\u006C\u006F\u0067']("\u6B63\u5728\u83B7\u53D6\u5C0F\u7A0B\u5E8F\u624B\u673A\u53F7\u002E\u002E\u002E", "gubed".split("").reverse().join(""));
    try {
      const result = await this['\u0063\u006F\u006D\u006D\u006F\u006E\u0050\u006F\u0073\u0074']("eliboMllAteG/ppaxW/".split("").reverse().join(""), {
        '\u0041\u0070\u0070\u0069\u0064': this['\u0061\u0070\u0070\u0069\u0064'],
        "Wxid": this['\u0077\u0078\u0069\u0064']
      });
      if (!result || !result['\u0053\u0075\u0063\u0063\u0065\u0073\u0073']) {
        var _0x3e89e = 12;
        const errorMsg = result ? result['\u004D\u0065\u0073\u0073\u0061\u0067\u0065'] : "\u8BEF\u9519\u77E5\u672A".split("").reverse().join("");
        _0x3e89e = 17;
        this['\u006C\u006F\u0067'](`获取小程序手机号失败: ${errorMsg}`, "rorre".split("").reverse().join(""));
        return null;
      }
      var _0x8e4c = 7;
      const mobileData = result['\u0044\u0061\u0074\u0061'] || {};
      _0x8e4c = 7;
      this['\u006C\u006F\u0067'](`原始手机号数据: ${JSON['\u0073\u0074\u0072\u0069\u006E\u0067\u0069\u0066\u0079'](mobileData)['\u0073\u0075\u0062\u0073\u0074\u0072\u0069\u006E\u0067'](0, 200)}...`, "gubed".split("").reverse().join(""));
      var _0x91a84e = 15;
      let phoneInfo = null;
      _0x91a84e = 6;
      let phoneCode = null;
      try {
        if (mobileData['\u0044\u0061\u0074\u0061'] && typeof mobileData['\u0044\u0061\u0074\u0061'] === "gnirts".split("").reverse().join("")) {
          var _0x62d4a;
          const jsonData = JSON['\u0070\u0061\u0072\u0073\u0065'](mobileData['\u0044\u0061\u0074\u0061']);
          _0x62d4a = 4;
          if (jsonData['\u0077\u0078\u005F\u0070\u0068\u006F\u006E\u0065']) {
            phoneInfo = jsonData['\u0077\u0078\u005F\u0070\u0068\u006F\u006E\u0065'];
            this['\u006C\u006F\u0067']("\u4ECE\u0044\u0061\u0074\u0061\u002E\u0077\u0078\u005F\u0070\u0068\u006F\u006E\u0065\u4E2D\u627E\u5230\u624B\u673A\u53F7\u4FE1\u606F", "gubed".split("").reverse().join(""));
            if (phoneInfo['\u0064\u0061\u0074\u0061'] && typeof phoneInfo['\u0064\u0061\u0074\u0061'] === "gnirts".split("").reverse().join("")) {
              try {
                const dataObj = JSON['\u0070\u0061\u0072\u0073\u0065'](phoneInfo['\u0064\u0061\u0074\u0061']);
                if (dataObj['\u0063\u006F\u0064\u0065']) {
                  phoneCode = dataObj['\u0063\u006F\u0064\u0065'];
                  this['\u006C\u006F\u0067'](`从wx_phone.data中找到code: ${phoneCode}`, "\u0064\u0065\u0062\u0075\u0067");
                }
              } catch (e) {
                this['\u006C\u006F\u0067'](`解析wx_phone.data失败: ${e['\u006D\u0065\u0073\u0073\u0061\u0067\u0065']}`, "\u0064\u0065\u0062\u0075\u0067");
              }
            }
          }
        }
        if (!phoneCode && mobileData['\u0041\u004C\u004C\u004D\u006F\u0062\u0069\u006C\u0065'] && mobileData['\u0041\u004C\u004C\u004D\u006F\u0062\u0069\u006C\u0065']['\u006C\u0065\u006E\u0067\u0074\u0068'] > 0) {
          const mobile = mobileData['\u0041\u004C\u004C\u004D\u006F\u0062\u0069\u006C\u0065'][0];
          this['\u006C\u006F\u0067']("\u606F\u4FE1\u53F7\u673A\u624B\u5230\u627E\u4E2D\u7EC4\u6570eliboMLLA\u4ECE".split("").reverse().join(""), "gubed".split("").reverse().join(""));
          if (!phoneInfo) {
            phoneInfo = mobile;
          }
          if (mobile['\u0063\u006F\u0064\u0065']) {
            phoneCode = mobile['\u0063\u006F\u0064\u0065'];
            this['\u006C\u006F\u0067'](`从ALLMobile[0].code中找到code: ${phoneCode}`, "\u0064\u0065\u0062\u0075\u0067");
          } else if (mobile['\u0064\u0061\u0074\u0061'] && typeof mobile['\u0064\u0061\u0074\u0061'] === "\u0073\u0074\u0072\u0069\u006E\u0067") {
            try {
              const dataObj = JSON['\u0070\u0061\u0072\u0073\u0065'](mobile['\u0064\u0061\u0074\u0061']);
              if (dataObj['\u0063\u006F\u0064\u0065']) {
                phoneCode = dataObj['\u0063\u006F\u0064\u0065'];
                this['\u006C\u006F\u0067'](`从ALLMobile[0].data中找到code: ${phoneCode}`, "gubed".split("").reverse().join(""));
              }
            } catch (e) {
              this['\u006C\u006F\u0067'](`解析ALLMobile[0].data失败: ${e['\u006D\u0065\u0073\u0073\u0061\u0067\u0065']}`, "\u0064\u0065\u0062\u0075\u0067");
            }
          }
        }
        if (!phoneCode && mobileData['\u0053\u0063\u006F\u0070\u0065'] && mobileData['\u0053\u0063\u006F\u0070\u0065']['\u0070\u0068\u006F\u006E\u0065\u0043\u006F\u0064\u0065']) {
          phoneCode = mobileData['\u0053\u0063\u006F\u0070\u0065']['\u0070\u0068\u006F\u006E\u0065\u0043\u006F\u0064\u0065'];
          this['\u006C\u006F\u0067'](`从Scope.phoneCode中找到code: ${phoneCode}`, "gubed".split("").reverse().join(""));
        }
        if (!phoneCode) {
          const dataStr = JSON['\u0073\u0074\u0072\u0069\u006E\u0067\u0069\u0066\u0079'](mobileData);
          const codeMatch = dataStr['\u006D\u0061\u0074\u0063\u0068'](new RegExp('\u0022\u0063\u006F\u0064\u0065\u0022\u005C\u0073\u002A\u003A\u005C\u0073\u002A\u0022\u0028\u005B\u005E\u0022\u005D\u002B\u0029\u0022', ""));
          if (codeMatch && codeMatch[1]) {
            phoneCode = codeMatch[1];
            this['\u006C\u006F\u0067'](`通过正则表达式从响应中提取到code: ${phoneCode}`, "\u0064\u0065\u0062\u0075\u0067");
          }
        }
      } catch (parseError) {
        this['\u006C\u006F\u0067'](`解析手机号数据出错: ${parseError['\u006D\u0065\u0073\u0073\u0061\u0067\u0065']}`, "rorre".split("").reverse().join(""));
      }
      if (!phoneInfo) {
        this['\u006C\u006F\u0067'](`无法从响应中提取手机号信息`, "rorre".split("").reverse().join(""));
        return null;
      }
      const mobile = phoneInfo['\u006D\u006F\u0062\u0069\u006C\u0065'] || '';
      var _0xacb9f = 11;
      const showMobile = phoneInfo['\u0073\u0068\u006F\u0077\u005F\u006D\u006F\u0062\u0069\u006C\u0065'] || '';
      _0xacb9f = 1;
      const encryptedData = phoneInfo['\u0065\u006E\u0063\u0072\u0079\u0070\u0074\u0065\u0064\u0044\u0061\u0074\u0061'] || '';
      var _0xa7g5a = 16;
      const iv = phoneInfo['\u0069\u0076'] || '';
      _0xa7g5a = 17;
      this['\u006C\u006F\u0067'](`成功获取手机号: ${mobile || showMobile || "\u77E5\u672A".split("").reverse().join("")}`, "gubed".split("").reverse().join(""));
      this['\u006C\u006F\u0067'](`phoneCode: ${phoneCode ? "\u83B7\u53D6\u6210\u529F" : "\u5230\u627E\u672A".split("").reverse().join("")}`, "gubed".split("").reverse().join(""));
      return {
        '\u006D\u006F\u0062\u0069\u006C\u0065': mobile,
        '\u0073\u0068\u006F\u0077\u004D\u006F\u0062\u0069\u006C\u0065': showMobile,
        '\u0070\u0068\u006F\u006E\u0065\u0043\u006F\u0064\u0065': phoneCode,
        "encryptedData": encryptedData,
        "iv": iv,
        "originalData": mobileData
      };
    } catch (error) {
      this['\u006C\u006F\u0067'](`获取手机号过程出错: ${error['\u006D\u0065\u0073\u0073\u0061\u0067\u0065']}`, "rorre".split("").reverse().join(""));
      return null;
    }
  }
  async dfypLogin(phoneCode, loginCode) {
    this['\u006C\u006F\u0067']("\u6B63\u5728\u767B\u5F55\u4E1C\u98CE\u5955\u6D3E\u5C0F\u7A0B\u5E8F\u002E\u002E\u002E", "\u0064\u0065\u0062\u0075\u0067");
    try {
      if (!CryptoJS) {
        throw new Error("\u7F3A\u5C11\u0063\u0072\u0079\u0070\u0074\u006F\u002D\u006A\u0073\u5E93\uFF0C\u65E0\u6CD5\u4F7F\u7528\u4E1C\u98CE\u5955\u6D3E\u5C0F\u7A0B\u5E8F\u529F\u80FD");
      }
      if (!phoneCode) {
        throw new Error("edoCenohp\u7684\u6548\u65E0".split("").reverse().join(""));
      }
      this['\u006C\u006F\u0067'](`使用phoneCode: ${typeof phoneCode === "\u0073\u0074\u0072\u0069\u006E\u0067" ? phoneCode['\u0073\u0075\u0062\u0073\u0074\u0072\u0069\u006E\u0067'](0, 20) + "\u002E\u002E\u002E" : "\u672A\u77E5\u683C\u5F0F"}`, "gubed".split("").reverse().join(""));
      this['\u006C\u006F\u0067'](`使用loginCode: ${loginCode}`, "\u0064\u0065\u0062\u0075\u0067");
      const loginData = {
        "showLoading": true,
        "phoneCode": phoneCode,
        "loginCode": loginCode,
        "\u0061\u0070\u0070\u0043\u006F\u0064\u0065": "\u006D\u0069\u006E\u0069\u0070\u0072\u006F\u0067\u0072\u0061\u006D",
        "\u0065\u0071\u0075\u0069\u0070\u004E\u006F": "\u0031\u0032\u0033\u0034",
        "\u0063\u0068\u0061\u006E\u006E\u0065\u006C\u0049\u0064": "\u0031\u0032\u0033\u0034",
        "continueLogin": "\u0030",
        "\u0073\u0068\u0061\u0072\u0065\u0043\u0068\u0061\u006E\u006E\u0065\u006C": "",
        "\u0061\u0063\u0074\u0069\u0076\u0069\u0074\u0079\u004C\u0065\u0076\u0065\u006C\u0054\u0068\u0072\u0065\u0065\u0043\u0068\u0061\u006E\u006E\u0065\u006C\u0073": "",
        "\u0064\u006C\u0072\u0043\u006F\u0064\u0065": "",
        "\u0063\u0061\u0050\u0068\u006F\u006E\u0065": "",
        "\u0077\u0078\u0053\u0075\u006E\u0050\u0061\u0072\u0061\u006D\u0065\u0074\u0065\u0072\u0049\u0064": "",
        "registrationCarSeriesCode": "",
        "shareDate": ""
      };
      this['\u006C\u006F\u0067'](`登录请求数据: ${JSON['\u0073\u0074\u0072\u0069\u006E\u0067\u0069\u0066\u0079'](loginData)['\u0073\u0075\u0062\u0073\u0074\u0072\u0069\u006E\u0067'](0, 200)}...`, "gubed".split("").reverse().join(""));
      const result = await this['\u0068\u0074\u0074\u0070\u0043\u006C\u0069\u0065\u006E\u0074']['\u0064\u0066\u0079\u0070\u0041\u0070\u0069\u0050\u006F\u0073\u0074']("nigoLxw.2v.resu.margorpinim.pm.yl".split("").reverse().join(""), "", "", loginData);
      this['\u006C\u006F\u0067'](`登录响应: ${JSON['\u0073\u0074\u0072\u0069\u006E\u0067\u0069\u0066\u0079'](result)['\u0073\u0075\u0062\u0073\u0074\u0072\u0069\u006E\u0067'](0, 200)}...`, "\u0064\u0065\u0062\u0075\u0067");
      if (!result) {
        throw new Error("\u767B\u5F55\u8BF7\u6C42\u672A\u8FD4\u56DE\u4EFB\u4F55\u7ED3\u679C");
      }
      if (result['\u0072\u0065\u0073\u0075\u006C\u0074'] !== "\u0031") {
        const errorMsg = result['\u006D\u0073\u0067'] || "\u672A\u77E5\u9519\u8BEF";
        this['\u006C\u006F\u0067'](`东风奕派小程序登录失败: ${errorMsg}`, "\u0065\u0072\u0072\u006F\u0072");
        return null;
      }
      this['\u006C\u006F\u0067'](`东风奕派小程序登录成功`, "ofni".split("").reverse().join(""));
      const dfypToken = {
        "userId": result['\u0075\u0073\u0065\u0072']['\u0075\u0073\u0065\u0072\u0049\u0064'],
        '\u0074\u006F\u006B\u0065\u006E': result['\u0074\u006F\u006B\u0065\u006E'],
        '\u006E\u0069\u0063\u006B\u004E\u0061\u006D\u0065': result['\u0075\u0073\u0065\u0072']['\u006E\u0069\u0063\u006B\u004E\u0061\u006D\u0065'],
        '\u0075\u0073\u0065\u0072\u0050\u0068\u006F\u006E\u0065': result['\u0075\u0073\u0065\u0072']['\u0075\u0073\u0065\u0072\u0050\u0068\u006F\u006E\u0065'],
        "expireTime": Math['\u0066\u006C\u006F\u006F\u0072'](Date['\u006E\u006F\u0077']() / 1000) + (result['\u0065\u0078\u0070\u0069\u0072\u0065\u0073\u0049\u006E'] || 7200)
      };
      this['\u0073\u0061\u0076\u0065\u0054\u006F\u006B\u0065\u006E']({
        ...(this['\u0067\u0065\u0074\u0054\u006F\u006B\u0065\u006E']() || {}),
        '\u0064\u0066\u0079\u0070': dfypToken
      });
      return dfypToken;
    } catch (error) {
      this['\u006C\u006F\u0067'](`东风奕派小程序登录失败: ${error['\u006D\u0065\u0073\u0073\u0061\u0067\u0065']}`, "\u0065\u0072\u0072\u006F\u0072");
      return null;
    }
  }
  async dfypCheckSignIn() {
    this['\u006C\u006F\u0067']("\u6B63\u5728\u67E5\u8BE2\u4E1C\u98CE\u5955\u6D3E\u5C0F\u7A0B\u5E8F\u7B7E\u5230\u72B6\u6001\u002E\u002E\u002E", "\u0064\u0065\u0062\u0075\u0067");
    try {
      const tokenData = this['\u0067\u0065\u0074\u0054\u006F\u006B\u0065\u006E']();
      if (!tokenData || !tokenData['\u0064\u0066\u0079\u0070']) {
        throw new Error("\u606F\u4FE1\u5F55\u767B\u7684\u5E8F\u7A0B\u5C0F\u6D3E\u5955\u98CE\u4E1C\u5230\u627E\u672A".split("").reverse().join(""));
      }
      const {
        '\u0075\u0073\u0065\u0072\u0049\u0064': userId,
        '\u0074\u006F\u006B\u0065\u006E': token
      } = tokenData['\u0064\u0066\u0079\u0070'];
      const result = await this['\u0068\u0074\u0074\u0070\u0043\u006C\u0069\u0065\u006E\u0074']['\u0064\u0066\u0079\u0070\u0041\u0070\u0069\u0050\u006F\u0073\u0074']("tsil.ningis.ytivitca.margorpinim.pm.yl".split("").reverse().join(""), userId['\u0074\u006F\u0053\u0074\u0072\u0069\u006E\u0067'](), token, {});
      if (!result || result['\u0072\u0065\u0073\u0075\u006C\u0074'] !== "\u0031") {
        const errorMsg = result ? result['\u006D\u0073\u0067'] : "\u672A\u77E5\u9519\u8BEF";
        this['\u006C\u006F\u0067'](`查询东风奕派小程序签到状态失败: ${errorMsg}`, "\u0065\u0072\u0072\u006F\u0072");
        return null;
      }
      this['\u006C\u006F\u0067'](`签到状态响应: ${JSON['\u0073\u0074\u0072\u0069\u006E\u0067\u0069\u0066\u0079'](result)['\u0073\u0075\u0062\u0073\u0074\u0072\u0069\u006E\u0067'](0, 500)}`, "gubed".split("").reverse().join(""));
      let todayHasSignIn = false;
      if (result['\u0072\u006F\u0077\u0073'] && result['\u0072\u006F\u0077\u0073']['\u0074\u006F\u0064\u0061\u0079\u0048\u0061\u0073\u0053\u0069\u0067\u006E\u0049\u006E'] === "\u0031") {
        todayHasSignIn = true;
      } else if (result['\u0072\u006F\u0077\u0073'] && result['\u0072\u006F\u0077\u0073']['\u0074\u006F\u0064\u0061\u0079\u0053\u0069\u0067\u006E\u0065\u0064'] === "\u0031") {
        todayHasSignIn = true;
      } else if (result['\u0072\u006F\u0077\u0073'] && result['\u0072\u006F\u0077\u0073']['\u0074\u006F\u0064\u0061\u0079\u0053\u0069\u0067\u006E\u0065\u0064'] === true) {
        todayHasSignIn = true;
      } else if (result['\u0072\u006F\u0077\u0073'] && result['\u0072\u006F\u0077\u0073']['\u0069\u0073\u0053\u0069\u0067\u006E\u0065\u0064'] === "\u0031") {
        todayHasSignIn = true;
      } else if (result['\u0072\u006F\u0077\u0073'] && result['\u0072\u006F\u0077\u0073']['\u0069\u0073\u0053\u0069\u0067\u006E\u0065\u0064'] === true) {
        todayHasSignIn = true;
      } else if (result['\u0072\u006F\u0077\u0073'] && result['\u0072\u006F\u0077\u0073']['\u0069\u0073\u0053\u0069\u0067\u006E\u0065\u0064\u0054\u006F\u0064\u0061\u0079'] === true) {
        todayHasSignIn = true;
      } else if (result['\u0072\u006F\u0077\u0073'] && result['\u0072\u006F\u0077\u0073']['\u0070\u0065\u0072\u0073\u0069\u0073\u0074\u0065\u006E\u0074\u0044\u0061\u0079'] > 0) {
        this['\u006C\u006F\u0067'](`检测到连续签到天数: ${result['\u0072\u006F\u0077\u0073']['\u0070\u0065\u0072\u0073\u0069\u0073\u0074\u0065\u006E\u0074\u0044\u0061\u0079']}，可能今天已签到`, "gubed".split("").reverse().join(""));
      }
      if (todayHasSignIn) {
        this['\u006C\u006F\u0067']("\u4E86\u8FC7\u5230\u7B7E\u7ECF\u5DF2\u5929\u4ECA".split("").reverse().join(""), "\u0069\u006E\u0066\u006F");
      } else {
        this['\u006C\u006F\u0067']("\u4ECA\u5929\u5C1A\u672A\u7B7E\u5230", "\u0069\u006E\u0066\u006F");
      }
      this['\u006C\u006F\u0067'](`查询东风奕派小程序签到状态成功`, "\u0064\u0065\u0062\u0075\u0067");
      return {
        ...result['\u0072\u006F\u0077\u0073'],
        '\u0074\u006F\u0064\u0061\u0079\u0048\u0061\u0073\u0053\u0069\u0067\u006E\u0049\u006E': todayHasSignIn
      };
    } catch (error) {
      this['\u006C\u006F\u0067'](`查询东风奕派小程序签到状态失败: ${error['\u006D\u0065\u0073\u0073\u0061\u0067\u0065']}`, "rorre".split("").reverse().join(""));
      return null;
    }
  }
  async dfypSignIn() {
    this['\u006C\u006F\u0067']("\u6B63\u5728\u6267\u884C\u4E1C\u98CE\u5955\u6D3E\u5C0F\u7A0B\u5E8F\u7B7E\u5230\u002E\u002E\u002E", "\u0064\u0065\u0062\u0075\u0067");
    try {
      var _0xbe4e5e;
      const tokenData = this['\u0067\u0065\u0074\u0054\u006F\u006B\u0065\u006E']();
      _0xbe4e5e = "cejoil".split("").reverse().join("");
      if (!tokenData || !tokenData['\u0064\u0066\u0079\u0070']) {
        throw new Error("\u672A\u627E\u5230\u4E1C\u98CE\u5955\u6D3E\u5C0F\u7A0B\u5E8F\u7684\u767B\u5F55\u4FE1\u606F");
      }
      const {
        "userId": userId,
        "token": token
      } = tokenData['\u0064\u0066\u0079\u0070'];
      const result = await this['\u0068\u0074\u0074\u0070\u0043\u006C\u0069\u0065\u006E\u0074']['\u0064\u0066\u0079\u0070\u0041\u0070\u0069\u0050\u006F\u0073\u0074']("\u006C\u0079\u002E\u006D\u0070\u002E\u006D\u0069\u006E\u0069\u0070\u0072\u006F\u0067\u0072\u0061\u006D\u002E\u0061\u0063\u0074\u0069\u0076\u0069\u0074\u0079\u002E\u0073\u0069\u0067\u006E\u0069\u006E", userId['\u0074\u006F\u0053\u0074\u0072\u0069\u006E\u0067'](), token, {});
      if (!result) {
        this['\u006C\u006F\u0067'](`东风奕派小程序签到失败: 网络错误`, "rorre".split("").reverse().join(""));
        return false;
      }
      this['\u006C\u006F\u0067'](`签到响应: ${JSON['\u0073\u0074\u0072\u0069\u006E\u0067\u0069\u0066\u0079'](result)}`, "\u0064\u0065\u0062\u0075\u0067");
      if (result['\u0072\u0065\u0073\u0075\u006C\u0074'] === "\u0031") {
        this['\u006C\u006F\u0067'](`东风奕派小程序签到成功: ${result['\u006D\u0073\u0067'] || "\u529F\u6210\u5230\u7B7E".split("").reverse().join("")}`, "\u0069\u006E\u0066\u006F");
        return true;
      } else {
        const msg = result['\u006D\u0073\u0067'] || '';
        if (msg['\u0069\u006E\u0063\u006C\u0075\u0064\u0065\u0073']("\u5230\u7B7E\u7ECF\u5DF2".split("").reverse().join("")) || msg['\u0069\u006E\u0063\u006C\u0075\u0064\u0065\u0073']("\u5DF2\u7B7E\u5230")) {
          this['\u006C\u006F\u0067'](`东风奕派小程序签到结果: ${msg}（视为成功）`, "\u0069\u006E\u0066\u006F");
          return true;
        } else {
          this['\u006C\u006F\u0067'](`东风奕派小程序签到失败: ${msg}`, "\u0065\u0072\u0072\u006F\u0072");
          return false;
        }
      }
    } catch (error) {
      this['\u006C\u006F\u0067'](`东风奕派小程序签到失败: ${error['\u006D\u0065\u0073\u0073\u0061\u0067\u0065']}`, "\u0065\u0072\u0072\u006F\u0072");
      return false;
    }
  }
  async dfypProcess() {
    if (!this['\u0065\u006E\u0061\u0062\u006C\u0065\u0044\u0066\u0079\u0070']) {
      this['\u006C\u006F\u0067']("\u7528\u7981\u5DF2\u80FD\u529F\u5E8F\u7A0B\u5C0F\u6D3E\u5955\u98CE\u4E1C".split("").reverse().join(""), "\u0064\u0065\u0062\u0075\u0067");
      return false;
    }
    try {
      this['\u006C\u006F\u0067']("\u5F00\u59CB\u5904\u7406\u4E1C\u98CE\u5955\u6D3E\u5C0F\u7A0B\u5E8F\u4EFB\u52A1\u002E\u002E\u002E", "ofni".split("").reverse().join(""));
      let tokenData = this['\u0067\u0065\u0074\u0054\u006F\u006B\u0065\u006E']();
      let dfypToken = tokenData?.dfyp;
      const now = Math['\u0066\u006C\u006F\u006F\u0072'](Date['\u006E\u006F\u0077']() / 1000);
      if (dfypToken && dfypToken['\u0065\u0078\u0070\u0069\u0072\u0065\u0054\u0069\u006D\u0065'] > now) {
        this['\u006C\u006F\u0067'](`使用已有的东风奕派小程序登录凭证，用户: ${dfypToken['\u006E\u0069\u0063\u006B\u004E\u0061\u006D\u0065'] || dfypToken['\u0075\u0073\u0065\u0072\u0049\u0064']}`, "\u0069\u006E\u0066\u006F");
      } else {
        const code = await this['\u0067\u0065\u0074\u004C\u006F\u0067\u0069\u006E\u0043\u006F\u0064\u0065']();
        if (!code) {
          return false;
        }
        const mobileData = await this['\u0067\u0065\u0074\u004D\u006F\u0062\u0069\u006C\u0065\u004E\u0075\u006D\u0062\u0065\u0072']();
        if (!mobileData) {
          this['\u006C\u006F\u0067']("\u83B7\u53D6\u624B\u673A\u53F7\u5931\u8D25\uFF0C\u65E0\u6CD5\u767B\u5F55\u4E1C\u98CE\u5955\u6D3E\u5C0F\u7A0B\u5E8F", "\u0065\u0072\u0072\u006F\u0072");
          return false;
        }
        var _0x_0xe6b = 10;
        let phoneCode = null;
        _0x_0xe6b = 3;
        if (mobileData['\u0070\u0068\u006F\u006E\u0065\u0043\u006F\u0064\u0065']) {
          phoneCode = mobileData['\u0070\u0068\u006F\u006E\u0065\u0043\u006F\u0064\u0065'];
          this['\u006C\u006F\u0067']("edoCenohp\u4E3A\u4F5CedoCenohp.ataDelibom\u7528\u4F7F".split("").reverse().join(""), "\u0064\u0065\u0062\u0075\u0067");
        } else if (mobileData['\u006F\u0072\u0069\u0067\u0069\u006E\u0061\u006C\u0044\u0061\u0074\u0061']) {
          const originalData = mobileData['\u006F\u0072\u0069\u0067\u0069\u006E\u0061\u006C\u0044\u0061\u0074\u0061'];
          if (originalData['\u0041\u004C\u004C\u004D\u006F\u0062\u0069\u006C\u0065'] && originalData['\u0041\u004C\u004C\u004D\u006F\u0062\u0069\u006C\u0065']['\u006C\u0065\u006E\u0067\u0074\u0068'] > 0) {
            var _0x439bea;
            const mobile = originalData['\u0041\u004C\u004C\u004D\u006F\u0062\u0069\u006C\u0065'][0];
            _0x439bea = 10;
            if (mobile['\u0063\u006F\u0064\u0065']) {
              phoneCode = mobile['\u0063\u006F\u0064\u0065'];
              this['\u006C\u006F\u0067']("edoCenohp\u4E3A\u4F5Cedoc.]0[eliboMLLA\u7528\u4F7F".split("").reverse().join(""), "\u0064\u0065\u0062\u0075\u0067");
            }
          }
          if (!phoneCode && originalData['\u0044\u0061\u0074\u0061'] && typeof originalData['\u0044\u0061\u0074\u0061'] === "gnirts".split("").reverse().join("")) {
            try {
              const dataObj = JSON['\u0070\u0061\u0072\u0073\u0065'](originalData['\u0044\u0061\u0074\u0061']);
              if (dataObj['\u0077\u0078\u005F\u0070\u0068\u006F\u006E\u0065'] && dataObj['\u0077\u0078\u005F\u0070\u0068\u006F\u006E\u0065']['\u0064\u0061\u0074\u0061']) {
                try {
                  const phoneData = JSON['\u0070\u0061\u0072\u0073\u0065'](dataObj['\u0077\u0078\u005F\u0070\u0068\u006F\u006E\u0065']['\u0064\u0061\u0074\u0061']);
                  if (phoneData['\u0063\u006F\u0064\u0065']) {
                    phoneCode = phoneData['\u0063\u006F\u0064\u0065'];
                    this['\u006C\u006F\u0067']("\u4F7F\u7528\u0044\u0061\u0074\u0061\u002E\u0077\u0078\u005F\u0070\u0068\u006F\u006E\u0065\u002E\u0064\u0061\u0074\u0061\u4E2D\u7684\u0063\u006F\u0064\u0065\u4F5C\u4E3A\u0070\u0068\u006F\u006E\u0065\u0043\u006F\u0064\u0065", "gubed".split("").reverse().join(""));
                  }
                } catch (e) {
                  this['\u006C\u006F\u0067'](`解析wx_phone.data失败: ${e['\u006D\u0065\u0073\u0073\u0061\u0067\u0065']}`, "gubed".split("").reverse().join(""));
                }
              }
            } catch (e) {
              this['\u006C\u006F\u0067'](`解析Data字段失败: ${e['\u006D\u0065\u0073\u0073\u0061\u0067\u0065']}`, "\u0064\u0065\u0062\u0075\u0067");
            }
          }
          if (!phoneCode) {
            var _0x7d69dc = 6;
            const dataStr = JSON['\u0073\u0074\u0072\u0069\u006E\u0067\u0069\u0066\u0079'](originalData);
            _0x7d69dc = 9;
            const codeMatch = dataStr['\u006D\u0061\u0074\u0063\u0068'](new RegExp('\u0022\u0063\u006F\u0064\u0065\u0022\u005C\u0073\u002A\u003A\u005C\u0073\u002A\u0022\u0028\u005B\u005E\u0022\u005D\u002B\u0029\u0022', ""));
            if (codeMatch && codeMatch[1]) {
              phoneCode = codeMatch[1];
              this['\u006C\u006F\u0067']("\u901A\u8FC7\u6B63\u5219\u8868\u8FBE\u5F0F\u4ECE\u539F\u59CB\u6570\u636E\u4E2D\u63D0\u53D6\u0063\u006F\u0064\u0065", "\u0064\u0065\u0062\u0075\u0067");
            }
          }
        }
        if (!phoneCode && mobileData['\u0065\u006E\u0063\u0072\u0079\u0070\u0074\u0065\u0064\u0044\u0061\u0074\u0061'] && mobileData['\u0069\u0076']) {
          this['\u006C\u006F\u0067']("\u672A\u627E\u5230\u0070\u0068\u006F\u006E\u0065\u0043\u006F\u0064\u0065\uFF0C\u5C06\u4F7F\u7528\u0065\u006E\u0063\u0072\u0079\u0070\u0074\u0065\u0064\u0044\u0061\u0074\u0061\u548C\u0069\u0076\u5C1D\u8BD5\u767B\u5F55", "\u0077\u0061\u0072\u006E");
          phoneCode = JSON['\u0073\u0074\u0072\u0069\u006E\u0067\u0069\u0066\u0079']({
            "encryptedData": mobileData['\u0065\u006E\u0063\u0072\u0079\u0070\u0074\u0065\u0064\u0044\u0061\u0074\u0061'],
            "iv": mobileData['\u0069\u0076']
          });
        }
        if (!phoneCode) {
          this['\u006C\u006F\u0067']("\u65E0\u6CD5\u83B7\u53D6\u0070\u0068\u006F\u006E\u0065\u0043\u006F\u0064\u0065\uFF0C\u65E0\u6CD5\u767B\u5F55\u4E1C\u98CE\u5955\u6D3E\u5C0F\u7A0B\u5E8F", "\u0065\u0072\u0072\u006F\u0072");
          this['\u006C\u006F\u0067'](`完整的响应数据: ${JSON['\u0073\u0074\u0072\u0069\u006E\u0067\u0069\u0066\u0079'](mobileData)}`, "gubed".split("").reverse().join(""));
          return false;
        }
        dfypToken = await this['\u0064\u0066\u0079\u0070\u004C\u006F\u0067\u0069\u006E'](phoneCode, code);
        if (!dfypToken) {
          return false;
        }
      }
      const signResult = await this['\u0064\u0066\u0079\u0070\u0053\u0069\u0067\u006E\u0049\u006E']();
      if (signResult) {
        const signStatus = await this['\u0064\u0066\u0079\u0070\u0043\u0068\u0065\u0063\u006B\u0053\u0069\u0067\u006E\u0049\u006E']();
        if (signStatus && signStatus['\u0070\u0065\u0072\u0073\u0069\u0073\u0074\u0065\u006E\u0074\u0044\u0061\u0079']) {
          this['\u006C\u006F\u0067'](`签到状态: 连续签到${signStatus['\u0070\u0065\u0072\u0073\u0069\u0073\u0074\u0065\u006E\u0074\u0044\u0061\u0079'] || "\u0030"}天`, "\u0069\u006E\u0066\u006F");
        }
      }
      return signResult;
    } catch (error) {
      this['\u006C\u006F\u0067'](`东风奕派小程序处理失败: ${error['\u006D\u0065\u0073\u0073\u0061\u0067\u0065']}`, "\u0065\u0072\u0072\u006F\u0072");
      return false;
    }
  }
  async loginProcess() {
    if (!this['\u0077\u0078\u0069\u0064']) {
      this['\u006C\u006F\u0067']("DIXW\u7F6E\u914D\u672A\uFF1A\u8BEF\u9519".split("").reverse().join(""), "\u0065\u0072\u0072\u006F\u0072");
      return false;
    }
    var _0xcac = 11;
    const code = await this['\u0067\u0065\u0074\u004C\u006F\u0067\u0069\u006E\u0043\u006F\u0064\u0065']();
    _0xcac = 16;
    if (!code) {
      return false;
    }
    if (this['\u0065\u006E\u0061\u0062\u006C\u0065\u0044\u0066\u0079\u0070']) {
      try {
        await this['\u0064\u0066\u0079\u0070\u0050\u0072\u006F\u0063\u0065\u0073\u0073']();
      } catch (error) {
        this['\u006C\u006F\u0067'](`执行东风奕派处理时出错: ${error['\u006D\u0065\u0073\u0073\u0061\u0067\u0065']}`, "\u0065\u0072\u0072\u006F\u0072");
      }
    }
    return true;
  }
}
function getEnvs(prefix) {
  var _0x078db = 12;
  const _0x1d8ed = {};
  _0x078db = 1;
  for (const _0x8f_0x925 in process['\u0065\u006E\u0076']) {
    if (_0x8f_0x925['\u0073\u0074\u0061\u0072\u0074\u0073\u0057\u0069\u0074\u0068'](`${prefix}_`)) {
      _0x1d8ed[_0x8f_0x925] = process['\u0065\u006E\u0076'][_0x8f_0x925];
    }
  }
  return _0x1d8ed;
}
function setupCommander() {
  var _0xdd4b = 10;
  const _0xb77e = getScriptInfo();
  _0xdd4b = 12;
  const _0x8bd = _0xb77e['\u0065\u006E\u0076\u0050\u0072\u0065\u0066\u0069\u0078'];
  program['\u0064\u0065\u0073\u0063\u0072\u0069\u0070\u0074\u0069\u006F\u006E']("\u5C0F\u7A0B\u5E8F\u767B\u5F55\u5DE5\u5177")['\u006F\u0070\u0074\u0069\u006F\u006E']("\u002D\u002D\u0073\u0065\u0072\u0076\u0065\u0072\u0020\u003C\u0073\u0065\u0072\u0076\u0065\u0072\u003E", "\u5FAE\u4FE1\u4E2D\u95F4\u670D\u52A1\u5668\u5730\u5740\uFF0C\u683C\u5F0F\u4E3A\u0049\u0050\u003A\u0050\u004F\u0052\u0054\u6216\u5B8C\u6574\u0055\u0052\u004C")['\u006F\u0070\u0074\u0069\u006F\u006E'](">dixw< dixw--".split("").reverse().join(""), "DI\u4FE1\u5FAE".split("").reverse().join(""))['\u006F\u0070\u0074\u0069\u006F\u006E']("\u002D\u002D\u0061\u0070\u0070\u0069\u0064\u0020\u003C\u0061\u0070\u0070\u0069\u0064\u003E", "DIppA\u5E8F\u7A0B\u5C0F".split("").reverse().join(""))['\u006F\u0070\u0074\u0069\u006F\u006E']("\u002D\u002D\u0064\u0065\u0062\u0075\u0067", "\u5F0F\u6A21\u8BD5\u8C03\u7528\u542F".split("").reverse().join(""))['\u006F\u0070\u0074\u0069\u006F\u006E'](">stnuocca< stnuocca--".split("").reverse().join(""), "dixw\u4E2A\u591A\u9694\u5206\u7B26\u884C\u6362\u7528\uFF0C\u8868\u5217\u53F7\u8D26\u7684\u7406\u5904\u8981".split("").reverse().join(""))['\u006F\u0070\u0074\u0069\u006F\u006E']("\u002D\u002D\u0061\u0063\u0063\u006F\u0075\u006E\u0074\u0073\u002D\u0066\u0069\u006C\u0065\u0020\u003C\u0066\u0069\u006C\u0065\u003E", "\u5305\u542B\u8981\u5904\u7406\u7684\u8D26\u53F7\u5217\u8868\u7684\u6587\u4EF6\uFF0C\u6BCF\u884C\u4E00\u4E2A\u0077\u0078\u0069\u0064")['\u006F\u0070\u0074\u0069\u006F\u006E']("\u002D\u002D\u0067\u0065\u0074\u002D\u006D\u006F\u0062\u0069\u006C\u0065", "\u53F7\u673A\u624B\u7684\u5B9A\u7ED1\u5E8F\u7A0B\u5C0F\u53D6\u83B7".split("").reverse().join(""))['\u006F\u0070\u0074\u0069\u006F\u006E']("\u002D\u002D\u0074\u006F\u006B\u0065\u006E\u002D\u0066\u0069\u006C\u0065\u0020\u003C\u0066\u0069\u006C\u0065\u003E", "\u6307\u5B9A\u0074\u006F\u006B\u0065\u006E\u4FDD\u5B58\u7684\u6587\u4EF6\u8DEF\u5F84")['\u006F\u0070\u0074\u0069\u006F\u006E']("\u002D\u002D\u0065\u006E\u0076\u002D\u0070\u0072\u0065\u0066\u0069\u0078\u0020\u003C\u0070\u0072\u0065\u0066\u0069\u0078\u003E", "\u73AF\u5883\u53D8\u91CF\u524D\u7F00", _0x8bd)['\u006F\u0070\u0074\u0069\u006F\u006E']("\u002D\u002D\u0074\u0065\u0073\u0074", "\u4F5C\u64CD\u884C\u6267\u4E0D\u606F\u4FE1\u7F6E\u914D\u5370\u6253\u53EA\uFF0C\u5F0F\u6A21\u8BD5\u6D4B".split("").reverse().join(""))['\u006F\u0070\u0074\u0069\u006F\u006E']("pyfd-elbasid--".split("").reverse().join(""), "\u7981\u7528\u4E1C\u98CE\u5955\u6D3E\u5C0F\u7A0B\u5E8F\u529F\u80FD")['\u006F\u0070\u0074\u0069\u006F\u006E']("\u002D\u002D\u0064\u0066\u0079\u0070\u002D\u006F\u006E\u006C\u0079", "\u4EC5\u6267\u884C\u4E1C\u98CE\u5955\u6D3E\u5C0F\u7A0B\u5E8F\u529F\u80FD")['\u0076\u0065\u0072\u0073\u0069\u006F\u006E']("\u0031\u002E\u0032\u002E\u0030");
  program['\u0070\u0061\u0072\u0073\u0065'](process['\u0061\u0072\u0067\u0076']);
  return program['\u006F\u0070\u0074\u0073']();
}
async function main(_0xeab6a, _0x3acebf) {
  const _0x26gf5f = setupCommander();
  const _0xeb5fdc = _0x26gf5f['\u0064\u0065\u0062\u0075\u0067'] || false;
  var _0x658c = 6;
  const _0x61d = _0x26gf5f['\u0065\u006E\u0076\u0050\u0072\u0065\u0066\u0069\u0078'];
  _0x658c = 15;
  var _0x59609a;
  const _0x413a = _0x26gf5f['\u0073\u0065\u0072\u0076\u0065\u0072'] || process['\u0065\u006E\u0076']['\u0050\u0048\u004F\u004E\u0045\u0043\u004F\u0044\u0045\u005F\u0053\u0045\u0052\u0056\u0045\u0052'];
  _0x59609a = 8;
  const _0xf81g0f = _0x26gf5f['\u0061\u0070\u0070\u0069\u0064'];
  var _0xf61fbc = 16;
  const _0xe5ga = _0x26gf5f['\u0074\u006F\u006B\u0065\u006E\u0046\u0069\u006C\u0065'] || process['\u0065\u006E\u0076'][`${_0x61d}_TOKEN_FILE`];
  _0xf61fbc = 5;
  const _0x2bae0f = !_0x26gf5f['\u0064\u0069\u0073\u0061\u0062\u006C\u0065\u0044\u0066\u0079\u0070'];
  const _0x5c54ee = _0x26gf5f['\u0064\u0066\u0079\u0070\u004F\u006E\u006C\u0079'] || false;
  if (!_0x413a) {
    console['\u0065\u0072\u0072\u006F\u0072']("\u91CF\u53D8\u5883\u73AFREVRES_EDOCENOHP\u7F6E\u8BBE\u6216\u6570\u53C2revres--\u7528\u4F7F\u8BF7\uFF0C\u5740\u5730\u5668\u52A1\u670D\u95F4\u4E2D\u4FE1\u5FAE\u4F9B\u63D0\u672A\uFF1A\u8BEF\u9519".split("").reverse().join(""));
    return false;
  }
  let _0x894e = [];
  if (_0x26gf5f['\u0061\u0063\u0063\u006F\u0075\u006E\u0074\u0073']) {
    _0x894e = _0x26gf5f['\u0061\u0063\u0063\u006F\u0075\u006E\u0074\u0073']['\u0073\u0070\u006C\u0069\u0074']("\u000A")['\u0066\u0069\u006C\u0074\u0065\u0072'](wxid => wxid['\u0074\u0072\u0069\u006D']())['\u006D\u0061\u0070'](wxid => wxid['\u0074\u0072\u0069\u006D']());
  } else if (_0x26gf5f['\u0061\u0063\u0063\u006F\u0075\u006E\u0074\u0073\u0046\u0069\u006C\u0065'] && fs['\u0065\u0078\u0069\u0073\u0074\u0073\u0053\u0079\u006E\u0063'](_0x26gf5f['\u0061\u0063\u0063\u006F\u0075\u006E\u0074\u0073\u0046\u0069\u006C\u0065'])) {
    const _0xda4fae = fs['\u0072\u0065\u0061\u0064\u0046\u0069\u006C\u0065\u0053\u0079\u006E\u0063'](_0x26gf5f['\u0061\u0063\u0063\u006F\u0075\u006E\u0074\u0073\u0046\u0069\u006C\u0065'], "\u0075\u0074\u0066\u002D\u0038");
    _0x894e = _0xda4fae['\u0073\u0070\u006C\u0069\u0074']("\u000A")['\u0066\u0069\u006C\u0074\u0065\u0072'](line => line['\u0074\u0072\u0069\u006D']())['\u006D\u0061\u0070'](line => line['\u0074\u0072\u0069\u006D']());
  } else if (_0x26gf5f['\u0077\u0078\u0069\u0064']) {
    _0x894e = [_0x26gf5f['\u0077\u0078\u0069\u0064']];
  } else {
    var _0x53cd = 13;
    const _0x20c32b = process['\u0065\u006E\u0076']['\u0054\u0058\u0058\u005F\u0057\u0058\u0049\u0044'];
    _0x53cd = "cgbjnh".split("").reverse().join("");
    if (_0x20c32b) {
      if (_0x20c32b['\u0069\u006E\u0063\u006C\u0075\u0064\u0065\u0073']("\u000A")) {
        _0x894e = _0x20c32b['\u0073\u0070\u006C\u0069\u0074']("\u000A")['\u0066\u0069\u006C\u0074\u0065\u0072'](wxid => wxid['\u0074\u0072\u0069\u006D']())['\u006D\u0061\u0070'](wxid => wxid['\u0074\u0072\u0069\u006D']());
      } else if (_0x20c32b['\u0069\u006E\u0063\u006C\u0075\u0064\u0065\u0073']("\u0026")) {
        _0x894e = _0x20c32b['\u0073\u0070\u006C\u0069\u0074']("\u0026")['\u0066\u0069\u006C\u0074\u0065\u0072'](wxid => wxid['\u0074\u0072\u0069\u006D']())['\u006D\u0061\u0070'](wxid => wxid['\u0074\u0072\u0069\u006D']());
      } else if (_0x20c32b['\u0069\u006E\u0063\u006C\u0075\u0064\u0065\u0073']("\u0040")) {
        _0x894e = _0x20c32b['\u0073\u0070\u006C\u0069\u0074']("\u0040")['\u0066\u0069\u006C\u0074\u0065\u0072'](wxid => wxid['\u0074\u0072\u0069\u006D']())['\u006D\u0061\u0070'](wxid => wxid['\u0074\u0072\u0069\u006D']());
      } else {
        _0x894e = [_0x20c32b];
      }
    }
  }
  if (_0x894e['\u006C\u0065\u006E\u0067\u0074\u0068'] === 0) {
    console['\u0065\u0072\u0072\u006F\u0072']("\u91CF\u53D8\u5883\u73AFDIXW_XXT\u7F6E\u8BBE\u6216\u6570\u53C2dixw--\u7528\u4F7F\u8BF7\uFF0CDIXW\u4F55\u4EFB\u4F9B\u63D0\u672A\uFF1A\u8BEF\u9519".split("").reverse().join(""));
    return false;
  }
  if (_0x26gf5f['\u0074\u0065\u0073\u0074']) {
    console['\u006C\u006F\u0067']("===== \u606F\u4FE1\u7F6E\u914D =====\n".split("").reverse().join(""));
    console['\u006C\u006F\u0067'](`微信中间服务器地址: ${_0x413a}`);
    console['\u006C\u006F\u0067'](`AppID: ${_0xf81g0f || DEFAULT_APPID}`);
    console['\u006C\u006F\u0067'](`账号数量: ${_0x894e['\u006C\u0065\u006E\u0067\u0074\u0068']}`);
    console['\u006C\u006F\u0067'](`账号列表: ${_0x894e['\u006A\u006F\u0069\u006E']("\u002C\u0020")}`);
    console['\u006C\u006F\u0067'](`Token文件: ${_0xe5ga || "\u9ED8\u8BA4\u8DEF\u5F84"}`);
    console['\u006C\u006F\u0067'](`调试模式: ${_0xeb5fdc ? "\u542F\u5F00".split("").reverse().join("") : "\u95ED\u5173".split("").reverse().join("")}`);
    console['\u006C\u006F\u0067'](`获取手机号: ${_0x26gf5f['\u0067\u0065\u0074\u004D\u006F\u0062\u0069\u006C\u0065'] ? "\u662F" : "\u5426"}`);
    console['\u006C\u006F\u0067'](`东风奕派功能: ${_0x2bae0f ? "\u5F00\u542F" : "\u5173\u95ED"}`);
    console['\u006C\u006F\u0067'](`仅执行东风奕派: ${_0x5c54ee ? "\u662F" : "\u5426"}`);
    console['\u006C\u006F\u0067']("\u000A\u73AF\u5883\u53D8\u91CF\u003A");
    const _0xc5f55c = getEnvs(_0x61d);
    for (const _0x0443f in _0xc5f55c) {
      console['\u006C\u006F\u0067'](`  ${_0x0443f}: ${_0xc5f55c[_0x0443f]}`);
    }
    console['\u006C\u006F\u0067']("\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D\u003D");
    return true;
  }
  console['\u006C\u006F\u0067'](`准备处理 ${_0x894e['\u006C\u0065\u006E\u0067\u0074\u0068']} 个账号...`);
  var _0x3_0xa53 = 6;
  _0xeab6a = 0;
  _0x3_0xa53 = 5;
  const _0x1ge74b = [];
  var _0x3eaa = 6;
  const _0xf783df = [];
  _0x3eaa = "gojpcj".split("").reverse().join("");
  var _0xfdfffc = 1;
  _0x3acebf = 0;
  _0xfdfffc = "cmjbaf".split("").reverse().join("");
  for (let i = 0; i < _0x894e['\u006C\u0065\u006E\u0067\u0074\u0068']; i++) {
    var _0x316f6e;
    const _0x65bb = _0x894e[i];
    _0x316f6e = "noffgi".split("").reverse().join("");
    try {
      console['\u006C\u006F\u0067'](`正在处理第 ${i + 1}/${_0x894e['\u006C\u0065\u006E\u0067\u0074\u0068']} 个账号: ${_0x65bb}`);
      var _0xc_0x9c3;
      const _0x9f_0xe99 = new PhonecodeClient(_0x413a, _0x65bb, _0xf81g0f, {
        '\u0064\u0065\u0062\u0075\u0067': _0xeb5fdc,
        "tokenFile": _0xe5ga,
        '\u0065\u006E\u0061\u0062\u006C\u0065\u0044\u0066\u0079\u0070': _0x2bae0f
      });
      _0xc_0x9c3 = 6;
      _0x9f_0xe99['\u006C\u006F\u0067'](`开始处理账号: ${_0x65bb}`, "ofni".split("").reverse().join(""));
      if (_0x5c54ee) {
        var _0x37f9c = 5;
        const _0x1b470e = await _0x9f_0xe99['\u0064\u0066\u0079\u0070\u0050\u0072\u006F\u0063\u0065\u0073\u0073']();
        _0x37f9c = 1;
        if (_0x1b470e) {
          _0x9f_0xe99['\u006C\u006F\u0067'](`账号 ${_0x65bb} 东风奕派处理成功`, "\u0069\u006E\u0066\u006F");
          _0xeab6a++;
        } else {
          _0x9f_0xe99['\u006C\u006F\u0067'](`账号 ${_0x65bb} 东风奕派处理失败`, "rorre".split("").reverse().join(""));
          _0x1ge74b['\u0070\u0075\u0073\u0068'](_0x65bb);
        }
      } else {
        var _0xfd_0x936 = 10;
        const _0x4_0x4df = await _0x9f_0xe99['\u006C\u006F\u0067\u0069\u006E\u0050\u0072\u006F\u0063\u0065\u0073\u0073']();
        _0xfd_0x936 = 12;
        if (_0x4_0x4df) {
          _0x9f_0xe99['\u006C\u006F\u0067'](`账号 ${_0x65bb} 处理成功`, "\u0069\u006E\u0066\u006F");
          _0xeab6a++;
          if (_0x26gf5f['\u0067\u0065\u0074\u004D\u006F\u0062\u0069\u006C\u0065']) {
            const _0x496d7e = await _0x9f_0xe99['\u0067\u0065\u0074\u004D\u006F\u0062\u0069\u006C\u0065\u004E\u0075\u006D\u0062\u0065\u0072']();
            if (_0x496d7e) {
              _0x9f_0xe99['\u006C\u006F\u0067'](`获取到的手机号信息: ${JSON['\u0073\u0074\u0072\u0069\u006E\u0067\u0069\u0066\u0079'](_0x496d7e)}`, "gubed".split("").reverse().join(""));
              _0x3acebf++;
            }
          }
        } else {
          _0x9f_0xe99['\u006C\u006F\u0067'](`账号 ${_0x65bb} 处理失败`, "\u0065\u0072\u0072\u006F\u0072");
          _0x1ge74b['\u0070\u0075\u0073\u0068'](_0x65bb);
        }
      }
      if (i < _0x894e['\u006C\u0065\u006E\u0067\u0074\u0068'] - 1) {
        await new Promise(resolve => setTimeout(resolve, 5000));
      }
    } catch (error) {
      console['\u0065\u0072\u0072\u006F\u0072'](`处理账号 ${_0x65bb} 时发生错误: ${error['\u006D\u0065\u0073\u0073\u0061\u0067\u0065']}`);
      _0xf783df['\u0070\u0075\u0073\u0068'](_0x65bb);
    }
  }
  console['\u006C\u006F\u0067'](`处理完成! 成功: ${_0xeab6a}/${_0x894e['\u006C\u0065\u006E\u0067\u0074\u0068']}`);
  return _0xeab6a > 0;
}
async function cliEntryPoint() {
  try {
    const _0x183d8e = await main();
    process['\u0065\u0078\u0069\u0074'](_0x183d8e ? 0 : 1);
  } catch (error) {
    console['\u0065\u0072\u0072\u006F\u0072'](`程序运行出错: ${error['\u006D\u0065\u0073\u0073\u0061\u0067\u0065']}`);
    process['\u0065\u0078\u0069\u0074'](1);
  }
}
if (require['\u006D\u0061\u0069\u006E'] === module) {
  cliEntryPoint();
}
module['\u0065\u0078\u0070\u006F\u0072\u0074\u0073'] = {
  '\u0050\u0068\u006F\u006E\u0065\u0063\u006F\u0064\u0065\u0043\u006C\u0069\u0065\u006E\u0074': PhonecodeClient,
  "HttpClient": HttpClient,
  '\u0067\u0065\u0074\u0053\u0063\u0072\u0069\u0070\u0074\u0049\u006E\u0066\u006F': getScriptInfo,
  "getEnvs": getEnvs
};
