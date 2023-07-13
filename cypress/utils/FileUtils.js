export class FileUtils {

    /**
     * Reads data from an excel file and returns into a 2-d array
     * @param filepath absolute path of the file
     * @param sheetName sheet name to be read from
    */
    static async getExcel_data(filepath, sheetName) {
        var workbook = new Excel.Workbook();
        var data = workbook.csv.readFile(filepath).then(function () {
            var rowData = [];
            var worksheet = workbook.getWorksheet(sheetName);
            var rows = worksheet.rowCount;
            for (var i = 1; i <= rows; i++) {
                var row = worksheet.getRow(i);
                rowData[i - 1] = new Array(row.cellCount);
                for (var j = 1; j <= row.cellCount; j++) {
                    rowData[i - 1][j - 1] = row.getCell(j).value;
                }
            }
            return rowData;
        });
        //2D array returned
        return data;
    }

    /**
     * returns row count from excel file
     * @param filepath absolute path of the file
     * @param sheetName sheet name to be read from
    */
    async getExcel_rowCount(filepath, sheetName) {
        var deferred = protractor.promise.defer();
        var workbook = new Excel.Workbook();
        var data = workbook.csv.readFile(filepath).then(function () {
            var worksheet = workbook.getWorksheet(sheetName);
            var rowCount = worksheet.rowCount;
            deferred.fulfill(rowCount - 1);

        });
        return deferred.promise;
    }

    /**
     * returns header data in an array
     * @param filepath filepath absolute path of the file
     * @param sheetName sheetName sheet name to be read from
    */
    async getExcel_headerData(filepath, sheetName) {
        var workbook = new Excel.Workbook();
        var data = workbook.csv.readFile(filepath).then(function () {
            var headerData = [];
            var worksheet = workbook.getWorksheet(sheetName);
            var headerRow = worksheet.getRow(1);
            for (var i = 1; i <= headerRow.cellCount; i++) {
                headerData[i - 1] = headerRow.getCell(i).value;
            }
            return headerData;
        });
        //1D array returned
        return data;
    }

    /**
     * Sets data to an excel file
     * @param filepath absolute path of the file
     * @param sheetName sheet name to be read from
     * @param cellvalue cellvalue to set
     * @param rownum row number
     * @param colnum colnum number
    */
    async setExcel_data(filepath, sheetName, cellvalue, rownum, colnum) {
        var workbook = new Excel.Workbook();
        workbook.csv.readFile(filepath).then(function () {
            var worksheet = workbook.getWorksheet(sheetName);
            var row = worksheet.getRow(rownum);
            row.getCell(colnum).value = "";
            browser.sleep(1 * 1000);
            row.getCell(colnum).value = cellvalue;
            browser.sleep(1 * 1000);
            workbook.csv.writeFile(filepath);
        });
    }
 
}