const createEnumerableProperty = (prop) => {
	return prop};

 const createNotEnumerableProperty = (prop) => {
	Object.defineProperty(Object.prototype, prop, {enumerable: false, get: function(){return prop},
	set: function(new_val){prop = new_val}})
	return prop};

const createProtoMagicObject = () => {function a(){}; a.prototype = a.__proto__; return a};
let i = 0;		
const incrementor = () => {i++; incrementor.valueOf = function a(){return i}; return incrementor};
let count = 1;							
const asyncIncrementor = () =>{return new Promise(resolve => {resolve(count++); });};

const createIncrementer = () => {function*gen(){let index = 0; while(index<=2)yield index++}};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = (param) => {return new Promise(resolve=>{setTimeout(()=>{resolve(param);}, 1000);});};
const getDeepPropertiesCount = () => {};
const createSerializedObject = () => {return null};
const toBuffer = () => {};
const sortByProto = (array) => {return array.sort(function(a, b){a.__proto__- b.__proto__})};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;