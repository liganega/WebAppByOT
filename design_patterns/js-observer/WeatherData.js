/**
 * Created by jjong on 2017. 10. 18..
 */
function WeatherData() {
    var subject = new Subject();
    var observers = [];
    var temperature = this.temperature; //온도
    var humidity = this.humidity; //습도
    var pressure = this.pressure; //압력


    subject.registerObservers = function(observer) {
        observers.push(observer);
    };


    subject.removeObservers = function(observer) {
        for(var i = 0;i < observers.length ; i++) {
            if(observers[i].observerId == observer.observerId) {
                for(var j = i; j < observers.length-1; j++) {
                    observers[j] = observers[j+1];
                }
                observers.pop();
            }
        }
    };

    subject.notifyObservers = function() {
        for(var i = 0; i < observers.length; i++) {
            observers[i].update(this.temperature,this.humidity,this.pressure);
        }
    };

    subject.measurementsChanged = function() {
        subject.notifyObservers();
    };

    subject.setMeasurements = function(temperature,humidity,pressure) {
        this.temperature = temperature;
        this.humidity = humidity;
        this.pressure = pressure;
        this.measurementsChanged()
    };

    subject.getTemperature = function() {
        return this.temperature;
    };

    subject.getHumidity = function() {
        return this.humidity;
    };

    subject.getPressure = function() {
        return this.pressure;
    };
    return subject;
}