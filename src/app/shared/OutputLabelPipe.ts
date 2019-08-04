import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'outputLabel' })
export class OutputLabelPipe implements PipeTransform {
    transform(label: string): string {
        if (label === 'MansusDoor') {
            return 'Mansus Door';
        } else if (label === 'MansusDoorOption') {
            return 'Mansus Door Option';
        } else {
            return label;
        }
    }

}
