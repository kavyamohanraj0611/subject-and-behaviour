import { Component, OnInit } from '@angular/core';
import { MessageService } from '../service/message.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  subjectMessage!:string;
  BehaviourSubjectMessage!:string;
  constructor(private messageService:MessageService) { }

  ngOnInit(): void {
    this.messageService.receivedSubjectMessage().subscribe((data)=>{
      this.subjectMessage=data
    })

    this.messageService.receivedBehaviourSubjectMessage().subscribe((data)=>{
      this.BehaviourSubjectMessage=data
    })
  }

}
