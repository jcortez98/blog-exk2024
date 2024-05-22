import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Post } from '../models/post';
import SockJS from 'sockjs-client';
import { Client, over } from 'stompjs';


@Injectable({
  providedIn: 'root'
})
export class PostService {
  //private urlBase = "http://192.168.42.153:8081/blog-app/posts"; IP LAN
  private urlBase = "http://localhost:8081/blog-app/posts";
  private urlSocket = "http://localhost:8081/posts-socket";
  private stompClient: Client;
  private messageSubject: BehaviorSubject<Post[]> = new BehaviorSubject<Post[]>([]);

  constructor(private httpPost: HttpClient) {
    this.initSocket();
   }

  initSocket(){
    const ws = new SockJS(this.urlSocket);
    this.stompClient = over(ws);
  }

  joinRoom(roomId:String){
    this.stompClient.connect({}, () => {
      this.stompClient.subscribe(`/topic/${roomId}`, message => {
        const data = this.messageSubject.getValue();
        data.push(JSON.parse(message.body));

        this.messageSubject.next(data);
      });

      this.httpPost.get<Post[]>(this.urlBase).subscribe(posts => {
        this.messageSubject.next(posts);
      });
    });
  }

  sendPost(post:Post){
    this.stompClient.send(`/blog-app/posts-socket/1`, {}, JSON.stringify(post));
  }

  getMessageSubject(){
    return this.messageSubject.asObservable();
  }
}


