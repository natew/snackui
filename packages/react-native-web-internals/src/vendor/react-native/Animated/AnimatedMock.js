/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 *
 * @format
 */
'use strict'

import { AnimatedEvent, attachNativeEvent } from './AnimatedEvent.js'
import AnimatedImplementation from './AnimatedImplementation.js'
import createAnimatedComponent from './createAnimatedComponent.js'
import AnimatedInterpolation from './nodes/AnimatedInterpolation.js'
import AnimatedNode from './nodes/AnimatedNode.js'
import AnimatedProps from './nodes/AnimatedProps.js'
import AnimatedValue from './nodes/AnimatedValue.js'
import AnimatedValueXY from './nodes/AnimatedValueXY.js'
var emptyAnimation = {
  start: () => {},
  stop: () => {},
  reset: () => {},
  _startNativeLoop: () => {},
  _isUsingNativeDriver: () => {
    return false
  },
}

var spring = function spring(value, config) {
  var anyValue = value
  return {
    ...emptyAnimation,
    start: (callback) => {
      anyValue.setValue(config.toValue)
      callback &&
        callback({
          finished: true,
        })
    },
  }
}

var timing = function timing(value, config) {
  var anyValue = value
  return {
    ...emptyAnimation,
    start: (callback) => {
      anyValue.setValue(config.toValue)
      callback &&
        callback({
          finished: true,
        })
    },
  }
}

var decay = function decay(value, config) {
  return emptyAnimation
}

var sequence = function sequence(animations) {
  return emptyAnimation
}

var parallel = function parallel(animations, config) {
  return emptyAnimation
}

var delay = function delay(time) {
  return emptyAnimation
}

var stagger = function stagger(time, animations) {
  return emptyAnimation
}

var loop = function loop(animation, _temp) {
  var _ref = _temp === void 0 ? {} : _temp,
    _ref$iterations = _ref.iterations,
    iterations = _ref$iterations === void 0 ? -1 : _ref$iterations

  return emptyAnimation
}

var event = function event(argMapping, config) {
  return null
}

export default {
  Value: AnimatedValue,
  ValueXY: AnimatedValueXY,
  Interpolation: AnimatedInterpolation,
  Node: AnimatedNode,
  decay,
  timing,
  spring,
  add: AnimatedImplementation.add,
  subtract: AnimatedImplementation.subtract,
  divide: AnimatedImplementation.divide,
  multiply: AnimatedImplementation.multiply,
  modulo: AnimatedImplementation.modulo,
  diffClamp: AnimatedImplementation.diffClamp,
  delay,
  sequence,
  parallel,
  stagger,
  loop,
  event,
  createAnimatedComponent,
  attachNativeEvent,
  forkEvent: AnimatedImplementation.forkEvent,
  unforkEvent: AnimatedImplementation.unforkEvent,
  Event: AnimatedEvent,
  __PropsOnlyForTests: AnimatedProps,
}
