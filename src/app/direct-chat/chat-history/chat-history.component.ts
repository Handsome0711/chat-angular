import {Component, Input, OnInit} from '@angular/core';
import {Message} from '../../message.model';

@Component({
  selector: 'app-chat-history',
  templateUrl: './chat-history.component.html',
  styleUrls: ['./chat-history.component.scss']
})
export class ChatHistoryComponent {
  @Input() messages: Message[];
}
