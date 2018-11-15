function t(fun) {

  return new Promise(function (resolve, reject) {
    if (typeof fun == "function") {
      resolve(fun)
    } else {
      reject(fun + '不是一个函数')
    }
  })
}

function f() {
  console.log('sadfsdfsa')
}

t(f);