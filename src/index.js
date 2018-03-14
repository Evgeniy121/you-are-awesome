// DO WHATEVER YOU WANT HERE
var con=0;
const createEnumerableProperty = () => {};
const createNotEnumerableProperty = (Name) => {
  let s = Symbol(Name);

    return s;

};
const createProtoMagicObject = () => {

var fun =  Function();
      fun.prototype = fun.__proto__;
      return fun;
      };
const incrementor = () => {
con++;
return  incrementor;

};
incrementor.valueOf = function() {
    return con;
  }
  incr=0;
 this.in = 1;
const asyncIncrementor = () => {



  return this.in++;

};
const createIncrementer = () => {};


const returnBackInSecond = () => {};
const getDeepPropertiesCount = () => {};
const createSerializedObject = () => {};
const toBuffer = () => {};
const sortByProto = (arr) => {


  arr.sort();
      return (arr);

};

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
