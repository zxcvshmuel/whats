const _0x4b4d05 = _0x174e; (function (_0x30f078, _0x28a6ca) { const _0x1b2c12 = _0x174e, _0x188820 = _0x30f078(); while (!![]) { try { const _0x575490 = parseInt(_0x1b2c12(0x1cc)) / 0x1 * (-parseInt(_0x1b2c12(0x1ad)) / 0x2) + parseInt(_0x1b2c12(0x1c5)) / 0x3 + parseInt(_0x1b2c12(0x1dc)) / 0x4 + parseInt(_0x1b2c12(0x1c8)) / 0x5 * (parseInt(_0x1b2c12(0x1b4)) / 0x6) + -parseInt(_0x1b2c12(0x1db)) / 0x7 + -parseInt(_0x1b2c12(0x1b7)) / 0x8 + parseInt(_0x1b2c12(0x1d6)) / 0x9; if (_0x575490 === _0x28a6ca) break; else _0x188820['push'](_0x188820['shift']()); } catch (_0x1d038a) { _0x188820['push'](_0x188820['shift']()); } } }(_0x73a4, 0x4c6ee)); const { default: makeWASocket, DisconnectReason, useSingleFileAuthState } = require(_0x4b4d05(0x1b1)), awaitmysql = require(_0x4b4d05(0x1c7)), pino = require(_0x4b4d05(0x1ab)); var mime = require(_0x4b4d05(0x1d1)); const fs = require('fs'); async function run(_0x4db779, _0x1a3978) { const _0x5137ba = _0x4b4d05, _0x1a1a90 = _0x4db779[_0x5137ba(0x1b0)]?.[_0x5137ba(0x1e4)]?.[_0x5137ba(0x1d0)], _0x46c3ab = _0x4db779[_0x5137ba(0x1b0)][_0x5137ba(0x19f)][0x0], _0x2d4c85 = _0x4db779[_0x5137ba(0x1b0)]['delay'][0x1], _0xd745a8 = _0x4db779[_0x5137ba(0x1b0)]?.[_0x5137ba(0x19c)]?.['id'], _0x322f08 = _0x4db779[_0x5137ba(0x1b0)]?.[_0x5137ba(0x1af)], _0x2ab028 = _0x4db779[_0x5137ba(0x1b0)]?.[_0x5137ba(0x19c)], _0x14e9cc = _0x4db779['body']?.[_0x5137ba(0x1e2)]; if (!_0x46c3ab || !_0x2d4c85 || !_0x1a1a90 || !_0xd745a8 || !_0x322f08 || !_0x14e9cc || !_0x2ab028) return _0x1a3978[_0x5137ba(0x1ca)]({ 'msg': _0x5137ba(0x19e) }); if (_0x322f08?.[_0x5137ba(0x1ac)] > _0x4db779['plan']) return _0x1a3978[_0x5137ba(0x1ca)]({ 'msg': _0x5137ba(0x1c3) + _0x4db779[_0x5137ba(0x1c1)] + '\x20left\x20messages\x20and\x20you\x20are\x20trying\x20to\x20send\x20more\x20than\x20it.' }); const _0x1a1e83 = __dirname + _0x5137ba(0x1bc); console[_0x5137ba(0x1aa)]('started'); const _0x4a9918 = _0x1a1e83 + _0x1a1a90 + _0x5137ba(0x1a7); console[_0x5137ba(0x1aa)](_0x4a9918); if (_0x4a9918 === undefined || !_0x4a9918) return _0x1a3978[_0x5137ba(0x1ca)]({ 'msg': 'No\x20session\x20found\x20please\x20relogin\x20the\x20instance.' }); _0x1a3978[_0x5137ba(0x1ca)]({ 'msg': _0x5137ba(0x1da), 'success': !![] }), await awaitmysql[_0x5137ba(0x1a0)](_0x5137ba(0x1a6) + _0x14e9cc + _0x5137ba(0x1e1) + _0x4db779['decode']['uid'] + _0x5137ba(0x1e1) + _0xd745a8 + _0x5137ba(0x1b5)); const { state: _0x45dc4f, saveState: _0x1ff38e } = useSingleFileAuthState(_0x1a1e83[_0x5137ba(0x1d9)](_0x1a1a90 + _0x5137ba(0x1a7))), _0x520c4f = makeWASocket({ 'auth': _0x45dc4f, 'defaultQueryTimeoutMs': undefined, 'logger': pino({ 'level': _0x5137ba(0x1cf) }), 'browser': [_0x5137ba(0x1ce), _0x5137ba(0x1bd), _0x5137ba(0x1ba)] }); let _0x49c3c9 = 0x0, _0x1cd7fa = []; function _0x2f4cee(_0x15961b) { return new Promise((_0x3a3dbf, _0x26da28) => { setTimeout(() => { _0x3a3dbf(); }, [_0x15961b]); }); } function _0xa92c7e(_0x40f5ed, _0x2a2c01) { const _0xd6031b = _0x5137ba; return Math[_0xd6031b(0x1a3)](Math[_0xd6031b(0x1bb)]() * (_0x2a2c01 - _0x40f5ed + 0x1) + _0x40f5ed); } _0x520c4f['ev']['on'](_0x5137ba(0x1b6), async _0x4ea0c8 => { const _0x3a8cc6 = _0x5137ba, { connection: _0x2dd30d, lastDisconnect: _0x44ec4a, qr: _0x1e59f0, isNewLogin: _0x115489 } = _0x4ea0c8; console['log'](_0x2dd30d); if (_0x2dd30d === 'close') { let _0x551d15 = _0x44ec4a[_0x3a8cc6(0x1a2)]?.[_0x3a8cc6(0x1b3)]?.[_0x3a8cc6(0x1a4)]; console[_0x3a8cc6(0x1aa)]({ 'statusCode': _0x551d15 }); if (_0x551d15 === DisconnectReason[_0x3a8cc6(0x1e0)] || _0x551d15 === DisconnectReason[_0x3a8cc6(0x1b9)] || _0x551d15 === DisconnectReason[_0x3a8cc6(0x1d5)] || _0x551d15 === DisconnectReason[_0x3a8cc6(0x1dd)]) { await awaitmysql[_0x3a8cc6(0x1a0)](_0x3a8cc6(0x19d) + _0x14e9cc + '\x27\x20'), await awaitmysql[_0x3a8cc6(0x1a0)](_0x3a8cc6(0x1de) + _0x1a1a90 + '\x27\x20'); var _0x86b7e9 = __dirname + '/../../sessions/' + _0x1a1a90 + _0x3a8cc6(0x1a7); _0x86b7e9 && fs[_0x3a8cc6(0x1a5)](_0x86b7e9); _0x520c4f['end'](); return; } } async function _0x4dfc58() { const _0x50af3d = _0x3a8cc6, _0x141d6e = await _0x2be539(_0x322f08[_0x50af3d(0x1d7)](',')[_0x49c3c9], _0x2ab028, _0x520c4f); _0x141d6e[_0x50af3d(0x1cb)] && _0x1cd7fa['push'](_0x141d6e['sent_number']); _0x49c3c9 += 0x1; const _0x12d80b = parseInt(_0xa92c7e(_0x46c3ab, _0x2d4c85)) * 0x3e8; await _0x2f4cee(_0x12d80b), console['log']({ 'i': _0x49c3c9, 'length': _0x322f08[_0x50af3d(0x1d7)](',')['length'] }); if (_0x49c3c9 < _0x322f08[_0x50af3d(0x1d7)](',')[_0x50af3d(0x1ac)]) { _0x4dfc58(); return; } console[_0x50af3d(0x1aa)]('task\x20done'), await awaitmysql[_0x50af3d(0x1a0)](_0x50af3d(0x1d4) + _0x14e9cc + '\x27\x20'); } _0x2dd30d === _0x3a8cc6(0x1ae) && _0x4dfc58(); }), _0x520c4f['ev']['on'](_0x5137ba(0x1bf), _0x1ff38e), console['log'](_0x5137ba(0x1a8)); function _0x2be539(_0x2e8431, _0x5656d1, _0x10a5ea) { return new Promise(async (_0x2ab92d, _0x36eb8f) => { const _0x87838f = _0x174e, _0x52a467 = await _0x10a5ea[_0x87838f(0x1d8)](_0x2e8431), _0xfa6086 = _0x2e8431; console[_0x87838f(0x1aa)]({ 'onwhatsapp': _0x52a467 }); var _0x2aedda = JSON[_0x87838f(0x1a1)](_0x2ab028?.['section']); if (_0x52a467[0x0]?.[_0x87838f(0x1c0)]) { const _0xb228ee = { 'text': _0x5656d1['text'], 'footer': _0x5656d1[_0x87838f(0x1c4)], 'title': _0x5656d1[_0x87838f(0x1be)], 'buttonText': _0x5656d1['buttonText'], 'sections': _0x2aedda }; _0x10a5ea[_0x87838f(0x1df)](_0x52a467[0x0]?.['jid'], _0xb228ee), console['log']({ 'status': _0x87838f(0x1c9), 'number': _0x2e8431 }); const _0x34b19d = await awaitmysql['query'](_0x87838f(0x1cd) + _0x4db779[_0x87838f(0x1a9)]['uid'] + '\x27\x20'); if (_0x34b19d[_0x87838f(0x1ac)] > 0x0 || _0x34b19d[0x0][_0x87838f(0x1e3)]) { var _0x1b431d = parseInt(_0x34b19d[0x0][_0x87838f(0x1e3)]) - 0x1; await awaitmysql[_0x87838f(0x1a0)](_0x87838f(0x1d3) + _0x1b431d + '\x27)\x20'); } const _0xbf42e8 = await awaitmysql[_0x87838f(0x1a0)](_0x87838f(0x1c6) + _0x14e9cc + '\x27\x20'); var _0x348432 = []; _0xbf42e8[0x0]?.[_0x87838f(0x1c9)] ? (_0x348432 = JSON[_0x87838f(0x1a1)](_0xbf42e8[0x0]?.[_0x87838f(0x1c9)]), _0x348432 = _0x348432[_0x87838f(0x1d9)](_0x2e8431), _0x348432 = JSON['stringify'](_0x348432)) : _0x348432 = JSON[_0x87838f(0x1b2)]([_0x2e8431]); await awaitmysql[_0x87838f(0x1a0)](_0x87838f(0x1b8) + _0x348432 + _0x87838f(0x1d2) + _0x14e9cc + '\x27\x20'), _0x2ab92d({ 'sent_number': _0x2e8431 }); return; } else console[_0x87838f(0x1aa)](_0x2e8431, _0x87838f(0x1c2)), _0x2ab92d({ 'sent_number': ![] }); }); } } exports['run'] = run; function _0x174e(_0x40ff5a, _0x43f077) { const _0x73a495 = _0x73a4(); return _0x174e = function (_0x174ec5, _0x470111) { _0x174ec5 = _0x174ec5 - 0x19c; let _0x37faa0 = _0x73a495[_0x174ec5]; return _0x37faa0; }, _0x174e(_0x40ff5a, _0x43f077); } function _0x73a4() { const _0x1a29e1 = ['409688qphuul', 'badSession', 'DELETE\x20FROM\x20instance\x20WHERE\x20client_id\x20=\x20\x27', 'sendMessage', 'connectionClosed', '\x27,\x27', 'unique_id', 'left_msg', 'instance', 'list_templet', 'UPDATE\x20campaign\x20SET\x20status\x20=\x20\x27failed\x20due\x20to\x20logout\x27\x20WHERE\x20unique_id\x20=\x20\x27', 'Send\x20all\x20required\x20fields\x20', 'delay', 'query', 'parse', 'error', 'floor', 'statusCode', 'unlinkSync', 'INSERT\x20INTO\x20campaign\x20(unique_id,\x20uid,\x20templet_id,\x20status,\x20type)\x20VALUES\x20\x20(\x27', '.json', 'cre\x20updated', 'decode', 'log', 'pino', 'length', '14xvhQCM', 'open', 'number_data', 'body', '@adiwajshing/baileys', 'stringify', 'output', '6KIOBrD', '\x27,\x20\x27started\x27,\x20\x27list\x27)\x20', 'connection.update', '3166616DkQUXF', 'UPDATE\x20campaign\x20SET\x20sent\x20=\x20\x27', 'connectionLost', '1.0', 'random', '/../../sessions/', 'EDGE', 'title', 'creds.update', 'exists', 'plan', '\x20Mobile\x20number\x20is\x20not\x20registered', 'You\x20have\x20only\x20', 'footer', '1098765kspDKG', 'SELECT\x20*\x20FROM\x20campaign\x20WHERE\x20unique_id\x20=\x20\x27', '../../function/awaitmysql', '1981555yTHnVd', 'sent', 'json', 'sent_number', '13654ynAWvg', 'SELECT\x20*\x20FROM\x20user\x20WHERE\x20uid\x20=\x20\x27', 'FFA', 'fatal', 'client_id', 'mime-types', '\x27\x20WHERE\x20unique_id\x20=\x20\x27', 'UPDATE\x20user\x20SET\x20left_msg\x20=\x20(\x27', 'UPDATE\x20campaign\x20SET\x20status\x20=\x20\x27completed\x27\x20WHERE\x20unique_id\x20=\x20\x27', 'loggedOut', '2352987cyWNJW', 'split', 'onWhatsApp', 'concat', 'Request\x20has\x20been\x20sent\x20check\x20status\x20in\x20campaign\x20history.', '2253692KHOvie']; _0x73a4 = function () { return _0x1a29e1; }; return _0x73a4(); }