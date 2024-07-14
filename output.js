//Sun Jul 14 2024 15:03:53 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
/*
*
*
* */
const fs = require("fs");
const $ = new Env("\u4EAC\u559C\u7267\u573A");
let cookiesArr = [],
  cookie = "",
  notify,
  shareCodes = [];
$.appId = 10028;
$.CryptoJS = $.isNode() ? require("crypto-js") : CryptoJS;
$.debug = true;
Date.prototype.Format = function (fmt) {
  var e,
    n = this,
    d = fmt,
    l = {
      "M+": n.getMonth() + 1,
      "d+": n.getDate(),
      "D+": n.getDate(),
      "h+": n.getHours(),
      "H+": n.getHours(),
      "m+": n.getMinutes(),
      "s+": n.getSeconds(),
      "w+": n.getDay(),
      "q+": Math.floor((n.getMonth() + 3) / 3),
      "S+": n.getMilliseconds()
    };
  /(y+)/i.test(d) && (d = d.replace(RegExp.$1, "".concat(n.getFullYear()).substr(4 - RegExp.$1.length)));
  for (var k in l) {
    if (new RegExp("(".concat(k, ")")).test(d)) {
      var t,
        a = "S+" === k ? "000" : "00";
      d = d.replace(RegExp.$1, 1 == RegExp.$1.length ? l[k] : ("".concat(a) + l[k]).substr("".concat(l[k]).length));
    }
  }
  return d;
};
let HomePageInfo = "",
  cowlastgettime = 0;
let petid = "",
  weedTotal = 0,
  feetTotal = 0;
