// code your solution here
const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    //...
  ]

function superbowlWin(record){
    let s=record.find(record=>record.result==="W");
            return s? s.year:undefined
}
