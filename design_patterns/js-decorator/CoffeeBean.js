/**
 * Created by jjong on 2017. 10. 18..
 */
//JS Class 라는 개념이 명확하게 없으므로.. Class 형태 말고 함수 형태로 작성.
function DarkRoast() {
    var beverage = new Beverage();
    beverage.setDescription("DarkRoast");
    beverage.setCost(.99);
    return beverage;
}

function HouseBlend() {
    var beverage = new Beverage();
    beverage.setDescription("House Blend Coffee");
    beverage.setCost(.89);
    return beverage;
}

function Espresso() {
    var beverage = new Beverage()
    beverage.setDescription("Espresso");
    beverage.setCost(1.99);
    return beverage;
}

function Decaf() {
    var beverage = new Beverage();
    beverage.setDescription("Decaf Coffee");
    beverage.setCost(1.05);
    return beverage;
}