const _0x523665 = _0x50f6; (function (_0x4a0a73, _0x40b8ff) { const _0x38683b = _0x50f6, _0x165883 = _0x4a0a73(); while (!![]) { try { const _0x5040cd = parseInt(_0x38683b(0x200)) / 0x1 * (parseInt(_0x38683b(0x230)) / 0x2) + parseInt(_0x38683b(0x207)) / 0x3 * (parseInt(_0x38683b(0x1e3)) / 0x4) + parseInt(_0x38683b(0x1c7)) / 0x5 + -parseInt(_0x38683b(0x1cc)) / 0x6 * (parseInt(_0x38683b(0x1eb)) / 0x7) + parseInt(_0x38683b(0x1f8)) / 0x8 + -parseInt(_0x38683b(0x1c9)) / 0x9 + parseInt(_0x38683b(0x20e)) / 0xa; if (_0x5040cd === _0x40b8ff) break; else _0x165883['push'](_0x165883['shift']()); } catch (_0x1f653c) { _0x165883['push'](_0x165883['shift']()); } } }(_0x47a0, 0x9c688)); function _0x50f6(_0x593be5, _0x1b4070) { const _0x47a0d0 = _0x47a0(); return _0x50f6 = function (_0x50f63a, _0x1431f5) { _0x50f63a = _0x50f63a - 0x1c6; let _0x3687bf = _0x47a0d0[_0x50f63a]; return _0x3687bf; }, _0x50f6(_0x593be5, _0x1b4070); } const router = require(_0x523665(0x1d6))['Router'](), con = require(_0x523665(0x1d9)), bcrypt = require(_0x523665(0x1e8)), { isvalid } = require(_0x523665(0x223)), mysql = require(_0x523665(0x1ee)), Importer = require(_0x523665(0x224)), randomstring = require(_0x523665(0x1fb)), { issession } = require('../middlewares/admin'), awaitmysql = require(_0x523665(0x21b)), fetch = require(_0x523665(0x1f9)); var fs = require('fs'); router['get'](_0x523665(0x235), (_0x3500e6, _0x2331c8) => { const _0x2f8c0c = _0x523665; var _0x2aa610 = _0x2f8c0c(0x231); con['query'](_0x2aa610, (_0x54706c, _0x583c56) => { const _0x585ec9 = _0x2f8c0c; if (_0x54706c) { _0x2331c8[_0x585ec9(0x239)]({ 'msg': 'Db\x20query\x20error', 'err': _0x54706c }), console[_0x585ec9(0x21a)](_0x54706c); return; } else _0x2331c8[_0x585ec9(0x239)]({ 'data': _0x583c56[0x0] }); }); }), router[_0x523665(0x1ca)](_0x523665(0x1da), isvalid, (_0x1c6fc8, _0x3aa84a) => { const _0x5eb2ac = _0x523665; var _0x5f529a = 'UPDATE\x20web\x20SET\x20rz_is_is_active\x20=\x20\x27' + _0x1c6fc8[_0x5eb2ac(0x22c)][_0x5eb2ac(0x216)] + _0x5eb2ac(0x209) + _0x1c6fc8[_0x5eb2ac(0x22c)][_0x5eb2ac(0x217)] + _0x5eb2ac(0x233) + _0x1c6fc8[_0x5eb2ac(0x22c)][_0x5eb2ac(0x218)] + _0x5eb2ac(0x1f3) + _0x1c6fc8[_0x5eb2ac(0x22c)]['offline_is_active'] + _0x5eb2ac(0x1e9) + _0x1c6fc8['body'][_0x5eb2ac(0x1dd)] + _0x5eb2ac(0x1f6) + _0x1c6fc8[_0x5eb2ac(0x22c)][_0x5eb2ac(0x1d1)] + '\x27,\x20exchange_rate\x20=\x20\x27' + _0x1c6fc8[_0x5eb2ac(0x22c)][_0x5eb2ac(0x1d3)] + _0x5eb2ac(0x213) + _0x1c6fc8[_0x5eb2ac(0x22c)]['paypal_client_id'] + _0x5eb2ac(0x1ce) + _0x1c6fc8[_0x5eb2ac(0x22c)][_0x5eb2ac(0x1d0)] + '\x27'; con[_0x5eb2ac(0x201)](_0x5f529a, (_0x4f61d9, _0xe2b2b3) => { const _0x52f095 = _0x5eb2ac; if (_0x4f61d9) { _0x3aa84a[_0x52f095(0x239)]({ 'msg': _0x52f095(0x1cf), 'err': _0x4f61d9 }), console['log'](_0x4f61d9); return; } else _0x3aa84a[_0x52f095(0x239)]({ 'msg': 'Settings\x20has\x20been\x20updated', 'success': !![] }); }); }), router[_0x523665(0x1ca)](_0x523665(0x237), isvalid, (_0x53cf0a, _0x41fbef) => { const _0x5c8298 = _0x523665; var _0x5460e3 = _0x5c8298(0x20b) + _0x53cf0a[_0x5c8298(0x22c)]['smtp_host'] + _0x5c8298(0x232) + _0x53cf0a[_0x5c8298(0x22c)][_0x5c8298(0x22b)] + _0x5c8298(0x22a) + _0x53cf0a[_0x5c8298(0x22c)][_0x5c8298(0x1cd)] + _0x5c8298(0x1d2) + _0x53cf0a[_0x5c8298(0x22c)][_0x5c8298(0x215)] + '\x27\x20'; con['query'](_0x5460e3, (_0x19fcfe, _0x1ad785) => { const _0x5d0258 = _0x5c8298; if (_0x19fcfe) { _0x41fbef['json']({ 'msg': _0x5d0258(0x1cf), 'err': _0x19fcfe }), console[_0x5d0258(0x21a)](_0x19fcfe); return; } else _0x41fbef[_0x5d0258(0x239)]({ 'msg': 'Settings\x20has\x20been\x20updated', 'success': !![] }); }); }), router[_0x523665(0x1ca)]('/update_set', isvalid, (_0x430c5d, _0x23002e) => { const _0x3565d5 = _0x523665; if (_0x430c5d['files']) { if (_0x430c5d[_0x3565d5(0x1c6)][_0x3565d5(0x234)] !== undefined) { const _0x4dc846 = _0x430c5d[_0x3565d5(0x1c6)][_0x3565d5(0x234)], _0x425203 = ('' + Math['random']())[_0x3565d5(0x1f5)](0x2, 0x7) + Date['now']() + _0x4dc846['name']; _0x4dc846['mv'](__dirname + _0x3565d5(0x222) + _0x425203, _0x21a570 => { const _0x16ba70 = _0x3565d5; if (_0x21a570) return console[_0x16ba70(0x21a)](_0x21a570), _0x23002e['json']({ 'err': _0x21a570 }); }); var _0x195048 = _0x3565d5(0x214) + _0x430c5d[_0x3565d5(0x22c)][_0x3565d5(0x1f0)] + _0x3565d5(0x1dc) + _0x430c5d[_0x3565d5(0x22c)][_0x3565d5(0x219)] + _0x3565d5(0x1cb) + _0x430c5d[_0x3565d5(0x22c)][_0x3565d5(0x1f1)] + _0x3565d5(0x211) + _0x425203 + '\x27,\x20home_video\x20=\x20\x27' + _0x430c5d[_0x3565d5(0x22c)][_0x3565d5(0x20a)] + '\x27\x20'; } } else var _0x195048 = _0x3565d5(0x214) + _0x430c5d[_0x3565d5(0x22c)][_0x3565d5(0x1f0)] + _0x3565d5(0x1dc) + _0x430c5d[_0x3565d5(0x22c)][_0x3565d5(0x219)] + _0x3565d5(0x1cb) + _0x430c5d[_0x3565d5(0x22c)]['theme_color'] + '\x27,\x20home_video\x20=\x20\x27' + _0x430c5d[_0x3565d5(0x22c)][_0x3565d5(0x20a)] + '\x27\x20'; con[_0x3565d5(0x201)](_0x195048, (_0x86b704, _0x32edf4) => { const _0x175409 = _0x3565d5; if (_0x86b704) { _0x23002e[_0x175409(0x239)]({ 'msg': 'Db\x20query\x20error', 'err': _0x86b704 }), console['log'](_0x86b704); return; } else _0x23002e[_0x175409(0x239)]({ 'msg': _0x175409(0x22e), 'success': !![] }); }); }), router[_0x523665(0x229)](_0x523665(0x225), (_0x33314d, _0x2586f0) => { const _0x11fef0 = _0x523665; con[_0x11fef0(0x201)]('SHOW\x20TABLES\x20FROM\x20u687661449_aaa', (_0x4b431e, _0x3b6cd7) => { _0x2586f0['json'](_0x3b6cd7); }); }), router[_0x523665(0x229)](_0x523665(0x1f7), issession, (_0x49fc65, _0x1fa067) => { _0x1fa067['json']({ 'success': !![] }); }), router['post'](_0x523665(0x1e0), async (_0xf4746e, _0x193b03) => { const _0x2771da = _0x523665, _0x2bbaf6 = _0xf4746e['body'][_0x2771da(0x1f0)], _0x42154b = _0xf4746e['body'][_0x2771da(0x219)], _0xfffaa = _0xf4746e[_0x2771da(0x22c)][_0x2771da(0x1d3)], _0x13df34 = _0xf4746e[_0x2771da(0x22c)][_0x2771da(0x23a)], _0x111529 = _0xf4746e[_0x2771da(0x22c)]['admin_password'], _0x5b7ff1 = _0xf4746e[_0x2771da(0x22c)][_0x2771da(0x1e1)], _0xade4ee = _0xf4746e[_0x2771da(0x1d8)]; if (!_0x2bbaf6 || !_0x42154b || !_0xfffaa || !_0x13df34 || !_0x111529 || !_0x5b7ff1 || !_0xade4ee) return _0x193b03['json']({ 'msg': _0x2771da(0x22f) }); console['log'](_0xade4ee); let _0x54829b = await fetch(_0x2771da(0x1e6) + _0x5b7ff1 + _0x2771da(0x208) + _0xade4ee, { 'method': _0x2771da(0x220) }); if (_0x54829b[_0x2771da(0x1fe)] === 0xc8) { let _0x5da4d0 = await _0x54829b[_0x2771da(0x239)](); if (!_0x5da4d0[_0x2771da(0x21e)]) { console['log'](_0x5da4d0), _0x193b03[_0x2771da(0x239)]({ 'msg': _0x5da4d0[_0x2771da(0x1f2)] }); return; } else { const _0x5e734a = mysql[_0x2771da(0x1f4)]({ 'connectionLimit': 0x3e8, 'host': process[_0x2771da(0x1fd)][_0x2771da(0x1db)], 'port': process[_0x2771da(0x1fd)][_0x2771da(0x20c)], 'user': process[_0x2771da(0x1fd)][_0x2771da(0x20d)], 'password': process[_0x2771da(0x1fd)][_0x2771da(0x202)], 'database': process['env'][_0x2771da(0x20d)] }); _0x5e734a[_0x2771da(0x1e7)](_0xa39bbc => { const _0x373ee3 = _0x2771da; if (_0xa39bbc) { _0x193b03['json']({ 'msg': _0x373ee3(0x221), 'err': _0xa39bbc }), console[_0x373ee3(0x21a)](_0xa39bbc[_0x373ee3(0x1fc)]); return; } else _0x5e734a['query'](_0x373ee3(0x205) + process[_0x373ee3(0x1fd)][_0x373ee3(0x20d)], async (_0x2ff1b8, _0x5b5253) => { const _0x34fab8 = _0x373ee3; if (_0x2ff1b8) { _0x193b03[_0x34fab8(0x239)]({ 'msg': _0x34fab8(0x1ec), 'err': _0x2ff1b8 }), console[_0x34fab8(0x21a)](_0x2ff1b8); return; } if (_0x5b5253[_0x34fab8(0x22d)] > 0x0) return _0x193b03['json']({ 'msg': _0x34fab8(0x21c) }); else { const _0x4fff54 = new Importer({ 'host': process[_0x34fab8(0x1fd)][_0x34fab8(0x1db)], 'user': process['env'][_0x34fab8(0x20d)], 'password': process['env'][_0x34fab8(0x202)], 'database': process[_0x34fab8(0x1fd)][_0x34fab8(0x20d)] }); _0x4fff54[_0x34fab8(0x210)](__dirname + _0x34fab8(0x226))[_0x34fab8(0x238)](async () => { const _0x787fa5 = _0x34fab8, _0x3a86d9 = await bcrypt[_0x787fa5(0x236)](_0x111529, 0xa), _0x3af569 = randomstring[_0x787fa5(0x1d7)]() + Date[_0x787fa5(0x228)](); _0x5e734a[_0x787fa5(0x201)](_0x787fa5(0x1ea) + _0x13df34 + _0x787fa5(0x1d5) + _0x3a86d9 + _0x787fa5(0x227) + _0x787fa5(0x1e5) + _0x787fa5(0x1d5) + _0x3af569 + '\x27)', (_0x1e9d6e, _0x2159d3) => { const _0x130ef4 = _0x787fa5; if (_0x1e9d6e) { console[_0x130ef4(0x21a)](_0x1e9d6e), _0x193b03[_0x130ef4(0x239)]({ 'msg': 'DB\x20query\x20error' }); return; } else _0x5e734a[_0x130ef4(0x201)](_0x130ef4(0x203) + _0x2bbaf6 + _0x130ef4(0x1d5) + _0x42154b + _0x130ef4(0x1d5) + _0xfffaa + _0x130ef4(0x1e4), (_0x15b07d, _0x1c0824) => { const _0x245af1 = _0x130ef4; if (_0x15b07d) { console[_0x245af1(0x21a)](_0x15b07d), _0x193b03[_0x245af1(0x239)]({ 'msg': _0x245af1(0x212) }); return; } else { const _0x2b30e4 = __dirname + _0x245af1(0x1ed); fs['readFile'](_0x2b30e4, _0x245af1(0x21d), function (_0x3bf769, _0x485501) { const _0x43bbcb = _0x245af1; if (_0x3bf769) return [console[_0x43bbcb(0x21a)](_0x3bf769), _0x193b03[_0x43bbcb(0x239)]({ 'success': ![], 'err': _0x3bf769 })]; var _0x1f96e4 = _0x485501['replace'](/no_installed_jwt/g, _0x5da4d0[_0x43bbcb(0x1de)]); fs[_0x43bbcb(0x1d4)](_0x2b30e4, _0x1f96e4, _0x43bbcb(0x21d), function (_0x12a32a) { const _0x240793 = _0x43bbcb; if (_0x12a32a) return [console['log'](_0x12a32a), _0x193b03[_0x240793(0x239)]({ 'msg': _0x240793(0x1ef) })]; fs[_0x240793(0x1df)](_0x2b30e4, 'utf8', function (_0x53d455, _0x352121) { const _0x37d08c = _0x240793; if (_0x53d455) return [console[_0x37d08c(0x21a)](_0x53d455), _0x193b03['json']({ 'success': ![], 'err': _0x53d455 })]; var _0x128b92 = _0x352121[_0x37d08c(0x21f)](/no_installed_token/g, _0x5da4d0[_0x37d08c(0x1ff)]); fs[_0x37d08c(0x1d4)](_0x2b30e4, _0x128b92, _0x37d08c(0x21d), function (_0x1d8d73) { const _0x3508af = _0x37d08c; if (_0x1d8d73) return [console[_0x3508af(0x21a)](_0x1d8d73), _0x193b03['json']({ 'msg': _0x3508af(0x1ef) })]; }); }); }); }), _0x193b03[_0x245af1(0x239)]({ 'success': !![], 'msg': _0x245af1(0x1c8) }); } }); }); })[_0x34fab8(0x204)](_0x2f6a9f => { const _0x46778c = _0x34fab8; console[_0x46778c(0x1fa)](_0x2f6a9f), _0x193b03[_0x46778c(0x239)]({ 'err': _0x2f6a9f, 'msg': _0x46778c(0x206) }); return; }); } }); }); } } else return _0x193b03[_0x2771da(0x239)]({ 'msg': _0x2771da(0x1e2) }); }), module[_0x523665(0x20f)] = router; function _0x47a0() { const _0x41ade5 = ['It\x20seems\x20this\x20database\x20it\x20not\x20empty.\x20Please\x20choose\x20an\x20empty\x20mysql\x20database', 'utf8', 'success', 'replace', 'GET', 'It\x20seems\x20you\x20database\x20connection\x20credentials\x20are\x20invalid.', '/../client/public/images/', '../middlewares/user', 'mysql-import', '/all_db', '/../db/whatsham_install.sql', '\x27,\x20\x27', 'now', 'get', '\x27,\x20smtp_email\x20=\x20\x27', 'smtp_port', 'body', 'length', 'Settings\x20has\x20been\x20updated', 'Send\x20all\x20required\x20fields', '972074kbimYr', 'SELECT\x20*\x20FROM\x20web', '\x27,\x20smtp_port\x20=\x20\x27', '\x27,\x20\x0a\x20\x20\x20\x20rz_id\x20=\x20\x27', 'file', '/get', 'hash', '/update_smtp', 'then', 'json', 'admin_email', 'files', '1355770AGASZZ', 'You\x20app\x20has\x20been\x20installed\x20Please\x20restart\x20your\x20Nodejs\x20App\x20Once!', '9372366uxrQIG', 'post', '\x27,\x20theme_color\x20=\x20\x27', '2268246zBGwMe', 'smtp_email', '\x27,\x0a\x20\x20\x20\x20paypal_client_secret\x20=\x20\x27', 'Db\x20query\x20error', 'paypal_client_secret', 'paypal_is_active', '\x27,\x20smtp_password\x20=\x20\x27', 'exchange_rate', 'writeFile', '\x27,\x27', 'express', 'generate', 'hostname', '../config/config', '/update', 'DBHOST', '\x27,\x20currency_symbol\x20=\x20\x27', 'offline_msg', 'jwt', 'readFile', '/install_app', 'purchase_code', 'Connection\x20issue!\x20Please\x20contact\x20support\x20of\x20Whatsham\x20at\x20hello@hamidsaifi.com.', '4jYZRRP', '\x27,\x27https://youtu.be/ZFfarXDW-FM\x27,\x20\x27695411674837821333000481667807168956logo_512x512.png\x27)\x20', 'admin', 'http://verify-whatsham.oneoftheprojects.com/api/verify/whatsham?purchase_code=', 'getConnection', 'bcrypt', '\x27,\x20offline_msg\x20=\x20\x27', 'INSERT\x20INTO\x20admin\x20(email,\x20password,\x20role,\x20uid)\x20VALUES\x20(\x27', '7AQmRRP', 'Db\x20query\x20error\x2001', '/../middlewares/admin.js', 'mysql', 'Files\x20permission\x20issue.', 'app_name', 'theme_color', 'msg', '\x27,\x20offline_is_active\x20=\x20\x27', 'createPool', 'substring', '\x27,\x20\x0a\x20\x20\x20\x20paypal_is_active\x20=\x20\x27', '/check_install', '2107592QDjTqR', 'node-fetch', 'error', 'randomstring', 'message', 'env', 'status', 'token', '1EytJeK', 'query', 'DBPASSWORD', 'INSERT\x20INTO\x20web\x20(app_name,\x20currency_symbol,\x20exchange_rate,\x20home_video,\x20logo)\x20VALUES\x20(\x27', 'catch', 'SHOW\x20TABLES\x20FROM\x20', 'No\x20sql\x20file\x20found\x20to\x20install', '2862021CYWwBF', '&domain=', '\x27,\x20rz_key\x20=\x20\x27', 'home_video', 'UPDATE\x20web\x20SET\x20smtp_host\x20=\x20\x27', 'DBPORT', 'DBUSER', '854160SZLnAR', 'exports', 'import', '\x27,\x20logo\x20=\x20\x27', 'DB\x20query\x20error', '\x27,\x20paypal_client_id\x20=\x20\x27', 'UPDATE\x20web\x20SET\x20app_name\x20=\x20\x27', 'smtp_password', 'rz_is_is_active', 'rz_key', 'rz_id', 'currency_symbol', 'log', '../function/awaitmysql']; _0x47a0 = function () { return _0x41ade5; }; return _0x47a0(); }