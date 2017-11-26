/**
 * Created by jjong on 2017. 10. 20..
 */
function StatisticsDisplay(weatherData) {
    this.maxTemp = 0.0;
    this.minTemp = 200;
    this.tempSum = 0.0;
    this.numReading = 1;
    this.weatherData = weatherData;
    this.weatherData.registerObservers(this);

    this.update = function(temp,humidity,pressure){
        this.tempSum = this.tempSum + temp;
        this.numReading++;
        if(temp > this.maxTemp) {
            this.maxTemp =temp;
        }

        if(temp < this.minTemp) {
            this.minTemp = temp;
        }

        this.display();
    };

    this.display = function() {
        console.log("Avg/Max/Min temperature = " + (this.tempSum/this.numReading) + "/" + this.maxTemp + "/" + this.minTemp);
    };
}