/**
 * Created by jjong on 2017. 10. 20..
 */
function ForecastDisplay(weatherData) {
    this.currentPressure = 29.92;
    this.lastPressure;

    this.weatherData = weatherData;
    weatherData.registerObservers(this);

    this.update = function(temp, humidity, pressure) {
        this.lastPressure = this.currentPressure;
        this.currentPressure = pressure;

        this.display();
    }

    this.display = function() {
        console.log("Forecast : ");
        if(this.currentPressure > this.lastPressure) {
            console.log("Improving weather on the way!");
        } else if(this.currentPressure = this.lastPressure) {
            console.log("More of the same");
        } else if(this.currentPressure < this.lastPressure) {
            console.log("Watch out for cooler, rainy weather");
        }
    }
}
