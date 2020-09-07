var 바디 = document.body;
var 테이블 = document.createElement('table');
var 줄들 = [];
var 칸들 = [];

var 비동기콜백 = function(e){
    console.log(e.target);  
    console.log(e.target.parentNode);
    console.log(e.target.parentNode.parentNode);
    
    var 몇줄 = 줄들.indexOf(e.target.parentNode);
    console.log('몇줄', 몇줄);
    var 몇칸 = 칸들[몇줄].indexOf(e.target);
    console.log('몇칸', 몇칸);

    if (칸들[몇줄][몇칸]) { //칸이 이미 채워져 있는가?

    }
};

for(var i = 1; i<=3; i+=1){
    var 줄 = document.createElement('tr');
    줄들.push(줄);
    칸들.push([]);
    for (var j = 1; j<=3; j+=1){
        var 칸 = document.createElement('td');
        칸.addEventListener('click', 비동기콜백);
        칸들[i - 1].push(칸);
        줄.append(칸);
    }
    테이블.append(줄);
}
바디.append(테이블);
console.log(줄들,칸들);