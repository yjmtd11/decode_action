//Sat Jun 07 2025 17:36:25 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
function _0x4544(n, W) {
  let d = _0x4fe4();
  return (_0x4544 = function (W, e) {
    W -= 130;
    let o = d[W];
    undefined === _0x4544.ZBfXUe && (_0x4544.qAJygT = function (e, W) {
      let o = [],
        c = 0,
        n,
        d = "";
      e = function (n) {
        let d = "",
          o = "";
        for (let W = 0, e, o, c = 0; o = n.charAt(c++); ~o && (e = W % 4 ? 64 * e + o : o, W++ % 4) && (d += String.fromCharCode(255 & e >> (-2 * W & 6)))) o = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=".indexOf(o);
        for (let W = 0, e = d.length; W < e; W++) o += "%" + ("00" + d.charCodeAt(W).toString(16)).slice(-2);
        return decodeURIComponent(o);
      }(e);
      let r;
      for (r = 0; r < 256; r++) o[r] = r;
      for (r = 0; r < 256; r++) c = (c + o[r] + W.charCodeAt(r % W.length)) % 256, n = o[r], o[r] = o[c], o[c] = n;
      r = 0;
      for (let W = c = 0; W < e.length; W++) r = (r + 1) % 256, c = (c + o[r]) % 256, n = o[r], o[r] = o[c], o[c] = n, d += String.fromCharCode(e.charCodeAt(W) ^ o[(o[r] + o[c]) % 256]);
      return d;
    }, n = arguments, _0x4544.ZBfXUe = true);
    var c = d[0],
      W = W + c,
      c = n[W];
    return c ? o = c : (undefined === _0x4544.dVYUau && (_0x4544.dVYUau = true), o = _0x4544.qAJygT(o, e), n[W] = o), o;
  })(n, W);
}
let _0x5eb655 = _0x4544,
  CryptoJS = (function (W, e, o, c) {
    c = "hs";
    for (var n = _0x4fe4, d = 731546, r = function (W, e, o, c, n, d, r) {
        return arguments[0]["split"]("")["reverse"]("v")["join"]("");
      }, t = undefined, a = undefined, s = _0x4544, i = (c += "up", o = r((t = "tfi") + "hs"), c = r(c), r = 0, n()); --W + d;) try {
      t = -parseInt(s(303, "8T2m")) + -parseInt(s(201, "70d&")) / 2 * (parseInt(s(232, "OJeX")) / 3) + parseInt(s(473, "*HFs")) / 4 * (parseInt(s(340, "dj3l")) / 5) + parseInt(s(293, "]3Uy")) / 6 + parseInt(s(393, "RF&$")) / 7 * (-parseInt(s(398, "nxi)")) / 8) + parseInt(s(455, "8T2m")) / 9 * (parseInt(s(365, "QTkL")) / 10) + -parseInt(s(207, "Ao)I")) / 11;
    } catch (W) {
      t = r;
    } finally {
      if (a = i[o](), 192 <= W) r ? e ? t = a : e = a : r = a;else if (r == e.replace(/[puTdDWtBQlgVArOYGhPE=]/g, "")) {
        if (t === d) {
          i["un" + o](a);
          break;
        }
        i[c](a);
      }
    }
  }(194), _0x4fe4, require(_0x5eb655(510, "Rz23"))),
  fetch = require(_0x5eb655(295, "eqZG")),
  crypto = require(_0x5eb655(389, "rssH")),
  fs = require("node:fs"),
  CONFIG = {
    PUBLISH_CONTENTS: ["市场有波动，保持平常心。", _0x5eb655(373, "dj3l"), _0x5eb655(418, "nxi)"), _0x5eb655(322, "Yn%!"), _0x5eb655(253, "I)iQ"), _0x5eb655(281, "Ao)I")],
    COMMENTS: [_0x5eb655(498, "qkdO"), _0x5eb655(272, "rA!5"), _0x5eb655(194, "*HFs"), _0x5eb655(368, "8T2m"), _0x5eb655(405, "Ao)I"), "已阅，点赞。"],
    IOS_PARAMS: {
      app_plantform: _0x5eb655(342, "lO8E"),
      app_versionname: _0x5eb655(467, "nxi)"),
      app_versioncode: "1.7",
      app_channel: _0x5eb655(350, "PAd0"),
      sys_versioncode: _0x5eb655(344, "fd7(")
    }
  },
  STATE_FILE_PATH = _0x5eb655(193, "nA(O");
