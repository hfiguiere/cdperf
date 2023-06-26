"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; } function _optionalChain(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) { return undefined; } if (op === 'access' || op === 'optionalAccess') { lastAccessLHS = value; value = fn(value); } else if (op === 'call' || op === 'optionalCall') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; }var _chunkA7YP6BZQjs = require('./__chunk/chunk-A7YP6BZQ.js');var A=_chunkA7YP6BZQjs.a.call(void 0, _chunkA7YP6BZQjs.d.call(void 0, ));var _k6 = require('k6');var _crypto = require('k6/crypto');var _encoding = require('k6/encoding');var _execution = require('k6/execution'); var _execution2 = _interopRequireDefault(_execution);var P={..._chunkA7YP6BZQjs.s.call(void 0, )},z= exports.options ={vus:1,insecureSkipTLSVerify:!0};function ce(){let w=_chunkA7YP6BZQjs.u.call(void 0, {userLogin:P.admin.login,userPassword:P.admin.password});return{actorData:(0,A.times)(z.vus||1,()=>{let[m,b]=[_chunkA7YP6BZQjs.f.call(void 0, ),_chunkA7YP6BZQjs.f.call(void 0, )],$=w.user.createUser({userLogin:m,userPassword:b}),[l]=_chunkA7YP6BZQjs.k.call(void 0, "$.id",$.body);w.user.enableUser({userLogin:m});let s=_chunkA7YP6BZQjs.u.call(void 0, {userLogin:m,userPassword:b}).me.getMyDrives({params:{$filter:"driveType eq 'personal'"}}),[O=m]=_chunkA7YP6BZQjs.k.call(void 0, "$.value[?(@.driveType === 'personal')].id",_optionalChain([s, 'optionalAccess', _2 => _2.body]));return{actorLogin:m,actorPassword:b,actorId:l,actorRoot:O}})}}async function K({actorData:w}){let u={..._chunkA7YP6BZQjs.g.call(void 0, _chunkA7YP6BZQjs.s.call(void 0, ).platform.type)},{actorLogin:m,actorPassword:b,actorId:$,actorRoot:l}=w[_execution2.default.vu.idInTest-1],s=await _chunkA7YP6BZQjs.m.call(void 0, m).setOrGet("client",async()=>_chunkA7YP6BZQjs.u.call(void 0, {userLogin:m,userPassword:b}));_chunkA7YP6BZQjs.i.call(void 0, "client.me.*",()=>{let n=s.me.getMyProfile();_chunkA7YP6BZQjs.j.call(void 0, {skip:u.isOwnCloudServer||u.isNextcloud,val:n},{"test -> me.getMyProfile - displayName - match":r=>{let[t]=_chunkA7YP6BZQjs.k.call(void 0, "displayName",_optionalChain([r, 'optionalAccess', _3 => _3.body]));return t===m}});let e=s.me.getMyDrives({params:{$filter:"driveType eq 'personal'"}});_chunkA7YP6BZQjs.j.call(void 0, {skip:u.isOwnCloudServer||u.isNextcloud,val:e},{"test -> me.getMyDrives - personal - match":r=>{let[t]=_chunkA7YP6BZQjs.k.call(void 0, "$.value[?(@.driveType === 'personal')].id",_optionalChain([r, 'optionalAccess', _4 => _4.body]));return t===l}})});let y=await _chunkA7YP6BZQjs.m.call(void 0, P.admin.login).setOrGet("client",async()=>_chunkA7YP6BZQjs.u.call(void 0, {userLogin:P.admin.login,userPassword:P.admin.password})),E=_chunkA7YP6BZQjs.i.call(void 0, "client.group.*",n=>{let e=_chunkA7YP6BZQjs.f.call(void 0, ),r=y.group.createGroup({groupName:e});_chunkA7YP6BZQjs.j.call(void 0, {skip:u.isOwnCloudServer||u.isNextcloud,val:r},{"test -> group.createGroup - displayName - match":({body:a})=>{let[R]=_chunkA7YP6BZQjs.k.call(void 0, "displayName",a);return R===e}});let[t]=_chunkA7YP6BZQjs.k.call(void 0, "id",r.body),c=t||e,o=_chunkA7YP6BZQjs.o.call(void 0, );return o.add(()=>{_chunkA7YP6BZQjs.i.call(void 0, n,()=>{y.group.deleteGroup({groupIdOrName:c})})}),{defer:o}}),q=_chunkA7YP6BZQjs.i.call(void 0, "client.application.*",()=>{let n=y.application.listApplications(),[e]=_chunkA7YP6BZQjs.k.call(void 0, "$.value[?(@.displayName === 'ownCloud Infinite Scale')].id",_optionalChain([n, 'optionalAccess', _5 => _5.body]));return{applicationId:e}});_chunkA7YP6BZQjs.i.call(void 0, "client.role.*",()=>{let n=y.role.getRoles(),[e]=_chunkA7YP6BZQjs.k.call(void 0, "$.bundles[?(@.name === 'spaceadmin')].id",_optionalChain([n, 'optionalAccess', _6 => _6.body])),r={principalId:$,appRoleId:e,resourceId:q.applicationId},t=y.role.addRoleToUser(r);_chunkA7YP6BZQjs.j.call(void 0, {skip:u.isOwnCloudServer||u.isNextcloud,val:t},{"test -> role.addRoleToUser - match":c=>{let o=Object.keys(r).map(a=>{let[R]=_chunkA7YP6BZQjs.k.call(void 0, a,_optionalChain([c, 'optionalAccess', _7 => _7.body]));return R===r[a]});return!!o.length&&o.every(Boolean)}})});let _=_chunkA7YP6BZQjs.i.call(void 0, "client.drive.*",n=>{let e=_chunkA7YP6BZQjs.f.call(void 0, ),r=s.drive.createDrive({driveName:e});_chunkA7YP6BZQjs.j.call(void 0, {skip:u.isOwnCloudServer||u.isNextcloud,val:r},{"test -> resource.createDrive - name - match":o=>{let[a]=_chunkA7YP6BZQjs.k.call(void 0, "name",_optionalChain([o, 'optionalAccess', _8 => _8.body]));return a===e}});let[t]=_chunkA7YP6BZQjs.k.call(void 0, "id",_optionalChain([r, 'optionalAccess', _9 => _9.body])),c=_chunkA7YP6BZQjs.o.call(void 0, );return c.add(()=>{_chunkA7YP6BZQjs.i.call(void 0, n,()=>{s.drive.deactivateDrive({driveId:t}),s.drive.deleteDrive({driveId:t})})}),{defer:c}}),g=_chunkA7YP6BZQjs.i.call(void 0, "client.resource.*",n=>{let e=_chunkA7YP6BZQjs.f.call(void 0, );s.resource.createResource({root:l,resourcePath:e});let r=_chunkA7YP6BZQjs.f.call(void 0, );s.resource.moveResource({root:l,fromResourcePath:e,toResourcePath:r});let t=_chunkA7YP6BZQjs.o.call(void 0, );t.add(()=>{_chunkA7YP6BZQjs.i.call(void 0, n,()=>{s.resource.deleteResource({root:l,resourcePath:r})})});let c=s.resource.getResourceProperties({root:l,resourcePath:r});_chunkA7YP6BZQjs.j.call(void 0, {val:c},{"test -> resource.getResourceProperties - path - match":({body:h})=>{let[S=""]=_chunkA7YP6BZQjs.l.call(void 0, "$..['d:href']",h);return S.endsWith(`${r}/`)}});let o=[r,`${_chunkA7YP6BZQjs.f.call(void 0, )}.txt`].join("/"),a=_crypto.randomBytes.call(void 0, 100);s.resource.uploadResource({root:l,resourceBytes:a,resourcePath:o});let R=s.resource.downloadResource({root:l,resourcePath:o});_chunkA7YP6BZQjs.j.call(void 0, {val:R},{"test -> resource.uploadResource and resource.downloadResource - bytes - match":({body:h})=>_encoding.b64encode.call(void 0, h.toString())===_encoding.b64encode.call(void 0, a)});let[N]=_chunkA7YP6BZQjs.l.call(void 0, "$..['oc:fileid']",c.body);return{defer:t,folderId:N,folderName:r}}),x=_chunkA7YP6BZQjs.i.call(void 0, "client.tag.*",n=>{let e=_chunkA7YP6BZQjs.f.call(void 0, ),r=s.tag.getTags(),[{"oc:id":t}={"oc:id":""}]=_chunkA7YP6BZQjs.l.call(void 0, `$..[?(@['oc:display-name'] === '${e}')]`,_optionalChain([r, 'optionalAccess', _10 => _10.body]));_chunkA7YP6BZQjs.j.call(void 0, {skip:!t,val:void 0},{"test -> tag.getTagsResponse - exists":()=>!!t});let c="";t||(c=(_optionalChain([s, 'access', _11 => _11.tag, 'access', _12 => _12.createTag, 'call', _13 => _13({tagName:e}), 'optionalAccess', _14 => _14.headers, 'access', _15 => _15["Content-Location"]])||"").split("/").pop()||""),_chunkA7YP6BZQjs.j.call(void 0, {skip:!c,val:void 0},{"test -> tag.createTag - created":()=>!!c});let o=t||c||e;s.tag.addTagToResource({tag:o,resourceId:g.folderId});let a=s.tag.getTagsForResource({root:l,resourceId:g.folderId,resourcePath:g.folderName}),R=h=>{let[S]=_chunkA7YP6BZQjs.l.call(void 0, "$..['oc:tags']",h),[j]=_chunkA7YP6BZQjs.l.call(void 0, `$..[?(@['oc:id'] === '${o}')]['oc:display-name']`,h);return S||j};_chunkA7YP6BZQjs.j.call(void 0, {val:R(a.body)},{"test -> tag.getTagsForResource - match":h=>h===e});let N=_chunkA7YP6BZQjs.o.call(void 0, );return N.add(()=>{_chunkA7YP6BZQjs.i.call(void 0, n,()=>{s.tag.removeTagFromResource({resourceId:g.folderId,tag:o});let h=s.tag.getTagsForResource({root:l,resourceId:g.folderId,resourcePath:g.folderName});_chunkA7YP6BZQjs.j.call(void 0, {val:R(h.body)},{"test -> tag.removeTagFromResource - removed":S=>!S}),y.tag.deleteTag({tag:o})})}),{defer:N,tagNameOrId:o}}),F=_chunkA7YP6BZQjs.i.call(void 0, "client.user.*",n=>{let[e,r]=[_chunkA7YP6BZQjs.f.call(void 0, ),_chunkA7YP6BZQjs.f.call(void 0, )];y.user.createUser({userLogin:e,userPassword:r});let t=_chunkA7YP6BZQjs.o.call(void 0, );t.add(()=>{_chunkA7YP6BZQjs.i.call(void 0, n,()=>{y.user.deleteUser({userLogin:e})})}),y.user.enableUser({userLogin:e});let c=_chunkA7YP6BZQjs.u.call(void 0, {userLogin:e,userPassword:r});return{userLogin:e,userClient:c,defer:t}}),W=_chunkA7YP6BZQjs.i.call(void 0, "client.search.*",()=>{let n=s.search.searchForSharees({searchQuery:F.userLogin,searchItemType:_chunkA7YP6BZQjs.q.folder}),[e]=_chunkA7YP6BZQjs.l.call(void 0, "$..shareWith",n.body);_chunkA7YP6BZQjs.j.call(void 0, {val:void 0},{"test -> search.searchForSharees - name - match":()=>e===F.userLogin});let r=(o,a)=>{let R=o.search.searchForResources({root:l,searchQuery:a}),[N]=_chunkA7YP6BZQjs.l.call(void 0, "$..['oc:fileid']",_optionalChain([R, 'optionalAccess', _16 => _16.body]));return!N?(_k6.sleep.call(void 0, 1),r(o,a)):R},t=r(s,g.folderName);_chunkA7YP6BZQjs.j.call(void 0, {val:t},{"test -> search.searchForResources - id - match":({body:o})=>{let[a]=_chunkA7YP6BZQjs.l.call(void 0, "$..['oc:fileid']",o);return a===g.folderId}});let c=s.search.searchForResourcesByTag({tag:x.tagNameOrId,root:l});return _chunkA7YP6BZQjs.j.call(void 0, {val:c},{"test -> search.searchForResourcesByTag - id - match":({body:o})=>{let[a]=_chunkA7YP6BZQjs.l.call(void 0, "$..['oc:fileid']",o);return a===g.folderId}}),{sharee:e}});[_chunkA7YP6BZQjs.i.call(void 0, "client.share.*",n=>{let e=s.share.createShare({shareReceiver:W.sharee,shareResourcePath:g.folderName,shareReceiverPermission:_chunkA7YP6BZQjs.r.all,shareType:_chunkA7YP6BZQjs.p.user}),[r]=_chunkA7YP6BZQjs.l.call(void 0, "ocs.data.id",e.body),t=F.userClient.share.acceptShare({shareId:r});_chunkA7YP6BZQjs.j.call(void 0, {skip:u.isNextcloud,val:t},{"test -> share.acceptShare - displayname_file_owner - match":({body:o})=>{let[a]=_chunkA7YP6BZQjs.l.call(void 0, "ocs.data.element.displayname_file_owner",o);return a===m},"test -> share.acceptShare - path - match":({body:o})=>{let[a=""]=_chunkA7YP6BZQjs.l.call(void 0, "ocs.data.element.path",o);return a.endsWith(g.folderName)}});let c=_chunkA7YP6BZQjs.o.call(void 0, );return c.add(()=>{_chunkA7YP6BZQjs.i.call(void 0, n,()=>{s.share.deleteShare({shareId:r})})}),{defer:c}}),F,x,g,_,E].forEach(({defer:n})=>{n.exec()})}function ie({actorData:w}){let u=_chunkA7YP6BZQjs.u.call(void 0, {userLogin:P.admin.login,userPassword:P.admin.password});w.forEach(({actorLogin:m})=>{u.user.deleteUser({userLogin:m})})}exports.default = K; exports.options = z; exports.setup = ce; exports.teardown = ie;
