import { Component, OnInit } from '@angular/core';
import { ChatboxService } from 'src/app/chatbox.service';

@Component({
  selector: 'app-chatbox',
  templateUrl: './chatbox.component.html',
  styleUrls: ['./chatbox.component.css']
})
export class ChatboxComponent implements OnInit {
  constructor(public chatboxService: ChatboxService) {}

  ngOnInit(): void {
  }
}
