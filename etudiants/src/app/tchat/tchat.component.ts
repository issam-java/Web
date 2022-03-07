import { Component, Input, OnInit } from '@angular/core';
import {WebSocketService} from 'src/app/services/web-socket.service';

@Component({
  selector: 'app-tchat',
  templateUrl: './tchat.component.html',
  styleUrls: ['./tchat.component.scss']
})
export class TchatComponent implements OnInit {

  srvMessage: string[] = [];
  //pour stocker les messages.
  webSocket!: WebSocket;
  //l’objet webSocket qui gère la connexion et les échanges avec le serveur
  serverUrl = 'ws://localhost:8085';
  // l’adresse du serveur webSocket de type ws et non http
  @Input() messageToSend!: string;
  // L’input du message à envoyer.

  constructor(private wsService:WebSocketService) {
    
    this.wsService.createObservableSocket(this.serverUrl).subscribe(data => {
      this.srvMessage.push(data);
      }); 
    }

   onSend() {
    this.wsService.sendMessage(this.messageToSend) ;
    this.messageToSend = '';
    }
   
  
  ngOnInit(): void {
  }

}
