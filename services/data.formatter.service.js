
class DataFormatterService {
    constructor() {
        this.dataArray = [];
    }

    add(dataObject) {
        // Loop through all properties on object, format them
        var newObj = {};
        for (var prop in dataObject) {
            let value = dataObject[prop];
            
            // Split by whitespace
            let split = value.split(/\s+/g);

            if (split != undefined) newObj[prop] = this.pascalCase(split);
        }

        this.dataArray.push(newObj);
    }

    get() {
        return this.dataArray;
    }

    capitalize(str) {
        if (str[0] == undefined) return undefined;

        return str[0].toUpperCase() + str.substring(1, str.length).toLowerCase();
    }

    pascalCase(stringArray) {
        for (let i = 0; i < stringArray.length; i++) {
            stringArray[i] = this.capitalize(stringArray[i]);
        }

        return stringArray;
    }
}

module.exports = DataFormatterService;