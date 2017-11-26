/**
 * Created by jjong on 2017. 10. 18..
 */
//JS Class 라는 개념이 명확하게 없으므로.. Class 형태 말고 함수 형태로 작성.
function Soy(beverage) {
    beverage.setDescription(beverage.getDescription() + ",Soy");
    beverage.setCost(beverage.getCost() + .15);
    return beverage;
}

function Milk(beverage) {
    beverage.setDescription(beverage.getDescription() + ",Milk");
    beverage.setCost(beverage.getCost() +.10);
    return beverage;
}

function Mocha(beverage) {
    beverage.setDescription(beverage.getDescription() + ",Mocha");
    beverage.setCost(beverage.getCost() +.20);
    return beverage;
}

function Whip(beverage) {
    beverage.setDescription(beverage.getDescription() + ",Whip");
    beverage.setCost(beverage.getCost() +.10);
    return beverage;
}