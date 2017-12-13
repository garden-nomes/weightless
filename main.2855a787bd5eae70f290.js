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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
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
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _vector = __webpack_require__(0);

var _vector2 = _interopRequireDefault(_vector);

var _node = __webpack_require__(11);

var _node2 = _interopRequireDefault(_node);

var _circle = __webpack_require__(3);

var _circle2 = _interopRequireDefault(_circle);

var _colors = __webpack_require__(13);

var _colors2 = _interopRequireDefault(_colors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SHOW_VECTORS = false;

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
    }
  }, {
    key: 'radius',
    value: function radius() {
      return Math.sqrt(this.mass * 900 / Math.PI);
    }
  }, {
    key: 'addMass',
    value: function addMass(amount) {
      this.mass += amount;
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
    value: function draw(ctx) {
      (0, _circle2.default)(ctx, this.pos.x, this.pos.y, this.radius(), this.color);

      if (SHOW_VECTORS) {
        ctx.strokeStyle = '#0f0';
        ctx.beginPath();
        ctx.moveTo(this.pos.x, this.pos.y);
        ctx.lineTo(this.pos.x + this.vel.x * 10, this.pos.y + this.vel.y * 10);
        ctx.stroke();

        ctx.strokeStyle = '#f00';
        ctx.beginPath();
        ctx.moveTo(this.pos.x, this.pos.y);
        ctx.lineTo(this.pos.x + this.forces.x * 100, this.pos.y + this.forces.y * 100);
        ctx.stroke();
      }

      this.forces.x = 0;
      this.forces.y = 0;
    }
  }]);

  return Thing;
}(_node2.default);

exports.default = Thing;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = circle;
function circle(ctx, x, y, r, color) {
  var alpha = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 1;
  var stroke = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : false;

  ctx.globalAlpha = alpha;

  if (stroke) {
    ctx.strokeStyle = color;
  } else {
    ctx.fillStyle = color;
  }

  ctx.beginPath();
  ctx.arc(x, y, r, 0, 2 * Math.PI);

  if (stroke) {
    ctx.stroke();
  } else {
    ctx.fill();
  }

  ctx.globalAlpha = 1;
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(5);


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _game = __webpack_require__(6);

var _game2 = _interopRequireDefault(_game);

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
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _gameScene = __webpack_require__(7);

var _gameScene2 = _interopRequireDefault(_gameScene);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Game = function () {
  function Game(canvas) {
    _classCallCheck(this, Game);

    this.context = canvas.getContext('2d');
    this.width = canvas.width;
    this.height = canvas.height;
    this.update = this.update.bind(this);
    this.prevTimestamp = null;

    this.scene = new _gameScene2.default(this.width, this.height);
  }

  _createClass(Game, [{
    key: 'start',
    value: function start() {
      window.requestAnimationFrame(this.update);
    }
  }, {
    key: 'update',
    value: function update(timestamp) {
      var ctx = this.context;
      ctx.clearRect(0, 0, this.width, this.height);

      if (this.prevTimestamp !== null) {
        var step = timestamp - this.prevTimestamp;

        this.scene.update(step * 60 / 1000);
        this.scene.draw(ctx);
      }

      this.prevTimestamp = timestamp;
      window.requestAnimationFrame(this.update);
    }
  }]);

  return Game;
}();

exports.default = Game;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _physicsScene = __webpack_require__(8);

var _physicsScene2 = _interopRequireDefault(_physicsScene);

var _player = __webpack_require__(10);

var _player2 = _interopRequireDefault(_player);

var _thing = __webpack_require__(2);

var _thing2 = _interopRequireDefault(_thing);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GameScene = function (_PhysicsScene) {
  _inherits(GameScene, _PhysicsScene);

  function GameScene(width, height) {
    _classCallCheck(this, GameScene);

    var _this = _possibleConstructorReturn(this, (GameScene.__proto__ || Object.getPrototypeOf(GameScene)).call(this, width, height));

    _this.player = new _player2.default(_this.width / 2, _this.height / 2);
    _this.addChild(_this.player);

    for (var i = 0; i < 10; i++) {
      var thing = new _thing2.default(Math.random() * _this.width, Math.random() * _this.height, 0.5);
      _this.addChild(thing);
    }

    _this.itemCount = _this.items.length;
    return _this;
  }

  _createClass(GameScene, [{
    key: 'update',
    value: function update(step) {
      _get(GameScene.prototype.__proto__ || Object.getPrototypeOf(GameScene.prototype), 'update', this).call(this, step);
      this.ensureItemCount();
      this.renderLevel();
    }
  }, {
    key: 'ensureItemCount',
    value: function ensureItemCount() {
      if (this.items.length < this.itemCount) {
        var thing = new _thing2.default(Math.random() * this.width, Math.random() * this.height, 0.5);

        this.addChild(thing);
      }
    }
  }, {
    key: 'renderLevel',
    value: function renderLevel() {
      document.title = 'lvl ' + (this.player.target - 2);
    }
  }]);

  return GameScene;
}(_physicsScene2.default);

exports.default = GameScene;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _vector = __webpack_require__(0);

var _vector2 = _interopRequireDefault(_vector);

var _scene = __webpack_require__(9);

var _scene2 = _interopRequireDefault(_scene);

var _key = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GRAVITATIONAL_CONSTANT = 100;

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

      this.wrapItems();
      this.checkCollisions();
    }
  }, {
    key: 'applyGravity',
    value: function applyGravity() {
      for (var i = 0; i < this.items.length - 1; i++) {
        for (var j = i + 1; j < this.items.length; j++) {
          var a = this.items[i];
          var b = this.items[j];

          var d = _vector2.default.sub(a.pos, b.pos);
          var f = GRAVITATIONAL_CONSTANT * a.mass * b.mass / Math.max(d.magSq(), 100);

          if ((0, _key.isKeyDown)('Space')) f *= -1;
          a.applyForce(_vector2.default.fromAngle(d.heading(), -f));
          b.applyForce(_vector2.default.fromAngle(d.heading(), f));
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
          var d = _vector2.default.sub(a.pos, b.pos).magSq();
          var sq = function sq(x) {
            return x * x;
          };
          if (d < sq(a.radius() + b.radius())) {
            a.onCollide(b);
            b.onCollide(a);
          }
        }
      }
    }
  }, {
    key: 'wrapItems',
    value: function wrapItems() {
      var _this2 = this;

      this.items.forEach(function (item) {
        var _item$pos = item.pos,
            x = _item$pos.x,
            y = _item$pos.y;

        if (x < 0) item.pos.x += _this2.width;
        if (y < 0) item.pos.y += _this2.height;
        if (x > _this2.width) item.pos.x -= _this2.width;
        if (y > _this2.height) item.pos.y -= _this2.height;
      });
    }
  }]);

  return PhysicsScene;
}(_scene2.default);

