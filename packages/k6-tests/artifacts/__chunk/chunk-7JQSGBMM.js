"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _chunkPUFNKFKZjs = require('./chunk-PUFNKFKZ.js');var _chunkA7YP6BZQjs = require('./chunk-A7YP6BZQ.js');var T=_chunkA7YP6BZQjs.a.call(void 0, _chunkA7YP6BZQjs.d.call(void 0, ));var n={...(0,T.omit)(_chunkPUFNKFKZjs.a,"iterations","duration"),scenarios:{sync_client_110:{executor:"ramping-vus",startVUs:0,exec:"sync_client_110",env:{SLEEP_AFTER_ITERATION:_chunkA7YP6BZQjs.e.call(void 0, "TEST_KOKO_PLATFORM_110_RAMPING_SLEEP_AFTER_ITERATION","30s")},stages:[{target:parseInt(_chunkA7YP6BZQjs.e.call(void 0, "TEST_KOKO_PLATFORM_110_RAMPING_STAGES_VUS","1000"),10),duration:_chunkA7YP6BZQjs.e.call(void 0, "TEST_KOKO_PLATFORM_110_RAMPING_STAGES_UP_DURATION","20m")},{target:parseInt(_chunkA7YP6BZQjs.e.call(void 0, "TEST_KOKO_PLATFORM_110_RAMPING_STAGES_VUS","1000"),10),duration:_chunkA7YP6BZQjs.e.call(void 0, "TEST_KOKO_PLATFORM_110_RAMPING_STAGES_PEAK_DURATION","30m")},{target:0,duration:_chunkA7YP6BZQjs.e.call(void 0, "TEST_KOKO_PLATFORM_110_RAMPING_STAGES_DOWN_DURATION","10m")}]}}};exports.a = n;
