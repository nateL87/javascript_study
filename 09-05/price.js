var TransportationFee= 3800;
var foodExpenses = 6000;
var drinkCharge = 3000;
var normalSpending = 10000
var spended = TransportationFee+ foodExpenses + drinkCharge;
console.log(spended > normalSpending ? `${spended-normalSpending}원 초과` : `돈관리를 잘했어요`)