exports.default = PhysicsScene;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Scene = function () {
  function Scene(width, height) {
    _classCallCheck(this, Scene);

    this.items = [];
    this.width = width;
    this.height = height;
  }

  _createClass(Scene, [{
    key: "addChild",
    value: function addChild(item) {
      if (item.__isNode) {
        item.setParent(this);
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
    value: function draw(ctx) {
      this.items.forEach(function (i) {
        return i.draw(ctx);
      });
    }
  }]);

  return Scene;
}();

exports.default = Scene;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _thing = __webpack_require__(2);

var _thing2 = _interopRequireDefault(_thing);

var _vector = __webpack_require__(0);

var _vector2 = _interopRequireDefault(_vector);

var _circle = __webpack_require__(3);

var _circle2 = _interopRequireDefault(_circle);

var _key = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FORCE = 0.1;
var INITIAL_COLOR = '#fff';

var Player = function (_Thing) {
  _inherits(Player, _Thing);

  function Player(x, y) {
    _classCallCheck(this, Player);

    var _this = _possibleConstructorReturn(this, (Player.__proto__ || Object.getPrototypeOf(Player)).call(this, x, y, 1));

    _this.color = INITIAL_COLOR;

    _this.target = 3;
    _this.items = 0;

    _this.scoreAngle = 0;
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
      this.scoreAngle += step * this.vel.x / 100;
    }
  }, {
    key: 'score',
    value: function score() {
      this.items++;
      if (this.items >= this.target) {
        this.target++;
        this.reset();
      }
    }
  }, {
    key: 'reset',
    value: function reset() {
      this.items = 0;
      this.mass = 1;
      this.color = INITIAL_COLOR;
    }
  }, {
    key: 'onCollide',
    value: function onCollide(other) {
      if (other.constructor.name === 'Thing') {
        if (other.color === this.color) {
          this.addMass(other.mass);
          this.score();
        } else {
          this.reset();
          this.color = other.color;
          this.mass = 1 + other.mass;
          this.score();
        }
      }
    }
  }, {
    key: 'draw',
    value: function draw(ctx) {
      _get(Player.prototype.__proto__ || Object.getPrototypeOf(Player.prototype), 'draw', this).call(this, ctx);
      this.renderScore(ctx);
    }
  }, {
    key: 'renderScore',
    value: function renderScore(ctx) {
      for (var i = 0; i < this.target; i++) {
        var theta = Math.PI * 2 / this.target * i + this.scoreAngle;
        var offset = this.radius() + 20;
        var pos = _vector2.default.add(this.pos, _vector2.default.fromAngle(theta, offset));

        (0, _circle2.default)(ctx, pos.x, pos.y, 5, this.color, i >= this.items ? 0.3 : 1, i >= this.items);
      }
    }
  }]);

  return Player;
}(_thing2.default);

exports.default = Player;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _getId = __webpack_require__(12);

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
/* 12 */
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
/* 13 */
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

/***/ })
/******/ ]);
//# sourceMappingURL=main.2855a787bd5eae70f290.js.map