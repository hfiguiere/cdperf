"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _chunkB7U5N3UTjs = require('./chunk-B7U5N3UT.js');var _chunkBNLEE57Mjs = require('./chunk-BNLEE57M.js');var t=_chunkBNLEE57Mjs.a.call(void 0, _chunkBNLEE57Mjs.d.call(void 0, ));var a={...(0,t.omit)(_chunkB7U5N3UTjs.a,"iterations","duration"),scenarios:{create_remove_group_share_090:{executor:"ramping-vus",startVUs:0,exec:"create_remove_group_share_090",env:{SLEEP_AFTER_ITERATION:_chunkBNLEE57Mjs.e.call(void 0, "TEST_KOKO_PLATFORM_090_RAMPING_SLEEP_AFTER_ITERATION","60s")},stages:[{target:parseInt(_chunkBNLEE57Mjs.e.call(void 0, "TEST_KOKO_PLATFORM_090_RAMPING_STAGES_VUS","250"),10),duration:_chunkBNLEE57Mjs.e.call(void 0, "TEST_KOKO_PLATFORM_090_RAMPING_STAGES_UP_DURATION","20m")},{target:parseInt(_chunkBNLEE57Mjs.e.call(void 0, "TEST_KOKO_PLATFORM_090_RAMPING_STAGES_VUS","250"),10),duration:_chunkBNLEE57Mjs.e.call(void 0, "TEST_KOKO_PLATFORM_090_RAMPING_STAGES_PEAK_DURATION","30m")},{target:0,duration:_chunkBNLEE57Mjs.e.call(void 0, "TEST_KOKO_PLATFORM_090_RAMPING_STAGES_DOWN_DURATION","10m")}]}}};exports.a = a;
