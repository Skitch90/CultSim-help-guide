import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-aspect',
    templateUrl: './aspect.component.html',
    styleUrls: ['./aspect.component.scss']
})
export class AspectComponent implements OnInit {
  @Input() aspect: string;

  private readonly aspectClassConfig = {
      'Edge': 'edge',
      'Forge': 'forge',
      'Grail': 'grail',
      'Heart': 'heart',
      'Knock': 'knock',
      'Lantern': 'lantern',
      'Moth': 'moth',
      'Secret Histories': 'secret-histories',
      'Winter': 'winter'
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() { }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  ngOnInit(): void {
  }

  getClass(): string {
      return this.aspectClassConfig[this.aspect];
  }

}
