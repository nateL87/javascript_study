// 내마음대로 설명쓰기
/*
적정 체중 구하기!!

적정 체중 = (본인 신장 - 100) * 0.9
적정 체중이 72kg이며, 현재 적정 체중에서 ookg 초과했습니다.
*/

var height = 180;
var weight = 80;
var normalWeight = (height - 100) *0.9;
console.log(`적정체중이 ${normalWeight}Kg 이며 현재 적정체중에서 ${weight-normalWeight}Kg 초과했습니다`)