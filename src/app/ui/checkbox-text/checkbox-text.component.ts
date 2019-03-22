import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-checkbox-text',
  templateUrl: './checkbox-text.component.html',
  styleUrls: ['./checkbox-text.component.scss']
})
export class CheckboxTextComponent implements OnInit {

  constructor() { }

  @Input() label: Array<string>;

  ngOnInit() {
  }

}
