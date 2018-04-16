import { Component, OnInit } from '@angular/core';
import { MessagesService } from '../messages.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  text: string;

  constructor(private messageService: MessagesService) { }

  ngOnInit() {
  }

  sendingText() {
    this.messageService.sendingText(this.text);
  }

}
