/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Vector = function () {
  function Vector(x, y) {
    _classCallCheck(this, Vector);

    this.x = x;
    this.y = y;
  }

  _createClass(Vector, [{
    key: "clone",
    value: function clone() {
      return new Vector(this.x, this.y);
    }
  }, {
    key: "add",
    value: function add(other) {
      this.x += other.x;
      this.y += other.y;
      return this;
    }
  }, {
    key: "sub",
    value: function sub(other) {
      this.x -= other.x;
      this.y -= other.y;
      return this;
    }
  }, {
    key: "mult",
    value: function mult(scalar) {
      this.x *= scalar;
      this.y *= scalar;
      return this;
    }
  }, {
    key: "magSq",
    value: function magSq() {
      var sq = function sq(x) {
        return x * x;
      };
      return sq(this.x) + sq(this.y);
    }
  }, {
    key: "mag",
    value: function mag() {
      return Math.sqrt(this.magSq());
    }
  }, {
    key: "heading",
    value: function heading() {
      return Math.atan2(this.y, this.x);
    }
  }, {
    key: "limit",
    value: function limit(mag) {
      if (this.magSq() > mag * mag) {
        var h = this.heading();
        this.x = Math.cos(h) * mag;
        this.y = Math.sin(h) * mag;
      }
      return this;
    }
  }], [{
    key: "fromAngle",
    value: function fromAngle(heading, magnitude) {
      return new Vector(Math.cos(heading) * magnitude, Math.sin(heading) * magnitude);
    }
  }, {
    key: "add",
    value: function add(lhs, rhs) {
      return lhs.clone().add(rhs);
    }
  }, {
    key: "sub",
    value: function sub(lhs, rhs) {
      return lhs.clone().sub(rhs);
    }
  }, {
    key: "mult",
    value: function mult(lhs, rhs) {
      return lhs.clone().mult(rhs);
    }
  }]);

  return Vector;
}();

exports.default = Vector;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _vector = __webpack_require__(0);

var _vector2 = _interopRequireDefault(_vector);

var _node = __webpack_require__(14);

var _node2 = _interopRequireDefault(_node);

var _transition = __webpack_require__(16);

var _transition2 = _interopRequireDefault(_transition);

var _d3Ease = __webpack_require__(17);

var _colors = __webpack_require__(28);

