var pluralize = function(str , i){
  if(i > 1 || i === 0){
    return str + "s";
  } else{
  return str;
}
}

var isEven = function(x){
  return x % 2 === 0;
}

var multiplyByTwo = function(x){
  return x * 2;
}
