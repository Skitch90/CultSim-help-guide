import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'outputLabel' })
export class OutputLabelPipe implements PipeTransform {
    outputLabelConf = {
        ChangeLesson: 'Change Lesson',
        ExpeditionObstacle: 'Expedition Obstacle',
        MansusDoor: 'Mansus Door',
        MansusDoorOption: 'Mansus Door Option'
    };

    transform(label: string): string {
        return this.outputLabelConf[label] || label;
    }
}

@Pipe({ name: 'labelIcon' })
export class IconLabelPipe implements PipeTransform {
    private readonly DEFAULT_ICON = 'extension';
    private readonly iconsConf = {
        Aspect: 'category',
        Book: 'book',
        Follower: 'person',
        Location: 'location_on',
        Lore: 'local_library',
        MansusDoor: 'cloud_upload',
        MansusDoorOption: 'cloud',
        Tool: 'build',
        Tutor: 'school'
    };

    transform(label: string): string{
        return this.iconsConf[label] || this.DEFAULT_ICON;
    }
}
