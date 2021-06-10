import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if (arg === '' || arg.length < 3) return value;
    const resultReports = [];
    for (const report of value) {
      if (report.nombreSensor.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultReports.push(report);
      };
    };
    return resultReports;
  }

}
