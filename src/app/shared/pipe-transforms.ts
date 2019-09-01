import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'outputLabel' })
export class OutputLabelPipe implements PipeTransform {
    transform(label: string): string {
        if (label === 'MansusDoor') {
            return 'Mansus Door';
        } else if (label === 'MansusDoorOption') {
            return 'Mansus Door Option';
        } else if (label === 'ExpeditionObstacle') {
            return 'Expedition Obstacle';
        } else {
            return label;
        }
    }
}

@Pipe({ name: 'labelIcon' })
export class IconLabelPipe implements PipeTransform {
    iconsConf = {
        Aspect: 'category',
        Book: 'book',
        Follower: 'person',
        Location: 'location_on',
        Lore: 'local_library',
        MansusDoor: 'cloud_upload',
        MansusDoorOption: 'cloud',
    };

    transform(label: string) {
        const icon = this.iconsConf[label];
        if (icon) {
            return icon;
        }

        return 'extension';
    }
}
