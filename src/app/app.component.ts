import { Component } from '@angular/core';
import { Emoji } from './emoji';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  emojis: Emoji[] = [
    {value: 'Like', viewValue: 'Like', gif: 'assets/emoji/thumbs_up.gif'},
    {value: 'Haha', viewValue: 'Haha', gif: 'assets/emoji/face_with_tears_of_joy.gif'},
    {value: 'Heart', viewValue: 'Heart', gif: 'assets/emoji/sparkling_heart.gif'},
    {value: 'Wow', viewValue: 'Wow', gif: 'assets/emoji/hushed_face.gif'},
    {value: 'Angry', viewValue: 'Angry', gif: 'assets/emoji/pouting_face.gif'},
    {value: 'Sad', viewValue: 'Sad', gif: 'assets/emoji/crying_face.gif'}

  ];
  getEmoji(value){
    console.log(value);
  }
}
