const _0x4f8d01=_0x2f06;(function(_0x1bf9a3,_0x2ff561){const _0x287aad=_0x2f06,_0x5713b5=_0x1bf9a3();while(!![]){try{const _0x165570=-parseInt(_0x287aad(0x12d))/0x1*(parseInt(_0x287aad(0x122))/0x2)+parseInt(_0x287aad(0x13d))/0x3*(parseInt(_0x287aad(0x124))/0x4)+parseInt(_0x287aad(0x13a))/0x5+-parseInt(_0x287aad(0x138))/0x6*(parseInt(_0x287aad(0x11c))/0x7)+-parseInt(_0x287aad(0x130))/0x8+parseInt(_0x287aad(0x134))/0x9+parseInt(_0x287aad(0x12a))/0xa;if(_0x165570===_0x2ff561)break;else _0x5713b5['push'](_0x5713b5['shift']());}catch(_0x73d3e8){_0x5713b5['push'](_0x5713b5['shift']());}}}(_0x25ed,0x30b05));const router=require(_0x4f8d01(0x12b))['Router'](),awaitmysql=require(_0x4f8d01(0x135)),{sign}=require(_0x4f8d01(0x140)),{isuser,isvaliddownload}=require(_0x4f8d01(0x12f));router[_0x4f8d01(0x11f)]('/add',isuser,async(_0x13dd56,_0x5029d7)=>{const _0x2220b6=_0x4f8d01;try{if(_0x13dd56[_0x2220b6(0x142)]['image']){const _0xee9f3=await awaitmysql[_0x2220b6(0x129)](_0x2220b6(0x143)+_0x13dd56[_0x2220b6(0x12e)]['uid']+_0x2220b6(0x126)+_0x13dd56['body']['caption']+_0x2220b6(0x126)+_0x13dd56[_0x2220b6(0x142)]['footer']+_0x2220b6(0x126)+JSON[_0x2220b6(0x121)](_0x13dd56[_0x2220b6(0x142)][_0x2220b6(0x137)])+'\x27\x20,\x20\x27'+_0x13dd56[_0x2220b6(0x142)]['headerType']+_0x2220b6(0x126)+_0x13dd56[_0x2220b6(0x142)]['name']+_0x2220b6(0x126)+_0x13dd56['body'][_0x2220b6(0x131)]+_0x2220b6(0x11b));}else{const _0x41297b=await awaitmysql[_0x2220b6(0x129)]('INSERT\x20INTO\x20btntemp\x20(uid,\x20text,\x20footer,\x20buttons,\x20headerType,\x20name)\x20VALUES\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20(\x27'+_0x13dd56[_0x2220b6(0x12e)][_0x2220b6(0x128)]+_0x2220b6(0x126)+_0x13dd56[_0x2220b6(0x142)][_0x2220b6(0x136)]+'\x27,\x20\x27'+_0x13dd56[_0x2220b6(0x142)]['footer']+'\x27,\x20\x27'+JSON['stringify'](_0x13dd56[_0x2220b6(0x142)][_0x2220b6(0x137)])+_0x2220b6(0x141)+_0x13dd56[_0x2220b6(0x142)][_0x2220b6(0x12c)]+_0x2220b6(0x126)+_0x13dd56[_0x2220b6(0x142)][_0x2220b6(0x125)]+_0x2220b6(0x11b));}_0x5029d7[_0x2220b6(0x13c)]({'msg':_0x2220b6(0x13b),'success':!![]});}catch(_0x5bea3d){_0x5029d7['json']({'msg':_0x2220b6(0x11e),'err':_0x5bea3d}),console[_0x2220b6(0x132)](_0x5bea3d);}}),router['get'](_0x4f8d01(0x133),isuser,async(_0x3bbdf7,_0x5efb9e)=>{const _0x593969=_0x4f8d01;try{const _0x1f71f1=await awaitmysql[_0x593969(0x129)](_0x593969(0x139)+_0x3bbdf7['decode']['uid']+'\x27\x20');_0x5efb9e[_0x593969(0x13c)]({'success':!![],'data':_0x1f71f1});}catch(_0x415c1d){_0x5efb9e[_0x593969(0x13c)]({'msg':_0x593969(0x11e),'err':_0x415c1d}),console[_0x593969(0x132)](_0x415c1d);}}),router[_0x4f8d01(0x13e)]('/get_btn_img',isuser,async(_0x275a98,_0x4aaa01)=>{const _0x76a984=_0x4f8d01;try{const _0x21ff6c=await awaitmysql['query']('SELECT\x20*\x20FROM\x20btntemp\x20WHERE\x20headerType\x20=\x20\x274\x27\x20and\x20uid\x20=\x20\x27'+_0x275a98[_0x76a984(0x12e)][_0x76a984(0x128)]+'\x27\x20');_0x4aaa01['json']({'success':!![],'data':_0x21ff6c});}catch(_0x19e583){_0x4aaa01[_0x76a984(0x13c)]({'msg':'Server\x20error','err':_0x19e583}),console[_0x76a984(0x132)](_0x19e583);}}),router[_0x4f8d01(0x11f)](_0x4f8d01(0x13f),isuser,async(_0x2db14c,_0x38fa92)=>{const _0x38aa7=_0x4f8d01;try{const _0x48ab7a=await awaitmysql['query'](_0x38aa7(0x123)+_0x2db14c[_0x38aa7(0x142)]['id']+_0x38aa7(0x120)+_0x2db14c[_0x38aa7(0x12e)][_0x38aa7(0x128)]+_0x38aa7(0x127));_0x38fa92[_0x38aa7(0x13c)]({'success':!![],'msg':'Button\x20was\x20deleted'});}catch(_0x132317){_0x38fa92['json']({'msg':_0x38aa7(0x11e),'err':_0x132317}),console[_0x38aa7(0x132)](_0x132317);}}),module[_0x4f8d01(0x11d)]=router;function _0x2f06(_0x1df99b,_0x379e9c){const _0x25edde=_0x25ed();return _0x2f06=function(_0x2f0615,_0x23c352){_0x2f0615=_0x2f0615-0x11b;let _0x4caced=_0x25edde[_0x2f0615];return _0x4caced;},_0x2f06(_0x1df99b,_0x379e9c);}function _0x25ed(){const _0x2489c3=['8796YxWFGd','SELECT\x20*\x20FROM\x20btntemp\x20WHERE\x20headerType\x20=\x20\x271\x27\x20and\x20uid\x20=\x20\x27','1090355dHHHpH','Button\x20Templet\x20was\x20added!','json','27IfyWLr','get','/del_btn','jsonwebtoken','\x27\x20,\x20\x27','body','INSERT\x20INTO\x20btntemp\x20(uid,\x20caption,\x20footer,\x20buttons,\x20headerType,\x20name,\x20image)\x20VALUES\x0a\x20\x20\x20\x20\x20\x20\x20\x20(\x27','\x27)\x20','1659aBuLSB','exports','Server\x20error','post','\x27\x20and\x20uid\x20=\x20\x27','stringify','576788uCeFsl','DELETE\x20FROM\x20btntemp\x20WHERE\x20id\x20=\x20\x27','91812SgcpJy','name','\x27,\x20\x27','\x27\x20\x20','uid','query','6184220sljuwp','express','headerType','1GafYia','decode','../middlewares/user','2192744oBqWkP','image','log','/get_btn_text','596592QqnYsd','../function/awaitmysql','text','buttons'];_0x25ed=function(){return _0x2489c3;};return _0x25ed();}