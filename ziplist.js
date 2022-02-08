
function zipList(list1, list2){
  let list = [];
  for(let i=0; i<list1.length; i++){
    list.push(list1[i], list2[i]);
  }
  return list;
}
function zipListTheSimpleWay(list1, list2){
  return _.zip(list1, list2);
}

const test1 =  ['a','b', 'c'];
const test2 = [1,2,3];

//it works
console.log(zipList(test1, test2));
console.log(zipListTheSimpleWay(test1, test2));