var _colors2 = _interopRequireDefault(_colors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Thing = function (_Node) {
  _inherits(Thing, _Node);

  function Thing(x, y, mass) {
    _classCallCheck(this, Thing);

    var _this = _possibleConstructorReturn(this, (Thing.__proto__ || Object.getPrototypeOf(Thing)).call(this));

    _this.pos = new _vector2.default(x, y);
    _this.vel = new _vector2.default(0, 0);
    _this.forces = new _vector2.default(0, 0);
    _this.mass = mass;
    _this.color = (0, _colors2.default)();

    _this.radius = 0;
    _this.radiusTransition = new _transition2.default({
      start: 0,
      end: _this.calcRadius(),
      duration: 30,
      easing: _d3Ease.easeCubicOut
    });

    _this.__hasGravity = true;
    return _this;
  }

  _createClass(Thing, [{
    key: 'applyForce',
    value: function applyForce(force) {
      this.forces.add(force.mult(1 / this.mass));
    }
  }, {
    key: 'update',
    value: function update(step) {
      this.vel.add(_vector2.default.mult(this.forces, step));
      this.pos.add(_vector2.default.mult(this.vel, step));

      if (this.radiusTransition !== null) {
        this.radius = this.radiusTransition.step(step);
      }
    }
  }, {
    key: 'calcRadius',
    value: function calcRadius() {
      return Math.sqrt(this.mass * 600 / Math.PI);
    }
  }, {
    key: 'addMass',
    value: function addMass(amount) {
      this.setMass(this.mass + amount);
    }
  }, {
    key: 'setMass',
    value: function setMass(mass) {
      this.mass = mass;
      this.radiusTransition = new _transition2.default({
        start: this.radius,
        end: this.calcRadius(),
        duration: 30,
        easing: _d3Ease.easeBackOut.overshoot(3)
      });
    }
  }, {
    key: 'onCollide',
    value: function onCollide(other) {
      if (other.constructor.name === 'Player') {
        this.remove();
      }
    }
  }, {
    key: 'draw',
    value: function draw(renderer) {
      renderer.drawCircle(this.pos.x, this.pos.y, this.radius, {
        color: this.color
      });

      this.forces.x = 0;
      this.forces.y = 0;
    }
  }]);

  return Thing;
}(_node2.default);

exports.default = Thing;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isKeyDown = isKeyDown;
var keys = {};

var CONTROLLED_KEYS = ['ArrowUp', 'ArrowRight', 'ArrowDown', 'ArrowLeft', 'Space'];

function onKeyDown(event) {
  keys[event.code] = true;
  if (CONTROLLED_KEYS.indexOf(event.code) !== -1) event.preventDefault();
}

function onKeyUp(event) {
  keys[event.code] = false;
  event.preventDefault();
}

document.addEventListener('keydown', onKeyDown);
document.addEventListener('keyup', onKeyUp);

function isKeyDown(code) {
  return !!keys[code];
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _vco = __webpack_require__(4);

var _vco2 = _interopRequireDefault(_vco);

var _envelope = __webpack_require__(5);

var _envelope2 = _interopRequireDefault(_envelope);

var _vca = __webpack_require__(6);

var _vca2 = _interopRequireDefault(_vca);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Tone = function () {
  function Tone(context) {
    _classCallCheck(this, Tone);

    this.osc1 = new _vco2.default(context, 'sine', 0.5);
    this.osc2 = new _vco2.default(context, 'triangle', 0.2, 4);
    this.osc3 = new _vco2.default(context, 'square', 0.5, -2);

    this.envelope = new _envelope2.default(context, 0.1, 2.5);
    this.vca = new _vca2.default(context);
    this.filter = context.createBiquadFilter();

    this.filter.type = 'lowpass';
    this.filter.frequency.value = 440;

    this.input = this.vco;
    this.output = this.filter;

    this.osc1.connect(this.vca);
    this.osc2.connect(this.vca);
    this.osc3.connect(this.vca);
    this.envelope.connect(this.vca.amplitude);
    this.vca.connect(this.filter);
  }

  _createClass(Tone, [{
    key: 'play',
    value: function play(frequency) {
      this.osc1.setFrequency(frequency);
      this.osc2.setFrequency(frequency);
      this.osc3.setFrequency(frequency);
      this.envelope.trigger();
    }
  }, {
    key: 'connect',
    value: function connect(node) {
      if (node.input) {
        this.output.connect(node.input);
      } else {
        this.output.connect(node);
      }
    }
  }]);

  return Tone;
}();

exports.default = Tone;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var VCO = function () {
  function VCO(context) {
    var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'sine';
    var gain = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
    var detune = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

    _classCallCheck(this, VCO);

    this.context = context;

    this.osc = context.createOscillator();
    this.osc.type = type;
    this.osc.detune.value = detune;
    this.setFrequency(440);
    this.osc.start(0);

    this.gain = context.createGain();
    this.gain.gain.value = gain;
    this.osc.connect(this.gain);

    this.input = this.osc;
    this.output = this.gain;
  }

  _createClass(VCO, [{
    key: 'setType',
    value: function setType(type) {
      this.osc.type = type;
    }
  }, {
    key: 'setFrequency',
    value: function setFrequency(freq) {
      this.osc.frequency.setValueAtTime(freq, this.context.currentTime);
    }
  }, {
    key: 'connect',
    value: function connect(node) {
      if (node.input) {
        this.output.connect(node.input);
      } else {
        this.output.connect(node);
      }
    }
  }]);

  return VCO;
}();

exports.default = VCO;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Envelope = function () {
  function Envelope(context) {
    var attack = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.1;
    var release = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0.5;

    _classCallCheck(this, Envelope);

    this.context = context;
    this.attackTime = attack;
    this.releaseTime = release;
  }

  _createClass(Envelope, [{
    key: "trigger",
    value: function trigger() {
      var now = this.context.currentTime;
      var t1 = now + this.attackTime;
      var t2 = now + this.attackTime + this.releaseTime;

      this.param.cancelScheduledValues(now);
      this.param.setValueAtTime(0, now);
      this.param.linearRampToValueAtTime(1, t1);
      this.param.linearRampToValueAtTime(0, t2);
    }
  }, {
    key: "connect",
    value: function connect(param) {
      this.param = param;
    }
  }]);

  return Envelope;
}();

exports.default = Envelope;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var VCA = function () {
  function VCA(context) {
    _classCallCheck(this, VCA);

    this.gain = context.createGain();
    this.gain.gain.value = 0;

    this.input = this.gain;
    this.output = this.gain;

    this.amplitude = this.gain.gain;
  }

  _createClass(VCA, [{
    key: "connect",
    value: function connect(node) {
      if (node.input) {
        this.output.connect(node.input);
      } else {
        this.output.connect(node);
      }
    }
  }]);

  return VCA;
}();

exports.default = VCA;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(8);


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _game = __webpack_require__(9);

var _game2 = _interopRequireDefault(_game);

__webpack_require__(42);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function init() {
  var canvas = document.getElementById('canvas');
  canvas.setAttribute('width', window.innerWidth);
  canvas.setAttribute('height', window.innerHeight);

  var game = new _game2.default(canvas);
  game.start();
}

init();

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _gameScene = __webpack_require__(10);

var _gameScene2 = _interopRequireDefault(_gameScene);

var _renderer = __webpack_require__(31);

var _renderer2 = _interopRequireDefault(_renderer);

var _camera = __webpack_require__(32);

var _camera2 = _interopRequireDefault(_camera);

var _composer = __webpack_require__(34);

var _composer2 = _interopRequireDefault(_composer);

var _ui = __webpack_require__(41);

var _ui2 = _interopRequireDefault(_ui);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Game = function () {
  function Game(canvas) {
    _classCallCheck(this, Game);

    this.canvas = canvas;
    this.update = this.update.bind(this);
    this.resize = this.resize.bind(this);
    this.levelUp = this.levelUp.bind(this);

    // set up audio
    this.composer = new _composer2.default();

    // set up UI
    this.ui = new _ui2.default(this.composer);

    // set up camera
    this.camera = new _camera2.default(canvas.width, canvas.height);

    // set up renderer
    this.renderer = new _renderer2.default(canvas.getContext('2d'), this.camera);

    // set up root scene
    this.scene = new _gameScene2.default(this.camera, this.composer, this.levelUp);

    this.prevTimestamp = null;
    this.level = 1;
    this.ui.setLevel(window.localStorage.getItem('topLevel') || 1);
  }

  _createClass(Game, [{
    key: 'start',
    value: function start() {
      window.requestAnimationFrame(this.update);
      window.addEventListener('resize', this.resize);
    }
  }, {
    key: 'update',
    value: function update(timestamp) {
      this.renderer.clear();

      if (this.prevTimestamp !== null) {
        var step = timestamp - this.prevTimestamp;

        this.scene.update(step * 60 / 1000);
        this.scene.draw(this.renderer);
      }

      this.prevTimestamp = timestamp;
      window.requestAnimationFrame(this.update);
    }
  }, {
    key: 'resize',
    value: function resize() {
      this.canvas.setAttribute('width', window.innerWidth);
      this.canvas.setAttribute('height', window.innerHeight);
      this.camera.width = this.canvas.width;
      this.camera.height = this.canvas.height;
    }
  }, {
    key: 'levelUp',
    value: function levelUp() {
      this.level++;
      var topLevel = window.localStorage.getItem('topLevel') || 1;

      if (this.level > topLevel) {
        topLevel = this.level;
        window.localStorage.setItem('topLevel', topLevel);
      }

      this.ui.setLevel(topLevel);
    }
  }]);

  return Game;
}();

exports.default = Game;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _physicsScene = __webpack_require__(11);

var _physicsScene2 = _interopRequireDefault(_physicsScene);

var _vector = __webpack_require__(0);

var _vector2 = _interopRequireDefault(_vector);

var _player = __webpack_require__(13);

var _player2 = _interopRequireDefault(_player);

var _thing = __webpack_require__(1);

var _thing2 = _interopRequireDefault(_thing);

var _particle = __webpack_require__(29);

var _particle2 = _interopRequireDefault(_particle);

var _spawnController = __webpack_require__(30);

var _spawnController2 = _interopRequireDefault(_spawnController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MIN_THINGS_ON_SCREEN = 10;
var MAX_THINGS = 15;
var MIN_PARTICLES_ON_SCREEN = 10;
var MAX_PARTICLES = 15;

var GameScene = function (_PhysicsScene) {
  _inherits(GameScene, _PhysicsScene);

  function GameScene(camera, composer, levelUp) {
    _classCallCheck(this, GameScene);

    var _this = _possibleConstructorReturn(this, (GameScene.__proto__ || Object.getPrototypeOf(GameScene)).call(this, camera, composer));

    _this.player = new _player2.default(0, 0, composer, levelUp);
    _this.addChild(_this.player);

    _this.thingController = new _spawnController2.default({
      spawn: function spawn(x, y) {
        return _this.addChild(new _thing2.default(x, y, 0.5));
      },
      remove: function remove(thing) {
        return _this.removeChild(thing);
      },
      safeDistance: 200
    });

    _this.particleController = new _spawnController2.default({
      spawn: function spawn(x, y) {
        return _this.addChild(new _particle2.default(x, y), true);
      },
      remove: function remove(particle) {
        return _this.removeChild(particle);
      }
    });

    _this.itemCount = _this.items.length;
    return _this;
  }

  _createClass(GameScene, [{
    key: 'update',
    value: function update(step) {
      _get(GameScene.prototype.__proto__ || Object.getPrototypeOf(GameScene.prototype), 'update', this).call(this, step);

      this.thingController.check(this.getItemsByType('Thing'), this.player.pos);
      this.particleController.check(this.getItemsByType('Particle'), this.player.pos);

      this.moveCamera();
    }
  }, {
    key: 'draw',
    value: function draw(renderer) {
      // renderer.drawTilingBackground();
      _get(GameScene.prototype.__proto__ || Object.getPrototypeOf(GameScene.prototype), 'draw', this).call(this, renderer);
    }
  }, {
    key: 'ensureThingCount',
    value: function ensureThingCount() {
      var _this2 = this;

      // count items on screen
      var thingCount = 0;
      var onScreenCount = 0;

      this.items.forEach(function (item) {
        if (item.constructor.name === 'Thing') {
          thingCount++;
          if (_this2.camera.isInBounds(item.pos.x, item.pos.y, item.radius)) onScreenCount++;
        }
      });

      if (onScreenCount < MIN_THINGS_ON_SCREEN) this.spawnThing();
      if (thingCount > MAX_THINGS) this.removeFarthestThing();
    }
  }, {
    key: 'ensureParticleCount',
    value: function ensureParticleCount() {
      var _this3 = this;

      // count items on screen
      var particleCount = 0;
      var onScreenCount = 0;

      this.items.forEach(function (item) {
        if (item.constructor.name === 'Particle') {
          particleCount++;
          if (_this3.camera.isInBounds(item.pos.x, item.pos.y, item.radius)) onScreenCount++;
        }
      });

      if (onScreenCount < MIN_PARTICLES_ON_SCREEN) this.spawnParticle();
      if (particleCount > MAX_PARTICLES) this.removeFarthestParticle();
    }
  }, {
    key: 'spawnThing',
    value: function spawnThing() {
      var coords = this.camera.getRandomInBounds();
      var thing = new _thing2.default(coords.x, coords.y, 0.5);
      this.addChild(thing);
    }
  }, {
    key: 'spawnParticle',
    value: function spawnParticle() {
      var coords = this.camera.getRandomInBounds();
      var particle = new _particle2.default(coords.x, coords.y);
      this.addChild(particle, true);
    }
  }, {
    key: 'removeFarthestThing',
    value: function removeFarthestThing() {
      var _this4 = this;

      if (!this.items.length) return;

      var farthestThing = null;
      this.items.forEach(function (item) {
        if (item.constructor.name === 'Thing') {
          if (farthestThing === null) {
            farthestThing = item;
          } else {
            var d1 = _vector2.default.sub(farthestThing.pos, _this4.player.pos).magSq();
            var d2 = _vector2.default.sub(item.pos, _this4.player.pos).magSq();
            if (d2 > d1) farthestThing = item;
          }
        }
      });

      this.removeChild(farthestThing);
    }
  }, {
    key: 'removeFarthestParticle',
    value: function removeFarthestParticle() {
      var _this5 = this;

      if (!this.items.length) return;

      var farthestThing = null;
      this.items.forEach(function (item) {
        if (item.constructor.name === 'Particle') {
          if (farthestThing === null) {
            farthestThing = item;
          } else {
            var d1 = _vector2.default.sub(farthestThing.pos, _this5.player.pos).magSq();
            var d2 = _vector2.default.sub(item.pos, _this5.player.pos).magSq();
            if (d2 > d1) farthestThing = item;
          }
        }
      });

      this.removeChild(farthestThing);
    }
  }, {
    key: 'moveCamera',
    value: function moveCamera() {
      this.camera.center.x = this.player.pos.x;
      this.camera.center.y = this.player.pos.y;
      this.camera.zoom = Math.min(Math.max(0.5, 1.1 - this.player.vel.mag() / 50), 0.85);
    }
  }]);

  return GameScene;
}(_physicsScene2.default);

exports.default = GameScene;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _vector = __webpack_require__(0);

var _vector2 = _interopRequireDefault(_vector);

var _scene = __webpack_require__(12);

var _scene2 = _interopRequireDefault(_scene);

var _key = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GRAVITATIONAL_CONSTANT = 150;

var PhysicsScene = function (_Scene) {
  _inherits(PhysicsScene, _Scene);

  function PhysicsScene() {
    _classCallCheck(this, PhysicsScene);

    return _possibleConstructorReturn(this, (PhysicsScene.__proto__ || Object.getPrototypeOf(PhysicsScene)).apply(this, arguments));
  }

  _createClass(PhysicsScene, [{
    key: 'update',
    value: function update(step) {
      this.applyGravity();

      _get(PhysicsScene.prototype.__proto__ || Object.getPrototypeOf(PhysicsScene.prototype), 'update', this).call(this, step);

      this.checkCollisions();
    }
  }, {
    key: 'applyGravity',
    value: function applyGravity() {
      this.composer.alternatePad((0, _key.isKeyDown)('Space'));
      for (var i = 0; i < this.items.length - 1; i++) {
        for (var j = i + 1; j < this.items.length; j++) {
          var a = this.items[i];
          var b = this.items[j];

          if (a.__hasGravity && b.__hasGravity) {
            var d = _vector2.default.sub(a.pos, b.pos);
            var f = GRAVITATIONAL_CONSTANT * a.mass * b.mass / Math.max(d.magSq(), 225);

            if ((0, _key.isKeyDown)('Space')) f *= -1;
            a.applyForce(_vector2.default.fromAngle(d.heading(), -f));
            b.applyForce(_vector2.default.fromAngle(d.heading(), f));
          }
        }
      }
    }
  }, {
    key: 'checkCollisions',
    value: function checkCollisions() {
      for (var i = 0; i < this.items.length - 1; i++) {
        for (var j = i + 1; j < this.items.length; j++) {
          var a = this.items[i];
          var b = this.items[j];

          if (a.onCollide && b.onCollide) {
            var d = _vector2.default.sub(a.pos, b.pos).magSq();
            var sq = function sq(x) {
              return x * x;
            };
            if (d < sq(a.radius + b.radius)) {
              a.onCollide(b);
              b.onCollide(a);
            }
          }
        }
      }
    }
  }]);

  return PhysicsScene;
}(_scene2.default);

exports.default = PhysicsScene;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Scene = function () {
  function Scene(camera, composer) {
    _classCallCheck(this, Scene);

    this.items = [];
    this.camera = camera;
    this.composer = composer;
  }

  _createClass(Scene, [{
    key: "addChild",
    value: function addChild(item) {
      var front = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      item.setParent(this);
      if (front) {
        this.items.splice(0, 0, item);
      } else {
        this.items.push(item);
      }
    }
  }, {
    key: "removeChild",
    value: function removeChild(child) {
      var index = this.items.indexOf(child);
      if (index > -1) this.items.splice(index, 1);
    }
  }, {
    key: "update",
    value: function update(step) {
      this.items.forEach(function (i) {
        return i.update(step);
      });
    }
  }, {
    key: "draw",
    value: function draw(renderer) {
      this.items.forEach(function (i) {
        return i.draw(renderer);
      });
    }
  }, {
    key: "getItemsByType",
    value: function getItemsByType(type) {
      return this.items.filter(function (i) {
        return i.constructor.name === type;
      });
    }
  }]);

  return Scene;
}();

exports.default = Scene;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _thing = __webpack_require__(1);

var _thing2 = _interopRequireDefault(_thing);

var _vector = __webpack_require__(0);

var _vector2 = _interopRequireDefault(_vector);

var _key = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FORCE = 0.15;
var INITIAL_COLOR = '#fff';

var Player = function (_Thing) {
  _inherits(Player, _Thing);

  function Player(x, y, composer, levelUp) {
    _classCallCheck(this, Player);

    var _this = _possibleConstructorReturn(this, (Player.__proto__ || Object.getPrototypeOf(Player)).call(this, x, y, 0.5));

    _this.color = INITIAL_COLOR;

    _this.target = 3;
    _this.items = 0;

    _this.scoreAngle = 0;

    _this.composer = composer;
    _this.onLevelUp = levelUp;
    return _this;
  }

  _createClass(Player, [{
    key: 'update',
    value: function update(step) {
      if ((0, _key.isKeyDown)('ArrowRight')) this.applyForce(new _vector2.default(FORCE, 0));
      if ((0, _key.isKeyDown)('ArrowLeft')) this.applyForce(new _vector2.default(-FORCE, 0));
      if ((0, _key.isKeyDown)('ArrowDown')) this.applyForce(new _vector2.default(0, FORCE));
      if ((0, _key.isKeyDown)('ArrowUp')) this.applyForce(new _vector2.default(0, -FORCE));

      _get(Player.prototype.__proto__ || Object.getPrototypeOf(Player.prototype), 'update', this).call(this, step);
      this.scoreAngle += step / 100; // * this.vel.mag() / 100;
    }
  }, {
    key: 'score',
    value: function score() {
      this.items++;

      if (this.items >= this.target) {
        this.target++;
        this.reset();
        this.composer.dingMe();
        this.composer.shift();
        this.onLevelUp();
      } else {
        this.composer.boopMe();
      }
    }
  }, {
    key: 'reset',
    value: function reset() {
      this.items = 0;
      this.setMass(1);
      this.color = INITIAL_COLOR;
    }
  }, {
    key: 'onCollide',
    value: function onCollide(other) {
      if (other.constructor.name === 'Thing') {
        if (other.color !== this.color) {
          this.reset();
          this.color = other.color;
        }

        this.addMass(other.mass);
        this.score();
      }
    }
  }, {
    key: 'draw',
    value: function draw(renderer) {
      _get(Player.prototype.__proto__ || Object.getPrototypeOf(Player.prototype), 'draw', this).call(this, renderer);
      this.renderScore(renderer);
    }
  }, {
    key: 'renderScore',
    value: function renderScore(renderer) {
      for (var i = 0; i < this.target; i++) {
        var theta = Math.PI * 2 / this.target * i + this.scoreAngle;
        var offset = this.radius + 20;
        var pos = _vector2.default.add(this.pos, _vector2.default.fromAngle(theta, offset));

        renderer.drawCircle(pos.x, pos.y, 5, {
          color: this.color,
          stroke: i >= this.items,
          opacity: i >= this.items ? 0.3 : 1
        });
      }
    }
  }]);

  return Player;
}(_thing2.default);

exports.default = Player;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _getId = __webpack_require__(15);

var _getId2 = _interopRequireDefault(_getId);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Node = function () {
  function Node() {
    _classCallCheck(this, Node);

    this.__isNode = true;
    this.id = (0, _getId2.default)();
    this.parent = null;
  }

  _createClass(Node, [{
    key: 'setParent',
    value: function setParent(parent) {
      this.parent = parent;
    }
  }, {
    key: 'remove',
    value: function remove() {
      this.parent.removeChild(this);
    }
  }, {
    key: 'update',
    value: function update() {}
  }, {
    key: 'draw',
    value: function draw() {}
  }]);

  return Node;
}();

exports.default = Node;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getId;
var id = 0;

function getId() {
  return id++;
}

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var easings = exports.easings = {
  // props to gre (https://gist.github.com/gre/1650294) for this list
  linear: function linear(t) {
    return t;
  },
  easeInQuad: function easeInQuad(t) {
    return t * t;
  },
  easeOutQuad: function easeOutQuad(t) {
    return t * (2 - t);
  },
  easeInOutQuad: function easeInOutQuad(t) {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  },
  easeInCubic: function easeInCubic(t) {
    return t * t * t;
  },
  easeOutCubic: function easeOutCubic(t) {
    return --t * t * t + 1;
  },
  easeInOutCubic: function easeInOutCubic(t) {
    return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
  },
  easeInQuart: function easeInQuart(t) {
    return t * t * t * t;
  },
  easeOutQuart: function easeOutQuart(t) {
    return 1 - --t * t * t * t;
  },
  easeInOutQuart: function easeInOutQuart(t) {
    return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t;
  },
  easeInQuint: function easeInQuint(t) {
    return t * t * t * t * t;
  },
  easeOutQuint: function easeOutQuint(t) {
    return 1 + --t * t * t * t * t;
  },
  easeInOutQuint: function easeInOutQuint(t) {
    return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t;
  }
};

var Transition = function () {
  function Transition(config) {
    _classCallCheck(this, Transition);

    var defaultConfig = {
      start: 0,
      end: 0,
      duration: 60,
      easing: easings.linear
    };

    config = _extends({}, defaultConfig, config);

    this.start = config.start;
    this.end = config.end;
    this.duration = config.duration;
    this.easing = config.easing;
    this.timer = 0;
  }

  _createClass(Transition, [{
    key: "step",
    value: function step(_step) {
      var t = this.timer / this.duration;
      if (t < 1) {
        this.timer += _step;
        return this.easing(t) * (this.end - this.start) + this.start;
      } else {
        return this.end;
      }
    }
  }]);

  return Transition;
}();

exports.default = Transition;

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_linear__ = __webpack_require__(18);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easeLinear", function() { return __WEBPACK_IMPORTED_MODULE_0__src_linear__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_quad__ = __webpack_require__(19);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easeQuad", function() { return __WEBPACK_IMPORTED_MODULE_1__src_quad__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easeQuadIn", function() { return __WEBPACK_IMPORTED_MODULE_1__src_quad__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easeQuadOut", function() { return __WEBPACK_IMPORTED_MODULE_1__src_quad__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easeQuadInOut", function() { return __WEBPACK_IMPORTED_MODULE_1__src_quad__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_cubic__ = __webpack_require__(20);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easeCubic", function() { return __WEBPACK_IMPORTED_MODULE_2__src_cubic__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easeCubicIn", function() { return __WEBPACK_IMPORTED_MODULE_2__src_cubic__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easeCubicOut", function() { return __WEBPACK_IMPORTED_MODULE_2__src_cubic__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easeCubicInOut", function() { return __WEBPACK_IMPORTED_MODULE_2__src_cubic__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_poly__ = __webpack_require__(21);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easePoly", function() { return __WEBPACK_IMPORTED_MODULE_3__src_poly__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easePolyIn", function() { return __WEBPACK_IMPORTED_MODULE_3__src_poly__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easePolyOut", function() { return __WEBPACK_IMPORTED_MODULE_3__src_poly__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easePolyInOut", function() { return __WEBPACK_IMPORTED_MODULE_3__src_poly__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_sin__ = __webpack_require__(22);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easeSin", function() { return __WEBPACK_IMPORTED_MODULE_4__src_sin__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easeSinIn", function() { return __WEBPACK_IMPORTED_MODULE_4__src_sin__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easeSinOut", function() { return __WEBPACK_IMPORTED_MODULE_4__src_sin__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easeSinInOut", function() { return __WEBPACK_IMPORTED_MODULE_4__src_sin__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_exp__ = __webpack_require__(23);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easeExp", function() { return __WEBPACK_IMPORTED_MODULE_5__src_exp__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easeExpIn", function() { return __WEBPACK_IMPORTED_MODULE_5__src_exp__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easeExpOut", function() { return __WEBPACK_IMPORTED_MODULE_5__src_exp__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easeExpInOut", function() { return __WEBPACK_IMPORTED_MODULE_5__src_exp__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__src_circle__ = __webpack_require__(24);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easeCircle", function() { return __WEBPACK_IMPORTED_MODULE_6__src_circle__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easeCircleIn", function() { return __WEBPACK_IMPORTED_MODULE_6__src_circle__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easeCircleOut", function() { return __WEBPACK_IMPORTED_MODULE_6__src_circle__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easeCircleInOut", function() { return __WEBPACK_IMPORTED_MODULE_6__src_circle__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__src_bounce__ = __webpack_require__(25);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easeBounce", function() { return __WEBPACK_IMPORTED_MODULE_7__src_bounce__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easeBounceIn", function() { return __WEBPACK_IMPORTED_MODULE_7__src_bounce__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easeBounceOut", function() { return __WEBPACK_IMPORTED_MODULE_7__src_bounce__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easeBounceInOut", function() { return __WEBPACK_IMPORTED_MODULE_7__src_bounce__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__src_back__ = __webpack_require__(26);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easeBack", function() { return __WEBPACK_IMPORTED_MODULE_8__src_back__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easeBackIn", function() { return __WEBPACK_IMPORTED_MODULE_8__src_back__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easeBackOut", function() { return __WEBPACK_IMPORTED_MODULE_8__src_back__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easeBackInOut", function() { return __WEBPACK_IMPORTED_MODULE_8__src_back__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__src_elastic__ = __webpack_require__(27);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easeElastic", function() { return __WEBPACK_IMPORTED_MODULE_9__src_elastic__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easeElasticIn", function() { return __WEBPACK_IMPORTED_MODULE_9__src_elastic__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easeElasticOut", function() { return __WEBPACK_IMPORTED_MODULE_9__src_elastic__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "easeElasticInOut", function() { return __WEBPACK_IMPORTED_MODULE_9__src_elastic__["b"]; });





















/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = linear;
function linear(t) {
  return +t;
}


/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = quadIn;
/* harmony export (immutable) */ __webpack_exports__["c"] = quadOut;
/* harmony export (immutable) */ __webpack_exports__["b"] = quadInOut;
function quadIn(t) {
  return t * t;
}

function quadOut(t) {
  return t * (2 - t);
}

function quadInOut(t) {
  return ((t *= 2) <= 1 ? t * t : --t * (2 - t) + 1) / 2;
}


/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = cubicIn;
/* harmony export (immutable) */ __webpack_exports__["c"] = cubicOut;
/* harmony export (immutable) */ __webpack_exports__["b"] = cubicInOut;
function cubicIn(t) {
  return t * t * t;
}

function cubicOut(t) {
  return --t * t * t + 1;
}

function cubicInOut(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}


/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return polyIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return polyOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return polyInOut; });
var exponent = 3;

var polyIn = (function custom(e) {
  e = +e;

  function polyIn(t) {
    return Math.pow(t, e);
  }

  polyIn.exponent = custom;

  return polyIn;
})(exponent);

var polyOut = (function custom(e) {
  e = +e;

  function polyOut(t) {
    return 1 - Math.pow(1 - t, e);
  }

  polyOut.exponent = custom;

  return polyOut;
})(exponent);

var polyInOut = (function custom(e) {
  e = +e;

  function polyInOut(t) {
    return ((t *= 2) <= 1 ? Math.pow(t, e) : 2 - Math.pow(2 - t, e)) / 2;
  }

  polyInOut.exponent = custom;

  return polyInOut;
})(exponent);


/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = sinIn;
/* harmony export (immutable) */ __webpack_exports__["c"] = sinOut;
/* harmony export (immutable) */ __webpack_exports__["b"] = sinInOut;
var pi = Math.PI,
    halfPi = pi / 2;

function sinIn(t) {
  return 1 - Math.cos(t * halfPi);
}

function sinOut(t) {
  return Math.sin(t * halfPi);
}

function sinInOut(t) {
  return (1 - Math.cos(pi * t)) / 2;
}


/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = expIn;
/* harmony export (immutable) */ __webpack_exports__["c"] = expOut;
/* harmony export (immutable) */ __webpack_exports__["b"] = expInOut;
function expIn(t) {
  return Math.pow(2, 10 * t - 10);
}

function expOut(t) {
  return 1 - Math.pow(2, -10 * t);
}

function expInOut(t) {
  return ((t *= 2) <= 1 ? Math.pow(2, 10 * t - 10) : 2 - Math.pow(2, 10 - 10 * t)) / 2;
}


/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = circleIn;
/* harmony export (immutable) */ __webpack_exports__["c"] = circleOut;
/* harmony export (immutable) */ __webpack_exports__["b"] = circleInOut;
function circleIn(t) {
  return 1 - Math.sqrt(1 - t * t);
}

function circleOut(t) {
  return Math.sqrt(1 - --t * t);
}

function circleInOut(t) {
  return ((t *= 2) <= 1 ? 1 - Math.sqrt(1 - t * t) : Math.sqrt(1 - (t -= 2) * t) + 1) / 2;
}


/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = bounceIn;
/* harmony export (immutable) */ __webpack_exports__["c"] = bounceOut;
/* harmony export (immutable) */ __webpack_exports__["b"] = bounceInOut;
var b1 = 4 / 11,
    b2 = 6 / 11,
    b3 = 8 / 11,
    b4 = 3 / 4,
    b5 = 9 / 11,
    b6 = 10 / 11,
    b7 = 15 / 16,
    b8 = 21 / 22,
    b9 = 63 / 64,
    b0 = 1 / b1 / b1;

function bounceIn(t) {
  return 1 - bounceOut(1 - t);
}

function bounceOut(t) {
  return (t = +t) < b1 ? b0 * t * t : t < b3 ? b0 * (t -= b2) * t + b4 : t < b6 ? b0 * (t -= b5) * t + b7 : b0 * (t -= b8) * t + b9;
}

function bounceInOut(t) {
  return ((t *= 2) <= 1 ? 1 - bounceOut(1 - t) : bounceOut(t - 1) + 1) / 2;
}


/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return backIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return backOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return backInOut; });
var overshoot = 1.70158;

var backIn = (function custom(s) {
  s = +s;

  function backIn(t) {
    return t * t * ((s + 1) * t - s);
  }

  backIn.overshoot = custom;

  return backIn;
})(overshoot);

var backOut = (function custom(s) {
  s = +s;

  function backOut(t) {
    return --t * t * ((s + 1) * t + s) + 1;
  }

  backOut.overshoot = custom;

  return backOut;
})(overshoot);

var backInOut = (function custom(s) {
  s = +s;

  function backInOut(t) {
    return ((t *= 2) < 1 ? t * t * ((s + 1) * t - s) : (t -= 2) * t * ((s + 1) * t + s) + 2) / 2;
  }

  backInOut.overshoot = custom;

  return backInOut;
})(overshoot);


/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return elasticIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return elasticOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return elasticInOut; });
var tau = 2 * Math.PI,
    amplitude = 1,
    period = 0.3;

var elasticIn = (function custom(a, p) {
  var s = Math.asin(1 / (a = Math.max(1, a))) * (p /= tau);

  function elasticIn(t) {
    return a * Math.pow(2, 10 * --t) * Math.sin((s - t) / p);
  }

  elasticIn.amplitude = function(a) { return custom(a, p * tau); };
  elasticIn.period = function(p) { return custom(a, p); };

  return elasticIn;
})(amplitude, period);

var elasticOut = (function custom(a, p) {
  var s = Math.asin(1 / (a = Math.max(1, a))) * (p /= tau);

  function elasticOut(t) {
    return 1 - a * Math.pow(2, -10 * (t = +t)) * Math.sin((t + s) / p);
  }

  elasticOut.amplitude = function(a) { return custom(a, p * tau); };
  elasticOut.period = function(p) { return custom(a, p); };

  return elasticOut;
})(amplitude, period);

var elasticInOut = (function custom(a, p) {
  var s = Math.asin(1 / (a = Math.max(1, a))) * (p /= tau);

  function elasticInOut(t) {
    return ((t = t * 2 - 1) < 0
        ? a * Math.pow(2, 10 * t) * Math.sin((s - t) / p)
        : 2 - a * Math.pow(2, -10 * t) * Math.sin((s + t) / p)) / 2;
  }

  elasticInOut.amplitude = function(a) { return custom(a, p * tau); };
  elasticInOut.period = function(p) { return custom(a, p); };

  return elasticInOut;
})(amplitude, period);


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getColor;
var COLORS = ['#ffff00', '#00ffff', '#ff00ff'];

function getColor() {
  return COLORS[~~(Math.random() * COLORS.length)];
}

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _thing = __webpack_require__(1);

var _thing2 = _interopRequireDefault(_thing);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Particle = function (_Thing) {
  _inherits(Particle, _Thing);

  function Particle(x, y) {
    _classCallCheck(this, Particle);

    var _this = _possibleConstructorReturn(this, (Particle.__proto__ || Object.getPrototypeOf(Particle)).call(this, x, y, 0.02));

    _this.color = '#aaa';
    return _this;
  }

  _createClass(Particle, [{
    key: 'onCollide',
    value: function onCollide() {}
  }]);

  return Particle;
}(_thing2.default);

exports.default = Particle;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _vector = __webpack_require__(0);

var _vector2 = _interopRequireDefault(_vector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SpawnController = function () {
  function SpawnController(config) {
    _classCallCheck(this, SpawnController);

    var defaultConfig = {
      min: 10,
      max: 15,
      range: 700,
      safeDistance: 0,
      spawn: function spawn() {},
      remove: function remove() {}
    };

    config = _extends({}, defaultConfig, config);

    this.spawnItem = config.spawn;
    this.removeItem = config.remove;
    this.min = config.min;
    this.max = config.max;
    this.range = config.range;
    this.safeDistance = config.safeDistance;

    for (var i = 0; i < this.min; i++) {
      this.spawn(new _vector2.default(0, 0));
    }
  }

  _createClass(SpawnController, [{
    key: 'check',
    value: function check(items, center) {
      var _this = this;

      var inRangeCount = 0;

      items.forEach(function (item) {
        if (_vector2.default.sub(item.pos, center).magSq() < _this.range * _this.range) inRangeCount++;
      });

      if (inRangeCount < this.min) this.spawn(center);
      if (items.length > this.max) this.removeFarthest(items, center);
    }
  }, {
    key: 'spawn',
    value: function spawn(center) {
      var heading = Math.random() * Math.PI * 2;
      var magnitude = Math.random() * (this.range - this.safeDistance) + this.safeDistance;
      var vec = _vector2.default.fromAngle(heading, magnitude).add(center);
      this.spawnItem(vec.x, vec.y);
    }
  }, {
    key: 'removeFarthest',
    value: function removeFarthest(items, center) {
      var farthest = items[0];
      items.forEach(function (item) {
        var d1 = _vector2.default.sub(farthest.pos, center).magSq();
        var d2 = _vector2.default.sub(item.pos, center).magSq();
        if (d2 > d1) farthest = item;
      });

      this.removeItem(farthest);
    }
  }]);

  return SpawnController;
}();

exports.default = SpawnController;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Renderer = function () {
  function Renderer(drawingContext, camera) {
    _classCallCheck(this, Renderer);

    this.ctx = drawingContext;
    this.camera = camera;
  }

  _createClass(Renderer, [{
    key: 'withStyle',
    value: function withStyle(style, callback) {
      if (style.opacity !== undefined) {
        this.ctx.globalAlpha = style.opacity;
      }

      if (style.stroke) {
        if (style.color !== undefined) this.ctx.strokeStyle = style.color;
        if (style.strokeWidth !== undefined) this.ctx.lineWidth = style.strokeWidth;
      } else {
        if (style.color !== undefined) this.ctx.fillStyle = style.color;
      }

      callback();

      this.ctx.globalAlpha = 1;
      this.ctx.lineWidth = 1;
    }
  }, {
    key: 'clear',
    value: function clear() {
      this.ctx.clearRect(0, 0, this.camera.width, this.camera.height);
    }
  }, {
    key: 'drawCircle',
    value: function drawCircle(x, y, radius, style) {
      var _this = this;

      if (this.camera.isInBounds(x, y, radius)) {
        var coords = this.camera.getScreenCoordinates(x, y);

        this.withStyle(style, function () {
          _this.ctx.beginPath();
          _this.ctx.arc(coords.x, coords.y, radius * _this.camera.getZoom(), 0, 2 * Math.PI);

          if (style.stroke) {
            _this.ctx.stroke();
          } else {
            _this.ctx.fill();
          }
        });
      }
    }
  }, {
    key: 'drawTilingBackground',
    value: function drawTilingBackground() {
      var _this2 = this;

      var bounds = this.camera.getBounds();

      this.withStyle({
        stroke: true,
        strokeWidth: 2,
        color: '#373737'
      }, function () {
        var radius = 300;

        var xOffset = _this2.camera.center.x % (radius * _this2.camera.zoom);
        var yOffset = _this2.camera.center.y % (radius * _this2.camera.zoom);

        var xStart = bounds.x1 - radius - xOffset;
        var yStart = bounds.y1 - radius - yOffset;

        _this2.ctx.beginPath();
        for (var x = xStart; x < bounds.x2 + radius; x += radius * 1) {
          for (var y = yStart; y < bounds.y2 + radius; y += radius * 1) {
            var coords = _this2.camera.getScreenCoordinates(x, y);
            _this2.ctx.moveTo(coords.x + radius * _this2.camera.zoom - 1, coords.y);

            _this2.ctx.arc(coords.x, coords.y, radius * _this2.camera.zoom - 1, 0, 2 * Math.PI);
          }
        }
        _this2.ctx.stroke();
      });
    }
  }]);

  return Renderer;
}();

exports.default = Renderer;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _vector = __webpack_require__(0);

var _vector2 = _interopRequireDefault(_vector);

var _rect = __webpack_require__(33);

var _rect2 = _interopRequireDefault(_rect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Camera = function () {
  function Camera(width, height) {
    _classCallCheck(this, Camera);

    this.center = new _vector2.default(0, 0);
    this.width = width;
    this.height = height;
    this.zoom = 1;
  }

  _createClass(Camera, [{
    key: 'getScreenCoordinates',
    value: function getScreenCoordinates(x, y) {
      return new _vector2.default(x, y).sub(this.center).mult(this.zoom).add(new _vector2.default(this.width / 2, this.height / 2));
    }
  }, {
    key: 'getBounds',
    value: function getBounds() {
      var tl = new _vector2.default(-this.width / 2, -this.height / 2).mult(1 / this.zoom).add(this.center);

      return new _rect2.default(tl.x, tl.y, tl.x + this.width / this.zoom, tl.y + this.height / this.zoom);
    }
  }, {
    key: 'getRandomInBounds',
    value: function getRandomInBounds() {
      var bounds = this.getBounds();

      return new _vector2.default(Math.random() * bounds.width() + bounds.x1, Math.random() * bounds.height() + bounds.y1);
    }
  }, {
    key: 'setCenter',
    value: function setCenter(x, y) {
      this.center = new _vector2.default(x, y);
    }
  }, {
    key: 'getZoom',
    value: function getZoom() {
      return this.zoom;
    }
  }, {
    key: 'setZoom',
    value: function setZoom(zoom) {
      this.zoom = zoom;
    }
  }, {
    key: 'isInBounds',
    value: function isInBounds(x, y) {
      var margin = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

      var bounds = this.getBounds();

      return x + margin > bounds.x1 && x - margin < bounds.x2 && y + margin > bounds.y1 && y - margin < bounds.y2;
    }
  }]);

  return Camera;
}();

exports.default = Camera;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Rect = function () {
  function Rect(x1, y1, x2, y2) {
    _classCallCheck(this, Rect);

    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
  }

  _createClass(Rect, [{
    key: "width",
    value: function width() {
      return Math.abs(this.x1 - this.x2);
    }
  }, {
    key: "height",
    value: function height() {
      return Math.abs(this.y1 - this.y2);
    }
  }]);

  return Rect;
}();

exports.default = Rect;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _composer = __webpack_require__(35);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_composer).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _scale = __webpack_require__(36);

var _scale2 = _interopRequireDefault(_scale);

var _boop = __webpack_require__(37);

var _boop2 = _interopRequireDefault(_boop);

var _ding = __webpack_require__(39);

var _ding2 = _interopRequireDefault(_ding);

var _Pad = __webpack_require__(40);

var _Pad2 = _interopRequireDefault(_Pad);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Composer = function () {
  function Composer() {
    _classCallCheck(this, Composer);

    this.context = new (window.AudioContext || window.webkitAudioContext)();

    this.scale = new _scale2.default(Math.random() * 220 + 220, [0, 2, 4, 5, 7, 9, 11]);

    this.gain = this.context.createGain();
    this.gain.gain.value = 1;
    this.gain.connect(this.context.destination);

    this.boop = new _boop2.default(this.context, this.scale);
    this.boop.connect(this.gain);

    this.ding = new _ding2.default(this.context, this.scale);
    this.ding.connect(this.gain);

    this.pad = new _Pad2.default(this.context, this.scale);
    this.pad.connect(this.gain);
  }

  _createClass(Composer, [{
    key: 'boopMe',
    value: function boopMe() {
      this.boop.trigger();
    }
  }, {
    key: 'dingMe',
    value: function dingMe() {
      this.ding.trigger();
    }
  }, {
    key: 'shift',
    value: function shift() {
      this.scale.shift();
      this.pad.setScale(this.scale);
    }
  }, {
    key: 'mute',
    value: function mute() {
      this.gain.gain.value = 0;
    }
  }, {
    key: 'unmute',
    value: function unmute() {
      this.gain.gain.value = 1;
    }
  }, {
    key: 'alternatePad',
    value: function alternatePad(value) {
      this.pad.setAlternate(!value);
      // this.scale.setMajor(!value);
      // this.pad.setFrequencies();
    }
  }]);

  return Composer;
}();

exports.default = Composer;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Scale = function () {
  function Scale(base, steps) {
    _classCallCheck(this, Scale);

    this.base = base;
    this.steps = steps;
  }

  _createClass(Scale, [{
    key: "getStep",
    value: function getStep(step) {
      return this.intervalToFrequency(this.steps[step]);
    }
  }, {
    key: "intervalToFrequency",
    value: function intervalToFrequency(interval) {
      return this.base * Math.pow(Math.pow(2, 1 / 12), interval);
    }
  }, {
    key: "stepToFrequency",
    value: function stepToFrequency(step) {
      while (step < 0) {
        step += this.steps.length;
      }step %= this.steps.length;

      return this.intervalToFrequency(this.steps[step]);
    }
  }, {
    key: "getRandomFrequency",
    value: function getRandomFrequency() {
      var step = this.steps[~~(Math.random() * this.steps.length)];
      return this.intervalToFrequency(step);
    }
  }, {
    key: "getChord",
    value: function getChord() {
      var _this = this;

      return [this.steps[0], this.steps[2], this.steps[4], this.steps[6]].map(function (step) {
        return _this.intervalToFrequency(step);
      });
    }
  }, {
    key: "shift",
    value: function shift() {
      this.base = this.intervalToFrequency(5);
      if (this.base > 440) this.base /= 2;
    }
  }, {
    key: "setMajor",
    value: function setMajor(isMajor) {
      if (isMajor) {
        this.steps = [0, 2, 4, 5, 7, 9, 11];
      } else {
        this.steps = [0, 2, 3, 5, 7, 8, 10];
      }
    }
  }]);

  return Scale;
}();

exports.default = Scale;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _melody = __webpack_require__(38);

var _melody2 = _interopRequireDefault(_melody);

var _tone = __webpack_require__(3);

var _tone2 = _interopRequireDefault(_tone);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Boop = function () {
  function Boop(context, scale) {
    _classCallCheck(this, Boop);

    this.melody = new _melody2.default(scale);
    this.tone = new _tone2.default(context);

    this.input = this.tone;
    this.output = this.tone;
  }

  _createClass(Boop, [{
    key: 'trigger',
    value: function trigger() {
      this.tone.play(this.melody.getNote());
    }
  }, {
    key: 'connect',
    value: function connect(node) {
      if (node.input) {
        this.output.connect(node.input);
      } else {
        this.output.connect(node);
      }
    }
  }]);

  return Boop;
}();

exports.default = Boop;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Melody = function () {
  function Melody(scale) {
    _classCallCheck(this, Melody);

    this.scale = scale;
    this.scaleIndex = 0;
    this.record = [];
  }

  _createClass(Melody, [{
    key: "getNote",
    value: function getNote() {
      var note = this.scale.stepToFrequency(this.scaleIndex);
      this.scaleIndex += ~~(Math.random() * 7 - 3);

      if (this.scaleIndex < 0) this.scaleIndex += this.scale.steps.length;
      if (this.scaleIndex >= this.scale.steps.length) this.scaleIndex -= this.scale.steps.length;

      this.record.push(note);
      return note;
    }
  }, {
    key: "getRecord",
    value: function getRecord() {
      var r = this.record;
      this.record = [];
      return r;
    }
  }]);

  return Melody;
}();

exports.default = Melody;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _tone = __webpack_require__(3);

var _tone2 = _interopRequireDefault(_tone);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Ding = function () {
  function Ding(context, scale) {
    var _this = this;

    _classCallCheck(this, Ding);

    this.scale = scale;

    this.tones = [];
    this.gain = context.createGain();

    this.scale.getChord().forEach(function () {
      var tone = new _tone2.default(context);
      tone.connect(_this.gain);
      _this.tones.push(tone);
    });

    this.input = null;
    this.output = this.gain;
  }

  _createClass(Ding, [{
    key: 'trigger',
    value: function trigger() {
      var _this2 = this;

      this.scale.getChord().forEach(function (frequency, i) {
        _this2.tones[i].play(frequency);
      });
    }
  }, {
    key: 'connect',
    value: function connect(node) {
      if (node.input) {
        this.output.connect(node.input);
      } else {
        this.output.connect(node);
      }
    }
  }]);

  return Ding;
}();

exports.default = Ding;

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _vca = __webpack_require__(6);

var _vca2 = _interopRequireDefault(_vca);

var _envelope = __webpack_require__(5);

var _envelope2 = _interopRequireDefault(_envelope);

var _vco = __webpack_require__(4);

var _vco2 = _interopRequireDefault(_vco);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Pad = function () {
  function Pad(context, scale) {
    _classCallCheck(this, Pad);

    this.vcos = [];

    this.gain = context.createGain();
    this.gain.gain.value = 0.6;

    this.vca = new _vca2.default(context);
    this.vca.connect(this.gain);

    this.envelope = new _envelope2.default(context, 3, 60);
    this.envelope.connect(this.vca.amplitude);

    this.output = this.gain;

    this.isMajor = true;
    this.setScale(scale);
    var chord = this.getChord();

    for (var i = 0; i < chord.length; i++) {
      var vco = new _vco2.default(context, 'sine', i > 0 ? 0.2 : 1);
      vco.connect(this.vca);
      vco.setFrequency(chord[i]);
      this.vcos.push(vco);
    }

    this.envelope.trigger();
  }

  _createClass(Pad, [{
    key: 'setScale',
    value: function setScale(scale) {
      this.scale = scale;
      this.setFrequencies();
      this.envelope.trigger();
    }
  }, {
    key: 'getChord',
    value: function getChord() {
      return [this.isMajor ? this.scale.stepToFrequency(0) / 2 : this.scale.stepToFrequency(6) / 4, this.isMajor ? this.scale.stepToFrequency(0) : this.scale.stepToFrequency(6) / 2, this.scale.stepToFrequency(this.isMajor ? 2 : 0), this.scale.stepToFrequency(this.isMajor ? 4 : 2), this.scale.stepToFrequency(this.isMajor ? 7 : 5)];
    }
  }, {
    key: 'setFrequencies',
    value: function setFrequencies() {
      var chord = this.getChord();
      this.vcos.forEach(function (vco, i) {
        vco.setFrequency(chord[i]);
      });
    }
  }, {
    key: 'connect',
    value: function connect(node) {
      if (node.input) {
        this.output.connect(node.input);
      } else {
        this.output.connect(node);
      }
    }
  }, {
    key: 'setAlternate',
    value: function setAlternate(alt) {
      if (this.isMajor !== alt) {
        this.isMajor = !this.isMajor;
        this.setFrequencies();
      }
    }
  }]);

  return Pad;
}();

exports.default = Pad;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UI = function () {
  function UI(composer) {
    _classCallCheck(this, UI);

    this.composer = composer;
    this.isMuted = false;

    this.hideHelp = this.hideHelp.bind(this);

    this.toggleSoundNode = document.getElementById('toggle-sound');
    this.toggleSoundNode.onclick = this.toggleSound.bind(this);

    this.helpNode = document.getElementById('help');
    this.helpTimer = null;
    this.toggleHelp();

    this.toggleHelpNode = document.getElementById('toggle-help');
    this.toggleHelpNode.onclick = this.toggleHelp.bind(this);

    this.levelNumberNode = document.getElementById('level-number');
  }

  _createClass(UI, [{
    key: 'toggleSound',
    value: function toggleSound() {
      if (this.isMuted) {
        this.composer.unmute();
        this.toggleSoundNode.innerHTML = '<i class="fa fa-volume-up"></i> mute';
      } else {
        this.composer.mute();
        this.toggleSoundNode.innerHTML = '<i class="fa fa-fw fa-volume-off"></i> unmute';
      }

      this.isMuted = !this.isMuted;
    }
  }, {
    key: 'toggleHelp',
    value: function toggleHelp() {
      if (this.helpTimer === null) {
        this.helpNode.style.transition = '.5s opacity ease-in-out';
        this.helpNode.style.opacity = 1;
        this.helpTimer = setTimeout(this.hideHelp, 5000);
      } else {
        clearTimeout(this.helpTimer);
        this.hideHelp();
      }
    }
  }, {
    key: 'hideHelp',
    value: function hideHelp() {
      this.helpNode.style.transition = '2s opacity ease-in-out';
      this.helpNode.style.opacity = 0;
      this.helpTimer = null;
    }
  }, {
    key: 'setLevel',
    value: function setLevel(number) {
      this.levelNumberNode.innerHTML = number;
    }
  }]);

  return UI;
}();

exports.default = UI;

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(43);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(45)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js!./index.css", function() {
			var newContent = require("!!../node_modules/css-loader/index.js!./index.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(44)(undefined);
// imports


// module
exports.push([module.i, "body,\nhtml {\n  margin: 0;\n  padding: 0;\n  background: #333;\n  color: #fff;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto,\n    Oxygen-Sans, Ubuntu, Cantarell, \"Helvetica Neue\", sans-serif;\n  font-size: 16px;\n  font-weight: 300;\n  line-height: 1.5;\n}\n\nhtml,\nbody,\ncanvas {\n  height: 100%;\n  overflow: hidden;\n}\n\na,\na:active,\na:visited {\n  color: #fff;\n  text-decoration: none;\n}\n\nh1 {\n  letter-spacing: 0.5rem;\n  font-weight: 100;\n  text-transform: uppercase;\n}\n\nul {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n\n.kbd {\n  background: #fff;\n  color: #333;\n\n  border-radius: 0.1875rem;\n  margin: 0 0.09375rem;\n  padding: 0.1875rem 0.375rem;\n\n  font-weight: 600;\n}\n\n.help {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-around;\n\n  text-align: center;\n}\n\n#help {\n  transition: 2s opacity ease-in-out;\n}\n\n.help-inner {\n  padding: .75rem;\n  border-radius: 0.375rem;\n}\n\n.help-inner > p {\n  margin: 0;\n  margin-top: 1.5rem;\n}\n\n.help-inner > ul > li {\n  margin-bottom: 0.75rem;\n}\n\n.help-inner > ul > li:last-child {\n  margin-bottom: 0;\n}\n\n.menu {\n  position: absolute;\n  bottom: 0;\n  opacity: 0.1;\n  transition: .5s opacity ease-out;\n  width: 100%;\n}\n\n.menu:hover {\n  opacity: 1;\n}\n\n.menu-inner {\n  display: flex;\n  justify-content: space-between;\n  padding: 0.75rem;\n}\n\n.menu ul {\n  display: flex;\n}\n\n.menu ul li {\n  margin-left: 1rem;\n}\n", ""]);

// exports


/***/ }),
/* 44 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			var styleTarget = fn.call(this, selector);
			// Special case to return head of iframe instead of iframe itself
			if (styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[selector] = styleTarget;
		}
		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(46);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 46 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ })
/******/ ]);
//# sourceMappingURL=main.205dfd7914e13e5d141d.js.map