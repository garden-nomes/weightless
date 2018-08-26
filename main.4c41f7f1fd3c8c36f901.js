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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Vector {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static fromAngle(heading, magnitude) {
    return new Vector(Math.cos(heading) * magnitude, Math.sin(heading) * magnitude);
  }

  static add(lhs, rhs) {
    return lhs.clone().add(rhs);
  }

  static sub(lhs, rhs) {
    return lhs.clone().sub(rhs);
  }

  static mult(lhs, rhs) {
    return lhs.clone().mult(rhs);
  }

  clone() {
    return new Vector(this.x, this.y);
  }

  add(other) {
    this.x += other.x;
    this.y += other.y;
    return this;
  }

  sub(other) {
    this.x -= other.x;
    this.y -= other.y;
    return this;
  }

  mult(scalar) {
    this.x *= scalar;
    this.y *= scalar;
    return this;
  }

  magSq() {
    const sq = x => x * x;
    return sq(this.x) + sq(this.y);
  }

  mag() {
    return Math.sqrt(this.magSq());
  }

  heading() {
    return Math.atan2(this.y, this.x);
  }

  limit(mag) {
    if (this.magSq() > mag * mag) {
      const h = this.heading();
      this.x = Math.cos(h) * mag;
      this.y = Math.sin(h) * mag;
    }
    return this;
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Vector;


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vector__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__transition__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_d3_ease__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__colors__ = __webpack_require__(28);






class Thing extends __WEBPACK_IMPORTED_MODULE_1__node__["a" /* default */] {
  constructor(x, y, mass) {
    super();

    this.pos = new __WEBPACK_IMPORTED_MODULE_0__vector__["a" /* default */](x, y);
    this.vel = new __WEBPACK_IMPORTED_MODULE_0__vector__["a" /* default */](0, 0);
    this.forces = new __WEBPACK_IMPORTED_MODULE_0__vector__["a" /* default */](0, 0);
    this.mass = mass;
    this.color = Object(__WEBPACK_IMPORTED_MODULE_4__colors__["a" /* default */])();

    this.radius = 0;
    this.radiusTransition = new __WEBPACK_IMPORTED_MODULE_2__transition__["a" /* default */]({
      start: 0,
      end: this.calcRadius(),
      duration: 30,
      easing: __WEBPACK_IMPORTED_MODULE_3_d3_ease__["b" /* easeCubicOut */]
    });

    this.__hasGravity = true;
  }

  applyForce(force) {
    this.forces.add(force.mult(1 / this.mass));
  }

  update(step) {
    this.vel.add(__WEBPACK_IMPORTED_MODULE_0__vector__["a" /* default */].mult(this.forces, step));
    this.pos.add(__WEBPACK_IMPORTED_MODULE_0__vector__["a" /* default */].mult(this.vel, step));

    if (this.radiusTransition !== null) {
      this.radius = this.radiusTransition.step(step);
    }
  }

  calcRadius() {
    return Math.sqrt(this.mass * 600 / Math.PI);
  }

  addMass(amount) {
    this.setMass(this.mass + amount);
  }

  setMass(mass) {
    this.mass = mass;
    this.radiusTransition = new __WEBPACK_IMPORTED_MODULE_2__transition__["a" /* default */]({
      start: this.radius,
      end: this.calcRadius(),
      duration: 30,
      easing: __WEBPACK_IMPORTED_MODULE_3_d3_ease__["a" /* easeBackOut */].overshoot(3)
    });
  }

  onCollide(other) {
    if (other.constructor.name === 'Player') {
      this.remove();
    }
  }

  draw(renderer) {
    renderer.drawCircle(this.pos.x, this.pos.y, this.radius, {
      color: this.color
    });

    this.forces.x = 0;
    this.forces.y = 0;
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Thing;


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = isKeyDown;
const keys = {};

const CONTROLLED_KEYS = ['ArrowUp', 'ArrowRight', 'ArrowDown', 'ArrowLeft', 'Space'];

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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vco__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__envelope__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vca__ = __webpack_require__(6);




class Tone {
  constructor(context) {
    this.osc1 = new __WEBPACK_IMPORTED_MODULE_0__vco__["a" /* default */](context, 'sine', 0.5);
    this.osc2 = new __WEBPACK_IMPORTED_MODULE_0__vco__["a" /* default */](context, 'triangle', 0.2, 4);
    this.osc3 = new __WEBPACK_IMPORTED_MODULE_0__vco__["a" /* default */](context, 'square', 0.5, -2);

    this.envelope = new __WEBPACK_IMPORTED_MODULE_1__envelope__["a" /* default */](context, 0.1, 2.5);
    this.vca = new __WEBPACK_IMPORTED_MODULE_2__vca__["a" /* default */](context);
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

  play(frequency) {
    this.osc1.setFrequency(frequency);
    this.osc2.setFrequency(frequency);
    this.osc3.setFrequency(frequency);
    this.envelope.trigger();
  }

  connect(node) {
    if (node.input) {
      this.output.connect(node.input);
    } else {
      this.output.connect(node);
    }
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Tone;


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class VCO {
  constructor(context, type = 'sine', gain = 1, detune = 0) {
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

  setType(type) {
    this.osc.type = type;
  }

  setFrequency(freq) {
    this.osc.frequency.setValueAtTime(freq, this.context.currentTime);
  }

  connect(node) {
    if (node.input) {
      this.output.connect(node.input);
    } else {
      this.output.connect(node);
    }
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = VCO;


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Envelope {
  constructor(context, attack = 0.1, release = 0.5) {
    this.context = context;
    this.attackTime = attack;
    this.releaseTime = release;
  }

  trigger() {
    const now = this.context.currentTime;
    const t1 = now + this.attackTime;
    const t2 = now + this.attackTime + this.releaseTime;

    this.param.cancelScheduledValues(now);
    this.param.setValueAtTime(0, now);
    this.param.linearRampToValueAtTime(1, t1);
    this.param.linearRampToValueAtTime(0, t2);
  }

  connect(param) {
    this.param = param;
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Envelope;


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class VCA {
  constructor(context) {
    this.gain = context.createGain();
    this.gain.gain.value = 0;

    this.input = this.gain;
    this.output = this.gain;

    this.amplitude = this.gain.gain;
  }

  connect(node) {
    if (node.input) {
      this.output.connect(node.input);
    } else {
      this.output.connect(node);
    }
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = VCA;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(8);


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__game__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index_css__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__index_css__);



function init() {
  const canvas = document.getElementById('canvas');
  canvas.setAttribute('width', window.innerWidth);
  canvas.setAttribute('height', window.innerHeight);

  const game = new __WEBPACK_IMPORTED_MODULE_0__game__["a" /* default */](canvas);
  game.start();
}

init();

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__game_scene__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__renderer__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__camera__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__composer__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ui__ = __webpack_require__(41);






class Game {
  constructor(canvas) {
    this.canvas = canvas;
    this.update = this.update.bind(this);
    this.resize = this.resize.bind(this);
    this.levelUp = this.levelUp.bind(this);

    // set up audio
    this.composer = new __WEBPACK_IMPORTED_MODULE_3__composer__["a" /* default */]();

    // set up UI
    this.ui = new __WEBPACK_IMPORTED_MODULE_4__ui__["a" /* default */](this.composer);

    // set up camera
    this.camera = new __WEBPACK_IMPORTED_MODULE_2__camera__["a" /* default */](canvas.width, canvas.height);

    // set up renderer
    this.renderer = new __WEBPACK_IMPORTED_MODULE_1__renderer__["a" /* default */](canvas.getContext('2d'), this.camera);

    // set up root scene
    this.scene = new __WEBPACK_IMPORTED_MODULE_0__game_scene__["a" /* default */](this.camera, this.composer, this.levelUp);

    this.prevTimestamp = null;
    this.level = 1;
    this.ui.setLevel(window.localStorage.getItem('topLevel') || 1);
  }

  start() {
    window.requestAnimationFrame(this.update);
    window.addEventListener('resize', this.resize);
  }

  update(timestamp) {
    this.renderer.clear();

    if (this.prevTimestamp !== null) {
      const step = timestamp - this.prevTimestamp;

      this.scene.update(step * 60 / 1000);
      this.scene.draw(this.renderer);
    }

    this.prevTimestamp = timestamp;
    window.requestAnimationFrame(this.update);
  }

  resize() {
    this.canvas.setAttribute('width', window.innerWidth);
    this.canvas.setAttribute('height', window.innerHeight);
    this.camera.width = this.canvas.width;
    this.camera.height = this.canvas.height;
  }

  levelUp() {
    this.level++;
    let topLevel = window.localStorage.getItem('topLevel') || 1;

    if (this.level > topLevel) {
      topLevel = this.level;
      window.localStorage.setItem('topLevel', topLevel);
    }

    this.ui.setLevel(topLevel);
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Game;


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__physics_scene__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vector__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__player__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__thing__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__particle__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__spawn_controller__ = __webpack_require__(30);







const MIN_THINGS_ON_SCREEN = 10;
const MAX_THINGS = 15;
const MIN_PARTICLES_ON_SCREEN = 10;
const MAX_PARTICLES = 15;

class GameScene extends __WEBPACK_IMPORTED_MODULE_0__physics_scene__["a" /* default */] {
  constructor(camera, composer, levelUp) {
    super(camera, composer);

    this.player = new __WEBPACK_IMPORTED_MODULE_2__player__["a" /* default */](0, 0, composer, levelUp);
    this.addChild(this.player);

    this.thingController = new __WEBPACK_IMPORTED_MODULE_5__spawn_controller__["a" /* default */]({
      spawn: (x, y) => this.addChild(new __WEBPACK_IMPORTED_MODULE_3__thing__["a" /* default */](x, y, 0.5)),
      remove: thing => this.removeChild(thing),
      safeDistance: 200
    });

    this.particleController = new __WEBPACK_IMPORTED_MODULE_5__spawn_controller__["a" /* default */]({
      spawn: (x, y) => this.addChild(new __WEBPACK_IMPORTED_MODULE_4__particle__["a" /* default */](x, y), true),
      remove: particle => this.removeChild(particle)
    });

    this.itemCount = this.items.length;
  }

  update(step) {
    super.update(step);

    this.thingController.check(this.getItemsByType('Thing'), this.player.pos);
    this.particleController.check(this.getItemsByType('Particle'), this.player.pos);

    this.moveCamera();
  }

  draw(renderer) {
    // renderer.drawTilingBackground();
    super.draw(renderer);
  }

  ensureThingCount() {
    // count items on screen
    let thingCount = 0;
    let onScreenCount = 0;

    this.items.forEach(item => {
      if (item.constructor.name === 'Thing') {
        thingCount++;
        if (this.camera.isInBounds(item.pos.x, item.pos.y, item.radius)) onScreenCount++;
      }
    });

    if (onScreenCount < MIN_THINGS_ON_SCREEN) this.spawnThing();
    if (thingCount > MAX_THINGS) this.removeFarthestThing();
  }

  ensureParticleCount() {
    // count items on screen
    let particleCount = 0;
    let onScreenCount = 0;

    this.items.forEach(item => {
      if (item.constructor.name === 'Particle') {
        particleCount++;
        if (this.camera.isInBounds(item.pos.x, item.pos.y, item.radius)) onScreenCount++;
      }
    });

    if (onScreenCount < MIN_PARTICLES_ON_SCREEN) this.spawnParticle();
    if (particleCount > MAX_PARTICLES) this.removeFarthestParticle();
  }

  spawnThing() {
    const coords = this.camera.getRandomInBounds();
    const thing = new __WEBPACK_IMPORTED_MODULE_3__thing__["a" /* default */](coords.x, coords.y, 0.5);
    this.addChild(thing);
  }

  spawnParticle() {
    const coords = this.camera.getRandomInBounds();
    const particle = new __WEBPACK_IMPORTED_MODULE_4__particle__["a" /* default */](coords.x, coords.y);
    this.addChild(particle, true);
  }

  removeFarthestThing() {
    if (!this.items.length) return;

    let farthestThing = null;
    this.items.forEach(item => {
      if (item.constructor.name === 'Thing') {
        if (farthestThing === null) {
          farthestThing = item;
        } else {
          const d1 = __WEBPACK_IMPORTED_MODULE_1__vector__["a" /* default */].sub(farthestThing.pos, this.player.pos).magSq();
          const d2 = __WEBPACK_IMPORTED_MODULE_1__vector__["a" /* default */].sub(item.pos, this.player.pos).magSq();
          if (d2 > d1) farthestThing = item;
        }
      }
    });

    this.removeChild(farthestThing);
  }

  removeFarthestParticle() {
    if (!this.items.length) return;

    let farthestThing = null;
    this.items.forEach(item => {
      if (item.constructor.name === 'Particle') {
        if (farthestThing === null) {
          farthestThing = item;
        } else {
          const d1 = __WEBPACK_IMPORTED_MODULE_1__vector__["a" /* default */].sub(farthestThing.pos, this.player.pos).magSq();
          const d2 = __WEBPACK_IMPORTED_MODULE_1__vector__["a" /* default */].sub(item.pos, this.player.pos).magSq();
          if (d2 > d1) farthestThing = item;
        }
      }
    });

    this.removeChild(farthestThing);
  }

  moveCamera() {
    this.camera.center.x = this.player.pos.x;
    this.camera.center.y = this.player.pos.y;
    this.camera.zoom = Math.min(Math.max(0.5, 1.1 - this.player.vel.mag() / 50), 0.85);
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = GameScene;


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vector__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scene__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__key__ = __webpack_require__(2);
const GRAVITATIONAL_CONSTANT = 150;




class PhysicsScene extends __WEBPACK_IMPORTED_MODULE_1__scene__["a" /* default */] {
  update(step) {
    this.applyGravity();

    super.update(step);

    this.checkCollisions();
  }

  applyGravity() {
    this.composer.alternatePad(Object(__WEBPACK_IMPORTED_MODULE_2__key__["a" /* isKeyDown */])('Space'));
    for (let i = 0; i < this.items.length - 1; i++) {
      for (let j = i + 1; j < this.items.length; j++) {
        const a = this.items[i];
        const b = this.items[j];

        if (a.__hasGravity && b.__hasGravity) {
          const d = __WEBPACK_IMPORTED_MODULE_0__vector__["a" /* default */].sub(a.pos, b.pos);
          let f = GRAVITATIONAL_CONSTANT * a.mass * b.mass / Math.max(d.magSq(), 225);

          if (Object(__WEBPACK_IMPORTED_MODULE_2__key__["a" /* isKeyDown */])('Space')) f *= -1;
          a.applyForce(__WEBPACK_IMPORTED_MODULE_0__vector__["a" /* default */].fromAngle(d.heading(), -f));
          b.applyForce(__WEBPACK_IMPORTED_MODULE_0__vector__["a" /* default */].fromAngle(d.heading(), f));
        }
      }
    }
  }

  checkCollisions() {
    for (let i = 0; i < this.items.length - 1; i++) {
      for (let j = i + 1; j < this.items.length; j++) {
        const a = this.items[i];
        const b = this.items[j];

        if (a.onCollide && b.onCollide) {
          const d = __WEBPACK_IMPORTED_MODULE_0__vector__["a" /* default */].sub(a.pos, b.pos).magSq();
          const sq = x => x * x;
          if (d < sq(a.radius + b.radius)) {
            a.onCollide(b);
            b.onCollide(a);
          }
        }
      }
    }
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = PhysicsScene;


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Scene {
  constructor(camera, composer) {
    this.items = [];
    this.camera = camera;
    this.composer = composer;
  }

  addChild(item, front = false) {
    item.setParent(this);
    if (front) {
      this.items.splice(0, 0, item);
    } else {
      this.items.push(item);
    }
  }

  removeChild(child) {
    const index = this.items.indexOf(child);
    if (index > -1) this.items.splice(index, 1);
  }

  update(step) {
    this.items.forEach(i => i.update(step));
  }

  draw(renderer) {
    this.items.forEach(i => i.draw(renderer));
  }

  getItemsByType(type) {
    return this.items.filter(i => i.constructor.name === type);
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Scene;


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__thing__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vector__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__key__ = __webpack_require__(2);




const FORCE = 0.15;
const INITIAL_COLOR = '#fff';

class Player extends __WEBPACK_IMPORTED_MODULE_0__thing__["a" /* default */] {
  constructor(x, y, composer, levelUp) {
    super(x, y, 0.5);
    this.color = INITIAL_COLOR;

    this.target = 3;
    this.items = 0;

    this.scoreAngle = 0;

    this.composer = composer;
    this.onLevelUp = levelUp;
  }

  update(step) {
    if (Object(__WEBPACK_IMPORTED_MODULE_2__key__["a" /* isKeyDown */])('ArrowRight')) this.applyForce(new __WEBPACK_IMPORTED_MODULE_1__vector__["a" /* default */](FORCE, 0));
    if (Object(__WEBPACK_IMPORTED_MODULE_2__key__["a" /* isKeyDown */])('ArrowLeft')) this.applyForce(new __WEBPACK_IMPORTED_MODULE_1__vector__["a" /* default */](-FORCE, 0));
    if (Object(__WEBPACK_IMPORTED_MODULE_2__key__["a" /* isKeyDown */])('ArrowDown')) this.applyForce(new __WEBPACK_IMPORTED_MODULE_1__vector__["a" /* default */](0, FORCE));
    if (Object(__WEBPACK_IMPORTED_MODULE_2__key__["a" /* isKeyDown */])('ArrowUp')) this.applyForce(new __WEBPACK_IMPORTED_MODULE_1__vector__["a" /* default */](0, -FORCE));

    super.update(step);
    this.scoreAngle += step / 100; // * this.vel.mag() / 100;
  }

  score() {
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

  reset() {
    this.items = 0;
    this.setMass(1);
    this.color = INITIAL_COLOR;
  }

  onCollide(other) {
    if (other.constructor.name === 'Thing') {
      if (other.color !== this.color) {
        this.reset();
        this.color = other.color;
      }

      this.addMass(other.mass);
      this.score();
    }
  }

  draw(renderer) {
    super.draw(renderer);
    this.renderScore(renderer);
  }

  renderScore(renderer) {
    for (let i = 0; i < this.target; i++) {
      const theta = Math.PI * 2 / this.target * i + this.scoreAngle;
      const offset = this.radius + 20;
      const pos = __WEBPACK_IMPORTED_MODULE_1__vector__["a" /* default */].add(this.pos, __WEBPACK_IMPORTED_MODULE_1__vector__["a" /* default */].fromAngle(theta, offset));

      renderer.drawCircle(pos.x, pos.y, 5, {
        color: this.color,
        stroke: i >= this.items,
        opacity: i >= this.items ? 0.3 : 1
      });
    }
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Player;


/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__get_id__ = __webpack_require__(15);


class Node {
  constructor() {
    this.__isNode = true;
    this.id = Object(__WEBPACK_IMPORTED_MODULE_0__get_id__["a" /* default */])();
    this.parent = null;
  }

  setParent(parent) {
    this.parent = parent;
  }

  remove() {
    this.parent.removeChild(this);
  }

  update() {}

  draw() {}
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Node;


/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getId;
let id = 0;

function getId() {
  return id++;
}

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

const easings = {
  // props to gre (https://gist.github.com/gre/1650294) for this list
  linear: t => t,
  easeInQuad: t => t * t,
  easeOutQuad: t => t * (2 - t),
  easeInOutQuad: t => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t,
  easeInCubic: t => t * t * t,
  easeOutCubic: t => --t * t * t + 1,
  easeInOutCubic: t => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1,
  easeInQuart: t => t * t * t * t,
  easeOutQuart: t => 1 - --t * t * t * t,
  easeInOutQuart: t => t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t,
  easeInQuint: t => t * t * t * t * t,
  easeOutQuint: t => 1 + --t * t * t * t * t,
  easeInOutQuint: t => t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t
};
/* unused harmony export easings */


class Transition {
  constructor(config) {
    const defaultConfig = {
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

  step(step) {
    const t = this.timer / this.duration;
    if (t < 1) {
      this.timer += step;
      return this.easing(t) * (this.end - this.start) + this.start;
    } else {
      return this.end;
    }
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Transition;


/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_linear__ = __webpack_require__(18);
/* unused harmony reexport easeLinear */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_quad__ = __webpack_require__(19);
/* unused harmony reexport easeQuad */
/* unused harmony reexport easeQuadIn */
/* unused harmony reexport easeQuadOut */
/* unused harmony reexport easeQuadInOut */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_cubic__ = __webpack_require__(20);
/* unused harmony reexport easeCubic */
/* unused harmony reexport easeCubicIn */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__src_cubic__["a"]; });
/* unused harmony reexport easeCubicInOut */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_poly__ = __webpack_require__(21);
/* unused harmony reexport easePoly */
/* unused harmony reexport easePolyIn */
/* unused harmony reexport easePolyOut */
/* unused harmony reexport easePolyInOut */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_sin__ = __webpack_require__(22);
/* unused harmony reexport easeSin */
/* unused harmony reexport easeSinIn */
/* unused harmony reexport easeSinOut */
/* unused harmony reexport easeSinInOut */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_exp__ = __webpack_require__(23);
/* unused harmony reexport easeExp */
/* unused harmony reexport easeExpIn */
/* unused harmony reexport easeExpOut */
/* unused harmony reexport easeExpInOut */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__src_circle__ = __webpack_require__(24);
/* unused harmony reexport easeCircle */
/* unused harmony reexport easeCircleIn */
/* unused harmony reexport easeCircleOut */
/* unused harmony reexport easeCircleInOut */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__src_bounce__ = __webpack_require__(25);
/* unused harmony reexport easeBounce */
/* unused harmony reexport easeBounceIn */
/* unused harmony reexport easeBounceOut */
/* unused harmony reexport easeBounceInOut */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__src_back__ = __webpack_require__(26);
/* unused harmony reexport easeBack */
/* unused harmony reexport easeBackIn */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_8__src_back__["a"]; });
/* unused harmony reexport easeBackInOut */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__src_elastic__ = __webpack_require__(27);
/* unused harmony reexport easeElastic */
/* unused harmony reexport easeElasticIn */
/* unused harmony reexport easeElasticOut */
/* unused harmony reexport easeElasticInOut */





















/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export linear */
function linear(t) {
  return +t;
}


/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export quadIn */
/* unused harmony export quadOut */
/* unused harmony export quadInOut */
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
/* unused harmony export cubicIn */
/* harmony export (immutable) */ __webpack_exports__["a"] = cubicOut;
/* unused harmony export cubicInOut */
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
/* unused harmony export polyIn */
/* unused harmony export polyOut */
/* unused harmony export polyInOut */
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
/* unused harmony export sinIn */
/* unused harmony export sinOut */
/* unused harmony export sinInOut */
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
/* unused harmony export expIn */
/* unused harmony export expOut */
/* unused harmony export expInOut */
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
/* unused harmony export circleIn */
/* unused harmony export circleOut */
/* unused harmony export circleInOut */
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
/* unused harmony export bounceIn */
/* unused harmony export bounceOut */
/* unused harmony export bounceInOut */
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
/* unused harmony export backIn */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return backOut; });
/* unused harmony export backInOut */
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
/* unused harmony export elasticIn */
/* unused harmony export elasticOut */
/* unused harmony export elasticInOut */
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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getColor;
const COLORS = ['#ffff00', '#00ffff', '#ff00ff'];

function getColor() {
  return COLORS[~~(Math.random() * COLORS.length)];
}

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__thing__ = __webpack_require__(1);


class Particle extends __WEBPACK_IMPORTED_MODULE_0__thing__["a" /* default */] {
  constructor(x, y) {
    super(x, y, 0.02);
    this.color = '#aaa';
  }

  onCollide() {}
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Particle;


/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vector__ = __webpack_require__(0);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



class SpawnController {
  constructor(config) {
    const defaultConfig = {
      min: 10,
      max: 15,
      range: 700,
      safeDistance: 0,
      spawn: () => {},
      remove: () => {}
    };

    config = _extends({}, defaultConfig, config);

    this.spawnItem = config.spawn;
    this.removeItem = config.remove;
    this.min = config.min;
    this.max = config.max;
    this.range = config.range;
    this.safeDistance = config.safeDistance;

    for (let i = 0; i < this.min; i++) {
      this.spawn(new __WEBPACK_IMPORTED_MODULE_0__vector__["a" /* default */](0, 0));
    }
  }

  check(items, center) {
    let inRangeCount = 0;

    items.forEach(item => {
      if (__WEBPACK_IMPORTED_MODULE_0__vector__["a" /* default */].sub(item.pos, center).magSq() < this.range * this.range) inRangeCount++;
    });

    if (inRangeCount < this.min) this.spawn(center);
    if (items.length > this.max) this.removeFarthest(items, center);
  }

  spawn(center) {
    const heading = Math.random() * Math.PI * 2;
    const magnitude = Math.random() * (this.range - this.safeDistance) + this.safeDistance;
    const vec = __WEBPACK_IMPORTED_MODULE_0__vector__["a" /* default */].fromAngle(heading, magnitude).add(center);
    this.spawnItem(vec.x, vec.y);
  }

  removeFarthest(items, center) {
    let farthest = items[0];
    items.forEach(item => {
      const d1 = __WEBPACK_IMPORTED_MODULE_0__vector__["a" /* default */].sub(farthest.pos, center).magSq();
      const d2 = __WEBPACK_IMPORTED_MODULE_0__vector__["a" /* default */].sub(item.pos, center).magSq();
      if (d2 > d1) farthest = item;
    });

    this.removeItem(farthest);
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = SpawnController;


/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Renderer {
  constructor(drawingContext, camera) {
    this.ctx = drawingContext;
    this.camera = camera;
  }

  withStyle(style, callback) {
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

  clear() {
    this.ctx.clearRect(0, 0, this.camera.width, this.camera.height);
  }

  drawCircle(x, y, radius, style) {
    if (this.camera.isInBounds(x, y, radius)) {
      const coords = this.camera.getScreenCoordinates(x, y);

      this.withStyle(style, () => {
        this.ctx.beginPath();
        this.ctx.arc(coords.x, coords.y, radius * this.camera.getZoom(), 0, 2 * Math.PI);

        if (style.stroke) {
          this.ctx.stroke();
        } else {
          this.ctx.fill();
        }
      });
    }
  }

  drawTilingBackground() {
    const bounds = this.camera.getBounds();

    this.withStyle({
      stroke: true,
      strokeWidth: 2,
      color: '#373737'
    }, () => {
      const radius = 300;

      const xOffset = this.camera.center.x % (radius * this.camera.zoom);
      const yOffset = this.camera.center.y % (radius * this.camera.zoom);

      let xStart = bounds.x1 - radius - xOffset;
      let yStart = bounds.y1 - radius - yOffset;

      this.ctx.beginPath();
      for (let x = xStart; x < bounds.x2 + radius; x += radius * 1) {
        for (let y = yStart; y < bounds.y2 + radius; y += radius * 1) {
          const coords = this.camera.getScreenCoordinates(x, y);
          this.ctx.moveTo(coords.x + radius * this.camera.zoom - 1, coords.y);

          this.ctx.arc(coords.x, coords.y, radius * this.camera.zoom - 1, 0, 2 * Math.PI);
        }
      }
      this.ctx.stroke();
    });
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Renderer;


/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vector__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rect__ = __webpack_require__(33);



class Camera {
  constructor(width, height) {
    this.center = new __WEBPACK_IMPORTED_MODULE_0__vector__["a" /* default */](0, 0);
    this.width = width;
    this.height = height;
    this.zoom = 1;
  }

  getScreenCoordinates(x, y) {
    return new __WEBPACK_IMPORTED_MODULE_0__vector__["a" /* default */](x, y).sub(this.center).mult(this.zoom).add(new __WEBPACK_IMPORTED_MODULE_0__vector__["a" /* default */](this.width / 2, this.height / 2));
  }

  getBounds() {
    const tl = new __WEBPACK_IMPORTED_MODULE_0__vector__["a" /* default */](-this.width / 2, -this.height / 2).mult(1 / this.zoom).add(this.center);

    return new __WEBPACK_IMPORTED_MODULE_1__rect__["a" /* default */](tl.x, tl.y, tl.x + this.width / this.zoom, tl.y + this.height / this.zoom);
  }

  getRandomInBounds() {
    const bounds = this.getBounds();

    return new __WEBPACK_IMPORTED_MODULE_0__vector__["a" /* default */](Math.random() * bounds.width() + bounds.x1, Math.random() * bounds.height() + bounds.y1);
  }

  setCenter(x, y) {
    this.center = new __WEBPACK_IMPORTED_MODULE_0__vector__["a" /* default */](x, y);
  }

  getZoom() {
    return this.zoom;
  }

  setZoom(zoom) {
    this.zoom = zoom;
  }

  isInBounds(x, y, margin = 0) {
    const bounds = this.getBounds();

    return x + margin > bounds.x1 && x - margin < bounds.x2 && y + margin > bounds.y1 && y - margin < bounds.y2;
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Camera;


/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Rect {
  constructor(x1, y1, x2, y2) {
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
  }

  width() {
    return Math.abs(this.x1 - this.x2);
  }

  height() {
    return Math.abs(this.y1 - this.y2);
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Rect;


/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__composer__ = __webpack_require__(35);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__composer__["a"]; });


/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scale__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__boop__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ding__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Pad__ = __webpack_require__(40);





class Composer {
  constructor() {
    this.context = new (window.AudioContext || window.webkitAudioContext)();

    this.scale = new __WEBPACK_IMPORTED_MODULE_0__scale__["a" /* default */](Math.random() * 220 + 220, [0, 2, 4, 5, 7, 9, 11]);

    this.gain = this.context.createGain();
    this.gain.gain.value = 1;
    this.gain.connect(this.context.destination);

    this.boop = new __WEBPACK_IMPORTED_MODULE_1__boop__["a" /* default */](this.context, this.scale);
    this.boop.connect(this.gain);

    this.ding = new __WEBPACK_IMPORTED_MODULE_2__ding__["a" /* default */](this.context, this.scale);
    this.ding.connect(this.gain);

    this.pad = new __WEBPACK_IMPORTED_MODULE_3__Pad__["a" /* default */](this.context, this.scale);
    this.pad.connect(this.gain);
  }

  boopMe() {
    this.boop.trigger();
  }

  dingMe() {
    this.ding.trigger();
  }

  shift() {
    this.scale.shift();
    this.pad.setScale(this.scale);
  }

  mute() {
    this.gain.gain.value = 0;
  }

  unmute() {
    this.gain.gain.value = 1;
  }

  alternatePad(value) {
    this.pad.setAlternate(!value);
    // this.scale.setMajor(!value);
    // this.pad.setFrequencies();
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Composer;


/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Scale {
  constructor(base, steps) {
    this.base = base;
    this.steps = steps;
  }

  getStep(step) {
    return this.intervalToFrequency(this.steps[step]);
  }

  intervalToFrequency(interval) {
    return this.base * Math.pow(Math.pow(2, 1 / 12), interval);
  }

  stepToFrequency(step) {
    while (step < 0) step += this.steps.length;
    step %= this.steps.length;

    return this.intervalToFrequency(this.steps[step]);
  }

  getRandomFrequency() {
    const step = this.steps[~~(Math.random() * this.steps.length)];
    return this.intervalToFrequency(step);
  }

  getChord() {
    return [this.steps[0], this.steps[2], this.steps[4], this.steps[6]].map(step => this.intervalToFrequency(step));
  }

  shift() {
    this.base = this.intervalToFrequency(5);
    if (this.base > 440) this.base /= 2;
  }

  setMajor(isMajor) {
    if (isMajor) {
      this.steps = [0, 2, 4, 5, 7, 9, 11];
    } else {
      this.steps = [0, 2, 3, 5, 7, 8, 10];
    }
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Scale;


/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__melody__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tone__ = __webpack_require__(3);



class Boop {
  constructor(context, scale) {
    this.melody = new __WEBPACK_IMPORTED_MODULE_0__melody__["a" /* default */](scale);
    this.tone = new __WEBPACK_IMPORTED_MODULE_1__tone__["a" /* default */](context);

    this.input = this.tone;
    this.output = this.tone;
  }

  trigger() {
    this.tone.play(this.melody.getNote());
  }

  connect(node) {
    if (node.input) {
      this.output.connect(node.input);
    } else {
      this.output.connect(node);
    }
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Boop;


/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Melody {
  constructor(scale) {
    this.scale = scale;
    this.scaleIndex = 0;
    this.record = [];
  }

  getNote() {
    const note = this.scale.stepToFrequency(this.scaleIndex);
    this.scaleIndex += ~~(Math.random() * 7 - 3);

    if (this.scaleIndex < 0) this.scaleIndex += this.scale.steps.length;
    if (this.scaleIndex >= this.scale.steps.length) this.scaleIndex -= this.scale.steps.length;

    this.record.push(note);
    return note;
  }

  getRecord() {
    const r = this.record;
    this.record = [];
    return r;
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Melody;


/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tone__ = __webpack_require__(3);


class Ding {
  constructor(context, scale) {
    this.scale = scale;

    this.tones = [];
    this.gain = context.createGain();

    this.scale.getChord().forEach(() => {
      const tone = new __WEBPACK_IMPORTED_MODULE_0__tone__["a" /* default */](context);
      tone.connect(this.gain);
      this.tones.push(tone);
    });

    this.input = null;
    this.output = this.gain;
  }

  trigger() {
    this.scale.getChord().forEach((frequency, i) => {
      this.tones[i].play(frequency);
    });
  }

  connect(node) {
    if (node.input) {
      this.output.connect(node.input);
    } else {
      this.output.connect(node);
    }
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Ding;


/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vca__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__envelope__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vco__ = __webpack_require__(4);




class Pad {
  constructor(context, scale) {
    this.vcos = [];

    this.gain = context.createGain();
    this.gain.gain.value = 0.6;

    this.vca = new __WEBPACK_IMPORTED_MODULE_0__vca__["a" /* default */](context);
    this.vca.connect(this.gain);

    this.envelope = new __WEBPACK_IMPORTED_MODULE_1__envelope__["a" /* default */](context, 3, 60);
    this.envelope.connect(this.vca.amplitude);

    this.output = this.gain;

    this.isMajor = true;
    this.setScale(scale);
    const chord = this.getChord();

    for (let i = 0; i < chord.length; i++) {
      const vco = new __WEBPACK_IMPORTED_MODULE_2__vco__["a" /* default */](context, 'sine', i > 0 ? 0.2 : 1);
      vco.connect(this.vca);
      vco.setFrequency(chord[i]);
      this.vcos.push(vco);
    }

    this.envelope.trigger();
  }

  setScale(scale) {
    this.scale = scale;
    this.setFrequencies();
    this.envelope.trigger();
  }

  getChord() {
    return [this.isMajor ? this.scale.stepToFrequency(0) / 2 : this.scale.stepToFrequency(6) / 4, this.isMajor ? this.scale.stepToFrequency(0) : this.scale.stepToFrequency(6) / 2, this.scale.stepToFrequency(this.isMajor ? 2 : 0), this.scale.stepToFrequency(this.isMajor ? 4 : 2), this.scale.stepToFrequency(this.isMajor ? 7 : 5)];
  }

  setFrequencies() {
    const chord = this.getChord();
    this.vcos.forEach((vco, i) => {
      vco.setFrequency(chord[i]);
    });
  }

  connect(node) {
    if (node.input) {
      this.output.connect(node.input);
    } else {
      this.output.connect(node);
    }
  }

  setAlternate(alt) {
    if (this.isMajor !== alt) {
      this.isMajor = !this.isMajor;
      this.setFrequencies();
    }
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Pad;


/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class UI {
  constructor(composer) {
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

  toggleSound() {
    if (this.isMuted) {
      this.composer.unmute();
      this.toggleSoundNode.innerHTML = '<i class="fa fa-volume-up"></i> mute';
    } else {
      this.composer.mute();
      this.toggleSoundNode.innerHTML = '<i class="fa fa-fw fa-volume-off"></i> unmute';
    }

    this.isMuted = !this.isMuted;
  }

  toggleHelp() {
    if (this.helpTimer === null) {
      this.helpNode.style.transition = '.5s opacity ease-in-out';
      this.helpNode.style.opacity = 1;
      this.helpTimer = setTimeout(this.hideHelp, 5000);
    } else {
      clearTimeout(this.helpTimer);
      this.hideHelp();
    }
  }

  hideHelp() {
    this.helpNode.style.transition = '2s opacity ease-in-out';
    this.helpNode.style.opacity = 0;
    this.helpTimer = null;
  }

  setLevel(number) {
    this.levelNumberNode.innerHTML = number;
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = UI;


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
//# sourceMappingURL=main.4c41f7f1fd3c8c36f901.js.map