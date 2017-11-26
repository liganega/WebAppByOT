/**
 * Created by jjong on 2017. 10. 18..
 */
function Beverage() {
    this.description = "Unknown Beverage";
    this.cost = 0;

    this.setDescription = function(description) {
        this.description = description;
    };
    this.setCost = function(cost) {
        this.cost = cost;
    };

    this.getDescription = function() {
        return this.description;
    };

    this.getCost = function() {
        return this.cost;
    };
};