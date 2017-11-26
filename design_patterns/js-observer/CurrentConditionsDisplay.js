/**
 * Created by jjong on 2017. 10. 20..
 */
function CurrentConditionsDisplay(weatherData) {
    this.weatherData = weatherData;
    this.weatherData.registerObservers(this);
    this.temperature;
    this.humidity;

    this.update = function(temperature,humidity,pressure) {
        this.temperature = temperature;
        this.humidity = humidity;
        this.display();
    };

    this.display = function() {
        console.log("Current conditions : " + this.temperature + "F degrees and " + this.humidity + "% humidity");
    }
}