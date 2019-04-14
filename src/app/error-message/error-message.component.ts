import {Component, Input, OnInit} from '@angular/core';
import {ValidationErrors} from '@angular/forms';

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.scss']
})

export class ErrorMessageComponent implements OnInit {
  @Input() errors: ValidationErrors;

  constructor() {}

  ngOnInit() {}

}
