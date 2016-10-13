/**
 * Created by db on 16/9/11.
 */
console.log('clone.js is loaded')
function clone(obj){
  var ret
  if(typeof obj == 'string' || typeof obj === "number" || typeof obj == 'boolean'){
    return obj
  }

  else if(typeof obj === "array"){
    ret = []
    for(var i = 0; i < obj.length; i++){
      ret[i] = clone(obj[i])
    }
  }

  else if(typeof obj === "object"){

  }


  return ret
}


