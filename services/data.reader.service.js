const fs = require('fs');
const path = require('path');
const parse = require('csv-parse/lib/sync');
const DataFormatterService = require('./data.formatter.service');
const { format } = require('path');

class DataReaderService {
    constructor(path) {
        this.path = path;
        this.formatter = new DataFormatterService();
    }

    read() {
        let data = parse(fs.readFileSync(path.resolve(__dirname + '/' + this.path)), {
            columns: true,
        });

        return data;

        // console.log(this.formatter.get());
        // return this.formatter.get();
        // fs.createReadStream(path.resolve(__dirname + '/' + this.path))
        //     .pipe(csv.parse({ headers: true }))
        //     .on('error', error => console.error(error))
        //     .on('data', row => this.formatter.add(row))
        //     .on('end', rowCount => console.log(`Parsed ${rowCount} rows`));

        // console.log(this.formatter.get());
    }
}

module.exports = DataReaderService;