function loadProcessedIds() {
  var W,
    e,
    o = _0x5eb655,
    c = {
      jEXxO: o(203, "F5A]"),
      kyyoo: o(195, "OJeX")
    };
  try {
    if (fs[o(231, "glSQ")](STATE_FILE_PATH)) return W = fs.readFileSync(STATE_FILE_PATH, c[o(428, "9u2U")]), e = JSON.parse(W), {
      read: new Set(e[o(210, "RDbG")] || []),
      shared: new Set(e[o(491, "RDbG")] || []),
      liked: new Set(e.liked || []),
      commented: new Set(e[o(302, "*!rp")] || [])
    };
  } catch (W) {
    c.kyyoo !== o(445, "nA(O") ? console[o(416, "*!rp")](o(384, "25(q"), W) : (_0x578953.success && _0xcf88ba[o(143, "xic(")](o(511, "3j5$") + (_0x106c1e[o(211, "ehDG")].per_integration ? o(400, "70d&") + _0x4dfe3e[o(134, "lO8E")][o(220, "nxi)")] : "")), _0x1eaedc[o(493, "glSQ")][o(388, "25(q")](_0x5bf455));
  }
  return {
    read: new Set(),
    shared: new Set(),
    liked: new Set(),
    commented: new Set()
  };
}
function saveProcessedIds(W) {
  var e = _0x5eb655,
    o = {
      lzvJK: function (W, e) {
        return W === e;
      },
      SZzwh: e(450, "y)R2"),
      QwDKZ: e(395, "*!rp"),
      dvlGU: e(280, "GAST")
    };
  try {
    var c = {
      read: [...W[e(333, "T%n&")]],
      shared: [...W.shared],
      liked: [...W.liked],
      commented: [...W[e(357, "*HFs")]]
    };
    fs[e(137, "]3Uy")](STATE_FILE_PATH, JSON[e(504, "T%n&")](c, null, 2));
  } catch (W) {
    o[e(321, "nxi)")](o[e(186, "Dsl(")], o.QwDKZ) ? _0x505faa[e(224, "#r1)")]("❌ [" + _0x4ce997 + "] 流程中止，获取Token失败。") : console.error(o[e(307, "3j5$")], W);
  }
}
let sleep = e => new Promise(W => setTimeout(W, e));
function generateAccessToken() {
  var W = _0x5eb655,
    e = new Date(),
    e = "" + String(e[W(258, "Ao)I")]()).padStart(2, "0") + e[W(325, "PAd0")]() + e.getHours();
  return CryptoJS.MD5(e)[W(205, "(5q2")]();
}
async function apiRequest(e, W) {
  var o = _0x5eb655,
    c = {
      jwNSy: o(417, "Ao)I"),
      YjUoY: function (W) {
        return W();
      },
      WRYPG: function (W, e, o) {
        return W(e, o);
      },
      fQnck: "POST",
      ONfPm: o(346, "c]@J"),
      hDLbS: o(138, "OcMn"),
      eASkK: function (W, e) {
        return W === e;
      },
      ddSPn: "yfRHM",
      gplel: o(419, "Ao)I")
    },
    W = {
      ...CONFIG[o(432, "*HFs")],
      ...W,
      access_token: c[o(386, "F5A]")](generateAccessToken),
      client_time: Date.now()
    };
  try {
    return await (await c[o(353, "8T2m")](fetch, e, {
      method: c.fQnck,
      headers: {
        "Content-Type": c[o(454, "ehDG")],
        "User-Agent": o(159, "nE5c"),
        Accept: c[o(219, "XD8i")]
      },
      body: JSON[o(133, "]3Uy")](W)
    })).json();
  } catch (W) {
    if (!c[o(248, "9u2U")](c.ddSPn, c.gplel)) return console[o(457, "68OA")](o(426, "XQHk") + e + o(212, "y)R2"), W), null;
    _0x33ff84.log(c[o(486, "*HFs")]);
  }
}
async function getNewUserToken(e) {
  var W,
    o,
    c,
    n = _0x5eb655,
    d = {
      lrTsl: n(313, "glSQ"),
      ZHync: n(174, "ed!q"),
      QzoUi: n(407, "70d&"),
      kLmhB: function (W, e) {
        return W === e;
      },
      QFynY: "fKslP",
      XIxtw: n(361, "]3Uy"),
      BZQTD: function (W, e, o) {
        return W(e, o);
      },
      kXKle: n(406, "ed!q"),
      FHxEk: function (W, e) {
        return W === e;
      },
      sGROo: n(472, "GAST"),
      YpTlN: function (W, e) {
        return W !== e;
      }
    },
    r = d.QzoUi,
    t = {
      user_id: e,
      machine_code: crypto[n(139, "Dsl(")](),
      access_token: generateAccessToken()
    },
    t = new URLSearchParams(t).toString();
  try {
    if (!d[n(154, "qkdO")](d[n(456, "nxi)")], d[n(439, "c]@J")])) return (W = await (await d[n(404, "eqZG")](fetch, r, {
      method: "POST",
      headers: {
        "Content-Type": n(468, "nxi)"),
        "User-Agent": d[n(479, "ehDG")]
      },
      body: t
    })).json())[n(144, "dj3l")] && d[n(187, "25(q")](typeof W[n(300, "*!rp")], n(308, "Dsl(")) && 0 < W[n(438, "Ao)I")].length ? {
      userId: e,
      userToken: W.data
    } : (console.error("❌ [" + e + n(222, "YPhp"), W.message || d.sGROo), null);
    _0x5935f0[n(268, "RF&$")](n(147, "xic(") + (_0x315489 ? _0x31587a.message : d[n(339, "Rz23")]));
  } catch (W) {
    if (d[n(461, "HK1G")]("OaBMD", "OWXib")) return console.error(n(148, "HK1G") + e + "] 请求 User Token 时发生网络错误:", W), null;
    try {
      if (_0x292a3c[n(497, "T%n&")](_0xee8abf)) return o = _0x7149b5[n(374, "dj3l")](_0x137f45, n(352, "0Q5o")), c = _0x179563[n(367, "68OA")](o), {
        read: new _0x1a91cb(c.read || []),
        shared: new _0x2cb969(c[n(175, "RF&$")] || []),
        liked: new _0x130f82(c.liked || []),
        commented: new _0x4b9d5b(c[n(230, "QTkL")] || [])
      };
    } catch (W) {
      _0x1c811e.error(d.ZHync, W);
    }
    return {
      read: new _0x3b80ae(),
      shared: new _0x2839e7(),
      liked: new _0x55ba8d(),
      commented: new _0x1f7474()
    };
  }
}
async function queryTaskList(W) {
  var e = _0x5eb655,
    o = {
      tIlCp: e(287, "*HFs"),
      mfVAZ: function (W, e, o) {
        return W(e, o);
      }
    },
    c = o.tIlCp,
    W = {
      user_id: W[e(200, "c]@J")],
      user_token: W.userToken
    },
    o = await o[e(424, "GAST")](apiRequest, c, W);
  return o && o[e(452, "8T2m")] ? o[e(181, "I)iQ")] : null;
}
async function performSignIn(W) {
  var e = _0x5eb655,
    o = {
      uRUZK: e(273, "dj3l"),
      FLlvK: function (W, e, o) {
        return W(e, o);
      },
      cLrKa: function (W, e) {
        return W !== e;
      },
      YBdqB: e(309, "OcMn")
    },
    c = o[e(376, "0Q5o")],
    W = {
      user_id: W[e(338, "nxi)")],
      user_token: W[e(140, "*!rp")],
      date: Date[e(252, "*HFs")]()
    },
    c = await o[e(249, "fd7(")](apiRequest, c, W);
  if (c && c[e(131, "*HFs")]) console[e(145, "XQHk")](e(136, "I)iQ"));else {
    if (!o.cLrKa("bQCkl", e(319, "I)iQ"))) return {
      userId: _0x5f3fc6,
      userToken: _0x5cdf4b.data
    };
    console[e(255, "uXPA")](e(509, "(5q2") + (c ? c.message : o[e(189, "fd7(")]) + " (可能今日已签到)");
  }
}
async function fetchContentList(W, e, o = 0) {
  var c = _0x5eb655,
    n = {
      YXVmT: function (W, e, o) {
        return W(e, o);
      },
      kOFIV: c(171, "uXPA")
    },
    d = c(283, "0Q5o"),
    W = {
      user_id: W[c(408, "rA!5")],
      user_token: W.userToken,
      category: c(485, "RF&$"),
      sort_id: o,
      page_size: e
    },
    o = await n[c(199, "HK1G")](apiRequest, d, W);
  return o && o.success && o[c(429, "F5A]")] && o[c(225, "RDbG")][c(500, "lO8E")] ? o[c(371, "uXPA")][c(434, "rA!5")] : (console[c(282, "8T2m")](n[c(315, "dj3l")]), []);
}
async function performPublishCaiyou(W) {
  var e = _0x5eb655,
    o = {
      gpZVr: e(354, "FX*$"),
      scMeu: function (W, e) {
        return W * e;
      },
      jdLAY: e(296, "PAd0"),
      GUfvL: function (W, e, o) {
        return W(e, o);
      },
      jcsej: e(209, "HK1G"),
      myKKb: e(142, "QTkL"),
      FzAHy: "   ✅ 发表成功！"
    },
    c = CONFIG[e(215, "cfxs")][Math[e(420, "nxi)")](o[e(250, "nxi)")](Math[e(285, "]3Uy")](), CONFIG.PUBLISH_CONTENTS[e(223, "8T2m")]))],
    n = o.jdLAY,
    W = {
      user_id: W[e(317, "GAST")],
      user_token: W[e(347, "(5q2")],
      content: c,
      thumbnails: [],
      edit_id: 0
    },
    c = await o[e(327, "ppDR")](apiRequest, n, W);
  c && c.success ? o[e(397, "Dsl(")] !== o[e(311, "ppDR")] ? console[e(268, "RF&$")](o[e(172, "eqZG")]) : _0x11d105[e(190, "(5q2")](o[e(475, "70d&")]) : console[e(446, "FX*$")](e(378, "XQHk") + (c ? c[e(431, "rssH")] : e(197, "ehDG")));
}
async function performReading(W, e, o) {
  var c = _0x5eb655,
    n = {
      uSGCz: "view",
      nplbL: c(451, "HK1G"),
      RkTew: function (W, e) {
        return W(e);
      },
      opklb: function (W, e) {
        return W === e;
      },
      ksueq: c(358, "Rz23")
    },
    e = e[c(177, "glSQ")].id;
  o[c(441, "nE5c")][c(391, "xic(")](e) || (console[c(286, "OJeX")](c(387, "uXPA") + e), (W = await apiRequest("http://feapi.feheadline.com/provider/api/v1/fe-add-heap-score", {
    user_id: W[c(484, "eqZG")],
    user_token: W[c(141, "c]@J")],
    approach: n[c(409, "ed!q")],
    obj_type: n[c(158, "25(q")],
    obj_id: n[c(396, "9u2U")](String, e)
  })) && (W.success || n[c(244, "qkdO")](W.message, c(355, "fd7("))) ? (W[c(178, "FX*$")] && console[c(488, "F5A]")](c(267, "T%n&") + W[c(166, "OcMn")][c(135, "Yn%!")]), o[c(298, "70d&")][c(180, "Yn%!")](e)) : console[c(286, "OJeX")](c(503, "uXPA") + (W ? W[c(477, "RF&$")] : n[c(130, "*HFs")])));
}
async function performSharing(W, e, o) {
  var c = _0x5eb655,
    n = {
      EUxSJ: c(213, "FX*$"),
      zCyLV: function (W, e, o) {
        return W(e, o);
      },
      JEWOZ: "http://feapi.feheadline.com/provider/api/v1/fe-add-heap-score",
      JBMpa: function (W, e) {
        return W(e);
      },
      kqHpj: function (W, e) {
        return W === e;
      },
      RwhyA: "add score already",
      FfYFf: function (W, e) {
        return W !== e;
      },
      jFSCu: "QnUDM"
    },
    e = e[c(204, "cfxs")].id;
  o[c(362, "9u2U")][c(466, "qkdO")](e) || (console[c(381, "]3Uy")]("--- 🔗 正在分享文章: " + e), (W = await n.zCyLV(apiRequest, n.JEWOZ, {
    user_id: W[c(490, "XQHk")],
    user_token: W[c(324, "Dsl(")],
    approach: "share",
    obj_type: c(516, "qkdO"),
    obj_id: n[c(314, "*!rp")](String, e)
  })) && (W.success || n.kqHpj(W.message, n[c(513, "XQHk")])) ? (W[c(271, "nxi)")] && console.log(c(206, "]3Uy") + W[c(300, "*!rp")].per_integration), o[c(515, "ehDG")].add(e)) : n.FfYFf(n[c(228, "XQHk")], n.jFSCu) ? _0x5aa443[c(348, "fd7(")](c(478, "GAST") + (_0x7698ff ? _0x1fd3bf[c(443, "QTkL")] : n.EUxSJ) + c(236, "OcMn")) : console[c(448, "HK1G")]("   ❌ 分享失败: " + (W ? W.message : n.EUxSJ)));
}
async function performLiking(W, e, o) {
  var c = _0x5eb655,
    n = {
      ZTHwh: function (W, e, o) {
        return W(e, o);
      },
      PpxrA: c(366, "XD8i"),
      hjGVw: c(284, "ehDG"),
      cVXWX: "had praise"
    },
    e = e[c(449, "YPhp")].id;
  o[c(162, "nE5c")][c(466, "qkdO")](e) || (console.log(c(331, "cfxs") + e), (W = await n[c(182, "68OA")](apiRequest, n[c(149, "OJeX")], {
    user_id: W.userId,
    user_token: W.userToken,
    is_praise: 1,
    obj_type: n.hjGVw,
    obj_id: String(e)
  })) && (W[c(447, "nA(O")] || W[c(326, "ed!q")] === n.cVXWX) ? (W[c(436, "F5A]")] && console.log("   ✅ 点赞成功！" + (W[c(318, "FX*$")] && W[c(225, "RDbG")][c(328, "RF&$")] ? c(239, "Dsl(") + W[c(323, "25(q")][c(459, "XQHk")] : "")), o.liked.add(e)) : console[c(268, "RF&$")](c(198, "3j5$") + (W ? W[c(320, "fd7(")] || JSON[c(208, "rA!5")](W.errors) : c(334, "0Q5o"))));
}
async function performCommenting(W, e, o) {
  var c,
    n = _0x5eb655,
    d = {
      GWrRm: function (W, e) {
        return W * e;
      },
      aeNQQ: function (W, e, o) {
        return W(e, o);
      },
      MulYC: "http://feapi.feheadline.com/provider/api/v1/fe-comment-reply",
      Komvz: function (W, e) {
        return W(e);
      },
      AEHEt: function (W, e) {
        return W === e;
      },
      xLoNZ: n(262, "3j5$"),
      GcAOu: n(290, "nE5c"),
      LjoXU: "请求失败"
    },
    e = e.id;
  o.commented.has(e) || (c = CONFIG.COMMENTS[Math.floor(d.GWrRm(Math[n(292, "OcMn")](), CONFIG.COMMENTS[n(242, "#r1)")]))], console[n(471, "68OA")]("--- 💬 正在评论帖子 " + e), (W = await d[n(257, "nA(O")](apiRequest, d[n(507, "3j5$")], {
    user_id: W[n(415, "9u2U")],
    user_token: W[n(343, "QTkL")],
    comment_id: e,
    content: d.Komvz(encodeURIComponent, c)
  })) && W[n(185, "XD8i")] ? (W[n(489, "qkdO")] && console[n(304, "cfxs")](n(245, "ed!q") + (W[n(225, "RDbG")][n(260, "uXPA")] ? "获得积分: " + W[n(152, "8T2m")][n(153, "RDbG")] : "")), o[n(506, "cfxs")][n(394, "nA(O")](e)) : d[n(196, "c]@J")](d[n(238, "c]@J")], d[n(363, "Dsl(")]) ? _0x33b1fa[n(164, "ed!q")](n(132, "T%n&") + _0x517682.name + ": " + _0x4fcc5b[n(345, "XD8i")] + "/" + _0x54730a[n(465, "XQHk")]) : console.log("   ❌ 评论失败: " + (W ? W[n(263, "3j5$")] : d.LjoXU)));
}
async function runForAccount(c, n) {
  let d = _0x5eb655,
    r = {
      WoAEm: d(330, "#r1)"),
      mFtmR: function (W, e) {
        return W - e;
      },
      Ekqxb: function (W, e) {
        return W(e);
      },
      XvCsz: function (W, e) {
        return W(e);
      },
      JiMye: d(458, "F5A]"),
      Oferj: function (W, e) {
        return W === e;
      },
      PZQXb: function (W, e) {
        return W !== e;
      },
      TpLyx: d(502, "Ao)I"),
      qYsUM: d(316, "fd7("),
      oXRHi: function (W, e, o, c) {
        return W(e, o, c);
      },
      bNEWj: function (W, e) {
        return e < W;
      },
      LJwWY: d(382, "XD8i"),
      GlxEL: "   > 服务器已无更多新内容。",
      nlTYa: function (W, e) {
        return W(e);
      },
      qYFgb: d(155, "ppDR"),
      PFxGI: d(487, "nxi)"),
      AKeyc: "❌ 无法获取任务状态，中断循环。",
      Frxtg: "task_8",
      pEaul: d(392, "ppDR"),
      EExSX: function (W, e) {
        return W(e);
      },
      jXiFW: d(251, "glSQ"),
      Raajw: d(474, "XD8i"),
      XWLkk: d(265, "OJeX"),
      fcOnp: function (W, e, o, c) {
        return W(e, o, c);
      },
      KMAex: function (W, e) {
        return W === e;
      },
      PBWQr: d(469, "rssH"),
      Eejzz: function (W, e, o, c) {
        return W(e, o, c);
      }
    };
  console.log(d(246, "8T2m") + c + d(508, "68OA"));
  var t = await r[d(430, "FX*$")](getNewUserToken, c);
  if (t) {
    await r.XvCsz(performSignIn, t);
    let W = [],
      e = 0,
      o = false;
    for (console.log(r[d(151, "c]@J")]);;) {
      r[d(375, "*!rp")](W[d(191, "ed!q")], 0) && !o && (r[d(453, "y)R2")](d(370, "68OA"), r.TpLyx) ? (console.log(r.qYsUM), a = await r[d(359, "Yn%!")](fetchContentList, t, 20, e), r.bNEWj(a[d(289, "QTkL")], 0) ? r[d(160, "0Q5o")] === r[d(499, "#r1)")] ? (W[d(161, "GAST")](...a), e = a[a[d(288, "*!rp")] - 1].sort_id, console[d(501, "*!rp")](d(337, "GAST") + a[d(480, "PAd0")] + " 篇新物料，当前物料储备: " + W[d(403, "Rz23")] + " 篇")) : (_0x21bc20.success && _0x33800e.log(d(218, "rA!5") + (_0x3670c9[d(371, "uXPA")] && _0x298b98[d(329, "HK1G")][d(442, "ppDR")] ? d(312, "Rz23") + _0x1a3ad0.data.per_integration : "")), _0x1f1e97.liked[d(277, "9u2U")](_0xf5e687)) : (o = true, console.log(r[d(297, "cfxs")]))) : _0x40947a[d(146, "25(q")](d(390, "nxi)") + (_0x388d20 ? _0x3ac8c6[d(234, "YPhp")] || _0x487440.stringify(_0x360567.errors) : r[d(247, "QTkL")])));
      let c = await r[d(243, "70d&")](queryTaskList, t);
      if (!c) {
        if (r[d(422, "ehDG")] === r.PFxGI) return _0x1596c7[d(377, "9u2U")](d(435, "I)iQ") + _0x2aef8d + d(310, "rA!5"), _0xef58bf), null;
        console[d(146, "25(q")](r[d(179, "dj3l")]);
        break;
      }
      var a = e => {
          let o = d,
            W = c[o(494, "I)iQ")][o(482, "68OA")](W => W.task_group_name === o(274, "fd7("))?.[o(291, "OcMn")][o(464, "XQHk")](W => W[o(514, "QTkL")] === e);
          return W ? Math[o(188, "Ao)I")](0, r[o(351, "nE5c")](W[o(364, "lO8E")], W.done_count)) : 0;
        },
        s = {
          reads: a(r[d(512, "ehDG")]),
          shares: a(d(402, "RF&$")),
          likes: a(r[d(463, "qkdO")]),
          comments: r[d(237, "YPhp")](a, r.jXiFW)
        };
      if (Object.values(s)[d(163, "rA!5")](W => 0 === W)) {
        console[d(306, "T%n&")](r[d(335, "8T2m")]);
        break;
      }
      if (r[d(481, "]3Uy")](W[d(399, "HK1G")], 0) && o) {
        console.log(r[d(492, "xic(")]);
        break;
      }
      var i = W[d(411, "9u2U")](),
        k = i.news_info && i[d(476, "25(q")].id;
      k && 0 < s[d(517, "glSQ")] && !n.read[d(170, "cfxs")](i[d(270, "9u2U")].id) ? await r.fcOnp(performReading, t, i, n) : k && r[d(235, "I)iQ")](s.shares, 0) && !n[d(261, "nxi)")][d(391, "xic(")](i[d(254, "OcMn")].id) ? r[d(294, "XD8i")](r[d(150, "Ao)I")], r[d(299, "68OA")]) ? await r[d(380, "*!rp")](performSharing, t, i, n) : (_0x3164f2[d(336, "rssH")]("\n--- ✅ [ 账户: " + _0x1ac7ef + d(496, "*!rp")), _0x549fee[d(460, "RDbG")][d(470, "FX*$")](W => W[d(233, "PAd0")] === d(276, "Dsl(")).task_group[d(421, "fd7(")](W => {
        var e = d;
        _0x57e122[e(255, "uXPA")](e(383, "RF&$") + W[e(184, "RDbG")] + ": " + W.done_count + "/" + W.max_frequency);
      }), _0x5bb30a[d(348, "fd7(")]("   - 当前总积分: " + _0x2fe00c.heap_score)) : k && r[d(168, "]3Uy")](s.likes, 0) && !n.liked.has(i[d(229, "ed!q")].id) ? await r[d(269, "Dsl(")](performLiking, t, i, n) : r.bNEWj(s[d(217, "lO8E")], 0) && !n.commented[d(227, "8T2m")](i.id) && (await r.Eejzz(performCommenting, t, i, n)), await sleep(2500 + 1e3 * Math[d(440, "RDbG")]());
    }
    var l = await r[d(266, "qkdO")](queryTaskList, t);
    l && (console[d(145, "XQHk")](d(505, "#r1)") + c + d(372, "nxi)")), l[d(437, "Ao)I")].find(W => W[d(202, "#r1)")] === d(274, "fd7("))[d(256, "eqZG")][d(221, "rssH")](W => {
      var e = d;
      console[e(301, "*HFs")](e(349, "rssH") + W.name + ": " + W[e(444, "9u2U")] + "/" + W[e(427, "YPhp")]);
    }), console[d(167, "rA!5")]("   - 当前总积分: " + l[d(264, "uXPA")])), console[d(268, "RF&$")]("============== [ 账户: " + c + d(462, "eqZG"));
  } else console[d(305, "dj3l")]("❌ [" + c + d(425, "rssH"));
}
async function main() {
  let e = _0x5eb655,
    W = {
      IwlVh: e(412, "(5q2"),
      aGQzA: "   > 服务器已无更多新内容。",
      vXxVX: function (W, e) {
        return W !== e;
      },
      kdYap: "vgMZM",
      Yhorm: "WjvUn",
      ZMxmN: function (W, e) {
        return W < e;
      },
      lNhGJ: function (W, e) {
        return W - e;
      },
      GqBau: function (W, e) {
        return W !== e;
      },
      HdVsp: e(214, "QTkL"),
      CIzyU: function (W, e) {
        return W(e);
      },
      LTieb: "\n🎉 所有账号的所有可自动化任务已全部执行完毕！"
    },
    o = process.env.cjttck;
  if (o) {
    var c,
      n,
      d = o[e(173, "rA!5")](/[\n\r]+/)[e(259, "Ao)I")](W => W[e(495, "dj3l")]()).filter(Boolean),
      r = (console[e(446, "FX*$")](e(157, "GAST") + d[e(332, "uXPA")] + " 个账号，准备开始执行任务..."), loadProcessedIds());
    for ([c, n] of d[e(240, "nE5c")]()) if (W[e(423, "c]@J")](W[e(216, "I)iQ")], W[e(360, "dj3l")])) try {
      await runForAccount(n, r), W.ZMxmN(c, W[e(356, "qkdO")](d.length, 1)) && (W[e(183, "Ao)I")](e(275, "OJeX"), W[e(413, "y)R2")]) ? (console.log(e(369, "y)R2")), await W[e(176, "PAd0")](sleep, 1e4)) : _0xa1fd5c.log(e(401, "c]@J") + (_0x30a43a ? _0x51edb9[e(433, "ppDR")] : W[e(385, "rA!5")])));
    } catch (W) {
      console[e(410, "HK1G")](e(278, "8T2m") + n + " 运行时发生严重错误:", W);
    } else _0x32391d = true, _0xddaecf.log(W[e(414, "QTkL")]);
    W.CIzyU(saveProcessedIds, r), console[e(169, "ppDR")](W.LTieb);
  } else console[e(279, "#r1)")](e(379, "0Q5o"));
}
function _0x4fe4() {
  let W = ["Ü1", "djTsWjiPaVOmiAp.DdWcYom.AlvGPB7ugQEhgtgr==", "W5vNWO0gW6HM", "f8kOWP9o", "W5pcG8k7jYi", "WRpdL8oMDuO", "WQVdKCoWC17cSX0", "W7ynbwVcMa", "vftcQfL3wCopWRJdUG", "WQu0WPvn", "fxe5W7rIW4xdKCoxWQ1OlmoMEctdTG", "4P6xjoETN+wkMoAlVUwjJU+/HW", "uflcS0r8EmopWRldPSkRWQNdQb8", "WQ4tsq", "W5ldU8oXeLz/W7tdGuRdVW", "uCoYW7ldIabYW7BdPa4", "W6FdKmouvgn6W43dICkg", "qvWqWOFdSW", "u8o6qG", "xefykSkOW5RcQW", "WQtdSga", "tGxdNW", "h8k1bEkFMedPM5JORPZLP7JOTjFdQ8o3", "4PYzW6RdSW", "W5awW43dKwK", "WOpdGqBdKqu", "W5JdISo8x1i", "W5KLWPnB", "w8ksWRNcHSkWgWBcOCoMeqTyW5yJvq", "eSkbWOvvW5y", "Ev/cGmouWO8", "cSoTWRJdQ8oXWPbQ", "8jolSCoD5QoJ5REq5yUdyq", "tbRdLhzH", "WOutcsZcM8kfixKWkKlcLcTzdN3dL8kps1jUaCkPtbBdJ8kIW73cG2RdQ8kWWOPrW6ZdVsyRW77dSXJdU8kfW7DQBCkdW4BdQ2CRkCoAdgSUW6/dMG", "WOXgdexcJW", "qqtcJKS", "WQ8tdcJcKq", "WPWxW74nnW", "gLPF", "WPtcQCkNqGfyW5pdL07dJgW", "W6bDf28", "WPuoW7W", "rw7cN2DZ", "CexcRG", "W5qxvG", "4P26W6ROJl/LJiJLHiVLR6pLIAxOOA/LP5pOTztJGQS", "mSkdWP3cMCkK", "WOOrW7CwoG", "4PY6fEIVG+wmSEElIEAcU+AwREs4JEwLOUI0LL4", "W6RcICkTWQpdJg4", "D8kRWQddVq0", "W4/cG8kTma5zWQv+ya", "WPPlW5NcK8koW5ZcPG", "BN9EmmkU", "bhaV", "W7zLvCoj", "CmofW5hdN38", "WPtdSHpdOqi", "rCkwWQBcVa", "WO/cVNfPW5CkwW", "W7pdGmoLave", "zcldGffg", "WR7dOIK", "WRCvW7aJWPK", "DSoOlrBdUa", "gLbwWOalW5i", "WPWYW7u2", "W5lcSmobWOHby8ovl8kjWRJcJs5PW6JcNYKBvCoZEa", "5OEh6lkg5yQv5lQ777Y6", "W5muW5ZdKu8", "W5pdPSo5y0m", "6k2r5Rgn5AED6lwr", "WQHtt+kEHZJNGj/OTlFLPOFOT7vEWOa", "dmksW750Ea", "W6FdKmouvh5X", "zSk3WP4qW5RdSWG", "W5D3WPlcVfqwrcb8wg43WRdcUNy", "WP8+sNq", "W5ituSk8W7nkW4K9wG", "z8o1da3dUmkZd8oG", "bWddUUkCTtNLIlJKUi3MI47LIjZVV7NOJAFLVjhNPPpLIRhdVc8", "W6lcS2FcSev1W6HKWQhcJIPJdKK", "WOOvW6KwifXFWRFdQa", "fmkDW7POsG", "wCksWQRcVq", "W4jUWPGv", "uUwnKUExL+E+NoE5N+MxQoIUVJC", "6kYE5Rg85AAl6lEv", "zuyEWO/dMW", "W6WJz8kdW6vWW68eDSk7WQCAWO9CWOldPq", "W7LGEmojWP4", "WQi6WOXbsSkYnby", "W5LbWRVINBPU54kc6lwO5OUb5yIo776Y", "WPtcJ15OW6e", "fdqllCoblHldVSkLuX7dSJzUW6S", "prlcRSkoWRBcJ1y", "aeVOJOlLJQRcV8kvf04zsZDHguLOfowNUoI1N8on", "W5eHWOLDAmk/", "W495WOy", "t8kwWR/cUa", "eHhdQqiGdmo2WQFdMCkuWRVdSG", "W5uLWPq", "WQldMvtdRSoH", "gfbpWPqGW5neWP08", "r0OjWOJdVYNcN2RcPa", "W4tcNSkZmcvdWPHHyCo/", "WRLvWOpcKX7dSx3cTHxcRhS+", "qmkdWQNdRWFcMSk9tSoSWOnTWQ1qDCoV", "ma5gd8o+WQCb", "W7bkzmo/WOq", "WQqu5y6m6ioZ5lIA5PsJ5BAD56+O5yInhW", "gc5nl8oh", "W6RdR8oEAg0", "6iYx5BYn56wW5yMWaZi", "WQyueZ/cNmkdoW", "evhdNEkCPSk76zU26k665OUD5yUr77+w6i6S5BYA56AE5yUNjCof", "W49ZWO/cSh8z", "oSkQWQapW5i", "fSk9WOnrW7y", "vHuy4P+Ix+ITVUIUKoAlQ+wlJo+8SG", "WRD5W5OhiCoQW6bAWPRdSSoyD8k6WQZcT8kuWObE6lwH5OUYW4RcIa", "C0OLWQddTW", "pSopW5GPW4W", "WQGBW7GKWPa", "fZi0f8oD", "W5xcH8kPka4bW7O", "WRBdI8oK", "5y2A5A2I5yIr5lIU5PwE55Y06kYa44oU", "W6Pzfh3cJ8kVaCoWuG", "wSkLW68"].concat(["amkyWQ/cUSkcW7rWrCotW6a", "WP3dUSo/WQT/", "WRtdPIxdJr4RWQuMWRhcMq", "WR7dOIe", "rSkVW7RcGCoNnazIWOudW4GUWPyLWQS", "fZKyamonja", "W6yvjCk7wq", "W6uwhmk4ECobda", "xSkVW6NcRSorkrfOWPau", "4PIG77MPWPxMI6pMNkhLJkFOJPVLJiJNM4dLHARLRQBLNjZLT5/LPAdNKzZLR4RMRPdVVPtKVl7KUkNMNOBKUlNLIyFMNBFLRytMIQhJGOe", "iCk7WQToW64", "W7ynbEkDG8ky6zU86kYb5OU35yUO77YL6iYd5BY956E/5yM4W4lcJW", "W7xcJSkR", "W4BdUCoqgeK", "nCoRW7WXW5GDWQSaWPW", "fYqAeConmXu", "5yU/5P+X5BYm5B+35P2h6ygO55cW44ot", "r0bpoCo3WOBdT8kCWPaMAd/cUfrlzmk3CHepW5FdMHWufWyoWQOdWRPUWQjZW6xcNmknFuRcOd53qJnakSkjWPSrW4FdICkQW7pdGb1aW7auW7m", "5QYH5PAY5lMV5yUZ", "W6eKW6/dHhW", "5Q2V5Pw/5lMK5yUx", "oSoQW68", "4P+XzoI3GEwpJtW", "W4zKWPpcUhK", "4P29uEs8OowTU+EiREAdSUAxHUs4U+wLV+I3SIe", "6k2J5B+w5lMr5lQl5lQ95AwS55Mu5Ogp6iox44oO", "W5G2WPvvBG", "WQH4d2ldRmk7q8osWPvZd8kkWPxdNHepkcjOWQZcMCknWOVdMtzzWOHiWRpcVuxdJYWwWP7cICoHW4tdPKHmW7pcPWVdPeJdKmoMbSo+W6bXWRNdKG1gW6a", "W4HQWPSh", "vuhcTfr2uW", "W6WjW5i", "WRddKmoNyahdR0fjy8k/WPnhW5BdQmoyrCkhrmoEW4ameCobrSkal28TlSorWR/dUYJcQCoTsmomW68dW5FdU8kQWO1NWRhcIYxcGr7cGwnsWQhcKvFdSG", "smoKW7NdNsb1", "seakWOldRI8", "WPq7mshcNa", "W7bDegxcJ8kHhCo5sey", "W7zDdwRcV8kR", "hXhdQWiQdmksWQ3dTCksWQldKs8", "WRFcHLnVW4O", "gSkwWRJcTmoWW7vNxSofW7G", "xmkwWQ7dTgldKSoGr8o8WPjcWQOFFSoVWOnMW6tdLsaoxmoplx5EWQPEWPGyo3aSyMebW7aDALX0u3FcPhNcTCowWPLGCSkVkCkEWQ8pW4pcV8krWP3cKConemkP", "W7SAxCkkW6a", "jSkJWPuY", "ESotW47dUwu", "qmoGW6pdMW", "WRtdI8o0", "r8oUW7RdLZfZW6NdPaq", "WO91W58mkCoKWOCSW4JcLCkSpq", "W5azqG", "q1TC", "WRPcqG", "W6Wfa8kmtq", "W5pdRSoTh1D1", "6k2Z5Rg+5Aws6lsR", "WQrb6k2S5Rc9BM5fWRtdO8ktuvxdUIlcMSoT5PwM5y6+55Ex576p57UG6zsg6kY/W54", "CvpcGSoBWPG", "6i6p5BYl56s95yQRWQldSG", "6k2w5RkK5AER6lwM", "BSodW5RdIJu", "rhT9amkB", "W6r6WRL/W7VOOjhLH7tNIRFMLypVVyFMRy/LN7ROJ6VLJyBMLjhNMB7KUPtMIAhMLQBNQPb7WPfAd8oAmKe", "ralcMfhdKSkx", "WO1FW47cKq", "W5bCsSoMWP0", "WOmYW6CHWROtW5q", "ccSpomoJ", "6zsA5PYl5lMW5lUI77Yh5lMC5ykz5OIN6lAo44cy", "rGVdJhu", "W5xdQCo6bg19W4RdSw0", "u8khWQ7dGdNcICkQ", "g1blWPqEW51p", "w3/cR8oMWRy", "W6NcHmk+WO7dGgtdOXLwW5HcobPBcW", "mCkRW5X4", "6k2u5Rgu5AEq6lEY", "WPfBcmoV8lsrRSkh5QY45zYD54gn6lA35PE+6zsXkmo2", "wSkVW6BcUCo6mG", "WQrirci", "6kY35Rgo5Awk6ls3", "W68LWOzqAW", "nXlcUW", "evhdNr3cU+AlO+wlNUInUUwoMmo3", "esiCamoHja", "vmoUWOBdNSo0", "haruo8kgW4VcVCk5", "b8kKfmkMu8oVu8k6rmk7WQxcU2i", "WQGAWRi", "uvybWPFdJIJcGgRcRG", "W59HWRPG", "WPJcPhXVW60ArXNdUSki", "W7pdK8obsL52W4FdMmkbcCoLW5bhCYKL", "zSoPoGVdNSk1cSoIyW", "WOi4W7m", "E13dVmoMW7C", "DCksWQRdQd3cRSk7tSoRWPy", "WQ48eYdcPW", "WRv4hsO", "W6OwWR5QwW", "4P6LhUAEKoAkJUwlM+EmGowHLUwnM+MhII5nWQH2xb4Z44gz6k+d6k2C57+t5Occ55MH6lsy5y6+W7bP44g+", "WO8ZW7bYWQGxW57cRmk/Fu3cVI7dTCoaWP7dRq", "fCkdWOb6W54", "WRVdI8o+Fv7cRHPkyG", "6k+p5RoE5AEJ6lAi", "cKWzW6nI", "DLXuo8kG", "zupcGNvF", "kmoMW6OWW6iq", "W6FdUCoEouW", "WQW0WPLZsCkUjrqJW4JdG8ocW7O", "erjvW5xdGGVcIvVcIwK", "WPtcV2z6WOHwbWRdSCkDWQTHW4vyWPW8WQTAtveZWR9ZdCoMWOL1W4lcJSkkW7ddQ3ODWOpcRt/cISobWRFcICoyW4qpWRvAW77cSWVcJq", "wSoWW6VdM3i", "6k2j5B+t5AAA77Y7", "EmkUW6xdOmkJ5yU25OYZ6lsR5y+A776d56+25B+VW5ik56wmW6xdSvLRoa", "CSo9W57dSfK", "uSkRW7ZcVW", "raXz5P2Y57MG5lQ75yUh5AYx5OUs5OoK5yEkWQzYlmkO", "5lUL5AsD5Ass5RgD5lUa6zAW77+u6yo45zo9552m55Ua44gu", "xvfAlCklW4dcTmkFWQy+DJu", "A8oNW7ldId4", "WRvElKJcNq", "pSo8W7KTW7u", "W6JcVYFIN6hcTowmLoIHTEwMM+I2KvPq", "4P6mloADKEAjRowlPUEmU+wJR+wnRoMeVZiCWONdJ8omfWZJGy/ORRtORRlNVQ7MGzJNMAFOT4JLJiaCCUodPW", "qSoIW5JdLcq", "s0/cVq", "WRpcUvrnW54", "WRNdGCoSW7ZcIq", "4P2UsUITG+wpGUEkM+AaMUAxN+s5QUwKU+I0VCkl", "WRawW7CPjG", "WRmGEspcIa"].concat(["g8oNWQxdVVc8SOXs5Q2K5z+k6zM06k2s5PED56IFCmoL", "qW7dNa", "nrlcUmkUW63cJ0ZcImk5WRpdKW", "rhfz4PY+WOJNG7NOTlJLPQROT6CBxW", "v8o0vG", "AeVcUSo7WQuMoG", "WQVdKSo9WQVdSeZdJYX9", "WP3dU8ov", "BCoKW7tdUsi", "cCoLW58NW7a", "W4RdUCoSe1m", "ugjbrSkqcHtdMmkpvJe", "oCkVW4z+wgi", "6i+J5B2r56sB5yMqWONcKq", "WRlcG8kr4P2Qf+IVKEISNowMNEI3JvZcQW", "W63cGmk/WRRdTJm", "vmo5WRZdISoSWRO", "nSkJWO3cHCkz", "6lYk5lQP6kAt54c55B+/5PE16Agg44gq", "gv5qWPmlW4OfW499cKOc", "pmkYWOaMWONcNMZcVeJdT8oBW4WfuK51W5hdPmkGW4LisCkhxwhcS8o5W5rmoK3cN8kAW5vPE8oMWR4IW7OIWP4cW6qkW5VdKsbaW48ADfvLp2xdUSkc", "WOWsW74nb18", "a2z/WQqf", "mmk4W5P2xG", "kmoMW6iKW7m", "6k+K5Roy5AwU6lwC", "oSoNWP7cVSoZ", "rwi1WP/dMW", "lSo9W64WW44q", "qCoZW6xdLsy", "W7pcO3hINOvx5y6u6kk45OMc5yMl77+R", "5Awd5A+N5P256l6J5P6H5lQa5lIU556q5AA/55QL5PEg5zkx5zgi77YE", "WPRdMrBdTdy", "aJ0whCoA", "WOG4W6yxWROxW5K", "W5DwWQOtW68", "W6tdU8ojCg8", "xbFcQ2ldGq", "bL3MTP3NQ4dKU7RMRO7VVllOJyBLJj/cK8otBCkUe+wKREI1UUoaVW", "4P6eWR/OR7dMS6/cTa", "maPni8o5WRibwH4odw0l", "mColW5m6W4G", "WO4Rwc0", "WQXvW4VcImkj", "nHJcR8k4WRBcI1S", "WPhdQ8oat2VcGtXUs8kn", "Cu/cUSoJWPTWBW", "WPuiW6Gl", "4P+EjhO", "WPK/tY/cTeFdKW", "WQFdOIldQYGPWRKHWQa", "WRFdOIxdOq", "W4RdQSojuKa", "wCkwWQxcVCk2ga", "WReFbIK", "Be/cU8opWPn5FJC5W6rPemo6W5W7", "suaxWPBdUYdcJG", "p8oHW6uNW5GxWQOtWP1i", "WP7dQmoGWRfg", "WOvrW50", "WO/dQSosWPLlC8od", "oCkLW48", "mW5cd8oaWQKktqq", "iSo1WO/cV8os", "o8kVW59Q", "W44XWOrzECkKWQ4", "iSozWPNcLCoH", "W6LbWOOKW6a", "WOLWW54lE8k5WP8bW7FcUW", "nrCahmoX", "t8oJW6VdH2u", "W6bNawhdSFcsPRBdKEw9OUwMGEABOUIcH+AjTUIIQos7LUs5Vos5KUwlI+w8NoEmMmoPwcxdJW", "WRJdUNxdSSo9WQTPW4/dKXirnmkFWPHs", "x8kwWRJcSSkggrVcT8o1", "dmk6W7X1yG", "vmkKW7ZMIRBOOPhLRj/MR5CkWPVcRr3cM8kgWOntnwdcGmkvWRFcVmo4", "cCkiWOLiW7G", "WQ7dTMNdIq", "WQxdVN/dSSoYWRD4W5VdGquEi8kp", "eCkSWPS", "v39mxmky", "bsejhSobiWFdR8kRtHhcQsCSW7ldP29LWOZdOhL+W6O4uqlcLYLGb8kbFSoL", "ltNcMCkEWRO", "WO9xW5tcLa", "rSo+W74", "6l+L5zQV5PAn5O2n5QkN5B+85lMm5Q6U56cG", "W63cLCkGiGldSJ5wxmkYWOHA", "8ycnGJlMIyRMNRVKU53KURRNSjFKUA/LIz3LNPZLT7RLRAFMIk7VV7G", "m8k2WQ4aW4e", "ta/dJ2DYCJBdUMu", "W7tcHmk/WQldIg3dSG", "hfhNROpLIjpKUAdLIzj7W60", "W41xWQCyW6G", "wmkhWRtdOYZcLq", "AeBcV0jZ", "tmo4W7FdJa", "WQdcKSkjeaiMW7ZdP8khpmocWOG", "aCkkWRNcO8kuW7C", "W6VcHmkVWR7dHgFdSHjv", "WRldK8oDq0i", "erW6fCo+", "WOyLsW", "cSk4WOTEW7f1W6C", "WR3dRgldN8oDWQe", "wmkFWQRcQ8k8eq", "z8ocACo/cW", "W4lcICk3lJrEWR99AW", "W6zLuSodWRhcVCkVWP/cSW", "w0zsja", "bmoCWRFMNRRNUPZKU6BLIlZLRi3MIBdMGz7LHOddMNPqWRy", "WRnvtdxdJmkkWQNcNHLh", "5yE85A205B2G5QoV776y5A2G5lU05lUJ77YY", "W69CWPBcGfi", "WQ08WPjy", "smoUW7a", "WOhdPZxdJY8", "fSoQWQJINPlcRUMzN+IUIEwKTUI3H0VcIq", "WQvzvY/dLSkEWPpcGq4", "WQK7W4ZdUIVINBqwfcNOTi7MIizJW7e", "W58zsmkIW4LnW5m+uq", "W4uga8kswW", "cSomWRNLVQJLP5ZMIOpOOOCEW4ztWRCob8o/WQOaWQNdNMFcPSoJoG", "pSk656YH5yMj5lMX5yM7w8kN", "w8oUWQVdNCoSWR0mWPzM", "WQHtt+kFJJJORAlOR5pMIQBLIy/VVAu", "W6b9WPqaW6O", "WPRdQg/dLmov", "ueqxWO7dHstcHgVcPq"]));
  return (_0x4fe4 = function () {
    return W;
  })();
}
main();
var version_ = "jsjiami.com.v7";