$.appId = 10028;
!(async () => {
  console.log("\u56E0\u4E3A\u53EF\u80FD\u51FA\u73B0\u706B\u7206\u5BFC\u81F4\u6B7B\u5FAA\u73AF\uFF0C\u6240\u4EE5\u672C\u811A\u672C\u6682\u4E0D\u9886\u53D6\u5DF2\u5B8C\u6210\u4EFB\u52A1");
  await $.wait(5000);
  await requireConfig();
  if (!cookiesArr[0]) {
    $.msg($.name, "\u3010\u63D0\u793A\u3011\u8BF7\u5148\u83B7\u53D6\u4EAC\u4E1C\u8D26\u53F7\u4E00cookie\n\u76F4\u63A5\u4F7F\u7528NobyDa\u7684\u4EAC\u4E1C\u7B7E\u5230\u83B7\u53D6", "https://bean.m.jd.com/bean/signIndex.action", {
      "open-url": "https://bean.m.jd.com/bean/signIndex.action"
    });
    return;
  }
  for (let i = 0; i < cookiesArr.length; i++) {
    if (cookiesArr[i]) {
      cookie = cookiesArr[i];
      $.UserName = decodeURIComponent(cookie.match(/pt_pin=([^; ]+)(?=;?)/) && cookie.match(/pt_pin=([^; ]+)(?=;?)/)[1]);
      $.index = i + 1;
      $.isLogin = true;
      $.nickName = "";
      await TotalBean();
      console.log(`\n开始【京东账号${$.index}】${$.nickName || $.UserName}\n`);
      if (!$.isLogin) {
        $.msg($.name, `【提示】cookie已失效`, `京东账号${$.index} ${$.nickName || $.UserName}\n请重新登录获取\nhttps://bean.m.jd.com/bean/signIndex.action`, {
          "open-url": "https://bean.m.jd.com/bean/signIndex.action"
        });
        if ($.isNode()) {
          await notify.sendNotify(`${$.name}cookie已失效 - ${$.UserName}`, `京东账号${$.index} ${$.UserName}\n请重新登录获取cookie`);
        }
        continue;
      }
      message = "";
      subTitle = "";
      option = {};
      await requestAlgo();
      await getShareCode();
      HomePageInfo = await GetHomePageInfo();
      cowlastgettime = HomePageInfo.data.cow.lastgettime;
      await bull();
      await getTaskList();
      let coins = HomePageInfo["data"]["coins"];
      console.log("\u73B0\u6709\u91D1\u5E01:", coins);
      coins >= 5000 ? await buy() : "";
      let food = HomePageInfo["data"]["materialinfo"][0]["value"];
      console.log("\u73B0\u6709\u8349:", food);
      food >= 10 ? await feed() : "";
      await weed();
      console.log("\u9504\u8349\u6536\u8D27\u5408\u8BA1:", weedTotal);
      await feet();
      console.log("\u6311\u9017\u6536\u8D27\u5408\u8BA1:", feetTotal);
    }
  }
  console.log("\u5F00\u59CB\u52A9\u529B...");
  for (let i = 0; i < CookieJDs.length; i++) {
    cookie = CookieJDs[i];
    await help(i);
  }
})();
function bull() {
  let opt = newtasksysUrl("GetCoin", "", "channel,sceneid,token", "", "", A(cowlastgettime));
  $.get(opt, (err, resp, data) => {
    console.log(data);
    data = JSON.parse(data);
    data.ret === 0 ? console.log("\u6536\u725B\u725B\u6210\u529F:", data.data.addcoin) : console.log("\u6536\u725B\u725B\u5931\u8D25:", data.message);
  });
}
function GetHomePageInfo() {
  return new Promise(resolve => {
    let url = `https://m.jingxi.com/jxmc/queryservice/GetHomePageInfo?channel=7&sceneid=1001&_stk=channel%2Csceneid&_ste=1&sceneval=2`;
    $.get({
      url: url + `&h5st=${decrypt(Date.now(), "channel,sceneid", "", url)}`,
      "headers": {
        "Cookie": cookie,
        "Host": "m.jingxi.com",
        "Accept": "*/*",
        "User-Agent": $.isNode() ? process.env.JD_USER_AGENT ? process.env.JD_USER_AGENT : require("./USER_AGENTS").USER_AGENT : $.getdata("JDUA") ? $.getdata("JDUA") : "jdapp;iPhone;9.4.4;14.3;network/4g;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1",
        "Accept-Language": "zh-cn",
        "Referer": "https://st.jingxi.com/"
      }
    }, (err, resp, data) => {
      data = JSON.parse(data);
      petid = data.data.petinfo[0].petid;
      resolve(data);
    });
  });
}
function getTaskList() {
  return new Promise(resolve => {
    $.get(taskOpt("GetUserTaskStatusList", "bizCode,dateType,source", "", ""), async (err, resp, data) => {
      try {
        data = JSON.parse(data);
        if (data.msg.indexOf("\u706B\u7206") > -1) {
          console.log("\u706B\u7206, break");
        } else {
          if (data["ret"] === 0) {
            let tasks = data["data"]["userTaskStatusList"];
            // write(JSON.stringify(tasks))
            for (let task of tasks) {
              if (task.taskName, task.taskCaller === "\u9080\u8BF7\u597D\u53CB\u52A9\u529B\u517B\u9E21") continue;
              if (task["dateType"] === 1) {
                if (task["awardStatus"] === 2 && task["completedTimes"] === task["targetTimes"]) {
                  console.log("\u6210\u5C31\u4EFB\u52A1:", task.completedTimes, task.targetTimes, task.awardStatus, task.taskName);
                }
              } else {
                if (task["awardStatus"] === 2 && task["taskCaller"] === 1) {
                  console.log("\u6BCF\u65E5\u4EFB\u52A1:", task.completedTimes, task.targetTimes, task.awardStatus, task.taskName, task.taskCaller);
                  if (task.taskName.indexOf("\u9080") === -1) {
                    if (task["completedTimes"] === task["targetTimes"]) {}
                  } else {
                    console.log("pass: ", task.taskName);
                  }
                }
              }
            }
          }
        }
      } catch (e) {
        $.logErr("\u9504\u8349\u9519\u8BEF\uFF01");
      } finally {
        resolve();
      }
    });
  });
}
function doTask(taskId) {
  return new Promise(resolve => {
    $.get(taskOpt("DoTask", "bizCode,configExtra,source,taskId", "", taskId), (err, resp, data) => {
      console.log("\u505A\u4EFB\u52A1:", data);
      data = JSON.parse(data);
      resolve(data["msg"]);
    });
  });
}
function award(taskId) {
  return new Promise(resolve => {
    $.get(taskOpt("Award", "bizCode,source,taskId", "", taskId), async (err, resp, data) => {
      console.log("\u4EFB\u52A1\u5B8C\u6210:", data);
      data = JSON.parse(data);
      if (data["ret"] === 0) {
        let awardCoin = parseInt(data["data"]["prizeInfo"].match(/:(.*)}/)[1]);
        console.log("\u4EFB\u52A1\u5B8C\u6210\u83B7\u5F97:", awardCoin);
      }
      resolve(data["msg"]);
    });
  });
}
function buy() {
  console.log("\u5F00\u59CB\u4E70\u8349...");
  return new Promise(resolve => {
    $.get(newtasksysUrl("Buy", "", "channel,sceneid,type", "1"), async (err, resp, data) => {
      data = JSON.parse(data);
      if (data["ret"] === 0) {
        console.log("\u4E70\u8349\u6210\u529F\u3002\u82B1\u8D39:", data["data"]["usecoins"], "\u3002\u73B0\u6709:", data["data"]["newnum"]);
        await $.wait(1000);
        HomePageInfo = await GetHomePageInfo();
        await $.wait(1000);
        await buy();
      }
      resolve();
    });
  });
}
function feed() {
  return new Promise(resolve => {
    $.get(newtasksysUrl("Feed", "", "channel,sceneid"), async (err, resp, data) => {
      console.log("\u5582\u8349...", data);
      data = JSON.parse(data);
      // console.log(data)
      if (data) {
        let newnum = data["data"]["newnum"] || data.data.totalcoin;
        console.log("\u5582\u8349\u4E2D...\u5269\u4F59:", newnum);
        if (data["data"]["maintaskId"]) {
          if (data.message === "\u5C0F\u9E21\u5403\u592A\u591A\u5F71\u54CD\u5065\u5EB7\uFF0C\u660E\u5929\u518D\u5582\u5427") {
            console.log("\u518D\u5403\u5C31\u6491\u6B7B\u4E86\uFF01");
          } else if (data["data"]["maintaskId"] === "pause" && data["ret"] === 2020) {
            console.log("\u53EF\u6536\u86CB");
            await getEgg();
            await $.wait(2000);
            await feed();
          }
        } else {
          if (newnum >= 10) {
            await $.wait(2000);
            await feed();
          }
        }
      }
      resolve();
    });
  });
}
function getEgg() {
  return new Promise(resolve => {
    $.get(newtasksysUrl("GetSelfResult", petid, "channel,itemid,sceneid,type", "11"), async (err, resp, data) => {
      console.log(data);
      data = JSON.parse(data);
      if (data["ret"] === 0) {
        console.log(`收蛋成功！ 现有${data.data.newnum}个蛋。`);
      }
      await $.wait(1000);
      resolve();
    });
  });
}
function weed() {
  return new Promise(resolve => {
    $.get(newtasksysUrl("Action", "", "channel,sceneid,type", "2"), async (err, resp, data) => {
      try {
        data = JSON.parse(data).data;
        let addcoins = data.addcoins;
        console.log("\u9504\u8349\u6536\u83B7:", addcoins);
        if (data.surprise) {
          await weedPrize();
        }
        if (addcoins) {
          weedTotal += addcoins;
          await $.wait(1500);
          await weed();
        }
      } catch (e) {
        $.logErr("\u9504\u8349\u9519\u8BEF\uFF01");
      } finally {
        resolve();
      }
    });
  });
}
function weedPrize() {
  return new Promise(resolve => {
    $.get(newtasksysUrl("GetSelfResult", "undefined", "channel,sceneid,type", "14"), async (err, resp, data) => {
      try {
        console.log(data);
        data = JSON.parse(data);
        if (data["ret"] === 0) {
          console.log(`除草礼包打开成功！`);
        }
      } catch (e) {
        $.logErr("\u9664\u8349\u793C\u5305\u6253\u5F00\u9519\u8BEF\uFF01");
      } finally {
        resolve();
      }
    });
  });
}
function feet() {
  return new Promise(resolve => {
    $.get(newtasksysUrl("Action", "", "channel,petid,sceneid,type", "1", petid), async (err, resp, data) => {
      try {
        data = JSON.parse(data);
        if (data["ret"] === 0 && data.data.addcoins !== 0) {
          console.log(`挑逗成功！获得`, data.data.addcoins, `金币。`);
          feetTotal += data.data.addcoins;
          await $.wait(1000);
          await feet();
        }
      } catch (e) {
        $.logErr("\u6311\u9017\u9519\u8BEF\uFF01");
      } finally {
        resolve();
      }
    });
  });
}
function getShareCode() {
  return new Promise(resolve => {
    let url = `https://m.jingxi.com/jxmc/queryservice/GetHomePageInfo?channel=7&sceneid=1001&isgift=1&_stk=channel%2Cisgift%2Csceneid&_ste=1&sceneval=2`;
    $.get({
      url: url + `&h5st=${decrypt(Date.now(), "channel,isgift,sceneid", "", url)}`,
      "headers": {
        "Cookie": cookie,
        "Host": "m.jingxi.com",
        "Accept": "*/*",
        "User-Agent": $.isNode() ? process.env.JD_USER_AGENT ? process.env.JD_USER_AGENT : require("./USER_AGENTS").USER_AGENT : $.getdata("JDUA") ? $.getdata("JDUA") : "jdapp;iPhone;9.4.4;14.3;network/4g;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1",
        "Accept-Language": "zh-cn",
        "Referer": "https://st.jingxi.com/"
      }
    }, (err, resp, data) => {
      try {
        data = JSON.parse(data);
        console.log("\u52A9\u529B\u7801\uFF1A", data.data.sharekey);
        shareCodes.push(data.data.sharekey);
      } catch (e) {
        console.log("getShareCode() Error:", e);
      } finally {
        resolve();
      }
    });
  });
}
function help(i) {
  return new Promise(async resolve => {
    for (let j = 0; j < shareCodes.length; j++) {
      if (i === j) {
        console.log("\u4E0D\u52A9\u529B\u81EA\u5DF1");
      } else {
        let url = `https://m.jingxi.com/jxmc/operservice/EnrollFriend?sharekey=${shareCodes[j]}&channel=7&sceneid=1001&_stk=channel%2Csceneid%2Csharekey&_ste=1&_=${Date.now()}&sceneval=2`;
        $.get({
          url: url + `&h5st=${decrypt(Date.now(), "channel,sceneid,sharekey", "", url)}`,
          "headers": {
            "Cookie": cookie,
            "Host": "m.jingxi.com",
            "Accept": "*/*",
            "User-Agent": $.isNode() ? process.env.JD_USER_AGENT ? process.env.JD_USER_AGENT : require("./USER_AGENTS").USER_AGENT : $.getdata("JDUA") ? $.getdata("JDUA") : "jdapp;iPhone;9.4.4;14.3;network/4g;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1",
            "Accept-Language": "zh-cn",
            "Referer": "https://st.jingxi.com/"
          }
        }, (err, resp, data) => {
          data = JSON.parse(data);
          console.log(data);
        });
      }
      await $.wait(2000);
    }
    resolve();
  });
}
function newtasksysUrl(functionId, itemid, stk, type = "", petid = "", token = "") {
  let url = `https://m.jingxi.com/jxmc/operservice/${functionId}?channel=7&sceneid=1001&_ste=1&_=${Date.now()}&sceneval=2&g_login_type=1`;
  if (type) {
    url += `&type=${type}`;
  }
  if (itemid) {
    url += `&itemid=${itemid}`;
  }
  if (stk) {
    url += `&_stk=${encodeURIComponent(stk)}`;
  }
  token ? url += `&token=${token}` : "";
  petid ? url += `&petid=${petid}` : "";
  url += `&h5st=${decrypt(Date.now(), stk, type, url)}`;
  return {
    url,
    "headers": {
      "Cookie": cookie,
      "Host": "m.jingxi.com",
      "Accept": "*/*",
      "User-Agent": $.isNode() ? process.env.JD_USER_AGENT ? process.env.JD_USER_AGENT : require("./USER_AGENTS").USER_AGENT : $.getdata("JDUA") ? $.getdata("JDUA") : "jdapp;iPhone;9.4.4;14.3;network/4g;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1",
      "Accept-Language": "zh-cn",
      "Referer": "https://st.jingxi.com/pingou/jxmc/index.html"
    }
  };
}
function taskOpt(functionId, stk, dataType, taskId) {
  let url = `https://m.jingxi.com/newtasksys/newtasksys_front/${functionId}?_=${Date.now()}&source=jxmc&bizCode=jxmc&_ste=1&sceneval=2&g_login_type=1`;
  dataType ? url += `&dataType=${dataType}` : "";
  taskId ? url += `&taskId=${taskId}` : "";
  stk ? url += `&_stk=${encodeURIComponent(stk)}` : "";
  functionId === "DoTask" ? url += "&configExtra=" : "";
  url += "&h5st=" + decrypt(Date.now(), stk, "", url);
  return {
    url,
    headers: {
      "Cookie": cookie,
      "Host": "m.jingxi.com",
      "Accept": "*/*",
      "User-Agent": $.isNode() ? process.env.JD_USER_AGENT ? process.env.JD_USER_AGENT : require("./USER_AGENTS").USER_AGENT : $.getdata("JDUA") ? $.getdata("JDUA") : "jdapp;iPhone;9.4.4;14.3;network/4g;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1",
      "Accept-Language": "zh-cn",
      "Referer": "https://st.jingxi.com/pingou/jxmc/index.html"
    }
  };
}
async function requestAlgo() {
  $.fingerprint = await generateFp();
  const options = {
    "url": `https://cactus.jd.com/request_algo?g_ty=ajax`,
    "headers": {
      "Authority": "cactus.jd.com",
      "Pragma": "no-cache",
      "Cache-Control": "no-cache",
      "Accept": "application/json",
      "User-Agent": $.isNode() ? process.env.JD_USER_AGENT ? process.env.JD_USER_AGENT : require("./USER_AGENTS").USER_AGENT : $.getdata("JDUA") ? $.getdata("JDUA") : "jdapp;iPhone;9.4.4;14.3;network/4g;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1",
      "Content-Type": "application/json",
      "Origin": "https://st.jingxi.com",
      "Sec-Fetch-Site": "cross-site",
      "Sec-Fetch-Mode": "cors",
      "Sec-Fetch-Dest": "empty",
      "Referer": "https://st.jingxi.com/",
      "Accept-Language": "zh-CN,zh;q=0.9,zh-TW;q=0.8,en;q=0.7"
    },
    "body": JSON.stringify({
      "version": "1.0",
      "fp": $.fingerprint,
      "appId": $.appId,
      "timestamp": Date.now(),
      "platform": "web",
      "expandParams": ""
    })
  };
  new Promise(async resolve => {
    $.post(options, (err, resp, data) => {
      try {
        if (err) {
          console.log(`${JSON.stringify(err)}`);
          console.log(`request_algo 签名参数API请求失败，请检查网路重试`);
        } else {
          if (data) {
            data = JSON.parse(data);
            if (data["status"] === 200) {
              $.token = data.data.result.tk;
              let enCryptMethodJDString = data.data.result.algo;
              if (enCryptMethodJDString) $.enCryptMethodJD = new Function(`return ${enCryptMethodJDString}`)();
            } else {
              console.log(`fp: ${$.fingerprint}`);
              console.log("request_algo \u7B7E\u540D\u53C2\u6570API\u8BF7\u6C42\u5931\u8D25:");
            }
          } else {
            console.log(`京东服务器返回空数据`);
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}
function decrypt(time, stk, type, url) {
  stk = stk || (url ? getUrlData(url, "_stk") : "");
  if (stk) {
    const timestamp = new Date(time).Format("yyyyMMddhhmmssSSS");
    let hash1 = "";
    if ($.fingerprint && $.token && $.enCryptMethodJD) {
      hash1 = $.enCryptMethodJD($.token, $.fingerprint.toString(), timestamp.toString(), $.appId.toString(), $.CryptoJS).toString($.CryptoJS.enc.Hex);
    } else {
      const random = "5gkjB6SpmC9s";
      $.token = `tk01wcdf61cb3a8nYUtHcmhSUFFCfddDPRvKvYaMjHkxo6Aj7dhzO+GXGFa9nPXfcgT+mULoF1b1YIS1ghvSlbwhE0Xc`;
      $.fingerprint = 9686767825751160;
      // $.fingerprint = 7811850938414161;
      const str = `${$.token}${$.fingerprint}${timestamp}${$.appId}${random}`;
      hash1 = $.CryptoJS.SHA512(str, $.token).toString($.CryptoJS.enc.Hex);
    }
    let st = "";
    stk.split(",").map((item, index) => {
      st += `${item}:${getUrlData(url, item)}${index === stk.split(",").length - 1 ? "" : "&"}`;
    });
    const hash2 = $.CryptoJS.HmacSHA256(st, hash1.toString()).toString($.CryptoJS.enc.Hex);
    return encodeURIComponent(["".concat(timestamp.toString()), "".concat($.fingerprint.toString()), "".concat($.appId.toString()), "".concat($.token), "".concat(hash2)].join(";"));
  } else {
    return "20210318144213808;8277529360925161;10028;tk01w952a1b73a8nU0luMGtBanZTHCgj0KFVwDa4n5pJ95T/5bxO/m54p4MtgVEwKNev1u/BUjrpWAUMZPW0Kz2RWP8v;86054c036fe3bf0991bd9a9da1a8d44dd130c6508602215e50bb1e385326779d";
  }
}
function requireConfig() {
  return new Promise(resolve => {
    console.log("\u5F00\u59CB\u83B7\u53D6\u914D\u7F6E\u6587\u4EF6\n");
    notify = $.isNode() ? require("./sendNotify") : "";
    //Node.js用户请在jdCookie.js处填写京东ck;
    const jdCookieNode = $.isNode() ? require("./jdCookie.js") : "";
    //IOS等用户直接用NobyDa的jd cookie
    if ($.isNode()) {
      Object.keys(jdCookieNode).forEach(item => {
        if (jdCookieNode[item]) {
          cookiesArr.push(jdCookieNode[item]);
        }
      });
      if (process.env.JD_DEBUG && process.env.JD_DEBUG === "false") console.log = () => {};
    } else {
      cookiesArr = [$.getdata("CookieJD"), $.getdata("CookieJD2"), ...jsonParse($.getdata("CookiesJD") || "[]").map(item => item.cookie)].filter(item => !!item);
    }
    console.log(`共${cookiesArr.length}个京东账号\n`);
    resolve();
  });
}
function TotalBean() {
  return new Promise(async resolve => {
    const options = {
      url: "https://me-api.jd.com/user_new/info/GetJDUserInfoUnion",
      headers: {
        Host: "me-api.jd.com",
        Accept: "*/*",
        Connection: "keep-alive",
        Cookie: cookie,
        "User-Agent": $.isNode() ? process.env.JD_USER_AGENT ? process.env.JD_USER_AGENT : require("./USER_AGENTS").USER_AGENT : $.getdata("JDUA") ? $.getdata("JDUA") : "jdapp;iPhone;9.4.4;14.3;network/4g;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1",
        "Accept-Language": "zh-cn",
        "Referer": "https://home.m.jd.com/myJd/newhome.action?sceneval=2&ufc=&",
        "Accept-Encoding": "gzip, deflate, br"
      }
    };
    $.get(options, (err, resp, data) => {
      try {
        if (err) {
          $.logErr(err);
        } else {
          if (data) {
            data = JSON.parse(data);
            if (data["retcode"] === "1001") {
              $.isLogin = false; //cookie过期
              return;
            }
            if (data["retcode"] === "0" && data.data && data.data.hasOwnProperty("userInfo")) {
              $.nickName = data.data.userInfo.baseInfo.nickname;
            }
          } else {
            $.log("\u4EAC\u4E1C\u670D\u52A1\u5668\u8FD4\u56DE\u7A7A\u6570\u636E");
          }
        }
      } catch (e) {
        $.logErr(e);
      } finally {
        resolve();
      }
    });
  });
}
function getUrlData(url, name) {
  if (typeof URL !== "undefined") {
    let urls = new URL(url);
    let data = urls.searchParams.get(name);
    return data ? data : "";
  } else {
    const query = url.match(/\?.*/)[0].substring(1);
    const vars = query.split("&");
    for (let i = 0; i < vars.length; i++) {
      const pair = vars[i].split("=");
      if (pair[0] === name) {
        // return pair[1];
        return vars[i].substr(vars[i].indexOf("=") + 1);
      }
    }
    return "";
  }
}
function generateFp() {
  let e = "0123456789";
  let a = 13;
  let i = "";
  for (; a--;) i += e[Math.random() * e.length | 0];
  return (i + Date.now()).slice(0, 16);
}
function t(n, t) {
  var r = (65535 & n) + (65535 & t);
  return (n >> 16) + (t >> 16) + (r >> 16) << 16 | 65535 & r;
}
function r(n, t) {
  return n << t | n >>> 32 - t;
}
function e(n, e, o, u, c, f) {
  return t(r(t(t(e, n), t(u, f)), c), o);
}
function o(n, t, r, o, u, c, f) {
  return e(t & r | ~t & o, n, t, u, c, f);
}
function u(n, t, r, o, u, c, f) {
  return e(t & o | r & ~o, n, t, u, c, f);
}
function c(n, t, r, o, u, c, f) {
  return e(t ^ r ^ o, n, t, u, c, f);
}
function f(n, t, r, o, u, c, f) {
  return e(r ^ (t | ~o), n, t, u, c, f);
}
function i(n, r) {
  n[r >> 5] |= 128 << r % 32, n[14 + (r + 64 >>> 9 << 4)] = r;
  var e,
    i,
    a,
    d,
    h,
    l = 1732584193,
    g = -271733879,
    v = -1732584194,
    m = 271733878;
  for (e = 0; e < n.length; e += 16) i = l, a = g, d = v, h = m, g = f(g = f(g = f(g = f(g = c(g = c(g = c(g = c(g = u(g = u(g = u(g = u(g = o(g = o(g = o(g = o(g, v = o(v, m = o(m, l = o(l, g, v, m, n[e], 7, -680876936), g, v, n[e + 1], 12, -389564586), l, g, n[e + 2], 17, 606105819), m, l, n[e + 3], 22, -1044525330), v = o(v, m = o(m, l = o(l, g, v, m, n[e + 4], 7, -176418897), g, v, n[e + 5], 12, 1200080426), l, g, n[e + 6], 17, -1473231341), m, l, n[e + 7], 22, -45705983), v = o(v, m = o(m, l = o(l, g, v, m, n[e + 8], 7, 1770035416), g, v, n[e + 9], 12, -1958414417), l, g, n[e + 10], 17, -42063), m, l, n[e + 11], 22, -1990404162), v = o(v, m = o(m, l = o(l, g, v, m, n[e + 12], 7, 1804603682), g, v, n[e + 13], 12, -40341101), l, g, n[e + 14], 17, -1502002290), m, l, n[e + 15], 22, 1236535329), v = u(v, m = u(m, l = u(l, g, v, m, n[e + 1], 5, -165796510), g, v, n[e + 6], 9, -1069501632), l, g, n[e + 11], 14, 643717713), m, l, n[e], 20, -373897302), v = u(v, m = u(m, l = u(l, g, v, m, n[e + 5], 5, -701558691), g, v, n[e + 10], 9, 38016083), l, g, n[e + 15], 14, -660478335), m, l, n[e + 4], 20, -405537848), v = u(v, m = u(m, l = u(l, g, v, m, n[e + 9], 5, 568446438), g, v, n[e + 14], 9, -1019803690), l, g, n[e + 3], 14, -187363961), m, l, n[e + 8], 20, 1163531501), v = u(v, m = u(m, l = u(l, g, v, m, n[e + 13], 5, -1444681467), g, v, n[e + 2], 9, -51403784), l, g, n[e + 7], 14, 1735328473), m, l, n[e + 12], 20, -1926607734), v = c(v, m = c(m, l = c(l, g, v, m, n[e + 5], 4, -378558), g, v, n[e + 8], 11, -2022574463), l, g, n[e + 11], 16, 1839030562), m, l, n[e + 14], 23, -35309556), v = c(v, m = c(m, l = c(l, g, v, m, n[e + 1], 4, -1530992060), g, v, n[e + 4], 11, 1272893353), l, g, n[e + 7], 16, -155497632), m, l, n[e + 10], 23, -1094730640), v = c(v, m = c(m, l = c(l, g, v, m, n[e + 13], 4, 681279174), g, v, n[e], 11, -358537222), l, g, n[e + 3], 16, -722521979), m, l, n[e + 6], 23, 76029189), v = c(v, m = c(m, l = c(l, g, v, m, n[e + 9], 4, -640364487), g, v, n[e + 12], 11, -421815835), l, g, n[e + 15], 16, 530742520), m, l, n[e + 2], 23, -995338651), v = f(v, m = f(m, l = f(l, g, v, m, n[e], 6, -198630844), g, v, n[e + 7], 10, 1126891415), l, g, n[e + 14], 15, -1416354905), m, l, n[e + 5], 21, -57434055), v = f(v, m = f(m, l = f(l, g, v, m, n[e + 12], 6, 1700485571), g, v, n[e + 3], 10, -1894986606), l, g, n[e + 10], 15, -1051523), m, l, n[e + 1], 21, -2054922799), v = f(v, m = f(m, l = f(l, g, v, m, n[e + 8], 6, 1873313359), g, v, n[e + 15], 10, -30611744), l, g, n[e + 6], 15, -1560198380), m, l, n[e + 13], 21, 1309151649), v = f(v, m = f(m, l = f(l, g, v, m, n[e + 4], 6, -145523070), g, v, n[e + 11], 10, -1120210379), l, g, n[e + 2], 15, 718787259), m, l, n[e + 9], 21, -343485551), l = t(l, i), g = t(g, a), v = t(v, d), m = t(m, h);
  return [l, g, v, m];
}
function a(n) {
  var t,
    r = "",
    e = 32 * n.length;
  for (t = 0; t < e; t += 8) r += String.fromCharCode(n[t >> 5] >>> t % 32 & 255);
  return r;
}
function d(n) {
  var t,
    r = [];
  for (r[(n.length >> 2) - 1] = void 0, t = 0; t < r.length; t += 1) r[t] = 0;
  var e = 8 * n.length;
  for (t = 0; t < e; t += 8) r[t >> 5] |= (255 & n.charCodeAt(t / 8)) << t % 32;
  return r;
}
function h(n) {
  return a(i(d(n), 8 * n.length));
}
function l(n, t) {
  var r,
    e,
    o = d(n),
    u = [],
    c = [];
  for (u[15] = c[15] = void 0, o.length > 16 && (o = i(o, 8 * n.length)), r = 0; r < 16; r += 1) u[r] = 909522486 ^ o[r], c[r] = 1549556828 ^ o[r];
  return e = i(u.concat(d(t)), 512 + 8 * t.length), a(i(c.concat(e), 640));
}
function g(n) {
  var t,
    r,
    e = "";
  for (r = 0; r < n.length; r += 1) t = n.charCodeAt(r), e += "0123456789abcdef".charAt(t >>> 4 & 15) + "0123456789abcdef".charAt(15 & t);
  return e;
}
function v(n) {
  return unescape(encodeURIComponent(n));
}
function m(n) {
  return h(v(n));
}
function p(n) {
  return g(m(n));
}
function s(n, t) {
  return l(v(n), v(t));
}
function C(n, t) {
  return g(s(n, t));
}
function A(n, t, r) {
  return t ? r ? s(t, n) : C(t, n) : r ? m(n) : p(n);
}
function Env(t, e) {
  "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
  class s {
    constructor(t) {
      this.env = t;
    }
    send(t, e = "GET") {
      t = "string" == typeof t ? {
        url: t
      } : t;
      let s = this.get;
      return "POST" === e && (s = this.post), new Promise((e, i) => {
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
      this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = new Date().getTime(), Object.assign(this, e), this.log("", `🔔${this.name}, 开始!`);
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
        return !1;
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
        r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r;
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
        this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
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
        this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
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
      for (const t of i) if (r = Object(r)[t], void 0 === r) return s;
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
      let s = !1;
      if (/^@/.test(e)) {
        const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e),
          o = this.getval(i),
          h = i ? "null" === o ? null : o || "{}" : "{}";
        try {
          const e = JSON.parse(h);
          this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i);
        } catch (e) {
          const o = {};
          this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i);
        }
      } else s = this.setval(t, e);
      return s;
    }
    getval(t) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null;
    }
    setval(t, e) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null;
    }
    initGotEnv(t) {
      this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar(), t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar));
    }
    get(t, e = () => {}) {
      t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient.get(t, (t, s, i) => {
        !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i);
      })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
        hints: !1
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
      }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => {
        try {
          if (t.headers["set-cookie"]) {
            const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
            s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar;
          }
        } catch (t) {
          this.logErr(t);
        }
      }).then(t => {
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
      }, t => {
        const {
          message: s,
          response: i
        } = t;
        e(s, i, i && i.body);
      }));
    }
    post(t, e = () => {}) {
      if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient.post(t, (t, s, i) => {
        !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i);
      });else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
        hints: !1
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
        this.initGotEnv(t);
        const {
          url: s,
          ...i
        } = t;
        this.got.post(s, i).then(t => {
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
        }, t => {
          const {
            message: s,
            response: i
          } = t;
          e(s, i, i && i.body);
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
        } : void 0;
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
        let t = ["", "==============\uD83D\uDCE3\u7CFB\u7EDF\u901A\u77E5\uD83D\uDCE3=============="];
        t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t);
      }
    }
    log(...t) {
      t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator));
    }
    logErr(t, e) {
      const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t);
    }
    wait(t) {
      return new Promise(e => setTimeout(e, t));
    }
    done(t = {}) {
      const e = new Date().getTime(),
        s = (e - this.startTime) / 1000;
      this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t);
    }
  }(t, e);
}