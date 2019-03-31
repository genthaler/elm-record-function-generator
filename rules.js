(function(scope){
'use strict';

function F(arity, fun, wrapper) {
  wrapper.a = arity;
  wrapper.f = fun;
  return wrapper;
}

function F2(fun) {
  return F(2, fun, function(a) { return function(b) { return fun(a,b); }; })
}
function F3(fun) {
  return F(3, fun, function(a) {
    return function(b) { return function(c) { return fun(a, b, c); }; };
  });
}
function F4(fun) {
  return F(4, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return fun(a, b, c, d); }; }; };
  });
}
function F5(fun) {
  return F(5, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return fun(a, b, c, d, e); }; }; }; };
  });
}
function F6(fun) {
  return F(6, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return fun(a, b, c, d, e, f); }; }; }; }; };
  });
}
function F7(fun) {
  return F(7, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return fun(a, b, c, d, e, f, g); }; }; }; }; }; };
  });
}
function F8(fun) {
  return F(8, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) {
    return fun(a, b, c, d, e, f, g, h); }; }; }; }; }; }; };
  });
}
function F9(fun) {
  return F(9, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) { return function(i) {
    return fun(a, b, c, d, e, f, g, h, i); }; }; }; }; }; }; }; };
  });
}

function A2(fun, a, b) {
  return fun.a === 2 ? fun.f(a, b) : fun(a)(b);
}
function A3(fun, a, b, c) {
  return fun.a === 3 ? fun.f(a, b, c) : fun(a)(b)(c);
}
function A4(fun, a, b, c, d) {
  return fun.a === 4 ? fun.f(a, b, c, d) : fun(a)(b)(c)(d);
}
function A5(fun, a, b, c, d, e) {
  return fun.a === 5 ? fun.f(a, b, c, d, e) : fun(a)(b)(c)(d)(e);
}
function A6(fun, a, b, c, d, e, f) {
  return fun.a === 6 ? fun.f(a, b, c, d, e, f) : fun(a)(b)(c)(d)(e)(f);
}
function A7(fun, a, b, c, d, e, f, g) {
  return fun.a === 7 ? fun.f(a, b, c, d, e, f, g) : fun(a)(b)(c)(d)(e)(f)(g);
}
function A8(fun, a, b, c, d, e, f, g, h) {
  return fun.a === 8 ? fun.f(a, b, c, d, e, f, g, h) : fun(a)(b)(c)(d)(e)(f)(g)(h);
}
function A9(fun, a, b, c, d, e, f, g, h, i) {
  return fun.a === 9 ? fun.f(a, b, c, d, e, f, g, h, i) : fun(a)(b)(c)(d)(e)(f)(g)(h)(i);
}

console.warn('Compiled in DEV mode. Follow the advice at https://elm-lang.org/0.19.0/optimize for better performance and smaller assets.');


var _JsArray_empty = [];

function _JsArray_singleton(value)
{
    return [value];
}

function _JsArray_length(array)
{
    return array.length;
}

var _JsArray_initialize = F3(function(size, offset, func)
{
    var result = new Array(size);

    for (var i = 0; i < size; i++)
    {
        result[i] = func(offset + i);
    }

    return result;
});

var _JsArray_initializeFromList = F2(function (max, ls)
{
    var result = new Array(max);

    for (var i = 0; i < max && ls.b; i++)
    {
        result[i] = ls.a;
        ls = ls.b;
    }

    result.length = i;
    return _Utils_Tuple2(result, ls);
});

var _JsArray_unsafeGet = F2(function(index, array)
{
    return array[index];
});

var _JsArray_unsafeSet = F3(function(index, value, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = array[i];
    }

    result[index] = value;
    return result;
});

var _JsArray_push = F2(function(value, array)
{
    var length = array.length;
    var result = new Array(length + 1);

    for (var i = 0; i < length; i++)
    {
        result[i] = array[i];
    }

    result[length] = value;
    return result;
});

var _JsArray_foldl = F3(function(func, acc, array)
{
    var length = array.length;

    for (var i = 0; i < length; i++)
    {
        acc = A2(func, array[i], acc);
    }

    return acc;
});

var _JsArray_foldr = F3(function(func, acc, array)
{
    for (var i = array.length - 1; i >= 0; i--)
    {
        acc = A2(func, array[i], acc);
    }

    return acc;
});

var _JsArray_map = F2(function(func, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = func(array[i]);
    }

    return result;
});

var _JsArray_indexedMap = F3(function(func, offset, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = A2(func, offset + i, array[i]);
    }

    return result;
});

var _JsArray_slice = F3(function(from, to, array)
{
    return array.slice(from, to);
});

var _JsArray_appendN = F3(function(n, dest, source)
{
    var destLen = dest.length;
    var itemsToCopy = n - destLen;

    if (itemsToCopy > source.length)
    {
        itemsToCopy = source.length;
    }

    var size = destLen + itemsToCopy;
    var result = new Array(size);

    for (var i = 0; i < destLen; i++)
    {
        result[i] = dest[i];
    }

    for (var i = 0; i < itemsToCopy; i++)
    {
        result[i + destLen] = source[i];
    }

    return result;
});



// LOG

var _Debug_log_UNUSED = F2(function(tag, value)
{
	return value;
});

var _Debug_log = F2(function(tag, value)
{
	console.log(tag + ': ' + _Debug_toString(value));
	return value;
});


// TODOS

function _Debug_todo(moduleName, region)
{
	return function(message) {
		_Debug_crash(8, moduleName, region, message);
	};
}

function _Debug_todoCase(moduleName, region, value)
{
	return function(message) {
		_Debug_crash(9, moduleName, region, value, message);
	};
}


// TO STRING

function _Debug_toString_UNUSED(value)
{
	return '<internals>';
}

function _Debug_toString(value)
{
	return _Debug_toAnsiString(false, value);
}

function _Debug_toAnsiString(ansi, value)
{
	if (typeof value === 'function')
	{
		return _Debug_internalColor(ansi, '<function>');
	}

	if (typeof value === 'boolean')
	{
		return _Debug_ctorColor(ansi, value ? 'True' : 'False');
	}

	if (typeof value === 'number')
	{
		return _Debug_numberColor(ansi, value + '');
	}

	if (value instanceof String)
	{
		return _Debug_charColor(ansi, "'" + _Debug_addSlashes(value, true) + "'");
	}

	if (typeof value === 'string')
	{
		return _Debug_stringColor(ansi, '"' + _Debug_addSlashes(value, false) + '"');
	}

	if (typeof value === 'object' && '$' in value)
	{
		var tag = value.$;

		if (typeof tag === 'number')
		{
			return _Debug_internalColor(ansi, '<internals>');
		}

		if (tag[0] === '#')
		{
			var output = [];
			for (var k in value)
			{
				if (k === '$') continue;
				output.push(_Debug_toAnsiString(ansi, value[k]));
			}
			return '(' + output.join(',') + ')';
		}

		if (tag === 'Set_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Set')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, elm$core$Set$toList(value));
		}

		if (tag === 'RBNode_elm_builtin' || tag === 'RBEmpty_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Dict')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, elm$core$Dict$toList(value));
		}

		if (tag === 'Array_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Array')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, elm$core$Array$toList(value));
		}

		if (tag === '::' || tag === '[]')
		{
			var output = '[';

			value.b && (output += _Debug_toAnsiString(ansi, value.a), value = value.b)

			for (; value.b; value = value.b) // WHILE_CONS
			{
				output += ',' + _Debug_toAnsiString(ansi, value.a);
			}
			return output + ']';
		}

		var output = '';
		for (var i in value)
		{
			if (i === '$') continue;
			var str = _Debug_toAnsiString(ansi, value[i]);
			var c0 = str[0];
			var parenless = c0 === '{' || c0 === '(' || c0 === '[' || c0 === '<' || c0 === '"' || str.indexOf(' ') < 0;
			output += ' ' + (parenless ? str : '(' + str + ')');
		}
		return _Debug_ctorColor(ansi, tag) + output;
	}

	if (typeof value === 'object')
	{
		var output = [];
		for (var key in value)
		{
			var field = key[0] === '_' ? key.slice(1) : key;
			output.push(_Debug_fadeColor(ansi, field) + ' = ' + _Debug_toAnsiString(ansi, value[key]));
		}
		if (output.length === 0)
		{
			return '{}';
		}
		return '{ ' + output.join(', ') + ' }';
	}

	return _Debug_internalColor(ansi, '<internals>');
}

function _Debug_addSlashes(str, isChar)
{
	var s = str
		.replace(/\\/g, '\\\\')
		.replace(/\n/g, '\\n')
		.replace(/\t/g, '\\t')
		.replace(/\r/g, '\\r')
		.replace(/\v/g, '\\v')
		.replace(/\0/g, '\\0');

	if (isChar)
	{
		return s.replace(/\'/g, '\\\'');
	}
	else
	{
		return s.replace(/\"/g, '\\"');
	}
}

function _Debug_ctorColor(ansi, string)
{
	return ansi ? '\x1b[96m' + string + '\x1b[0m' : string;
}

function _Debug_numberColor(ansi, string)
{
	return ansi ? '\x1b[95m' + string + '\x1b[0m' : string;
}

function _Debug_stringColor(ansi, string)
{
	return ansi ? '\x1b[93m' + string + '\x1b[0m' : string;
}

function _Debug_charColor(ansi, string)
{
	return ansi ? '\x1b[92m' + string + '\x1b[0m' : string;
}

function _Debug_fadeColor(ansi, string)
{
	return ansi ? '\x1b[37m' + string + '\x1b[0m' : string;
}

function _Debug_internalColor(ansi, string)
{
	return ansi ? '\x1b[94m' + string + '\x1b[0m' : string;
}



// CRASH


function _Debug_crash_UNUSED(identifier)
{
	throw new Error('https://github.com/elm/core/blob/1.0.0/hints/' + identifier + '.md');
}


function _Debug_crash(identifier, fact1, fact2, fact3, fact4)
{
	switch(identifier)
	{
		case 0:
			throw new Error('What node should I take over? In JavaScript I need something like:\n\n    Elm.Main.init({\n        node: document.getElementById("elm-node")\n    })\n\nYou need to do this with any Browser.sandbox or Browser.element program.');

		case 1:
			throw new Error('Browser.application programs cannot handle URLs like this:\n\n    ' + document.location.href + '\n\nWhat is the root? The root of your file system? Try looking at this program with `elm reactor` or some other server.');

		case 2:
			var jsonErrorString = fact1;
			throw new Error('Problem with the flags given to your Elm program on initialization.\n\n' + jsonErrorString);

		case 3:
			var portName = fact1;
			throw new Error('There can only be one port named `' + portName + '`, but your program has multiple.');

		case 4:
			var portName = fact1;
			var problem = fact2;
			throw new Error('Trying to send an unexpected type of value through port `' + portName + '`:\n' + problem);

		case 5:
			throw new Error('Trying to use `(==)` on functions.\nThere is no way to know if functions are "the same" in the Elm sense.\nRead more about this at https://package.elm-lang.org/packages/elm/core/latest/Basics#== which describes why it is this way and what the better version will look like.');

		case 6:
			var moduleName = fact1;
			throw new Error('Your page is loading multiple Elm scripts with a module named ' + moduleName + '. Maybe a duplicate script is getting loaded accidentally? If not, rename one of them so I know which is which!');

		case 8:
			var moduleName = fact1;
			var region = fact2;
			var message = fact3;
			throw new Error('TODO in module `' + moduleName + '` ' + _Debug_regionToString(region) + '\n\n' + message);

		case 9:
			var moduleName = fact1;
			var region = fact2;
			var value = fact3;
			var message = fact4;
			throw new Error(
				'TODO in module `' + moduleName + '` from the `case` expression '
				+ _Debug_regionToString(region) + '\n\nIt received the following value:\n\n    '
				+ _Debug_toString(value).replace('\n', '\n    ')
				+ '\n\nBut the branch that handles it says:\n\n    ' + message.replace('\n', '\n    ')
			);

		case 10:
			throw new Error('Bug in https://github.com/elm/virtual-dom/issues');

		case 11:
			throw new Error('Cannot perform mod 0. Division by zero error.');
	}
}

function _Debug_regionToString(region)
{
	if (region.start.line === region.end.line)
	{
		return 'on line ' + region.start.line;
	}
	return 'on lines ' + region.start.line + ' through ' + region.end.line;
}



// EQUALITY

function _Utils_eq(x, y)
{
	for (
		var pair, stack = [], isEqual = _Utils_eqHelp(x, y, 0, stack);
		isEqual && (pair = stack.pop());
		isEqual = _Utils_eqHelp(pair.a, pair.b, 0, stack)
		)
	{}

	return isEqual;
}

function _Utils_eqHelp(x, y, depth, stack)
{
	if (depth > 100)
	{
		stack.push(_Utils_Tuple2(x,y));
		return true;
	}

	if (x === y)
	{
		return true;
	}

	if (typeof x !== 'object' || x === null || y === null)
	{
		typeof x === 'function' && _Debug_crash(5);
		return false;
	}

	/**/
	if (x.$ === 'Set_elm_builtin')
	{
		x = elm$core$Set$toList(x);
		y = elm$core$Set$toList(y);
	}
	if (x.$ === 'RBNode_elm_builtin' || x.$ === 'RBEmpty_elm_builtin')
	{
		x = elm$core$Dict$toList(x);
		y = elm$core$Dict$toList(y);
	}
	//*/

	/**_UNUSED/
	if (x.$ < 0)
	{
		x = elm$core$Dict$toList(x);
		y = elm$core$Dict$toList(y);
	}
	//*/

	for (var key in x)
	{
		if (!_Utils_eqHelp(x[key], y[key], depth + 1, stack))
		{
			return false;
		}
	}
	return true;
}

var _Utils_equal = F2(_Utils_eq);
var _Utils_notEqual = F2(function(a, b) { return !_Utils_eq(a,b); });



// COMPARISONS

// Code in Generate/JavaScript.hs, Basics.js, and List.js depends on
// the particular integer values assigned to LT, EQ, and GT.

function _Utils_cmp(x, y, ord)
{
	if (typeof x !== 'object')
	{
		return x === y ? /*EQ*/ 0 : x < y ? /*LT*/ -1 : /*GT*/ 1;
	}

	/**/
	if (x instanceof String)
	{
		var a = x.valueOf();
		var b = y.valueOf();
		return a === b ? 0 : a < b ? -1 : 1;
	}
	//*/

	/**_UNUSED/
	if (!x.$)
	//*/
	/**/
	if (x.$[0] === '#')
	//*/
	{
		return (ord = _Utils_cmp(x.a, y.a))
			? ord
			: (ord = _Utils_cmp(x.b, y.b))
				? ord
				: _Utils_cmp(x.c, y.c);
	}

	// traverse conses until end of a list or a mismatch
	for (; x.b && y.b && !(ord = _Utils_cmp(x.a, y.a)); x = x.b, y = y.b) {} // WHILE_CONSES
	return ord || (x.b ? /*GT*/ 1 : y.b ? /*LT*/ -1 : /*EQ*/ 0);
}

var _Utils_lt = F2(function(a, b) { return _Utils_cmp(a, b) < 0; });
var _Utils_le = F2(function(a, b) { return _Utils_cmp(a, b) < 1; });
var _Utils_gt = F2(function(a, b) { return _Utils_cmp(a, b) > 0; });
var _Utils_ge = F2(function(a, b) { return _Utils_cmp(a, b) >= 0; });

var _Utils_compare = F2(function(x, y)
{
	var n = _Utils_cmp(x, y);
	return n < 0 ? elm$core$Basics$LT : n ? elm$core$Basics$GT : elm$core$Basics$EQ;
});


// COMMON VALUES

var _Utils_Tuple0_UNUSED = 0;
var _Utils_Tuple0 = { $: '#0' };

function _Utils_Tuple2_UNUSED(a, b) { return { a: a, b: b }; }
function _Utils_Tuple2(a, b) { return { $: '#2', a: a, b: b }; }

function _Utils_Tuple3_UNUSED(a, b, c) { return { a: a, b: b, c: c }; }
function _Utils_Tuple3(a, b, c) { return { $: '#3', a: a, b: b, c: c }; }

function _Utils_chr_UNUSED(c) { return c; }
function _Utils_chr(c) { return new String(c); }


// RECORDS

function _Utils_update(oldRecord, updatedFields)
{
	var newRecord = {};

	for (var key in oldRecord)
	{
		newRecord[key] = oldRecord[key];
	}

	for (var key in updatedFields)
	{
		newRecord[key] = updatedFields[key];
	}

	return newRecord;
}


// APPEND

var _Utils_append = F2(_Utils_ap);

function _Utils_ap(xs, ys)
{
	// append Strings
	if (typeof xs === 'string')
	{
		return xs + ys;
	}

	// append Lists
	if (!xs.b)
	{
		return ys;
	}
	var root = _List_Cons(xs.a, ys);
	xs = xs.b
	for (var curr = root; xs.b; xs = xs.b) // WHILE_CONS
	{
		curr = curr.b = _List_Cons(xs.a, ys);
	}
	return root;
}



var _List_Nil_UNUSED = { $: 0 };
var _List_Nil = { $: '[]' };

function _List_Cons_UNUSED(hd, tl) { return { $: 1, a: hd, b: tl }; }
function _List_Cons(hd, tl) { return { $: '::', a: hd, b: tl }; }


var _List_cons = F2(_List_Cons);

function _List_fromArray(arr)
{
	var out = _List_Nil;
	for (var i = arr.length; i--; )
	{
		out = _List_Cons(arr[i], out);
	}
	return out;
}

function _List_toArray(xs)
{
	for (var out = []; xs.b; xs = xs.b) // WHILE_CONS
	{
		out.push(xs.a);
	}
	return out;
}

var _List_map2 = F3(function(f, xs, ys)
{
	for (var arr = []; xs.b && ys.b; xs = xs.b, ys = ys.b) // WHILE_CONSES
	{
		arr.push(A2(f, xs.a, ys.a));
	}
	return _List_fromArray(arr);
});

var _List_map3 = F4(function(f, xs, ys, zs)
{
	for (var arr = []; xs.b && ys.b && zs.b; xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A3(f, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_map4 = F5(function(f, ws, xs, ys, zs)
{
	for (var arr = []; ws.b && xs.b && ys.b && zs.b; ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A4(f, ws.a, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_map5 = F6(function(f, vs, ws, xs, ys, zs)
{
	for (var arr = []; vs.b && ws.b && xs.b && ys.b && zs.b; vs = vs.b, ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A5(f, vs.a, ws.a, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_sortBy = F2(function(f, xs)
{
	return _List_fromArray(_List_toArray(xs).sort(function(a, b) {
		return _Utils_cmp(f(a), f(b));
	}));
});

var _List_sortWith = F2(function(f, xs)
{
	return _List_fromArray(_List_toArray(xs).sort(function(a, b) {
		var ord = A2(f, a, b);
		return ord === elm$core$Basics$EQ ? 0 : ord === elm$core$Basics$LT ? -1 : 1;
	}));
});



// MATH

var _Basics_add = F2(function(a, b) { return a + b; });
var _Basics_sub = F2(function(a, b) { return a - b; });
var _Basics_mul = F2(function(a, b) { return a * b; });
var _Basics_fdiv = F2(function(a, b) { return a / b; });
var _Basics_idiv = F2(function(a, b) { return (a / b) | 0; });
var _Basics_pow = F2(Math.pow);

var _Basics_remainderBy = F2(function(b, a) { return a % b; });

// https://www.microsoft.com/en-us/research/wp-content/uploads/2016/02/divmodnote-letter.pdf
var _Basics_modBy = F2(function(modulus, x)
{
	var answer = x % modulus;
	return modulus === 0
		? _Debug_crash(11)
		:
	((answer > 0 && modulus < 0) || (answer < 0 && modulus > 0))
		? answer + modulus
		: answer;
});


// TRIGONOMETRY

var _Basics_pi = Math.PI;
var _Basics_e = Math.E;
var _Basics_cos = Math.cos;
var _Basics_sin = Math.sin;
var _Basics_tan = Math.tan;
var _Basics_acos = Math.acos;
var _Basics_asin = Math.asin;
var _Basics_atan = Math.atan;
var _Basics_atan2 = F2(Math.atan2);


// MORE MATH

function _Basics_toFloat(x) { return x; }
function _Basics_truncate(n) { return n | 0; }
function _Basics_isInfinite(n) { return n === Infinity || n === -Infinity; }

var _Basics_ceiling = Math.ceil;
var _Basics_floor = Math.floor;
var _Basics_round = Math.round;
var _Basics_sqrt = Math.sqrt;
var _Basics_log = Math.log;
var _Basics_isNaN = isNaN;


// BOOLEANS

function _Basics_not(bool) { return !bool; }
var _Basics_and = F2(function(a, b) { return a && b; });
var _Basics_or  = F2(function(a, b) { return a || b; });
var _Basics_xor = F2(function(a, b) { return a !== b; });



function _Char_toCode(char)
{
	var code = char.charCodeAt(0);
	if (0xD800 <= code && code <= 0xDBFF)
	{
		return (code - 0xD800) * 0x400 + char.charCodeAt(1) - 0xDC00 + 0x10000
	}
	return code;
}

function _Char_fromCode(code)
{
	return _Utils_chr(
		(code < 0 || 0x10FFFF < code)
			? '\uFFFD'
			:
		(code <= 0xFFFF)
			? String.fromCharCode(code)
			:
		(code -= 0x10000,
			String.fromCharCode(Math.floor(code / 0x400) + 0xD800)
			+
			String.fromCharCode(code % 0x400 + 0xDC00)
		)
	);
}

function _Char_toUpper(char)
{
	return _Utils_chr(char.toUpperCase());
}

function _Char_toLower(char)
{
	return _Utils_chr(char.toLowerCase());
}

function _Char_toLocaleUpper(char)
{
	return _Utils_chr(char.toLocaleUpperCase());
}

function _Char_toLocaleLower(char)
{
	return _Utils_chr(char.toLocaleLowerCase());
}



var _String_cons = F2(function(chr, str)
{
	return chr + str;
});

function _String_uncons(string)
{
	var word = string.charCodeAt(0);
	return word
		? elm$core$Maybe$Just(
			0xD800 <= word && word <= 0xDBFF
				? _Utils_Tuple2(_Utils_chr(string[0] + string[1]), string.slice(2))
				: _Utils_Tuple2(_Utils_chr(string[0]), string.slice(1))
		)
		: elm$core$Maybe$Nothing;
}

var _String_append = F2(function(a, b)
{
	return a + b;
});

function _String_length(str)
{
	return str.length;
}

var _String_map = F2(function(func, string)
{
	var len = string.length;
	var array = new Array(len);
	var i = 0;
	while (i < len)
	{
		var word = string.charCodeAt(i);
		if (0xD800 <= word && word <= 0xDBFF)
		{
			array[i] = func(_Utils_chr(string[i] + string[i+1]));
			i += 2;
			continue;
		}
		array[i] = func(_Utils_chr(string[i]));
		i++;
	}
	return array.join('');
});

var _String_filter = F2(function(isGood, str)
{
	var arr = [];
	var len = str.length;
	var i = 0;
	while (i < len)
	{
		var char = str[i];
		var word = str.charCodeAt(i);
		i++;
		if (0xD800 <= word && word <= 0xDBFF)
		{
			char += str[i];
			i++;
		}

		if (isGood(_Utils_chr(char)))
		{
			arr.push(char);
		}
	}
	return arr.join('');
});

function _String_reverse(str)
{
	var len = str.length;
	var arr = new Array(len);
	var i = 0;
	while (i < len)
	{
		var word = str.charCodeAt(i);
		if (0xD800 <= word && word <= 0xDBFF)
		{
			arr[len - i] = str[i + 1];
			i++;
			arr[len - i] = str[i - 1];
			i++;
		}
		else
		{
			arr[len - i] = str[i];
			i++;
		}
	}
	return arr.join('');
}

var _String_foldl = F3(function(func, state, string)
{
	var len = string.length;
	var i = 0;
	while (i < len)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		i++;
		if (0xD800 <= word && word <= 0xDBFF)
		{
			char += string[i];
			i++;
		}
		state = A2(func, _Utils_chr(char), state);
	}
	return state;
});

var _String_foldr = F3(function(func, state, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		state = A2(func, _Utils_chr(char), state);
	}
	return state;
});

var _String_split = F2(function(sep, str)
{
	return str.split(sep);
});

var _String_join = F2(function(sep, strs)
{
	return strs.join(sep);
});

var _String_slice = F3(function(start, end, str) {
	return str.slice(start, end);
});

function _String_trim(str)
{
	return str.trim();
}

function _String_trimLeft(str)
{
	return str.replace(/^\s+/, '');
}

function _String_trimRight(str)
{
	return str.replace(/\s+$/, '');
}

function _String_words(str)
{
	return _List_fromArray(str.trim().split(/\s+/g));
}

function _String_lines(str)
{
	return _List_fromArray(str.split(/\r\n|\r|\n/g));
}

function _String_toUpper(str)
{
	return str.toUpperCase();
}

function _String_toLower(str)
{
	return str.toLowerCase();
}

var _String_any = F2(function(isGood, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		if (isGood(_Utils_chr(char)))
		{
			return true;
		}
	}
	return false;
});

var _String_all = F2(function(isGood, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		if (!isGood(_Utils_chr(char)))
		{
			return false;
		}
	}
	return true;
});

var _String_contains = F2(function(sub, str)
{
	return str.indexOf(sub) > -1;
});

var _String_startsWith = F2(function(sub, str)
{
	return str.indexOf(sub) === 0;
});

var _String_endsWith = F2(function(sub, str)
{
	return str.length >= sub.length &&
		str.lastIndexOf(sub) === str.length - sub.length;
});

var _String_indexes = F2(function(sub, str)
{
	var subLen = sub.length;

	if (subLen < 1)
	{
		return _List_Nil;
	}

	var i = 0;
	var is = [];

	while ((i = str.indexOf(sub, i)) > -1)
	{
		is.push(i);
		i = i + subLen;
	}

	return _List_fromArray(is);
});


// TO STRING

function _String_fromNumber(number)
{
	return number + '';
}


// INT CONVERSIONS

function _String_toInt(str)
{
	var total = 0;
	var code0 = str.charCodeAt(0);
	var start = code0 == 0x2B /* + */ || code0 == 0x2D /* - */ ? 1 : 0;

	for (var i = start; i < str.length; ++i)
	{
		var code = str.charCodeAt(i);
		if (code < 0x30 || 0x39 < code)
		{
			return elm$core$Maybe$Nothing;
		}
		total = 10 * total + code - 0x30;
	}

	return i == start
		? elm$core$Maybe$Nothing
		: elm$core$Maybe$Just(code0 == 0x2D ? -total : total);
}


// FLOAT CONVERSIONS

function _String_toFloat(s)
{
	// check if it is a hex, octal, or binary number
	if (s.length === 0 || /[\sxbo]/.test(s))
	{
		return elm$core$Maybe$Nothing;
	}
	var n = +s;
	// faster isNaN check
	return n === n ? elm$core$Maybe$Just(n) : elm$core$Maybe$Nothing;
}

function _String_fromList(chars)
{
	return _List_toArray(chars).join('');
}




/**/
function _Json_errorToString(error)
{
	return elm$json$Json$Decode$errorToString(error);
}
//*/


// CORE DECODERS

function _Json_succeed(msg)
{
	return {
		$: 0,
		a: msg
	};
}

function _Json_fail(msg)
{
	return {
		$: 1,
		a: msg
	};
}

var _Json_decodeInt = { $: 2 };
var _Json_decodeBool = { $: 3 };
var _Json_decodeFloat = { $: 4 };
var _Json_decodeValue = { $: 5 };
var _Json_decodeString = { $: 6 };

function _Json_decodeList(decoder) { return { $: 7, b: decoder }; }
function _Json_decodeArray(decoder) { return { $: 8, b: decoder }; }

function _Json_decodeNull(value) { return { $: 9, c: value }; }

var _Json_decodeField = F2(function(field, decoder)
{
	return {
		$: 10,
		d: field,
		b: decoder
	};
});

var _Json_decodeIndex = F2(function(index, decoder)
{
	return {
		$: 11,
		e: index,
		b: decoder
	};
});

function _Json_decodeKeyValuePairs(decoder)
{
	return {
		$: 12,
		b: decoder
	};
}

function _Json_mapMany(f, decoders)
{
	return {
		$: 13,
		f: f,
		g: decoders
	};
}

var _Json_andThen = F2(function(callback, decoder)
{
	return {
		$: 14,
		b: decoder,
		h: callback
	};
});

function _Json_oneOf(decoders)
{
	return {
		$: 15,
		g: decoders
	};
}


// DECODING OBJECTS

var _Json_map1 = F2(function(f, d1)
{
	return _Json_mapMany(f, [d1]);
});

var _Json_map2 = F3(function(f, d1, d2)
{
	return _Json_mapMany(f, [d1, d2]);
});

var _Json_map3 = F4(function(f, d1, d2, d3)
{
	return _Json_mapMany(f, [d1, d2, d3]);
});

var _Json_map4 = F5(function(f, d1, d2, d3, d4)
{
	return _Json_mapMany(f, [d1, d2, d3, d4]);
});

var _Json_map5 = F6(function(f, d1, d2, d3, d4, d5)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5]);
});

var _Json_map6 = F7(function(f, d1, d2, d3, d4, d5, d6)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6]);
});

var _Json_map7 = F8(function(f, d1, d2, d3, d4, d5, d6, d7)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7]);
});

var _Json_map8 = F9(function(f, d1, d2, d3, d4, d5, d6, d7, d8)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7, d8]);
});


// DECODE

var _Json_runOnString = F2(function(decoder, string)
{
	try
	{
		var value = JSON.parse(string);
		return _Json_runHelp(decoder, value);
	}
	catch (e)
	{
		return elm$core$Result$Err(A2(elm$json$Json$Decode$Failure, 'This is not valid JSON! ' + e.message, _Json_wrap(string)));
	}
});

var _Json_run = F2(function(decoder, value)
{
	return _Json_runHelp(decoder, _Json_unwrap(value));
});

function _Json_runHelp(decoder, value)
{
	switch (decoder.$)
	{
		case 3:
			return (typeof value === 'boolean')
				? elm$core$Result$Ok(value)
				: _Json_expecting('a BOOL', value);

		case 2:
			if (typeof value !== 'number') {
				return _Json_expecting('an INT', value);
			}

			if (-2147483647 < value && value < 2147483647 && (value | 0) === value) {
				return elm$core$Result$Ok(value);
			}

			if (isFinite(value) && !(value % 1)) {
				return elm$core$Result$Ok(value);
			}

			return _Json_expecting('an INT', value);

		case 4:
			return (typeof value === 'number')
				? elm$core$Result$Ok(value)
				: _Json_expecting('a FLOAT', value);

		case 6:
			return (typeof value === 'string')
				? elm$core$Result$Ok(value)
				: (value instanceof String)
					? elm$core$Result$Ok(value + '')
					: _Json_expecting('a STRING', value);

		case 9:
			return (value === null)
				? elm$core$Result$Ok(decoder.c)
				: _Json_expecting('null', value);

		case 5:
			return elm$core$Result$Ok(_Json_wrap(value));

		case 7:
			if (!Array.isArray(value))
			{
				return _Json_expecting('a LIST', value);
			}
			return _Json_runArrayDecoder(decoder.b, value, _List_fromArray);

		case 8:
			if (!Array.isArray(value))
			{
				return _Json_expecting('an ARRAY', value);
			}
			return _Json_runArrayDecoder(decoder.b, value, _Json_toElmArray);

		case 10:
			var field = decoder.d;
			if (typeof value !== 'object' || value === null || !(field in value))
			{
				return _Json_expecting('an OBJECT with a field named `' + field + '`', value);
			}
			var result = _Json_runHelp(decoder.b, value[field]);
			return (elm$core$Result$isOk(result)) ? result : elm$core$Result$Err(A2(elm$json$Json$Decode$Field, field, result.a));

		case 11:
			var index = decoder.e;
			if (!Array.isArray(value))
			{
				return _Json_expecting('an ARRAY', value);
			}
			if (index >= value.length)
			{
				return _Json_expecting('a LONGER array. Need index ' + index + ' but only see ' + value.length + ' entries', value);
			}
			var result = _Json_runHelp(decoder.b, value[index]);
			return (elm$core$Result$isOk(result)) ? result : elm$core$Result$Err(A2(elm$json$Json$Decode$Index, index, result.a));

		case 12:
			if (typeof value !== 'object' || value === null || Array.isArray(value))
			{
				return _Json_expecting('an OBJECT', value);
			}

			var keyValuePairs = _List_Nil;
			// TODO test perf of Object.keys and switch when support is good enough
			for (var key in value)
			{
				if (value.hasOwnProperty(key))
				{
					var result = _Json_runHelp(decoder.b, value[key]);
					if (!elm$core$Result$isOk(result))
					{
						return elm$core$Result$Err(A2(elm$json$Json$Decode$Field, key, result.a));
					}
					keyValuePairs = _List_Cons(_Utils_Tuple2(key, result.a), keyValuePairs);
				}
			}
			return elm$core$Result$Ok(elm$core$List$reverse(keyValuePairs));

		case 13:
			var answer = decoder.f;
			var decoders = decoder.g;
			for (var i = 0; i < decoders.length; i++)
			{
				var result = _Json_runHelp(decoders[i], value);
				if (!elm$core$Result$isOk(result))
				{
					return result;
				}
				answer = answer(result.a);
			}
			return elm$core$Result$Ok(answer);

		case 14:
			var result = _Json_runHelp(decoder.b, value);
			return (!elm$core$Result$isOk(result))
				? result
				: _Json_runHelp(decoder.h(result.a), value);

		case 15:
			var errors = _List_Nil;
			for (var temp = decoder.g; temp.b; temp = temp.b) // WHILE_CONS
			{
				var result = _Json_runHelp(temp.a, value);
				if (elm$core$Result$isOk(result))
				{
					return result;
				}
				errors = _List_Cons(result.a, errors);
			}
			return elm$core$Result$Err(elm$json$Json$Decode$OneOf(elm$core$List$reverse(errors)));

		case 1:
			return elm$core$Result$Err(A2(elm$json$Json$Decode$Failure, decoder.a, _Json_wrap(value)));

		case 0:
			return elm$core$Result$Ok(decoder.a);
	}
}

function _Json_runArrayDecoder(decoder, value, toElmValue)
{
	var len = value.length;
	var array = new Array(len);
	for (var i = 0; i < len; i++)
	{
		var result = _Json_runHelp(decoder, value[i]);
		if (!elm$core$Result$isOk(result))
		{
			return elm$core$Result$Err(A2(elm$json$Json$Decode$Index, i, result.a));
		}
		array[i] = result.a;
	}
	return elm$core$Result$Ok(toElmValue(array));
}

function _Json_toElmArray(array)
{
	return A2(elm$core$Array$initialize, array.length, function(i) { return array[i]; });
}

function _Json_expecting(type, value)
{
	return elm$core$Result$Err(A2(elm$json$Json$Decode$Failure, 'Expecting ' + type, _Json_wrap(value)));
}


// EQUALITY

function _Json_equality(x, y)
{
	if (x === y)
	{
		return true;
	}

	if (x.$ !== y.$)
	{
		return false;
	}

	switch (x.$)
	{
		case 0:
		case 1:
			return x.a === y.a;

		case 3:
		case 2:
		case 4:
		case 6:
		case 5:
			return true;

		case 9:
			return x.c === y.c;

		case 7:
		case 8:
		case 12:
			return _Json_equality(x.b, y.b);

		case 10:
			return x.d === y.d && _Json_equality(x.b, y.b);

		case 11:
			return x.e === y.e && _Json_equality(x.b, y.b);

		case 13:
			return x.f === y.f && _Json_listEquality(x.g, y.g);

		case 14:
			return x.h === y.h && _Json_equality(x.b, y.b);

		case 15:
			return _Json_listEquality(x.g, y.g);
	}
}

function _Json_listEquality(aDecoders, bDecoders)
{
	var len = aDecoders.length;
	if (len !== bDecoders.length)
	{
		return false;
	}
	for (var i = 0; i < len; i++)
	{
		if (!_Json_equality(aDecoders[i], bDecoders[i]))
		{
			return false;
		}
	}
	return true;
}


// ENCODE

var _Json_encode = F2(function(indentLevel, value)
{
	return JSON.stringify(_Json_unwrap(value), null, indentLevel) + '';
});

function _Json_wrap(value) { return { $: 0, a: value }; }
function _Json_unwrap(value) { return value.a; }

function _Json_wrap_UNUSED(value) { return value; }
function _Json_unwrap_UNUSED(value) { return value; }

function _Json_emptyArray() { return []; }
function _Json_emptyObject() { return {}; }

var _Json_addField = F3(function(key, value, object)
{
	object[key] = _Json_unwrap(value);
	return object;
});

function _Json_addEntry(func)
{
	return F2(function(entry, array)
	{
		array.push(_Json_unwrap(func(entry)));
		return array;
	});
}

var _Json_encodeNull = _Json_wrap(null);



// TASKS

function _Scheduler_succeed(value)
{
	return {
		$: 0,
		a: value
	};
}

function _Scheduler_fail(error)
{
	return {
		$: 1,
		a: error
	};
}

function _Scheduler_binding(callback)
{
	return {
		$: 2,
		b: callback,
		c: null
	};
}

var _Scheduler_andThen = F2(function(callback, task)
{
	return {
		$: 3,
		b: callback,
		d: task
	};
});

var _Scheduler_onError = F2(function(callback, task)
{
	return {
		$: 4,
		b: callback,
		d: task
	};
});

function _Scheduler_receive(callback)
{
	return {
		$: 5,
		b: callback
	};
}


// PROCESSES

var _Scheduler_guid = 0;

function _Scheduler_rawSpawn(task)
{
	var proc = {
		$: 0,
		e: _Scheduler_guid++,
		f: task,
		g: null,
		h: []
	};

	_Scheduler_enqueue(proc);

	return proc;
}

function _Scheduler_spawn(task)
{
	return _Scheduler_binding(function(callback) {
		callback(_Scheduler_succeed(_Scheduler_rawSpawn(task)));
	});
}

function _Scheduler_rawSend(proc, msg)
{
	proc.h.push(msg);
	_Scheduler_enqueue(proc);
}

var _Scheduler_send = F2(function(proc, msg)
{
	return _Scheduler_binding(function(callback) {
		_Scheduler_rawSend(proc, msg);
		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
});

function _Scheduler_kill(proc)
{
	return _Scheduler_binding(function(callback) {
		var task = proc.f;
		if (task.$ === 2 && task.c)
		{
			task.c();
		}

		proc.f = null;

		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
}


/* STEP PROCESSES

type alias Process =
  { $ : tag
  , id : unique_id
  , root : Task
  , stack : null | { $: SUCCEED | FAIL, a: callback, b: stack }
  , mailbox : [msg]
  }

*/


var _Scheduler_working = false;
var _Scheduler_queue = [];


function _Scheduler_enqueue(proc)
{
	_Scheduler_queue.push(proc);
	if (_Scheduler_working)
	{
		return;
	}
	_Scheduler_working = true;
	while (proc = _Scheduler_queue.shift())
	{
		_Scheduler_step(proc);
	}
	_Scheduler_working = false;
}


function _Scheduler_step(proc)
{
	while (proc.f)
	{
		var rootTag = proc.f.$;
		if (rootTag === 0 || rootTag === 1)
		{
			while (proc.g && proc.g.$ !== rootTag)
			{
				proc.g = proc.g.i;
			}
			if (!proc.g)
			{
				return;
			}
			proc.f = proc.g.b(proc.f.a);
			proc.g = proc.g.i;
		}
		else if (rootTag === 2)
		{
			proc.f.c = proc.f.b(function(newRoot) {
				proc.f = newRoot;
				_Scheduler_enqueue(proc);
			});
			return;
		}
		else if (rootTag === 5)
		{
			if (proc.h.length === 0)
			{
				return;
			}
			proc.f = proc.f.b(proc.h.shift());
		}
		else // if (rootTag === 3 || rootTag === 4)
		{
			proc.g = {
				$: rootTag === 3 ? 0 : 1,
				b: proc.f.b,
				i: proc.g
			};
			proc.f = proc.f.d;
		}
	}
}



function _Process_sleep(time)
{
	return _Scheduler_binding(function(callback) {
		var id = setTimeout(function() {
			callback(_Scheduler_succeed(_Utils_Tuple0));
		}, time);

		return function() { clearTimeout(id); };
	});
}




// PROGRAMS


var _Platform_worker = F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.init,
		impl.update,
		impl.subscriptions,
		function() { return function() {} }
	);
});



// INITIALIZE A PROGRAM


function _Platform_initialize(flagDecoder, args, init, update, subscriptions, stepperBuilder)
{
	var result = A2(_Json_run, flagDecoder, _Json_wrap(args ? args['flags'] : undefined));
	elm$core$Result$isOk(result) || _Debug_crash(2 /**/, _Json_errorToString(result.a) /**/);
	var managers = {};
	result = init(result.a);
	var model = result.a;
	var stepper = stepperBuilder(sendToApp, model);
	var ports = _Platform_setupEffects(managers, sendToApp);

	function sendToApp(msg, viewMetadata)
	{
		result = A2(update, msg, model);
		stepper(model = result.a, viewMetadata);
		_Platform_dispatchEffects(managers, result.b, subscriptions(model));
	}

	_Platform_dispatchEffects(managers, result.b, subscriptions(model));

	return ports ? { ports: ports } : {};
}



// TRACK PRELOADS
//
// This is used by code in elm/browser and elm/http
// to register any HTTP requests that are triggered by init.
//


var _Platform_preload;


function _Platform_registerPreload(url)
{
	_Platform_preload.add(url);
}



// EFFECT MANAGERS


var _Platform_effectManagers = {};


function _Platform_setupEffects(managers, sendToApp)
{
	var ports;

	// setup all necessary effect managers
	for (var key in _Platform_effectManagers)
	{
		var manager = _Platform_effectManagers[key];

		if (manager.a)
		{
			ports = ports || {};
			ports[key] = manager.a(key, sendToApp);
		}

		managers[key] = _Platform_instantiateManager(manager, sendToApp);
	}

	return ports;
}


function _Platform_createManager(init, onEffects, onSelfMsg, cmdMap, subMap)
{
	return {
		b: init,
		c: onEffects,
		d: onSelfMsg,
		e: cmdMap,
		f: subMap
	};
}


function _Platform_instantiateManager(info, sendToApp)
{
	var router = {
		g: sendToApp,
		h: undefined
	};

	var onEffects = info.c;
	var onSelfMsg = info.d;
	var cmdMap = info.e;
	var subMap = info.f;

	function loop(state)
	{
		return A2(_Scheduler_andThen, loop, _Scheduler_receive(function(msg)
		{
			var value = msg.a;

			if (msg.$ === 0)
			{
				return A3(onSelfMsg, router, value, state);
			}

			return cmdMap && subMap
				? A4(onEffects, router, value.i, value.j, state)
				: A3(onEffects, router, cmdMap ? value.i : value.j, state);
		}));
	}

	return router.h = _Scheduler_rawSpawn(A2(_Scheduler_andThen, loop, info.b));
}



// ROUTING


var _Platform_sendToApp = F2(function(router, msg)
{
	return _Scheduler_binding(function(callback)
	{
		router.g(msg);
		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
});


var _Platform_sendToSelf = F2(function(router, msg)
{
	return A2(_Scheduler_send, router.h, {
		$: 0,
		a: msg
	});
});



// BAGS


function _Platform_leaf(home)
{
	return function(value)
	{
		return {
			$: 1,
			k: home,
			l: value
		};
	};
}


function _Platform_batch(list)
{
	return {
		$: 2,
		m: list
	};
}


var _Platform_map = F2(function(tagger, bag)
{
	return {
		$: 3,
		n: tagger,
		o: bag
	}
});



// PIPE BAGS INTO EFFECT MANAGERS


function _Platform_dispatchEffects(managers, cmdBag, subBag)
{
	var effectsDict = {};
	_Platform_gatherEffects(true, cmdBag, effectsDict, null);
	_Platform_gatherEffects(false, subBag, effectsDict, null);

	for (var home in managers)
	{
		_Scheduler_rawSend(managers[home], {
			$: 'fx',
			a: effectsDict[home] || { i: _List_Nil, j: _List_Nil }
		});
	}
}


function _Platform_gatherEffects(isCmd, bag, effectsDict, taggers)
{
	switch (bag.$)
	{
		case 1:
			var home = bag.k;
			var effect = _Platform_toEffect(isCmd, home, taggers, bag.l);
			effectsDict[home] = _Platform_insert(isCmd, effect, effectsDict[home]);
			return;

		case 2:
			for (var list = bag.m; list.b; list = list.b) // WHILE_CONS
			{
				_Platform_gatherEffects(isCmd, list.a, effectsDict, taggers);
			}
			return;

		case 3:
			_Platform_gatherEffects(isCmd, bag.o, effectsDict, {
				p: bag.n,
				q: taggers
			});
			return;
	}
}


function _Platform_toEffect(isCmd, home, taggers, value)
{
	function applyTaggers(x)
	{
		for (var temp = taggers; temp; temp = temp.q)
		{
			x = temp.p(x);
		}
		return x;
	}

	var map = isCmd
		? _Platform_effectManagers[home].e
		: _Platform_effectManagers[home].f;

	return A2(map, applyTaggers, value)
}


function _Platform_insert(isCmd, newEffect, effects)
{
	effects = effects || { i: _List_Nil, j: _List_Nil };

	isCmd
		? (effects.i = _List_Cons(newEffect, effects.i))
		: (effects.j = _List_Cons(newEffect, effects.j));

	return effects;
}



// PORTS


function _Platform_checkPortName(name)
{
	if (_Platform_effectManagers[name])
	{
		_Debug_crash(3, name)
	}
}



// OUTGOING PORTS


function _Platform_outgoingPort(name, converter)
{
	_Platform_checkPortName(name);
	_Platform_effectManagers[name] = {
		e: _Platform_outgoingPortMap,
		r: converter,
		a: _Platform_setupOutgoingPort
	};
	return _Platform_leaf(name);
}


var _Platform_outgoingPortMap = F2(function(tagger, value) { return value; });


function _Platform_setupOutgoingPort(name)
{
	var subs = [];
	var converter = _Platform_effectManagers[name].r;

	// CREATE MANAGER

	var init = _Process_sleep(0);

	_Platform_effectManagers[name].b = init;
	_Platform_effectManagers[name].c = F3(function(router, cmdList, state)
	{
		for ( ; cmdList.b; cmdList = cmdList.b) // WHILE_CONS
		{
			// grab a separate reference to subs in case unsubscribe is called
			var currentSubs = subs;
			var value = _Json_unwrap(converter(cmdList.a));
			for (var i = 0; i < currentSubs.length; i++)
			{
				currentSubs[i](value);
			}
		}
		return init;
	});

	// PUBLIC API

	function subscribe(callback)
	{
		subs.push(callback);
	}

	function unsubscribe(callback)
	{
		// copy subs into a new array in case unsubscribe is called within a
		// subscribed callback
		subs = subs.slice();
		var index = subs.indexOf(callback);
		if (index >= 0)
		{
			subs.splice(index, 1);
		}
	}

	return {
		subscribe: subscribe,
		unsubscribe: unsubscribe
	};
}



// INCOMING PORTS


function _Platform_incomingPort(name, converter)
{
	_Platform_checkPortName(name);
	_Platform_effectManagers[name] = {
		f: _Platform_incomingPortMap,
		r: converter,
		a: _Platform_setupIncomingPort
	};
	return _Platform_leaf(name);
}


var _Platform_incomingPortMap = F2(function(tagger, finalTagger)
{
	return function(value)
	{
		return tagger(finalTagger(value));
	};
});


function _Platform_setupIncomingPort(name, sendToApp)
{
	var subs = _List_Nil;
	var converter = _Platform_effectManagers[name].r;

	// CREATE MANAGER

	var init = _Scheduler_succeed(null);

	_Platform_effectManagers[name].b = init;
	_Platform_effectManagers[name].c = F3(function(router, subList, state)
	{
		subs = subList;
		return init;
	});

	// PUBLIC API

	function send(incomingValue)
	{
		var result = A2(_Json_run, converter, _Json_wrap(incomingValue));

		elm$core$Result$isOk(result) || _Debug_crash(4, name, result.a);

		var value = result.a;
		for (var temp = subs; temp.b; temp = temp.b) // WHILE_CONS
		{
			sendToApp(temp.a(value));
		}
	}

	return { send: send };
}



// EXPORT ELM MODULES
//
// Have DEBUG and PROD versions so that we can (1) give nicer errors in
// debug mode and (2) not pay for the bits needed for that in prod mode.
//


function _Platform_export_UNUSED(exports)
{
	scope['Elm']
		? _Platform_mergeExportsProd(scope['Elm'], exports)
		: scope['Elm'] = exports;
}


function _Platform_mergeExportsProd(obj, exports)
{
	for (var name in exports)
	{
		(name in obj)
			? (name == 'init')
				? _Debug_crash(6)
				: _Platform_mergeExportsProd(obj[name], exports[name])
			: (obj[name] = exports[name]);
	}
}


function _Platform_export(exports)
{
	scope['Elm']
		? _Platform_mergeExportsDebug('Elm', scope['Elm'], exports)
		: scope['Elm'] = exports;
}


function _Platform_mergeExportsDebug(moduleName, obj, exports)
{
	for (var name in exports)
	{
		(name in obj)
			? (name == 'init')
				? _Debug_crash(6, moduleName)
				: _Platform_mergeExportsDebug(moduleName + '.' + name, obj[name], exports[name])
			: (obj[name] = exports[name]);
	}
}




// STRINGS


var _Parser_isSubString = F5(function(smallString, offset, row, col, bigString)
{
	var smallLength = smallString.length;
	var isGood = offset + smallLength <= bigString.length;

	for (var i = 0; isGood && i < smallLength; )
	{
		var code = bigString.charCodeAt(offset);
		isGood =
			smallString[i++] === bigString[offset++]
			&& (
				code === 0x000A /* \n */
					? ( row++, col=1 )
					: ( col++, (code & 0xF800) === 0xD800 ? smallString[i++] === bigString[offset++] : 1 )
			)
	}

	return _Utils_Tuple3(isGood ? offset : -1, row, col);
});



// CHARS


var _Parser_isSubChar = F3(function(predicate, offset, string)
{
	return (
		string.length <= offset
			? -1
			:
		(string.charCodeAt(offset) & 0xF800) === 0xD800
			? (predicate(_Utils_chr(string.substr(offset, 2))) ? offset + 2 : -1)
			:
		(predicate(_Utils_chr(string[offset]))
			? ((string[offset] === '\n') ? -2 : (offset + 1))
			: -1
		)
	);
});


var _Parser_isAsciiCode = F3(function(code, offset, string)
{
	return string.charCodeAt(offset) === code;
});



// NUMBERS


var _Parser_chompBase10 = F2(function(offset, string)
{
	for (; offset < string.length; offset++)
	{
		var code = string.charCodeAt(offset);
		if (code < 0x30 || 0x39 < code)
		{
			return offset;
		}
	}
	return offset;
});


var _Parser_consumeBase = F3(function(base, offset, string)
{
	for (var total = 0; offset < string.length; offset++)
	{
		var digit = string.charCodeAt(offset) - 0x30;
		if (digit < 0 || base <= digit) break;
		total = base * total + digit;
	}
	return _Utils_Tuple2(offset, total);
});


var _Parser_consumeBase16 = F2(function(offset, string)
{
	for (var total = 0; offset < string.length; offset++)
	{
		var code = string.charCodeAt(offset);
		if (0x30 <= code && code <= 0x39)
		{
			total = 16 * total + code - 0x30;
		}
		else if (0x41 <= code && code <= 0x46)
		{
			total = 16 * total + code - 55;
		}
		else if (0x61 <= code && code <= 0x66)
		{
			total = 16 * total + code - 87;
		}
		else
		{
			break;
		}
	}
	return _Utils_Tuple2(offset, total);
});



// FIND STRING


var _Parser_findSubString = F5(function(smallString, offset, row, col, bigString)
{
	var newOffset = bigString.indexOf(smallString, offset);
	var target = newOffset < 0 ? bigString.length : newOffset + smallString.length;

	while (offset < target)
	{
		var code = bigString.charCodeAt(offset++);
		code === 0x000A /* \n */
			? ( col=1, row++ )
			: ( col++, (code & 0xF800) === 0xD800 && offset++ )
	}

	return _Utils_Tuple3(newOffset, row, col);
});



var _Bitwise_and = F2(function(a, b)
{
	return a & b;
});

var _Bitwise_or = F2(function(a, b)
{
	return a | b;
});

var _Bitwise_xor = F2(function(a, b)
{
	return a ^ b;
});

function _Bitwise_complement(a)
{
	return ~a;
};

var _Bitwise_shiftLeftBy = F2(function(offset, a)
{
	return a << offset;
});

var _Bitwise_shiftRightBy = F2(function(offset, a)
{
	return a >> offset;
});

var _Bitwise_shiftRightZfBy = F2(function(offset, a)
{
	return a >>> offset;
});
var author$project$Main$Options = function (inputFiles) {
	return {inputFiles: inputFiles};
};
var dillonkearns$elm_cli_options_parser$Cli$Decode$Decoder = function (a) {
	return {$: 'Decoder', a: a};
};
var elm$core$Basics$identity = function (x) {
	return x;
};
var elm$core$Result$Ok = function (a) {
	return {$: 'Ok', a: a};
};
var elm$core$Basics$EQ = {$: 'EQ'};
var elm$core$Basics$LT = {$: 'LT'};
var elm$core$Elm$JsArray$foldr = _JsArray_foldr;
var elm$core$Array$foldr = F3(
	function (func, baseCase, _n0) {
		var tree = _n0.c;
		var tail = _n0.d;
		var helper = F2(
			function (node, acc) {
				if (node.$ === 'SubTree') {
					var subTree = node.a;
					return A3(elm$core$Elm$JsArray$foldr, helper, acc, subTree);
				} else {
					var values = node.a;
					return A3(elm$core$Elm$JsArray$foldr, func, acc, values);
				}
			});
		return A3(
			elm$core$Elm$JsArray$foldr,
			helper,
			A3(elm$core$Elm$JsArray$foldr, func, baseCase, tail),
			tree);
	});
var elm$core$List$cons = _List_cons;
var elm$core$Array$toList = function (array) {
	return A3(elm$core$Array$foldr, elm$core$List$cons, _List_Nil, array);
};
var elm$core$Basics$GT = {$: 'GT'};
var elm$core$Dict$foldr = F3(
	function (func, acc, t) {
		foldr:
		while (true) {
			if (t.$ === 'RBEmpty_elm_builtin') {
				return acc;
			} else {
				var key = t.b;
				var value = t.c;
				var left = t.d;
				var right = t.e;
				var $temp$func = func,
					$temp$acc = A3(
					func,
					key,
					value,
					A3(elm$core$Dict$foldr, func, acc, right)),
					$temp$t = left;
				func = $temp$func;
				acc = $temp$acc;
				t = $temp$t;
				continue foldr;
			}
		}
	});
var elm$core$Dict$toList = function (dict) {
	return A3(
		elm$core$Dict$foldr,
		F3(
			function (key, value, list) {
				return A2(
					elm$core$List$cons,
					_Utils_Tuple2(key, value),
					list);
			}),
		_List_Nil,
		dict);
};
var elm$core$Dict$keys = function (dict) {
	return A3(
		elm$core$Dict$foldr,
		F3(
			function (key, value, keyList) {
				return A2(elm$core$List$cons, key, keyList);
			}),
		_List_Nil,
		dict);
};
var elm$core$Set$toList = function (_n0) {
	var dict = _n0.a;
	return elm$core$Dict$keys(dict);
};
var dillonkearns$elm_cli_options_parser$Cli$Decode$decoder = dillonkearns$elm_cli_options_parser$Cli$Decode$Decoder(
	function (value) {
		return elm$core$Result$Ok(
			_Utils_Tuple2(_List_Nil, value));
	});
var dillonkearns$elm_cli_options_parser$Cli$Option$Option = function (a) {
	return {$: 'Option', a: a};
};
var dillonkearns$elm_cli_options_parser$Cli$Option$buildOption = F2(
	function (dataGrabber, usageSpec) {
		return dillonkearns$elm_cli_options_parser$Cli$Option$Option(
			{dataGrabber: dataGrabber, decoder: dillonkearns$elm_cli_options_parser$Cli$Decode$decoder, usageSpec: usageSpec});
	});
var elm$core$Basics$apR = F2(
	function (x, f) {
		return f(x);
	});
var elm$core$Basics$add = _Basics_add;
var elm$core$Basics$gt = _Utils_gt;
var elm$core$List$foldl = F3(
	function (func, acc, list) {
		foldl:
		while (true) {
			if (!list.b) {
				return acc;
			} else {
				var x = list.a;
				var xs = list.b;
				var $temp$func = func,
					$temp$acc = A2(func, x, acc),
					$temp$list = xs;
				func = $temp$func;
				acc = $temp$acc;
				list = $temp$list;
				continue foldl;
			}
		}
	});
var elm$core$List$reverse = function (list) {
	return A3(elm$core$List$foldl, elm$core$List$cons, _List_Nil, list);
};
var elm$core$List$foldrHelper = F4(
	function (fn, acc, ctr, ls) {
		if (!ls.b) {
			return acc;
		} else {
			var a = ls.a;
			var r1 = ls.b;
			if (!r1.b) {
				return A2(fn, a, acc);
			} else {
				var b = r1.a;
				var r2 = r1.b;
				if (!r2.b) {
					return A2(
						fn,
						a,
						A2(fn, b, acc));
				} else {
					var c = r2.a;
					var r3 = r2.b;
					if (!r3.b) {
						return A2(
							fn,
							a,
							A2(
								fn,
								b,
								A2(fn, c, acc)));
					} else {
						var d = r3.a;
						var r4 = r3.b;
						var res = (ctr > 500) ? A3(
							elm$core$List$foldl,
							fn,
							acc,
							elm$core$List$reverse(r4)) : A4(elm$core$List$foldrHelper, fn, acc, ctr + 1, r4);
						return A2(
							fn,
							a,
							A2(
								fn,
								b,
								A2(
									fn,
									c,
									A2(fn, d, res))));
					}
				}
			}
		}
	});
var elm$core$List$foldr = F3(
	function (fn, acc, ls) {
		return A4(elm$core$List$foldrHelper, fn, acc, 0, ls);
	});
var elm$core$List$maybeCons = F3(
	function (f, mx, xs) {
		var _n0 = f(mx);
		if (_n0.$ === 'Just') {
			var x = _n0.a;
			return A2(elm$core$List$cons, x, xs);
		} else {
			return xs;
		}
	});
var elm$core$List$filterMap = F2(
	function (f, xs) {
		return A3(
			elm$core$List$foldr,
			elm$core$List$maybeCons(f),
			_List_Nil,
			xs);
	});
var elm$core$List$length = function (xs) {
	return A3(
		elm$core$List$foldl,
		F2(
			function (_n0, i) {
				return i + 1;
			}),
		0,
		xs);
};
var elm$core$Maybe$Just = function (a) {
	return {$: 'Just', a: a};
};
var elm$core$Maybe$Nothing = {$: 'Nothing'};
var dillonkearns$elm_cli_options_parser$Cli$UsageSpec$operandCount = function (usageSpecs) {
	return elm$core$List$length(
		A2(
			elm$core$List$filterMap,
			function (spec) {
				switch (spec.$) {
					case 'FlagOrKeywordArg':
						return elm$core$Maybe$Nothing;
					case 'Operand':
						var operandName = spec.a;
						var mutuallyExclusiveValues = spec.b;
						var occurences = spec.c;
						return elm$core$Maybe$Just(operandName);
					default:
						return elm$core$Maybe$Nothing;
				}
			},
			usageSpecs));
};
var dillonkearns$elm_cli_options_parser$Cli$UsageSpec$RestArgs = function (a) {
	return {$: 'RestArgs', a: a};
};
var dillonkearns$elm_cli_options_parser$Cli$UsageSpec$restArgs = function (restArgsName) {
	return dillonkearns$elm_cli_options_parser$Cli$UsageSpec$RestArgs(restArgsName);
};
var elm$core$Basics$le = _Utils_le;
var elm$core$Basics$sub = _Basics_sub;
var elm$core$List$drop = F2(
	function (n, list) {
		drop:
		while (true) {
			if (n <= 0) {
				return list;
			} else {
				if (!list.b) {
					return list;
				} else {
					var x = list.a;
					var xs = list.b;
					var $temp$n = n - 1,
						$temp$list = xs;
					n = $temp$n;
					list = $temp$list;
					continue drop;
				}
			}
		}
	});
var dillonkearns$elm_cli_options_parser$Cli$Option$restArgs = function (restArgsDescription) {
	return A2(
		dillonkearns$elm_cli_options_parser$Cli$Option$buildOption,
		function (_n0) {
			var operands = _n0.operands;
			var usageSpecs = _n0.usageSpecs;
			return elm$core$Result$Ok(
				A2(
					elm$core$List$drop,
					dillonkearns$elm_cli_options_parser$Cli$UsageSpec$operandCount(usageSpecs),
					operands));
		},
		dillonkearns$elm_cli_options_parser$Cli$UsageSpec$restArgs(restArgsDescription));
};
var dillonkearns$elm_cli_options_parser$Cli$OptionsParser$OptionsParser = function (a) {
	return {$: 'OptionsParser', a: a};
};
var dillonkearns$elm_cli_options_parser$Cli$OptionsParser$build = function (cliOptionsConstructor) {
	return dillonkearns$elm_cli_options_parser$Cli$OptionsParser$OptionsParser(
		{
			decoder: function (_n0) {
				return elm$core$Result$Ok(
					_Utils_Tuple2(_List_Nil, cliOptionsConstructor));
			},
			description: elm$core$Maybe$Nothing,
			subCommand: elm$core$Maybe$Nothing,
			usageSpecs: _List_Nil
		});
};
var dillonkearns$elm_cli_options_parser$Cli$Decode$decodeFunction = function (_n0) {
	var decodeFn = _n0.a;
	return decodeFn;
};
var elm$core$Result$Err = function (a) {
	return {$: 'Err', a: a};
};
var elm$core$Result$map = F2(
	function (func, ra) {
		if (ra.$ === 'Ok') {
			var a = ra.a;
			return elm$core$Result$Ok(
				func(a));
		} else {
			var e = ra.a;
			return elm$core$Result$Err(e);
		}
	});
var dillonkearns$elm_cli_options_parser$Cli$OptionsParser$resultMap = F2(
	function (mapFunction, result) {
		return A2(
			elm$core$Result$map,
			function (_n0) {
				var validationErrors = _n0.a;
				var value = _n0.b;
				return _Utils_Tuple2(
					validationErrors,
					mapFunction(value));
			},
			result);
	});
var dillonkearns$elm_cli_options_parser$Cli$OptionsParser$updateDecoder = F2(
	function (decoder, _n0) {
		var optionsParserRecord = _n0.a;
		return dillonkearns$elm_cli_options_parser$Cli$OptionsParser$OptionsParser(
			{decoder: decoder, description: optionsParserRecord.description, subCommand: optionsParserRecord.subCommand, usageSpecs: optionsParserRecord.usageSpecs});
	});
var elm$core$Basics$append = _Utils_append;
var elm$core$Result$andThen = F2(
	function (callback, result) {
		if (result.$ === 'Ok') {
			var value = result.a;
			return callback(value);
		} else {
			var msg = result.a;
			return elm$core$Result$Err(msg);
		}
	});
var dillonkearns$elm_cli_options_parser$Cli$OptionsParser$withCommon = F2(
	function (_n0, fullOptionsParser) {
		var innerOption = _n0.a;
		var optionsParser = fullOptionsParser.a;
		var decoder = optionsParser.decoder;
		var usageSpecs = optionsParser.usageSpecs;
		return function (_n4) {
			var record = _n4.a;
			return dillonkearns$elm_cli_options_parser$Cli$OptionsParser$OptionsParser(
				_Utils_update(
					record,
					{
						usageSpecs: _Utils_ap(
							usageSpecs,
							_List_fromArray(
								[innerOption.usageSpec]))
					}));
		}(
			A2(
				dillonkearns$elm_cli_options_parser$Cli$OptionsParser$updateDecoder,
				function (optionsAndOperands) {
					return A2(
						elm$core$Result$andThen,
						function (_n1) {
							var validationErrors = _n1.a;
							var fromValue = _n1.b;
							var _n2 = A2(
								dillonkearns$elm_cli_options_parser$Cli$OptionsParser$resultMap,
								function (fn) {
									return fn(fromValue);
								},
								decoder(optionsAndOperands));
							if (_n2.$ === 'Ok') {
								var _n3 = _n2.a;
								var previousValidationErrors = _n3.a;
								var thing = _n3.b;
								return elm$core$Result$Ok(
									_Utils_Tuple2(
										_Utils_ap(previousValidationErrors, validationErrors),
										thing));
							} else {
								var value = _n2;
								return value;
							}
						},
						A2(
							elm$core$Result$andThen,
							dillonkearns$elm_cli_options_parser$Cli$Decode$decodeFunction(innerOption.decoder),
							innerOption.dataGrabber(
								{
									operands: optionsAndOperands.operands,
									operandsSoFar: dillonkearns$elm_cli_options_parser$Cli$UsageSpec$operandCount(usageSpecs),
									options: optionsAndOperands.options,
									usageSpecs: optionsAndOperands.usageSpecs
								})));
				},
				fullOptionsParser));
	});
var dillonkearns$elm_cli_options_parser$Cli$OptionsParser$withRestArgs = dillonkearns$elm_cli_options_parser$Cli$OptionsParser$withCommon;
var dillonkearns$elm_cli_options_parser$Cli$OptionsParser$end = function (_n0) {
	var record = _n0.a;
	return dillonkearns$elm_cli_options_parser$Cli$OptionsParser$OptionsParser(record);
};
var dillonkearns$elm_cli_options_parser$Cli$Program$Config = function (a) {
	return {$: 'Config', a: a};
};
var dillonkearns$elm_cli_options_parser$Cli$Program$add = F2(
	function (optionsParser, _n0) {
		var programRecord = _n0.a;
		var optionsParsers = programRecord.optionsParsers;
		return dillonkearns$elm_cli_options_parser$Cli$Program$Config(
			_Utils_update(
				programRecord,
				{
					optionsParsers: _Utils_ap(
						optionsParsers,
						_List_fromArray(
							[
								dillonkearns$elm_cli_options_parser$Cli$OptionsParser$end(optionsParser)
							]))
				}));
	});
var dillonkearns$elm_cli_options_parser$Cli$Program$config = dillonkearns$elm_cli_options_parser$Cli$Program$Config(
	{optionsParsers: _List_Nil});
var author$project$Main$config = A2(
	dillonkearns$elm_cli_options_parser$Cli$Program$add,
	A2(
		dillonkearns$elm_cli_options_parser$Cli$OptionsParser$withRestArgs,
		dillonkearns$elm_cli_options_parser$Cli$Option$restArgs('INPUTFILES'),
		dillonkearns$elm_cli_options_parser$Cli$OptionsParser$build(author$project$Main$Options)),
	dillonkearns$elm_cli_options_parser$Cli$Program$config);
var author$project$Main$request = _Platform_outgoingPort('request', elm$core$Basics$identity);
var elm$core$Basics$apL = F2(
	function (f, x) {
		return f(x);
	});
var elm$core$Array$branchFactor = 32;
var elm$core$Array$Array_elm_builtin = F4(
	function (a, b, c, d) {
		return {$: 'Array_elm_builtin', a: a, b: b, c: c, d: d};
	});
var elm$core$Basics$ceiling = _Basics_ceiling;
var elm$core$Basics$fdiv = _Basics_fdiv;
var elm$core$Basics$logBase = F2(
	function (base, number) {
		return _Basics_log(number) / _Basics_log(base);
	});
var elm$core$Basics$toFloat = _Basics_toFloat;
var elm$core$Array$shiftStep = elm$core$Basics$ceiling(
	A2(elm$core$Basics$logBase, 2, elm$core$Array$branchFactor));
var elm$core$Elm$JsArray$empty = _JsArray_empty;
var elm$core$Array$empty = A4(elm$core$Array$Array_elm_builtin, 0, elm$core$Array$shiftStep, elm$core$Elm$JsArray$empty, elm$core$Elm$JsArray$empty);
var elm$core$Array$Leaf = function (a) {
	return {$: 'Leaf', a: a};
};
var elm$core$Array$SubTree = function (a) {
	return {$: 'SubTree', a: a};
};
var elm$core$Elm$JsArray$initializeFromList = _JsArray_initializeFromList;
var elm$core$Array$compressNodes = F2(
	function (nodes, acc) {
		compressNodes:
		while (true) {
			var _n0 = A2(elm$core$Elm$JsArray$initializeFromList, elm$core$Array$branchFactor, nodes);
			var node = _n0.a;
			var remainingNodes = _n0.b;
			var newAcc = A2(
				elm$core$List$cons,
				elm$core$Array$SubTree(node),
				acc);
			if (!remainingNodes.b) {
				return elm$core$List$reverse(newAcc);
			} else {
				var $temp$nodes = remainingNodes,
					$temp$acc = newAcc;
				nodes = $temp$nodes;
				acc = $temp$acc;
				continue compressNodes;
			}
		}
	});
var elm$core$Basics$eq = _Utils_equal;
var elm$core$Tuple$first = function (_n0) {
	var x = _n0.a;
	return x;
};
var elm$core$Array$treeFromBuilder = F2(
	function (nodeList, nodeListSize) {
		treeFromBuilder:
		while (true) {
			var newNodeSize = elm$core$Basics$ceiling(nodeListSize / elm$core$Array$branchFactor);
			if (newNodeSize === 1) {
				return A2(elm$core$Elm$JsArray$initializeFromList, elm$core$Array$branchFactor, nodeList).a;
			} else {
				var $temp$nodeList = A2(elm$core$Array$compressNodes, nodeList, _List_Nil),
					$temp$nodeListSize = newNodeSize;
				nodeList = $temp$nodeList;
				nodeListSize = $temp$nodeListSize;
				continue treeFromBuilder;
			}
		}
	});
var elm$core$Basics$floor = _Basics_floor;
var elm$core$Basics$max = F2(
	function (x, y) {
		return (_Utils_cmp(x, y) > 0) ? x : y;
	});
var elm$core$Basics$mul = _Basics_mul;
var elm$core$Elm$JsArray$length = _JsArray_length;
var elm$core$Array$builderToArray = F2(
	function (reverseNodeList, builder) {
		if (!builder.nodeListSize) {
			return A4(
				elm$core$Array$Array_elm_builtin,
				elm$core$Elm$JsArray$length(builder.tail),
				elm$core$Array$shiftStep,
				elm$core$Elm$JsArray$empty,
				builder.tail);
		} else {
			var treeLen = builder.nodeListSize * elm$core$Array$branchFactor;
			var depth = elm$core$Basics$floor(
				A2(elm$core$Basics$logBase, elm$core$Array$branchFactor, treeLen - 1));
			var correctNodeList = reverseNodeList ? elm$core$List$reverse(builder.nodeList) : builder.nodeList;
			var tree = A2(elm$core$Array$treeFromBuilder, correctNodeList, builder.nodeListSize);
			return A4(
				elm$core$Array$Array_elm_builtin,
				elm$core$Elm$JsArray$length(builder.tail) + treeLen,
				A2(elm$core$Basics$max, 5, depth * elm$core$Array$shiftStep),
				tree,
				builder.tail);
		}
	});
var elm$core$Basics$False = {$: 'False'};
var elm$core$Basics$idiv = _Basics_idiv;
var elm$core$Basics$lt = _Utils_lt;
var elm$core$Elm$JsArray$initialize = _JsArray_initialize;
var elm$core$Array$initializeHelp = F5(
	function (fn, fromIndex, len, nodeList, tail) {
		initializeHelp:
		while (true) {
			if (fromIndex < 0) {
				return A2(
					elm$core$Array$builderToArray,
					false,
					{nodeList: nodeList, nodeListSize: (len / elm$core$Array$branchFactor) | 0, tail: tail});
			} else {
				var leaf = elm$core$Array$Leaf(
					A3(elm$core$Elm$JsArray$initialize, elm$core$Array$branchFactor, fromIndex, fn));
				var $temp$fn = fn,
					$temp$fromIndex = fromIndex - elm$core$Array$branchFactor,
					$temp$len = len,
					$temp$nodeList = A2(elm$core$List$cons, leaf, nodeList),
					$temp$tail = tail;
				fn = $temp$fn;
				fromIndex = $temp$fromIndex;
				len = $temp$len;
				nodeList = $temp$nodeList;
				tail = $temp$tail;
				continue initializeHelp;
			}
		}
	});
var elm$core$Basics$remainderBy = _Basics_remainderBy;
var elm$core$Array$initialize = F2(
	function (len, fn) {
		if (len <= 0) {
			return elm$core$Array$empty;
		} else {
			var tailLen = len % elm$core$Array$branchFactor;
			var tail = A3(elm$core$Elm$JsArray$initialize, tailLen, len - tailLen, fn);
			var initialFromIndex = (len - tailLen) - elm$core$Array$branchFactor;
			return A5(elm$core$Array$initializeHelp, fn, initialFromIndex, len, _List_Nil, tail);
		}
	});
var elm$core$Basics$True = {$: 'True'};
var elm$core$Result$isOk = function (result) {
	if (result.$ === 'Ok') {
		return true;
	} else {
		return false;
	}
};
var elm$json$Json$Decode$Failure = F2(
	function (a, b) {
		return {$: 'Failure', a: a, b: b};
	});
var elm$json$Json$Decode$Field = F2(
	function (a, b) {
		return {$: 'Field', a: a, b: b};
	});
var elm$json$Json$Decode$Index = F2(
	function (a, b) {
		return {$: 'Index', a: a, b: b};
	});
var elm$json$Json$Decode$OneOf = function (a) {
	return {$: 'OneOf', a: a};
};
var elm$core$Basics$and = _Basics_and;
var elm$core$Basics$or = _Basics_or;
var elm$core$Char$toCode = _Char_toCode;
var elm$core$Char$isLower = function (_char) {
	var code = elm$core$Char$toCode(_char);
	return (97 <= code) && (code <= 122);
};
var elm$core$Char$isUpper = function (_char) {
	var code = elm$core$Char$toCode(_char);
	return (code <= 90) && (65 <= code);
};
var elm$core$Char$isAlpha = function (_char) {
	return elm$core$Char$isLower(_char) || elm$core$Char$isUpper(_char);
};
var elm$core$Char$isDigit = function (_char) {
	var code = elm$core$Char$toCode(_char);
	return (code <= 57) && (48 <= code);
};
var elm$core$Char$isAlphaNum = function (_char) {
	return elm$core$Char$isLower(_char) || (elm$core$Char$isUpper(_char) || elm$core$Char$isDigit(_char));
};
var elm$core$List$map2 = _List_map2;
var elm$core$List$rangeHelp = F3(
	function (lo, hi, list) {
		rangeHelp:
		while (true) {
			if (_Utils_cmp(lo, hi) < 1) {
				var $temp$lo = lo,
					$temp$hi = hi - 1,
					$temp$list = A2(elm$core$List$cons, hi, list);
				lo = $temp$lo;
				hi = $temp$hi;
				list = $temp$list;
				continue rangeHelp;
			} else {
				return list;
			}
		}
	});
var elm$core$List$range = F2(
	function (lo, hi) {
		return A3(elm$core$List$rangeHelp, lo, hi, _List_Nil);
	});
var elm$core$List$indexedMap = F2(
	function (f, xs) {
		return A3(
			elm$core$List$map2,
			f,
			A2(
				elm$core$List$range,
				0,
				elm$core$List$length(xs) - 1),
			xs);
	});
var elm$core$String$all = _String_all;
var elm$core$String$fromInt = _String_fromNumber;
var elm$core$String$join = F2(
	function (sep, chunks) {
		return A2(
			_String_join,
			sep,
			_List_toArray(chunks));
	});
var elm$core$String$uncons = _String_uncons;
var elm$core$String$split = F2(
	function (sep, string) {
		return _List_fromArray(
			A2(_String_split, sep, string));
	});
var elm$json$Json$Decode$indent = function (str) {
	return A2(
		elm$core$String$join,
		'\n    ',
		A2(elm$core$String$split, '\n', str));
};
var elm$json$Json$Encode$encode = _Json_encode;
var elm$json$Json$Decode$errorOneOf = F2(
	function (i, error) {
		return '\n\n(' + (elm$core$String$fromInt(i + 1) + (') ' + elm$json$Json$Decode$indent(
			elm$json$Json$Decode$errorToString(error))));
	});
var elm$json$Json$Decode$errorToString = function (error) {
	return A2(elm$json$Json$Decode$errorToStringHelp, error, _List_Nil);
};
var elm$json$Json$Decode$errorToStringHelp = F2(
	function (error, context) {
		errorToStringHelp:
		while (true) {
			switch (error.$) {
				case 'Field':
					var f = error.a;
					var err = error.b;
					var isSimple = function () {
						var _n1 = elm$core$String$uncons(f);
						if (_n1.$ === 'Nothing') {
							return false;
						} else {
							var _n2 = _n1.a;
							var _char = _n2.a;
							var rest = _n2.b;
							return elm$core$Char$isAlpha(_char) && A2(elm$core$String$all, elm$core$Char$isAlphaNum, rest);
						}
					}();
					var fieldName = isSimple ? ('.' + f) : ('[\'' + (f + '\']'));
					var $temp$error = err,
						$temp$context = A2(elm$core$List$cons, fieldName, context);
					error = $temp$error;
					context = $temp$context;
					continue errorToStringHelp;
				case 'Index':
					var i = error.a;
					var err = error.b;
					var indexName = '[' + (elm$core$String$fromInt(i) + ']');
					var $temp$error = err,
						$temp$context = A2(elm$core$List$cons, indexName, context);
					error = $temp$error;
					context = $temp$context;
					continue errorToStringHelp;
				case 'OneOf':
					var errors = error.a;
					if (!errors.b) {
						return 'Ran into a Json.Decode.oneOf with no possibilities' + function () {
							if (!context.b) {
								return '!';
							} else {
								return ' at json' + A2(
									elm$core$String$join,
									'',
									elm$core$List$reverse(context));
							}
						}();
					} else {
						if (!errors.b.b) {
							var err = errors.a;
							var $temp$error = err,
								$temp$context = context;
							error = $temp$error;
							context = $temp$context;
							continue errorToStringHelp;
						} else {
							var starter = function () {
								if (!context.b) {
									return 'Json.Decode.oneOf';
								} else {
									return 'The Json.Decode.oneOf at json' + A2(
										elm$core$String$join,
										'',
										elm$core$List$reverse(context));
								}
							}();
							var introduction = starter + (' failed in the following ' + (elm$core$String$fromInt(
								elm$core$List$length(errors)) + ' ways:'));
							return A2(
								elm$core$String$join,
								'\n\n',
								A2(
									elm$core$List$cons,
									introduction,
									A2(elm$core$List$indexedMap, elm$json$Json$Decode$errorOneOf, errors)));
						}
					}
				default:
					var msg = error.a;
					var json = error.b;
					var introduction = function () {
						if (!context.b) {
							return 'Problem with the given value:\n\n';
						} else {
							return 'Problem with the value at json' + (A2(
								elm$core$String$join,
								'',
								elm$core$List$reverse(context)) + ':\n\n    ');
						}
					}();
					return introduction + (elm$json$Json$Decode$indent(
						A2(elm$json$Json$Encode$encode, 4, json)) + ('\n\n' + msg));
			}
		}
	});
var elm$json$Json$Encode$int = _Json_wrap;
var elm$json$Json$Encode$object = function (pairs) {
	return _Json_wrap(
		A3(
			elm$core$List$foldl,
			F2(
				function (_n0, obj) {
					var k = _n0.a;
					var v = _n0.b;
					return A3(_Json_addField, k, v, obj);
				}),
			_Json_emptyObject(_Utils_Tuple0),
			pairs));
};
var elm$json$Json$Encode$string = _Json_wrap;
var author$project$Main$exit = F2(
	function (exitCode, text) {
		return author$project$Main$request(
			elm$json$Json$Encode$object(
				_List_fromArray(
					[
						_Utils_Tuple2(
						'command',
						elm$json$Json$Encode$string('Exit')),
						_Utils_Tuple2(
						'exitCode',
						elm$json$Json$Encode$int(exitCode)),
						_Utils_Tuple2(
						'message',
						elm$json$Json$Encode$string(text))
					])));
	});
var author$project$Main$NoOp = {$: 'NoOp'};
var elm$core$Task$Perform = function (a) {
	return {$: 'Perform', a: a};
};
var elm$core$Task$succeed = _Scheduler_succeed;
var elm$core$Task$init = elm$core$Task$succeed(_Utils_Tuple0);
var elm$core$List$map = F2(
	function (f, xs) {
		return A3(
			elm$core$List$foldr,
			F2(
				function (x, acc) {
					return A2(
						elm$core$List$cons,
						f(x),
						acc);
				}),
			_List_Nil,
			xs);
	});
var elm$core$Task$andThen = _Scheduler_andThen;
var elm$core$Task$map = F2(
	function (func, taskA) {
		return A2(
			elm$core$Task$andThen,
			function (a) {
				return elm$core$Task$succeed(
					func(a));
			},
			taskA);
	});
var elm$core$Task$map2 = F3(
	function (func, taskA, taskB) {
		return A2(
			elm$core$Task$andThen,
			function (a) {
				return A2(
					elm$core$Task$andThen,
					function (b) {
						return elm$core$Task$succeed(
							A2(func, a, b));
					},
					taskB);
			},
			taskA);
	});
var elm$core$Task$sequence = function (tasks) {
	return A3(
		elm$core$List$foldr,
		elm$core$Task$map2(elm$core$List$cons),
		elm$core$Task$succeed(_List_Nil),
		tasks);
};
var elm$core$Platform$sendToApp = _Platform_sendToApp;
var elm$core$Task$spawnCmd = F2(
	function (router, _n0) {
		var task = _n0.a;
		return _Scheduler_spawn(
			A2(
				elm$core$Task$andThen,
				elm$core$Platform$sendToApp(router),
				task));
	});
var elm$core$Task$onEffects = F3(
	function (router, commands, state) {
		return A2(
			elm$core$Task$map,
			function (_n0) {
				return _Utils_Tuple0;
			},
			elm$core$Task$sequence(
				A2(
					elm$core$List$map,
					elm$core$Task$spawnCmd(router),
					commands)));
	});
var elm$core$Task$onSelfMsg = F3(
	function (_n0, _n1, _n2) {
		return elm$core$Task$succeed(_Utils_Tuple0);
	});
var elm$core$Task$cmdMap = F2(
	function (tagger, _n0) {
		var task = _n0.a;
		return elm$core$Task$Perform(
			A2(elm$core$Task$map, tagger, task));
	});
_Platform_effectManagers['Task'] = _Platform_createManager(elm$core$Task$init, elm$core$Task$onEffects, elm$core$Task$onSelfMsg, elm$core$Task$cmdMap);
var elm$core$Task$command = _Platform_leaf('Task');
var elm$core$Task$perform = F2(
	function (toMessage, task) {
		return elm$core$Task$command(
			elm$core$Task$Perform(
				A2(elm$core$Task$map, toMessage, task)));
	});
var author$project$Main$message = function (msg) {
	return A2(
		elm$core$Task$perform,
		elm$core$Basics$identity,
		elm$core$Task$succeed(msg));
};
var author$project$Main$Starting = function (a) {
	return {$: 'Starting', a: a};
};
var the_sett$elm_state_machines$StateMachine$State = function (a) {
	return {$: 'State', a: a};
};
var author$project$Main$toStarting = function (state) {
	return author$project$Main$Starting(
		the_sett$elm_state_machines$StateMachine$State(state));
};
var author$project$Main$init = F2(
	function (flags, options) {
		return _Utils_Tuple2(
			author$project$Main$toStarting(
				{files: options.inputFiles}),
			author$project$Main$message(author$project$Main$NoOp));
	});
var author$project$Main$Stderr = function (a) {
	return {$: 'Stderr', a: a};
};
var author$project$Main$Stdout = function (a) {
	return {$: 'Stdout', a: a};
};
var elm$json$Json$Decode$andThen = _Json_andThen;
var elm$json$Json$Decode$fail = _Json_fail;
var elm$json$Json$Decode$field = _Json_decodeField;
var elm$json$Json$Decode$int = _Json_decodeInt;
var elm$json$Json$Decode$map = _Json_map1;
var elm$json$Json$Decode$oneOf = _Json_oneOf;
var elm$json$Json$Decode$string = _Json_decodeString;
var elm$json$Json$Decode$succeed = _Json_succeed;
var elm$core$Maybe$withDefault = F2(
	function (_default, maybe) {
		if (maybe.$ === 'Just') {
			var value = maybe.a;
			return value;
		} else {
			return _default;
		}
	});
var elm$json$Json$Decode$maybe = function (decoder) {
	return elm$json$Json$Decode$oneOf(
		_List_fromArray(
			[
				A2(elm$json$Json$Decode$map, elm$core$Maybe$Just, decoder),
				elm$json$Json$Decode$succeed(elm$core$Maybe$Nothing)
			]));
};
var elm_community$json_extra$Json$Decode$Extra$withDefault = F2(
	function (fallback, decoder) {
		return A2(
			elm$json$Json$Decode$map,
			elm$core$Maybe$withDefault(fallback),
			elm$json$Json$Decode$maybe(decoder));
	});
var author$project$Main$decoder = elm$json$Json$Decode$oneOf(
	_List_fromArray(
		[
			A2(
			elm$json$Json$Decode$andThen,
			function (i) {
				return (!i) ? elm$json$Json$Decode$fail('never mind, move along') : A2(
					elm$json$Json$Decode$map,
					author$project$Main$Stderr,
					A2(
						elm_community$json_extra$Json$Decode$Extra$withDefault,
						'No stderr available',
						A2(elm$json$Json$Decode$field, 'stderr', elm$json$Json$Decode$string)));
			},
			A2(elm$json$Json$Decode$field, 'code', elm$json$Json$Decode$int)),
			A2(
			elm$json$Json$Decode$map,
			author$project$Main$Stdout,
			A2(elm$json$Json$Decode$field, 'stdout', elm$json$Json$Decode$string)),
			A2(
			elm$json$Json$Decode$map,
			author$project$Main$Stderr,
			elm$json$Json$Decode$succeed('could not match response'))
		]));
var elm$json$Json$Decode$value = _Json_decodeValue;
var author$project$Main$rawResponse = _Platform_incomingPort('rawResponse', elm$json$Json$Decode$value);
var elm$core$Basics$composeL = F3(
	function (g, f, x) {
		return g(
			f(x));
	});
var elm$core$Basics$composeR = F3(
	function (f, g, x) {
		return g(
			f(x));
	});
var elm$core$Platform$Sub$map = _Platform_map;
var elm$core$Result$mapError = F2(
	function (f, result) {
		if (result.$ === 'Ok') {
			var v = result.a;
			return elm$core$Result$Ok(v);
		} else {
			var e = result.a;
			return elm$core$Result$Err(
				f(e));
		}
	});
var elm$json$Json$Decode$decodeValue = _Json_run;
var elm_community$result_extra$Result$Extra$merge = function (r) {
	if (r.$ === 'Ok') {
		var rr = r.a;
		return rr;
	} else {
		var rr = r.a;
		return rr;
	}
};
var author$project$Main$response = A2(
	elm$core$Platform$Sub$map,
	A2(
		elm$core$Basics$composeR,
		elm$json$Json$Decode$decodeValue(author$project$Main$decoder),
		A2(
			elm$core$Basics$composeR,
			elm$core$Result$mapError(
				A2(elm$core$Basics$composeL, author$project$Main$Stderr, elm$json$Json$Decode$errorToString)),
			elm_community$result_extra$Result$Extra$merge)),
	author$project$Main$rawResponse(elm$core$Basics$identity));
var author$project$Main$subscriptions = function (model) {
	return author$project$Main$response;
};
var author$project$Main$fileReadRequest = function (file) {
	return author$project$Main$request(
		elm$json$Json$Encode$object(
			_List_fromArray(
				[
					_Utils_Tuple2(
					'command',
					elm$json$Json$Encode$string('FileRead')),
					_Utils_Tuple2(
					'file',
					elm$json$Json$Encode$string(file))
				])));
};
var author$project$Main$fileWriteRequest = F2(
	function (file, content) {
		return author$project$Main$request(
			elm$json$Json$Encode$object(
				_List_fromArray(
					[
						_Utils_Tuple2(
						'command',
						elm$json$Json$Encode$string('FileWrite')),
						_Utils_Tuple2(
						'file',
						elm$json$Json$Encode$string(file)),
						_Utils_Tuple2(
						'content',
						elm$json$Json$Encode$string(content))
					])));
	});
var elm$core$Debug$toString = _Debug_toString;
var elm$parser$Parser$DeadEnd = F3(
	function (row, col, problem) {
		return {col: col, problem: problem, row: row};
	});
var elm$parser$Parser$problemToDeadEnd = function (p) {
	return A3(elm$parser$Parser$DeadEnd, p.row, p.col, p.problem);
};
var elm$parser$Parser$Advanced$bagToList = F2(
	function (bag, list) {
		bagToList:
		while (true) {
			switch (bag.$) {
				case 'Empty':
					return list;
				case 'AddRight':
					var bag1 = bag.a;
					var x = bag.b;
					var $temp$bag = bag1,
						$temp$list = A2(elm$core$List$cons, x, list);
					bag = $temp$bag;
					list = $temp$list;
					continue bagToList;
				default:
					var bag1 = bag.a;
					var bag2 = bag.b;
					var $temp$bag = bag1,
						$temp$list = A2(elm$parser$Parser$Advanced$bagToList, bag2, list);
					bag = $temp$bag;
					list = $temp$list;
					continue bagToList;
			}
		}
	});
var elm$parser$Parser$Advanced$run = F2(
	function (_n0, src) {
		var parse = _n0.a;
		var _n1 = parse(
			{col: 1, context: _List_Nil, indent: 1, offset: 0, row: 1, src: src});
		if (_n1.$ === 'Good') {
			var value = _n1.b;
			return elm$core$Result$Ok(value);
		} else {
			var bag = _n1.b;
			return elm$core$Result$Err(
				A2(elm$parser$Parser$Advanced$bagToList, bag, _List_Nil));
		}
	});
var elm$parser$Parser$run = F2(
	function (parser, source) {
		var _n0 = A2(elm$parser$Parser$Advanced$run, parser, source);
		if (_n0.$ === 'Ok') {
			var a = _n0.a;
			return elm$core$Result$Ok(a);
		} else {
			var problems = _n0.a;
			return elm$core$Result$Err(
				A2(elm$core$List$map, elm$parser$Parser$problemToDeadEnd, problems));
		}
	});
var stil4m$elm_syntax$Combine$runParser = F3(
	function (_n0, st, s) {
		var p = _n0.a;
		return A2(
			elm$parser$Parser$run,
			p(st),
			s);
	});
var stil4m$elm_syntax$Elm$Internal$RawFile$Raw = function (a) {
	return {$: 'Raw', a: a};
};
var stil4m$elm_syntax$Elm$Internal$RawFile$fromFile = stil4m$elm_syntax$Elm$Internal$RawFile$Raw;
var elm$parser$Parser$ExpectingEnd = {$: 'ExpectingEnd'};
var elm$core$String$length = _String_length;
var elm$parser$Parser$Advanced$Bad = F2(
	function (a, b) {
		return {$: 'Bad', a: a, b: b};
	});
var elm$parser$Parser$Advanced$Good = F3(
	function (a, b, c) {
		return {$: 'Good', a: a, b: b, c: c};
	});
var elm$parser$Parser$Advanced$Parser = function (a) {
	return {$: 'Parser', a: a};
};
var elm$parser$Parser$Advanced$AddRight = F2(
	function (a, b) {
		return {$: 'AddRight', a: a, b: b};
	});
var elm$parser$Parser$Advanced$DeadEnd = F4(
	function (row, col, problem, contextStack) {
		return {col: col, contextStack: contextStack, problem: problem, row: row};
	});
var elm$parser$Parser$Advanced$Empty = {$: 'Empty'};
var elm$parser$Parser$Advanced$fromState = F2(
	function (s, x) {
		return A2(
			elm$parser$Parser$Advanced$AddRight,
			elm$parser$Parser$Advanced$Empty,
			A4(elm$parser$Parser$Advanced$DeadEnd, s.row, s.col, x, s.context));
	});
var elm$parser$Parser$Advanced$end = function (x) {
	return elm$parser$Parser$Advanced$Parser(
		function (s) {
			return _Utils_eq(
				elm$core$String$length(s.src),
				s.offset) ? A3(elm$parser$Parser$Advanced$Good, false, _Utils_Tuple0, s) : A2(
				elm$parser$Parser$Advanced$Bad,
				false,
				A2(elm$parser$Parser$Advanced$fromState, s, x));
		});
};
var elm$parser$Parser$end = elm$parser$Parser$Advanced$end(elm$parser$Parser$ExpectingEnd);
var elm$parser$Parser$Advanced$map = F2(
	function (func, _n0) {
		var parse = _n0.a;
		return elm$parser$Parser$Advanced$Parser(
			function (s0) {
				var _n1 = parse(s0);
				if (_n1.$ === 'Good') {
					var p = _n1.a;
					var a = _n1.b;
					var s1 = _n1.c;
					return A3(
						elm$parser$Parser$Advanced$Good,
						p,
						func(a),
						s1);
				} else {
					var p = _n1.a;
					var x = _n1.b;
					return A2(elm$parser$Parser$Advanced$Bad, p, x);
				}
			});
	});
var elm$parser$Parser$map = elm$parser$Parser$Advanced$map;
var stil4m$elm_syntax$Combine$Parser = function (a) {
	return {$: 'Parser', a: a};
};
var stil4m$elm_syntax$Combine$end = stil4m$elm_syntax$Combine$Parser(
	function (state) {
		return A2(
			elm$parser$Parser$map,
			function (x) {
				return _Utils_Tuple2(state, x);
			},
			elm$parser$Parser$end);
	});
var elm$core$Basics$always = F2(
	function (a, _n0) {
		return a;
	});
var elm$core$Tuple$mapSecond = F2(
	function (func, _n0) {
		var x = _n0.a;
		var y = _n0.b;
		return _Utils_Tuple2(
			x,
			func(y));
	});
var elm$parser$Parser$Advanced$andThen = F2(
	function (callback, _n0) {
		var parseA = _n0.a;
		return elm$parser$Parser$Advanced$Parser(
			function (s0) {
				var _n1 = parseA(s0);
				if (_n1.$ === 'Bad') {
					var p = _n1.a;
					var x = _n1.b;
					return A2(elm$parser$Parser$Advanced$Bad, p, x);
				} else {
					var p1 = _n1.a;
					var a = _n1.b;
					var s1 = _n1.c;
					var _n2 = callback(a);
					var parseB = _n2.a;
					var _n3 = parseB(s1);
					if (_n3.$ === 'Bad') {
						var p2 = _n3.a;
						var x = _n3.b;
						return A2(elm$parser$Parser$Advanced$Bad, p1 || p2, x);
					} else {
						var p2 = _n3.a;
						var b = _n3.b;
						var s2 = _n3.c;
						return A3(elm$parser$Parser$Advanced$Good, p1 || p2, b, s2);
					}
				}
			});
	});
var elm$parser$Parser$andThen = elm$parser$Parser$Advanced$andThen;
var stil4m$elm_syntax$Combine$andMap = F2(
	function (_n0, _n1) {
		var rp = _n0.a;
		var lp = _n1.a;
		return stil4m$elm_syntax$Combine$Parser(
			function (state) {
				return A2(
					elm$parser$Parser$andThen,
					function (_n2) {
						var newState = _n2.a;
						var a = _n2.b;
						return A2(
							elm$parser$Parser$map,
							elm$core$Tuple$mapSecond(a),
							rp(newState));
					},
					lp(state));
			});
	});
var stil4m$elm_syntax$Combine$map = F2(
	function (f, _n0) {
		var p = _n0.a;
		return stil4m$elm_syntax$Combine$Parser(
			function (state) {
				return A2(
					elm$parser$Parser$map,
					function (_n1) {
						var s = _n1.a;
						var a = _n1.b;
						return _Utils_Tuple2(
							s,
							f(a));
					},
					p(state));
			});
	});
var stil4m$elm_syntax$Combine$ignore = F2(
	function (dropped, target) {
		return A2(
			stil4m$elm_syntax$Combine$andMap,
			dropped,
			A2(stil4m$elm_syntax$Combine$map, elm$core$Basics$always, target));
	});
var elm$parser$Parser$Advanced$getPosition = elm$parser$Parser$Advanced$Parser(
	function (s) {
		return A3(
			elm$parser$Parser$Advanced$Good,
			false,
			_Utils_Tuple2(s.row, s.col),
			s);
	});
var elm$parser$Parser$getPosition = elm$parser$Parser$Advanced$getPosition;
var stil4m$elm_syntax$Combine$app = function (_n0) {
	var inner = _n0.a;
	return inner;
};
var stil4m$elm_syntax$Combine$withLocation = function (f) {
	return stil4m$elm_syntax$Combine$Parser(
		function (state) {
			return A2(
				elm$parser$Parser$andThen,
				function (loc) {
					return A2(
						stil4m$elm_syntax$Combine$app,
						f(loc),
						state);
				},
				A2(
					elm$parser$Parser$map,
					function (_n0) {
						var row = _n0.a;
						var col = _n0.b;
						return {column: col, line: row};
					},
					elm$parser$Parser$getPosition));
		});
};
var stil4m$elm_syntax$Elm$Parser$withEnd = function (p) {
	return A2(
		stil4m$elm_syntax$Combine$ignore,
		stil4m$elm_syntax$Combine$withLocation(
			function (_n0) {
				return stil4m$elm_syntax$Combine$end;
			}),
		p);
};
var elm$parser$Parser$Done = function (a) {
	return {$: 'Done', a: a};
};
var elm$parser$Parser$Loop = function (a) {
	return {$: 'Loop', a: a};
};
var elm$parser$Parser$Advanced$map2 = F3(
	function (func, _n0, _n1) {
		var parseA = _n0.a;
		var parseB = _n1.a;
		return elm$parser$Parser$Advanced$Parser(
			function (s0) {
				var _n2 = parseA(s0);
				if (_n2.$ === 'Bad') {
					var p = _n2.a;
					var x = _n2.b;
					return A2(elm$parser$Parser$Advanced$Bad, p, x);
				} else {
					var p1 = _n2.a;
					var a = _n2.b;
					var s1 = _n2.c;
					var _n3 = parseB(s1);
					if (_n3.$ === 'Bad') {
						var p2 = _n3.a;
						var x = _n3.b;
						return A2(elm$parser$Parser$Advanced$Bad, p1 || p2, x);
					} else {
						var p2 = _n3.a;
						var b = _n3.b;
						var s2 = _n3.c;
						return A3(
							elm$parser$Parser$Advanced$Good,
							p1 || p2,
							A2(func, a, b),
							s2);
					}
				}
			});
	});
var elm$parser$Parser$Advanced$keeper = F2(
	function (parseFunc, parseArg) {
		return A3(elm$parser$Parser$Advanced$map2, elm$core$Basics$apL, parseFunc, parseArg);
	});
var elm$parser$Parser$keeper = elm$parser$Parser$Advanced$keeper;
var elm$parser$Parser$Advanced$Done = function (a) {
	return {$: 'Done', a: a};
};
var elm$parser$Parser$Advanced$Loop = function (a) {
	return {$: 'Loop', a: a};
};
var elm$parser$Parser$toAdvancedStep = function (step) {
	if (step.$ === 'Loop') {
		var s = step.a;
		return elm$parser$Parser$Advanced$Loop(s);
	} else {
		var a = step.a;
		return elm$parser$Parser$Advanced$Done(a);
	}
};
var elm$parser$Parser$Advanced$loopHelp = F4(
	function (p, state, callback, s0) {
		loopHelp:
		while (true) {
			var _n0 = callback(state);
			var parse = _n0.a;
			var _n1 = parse(s0);
			if (_n1.$ === 'Good') {
				var p1 = _n1.a;
				var step = _n1.b;
				var s1 = _n1.c;
				if (step.$ === 'Loop') {
					var newState = step.a;
					var $temp$p = p || p1,
						$temp$state = newState,
						$temp$callback = callback,
						$temp$s0 = s1;
					p = $temp$p;
					state = $temp$state;
					callback = $temp$callback;
					s0 = $temp$s0;
					continue loopHelp;
				} else {
					var result = step.a;
					return A3(elm$parser$Parser$Advanced$Good, p || p1, result, s1);
				}
			} else {
				var p1 = _n1.a;
				var x = _n1.b;
				return A2(elm$parser$Parser$Advanced$Bad, p || p1, x);
			}
		}
	});
var elm$parser$Parser$Advanced$loop = F2(
	function (state, callback) {
		return elm$parser$Parser$Advanced$Parser(
			function (s) {
				return A4(elm$parser$Parser$Advanced$loopHelp, false, state, callback, s);
			});
	});
var elm$parser$Parser$loop = F2(
	function (state, callback) {
		return A2(
			elm$parser$Parser$Advanced$loop,
			state,
			function (s) {
				return A2(
					elm$parser$Parser$map,
					elm$parser$Parser$toAdvancedStep,
					callback(s));
			});
	});
var elm$parser$Parser$Advanced$Append = F2(
	function (a, b) {
		return {$: 'Append', a: a, b: b};
	});
var elm$parser$Parser$Advanced$oneOfHelp = F3(
	function (s0, bag, parsers) {
		oneOfHelp:
		while (true) {
			if (!parsers.b) {
				return A2(elm$parser$Parser$Advanced$Bad, false, bag);
			} else {
				var parse = parsers.a.a;
				var remainingParsers = parsers.b;
				var _n1 = parse(s0);
				if (_n1.$ === 'Good') {
					var step = _n1;
					return step;
				} else {
					var step = _n1;
					var p = step.a;
					var x = step.b;
					if (p) {
						return step;
					} else {
						var $temp$s0 = s0,
							$temp$bag = A2(elm$parser$Parser$Advanced$Append, bag, x),
							$temp$parsers = remainingParsers;
						s0 = $temp$s0;
						bag = $temp$bag;
						parsers = $temp$parsers;
						continue oneOfHelp;
					}
				}
			}
		}
	});
var elm$parser$Parser$Advanced$oneOf = function (parsers) {
	return elm$parser$Parser$Advanced$Parser(
		function (s) {
			return A3(elm$parser$Parser$Advanced$oneOfHelp, s, elm$parser$Parser$Advanced$Empty, parsers);
		});
};
var elm$parser$Parser$oneOf = elm$parser$Parser$Advanced$oneOf;
var elm$parser$Parser$Advanced$succeed = function (a) {
	return elm$parser$Parser$Advanced$Parser(
		function (s) {
			return A3(elm$parser$Parser$Advanced$Good, false, a, s);
		});
};
var elm$parser$Parser$succeed = elm$parser$Parser$Advanced$succeed;
var stil4m$elm_syntax$Combine$many = function (p) {
	var helper = function (_n2) {
		var oldState = _n2.a;
		var items = _n2.b;
		return elm$parser$Parser$oneOf(
			_List_fromArray(
				[
					A2(
					elm$parser$Parser$keeper,
					elm$parser$Parser$succeed(
						function (_n0) {
							var newState = _n0.a;
							var item = _n0.b;
							return elm$parser$Parser$Loop(
								_Utils_Tuple2(
									newState,
									A2(elm$core$List$cons, item, items)));
						}),
					A2(stil4m$elm_syntax$Combine$app, p, oldState)),
					A2(
					elm$parser$Parser$map,
					function (_n1) {
						return elm$parser$Parser$Done(
							_Utils_Tuple2(
								oldState,
								elm$core$List$reverse(items)));
					},
					elm$parser$Parser$succeed(_Utils_Tuple0))
				]));
	};
	return stil4m$elm_syntax$Combine$Parser(
		function (state) {
			return A2(
				elm$parser$Parser$loop,
				_Utils_Tuple2(state, _List_Nil),
				helper);
		});
};
var stil4m$elm_syntax$Combine$maybe = function (_n0) {
	var p = _n0.a;
	return stil4m$elm_syntax$Combine$Parser(
		function (state) {
			return elm$parser$Parser$oneOf(
				_List_fromArray(
					[
						A2(
						elm$parser$Parser$map,
						function (_n1) {
							var c = _n1.a;
							var v = _n1.b;
							return _Utils_Tuple2(
								c,
								elm$core$Maybe$Just(v));
						},
						p(state)),
						elm$parser$Parser$succeed(
						_Utils_Tuple2(state, elm$core$Maybe$Nothing))
					]));
		});
};
var stil4m$elm_syntax$Combine$succeed = function (res) {
	return stil4m$elm_syntax$Combine$Parser(
		function (state) {
			return elm$parser$Parser$succeed(
				_Utils_Tuple2(state, res));
		});
};
var stil4m$elm_syntax$Combine$withState = function (f) {
	return stil4m$elm_syntax$Combine$Parser(
		function (state) {
			return function (_n0) {
				var p = _n0.a;
				return p(state);
			}(
				f(state));
		});
};
var stil4m$elm_syntax$Elm$Parser$State$getComments = function (_n0) {
	var s = _n0.a;
	return s.comments;
};
var stil4m$elm_syntax$Elm$Parser$File$collectComments = stil4m$elm_syntax$Combine$withState(
	A2(elm$core$Basics$composeR, stil4m$elm_syntax$Elm$Parser$State$getComments, stil4m$elm_syntax$Combine$succeed));
var stil4m$elm_syntax$Combine$choice = function (xs) {
	return stil4m$elm_syntax$Combine$Parser(
		function (state) {
			return elm$parser$Parser$oneOf(
				A2(
					elm$core$List$map,
					function (_n0) {
						var x = _n0.a;
						return x(state);
					},
					xs));
		});
};
var elm$parser$Parser$Advanced$lazy = function (thunk) {
	return elm$parser$Parser$Advanced$Parser(
		function (s) {
			var _n0 = thunk(_Utils_Tuple0);
			var parse = _n0.a;
			return parse(s);
		});
};
var elm$parser$Parser$lazy = elm$parser$Parser$Advanced$lazy;
var stil4m$elm_syntax$Combine$lazy = function (t) {
	return stil4m$elm_syntax$Combine$Parser(
		function (state) {
			return elm$parser$Parser$lazy(
				function (_n0) {
					return function (_n1) {
						var t_ = _n1.a;
						return t_(state);
					}(
						t(_Utils_Tuple0));
				});
		});
};
var elm$core$String$slice = _String_slice;
var elm$parser$Parser$Advanced$mapChompedString = F2(
	function (func, _n0) {
		var parse = _n0.a;
		return elm$parser$Parser$Advanced$Parser(
			function (s0) {
				var _n1 = parse(s0);
				if (_n1.$ === 'Bad') {
					var p = _n1.a;
					var x = _n1.b;
					return A2(elm$parser$Parser$Advanced$Bad, p, x);
				} else {
					var p = _n1.a;
					var a = _n1.b;
					var s1 = _n1.c;
					return A3(
						elm$parser$Parser$Advanced$Good,
						p,
						A2(
							func,
							A3(elm$core$String$slice, s0.offset, s1.offset, s0.src),
							a),
						s1);
				}
			});
	});
var elm$parser$Parser$Advanced$getChompedString = function (parser) {
	return A2(elm$parser$Parser$Advanced$mapChompedString, elm$core$Basics$always, parser);
};
var elm$parser$Parser$getChompedString = elm$parser$Parser$Advanced$getChompedString;
var elm$parser$Parser$Expecting = function (a) {
	return {$: 'Expecting', a: a};
};
var elm$parser$Parser$Advanced$Token = F2(
	function (a, b) {
		return {$: 'Token', a: a, b: b};
	});
var elm$parser$Parser$toToken = function (str) {
	return A2(
		elm$parser$Parser$Advanced$Token,
		str,
		elm$parser$Parser$Expecting(str));
};
var elm$core$Basics$negate = function (n) {
	return -n;
};
var elm$core$Basics$not = _Basics_not;
var elm$core$String$isEmpty = function (string) {
	return string === '';
};
var elm$parser$Parser$Advanced$isSubString = _Parser_isSubString;
var elm$parser$Parser$Advanced$token = function (_n0) {
	var str = _n0.a;
	var expecting = _n0.b;
	var progress = !elm$core$String$isEmpty(str);
	return elm$parser$Parser$Advanced$Parser(
		function (s) {
			var _n1 = A5(elm$parser$Parser$Advanced$isSubString, str, s.offset, s.row, s.col, s.src);
			var newOffset = _n1.a;
			var newRow = _n1.b;
			var newCol = _n1.c;
			return _Utils_eq(newOffset, -1) ? A2(
				elm$parser$Parser$Advanced$Bad,
				false,
				A2(elm$parser$Parser$Advanced$fromState, s, expecting)) : A3(
				elm$parser$Parser$Advanced$Good,
				progress,
				_Utils_Tuple0,
				{col: newCol, context: s.context, indent: s.indent, offset: newOffset, row: newRow, src: s.src});
		});
};
var elm$parser$Parser$token = function (str) {
	return elm$parser$Parser$Advanced$token(
		elm$parser$Parser$toToken(str));
};
var stil4m$elm_syntax$Combine$string = function (s) {
	return stil4m$elm_syntax$Combine$Parser(
		function (state) {
			return A2(
				elm$parser$Parser$map,
				function (x) {
					return _Utils_Tuple2(state, x);
				},
				elm$parser$Parser$getChompedString(
					elm$parser$Parser$token(s)));
		});
};
var elm$core$List$singleton = function (value) {
	return _List_fromArray(
		[value]);
};
var elm$core$Tuple$pair = F2(
	function (a, b) {
		return _Utils_Tuple2(a, b);
	});
var elm$core$Tuple$second = function (_n0) {
	var y = _n0.b;
	return y;
};
var elm$parser$Parser$ExpectingSymbol = function (a) {
	return {$: 'ExpectingSymbol', a: a};
};
var elm$parser$Parser$Advanced$symbol = elm$parser$Parser$Advanced$token;
var elm$parser$Parser$symbol = function (str) {
	return elm$parser$Parser$Advanced$symbol(
		A2(
			elm$parser$Parser$Advanced$Token,
			str,
			elm$parser$Parser$ExpectingSymbol(str)));
};
var stil4m$elm_syntax$Combine$andThen = F2(
	function (f, _n0) {
		var p = _n0.a;
		return stil4m$elm_syntax$Combine$Parser(
			function (state) {
				return A2(
					elm$parser$Parser$andThen,
					function (_n1) {
						var s = _n1.a;
						var a = _n1.b;
						return function (_n2) {
							var x = _n2.a;
							return x(s);
						}(
							f(a));
					},
					p(state));
			});
	});
var elm$parser$Parser$Advanced$backtrackable = function (_n0) {
	var parse = _n0.a;
	return elm$parser$Parser$Advanced$Parser(
		function (s0) {
			var _n1 = parse(s0);
			if (_n1.$ === 'Bad') {
				var x = _n1.b;
				return A2(elm$parser$Parser$Advanced$Bad, false, x);
			} else {
				var a = _n1.b;
				var s1 = _n1.c;
				return A3(elm$parser$Parser$Advanced$Good, false, a, s1);
			}
		});
};
var elm$parser$Parser$backtrackable = elm$parser$Parser$Advanced$backtrackable;
var stil4m$elm_syntax$Combine$backtrackable = function (_n0) {
	var p = _n0.a;
	return stil4m$elm_syntax$Combine$Parser(
		function (state) {
			return elm$parser$Parser$backtrackable(
				p(state));
		});
};
var stil4m$elm_syntax$Combine$continueWith = F2(
	function (target, dropped) {
		return A2(
			stil4m$elm_syntax$Combine$andMap,
			target,
			A2(
				stil4m$elm_syntax$Combine$map,
				F2(
					function (b, a) {
						return A2(elm$core$Basics$always, a, b);
					}),
				dropped));
	});
var stil4m$elm_syntax$Combine$fromCore = function (p) {
	return stil4m$elm_syntax$Combine$Parser(
		function (state) {
			return A2(
				elm$parser$Parser$keeper,
				elm$parser$Parser$succeed(
					function (v) {
						return _Utils_Tuple2(state, v);
					}),
				p);
		});
};
var stil4m$elm_syntax$Combine$or = F2(
	function (_n0, _n1) {
		var lp = _n0.a;
		var rp = _n1.a;
		return stil4m$elm_syntax$Combine$Parser(
			function (state) {
				return elm$parser$Parser$oneOf(
					_List_fromArray(
						[
							lp(state),
							rp(state)
						]));
			});
	});
var stil4m$elm_syntax$Combine$sepBy1 = F2(
	function (sep, p) {
		return A2(
			stil4m$elm_syntax$Combine$andMap,
			stil4m$elm_syntax$Combine$many(
				A2(stil4m$elm_syntax$Combine$continueWith, p, sep)),
			A2(
				stil4m$elm_syntax$Combine$andMap,
				p,
				stil4m$elm_syntax$Combine$succeed(elm$core$List$cons)));
	});
var stil4m$elm_syntax$Elm$Parser$Node$asPointerLocation = function (_n0) {
	var line = _n0.line;
	var column = _n0.column;
	return {column: column, row: line};
};
var stil4m$elm_syntax$Elm$Syntax$Node$Node = F2(
	function (a, b) {
		return {$: 'Node', a: a, b: b};
	});
var stil4m$elm_syntax$Elm$Parser$Node$parser = function (p) {
	return stil4m$elm_syntax$Combine$withLocation(
		function (start) {
			return A2(
				stil4m$elm_syntax$Combine$andMap,
				stil4m$elm_syntax$Combine$withLocation(
					function (end) {
						return stil4m$elm_syntax$Combine$succeed(
							{
								end: stil4m$elm_syntax$Elm$Parser$Node$asPointerLocation(end),
								start: stil4m$elm_syntax$Elm$Parser$Node$asPointerLocation(start)
							});
					}),
				A2(
					stil4m$elm_syntax$Combine$andMap,
					p,
					stil4m$elm_syntax$Combine$succeed(
						F2(
							function (v, r) {
								return A2(stil4m$elm_syntax$Elm$Syntax$Node$Node, r, v);
							}))));
		});
};
var elm$core$Maybe$map = F2(
	function (f, maybe) {
		if (maybe.$ === 'Just') {
			var value = maybe.a;
			return elm$core$Maybe$Just(
				f(value));
		} else {
			return elm$core$Maybe$Nothing;
		}
	});
var elm$parser$Parser$Problem = function (a) {
	return {$: 'Problem', a: a};
};
var elm$parser$Parser$Advanced$problem = function (x) {
	return elm$parser$Parser$Advanced$Parser(
		function (s) {
			return A2(
				elm$parser$Parser$Advanced$Bad,
				false,
				A2(elm$parser$Parser$Advanced$fromState, s, x));
		});
};
var elm$parser$Parser$problem = function (msg) {
	return elm$parser$Parser$Advanced$problem(
		elm$parser$Parser$Problem(msg));
};
var stil4m$elm_syntax$Combine$fail = function (m) {
	return stil4m$elm_syntax$Combine$Parser(
		function (state) {
			return A2(
				elm$parser$Parser$map,
				function (x) {
					return _Utils_Tuple2(state, x);
				},
				elm$parser$Parser$problem(m));
		});
};
var elm$core$String$foldr = _String_foldr;
var elm$core$String$toList = function (string) {
	return A3(elm$core$String$foldr, elm$core$List$cons, _List_Nil, string);
};
var elm$parser$Parser$UnexpectedChar = {$: 'UnexpectedChar'};
var elm$parser$Parser$Advanced$isSubChar = _Parser_isSubChar;
var elm$parser$Parser$Advanced$chompIf = F2(
	function (isGood, expecting) {
		return elm$parser$Parser$Advanced$Parser(
			function (s) {
				var newOffset = A3(elm$parser$Parser$Advanced$isSubChar, isGood, s.offset, s.src);
				return _Utils_eq(newOffset, -1) ? A2(
					elm$parser$Parser$Advanced$Bad,
					false,
					A2(elm$parser$Parser$Advanced$fromState, s, expecting)) : (_Utils_eq(newOffset, -2) ? A3(
					elm$parser$Parser$Advanced$Good,
					true,
					_Utils_Tuple0,
					{col: 1, context: s.context, indent: s.indent, offset: s.offset + 1, row: s.row + 1, src: s.src}) : A3(
					elm$parser$Parser$Advanced$Good,
					true,
					_Utils_Tuple0,
					{col: s.col + 1, context: s.context, indent: s.indent, offset: newOffset, row: s.row, src: s.src}));
			});
	});
var elm$parser$Parser$chompIf = function (isGood) {
	return A2(elm$parser$Parser$Advanced$chompIf, isGood, elm$parser$Parser$UnexpectedChar);
};
var stil4m$elm_syntax$Combine$Char$satisfy = function (pred) {
	return stil4m$elm_syntax$Combine$fromCore(
		A2(
			elm$parser$Parser$andThen,
			function (s) {
				var _n0 = elm$core$String$toList(s);
				if (!_n0.b) {
					return elm$parser$Parser$succeed(elm$core$Maybe$Nothing);
				} else {
					var c = _n0.a;
					return elm$parser$Parser$succeed(
						elm$core$Maybe$Just(c));
				}
			},
			elm$parser$Parser$getChompedString(
				elm$parser$Parser$chompIf(pred))));
};
var stil4m$elm_syntax$Combine$Char$anyChar = A2(
	stil4m$elm_syntax$Combine$andThen,
	A2(
		elm$core$Basics$composeR,
		elm$core$Maybe$map(stil4m$elm_syntax$Combine$succeed),
		elm$core$Maybe$withDefault(
			stil4m$elm_syntax$Combine$fail('expected any character'))),
	stil4m$elm_syntax$Combine$Char$satisfy(
		elm$core$Basics$always(true)));
var elm$core$String$fromList = _String_fromList;
var stil4m$elm_syntax$Combine$Char$char = function (c) {
	return A2(
		stil4m$elm_syntax$Combine$andThen,
		A2(
			elm$core$Basics$composeR,
			elm$core$Maybe$map(stil4m$elm_syntax$Combine$succeed),
			elm$core$Maybe$withDefault(
				stil4m$elm_syntax$Combine$fail(
					'expected \'' + (elm$core$String$fromList(
						_List_fromArray(
							[c])) + '\'')))),
		stil4m$elm_syntax$Combine$Char$satisfy(
			elm$core$Basics$eq(c)));
};
var elm$core$List$head = function (list) {
	if (list.b) {
		var x = list.a;
		var xs = list.b;
		return elm$core$Maybe$Just(x);
	} else {
		return elm$core$Maybe$Nothing;
	}
};
var elm$parser$Parser$Advanced$ignorer = F2(
	function (keepParser, ignoreParser) {
		return A3(elm$parser$Parser$Advanced$map2, elm$core$Basics$always, keepParser, ignoreParser);
	});
var elm$parser$Parser$ignorer = elm$parser$Parser$Advanced$ignorer;
var elm$core$Char$fromCode = _Char_fromCode;
var elm$core$Result$withDefault = F2(
	function (def, result) {
		if (result.$ === 'Ok') {
			var a = result.a;
			return a;
		} else {
			return def;
		}
	});
var elm$core$String$any = _String_any;
var elm$core$String$toLower = _String_toLower;
var elm$parser$Parser$Advanced$chompWhileHelp = F5(
	function (isGood, offset, row, col, s0) {
		chompWhileHelp:
		while (true) {
			var newOffset = A3(elm$parser$Parser$Advanced$isSubChar, isGood, offset, s0.src);
			if (_Utils_eq(newOffset, -1)) {
				return A3(
					elm$parser$Parser$Advanced$Good,
					_Utils_cmp(s0.offset, offset) < 0,
					_Utils_Tuple0,
					{col: col, context: s0.context, indent: s0.indent, offset: offset, row: row, src: s0.src});
			} else {
				if (_Utils_eq(newOffset, -2)) {
					var $temp$isGood = isGood,
						$temp$offset = offset + 1,
						$temp$row = row + 1,
						$temp$col = 1,
						$temp$s0 = s0;
					isGood = $temp$isGood;
					offset = $temp$offset;
					row = $temp$row;
					col = $temp$col;
					s0 = $temp$s0;
					continue chompWhileHelp;
				} else {
					var $temp$isGood = isGood,
						$temp$offset = newOffset,
						$temp$row = row,
						$temp$col = col + 1,
						$temp$s0 = s0;
					isGood = $temp$isGood;
					offset = $temp$offset;
					row = $temp$row;
					col = $temp$col;
					s0 = $temp$s0;
					continue chompWhileHelp;
				}
			}
		}
	});
var elm$parser$Parser$Advanced$chompWhile = function (isGood) {
	return elm$parser$Parser$Advanced$Parser(
		function (s) {
			return A5(elm$parser$Parser$Advanced$chompWhileHelp, isGood, s.offset, s.row, s.col, s);
		});
};
var elm$parser$Parser$chompWhile = elm$parser$Parser$Advanced$chompWhile;
var elm$core$List$tail = function (list) {
	if (list.b) {
		var x = list.a;
		var xs = list.b;
		return elm$core$Maybe$Just(xs);
	} else {
		return elm$core$Maybe$Nothing;
	}
};
var elm$core$String$startsWith = _String_startsWith;
var elm$core$Basics$pow = _Basics_pow;
var elm$core$String$cons = _String_cons;
var elm$core$String$fromChar = function (_char) {
	return A2(elm$core$String$cons, _char, '');
};
var rtfeldman$elm_hex$Hex$fromStringHelp = F3(
	function (position, chars, accumulated) {
		fromStringHelp:
		while (true) {
			if (!chars.b) {
				return elm$core$Result$Ok(accumulated);
			} else {
				var _char = chars.a;
				var rest = chars.b;
				switch (_char.valueOf()) {
					case '0':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated;
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case '1':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + A2(elm$core$Basics$pow, 16, position);
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case '2':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (2 * A2(elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case '3':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (3 * A2(elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case '4':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (4 * A2(elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case '5':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (5 * A2(elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case '6':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (6 * A2(elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case '7':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (7 * A2(elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case '8':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (8 * A2(elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case '9':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (9 * A2(elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case 'a':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (10 * A2(elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case 'b':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (11 * A2(elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case 'c':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (12 * A2(elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case 'd':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (13 * A2(elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case 'e':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (14 * A2(elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					case 'f':
						var $temp$position = position - 1,
							$temp$chars = rest,
							$temp$accumulated = accumulated + (15 * A2(elm$core$Basics$pow, 16, position));
						position = $temp$position;
						chars = $temp$chars;
						accumulated = $temp$accumulated;
						continue fromStringHelp;
					default:
						var nonHex = _char;
						return elm$core$Result$Err(
							elm$core$String$fromChar(nonHex) + ' is not a valid hexadecimal character.');
				}
			}
		}
	});
var rtfeldman$elm_hex$Hex$fromString = function (str) {
	if (elm$core$String$isEmpty(str)) {
		return elm$core$Result$Err('Empty strings are not valid hexadecimal strings.');
	} else {
		var result = function () {
			if (A2(elm$core$String$startsWith, '-', str)) {
				var list = A2(
					elm$core$Maybe$withDefault,
					_List_Nil,
					elm$core$List$tail(
						elm$core$String$toList(str)));
				return A2(
					elm$core$Result$map,
					elm$core$Basics$negate,
					A3(
						rtfeldman$elm_hex$Hex$fromStringHelp,
						elm$core$List$length(list) - 1,
						list,
						0));
			} else {
				return A3(
					rtfeldman$elm_hex$Hex$fromStringHelp,
					elm$core$String$length(str) - 1,
					elm$core$String$toList(str),
					0);
			}
		}();
		var formatError = function (err) {
			return A2(
				elm$core$String$join,
				' ',
				_List_fromArray(
					['\"' + (str + '\"'), 'is not a valid hexadecimal string because', err]));
		};
		return A2(elm$core$Result$mapError, formatError, result);
	}
};
var stil4m$elm_syntax$Elm$Parser$Tokens$escapedCharValue = elm$parser$Parser$oneOf(
	_List_fromArray(
		[
			A2(
			elm$parser$Parser$ignorer,
			elm$parser$Parser$succeed(
				_Utils_chr('\'')),
			elm$parser$Parser$symbol('\'')),
			A2(
			elm$parser$Parser$ignorer,
			elm$parser$Parser$succeed(
				_Utils_chr('\"')),
			elm$parser$Parser$symbol('\"')),
			A2(
			elm$parser$Parser$ignorer,
			elm$parser$Parser$succeed(
				_Utils_chr('\n')),
			elm$parser$Parser$symbol('n')),
			A2(
			elm$parser$Parser$ignorer,
			elm$parser$Parser$succeed(
				_Utils_chr('\t')),
			elm$parser$Parser$symbol('t')),
			A2(
			elm$parser$Parser$ignorer,
			elm$parser$Parser$succeed(
				_Utils_chr('\u000d')),
			elm$parser$Parser$symbol('r')),
			A2(
			elm$parser$Parser$ignorer,
			elm$parser$Parser$succeed(
				_Utils_chr('\\')),
			elm$parser$Parser$symbol('\\')),
			A2(
			elm$parser$Parser$keeper,
			A2(
				elm$parser$Parser$ignorer,
				A2(
					elm$parser$Parser$ignorer,
					elm$parser$Parser$succeed(
						A2(
							elm$core$Basics$composeR,
							elm$core$String$toLower,
							A2(
								elm$core$Basics$composeR,
								rtfeldman$elm_hex$Hex$fromString,
								A2(
									elm$core$Basics$composeR,
									elm$core$Result$withDefault(0),
									elm$core$Char$fromCode)))),
					elm$parser$Parser$symbol('u')),
				elm$parser$Parser$symbol('{')),
			A2(
				elm$parser$Parser$ignorer,
				elm$parser$Parser$getChompedString(
					elm$parser$Parser$chompWhile(
						function (c) {
							return A2(
								elm$core$String$any,
								elm$core$Basics$eq(c),
								'0123456789ABCDEFabcdef');
						})),
				elm$parser$Parser$symbol('}')))
		]));
var stil4m$elm_syntax$Elm$Parser$Tokens$quotedSingleQuote = stil4m$elm_syntax$Combine$fromCore(
	A2(
		elm$parser$Parser$keeper,
		A2(
			elm$parser$Parser$ignorer,
			elm$parser$Parser$succeed(
				A2(
					elm$core$Basics$composeR,
					elm$core$String$toList,
					A2(
						elm$core$Basics$composeR,
						elm$core$List$head,
						elm$core$Maybe$withDefault(
							_Utils_chr(' '))))),
			elm$parser$Parser$symbol('\'')),
		A2(
			elm$parser$Parser$ignorer,
			elm$parser$Parser$oneOf(
				_List_fromArray(
					[
						A2(
						elm$parser$Parser$keeper,
						A2(
							elm$parser$Parser$ignorer,
							elm$parser$Parser$succeed(
								A2(elm$core$Basics$composeR, elm$core$List$singleton, elm$core$String$fromList)),
							elm$parser$Parser$symbol('\\')),
						stil4m$elm_syntax$Elm$Parser$Tokens$escapedCharValue),
						elm$parser$Parser$getChompedString(
						elm$parser$Parser$chompIf(
							elm$core$Basics$always(true)))
					])),
			elm$parser$Parser$symbol('\''))));
var stil4m$elm_syntax$Elm$Parser$Tokens$characterLiteral = A2(
	stil4m$elm_syntax$Combine$or,
	stil4m$elm_syntax$Elm$Parser$Tokens$quotedSingleQuote,
	A2(
		stil4m$elm_syntax$Combine$ignore,
		stil4m$elm_syntax$Combine$Char$char(
			_Utils_chr('\'')),
		A2(
			stil4m$elm_syntax$Combine$continueWith,
			stil4m$elm_syntax$Combine$Char$anyChar,
			stil4m$elm_syntax$Combine$Char$char(
				_Utils_chr('\'')))));
var stil4m$elm_syntax$Elm$Syntax$Expression$CharLiteral = function (a) {
	return {$: 'CharLiteral', a: a};
};
var stil4m$elm_syntax$Elm$Parser$Declarations$charLiteralExpression = stil4m$elm_syntax$Elm$Parser$Node$parser(
	A2(stil4m$elm_syntax$Combine$map, stil4m$elm_syntax$Elm$Syntax$Expression$CharLiteral, stil4m$elm_syntax$Elm$Parser$Tokens$characterLiteral));
var elm$parser$Parser$ExpectingKeyword = function (a) {
	return {$: 'ExpectingKeyword', a: a};
};
var elm$parser$Parser$Advanced$keyword = function (_n0) {
	var kwd = _n0.a;
	var expecting = _n0.b;
	var progress = !elm$core$String$isEmpty(kwd);
	return elm$parser$Parser$Advanced$Parser(
		function (s) {
			var _n1 = A5(elm$parser$Parser$Advanced$isSubString, kwd, s.offset, s.row, s.col, s.src);
			var newOffset = _n1.a;
			var newRow = _n1.b;
			var newCol = _n1.c;
			return (_Utils_eq(newOffset, -1) || (0 <= A3(
				elm$parser$Parser$Advanced$isSubChar,
				function (c) {
					return elm$core$Char$isAlphaNum(c) || _Utils_eq(
						c,
						_Utils_chr('_'));
				},
				newOffset,
				s.src))) ? A2(
				elm$parser$Parser$Advanced$Bad,
				false,
				A2(elm$parser$Parser$Advanced$fromState, s, expecting)) : A3(
				elm$parser$Parser$Advanced$Good,
				progress,
				_Utils_Tuple0,
				{col: newCol, context: s.context, indent: s.indent, offset: newOffset, row: newRow, src: s.src});
		});
};
var elm$parser$Parser$keyword = function (kwd) {
	return elm$parser$Parser$Advanced$keyword(
		A2(
			elm$parser$Parser$Advanced$Token,
			kwd,
			elm$parser$Parser$ExpectingKeyword(kwd)));
};
var stil4m$elm_syntax$Combine$between = F3(
	function (lp, rp, p) {
		return A2(
			stil4m$elm_syntax$Combine$ignore,
			rp,
			A2(stil4m$elm_syntax$Combine$continueWith, p, lp));
	});
var stil4m$elm_syntax$Combine$parens = A2(
	stil4m$elm_syntax$Combine$between,
	stil4m$elm_syntax$Combine$string('('),
	stil4m$elm_syntax$Combine$string(')'));
var stil4m$elm_syntax$Combine$sepBy = F2(
	function (sep, p) {
		return A2(
			stil4m$elm_syntax$Combine$or,
			A2(stil4m$elm_syntax$Combine$sepBy1, sep, p),
			stil4m$elm_syntax$Combine$succeed(_List_Nil));
	});
var elm$core$Dict$RBEmpty_elm_builtin = {$: 'RBEmpty_elm_builtin'};
var elm$core$Dict$empty = elm$core$Dict$RBEmpty_elm_builtin;
var elm$core$Set$Set_elm_builtin = function (a) {
	return {$: 'Set_elm_builtin', a: a};
};
var elm$core$Set$empty = elm$core$Set$Set_elm_builtin(elm$core$Dict$empty);
var elm$core$Dict$Black = {$: 'Black'};
var elm$core$Dict$RBNode_elm_builtin = F5(
	function (a, b, c, d, e) {
		return {$: 'RBNode_elm_builtin', a: a, b: b, c: c, d: d, e: e};
	});
var elm$core$Basics$compare = _Utils_compare;
var elm$core$Dict$Red = {$: 'Red'};
var elm$core$Dict$balance = F5(
	function (color, key, value, left, right) {
		if ((right.$ === 'RBNode_elm_builtin') && (right.a.$ === 'Red')) {
			var _n1 = right.a;
			var rK = right.b;
			var rV = right.c;
			var rLeft = right.d;
			var rRight = right.e;
			if ((left.$ === 'RBNode_elm_builtin') && (left.a.$ === 'Red')) {
				var _n3 = left.a;
				var lK = left.b;
				var lV = left.c;
				var lLeft = left.d;
				var lRight = left.e;
				return A5(
					elm$core$Dict$RBNode_elm_builtin,
					elm$core$Dict$Red,
					key,
					value,
					A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Black, lK, lV, lLeft, lRight),
					A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Black, rK, rV, rLeft, rRight));
			} else {
				return A5(
					elm$core$Dict$RBNode_elm_builtin,
					color,
					rK,
					rV,
					A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Red, key, value, left, rLeft),
					rRight);
			}
		} else {
			if ((((left.$ === 'RBNode_elm_builtin') && (left.a.$ === 'Red')) && (left.d.$ === 'RBNode_elm_builtin')) && (left.d.a.$ === 'Red')) {
				var _n5 = left.a;
				var lK = left.b;
				var lV = left.c;
				var _n6 = left.d;
				var _n7 = _n6.a;
				var llK = _n6.b;
				var llV = _n6.c;
				var llLeft = _n6.d;
				var llRight = _n6.e;
				var lRight = left.e;
				return A5(
					elm$core$Dict$RBNode_elm_builtin,
					elm$core$Dict$Red,
					lK,
					lV,
					A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Black, llK, llV, llLeft, llRight),
					A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Black, key, value, lRight, right));
			} else {
				return A5(elm$core$Dict$RBNode_elm_builtin, color, key, value, left, right);
			}
		}
	});
var elm$core$Dict$insertHelp = F3(
	function (key, value, dict) {
		if (dict.$ === 'RBEmpty_elm_builtin') {
			return A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Red, key, value, elm$core$Dict$RBEmpty_elm_builtin, elm$core$Dict$RBEmpty_elm_builtin);
		} else {
			var nColor = dict.a;
			var nKey = dict.b;
			var nValue = dict.c;
			var nLeft = dict.d;
			var nRight = dict.e;
			var _n1 = A2(elm$core$Basics$compare, key, nKey);
			switch (_n1.$) {
				case 'LT':
					return A5(
						elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						A3(elm$core$Dict$insertHelp, key, value, nLeft),
						nRight);
				case 'EQ':
					return A5(elm$core$Dict$RBNode_elm_builtin, nColor, nKey, value, nLeft, nRight);
				default:
					return A5(
						elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						nLeft,
						A3(elm$core$Dict$insertHelp, key, value, nRight));
			}
		}
	});
var elm$core$Dict$insert = F3(
	function (key, value, dict) {
		var _n0 = A3(elm$core$Dict$insertHelp, key, value, dict);
		if ((_n0.$ === 'RBNode_elm_builtin') && (_n0.a.$ === 'Red')) {
			var _n1 = _n0.a;
			var k = _n0.b;
			var v = _n0.c;
			var l = _n0.d;
			var r = _n0.e;
			return A5(elm$core$Dict$RBNode_elm_builtin, elm$core$Dict$Black, k, v, l, r);
		} else {
			var x = _n0;
			return x;
		}
	});
var elm$core$Set$insert = F2(
	function (key, _n0) {
		var dict = _n0.a;
		return elm$core$Set$Set_elm_builtin(
			A3(elm$core$Dict$insert, key, _Utils_Tuple0, dict));
	});
var elm$core$Set$fromList = function (list) {
	return A3(elm$core$List$foldl, elm$core$Set$insert, elm$core$Set$empty, list);
};
var elm$parser$Parser$ExpectingVariable = {$: 'ExpectingVariable'};
var elm$core$Dict$get = F2(
	function (targetKey, dict) {
		get:
		while (true) {
			if (dict.$ === 'RBEmpty_elm_builtin') {
				return elm$core$Maybe$Nothing;
			} else {
				var key = dict.b;
				var value = dict.c;
				var left = dict.d;
				var right = dict.e;
				var _n1 = A2(elm$core$Basics$compare, targetKey, key);
				switch (_n1.$) {
					case 'LT':
						var $temp$targetKey = targetKey,
							$temp$dict = left;
						targetKey = $temp$targetKey;
						dict = $temp$dict;
						continue get;
					case 'EQ':
						return elm$core$Maybe$Just(value);
					default:
						var $temp$targetKey = targetKey,
							$temp$dict = right;
						targetKey = $temp$targetKey;
						dict = $temp$dict;
						continue get;
				}
			}
		}
	});
var elm$core$Dict$member = F2(
	function (key, dict) {
		var _n0 = A2(elm$core$Dict$get, key, dict);
		if (_n0.$ === 'Just') {
			return true;
		} else {
			return false;
		}
	});
var elm$core$Set$member = F2(
	function (key, _n0) {
		var dict = _n0.a;
		return A2(elm$core$Dict$member, key, dict);
	});
var elm$parser$Parser$Advanced$varHelp = F7(
	function (isGood, offset, row, col, src, indent, context) {
		varHelp:
		while (true) {
			var newOffset = A3(elm$parser$Parser$Advanced$isSubChar, isGood, offset, src);
			if (_Utils_eq(newOffset, -1)) {
				return {col: col, context: context, indent: indent, offset: offset, row: row, src: src};
			} else {
				if (_Utils_eq(newOffset, -2)) {
					var $temp$isGood = isGood,
						$temp$offset = offset + 1,
						$temp$row = row + 1,
						$temp$col = 1,
						$temp$src = src,
						$temp$indent = indent,
						$temp$context = context;
					isGood = $temp$isGood;
					offset = $temp$offset;
					row = $temp$row;
					col = $temp$col;
					src = $temp$src;
					indent = $temp$indent;
					context = $temp$context;
					continue varHelp;
				} else {
					var $temp$isGood = isGood,
						$temp$offset = newOffset,
						$temp$row = row,
						$temp$col = col + 1,
						$temp$src = src,
						$temp$indent = indent,
						$temp$context = context;
					isGood = $temp$isGood;
					offset = $temp$offset;
					row = $temp$row;
					col = $temp$col;
					src = $temp$src;
					indent = $temp$indent;
					context = $temp$context;
					continue varHelp;
				}
			}
		}
	});
var elm$parser$Parser$Advanced$variable = function (i) {
	return elm$parser$Parser$Advanced$Parser(
		function (s) {
			var firstOffset = A3(elm$parser$Parser$Advanced$isSubChar, i.start, s.offset, s.src);
			if (_Utils_eq(firstOffset, -1)) {
				return A2(
					elm$parser$Parser$Advanced$Bad,
					false,
					A2(elm$parser$Parser$Advanced$fromState, s, i.expecting));
			} else {
				var s1 = _Utils_eq(firstOffset, -2) ? A7(elm$parser$Parser$Advanced$varHelp, i.inner, s.offset + 1, s.row + 1, 1, s.src, s.indent, s.context) : A7(elm$parser$Parser$Advanced$varHelp, i.inner, firstOffset, s.row, s.col + 1, s.src, s.indent, s.context);
				var name = A3(elm$core$String$slice, s.offset, s1.offset, s.src);
				return A2(elm$core$Set$member, name, i.reserved) ? A2(
					elm$parser$Parser$Advanced$Bad,
					false,
					A2(elm$parser$Parser$Advanced$fromState, s, i.expecting)) : A3(elm$parser$Parser$Advanced$Good, true, name, s1);
			}
		});
};
var elm$parser$Parser$variable = function (i) {
	return elm$parser$Parser$Advanced$variable(
		{expecting: elm$parser$Parser$ExpectingVariable, inner: i.inner, reserved: i.reserved, start: i.start});
};
var stil4m$elm_syntax$Elm$Parser$Tokens$reservedList = _List_fromArray(
	['module', 'exposing', 'import', 'as', 'if', 'then', 'else', 'let', 'in', 'case', 'of', 'port', 'infixr', 'infixl', 'type', 'where']);
var stil4m$elm_syntax$Elm$Parser$Tokens$typeName = stil4m$elm_syntax$Combine$fromCore(
	elm$parser$Parser$variable(
		{
			inner: function (c) {
				return elm$core$Char$isAlphaNum(c) || _Utils_eq(
					c,
					_Utils_chr('_'));
			},
			reserved: elm$core$Set$fromList(stil4m$elm_syntax$Elm$Parser$Tokens$reservedList),
			start: elm$core$Char$isUpper
		}));
var stil4m$elm_syntax$Elm$Parser$Base$typeIndicator = function () {
	var helper = function (_n0) {
		var n = _n0.a;
		var xs = _n0.b;
		return stil4m$elm_syntax$Combine$choice(
			_List_fromArray(
				[
					A2(
					stil4m$elm_syntax$Combine$andThen,
					function (t) {
						return helper(
							_Utils_Tuple2(
								t,
								A2(elm$core$List$cons, n, xs)));
					},
					A2(
						stil4m$elm_syntax$Combine$continueWith,
						stil4m$elm_syntax$Elm$Parser$Tokens$typeName,
						stil4m$elm_syntax$Combine$string('.'))),
					stil4m$elm_syntax$Combine$succeed(
					_Utils_Tuple2(n, xs))
				]));
	};
	return A2(
		stil4m$elm_syntax$Combine$map,
		function (_n1) {
			var t = _n1.a;
			var xs = _n1.b;
			return _Utils_Tuple2(
				elm$core$List$reverse(xs),
				t);
		},
		A2(
			stil4m$elm_syntax$Combine$andThen,
			function (t) {
				return helper(
					_Utils_Tuple2(t, _List_Nil));
			},
			stil4m$elm_syntax$Elm$Parser$Tokens$typeName));
}();
var stil4m$elm_syntax$Combine$many1 = function (p) {
	return A2(
		stil4m$elm_syntax$Combine$andMap,
		stil4m$elm_syntax$Combine$many(p),
		A2(
			stil4m$elm_syntax$Combine$andMap,
			p,
			stil4m$elm_syntax$Combine$succeed(elm$core$List$cons)));
};
var elm$parser$Parser$Nestable = {$: 'Nestable'};
var elm$parser$Parser$Advanced$Nestable = {$: 'Nestable'};
var elm$parser$Parser$Advanced$NotNestable = {$: 'NotNestable'};
var elm$parser$Parser$toAdvancedNestable = function (nestable) {
	if (nestable.$ === 'NotNestable') {
		return elm$parser$Parser$Advanced$NotNestable;
	} else {
		return elm$parser$Parser$Advanced$Nestable;
	}
};
var elm$parser$Parser$Advanced$findSubString = _Parser_findSubString;
var elm$parser$Parser$Advanced$fromInfo = F4(
	function (row, col, x, context) {
		return A2(
			elm$parser$Parser$Advanced$AddRight,
			elm$parser$Parser$Advanced$Empty,
			A4(elm$parser$Parser$Advanced$DeadEnd, row, col, x, context));
	});
var elm$parser$Parser$Advanced$chompUntil = function (_n0) {
	var str = _n0.a;
	var expecting = _n0.b;
	return elm$parser$Parser$Advanced$Parser(
		function (s) {
			var _n1 = A5(elm$parser$Parser$Advanced$findSubString, str, s.offset, s.row, s.col, s.src);
			var newOffset = _n1.a;
			var newRow = _n1.b;
			var newCol = _n1.c;
			return _Utils_eq(newOffset, -1) ? A2(
				elm$parser$Parser$Advanced$Bad,
				false,
				A4(elm$parser$Parser$Advanced$fromInfo, newRow, newCol, expecting, s.context)) : A3(
				elm$parser$Parser$Advanced$Good,
				_Utils_cmp(s.offset, newOffset) < 0,
				_Utils_Tuple0,
				{col: newCol, context: s.context, indent: s.indent, offset: newOffset, row: newRow, src: s.src});
		});
};
var elm$core$Basics$neq = _Utils_notEqual;
var elm$parser$Parser$Advanced$isChar = function (_char) {
	return true;
};
var elm$parser$Parser$Advanced$revAlways = F2(
	function (_n0, b) {
		return b;
	});
var elm$parser$Parser$Advanced$skip = F2(
	function (iParser, kParser) {
		return A3(elm$parser$Parser$Advanced$map2, elm$parser$Parser$Advanced$revAlways, iParser, kParser);
	});
var elm$parser$Parser$Advanced$nestableHelp = F5(
	function (isNotRelevant, open, close, expectingClose, nestLevel) {
		return A2(
			elm$parser$Parser$Advanced$skip,
			elm$parser$Parser$Advanced$chompWhile(isNotRelevant),
			elm$parser$Parser$Advanced$oneOf(
				_List_fromArray(
					[
						(nestLevel === 1) ? close : A2(
						elm$parser$Parser$Advanced$andThen,
						function (_n0) {
							return A5(elm$parser$Parser$Advanced$nestableHelp, isNotRelevant, open, close, expectingClose, nestLevel - 1);
						},
						close),
						A2(
						elm$parser$Parser$Advanced$andThen,
						function (_n1) {
							return A5(elm$parser$Parser$Advanced$nestableHelp, isNotRelevant, open, close, expectingClose, nestLevel + 1);
						},
						open),
						A2(
						elm$parser$Parser$Advanced$andThen,
						function (_n2) {
							return A5(elm$parser$Parser$Advanced$nestableHelp, isNotRelevant, open, close, expectingClose, nestLevel);
						},
						A2(elm$parser$Parser$Advanced$chompIf, elm$parser$Parser$Advanced$isChar, expectingClose))
					])));
	});
var elm$parser$Parser$Advanced$nestableComment = F2(
	function (open, close) {
		var oStr = open.a;
		var oX = open.b;
		var cStr = close.a;
		var cX = close.b;
		var _n0 = elm$core$String$uncons(oStr);
		if (_n0.$ === 'Nothing') {
			return elm$parser$Parser$Advanced$problem(oX);
		} else {
			var _n1 = _n0.a;
			var openChar = _n1.a;
			var _n2 = elm$core$String$uncons(cStr);
			if (_n2.$ === 'Nothing') {
				return elm$parser$Parser$Advanced$problem(cX);
			} else {
				var _n3 = _n2.a;
				var closeChar = _n3.a;
				var isNotRelevant = function (_char) {
					return (!_Utils_eq(_char, openChar)) && (!_Utils_eq(_char, closeChar));
				};
				var chompOpen = elm$parser$Parser$Advanced$token(open);
				return A2(
					elm$parser$Parser$Advanced$ignorer,
					chompOpen,
					A5(
						elm$parser$Parser$Advanced$nestableHelp,
						isNotRelevant,
						chompOpen,
						elm$parser$Parser$Advanced$token(close),
						cX,
						1));
			}
		}
	});
var elm$parser$Parser$Advanced$multiComment = F3(
	function (open, close, nestable) {
		if (nestable.$ === 'NotNestable') {
			return A2(
				elm$parser$Parser$Advanced$ignorer,
				elm$parser$Parser$Advanced$token(open),
				elm$parser$Parser$Advanced$chompUntil(close));
		} else {
			return A2(elm$parser$Parser$Advanced$nestableComment, open, close);
		}
	});
var elm$parser$Parser$multiComment = F3(
	function (open, close, nestable) {
		return A3(
			elm$parser$Parser$Advanced$multiComment,
			elm$parser$Parser$toToken(open),
			elm$parser$Parser$toToken(close),
			elm$parser$Parser$toAdvancedNestable(nestable));
	});
var stil4m$elm_syntax$Elm$Parser$Comments$multilineCommentInner = stil4m$elm_syntax$Combine$fromCore(
	elm$parser$Parser$getChompedString(
		A3(elm$parser$Parser$multiComment, '{-', '-}', elm$parser$Parser$Nestable)));
var stil4m$elm_syntax$Combine$modifyState = function (f) {
	return stil4m$elm_syntax$Combine$Parser(
		function (state) {
			return elm$parser$Parser$succeed(
				_Utils_Tuple2(
					f(state),
					_Utils_Tuple0));
		});
};
var stil4m$elm_syntax$Elm$Parser$State$State = function (a) {
	return {$: 'State', a: a};
};
var stil4m$elm_syntax$Elm$Parser$State$addComment = F2(
	function (pair, _n0) {
		var s = _n0.a;
		return stil4m$elm_syntax$Elm$Parser$State$State(
			_Utils_update(
				s,
				{
					comments: A2(elm$core$List$cons, pair, s.comments)
				}));
	});
var stil4m$elm_syntax$Elm$Parser$Comments$addCommentToState = function (p) {
	return A2(
		stil4m$elm_syntax$Combine$andThen,
		function (pair) {
			return A2(
				stil4m$elm_syntax$Combine$continueWith,
				stil4m$elm_syntax$Combine$succeed(_Utils_Tuple0),
				stil4m$elm_syntax$Combine$modifyState(
					stil4m$elm_syntax$Elm$Parser$State$addComment(pair)));
		},
		p);
};
var stil4m$elm_syntax$Elm$Parser$Comments$parseComment = function (commentParser) {
	return stil4m$elm_syntax$Elm$Parser$Comments$addCommentToState(
		stil4m$elm_syntax$Elm$Parser$Node$parser(commentParser));
};
var stil4m$elm_syntax$Elm$Parser$Comments$multilineComment = stil4m$elm_syntax$Combine$lazy(
	function (_n0) {
		return stil4m$elm_syntax$Elm$Parser$Comments$parseComment(stil4m$elm_syntax$Elm$Parser$Comments$multilineCommentInner);
	});
var stil4m$elm_syntax$Elm$Parser$Whitespace$untilNewlineToken = stil4m$elm_syntax$Combine$fromCore(
	elm$parser$Parser$getChompedString(
		elm$parser$Parser$chompWhile(
			function (c) {
				return (!_Utils_eq(
					c,
					_Utils_chr('\u000d'))) && (!_Utils_eq(
					c,
					_Utils_chr('\n')));
			})));
var stil4m$elm_syntax$Elm$Parser$Comments$singleLineComment = stil4m$elm_syntax$Elm$Parser$Comments$parseComment(
	A2(
		stil4m$elm_syntax$Combine$andMap,
		stil4m$elm_syntax$Elm$Parser$Whitespace$untilNewlineToken,
		A2(
			stil4m$elm_syntax$Combine$andMap,
			stil4m$elm_syntax$Combine$string('--'),
			stil4m$elm_syntax$Combine$succeed(elm$core$Basics$append))));
var stil4m$elm_syntax$Elm$Parser$Layout$anyComment = A2(stil4m$elm_syntax$Combine$or, stil4m$elm_syntax$Elm$Parser$Comments$singleLineComment, stil4m$elm_syntax$Elm$Parser$Comments$multilineComment);
var stil4m$elm_syntax$Elm$Parser$State$currentIndent = function (_n0) {
	var indents = _n0.a.indents;
	return A2(
		elm$core$Maybe$withDefault,
		0,
		elm$core$List$head(indents));
};
var stil4m$elm_syntax$Elm$Parser$State$expectedColumn = A2(
	elm$core$Basics$composeR,
	stil4m$elm_syntax$Elm$Parser$State$currentIndent,
	elm$core$Basics$add(1));
var stil4m$elm_syntax$Elm$Parser$Layout$verifyIndent = function (f) {
	return stil4m$elm_syntax$Combine$withState(
		function (s) {
			return stil4m$elm_syntax$Combine$withLocation(
				function (l) {
					return A2(
						f,
						stil4m$elm_syntax$Elm$Parser$State$expectedColumn(s),
						l.column) ? stil4m$elm_syntax$Combine$succeed(_Utils_Tuple0) : stil4m$elm_syntax$Combine$fail(
						'Expected higher indent than ' + elm$core$String$fromInt(l.column));
				});
		});
};
var stil4m$elm_syntax$Elm$Parser$Whitespace$many1Spaces = stil4m$elm_syntax$Combine$fromCore(
	A2(
		elm$parser$Parser$ignorer,
		elm$parser$Parser$token(' '),
		elm$parser$Parser$chompWhile(
			function (c) {
				return _Utils_eq(
					c,
					_Utils_chr(' '));
			})));
var stil4m$elm_syntax$Elm$Parser$Whitespace$realNewLine = stil4m$elm_syntax$Combine$fromCore(
	elm$parser$Parser$getChompedString(
		A2(
			elm$parser$Parser$ignorer,
			A2(
				elm$parser$Parser$ignorer,
				elm$parser$Parser$succeed(_Utils_Tuple0),
				elm$parser$Parser$oneOf(
					_List_fromArray(
						[
							elm$parser$Parser$chompIf(
							elm$core$Basics$eq(
								_Utils_chr('\u000d'))),
							elm$parser$Parser$succeed(_Utils_Tuple0)
						]))),
			elm$parser$Parser$symbol('\n'))));
var stil4m$elm_syntax$Elm$Parser$Layout$layout = A2(
	stil4m$elm_syntax$Combine$continueWith,
	stil4m$elm_syntax$Elm$Parser$Layout$verifyIndent(
		F2(
			function (stateIndent, current) {
				return _Utils_cmp(stateIndent, current) < 0;
			})),
	stil4m$elm_syntax$Combine$many1(
		stil4m$elm_syntax$Combine$choice(
			_List_fromArray(
				[
					stil4m$elm_syntax$Elm$Parser$Layout$anyComment,
					A2(
					stil4m$elm_syntax$Combine$continueWith,
					stil4m$elm_syntax$Combine$choice(
						_List_fromArray(
							[stil4m$elm_syntax$Elm$Parser$Whitespace$many1Spaces, stil4m$elm_syntax$Elm$Parser$Layout$anyComment])),
					stil4m$elm_syntax$Combine$many1(stil4m$elm_syntax$Elm$Parser$Whitespace$realNewLine)),
					stil4m$elm_syntax$Elm$Parser$Whitespace$many1Spaces
				]))));
var stil4m$elm_syntax$Elm$Parser$Layout$maybeAroundBothSides = function (x) {
	return A2(
		stil4m$elm_syntax$Combine$ignore,
		stil4m$elm_syntax$Combine$maybe(stil4m$elm_syntax$Elm$Parser$Layout$layout),
		A2(
			stil4m$elm_syntax$Combine$continueWith,
			x,
			stil4m$elm_syntax$Combine$maybe(stil4m$elm_syntax$Elm$Parser$Layout$layout)));
};
var elm$core$Result$fromMaybe = F2(
	function (err, maybe) {
		if (maybe.$ === 'Just') {
			var v = maybe.a;
			return elm$core$Result$Ok(v);
		} else {
			return elm$core$Result$Err(err);
		}
	});
var elm$parser$Parser$ExpectingBinary = {$: 'ExpectingBinary'};
var elm$parser$Parser$ExpectingFloat = {$: 'ExpectingFloat'};
var elm$parser$Parser$ExpectingHex = {$: 'ExpectingHex'};
var elm$parser$Parser$ExpectingInt = {$: 'ExpectingInt'};
var elm$parser$Parser$ExpectingNumber = {$: 'ExpectingNumber'};
var elm$parser$Parser$ExpectingOctal = {$: 'ExpectingOctal'};
var elm$parser$Parser$Advanced$consumeBase = _Parser_consumeBase;
var elm$parser$Parser$Advanced$consumeBase16 = _Parser_consumeBase16;
var elm$core$String$toFloat = _String_toFloat;
var elm$parser$Parser$Advanced$bumpOffset = F2(
	function (newOffset, s) {
		return {col: s.col + (newOffset - s.offset), context: s.context, indent: s.indent, offset: newOffset, row: s.row, src: s.src};
	});
var elm$parser$Parser$Advanced$chompBase10 = _Parser_chompBase10;
var elm$parser$Parser$Advanced$isAsciiCode = _Parser_isAsciiCode;
var elm$parser$Parser$Advanced$consumeExp = F2(
	function (offset, src) {
		if (A3(elm$parser$Parser$Advanced$isAsciiCode, 101, offset, src) || A3(elm$parser$Parser$Advanced$isAsciiCode, 69, offset, src)) {
			var eOffset = offset + 1;
			var expOffset = (A3(elm$parser$Parser$Advanced$isAsciiCode, 43, eOffset, src) || A3(elm$parser$Parser$Advanced$isAsciiCode, 45, eOffset, src)) ? (eOffset + 1) : eOffset;
			var newOffset = A2(elm$parser$Parser$Advanced$chompBase10, expOffset, src);
			return _Utils_eq(expOffset, newOffset) ? (-newOffset) : newOffset;
		} else {
			return offset;
		}
	});
var elm$parser$Parser$Advanced$consumeDotAndExp = F2(
	function (offset, src) {
		return A3(elm$parser$Parser$Advanced$isAsciiCode, 46, offset, src) ? A2(
			elm$parser$Parser$Advanced$consumeExp,
			A2(elm$parser$Parser$Advanced$chompBase10, offset + 1, src),
			src) : A2(elm$parser$Parser$Advanced$consumeExp, offset, src);
	});
var elm$parser$Parser$Advanced$finalizeInt = F5(
	function (invalid, handler, startOffset, _n0, s) {
		var endOffset = _n0.a;
		var n = _n0.b;
		if (handler.$ === 'Err') {
			var x = handler.a;
			return A2(
				elm$parser$Parser$Advanced$Bad,
				true,
				A2(elm$parser$Parser$Advanced$fromState, s, x));
		} else {
			var toValue = handler.a;
			return _Utils_eq(startOffset, endOffset) ? A2(
				elm$parser$Parser$Advanced$Bad,
				_Utils_cmp(s.offset, startOffset) < 0,
				A2(elm$parser$Parser$Advanced$fromState, s, invalid)) : A3(
				elm$parser$Parser$Advanced$Good,
				true,
				toValue(n),
				A2(elm$parser$Parser$Advanced$bumpOffset, endOffset, s));
		}
	});
var elm$parser$Parser$Advanced$finalizeFloat = F6(
	function (invalid, expecting, intSettings, floatSettings, intPair, s) {
		var intOffset = intPair.a;
		var floatOffset = A2(elm$parser$Parser$Advanced$consumeDotAndExp, intOffset, s.src);
		if (floatOffset < 0) {
			return A2(
				elm$parser$Parser$Advanced$Bad,
				true,
				A4(elm$parser$Parser$Advanced$fromInfo, s.row, s.col - (floatOffset + s.offset), invalid, s.context));
		} else {
			if (_Utils_eq(s.offset, floatOffset)) {
				return A2(
					elm$parser$Parser$Advanced$Bad,
					false,
					A2(elm$parser$Parser$Advanced$fromState, s, expecting));
			} else {
				if (_Utils_eq(intOffset, floatOffset)) {
					return A5(elm$parser$Parser$Advanced$finalizeInt, invalid, intSettings, s.offset, intPair, s);
				} else {
					if (floatSettings.$ === 'Err') {
						var x = floatSettings.a;
						return A2(
							elm$parser$Parser$Advanced$Bad,
							true,
							A2(elm$parser$Parser$Advanced$fromState, s, invalid));
					} else {
						var toValue = floatSettings.a;
						var _n1 = elm$core$String$toFloat(
							A3(elm$core$String$slice, s.offset, floatOffset, s.src));
						if (_n1.$ === 'Nothing') {
							return A2(
								elm$parser$Parser$Advanced$Bad,
								true,
								A2(elm$parser$Parser$Advanced$fromState, s, invalid));
						} else {
							var n = _n1.a;
							return A3(
								elm$parser$Parser$Advanced$Good,
								true,
								toValue(n),
								A2(elm$parser$Parser$Advanced$bumpOffset, floatOffset, s));
						}
					}
				}
			}
		}
	});
var elm$parser$Parser$Advanced$number = function (c) {
	return elm$parser$Parser$Advanced$Parser(
		function (s) {
			if (A3(elm$parser$Parser$Advanced$isAsciiCode, 48, s.offset, s.src)) {
				var zeroOffset = s.offset + 1;
				var baseOffset = zeroOffset + 1;
				return A3(elm$parser$Parser$Advanced$isAsciiCode, 120, zeroOffset, s.src) ? A5(
					elm$parser$Parser$Advanced$finalizeInt,
					c.invalid,
					c.hex,
					baseOffset,
					A2(elm$parser$Parser$Advanced$consumeBase16, baseOffset, s.src),
					s) : (A3(elm$parser$Parser$Advanced$isAsciiCode, 111, zeroOffset, s.src) ? A5(
					elm$parser$Parser$Advanced$finalizeInt,
					c.invalid,
					c.octal,
					baseOffset,
					A3(elm$parser$Parser$Advanced$consumeBase, 8, baseOffset, s.src),
					s) : (A3(elm$parser$Parser$Advanced$isAsciiCode, 98, zeroOffset, s.src) ? A5(
					elm$parser$Parser$Advanced$finalizeInt,
					c.invalid,
					c.binary,
					baseOffset,
					A3(elm$parser$Parser$Advanced$consumeBase, 2, baseOffset, s.src),
					s) : A6(
					elm$parser$Parser$Advanced$finalizeFloat,
					c.invalid,
					c.expecting,
					c._int,
					c._float,
					_Utils_Tuple2(zeroOffset, 0),
					s)));
			} else {
				return A6(
					elm$parser$Parser$Advanced$finalizeFloat,
					c.invalid,
					c.expecting,
					c._int,
					c._float,
					A3(elm$parser$Parser$Advanced$consumeBase, 10, s.offset, s.src),
					s);
			}
		});
};
var elm$parser$Parser$number = function (i) {
	return elm$parser$Parser$Advanced$number(
		{
			binary: A2(elm$core$Result$fromMaybe, elm$parser$Parser$ExpectingBinary, i.binary),
			expecting: elm$parser$Parser$ExpectingNumber,
			_float: A2(elm$core$Result$fromMaybe, elm$parser$Parser$ExpectingFloat, i._float),
			hex: A2(elm$core$Result$fromMaybe, elm$parser$Parser$ExpectingHex, i.hex),
			_int: A2(elm$core$Result$fromMaybe, elm$parser$Parser$ExpectingInt, i._int),
			invalid: elm$parser$Parser$ExpectingNumber,
			octal: A2(elm$core$Result$fromMaybe, elm$parser$Parser$ExpectingOctal, i.octal)
		});
};
var stil4m$elm_syntax$Elm$Parser$Numbers$raw = F3(
	function (floatf, intf, hexf) {
		return elm$parser$Parser$number(
			{
				binary: elm$core$Maybe$Nothing,
				_float: elm$core$Maybe$Just(floatf),
				hex: elm$core$Maybe$Just(hexf),
				_int: elm$core$Maybe$Just(intf),
				octal: elm$core$Maybe$Nothing
			});
	});
var stil4m$elm_syntax$Elm$Parser$Numbers$number = F3(
	function (floatf, intf, hexf) {
		return stil4m$elm_syntax$Combine$fromCore(
			A3(stil4m$elm_syntax$Elm$Parser$Numbers$raw, floatf, intf, hexf));
	});
var stil4m$elm_syntax$Elm$Syntax$Pattern$FloatPattern = function (a) {
	return {$: 'FloatPattern', a: a};
};
var stil4m$elm_syntax$Elm$Syntax$Pattern$HexPattern = function (a) {
	return {$: 'HexPattern', a: a};
};
var stil4m$elm_syntax$Elm$Syntax$Pattern$IntPattern = function (a) {
	return {$: 'IntPattern', a: a};
};
var stil4m$elm_syntax$Elm$Parser$Patterns$numberPart = A3(stil4m$elm_syntax$Elm$Parser$Numbers$number, stil4m$elm_syntax$Elm$Syntax$Pattern$FloatPattern, stil4m$elm_syntax$Elm$Syntax$Pattern$IntPattern, stil4m$elm_syntax$Elm$Syntax$Pattern$HexPattern);
var stil4m$elm_syntax$Elm$Parser$Tokens$functionName = stil4m$elm_syntax$Combine$fromCore(
	elm$parser$Parser$variable(
		{
			inner: function (c) {
				return elm$core$Char$isAlphaNum(c) || _Utils_eq(
					c,
					_Utils_chr('_'));
			},
			reserved: elm$core$Set$fromList(stil4m$elm_syntax$Elm$Parser$Tokens$reservedList),
			start: elm$core$Char$isLower
		}));
var stil4m$elm_syntax$Elm$Syntax$Pattern$RecordPattern = function (a) {
	return {$: 'RecordPattern', a: a};
};
var stil4m$elm_syntax$Elm$Parser$Patterns$recordPart = stil4m$elm_syntax$Combine$lazy(
	function (_n0) {
		return stil4m$elm_syntax$Elm$Parser$Node$parser(
			A2(
				stil4m$elm_syntax$Combine$map,
				stil4m$elm_syntax$Elm$Syntax$Pattern$RecordPattern,
				A3(
					stil4m$elm_syntax$Combine$between,
					A2(
						stil4m$elm_syntax$Combine$continueWith,
						stil4m$elm_syntax$Combine$maybe(stil4m$elm_syntax$Elm$Parser$Layout$layout),
						stil4m$elm_syntax$Combine$string('{')),
					A2(
						stil4m$elm_syntax$Combine$continueWith,
						stil4m$elm_syntax$Combine$string('}'),
						stil4m$elm_syntax$Combine$maybe(stil4m$elm_syntax$Elm$Parser$Layout$layout)),
					A2(
						stil4m$elm_syntax$Combine$sepBy1,
						stil4m$elm_syntax$Combine$string(','),
						stil4m$elm_syntax$Elm$Parser$Layout$maybeAroundBothSides(
							stil4m$elm_syntax$Elm$Parser$Node$parser(stil4m$elm_syntax$Elm$Parser$Tokens$functionName))))));
	});
var stil4m$elm_syntax$Elm$Syntax$Pattern$VarPattern = function (a) {
	return {$: 'VarPattern', a: a};
};
var stil4m$elm_syntax$Elm$Parser$Patterns$variablePart = stil4m$elm_syntax$Elm$Parser$Node$parser(
	A2(stil4m$elm_syntax$Combine$map, stil4m$elm_syntax$Elm$Syntax$Pattern$VarPattern, stil4m$elm_syntax$Elm$Parser$Tokens$functionName));
var elm$core$String$concat = function (strings) {
	return A2(elm$core$String$join, '', strings);
};
var elm$parser$Parser$Advanced$getOffset = elm$parser$Parser$Advanced$Parser(
	function (s) {
		return A3(elm$parser$Parser$Advanced$Good, false, s.offset, s);
	});
var elm$parser$Parser$getOffset = elm$parser$Parser$Advanced$getOffset;
var stil4m$elm_syntax$Elm$Parser$Tokens$stringLiteral = function () {
	var helper = function (s) {
		return s.escaped ? A2(
			elm$parser$Parser$map,
			function (v) {
				return elm$parser$Parser$Loop(
					_Utils_update(
						s,
						{
							escaped: false,
							parts: A2(
								elm$core$List$cons,
								elm$core$String$fromList(
									_List_fromArray(
										[v])),
								s.parts)
						}));
			},
			stil4m$elm_syntax$Elm$Parser$Tokens$escapedCharValue) : elm$parser$Parser$oneOf(
			_List_fromArray(
				[
					A2(
					elm$parser$Parser$map,
					function (_n0) {
						return elm$parser$Parser$Done(
							elm$core$String$concat(
								elm$core$List$reverse(s.parts)));
					},
					elm$parser$Parser$symbol('\"')),
					A2(
					elm$parser$Parser$map,
					function (_n1) {
						return elm$parser$Parser$Loop(
							_Utils_update(
								s,
								{escaped: true, parts: s.parts}));
					},
					elm$parser$Parser$getChompedString(
						elm$parser$Parser$symbol('\\'))),
					A2(
					elm$parser$Parser$andThen,
					function (_n2) {
						var start = _n2.a;
						var value = _n2.b;
						var end = _n2.c;
						return _Utils_eq(start, end) ? elm$parser$Parser$problem('Expected a string character or a double quote') : elm$parser$Parser$succeed(
							elm$parser$Parser$Loop(
								_Utils_update(
									s,
									{
										parts: A2(elm$core$List$cons, value, s.parts)
									})));
					},
					A2(
						elm$parser$Parser$keeper,
						A2(
							elm$parser$Parser$keeper,
							A2(
								elm$parser$Parser$keeper,
								elm$parser$Parser$succeed(
									F3(
										function (start, value, end) {
											return _Utils_Tuple3(start, value, end);
										})),
								elm$parser$Parser$getOffset),
							elm$parser$Parser$getChompedString(
								elm$parser$Parser$chompWhile(
									function (c) {
										return (!_Utils_eq(
											c,
											_Utils_chr('\"'))) && (!_Utils_eq(
											c,
											_Utils_chr('\\')));
									}))),
						elm$parser$Parser$getOffset))
				]));
	};
	return stil4m$elm_syntax$Combine$fromCore(
		A2(
			elm$parser$Parser$keeper,
			A2(
				elm$parser$Parser$ignorer,
				elm$parser$Parser$succeed(elm$core$Basics$identity),
				elm$parser$Parser$symbol('\"')),
			A2(
				elm$parser$Parser$loop,
				{escaped: false, parts: _List_Nil},
				helper)));
}();
var elm$core$Maybe$map2 = F3(
	function (func, ma, mb) {
		if (ma.$ === 'Nothing') {
			return elm$core$Maybe$Nothing;
		} else {
			var a = ma.a;
			if (mb.$ === 'Nothing') {
				return elm$core$Maybe$Nothing;
			} else {
				var b = mb.a;
				return elm$core$Maybe$Just(
					A2(func, a, b));
			}
		}
	});
var stil4m$elm_syntax$Elm$Syntax$Range$Range = F2(
	function (start, end) {
		return {end: end, start: start};
	});
var stil4m$elm_syntax$Elm$Syntax$Range$emptyRange = {
	end: {column: 0, row: 0},
	start: {column: 0, row: 0}
};
var elm$core$List$sortWith = _List_sortWith;
var stil4m$elm_syntax$Elm$Syntax$Range$compareLocations = F2(
	function (left, right) {
		return (_Utils_cmp(left.row, right.row) < 0) ? elm$core$Basics$LT : ((_Utils_cmp(right.row, left.row) < 0) ? elm$core$Basics$GT : A2(elm$core$Basics$compare, left.column, right.column));
	});
var stil4m$elm_syntax$Elm$Syntax$Range$sortLocations = elm$core$List$sortWith(stil4m$elm_syntax$Elm$Syntax$Range$compareLocations);
var stil4m$elm_syntax$Elm$Syntax$Range$combine = function (ranges) {
	var starts = stil4m$elm_syntax$Elm$Syntax$Range$sortLocations(
		A2(
			elm$core$List$map,
			function ($) {
				return $.start;
			},
			ranges));
	var ends = elm$core$List$reverse(
		stil4m$elm_syntax$Elm$Syntax$Range$sortLocations(
			A2(
				elm$core$List$map,
				function ($) {
					return $.end;
				},
				ranges)));
	return A2(
		elm$core$Maybe$withDefault,
		stil4m$elm_syntax$Elm$Syntax$Range$emptyRange,
		A3(
			elm$core$Maybe$map2,
			stil4m$elm_syntax$Elm$Syntax$Range$Range,
			elm$core$List$head(starts),
			elm$core$List$head(ends)));
};
var stil4m$elm_syntax$Elm$Syntax$Node$combine = F3(
	function (f, a, b) {
		var r1 = a.a;
		var r2 = b.a;
		return A2(
			stil4m$elm_syntax$Elm$Syntax$Node$Node,
			stil4m$elm_syntax$Elm$Syntax$Range$combine(
				_List_fromArray(
					[r1, r2])),
			A2(f, a, b));
	});
var stil4m$elm_syntax$Elm$Syntax$Pattern$AllPattern = {$: 'AllPattern'};
var stil4m$elm_syntax$Elm$Syntax$Pattern$AsPattern = F2(
	function (a, b) {
		return {$: 'AsPattern', a: a, b: b};
	});
var stil4m$elm_syntax$Elm$Syntax$Pattern$CharPattern = function (a) {
	return {$: 'CharPattern', a: a};
};
var stil4m$elm_syntax$Elm$Syntax$Pattern$ListPattern = function (a) {
	return {$: 'ListPattern', a: a};
};
var stil4m$elm_syntax$Elm$Syntax$Pattern$NamedPattern = F2(
	function (a, b) {
		return {$: 'NamedPattern', a: a, b: b};
	});
var stil4m$elm_syntax$Elm$Syntax$Pattern$ParenthesizedPattern = function (a) {
	return {$: 'ParenthesizedPattern', a: a};
};
var stil4m$elm_syntax$Elm$Syntax$Pattern$QualifiedNameRef = F2(
	function (moduleName, name) {
		return {moduleName: moduleName, name: name};
	});
var stil4m$elm_syntax$Elm$Syntax$Pattern$StringPattern = function (a) {
	return {$: 'StringPattern', a: a};
};
var stil4m$elm_syntax$Elm$Syntax$Pattern$TuplePattern = function (a) {
	return {$: 'TuplePattern', a: a};
};
var stil4m$elm_syntax$Elm$Syntax$Pattern$UnConsPattern = F2(
	function (a, b) {
		return {$: 'UnConsPattern', a: a, b: b};
	});
var stil4m$elm_syntax$Elm$Syntax$Pattern$UnitPattern = {$: 'UnitPattern'};
var stil4m$elm_syntax$Elm$Parser$Patterns$qualifiedPattern = function (consumeArgs) {
	return A2(
		stil4m$elm_syntax$Combine$andThen,
		function (_n0) {
			var range = _n0.a;
			var _n1 = _n0.b;
			var mod = _n1.a;
			var name = _n1.b;
			return A2(
				stil4m$elm_syntax$Combine$map,
				function (args) {
					return A2(
						stil4m$elm_syntax$Elm$Syntax$Node$Node,
						stil4m$elm_syntax$Elm$Syntax$Range$combine(
							A2(
								elm$core$List$cons,
								range,
								A2(
									elm$core$List$map,
									function (_n2) {
										var r = _n2.a;
										return r;
									},
									args))),
						A2(
							stil4m$elm_syntax$Elm$Syntax$Pattern$NamedPattern,
							A2(stil4m$elm_syntax$Elm$Syntax$Pattern$QualifiedNameRef, mod, name),
							args));
				},
				consumeArgs ? stil4m$elm_syntax$Combine$many(
					A2(
						stil4m$elm_syntax$Combine$ignore,
						stil4m$elm_syntax$Combine$maybe(stil4m$elm_syntax$Elm$Parser$Layout$layout),
						stil4m$elm_syntax$Elm$Parser$Patterns$cyclic$qualifiedPatternArg())) : stil4m$elm_syntax$Combine$succeed(_List_Nil));
		},
		A2(
			stil4m$elm_syntax$Combine$ignore,
			stil4m$elm_syntax$Combine$maybe(stil4m$elm_syntax$Elm$Parser$Layout$layout),
			stil4m$elm_syntax$Elm$Parser$Node$parser(stil4m$elm_syntax$Elm$Parser$Base$typeIndicator)));
};
var stil4m$elm_syntax$Elm$Parser$Patterns$tryToCompose = function (x) {
	return A2(
		stil4m$elm_syntax$Combine$continueWith,
		stil4m$elm_syntax$Combine$choice(
			_List_fromArray(
				[
					A2(
					stil4m$elm_syntax$Combine$map,
					function (y) {
						return A3(stil4m$elm_syntax$Elm$Syntax$Node$combine, stil4m$elm_syntax$Elm$Syntax$Pattern$AsPattern, x, y);
					},
					A2(
						stil4m$elm_syntax$Combine$continueWith,
						stil4m$elm_syntax$Elm$Parser$Node$parser(stil4m$elm_syntax$Elm$Parser$Tokens$functionName),
						A2(
							stil4m$elm_syntax$Combine$ignore,
							stil4m$elm_syntax$Elm$Parser$Layout$layout,
							stil4m$elm_syntax$Combine$fromCore(
								elm$parser$Parser$keyword('as'))))),
					A2(
					stil4m$elm_syntax$Combine$map,
					function (y) {
						return A3(stil4m$elm_syntax$Elm$Syntax$Node$combine, stil4m$elm_syntax$Elm$Syntax$Pattern$UnConsPattern, x, y);
					},
					A2(
						stil4m$elm_syntax$Combine$continueWith,
						stil4m$elm_syntax$Elm$Parser$Patterns$cyclic$pattern(),
						A2(
							stil4m$elm_syntax$Combine$ignore,
							stil4m$elm_syntax$Combine$maybe(stil4m$elm_syntax$Elm$Parser$Layout$layout),
							stil4m$elm_syntax$Combine$fromCore(
								elm$parser$Parser$symbol('::'))))),
					stil4m$elm_syntax$Combine$succeed(x)
				])),
		stil4m$elm_syntax$Combine$maybe(stil4m$elm_syntax$Elm$Parser$Layout$layout));
};
function stil4m$elm_syntax$Elm$Parser$Patterns$cyclic$pattern() {
	return A2(
		stil4m$elm_syntax$Combine$andThen,
		stil4m$elm_syntax$Elm$Parser$Patterns$tryToCompose,
		stil4m$elm_syntax$Elm$Parser$Patterns$cyclic$composablePattern());
}
function stil4m$elm_syntax$Elm$Parser$Patterns$cyclic$composablePattern() {
	return stil4m$elm_syntax$Combine$choice(
		_List_fromArray(
			[
				stil4m$elm_syntax$Elm$Parser$Patterns$variablePart,
				stil4m$elm_syntax$Elm$Parser$Patterns$qualifiedPattern(true),
				stil4m$elm_syntax$Elm$Parser$Node$parser(
				A2(stil4m$elm_syntax$Combine$map, stil4m$elm_syntax$Elm$Syntax$Pattern$StringPattern, stil4m$elm_syntax$Elm$Parser$Tokens$stringLiteral)),
				stil4m$elm_syntax$Elm$Parser$Node$parser(
				A2(stil4m$elm_syntax$Combine$map, stil4m$elm_syntax$Elm$Syntax$Pattern$CharPattern, stil4m$elm_syntax$Elm$Parser$Tokens$characterLiteral)),
				stil4m$elm_syntax$Elm$Parser$Node$parser(stil4m$elm_syntax$Elm$Parser$Patterns$numberPart),
				stil4m$elm_syntax$Elm$Parser$Node$parser(
				A2(
					stil4m$elm_syntax$Combine$map,
					elm$core$Basics$always(stil4m$elm_syntax$Elm$Syntax$Pattern$UnitPattern),
					stil4m$elm_syntax$Combine$fromCore(
						elm$parser$Parser$symbol('()')))),
				stil4m$elm_syntax$Elm$Parser$Node$parser(
				A2(
					stil4m$elm_syntax$Combine$map,
					elm$core$Basics$always(stil4m$elm_syntax$Elm$Syntax$Pattern$AllPattern),
					stil4m$elm_syntax$Combine$fromCore(
						elm$parser$Parser$symbol('_')))),
				stil4m$elm_syntax$Elm$Parser$Patterns$recordPart,
				stil4m$elm_syntax$Elm$Parser$Patterns$cyclic$listPattern(),
				stil4m$elm_syntax$Elm$Parser$Patterns$cyclic$parensPattern()
			]));
}
function stil4m$elm_syntax$Elm$Parser$Patterns$cyclic$qualifiedPatternArg() {
	return stil4m$elm_syntax$Combine$choice(
		_List_fromArray(
			[
				stil4m$elm_syntax$Elm$Parser$Patterns$variablePart,
				stil4m$elm_syntax$Elm$Parser$Patterns$qualifiedPattern(false),
				stil4m$elm_syntax$Elm$Parser$Node$parser(
				A2(stil4m$elm_syntax$Combine$map, stil4m$elm_syntax$Elm$Syntax$Pattern$StringPattern, stil4m$elm_syntax$Elm$Parser$Tokens$stringLiteral)),
				stil4m$elm_syntax$Elm$Parser$Node$parser(
				A2(stil4m$elm_syntax$Combine$map, stil4m$elm_syntax$Elm$Syntax$Pattern$CharPattern, stil4m$elm_syntax$Elm$Parser$Tokens$characterLiteral)),
				stil4m$elm_syntax$Elm$Parser$Node$parser(stil4m$elm_syntax$Elm$Parser$Patterns$numberPart),
				stil4m$elm_syntax$Elm$Parser$Node$parser(
				A2(
					stil4m$elm_syntax$Combine$map,
					elm$core$Basics$always(stil4m$elm_syntax$Elm$Syntax$Pattern$UnitPattern),
					stil4m$elm_syntax$Combine$fromCore(
						elm$parser$Parser$symbol('()')))),
				stil4m$elm_syntax$Elm$Parser$Node$parser(
				A2(
					stil4m$elm_syntax$Combine$map,
					elm$core$Basics$always(stil4m$elm_syntax$Elm$Syntax$Pattern$AllPattern),
					stil4m$elm_syntax$Combine$fromCore(
						elm$parser$Parser$symbol('_')))),
				stil4m$elm_syntax$Elm$Parser$Patterns$recordPart,
				stil4m$elm_syntax$Elm$Parser$Patterns$cyclic$listPattern(),
				stil4m$elm_syntax$Elm$Parser$Patterns$cyclic$parensPattern()
			]));
}
function stil4m$elm_syntax$Elm$Parser$Patterns$cyclic$listPattern() {
	return stil4m$elm_syntax$Combine$lazy(
		function (_n5) {
			return stil4m$elm_syntax$Elm$Parser$Node$parser(
				A3(
					stil4m$elm_syntax$Combine$between,
					stil4m$elm_syntax$Combine$string('['),
					stil4m$elm_syntax$Combine$string(']'),
					A2(
						stil4m$elm_syntax$Combine$map,
						stil4m$elm_syntax$Elm$Syntax$Pattern$ListPattern,
						A2(
							stil4m$elm_syntax$Combine$sepBy,
							stil4m$elm_syntax$Combine$string(','),
							stil4m$elm_syntax$Elm$Parser$Layout$maybeAroundBothSides(
								stil4m$elm_syntax$Elm$Parser$Patterns$cyclic$pattern())))));
		});
}
function stil4m$elm_syntax$Elm$Parser$Patterns$cyclic$parensPattern() {
	return stil4m$elm_syntax$Combine$lazy(
		function (_n3) {
			return stil4m$elm_syntax$Elm$Parser$Node$parser(
				A2(
					stil4m$elm_syntax$Combine$map,
					function (c) {
						if (c.b && (!c.b.b)) {
							var x = c.a;
							return stil4m$elm_syntax$Elm$Syntax$Pattern$ParenthesizedPattern(x);
						} else {
							return stil4m$elm_syntax$Elm$Syntax$Pattern$TuplePattern(c);
						}
					},
					stil4m$elm_syntax$Combine$parens(
						A2(
							stil4m$elm_syntax$Combine$sepBy,
							stil4m$elm_syntax$Combine$string(','),
							stil4m$elm_syntax$Elm$Parser$Layout$maybeAroundBothSides(
								stil4m$elm_syntax$Elm$Parser$Patterns$cyclic$pattern())))));
		});
}
try {
	var stil4m$elm_syntax$Elm$Parser$Patterns$pattern = stil4m$elm_syntax$Elm$Parser$Patterns$cyclic$pattern();
	stil4m$elm_syntax$Elm$Parser$Patterns$cyclic$pattern = function () {
		return stil4m$elm_syntax$Elm$Parser$Patterns$pattern;
	};
	var stil4m$elm_syntax$Elm$Parser$Patterns$composablePattern = stil4m$elm_syntax$Elm$Parser$Patterns$cyclic$composablePattern();
	stil4m$elm_syntax$Elm$Parser$Patterns$cyclic$composablePattern = function () {
		return stil4m$elm_syntax$Elm$Parser$Patterns$composablePattern;
	};
	var stil4m$elm_syntax$Elm$Parser$Patterns$qualifiedPatternArg = stil4m$elm_syntax$Elm$Parser$Patterns$cyclic$qualifiedPatternArg();
	stil4m$elm_syntax$Elm$Parser$Patterns$cyclic$qualifiedPatternArg = function () {
		return stil4m$elm_syntax$Elm$Parser$Patterns$qualifiedPatternArg;
	};
	var stil4m$elm_syntax$Elm$Parser$Patterns$listPattern = stil4m$elm_syntax$Elm$Parser$Patterns$cyclic$listPattern();
	stil4m$elm_syntax$Elm$Parser$Patterns$cyclic$listPattern = function () {
		return stil4m$elm_syntax$Elm$Parser$Patterns$listPattern;
	};
	var stil4m$elm_syntax$Elm$Parser$Patterns$parensPattern = stil4m$elm_syntax$Elm$Parser$Patterns$cyclic$parensPattern();
	stil4m$elm_syntax$Elm$Parser$Patterns$cyclic$parensPattern = function () {
		return stil4m$elm_syntax$Elm$Parser$Patterns$parensPattern;
	};
} catch ($) {
throw 'Some top-level definitions from `Elm.Parser.Patterns` are causing infinite recursion:\n\n  ┌─────┐\n  │    pattern\n  │     ↓\n  │    composablePattern\n  │     ↓\n  │    qualifiedPatternArg\n  │     ↓\n  │    listPattern\n  │     ↓\n  │    parensPattern\n  │     ↓\n  │    qualifiedPattern\n  │     ↓\n  │    tryToCompose\n  └─────┘\n\nThese errors are very tricky, so read https://elm-lang.org/0.19.0/halting-problem to learn how to fix it!';}
var stil4m$elm_syntax$Elm$Parser$Declarations$functionArgument = stil4m$elm_syntax$Elm$Parser$Patterns$pattern;
var elm$core$List$any = F2(
	function (isOkay, list) {
		any:
		while (true) {
			if (!list.b) {
				return false;
			} else {
				var x = list.a;
				var xs = list.b;
				if (isOkay(x)) {
					return true;
				} else {
					var $temp$isOkay = isOkay,
						$temp$list = xs;
					isOkay = $temp$isOkay;
					list = $temp$list;
					continue any;
				}
			}
		}
	});
var elm$core$List$member = F2(
	function (x, xs) {
		return A2(
			elm$core$List$any,
			function (a) {
				return _Utils_eq(a, x);
			},
			xs);
	});
var stil4m$elm_syntax$Elm$Parser$Layout$Indented = {$: 'Indented'};
var stil4m$elm_syntax$Elm$Parser$Layout$Strict = {$: 'Strict'};
var stil4m$elm_syntax$Elm$Parser$State$storedColumns = function (_n0) {
	var indents = _n0.a.indents;
	return A2(
		elm$core$List$map,
		elm$core$Basics$add(1),
		indents);
};
var stil4m$elm_syntax$Elm$Parser$Layout$compute = stil4m$elm_syntax$Combine$withState(
	function (s) {
		return stil4m$elm_syntax$Combine$withLocation(
			function (l) {
				var known = A2(
					elm$core$List$cons,
					1,
					stil4m$elm_syntax$Elm$Parser$State$storedColumns(s));
				return A2(elm$core$List$member, l.column, known) ? stil4m$elm_syntax$Combine$succeed(stil4m$elm_syntax$Elm$Parser$Layout$Strict) : stil4m$elm_syntax$Combine$succeed(stil4m$elm_syntax$Elm$Parser$Layout$Indented);
			});
	});
var stil4m$elm_syntax$Elm$Parser$Layout$optimisticLayout = A2(
	stil4m$elm_syntax$Combine$continueWith,
	stil4m$elm_syntax$Elm$Parser$Layout$compute,
	stil4m$elm_syntax$Combine$many(
		stil4m$elm_syntax$Combine$choice(
			_List_fromArray(
				[
					stil4m$elm_syntax$Elm$Parser$Layout$anyComment,
					A2(
					stil4m$elm_syntax$Combine$continueWith,
					stil4m$elm_syntax$Combine$choice(
						_List_fromArray(
							[
								stil4m$elm_syntax$Elm$Parser$Whitespace$many1Spaces,
								stil4m$elm_syntax$Elm$Parser$Layout$anyComment,
								stil4m$elm_syntax$Combine$succeed(_Utils_Tuple0)
							])),
					stil4m$elm_syntax$Combine$many1(stil4m$elm_syntax$Elm$Parser$Whitespace$realNewLine)),
					stil4m$elm_syntax$Elm$Parser$Whitespace$many1Spaces
				]))));
var stil4m$elm_syntax$Elm$Parser$Layout$optimisticLayoutWith = F2(
	function (onStrict, onIndented) {
		return A2(
			stil4m$elm_syntax$Combine$andThen,
			function (ind) {
				if (ind.$ === 'Strict') {
					return onStrict(_Utils_Tuple0);
				} else {
					return onIndented(_Utils_Tuple0);
				}
			},
			stil4m$elm_syntax$Elm$Parser$Layout$optimisticLayout);
	});
var stil4m$elm_syntax$Elm$Parser$TypeAnnotation$Eager = {$: 'Eager'};
var stil4m$elm_syntax$Elm$Parser$TypeAnnotation$Lazy = {$: 'Lazy'};
var stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$Tupled = function (a) {
	return {$: 'Tupled', a: a};
};
var stil4m$elm_syntax$Elm$Parser$TypeAnnotation$asTypeAnnotation = F2(
	function (x, xs) {
		var value = x.b;
		if (!xs.b) {
			return value;
		} else {
			return stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$Tupled(
				A2(elm$core$List$cons, x, xs));
		}
	});
var stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$GenericType = function (a) {
	return {$: 'GenericType', a: a};
};
var stil4m$elm_syntax$Elm$Parser$TypeAnnotation$genericTypeAnnotation = stil4m$elm_syntax$Combine$lazy(
	function (_n0) {
		return stil4m$elm_syntax$Elm$Parser$Node$parser(
			A2(stil4m$elm_syntax$Combine$map, stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$GenericType, stil4m$elm_syntax$Elm$Parser$Tokens$functionName));
	});
var stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$FunctionTypeAnnotation = F2(
	function (a, b) {
		return {$: 'FunctionTypeAnnotation', a: a, b: b};
	});
var stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$GenericRecord = F2(
	function (a, b) {
		return {$: 'GenericRecord', a: a, b: b};
	});
var stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$Record = function (a) {
	return {$: 'Record', a: a};
};
var stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$Typed = F2(
	function (a, b) {
		return {$: 'Typed', a: a, b: b};
	});
var stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$Unit = {$: 'Unit'};
var stil4m$elm_syntax$Elm$Parser$TypeAnnotation$typeAnnotationNoFn = function (mode) {
	return stil4m$elm_syntax$Combine$lazy(
		function (_n7) {
			return stil4m$elm_syntax$Combine$choice(
				_List_fromArray(
					[
						stil4m$elm_syntax$Elm$Parser$TypeAnnotation$cyclic$parensTypeAnnotation(),
						stil4m$elm_syntax$Elm$Parser$TypeAnnotation$typedTypeAnnotation(mode),
						stil4m$elm_syntax$Elm$Parser$TypeAnnotation$genericTypeAnnotation,
						stil4m$elm_syntax$Elm$Parser$TypeAnnotation$cyclic$recordTypeAnnotation()
					]));
		});
};
var stil4m$elm_syntax$Elm$Parser$TypeAnnotation$typedTypeAnnotation = function (mode) {
	return stil4m$elm_syntax$Combine$lazy(
		function (_n0) {
			var nodeRanges = elm$core$List$map(
				function (_n6) {
					var r = _n6.a;
					return r;
				});
			var genericHelper = function (items) {
				return A2(
					stil4m$elm_syntax$Combine$or,
					A2(
						stil4m$elm_syntax$Combine$andThen,
						function (next) {
							return A2(
								stil4m$elm_syntax$Combine$ignore,
								stil4m$elm_syntax$Combine$maybe(stil4m$elm_syntax$Elm$Parser$Layout$layout),
								A2(
									stil4m$elm_syntax$Elm$Parser$Layout$optimisticLayoutWith,
									function (_n1) {
										return stil4m$elm_syntax$Combine$succeed(
											elm$core$List$reverse(
												A2(elm$core$List$cons, next, items)));
									},
									function (_n2) {
										return genericHelper(
											A2(elm$core$List$cons, next, items));
									}));
						},
						stil4m$elm_syntax$Elm$Parser$TypeAnnotation$typeAnnotationNoFn(stil4m$elm_syntax$Elm$Parser$TypeAnnotation$Lazy)),
					stil4m$elm_syntax$Combine$succeed(
						elm$core$List$reverse(items)));
			};
			return A2(
				stil4m$elm_syntax$Combine$andThen,
				function (original) {
					var tir = original.a;
					return A2(
						stil4m$elm_syntax$Elm$Parser$Layout$optimisticLayoutWith,
						function (_n3) {
							return stil4m$elm_syntax$Combine$succeed(
								A2(
									stil4m$elm_syntax$Elm$Syntax$Node$Node,
									tir,
									A2(stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$Typed, original, _List_Nil)));
						},
						function (_n4) {
							if (mode.$ === 'Eager') {
								return A2(
									stil4m$elm_syntax$Combine$map,
									function (args) {
										return A2(
											stil4m$elm_syntax$Elm$Syntax$Node$Node,
											stil4m$elm_syntax$Elm$Syntax$Range$combine(
												A2(
													elm$core$List$cons,
													tir,
													nodeRanges(args))),
											A2(stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$Typed, original, args));
									},
									genericHelper(_List_Nil));
							} else {
								return stil4m$elm_syntax$Combine$succeed(
									A2(
										stil4m$elm_syntax$Elm$Syntax$Node$Node,
										tir,
										A2(stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$Typed, original, _List_Nil)));
							}
						});
				},
				stil4m$elm_syntax$Elm$Parser$Node$parser(stil4m$elm_syntax$Elm$Parser$Base$typeIndicator));
		});
};
function stil4m$elm_syntax$Elm$Parser$TypeAnnotation$cyclic$parensTypeAnnotation() {
	return stil4m$elm_syntax$Combine$lazy(
		function (_n14) {
			var commaSep = stil4m$elm_syntax$Combine$many(
				A2(
					stil4m$elm_syntax$Combine$ignore,
					stil4m$elm_syntax$Combine$maybe(stil4m$elm_syntax$Elm$Parser$Layout$layout),
					A2(
						stil4m$elm_syntax$Combine$continueWith,
						stil4m$elm_syntax$Elm$Parser$TypeAnnotation$cyclic$typeAnnotation(),
						A2(
							stil4m$elm_syntax$Combine$ignore,
							stil4m$elm_syntax$Combine$maybe(stil4m$elm_syntax$Elm$Parser$Layout$layout),
							stil4m$elm_syntax$Combine$string(',')))));
			var nested = A2(
				stil4m$elm_syntax$Combine$andMap,
				commaSep,
				A2(
					stil4m$elm_syntax$Combine$ignore,
					stil4m$elm_syntax$Combine$maybe(stil4m$elm_syntax$Elm$Parser$Layout$layout),
					A2(
						stil4m$elm_syntax$Combine$andMap,
						stil4m$elm_syntax$Elm$Parser$TypeAnnotation$cyclic$typeAnnotation(),
						A2(
							stil4m$elm_syntax$Combine$ignore,
							stil4m$elm_syntax$Combine$maybe(stil4m$elm_syntax$Elm$Parser$Layout$layout),
							stil4m$elm_syntax$Combine$succeed(stil4m$elm_syntax$Elm$Parser$TypeAnnotation$asTypeAnnotation)))));
			return stil4m$elm_syntax$Elm$Parser$Node$parser(
				A2(
					stil4m$elm_syntax$Combine$continueWith,
					stil4m$elm_syntax$Combine$choice(
						_List_fromArray(
							[
								A2(
								stil4m$elm_syntax$Combine$map,
								elm$core$Basics$always(stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$Unit),
								stil4m$elm_syntax$Combine$string(')')),
								A2(
								stil4m$elm_syntax$Combine$ignore,
								stil4m$elm_syntax$Combine$string(')'),
								nested)
							])),
					stil4m$elm_syntax$Combine$string('(')));
		});
}
function stil4m$elm_syntax$Elm$Parser$TypeAnnotation$cyclic$recordFieldDefinition() {
	return stil4m$elm_syntax$Combine$lazy(
		function (_n13) {
			return A2(
				stil4m$elm_syntax$Combine$andMap,
				A2(
					stil4m$elm_syntax$Combine$continueWith,
					stil4m$elm_syntax$Elm$Parser$TypeAnnotation$cyclic$typeAnnotation(),
					A2(
						stil4m$elm_syntax$Combine$continueWith,
						stil4m$elm_syntax$Combine$maybe(stil4m$elm_syntax$Elm$Parser$Layout$layout),
						A2(
							stil4m$elm_syntax$Combine$continueWith,
							stil4m$elm_syntax$Combine$string(':'),
							stil4m$elm_syntax$Combine$maybe(stil4m$elm_syntax$Elm$Parser$Layout$layout)))),
				A2(
					stil4m$elm_syntax$Combine$andMap,
					A2(
						stil4m$elm_syntax$Combine$continueWith,
						stil4m$elm_syntax$Elm$Parser$Node$parser(stil4m$elm_syntax$Elm$Parser$Tokens$functionName),
						stil4m$elm_syntax$Combine$maybe(stil4m$elm_syntax$Elm$Parser$Layout$layout)),
					stil4m$elm_syntax$Combine$succeed(elm$core$Tuple$pair)));
		});
}
function stil4m$elm_syntax$Elm$Parser$TypeAnnotation$cyclic$recordFieldsTypeAnnotation() {
	return stil4m$elm_syntax$Combine$lazy(
		function (_n12) {
			return A2(
				stil4m$elm_syntax$Combine$sepBy,
				stil4m$elm_syntax$Combine$string(','),
				stil4m$elm_syntax$Elm$Parser$Layout$maybeAroundBothSides(
					stil4m$elm_syntax$Elm$Parser$Node$parser(
						stil4m$elm_syntax$Elm$Parser$TypeAnnotation$cyclic$recordFieldDefinition())));
		});
}
function stil4m$elm_syntax$Elm$Parser$TypeAnnotation$cyclic$recordTypeAnnotation() {
	return stil4m$elm_syntax$Combine$lazy(
		function (_n11) {
			var nextField = A2(
				stil4m$elm_syntax$Combine$ignore,
				stil4m$elm_syntax$Elm$Parser$Layout$optimisticLayout,
				A2(
					stil4m$elm_syntax$Combine$andMap,
					stil4m$elm_syntax$Elm$Parser$TypeAnnotation$cyclic$typeAnnotation(),
					A2(
						stil4m$elm_syntax$Combine$ignore,
						stil4m$elm_syntax$Combine$maybe(stil4m$elm_syntax$Elm$Parser$Layout$layout),
						A2(
							stil4m$elm_syntax$Combine$ignore,
							stil4m$elm_syntax$Combine$string(':'),
							A2(
								stil4m$elm_syntax$Combine$ignore,
								stil4m$elm_syntax$Combine$maybe(stil4m$elm_syntax$Elm$Parser$Layout$layout),
								A2(
									stil4m$elm_syntax$Combine$andMap,
									stil4m$elm_syntax$Elm$Parser$Node$parser(stil4m$elm_syntax$Elm$Parser$Tokens$functionName),
									A2(
										stil4m$elm_syntax$Combine$ignore,
										stil4m$elm_syntax$Combine$maybe(stil4m$elm_syntax$Elm$Parser$Layout$layout),
										A2(
											stil4m$elm_syntax$Combine$ignore,
											stil4m$elm_syntax$Combine$string(','),
											stil4m$elm_syntax$Combine$succeed(
												F2(
													function (a, b) {
														return _Utils_Tuple2(a, b);
													}))))))))));
			var additionalRecordFields = function (items) {
				return stil4m$elm_syntax$Combine$choice(
					_List_fromArray(
						[
							A2(
							stil4m$elm_syntax$Combine$andThen,
							function (next) {
								return additionalRecordFields(
									A2(elm$core$List$cons, next, items));
							},
							stil4m$elm_syntax$Elm$Parser$Node$parser(nextField)),
							stil4m$elm_syntax$Combine$succeed(
							elm$core$List$reverse(items))
						]));
			};
			return stil4m$elm_syntax$Elm$Parser$Node$parser(
				A2(
					stil4m$elm_syntax$Combine$continueWith,
					stil4m$elm_syntax$Combine$choice(
						_List_fromArray(
							[
								A2(
								stil4m$elm_syntax$Combine$continueWith,
								stil4m$elm_syntax$Combine$succeed(
									stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$Record(_List_Nil)),
								stil4m$elm_syntax$Combine$string('}')),
								A2(
								stil4m$elm_syntax$Combine$andThen,
								function (fname) {
									return stil4m$elm_syntax$Combine$choice(
										_List_fromArray(
											[
												A2(
												stil4m$elm_syntax$Combine$ignore,
												stil4m$elm_syntax$Combine$string('}'),
												A2(
													stil4m$elm_syntax$Combine$andMap,
													stil4m$elm_syntax$Elm$Parser$Node$parser(
														stil4m$elm_syntax$Elm$Parser$TypeAnnotation$cyclic$recordFieldsTypeAnnotation()),
													A2(
														stil4m$elm_syntax$Combine$ignore,
														stil4m$elm_syntax$Combine$string('|'),
														stil4m$elm_syntax$Combine$succeed(
															stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$GenericRecord(fname))))),
												A2(
												stil4m$elm_syntax$Combine$ignore,
												stil4m$elm_syntax$Combine$string('}'),
												A2(
													stil4m$elm_syntax$Combine$andThen,
													function (ta) {
														return A2(
															stil4m$elm_syntax$Combine$map,
															stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$Record,
															additionalRecordFields(
																_List_fromArray(
																	[
																		A3(stil4m$elm_syntax$Elm$Syntax$Node$combine, elm$core$Tuple$pair, fname, ta)
																	])));
													},
													A2(
														stil4m$elm_syntax$Combine$ignore,
														stil4m$elm_syntax$Combine$maybe(stil4m$elm_syntax$Elm$Parser$Layout$layout),
														A2(
															stil4m$elm_syntax$Combine$continueWith,
															stil4m$elm_syntax$Elm$Parser$TypeAnnotation$cyclic$typeAnnotation(),
															A2(
																stil4m$elm_syntax$Combine$ignore,
																stil4m$elm_syntax$Combine$maybe(stil4m$elm_syntax$Elm$Parser$Layout$layout),
																stil4m$elm_syntax$Combine$string(':'))))))
											]));
								},
								A2(
									stil4m$elm_syntax$Combine$ignore,
									stil4m$elm_syntax$Combine$maybe(stil4m$elm_syntax$Elm$Parser$Layout$layout),
									stil4m$elm_syntax$Elm$Parser$Node$parser(stil4m$elm_syntax$Elm$Parser$Tokens$functionName)))
							])),
					A2(
						stil4m$elm_syntax$Combine$ignore,
						stil4m$elm_syntax$Combine$maybe(stil4m$elm_syntax$Elm$Parser$Layout$layout),
						stil4m$elm_syntax$Combine$string('{'))));
		});
}
function stil4m$elm_syntax$Elm$Parser$TypeAnnotation$cyclic$typeAnnotation() {
	return stil4m$elm_syntax$Combine$lazy(
		function (_n8) {
			return A2(
				stil4m$elm_syntax$Combine$andThen,
				function (typeRef) {
					return A2(
						stil4m$elm_syntax$Elm$Parser$Layout$optimisticLayoutWith,
						function (_n9) {
							return stil4m$elm_syntax$Combine$succeed(typeRef);
						},
						function (_n10) {
							return A2(
								stil4m$elm_syntax$Combine$or,
								A2(
									stil4m$elm_syntax$Combine$map,
									function (ta) {
										return A3(stil4m$elm_syntax$Elm$Syntax$Node$combine, stil4m$elm_syntax$Elm$Syntax$TypeAnnotation$FunctionTypeAnnotation, typeRef, ta);
									},
									A2(
										stil4m$elm_syntax$Combine$continueWith,
										stil4m$elm_syntax$Elm$Parser$TypeAnnotation$cyclic$typeAnnotation(),
										A2(
											stil4m$elm_syntax$Combine$ignore,
											stil4m$elm_syntax$Combine$maybe(stil4m$elm_syntax$Elm$Parser$Layout$layout),
											stil4m$elm_syntax$Combine$string('->')))),
								stil4m$elm_syntax$Combine$succeed(typeRef));
						});
				},
				stil4m$elm_syntax$Elm$Parser$TypeAnnotation$typeAnnotationNoFn(stil4m$elm_syntax$Elm$Parser$TypeAnnotation$Eager));
		});
}
try {
	var stil4m$elm_syntax$Elm$Parser$TypeAnnotation$parensTypeAnnotation = stil4m$elm_syntax$Elm$Parser$TypeAnnotation$cyclic$parensTypeAnnotation();
	stil4m$elm_syntax$Elm$Parser$TypeAnnotation$cyclic$parensTypeAnnotation = function () {
		return stil4m$elm_syntax$Elm$Parser$TypeAnnotation$parensTypeAnnotation;
	};
	var stil4m$elm_syntax$Elm$Parser$TypeAnnotation$recordFieldDefinition = stil4m$elm_syntax$Elm$Parser$TypeAnnotation$cyclic$recordFieldDefinition();
	stil4m$elm_syntax$Elm$Parser$TypeAnnotation$cyclic$recordFieldDefinition = function () {
		return stil4m$elm_syntax$Elm$Parser$TypeAnnotation$recordFieldDefinition;
	};
	var stil4m$elm_syntax$Elm$Parser$TypeAnnotation$recordFieldsTypeAnnotation = stil4m$elm_syntax$Elm$Parser$TypeAnnotation$cyclic$recordFieldsTypeAnnotation();
	stil4m$elm_syntax$Elm$Parser$TypeAnnotation$cyclic$recordFieldsTypeAnnotation = function () {
		return stil4m$elm_syntax$Elm$Parser$TypeAnnotation$recordFieldsTypeAnnotation;
	};
	var stil4m$elm_syntax$Elm$Parser$TypeAnnotation$recordTypeAnnotation = stil4m$elm_syntax$Elm$Parser$TypeAnnotation$cyclic$recordTypeAnnotation();
	stil4m$elm_syntax$Elm$Parser$TypeAnnotation$cyclic$recordTypeAnnotation = function () {
		return stil4m$elm_syntax$Elm$Parser$TypeAnnotation$recordTypeAnnotation;
	};
	var stil4m$elm_syntax$Elm$Parser$TypeAnnotation$typeAnnotation = stil4m$elm_syntax$Elm$Parser$TypeAnnotation$cyclic$typeAnnotation();
	stil4m$elm_syntax$Elm$Parser$TypeAnnotation$cyclic$typeAnnotation = function () {
		return stil4m$elm_syntax$Elm$Parser$TypeAnnotation$typeAnnotation;
	};
} catch ($) {
throw 'Some top-level definitions from `Elm.Parser.TypeAnnotation` are causing infinite recursion:\n\n  ┌─────┐\n  │    parensTypeAnnotation\n  │     ↓\n  │    recordFieldDefinition\n  │     ↓\n  │    recordFieldsTypeAnnotation\n  │     ↓\n  │    recordTypeAnnotation\n  │     ↓\n  │    typeAnnotation\n  │     ↓\n  │    typeAnnotationNoFn\n  │     ↓\n  │    typedTypeAnnotation\n  └─────┘\n\nThese errors are very tricky, so read https://elm-lang.org/0.19.0/halting-problem to learn how to fix it!';}
var stil4m$elm_syntax$Elm$Syntax$Signature$Signature = F2(
	function (name, typeAnnotation) {
		return {name: name, typeAnnotation: typeAnnotation};
	});
var stil4m$elm_syntax$Elm$Parser$Declarations$functionSignatureFromVarPointer = function (varPointer) {
	return A2(
		stil4m$elm_syntax$Combine$andMap,
		stil4m$elm_syntax$Elm$Parser$TypeAnnotation$typeAnnotation,
		A2(
			stil4m$elm_syntax$Combine$ignore,
			stil4m$elm_syntax$Combine$maybe(stil4m$elm_syntax$Elm$Parser$Layout$layout),
			A2(
				stil4m$elm_syntax$Combine$ignore,
				stil4m$elm_syntax$Combine$string(':'),
				stil4m$elm_syntax$Combine$succeed(
					function (ta) {
						return A3(stil4m$elm_syntax$Elm$Syntax$Node$combine, stil4m$elm_syntax$Elm$Syntax$Signature$Signature, varPointer, ta);
					}))));
};
var elm$core$String$dropLeft = F2(
	function (n, string) {
		return (n < 1) ? string : A3(
			elm$core$String$slice,
			n,
			elm$core$String$length(string),
			string);
	});
var elm$parser$Parser$NotNestable = {$: 'NotNestable'};
var stil4m$elm_syntax$Elm$Syntax$Expression$GLSLExpression = function (a) {
	return {$: 'GLSLExpression', a: a};
};
var stil4m$elm_syntax$Elm$Parser$Declarations$glslExpression = function () {
	var start = '[glsl|';
	var end = '|]';
	return stil4m$elm_syntax$Elm$Parser$Node$parser(
		A2(
			stil4m$elm_syntax$Combine$ignore,
			stil4m$elm_syntax$Combine$string(end),
			A2(
				stil4m$elm_syntax$Combine$map,
				A2(
					elm$core$Basics$composeR,
					elm$core$String$dropLeft(
						elm$core$String$length(start)),
					stil4m$elm_syntax$Elm$Syntax$Expression$GLSLExpression),
				stil4m$elm_syntax$Combine$fromCore(
					elm$parser$Parser$getChompedString(
						A3(elm$parser$Parser$multiComment, start, end, elm$parser$Parser$NotNestable))))));
}();
var stil4m$elm_syntax$Elm$Syntax$Expression$RecordAccess = F2(
	function (a, b) {
		return {$: 'RecordAccess', a: a, b: b};
	});
var stil4m$elm_syntax$Elm$Parser$Declarations$liftRecordAccess = function (e) {
	return stil4m$elm_syntax$Combine$lazy(
		function (_n0) {
			return A2(
				stil4m$elm_syntax$Combine$or,
				A2(
					stil4m$elm_syntax$Combine$andThen,
					stil4m$elm_syntax$Elm$Parser$Declarations$liftRecordAccess,
					stil4m$elm_syntax$Elm$Parser$Node$parser(
						A2(
							stil4m$elm_syntax$Combine$map,
							stil4m$elm_syntax$Elm$Syntax$Expression$RecordAccess(e),
							A2(
								stil4m$elm_syntax$Combine$continueWith,
								stil4m$elm_syntax$Elm$Parser$Node$parser(stil4m$elm_syntax$Elm$Parser$Tokens$functionName),
								stil4m$elm_syntax$Combine$string('.'))))),
				stil4m$elm_syntax$Combine$succeed(e));
		});
};
var stil4m$elm_syntax$Elm$Parser$Tokens$multiLineStringLiteral = function () {
	var helper = function (s) {
		return s.escaped ? A2(
			elm$parser$Parser$map,
			function (v) {
				return elm$parser$Parser$Loop(
					_Utils_update(
						s,
						{
							escaped: false,
							parts: A2(
								elm$core$List$cons,
								elm$core$String$fromList(
									_List_fromArray(
										[v])),
								s.parts)
						}));
			},
			stil4m$elm_syntax$Elm$Parser$Tokens$escapedCharValue) : elm$parser$Parser$oneOf(
			_List_fromArray(
				[
					A2(
					elm$parser$Parser$map,
					function (_n0) {
						return elm$parser$Parser$Done(
							elm$core$String$concat(s.parts));
					},
					elm$parser$Parser$symbol('\"\"\"')),
					A2(
					elm$parser$Parser$map,
					function (v) {
						return elm$parser$Parser$Loop(
							_Utils_update(
								s,
								{
									counter: s.counter + 1,
									parts: A2(elm$core$List$cons, v, s.parts)
								}));
					},
					elm$parser$Parser$getChompedString(
						elm$parser$Parser$symbol('\"'))),
					A2(
					elm$parser$Parser$map,
					function (_n1) {
						return elm$parser$Parser$Loop(
							_Utils_update(
								s,
								{counter: s.counter + 1, escaped: true, parts: s.parts}));
					},
					elm$parser$Parser$getChompedString(
						elm$parser$Parser$symbol('\\'))),
					A2(
					elm$parser$Parser$andThen,
					function (_n2) {
						var start = _n2.a;
						var value = _n2.b;
						var end = _n2.c;
						return _Utils_eq(start, end) ? elm$parser$Parser$problem('Expected a string character or a triple double quote') : elm$parser$Parser$succeed(
							elm$parser$Parser$Loop(
								_Utils_update(
									s,
									{
										counter: s.counter + 1,
										parts: A2(elm$core$List$cons, value, s.parts)
									})));
					},
					A2(
						elm$parser$Parser$keeper,
						A2(
							elm$parser$Parser$keeper,
							A2(
								elm$parser$Parser$keeper,
								elm$parser$Parser$succeed(
									F3(
										function (start, value, end) {
											return _Utils_Tuple3(start, value, end);
										})),
								elm$parser$Parser$getOffset),
							elm$parser$Parser$getChompedString(
								elm$parser$Parser$chompWhile(
									function (c) {
										return (!_Utils_eq(
											c,
											_Utils_chr('\"'))) && (!_Utils_eq(
											c,
											_Utils_chr('\\')));
									}))),
						elm$parser$Parser$getOffset))
				]));
	};
	return stil4m$elm_syntax$Combine$fromCore(
		A2(
			elm$parser$Parser$keeper,
			A2(
				elm$parser$Parser$ignorer,
				elm$parser$Parser$succeed(elm$core$Basics$identity),
				elm$parser$Parser$symbol('\"\"\"')),
			A2(
				elm$parser$Parser$loop,
				{counter: 0, escaped: false, parts: _List_Nil},
				helper)));
}();
var stil4m$elm_syntax$Elm$Syntax$Expression$Literal = function (a) {
	return {$: 'Literal', a: a};
};
var stil4m$elm_syntax$Elm$Parser$Declarations$literalExpression = stil4m$elm_syntax$Combine$lazy(
	function (_n0) {
		return stil4m$elm_syntax$Elm$Parser$Node$parser(
			A2(
				stil4m$elm_syntax$Combine$map,
				stil4m$elm_syntax$Elm$Syntax$Expression$Literal,
				A2(stil4m$elm_syntax$Combine$or, stil4m$elm_syntax$Elm$Parser$Tokens$multiLineStringLiteral, stil4m$elm_syntax$Elm$Parser$Tokens$stringLiteral)));
	});
var stil4m$elm_syntax$Elm$Parser$Numbers$forgivingNumber = F3(
	function (floatf, intf, hexf) {
		return stil4m$elm_syntax$Combine$fromCore(
			elm$parser$Parser$backtrackable(
				A3(stil4m$elm_syntax$Elm$Parser$Numbers$raw, floatf, intf, hexf)));
	});
var stil4m$elm_syntax$Elm$Syntax$Expression$Floatable = function (a) {
	return {$: 'Floatable', a: a};
};
var stil4m$elm_syntax$Elm$Syntax$Expression$Hex = function (a) {
	return {$: 'Hex', a: a};
};
var stil4m$elm_syntax$Elm$Syntax$Expression$Integer = function (a) {
	return {$: 'Integer', a: a};
};
var stil4m$elm_syntax$Elm$Parser$Declarations$numberExpression = stil4m$elm_syntax$Elm$Parser$Node$parser(
	A3(stil4m$elm_syntax$Elm$Parser$Numbers$forgivingNumber, stil4m$elm_syntax$Elm$Syntax$Expression$Floatable, stil4m$elm_syntax$Elm$Syntax$Expression$Integer, stil4m$elm_syntax$Elm$Syntax$Expression$Hex));
var stil4m$elm_syntax$Elm$Syntax$Expression$RecordAccessFunction = function (a) {
	return {$: 'RecordAccessFunction', a: a};
};
var stil4m$elm_syntax$Elm$Parser$Declarations$recordAccessFunctionExpression = stil4m$elm_syntax$Elm$Parser$Node$parser(
	A2(
		stil4m$elm_syntax$Combine$map,
		A2(
			elm$core$Basics$composeR,
			elm$core$Basics$append('.'),
			stil4m$elm_syntax$Elm$Syntax$Expression$RecordAccessFunction),
		A2(
			stil4m$elm_syntax$Combine$continueWith,
			stil4m$elm_syntax$Elm$Parser$Tokens$functionName,
			stil4m$elm_syntax$Combine$string('.'))));
var stil4m$elm_syntax$Elm$Parser$Declarations$reference = function () {
	var justFunction = A2(
		stil4m$elm_syntax$Combine$map,
		function (v) {
			return _Utils_Tuple2(_List_Nil, v);
		},
		stil4m$elm_syntax$Elm$Parser$Tokens$functionName);
	var helper = function (_n0) {
		var n = _n0.a;
		var xs = _n0.b;
		return stil4m$elm_syntax$Combine$choice(
			_List_fromArray(
				[
					A2(
					stil4m$elm_syntax$Combine$continueWith,
					stil4m$elm_syntax$Combine$choice(
						_List_fromArray(
							[
								A2(
								stil4m$elm_syntax$Combine$andThen,
								function (t) {
									return helper(
										_Utils_Tuple2(
											t,
											A2(elm$core$List$cons, n, xs)));
								},
								stil4m$elm_syntax$Elm$Parser$Tokens$typeName),
								A2(
								stil4m$elm_syntax$Combine$map,
								function (t) {
									return _Utils_Tuple2(
										t,
										A2(elm$core$List$cons, n, xs));
								},
								stil4m$elm_syntax$Elm$Parser$Tokens$functionName)
							])),
					stil4m$elm_syntax$Combine$string('.')),
					stil4m$elm_syntax$Combine$succeed(
					_Utils_Tuple2(n, xs))
				]));
	};
	var recurring = A2(
		stil4m$elm_syntax$Combine$map,
		function (_n1) {
			var t = _n1.a;
			var xs = _n1.b;
			return _Utils_Tuple2(
				elm$core$List$reverse(xs),
				t);
		},
		A2(
			stil4m$elm_syntax$Combine$andThen,
			function (t) {
				return helper(
					_Utils_Tuple2(t, _List_Nil));
			},
			stil4m$elm_syntax$Elm$Parser$Tokens$typeName));
	return stil4m$elm_syntax$Combine$choice(
		_List_fromArray(
			[recurring, justFunction]));
}();
var stil4m$elm_syntax$Elm$Syntax$Expression$FunctionOrValue = F2(
	function (a, b) {
		return {$: 'FunctionOrValue', a: a, b: b};
	});
var stil4m$elm_syntax$Elm$Parser$Declarations$referenceExpression = stil4m$elm_syntax$Elm$Parser$Node$parser(
	A2(
		stil4m$elm_syntax$Combine$map,
		function (_n0) {
			var xs = _n0.a;
			var x = _n0.b;
			return A2(stil4m$elm_syntax$Elm$Syntax$Expression$FunctionOrValue, xs, x);
		},
		stil4m$elm_syntax$Elm$Parser$Declarations$reference));
var stil4m$elm_syntax$Elm$Parser$State$popIndent = function (_n0) {
	var s = _n0.a;
	return stil4m$elm_syntax$Elm$Parser$State$State(
		_Utils_update(
			s,
			{
				indents: A2(elm$core$List$drop, 1, s.indents)
			}));
};
var stil4m$elm_syntax$Elm$Parser$State$pushIndent = F2(
	function (x, _n0) {
		var s = _n0.a;
		return stil4m$elm_syntax$Elm$Parser$State$State(
			_Utils_update(
				s,
				{
					indents: A2(elm$core$List$cons, x, s.indents)
				}));
	});
var stil4m$elm_syntax$Elm$Parser$State$pushColumn = F2(
	function (col, state) {
		return A2(stil4m$elm_syntax$Elm$Parser$State$pushIndent, col - 1, state);
	});
var stil4m$elm_syntax$Elm$Parser$Declarations$withIndentedState = function (p) {
	return stil4m$elm_syntax$Combine$withLocation(
		function (location) {
			return A2(
				stil4m$elm_syntax$Combine$ignore,
				stil4m$elm_syntax$Combine$modifyState(stil4m$elm_syntax$Elm$Parser$State$popIndent),
				A2(
					stil4m$elm_syntax$Combine$continueWith,
					p,
					stil4m$elm_syntax$Combine$modifyState(
						stil4m$elm_syntax$Elm$Parser$State$pushColumn(location.column))));
		});
};
var stil4m$elm_syntax$Elm$Parser$Layout$layoutStrict = A2(
	stil4m$elm_syntax$Combine$continueWith,
	stil4m$elm_syntax$Elm$Parser$Layout$verifyIndent(
		F2(
			function (stateIndent, current) {
				return _Utils_eq(stateIndent, current);
			})),
	stil4m$elm_syntax$Combine$many1(
		stil4m$elm_syntax$Combine$choice(
			_List_fromArray(
				[
					stil4m$elm_syntax$Elm$Parser$Layout$anyComment,
					A2(
					stil4m$elm_syntax$Combine$continueWith,
					stil4m$elm_syntax$Combine$succeed(_Utils_Tuple0),
					stil4m$elm_syntax$Combine$many1(stil4m$elm_syntax$Elm$Parser$Whitespace$realNewLine)),
					stil4m$elm_syntax$Elm$Parser$Whitespace$many1Spaces
				]))));
var stil4m$elm_syntax$Elm$Parser$Tokens$caseToken = stil4m$elm_syntax$Combine$string('case');
var stil4m$elm_syntax$Elm$Parser$Tokens$elseToken = stil4m$elm_syntax$Combine$string('else');
var stil4m$elm_syntax$Elm$Parser$Tokens$ifToken = stil4m$elm_syntax$Combine$string('if');
var stil4m$elm_syntax$Elm$Parser$Tokens$allowedOperatorTokens = _List_fromArray(
	[
		_Utils_chr('+'),
		_Utils_chr('-'),
		_Utils_chr(':'),
		_Utils_chr('/'),
		_Utils_chr('*'),
		_Utils_chr('>'),
		_Utils_chr('<'),
		_Utils_chr('='),
		_Utils_chr('/'),
		_Utils_chr('&'),
		_Utils_chr('^'),
		_Utils_chr('%'),
		_Utils_chr('|'),
		_Utils_chr('!'),
		_Utils_chr('.'),
		_Utils_chr('#'),
		_Utils_chr('$'),
		_Utils_chr('≡'),
		_Utils_chr('~'),
		_Utils_chr('?'),
		_Utils_chr('@')
	]);
var stil4m$elm_syntax$Combine$Char$oneOf = function (cs) {
	return A2(
		stil4m$elm_syntax$Combine$andThen,
		A2(
			elm$core$Basics$composeR,
			elm$core$Maybe$map(stil4m$elm_syntax$Combine$succeed),
			elm$core$Maybe$withDefault(
				stil4m$elm_syntax$Combine$fail(
					'expected one of \'' + (elm$core$String$fromList(cs) + '\'')))),
		stil4m$elm_syntax$Combine$Char$satisfy(
			function (a) {
				return A2(elm$core$List$member, a, cs);
			}));
};
var stil4m$elm_syntax$Elm$Parser$Tokens$excludedOperators = _List_fromArray(
	[':', '->', '--', '=']);
var stil4m$elm_syntax$Elm$Parser$Tokens$operatorTokenFromList = function (allowedChars) {
	return A2(
		stil4m$elm_syntax$Combine$andThen,
		function (m) {
			return A2(elm$core$List$member, m, stil4m$elm_syntax$Elm$Parser$Tokens$excludedOperators) ? stil4m$elm_syntax$Combine$fail('operator is not allowed') : stil4m$elm_syntax$Combine$succeed(m);
		},
		A2(
			stil4m$elm_syntax$Combine$map,
			elm$core$String$fromList,
			stil4m$elm_syntax$Combine$many1(
				stil4m$elm_syntax$Combine$Char$oneOf(allowedChars))));
};
var stil4m$elm_syntax$Elm$Parser$Tokens$infixOperatorToken = stil4m$elm_syntax$Elm$Parser$Tokens$operatorTokenFromList(stil4m$elm_syntax$Elm$Parser$Tokens$allowedOperatorTokens);
var stil4m$elm_syntax$Elm$Parser$Tokens$ofToken = stil4m$elm_syntax$Combine$string('of');
var stil4m$elm_syntax$Elm$Parser$Tokens$allowedPrefixOperatorTokens = A2(
	elm$core$List$cons,
	_Utils_chr(','),
	stil4m$elm_syntax$Elm$Parser$Tokens$allowedOperatorTokens);
var stil4m$elm_syntax$Elm$Parser$Tokens$prefixOperatorToken = stil4m$elm_syntax$Elm$Parser$Tokens$operatorTokenFromList(stil4m$elm_syntax$Elm$Parser$Tokens$allowedPrefixOperatorTokens);
var stil4m$elm_syntax$Elm$Parser$Tokens$thenToken = stil4m$elm_syntax$Combine$string('then');
var stil4m$elm_syntax$Elm$Parser$Whitespace$manySpaces = stil4m$elm_syntax$Combine$fromCore(
	elm$parser$Parser$chompWhile(
		function (c) {
			return _Utils_eq(
				c,
				_Utils_chr(' '));
		}));
var stil4m$elm_syntax$Elm$Syntax$Expression$Application = function (a) {
	return {$: 'Application', a: a};
};
var stil4m$elm_syntax$Elm$Syntax$Expression$CaseBlock = F2(
	function (expression, cases) {
		return {cases: cases, expression: expression};
	});
var stil4m$elm_syntax$Elm$Syntax$Expression$CaseExpression = function (a) {
	return {$: 'CaseExpression', a: a};
};
var stil4m$elm_syntax$Elm$Syntax$Expression$Function = F3(
	function (documentation, signature, declaration) {
		return {declaration: declaration, documentation: documentation, signature: signature};
	});
var stil4m$elm_syntax$Elm$Syntax$Expression$FunctionImplementation = F3(
	function (name, _arguments, expression) {
		return {_arguments: _arguments, expression: expression, name: name};
	});
var stil4m$elm_syntax$Elm$Syntax$Expression$IfBlock = F3(
	function (a, b, c) {
		return {$: 'IfBlock', a: a, b: b, c: c};
	});
var stil4m$elm_syntax$Elm$Syntax$Expression$Lambda = F2(
	function (args, expression) {
		return {args: args, expression: expression};
	});
var stil4m$elm_syntax$Elm$Syntax$Expression$LambdaExpression = function (a) {
	return {$: 'LambdaExpression', a: a};
};
var stil4m$elm_syntax$Elm$Syntax$Expression$LetBlock = F2(
	function (declarations, expression) {
		return {declarations: declarations, expression: expression};
	});
var stil4m$elm_syntax$Elm$Syntax$Expression$LetDestructuring = F2(
	function (a, b) {
		return {$: 'LetDestructuring', a: a, b: b};
	});
var stil4m$elm_syntax$Elm$Syntax$Expression$LetExpression = function (a) {
	return {$: 'LetExpression', a: a};
};
var stil4m$elm_syntax$Elm$Syntax$Expression$LetFunction = function (a) {
	return {$: 'LetFunction', a: a};
};
var stil4m$elm_syntax$Elm$Syntax$Expression$ListExpr = function (a) {
	return {$: 'ListExpr', a: a};
};
var stil4m$elm_syntax$Elm$Syntax$Expression$Negation = function (a) {
	return {$: 'Negation', a: a};
};
var stil4m$elm_syntax$Elm$Syntax$Expression$Operator = function (a) {
	return {$: 'Operator', a: a};
};
var stil4m$elm_syntax$Elm$Syntax$Expression$ParenthesizedExpression = function (a) {
	return {$: 'ParenthesizedExpression', a: a};
};
var stil4m$elm_syntax$Elm$Syntax$Expression$PrefixOperator = function (a) {
	return {$: 'PrefixOperator', a: a};
};
var stil4m$elm_syntax$Elm$Syntax$Expression$RecordExpr = function (a) {
	return {$: 'RecordExpr', a: a};
};
var stil4m$elm_syntax$Elm$Syntax$Expression$RecordUpdateExpression = F2(
	function (a, b) {
		return {$: 'RecordUpdateExpression', a: a, b: b};
	});
var stil4m$elm_syntax$Elm$Syntax$Expression$TupledExpression = function (a) {
	return {$: 'TupledExpression', a: a};
};
var stil4m$elm_syntax$Elm$Syntax$Expression$UnitExpr = {$: 'UnitExpr'};
var stil4m$elm_syntax$Elm$Syntax$Node$range = function (_n0) {
	var r = _n0.a;
	return r;
};
var stil4m$elm_syntax$Elm$Parser$Declarations$functionWithNameNode = function (pointer) {
	var functionImplementationFromVarPointer = function (varPointer) {
		return A2(
			stil4m$elm_syntax$Combine$andMap,
			stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$expression(),
			A2(
				stil4m$elm_syntax$Combine$ignore,
				stil4m$elm_syntax$Combine$maybe(stil4m$elm_syntax$Elm$Parser$Layout$layout),
				A2(
					stil4m$elm_syntax$Combine$ignore,
					stil4m$elm_syntax$Combine$string('='),
					A2(
						stil4m$elm_syntax$Combine$andMap,
						stil4m$elm_syntax$Combine$many(
							A2(
								stil4m$elm_syntax$Combine$ignore,
								stil4m$elm_syntax$Combine$maybe(stil4m$elm_syntax$Elm$Parser$Layout$layout),
								stil4m$elm_syntax$Elm$Parser$Declarations$functionArgument)),
						stil4m$elm_syntax$Combine$succeed(
							F2(
								function (args, expr) {
									return A2(
										stil4m$elm_syntax$Elm$Syntax$Node$Node,
										stil4m$elm_syntax$Elm$Syntax$Range$combine(
											_List_fromArray(
												[
													stil4m$elm_syntax$Elm$Syntax$Node$range(varPointer),
													stil4m$elm_syntax$Elm$Syntax$Node$range(expr)
												])),
										A3(stil4m$elm_syntax$Elm$Syntax$Expression$FunctionImplementation, varPointer, args, expr));
								}))))));
	};
	var functionWithoutSignature = function (varPointer) {
		return A2(
			stil4m$elm_syntax$Combine$map,
			A2(stil4m$elm_syntax$Elm$Syntax$Expression$Function, elm$core$Maybe$Nothing, elm$core$Maybe$Nothing),
			functionImplementationFromVarPointer(varPointer));
	};
	var fromParts = F2(
		function (sig, decl) {
			return {
				declaration: decl,
				documentation: elm$core$Maybe$Nothing,
				signature: elm$core$Maybe$Just(sig)
			};
		});
	var functionWithSignature = function (varPointer) {
		return A2(
			stil4m$elm_syntax$Combine$andThen,
			function (sig) {
				return A2(
					stil4m$elm_syntax$Combine$map,
					fromParts(sig),
					A2(
						stil4m$elm_syntax$Combine$andThen,
						functionImplementationFromVarPointer,
						A2(
							stil4m$elm_syntax$Combine$ignore,
							stil4m$elm_syntax$Combine$maybe(stil4m$elm_syntax$Elm$Parser$Layout$layout),
							A2(
								stil4m$elm_syntax$Combine$continueWith,
								stil4m$elm_syntax$Elm$Parser$Node$parser(stil4m$elm_syntax$Elm$Parser$Tokens$functionName),
								stil4m$elm_syntax$Combine$maybe(stil4m$elm_syntax$Elm$Parser$Layout$layoutStrict)))));
			},
			stil4m$elm_syntax$Elm$Parser$Declarations$functionSignatureFromVarPointer(varPointer));
	};
	return stil4m$elm_syntax$Combine$choice(
		_List_fromArray(
			[
				functionWithSignature(pointer),
				functionWithoutSignature(pointer)
			]));
};
var stil4m$elm_syntax$Elm$Parser$Declarations$letDestructuringDeclarationWithPattern = function (p) {
	return stil4m$elm_syntax$Combine$lazy(
		function (_n7) {
			return A2(
				stil4m$elm_syntax$Combine$andMap,
				stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$expression(),
				A2(
					stil4m$elm_syntax$Combine$ignore,
					stil4m$elm_syntax$Elm$Parser$Layout$layout,
					A2(
						stil4m$elm_syntax$Combine$ignore,
						stil4m$elm_syntax$Combine$string('='),
						A2(
							stil4m$elm_syntax$Combine$ignore,
							stil4m$elm_syntax$Combine$maybe(stil4m$elm_syntax$Elm$Parser$Layout$layout),
							stil4m$elm_syntax$Combine$succeed(
								stil4m$elm_syntax$Elm$Syntax$Expression$LetDestructuring(p))))));
		});
};
function stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$caseBlock() {
	return stil4m$elm_syntax$Combine$lazy(
		function (_n23) {
			return A2(
				stil4m$elm_syntax$Combine$ignore,
				stil4m$elm_syntax$Elm$Parser$Tokens$ofToken,
				A2(
					stil4m$elm_syntax$Combine$continueWith,
					stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$expression(),
					A2(stil4m$elm_syntax$Combine$continueWith, stil4m$elm_syntax$Elm$Parser$Layout$layout, stil4m$elm_syntax$Elm$Parser$Tokens$caseToken)));
		});
}
function stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$caseExpression() {
	return stil4m$elm_syntax$Combine$lazy(
		function (_n21) {
			return A2(
				stil4m$elm_syntax$Combine$andThen,
				function (_n22) {
					var start = _n22.a;
					return A2(
						stil4m$elm_syntax$Combine$map,
						function (cb) {
							return A2(
								stil4m$elm_syntax$Elm$Syntax$Node$Node,
								stil4m$elm_syntax$Elm$Syntax$Range$combine(
									A2(
										elm$core$List$cons,
										start,
										A2(
											elm$core$List$map,
											A2(elm$core$Basics$composeR, elm$core$Tuple$second, stil4m$elm_syntax$Elm$Syntax$Node$range),
											cb.cases))),
								stil4m$elm_syntax$Elm$Syntax$Expression$CaseExpression(cb));
						},
						A2(
							stil4m$elm_syntax$Combine$andMap,
							A2(
								stil4m$elm_syntax$Combine$continueWith,
								stil4m$elm_syntax$Elm$Parser$Declarations$withIndentedState(
									stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$caseStatements()),
								stil4m$elm_syntax$Elm$Parser$Layout$layout),
							A2(
								stil4m$elm_syntax$Combine$andMap,
								stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$caseBlock(),
								stil4m$elm_syntax$Combine$succeed(stil4m$elm_syntax$Elm$Syntax$Expression$CaseBlock))));
				},
				stil4m$elm_syntax$Elm$Parser$Node$parser(
					stil4m$elm_syntax$Combine$succeed(_Utils_Tuple0)));
		});
}
function stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$caseStatement() {
	return stil4m$elm_syntax$Combine$lazy(
		function (_n20) {
			return A2(
				stil4m$elm_syntax$Combine$andMap,
				A2(
					stil4m$elm_syntax$Combine$continueWith,
					stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$expression(),
					A2(
						stil4m$elm_syntax$Combine$continueWith,
						stil4m$elm_syntax$Combine$maybe(stil4m$elm_syntax$Elm$Parser$Layout$layout),
						A2(
							stil4m$elm_syntax$Combine$continueWith,
							stil4m$elm_syntax$Combine$string('->'),
							stil4m$elm_syntax$Combine$maybe(
								A2(stil4m$elm_syntax$Combine$or, stil4m$elm_syntax$Elm$Parser$Layout$layout, stil4m$elm_syntax$Elm$Parser$Layout$layoutStrict))))),
				A2(
					stil4m$elm_syntax$Combine$andMap,
					stil4m$elm_syntax$Elm$Parser$Patterns$pattern,
					stil4m$elm_syntax$Combine$succeed(elm$core$Tuple$pair)));
		});
}
function stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$caseStatements() {
	return stil4m$elm_syntax$Combine$lazy(
		function (_n19) {
			var helper = function (last) {
				return stil4m$elm_syntax$Combine$withState(
					function (s) {
						return stil4m$elm_syntax$Combine$withLocation(
							function (l) {
								return _Utils_eq(
									stil4m$elm_syntax$Elm$Parser$State$expectedColumn(s),
									l.column) ? A2(
									stil4m$elm_syntax$Combine$andThen,
									helper,
									A2(
										stil4m$elm_syntax$Combine$map,
										function (c) {
											return A2(elm$core$List$cons, c, last);
										},
										stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$caseStatement())) : stil4m$elm_syntax$Combine$succeed(last);
							});
					});
			};
			return A2(
				stil4m$elm_syntax$Combine$map,
				elm$core$List$reverse,
				A2(
					stil4m$elm_syntax$Combine$andThen,
					helper,
					A2(
						stil4m$elm_syntax$Combine$map,
						elm$core$List$singleton,
						stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$caseStatement())));
		});
}
function stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$expression() {
	return stil4m$elm_syntax$Combine$lazy(
		function (_n15) {
			return A2(
				stil4m$elm_syntax$Combine$andThen,
				function (first) {
					var complete = function (rest) {
						return stil4m$elm_syntax$Combine$succeed(
							function () {
								if (!rest.b) {
									return first;
								} else {
									return A2(
										stil4m$elm_syntax$Elm$Syntax$Node$Node,
										stil4m$elm_syntax$Elm$Syntax$Range$combine(
											A2(
												elm$core$List$cons,
												stil4m$elm_syntax$Elm$Syntax$Node$range(first),
												A2(elm$core$List$map, stil4m$elm_syntax$Elm$Syntax$Node$range, rest))),
										stil4m$elm_syntax$Elm$Syntax$Expression$Application(
											A2(
												elm$core$List$cons,
												first,
												elm$core$List$reverse(rest))));
								}
							}());
					};
					var promoter = function (rest) {
						return A2(
							stil4m$elm_syntax$Elm$Parser$Layout$optimisticLayoutWith,
							function (_n16) {
								return complete(rest);
							},
							function (_n17) {
								return A2(
									stil4m$elm_syntax$Combine$or,
									A2(
										stil4m$elm_syntax$Combine$andThen,
										function (next) {
											return promoter(
												A2(elm$core$List$cons, next, rest));
										},
										stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$expressionNotApplication()),
									complete(rest));
							});
					};
					return promoter(_List_Nil);
				},
				stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$expressionNotApplication());
		});
}
function stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$expressionNotApplication() {
	return stil4m$elm_syntax$Combine$lazy(
		function (_n14) {
			return A2(
				stil4m$elm_syntax$Combine$andThen,
				stil4m$elm_syntax$Elm$Parser$Declarations$liftRecordAccess,
				stil4m$elm_syntax$Combine$choice(
					_List_fromArray(
						[
							stil4m$elm_syntax$Elm$Parser$Declarations$numberExpression,
							stil4m$elm_syntax$Elm$Parser$Declarations$referenceExpression,
							stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$ifBlockExpression(),
							stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$tupledExpression(),
							stil4m$elm_syntax$Elm$Parser$Declarations$recordAccessFunctionExpression,
							stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$operatorExpression(),
							stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$letExpression(),
							stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$lambdaExpression(),
							stil4m$elm_syntax$Elm$Parser$Declarations$literalExpression,
							stil4m$elm_syntax$Elm$Parser$Declarations$charLiteralExpression,
							stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$recordExpression(),
							stil4m$elm_syntax$Elm$Parser$Declarations$glslExpression,
							stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$listExpression(),
							stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$caseExpression()
						])));
		});
}
function stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$ifBlockExpression() {
	return stil4m$elm_syntax$Elm$Parser$Node$parser(
		A2(
			stil4m$elm_syntax$Combine$continueWith,
			stil4m$elm_syntax$Combine$lazy(
				function (_n13) {
					return A2(
						stil4m$elm_syntax$Combine$andMap,
						A2(
							stil4m$elm_syntax$Combine$continueWith,
							stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$expression(),
							A2(stil4m$elm_syntax$Combine$continueWith, stil4m$elm_syntax$Elm$Parser$Layout$layout, stil4m$elm_syntax$Elm$Parser$Tokens$elseToken)),
						A2(
							stil4m$elm_syntax$Combine$ignore,
							stil4m$elm_syntax$Combine$maybe(stil4m$elm_syntax$Elm$Parser$Layout$layout),
							A2(
								stil4m$elm_syntax$Combine$andMap,
								stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$expression(),
								A2(
									stil4m$elm_syntax$Combine$ignore,
									stil4m$elm_syntax$Combine$maybe(stil4m$elm_syntax$Elm$Parser$Layout$layout),
									A2(
										stil4m$elm_syntax$Combine$ignore,
										stil4m$elm_syntax$Elm$Parser$Tokens$thenToken,
										A2(
											stil4m$elm_syntax$Combine$ignore,
											stil4m$elm_syntax$Combine$maybe(stil4m$elm_syntax$Elm$Parser$Layout$layout),
											A2(
												stil4m$elm_syntax$Combine$andMap,
												stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$expression(),
												A2(
													stil4m$elm_syntax$Combine$ignore,
													stil4m$elm_syntax$Combine$maybe(stil4m$elm_syntax$Elm$Parser$Layout$layout),
													stil4m$elm_syntax$Combine$succeed(stil4m$elm_syntax$Elm$Syntax$Expression$IfBlock)))))))));
				}),
			stil4m$elm_syntax$Elm$Parser$Tokens$ifToken));
}
function stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$lambdaExpression() {
	return stil4m$elm_syntax$Combine$lazy(
		function (_n12) {
			return stil4m$elm_syntax$Elm$Parser$Node$parser(
				A2(
					stil4m$elm_syntax$Combine$andMap,
					A2(
						stil4m$elm_syntax$Combine$continueWith,
						stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$expression(),
						stil4m$elm_syntax$Elm$Parser$Layout$maybeAroundBothSides(
							stil4m$elm_syntax$Combine$string('->'))),
					A2(
						stil4m$elm_syntax$Combine$andMap,
						A2(
							stil4m$elm_syntax$Combine$sepBy1,
							stil4m$elm_syntax$Combine$maybe(stil4m$elm_syntax$Elm$Parser$Layout$layout),
							stil4m$elm_syntax$Elm$Parser$Declarations$functionArgument),
						A2(
							stil4m$elm_syntax$Combine$ignore,
							stil4m$elm_syntax$Combine$maybe(stil4m$elm_syntax$Elm$Parser$Layout$layout),
							A2(
								stil4m$elm_syntax$Combine$ignore,
								stil4m$elm_syntax$Combine$string('\\'),
								stil4m$elm_syntax$Combine$succeed(
									F2(
										function (args, expr) {
											return stil4m$elm_syntax$Elm$Syntax$Expression$LambdaExpression(
												A2(stil4m$elm_syntax$Elm$Syntax$Expression$Lambda, args, expr));
										})))))));
		});
}
function stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$letBlock() {
	return stil4m$elm_syntax$Combine$lazy(
		function (_n11) {
			return A2(
				stil4m$elm_syntax$Combine$ignore,
				A2(
					stil4m$elm_syntax$Combine$continueWith,
					stil4m$elm_syntax$Combine$string('in'),
					stil4m$elm_syntax$Combine$choice(
						_List_fromArray(
							[stil4m$elm_syntax$Elm$Parser$Layout$layout, stil4m$elm_syntax$Elm$Parser$Whitespace$manySpaces]))),
				A2(
					stil4m$elm_syntax$Combine$continueWith,
					stil4m$elm_syntax$Elm$Parser$Declarations$withIndentedState(
						stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$letBody()),
					A2(
						stil4m$elm_syntax$Combine$continueWith,
						stil4m$elm_syntax$Elm$Parser$Layout$layout,
						stil4m$elm_syntax$Combine$string('let'))));
		});
}
function stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$letBody() {
	return stil4m$elm_syntax$Combine$lazy(
		function (_n8) {
			var blockElement = A2(
				stil4m$elm_syntax$Combine$andThen,
				function (_n9) {
					var r = _n9.a;
					var p = _n9.b;
					if (p.$ === 'VarPattern') {
						var v = p.a;
						return A2(
							stil4m$elm_syntax$Combine$map,
							stil4m$elm_syntax$Elm$Syntax$Expression$LetFunction,
							stil4m$elm_syntax$Elm$Parser$Declarations$functionWithNameNode(
								A2(stil4m$elm_syntax$Elm$Syntax$Node$Node, r, v)));
					} else {
						return stil4m$elm_syntax$Elm$Parser$Declarations$letDestructuringDeclarationWithPattern(
							A2(stil4m$elm_syntax$Elm$Syntax$Node$Node, r, p));
					}
				},
				stil4m$elm_syntax$Elm$Parser$Patterns$pattern);
			return A2(
				stil4m$elm_syntax$Combine$andMap,
				stil4m$elm_syntax$Combine$many(
					A2(
						stil4m$elm_syntax$Combine$ignore,
						stil4m$elm_syntax$Combine$maybe(stil4m$elm_syntax$Elm$Parser$Layout$layout),
						stil4m$elm_syntax$Elm$Parser$Node$parser(blockElement))),
				A2(
					stil4m$elm_syntax$Combine$andMap,
					stil4m$elm_syntax$Elm$Parser$Node$parser(blockElement),
					stil4m$elm_syntax$Combine$succeed(elm$core$List$cons)));
		});
}
function stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$letExpression() {
	return stil4m$elm_syntax$Combine$lazy(
		function (_n6) {
			return stil4m$elm_syntax$Elm$Parser$Node$parser(
				A2(
					stil4m$elm_syntax$Combine$andMap,
					A2(
						stil4m$elm_syntax$Combine$continueWith,
						stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$expression(),
						stil4m$elm_syntax$Elm$Parser$Layout$layout),
					A2(
						stil4m$elm_syntax$Combine$andMap,
						stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$letBlock(),
						stil4m$elm_syntax$Combine$succeed(
							function (decls) {
								return A2(
									elm$core$Basics$composeR,
									stil4m$elm_syntax$Elm$Syntax$Expression$LetBlock(decls),
									stil4m$elm_syntax$Elm$Syntax$Expression$LetExpression);
							}))));
		});
}
function stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$listExpression() {
	return stil4m$elm_syntax$Combine$lazy(
		function (_n5) {
			var innerExpressions = A2(
				stil4m$elm_syntax$Combine$map,
				stil4m$elm_syntax$Elm$Syntax$Expression$ListExpr,
				A2(
					stil4m$elm_syntax$Combine$andMap,
					stil4m$elm_syntax$Combine$many(
						A2(
							stil4m$elm_syntax$Combine$continueWith,
							stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$expression(),
							A2(
								stil4m$elm_syntax$Combine$ignore,
								stil4m$elm_syntax$Combine$maybe(stil4m$elm_syntax$Elm$Parser$Layout$layout),
								stil4m$elm_syntax$Combine$string(',')))),
					A2(
						stil4m$elm_syntax$Combine$ignore,
						stil4m$elm_syntax$Combine$maybe(stil4m$elm_syntax$Elm$Parser$Layout$layout),
						A2(
							stil4m$elm_syntax$Combine$andMap,
							stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$expression(),
							stil4m$elm_syntax$Combine$succeed(elm$core$List$cons)))));
			return stil4m$elm_syntax$Elm$Parser$Node$parser(
				A2(
					stil4m$elm_syntax$Combine$continueWith,
					stil4m$elm_syntax$Combine$choice(
						_List_fromArray(
							[
								A2(
								stil4m$elm_syntax$Combine$map,
								elm$core$Basics$always(
									stil4m$elm_syntax$Elm$Syntax$Expression$ListExpr(_List_Nil)),
								stil4m$elm_syntax$Combine$string(']')),
								A2(
								stil4m$elm_syntax$Combine$ignore,
								stil4m$elm_syntax$Combine$string(']'),
								innerExpressions)
							])),
					A2(
						stil4m$elm_syntax$Combine$ignore,
						stil4m$elm_syntax$Combine$maybe(stil4m$elm_syntax$Elm$Parser$Layout$layout),
						stil4m$elm_syntax$Combine$string('['))));
		});
}
function stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$operatorExpression() {
	var negationExpression = stil4m$elm_syntax$Combine$lazy(
		function (_n4) {
			return A2(
				stil4m$elm_syntax$Combine$map,
				stil4m$elm_syntax$Elm$Syntax$Expression$Negation,
				A2(
					stil4m$elm_syntax$Combine$andThen,
					stil4m$elm_syntax$Elm$Parser$Declarations$liftRecordAccess,
					stil4m$elm_syntax$Combine$choice(
						_List_fromArray(
							[
								stil4m$elm_syntax$Elm$Parser$Declarations$referenceExpression,
								stil4m$elm_syntax$Elm$Parser$Declarations$numberExpression,
								stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$tupledExpression()
							]))));
		});
	return stil4m$elm_syntax$Combine$lazy(
		function (_n3) {
			return stil4m$elm_syntax$Combine$choice(
				_List_fromArray(
					[
						stil4m$elm_syntax$Elm$Parser$Node$parser(
						A2(
							stil4m$elm_syntax$Combine$continueWith,
							stil4m$elm_syntax$Combine$choice(
								_List_fromArray(
									[
										negationExpression,
										A2(
										stil4m$elm_syntax$Combine$ignore,
										stil4m$elm_syntax$Elm$Parser$Layout$layout,
										stil4m$elm_syntax$Combine$succeed(
											stil4m$elm_syntax$Elm$Syntax$Expression$Operator('-')))
									])),
							stil4m$elm_syntax$Combine$string('-'))),
						stil4m$elm_syntax$Elm$Parser$Node$parser(
						A2(stil4m$elm_syntax$Combine$map, stil4m$elm_syntax$Elm$Syntax$Expression$Operator, stil4m$elm_syntax$Elm$Parser$Tokens$infixOperatorToken))
					]));
		});
}
function stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$recordExpression() {
	return stil4m$elm_syntax$Elm$Parser$Node$parser(
		stil4m$elm_syntax$Combine$lazy(
			function (_n2) {
				var recordField = stil4m$elm_syntax$Elm$Parser$Node$parser(
					A2(
						stil4m$elm_syntax$Combine$andMap,
						stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$expression(),
						A2(
							stil4m$elm_syntax$Combine$ignore,
							stil4m$elm_syntax$Combine$maybe(stil4m$elm_syntax$Elm$Parser$Layout$layout),
							A2(
								stil4m$elm_syntax$Combine$ignore,
								stil4m$elm_syntax$Combine$string('='),
								A2(
									stil4m$elm_syntax$Combine$ignore,
									stil4m$elm_syntax$Combine$maybe(stil4m$elm_syntax$Elm$Parser$Layout$layout),
									A2(
										stil4m$elm_syntax$Combine$andMap,
										stil4m$elm_syntax$Elm$Parser$Node$parser(stil4m$elm_syntax$Elm$Parser$Tokens$functionName),
										stil4m$elm_syntax$Combine$succeed(elm$core$Tuple$pair)))))));
				var recordFields = A2(
					stil4m$elm_syntax$Combine$andMap,
					stil4m$elm_syntax$Combine$many(
						A2(
							stil4m$elm_syntax$Combine$ignore,
							stil4m$elm_syntax$Combine$maybe(stil4m$elm_syntax$Elm$Parser$Layout$layout),
							A2(
								stil4m$elm_syntax$Combine$continueWith,
								recordField,
								A2(
									stil4m$elm_syntax$Combine$ignore,
									stil4m$elm_syntax$Combine$maybe(stil4m$elm_syntax$Elm$Parser$Layout$layout),
									stil4m$elm_syntax$Combine$string(','))))),
					A2(
						stil4m$elm_syntax$Combine$ignore,
						stil4m$elm_syntax$Combine$maybe(stil4m$elm_syntax$Elm$Parser$Layout$layout),
						A2(
							stil4m$elm_syntax$Combine$andMap,
							recordField,
							stil4m$elm_syntax$Combine$succeed(elm$core$List$cons))));
				var recordUpdateSyntaxParser = function (fname) {
					return A2(
						stil4m$elm_syntax$Combine$ignore,
						stil4m$elm_syntax$Combine$string('}'),
						A2(
							stil4m$elm_syntax$Combine$map,
							function (e) {
								return A2(stil4m$elm_syntax$Elm$Syntax$Expression$RecordUpdateExpression, fname, e);
							},
							A2(
								stil4m$elm_syntax$Combine$continueWith,
								recordFields,
								A2(
									stil4m$elm_syntax$Combine$ignore,
									stil4m$elm_syntax$Combine$maybe(stil4m$elm_syntax$Elm$Parser$Layout$layout),
									stil4m$elm_syntax$Combine$string('|')))));
				};
				var recordContents = A2(
					stil4m$elm_syntax$Combine$andThen,
					function (fname) {
						return stil4m$elm_syntax$Combine$choice(
							_List_fromArray(
								[
									recordUpdateSyntaxParser(fname),
									A2(
									stil4m$elm_syntax$Combine$andThen,
									function (fieldUpdate) {
										return stil4m$elm_syntax$Combine$choice(
											_List_fromArray(
												[
													A2(
													stil4m$elm_syntax$Combine$map,
													elm$core$Basics$always(
														stil4m$elm_syntax$Elm$Syntax$Expression$RecordExpr(
															_List_fromArray(
																[fieldUpdate]))),
													stil4m$elm_syntax$Combine$string('}')),
													A2(
													stil4m$elm_syntax$Combine$ignore,
													stil4m$elm_syntax$Combine$string('}'),
													A2(
														stil4m$elm_syntax$Combine$map,
														function (fieldUpdates) {
															return stil4m$elm_syntax$Elm$Syntax$Expression$RecordExpr(
																A2(elm$core$List$cons, fieldUpdate, fieldUpdates));
														},
														A2(
															stil4m$elm_syntax$Combine$continueWith,
															recordFields,
															A2(
																stil4m$elm_syntax$Combine$ignore,
																stil4m$elm_syntax$Combine$maybe(stil4m$elm_syntax$Elm$Parser$Layout$layout),
																stil4m$elm_syntax$Combine$string(',')))))
												]));
									},
									A2(
										stil4m$elm_syntax$Combine$ignore,
										stil4m$elm_syntax$Combine$maybe(stil4m$elm_syntax$Elm$Parser$Layout$layout),
										A2(
											stil4m$elm_syntax$Combine$continueWith,
											A2(
												stil4m$elm_syntax$Combine$map,
												function (e) {
													return A3(stil4m$elm_syntax$Elm$Syntax$Node$combine, elm$core$Tuple$pair, fname, e);
												},
												stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$expression()),
											A2(
												stil4m$elm_syntax$Combine$ignore,
												stil4m$elm_syntax$Combine$maybe(stil4m$elm_syntax$Elm$Parser$Layout$layout),
												stil4m$elm_syntax$Combine$string('=')))))
								]));
					},
					A2(
						stil4m$elm_syntax$Combine$ignore,
						stil4m$elm_syntax$Combine$maybe(stil4m$elm_syntax$Elm$Parser$Layout$layout),
						stil4m$elm_syntax$Elm$Parser$Node$parser(stil4m$elm_syntax$Elm$Parser$Tokens$functionName)));
				return A2(
					stil4m$elm_syntax$Combine$continueWith,
					stil4m$elm_syntax$Combine$choice(
						_List_fromArray(
							[
								A2(
								stil4m$elm_syntax$Combine$map,
								elm$core$Basics$always(
									stil4m$elm_syntax$Elm$Syntax$Expression$RecordExpr(_List_Nil)),
								stil4m$elm_syntax$Combine$string('}')),
								recordContents
							])),
					A2(
						stil4m$elm_syntax$Combine$ignore,
						stil4m$elm_syntax$Combine$maybe(stil4m$elm_syntax$Elm$Parser$Layout$layout),
						stil4m$elm_syntax$Combine$string('{')));
			}));
}
function stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$tupledExpression() {
	return stil4m$elm_syntax$Combine$lazy(
		function (_n0) {
			var commaSep = stil4m$elm_syntax$Combine$many(
				A2(
					stil4m$elm_syntax$Combine$ignore,
					stil4m$elm_syntax$Combine$maybe(stil4m$elm_syntax$Elm$Parser$Layout$layout),
					A2(
						stil4m$elm_syntax$Combine$continueWith,
						stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$expression(),
						A2(
							stil4m$elm_syntax$Combine$ignore,
							stil4m$elm_syntax$Combine$maybe(stil4m$elm_syntax$Elm$Parser$Layout$layout),
							stil4m$elm_syntax$Combine$string(',')))));
			var closingParen = stil4m$elm_syntax$Combine$fromCore(
				elm$parser$Parser$symbol(')'));
			var asExpression = F2(
				function (x, xs) {
					if (!xs.b) {
						return stil4m$elm_syntax$Elm$Syntax$Expression$ParenthesizedExpression(x);
					} else {
						return stil4m$elm_syntax$Elm$Syntax$Expression$TupledExpression(
							A2(elm$core$List$cons, x, xs));
					}
				});
			var nested = A2(
				stil4m$elm_syntax$Combine$andMap,
				commaSep,
				A2(
					stil4m$elm_syntax$Combine$ignore,
					stil4m$elm_syntax$Combine$maybe(stil4m$elm_syntax$Elm$Parser$Layout$layout),
					A2(
						stil4m$elm_syntax$Combine$andMap,
						stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$expression(),
						A2(
							stil4m$elm_syntax$Combine$ignore,
							stil4m$elm_syntax$Combine$maybe(stil4m$elm_syntax$Elm$Parser$Layout$layout),
							stil4m$elm_syntax$Combine$succeed(asExpression)))));
			return stil4m$elm_syntax$Elm$Parser$Node$parser(
				A2(
					stil4m$elm_syntax$Combine$continueWith,
					stil4m$elm_syntax$Combine$choice(
						_List_fromArray(
							[
								A2(
								stil4m$elm_syntax$Combine$map,
								elm$core$Basics$always(stil4m$elm_syntax$Elm$Syntax$Expression$UnitExpr),
								closingParen),
								stil4m$elm_syntax$Combine$backtrackable(
								A2(
									stil4m$elm_syntax$Combine$map,
									stil4m$elm_syntax$Elm$Syntax$Expression$PrefixOperator,
									A2(stil4m$elm_syntax$Combine$ignore, closingParen, stil4m$elm_syntax$Elm$Parser$Tokens$prefixOperatorToken))),
								A2(stil4m$elm_syntax$Combine$ignore, closingParen, nested)
							])),
					stil4m$elm_syntax$Combine$fromCore(
						elm$parser$Parser$symbol('('))));
		});
}
try {
	var stil4m$elm_syntax$Elm$Parser$Declarations$caseBlock = stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$caseBlock();
	stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$caseBlock = function () {
		return stil4m$elm_syntax$Elm$Parser$Declarations$caseBlock;
	};
	var stil4m$elm_syntax$Elm$Parser$Declarations$caseExpression = stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$caseExpression();
	stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$caseExpression = function () {
		return stil4m$elm_syntax$Elm$Parser$Declarations$caseExpression;
	};
	var stil4m$elm_syntax$Elm$Parser$Declarations$caseStatement = stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$caseStatement();
	stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$caseStatement = function () {
		return stil4m$elm_syntax$Elm$Parser$Declarations$caseStatement;
	};
	var stil4m$elm_syntax$Elm$Parser$Declarations$caseStatements = stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$caseStatements();
	stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$caseStatements = function () {
		return stil4m$elm_syntax$Elm$Parser$Declarations$caseStatements;
	};
	var stil4m$elm_syntax$Elm$Parser$Declarations$expression = stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$expression();
	stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$expression = function () {
		return stil4m$elm_syntax$Elm$Parser$Declarations$expression;
	};
	var stil4m$elm_syntax$Elm$Parser$Declarations$expressionNotApplication = stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$expressionNotApplication();
	stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$expressionNotApplication = function () {
		return stil4m$elm_syntax$Elm$Parser$Declarations$expressionNotApplication;
	};
	var stil4m$elm_syntax$Elm$Parser$Declarations$ifBlockExpression = stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$ifBlockExpression();
	stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$ifBlockExpression = function () {
		return stil4m$elm_syntax$Elm$Parser$Declarations$ifBlockExpression;
	};
	var stil4m$elm_syntax$Elm$Parser$Declarations$lambdaExpression = stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$lambdaExpression();
	stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$lambdaExpression = function () {
		return stil4m$elm_syntax$Elm$Parser$Declarations$lambdaExpression;
	};
	var stil4m$elm_syntax$Elm$Parser$Declarations$letBlock = stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$letBlock();
	stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$letBlock = function () {
		return stil4m$elm_syntax$Elm$Parser$Declarations$letBlock;
	};
	var stil4m$elm_syntax$Elm$Parser$Declarations$letBody = stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$letBody();
	stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$letBody = function () {
		return stil4m$elm_syntax$Elm$Parser$Declarations$letBody;
	};
	var stil4m$elm_syntax$Elm$Parser$Declarations$letExpression = stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$letExpression();
	stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$letExpression = function () {
		return stil4m$elm_syntax$Elm$Parser$Declarations$letExpression;
	};
	var stil4m$elm_syntax$Elm$Parser$Declarations$listExpression = stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$listExpression();
	stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$listExpression = function () {
		return stil4m$elm_syntax$Elm$Parser$Declarations$listExpression;
	};
	var stil4m$elm_syntax$Elm$Parser$Declarations$operatorExpression = stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$operatorExpression();
	stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$operatorExpression = function () {
		return stil4m$elm_syntax$Elm$Parser$Declarations$operatorExpression;
	};
	var stil4m$elm_syntax$Elm$Parser$Declarations$recordExpression = stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$recordExpression();
	stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$recordExpression = function () {
		return stil4m$elm_syntax$Elm$Parser$Declarations$recordExpression;
	};
	var stil4m$elm_syntax$Elm$Parser$Declarations$tupledExpression = stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$tupledExpression();
	stil4m$elm_syntax$Elm$Parser$Declarations$cyclic$tupledExpression = function () {
		return stil4m$elm_syntax$Elm$Parser$Declarations$tupledExpression;
	};
} catch ($) {
throw 'Some top-level definitions from `Elm.Parser.Declarations` are causing infinite recursion:\n\n  ┌─────┐\n  │    caseBlock\n  │     ↓\n  │    caseExpression\n  │     ↓\n  │    caseStatement\n  │     ↓\n  │    caseStatements\n  │     ↓\n  │    expression\n  │     ↓\n  │    expressionNotApplication\n  │     ↓\n  │    functionWithNameNode\n  │     ↓\n  │    ifBlockExpression\n  │     ↓\n  │    lambdaExpression\n  │     ↓\n  │    letBlock\n  │     ↓\n  │    letBody\n  │     ↓\n  │    letDestructuringDeclarationWithPattern\n  │     ↓\n  │    letExpression\n  │     ↓\n  │    listExpression\n  │     ↓\n  │    operatorExpression\n  │     ↓\n  │    recordExpression\n  │     ↓\n  │    tupledExpression\n  └─────┘\n\nThese errors are very tricky, so read https://elm-lang.org/0.19.0/halting-problem to learn how to fix it!';}
var stil4m$elm_syntax$Elm$Syntax$Declaration$Destructuring = F2(
	function (a, b) {
		return {$: 'Destructuring', a: a, b: b};
	});
var stil4m$elm_syntax$Elm$Parser$Declarations$destructuringDeclaration = stil4m$elm_syntax$Combine$lazy(
	function (_n0) {
		return A2(
			stil4m$elm_syntax$Combine$andMap,
			stil4m$elm_syntax$Elm$Parser$Declarations$expression,
			A2(
				stil4m$elm_syntax$Combine$ignore,
				stil4m$elm_syntax$Elm$Parser$Layout$layout,
				A2(
					stil4m$elm_syntax$Combine$ignore,
					stil4m$elm_syntax$Combine$string('='),
					A2(
						stil4m$elm_syntax$Combine$andMap,
						stil4m$elm_syntax$Elm$Parser$Patterns$pattern,
						stil4m$elm_syntax$Combine$succeed(
							F2(
								function (x, y) {
									return A3(stil4m$elm_syntax$Elm$Syntax$Node$combine, stil4m$elm_syntax$Elm$Syntax$Declaration$Destructuring, x, y);
								}))))));
	});
var stil4m$elm_syntax$Elm$Syntax$Declaration$FunctionDeclaration = function (a) {
	return {$: 'FunctionDeclaration', a: a};
};
var stil4m$elm_syntax$Elm$Syntax$Node$value = function (_n0) {
	var v = _n0.b;
	return v;
};
var stil4m$elm_syntax$Elm$Syntax$Expression$functionRange = function (_function) {
	return stil4m$elm_syntax$Elm$Syntax$Range$combine(
		_List_fromArray(
			[
				function () {
				var _n0 = _function.documentation;
				if (_n0.$ === 'Just') {
					var documentation = _n0.a;
					return stil4m$elm_syntax$Elm$Syntax$Node$range(documentation);
				} else {
					return A2(
						elm$core$Maybe$withDefault,
						function (_n3) {
							var r = _n3.a;
							return r;
						}(
							stil4m$elm_syntax$Elm$Syntax$Node$value(_function.declaration).name),
						A2(
							elm$core$Maybe$map,
							function (_n1) {
								var value = _n1.b;
								var _n2 = value.name;
								var r = _n2.a;
								return r;
							},
							_function.signature));
				}
			}(),
				function (_n4) {
				var r = _n4.a;
				return r;
			}(
				stil4m$elm_syntax$Elm$Syntax$Node$value(_function.declaration).expression)
			]));
};
var stil4m$elm_syntax$Elm$Parser$Declarations$function = stil4m$elm_syntax$Combine$lazy(
	function (_n0) {
		return A2(
			stil4m$elm_syntax$Combine$map,
			function (f) {
				return A2(
					stil4m$elm_syntax$Elm$Syntax$Node$Node,
					stil4m$elm_syntax$Elm$Syntax$Expression$functionRange(f),
					stil4m$elm_syntax$Elm$Syntax$Declaration$FunctionDeclaration(f));
			},
			A2(
				stil4m$elm_syntax$Combine$andThen,
				stil4m$elm_syntax$Elm$Parser$Declarations$functionWithNameNode,
				A2(
					stil4m$elm_syntax$Combine$ignore,
					stil4m$elm_syntax$Combine$maybe(stil4m$elm_syntax$Elm$Parser$Layout$layout),
					stil4m$elm_syntax$Elm$Parser$Node$parser(stil4m$elm_syntax$Elm$Parser$Tokens$functionName))));
	});
var elm$parser$Parser$Advanced$int = F2(
	function (expecting, invalid) {
		return elm$parser$Parser$Advanced$number(
			{
				binary: elm$core$Result$Err(invalid),
				expecting: expecting,
				_float: elm$core$Result$Err(invalid),
				hex: elm$core$Result$Err(invalid),
				_int: elm$core$Result$Ok(elm$core$Basics$identity),
				invalid: invalid,
				octal: elm$core$Result$Err(invalid)
			});
	});
var elm$parser$Parser$int = A2(elm$parser$Parser$Advanced$int, elm$parser$Parser$ExpectingInt, elm$parser$Parser$ExpectingInt);
var stil4m$elm_syntax$Combine$Num$int = stil4m$elm_syntax$Combine$fromCore(elm$parser$Parser$int);
var stil4m$elm_syntax$Elm$Syntax$Infix$Left = {$: 'Left'};
var stil4m$elm_syntax$Elm$Syntax$Infix$Non = {$: 'Non'};
var stil4m$elm_syntax$Elm$Syntax$Infix$Right = {$: 'Right'};
var stil4m$elm_syntax$Elm$Parser$Infix$infixDirection = stil4m$elm_syntax$Combine$choice(
	_List_fromArray(
		[
			A2(
			stil4m$elm_syntax$Combine$ignore,
			stil4m$elm_syntax$Combine$string('right'),
			stil4m$elm_syntax$Combine$succeed(stil4m$elm_syntax$Elm$Syntax$Infix$Right)),
			A2(
			stil4m$elm_syntax$Combine$ignore,
			stil4m$elm_syntax$Combine$string('left'),
			stil4m$elm_syntax$Combine$succeed(stil4m$elm_syntax$Elm$Syntax$Infix$Left)),
			A2(
			stil4m$elm_syntax$Combine$ignore,
			stil4m$elm_syntax$Combine$string('non'),
			stil4m$elm_syntax$Combine$succeed(stil4m$elm_syntax$Elm$Syntax$Infix$Non))
		]));
var stil4m$elm_syntax$Elm$Syntax$Infix$Infix = F4(
	function (direction, precedence, operator, _function) {
		return {direction: direction, _function: _function, operator: operator, precedence: precedence};
	});
var stil4m$elm_syntax$Elm$Parser$Infix$infixDefinition = A2(
	stil4m$elm_syntax$Combine$andMap,
	stil4m$elm_syntax$Elm$Parser$Node$parser(stil4m$elm_syntax$Elm$Parser$Tokens$functionName),
	A2(
		stil4m$elm_syntax$Combine$ignore,
		stil4m$elm_syntax$Elm$Parser$Layout$layout,
		A2(
			stil4m$elm_syntax$Combine$ignore,
			stil4m$elm_syntax$Combine$string('='),
			A2(
				stil4m$elm_syntax$Combine$ignore,
				stil4m$elm_syntax$Elm$Parser$Layout$layout,
				A2(
					stil4m$elm_syntax$Combine$andMap,
					stil4m$elm_syntax$Elm$Parser$Node$parser(
						stil4m$elm_syntax$Combine$parens(stil4m$elm_syntax$Elm$Parser$Tokens$prefixOperatorToken)),
					A2(
						stil4m$elm_syntax$Combine$ignore,
						stil4m$elm_syntax$Elm$Parser$Layout$layout,
						A2(
							stil4m$elm_syntax$Combine$andMap,
							stil4m$elm_syntax$Elm$Parser$Node$parser(stil4m$elm_syntax$Combine$Num$int),
							A2(
								stil4m$elm_syntax$Combine$ignore,
								stil4m$elm_syntax$Elm$Parser$Layout$layout,
								A2(
									stil4m$elm_syntax$Combine$andMap,
									stil4m$elm_syntax$Elm$Parser$Node$parser(stil4m$elm_syntax$Elm$Parser$Infix$infixDirection),
									A2(
										stil4m$elm_syntax$Combine$ignore,
										stil4m$elm_syntax$Elm$Parser$Layout$layout,
										A2(
											stil4m$elm_syntax$Combine$ignore,
											stil4m$elm_syntax$Combine$fromCore(
												elm$parser$Parser$keyword('infix')),
											stil4m$elm_syntax$Combine$succeed(stil4m$elm_syntax$Elm$Syntax$Infix$Infix))))))))))));
var stil4m$elm_syntax$Elm$Parser$Ranges$asPointerLocation = function (_n0) {
	var line = _n0.line;
	var column = _n0.column;
	return {column: column, row: line};
};
var stil4m$elm_syntax$Elm$Parser$Ranges$withCurrentPoint = function (p) {
	return stil4m$elm_syntax$Combine$withLocation(
		function (start) {
			var k = stil4m$elm_syntax$Elm$Parser$Ranges$asPointerLocation(start);
			return p(
				{end: k, start: k});
		});
};
var stil4m$elm_syntax$Elm$Syntax$Declaration$InfixDeclaration = function (a) {
	return {$: 'InfixDeclaration', a: a};
};
var stil4m$elm_syntax$Elm$Parser$Declarations$infixDeclaration = stil4m$elm_syntax$Elm$Parser$Ranges$withCurrentPoint(
	function (current) {
		return A2(
			stil4m$elm_syntax$Combine$map,
			function (inf) {
				return A2(
					stil4m$elm_syntax$Elm$Syntax$Node$Node,
					stil4m$elm_syntax$Elm$Syntax$Range$combine(
						_List_fromArray(
							[
								current,
								stil4m$elm_syntax$Elm$Syntax$Node$range(inf._function)
							])),
					stil4m$elm_syntax$Elm$Syntax$Declaration$InfixDeclaration(inf));
			},
			stil4m$elm_syntax$Elm$Parser$Infix$infixDefinition);
	});
var stil4m$elm_syntax$Elm$Parser$Declarations$signature = A2(
	stil4m$elm_syntax$Combine$andMap,
	A2(
		stil4m$elm_syntax$Combine$continueWith,
		stil4m$elm_syntax$Elm$Parser$TypeAnnotation$typeAnnotation,
		A2(
			stil4m$elm_syntax$Combine$continueWith,
			stil4m$elm_syntax$Combine$maybe(stil4m$elm_syntax$Elm$Parser$Layout$layout),
			stil4m$elm_syntax$Elm$Parser$Layout$maybeAroundBothSides(
				stil4m$elm_syntax$Combine$string(':')))),
	A2(
		stil4m$elm_syntax$Combine$andMap,
		stil4m$elm_syntax$Elm$Parser$Node$parser(stil4m$elm_syntax$Elm$Parser$Tokens$functionName),
		stil4m$elm_syntax$Combine$succeed(stil4m$elm_syntax$Elm$Syntax$Signature$Signature)));
var stil4m$elm_syntax$Elm$Parser$Tokens$portToken = stil4m$elm_syntax$Combine$string('port');
var stil4m$elm_syntax$Elm$Syntax$Declaration$PortDeclaration = function (a) {
	return {$: 'PortDeclaration', a: a};
};
var stil4m$elm_syntax$Elm$Parser$Declarations$portDeclaration = stil4m$elm_syntax$Elm$Parser$Ranges$withCurrentPoint(
	function (current) {
		return A2(
			stil4m$elm_syntax$Combine$map,
			function (sig) {
				return A2(
					stil4m$elm_syntax$Elm$Syntax$Node$Node,
					stil4m$elm_syntax$Elm$Syntax$Range$combine(
						_List_fromArray(
							[
								current,
								function (_n0) {
								var r = _n0.a;
								return r;
							}(sig.typeAnnotation)
							])),
					stil4m$elm_syntax$Elm$Syntax$Declaration$PortDeclaration(sig));
			},
			A2(
				stil4m$elm_syntax$Combine$continueWith,
				stil4m$elm_syntax$Elm$Parser$Declarations$signature,
				A2(stil4m$elm_syntax$Combine$ignore, stil4m$elm_syntax$Elm$Parser$Layout$layout, stil4m$elm_syntax$Elm$Parser$Tokens$portToken)));
	});
var stil4m$elm_syntax$Elm$Parser$Typings$DefinedAlias = F2(
	function (a, b) {
		return {$: 'DefinedAlias', a: a, b: b};
	});
var stil4m$elm_syntax$Elm$Parser$Typings$DefinedType = F2(
	function (a, b) {
		return {$: 'DefinedType', a: a, b: b};
	});
var stil4m$elm_syntax$Elm$Parser$Typings$genericList = stil4m$elm_syntax$Combine$many(
	A2(
		stil4m$elm_syntax$Combine$ignore,
		stil4m$elm_syntax$Elm$Parser$Layout$layout,
		stil4m$elm_syntax$Elm$Parser$Node$parser(stil4m$elm_syntax$Elm$Parser$Tokens$functionName)));
var stil4m$elm_syntax$Elm$Parser$Typings$typePrefix = A2(
	stil4m$elm_syntax$Combine$continueWith,
	stil4m$elm_syntax$Elm$Parser$Layout$layout,
	stil4m$elm_syntax$Combine$string('type'));
var stil4m$elm_syntax$Elm$Parser$TypeAnnotation$typeAnnotationNonGreedy = stil4m$elm_syntax$Combine$choice(
	_List_fromArray(
		[
			stil4m$elm_syntax$Elm$Parser$TypeAnnotation$parensTypeAnnotation,
			stil4m$elm_syntax$Elm$Parser$TypeAnnotation$typedTypeAnnotation(stil4m$elm_syntax$Elm$Parser$TypeAnnotation$Lazy),
			stil4m$elm_syntax$Elm$Parser$TypeAnnotation$genericTypeAnnotation,
			stil4m$elm_syntax$Elm$Parser$TypeAnnotation$recordTypeAnnotation
		]));
var stil4m$elm_syntax$Elm$Syntax$Type$ValueConstructor = F2(
	function (name, _arguments) {
		return {_arguments: _arguments, name: name};
	});
var stil4m$elm_syntax$Elm$Parser$Typings$valueConstructor = A2(
	stil4m$elm_syntax$Combine$andThen,
	function (tnn) {
		var range = tnn.a;
		var complete = function (args) {
			return stil4m$elm_syntax$Combine$succeed(
				A2(
					stil4m$elm_syntax$Elm$Syntax$Node$Node,
					stil4m$elm_syntax$Elm$Syntax$Range$combine(
						A2(
							elm$core$List$cons,
							range,
							A2(elm$core$List$map, stil4m$elm_syntax$Elm$Syntax$Node$range, args))),
					A2(stil4m$elm_syntax$Elm$Syntax$Type$ValueConstructor, tnn, args)));
		};
		var argHelper = function (xs) {
			return A2(
				stil4m$elm_syntax$Combine$continueWith,
				stil4m$elm_syntax$Combine$choice(
					_List_fromArray(
						[
							A2(
							stil4m$elm_syntax$Combine$andThen,
							function (ta) {
								return A2(
									stil4m$elm_syntax$Elm$Parser$Layout$optimisticLayoutWith,
									function (_n0) {
										return stil4m$elm_syntax$Combine$succeed(
											elm$core$List$reverse(
												A2(elm$core$List$cons, ta, xs)));
									},
									function (_n1) {
										return argHelper(
											A2(elm$core$List$cons, ta, xs));
									});
							},
							stil4m$elm_syntax$Elm$Parser$TypeAnnotation$typeAnnotationNonGreedy),
							stil4m$elm_syntax$Combine$succeed(
							elm$core$List$reverse(xs))
						])),
				stil4m$elm_syntax$Combine$succeed(_Utils_Tuple0));
		};
		return A2(
			stil4m$elm_syntax$Elm$Parser$Layout$optimisticLayoutWith,
			function (_n2) {
				return complete(_List_Nil);
			},
			function (_n3) {
				return A2(
					stil4m$elm_syntax$Combine$andThen,
					complete,
					argHelper(_List_Nil));
			});
	},
	A2(
		stil4m$elm_syntax$Combine$continueWith,
		stil4m$elm_syntax$Elm$Parser$Node$parser(stil4m$elm_syntax$Elm$Parser$Tokens$typeName),
		stil4m$elm_syntax$Combine$succeed(stil4m$elm_syntax$Elm$Syntax$Type$ValueConstructor)));
function stil4m$elm_syntax$Elm$Parser$Typings$cyclic$valueConstructors() {
	return stil4m$elm_syntax$Combine$lazy(
		function (_n0) {
			return A2(
				stil4m$elm_syntax$Combine$andMap,
				stil4m$elm_syntax$Combine$choice(
					_List_fromArray(
						[
							A2(
							stil4m$elm_syntax$Combine$continueWith,
							stil4m$elm_syntax$Elm$Parser$Typings$cyclic$valueConstructors(),
							A2(
								stil4m$elm_syntax$Combine$ignore,
								stil4m$elm_syntax$Combine$maybe(stil4m$elm_syntax$Elm$Parser$Layout$layout),
								stil4m$elm_syntax$Combine$string('|'))),
							stil4m$elm_syntax$Combine$succeed(_List_Nil)
						])),
				A2(
					stil4m$elm_syntax$Combine$andMap,
					stil4m$elm_syntax$Elm$Parser$Typings$valueConstructor,
					stil4m$elm_syntax$Combine$succeed(elm$core$List$cons)));
		});
}
try {
	var stil4m$elm_syntax$Elm$Parser$Typings$valueConstructors = stil4m$elm_syntax$Elm$Parser$Typings$cyclic$valueConstructors();
	stil4m$elm_syntax$Elm$Parser$Typings$cyclic$valueConstructors = function () {
		return stil4m$elm_syntax$Elm$Parser$Typings$valueConstructors;
	};
} catch ($) {
throw 'Some top-level definitions from `Elm.Parser.Typings` are causing infinite recursion:\n\n  ┌─────┐\n  │    valueConstructors\n  └─────┘\n\nThese errors are very tricky, so read https://elm-lang.org/0.19.0/halting-problem to learn how to fix it!';}
var stil4m$elm_syntax$Elm$Syntax$Type$Type = F4(
	function (documentation, name, generics, constructors) {
		return {constructors: constructors, documentation: documentation, generics: generics, name: name};
	});
var stil4m$elm_syntax$Elm$Syntax$TypeAlias$TypeAlias = F4(
	function (documentation, name, generics, typeAnnotation) {
		return {documentation: documentation, generics: generics, name: name, typeAnnotation: typeAnnotation};
	});
var stil4m$elm_syntax$Elm$Parser$Typings$typeDefinition = stil4m$elm_syntax$Elm$Parser$Ranges$withCurrentPoint(
	function (start) {
		return A2(
			stil4m$elm_syntax$Combine$continueWith,
			stil4m$elm_syntax$Combine$choice(
				_List_fromArray(
					[
						A2(
						stil4m$elm_syntax$Combine$map,
						function (typeAlias) {
							return A2(
								stil4m$elm_syntax$Elm$Parser$Typings$DefinedAlias,
								stil4m$elm_syntax$Elm$Syntax$Range$combine(
									_List_fromArray(
										[
											start,
											stil4m$elm_syntax$Elm$Syntax$Node$range(typeAlias.typeAnnotation)
										])),
								typeAlias);
						},
						A2(
							stil4m$elm_syntax$Combine$andMap,
							stil4m$elm_syntax$Elm$Parser$TypeAnnotation$typeAnnotation,
							A2(
								stil4m$elm_syntax$Combine$ignore,
								stil4m$elm_syntax$Elm$Parser$Layout$layout,
								A2(
									stil4m$elm_syntax$Combine$ignore,
									stil4m$elm_syntax$Combine$string('='),
									A2(
										stil4m$elm_syntax$Combine$andMap,
										stil4m$elm_syntax$Elm$Parser$Typings$genericList,
										A2(
											stil4m$elm_syntax$Combine$andMap,
											A2(
												stil4m$elm_syntax$Combine$ignore,
												stil4m$elm_syntax$Elm$Parser$Layout$layout,
												stil4m$elm_syntax$Elm$Parser$Node$parser(stil4m$elm_syntax$Elm$Parser$Tokens$typeName)),
											A2(
												stil4m$elm_syntax$Combine$ignore,
												A2(
													stil4m$elm_syntax$Combine$continueWith,
													stil4m$elm_syntax$Elm$Parser$Layout$layout,
													stil4m$elm_syntax$Combine$string('alias')),
												stil4m$elm_syntax$Combine$succeed(
													stil4m$elm_syntax$Elm$Syntax$TypeAlias$TypeAlias(elm$core$Maybe$Nothing))))))))),
						A2(
						stil4m$elm_syntax$Combine$map,
						function (tipe) {
							return A2(
								stil4m$elm_syntax$Elm$Parser$Typings$DefinedType,
								stil4m$elm_syntax$Elm$Syntax$Range$combine(
									A2(
										elm$core$List$cons,
										start,
										A2(
											elm$core$List$map,
											function (_n0) {
												var r = _n0.a;
												return r;
											},
											tipe.constructors))),
								tipe);
						},
						A2(
							stil4m$elm_syntax$Combine$andMap,
							stil4m$elm_syntax$Elm$Parser$Typings$valueConstructors,
							A2(
								stil4m$elm_syntax$Combine$ignore,
								A2(
									stil4m$elm_syntax$Combine$ignore,
									stil4m$elm_syntax$Combine$maybe(stil4m$elm_syntax$Elm$Parser$Layout$layout),
									stil4m$elm_syntax$Combine$string('=')),
								A2(
									stil4m$elm_syntax$Combine$ignore,
									stil4m$elm_syntax$Combine$maybe(stil4m$elm_syntax$Elm$Parser$Layout$layout),
									A2(
										stil4m$elm_syntax$Combine$andMap,
										stil4m$elm_syntax$Elm$Parser$Typings$genericList,
										A2(
											stil4m$elm_syntax$Combine$ignore,
											stil4m$elm_syntax$Combine$maybe(stil4m$elm_syntax$Elm$Parser$Layout$layout),
											A2(
												stil4m$elm_syntax$Combine$andMap,
												stil4m$elm_syntax$Elm$Parser$Node$parser(stil4m$elm_syntax$Elm$Parser$Tokens$typeName),
												stil4m$elm_syntax$Combine$succeed(
													stil4m$elm_syntax$Elm$Syntax$Type$Type(elm$core$Maybe$Nothing)))))))))
					])),
			stil4m$elm_syntax$Elm$Parser$Typings$typePrefix);
	});
var stil4m$elm_syntax$Elm$Syntax$Declaration$AliasDeclaration = function (a) {
	return {$: 'AliasDeclaration', a: a};
};
var stil4m$elm_syntax$Elm$Syntax$Declaration$CustomTypeDeclaration = function (a) {
	return {$: 'CustomTypeDeclaration', a: a};
};
var stil4m$elm_syntax$Elm$Parser$Declarations$declaration = stil4m$elm_syntax$Combine$lazy(
	function (_n0) {
		return stil4m$elm_syntax$Combine$choice(
			_List_fromArray(
				[
					stil4m$elm_syntax$Elm$Parser$Declarations$infixDeclaration,
					stil4m$elm_syntax$Elm$Parser$Declarations$function,
					A2(
					stil4m$elm_syntax$Combine$map,
					function (v) {
						if (v.$ === 'DefinedType') {
							var r = v.a;
							var t = v.b;
							return A2(
								stil4m$elm_syntax$Elm$Syntax$Node$Node,
								r,
								stil4m$elm_syntax$Elm$Syntax$Declaration$CustomTypeDeclaration(t));
						} else {
							var r = v.a;
							var a = v.b;
							return A2(
								stil4m$elm_syntax$Elm$Syntax$Node$Node,
								r,
								stil4m$elm_syntax$Elm$Syntax$Declaration$AliasDeclaration(a));
						}
					},
					stil4m$elm_syntax$Elm$Parser$Typings$typeDefinition),
					stil4m$elm_syntax$Elm$Parser$Declarations$portDeclaration,
					stil4m$elm_syntax$Elm$Parser$Declarations$destructuringDeclaration
				]));
	});
var stil4m$elm_syntax$Elm$Parser$File$fileDeclarations = stil4m$elm_syntax$Combine$many(
	A2(
		stil4m$elm_syntax$Combine$ignore,
		stil4m$elm_syntax$Combine$maybe(stil4m$elm_syntax$Elm$Parser$Layout$layoutStrict),
		stil4m$elm_syntax$Elm$Parser$Declarations$declaration));
var stil4m$elm_syntax$Elm$Parser$Base$moduleName = A2(
	stil4m$elm_syntax$Combine$sepBy1,
	stil4m$elm_syntax$Combine$string('.'),
	stil4m$elm_syntax$Elm$Parser$Tokens$typeName);
var stil4m$elm_syntax$Elm$Syntax$Exposing$FunctionExpose = function (a) {
	return {$: 'FunctionExpose', a: a};
};
var stil4m$elm_syntax$Elm$Parser$Expose$functionExpose = stil4m$elm_syntax$Elm$Parser$Node$parser(
	A2(stil4m$elm_syntax$Combine$map, stil4m$elm_syntax$Elm$Syntax$Exposing$FunctionExpose, stil4m$elm_syntax$Elm$Parser$Tokens$functionName));
var stil4m$elm_syntax$Combine$while = function (pred) {
	return stil4m$elm_syntax$Combine$Parser(
		function (state) {
			return A2(
				elm$parser$Parser$map,
				function (x) {
					return _Utils_Tuple2(state, x);
				},
				elm$parser$Parser$getChompedString(
					elm$parser$Parser$chompWhile(pred)));
		});
};
var stil4m$elm_syntax$Elm$Syntax$Exposing$InfixExpose = function (a) {
	return {$: 'InfixExpose', a: a};
};
var stil4m$elm_syntax$Elm$Parser$Expose$infixExpose = stil4m$elm_syntax$Combine$lazy(
	function (_n0) {
		return stil4m$elm_syntax$Elm$Parser$Node$parser(
			A2(
				stil4m$elm_syntax$Combine$map,
				stil4m$elm_syntax$Elm$Syntax$Exposing$InfixExpose,
				stil4m$elm_syntax$Combine$parens(
					stil4m$elm_syntax$Combine$while(
						elm$core$Basics$neq(
							_Utils_chr(')'))))));
	});
var stil4m$elm_syntax$Elm$Syntax$Exposing$ExposedType = F2(
	function (name, open) {
		return {name: name, open: open};
	});
var stil4m$elm_syntax$Elm$Syntax$Exposing$TypeExpose = function (a) {
	return {$: 'TypeExpose', a: a};
};
var stil4m$elm_syntax$Elm$Syntax$Exposing$TypeOrAliasExpose = function (a) {
	return {$: 'TypeOrAliasExpose', a: a};
};
var stil4m$elm_syntax$Elm$Parser$Expose$exposedType = A2(
	stil4m$elm_syntax$Combine$andThen,
	function (tipe) {
		return stil4m$elm_syntax$Combine$choice(
			_List_fromArray(
				[
					A2(
					stil4m$elm_syntax$Combine$map,
					A2(
						elm$core$Basics$composeR,
						stil4m$elm_syntax$Elm$Syntax$Node$range,
						A2(
							elm$core$Basics$composeR,
							elm$core$Maybe$Just,
							A2(
								elm$core$Basics$composeR,
								function (v) {
									return A2(stil4m$elm_syntax$Elm$Syntax$Exposing$ExposedType, tipe, v);
								},
								stil4m$elm_syntax$Elm$Syntax$Exposing$TypeExpose))),
					stil4m$elm_syntax$Elm$Parser$Node$parser(
						stil4m$elm_syntax$Combine$parens(
							stil4m$elm_syntax$Elm$Parser$Layout$maybeAroundBothSides(
								stil4m$elm_syntax$Combine$string('..'))))),
					stil4m$elm_syntax$Combine$succeed(
					stil4m$elm_syntax$Elm$Syntax$Exposing$TypeOrAliasExpose(tipe))
				]));
	},
	A2(
		stil4m$elm_syntax$Combine$ignore,
		stil4m$elm_syntax$Combine$maybe(stil4m$elm_syntax$Elm$Parser$Layout$layout),
		A2(
			stil4m$elm_syntax$Combine$andMap,
			stil4m$elm_syntax$Elm$Parser$Tokens$typeName,
			stil4m$elm_syntax$Combine$succeed(elm$core$Basics$identity))));
var stil4m$elm_syntax$Elm$Parser$Expose$typeExpose = stil4m$elm_syntax$Combine$lazy(
	function (_n0) {
		return stil4m$elm_syntax$Elm$Parser$Node$parser(stil4m$elm_syntax$Elm$Parser$Expose$exposedType);
	});
var stil4m$elm_syntax$Elm$Parser$Expose$exposable = stil4m$elm_syntax$Combine$lazy(
	function (_n0) {
		return stil4m$elm_syntax$Combine$choice(
			_List_fromArray(
				[stil4m$elm_syntax$Elm$Parser$Expose$typeExpose, stil4m$elm_syntax$Elm$Parser$Expose$infixExpose, stil4m$elm_syntax$Elm$Parser$Expose$functionExpose]));
	});
var stil4m$elm_syntax$Elm$Parser$Ranges$withRange = function (p) {
	return stil4m$elm_syntax$Combine$withLocation(
		function (start) {
			return A2(
				stil4m$elm_syntax$Combine$andMap,
				stil4m$elm_syntax$Combine$withLocation(
					function (end) {
						return stil4m$elm_syntax$Combine$succeed(
							{
								end: stil4m$elm_syntax$Elm$Parser$Ranges$asPointerLocation(end),
								start: stil4m$elm_syntax$Elm$Parser$Ranges$asPointerLocation(start)
							});
					}),
				p);
		});
};
var stil4m$elm_syntax$Elm$Syntax$Exposing$All = function (a) {
	return {$: 'All', a: a};
};
var stil4m$elm_syntax$Elm$Syntax$Exposing$Explicit = function (a) {
	return {$: 'Explicit', a: a};
};
var stil4m$elm_syntax$Elm$Parser$Expose$exposingListInner = stil4m$elm_syntax$Combine$lazy(
	function (_n0) {
		return A2(
			stil4m$elm_syntax$Combine$or,
			stil4m$elm_syntax$Elm$Parser$Ranges$withRange(
				A2(
					stil4m$elm_syntax$Combine$ignore,
					stil4m$elm_syntax$Elm$Parser$Layout$maybeAroundBothSides(
						stil4m$elm_syntax$Combine$string('..')),
					stil4m$elm_syntax$Combine$succeed(stil4m$elm_syntax$Elm$Syntax$Exposing$All))),
			A2(
				stil4m$elm_syntax$Combine$map,
				stil4m$elm_syntax$Elm$Syntax$Exposing$Explicit,
				A2(
					stil4m$elm_syntax$Combine$sepBy,
					stil4m$elm_syntax$Combine$Char$char(
						_Utils_chr(',')),
					stil4m$elm_syntax$Elm$Parser$Layout$maybeAroundBothSides(stil4m$elm_syntax$Elm$Parser$Expose$exposable))));
	});
var stil4m$elm_syntax$Elm$Parser$Expose$exposeListWith = stil4m$elm_syntax$Combine$parens(
	A2(
		stil4m$elm_syntax$Combine$ignore,
		stil4m$elm_syntax$Elm$Parser$Layout$optimisticLayout,
		A2(stil4m$elm_syntax$Combine$continueWith, stil4m$elm_syntax$Elm$Parser$Expose$exposingListInner, stil4m$elm_syntax$Elm$Parser$Layout$optimisticLayout)));
var stil4m$elm_syntax$Elm$Parser$Tokens$exposingToken = stil4m$elm_syntax$Combine$string('exposing');
var stil4m$elm_syntax$Elm$Parser$Expose$exposeDefinition = A2(
	stil4m$elm_syntax$Combine$continueWith,
	stil4m$elm_syntax$Elm$Parser$Expose$exposeListWith,
	A2(
		stil4m$elm_syntax$Combine$continueWith,
		stil4m$elm_syntax$Combine$maybe(stil4m$elm_syntax$Elm$Parser$Layout$layout),
		stil4m$elm_syntax$Elm$Parser$Tokens$exposingToken));
var stil4m$elm_syntax$Elm$Parser$Imports$setupNode = F2(
	function (start, imp) {
		var allRanges = _List_fromArray(
			[
				elm$core$Maybe$Just(start),
				elm$core$Maybe$Just(
				stil4m$elm_syntax$Elm$Syntax$Node$range(imp.moduleName)),
				A2(elm$core$Maybe$map, stil4m$elm_syntax$Elm$Syntax$Node$range, imp.exposingList),
				A2(elm$core$Maybe$map, stil4m$elm_syntax$Elm$Syntax$Node$range, imp.moduleAlias)
			]);
		return A2(
			stil4m$elm_syntax$Elm$Syntax$Node$Node,
			stil4m$elm_syntax$Elm$Syntax$Range$combine(
				A2(elm$core$List$filterMap, elm$core$Basics$identity, allRanges)),
			imp);
	});
var stil4m$elm_syntax$Elm$Parser$Tokens$asToken = stil4m$elm_syntax$Combine$fromCore(
	elm$parser$Parser$keyword('as'));
var stil4m$elm_syntax$Elm$Parser$Tokens$importToken = stil4m$elm_syntax$Combine$fromCore(
	elm$parser$Parser$keyword('import'));
var stil4m$elm_syntax$Elm$Syntax$Import$Import = F3(
	function (moduleName, moduleAlias, exposingList) {
		return {exposingList: exposingList, moduleAlias: moduleAlias, moduleName: moduleName};
	});
var stil4m$elm_syntax$Elm$Parser$Imports$importDefinition = function () {
	var parseExposingDefinition = F2(
		function (mod, asDef) {
			return stil4m$elm_syntax$Combine$choice(
				_List_fromArray(
					[
						A2(
						stil4m$elm_syntax$Combine$map,
						A2(
							elm$core$Basics$composeR,
							elm$core$Maybe$Just,
							A2(stil4m$elm_syntax$Elm$Syntax$Import$Import, mod, asDef)),
						stil4m$elm_syntax$Elm$Parser$Node$parser(stil4m$elm_syntax$Elm$Parser$Expose$exposeDefinition)),
						stil4m$elm_syntax$Combine$succeed(
						A3(stil4m$elm_syntax$Elm$Syntax$Import$Import, mod, asDef, elm$core$Maybe$Nothing))
					]));
		});
	var importAndModuleName = A2(
		stil4m$elm_syntax$Combine$continueWith,
		stil4m$elm_syntax$Elm$Parser$Node$parser(stil4m$elm_syntax$Elm$Parser$Base$moduleName),
		A2(stil4m$elm_syntax$Combine$continueWith, stil4m$elm_syntax$Elm$Parser$Layout$layout, stil4m$elm_syntax$Elm$Parser$Tokens$importToken));
	var asDefinition = A2(
		stil4m$elm_syntax$Combine$continueWith,
		stil4m$elm_syntax$Elm$Parser$Node$parser(stil4m$elm_syntax$Elm$Parser$Base$moduleName),
		A2(stil4m$elm_syntax$Combine$continueWith, stil4m$elm_syntax$Elm$Parser$Layout$layout, stil4m$elm_syntax$Elm$Parser$Tokens$asToken));
	var parseAsDefinition = function (mod) {
		return stil4m$elm_syntax$Combine$choice(
			_List_fromArray(
				[
					A2(
					stil4m$elm_syntax$Combine$andThen,
					A2(
						elm$core$Basics$composeR,
						elm$core$Maybe$Just,
						parseExposingDefinition(mod)),
					A2(stil4m$elm_syntax$Combine$ignore, stil4m$elm_syntax$Elm$Parser$Layout$optimisticLayout, asDefinition)),
					A2(parseExposingDefinition, mod, elm$core$Maybe$Nothing)
				]));
	};
	return A2(
		stil4m$elm_syntax$Combine$andThen,
		function (_n0) {
			var start = _n0.a;
			return A2(
				stil4m$elm_syntax$Combine$map,
				stil4m$elm_syntax$Elm$Parser$Imports$setupNode(start),
				A2(
					stil4m$elm_syntax$Combine$andThen,
					parseAsDefinition,
					A2(stil4m$elm_syntax$Combine$ignore, stil4m$elm_syntax$Elm$Parser$Layout$optimisticLayout, importAndModuleName)));
		},
		stil4m$elm_syntax$Elm$Parser$Node$parser(
			stil4m$elm_syntax$Combine$succeed(_Utils_Tuple0)));
}();
var elm$core$List$filter = F2(
	function (isGood, list) {
		return A3(
			elm$core$List$foldr,
			F2(
				function (x, xs) {
					return isGood(x) ? A2(elm$core$List$cons, x, xs) : xs;
				}),
			_List_Nil,
			list);
	});
var stil4m$elm_syntax$Elm$Parser$Modules$effectWhereClause = A2(
	stil4m$elm_syntax$Combine$andMap,
	A2(
		stil4m$elm_syntax$Combine$continueWith,
		stil4m$elm_syntax$Elm$Parser$Node$parser(stil4m$elm_syntax$Elm$Parser$Tokens$typeName),
		stil4m$elm_syntax$Elm$Parser$Layout$maybeAroundBothSides(
			stil4m$elm_syntax$Combine$string('='))),
	A2(
		stil4m$elm_syntax$Combine$andMap,
		stil4m$elm_syntax$Elm$Parser$Tokens$functionName,
		stil4m$elm_syntax$Combine$succeed(elm$core$Tuple$pair)));
var stil4m$elm_syntax$Elm$Parser$Modules$whereBlock = A2(
	stil4m$elm_syntax$Combine$map,
	function (pairs) {
		return {
			command: A2(
				elm$core$Maybe$map,
				elm$core$Tuple$second,
				elm$core$List$head(
					A2(
						elm$core$List$filter,
						A2(
							elm$core$Basics$composeR,
							elm$core$Tuple$first,
							elm$core$Basics$eq('command')),
						pairs))),
			subscription: A2(
				elm$core$Maybe$map,
				elm$core$Tuple$second,
				elm$core$List$head(
					A2(
						elm$core$List$filter,
						A2(
							elm$core$Basics$composeR,
							elm$core$Tuple$first,
							elm$core$Basics$eq('subscription')),
						pairs)))
		};
	},
	A3(
		stil4m$elm_syntax$Combine$between,
		stil4m$elm_syntax$Combine$string('{'),
		stil4m$elm_syntax$Combine$string('}'),
		A2(
			stil4m$elm_syntax$Combine$sepBy1,
			stil4m$elm_syntax$Combine$string(','),
			stil4m$elm_syntax$Elm$Parser$Layout$maybeAroundBothSides(stil4m$elm_syntax$Elm$Parser$Modules$effectWhereClause))));
var stil4m$elm_syntax$Elm$Parser$Modules$effectWhereClauses = A2(
	stil4m$elm_syntax$Combine$continueWith,
	stil4m$elm_syntax$Elm$Parser$Modules$whereBlock,
	A2(
		stil4m$elm_syntax$Combine$continueWith,
		stil4m$elm_syntax$Elm$Parser$Layout$layout,
		stil4m$elm_syntax$Combine$string('where')));
var stil4m$elm_syntax$Elm$Parser$Tokens$moduleToken = stil4m$elm_syntax$Combine$string('module');
var stil4m$elm_syntax$Elm$Syntax$Module$EffectModule = function (a) {
	return {$: 'EffectModule', a: a};
};
var stil4m$elm_syntax$Elm$Parser$Modules$effectModuleDefinition = function () {
	var createEffectModule = F3(
		function (name, whereClauses, exp) {
			return stil4m$elm_syntax$Elm$Syntax$Module$EffectModule(
				{command: whereClauses.command, exposingList: exp, moduleName: name, subscription: whereClauses.subscription});
		});
	return A2(
		stil4m$elm_syntax$Combine$andMap,
		stil4m$elm_syntax$Elm$Parser$Node$parser(stil4m$elm_syntax$Elm$Parser$Expose$exposeDefinition),
		A2(
			stil4m$elm_syntax$Combine$ignore,
			stil4m$elm_syntax$Elm$Parser$Layout$layout,
			A2(
				stil4m$elm_syntax$Combine$andMap,
				stil4m$elm_syntax$Elm$Parser$Modules$effectWhereClauses,
				A2(
					stil4m$elm_syntax$Combine$ignore,
					stil4m$elm_syntax$Elm$Parser$Layout$layout,
					A2(
						stil4m$elm_syntax$Combine$andMap,
						stil4m$elm_syntax$Elm$Parser$Node$parser(stil4m$elm_syntax$Elm$Parser$Base$moduleName),
						A2(
							stil4m$elm_syntax$Combine$ignore,
							stil4m$elm_syntax$Elm$Parser$Layout$layout,
							A2(
								stil4m$elm_syntax$Combine$ignore,
								stil4m$elm_syntax$Elm$Parser$Tokens$moduleToken,
								A2(
									stil4m$elm_syntax$Combine$ignore,
									stil4m$elm_syntax$Elm$Parser$Layout$layout,
									A2(
										stil4m$elm_syntax$Combine$ignore,
										stil4m$elm_syntax$Combine$string('effect'),
										stil4m$elm_syntax$Combine$succeed(createEffectModule))))))))));
}();
var stil4m$elm_syntax$Elm$Syntax$Module$DefaultModuleData = F2(
	function (moduleName, exposingList) {
		return {exposingList: exposingList, moduleName: moduleName};
	});
var stil4m$elm_syntax$Elm$Syntax$Module$NormalModule = function (a) {
	return {$: 'NormalModule', a: a};
};
var stil4m$elm_syntax$Elm$Parser$Modules$normalModuleDefinition = A2(
	stil4m$elm_syntax$Combine$map,
	stil4m$elm_syntax$Elm$Syntax$Module$NormalModule,
	A2(
		stil4m$elm_syntax$Combine$andMap,
		stil4m$elm_syntax$Elm$Parser$Node$parser(stil4m$elm_syntax$Elm$Parser$Expose$exposeDefinition),
		A2(
			stil4m$elm_syntax$Combine$ignore,
			stil4m$elm_syntax$Elm$Parser$Layout$layout,
			A2(
				stil4m$elm_syntax$Combine$andMap,
				stil4m$elm_syntax$Elm$Parser$Node$parser(stil4m$elm_syntax$Elm$Parser$Base$moduleName),
				A2(
					stil4m$elm_syntax$Combine$ignore,
					stil4m$elm_syntax$Elm$Parser$Layout$layout,
					A2(
						stil4m$elm_syntax$Combine$ignore,
						stil4m$elm_syntax$Elm$Parser$Tokens$moduleToken,
						stil4m$elm_syntax$Combine$succeed(stil4m$elm_syntax$Elm$Syntax$Module$DefaultModuleData)))))));
var stil4m$elm_syntax$Elm$Syntax$Module$PortModule = function (a) {
	return {$: 'PortModule', a: a};
};
var stil4m$elm_syntax$Elm$Parser$Modules$portModuleDefinition = A2(
	stil4m$elm_syntax$Combine$map,
	stil4m$elm_syntax$Elm$Syntax$Module$PortModule,
	A2(
		stil4m$elm_syntax$Combine$andMap,
		stil4m$elm_syntax$Elm$Parser$Node$parser(stil4m$elm_syntax$Elm$Parser$Expose$exposeDefinition),
		A2(
			stil4m$elm_syntax$Combine$ignore,
			stil4m$elm_syntax$Elm$Parser$Layout$layout,
			A2(
				stil4m$elm_syntax$Combine$andMap,
				stil4m$elm_syntax$Elm$Parser$Node$parser(stil4m$elm_syntax$Elm$Parser$Base$moduleName),
				A2(
					stil4m$elm_syntax$Combine$ignore,
					stil4m$elm_syntax$Elm$Parser$Layout$layout,
					A2(
						stil4m$elm_syntax$Combine$ignore,
						stil4m$elm_syntax$Elm$Parser$Tokens$moduleToken,
						A2(
							stil4m$elm_syntax$Combine$ignore,
							stil4m$elm_syntax$Elm$Parser$Layout$layout,
							A2(
								stil4m$elm_syntax$Combine$ignore,
								stil4m$elm_syntax$Elm$Parser$Tokens$portToken,
								stil4m$elm_syntax$Combine$succeed(stil4m$elm_syntax$Elm$Syntax$Module$DefaultModuleData)))))))));
var stil4m$elm_syntax$Elm$Parser$Modules$moduleDefinition = stil4m$elm_syntax$Combine$choice(
	_List_fromArray(
		[stil4m$elm_syntax$Elm$Parser$Modules$normalModuleDefinition, stil4m$elm_syntax$Elm$Parser$Modules$portModuleDefinition, stil4m$elm_syntax$Elm$Parser$Modules$effectModuleDefinition]));
var stil4m$elm_syntax$Elm$Syntax$File$File = F4(
	function (moduleDefinition, imports, declarations, comments) {
		return {comments: comments, declarations: declarations, imports: imports, moduleDefinition: moduleDefinition};
	});
var stil4m$elm_syntax$Elm$Parser$File$file = A2(
	stil4m$elm_syntax$Combine$ignore,
	stil4m$elm_syntax$Elm$Parser$Layout$optimisticLayout,
	A2(
		stil4m$elm_syntax$Combine$andMap,
		stil4m$elm_syntax$Elm$Parser$File$collectComments,
		A2(
			stil4m$elm_syntax$Combine$andMap,
			stil4m$elm_syntax$Elm$Parser$File$fileDeclarations,
			A2(
				stil4m$elm_syntax$Combine$ignore,
				stil4m$elm_syntax$Combine$maybe(stil4m$elm_syntax$Elm$Parser$Layout$layoutStrict),
				A2(
					stil4m$elm_syntax$Combine$andMap,
					stil4m$elm_syntax$Combine$many(
						A2(stil4m$elm_syntax$Combine$ignore, stil4m$elm_syntax$Elm$Parser$Layout$optimisticLayout, stil4m$elm_syntax$Elm$Parser$Imports$importDefinition)),
					A2(
						stil4m$elm_syntax$Combine$ignore,
						stil4m$elm_syntax$Combine$maybe(stil4m$elm_syntax$Elm$Parser$Layout$layoutStrict),
						A2(
							stil4m$elm_syntax$Combine$andMap,
							stil4m$elm_syntax$Elm$Parser$Node$parser(stil4m$elm_syntax$Elm$Parser$Modules$moduleDefinition),
							A2(
								stil4m$elm_syntax$Combine$ignore,
								stil4m$elm_syntax$Combine$maybe(stil4m$elm_syntax$Elm$Parser$Layout$layoutStrict),
								stil4m$elm_syntax$Combine$succeed(stil4m$elm_syntax$Elm$Syntax$File$File)))))))));
var stil4m$elm_syntax$Elm$Parser$State$emptyState = stil4m$elm_syntax$Elm$Parser$State$State(
	{comments: _List_Nil, indents: _List_Nil});
var stil4m$elm_syntax$Elm$Parser$parse = function (input) {
	var _n0 = A3(
		stil4m$elm_syntax$Combine$runParser,
		stil4m$elm_syntax$Elm$Parser$withEnd(stil4m$elm_syntax$Elm$Parser$File$file),
		stil4m$elm_syntax$Elm$Parser$State$emptyState,
		input + '\n');
	if (_n0.$ === 'Ok') {
		var _n1 = _n0.a;
		var r = _n1.b;
		return elm$core$Result$Ok(
			stil4m$elm_syntax$Elm$Internal$RawFile$fromFile(r));
	} else {
		var s = _n0.a;
		return elm$core$Result$Err(s);
	}
};
var stil4m$elm_syntax$Elm$Processing$ProcessContext = function (a) {
	return {$: 'ProcessContext', a: a};
};
var stil4m$elm_syntax$Elm$Processing$init = stil4m$elm_syntax$Elm$Processing$ProcessContext(elm$core$Dict$empty);
var elm$core$Dict$isEmpty = function (dict) {
	if (dict.$ === 'RBEmpty_elm_builtin') {
		return true;
	} else {
		return false;
	}
};
var stil4m$elm_syntax$Elm$Processing$expressionOperators = function (_n0) {
	var expression = _n0.b;
	if (expression.$ === 'Operator') {
		var s = expression.a;
		return elm$core$Maybe$Just(s);
	} else {
		return elm$core$Maybe$Nothing;
	}
};
var elm$core$Maybe$andThen = F2(
	function (callback, maybeValue) {
		if (maybeValue.$ === 'Just') {
			var value = maybeValue.a;
			return callback(value);
		} else {
			return elm$core$Maybe$Nothing;
		}
	});
var elm_community$list_extra$List$Extra$takeWhile = function (predicate) {
	var takeWhileMemo = F2(
		function (memo, list) {
			takeWhileMemo:
			while (true) {
				if (!list.b) {
					return elm$core$List$reverse(memo);
				} else {
					var x = list.a;
					var xs = list.b;
					if (predicate(x)) {
						var $temp$memo = A2(elm$core$List$cons, x, memo),
							$temp$list = xs;
						memo = $temp$memo;
						list = $temp$list;
						continue takeWhileMemo;
					} else {
						return elm$core$List$reverse(memo);
					}
				}
			}
		});
	return takeWhileMemo(_List_Nil);
};
var stil4m$elm_syntax$Elm$Processing$findNextSplit = F2(
	function (dict, exps) {
		var prefix = A2(
			elm_community$list_extra$List$Extra$takeWhile,
			function (x) {
				return _Utils_eq(
					elm$core$Maybe$Nothing,
					A2(
						elm$core$Maybe$andThen,
						function (key) {
							return A2(elm$core$Dict$get, key, dict);
						},
						stil4m$elm_syntax$Elm$Processing$expressionOperators(x)));
			},
			exps);
		var suffix = A2(
			elm$core$List$drop,
			elm$core$List$length(prefix) + 1,
			exps);
		return A2(
			elm$core$Maybe$map,
			function (x) {
				return _Utils_Tuple3(prefix, x, suffix);
			},
			A2(
				elm$core$Maybe$andThen,
				function (x) {
					return A2(elm$core$Dict$get, x, dict);
				},
				A2(
					elm$core$Maybe$andThen,
					stil4m$elm_syntax$Elm$Processing$expressionOperators,
					elm$core$List$head(
						A2(
							elm$core$List$drop,
							elm$core$List$length(prefix),
							exps)))));
	});
var elm$core$Dict$fromList = function (assocs) {
	return A3(
		elm$core$List$foldl,
		F2(
			function (_n0, dict) {
				var key = _n0.a;
				var value = _n0.b;
				return A3(elm$core$Dict$insert, key, value, dict);
			}),
		elm$core$Dict$empty,
		assocs);
};
var elm$core$List$maximum = function (list) {
	if (list.b) {
		var x = list.a;
		var xs = list.b;
		return elm$core$Maybe$Just(
			A3(elm$core$List$foldl, elm$core$Basics$max, x, xs));
	} else {
		return elm$core$Maybe$Nothing;
	}
};
var stil4m$elm_syntax$Elm$Processing$highestPrecedence = function (input) {
	var maxi = elm$core$List$maximum(
		A2(
			elm$core$List$map,
			A2(
				elm$core$Basics$composeR,
				elm$core$Tuple$second,
				A2(
					elm$core$Basics$composeR,
					function ($) {
						return $.precedence;
					},
					stil4m$elm_syntax$Elm$Syntax$Node$value)),
			input));
	return elm$core$Dict$fromList(
		A2(
			elm$core$Maybe$withDefault,
			_List_Nil,
			A2(
				elm$core$Maybe$map,
				function (m) {
					return A2(
						elm$core$List$filter,
						A2(
							elm$core$Basics$composeR,
							elm$core$Tuple$second,
							A2(
								elm$core$Basics$composeR,
								function ($) {
									return $.precedence;
								},
								A2(
									elm$core$Basics$composeR,
									stil4m$elm_syntax$Elm$Syntax$Node$value,
									elm$core$Basics$eq(m)))),
						input);
				},
				maxi)));
};
var stil4m$elm_syntax$Elm$Syntax$Expression$OperatorApplication = F4(
	function (a, b, c, d) {
		return {$: 'OperatorApplication', a: a, b: b, c: c, d: d};
	});
var stil4m$elm_syntax$Elm$Processing$fixApplication = F2(
	function (operators, expressions) {
		var ops = stil4m$elm_syntax$Elm$Processing$highestPrecedence(
			A2(
				elm$core$List$map,
				function (x) {
					return _Utils_Tuple2(
						x,
						A2(
							elm$core$Maybe$withDefault,
							{
								direction: A2(stil4m$elm_syntax$Elm$Syntax$Node$Node, stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, stil4m$elm_syntax$Elm$Syntax$Infix$Left),
								_function: A2(stil4m$elm_syntax$Elm$Syntax$Node$Node, stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 'todo'),
								operator: A2(stil4m$elm_syntax$Elm$Syntax$Node$Node, stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, x),
								precedence: A2(stil4m$elm_syntax$Elm$Syntax$Node$Node, stil4m$elm_syntax$Elm$Syntax$Range$emptyRange, 5)
							},
							A2(elm$core$Dict$get, x, operators)));
				},
				A2(elm$core$List$filterMap, stil4m$elm_syntax$Elm$Processing$expressionOperators, expressions)));
		var fixExprs = function (exps) {
			if (exps.b && (!exps.b.b)) {
				var _n2 = exps.a;
				var x = _n2.b;
				return x;
			} else {
				return stil4m$elm_syntax$Elm$Syntax$Expression$Application(exps);
			}
		};
		var divideAndConquer = function (exps) {
			return elm$core$Dict$isEmpty(ops) ? fixExprs(exps) : A2(
				elm$core$Maybe$withDefault,
				fixExprs(exps),
				A2(
					elm$core$Maybe$map,
					function (_n0) {
						var p = _n0.a;
						var infix = _n0.b;
						var s = _n0.c;
						return A4(
							stil4m$elm_syntax$Elm$Syntax$Expression$OperatorApplication,
							stil4m$elm_syntax$Elm$Syntax$Node$value(infix.operator),
							stil4m$elm_syntax$Elm$Syntax$Node$value(infix.direction),
							A2(
								stil4m$elm_syntax$Elm$Syntax$Node$Node,
								stil4m$elm_syntax$Elm$Syntax$Range$combine(
									A2(elm$core$List$map, stil4m$elm_syntax$Elm$Syntax$Node$range, p)),
								divideAndConquer(p)),
							A2(
								stil4m$elm_syntax$Elm$Syntax$Node$Node,
								stil4m$elm_syntax$Elm$Syntax$Range$combine(
									A2(elm$core$List$map, stil4m$elm_syntax$Elm$Syntax$Node$range, s)),
								divideAndConquer(s)));
					},
					A2(stil4m$elm_syntax$Elm$Processing$findNextSplit, ops, exps)));
		};
		return divideAndConquer(expressions);
	});
var elm$core$List$append = F2(
	function (xs, ys) {
		if (!ys.b) {
			return xs;
		} else {
			return A3(elm$core$List$foldr, elm$core$List$cons, ys, xs);
		}
	});
var elm$core$List$concat = function (lists) {
	return A3(elm$core$List$foldr, elm$core$List$append, _List_Nil, lists);
};
var elm$core$List$concatMap = F2(
	function (f, list) {
		return elm$core$List$concat(
			A2(elm$core$List$map, f, list));
	});
var stil4m$elm_syntax$Elm$DefaultImports$defaults = _List_fromArray(
	[
		{
		exposingList: elm$core$Maybe$Just(
			A2(
				stil4m$elm_syntax$Elm$Syntax$Node$Node,
				stil4m$elm_syntax$Elm$Syntax$Range$emptyRange,
				stil4m$elm_syntax$Elm$Syntax$Exposing$All(stil4m$elm_syntax$Elm$Syntax$Range$emptyRange))),
		moduleAlias: elm$core$Maybe$Nothing,
		moduleName: A2(
			stil4m$elm_syntax$Elm$Syntax$Node$Node,
			stil4m$elm_syntax$Elm$Syntax$Range$emptyRange,
			_List_fromArray(
				['Basics']))
	},
		{
		exposingList: elm$core$Maybe$Just(
			A2(
				stil4m$elm_syntax$Elm$Syntax$Node$Node,
				stil4m$elm_syntax$Elm$Syntax$Range$emptyRange,
				stil4m$elm_syntax$Elm$Syntax$Exposing$Explicit(
					_List_fromArray(
						[
							A2(
							stil4m$elm_syntax$Elm$Syntax$Node$Node,
							stil4m$elm_syntax$Elm$Syntax$Range$emptyRange,
							stil4m$elm_syntax$Elm$Syntax$Exposing$TypeExpose(
								A2(stil4m$elm_syntax$Elm$Syntax$Exposing$ExposedType, 'List', elm$core$Maybe$Nothing))),
							A2(
							stil4m$elm_syntax$Elm$Syntax$Node$Node,
							stil4m$elm_syntax$Elm$Syntax$Range$emptyRange,
							stil4m$elm_syntax$Elm$Syntax$Exposing$InfixExpose('::'))
						])))),
		moduleAlias: elm$core$Maybe$Nothing,
		moduleName: A2(
			stil4m$elm_syntax$Elm$Syntax$Node$Node,
			stil4m$elm_syntax$Elm$Syntax$Range$emptyRange,
			_List_fromArray(
				['List']))
	},
		{
		exposingList: elm$core$Maybe$Just(
			A2(
				stil4m$elm_syntax$Elm$Syntax$Node$Node,
				stil4m$elm_syntax$Elm$Syntax$Range$emptyRange,
				stil4m$elm_syntax$Elm$Syntax$Exposing$Explicit(
					_List_fromArray(
						[
							A2(
							stil4m$elm_syntax$Elm$Syntax$Node$Node,
							stil4m$elm_syntax$Elm$Syntax$Range$emptyRange,
							stil4m$elm_syntax$Elm$Syntax$Exposing$TypeExpose(
								A2(
									stil4m$elm_syntax$Elm$Syntax$Exposing$ExposedType,
									'Maybe',
									elm$core$Maybe$Just(stil4m$elm_syntax$Elm$Syntax$Range$emptyRange))))
						])))),
		moduleAlias: elm$core$Maybe$Nothing,
		moduleName: A2(
			stil4m$elm_syntax$Elm$Syntax$Node$Node,
			stil4m$elm_syntax$Elm$Syntax$Range$emptyRange,
			_List_fromArray(
				['Maybe']))
	},
		{
		exposingList: elm$core$Maybe$Just(
			A2(
				stil4m$elm_syntax$Elm$Syntax$Node$Node,
				stil4m$elm_syntax$Elm$Syntax$Range$emptyRange,
				stil4m$elm_syntax$Elm$Syntax$Exposing$Explicit(
					_List_fromArray(
						[
							A2(
							stil4m$elm_syntax$Elm$Syntax$Node$Node,
							stil4m$elm_syntax$Elm$Syntax$Range$emptyRange,
							stil4m$elm_syntax$Elm$Syntax$Exposing$TypeExpose(
								A2(
									stil4m$elm_syntax$Elm$Syntax$Exposing$ExposedType,
									'Result',
									elm$core$Maybe$Just(stil4m$elm_syntax$Elm$Syntax$Range$emptyRange))))
						])))),
		moduleAlias: elm$core$Maybe$Nothing,
		moduleName: A2(
			stil4m$elm_syntax$Elm$Syntax$Node$Node,
			stil4m$elm_syntax$Elm$Syntax$Range$emptyRange,
			_List_fromArray(
				['Result']))
	},
		{
		exposingList: elm$core$Maybe$Nothing,
		moduleAlias: elm$core$Maybe$Nothing,
		moduleName: A2(
			stil4m$elm_syntax$Elm$Syntax$Node$Node,
			stil4m$elm_syntax$Elm$Syntax$Range$emptyRange,
			_List_fromArray(
				['String']))
	},
		{
		exposingList: elm$core$Maybe$Nothing,
		moduleAlias: elm$core$Maybe$Nothing,
		moduleName: A2(
			stil4m$elm_syntax$Elm$Syntax$Node$Node,
			stil4m$elm_syntax$Elm$Syntax$Range$emptyRange,
			_List_fromArray(
				['Tuple']))
	},
		{
		exposingList: elm$core$Maybe$Nothing,
		moduleAlias: elm$core$Maybe$Nothing,
		moduleName: A2(
			stil4m$elm_syntax$Elm$Syntax$Node$Node,
			stil4m$elm_syntax$Elm$Syntax$Range$emptyRange,
			_List_fromArray(
				['Debug']))
	},
		{
		exposingList: elm$core$Maybe$Just(
			A2(
				stil4m$elm_syntax$Elm$Syntax$Node$Node,
				stil4m$elm_syntax$Elm$Syntax$Range$emptyRange,
				stil4m$elm_syntax$Elm$Syntax$Exposing$Explicit(
					_List_fromArray(
						[
							A2(
							stil4m$elm_syntax$Elm$Syntax$Node$Node,
							stil4m$elm_syntax$Elm$Syntax$Range$emptyRange,
							stil4m$elm_syntax$Elm$Syntax$Exposing$TypeExpose(
								A2(stil4m$elm_syntax$Elm$Syntax$Exposing$ExposedType, 'Program', elm$core$Maybe$Nothing)))
						])))),
		moduleAlias: elm$core$Maybe$Nothing,
		moduleName: A2(
			stil4m$elm_syntax$Elm$Syntax$Node$Node,
			stil4m$elm_syntax$Elm$Syntax$Range$emptyRange,
			_List_fromArray(
				['Platform']))
	},
		{
		exposingList: elm$core$Maybe$Just(
			A2(
				stil4m$elm_syntax$Elm$Syntax$Node$Node,
				stil4m$elm_syntax$Elm$Syntax$Range$emptyRange,
				stil4m$elm_syntax$Elm$Syntax$Exposing$Explicit(
					_List_fromArray(
						[
							A2(
							stil4m$elm_syntax$Elm$Syntax$Node$Node,
							stil4m$elm_syntax$Elm$Syntax$Range$emptyRange,
							stil4m$elm_syntax$Elm$Syntax$Exposing$TypeExpose(
								A2(stil4m$elm_syntax$Elm$Syntax$Exposing$ExposedType, 'Cmd', elm$core$Maybe$Nothing))),
							A2(
							stil4m$elm_syntax$Elm$Syntax$Node$Node,
							stil4m$elm_syntax$Elm$Syntax$Range$emptyRange,
							stil4m$elm_syntax$Elm$Syntax$Exposing$InfixExpose('!'))
						])))),
		moduleAlias: elm$core$Maybe$Nothing,
		moduleName: A2(
			stil4m$elm_syntax$Elm$Syntax$Node$Node,
			stil4m$elm_syntax$Elm$Syntax$Range$emptyRange,
			_List_fromArray(
				['Platform', 'Cmd']))
	},
		{
		exposingList: elm$core$Maybe$Just(
			A2(
				stil4m$elm_syntax$Elm$Syntax$Node$Node,
				stil4m$elm_syntax$Elm$Syntax$Range$emptyRange,
				stil4m$elm_syntax$Elm$Syntax$Exposing$Explicit(
					_List_fromArray(
						[
							A2(
							stil4m$elm_syntax$Elm$Syntax$Node$Node,
							stil4m$elm_syntax$Elm$Syntax$Range$emptyRange,
							stil4m$elm_syntax$Elm$Syntax$Exposing$TypeExpose(
								A2(stil4m$elm_syntax$Elm$Syntax$Exposing$ExposedType, 'Sub', elm$core$Maybe$Nothing)))
						])))),
		moduleAlias: elm$core$Maybe$Nothing,
		moduleName: A2(
			stil4m$elm_syntax$Elm$Syntax$Node$Node,
			stil4m$elm_syntax$Elm$Syntax$Range$emptyRange,
			_List_fromArray(
				['Platform', 'Sub']))
	}
	]);
var stil4m$elm_syntax$Elm$Interface$operators = elm$core$List$filterMap(
	function (i) {
		if (i.$ === 'Operator') {
			var o = i.a;
			return elm$core$Maybe$Just(o);
		} else {
			return elm$core$Maybe$Nothing;
		}
	});
var stil4m$elm_syntax$Elm$Syntax$Exposing$operator = function (t) {
	if (t.$ === 'InfixExpose') {
		var s = t.a;
		return elm$core$Maybe$Just(s);
	} else {
		return elm$core$Maybe$Nothing;
	}
};
var stil4m$elm_syntax$Elm$Syntax$Exposing$operators = function (l) {
	return A2(elm$core$List$filterMap, stil4m$elm_syntax$Elm$Syntax$Exposing$operator, l);
};
var stil4m$elm_syntax$Elm$Processing$buildSingle = F2(
	function (imp, moduleIndex) {
		var _n0 = imp.exposingList;
		if (_n0.$ === 'Nothing') {
			return _List_Nil;
		} else {
			if (_n0.a.b.$ === 'All') {
				var _n1 = _n0.a;
				return A2(
					elm$core$List$map,
					function (x) {
						return _Utils_Tuple2(
							stil4m$elm_syntax$Elm$Syntax$Node$value(x.operator),
							x);
					},
					stil4m$elm_syntax$Elm$Interface$operators(
						A2(
							elm$core$Maybe$withDefault,
							_List_Nil,
							A2(
								elm$core$Dict$get,
								stil4m$elm_syntax$Elm$Syntax$Node$value(imp.moduleName),
								moduleIndex))));
			} else {
				var _n2 = _n0.a;
				var l = _n2.b.a;
				var selectedOperators = stil4m$elm_syntax$Elm$Syntax$Exposing$operators(
					A2(elm$core$List$map, stil4m$elm_syntax$Elm$Syntax$Node$value, l));
				return A2(
					elm$core$List$filter,
					A2(
						elm$core$Basics$composeR,
						elm$core$Tuple$first,
						function (elem) {
							return A2(elm$core$List$member, elem, selectedOperators);
						}),
					A2(
						elm$core$List$map,
						function (x) {
							return _Utils_Tuple2(
								stil4m$elm_syntax$Elm$Syntax$Node$value(x.operator),
								x);
						},
						stil4m$elm_syntax$Elm$Interface$operators(
							A2(
								elm$core$Maybe$withDefault,
								_List_Nil,
								A2(
									elm$core$Dict$get,
									stil4m$elm_syntax$Elm$Syntax$Node$value(imp.moduleName),
									moduleIndex)))));
			}
		}
	});
var stil4m$elm_syntax$Elm$RawFile$imports = function (_n0) {
	var file = _n0.a;
	return A2(elm$core$List$map, stil4m$elm_syntax$Elm$Syntax$Node$value, file.imports);
};
var stil4m$elm_syntax$Elm$Processing$tableForFile = F2(
	function (rawFile, _n0) {
		var moduleIndex = _n0.a;
		return elm$core$Dict$fromList(
			A2(
				elm$core$List$concatMap,
				function (a) {
					return A2(stil4m$elm_syntax$Elm$Processing$buildSingle, a, moduleIndex);
				},
				_Utils_ap(
					stil4m$elm_syntax$Elm$DefaultImports$defaults,
					stil4m$elm_syntax$Elm$RawFile$imports(rawFile))));
	});
var stil4m$elm_syntax$Elm$Syntax$Node$map = F2(
	function (f, _n0) {
		var r = _n0.a;
		var a = _n0.b;
		return A2(
			stil4m$elm_syntax$Elm$Syntax$Node$Node,
			r,
			f(a));
	});
var stil4m$elm_syntax$Elm$Processing$visitExpression = F3(
	function (visitor, context, expression) {
		var inner = A2(stil4m$elm_syntax$Elm$Processing$visitExpressionInner, visitor, context);
		return A3(
			A2(
				elm$core$Maybe$withDefault,
				F3(
					function (_n4, nest, expr) {
						return nest(expr);
					}),
				visitor),
			context,
			inner,
			expression);
	});
var stil4m$elm_syntax$Elm$Processing$visitExpressionInner = F3(
	function (visitor, context, _n2) {
		var range = _n2.a;
		var expression = _n2.b;
		var subVisit = A2(stil4m$elm_syntax$Elm$Processing$visitExpression, visitor, context);
		return function (newExpr) {
			return A2(stil4m$elm_syntax$Elm$Syntax$Node$Node, range, newExpr);
		}(
			function () {
				switch (expression.$) {
					case 'Application':
						var expressionList = expression.a;
						return stil4m$elm_syntax$Elm$Syntax$Expression$Application(
							A2(elm$core$List$map, subVisit, expressionList));
					case 'OperatorApplication':
						var op = expression.a;
						var dir = expression.b;
						var left = expression.c;
						var right = expression.d;
						return A4(
							stil4m$elm_syntax$Elm$Syntax$Expression$OperatorApplication,
							op,
							dir,
							subVisit(left),
							subVisit(right));
					case 'IfBlock':
						var e1 = expression.a;
						var e2 = expression.b;
						var e3 = expression.c;
						return A3(
							stil4m$elm_syntax$Elm$Syntax$Expression$IfBlock,
							subVisit(e1),
							subVisit(e2),
							subVisit(e3));
					case 'TupledExpression':
						var expressionList = expression.a;
						return stil4m$elm_syntax$Elm$Syntax$Expression$TupledExpression(
							A2(elm$core$List$map, subVisit, expressionList));
					case 'ParenthesizedExpression':
						var expr1 = expression.a;
						return stil4m$elm_syntax$Elm$Syntax$Expression$ParenthesizedExpression(
							subVisit(expr1));
					case 'LetExpression':
						var letBlock = expression.a;
						return stil4m$elm_syntax$Elm$Syntax$Expression$LetExpression(
							{
								declarations: A3(stil4m$elm_syntax$Elm$Processing$visitLetDeclarations, visitor, context, letBlock.declarations),
								expression: subVisit(letBlock.expression)
							});
					case 'CaseExpression':
						var caseBlock = expression.a;
						return stil4m$elm_syntax$Elm$Syntax$Expression$CaseExpression(
							{
								cases: A2(
									elm$core$List$map,
									elm$core$Tuple$mapSecond(subVisit),
									caseBlock.cases),
								expression: subVisit(caseBlock.expression)
							});
					case 'LambdaExpression':
						var lambda = expression.a;
						return stil4m$elm_syntax$Elm$Syntax$Expression$LambdaExpression(
							_Utils_update(
								lambda,
								{
									expression: subVisit(lambda.expression)
								}));
					case 'RecordExpr':
						var expressionStringList = expression.a;
						return stil4m$elm_syntax$Elm$Syntax$Expression$RecordExpr(
							A2(
								elm$core$List$map,
								stil4m$elm_syntax$Elm$Syntax$Node$map(
									elm$core$Tuple$mapSecond(subVisit)),
								expressionStringList));
					case 'ListExpr':
						var expressionList = expression.a;
						return stil4m$elm_syntax$Elm$Syntax$Expression$ListExpr(
							A2(elm$core$List$map, subVisit, expressionList));
					case 'RecordUpdateExpression':
						var name = expression.a;
						var updates = expression.b;
						return A2(
							stil4m$elm_syntax$Elm$Syntax$Expression$RecordUpdateExpression,
							name,
							A2(
								elm$core$List$map,
								stil4m$elm_syntax$Elm$Syntax$Node$map(
									elm$core$Tuple$mapSecond(subVisit)),
								updates));
					default:
						return expression;
				}
			}());
	});
var stil4m$elm_syntax$Elm$Processing$visitFunctionDecl = F3(
	function (visitor, context, _function) {
		var newFunctionDeclaration = A2(
			stil4m$elm_syntax$Elm$Syntax$Node$map,
			A2(stil4m$elm_syntax$Elm$Processing$visitFunctionDeclaration, visitor, context),
			_function.declaration);
		return _Utils_update(
			_function,
			{declaration: newFunctionDeclaration});
	});
var stil4m$elm_syntax$Elm$Processing$visitFunctionDeclaration = F3(
	function (visitor, context, functionDeclaration) {
		var newExpression = A3(stil4m$elm_syntax$Elm$Processing$visitExpression, visitor, context, functionDeclaration.expression);
		return _Utils_update(
			functionDeclaration,
			{expression: newExpression});
	});
var stil4m$elm_syntax$Elm$Processing$visitLetDeclaration = F3(
	function (visitor, context, _n0) {
		var range = _n0.a;
		var declaration = _n0.b;
		return A2(
			stil4m$elm_syntax$Elm$Syntax$Node$Node,
			range,
			function () {
				if (declaration.$ === 'LetFunction') {
					var _function = declaration.a;
					return stil4m$elm_syntax$Elm$Syntax$Expression$LetFunction(
						A3(stil4m$elm_syntax$Elm$Processing$visitFunctionDecl, visitor, context, _function));
				} else {
					var pattern = declaration.a;
					var expression = declaration.b;
					return A2(
						stil4m$elm_syntax$Elm$Syntax$Expression$LetDestructuring,
						pattern,
						A3(stil4m$elm_syntax$Elm$Processing$visitExpression, visitor, context, expression));
				}
			}());
	});
var stil4m$elm_syntax$Elm$Processing$visitLetDeclarations = F3(
	function (visitor, context, declarations) {
		return A2(
			elm$core$List$map,
			A2(stil4m$elm_syntax$Elm$Processing$visitLetDeclaration, visitor, context),
			declarations);
	});
var stil4m$elm_syntax$Elm$Processing$visitDeclaration = F3(
	function (visitor, context, _n0) {
		var range = _n0.a;
		var declaration = _n0.b;
		return A2(
			stil4m$elm_syntax$Elm$Syntax$Node$Node,
			range,
			function () {
				if (declaration.$ === 'FunctionDeclaration') {
					var _function = declaration.a;
					return stil4m$elm_syntax$Elm$Syntax$Declaration$FunctionDeclaration(
						A3(stil4m$elm_syntax$Elm$Processing$visitFunctionDecl, visitor, context, _function));
				} else {
					return declaration;
				}
			}());
	});
var stil4m$elm_syntax$Elm$Processing$visitDeclarations = F3(
	function (visitor, context, declarations) {
		return A2(
			elm$core$List$map,
			A2(stil4m$elm_syntax$Elm$Processing$visitDeclaration, visitor, context),
			declarations);
	});
var stil4m$elm_syntax$Elm$Processing$visit = F3(
	function (visitor, context, file) {
		var newDeclarations = A3(stil4m$elm_syntax$Elm$Processing$visitDeclarations, visitor, context, file.declarations);
		return _Utils_update(
			file,
			{declarations: newDeclarations});
	});
var stil4m$elm_syntax$Elm$Inspector$Post = function (a) {
	return {$: 'Post', a: a};
};
var stil4m$elm_syntax$Elm$Inspector$Continue = {$: 'Continue'};
var stil4m$elm_syntax$Elm$Inspector$defaultConfig = {onCase: stil4m$elm_syntax$Elm$Inspector$Continue, onDestructuring: stil4m$elm_syntax$Elm$Inspector$Continue, onExpression: stil4m$elm_syntax$Elm$Inspector$Continue, onFile: stil4m$elm_syntax$Elm$Inspector$Continue, onFunction: stil4m$elm_syntax$Elm$Inspector$Continue, onFunctionOrValue: stil4m$elm_syntax$Elm$Inspector$Continue, onImport: stil4m$elm_syntax$Elm$Inspector$Continue, onInfixDeclaration: stil4m$elm_syntax$Elm$Inspector$Continue, onLambda: stil4m$elm_syntax$Elm$Inspector$Continue, onLetBlock: stil4m$elm_syntax$Elm$Inspector$Continue, onOperatorApplication: stil4m$elm_syntax$Elm$Inspector$Continue, onPortDeclaration: stil4m$elm_syntax$Elm$Inspector$Continue, onRecordAccess: stil4m$elm_syntax$Elm$Inspector$Continue, onRecordUpdate: stil4m$elm_syntax$Elm$Inspector$Continue, onSignature: stil4m$elm_syntax$Elm$Inspector$Continue, onType: stil4m$elm_syntax$Elm$Inspector$Continue, onTypeAlias: stil4m$elm_syntax$Elm$Inspector$Continue, onTypeAnnotation: stil4m$elm_syntax$Elm$Inspector$Continue};
var stil4m$elm_syntax$Elm$Inspector$actionLambda = function (act) {
	switch (act.$) {
		case 'Skip':
			return F3(
				function (_n1, _n2, c) {
					return c;
				});
		case 'Continue':
			return F3(
				function (f, _n3, c) {
					return f(c);
				});
		case 'Pre':
			var g = act.a;
			return F3(
				function (f, x, c) {
					return f(
						A2(g, x, c));
				});
		case 'Post':
			var g = act.a;
			return F3(
				function (f, x, c) {
					return A2(
						g,
						x,
						f(c));
				});
		default:
			var g = act.a;
			return F3(
				function (f, x, c) {
					return A3(g, f, x, c);
				});
	}
};
var stil4m$elm_syntax$Elm$Inspector$inspectTypeAnnotation = F3(
	function (config, typeAnnotation, context) {
		return A4(
			stil4m$elm_syntax$Elm$Inspector$actionLambda,
			config.onTypeAnnotation,
			A2(stil4m$elm_syntax$Elm$Inspector$inspectTypeAnnotationInner, config, typeAnnotation),
			typeAnnotation,
			context);
	});
var stil4m$elm_syntax$Elm$Inspector$inspectTypeAnnotationInner = F3(
	function (config, _n0, context) {
		var typeRefence = _n0.b;
		switch (typeRefence.$) {
			case 'Typed':
				var typeArgs = typeRefence.b;
				return A3(
					elm$core$List$foldl,
					stil4m$elm_syntax$Elm$Inspector$inspectTypeAnnotation(config),
					context,
					typeArgs);
			case 'Tupled':
				var typeAnnotations = typeRefence.a;
				return A3(
					elm$core$List$foldl,
					stil4m$elm_syntax$Elm$Inspector$inspectTypeAnnotation(config),
					context,
					typeAnnotations);
			case 'Record':
				var recordDefinition = typeRefence.a;
				return A3(
					elm$core$List$foldl,
					stil4m$elm_syntax$Elm$Inspector$inspectTypeAnnotation(config),
					context,
					A2(
						elm$core$List$map,
						A2(elm$core$Basics$composeR, stil4m$elm_syntax$Elm$Syntax$Node$value, elm$core$Tuple$second),
						recordDefinition));
			case 'GenericRecord':
				var recordDefinition = typeRefence.b;
				return A3(
					elm$core$List$foldl,
					stil4m$elm_syntax$Elm$Inspector$inspectTypeAnnotation(config),
					context,
					A2(
						elm$core$List$map,
						A2(elm$core$Basics$composeR, stil4m$elm_syntax$Elm$Syntax$Node$value, elm$core$Tuple$second),
						stil4m$elm_syntax$Elm$Syntax$Node$value(recordDefinition)));
			case 'FunctionTypeAnnotation':
				var left = typeRefence.a;
				var right = typeRefence.b;
				return A3(
					elm$core$List$foldl,
					stil4m$elm_syntax$Elm$Inspector$inspectTypeAnnotation(config),
					context,
					_List_fromArray(
						[left, right]));
			case 'Unit':
				return context;
			default:
				return context;
		}
	});
var stil4m$elm_syntax$Elm$Inspector$inspectSignature = F3(
	function (config, node, context) {
		var signature = node.b;
		return A4(
			stil4m$elm_syntax$Elm$Inspector$actionLambda,
			config.onSignature,
			A2(stil4m$elm_syntax$Elm$Inspector$inspectTypeAnnotation, config, signature.typeAnnotation),
			node,
			context);
	});
var stil4m$elm_syntax$Elm$Inspector$inspectCase = F3(
	function (config, caze, context) {
		return A4(
			stil4m$elm_syntax$Elm$Inspector$actionLambda,
			config.onCase,
			A2(stil4m$elm_syntax$Elm$Inspector$inspectExpression, config, caze.b),
			caze,
			context);
	});
var stil4m$elm_syntax$Elm$Inspector$inspectDestructuring = F3(
	function (config, destructuring, context) {
		return A4(
			stil4m$elm_syntax$Elm$Inspector$actionLambda,
			config.onDestructuring,
			function (c) {
				return A3(
					stil4m$elm_syntax$Elm$Inspector$inspectExpression,
					config,
					stil4m$elm_syntax$Elm$Syntax$Node$value(destructuring).b,
					c);
			},
			destructuring,
			context);
	});
var stil4m$elm_syntax$Elm$Inspector$inspectExpression = F3(
	function (config, node, context) {
		var expression = node.b;
		return A4(
			stil4m$elm_syntax$Elm$Inspector$actionLambda,
			config.onExpression,
			A2(stil4m$elm_syntax$Elm$Inspector$inspectInnerExpression, config, expression),
			node,
			context);
	});
var stil4m$elm_syntax$Elm$Inspector$inspectFunction = F3(
	function (config, node, context) {
		var _function = node.b;
		return A4(
			stil4m$elm_syntax$Elm$Inspector$actionLambda,
			config.onFunction,
			A2(
				elm$core$Basics$composeR,
				A2(
					stil4m$elm_syntax$Elm$Inspector$inspectExpression,
					config,
					stil4m$elm_syntax$Elm$Syntax$Node$value(_function.declaration).expression),
				A2(
					elm$core$Maybe$withDefault,
					elm$core$Basics$identity,
					A2(
						elm$core$Maybe$map,
						stil4m$elm_syntax$Elm$Inspector$inspectSignature(config),
						_function.signature))),
			node,
			context);
	});
var stil4m$elm_syntax$Elm$Inspector$inspectInnerExpression = F3(
	function (config, expression, context) {
		switch (expression.$) {
			case 'UnitExpr':
				return context;
			case 'FunctionOrValue':
				var moduleName = expression.a;
				var functionOrVal = expression.b;
				return A4(
					stil4m$elm_syntax$Elm$Inspector$actionLambda,
					config.onFunctionOrValue,
					elm$core$Basics$identity,
					_Utils_Tuple2(moduleName, functionOrVal),
					context);
			case 'PrefixOperator':
				return context;
			case 'Operator':
				return context;
			case 'Hex':
				return context;
			case 'Integer':
				return context;
			case 'Floatable':
				return context;
			case 'Negation':
				var x = expression.a;
				return A3(stil4m$elm_syntax$Elm$Inspector$inspectExpression, config, x, context);
			case 'Literal':
				return context;
			case 'CharLiteral':
				return context;
			case 'RecordAccess':
				var ex1 = expression.a;
				var key = expression.b;
				return A4(
					stil4m$elm_syntax$Elm$Inspector$actionLambda,
					config.onRecordAccess,
					A2(stil4m$elm_syntax$Elm$Inspector$inspectExpression, config, ex1),
					_Utils_Tuple2(ex1, key),
					context);
			case 'RecordAccessFunction':
				return context;
			case 'GLSLExpression':
				return context;
			case 'Application':
				var expressionList = expression.a;
				return A3(
					elm$core$List$foldl,
					stil4m$elm_syntax$Elm$Inspector$inspectExpression(config),
					context,
					expressionList);
			case 'OperatorApplication':
				var op = expression.a;
				var dir = expression.b;
				var left = expression.c;
				var right = expression.d;
				return A4(
					stil4m$elm_syntax$Elm$Inspector$actionLambda,
					config.onOperatorApplication,
					function (base) {
						return A3(
							elm$core$List$foldl,
							stil4m$elm_syntax$Elm$Inspector$inspectExpression(config),
							base,
							_List_fromArray(
								[left, right]));
					},
					{direction: dir, left: left, operator: op, right: right},
					context);
			case 'IfBlock':
				var e1 = expression.a;
				var e2 = expression.b;
				var e3 = expression.c;
				return A3(
					elm$core$List$foldl,
					stil4m$elm_syntax$Elm$Inspector$inspectExpression(config),
					context,
					_List_fromArray(
						[e1, e2, e3]));
			case 'TupledExpression':
				var expressionList = expression.a;
				return A3(
					elm$core$List$foldl,
					stil4m$elm_syntax$Elm$Inspector$inspectExpression(config),
					context,
					expressionList);
			case 'ParenthesizedExpression':
				var inner = expression.a;
				return A3(stil4m$elm_syntax$Elm$Inspector$inspectExpression, config, inner, context);
			case 'LetExpression':
				var letBlock = expression.a;
				var next = A2(
					elm$core$Basics$composeR,
					A2(stil4m$elm_syntax$Elm$Inspector$inspectLetDeclarations, config, letBlock.declarations),
					A2(stil4m$elm_syntax$Elm$Inspector$inspectExpression, config, letBlock.expression));
				return A4(stil4m$elm_syntax$Elm$Inspector$actionLambda, config.onLetBlock, next, letBlock, context);
			case 'CaseExpression':
				var caseBlock = expression.a;
				var context2 = A3(stil4m$elm_syntax$Elm$Inspector$inspectExpression, config, caseBlock.expression, context);
				var context3 = A3(
					elm$core$List$foldl,
					F2(
						function (a, b) {
							return A3(stil4m$elm_syntax$Elm$Inspector$inspectCase, config, a, b);
						}),
					context2,
					caseBlock.cases);
				return context3;
			case 'LambdaExpression':
				var lambda = expression.a;
				return A4(
					stil4m$elm_syntax$Elm$Inspector$actionLambda,
					config.onLambda,
					A2(stil4m$elm_syntax$Elm$Inspector$inspectExpression, config, lambda.expression),
					lambda,
					context);
			case 'ListExpr':
				var expressionList = expression.a;
				return A3(
					elm$core$List$foldl,
					stil4m$elm_syntax$Elm$Inspector$inspectExpression(config),
					context,
					expressionList);
			case 'RecordExpr':
				var expressionStringList = expression.a;
				return A3(
					elm$core$List$foldl,
					F2(
						function (a, b) {
							return A3(
								stil4m$elm_syntax$Elm$Inspector$inspectExpression,
								config,
								stil4m$elm_syntax$Elm$Syntax$Node$value(a).b,
								b);
						}),
					context,
					expressionStringList);
			default:
				var name = expression.a;
				var updates = expression.b;
				return A4(
					stil4m$elm_syntax$Elm$Inspector$actionLambda,
					config.onRecordUpdate,
					function (c) {
						return A3(
							elm$core$List$foldl,
							F2(
								function (a, b) {
									return A3(
										stil4m$elm_syntax$Elm$Inspector$inspectExpression,
										config,
										stil4m$elm_syntax$Elm$Syntax$Node$value(a).b,
										b);
								}),
							c,
							updates);
					},
					_Utils_Tuple2(name, updates),
					context);
		}
	});
var stil4m$elm_syntax$Elm$Inspector$inspectLetDeclaration = F3(
	function (config, _n0, context) {
		var range = _n0.a;
		var declaration = _n0.b;
		if (declaration.$ === 'LetFunction') {
			var _function = declaration.a;
			return A3(
				stil4m$elm_syntax$Elm$Inspector$inspectFunction,
				config,
				A2(stil4m$elm_syntax$Elm$Syntax$Node$Node, range, _function),
				context);
		} else {
			var pattern = declaration.a;
			var expression = declaration.b;
			return A3(
				stil4m$elm_syntax$Elm$Inspector$inspectDestructuring,
				config,
				A2(
					stil4m$elm_syntax$Elm$Syntax$Node$Node,
					range,
					_Utils_Tuple2(pattern, expression)),
				context);
		}
	});
var stil4m$elm_syntax$Elm$Inspector$inspectLetDeclarations = F3(
	function (config, declarations, context) {
		return A3(
			elm$core$List$foldl,
			stil4m$elm_syntax$Elm$Inspector$inspectLetDeclaration(config),
			context,
			declarations);
	});
var stil4m$elm_syntax$Elm$Inspector$inspectPortDeclaration = F3(
	function (config, signature, context) {
		return A4(
			stil4m$elm_syntax$Elm$Inspector$actionLambda,
			config.onPortDeclaration,
			A2(stil4m$elm_syntax$Elm$Inspector$inspectSignature, config, signature),
			signature,
			context);
	});
var stil4m$elm_syntax$Elm$Inspector$inspectValueConstructor = F3(
	function (config, _n0, context) {
		var valueConstructor = _n0.b;
		return A3(
			elm$core$List$foldl,
			stil4m$elm_syntax$Elm$Inspector$inspectTypeAnnotation(config),
			context,
			valueConstructor._arguments);
	});
var stil4m$elm_syntax$Elm$Inspector$inspectTypeInner = F3(
	function (config, typeDecl, context) {
		return A3(
			elm$core$List$foldl,
			stil4m$elm_syntax$Elm$Inspector$inspectValueConstructor(config),
			context,
			typeDecl.constructors);
	});
var stil4m$elm_syntax$Elm$Inspector$inspectType = F3(
	function (config, tipe, context) {
		return A4(
			stil4m$elm_syntax$Elm$Inspector$actionLambda,
			config.onType,
			A2(
				stil4m$elm_syntax$Elm$Inspector$inspectTypeInner,
				config,
				stil4m$elm_syntax$Elm$Syntax$Node$value(tipe)),
			tipe,
			context);
	});
var stil4m$elm_syntax$Elm$Inspector$inspectTypeAlias = F3(
	function (config, pair, context) {
		var typeAlias = pair.b;
		return A4(
			stil4m$elm_syntax$Elm$Inspector$actionLambda,
			config.onTypeAlias,
			A2(stil4m$elm_syntax$Elm$Inspector$inspectTypeAnnotation, config, typeAlias.typeAnnotation),
			pair,
			context);
	});
var stil4m$elm_syntax$Elm$Inspector$inspectDeclaration = F3(
	function (config, _n0, context) {
		var r = _n0.a;
		var declaration = _n0.b;
		switch (declaration.$) {
			case 'FunctionDeclaration':
				var _function = declaration.a;
				return A3(
					stil4m$elm_syntax$Elm$Inspector$inspectFunction,
					config,
					A2(stil4m$elm_syntax$Elm$Syntax$Node$Node, r, _function),
					context);
			case 'AliasDeclaration':
				var typeAlias = declaration.a;
				return A3(
					stil4m$elm_syntax$Elm$Inspector$inspectTypeAlias,
					config,
					A2(stil4m$elm_syntax$Elm$Syntax$Node$Node, r, typeAlias),
					context);
			case 'CustomTypeDeclaration':
				var typeDecl = declaration.a;
				return A3(
					stil4m$elm_syntax$Elm$Inspector$inspectType,
					config,
					A2(stil4m$elm_syntax$Elm$Syntax$Node$Node, r, typeDecl),
					context);
			case 'PortDeclaration':
				var signature = declaration.a;
				return A3(
					stil4m$elm_syntax$Elm$Inspector$inspectPortDeclaration,
					config,
					A2(stil4m$elm_syntax$Elm$Syntax$Node$Node, r, signature),
					context);
			case 'InfixDeclaration':
				var inf = declaration.a;
				return A4(
					stil4m$elm_syntax$Elm$Inspector$actionLambda,
					config.onInfixDeclaration,
					elm$core$Basics$identity,
					A2(stil4m$elm_syntax$Elm$Syntax$Node$Node, r, inf),
					context);
			default:
				var pattern = declaration.a;
				var expresion = declaration.b;
				return A3(
					stil4m$elm_syntax$Elm$Inspector$inspectDestructuring,
					config,
					A2(
						stil4m$elm_syntax$Elm$Syntax$Node$Node,
						r,
						_Utils_Tuple2(pattern, expresion)),
					context);
		}
	});
var stil4m$elm_syntax$Elm$Inspector$inspectDeclarations = F3(
	function (config, declarations, context) {
		return A3(
			elm$core$List$foldl,
			stil4m$elm_syntax$Elm$Inspector$inspectDeclaration(config),
			context,
			declarations);
	});
var stil4m$elm_syntax$Elm$Inspector$inspectImport = F3(
	function (config, imp, context) {
		return A4(stil4m$elm_syntax$Elm$Inspector$actionLambda, config.onImport, elm$core$Basics$identity, imp, context);
	});
var stil4m$elm_syntax$Elm$Inspector$inspectImports = F3(
	function (config, imports, context) {
		return A3(
			elm$core$List$foldl,
			stil4m$elm_syntax$Elm$Inspector$inspectImport(config),
			context,
			imports);
	});
var stil4m$elm_syntax$Elm$Inspector$inspect = F3(
	function (config, file, context) {
		return A4(
			stil4m$elm_syntax$Elm$Inspector$actionLambda,
			config.onFile,
			A2(
				elm$core$Basics$composeR,
				A2(stil4m$elm_syntax$Elm$Inspector$inspectImports, config, file.imports),
				A2(stil4m$elm_syntax$Elm$Inspector$inspectDeclarations, config, file.declarations)),
			file,
			context);
	});
var stil4m$elm_syntax$Elm$Processing$Documentation$isDocumentationForRange = F2(
	function (range, _n0) {
		var commentRange = _n0.a;
		var commentText = _n0.b;
		if (A2(elm$core$String$startsWith, '{-|', commentText)) {
			var functionStartRow = range.start.row;
			return _Utils_eq(commentRange.end.row + 1, functionStartRow);
		} else {
			return false;
		}
	});
var stil4m$elm_syntax$Elm$Processing$Documentation$replaceDeclaration = F2(
	function (_n0, _n1) {
		var r1 = _n0.a;
		var _new = _n0.b;
		var r2 = _n1.a;
		var old = _n1.b;
		return A2(
			stil4m$elm_syntax$Elm$Syntax$Node$Node,
			r2,
			_Utils_eq(r1, r2) ? _new : old);
	});
var stil4m$elm_syntax$Elm$Processing$Documentation$onFunction = F2(
	function (_n0, file) {
		var functionRange = _n0.a;
		var _function = _n0.b;
		var docs = A2(
			elm$core$List$filter,
			stil4m$elm_syntax$Elm$Processing$Documentation$isDocumentationForRange(functionRange),
			file.comments);
		var _n1 = elm$core$List$head(docs);
		if (_n1.$ === 'Just') {
			var doc = _n1.a;
			var docRange = doc.a;
			var docString = doc.b;
			return _Utils_update(
				file,
				{
					comments: A2(
						elm$core$List$filter,
						elm$core$Basics$neq(doc),
						file.comments),
					declarations: A2(
						elm$core$List$map,
						stil4m$elm_syntax$Elm$Processing$Documentation$replaceDeclaration(
							A2(
								stil4m$elm_syntax$Elm$Syntax$Node$Node,
								functionRange,
								stil4m$elm_syntax$Elm$Syntax$Declaration$FunctionDeclaration(
									_Utils_update(
										_function,
										{
											documentation: elm$core$Maybe$Just(
												A2(stil4m$elm_syntax$Elm$Syntax$Node$Node, docRange, docString))
										})))),
						file.declarations)
				});
		} else {
			return file;
		}
	});
var stil4m$elm_syntax$Elm$Processing$Documentation$onType = F2(
	function (_n0, file) {
		var r = _n0.a;
		var customType = _n0.b;
		var docs = A2(
			elm$core$List$filter,
			stil4m$elm_syntax$Elm$Processing$Documentation$isDocumentationForRange(r),
			file.comments);
		var _n1 = elm$core$List$head(docs);
		if (_n1.$ === 'Just') {
			var doc = _n1.a;
			var docRange = doc.a;
			var docString = doc.b;
			return _Utils_update(
				file,
				{
					comments: A2(
						elm$core$List$filter,
						elm$core$Basics$neq(doc),
						file.comments),
					declarations: A2(
						elm$core$List$map,
						stil4m$elm_syntax$Elm$Processing$Documentation$replaceDeclaration(
							A2(
								stil4m$elm_syntax$Elm$Syntax$Node$Node,
								r,
								stil4m$elm_syntax$Elm$Syntax$Declaration$CustomTypeDeclaration(
									_Utils_update(
										customType,
										{
											documentation: elm$core$Maybe$Just(
												A2(stil4m$elm_syntax$Elm$Syntax$Node$Node, docRange, docString))
										})))),
						file.declarations)
				});
		} else {
			return file;
		}
	});
var stil4m$elm_syntax$Elm$Processing$Documentation$onTypeAlias = F2(
	function (_n0, file) {
		var r = _n0.a;
		var typeAlias = _n0.b;
		var docs = A2(
			elm$core$List$filter,
			stil4m$elm_syntax$Elm$Processing$Documentation$isDocumentationForRange(r),
			file.comments);
		var _n1 = elm$core$List$head(docs);
		if (_n1.$ === 'Just') {
			var doc = _n1.a;
			var docRange = doc.a;
			var docString = doc.b;
			return _Utils_update(
				file,
				{
					comments: A2(
						elm$core$List$filter,
						elm$core$Basics$neq(doc),
						file.comments),
					declarations: A2(
						elm$core$List$map,
						stil4m$elm_syntax$Elm$Processing$Documentation$replaceDeclaration(
							A2(
								stil4m$elm_syntax$Elm$Syntax$Node$Node,
								r,
								stil4m$elm_syntax$Elm$Syntax$Declaration$AliasDeclaration(
									_Utils_update(
										typeAlias,
										{
											documentation: elm$core$Maybe$Just(
												A2(stil4m$elm_syntax$Elm$Syntax$Node$Node, docRange, docString))
										})))),
						file.declarations)
				});
		} else {
			return file;
		}
	});
var stil4m$elm_syntax$Elm$Processing$Documentation$postProcess = function (file) {
	return A3(
		stil4m$elm_syntax$Elm$Inspector$inspect,
		_Utils_update(
			stil4m$elm_syntax$Elm$Inspector$defaultConfig,
			{
				onFunction: stil4m$elm_syntax$Elm$Inspector$Post(stil4m$elm_syntax$Elm$Processing$Documentation$onFunction),
				onType: stil4m$elm_syntax$Elm$Inspector$Post(stil4m$elm_syntax$Elm$Processing$Documentation$onType),
				onTypeAlias: stil4m$elm_syntax$Elm$Inspector$Post(stil4m$elm_syntax$Elm$Processing$Documentation$onTypeAlias)
			}),
		file,
		file);
};
var stil4m$elm_syntax$Elm$Processing$process = F2(
	function (processContext, rawFile) {
		var file = rawFile.a;
		var table = A2(stil4m$elm_syntax$Elm$Processing$tableForFile, rawFile, processContext);
		var operatorFixed = A3(
			stil4m$elm_syntax$Elm$Processing$visit,
			elm$core$Maybe$Just(
				F3(
					function (context, inner, expression) {
						return inner(
							function () {
								if (expression.b.$ === 'Application') {
									var r = expression.a;
									var args = expression.b.a;
									return A2(
										stil4m$elm_syntax$Elm$Syntax$Node$Node,
										r,
										A2(stil4m$elm_syntax$Elm$Processing$fixApplication, context, args));
								} else {
									return expression;
								}
							}());
					})),
			table,
			file);
		var documentationFixed = stil4m$elm_syntax$Elm$Processing$Documentation$postProcess(operatorFixed);
		return documentationFixed;
	});
var elm$core$Bitwise$and = _Bitwise_and;
var elm$core$Bitwise$shiftRightBy = _Bitwise_shiftRightBy;
var elm$core$String$repeatHelp = F3(
	function (n, chunk, result) {
		return (n <= 0) ? result : A3(
			elm$core$String$repeatHelp,
			n >> 1,
			_Utils_ap(chunk, chunk),
			(!(n & 1)) ? result : _Utils_ap(result, chunk));
	});
var elm$core$String$repeat = F2(
	function (n, chunk) {
		return A3(elm$core$String$repeatHelp, n, chunk, '');
	});
var stil4m$structured_writer$StructuredWriter$asIndent = function (amount) {
	return A2(elm$core$String$repeat, amount, ' ');
};
var stil4m$structured_writer$StructuredWriter$writeIndented = F2(
	function (indent_, w) {
		switch (w.$) {
			case 'Sep':
				var _n1 = w.a;
				var pre = _n1.a;
				var sep = _n1.b;
				var post = _n1.c;
				var differentLines = w.b;
				var items = w.c;
				var seperator = differentLines ? ('\n' + (stil4m$structured_writer$StructuredWriter$asIndent(indent_) + sep)) : sep;
				return elm$core$String$concat(
					_List_fromArray(
						[
							pre,
							A2(
							elm$core$String$join,
							seperator,
							A2(
								elm$core$List$map,
								A2(
									elm$core$Basics$composeR,
									elm$core$Basics$identity,
									stil4m$structured_writer$StructuredWriter$writeIndented(indent_)),
								items)),
							post
						]));
			case 'Breaked':
				var items = w.a;
				return A2(
					elm$core$String$join,
					'\n' + stil4m$structured_writer$StructuredWriter$asIndent(indent_),
					A2(
						elm$core$List$concatMap,
						A2(
							elm$core$Basics$composeR,
							stil4m$structured_writer$StructuredWriter$writeIndented(0),
							elm$core$String$split('\n')),
						items));
			case 'Str':
				var s = w.a;
				return s;
			case 'Indent':
				var n = w.a;
				var next = w.b;
				return _Utils_ap(
					stil4m$structured_writer$StructuredWriter$asIndent(n + indent_),
					A2(stil4m$structured_writer$StructuredWriter$writeIndented, n + indent_, next));
			case 'Spaced':
				var items = w.a;
				return A2(
					elm$core$String$join,
					' ',
					A2(
						elm$core$List$map,
						stil4m$structured_writer$StructuredWriter$writeIndented(indent_),
						items));
			case 'Joined':
				var items = w.a;
				return elm$core$String$concat(
					A2(
						elm$core$List$map,
						stil4m$structured_writer$StructuredWriter$writeIndented(indent_),
						items));
			default:
				var x = w.a;
				var y = w.b;
				return _Utils_ap(
					A2(stil4m$structured_writer$StructuredWriter$writeIndented, indent_, x),
					A2(stil4m$structured_writer$StructuredWriter$writeIndented, indent_, y));
		}
	});
var stil4m$structured_writer$StructuredWriter$write = stil4m$structured_writer$StructuredWriter$writeIndented(0);
var stil4m$elm_syntax$Elm$Writer$write = stil4m$structured_writer$StructuredWriter$write;
var elm$core$String$fromFloat = _String_fromNumber;
var elm$core$Basics$modBy = _Basics_modBy;
var rtfeldman$elm_hex$Hex$unsafeToDigit = function (num) {
	unsafeToDigit:
	while (true) {
		switch (num) {
			case 0:
				return _Utils_chr('0');
			case 1:
				return _Utils_chr('1');
			case 2:
				return _Utils_chr('2');
			case 3:
				return _Utils_chr('3');
			case 4:
				return _Utils_chr('4');
			case 5:
				return _Utils_chr('5');
			case 6:
				return _Utils_chr('6');
			case 7:
				return _Utils_chr('7');
			case 8:
				return _Utils_chr('8');
			case 9:
				return _Utils_chr('9');
			case 10:
				return _Utils_chr('a');
			case 11:
				return _Utils_chr('b');
			case 12:
				return _Utils_chr('c');
			case 13:
				return _Utils_chr('d');
			case 14:
				return _Utils_chr('e');
			case 15:
				return _Utils_chr('f');
			default:
				var $temp$num = num;
				num = $temp$num;
				continue unsafeToDigit;
		}
	}
};
var rtfeldman$elm_hex$Hex$unsafePositiveToDigits = F2(
	function (digits, num) {
		unsafePositiveToDigits:
		while (true) {
			if (num < 16) {
				return A2(
					elm$core$List$cons,
					rtfeldman$elm_hex$Hex$unsafeToDigit(num),
					digits);
			} else {
				var $temp$digits = A2(
					elm$core$List$cons,
					rtfeldman$elm_hex$Hex$unsafeToDigit(
						A2(elm$core$Basics$modBy, 16, num)),
					digits),
					$temp$num = (num / 16) | 0;
				digits = $temp$digits;
				num = $temp$num;
				continue unsafePositiveToDigits;
			}
		}
	});
var rtfeldman$elm_hex$Hex$toString = function (num) {
	return elm$core$String$fromList(
		(num < 0) ? A2(
			elm$core$List$cons,
			_Utils_chr('-'),
			A2(rtfeldman$elm_hex$Hex$unsafePositiveToDigits, _List_Nil, -num)) : A2(rtfeldman$elm_hex$Hex$unsafePositiveToDigits, _List_Nil, num));
};
var elm_community$list_extra$List$Extra$uniqueHelp = F4(
	function (f, existing, remaining, accumulator) {
		uniqueHelp:
		while (true) {
			if (!remaining.b) {
				return elm$core$List$reverse(accumulator);
			} else {
				var first = remaining.a;
				var rest = remaining.b;
				var computedFirst = f(first);
				if (A2(elm$core$Set$member, computedFirst, existing)) {
					var $temp$f = f,
						$temp$existing = existing,
						$temp$remaining = rest,
						$temp$accumulator = accumulator;
					f = $temp$f;
					existing = $temp$existing;
					remaining = $temp$remaining;
					accumulator = $temp$accumulator;
					continue uniqueHelp;
				} else {
					var $temp$f = f,
						$temp$existing = A2(elm$core$Set$insert, computedFirst, existing),
						$temp$remaining = rest,
						$temp$accumulator = A2(elm$core$List$cons, first, accumulator);
					f = $temp$f;
					existing = $temp$existing;
					remaining = $temp$remaining;
					accumulator = $temp$accumulator;
					continue uniqueHelp;
				}
			}
		}
	});
var elm_community$list_extra$List$Extra$unique = function (list) {
	return A4(elm_community$list_extra$List$Extra$uniqueHelp, elm$core$Basics$identity, elm$core$Set$empty, list, _List_Nil);
};
var stil4m$elm_syntax$Elm$Writer$startOnDifferentLines = function (xs) {
	return elm$core$List$length(
		elm_community$list_extra$List$Extra$unique(
			A2(
				elm$core$List$map,
				A2(
					elm$core$Basics$composeR,
					function ($) {
						return $.start;
					},
					function ($) {
						return $.row;
					}),
				xs))) > 1;
};
var stil4m$structured_writer$StructuredWriter$Str = function (a) {
	return {$: 'Str', a: a};
};
var stil4m$structured_writer$StructuredWriter$string = stil4m$structured_writer$StructuredWriter$Str;
var stil4m$elm_syntax$Elm$Writer$writeDocumentation = A2(elm$core$Basics$composeR, stil4m$elm_syntax$Elm$Syntax$Node$value, stil4m$structured_writer$StructuredWriter$string);
var stil4m$elm_syntax$Elm$Writer$writeModuleName = function (moduleName) {
	return stil4m$structured_writer$StructuredWriter$string(
		A2(elm$core$String$join, '.', moduleName));
};
var stil4m$structured_writer$StructuredWriter$Joined = function (a) {
	return {$: 'Joined', a: a};
};
var stil4m$structured_writer$StructuredWriter$join = stil4m$structured_writer$StructuredWriter$Joined;
var stil4m$elm_syntax$Elm$Writer$writeQualifiedNameRef = function (_n0) {
	var moduleName = _n0.moduleName;
	var name = _n0.name;
	if (!moduleName.b) {
		return stil4m$structured_writer$StructuredWriter$string(name);
	} else {
		return stil4m$structured_writer$StructuredWriter$join(
			_List_fromArray(
				[
					stil4m$elm_syntax$Elm$Writer$writeModuleName(moduleName),
					stil4m$structured_writer$StructuredWriter$string('.'),
					stil4m$structured_writer$StructuredWriter$string(name)
				]));
	}
};
var stil4m$structured_writer$StructuredWriter$Sep = F3(
	function (a, b, c) {
		return {$: 'Sep', a: a, b: b, c: c};
	});
var stil4m$structured_writer$StructuredWriter$bracesComma = stil4m$structured_writer$StructuredWriter$Sep(
	_Utils_Tuple3('{', ', ', '}'));
var stil4m$structured_writer$StructuredWriter$bracketsComma = stil4m$structured_writer$StructuredWriter$Sep(
	_Utils_Tuple3('[', ', ', ']'));
var stil4m$structured_writer$StructuredWriter$parensComma = stil4m$structured_writer$StructuredWriter$Sep(
	_Utils_Tuple3('(', ', ', ')'));
var stil4m$structured_writer$StructuredWriter$Spaced = function (a) {
	return {$: 'Spaced', a: a};
};
var stil4m$structured_writer$StructuredWriter$spaced = stil4m$structured_writer$StructuredWriter$Spaced;
var stil4m$elm_syntax$Elm$Writer$writePattern = function (_n0) {
	var p = _n0.b;
	switch (p.$) {
		case 'AllPattern':
			return stil4m$structured_writer$StructuredWriter$string('_');
		case 'UnitPattern':
			return stil4m$structured_writer$StructuredWriter$string('()');
		case 'CharPattern':
			var c = p.a;
			return stil4m$structured_writer$StructuredWriter$string(
				'\'' + (elm$core$String$fromList(
					_List_fromArray(
						[c])) + '\''));
		case 'StringPattern':
			var s = p.a;
			return stil4m$structured_writer$StructuredWriter$string(s);
		case 'HexPattern':
			var h = p.a;
			return stil4m$structured_writer$StructuredWriter$join(
				_List_fromArray(
					[
						stil4m$structured_writer$StructuredWriter$string('0x'),
						stil4m$structured_writer$StructuredWriter$string(
						rtfeldman$elm_hex$Hex$toString(h))
					]));
		case 'IntPattern':
			var i = p.a;
			return stil4m$structured_writer$StructuredWriter$string(
				elm$core$String$fromInt(i));
		case 'FloatPattern':
			var f = p.a;
			return stil4m$structured_writer$StructuredWriter$string(
				elm$core$String$fromFloat(f));
		case 'TuplePattern':
			var inner = p.a;
			return A2(
				stil4m$structured_writer$StructuredWriter$parensComma,
				false,
				A2(elm$core$List$map, stil4m$elm_syntax$Elm$Writer$writePattern, inner));
		case 'RecordPattern':
			var inner = p.a;
			return A2(
				stil4m$structured_writer$StructuredWriter$bracesComma,
				false,
				A2(
					elm$core$List$map,
					A2(elm$core$Basics$composeR, stil4m$elm_syntax$Elm$Syntax$Node$value, stil4m$structured_writer$StructuredWriter$string),
					inner));
		case 'UnConsPattern':
			var left = p.a;
			var right = p.b;
			return stil4m$structured_writer$StructuredWriter$spaced(
				_List_fromArray(
					[
						stil4m$elm_syntax$Elm$Writer$writePattern(left),
						stil4m$structured_writer$StructuredWriter$string('::'),
						stil4m$elm_syntax$Elm$Writer$writePattern(right)
					]));
		case 'ListPattern':
			var inner = p.a;
			return A2(
				stil4m$structured_writer$StructuredWriter$bracketsComma,
				false,
				A2(elm$core$List$map, stil4m$elm_syntax$Elm$Writer$writePattern, inner));
		case 'VarPattern':
			var _var = p.a;
			return stil4m$structured_writer$StructuredWriter$string(_var);
		case 'NamedPattern':
			var qnr = p.a;
			var others = p.b;
			return stil4m$structured_writer$StructuredWriter$spaced(
				_List_fromArray(
					[
						stil4m$elm_syntax$Elm$Writer$writeQualifiedNameRef(qnr),
						stil4m$structured_writer$StructuredWriter$spaced(
						A2(elm$core$List$map, stil4m$elm_syntax$Elm$Writer$writePattern, others))
					]));
		case 'AsPattern':
			var innerPattern = p.a;
			var asName = p.b;
			return stil4m$structured_writer$StructuredWriter$spaced(
				_List_fromArray(
					[
						stil4m$elm_syntax$Elm$Writer$writePattern(innerPattern),
						stil4m$structured_writer$StructuredWriter$string('as'),
						stil4m$structured_writer$StructuredWriter$string(
						stil4m$elm_syntax$Elm$Syntax$Node$value(asName))
					]));
		default:
			var innerPattern = p.a;
			return stil4m$structured_writer$StructuredWriter$spaced(
				_List_fromArray(
					[
						stil4m$structured_writer$StructuredWriter$string('('),
						stil4m$elm_syntax$Elm$Writer$writePattern(innerPattern),
						stil4m$structured_writer$StructuredWriter$string(')')
					]));
	}
};
var elm$core$String$contains = _String_contains;
var stil4m$elm_syntax$Elm$Writer$parensIfContainsSpaces = function (w) {
	return A2(
		elm$core$String$contains,
		' ',
		stil4m$structured_writer$StructuredWriter$write(w)) ? stil4m$structured_writer$StructuredWriter$join(
		_List_fromArray(
			[
				stil4m$structured_writer$StructuredWriter$string('('),
				w,
				stil4m$structured_writer$StructuredWriter$string(')')
			])) : w;
};
var stil4m$structured_writer$StructuredWriter$sepByComma = stil4m$structured_writer$StructuredWriter$Sep(
	_Utils_Tuple3('', ', ', ''));
var stil4m$elm_syntax$Elm$Writer$writeRecordField = function (_n4) {
	var _n5 = _n4.b;
	var name = _n5.a;
	var ref = _n5.b;
	return stil4m$structured_writer$StructuredWriter$spaced(
		_List_fromArray(
			[
				stil4m$structured_writer$StructuredWriter$string(
				stil4m$elm_syntax$Elm$Syntax$Node$value(name)),
				stil4m$structured_writer$StructuredWriter$string(':'),
				stil4m$elm_syntax$Elm$Writer$writeTypeAnnotation(ref)
			]));
};
var stil4m$elm_syntax$Elm$Writer$writeTypeAnnotation = function (_n0) {
	var typeAnnotation = _n0.b;
	switch (typeAnnotation.$) {
		case 'GenericType':
			var s = typeAnnotation.a;
			return stil4m$structured_writer$StructuredWriter$string(s);
		case 'Typed':
			var moduleNameAndName = typeAnnotation.a;
			var args = typeAnnotation.b;
			var moduleName = stil4m$elm_syntax$Elm$Syntax$Node$value(moduleNameAndName).a;
			var k = stil4m$elm_syntax$Elm$Syntax$Node$value(moduleNameAndName).b;
			return stil4m$structured_writer$StructuredWriter$spaced(
				A2(
					elm$core$List$cons,
					stil4m$structured_writer$StructuredWriter$string(
						A2(
							elm$core$String$join,
							'.',
							_Utils_ap(
								moduleName,
								_List_fromArray(
									[k])))),
					A2(
						elm$core$List$map,
						A2(elm$core$Basics$composeR, stil4m$elm_syntax$Elm$Writer$writeTypeAnnotation, stil4m$elm_syntax$Elm$Writer$parensIfContainsSpaces),
						args)));
		case 'Unit':
			return stil4m$structured_writer$StructuredWriter$string('()');
		case 'Tupled':
			var xs = typeAnnotation.a;
			return A2(
				stil4m$structured_writer$StructuredWriter$parensComma,
				false,
				A2(elm$core$List$map, stil4m$elm_syntax$Elm$Writer$writeTypeAnnotation, xs));
		case 'Record':
			var xs = typeAnnotation.a;
			return A2(
				stil4m$structured_writer$StructuredWriter$bracesComma,
				false,
				A2(elm$core$List$map, stil4m$elm_syntax$Elm$Writer$writeRecordField, xs));
		case 'GenericRecord':
			var name = typeAnnotation.a;
			var fields = typeAnnotation.b;
			return stil4m$structured_writer$StructuredWriter$spaced(
				_List_fromArray(
					[
						stil4m$structured_writer$StructuredWriter$string('{'),
						stil4m$structured_writer$StructuredWriter$string(
						stil4m$elm_syntax$Elm$Syntax$Node$value(name)),
						stil4m$structured_writer$StructuredWriter$string('|'),
						A2(
						stil4m$structured_writer$StructuredWriter$sepByComma,
						false,
						A2(
							elm$core$List$map,
							stil4m$elm_syntax$Elm$Writer$writeRecordField,
							stil4m$elm_syntax$Elm$Syntax$Node$value(fields))),
						stil4m$structured_writer$StructuredWriter$string('}')
					]));
		default:
			var left = typeAnnotation.a;
			var right = typeAnnotation.b;
			var addParensForSubTypeAnnotation = function (type_) {
				if (type_.b.$ === 'FunctionTypeAnnotation') {
					var _n3 = type_.b;
					return stil4m$structured_writer$StructuredWriter$join(
						_List_fromArray(
							[
								stil4m$structured_writer$StructuredWriter$string('('),
								stil4m$elm_syntax$Elm$Writer$writeTypeAnnotation(type_),
								stil4m$structured_writer$StructuredWriter$string(')')
							]));
				} else {
					return stil4m$elm_syntax$Elm$Writer$writeTypeAnnotation(type_);
				}
			};
			return stil4m$structured_writer$StructuredWriter$spaced(
				_List_fromArray(
					[
						addParensForSubTypeAnnotation(left),
						stil4m$structured_writer$StructuredWriter$string('->'),
						addParensForSubTypeAnnotation(right)
					]));
	}
};
var stil4m$elm_syntax$Elm$Writer$writeSignature = function (signature) {
	return stil4m$structured_writer$StructuredWriter$spaced(
		_List_fromArray(
			[
				stil4m$structured_writer$StructuredWriter$string(
				stil4m$elm_syntax$Elm$Syntax$Node$value(signature.name)),
				stil4m$structured_writer$StructuredWriter$string(':'),
				stil4m$elm_syntax$Elm$Writer$writeTypeAnnotation(signature.typeAnnotation)
			]));
};
var stil4m$structured_writer$StructuredWriter$Append = F2(
	function (a, b) {
		return {$: 'Append', a: a, b: b};
	});
var stil4m$structured_writer$StructuredWriter$append = stil4m$structured_writer$StructuredWriter$Append;
var stil4m$structured_writer$StructuredWriter$Breaked = function (a) {
	return {$: 'Breaked', a: a};
};
var stil4m$structured_writer$StructuredWriter$breaked = stil4m$structured_writer$StructuredWriter$Breaked;
var stil4m$structured_writer$StructuredWriter$epsilon = stil4m$structured_writer$StructuredWriter$Str('');
var stil4m$structured_writer$StructuredWriter$Indent = F2(
	function (a, b) {
		return {$: 'Indent', a: a, b: b};
	});
var stil4m$structured_writer$StructuredWriter$indent = stil4m$structured_writer$StructuredWriter$Indent;
var stil4m$structured_writer$StructuredWriter$maybe = elm$core$Maybe$withDefault(stil4m$structured_writer$StructuredWriter$epsilon);
var stil4m$structured_writer$StructuredWriter$sepBySpace = stil4m$structured_writer$StructuredWriter$Sep(
	_Utils_Tuple3('', ' ', ''));
var stil4m$elm_syntax$Elm$Writer$writeDestructuring = F2(
	function (pattern, expression) {
		return stil4m$structured_writer$StructuredWriter$breaked(
			_List_fromArray(
				[
					stil4m$structured_writer$StructuredWriter$spaced(
					_List_fromArray(
						[
							stil4m$elm_syntax$Elm$Writer$writePattern(pattern),
							stil4m$structured_writer$StructuredWriter$string('=')
						])),
					A2(
					stil4m$structured_writer$StructuredWriter$indent,
					4,
					stil4m$elm_syntax$Elm$Writer$writeExpression(expression))
				]));
	});
var stil4m$elm_syntax$Elm$Writer$writeExpression = function (_n3) {
	writeExpression:
	while (true) {
		var range = _n3.a;
		var inner = _n3.b;
		var writeRecordSetter = function (_n10) {
			var name = _n10.a;
			var expr = _n10.b;
			return _Utils_Tuple2(
				stil4m$elm_syntax$Elm$Syntax$Node$range(expr),
				stil4m$structured_writer$StructuredWriter$spaced(
					_List_fromArray(
						[
							stil4m$structured_writer$StructuredWriter$string(
							stil4m$elm_syntax$Elm$Syntax$Node$value(name)),
							stil4m$structured_writer$StructuredWriter$string('='),
							stil4m$elm_syntax$Elm$Writer$writeExpression(expr)
						])));
		};
		var sepHelper = F2(
			function (f, l) {
				var diffLines = stil4m$elm_syntax$Elm$Writer$startOnDifferentLines(
					A2(elm$core$List$map, elm$core$Tuple$first, l));
				return A2(
					f,
					diffLines,
					A2(elm$core$List$map, elm$core$Tuple$second, l));
			});
		var recurRangeHelper = function (_n9) {
			var x = _n9.a;
			var y = _n9.b;
			return _Utils_Tuple2(
				x,
				stil4m$elm_syntax$Elm$Writer$writeExpression(
					A2(stil4m$elm_syntax$Elm$Syntax$Node$Node, x, y)));
		};
		switch (inner.$) {
			case 'UnitExpr':
				return stil4m$structured_writer$StructuredWriter$string('()');
			case 'Application':
				var xs = inner.a;
				if (!xs.b) {
					return stil4m$structured_writer$StructuredWriter$epsilon;
				} else {
					if (!xs.b.b) {
						var x = xs.a;
						var $temp$_n3 = x;
						_n3 = $temp$_n3;
						continue writeExpression;
					} else {
						var x = xs.a;
						var rest = xs.b;
						return stil4m$structured_writer$StructuredWriter$spaced(
							_List_fromArray(
								[
									stil4m$elm_syntax$Elm$Writer$writeExpression(x),
									A2(
									sepHelper,
									stil4m$structured_writer$StructuredWriter$sepBySpace,
									A2(elm$core$List$map, recurRangeHelper, rest))
								]));
					}
				}
			case 'OperatorApplication':
				var x = inner.a;
				var dir = inner.b;
				var left = inner.c;
				var right = inner.d;
				switch (dir.$) {
					case 'Left':
						return A2(
							sepHelper,
							stil4m$structured_writer$StructuredWriter$sepBySpace,
							_List_fromArray(
								[
									_Utils_Tuple2(
									stil4m$elm_syntax$Elm$Syntax$Node$range(left),
									stil4m$elm_syntax$Elm$Writer$writeExpression(left)),
									_Utils_Tuple2(
									range,
									stil4m$structured_writer$StructuredWriter$spaced(
										_List_fromArray(
											[
												stil4m$structured_writer$StructuredWriter$string(x),
												stil4m$elm_syntax$Elm$Writer$writeExpression(right)
											])))
								]));
					case 'Right':
						return A2(
							sepHelper,
							stil4m$structured_writer$StructuredWriter$sepBySpace,
							_List_fromArray(
								[
									_Utils_Tuple2(
									stil4m$elm_syntax$Elm$Syntax$Node$range(left),
									stil4m$structured_writer$StructuredWriter$spaced(
										_List_fromArray(
											[
												stil4m$elm_syntax$Elm$Writer$writeExpression(left),
												stil4m$structured_writer$StructuredWriter$string(x)
											]))),
									_Utils_Tuple2(
									stil4m$elm_syntax$Elm$Syntax$Node$range(right),
									stil4m$elm_syntax$Elm$Writer$writeExpression(right))
								]));
					default:
						return A2(
							sepHelper,
							stil4m$structured_writer$StructuredWriter$sepBySpace,
							_List_fromArray(
								[
									_Utils_Tuple2(
									stil4m$elm_syntax$Elm$Syntax$Node$range(left),
									stil4m$structured_writer$StructuredWriter$spaced(
										_List_fromArray(
											[
												stil4m$elm_syntax$Elm$Writer$writeExpression(left),
												stil4m$structured_writer$StructuredWriter$string(x)
											]))),
									_Utils_Tuple2(
									stil4m$elm_syntax$Elm$Syntax$Node$range(right),
									stil4m$elm_syntax$Elm$Writer$writeExpression(right))
								]));
				}
			case 'FunctionOrValue':
				var moduleName = inner.a;
				var name = inner.b;
				if (!moduleName.b) {
					return stil4m$structured_writer$StructuredWriter$string(name);
				} else {
					return stil4m$structured_writer$StructuredWriter$join(
						_List_fromArray(
							[
								stil4m$elm_syntax$Elm$Writer$writeModuleName(moduleName),
								stil4m$structured_writer$StructuredWriter$string('.'),
								stil4m$structured_writer$StructuredWriter$string(name)
							]));
				}
			case 'IfBlock':
				var condition = inner.a;
				var thenCase = inner.b;
				var elseCase = inner.c;
				return stil4m$structured_writer$StructuredWriter$breaked(
					_List_fromArray(
						[
							stil4m$structured_writer$StructuredWriter$spaced(
							_List_fromArray(
								[
									stil4m$structured_writer$StructuredWriter$string('if'),
									stil4m$elm_syntax$Elm$Writer$writeExpression(condition),
									stil4m$structured_writer$StructuredWriter$string('then')
								])),
							A2(
							stil4m$structured_writer$StructuredWriter$indent,
							2,
							stil4m$elm_syntax$Elm$Writer$writeExpression(thenCase)),
							stil4m$structured_writer$StructuredWriter$string('else'),
							A2(
							stil4m$structured_writer$StructuredWriter$indent,
							2,
							stil4m$elm_syntax$Elm$Writer$writeExpression(elseCase))
						]));
			case 'PrefixOperator':
				var x = inner.a;
				return stil4m$structured_writer$StructuredWriter$string('(' + (x + ')'));
			case 'Operator':
				var x = inner.a;
				return stil4m$structured_writer$StructuredWriter$string(x);
			case 'Hex':
				var h = inner.a;
				return stil4m$structured_writer$StructuredWriter$join(
					_List_fromArray(
						[
							stil4m$structured_writer$StructuredWriter$string('0x'),
							stil4m$structured_writer$StructuredWriter$string(
							rtfeldman$elm_hex$Hex$toString(h))
						]));
			case 'Integer':
				var i = inner.a;
				return stil4m$structured_writer$StructuredWriter$string(
					elm$core$String$fromInt(i));
			case 'Floatable':
				var f = inner.a;
				return stil4m$structured_writer$StructuredWriter$string(
					elm$core$String$fromFloat(f));
			case 'Negation':
				var x = inner.a;
				return A2(
					stil4m$structured_writer$StructuredWriter$append,
					stil4m$structured_writer$StructuredWriter$string('-'),
					stil4m$elm_syntax$Elm$Writer$writeExpression(x));
			case 'Literal':
				var s = inner.a;
				return stil4m$structured_writer$StructuredWriter$string('\"' + (s + '\"'));
			case 'CharLiteral':
				var c = inner.a;
				return stil4m$structured_writer$StructuredWriter$string(
					'\'' + (elm$core$String$fromList(
						_List_fromArray(
							[c])) + '\''));
			case 'TupledExpression':
				var t = inner.a;
				return stil4m$structured_writer$StructuredWriter$join(
					_List_fromArray(
						[
							stil4m$structured_writer$StructuredWriter$string('('),
							A2(
							sepHelper,
							stil4m$structured_writer$StructuredWriter$sepByComma,
							A2(elm$core$List$map, recurRangeHelper, t)),
							stil4m$structured_writer$StructuredWriter$string(')')
						]));
			case 'ParenthesizedExpression':
				var x = inner.a;
				return stil4m$structured_writer$StructuredWriter$join(
					_List_fromArray(
						[
							stil4m$structured_writer$StructuredWriter$string('('),
							stil4m$elm_syntax$Elm$Writer$writeExpression(x),
							stil4m$structured_writer$StructuredWriter$string(')')
						]));
			case 'LetExpression':
				var letBlock = inner.a;
				return stil4m$structured_writer$StructuredWriter$breaked(
					_List_fromArray(
						[
							stil4m$structured_writer$StructuredWriter$string('let'),
							A2(
							stil4m$structured_writer$StructuredWriter$indent,
							2,
							stil4m$structured_writer$StructuredWriter$breaked(
								A2(elm$core$List$map, stil4m$elm_syntax$Elm$Writer$writeLetDeclaration, letBlock.declarations))),
							stil4m$structured_writer$StructuredWriter$string('in'),
							A2(
							stil4m$structured_writer$StructuredWriter$indent,
							2,
							stil4m$elm_syntax$Elm$Writer$writeExpression(letBlock.expression))
						]));
			case 'CaseExpression':
				var caseBlock = inner.a;
				var writeCaseBranch = function (_n8) {
					var pattern = _n8.a;
					var expression = _n8.b;
					return A2(
						stil4m$structured_writer$StructuredWriter$indent,
						2,
						stil4m$structured_writer$StructuredWriter$breaked(
							_List_fromArray(
								[
									stil4m$structured_writer$StructuredWriter$spaced(
									_List_fromArray(
										[
											stil4m$elm_syntax$Elm$Writer$writePattern(pattern),
											stil4m$structured_writer$StructuredWriter$string('->')
										])),
									A2(
									stil4m$structured_writer$StructuredWriter$indent,
									2,
									stil4m$elm_syntax$Elm$Writer$writeExpression(expression))
								])));
				};
				return stil4m$structured_writer$StructuredWriter$breaked(
					_List_fromArray(
						[
							stil4m$structured_writer$StructuredWriter$spaced(
							_List_fromArray(
								[
									stil4m$structured_writer$StructuredWriter$string('case'),
									stil4m$elm_syntax$Elm$Writer$writeExpression(caseBlock.expression),
									stil4m$structured_writer$StructuredWriter$string('of')
								])),
							stil4m$structured_writer$StructuredWriter$breaked(
							A2(elm$core$List$map, writeCaseBranch, caseBlock.cases))
						]));
			case 'LambdaExpression':
				var lambda = inner.a;
				return stil4m$structured_writer$StructuredWriter$spaced(
					_List_fromArray(
						[
							stil4m$structured_writer$StructuredWriter$join(
							_List_fromArray(
								[
									stil4m$structured_writer$StructuredWriter$string('\\'),
									stil4m$structured_writer$StructuredWriter$spaced(
									A2(elm$core$List$map, stil4m$elm_syntax$Elm$Writer$writePattern, lambda.args))
								])),
							stil4m$structured_writer$StructuredWriter$string('->'),
							stil4m$elm_syntax$Elm$Writer$writeExpression(lambda.expression)
						]));
			case 'RecordExpr':
				var setters = inner.a;
				return A2(
					sepHelper,
					stil4m$structured_writer$StructuredWriter$bracesComma,
					A2(
						elm$core$List$map,
						A2(elm$core$Basics$composeR, stil4m$elm_syntax$Elm$Syntax$Node$value, writeRecordSetter),
						setters));
			case 'ListExpr':
				var xs = inner.a;
				return A2(
					sepHelper,
					stil4m$structured_writer$StructuredWriter$bracketsComma,
					A2(elm$core$List$map, recurRangeHelper, xs));
			case 'RecordAccess':
				var expression = inner.a;
				var accessor = inner.b;
				return stil4m$structured_writer$StructuredWriter$join(
					_List_fromArray(
						[
							stil4m$elm_syntax$Elm$Writer$writeExpression(expression),
							stil4m$structured_writer$StructuredWriter$string('.'),
							stil4m$structured_writer$StructuredWriter$string(
							stil4m$elm_syntax$Elm$Syntax$Node$value(accessor))
						]));
			case 'RecordAccessFunction':
				var s = inner.a;
				return stil4m$structured_writer$StructuredWriter$join(
					_List_fromArray(
						[
							stil4m$structured_writer$StructuredWriter$string('.'),
							stil4m$structured_writer$StructuredWriter$string(s)
						]));
			case 'RecordUpdateExpression':
				var name = inner.a;
				var updates = inner.b;
				return stil4m$structured_writer$StructuredWriter$spaced(
					_List_fromArray(
						[
							stil4m$structured_writer$StructuredWriter$string('{'),
							stil4m$structured_writer$StructuredWriter$string(
							stil4m$elm_syntax$Elm$Syntax$Node$value(name)),
							stil4m$structured_writer$StructuredWriter$string('|'),
							A2(
							sepHelper,
							stil4m$structured_writer$StructuredWriter$sepByComma,
							A2(
								elm$core$List$map,
								A2(elm$core$Basics$composeR, stil4m$elm_syntax$Elm$Syntax$Node$value, writeRecordSetter),
								updates)),
							stil4m$structured_writer$StructuredWriter$string('}')
						]));
			default:
				var s = inner.a;
				return stil4m$structured_writer$StructuredWriter$join(
					_List_fromArray(
						[
							stil4m$structured_writer$StructuredWriter$string('[glsl|'),
							stil4m$structured_writer$StructuredWriter$string(s),
							stil4m$structured_writer$StructuredWriter$string('|]')
						]));
		}
	}
};
var stil4m$elm_syntax$Elm$Writer$writeFunction = function (_n2) {
	var documentation = _n2.documentation;
	var signature = _n2.signature;
	var declaration = _n2.declaration;
	return stil4m$structured_writer$StructuredWriter$breaked(
		_List_fromArray(
			[
				stil4m$structured_writer$StructuredWriter$maybe(
				A2(elm$core$Maybe$map, stil4m$elm_syntax$Elm$Writer$writeDocumentation, documentation)),
				stil4m$structured_writer$StructuredWriter$maybe(
				A2(
					elm$core$Maybe$map,
					A2(elm$core$Basics$composeR, stil4m$elm_syntax$Elm$Syntax$Node$value, stil4m$elm_syntax$Elm$Writer$writeSignature),
					signature)),
				stil4m$elm_syntax$Elm$Writer$writeFunctionImplementation(
				stil4m$elm_syntax$Elm$Syntax$Node$value(declaration))
			]));
};
var stil4m$elm_syntax$Elm$Writer$writeFunctionImplementation = function (declaration) {
	return stil4m$structured_writer$StructuredWriter$breaked(
		_List_fromArray(
			[
				stil4m$structured_writer$StructuredWriter$spaced(
				_List_fromArray(
					[
						stil4m$structured_writer$StructuredWriter$string(
						stil4m$elm_syntax$Elm$Syntax$Node$value(declaration.name)),
						stil4m$structured_writer$StructuredWriter$spaced(
						A2(elm$core$List$map, stil4m$elm_syntax$Elm$Writer$writePattern, declaration._arguments)),
						stil4m$structured_writer$StructuredWriter$string('=')
					])),
				A2(
				stil4m$structured_writer$StructuredWriter$indent,
				4,
				stil4m$elm_syntax$Elm$Writer$writeExpression(declaration.expression))
			]));
};
var stil4m$elm_syntax$Elm$Writer$writeLetDeclaration = function (_n0) {
	var letDeclaration = _n0.b;
	if (letDeclaration.$ === 'LetFunction') {
		var _function = letDeclaration.a;
		return stil4m$elm_syntax$Elm$Writer$writeFunction(_function);
	} else {
		var pattern = letDeclaration.a;
		var expression = letDeclaration.b;
		return A2(stil4m$elm_syntax$Elm$Writer$writeDestructuring, pattern, expression);
	}
};
var stil4m$elm_syntax$Elm$Writer$writeInfix = function (_n0) {
	var direction = _n0.direction;
	var precedence = _n0.precedence;
	var operator = _n0.operator;
	var _function = _n0._function;
	return stil4m$structured_writer$StructuredWriter$spaced(
		_List_fromArray(
			[
				stil4m$structured_writer$StructuredWriter$string('infix'),
				function () {
				var _n1 = stil4m$elm_syntax$Elm$Syntax$Node$value(direction);
				switch (_n1.$) {
					case 'Left':
						return stil4m$structured_writer$StructuredWriter$string('left');
					case 'Right':
						return stil4m$structured_writer$StructuredWriter$string('right');
					default:
						return stil4m$structured_writer$StructuredWriter$string('non');
				}
			}(),
				stil4m$structured_writer$StructuredWriter$string(
				elm$core$String$fromInt(
					stil4m$elm_syntax$Elm$Syntax$Node$value(precedence))),
				stil4m$structured_writer$StructuredWriter$string(
				stil4m$elm_syntax$Elm$Syntax$Node$value(operator)),
				stil4m$structured_writer$StructuredWriter$string('='),
				stil4m$structured_writer$StructuredWriter$string(
				stil4m$elm_syntax$Elm$Syntax$Node$value(_function))
			]));
};
var stil4m$elm_syntax$Elm$Writer$writePortDeclaration = function (signature) {
	return stil4m$structured_writer$StructuredWriter$spaced(
		_List_fromArray(
			[
				stil4m$structured_writer$StructuredWriter$string('port'),
				stil4m$elm_syntax$Elm$Writer$writeSignature(signature)
			]));
};
var stil4m$elm_syntax$Elm$Writer$writeValueConstructor = function (_n0) {
	var name = _n0.name;
	var _arguments = _n0._arguments;
	return stil4m$structured_writer$StructuredWriter$spaced(
		_List_fromArray(
			[
				stil4m$structured_writer$StructuredWriter$string(
				stil4m$elm_syntax$Elm$Syntax$Node$value(name)),
				stil4m$structured_writer$StructuredWriter$spaced(
				A2(elm$core$List$map, stil4m$elm_syntax$Elm$Writer$writeTypeAnnotation, _arguments))
			]));
};
var stil4m$structured_writer$StructuredWriter$sepBy = stil4m$structured_writer$StructuredWriter$Sep;
var stil4m$elm_syntax$Elm$Writer$writeType = function (type_) {
	return stil4m$structured_writer$StructuredWriter$breaked(
		_List_fromArray(
			[
				stil4m$structured_writer$StructuredWriter$spaced(
				_List_fromArray(
					[
						stil4m$structured_writer$StructuredWriter$string('type'),
						stil4m$structured_writer$StructuredWriter$string(
						stil4m$elm_syntax$Elm$Syntax$Node$value(type_.name)),
						stil4m$structured_writer$StructuredWriter$spaced(
						A2(
							elm$core$List$map,
							A2(elm$core$Basics$composeR, stil4m$elm_syntax$Elm$Syntax$Node$value, stil4m$structured_writer$StructuredWriter$string),
							type_.generics))
					])),
				function () {
				var diffLines = stil4m$elm_syntax$Elm$Writer$startOnDifferentLines(
					A2(elm$core$List$map, stil4m$elm_syntax$Elm$Syntax$Node$range, type_.constructors));
				return A3(
					stil4m$structured_writer$StructuredWriter$sepBy,
					_Utils_Tuple3('=', '|', ''),
					diffLines,
					A2(
						elm$core$List$map,
						A2(elm$core$Basics$composeR, stil4m$elm_syntax$Elm$Syntax$Node$value, stil4m$elm_syntax$Elm$Writer$writeValueConstructor),
						type_.constructors));
			}()
			]));
};
var stil4m$elm_syntax$Elm$Writer$writeTypeAlias = function (typeAlias) {
	return stil4m$structured_writer$StructuredWriter$breaked(
		_List_fromArray(
			[
				stil4m$structured_writer$StructuredWriter$spaced(
				_List_fromArray(
					[
						stil4m$structured_writer$StructuredWriter$string('type alias'),
						stil4m$structured_writer$StructuredWriter$string(
						stil4m$elm_syntax$Elm$Syntax$Node$value(typeAlias.name)),
						stil4m$structured_writer$StructuredWriter$spaced(
						A2(
							elm$core$List$map,
							A2(elm$core$Basics$composeR, stil4m$elm_syntax$Elm$Syntax$Node$value, stil4m$structured_writer$StructuredWriter$string),
							typeAlias.generics)),
						stil4m$structured_writer$StructuredWriter$string('=')
					])),
				A2(
				stil4m$structured_writer$StructuredWriter$indent,
				4,
				stil4m$elm_syntax$Elm$Writer$writeTypeAnnotation(typeAlias.typeAnnotation))
			]));
};
var stil4m$elm_syntax$Elm$Writer$writeDeclaration = function (_n0) {
	var decl = _n0.b;
	switch (decl.$) {
		case 'FunctionDeclaration':
			var _function = decl.a;
			return stil4m$elm_syntax$Elm$Writer$writeFunction(_function);
		case 'AliasDeclaration':
			var typeAlias = decl.a;
			return stil4m$elm_syntax$Elm$Writer$writeTypeAlias(typeAlias);
		case 'CustomTypeDeclaration':
			var type_ = decl.a;
			return stil4m$elm_syntax$Elm$Writer$writeType(type_);
		case 'PortDeclaration':
			var p = decl.a;
			return stil4m$elm_syntax$Elm$Writer$writePortDeclaration(p);
		case 'InfixDeclaration':
			var i = decl.a;
			return stil4m$elm_syntax$Elm$Writer$writeInfix(i);
		default:
			var pattern = decl.a;
			var expression = decl.b;
			return A2(stil4m$elm_syntax$Elm$Writer$writeDestructuring, pattern, expression);
	}
};
var stil4m$elm_syntax$Elm$Writer$writeExpose = function (_n0) {
	var exp = _n0.b;
	switch (exp.$) {
		case 'InfixExpose':
			var x = exp.a;
			return stil4m$structured_writer$StructuredWriter$string('(' + (x + ')'));
		case 'FunctionExpose':
			var f = exp.a;
			return stil4m$structured_writer$StructuredWriter$string(f);
		case 'TypeOrAliasExpose':
			var t = exp.a;
			return stil4m$structured_writer$StructuredWriter$string(t);
		default:
			var name = exp.a.name;
			var open = exp.a.open;
			if (open.$ === 'Just') {
				return stil4m$structured_writer$StructuredWriter$spaced(
					_List_fromArray(
						[
							stil4m$structured_writer$StructuredWriter$string(name),
							stil4m$structured_writer$StructuredWriter$string('(..)')
						]));
			} else {
				return stil4m$structured_writer$StructuredWriter$string(name);
			}
	}
};
var stil4m$elm_syntax$Elm$Writer$writeExposureExpose = function (x) {
	if (x.$ === 'All') {
		return stil4m$structured_writer$StructuredWriter$string('exposing (..)');
	} else {
		var exposeList = x.a;
		var diffLines = stil4m$elm_syntax$Elm$Writer$startOnDifferentLines(
			A2(elm$core$List$map, stil4m$elm_syntax$Elm$Syntax$Node$range, exposeList));
		return stil4m$structured_writer$StructuredWriter$spaced(
			_List_fromArray(
				[
					stil4m$structured_writer$StructuredWriter$string('exposing'),
					A2(
					stil4m$structured_writer$StructuredWriter$parensComma,
					diffLines,
					A2(elm$core$List$map, stil4m$elm_syntax$Elm$Writer$writeExpose, exposeList))
				]));
	}
};
var stil4m$elm_syntax$Elm$Writer$writeImport = function (_n0) {
	var moduleName = _n0.moduleName;
	var moduleAlias = _n0.moduleAlias;
	var exposingList = _n0.exposingList;
	return stil4m$structured_writer$StructuredWriter$spaced(
		_List_fromArray(
			[
				stil4m$structured_writer$StructuredWriter$string('import'),
				stil4m$elm_syntax$Elm$Writer$writeModuleName(
				stil4m$elm_syntax$Elm$Syntax$Node$value(moduleName)),
				stil4m$structured_writer$StructuredWriter$maybe(
				A2(
					elm$core$Maybe$map,
					A2(
						elm$core$Basics$composeR,
						stil4m$elm_syntax$Elm$Syntax$Node$value,
						A2(
							elm$core$Basics$composeR,
							stil4m$elm_syntax$Elm$Writer$writeModuleName,
							function (x) {
								return stil4m$structured_writer$StructuredWriter$spaced(
									_List_fromArray(
										[
											stil4m$structured_writer$StructuredWriter$string('as'),
											x
										]));
							})),
					moduleAlias)),
				stil4m$structured_writer$StructuredWriter$maybe(
				A2(
					elm$core$Maybe$map,
					A2(elm$core$Basics$composeR, stil4m$elm_syntax$Elm$Syntax$Node$value, stil4m$elm_syntax$Elm$Writer$writeExposureExpose),
					exposingList))
			]));
};
var stil4m$elm_syntax$Elm$Writer$writeDefaultModuleData = function (_n0) {
	var moduleName = _n0.moduleName;
	var exposingList = _n0.exposingList;
	return stil4m$structured_writer$StructuredWriter$spaced(
		_List_fromArray(
			[
				stil4m$structured_writer$StructuredWriter$string('module'),
				stil4m$elm_syntax$Elm$Writer$writeModuleName(
				stil4m$elm_syntax$Elm$Syntax$Node$value(moduleName)),
				stil4m$elm_syntax$Elm$Writer$writeExposureExpose(
				stil4m$elm_syntax$Elm$Syntax$Node$value(exposingList))
			]));
};
var stil4m$elm_syntax$Elm$Writer$writeWhere = function (input) {
	if (input.a.$ === 'Nothing') {
		if (input.b.$ === 'Nothing') {
			var _n1 = input.a;
			var _n2 = input.b;
			return stil4m$structured_writer$StructuredWriter$epsilon;
		} else {
			var _n4 = input.a;
			var x = input.b.a;
			return stil4m$structured_writer$StructuredWriter$spaced(
				_List_fromArray(
					[
						stil4m$structured_writer$StructuredWriter$string('where { subscription ='),
						stil4m$structured_writer$StructuredWriter$string(
						stil4m$elm_syntax$Elm$Syntax$Node$value(x)),
						stil4m$structured_writer$StructuredWriter$string('}')
					]));
		}
	} else {
		if (input.b.$ === 'Nothing') {
			var x = input.a.a;
			var _n3 = input.b;
			return stil4m$structured_writer$StructuredWriter$spaced(
				_List_fromArray(
					[
						stil4m$structured_writer$StructuredWriter$string('where { command ='),
						stil4m$structured_writer$StructuredWriter$string(
						stil4m$elm_syntax$Elm$Syntax$Node$value(x)),
						stil4m$structured_writer$StructuredWriter$string('}')
					]));
		} else {
			var x = input.a.a;
			var y = input.b.a;
			return stil4m$structured_writer$StructuredWriter$spaced(
				_List_fromArray(
					[
						stil4m$structured_writer$StructuredWriter$string('where { command ='),
						stil4m$structured_writer$StructuredWriter$string(
						stil4m$elm_syntax$Elm$Syntax$Node$value(x)),
						stil4m$structured_writer$StructuredWriter$string(', subscription ='),
						stil4m$structured_writer$StructuredWriter$string(
						stil4m$elm_syntax$Elm$Syntax$Node$value(y)),
						stil4m$structured_writer$StructuredWriter$string('}')
					]));
		}
	}
};
var stil4m$elm_syntax$Elm$Writer$writeEffectModuleData = function (_n0) {
	var moduleName = _n0.moduleName;
	var exposingList = _n0.exposingList;
	var command = _n0.command;
	var subscription = _n0.subscription;
	return stil4m$structured_writer$StructuredWriter$spaced(
		_List_fromArray(
			[
				stil4m$structured_writer$StructuredWriter$string('effect'),
				stil4m$structured_writer$StructuredWriter$string('module'),
				stil4m$elm_syntax$Elm$Writer$writeModuleName(
				stil4m$elm_syntax$Elm$Syntax$Node$value(moduleName)),
				stil4m$elm_syntax$Elm$Writer$writeWhere(
				_Utils_Tuple2(command, subscription)),
				stil4m$elm_syntax$Elm$Writer$writeExposureExpose(
				stil4m$elm_syntax$Elm$Syntax$Node$value(exposingList))
			]));
};
var stil4m$elm_syntax$Elm$Writer$writeModule = function (m) {
	switch (m.$) {
		case 'NormalModule':
			var defaultModuleData = m.a;
			return stil4m$elm_syntax$Elm$Writer$writeDefaultModuleData(defaultModuleData);
		case 'PortModule':
			var defaultModuleData = m.a;
			return stil4m$structured_writer$StructuredWriter$spaced(
				_List_fromArray(
					[
						stil4m$structured_writer$StructuredWriter$string('port'),
						stil4m$elm_syntax$Elm$Writer$writeDefaultModuleData(defaultModuleData)
					]));
		default:
			var effectModuleData = m.a;
			return stil4m$elm_syntax$Elm$Writer$writeEffectModuleData(effectModuleData);
	}
};
var stil4m$elm_syntax$Elm$Writer$writeFile = function (file) {
	return stil4m$structured_writer$StructuredWriter$breaked(
		_List_fromArray(
			[
				stil4m$elm_syntax$Elm$Writer$writeModule(
				stil4m$elm_syntax$Elm$Syntax$Node$value(file.moduleDefinition)),
				stil4m$structured_writer$StructuredWriter$breaked(
				A2(
					elm$core$List$map,
					A2(elm$core$Basics$composeR, stil4m$elm_syntax$Elm$Syntax$Node$value, stil4m$elm_syntax$Elm$Writer$writeImport),
					file.imports)),
				stil4m$structured_writer$StructuredWriter$breaked(
				A2(elm$core$List$map, stil4m$elm_syntax$Elm$Writer$writeDeclaration, file.declarations))
			]));
};
var author$project$Main$parse = function (input) {
	var _n0 = stil4m$elm_syntax$Elm$Parser$parse(input);
	if (_n0.$ === 'Err') {
		var e = _n0.a;
		return 'Failed: ' + elm$core$Debug$toString(e);
	} else {
		var v = _n0.a;
		var context = stil4m$elm_syntax$Elm$Processing$init;
		var file0 = A2(stil4m$elm_syntax$Elm$Processing$process, context, v);
		var declarations0 = file0.declarations;
		var comments0 = file0.comments;
		var file1 = _Utils_update(
			file0,
			{comments: comments0, declarations: declarations0});
		return stil4m$elm_syntax$Elm$Writer$write(
			stil4m$elm_syntax$Elm$Writer$writeFile(file0));
	}
};
var author$project$Main$Exiting = function (a) {
	return {$: 'Exiting', a: a};
};
var author$project$Main$toExiting = function (_n0) {
	var state = _n0.a;
	return author$project$Main$Exiting(
		the_sett$elm_state_machines$StateMachine$State(
			{}));
};
var author$project$Main$ReadingFile = function (a) {
	return {$: 'ReadingFile', a: a};
};
var author$project$Main$toReadingFile = function (_n0) {
	var state = _n0.a;
	return author$project$Main$ReadingFile(
		the_sett$elm_state_machines$StateMachine$State(state));
};
var author$project$Main$WritingFile = function (a) {
	return {$: 'WritingFile', a: a};
};
var author$project$Main$toWritingFile = function (_n0) {
	var state = _n0.a;
	return author$project$Main$WritingFile(
		the_sett$elm_state_machines$StateMachine$State(state));
};
var elm$core$Debug$log = _Debug_log;
var elm$core$Platform$Cmd$batch = _Platform_batch;
var elm$core$Platform$Cmd$none = elm$core$Platform$Cmd$batch(_List_Nil);
var elm_community$result_extra$Result$Extra$extract = F2(
	function (f, x) {
		if (x.$ === 'Ok') {
			var a = x.a;
			return a;
		} else {
			var e = x.a;
			return f(e);
		}
	});
var author$project$Main$update = F3(
	function (_n0, msg, model) {
		return A2(
			elm_community$result_extra$Result$Extra$extract,
			function (err) {
				return _Utils_Tuple2(
					model,
					A2(author$project$Main$exit, 1, err));
			},
			function () {
				var _n1 = _Utils_Tuple2(model, msg);
				_n1$4:
				while (true) {
					switch (_n1.b.$) {
						case 'Stderr':
							var stderr = _n1.b.a;
							return elm$core$Result$Err(stderr);
						case 'NoOp':
							if (_n1.a.$ === 'Starting') {
								var files = _n1.a.a.a.files;
								var _n2 = _n1.b;
								if (files.b) {
									var file = files.a;
									var moreFiles = files.b;
									return elm$core$Result$Ok(
										_Utils_Tuple2(
											author$project$Main$toReadingFile(
												the_sett$elm_state_machines$StateMachine$State(
													{file: file, files: moreFiles})),
											author$project$Main$fileReadRequest(file)));
								} else {
									return elm$core$Result$Ok(
										_Utils_Tuple2(
											author$project$Main$toExiting(
												the_sett$elm_state_machines$StateMachine$State(
													{})),
											elm$core$Platform$Cmd$none));
								}
							} else {
								break _n1$4;
							}
						default:
							switch (_n1.a.$) {
								case 'ReadingFile':
									var state = _n1.a.a;
									var files = state.a.files;
									var file = state.a.file;
									var content0 = _n1.b.a;
									var content1 = author$project$Main$parse(content0);
									return elm$core$Result$Ok(
										_Utils_Tuple2(
											author$project$Main$toWritingFile(
												the_sett$elm_state_machines$StateMachine$State(
													{files: files})),
											A2(author$project$Main$fileWriteRequest, file, content1)));
								case 'WritingFile':
									var state = _n1.a.a.a;
									return elm$core$Result$Ok(
										_Utils_Tuple2(
											author$project$Main$toStarting(state),
											author$project$Main$message(author$project$Main$NoOp)));
								default:
									break _n1$4;
							}
					}
				}
				var state = _n1.a;
				var cmd = _n1.b;
				var _n4 = A2(
					elm$core$Debug$log,
					'( state, cmd )',
					_Utils_Tuple2(state, cmd));
				return elm$core$Result$Err('Invalid State Transition');
			}());
	});
var dillonkearns$elm_cli_options_parser$Cli$Program$ShowSystemMessage = {$: 'ShowSystemMessage'};
var dillonkearns$elm_cli_options_parser$Cli$Program$UserModel = F2(
	function (a, b) {
		return {$: 'UserModel', a: a, b: b};
	});
var dillonkearns$elm_cli_options_parser$Cli$ExitStatus$Failure = {$: 'Failure'};
var dillonkearns$elm_cli_options_parser$Cli$ExitStatus$Success = {$: 'Success'};
var dillonkearns$elm_cli_options_parser$Cli$UsageSpec$mutuallyExclusiveSynopsis = function (_n0) {
	var values = _n0.a;
	return A2(elm$core$String$join, '|', values);
};
var dillonkearns$elm_cli_options_parser$Occurences$qualifySynopsis = F2(
	function (occurences, rawSynopsis) {
		switch (occurences.$) {
			case 'Optional':
				return '[' + (rawSynopsis + ']');
			case 'Required':
				return rawSynopsis;
			default:
				return '[' + (rawSynopsis + ']...');
		}
	});
var dillonkearns$elm_cli_options_parser$Cli$UsageSpec$optionSynopsis = F3(
	function (occurences, option, maybeMutuallyExclusiveValues) {
		return A2(
			dillonkearns$elm_cli_options_parser$Occurences$qualifySynopsis,
			occurences,
			function () {
				if (option.$ === 'Flag') {
					var flagName = option.a;
					return '--' + flagName;
				} else {
					var keywordArgName = option.a;
					if (maybeMutuallyExclusiveValues.$ === 'Just') {
						var mutuallyExclusiveValues = maybeMutuallyExclusiveValues.a;
						return '--' + (keywordArgName + (' <' + (dillonkearns$elm_cli_options_parser$Cli$UsageSpec$mutuallyExclusiveSynopsis(mutuallyExclusiveValues) + '>')));
					} else {
						return '--' + (keywordArgName + (' <' + (keywordArgName + '>')));
					}
				}
			}());
	});
var dillonkearns$elm_cli_options_parser$Cli$UsageSpec$synopsis = F2(
	function (programName, _n0) {
		var usageSpecs = _n0.usageSpecs;
		var description = _n0.description;
		var subCommand = _n0.subCommand;
		return programName + (' ' + (A2(
			elm$core$String$join,
			' ',
			A2(
				elm$core$List$filterMap,
				elm$core$Basics$identity,
				A2(
					elm$core$List$cons,
					subCommand,
					A2(
						elm$core$List$map,
						function (spec) {
							return elm$core$Maybe$Just(
								function () {
									switch (spec.$) {
										case 'FlagOrKeywordArg':
											var option = spec.a;
											var mutuallyExclusiveValues = spec.b;
											var occurences = spec.c;
											return A3(dillonkearns$elm_cli_options_parser$Cli$UsageSpec$optionSynopsis, occurences, option, mutuallyExclusiveValues);
										case 'Operand':
											var operandName = spec.a;
											var mutuallyExclusiveValues = spec.b;
											var occurences = spec.c;
											var positionalArgSummary = A2(
												elm$core$Maybe$withDefault,
												operandName,
												A2(elm$core$Maybe$map, dillonkearns$elm_cli_options_parser$Cli$UsageSpec$mutuallyExclusiveSynopsis, mutuallyExclusiveValues));
											switch (occurences.$) {
												case 'Required':
													return '<' + (positionalArgSummary + '>');
												case 'Optional':
													return '[<' + (positionalArgSummary + '>]');
												default:
													return 'TODO shouldn\'t reach this case';
											}
										default:
											var restArgsDescription = spec.a;
											return '<' + (restArgsDescription + '>...');
									}
								}());
						},
						usageSpecs)))) + A2(
			elm$core$Maybe$withDefault,
			'',
			A2(
				elm$core$Maybe$map,
				function (doc) {
					return ' # ' + doc;
				},
				description))));
	});
var dillonkearns$elm_cli_options_parser$Cli$OptionsParser$synopsis = F2(
	function (programName, optionsParser) {
		return A2(
			dillonkearns$elm_cli_options_parser$Cli$UsageSpec$synopsis,
			programName,
			function (_n0) {
				var record = _n0.a;
				return record;
			}(optionsParser));
	});
var dillonkearns$elm_cli_options_parser$Cli$LowLevel$helpText = F2(
	function (programName, optionsParsers) {
		return A2(
			elm$core$String$join,
			'\n',
			A2(
				elm$core$List$map,
				dillonkearns$elm_cli_options_parser$Cli$OptionsParser$synopsis(programName),
				optionsParsers));
	});
var dillonkearns$elm_cli_options_parser$Cli$LowLevel$Match = function (a) {
	return {$: 'Match', a: a};
};
var dillonkearns$elm_cli_options_parser$Cli$LowLevel$NoMatch = function (a) {
	return {$: 'NoMatch', a: a};
};
var dillonkearns$elm_cli_options_parser$Cli$LowLevel$SystemParser = function (a) {
	return {$: 'SystemParser', a: a};
};
var dillonkearns$elm_cli_options_parser$Cli$LowLevel$UserParser = function (a) {
	return {$: 'UserParser', a: a};
};
var dillonkearns$elm_cli_options_parser$Cli$LowLevel$ValidationErrors = function (a) {
	return {$: 'ValidationErrors', a: a};
};
var dillonkearns$elm_cli_options_parser$Cli$LowLevel$ShowHelp = {$: 'ShowHelp'};
var dillonkearns$elm_cli_options_parser$Cli$Decode$MatchError = function (a) {
	return {$: 'MatchError', a: a};
};
var dillonkearns$elm_cli_options_parser$Cli$UsageSpec$Flag = function (a) {
	return {$: 'Flag', a: a};
};
var dillonkearns$elm_cli_options_parser$Cli$UsageSpec$FlagOrKeywordArg = F3(
	function (a, b, c) {
		return {$: 'FlagOrKeywordArg', a: a, b: b, c: c};
	});
var dillonkearns$elm_cli_options_parser$Cli$UsageSpec$flag = F2(
	function (flagName, occurences) {
		return A3(
			dillonkearns$elm_cli_options_parser$Cli$UsageSpec$FlagOrKeywordArg,
			dillonkearns$elm_cli_options_parser$Cli$UsageSpec$Flag(flagName),
			elm$core$Maybe$Nothing,
			occurences);
	});
var dillonkearns$elm_cli_options_parser$Occurences$Required = {$: 'Required'};
var dillonkearns$elm_cli_options_parser$Tokenizer$Flag = {$: 'Flag'};
var dillonkearns$elm_cli_options_parser$Tokenizer$ParsedOption = F2(
	function (a, b) {
		return {$: 'ParsedOption', a: a, b: b};
	});
var dillonkearns$elm_cli_options_parser$Cli$OptionsParser$expectFlag = F2(
	function (flagName, _n0) {
		var optionsParser = _n0.a;
		var usageSpecs = optionsParser.usageSpecs;
		var decoder = optionsParser.decoder;
		return dillonkearns$elm_cli_options_parser$Cli$OptionsParser$OptionsParser(
			_Utils_update(
				optionsParser,
				{
					decoder: function (stuff) {
						var options = stuff.options;
						return A2(
							elm$core$List$member,
							A2(dillonkearns$elm_cli_options_parser$Tokenizer$ParsedOption, flagName, dillonkearns$elm_cli_options_parser$Tokenizer$Flag),
							options) ? decoder(stuff) : elm$core$Result$Err(
							dillonkearns$elm_cli_options_parser$Cli$Decode$MatchError('Expect flag ' + ('--' + flagName)));
					},
					usageSpecs: _Utils_ap(
						usageSpecs,
						_List_fromArray(
							[
								A2(dillonkearns$elm_cli_options_parser$Cli$UsageSpec$flag, flagName, dillonkearns$elm_cli_options_parser$Occurences$Required)
							]))
				}));
	});
var dillonkearns$elm_cli_options_parser$Cli$LowLevel$helpParser = A2(
	dillonkearns$elm_cli_options_parser$Cli$OptionsParser$expectFlag,
	'help',
	dillonkearns$elm_cli_options_parser$Cli$OptionsParser$build(dillonkearns$elm_cli_options_parser$Cli$LowLevel$ShowHelp));
var elm$core$Dict$foldl = F3(
	function (func, acc, dict) {
		foldl:
		while (true) {
			if (dict.$ === 'RBEmpty_elm_builtin') {
				return acc;
			} else {
				var key = dict.b;
				var value = dict.c;
				var left = dict.d;
				var right = dict.e;
				var $temp$func = func,
					$temp$acc = A3(
					func,
					key,
					value,
					A3(elm$core$Dict$foldl, func, acc, left)),
					$temp$dict = right;
				func = $temp$func;
				acc = $temp$acc;
				dict = $temp$dict;
				continue foldl;
			}
		}
	});
var elm$core$Dict$filter = F2(
	function (isGood, dict) {
		return A3(
			elm$core$Dict$foldl,
			F3(
				function (k, v, d) {
					return A2(isGood, k, v) ? A3(elm$core$Dict$insert, k, v, d) : d;
				}),
			elm$core$Dict$empty,
			dict);
	});
var elm$core$Dict$intersect = F2(
	function (t1, t2) {
		return A2(
			elm$core$Dict$filter,
			F2(
				function (k, _n0) {
					return A2(elm$core$Dict$member, k, t2);
				}),
			t1);
	});
var elm$core$Set$intersect = F2(
	function (_n0, _n1) {
		var dict1 = _n0.a;
		var dict2 = _n1.a;
		return elm$core$Set$Set_elm_builtin(
			A2(elm$core$Dict$intersect, dict1, dict2));
	});
var dillonkearns$elm_cli_options_parser$Cli$LowLevel$intersection = function (sets) {
	if (!sets.b) {
		return elm$core$Set$empty;
	} else {
		if (!sets.b.b) {
			var set = sets.a;
			return set;
		} else {
			var first = sets.a;
			var rest = sets.b;
			return A2(
				elm$core$Set$intersect,
				first,
				dillonkearns$elm_cli_options_parser$Cli$LowLevel$intersection(rest));
		}
	}
};
var dillonkearns$elm_cli_options_parser$Cli$LowLevel$oneOf = A2(
	elm$core$List$foldl,
	F2(
		function (x, acc) {
			return (!_Utils_eq(acc, elm$core$Maybe$Nothing)) ? acc : x;
		}),
	elm$core$Maybe$Nothing);
var dillonkearns$elm_cli_options_parser$Cli$LowLevel$ShowVersion = {$: 'ShowVersion'};
var dillonkearns$elm_cli_options_parser$Cli$LowLevel$showVersionParser = A2(
	dillonkearns$elm_cli_options_parser$Cli$OptionsParser$expectFlag,
	'version',
	dillonkearns$elm_cli_options_parser$Cli$OptionsParser$build(dillonkearns$elm_cli_options_parser$Cli$LowLevel$ShowVersion));
var dillonkearns$elm_cli_options_parser$Cli$OptionsParser$map = F2(
	function (mapFunction, optionsParser) {
		var decoder = optionsParser.a.decoder;
		return A2(
			dillonkearns$elm_cli_options_parser$Cli$OptionsParser$updateDecoder,
			A2(
				elm$core$Basics$composeR,
				decoder,
				elm$core$Result$map(
					elm$core$Tuple$mapSecond(mapFunction))),
			optionsParser);
	});
var dillonkearns$elm_cli_options_parser$Cli$UsageSpec$hasRestArgs = function (usageSpecs) {
	return A2(
		elm$core$List$any,
		function (usageSpec) {
			if (usageSpec.$ === 'RestArgs') {
				return true;
			} else {
				return false;
			}
		},
		usageSpecs);
};
var dillonkearns$elm_cli_options_parser$Cli$UsageSpec$isOperand = function (option) {
	switch (option.$) {
		case 'Operand':
			var operandName = option.a;
			var mutuallyExclusiveValues = option.b;
			var occurences = option.c;
			return true;
		case 'FlagOrKeywordArg':
			return false;
		default:
			return false;
	}
};
var dillonkearns$elm_cli_options_parser$Cli$OptionsParser$expectedPositionalArgCountOrFail = function (_n0) {
	var optionsParser = _n0.a;
	var decoder = optionsParser.decoder;
	var usageSpecs = optionsParser.usageSpecs;
	return dillonkearns$elm_cli_options_parser$Cli$OptionsParser$OptionsParser(
		_Utils_update(
			optionsParser,
			{
				decoder: function (stuff) {
					var operands = stuff.operands;
					return ((!dillonkearns$elm_cli_options_parser$Cli$UsageSpec$hasRestArgs(usageSpecs)) && (_Utils_cmp(
						elm$core$List$length(operands),
						elm$core$List$length(
							A2(elm$core$List$filter, dillonkearns$elm_cli_options_parser$Cli$UsageSpec$isOperand, usageSpecs))) > 0)) ? elm$core$Result$Err(
						dillonkearns$elm_cli_options_parser$Cli$Decode$MatchError('Wrong number of operands')) : decoder(stuff);
				}
			}));
};
var dillonkearns$elm_cli_options_parser$Cli$Decode$UnexpectedOptions = function (a) {
	return {$: 'UnexpectedOptions', a: a};
};
var dillonkearns$elm_cli_options_parser$Cli$UsageSpec$optionName = function (option) {
	if (option.$ === 'Flag') {
		var flagName = option.a;
		return flagName;
	} else {
		var keywordArgName = option.a;
		return keywordArgName;
	}
};
var elm_community$list_extra$List$Extra$find = F2(
	function (predicate, list) {
		find:
		while (true) {
			if (!list.b) {
				return elm$core$Maybe$Nothing;
			} else {
				var first = list.a;
				var rest = list.b;
				if (predicate(first)) {
					return elm$core$Maybe$Just(first);
				} else {
					var $temp$predicate = predicate,
						$temp$list = rest;
					predicate = $temp$predicate;
					list = $temp$list;
					continue find;
				}
			}
		}
	});
var dillonkearns$elm_cli_options_parser$Cli$UsageSpec$optionExists = F2(
	function (usageSpecs, thisOptionName) {
		return A2(
			elm_community$list_extra$List$Extra$find,
			function (option) {
				return _Utils_eq(
					dillonkearns$elm_cli_options_parser$Cli$UsageSpec$optionName(option),
					thisOptionName);
			},
			A2(
				elm$core$List$filterMap,
				function (usageSpec) {
					switch (usageSpec.$) {
						case 'FlagOrKeywordArg':
							var option = usageSpec.a;
							var mutuallyExclusiveValues = usageSpec.b;
							var occurences = usageSpec.c;
							return elm$core$Maybe$Just(option);
						case 'Operand':
							return elm$core$Maybe$Nothing;
						default:
							return elm$core$Maybe$Nothing;
					}
				},
				usageSpecs));
	});
var dillonkearns$elm_cli_options_parser$Cli$OptionsParser$unexpectedOptions_ = F2(
	function (_n0, options) {
		var usageSpecs = _n0.a.usageSpecs;
		return A2(
			elm$core$List$filterMap,
			function (_n1) {
				var optionName = _n1.a;
				var optionKind = _n1.b;
				return _Utils_eq(
					A2(dillonkearns$elm_cli_options_parser$Cli$UsageSpec$optionExists, usageSpecs, optionName),
					elm$core$Maybe$Nothing) ? elm$core$Maybe$Just(optionName) : elm$core$Maybe$Nothing;
			},
			options);
	});
var elm$core$List$isEmpty = function (xs) {
	if (!xs.b) {
		return true;
	} else {
		return false;
	}
};
var dillonkearns$elm_cli_options_parser$Cli$OptionsParser$failIfUnexpectedOptions = function (fullOptionsParser) {
	var optionsParser = fullOptionsParser.a;
	var decoder = optionsParser.decoder;
	var usageSpecs = optionsParser.usageSpecs;
	return dillonkearns$elm_cli_options_parser$Cli$OptionsParser$OptionsParser(
		_Utils_update(
			optionsParser,
			{
				decoder: function (flagsAndOperands) {
					var unexpectedOptions = A2(dillonkearns$elm_cli_options_parser$Cli$OptionsParser$unexpectedOptions_, fullOptionsParser, flagsAndOperands.options);
					return elm$core$List$isEmpty(unexpectedOptions) ? decoder(flagsAndOperands) : elm$core$Result$Err(
						dillonkearns$elm_cli_options_parser$Cli$Decode$UnexpectedOptions(unexpectedOptions));
				}
			}));
};
var dillonkearns$elm_cli_options_parser$Cli$OptionsParser$getDecoder = function (_n0) {
	var decoder = _n0.a.decoder;
	return decoder;
};
var dillonkearns$elm_cli_options_parser$Cli$OptionsParser$MatchResult$Match = function (a) {
	return {$: 'Match', a: a};
};
var dillonkearns$elm_cli_options_parser$Cli$OptionsParser$MatchResult$NoMatch = function (a) {
	return {$: 'NoMatch', a: a};
};
var dillonkearns$elm_cli_options_parser$Cli$UsageSpec$optionHasArg = F2(
	function (options, optionNameToCheck) {
		var _n0 = A2(
			elm_community$list_extra$List$Extra$find,
			function (spec) {
				return _Utils_eq(
					dillonkearns$elm_cli_options_parser$Cli$UsageSpec$optionName(spec),
					optionNameToCheck);
			},
			A2(
				elm$core$List$filterMap,
				function (spec) {
					switch (spec.$) {
						case 'FlagOrKeywordArg':
							var option = spec.a;
							var mutuallyExclusiveValues = spec.b;
							var occurences = spec.c;
							return elm$core$Maybe$Just(option);
						case 'Operand':
							return elm$core$Maybe$Nothing;
						default:
							return elm$core$Maybe$Nothing;
					}
				},
				options));
		if (_n0.$ === 'Just') {
			var option = _n0.a;
			if (option.$ === 'Flag') {
				var flagName = option.a;
				return false;
			} else {
				var optionName_ = option.a;
				return true;
			}
		} else {
			return false;
		}
	});
var dillonkearns$elm_cli_options_parser$Tokenizer$KeywordArg = function (a) {
	return {$: 'KeywordArg', a: a};
};
var dillonkearns$elm_cli_options_parser$Tokenizer$EqualsSplitter$KeywordArg = function (a) {
	return {$: 'KeywordArg', a: a};
};
var dillonkearns$elm_cli_options_parser$Tokenizer$EqualsSplitter$NotOption = {$: 'NotOption'};
var dillonkearns$elm_cli_options_parser$Tokenizer$EqualsSplitter$Option = function (a) {
	return {$: 'Option', a: a};
};
var dillonkearns$elm_cli_options_parser$Tokenizer$EqualsSplitter$split = function (string) {
	var _n0 = elm$core$String$toList(string);
	if (((_n0.b && ('-' === _n0.a.valueOf())) && _n0.b.b) && ('-' === _n0.b.a.valueOf())) {
		var _n1 = _n0.b;
		var optionName = _n1.b;
		var _n2 = A2(
			elm$core$String$split,
			'=',
			elm$core$String$fromList(optionName));
		if (_n2.b) {
			if (!_n2.b.b) {
				var singleOptionName = _n2.a;
				return dillonkearns$elm_cli_options_parser$Tokenizer$EqualsSplitter$Option(singleOptionName);
			} else {
				var firstOptionName = _n2.a;
				var splitAfterOptionName = _n2.b;
				return dillonkearns$elm_cli_options_parser$Tokenizer$EqualsSplitter$KeywordArg(
					{
						name: firstOptionName,
						value: elm$core$String$concat(splitAfterOptionName)
					});
			}
		} else {
			return dillonkearns$elm_cli_options_parser$Tokenizer$EqualsSplitter$Option(
				elm$core$String$fromList(optionName));
		}
	} else {
		return dillonkearns$elm_cli_options_parser$Tokenizer$EqualsSplitter$NotOption;
	}
};
var dillonkearns$elm_cli_options_parser$Tokenizer$flagsAndOperands_ = F3(
	function (usageSpecs, argv, soFar) {
		flagsAndOperands_:
		while (true) {
			if (!argv.b) {
				return soFar;
			} else {
				var firstArg = argv.a;
				var restArgs = argv.b;
				var _n1 = dillonkearns$elm_cli_options_parser$Tokenizer$EqualsSplitter$split(firstArg);
				switch (_n1.$) {
					case 'Option':
						var optionName = _n1.a;
						if (A2(dillonkearns$elm_cli_options_parser$Cli$UsageSpec$optionHasArg, usageSpecs, optionName)) {
							if (restArgs.b) {
								var secondArg = restArgs.a;
								var afterSecondArg = restArgs.b;
								var $temp$usageSpecs = usageSpecs,
									$temp$argv = afterSecondArg,
									$temp$soFar = {
									operands: soFar.operands,
									options: _Utils_ap(
										soFar.options,
										_List_fromArray(
											[
												A2(
												dillonkearns$elm_cli_options_parser$Tokenizer$ParsedOption,
												optionName,
												dillonkearns$elm_cli_options_parser$Tokenizer$KeywordArg(secondArg))
											]))
								};
								usageSpecs = $temp$usageSpecs;
								argv = $temp$argv;
								soFar = $temp$soFar;
								continue flagsAndOperands_;
							} else {
								var $temp$usageSpecs = usageSpecs,
									$temp$argv = restArgs,
									$temp$soFar = {
									operands: soFar.operands,
									options: _Utils_ap(
										soFar.options,
										_List_fromArray(
											[
												A2(dillonkearns$elm_cli_options_parser$Tokenizer$ParsedOption, optionName, dillonkearns$elm_cli_options_parser$Tokenizer$Flag)
											]))
								};
								usageSpecs = $temp$usageSpecs;
								argv = $temp$argv;
								soFar = $temp$soFar;
								continue flagsAndOperands_;
							}
						} else {
							var $temp$usageSpecs = usageSpecs,
								$temp$argv = restArgs,
								$temp$soFar = {
								operands: soFar.operands,
								options: _Utils_ap(
									soFar.options,
									_List_fromArray(
										[
											A2(dillonkearns$elm_cli_options_parser$Tokenizer$ParsedOption, optionName, dillonkearns$elm_cli_options_parser$Tokenizer$Flag)
										]))
							};
							usageSpecs = $temp$usageSpecs;
							argv = $temp$argv;
							soFar = $temp$soFar;
							continue flagsAndOperands_;
						}
					case 'KeywordArg':
						var name = _n1.a.name;
						var value = _n1.a.value;
						var $temp$usageSpecs = usageSpecs,
							$temp$argv = restArgs,
							$temp$soFar = {
							operands: soFar.operands,
							options: _Utils_ap(
								soFar.options,
								_List_fromArray(
									[
										A2(
										dillonkearns$elm_cli_options_parser$Tokenizer$ParsedOption,
										name,
										dillonkearns$elm_cli_options_parser$Tokenizer$KeywordArg(value))
									]))
						};
						usageSpecs = $temp$usageSpecs;
						argv = $temp$argv;
						soFar = $temp$soFar;
						continue flagsAndOperands_;
					default:
						var $temp$usageSpecs = usageSpecs,
							$temp$argv = restArgs,
							$temp$soFar = {
							operands: _Utils_ap(
								soFar.operands,
								_List_fromArray(
									[firstArg])),
							options: soFar.options
						};
						usageSpecs = $temp$usageSpecs;
						argv = $temp$argv;
						soFar = $temp$soFar;
						continue flagsAndOperands_;
				}
			}
		}
	});
var dillonkearns$elm_cli_options_parser$Tokenizer$flagsAndOperands = F2(
	function (usageSpecs, argv) {
		return A3(
			dillonkearns$elm_cli_options_parser$Tokenizer$flagsAndOperands_,
			usageSpecs,
			argv,
			{operands: _List_Nil, options: _List_Nil});
	});
var dillonkearns$elm_cli_options_parser$Cli$OptionsParser$tryMatch = F2(
	function (argv, optionsParser) {
		var usageSpecs = optionsParser.a.usageSpecs;
		var subCommand = optionsParser.a.subCommand;
		var flagsAndOperands = function (record) {
			var _n5 = _Utils_Tuple2(subCommand, record.operands);
			if (_n5.a.$ === 'Nothing') {
				var _n6 = _n5.a;
				return elm$core$Result$Ok(
					{operands: record.operands, options: record.options, usageSpecs: usageSpecs});
			} else {
				if (_n5.b.b) {
					var buildSubCommandName = _n5.a.a;
					var _n7 = _n5.b;
					var actualSubCommand = _n7.a;
					var remainingOperands = _n7.b;
					return _Utils_eq(actualSubCommand, buildSubCommandName) ? elm$core$Result$Ok(
						{operands: remainingOperands, options: record.options, usageSpecs: usageSpecs}) : elm$core$Result$Err(
						{errorMessage: 'Sub optionsParser does not match', options: record.options});
				} else {
					var buildSubCommandName = _n5.a.a;
					return elm$core$Result$Err(
						{errorMessage: 'No sub optionsParser provided', options: record.options});
				}
			}
		}(
			A2(dillonkearns$elm_cli_options_parser$Tokenizer$flagsAndOperands, usageSpecs, argv));
		var decoder = dillonkearns$elm_cli_options_parser$Cli$OptionsParser$getDecoder(
			dillonkearns$elm_cli_options_parser$Cli$OptionsParser$failIfUnexpectedOptions(
				dillonkearns$elm_cli_options_parser$Cli$OptionsParser$expectedPositionalArgCountOrFail(optionsParser)));
		if (flagsAndOperands.$ === 'Ok') {
			var actualFlagsAndOperands = flagsAndOperands.a;
			return function (result) {
				if (result.$ === 'Err') {
					var error = result.a;
					switch (error.$) {
						case 'MatchError':
							var matchError = error.a;
							return dillonkearns$elm_cli_options_parser$Cli$OptionsParser$MatchResult$NoMatch(_List_Nil);
						case 'UnrecoverableValidationError':
							var validationError = error.a;
							return dillonkearns$elm_cli_options_parser$Cli$OptionsParser$MatchResult$Match(
								elm$core$Result$Err(
									_List_fromArray(
										[validationError])));
						default:
							var unexpectedOptions = error.a;
							return dillonkearns$elm_cli_options_parser$Cli$OptionsParser$MatchResult$NoMatch(unexpectedOptions);
					}
				} else {
					if (!result.a.a.b) {
						var _n3 = result.a;
						var value = _n3.b;
						return dillonkearns$elm_cli_options_parser$Cli$OptionsParser$MatchResult$Match(
							elm$core$Result$Ok(value));
					} else {
						var _n4 = result.a;
						var validationErrors = _n4.a;
						var value = _n4.b;
						return dillonkearns$elm_cli_options_parser$Cli$OptionsParser$MatchResult$Match(
							elm$core$Result$Err(validationErrors));
					}
				}
			}(
				decoder(actualFlagsAndOperands));
		} else {
			var errorMessage = flagsAndOperands.a.errorMessage;
			var options = flagsAndOperands.a.options;
			return dillonkearns$elm_cli_options_parser$Cli$OptionsParser$MatchResult$NoMatch(
				A2(dillonkearns$elm_cli_options_parser$Cli$OptionsParser$unexpectedOptions_, optionsParser, options));
		}
	});
var dillonkearns$elm_cli_options_parser$Cli$OptionsParser$MatchResult$matchResultToMaybe = function (matchResult) {
	if (matchResult.$ === 'Match') {
		var thing = matchResult.a;
		return elm$core$Maybe$Just(thing);
	} else {
		var unknownFlags = matchResult.a;
		return elm$core$Maybe$Nothing;
	}
};
var dillonkearns$elm_cli_options_parser$Cli$LowLevel$try = F2(
	function (optionsParsers, argv) {
		var matchResults = A2(
			elm$core$List$map,
			dillonkearns$elm_cli_options_parser$Cli$OptionsParser$tryMatch(
				A2(elm$core$List$drop, 2, argv)),
			_Utils_ap(
				A2(
					elm$core$List$map,
					dillonkearns$elm_cli_options_parser$Cli$OptionsParser$end,
					A2(
						elm$core$List$map,
						dillonkearns$elm_cli_options_parser$Cli$OptionsParser$map(dillonkearns$elm_cli_options_parser$Cli$LowLevel$UserParser),
						optionsParsers)),
				_List_fromArray(
					[
						A2(
						dillonkearns$elm_cli_options_parser$Cli$OptionsParser$map,
						dillonkearns$elm_cli_options_parser$Cli$LowLevel$SystemParser,
						dillonkearns$elm_cli_options_parser$Cli$OptionsParser$end(dillonkearns$elm_cli_options_parser$Cli$LowLevel$helpParser)),
						A2(
						dillonkearns$elm_cli_options_parser$Cli$OptionsParser$map,
						dillonkearns$elm_cli_options_parser$Cli$LowLevel$SystemParser,
						dillonkearns$elm_cli_options_parser$Cli$OptionsParser$end(dillonkearns$elm_cli_options_parser$Cli$LowLevel$showVersionParser))
					])));
		var commonUnmatchedFlags = elm$core$Set$toList(
			dillonkearns$elm_cli_options_parser$Cli$LowLevel$intersection(
				A2(
					elm$core$List$map,
					function (matchResult) {
						if (matchResult.$ === 'NoMatch') {
							var unknownFlags = matchResult.a;
							return elm$core$Set$fromList(unknownFlags);
						} else {
							return elm$core$Set$empty;
						}
					},
					matchResults)));
		return function (maybeResult) {
			if (maybeResult.$ === 'Just') {
				var result = maybeResult.a;
				if (result.$ === 'Ok') {
					var msg = result.a;
					if (msg.$ === 'SystemParser') {
						var systemMsg = msg.a;
						return systemMsg;
					} else {
						var userMsg = msg.a;
						return dillonkearns$elm_cli_options_parser$Cli$LowLevel$Match(userMsg);
					}
				} else {
					var validationErrors = result.a;
					return dillonkearns$elm_cli_options_parser$Cli$LowLevel$ValidationErrors(validationErrors);
				}
			} else {
				return dillonkearns$elm_cli_options_parser$Cli$LowLevel$NoMatch(commonUnmatchedFlags);
			}
		}(
			dillonkearns$elm_cli_options_parser$Cli$LowLevel$oneOf(
				A2(elm$core$List$map, dillonkearns$elm_cli_options_parser$Cli$OptionsParser$MatchResult$matchResultToMaybe, matchResults)));
	});
var dillonkearns$elm_cli_options_parser$Cli$OptionsParser$getSubCommand = function (_n0) {
	var subCommand = _n0.a.subCommand;
	return subCommand;
};
var dillonkearns$elm_cli_options_parser$Cli$OptionsParser$getUsageSpecs = function (_n0) {
	var usageSpecs = _n0.a.usageSpecs;
	return usageSpecs;
};
var dillonkearns$elm_cli_options_parser$Cli$Program$CustomMatch = function (a) {
	return {$: 'CustomMatch', a: a};
};
var dillonkearns$elm_cli_options_parser$Cli$Program$SystemMessage = F2(
	function (a, b) {
		return {$: 'SystemMessage', a: a, b: b};
	});
var dillonkearns$elm_cli_options_parser$Fuzzy$Match = F4(
	function (score, offset, length, keys) {
		return {keys: keys, length: length, offset: offset, score: score};
	});
var dillonkearns$elm_cli_options_parser$Fuzzy$Result = F2(
	function (score, matches) {
		return {matches: matches, score: score};
	});
var dillonkearns$elm_cli_options_parser$Fuzzy$ConfigModel = F4(
	function (addPenalty, movePenalty, removePenalty, insertPenalty) {
		return {addPenalty: addPenalty, insertPenalty: insertPenalty, movePenalty: movePenalty, removePenalty: removePenalty};
	});
var dillonkearns$elm_cli_options_parser$Fuzzy$defaultConfig = A4(dillonkearns$elm_cli_options_parser$Fuzzy$ConfigModel, 10, 1000, 10000, 1);
var elm$core$String$indexes = _String_indexes;
var dillonkearns$elm_cli_options_parser$Fuzzy$dissect = F2(
	function (separators, strings) {
		dissect:
		while (true) {
			if (!separators.b) {
				return strings;
			} else {
				var head = separators.a;
				var tail = separators.b;
				var dissectEntry = function (entry) {
					var separatorLength = elm$core$String$length(head);
					var slice = F2(
						function (index, _n1) {
							var prevIndex = _n1.a;
							var sum = _n1.b;
							var separatorSlice = _List_fromArray(
								[
									A3(elm$core$String$slice, index, index + separatorLength, entry)
								]);
							var precedingSlice = _Utils_eq(prevIndex, index) ? _List_Nil : _List_fromArray(
								[
									A3(elm$core$String$slice, prevIndex, index, entry)
								]);
							return _Utils_Tuple2(
								index + separatorLength,
								_Utils_ap(
									sum,
									_Utils_ap(precedingSlice, separatorSlice)));
						});
					var indexes = A2(elm$core$String$indexes, head, entry);
					var result = A3(
						elm$core$List$foldl,
						slice,
						_Utils_Tuple2(0, _List_Nil),
						indexes);
					var lastIndex = result.a;
					var first = result.b;
					var entryLength = elm$core$String$length(entry);
					var last = _Utils_eq(lastIndex, entryLength) ? _List_Nil : _List_fromArray(
						[
							A3(elm$core$String$slice, lastIndex, entryLength, entry)
						]);
					return _Utils_ap(first, last);
				};
				var dissected = A3(
					elm$core$List$foldl,
					F2(
						function (e, s) {
							return _Utils_ap(
								s,
								dissectEntry(e));
						}),
					_List_Nil,
					strings);
				var $temp$separators = tail,
					$temp$strings = dissected;
				separators = $temp$separators;
				strings = $temp$strings;
				continue dissect;
			}
		}
	});
var dillonkearns$elm_cli_options_parser$Fuzzy$initialModel = _List_Nil;
var elm$core$List$partition = F2(
	function (pred, list) {
		var step = F2(
			function (x, _n0) {
				var trues = _n0.a;
				var falses = _n0.b;
				return pred(x) ? _Utils_Tuple2(
					A2(elm$core$List$cons, x, trues),
					falses) : _Utils_Tuple2(
					trues,
					A2(elm$core$List$cons, x, falses));
			});
		return A3(
			elm$core$List$foldr,
			step,
			_Utils_Tuple2(_List_Nil, _List_Nil),
			list);
	});
var dillonkearns$elm_cli_options_parser$Fuzzy$quickSort = function (entries) {
	if (!entries.b) {
		return _Utils_Tuple2(0, _List_Nil);
	} else {
		var head = entries.a;
		var tail = entries.b;
		var partition = A2(
			elm$core$List$partition,
			function (e) {
				return _Utils_cmp(e, head) < 0;
			},
			tail);
		var smaller = dillonkearns$elm_cli_options_parser$Fuzzy$quickSort(partition.a);
		var penalty = elm$core$List$isEmpty(smaller.b) ? 0 : 1;
		var larger = dillonkearns$elm_cli_options_parser$Fuzzy$quickSort(partition.b);
		return _Utils_Tuple2(
			(smaller.a + penalty) + larger.a,
			_Utils_ap(
				smaller.b,
				_Utils_ap(
					_List_fromArray(
						[head]),
					larger.b)));
	}
};
var elm$core$String$foldl = _String_foldl;
var dillonkearns$elm_cli_options_parser$Fuzzy$distance = F3(
	function (config, needle, hay) {
		var accumulateInsertPenalty = F2(
			function (elem, result) {
				if (result.a.$ === 'Just') {
					var prev = result.a.a;
					var score = result.b;
					return _Utils_Tuple2(
						elm$core$Maybe$Just(elem),
						((elem - 1) - prev) + score);
				} else {
					var _n2 = result.a;
					var score = result.b;
					return _Utils_Tuple2(
						elm$core$Maybe$Just(elem),
						score);
				}
			});
		var accumulate = F2(
			function (c, indexList) {
				var indexes = A2(
					elm$core$String$indexes,
					elm$core$String$fromChar(c),
					hay);
				var hayIndex = elm$core$List$head(
					A2(
						elm$core$List$filter,
						function (e) {
							return !A2(elm$core$List$member, e, indexList);
						},
						indexes));
				if (hayIndex.$ === 'Just') {
					var v = hayIndex.a;
					return _Utils_ap(
						indexList,
						_List_fromArray(
							[v]));
				} else {
					return indexList;
				}
			});
		var accumulated = A3(elm$core$String$foldl, accumulate, dillonkearns$elm_cli_options_parser$Fuzzy$initialModel, needle);
		var hPenalty = (elm$core$String$length(hay) - elm$core$List$length(accumulated)) * config.addPenalty;
		var nPenalty = (elm$core$String$length(needle) - elm$core$List$length(accumulated)) * config.removePenalty;
		var sorted = dillonkearns$elm_cli_options_parser$Fuzzy$quickSort(accumulated);
		var iPenalty = A3(
			elm$core$List$foldl,
			accumulateInsertPenalty,
			_Utils_Tuple2(elm$core$Maybe$Nothing, 0),
			sorted.b).b * config.insertPenalty;
		var mPenalty = sorted.a * config.movePenalty;
		return A4(
			dillonkearns$elm_cli_options_parser$Fuzzy$Match,
			((mPenalty + hPenalty) + nPenalty) + iPenalty,
			0,
			elm$core$String$length(hay),
			sorted.b);
	});
var elm$core$List$repeatHelp = F3(
	function (result, n, value) {
		repeatHelp:
		while (true) {
			if (n <= 0) {
				return result;
			} else {
				var $temp$result = A2(elm$core$List$cons, value, result),
					$temp$n = n - 1,
					$temp$value = value;
				result = $temp$result;
				n = $temp$n;
				value = $temp$value;
				continue repeatHelp;
			}
		}
	});
var elm$core$List$repeat = F2(
	function (n, value) {
		return A3(elm$core$List$repeatHelp, _List_Nil, n, value);
	});
var dillonkearns$elm_cli_options_parser$Fuzzy$padHays = F2(
	function (ns, hs) {
		return _Utils_ap(
			hs,
			A2(
				elm$core$List$repeat,
				ns - elm$core$List$length(hs),
				''));
	});
var elm$core$List$takeReverse = F3(
	function (n, list, kept) {
		takeReverse:
		while (true) {
			if (n <= 0) {
				return kept;
			} else {
				if (!list.b) {
					return kept;
				} else {
					var x = list.a;
					var xs = list.b;
					var $temp$n = n - 1,
						$temp$list = xs,
						$temp$kept = A2(elm$core$List$cons, x, kept);
					n = $temp$n;
					list = $temp$list;
					kept = $temp$kept;
					continue takeReverse;
				}
			}
		}
	});
var elm$core$List$takeTailRec = F2(
	function (n, list) {
		return elm$core$List$reverse(
			A3(elm$core$List$takeReverse, n, list, _List_Nil));
	});
var elm$core$List$takeFast = F3(
	function (ctr, n, list) {
		if (n <= 0) {
			return _List_Nil;
		} else {
			var _n0 = _Utils_Tuple2(n, list);
			_n0$1:
			while (true) {
				_n0$5:
				while (true) {
					if (!_n0.b.b) {
						return list;
					} else {
						if (_n0.b.b.b) {
							switch (_n0.a) {
								case 1:
									break _n0$1;
								case 2:
									var _n2 = _n0.b;
									var x = _n2.a;
									var _n3 = _n2.b;
									var y = _n3.a;
									return _List_fromArray(
										[x, y]);
								case 3:
									if (_n0.b.b.b.b) {
										var _n4 = _n0.b;
										var x = _n4.a;
										var _n5 = _n4.b;
										var y = _n5.a;
										var _n6 = _n5.b;
										var z = _n6.a;
										return _List_fromArray(
											[x, y, z]);
									} else {
										break _n0$5;
									}
								default:
									if (_n0.b.b.b.b && _n0.b.b.b.b.b) {
										var _n7 = _n0.b;
										var x = _n7.a;
										var _n8 = _n7.b;
										var y = _n8.a;
										var _n9 = _n8.b;
										var z = _n9.a;
										var _n10 = _n9.b;
										var w = _n10.a;
										var tl = _n10.b;
										return (ctr > 1000) ? A2(
											elm$core$List$cons,
											x,
											A2(
												elm$core$List$cons,
												y,
												A2(
													elm$core$List$cons,
													z,
													A2(
														elm$core$List$cons,
														w,
														A2(elm$core$List$takeTailRec, n - 4, tl))))) : A2(
											elm$core$List$cons,
											x,
											A2(
												elm$core$List$cons,
												y,
												A2(
													elm$core$List$cons,
													z,
													A2(
														elm$core$List$cons,
														w,
														A3(elm$core$List$takeFast, ctr + 1, n - 4, tl)))));
									} else {
										break _n0$5;
									}
							}
						} else {
							if (_n0.a === 1) {
								break _n0$1;
							} else {
								break _n0$5;
							}
						}
					}
				}
				return list;
			}
			var _n1 = _n0.b;
			var x = _n1.a;
			return _List_fromArray(
				[x]);
		}
	});
var elm$core$List$take = F2(
	function (n, list) {
		return A3(elm$core$List$takeFast, 0, n, list);
	});
var dillonkearns$elm_cli_options_parser$Fuzzy$reduceLeft = F3(
	function (ns, c, hs) {
		return _Utils_Tuple2(
			A3(
				elm$core$List$foldl,
				F2(
					function (e, sum) {
						return elm$core$String$length(e) + sum;
					}),
				0,
				A2(elm$core$List$take, c, hs)),
			A2(elm$core$List$drop, c, hs));
	});
var dillonkearns$elm_cli_options_parser$Fuzzy$reduceRight = F3(
	function (ns, c, hs) {
		return A2(
			elm$core$List$take,
			elm$core$List$length(hs) - ((ns - c) - 1),
			hs);
	});
var dillonkearns$elm_cli_options_parser$Fuzzy$match = F4(
	function (configs, separators, needle, hay) {
		var reduceHays = F3(
			function (ns, c, hs) {
				return A3(
					dillonkearns$elm_cli_options_parser$Fuzzy$reduceLeft,
					ns,
					c,
					A3(
						dillonkearns$elm_cli_options_parser$Fuzzy$reduceRight,
						ns,
						c,
						A2(dillonkearns$elm_cli_options_parser$Fuzzy$padHays, ns, hs)));
			});
		var needles = A2(
			dillonkearns$elm_cli_options_parser$Fuzzy$dissect,
			separators,
			_List_fromArray(
				[needle]));
		var initialResult = A2(dillonkearns$elm_cli_options_parser$Fuzzy$Result, 0, _List_Nil);
		var hays = A2(
			dillonkearns$elm_cli_options_parser$Fuzzy$dissect,
			separators,
			_List_fromArray(
				[hay]));
		var accumulateConfig = F2(
			function (c, sum) {
				switch (c.$) {
					case 'AddPenalty':
						var val = c.a;
						return _Utils_update(
							sum,
							{addPenalty: val});
					case 'RemovePenalty':
						var val = c.a;
						return _Utils_update(
							sum,
							{removePenalty: val});
					case 'MovePenalty':
						var val = c.a;
						return _Utils_update(
							sum,
							{movePenalty: val});
					default:
						var val = c.a;
						return _Utils_update(
							sum,
							{insertPenalty: val});
				}
			});
		var config = A3(elm$core$List$foldl, accumulateConfig, dillonkearns$elm_cli_options_parser$Fuzzy$defaultConfig, configs);
		var minScore = F2(
			function (n, _n2) {
				var offset = _n2.a;
				var hs = _n2.b;
				var initialPenalty = (((elm$core$String$length(n) * config.removePenalty) + (elm$core$String$length(n) * config.movePenalty)) + (elm$core$String$length(hay) * config.addPenalty)) + ((elm$core$String$length(hay) * elm$core$String$length(n)) * config.insertPenalty);
				var initialMatch = A4(dillonkearns$elm_cli_options_parser$Fuzzy$Match, initialPenalty, offset, 0, _List_Nil);
				var accumulateMatch = F2(
					function (e, _n1) {
						var prev = _n1.a;
						var prevOffset = _n1.b;
						var newOffset = prevOffset + elm$core$String$length(e);
						var eDistance = A3(dillonkearns$elm_cli_options_parser$Fuzzy$distance, config, n, e);
						var newMatch = (_Utils_cmp(eDistance.score, prev.score) < 0) ? _Utils_update(
							eDistance,
							{offset: prevOffset}) : prev;
						return _Utils_Tuple2(newMatch, newOffset);
					});
				return A3(
					elm$core$List$foldl,
					accumulateMatch,
					_Utils_Tuple2(initialMatch, offset),
					hs).a;
			});
		var accumulateResult = F2(
			function (n, _n0) {
				var prev = _n0.a;
				var num = _n0.b;
				var matchResult = A2(
					minScore,
					n,
					A3(
						reduceHays,
						elm$core$List$length(needles),
						num,
						hays));
				var newResult = _Utils_update(
					prev,
					{
						matches: _Utils_ap(
							prev.matches,
							_List_fromArray(
								[matchResult])),
						score: matchResult.score + prev.score
					});
				return _Utils_Tuple2(newResult, num + 1);
			});
		return A3(
			elm$core$List$foldl,
			accumulateResult,
			_Utils_Tuple2(initialResult, 0),
			needles).a;
	});
var dillonkearns$elm_cli_options_parser$TypoSuggestion$SubCommand = function (a) {
	return {$: 'SubCommand', a: a};
};
var dillonkearns$elm_cli_options_parser$TypoSuggestion$buildSubCommandSuggestions = function (optionsParsers) {
	return A2(
		elm$core$List$map,
		dillonkearns$elm_cli_options_parser$TypoSuggestion$SubCommand,
		A2(
			elm$core$List$filterMap,
			elm$core$Basics$identity,
			A2(
				elm$core$List$map,
				function ($) {
					return $.subCommand;
				},
				optionsParsers)));
};
var dillonkearns$elm_cli_options_parser$TypoSuggestion$name = function (typoSuggestion) {
	if (typoSuggestion.$ === 'Flag') {
		var suggestionName = typoSuggestion.a;
		return suggestionName;
	} else {
		var suggestionName = typoSuggestion.a;
		return suggestionName;
	}
};
var dillonkearns$elm_cli_options_parser$Cli$UsageSpec$name = function (usageSpec) {
	switch (usageSpec.$) {
		case 'FlagOrKeywordArg':
			var option = usageSpec.a;
			var mutuallyExclusiveValues = usageSpec.b;
			var occurences = usageSpec.c;
			if (option.$ === 'Flag') {
				var flagName = option.a;
				return flagName;
			} else {
				var keywordArgName = option.a;
				return keywordArgName;
			}
		case 'Operand':
			var operandOptionName = usageSpec.a;
			var mutuallyExclusiveValues = usageSpec.b;
			var occurences = usageSpec.c;
			return operandOptionName;
		default:
			var restArgsDescription = usageSpec.a;
			return restArgsDescription;
	}
};
var dillonkearns$elm_cli_options_parser$TypoSuggestion$Flag = function (a) {
	return {$: 'Flag', a: a};
};
var elm_community$list_extra$List$Extra$uniqueBy = F2(
	function (f, list) {
		return A4(elm_community$list_extra$List$Extra$uniqueHelp, f, elm$core$Set$empty, list, _List_Nil);
	});
var dillonkearns$elm_cli_options_parser$TypoSuggestion$optionSuggestions = function (optionsParsers) {
	return A2(
		elm$core$List$map,
		dillonkearns$elm_cli_options_parser$TypoSuggestion$Flag,
		A2(
			elm$core$List$map,
			dillonkearns$elm_cli_options_parser$Cli$UsageSpec$name,
			A2(
				elm_community$list_extra$List$Extra$uniqueBy,
				dillonkearns$elm_cli_options_parser$Cli$UsageSpec$name,
				elm$core$List$concat(
					A2(
						elm$core$List$map,
						function ($) {
							return $.usageSpecs;
						},
						optionsParsers)))));
};
var elm$core$List$sortBy = _List_sortBy;
var dillonkearns$elm_cli_options_parser$TypoSuggestion$getSuggestions = F2(
	function (optionsParsers, unexpectedOption) {
		var something = F2(
			function (needle, hay) {
				return A4(dillonkearns$elm_cli_options_parser$Fuzzy$match, _List_Nil, _List_Nil, needle, hay).score;
			});
		return A2(
			elm$core$List$sortBy,
			A2(
				elm$core$Basics$composeR,
				dillonkearns$elm_cli_options_parser$TypoSuggestion$name,
				something(unexpectedOption)),
			_Utils_ap(
				dillonkearns$elm_cli_options_parser$TypoSuggestion$buildSubCommandSuggestions(optionsParsers),
				dillonkearns$elm_cli_options_parser$TypoSuggestion$optionSuggestions(optionsParsers)));
	});
var dillonkearns$elm_cli_options_parser$TypoSuggestion$suggestionToString = function (typoSuggestion) {
	return '`' + (function () {
		if (typoSuggestion.$ === 'Flag') {
			var flagName = typoSuggestion.a;
			return '--' + flagName;
		} else {
			var buildSubCommandName = typoSuggestion.a;
			return buildSubCommandName;
		}
	}() + '`');
};
var dillonkearns$elm_cli_options_parser$TypoSuggestion$toMessage = F2(
	function (optionsParsers, unexpectedOption) {
		var _n0 = elm$core$List$head(
			A2(dillonkearns$elm_cli_options_parser$TypoSuggestion$getSuggestions, optionsParsers, unexpectedOption));
		if (_n0.$ === 'Just') {
			var bestSuggestion = _n0.a;
			return 'The `--' + (unexpectedOption + ('` flag was not found. Maybe it was one of these typos?\n\n`--' + (unexpectedOption + ('` <> ' + dillonkearns$elm_cli_options_parser$TypoSuggestion$suggestionToString(bestSuggestion)))));
		} else {
			return 'TODO';
		}
	});
var elm_community$list_extra$List$Extra$last = function (items) {
	last:
	while (true) {
		if (!items.b) {
			return elm$core$Maybe$Nothing;
		} else {
			if (!items.b.b) {
				var x = items.a;
				return elm$core$Maybe$Just(x);
			} else {
				var rest = items.b;
				var $temp$items = rest;
				items = $temp$items;
				continue last;
			}
		}
	}
};
var dillonkearns$elm_cli_options_parser$Cli$Program$run = F3(
	function (_n0, argv, versionMessage) {
		var optionsParsers = _n0.a.optionsParsers;
		var matchResult = A2(dillonkearns$elm_cli_options_parser$Cli$LowLevel$try, optionsParsers, argv);
		var errorMessage = 'TODO - show error message explaining that user needs to pass unmodified `process.argv` from node here.';
		var programName = function () {
			if (argv.b && argv.b.b) {
				var first = argv.a;
				var _n4 = argv.b;
				var programPath = _n4.a;
				return A2(
					elm$core$Maybe$withDefault,
					errorMessage,
					elm_community$list_extra$List$Extra$last(
						A2(elm$core$String$split, '/', programPath)));
			} else {
				return errorMessage;
			}
		}();
		switch (matchResult.$) {
			case 'NoMatch':
				var unexpectedOptions = matchResult.a;
				return _Utils_eq(unexpectedOptions, _List_Nil) ? A2(
					dillonkearns$elm_cli_options_parser$Cli$Program$SystemMessage,
					dillonkearns$elm_cli_options_parser$Cli$ExitStatus$Failure,
					'\nNo matching optionsParser...\n\nUsage:\n\n' + A2(dillonkearns$elm_cli_options_parser$Cli$LowLevel$helpText, programName, optionsParsers)) : A2(
					dillonkearns$elm_cli_options_parser$Cli$Program$SystemMessage,
					dillonkearns$elm_cli_options_parser$Cli$ExitStatus$Failure,
					A2(
						elm$core$String$join,
						'\n',
						A2(
							elm$core$List$map,
							dillonkearns$elm_cli_options_parser$TypoSuggestion$toMessage(
								A2(
									elm$core$List$map,
									function (optionsParser) {
										return {
											subCommand: dillonkearns$elm_cli_options_parser$Cli$OptionsParser$getSubCommand(optionsParser),
											usageSpecs: dillonkearns$elm_cli_options_parser$Cli$OptionsParser$getUsageSpecs(optionsParser)
										};
									},
									optionsParsers)),
							unexpectedOptions)));
			case 'ValidationErrors':
				var validationErrors = matchResult.a;
				return A2(
					dillonkearns$elm_cli_options_parser$Cli$Program$SystemMessage,
					dillonkearns$elm_cli_options_parser$Cli$ExitStatus$Failure,
					'Validation errors:\n\n' + A2(
						elm$core$String$join,
						'\n',
						A2(
							elm$core$List$map,
							function (_n2) {
								var name = _n2.name;
								var invalidReason = _n2.invalidReason;
								return '`' + (name + ('` failed a validation. ' + invalidReason));
							},
							validationErrors)));
			case 'Match':
				var msg = matchResult.a;
				return dillonkearns$elm_cli_options_parser$Cli$Program$CustomMatch(msg);
			case 'ShowHelp':
				return A2(
					dillonkearns$elm_cli_options_parser$Cli$Program$SystemMessage,
					dillonkearns$elm_cli_options_parser$Cli$ExitStatus$Success,
					A2(dillonkearns$elm_cli_options_parser$Cli$LowLevel$helpText, programName, optionsParsers));
			default:
				return A2(dillonkearns$elm_cli_options_parser$Cli$Program$SystemMessage, dillonkearns$elm_cli_options_parser$Cli$ExitStatus$Success, versionMessage);
		}
	});
var dillonkearns$elm_cli_options_parser$Cli$Program$statefulInit = F2(
	function (options, flags) {
		var matchResult = A3(dillonkearns$elm_cli_options_parser$Cli$Program$run, options.config, flags.argv, flags.versionMessage);
		var cmd = function () {
			if (matchResult.$ === 'SystemMessage') {
				var exitStatus = matchResult.a;
				var message = matchResult.b;
				if (exitStatus.$ === 'Failure') {
					return _Utils_Tuple2(
						dillonkearns$elm_cli_options_parser$Cli$Program$ShowSystemMessage,
						options.printAndExitFailure(message));
				} else {
					return _Utils_Tuple2(
						dillonkearns$elm_cli_options_parser$Cli$Program$ShowSystemMessage,
						options.printAndExitSuccess(message));
				}
			} else {
				var cliOptions = matchResult.a;
				var _n2 = A2(options.init, flags, cliOptions);
				var userModel = _n2.a;
				var userCmd = _n2.b;
				return _Utils_Tuple2(
					A2(dillonkearns$elm_cli_options_parser$Cli$Program$UserModel, userModel, cliOptions),
					userCmd);
			}
		}();
		return cmd;
	});
var elm$core$Platform$worker = _Platform_worker;
var elm$core$Platform$Sub$batch = _Platform_batch;
var elm$core$Platform$Sub$none = elm$core$Platform$Sub$batch(_List_Nil);
var dillonkearns$elm_cli_options_parser$Cli$Program$stateful = function (options) {
	return elm$core$Platform$worker(
		{
			init: dillonkearns$elm_cli_options_parser$Cli$Program$statefulInit(options),
			subscriptions: function (model) {
				if (model.$ === 'UserModel') {
					var actualModel = model.a;
					var cliOptions = model.b;
					return options.subscriptions(actualModel);
				} else {
					return elm$core$Platform$Sub$none;
				}
			},
			update: F2(
				function (msg, model) {
					if (model.$ === 'UserModel') {
						var actualModel = model.a;
						var cliOptions = model.b;
						var _n2 = A3(options.update, cliOptions, msg, actualModel);
						var userModel = _n2.a;
						var userCmd = _n2.b;
						return _Utils_Tuple2(
							A2(dillonkearns$elm_cli_options_parser$Cli$Program$UserModel, userModel, cliOptions),
							userCmd);
					} else {
						return _Utils_Tuple2(dillonkearns$elm_cli_options_parser$Cli$Program$ShowSystemMessage, elm$core$Platform$Cmd$none);
					}
				})
		});
};
var elm$json$Json$Decode$list = _Json_decodeList;
var author$project$Main$main = dillonkearns$elm_cli_options_parser$Cli$Program$stateful(
	{
		config: author$project$Main$config,
		init: author$project$Main$init,
		printAndExitFailure: author$project$Main$exit(1),
		printAndExitSuccess: author$project$Main$exit(0),
		subscriptions: author$project$Main$subscriptions,
		update: author$project$Main$update
	});
_Platform_export({'Main':{'init':author$project$Main$main(
	A2(
		elm$json$Json$Decode$andThen,
		function (versionMessage) {
			return A2(
				elm$json$Json$Decode$andThen,
				function (argv) {
					return elm$json$Json$Decode$succeed(
						{argv: argv, versionMessage: versionMessage});
				},
				A2(
					elm$json$Json$Decode$field,
					'argv',
					elm$json$Json$Decode$list(elm$json$Json$Decode$string)));
		},
		A2(elm$json$Json$Decode$field, 'versionMessage', elm$json$Json$Decode$string)))(0)}});}(this));