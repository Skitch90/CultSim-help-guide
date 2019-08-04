import { Component, OnInit } from '@angular/core';
import { Entity } from '../../shared/model';
import { BoardService } from './board.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  boardItems: Entity[] = [];

  constructor(private boardService: BoardService) { }

  ngOnInit() {
    this.boardService.getBoardItems().subscribe(items => this.boardItems = items);
  }

}

