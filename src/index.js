// DO WHATEVER YOU WANT HERE
var con=0;
const createEnumerableProperty = () => {};
const createNotEnumerableProperty = (Name) => {
  let s = Symbol(Name);

    return s;

};
const createProtoMagicObject = () => {};
const incrementor = () => {
con++;
return  incrementor;

};
incrementor.valueOf = function() {
    return con;
  }
  incr=0;
const asyncIncrementor = () => {


};
const createIncrementer = () => {};

// return same argument not earlier than in one second, and not later, than in two
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
