import { Component, OnInit } from '@angular/core';
import { MessageService } from '../service/message.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private messageService:MessageService) { }

  ngOnInit(): void {
  }
  sendSubjectMessage(message:string){
     this.messageService.sendSubjectMessage(message)
  }

  sendBehaviourMessage(message:string){
    this.messageService.sendBehaviourSubjectMessage(message)
 }
}
