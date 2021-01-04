const faker = require("faker");

class ServiceUtils {
    
    getRandomArrayValue (valuesArray) {

        const valuesAmount = valuesArray.length - 1;
        const randomIndex = faker.random.number(valuesAmount);

        return valuesArray[randomIndex];

    }
     

};

export const serviceUtil = new ServiceUtils();