import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as io from 'socket.io-client';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  socket:any
  chat_input:string;
  chats = [];

  constructor(public navCtrl: NavController) {
    //this.socket= io('http://localhost:3000');
    this.socket=io('http://wtogetherapp.eu-3.evennode.com/');

    this.socket.on('message',(msg)=>{
      console.log("message",msg);
      this.chats.push(msg);
    });  
  }

  send(msg){
    if(msg!=''){
      var datas = {
        username:"Juanito : ",
        to:"Tio : ",
        email:"emiralles@ffff.com",
        roomPropietary:"emiralles",
        msg: msg
      }
      //this.socket.emit('message', this.socket.username + msg + this.socket.to );
      this.socket.emit('message', datas );
    }
    this.chat_input = '';
  }
}
