//Sat Aug 17 2024 16:00:59 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const $ = new Env("慈晓"),
  notify = $.isNode() ? require("./sendNotify") : "";
(() => {
  function _0x497593(_0x2e206b) {
    _0x497593 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (_0x20c718) {
      {
        return typeof _0x20c718;
      }
    } : function (_0x2cc693) {
      {
        return _0x2cc693 && "function" == typeof Symbol && _0x2cc693.constructor === Symbol && _0x2cc693 !== Symbol.prototype ? "symbol" : typeof _0x2cc693;
      }
    };
    return _0x497593(_0x2e206b);
  }
  function _0x1ea915(_0x3a386b, _0x5cf4be) {
    {
      var _0x2bfb71 = "undefined" != typeof Symbol && _0x3a386b[Symbol.iterator] || _0x3a386b["@@iterator"];
      if (!_0x2bfb71) {
        if (Array.isArray(_0x3a386b) || (_0x2bfb71 = _0x2cb112(_0x3a386b)) || _0x5cf4be && _0x3a386b && "number" == typeof _0x3a386b.length) {
          _0x2bfb71 && (_0x3a386b = _0x2bfb71);
          var _0x2b1c60 = 0,
            _0x39f6a6 = function () {};
          return {
            s: _0x39f6a6,
            n: function () {
              {
                var _0x1a955c = {
                  done: true
                };
                return _0x2b1c60 >= _0x3a386b.length ? _0x1a955c : {
                  done: false,
                  value: _0x3a386b[_0x2b1c60++]
                };
              }
            },
            e: function (_0x5dc297) {
              {
                throw _0x5dc297;
              }
            },
            f: _0x39f6a6
          };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      var _0x1eed7e,
        _0x32297b = true,
        _0x440d26 = false;
      return {
        s: function () {
          {
            _0x2bfb71 = _0x2bfb71.call(_0x3a386b);
          }
        },
        n: function () {
          {
            var _0x18e124 = _0x2bfb71.next();
            _0x32297b = _0x18e124.done;
            return _0x18e124;
          }
        },
        e: function (_0x475e5d) {
          {
            _0x440d26 = true;
            _0x1eed7e = _0x475e5d;
          }
        },
        f: function () {
          {
            try {
              {
                _0x32297b || null == _0x2bfb71.return || _0x2bfb71.return();
              }
            } finally {
              if (_0x440d26) {
                throw _0x1eed7e;
              }
            }
          }
        }
      };
    }
  }
  function _0x2cb112(_0x528add, _0xa7b90d) {
    {
      if (_0x528add) {
        if ("string" == typeof _0x528add) {
          return _0xe8d482(_0x528add, _0xa7b90d);
        }
        var _0x277a89 = {}.toString.call(_0x528add).slice(8, -1);
        "Object" === _0x277a89 && _0x528add.constructor && (_0x277a89 = _0x528add.constructor.name);
        return "Map" === _0x277a89 || "Set" === _0x277a89 ? Array.from(_0x528add) : "Arguments" === _0x277a89 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(_0x277a89) ? _0xe8d482(_0x528add, _0xa7b90d) : void 0;
      }
    }
  }
  function _0xe8d482(_0xa54481, _0x3bc40f) {
    {
      (null == _0x3bc40f || _0x3bc40f > _0xa54481.length) && (_0x3bc40f = _0xa54481.length);
      for (var _0x1cc37c = 0, _0x28e9dd = Array(_0x3bc40f); _0x1cc37c < _0x3bc40f; _0x1cc37c++) {
        _0x28e9dd[_0x1cc37c] = _0xa54481[_0x1cc37c];
      }
      return _0x28e9dd;
    }
  }
  function _0x2c162c() {
    'use strict';

    _0x2c162c = function () {
      return _0x2de8ee;
    };
    var _0x102f66,
      _0x2de8ee = {},
      _0x1158bd = Object.prototype,
      _0x5e94cc = _0x1158bd.hasOwnProperty,
      _0x1272be = Object.defineProperty || function (_0x1499c7, _0x4556a5, _0xca66b0) {
        {
          _0x1499c7[_0x4556a5] = _0xca66b0.value;
        }
      },
      _0x325322 = "function" == typeof Symbol ? Symbol : {},
      _0x22cb3a = _0x325322.iterator || "@@iterator",
      _0x503226 = _0x325322.asyncIterator || "@@asyncIterator",
      _0x3e5f32 = _0x325322.toStringTag || "@@toStringTag";
    function _0x15a66d(_0x1e1035, _0x49bfd9, _0x2cc2e2) {
      {
        var _0x437f52 = {};
        _0x437f52.value = _0x2cc2e2;
        _0x437f52.enumerable = true;
        _0x437f52.configurable = true;
        _0x437f52.writable = true;
        Object.defineProperty(_0x1e1035, _0x49bfd9, _0x437f52);
        return _0x1e1035[_0x49bfd9];
      }
    }
    try {
      {
        _0x15a66d({}, "");
      }
    } catch (_0x50e7b5) {
      {
        _0x15a66d = function (_0x2d4530, _0x528b52, _0x58f404) {
          {
            return _0x2d4530[_0x528b52] = _0x58f404;
          }
        };
      }
    }
    function _0xb5dd32(_0x55060e, _0x204805, _0x1f00df, _0x255166) {
      {
        var _0x1fdc93 = _0x204805 && _0x204805.prototype instanceof _0x434144 ? _0x204805 : _0x434144,
          _0x3288f0 = Object.create(_0x1fdc93.prototype),
          _0x36e7cd = new _0x4e7db0(_0x255166 || []);
        _0x1272be(_0x3288f0, "_invoke", {
          value: _0x55861d(_0x55060e, _0x1f00df, _0x36e7cd)
        });
        return _0x3288f0;
      }
    }
    function _0x5490af(_0x485879, _0x397937, _0x319f45) {
      {
        try {
          return {
            type: "normal",
            arg: _0x485879.call(_0x397937, _0x319f45)
          };
        } catch (_0xd6b90d) {
          {
            var _0x308117 = {
              type: "throw",
              arg: _0xd6b90d
            };
            return _0x308117;
          }
        }
      }
    }
    _0x2de8ee.wrap = _0xb5dd32;
    var _0x4ee345 = "suspendedStart",
      _0x2f00c0 = "suspendedYield",
      _0x2560a1 = "executing",
      _0x2f4605 = "completed",
      _0x727e0d = {};
    function _0x434144() {}
    function _0x4596a7() {}
    function _0x2488fb() {}
    var _0x21d088 = {};
    _0x15a66d(_0x21d088, _0x22cb3a, function () {
      {
        return this;
      }
    });
    var _0x404db6 = Object.getPrototypeOf,
      _0x413d90 = _0x404db6 && _0x404db6(_0x404db6(_0x3bd026([])));
    _0x413d90 && _0x413d90 !== _0x1158bd && _0x5e94cc.call(_0x413d90, _0x22cb3a) && (_0x21d088 = _0x413d90);
    _0x2488fb.prototype = _0x434144.prototype = Object.create(_0x21d088);
    var _0x1aaa7d = _0x2488fb.prototype;
    function _0x73b9fa(_0x26ee56) {
      {
        ["next", "throw", "return"].forEach(function (_0x29686b) {
          {
            _0x15a66d(_0x26ee56, _0x29686b, function (_0x1a9c97) {
              {
                return this._invoke(_0x29686b, _0x1a9c97);
              }
            });
          }
        });
      }
    }
    function _0x487672(_0x3d3a0c, _0x2ad58c) {
      {
        function _0x1d7eb4(_0x441df4, _0x424975, _0x2d28d5, _0x5c6f45) {
          {
            var _0x58e87e = _0x5490af(_0x3d3a0c[_0x441df4], _0x3d3a0c, _0x424975);
            if ("throw" !== _0x58e87e.type) {
              var _0x4e65b4 = _0x58e87e.arg,
                _0xa986f7 = _0x4e65b4.value;
              return _0xa986f7 && "object" == _0x497593(_0xa986f7) && _0x5e94cc.call(_0xa986f7, "__await") ? _0x2ad58c.resolve(_0xa986f7.__await).then(function (_0xca2e99) {
                {
                  _0x1d7eb4("next", _0xca2e99, _0x2d28d5, _0x5c6f45);
                }
              }, function (_0x5a2105) {
                {
                  _0x1d7eb4("throw", _0x5a2105, _0x2d28d5, _0x5c6f45);
                }
              }) : _0x2ad58c.resolve(_0xa986f7).then(function (_0x6dc1e3) {
                {
                  _0x4e65b4.value = _0x6dc1e3;
                  _0x2d28d5(_0x4e65b4);
                }
              }, function (_0x21729f) {
                {
                  return _0x1d7eb4("throw", _0x21729f, _0x2d28d5, _0x5c6f45);
                }
              });
            }
            _0x5c6f45(_0x58e87e.arg);
          }
        }
        var _0x80e4a9;
        _0x1272be(this, "_invoke", {
          value: function (_0x560d44, _0x467a64) {
            {
              function _0xf22aae() {
                return new _0x2ad58c(function (_0x50a4c3, _0x1521e2) {
                  {
                    _0x1d7eb4(_0x560d44, _0x467a64, _0x50a4c3, _0x1521e2);
                  }
                });
              }
              return _0x80e4a9 = _0x80e4a9 ? _0x80e4a9.then(_0xf22aae, _0xf22aae) : _0xf22aae();
            }
          }
        });
      }
    }
    function _0x55861d(_0x567598, _0x49ed9d, _0x48238d) {
      {
        var _0x4a506a = _0x4ee345;
        return function (_0x3be947, _0x569bc2) {
          {
            if (_0x4a506a === _0x2560a1) {
              throw Error("Generator is already running");
            }
            if (_0x4a506a === _0x2f4605) {
              if ("throw" === _0x3be947) {
                throw _0x569bc2;
              }
              var _0x4e839b = {
                value: _0x102f66,
                done: true
              };
              return _0x4e839b;
            }
            for (_0x48238d.method = _0x3be947, _0x48238d.arg = _0x569bc2;;) {
              {
                var _0x555bb0 = _0x48238d.delegate;
                if (_0x555bb0) {
                  var _0x5d3205 = _0x1f69b9(_0x555bb0, _0x48238d);
                  if (_0x5d3205) {
                    if (_0x5d3205 === _0x727e0d) {
                      continue;
                    }
                    return _0x5d3205;
                  }
                }
                if ("next" === _0x48238d.method) {
                  _0x48238d.sent = _0x48238d._sent = _0x48238d.arg;
                } else {
                  if ("throw" === _0x48238d.method) {
                    if (_0x4a506a === _0x4ee345) {
                      throw _0x4a506a = _0x2f4605, _0x48238d.arg;
                    }
                    _0x48238d.dispatchException(_0x48238d.arg);
                  } else {
                    "return" === _0x48238d.method && _0x48238d.abrupt("return", _0x48238d.arg);
                  }
                }
                _0x4a506a = _0x2560a1;
                var _0x4b4e8f = _0x5490af(_0x567598, _0x49ed9d, _0x48238d);
                if ("normal" === _0x4b4e8f.type) {
                  if (_0x4a506a = _0x48238d.done ? _0x2f4605 : _0x2f00c0, _0x4b4e8f.arg === _0x727e0d) {
                    continue;
                  }
                  var _0x2c73fc = {};
                  _0x2c73fc.value = _0x4b4e8f.arg;
                  _0x2c73fc.done = _0x48238d.done;
                  return _0x2c73fc;
                }
                "throw" === _0x4b4e8f.type && (_0x4a506a = _0x2f4605, _0x48238d.method = "throw", _0x48238d.arg = _0x4b4e8f.arg);
              }
            }
          }
        };
      }
    }
    function _0x1f69b9(_0x4ec4d7, _0x11b0cc) {
      {
        var _0xce571a = _0x11b0cc.method,
          _0x3f9203 = _0x4ec4d7.iterator[_0xce571a];
        if (_0x3f9203 === _0x102f66) {
          _0x11b0cc.delegate = null;
          "throw" === _0xce571a && _0x4ec4d7.iterator.return && (_0x11b0cc.method = "return", _0x11b0cc.arg = _0x102f66, _0x1f69b9(_0x4ec4d7, _0x11b0cc), "throw" === _0x11b0cc.method) || "return" !== _0xce571a && (_0x11b0cc.method = "throw", _0x11b0cc.arg = new TypeError("The iterator does not provide a '" + _0xce571a + "' method"));
          return _0x727e0d;
        }
        var _0x37e4f7 = _0x5490af(_0x3f9203, _0x4ec4d7.iterator, _0x11b0cc.arg);
        if ("throw" === _0x37e4f7.type) {
          _0x11b0cc.method = "throw";
          _0x11b0cc.arg = _0x37e4f7.arg;
          _0x11b0cc.delegate = null;
          return _0x727e0d;
        }
        var _0x36b01f = _0x37e4f7.arg;
        return _0x36b01f ? _0x36b01f.done ? (_0x11b0cc[_0x4ec4d7.resultName] = _0x36b01f.value, _0x11b0cc.next = _0x4ec4d7.nextLoc, "return" !== _0x11b0cc.method && (_0x11b0cc.method = "next", _0x11b0cc.arg = _0x102f66), _0x11b0cc.delegate = null, _0x727e0d) : _0x36b01f : (_0x11b0cc.method = "throw", _0x11b0cc.arg = new TypeError("iterator result is not an object"), _0x11b0cc.delegate = null, _0x727e0d);
      }
    }
    function _0xe176ae(_0x2f1ff2) {
      {
        var _0x5c9c2c = {};
        _0x5c9c2c.tryLoc = _0x2f1ff2[0];
        var _0x2f5da3 = _0x5c9c2c;
        1 in _0x2f1ff2 && (_0x2f5da3.catchLoc = _0x2f1ff2[1]);
        2 in _0x2f1ff2 && (_0x2f5da3.finallyLoc = _0x2f1ff2[2], _0x2f5da3.afterLoc = _0x2f1ff2[3]);
        this.tryEntries.push(_0x2f5da3);
      }
    }
    function _0xe028a9(_0x1483af) {
      {
        var _0x3cda69 = _0x1483af.completion || {};
        _0x3cda69.type = "normal";
        delete _0x3cda69.arg;
        _0x1483af.completion = _0x3cda69;
      }
    }
    function _0x4e7db0(_0x2c6454) {
      {
        var _0x500b1b = {};
        _0x500b1b.tryLoc = "root";
        this.tryEntries = [_0x500b1b];
        _0x2c6454.forEach(_0xe176ae, this);
        this.reset(true);
      }
    }
    function _0x3bd026(_0x23af23) {
      {
        if (_0x23af23 || "" === _0x23af23) {
          var _0x8fe7f2 = _0x23af23[_0x22cb3a];
          if (_0x8fe7f2) {
            return _0x8fe7f2.call(_0x23af23);
          }
          if ("function" == typeof _0x23af23.next) {
            return _0x23af23;
          }
          if (!isNaN(_0x23af23.length)) {
            var _0x4662bb = -1,
              _0x129f05 = function _0x1da9f4() {
                {
                  for (; ++_0x4662bb < _0x23af23.length;) {
                    if (_0x5e94cc.call(_0x23af23, _0x4662bb)) {
                      _0x1da9f4.value = _0x23af23[_0x4662bb];
                      _0x1da9f4.done = false;
                      return _0x1da9f4;
                    }
                  }
                  _0x1da9f4.value = _0x102f66;
                  _0x1da9f4.done = true;
                  return _0x1da9f4;
                }
              };
            return _0x129f05.next = _0x129f05;
          }
        }
        throw new TypeError(_0x497593(_0x23af23) + " is not iterable");
      }
    }
    _0x4596a7.prototype = _0x2488fb;
    _0x1272be(_0x1aaa7d, "constructor", {
      value: _0x2488fb,
      configurable: true
    });
    _0x1272be(_0x2488fb, "constructor", {
      value: _0x4596a7,
      configurable: true
    });
    _0x4596a7.displayName = _0x15a66d(_0x2488fb, _0x3e5f32, "GeneratorFunction");
    _0x2de8ee.isGeneratorFunction = function (_0x260201) {
      {
        var _0x4209e5 = "function" == typeof _0x260201 && _0x260201.constructor;
        return !!_0x4209e5 && (_0x4209e5 === _0x4596a7 || "GeneratorFunction" === (_0x4209e5.displayName || _0x4209e5.name));
      }
    };
    _0x2de8ee.mark = function (_0x237042) {
      {
        Object.setPrototypeOf ? Object.setPrototypeOf(_0x237042, _0x2488fb) : (_0x237042.__proto__ = _0x2488fb, _0x15a66d(_0x237042, _0x3e5f32, "GeneratorFunction"));
        _0x237042.prototype = Object.create(_0x1aaa7d);
        return _0x237042;
      }
    };
    _0x2de8ee.awrap = function (_0x18fe9d) {
      {
        var _0x6744e0 = {
          __await: _0x18fe9d
        };
        return _0x6744e0;
      }
    };
    _0x73b9fa(_0x487672.prototype);
    _0x15a66d(_0x487672.prototype, _0x503226, function () {
      return this;
    });
    _0x2de8ee.AsyncIterator = _0x487672;
    _0x2de8ee.async = function (_0x55be1d, _0x224978, _0xa5b63a, _0x59aa1c, _0x18835c) {
      {
        void 0 === _0x18835c && (_0x18835c = Promise);
        var _0x343546 = new _0x487672(_0xb5dd32(_0x55be1d, _0x224978, _0xa5b63a, _0x59aa1c), _0x18835c);
        return _0x2de8ee.isGeneratorFunction(_0x224978) ? _0x343546 : _0x343546.next().then(function (_0x4e31b7) {
          {
            return _0x4e31b7.done ? _0x4e31b7.value : _0x343546.next();
          }
        });
      }
    };
    _0x73b9fa(_0x1aaa7d);
    _0x15a66d(_0x1aaa7d, _0x3e5f32, "Generator");
    _0x15a66d(_0x1aaa7d, _0x22cb3a, function () {
      {
        return this;
      }
    });
    _0x15a66d(_0x1aaa7d, "toString", function () {
      return "[object Generator]";
    });
    _0x2de8ee.keys = function (_0x2bf401) {
      {
        var _0x1efd80 = Object(_0x2bf401),
          _0x4e2329 = [];
        for (var _0x1a50bf in _0x1efd80) _0x4e2329.push(_0x1a50bf);
        _0x4e2329.reverse();
        return function _0x4c8a9a() {
          {
            for (; _0x4e2329.length;) {
              {
                var _0xee3f27 = _0x4e2329.pop();
                if (_0xee3f27 in _0x1efd80) {
                  _0x4c8a9a.value = _0xee3f27;
                  _0x4c8a9a.done = false;
                  return _0x4c8a9a;
                }
              }
            }
            _0x4c8a9a.done = true;
            return _0x4c8a9a;
          }
        };
      }
    };
    _0x2de8ee.values = _0x3bd026;
    _0x4e7db0.prototype = {
      constructor: _0x4e7db0,
      reset: function (_0x24336e) {
        {
          if (this.prev = 0, this.next = 0, this.sent = this._sent = _0x102f66, this.done = false, this.delegate = null, this.method = "next", this.arg = _0x102f66, this.tryEntries.forEach(_0xe028a9), !_0x24336e) {
            for (var _0x348fbf in this) "t" === _0x348fbf.charAt(0) && _0x5e94cc.call(this, _0x348fbf) && !isNaN(+_0x348fbf.slice(1)) && (this[_0x348fbf] = _0x102f66);
          }
        }
      },
      stop: function () {
        {
          this.done = true;
          var _0x2abce4 = this.tryEntries[0].completion;
          if ("throw" === _0x2abce4.type) {
            throw _0x2abce4.arg;
          }
          return this.rval;
        }
      },
      dispatchException: function (_0x82cc67) {
        {
          if (this.done) {
            throw _0x82cc67;
          }
          var _0x451d50 = this;
          function _0x27decc(_0x2953a1, _0x5b0aa1) {
            _0x586247.type = "throw";
            _0x586247.arg = _0x82cc67;
            _0x451d50.next = _0x2953a1;
            _0x5b0aa1 && (_0x451d50.method = "next", _0x451d50.arg = _0x102f66);
            return !!_0x5b0aa1;
          }
          for (var _0x3a4ba3 = this.tryEntries.length - 1; _0x3a4ba3 >= 0; --_0x3a4ba3) {
            {
              var _0x8a05fd = this.tryEntries[_0x3a4ba3],
                _0x586247 = _0x8a05fd.completion;
              if ("root" === _0x8a05fd.tryLoc) {
                return _0x27decc("end");
              }
              if (_0x8a05fd.tryLoc <= this.prev) {
                var _0x4f22ad = _0x5e94cc.call(_0x8a05fd, "catchLoc"),
                  _0x5bd917 = _0x5e94cc.call(_0x8a05fd, "finallyLoc");
                if (_0x4f22ad && _0x5bd917) {
                  if (this.prev < _0x8a05fd.catchLoc) {
                    return _0x27decc(_0x8a05fd.catchLoc, true);
                  }
                  if (this.prev < _0x8a05fd.finallyLoc) {
                    return _0x27decc(_0x8a05fd.finallyLoc);
                  }
                } else {
                  if (_0x4f22ad) {
                    if (this.prev < _0x8a05fd.catchLoc) {
                      return _0x27decc(_0x8a05fd.catchLoc, true);
                    }
                  } else {
                    if (!_0x5bd917) {
                      throw Error("try statement without catch or finally");
                    }
                    if (this.prev < _0x8a05fd.finallyLoc) {
                      return _0x27decc(_0x8a05fd.finallyLoc);
                    }
                  }
                }
              }
            }
          }
        }
      },
      abrupt: function (_0x2e09a2, _0x569c74) {
        {
          for (var _0x2373b9 = this.tryEntries.length - 1; _0x2373b9 >= 0; --_0x2373b9) {
            {
              var _0x50ffd9 = this.tryEntries[_0x2373b9];
              if (_0x50ffd9.tryLoc <= this.prev && _0x5e94cc.call(_0x50ffd9, "finallyLoc") && this.prev < _0x50ffd9.finallyLoc) {
                var _0x35f3f3 = _0x50ffd9;
                break;
              }
            }
          }
          _0x35f3f3 && ("break" === _0x2e09a2 || "continue" === _0x2e09a2) && _0x35f3f3.tryLoc <= _0x569c74 && _0x569c74 <= _0x35f3f3.finallyLoc && (_0x35f3f3 = null);
          var _0x1ed287 = _0x35f3f3 ? _0x35f3f3.completion : {};
          _0x1ed287.type = _0x2e09a2;
          _0x1ed287.arg = _0x569c74;
          return _0x35f3f3 ? (this.method = "next", this.next = _0x35f3f3.finallyLoc, _0x727e0d) : this.complete(_0x1ed287);
        }
      },
      complete: function (_0x5b9151, _0xdb13aa) {
        {
          if ("throw" === _0x5b9151.type) {
            throw _0x5b9151.arg;
          }
          "break" === _0x5b9151.type || "continue" === _0x5b9151.type ? this.next = _0x5b9151.arg : "return" === _0x5b9151.type ? (this.rval = this.arg = _0x5b9151.arg, this.method = "return", this.next = "end") : "normal" === _0x5b9151.type && _0xdb13aa && (this.next = _0xdb13aa);
          return _0x727e0d;
        }
      },
      finish: function (_0x45fed4) {
        {
          for (var _0x224a64 = this.tryEntries.length - 1; _0x224a64 >= 0; --_0x224a64) {
            {
              var _0x1ddc19 = this.tryEntries[_0x224a64];
              if (_0x1ddc19.finallyLoc === _0x45fed4) {
                this.complete(_0x1ddc19.completion, _0x1ddc19.afterLoc);
                _0xe028a9(_0x1ddc19);
                return _0x727e0d;
              }
            }
          }
        }
      },
      catch: function (_0x162682) {
        {
          for (var _0x21e1f6 = this.tryEntries.length - 1; _0x21e1f6 >= 0; --_0x21e1f6) {
            {
              var _0xa45b37 = this.tryEntries[_0x21e1f6];
              if (_0xa45b37.tryLoc === _0x162682) {
                var _0x1683c4 = _0xa45b37.completion;
                if ("throw" === _0x1683c4.type) {
                  var _0x14e1de = _0x1683c4.arg;
                  _0xe028a9(_0xa45b37);
                }
                return _0x14e1de;
              }
            }
          }
          throw Error("illegal catch attempt");
        }
      },
      delegateYield: function (_0x3a6543, _0x51a090, _0x34acb9) {
        {
          this.delegate = {
            iterator: _0x3bd026(_0x3a6543),
            resultName: _0x51a090,
            nextLoc: _0x34acb9
          };
          "next" === this.method && (this.arg = _0x102f66);
          return _0x727e0d;
        }
      }
    };
    return _0x2de8ee;
  }
  function _0x3d1fcb(_0x3ca87e, _0x128c22, _0x3a4aa5, _0x41dd38, _0xaf5427, _0x471fe5, _0x3c90cb) {
    {
      try {
        {
          var _0x49a67c = _0x3ca87e[_0x471fe5](_0x3c90cb),
            _0x2bc1e4 = _0x49a67c.value;
        }
      } catch (_0x5095a6) {
        {
          return void _0x3a4aa5(_0x5095a6);
        }
      }
      _0x49a67c.done ? _0x128c22(_0x2bc1e4) : Promise.resolve(_0x2bc1e4).then(_0x41dd38, _0xaf5427);
    }
  }
  function _0xff24ef(_0x12bfbb) {
    return function () {
      var _0x563713 = this,
        _0x5d91e0 = arguments;
      return new Promise(function (_0x19ae97, _0x168ae6) {
        var _0x4fe00e = _0x12bfbb.apply(_0x563713, _0x5d91e0);
        function _0x3381bd(_0x1a172f) {
          {
            _0x3d1fcb(_0x4fe00e, _0x19ae97, _0x168ae6, _0x3381bd, _0x92c9ab, "next", _0x1a172f);
          }
        }
        function _0x92c9ab(_0x38674c) {
          {
            _0x3d1fcb(_0x4fe00e, _0x19ae97, _0x168ae6, _0x3381bd, _0x92c9ab, "throw", _0x38674c);
          }
        }
        _0x3381bd(void 0);
      });
    };
  }
  var _0x552acf = ($.isNode() ? process.env.CiXiao : $.getdata("CiXiao")) || "",
    _0x3818b3 = void 0,
    _0x18486d = "",
    _0x274e27 = "",
    _0x1bf078 = "",
    _0x13a92e = "";
  function _0x55547a() {
    return _0x2a4d06.apply(this, arguments);
  }
  function _0x2a4d06() {
    _0x2a4d06 = _0xff24ef(_0x2c162c().mark(function _0x420f25() {
      {
        var _0x5c6bc3, _0x37ecca, _0x5ac06a, _0x208efc, _0x387158, _0x444e30, _0x222ec7, _0x29590d, _0x1831ef, _0x5e7137, _0x2a691d, _0x14dbc1, _0x45be23, _0x382fa8, _0x4f0455, _0x1b8bce, _0x442c07, _0x9047a3, _0x35b10b, _0x290bbf, _0x29ca9d, _0x5cf210, _0x13566f, _0x3534ea, _0x3bff71, _0x156018, _0x10f2ca, _0x3cea5a, _0x38ff97, _0x42654e, _0x19a9ae, _0x4385a5, _0x40e691, _0x2990d1, _0x3c313f, _0x5c2540, _0x3ef791, _0x3dbea0;
        return _0x2c162c().wrap(function (_0x252ce3) {
          {
            for (;;) {
              switch (_0x252ce3.prev = _0x252ce3.next) {
                case 0:
                  if (console.log("作者：@xzxxn777\n频道：https://t.me/xzxxn777\n群组：https://t.me/xzxxn7777\n自用机场推荐：https://xn--diqv0fut7b.com\n"), _0x552acf) {
                    _0x252ce3.next = 6;
                    break;
                  }
                  console.log("先去boxjs填写账号密码");
                  _0x252ce3.next = 5;
                  return _0xe4fff7("先去boxjs填写账号密码");
                case 5:
                  return _0x252ce3.abrupt("return");
                case 6:
                  _0x252ce3.next = 8;
                  return _0x4a264a();
                case 8:
                  _0x3818b3 = _0x252ce3.sent;
                  _0x5c6bc3 = _0x552acf.split(" ");
                  _0x37ecca = _0x1ea915(_0x5c6bc3);
                  _0x252ce3.prev = 11;
                  _0x37ecca.s();
                case 13:
                  if ((_0x5ac06a = _0x37ecca.n()).done) {
                    _0x252ce3.next = 111;
                    break;
                  }
                  _0x208efc = _0x5ac06a.value;
                  console.log("随机生成device");
                  _0x274e27 = _0x4eda54();
                  console.log(_0x274e27);
                  phone_number = _0x208efc.split("&")[0];
                  _0x13a92e = _0x208efc.split("&")[1];
                  console.log("用户：".concat(phone_number, "开始任务"));
                  console.log("获取userinfoId");
                  _0x387158 = Date.now().toString() + _0x1f5b05(5) + _0x48adcc();
                  _0x444e30 = _0x3818b3.md5("@#@$AXdm123%)(ds".concat(_0x387158, "api/UserInfo/GetRedNumberModel"));
                  _0x252ce3.next = 26;
                  return _0x95e72("/api/UserInfo/GetRedNumberModel?newspapergroupId=15403&sign=".concat(_0x444e30, "&stamp=").concat(_0x387158));
                case 26:
                  _0x222ec7 = _0x252ce3.sent;
                  _0x1bf078 = _0x222ec7.data.userinfo.Id;
                  console.log(_0x1bf078);
                  _0x252ce3.next = 31;
                  return _0x3f533a("/ReadActivityTaskList?json=true");
                case 31:
                  _0x29590d = _0x252ce3.sent;
                  _0x1831ef = _0x1ea915(_0x29590d.data);
                  _0x252ce3.prev = 33;
                  _0x1831ef.s();
                case 35:
                  if ((_0x5e7137 = _0x1831ef.n()).done) {
                    _0x252ce3.next = 101;
                    break;
                  }
                  _0x2a691d = _0x5e7137.value;
                  console.log(_0x2a691d.activityTypeName);
                  _0x252ce3.next = 40;
                  return _0x3f533a("/ReadActivityTaskData?yunyingActivityTaskId=".concat(_0x2a691d.yunyingActivityTaskId, "&json=true"));
                case 40:
                  if (_0x14dbc1 = _0x252ce3.sent, _0x14dbc1.data.totalCount != _0x14dbc1.data.completedCount) {
                    _0x252ce3.next = 44;
                    break;
                  }
                  console.log("已完成");
                  return _0x252ce3.abrupt("continue", 99);
                case 44:
                  _0x45be23 = _0x1ea915(_0x14dbc1.data.taskDetails);
                  _0x252ce3.prev = 45;
                  _0x45be23.s();
                case 47:
                  if ((_0x382fa8 = _0x45be23.n()).done) {
                    _0x252ce3.next = 68;
                    break;
                  }
                  if (_0x4f0455 = _0x382fa8.value, !_0x4f0455.isComplete) {
                    _0x252ce3.next = 51;
                    break;
                  }
                  return _0x252ce3.abrupt("continue", 66);
                case 51:
                  for (console.log("文章：".concat(_0x4f0455.title)), _0x1b8bce = _0x4f0455.url.split("?")[1], _0x442c07 = {}, _0x9047a3 = _0x1b8bce.split("&"), _0x35b10b = 0, _0x290bbf = _0x9047a3.length; _0x35b10b < _0x290bbf; _0x35b10b++) {
                    _0x29ca9d = _0x9047a3[_0x35b10b].split("=");
                    _0x442c07[_0x29ca9d[0]] = _0x29ca9d[1];
                  }
                  _0x5cf210 = Date.now().toString() + _0x1f5b05(5) + _0x48adcc();
                  _0x13566f = _0x3818b3.md5("@#@$AXdm123%)(ds".concat(_0x5cf210, "api/Yunying/ReadArticle"));
                  _0x252ce3.next = 60;
                  return _0x95e72("api/Yunying/ReadArticle?articleType=1&newspapergroupId=".concat(_0x442c07.NewspaperGroupId, "&sign=").concat(_0x13566f, "&stamp=").concat(_0x5cf210, "&ArticleId=").concat(_0x4f0455.articleId, "&taskDetailId=").concat(_0x4f0455.taskDetailId));
                case 60:
                  _0x3534ea = _0x252ce3.sent;
                  console.log(_0x3534ea.message);
                  _0x252ce3.next = 64;
                  return _0x3f533a("/ChceckCompleteTaskDetail?taskDetailId=".concat(_0x4f0455.taskDetailId, "&yunyingActivityTaskId=").concat(_0x2a691d.yunyingActivityTaskId, "&round=").concat(_0x2a691d.round, "&json=true"));
                case 64:
                  _0x3bff71 = _0x252ce3.sent;
                  console.log(_0x3bff71.success);
                case 66:
                  _0x252ce3.next = 47;
                  break;
                case 68:
                  _0x252ce3.next = 73;
                  break;
                case 70:
                  _0x252ce3.prev = 70;
                  _0x252ce3.t0 = _0x252ce3.catch(45);
                  _0x45be23.e(_0x252ce3.t0);
                case 73:
                  _0x252ce3.prev = 73;
                  _0x45be23.f();
                  return _0x252ce3.finish(73);
                case 76:
                  _0x252ce3.next = 78;
                  return _0x3f533a("/CanDrawPrizeList?json=true");
                case 78:
                  _0x156018 = _0x252ce3.sent;
                  console.log("拥有".concat(_0x156018.data.length, "次抽奖"));
                  _0x10f2ca = _0x1ea915(_0x156018.data);
                  _0x252ce3.prev = 81;
                  _0x10f2ca.s();
                case 83:
                  if ((_0x3cea5a = _0x10f2ca.n()).done) {
                    _0x252ce3.next = 91;
                    break;
                  }
                  _0x38ff97 = _0x3cea5a.value;
                  _0x252ce3.next = 87;
                  return _0x3f533a("/DrawAward?awardRecordId=".concat(_0x38ff97.awardRecordId, "&json=true"));
                case 87:
                  _0x42654e = _0x252ce3.sent;
                  1 == _0x42654e.data.awardType ? (console.log("抽奖获得：".concat(null == _0x42654e || null === (_0x19a9ae = _0x42654e.data) || void 0 === _0x19a9ae ? void 0 : _0x19a9ae.award).concat(null == _0x42654e || null === (_0x4385a5 = _0x42654e.data) || void 0 === _0x4385a5 ? void 0 : _0x4385a5.name)), _0x18486d += "用户：".concat(phone_number, " 抽奖获得：").concat(null == _0x42654e || null === (_0x40e691 = _0x42654e.data) || void 0 === _0x40e691 ? void 0 : _0x40e691.award).concat(null == _0x42654e || null === (_0x2990d1 = _0x42654e.data) || void 0 === _0x2990d1 ? void 0 : _0x2990d1.name, "\n")) : 2 == _0x42654e.data.awardType ? (console.log("抽奖获得：".concat(null == _0x42654e || null === (_0x3c313f = _0x42654e.data) || void 0 === _0x3c313f ? void 0 : _0x3c313f.scoreAward).concat(null == _0x42654e || null === (_0x5c2540 = _0x42654e.data) || void 0 === _0x5c2540 ? void 0 : _0x5c2540.name)), _0x18486d += "用户：".concat(phone_number, " 抽奖获得：").concat(null == _0x42654e || null === (_0x3ef791 = _0x42654e.data) || void 0 === _0x3ef791 ? void 0 : _0x3ef791.scoreAward).concat(null == _0x42654e || null === (_0x3dbea0 = _0x42654e.data) || void 0 === _0x3dbea0 ? void 0 : _0x3dbea0.name, "\n")) : (console.log("谢谢参与"), _0x18486d += "用户：".concat(phone_number, " 抽奖获得：谢谢参与\n"));
                case 89:
                  _0x252ce3.next = 83;
                  break;
                case 91:
                  _0x252ce3.next = 96;
                  break;
                case 93:
                  _0x252ce3.prev = 93;
                  _0x252ce3.t1 = _0x252ce3.catch(81);
                  _0x10f2ca.e(_0x252ce3.t1);
                case 96:
                  _0x252ce3.prev = 96;
                  _0x10f2ca.f();
                  return _0x252ce3.finish(96);
                case 99:
                  _0x252ce3.next = 35;
                  break;
                case 101:
                  _0x252ce3.next = 106;
                  break;
                case 103:
                  _0x252ce3.prev = 103;
                  _0x252ce3.t2 = _0x252ce3.catch(33);
                  _0x1831ef.e(_0x252ce3.t2);
                case 106:
                  _0x252ce3.prev = 106;
                  _0x1831ef.f();
                  return _0x252ce3.finish(106);
                case 109:
                  _0x252ce3.next = 13;
                  break;
                case 111:
                  _0x252ce3.next = 116;
                  break;
                case 113:
                  _0x252ce3.prev = 113;
                  _0x252ce3.t3 = _0x252ce3.catch(11);
                  _0x37ecca.e(_0x252ce3.t3);
                case 116:
                  _0x252ce3.prev = 116;
                  _0x37ecca.f();
                  return _0x252ce3.finish(116);
                case 119:
                  if (!_0x18486d) {
                    _0x252ce3.next = 122;
                    break;
                  }
                  _0x252ce3.next = 122;
                  return _0xe4fff7(_0x18486d);
                case 122:
                case "end":
                  return _0x252ce3.stop();
              }
            }
          }
        }, _0x420f25, null, [[11, 113, 116, 119], [33, 103, 106, 109], [45, 70, 73, 76], [81, 93, 96, 99]]);
      }
    }));
    return _0x2a4d06.apply(this, arguments);
  }
  function _0x3f533a(_0x586816) {
    return _0x4f9427.apply(this, arguments);
  }
  function _0x4f9427() {
    _0x4f9427 = _0xff24ef(_0x2c162c().mark(function _0x1bb1fa(_0x2d38ff) {
      return _0x2c162c().wrap(function (_0x2ab784) {
        for (;;) {
          switch (_0x2ab784.prev = _0x2ab784.next) {
            case 0:
              return _0x2ab784.abrupt("return", new Promise(function (_0xbe1741) {
                var _0x24634e = {
                  url: "https://cxh5.xiaodingkeji.com/h5api/api/YunyingV720".concat(_0x2d38ff),
                  headers: {
                    pragma: "no-cache",
                    "cache-control": "no-cache",
                    accept: "application/json, text/plain, */*",
                    "x-token": _0x13a92e,
                    "x-requested-with": "XMLHttpRequest",
                    "sec-fetch-site": "same-origin",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-dest": "empty",
                    "accept-encoding": "gzip, deflate",
                    "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
                    "user-agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36 GdyBridgeWebView;xdinformation;x-token:[" + _0x13a92e + "];x-userinfoId:[" + _0x1bf078 + "];x-device:[" + _0x274e27 + "]"
                  }
                };
                $.get(_0x24634e, function () {
                  var _0x7d0aa0 = _0xff24ef(_0x2c162c().mark(function _0x49da0b(_0x5c278a, _0x1dcdfe, _0x2eb5b9) {
                    return _0x2c162c().wrap(function (_0x532f06) {
                      for (;;) {
                        switch (_0x532f06.prev = _0x532f06.next) {
                          case 0:
                            if (_0x532f06.prev = 0, !_0x5c278a) {
                              _0x532f06.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(_0x5c278a)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            _0x532f06.next = 9;
                            break;
                          case 6:
                            _0x532f06.next = 8;
                            return $.wait(2000);
                          case 8:
                            _0xbe1741(JSON.parse(_0x2eb5b9));
                          case 9:
                            _0x532f06.next = 14;
                            break;
                          case 11:
                            _0x532f06.prev = 11;
                            _0x532f06.t0 = _0x532f06.catch(0);
                            $.logErr(_0x532f06.t0, _0x1dcdfe);
                          case 14:
                            _0x532f06.prev = 14;
                            _0xbe1741();
                            return _0x532f06.finish(14);
                          case 17:
                          case "end":
                            return _0x532f06.stop();
                        }
                      }
                    }, _0x49da0b, null, [[0, 11, 14, 17]]);
                  }));
                  return function (_0x3ec840, _0x27e282, _0x237fca) {
                    return _0x7d0aa0.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return _0x2ab784.stop();
          }
        }
      }, _0x1bb1fa);
    }));
    return _0x4f9427.apply(this, arguments);
  }
  function _0x95e72(_0x29c3ce) {
    return _0x473ccd.apply(this, arguments);
  }
  function _0x473ccd() {
    _0x473ccd = _0xff24ef(_0x2c162c().mark(function _0x863fd9(_0x2842ff) {
      return _0x2c162c().wrap(function (_0x59ce5f) {
        for (;;) {
          switch (_0x59ce5f.prev = _0x59ce5f.next) {
            case 0:
              return _0x59ce5f.abrupt("return", new Promise(function (_0x33204f) {
                var _0xbd11b8 = {};
                _0xbd11b8["accept-version"] = "200";
                _0xbd11b8["x-version"] = "730";
                _0xbd11b8.version = "7.17.7";
                _0xbd11b8["x-token"] = _0x13a92e;
                _0xbd11b8.Connection = "Keep-Alive";
                _0xbd11b8["accept-encoding"] = "gzip";
                _0xbd11b8["user-agent"] = "okhttp/3.11.0";
                var _0x23e300 = {
                  url: "https://cxapi.xiaodingkeji.com/".concat(_0x2842ff),
                  headers: _0xbd11b8
                };
                $.get(_0x23e300, function () {
                  var _0x39e89d = _0xff24ef(_0x2c162c().mark(function _0x549268(_0xd65c87, _0x5b12a7, _0x13204f) {
                    return _0x2c162c().wrap(function (_0x2c968f) {
                      for (;;) {
                        switch (_0x2c968f.prev = _0x2c968f.next) {
                          case 0:
                            if (_0x2c968f.prev = 0, !_0xd65c87) {
                              _0x2c968f.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(_0xd65c87)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            _0x2c968f.next = 9;
                            break;
                          case 6:
                            _0x2c968f.next = 8;
                            return $.wait(2000);
                          case 8:
                            _0x33204f(JSON.parse(_0x13204f));
                          case 9:
                            _0x2c968f.next = 14;
                            break;
                          case 11:
                            _0x2c968f.prev = 11;
                            _0x2c968f.t0 = _0x2c968f.catch(0);
                            $.logErr(_0x2c968f.t0, _0x5b12a7);
                          case 14:
                            _0x2c968f.prev = 14;
                            _0x33204f();
                            return _0x2c968f.finish(14);
                          case 17:
                          case "end":
                            return _0x2c968f.stop();
                        }
                      }
                    }, _0x549268, null, [[0, 11, 14, 17]]);
                  }));
                  return function (_0x38d248, _0x3a1762, _0xe10b74) {
                    return _0x39e89d.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return _0x59ce5f.stop();
          }
        }
      }, _0x863fd9);
    }));
    return _0x473ccd.apply(this, arguments);
  }
  function _0x17f0ec() {
    var _0x370140 = new Date(),
      _0x150e17 = function (_0x4aee0f) {
        return _0x4aee0f.toString().padStart(2, "0");
      },
      _0xf5f4ea = _0x370140.getFullYear(),
      _0x5dd9f1 = _0x150e17(_0x370140.getMonth() + 1),
      _0x5cb5ea = _0x150e17(_0x370140.getDate()),
      _0x2acf99 = _0x150e17(_0x370140.getHours()),
      _0x4eaafa = _0x150e17(_0x370140.getMinutes()),
      _0x106a68 = _0x150e17(_0x370140.getSeconds());
    return "".concat(_0xf5f4ea).concat(_0x5dd9f1).concat(_0x5cb5ea).concat(_0x2acf99).concat(_0x4eaafa).concat(_0x106a68);
  }
  function _0x1f5b05(_0x1f54e1) {
    for (var _0xb9a00b = "abcdefghijklmnopqrstuvwxyz0123456789", _0x116c78 = "", _0x3ced04 = 0; _0x3ced04 < _0x1f54e1; _0x3ced04++) {
      _0x116c78 += _0xb9a00b.charAt(Math.floor(36 * Math.random()));
    }
    return _0x116c78;
  }
  function _0x48adcc() {
    var _0x51adcf = _0x17f0ec();
    _0x51adcf || (_0x51adcf = _0x1f5b05(8));
    return _0x1f5b05(2) + _0x51adcf.substring(3) + _0x1f5b05(3);
  }
  function _0x5381cb() {
    for (var _0x41e14d = "", _0x3f07df = 0; _0x3f07df < 16; _0x3f07df++) {
      var _0x45bc74 = Math.floor(16 * Math.random());
      _0x41e14d += "0123456789abcdef"[_0x45bc74];
    }
    return _0x41e14d;
  }
  function _0x425757() {
    return "xxxxxxxx-xxxx-6xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (_0x22d191) {
      var _0x4045ed = 16 * Math.random() | 0,
        _0x1f424f = "x" === _0x22d191 ? _0x4045ed : 3 & _0x4045ed | 8;
      return _0x1f424f.toString(16);
    });
  }
  function _0x4eda54() {
    var _0x2593f3 = _0x5381cb(),
      _0x1331ff = _0x425757().replace(/-/g, "");
    CryptoJS = _0x3818b3.createCryptoJS();
    return CryptoJS.SHA1("".concat(_0x2593f3, "|unknown|").concat(_0x1331ff)).toString().toUpperCase();
  }
  function _0x4a264a() {
    return _0x5f3bbd.apply(this, arguments);
  }
  function _0x5f3bbd() {
    _0x5f3bbd = _0xff24ef(_0x2c162c().mark(function _0x3801ac() {
      var _0x2a017e;
      return _0x2c162c().wrap(function _0x4ba426(_0x2f8f52) {
        for (;;) {
          switch (_0x2f8f52.prev = _0x2f8f52.next) {
            case 0:
              if (_0x2a017e = $.getdata("Utils_Code") || "", !_0x2a017e || !Object.keys(_0x2a017e).length) {
                _0x2f8f52.next = 5;
                break;
              }
              console.log("✅ ".concat($.name, ": 缓存中存在Utils代码, 跳过下载"));
              eval(_0x2a017e);
              return _0x2f8f52.abrupt("return", creatUtils());
            case 5:
              console.log("🚀 ".concat($.name, ": 开始下载Utils代码"));
              return _0x2f8f52.abrupt("return", new Promise(function () {
                var _0x2e2b99 = _0xff24ef(_0x2c162c().mark(function _0xa5b70d(_0x429bef) {
                  return _0x2c162c().wrap(function _0x5ac737(_0x1fbd0c) {
                    for (;;) {
                      switch (_0x1fbd0c.prev = _0x1fbd0c.next) {
                        case 0:
                          $.getScript("https://mirror.ghproxy.com/https://raw.githubusercontent.com/xzxxn777/Surge/main/Utils/Utils.js").then(function (_0x5c2ba4) {
                            $.setdata(_0x5c2ba4, "Utils_Code");
                            eval(_0x5c2ba4);
                            console.log("✅ Utils加载成功, 请继续");
                            _0x429bef(creatUtils());
                          });
                        case 1:
                        case "end":
                          return _0x1fbd0c.stop();
                      }
                    }
                  }, _0xa5b70d);
                }));
                return function (_0x129496) {
                  return _0x2e2b99.apply(this, arguments);
                };
              }()));
            case 7:
            case "end":
              return _0x2f8f52.stop();
          }
        }
      }, _0x3801ac);
    }));
    return _0x5f3bbd.apply(this, arguments);
  }
  function _0xe4fff7(_0xf843ff) {
    return _0x172b70.apply(this, arguments);
  }
  function _0x172b70() {
    _0x172b70 = _0xff24ef(_0x2c162c().mark(function _0x34a9ec(_0x56345c) {
      return _0x2c162c().wrap(function (_0x3e4c60) {
        for (;;) {
          switch (_0x3e4c60.prev = _0x3e4c60.next) {
            case 0:
              if (!$.isNode()) {
                _0x3e4c60.next = 5;
                break;
              }
              _0x3e4c60.next = 3;
              return notify.sendNotify($.name, _0x56345c);
            case 3:
              _0x3e4c60.next = 6;
              break;
            case 5:
              $.msg($.name, "", _0x56345c);
            case 6:
            case "end":
              return _0x3e4c60.stop();
          }
        }
      }, _0x34a9ec);
    }));
    return _0x172b70.apply(this, arguments);
  }
  _0xff24ef(_0x2c162c().mark(function _0x264705() {
    return _0x2c162c().wrap(function (_0x14cc5e) {
      for (;;) {
        switch (_0x14cc5e.prev = _0x14cc5e.next) {
          case 0:
            _0x14cc5e.next = 2;
            return _0x55547a();
          case 2:
          case "end":
            return _0x14cc5e.stop();
        }
      }
    }, _0x264705);
  }))().catch(function (_0x48e7b5) {
    $.log(_0x48e7b5);
  }).finally(function () {
    $.done({});
  });
})();
function Env(_0x3af3ef, _0x4dba5a) {
  class _0x2f4b31 {
    constructor(_0x4bd15c) {
      this.env = _0x4bd15c;
    }
    send(_0x4153c0, _0x47c448 = "GET") {
      _0x4153c0 = "string" == typeof _0x4153c0 ? {
        url: _0x4153c0
      } : _0x4153c0;
      let _0x3b5c4d = this.get;
      "POST" === _0x47c448 && (_0x3b5c4d = this.post);
      return new Promise((_0x305020, _0x1764cd) => {
        _0x3b5c4d.call(this, _0x4153c0, (_0x4f9ec5, _0x32a4f3, _0x3339f3) => {
          _0x4f9ec5 ? _0x1764cd(_0x4f9ec5) : _0x305020(_0x32a4f3);
        });
      });
    }
    get(_0x482b4e) {
      return this.send.call(this.env, _0x482b4e);
    }
    post(_0xbaf60a) {
      return this.send.call(this.env, _0xbaf60a, "POST");
    }
  }
  return new class {
    constructor(_0x4d06a2, _0x2b53e5) {
      this.logLevels = {
        debug: 0,
        info: 1,
        warn: 2,
        error: 3
      };
      this.logLevelPrefixs = {
        debug: "[DEBUG] ",
        info: "[INFO] ",
        warn: "[WARN] ",
        error: "[ERROR] "
      };
      this.logLevel = "info";
      this.name = _0x4d06a2;
      this.http = new _0x2f4b31(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = !1;
      this.isNeedRewrite = !1;
      this.logSeparator = "\n";
      this.encoding = "utf-8";
      this.startTime = new Date().getTime();
      Object.assign(this, _0x2b53e5);
      this.log("", "🔔" + this.name + ", 开始!");
    }
    getEnv() {
      return "undefined" != typeof $environment && $environment["surge-version"] ? "Surge" : "undefined" != typeof $environment && $environment["stash-version"] ? "Stash" : "undefined" != typeof module && module.exports ? "Node.js" : "undefined" != typeof $task ? "Quantumult X" : "undefined" != typeof $loon ? "Loon" : "undefined" != typeof $rocket ? "Shadowrocket" : void 0;
    }
    isNode() {
      return "Node.js" === this.getEnv();
    }
    isQuanX() {
      return "Quantumult X" === this.getEnv();
    }
    isSurge() {
      return "Surge" === this.getEnv();
    }
    isLoon() {
      return "Loon" === this.getEnv();
    }
    isShadowrocket() {
      return "Shadowrocket" === this.getEnv();
    }
    isStash() {
      return "Stash" === this.getEnv();
    }
    toObj(_0x5d5c43, _0x2573ae = null) {
      try {
        return JSON.parse(_0x5d5c43);
      } catch {
        return _0x2573ae;
      }
    }
    toStr(_0x1acb8d, _0x34da89 = null, ..._0x4f6285) {
      try {
        return JSON.stringify(_0x1acb8d, ..._0x4f6285);
      } catch {
        return _0x34da89;
      }
    }
    getjson(_0x307efe, _0x39fe21) {
      let _0x2b9272 = _0x39fe21;
      if (this.getdata(_0x307efe)) {
        try {
          _0x2b9272 = JSON.parse(this.getdata(_0x307efe));
        } catch {}
      }
      return _0x2b9272;
    }
    setjson(_0x12aeeb, _0x17eecc) {
      try {
        return this.setdata(JSON.stringify(_0x12aeeb), _0x17eecc);
      } catch {
        return !1;
      }
    }
    getScript(_0x296516) {
      return new Promise(_0x2183e1 => {
        this.get({
          url: _0x296516
        }, (_0xd4b019, _0x2fd7b9, _0x43a898) => _0x2183e1(_0x43a898));
      });
    }
    runScript(_0x365242, _0x2e151d) {
      return new Promise(_0x3475f6 => {
        let _0x37c70a = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        _0x37c70a = _0x37c70a ? _0x37c70a.replace(/\n/g, "").trim() : _0x37c70a;
        let _0x4a82ea = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        _0x4a82ea = _0x4a82ea ? 1 * _0x4a82ea : 20;
        _0x4a82ea = _0x2e151d && _0x2e151d.timeout ? _0x2e151d.timeout : _0x4a82ea;
        const [_0x43ac94, _0x3950cb] = _0x37c70a.split("@"),
          _0x338f00 = {
            url: "http://" + _0x3950cb + "/v1/scripting/evaluate",
            body: {
              script_text: _0x365242,
              mock_type: "cron",
              timeout: _0x4a82ea
            },
            headers: {
              "X-Key": _0x43ac94,
              Accept: "*/*"
            },
            timeout: _0x4a82ea
          };
        this.post(_0x338f00, (_0xe7f57b, _0xbf80aa, _0x248009) => _0x3475f6(_0x248009));
      }).catch(_0x51e371 => this.logErr(_0x51e371));
    }
    loaddata() {
      if (!this.isNode()) {
        return {};
      }
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const _0x235515 = this.path.resolve(this.dataFile),
          _0x403cc0 = this.path.resolve(process.cwd(), this.dataFile),
          _0x33339b = this.fs.existsSync(_0x235515),
          _0x1105f5 = !_0x33339b && this.fs.existsSync(_0x403cc0);
        if (!_0x33339b && !_0x1105f5) {
          return {};
        }
        {
          const _0x5ca316 = _0x33339b ? _0x235515 : _0x403cc0;
          try {
            return JSON.parse(this.fs.readFileSync(_0x5ca316));
          } catch (_0x268d82) {
            return {};
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const _0x3d4d84 = this.path.resolve(this.dataFile),
          _0x24480d = this.path.resolve(process.cwd(), this.dataFile),
          _0x25b657 = this.fs.existsSync(_0x3d4d84),
          _0x5b7e39 = !_0x25b657 && this.fs.existsSync(_0x24480d),
          _0x25261a = JSON.stringify(this.data);
        _0x25b657 ? this.fs.writeFileSync(_0x3d4d84, _0x25261a) : _0x5b7e39 ? this.fs.writeFileSync(_0x24480d, _0x25261a) : this.fs.writeFileSync(_0x3d4d84, _0x25261a);
      }
    }
    lodash_get(_0x46e915, _0x4a631a, _0x505eba) {
      const _0x141687 = _0x4a631a.replace(/\[(\d+)\]/g, ".$1").split(".");
      let _0x368875 = _0x46e915;
      for (const _0x410034 of _0x141687) if (_0x368875 = Object(_0x368875)[_0x410034], void 0 === _0x368875) {
        return _0x505eba;
      }
      return _0x368875;
    }
    lodash_set(_0x4dad71, _0x439736, _0x3eec9b) {
      Object(_0x4dad71) !== _0x4dad71 || (Array.isArray(_0x439736) || (_0x439736 = _0x439736.toString().match(/[^.[\]]+/g) || []), _0x439736.slice(0, -1).reduce((_0x1298d1, _0x474227, _0x586c5f) => Object(_0x1298d1[_0x474227]) === _0x1298d1[_0x474227] ? _0x1298d1[_0x474227] : _0x1298d1[_0x474227] = Math.abs(_0x439736[_0x586c5f + 1]) >> 0 == +_0x439736[_0x586c5f + 1] ? [] : {}, _0x4dad71)[_0x439736[_0x439736.length - 1]] = _0x3eec9b);
      return _0x4dad71;
    }
    getdata(_0x479bc1) {
      let _0x30600a = this.getval(_0x479bc1);
      if (/^@/.test(_0x479bc1)) {
        const [, _0x237e23, _0x25ccff] = /^@(.*?)\.(.*?)$/.exec(_0x479bc1),
          _0x826135 = _0x237e23 ? this.getval(_0x237e23) : "";
        if (_0x826135) {
          try {
            const _0x414bc6 = JSON.parse(_0x826135);
            _0x30600a = _0x414bc6 ? this.lodash_get(_0x414bc6, _0x25ccff, "") : _0x30600a;
          } catch (_0x16a5ab) {
            _0x30600a = "";
          }
        }
      }
      return _0x30600a;
    }
    setdata(_0x1de374, _0x428fb1) {
      let _0x42da6d = !1;
      if (/^@/.test(_0x428fb1)) {
        const [, _0x126627, _0x114069] = /^@(.*?)\.(.*?)$/.exec(_0x428fb1),
          _0xcc60d = this.getval(_0x126627),
          _0x1e41f6 = _0x126627 ? "null" === _0xcc60d ? null : _0xcc60d || "{}" : "{}";
        try {
          const _0x3b1596 = JSON.parse(_0x1e41f6);
          this.lodash_set(_0x3b1596, _0x114069, _0x1de374);
          _0x42da6d = this.setval(JSON.stringify(_0x3b1596), _0x126627);
        } catch (_0x2d1447) {
          const _0x87e6a7 = {};
          this.lodash_set(_0x87e6a7, _0x114069, _0x1de374);
          _0x42da6d = this.setval(JSON.stringify(_0x87e6a7), _0x126627);
        }
      } else {
        _0x42da6d = this.setval(_0x1de374, _0x428fb1);
      }
      return _0x42da6d;
    }
    getval(_0xa5c0a7) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
          return $persistentStore.read(_0xa5c0a7);
        case "Quantumult X":
          return $prefs.valueForKey(_0xa5c0a7);
        case "Node.js":
          this.data = this.loaddata();
          return this.data[_0xa5c0a7];
        default:
          return this.data && this.data[_0xa5c0a7] || null;
      }
    }
    setval(_0x52f091, _0x7ad768) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
          return $persistentStore.write(_0x52f091, _0x7ad768);
        case "Quantumult X":
          return $prefs.setValueForKey(_0x52f091, _0x7ad768);
        case "Node.js":
          this.data = this.loaddata();
          this.data[_0x7ad768] = _0x52f091;
          this.writedata();
          return !0;
        default:
          return this.data && this.data[_0x7ad768] || null;
      }
    }
    initGotEnv(_0x304cc6) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      _0x304cc6 && (_0x304cc6.headers = _0x304cc6.headers ? _0x304cc6.headers : {}, _0x304cc6 && (_0x304cc6.headers = _0x304cc6.headers ? _0x304cc6.headers : {}, void 0 === _0x304cc6.headers.cookie && void 0 === _0x304cc6.headers.Cookie && void 0 === _0x304cc6.cookieJar && (_0x304cc6.cookieJar = this.ckjar)));
    }
    get(_0x39b5f0, _0x438fb1 = () => {}) {
      switch (_0x39b5f0.headers && (delete _0x39b5f0.headers["Content-Type"], delete _0x39b5f0.headers["Content-Length"], delete _0x39b5f0.headers["content-type"], delete _0x39b5f0.headers["content-length"]), _0x39b5f0.params && (_0x39b5f0.url += "?" + this.queryStr(_0x39b5f0.params)), void 0 === _0x39b5f0.followRedirect || _0x39b5f0.followRedirect || ((this.isSurge() || this.isLoon()) && (_0x39b5f0["auto-redirect"] = !1), this.isQuanX() && (_0x39b5f0.opts ? _0x39b5f0.opts.redirection = !1 : _0x39b5f0.opts = {
        redirection: !1
      })), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          this.isSurge() && this.isNeedRewrite && (_0x39b5f0.headers = _0x39b5f0.headers || {}, Object.assign(_0x39b5f0.headers, {
            "X-Surge-Skip-Scripting": !1
          }));
          $httpClient.get(_0x39b5f0, (_0x5e41c2, _0x1fd2d4, _0x44ce4a) => {
            !_0x5e41c2 && _0x1fd2d4 && (_0x1fd2d4.body = _0x44ce4a, _0x1fd2d4.statusCode = _0x1fd2d4.status ? _0x1fd2d4.status : _0x1fd2d4.statusCode, _0x1fd2d4.status = _0x1fd2d4.statusCode);
            _0x438fb1(_0x5e41c2, _0x1fd2d4, _0x44ce4a);
          });
          break;
        case "Quantumult X":
          this.isNeedRewrite && (_0x39b5f0.opts = _0x39b5f0.opts || {}, Object.assign(_0x39b5f0.opts, {
            hints: !1
          }));
          $task.fetch(_0x39b5f0).then(_0xb8d50a => {
            const {
              statusCode: _0xc20327,
              statusCode: _0x2df27a,
              headers: _0x4639a8,
              body: _0x5c4484,
              bodyBytes: _0x2a4bea
            } = _0xb8d50a;
            _0x438fb1(null, {
              status: _0xc20327,
              statusCode: _0x2df27a,
              headers: _0x4639a8,
              body: _0x5c4484,
              bodyBytes: _0x2a4bea
            }, _0x5c4484, _0x2a4bea);
          }, _0xf9f3e4 => _0x438fb1(_0xf9f3e4 && _0xf9f3e4.error || "UndefinedError"));
          break;
        case "Node.js":
          let _0x4b1d98 = require("iconv-lite");
          this.initGotEnv(_0x39b5f0);
          this.got(_0x39b5f0).on("redirect", (_0x27ec3a, _0x19e654) => {
            try {
              if (_0x27ec3a.headers["set-cookie"]) {
                const _0x235935 = _0x27ec3a.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                _0x235935 && this.ckjar.setCookieSync(_0x235935, null);
                _0x19e654.cookieJar = this.ckjar;
              }
            } catch (_0xa96292) {
              this.logErr(_0xa96292);
            }
          }).then(_0x5e9b2e => {
            const {
                statusCode: _0xff053d,
                statusCode: _0x2b2fa9,
                headers: _0x20d4f7,
                rawBody: _0x5772b7
              } = _0x5e9b2e,
              _0x2015d7 = _0x4b1d98.decode(_0x5772b7, this.encoding);
            _0x438fb1(null, {
              status: _0xff053d,
              statusCode: _0x2b2fa9,
              headers: _0x20d4f7,
              rawBody: _0x5772b7,
              body: _0x2015d7
            }, _0x2015d7);
          }, _0xf056c2 => {
            const {
              message: _0x38c93c,
              response: _0x3d1dff
            } = _0xf056c2;
            _0x438fb1(_0x38c93c, _0x3d1dff, _0x3d1dff && _0x4b1d98.decode(_0x3d1dff.rawBody, this.encoding));
          });
          break;
      }
    }
    post(_0xb3f08e, _0x25791a = () => {}) {
      const _0x3e5fdf = _0xb3f08e.method ? _0xb3f08e.method.toLocaleLowerCase() : "post";
      switch (_0xb3f08e.body && _0xb3f08e.headers && !_0xb3f08e.headers["Content-Type"] && !_0xb3f08e.headers["content-type"] && (_0xb3f08e.headers["content-type"] = "application/x-www-form-urlencoded"), _0xb3f08e.headers && (delete _0xb3f08e.headers["Content-Length"], delete _0xb3f08e.headers["content-length"]), void 0 === _0xb3f08e.followRedirect || _0xb3f08e.followRedirect || ((this.isSurge() || this.isLoon()) && (_0xb3f08e["auto-redirect"] = !1), this.isQuanX() && (_0xb3f08e.opts ? _0xb3f08e.opts.redirection = !1 : _0xb3f08e.opts = {
        redirection: !1
      })), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          this.isSurge() && this.isNeedRewrite && (_0xb3f08e.headers = _0xb3f08e.headers || {}, Object.assign(_0xb3f08e.headers, {
            "X-Surge-Skip-Scripting": !1
          }));
          $httpClient[_0x3e5fdf](_0xb3f08e, (_0x360ac9, _0x17cfd6, _0x2ec2f8) => {
            !_0x360ac9 && _0x17cfd6 && (_0x17cfd6.body = _0x2ec2f8, _0x17cfd6.statusCode = _0x17cfd6.status ? _0x17cfd6.status : _0x17cfd6.statusCode, _0x17cfd6.status = _0x17cfd6.statusCode);
            _0x25791a(_0x360ac9, _0x17cfd6, _0x2ec2f8);
          });
          break;
        case "Quantumult X":
          _0xb3f08e.method = _0x3e5fdf;
          this.isNeedRewrite && (_0xb3f08e.opts = _0xb3f08e.opts || {}, Object.assign(_0xb3f08e.opts, {
            hints: !1
          }));
          $task.fetch(_0xb3f08e).then(_0x54aa9c => {
            const {
              statusCode: _0x5cf931,
              statusCode: _0x327d4d,
              headers: _0x3f1e60,
              body: _0x9dc4f8,
              bodyBytes: _0x43c680
            } = _0x54aa9c;
            _0x25791a(null, {
              status: _0x5cf931,
              statusCode: _0x327d4d,
              headers: _0x3f1e60,
              body: _0x9dc4f8,
              bodyBytes: _0x43c680
            }, _0x9dc4f8, _0x43c680);
          }, _0x1de675 => _0x25791a(_0x1de675 && _0x1de675.error || "UndefinedError"));
          break;
        case "Node.js":
          let _0x3b2b5a = require("iconv-lite");
          this.initGotEnv(_0xb3f08e);
          const {
            url: _0x44bde7,
            ..._0x406190
          } = _0xb3f08e;
          this.got[_0x3e5fdf](_0x44bde7, _0x406190).then(_0x2ed40c => {
            const {
                statusCode: _0x240efa,
                statusCode: _0x5449dc,
                headers: _0x1386b7,
                rawBody: _0x32c6b8
              } = _0x2ed40c,
              _0x51a403 = _0x3b2b5a.decode(_0x32c6b8, this.encoding);
            _0x25791a(null, {
              status: _0x240efa,
              statusCode: _0x5449dc,
              headers: _0x1386b7,
              rawBody: _0x32c6b8,
              body: _0x51a403
            }, _0x51a403);
          }, _0x6139eb => {
            const {
              message: _0x561d01,
              response: _0x2f1db5
            } = _0x6139eb;
            _0x25791a(_0x561d01, _0x2f1db5, _0x2f1db5 && _0x3b2b5a.decode(_0x2f1db5.rawBody, this.encoding));
          });
          break;
      }
    }
    time(_0x270444, _0x43daa3 = null) {
      const _0x454d19 = _0x43daa3 ? new Date(_0x43daa3) : new Date();
      let _0x71a53d = {
        "M+": _0x454d19.getMonth() + 1,
        "d+": _0x454d19.getDate(),
        "H+": _0x454d19.getHours(),
        "m+": _0x454d19.getMinutes(),
        "s+": _0x454d19.getSeconds(),
        "q+": Math.floor((_0x454d19.getMonth() + 3) / 3),
        S: _0x454d19.getMilliseconds()
      };
      /(y+)/.test(_0x270444) && (_0x270444 = _0x270444.replace(RegExp.$1, (_0x454d19.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let _0x3c5229 in _0x71a53d) new RegExp("(" + _0x3c5229 + ")").test(_0x270444) && (_0x270444 = _0x270444.replace(RegExp.$1, 1 == RegExp.$1.length ? _0x71a53d[_0x3c5229] : ("00" + _0x71a53d[_0x3c5229]).substr(("" + _0x71a53d[_0x3c5229]).length)));
      return _0x270444;
    }
    queryStr(_0x19c080) {
      let _0x4798fb = "";
      for (const _0x4ea36e in _0x19c080) {
        let _0x1a9570 = _0x19c080[_0x4ea36e];
        null != _0x1a9570 && "" !== _0x1a9570 && ("object" == typeof _0x1a9570 && (_0x1a9570 = JSON.stringify(_0x1a9570)), _0x4798fb += _0x4ea36e + "=" + _0x1a9570 + "&");
      }
      _0x4798fb = _0x4798fb.substring(0, _0x4798fb.length - 1);
      return _0x4798fb;
    }
    msg(_0x2e0dce = _0x3af3ef, _0x446111 = "", _0x49f8e9 = "", _0xdd5165 = {}) {
      const _0x2a5f9e = _0x33d31b => {
        const {
          $open: _0x1c6a76,
          $copy: _0x40a726,
          $media: _0x233f87,
          $mediaMime: _0x30b7ea
        } = _0x33d31b;
        switch (typeof _0x33d31b) {
          case void 0:
            return _0x33d31b;
          case "string":
            switch (this.getEnv()) {
              case "Surge":
              case "Stash":
              default:
                return {
                  url: _0x33d31b
                };
              case "Loon":
              case "Shadowrocket":
                return _0x33d31b;
              case "Quantumult X":
                return {
                  "open-url": _0x33d31b
                };
              case "Node.js":
                return;
            }
          case "object":
            switch (this.getEnv()) {
              case "Surge":
              case "Stash":
              case "Shadowrocket":
              default:
                {
                  const _0x215f4a = {};
                  let _0x411e1e = _0x33d31b.openUrl || _0x33d31b.url || _0x33d31b["open-url"] || _0x1c6a76;
                  _0x411e1e && Object.assign(_0x215f4a, {
                    action: "open-url",
                    url: _0x411e1e
                  });
                  let _0x2ff41e = _0x33d31b["update-pasteboard"] || _0x33d31b.updatePasteboard || _0x40a726;
                  if (_0x2ff41e && Object.assign(_0x215f4a, {
                    action: "clipboard",
                    text: _0x2ff41e
                  }), _0x233f87) {
                    let _0x2e816a, _0x155748, _0x1f2fe9;
                    if (_0x233f87.startsWith("http")) {
                      _0x2e816a = _0x233f87;
                    } else {
                      if (_0x233f87.startsWith("data:")) {
                        const [_0x56389e] = _0x233f87.split(";"),
                          [, _0x4e5d50] = _0x233f87.split(",");
                        _0x155748 = _0x4e5d50;
                        _0x1f2fe9 = _0x56389e.replace("data:", "");
                      } else {
                        _0x155748 = _0x233f87;
                        _0x1f2fe9 = (_0x6b7368 => {
                          const _0x1679e4 = {
                            JVBERi0: "application/pdf",
                            R0lGODdh: "image/gif",
                            R0lGODlh: "image/gif",
                            iVBORw0KGgo: "image/png",
                            "/9j/": "image/jpg"
                          };
                          for (var _0x33a91b in _0x1679e4) if (0 === _0x6b7368.indexOf(_0x33a91b)) {
                            return _0x1679e4[_0x33a91b];
                          }
                          return null;
                        })(_0x233f87);
                      }
                    }
                    Object.assign(_0x215f4a, {
                      "media-url": _0x2e816a,
                      "media-base64": _0x155748,
                      "media-base64-mime": _0x30b7ea ?? _0x1f2fe9
                    });
                  }
                  Object.assign(_0x215f4a, {
                    "auto-dismiss": _0x33d31b["auto-dismiss"],
                    sound: _0x33d31b.sound
                  });
                  return _0x215f4a;
                }
              case "Loon":
                {
                  const _0x5dbe42 = {};
                  let _0x4ab852 = _0x33d31b.openUrl || _0x33d31b.url || _0x33d31b["open-url"] || _0x1c6a76;
                  _0x4ab852 && Object.assign(_0x5dbe42, {
                    openUrl: _0x4ab852
                  });
                  let _0x3a3cd3 = _0x33d31b.mediaUrl || _0x33d31b["media-url"];
                  _0x233f87?.["startsWith"]("http") && (_0x3a3cd3 = _0x233f87);
                  _0x3a3cd3 && Object.assign(_0x5dbe42, {
                    mediaUrl: _0x3a3cd3
                  });
                  console.log(JSON.stringify(_0x5dbe42));
                  return _0x5dbe42;
                }
              case "Quantumult X":
                {
                  const _0x216b7f = {};
                  let _0x45b9f7 = _0x33d31b["open-url"] || _0x33d31b.url || _0x33d31b.openUrl || _0x1c6a76;
                  _0x45b9f7 && Object.assign(_0x216b7f, {
                    "open-url": _0x45b9f7
                  });
                  let _0x39c718 = _0x33d31b["media-url"] || _0x33d31b.mediaUrl;
                  _0x233f87?.["startsWith"]("http") && (_0x39c718 = _0x233f87);
                  _0x39c718 && Object.assign(_0x216b7f, {
                    "media-url": _0x39c718
                  });
                  let _0x32aebc = _0x33d31b["update-pasteboard"] || _0x33d31b.updatePasteboard || _0x40a726;
                  _0x32aebc && Object.assign(_0x216b7f, {
                    "update-pasteboard": _0x32aebc
                  });
                  console.log(JSON.stringify(_0x216b7f));
                  return _0x216b7f;
                }
              case "Node.js":
                return;
            }
          default:
            return;
        }
      };
      if (!this.isMute) {
        switch (this.getEnv()) {
          case "Surge":
          case "Loon":
          case "Stash":
          case "Shadowrocket":
          default:
            $notification.post(_0x2e0dce, _0x446111, _0x49f8e9, _0x2a5f9e(_0xdd5165));
            break;
          case "Quantumult X":
            $notify(_0x2e0dce, _0x446111, _0x49f8e9, _0x2a5f9e(_0xdd5165));
            break;
          case "Node.js":
            break;
        }
      }
      if (!this.isMuteLog) {
        let _0x12034c = ["", "==============📣系统通知📣=============="];
        _0x12034c.push(_0x2e0dce);
        _0x446111 && _0x12034c.push(_0x446111);
        _0x49f8e9 && _0x12034c.push(_0x49f8e9);
        console.log(_0x12034c.join("\n"));
        this.logs = this.logs.concat(_0x12034c);
      }
    }
    debug(..._0x44aa07) {
      this.logLevels[this.logLevel] <= this.logLevels.debug && (_0x44aa07.length > 0 && (this.logs = [...this.logs, ..._0x44aa07]), console.log("" + this.logLevelPrefixs.debug + _0x44aa07.map(_0x3b6721 => _0x3b6721 ?? String(_0x3b6721)).join(this.logSeparator)));
    }
    info(..._0x1585b3) {
      this.logLevels[this.logLevel] <= this.logLevels.info && (_0x1585b3.length > 0 && (this.logs = [...this.logs, ..._0x1585b3]), console.log("" + this.logLevelPrefixs.info + _0x1585b3.map(_0x97814b => _0x97814b ?? String(_0x97814b)).join(this.logSeparator)));
    }
    warn(..._0x437644) {
      this.logLevels[this.logLevel] <= this.logLevels.warn && (_0x437644.length > 0 && (this.logs = [...this.logs, ..._0x437644]), console.log("" + this.logLevelPrefixs.warn + _0x437644.map(_0x149eeb => _0x149eeb ?? String(_0x149eeb)).join(this.logSeparator)));
    }
    error(..._0x53c028) {
      this.logLevels[this.logLevel] <= this.logLevels.error && (_0x53c028.length > 0 && (this.logs = [...this.logs, ..._0x53c028]), console.log("" + this.logLevelPrefixs.error + _0x53c028.map(_0x44cc26 => _0x44cc26 ?? String(_0x44cc26)).join(this.logSeparator)));
    }
    log(..._0x3cebca) {
      _0x3cebca.length > 0 && (this.logs = [...this.logs, ..._0x3cebca]);
      console.log(_0x3cebca.map(_0x22eef3 => _0x22eef3 ?? String(_0x22eef3)).join(this.logSeparator));
    }
    logErr(_0x3d7e26, _0x3eb181) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        case "Quantumult X":
        default:
          this.log("", "❗️" + this.name + ", 错误!", _0x3eb181, _0x3d7e26);
          break;
        case "Node.js":
          this.log("", "❗️" + this.name + ", 错误!", _0x3eb181, void 0 !== _0x3d7e26.message ? _0x3d7e26.message : _0x3d7e26, _0x3d7e26.stack);
          break;
      }
    }
    wait(_0x1b6524) {
      return new Promise(_0x2c4b7d => setTimeout(_0x2c4b7d, _0x1b6524));
    }
    done(_0x5b696a = {}) {
      const _0x11a6ca = (new Date().getTime() - this.startTime) / 1000;
      switch (this.log("", "🔔" + this.name + ", 结束! 🕛 " + _0x11a6ca + " 秒"), this.log(), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        case "Quantumult X":
        default:
          $done(_0x5b696a);
          break;
        case "Node.js":
          process.exit(1);
      }
    }
  }(_0x3af3ef, _0x4dba5a);
}