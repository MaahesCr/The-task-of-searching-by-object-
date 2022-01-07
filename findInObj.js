// get
const objTest = {
    a: {
      a: 1,
      b: 2,
      c: {
        f: 42
      }
    },
    b: {
      a: 4
    },
    z: 5
  }
  
function get (objTest, string, deflout) {
    let arrLetters = string.split('.');
    let lengthOfArr = arrLetters.length;
    try{
        for (let i = 0; i < lengthOfArr; i++){
            objTest = objTest[arrLetters[i]];
            string = string.slice(2);
    
            if (string.length == 1) {    
                return objTest[string];
            } else {
                get (objTest, string);
            }
        }
    }

    catch{
        if (deflout === undefined){
            return null;  
        } else{
            return deflout; 
        }
    }

  }
  
  console.log(get(objTest, 'a.c.f', 'test')); // 42
  //console.log('--------------------');
  console.log(get(objTest, 'a.c')); // {f: 42}
  //console.log('--------------------');
  console.log(get(objTest, 'c.c.f')); // null
  //console.log('--------------------');
  console.log(get(objTest, 'a.x.c.f', 0)); // 0
  //console.log('--------------------');

  //console.log(typeof(objTest));

  //console.log(('a.c.f').split('.'));

  /* 
  Логика 
  */


/*
let arr1 = [[[0], [1]], [[2], [3]], [[4], [[[[[[[[[[6,[[[7]]]]]]]]]]]]],[5]]];
let arr2 = [[[{a:1}], [{b:2}]], [["A"], [3]], [["B"], [[[[[[[[[[{c:3},[[[7]]]]]]]]]]]]],[5]]];

function straight(arr){
    return arr.flat(Infinity);
}

console.log(straight(arr1));
console.log(straight(arr2));
*/
