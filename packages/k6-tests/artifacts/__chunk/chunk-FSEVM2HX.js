"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _chunkIGHYHJ4Xjs = require('./chunk-IGHYHJ4X.js');var _chunkA7YP6BZQjs = require('./chunk-A7YP6BZQ.js');var t=_chunkA7YP6BZQjs.a.call(void 0, _chunkA7YP6BZQjs.d.call(void 0, ));var a={...(0,t.omit)(_chunkIGHYHJ4Xjs.a,"iterations","duration"),scenarios:{create_remove_group_share_090:{executor:"ramping-vus",startVUs:0,exec:"create_remove_group_share_090",env:{SLEEP_AFTER_ITERATION:_chunkA7YP6BZQjs.e.call(void 0, "TEST_KOKO_PLATFORM_090_RAMPING_SLEEP_AFTER_ITERATION","60s")},stages:[{target:parseInt(_chunkA7YP6BZQjs.e.call(void 0, "TEST_KOKO_PLATFORM_090_RAMPING_STAGES_VUS","250"),10),duration:_chunkA7YP6BZQjs.e.call(void 0, "TEST_KOKO_PLATFORM_090_RAMPING_STAGES_UP_DURATION","20m")},{target:parseInt(_chunkA7YP6BZQjs.e.call(void 0, "TEST_KOKO_PLATFORM_090_RAMPING_STAGES_VUS","250"),10),duration:_chunkA7YP6BZQjs.e.call(void 0, "TEST_KOKO_PLATFORM_090_RAMPING_STAGES_PEAK_DURATION","30m")},{target:0,duration:_chunkA7YP6BZQjs.e.call(void 0, "TEST_KOKO_PLATFORM_090_RAMPING_STAGES_DOWN_DURATION","10m")}]}}};exports.a = a;
