import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatFeedComponent } from './chat-feed/chat-feed.component';
import { ChatFormComponent } from './chat-form/chat-form.component';
import { ChatRoomComponent } from './chat-room/chat-room.component';
import { ChatRoomsComponent } from './chat-rooms/chat-rooms.component';
import { ChatUsersComponent } from './chat-users/chat-users.component';



@NgModule({
  declarations: [ChatFeedComponent, ChatFormComponent, ChatRoomComponent, ChatRoomsComponent, ChatUsersComponent],
  imports: [
    CommonModule
  ]
})
export class ChatModule { }
