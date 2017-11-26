/**
 * Created by jjong on 2017. 10. 18..
 */
function Observer(observerId) {
    this.observerId = observerId; //js 특성상 코딩 쉽게 하기 위해 옵저버 별로 고유 키 부여... 고유 키 부여 하는 예외 처리는 따로 하지 않음.
    this.update = function (temperature,humidity,pressure){}
}
