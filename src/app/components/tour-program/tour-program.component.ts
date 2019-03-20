import { Component, OnInit, Input } from '@angular/core';
import { FullDayProgram } from '../../models/FullDayProgram';

@Component({
  selector: 'app-tour-program',
  templateUrl: './tour-program.component.html',
  styleUrls: ['./tour-program.component.scss']
})
export class TourProgramComponent implements OnInit {

  constructor() { }

  @Input() program: Array<FullDayProgram>;
  @Input() name: string;

  ngOnInit() {
  }

}
