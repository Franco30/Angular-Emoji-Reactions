import { Component, Inject } from '@angular/core';
import { Emoji, Emoji2 } from './emoji';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
export interface DialogData {
  animal: string;
  name2: string;
  gif2: any;
  regalo: any;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  animal: string;
  name2: string;
  gif: any;
  gif2: any;
  regalo: any;
  constructor(public dialog: MatDialog) {

  }

  emojis2: Emoji2[] = [
    {name: 'Like',  gif2: 'assets/emoji/like.gif'},
    {name: 'Haha',  gif2: 'assets/emoji/haha.gif'},
    {name: 'Wow',  gif2: 'assets/emoji/hushed_face.gif'},
    {name: 'Angry',  gif2: 'assets/emoji/pouting_face.gif'},
    {name: 'Sad',  gif2: 'assets/emoji/crying_face.gif'},
    {name: 'Super Angry',  gif2: 'assets/emoji/super_anger.gif'},
    {name: 'Anxious',  gif2: 'assets/emoji/anxious.gif'},
    {name: 'Bored',  gif2: 'assets/emoji/bored.gif'},
    {name: 'Cool',  gif2: 'assets/emoji/cool.gif'},
    {name: 'Fear', gif2: 'assets/emoji/fear.gif'},
    {name: 'Frustrated',  gif2: 'assets/emoji/frustrated.gif'},
    {name: 'Greed',  gif2: 'assets/emoji/greed.gif'},
    {name: 'Hope', gif2: 'assets/emoji/hope.gif'},
    {name: 'Excited',  gif2: 'assets/emoji/excited.gif'}

  ];

  getEmoji2(value){
    this.gif2 = value;
    console.log(value);
  }
 
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px',
      data: {name2: this.name2, animal: this.animal, gif: this.gif, regalo: this.regalo}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.regalo = result;
      console.log(this.regalo);
    });
  }


  emojis: Emoji[] = [
    {react: 'Like', viewValue: 'Like', gif: 'assets/emoji/like.gif'},
    {react: 'Haha', viewValue: 'Haha', gif: 'assets/emoji/haha.gif'},
    {react: 'Wow', viewValue: 'Wow', gif: 'assets/emoji/hushed_face.gif'},
    {react: 'Angry', viewValue: 'Angry', gif: 'assets/emoji/pouting_face.gif'},
    {react: 'Sad', viewValue: 'Sad', gif: 'assets/emoji/crying_face.gif'},
    {react: 'Super Angry', viewValue: 'Super Angry', gif: 'assets/emoji/super_anger.gif'},
    {react: 'Anxious', viewValue: 'Anxious', gif: 'assets/emoji/anxious.gif'},
    {react: 'Bored', viewValue: 'Bored', gif: 'assets/emoji/bored.gif'},
    {react: 'Cool', viewValue: 'Cool', gif: 'assets/emoji/cool.gif'},
    {react: 'Fear', viewValue: 'Fear', gif: 'assets/emoji/fear.gif'},
    {react: 'Frustrated', viewValue: 'Frustrated', gif: 'assets/emoji/frustrated.gif'},
    {react: 'Greed', viewValue: 'Greed', gif: 'assets/emoji/greed.gif'},
    {react: 'Hope', viewValue: 'Hope', gif: 'assets/emoji/hope.gif'},
    {react: 'Excited', viewValue: 'Excited', gif: 'assets/emoji/excited.gif'}

  ];


  getEmoji(value){
    this.gif = value;
    console.log(value);
  }

}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example.html',
})
export class DialogOverviewExampleDialog {
  gif2: any;

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {

    }

    emojis2: Emoji2[] = [
      {name: 'Like',  gif2: 'assets/emoji/like.gif'},
      {name: 'Haha',  gif2: 'assets/emoji/haha.gif'},
      {name: 'Wow',  gif2: 'assets/emoji/hushed_face.gif'},
      {name: 'Angry',  gif2: 'assets/emoji/pouting_face.gif'},
      {name: 'Sad',  gif2: 'assets/emoji/crying_face.gif'},
      {name: 'Super Angry',  gif2: 'assets/emoji/super_anger.gif'},
      {name: 'Anxious',  gif2: 'assets/emoji/anxious.gif'},
      {name: 'Bored',  gif2: 'assets/emoji/bored.gif'},
      {name: 'Cool',  gif2: 'assets/emoji/cool.gif'},
      {name: 'Fear', gif2: 'assets/emoji/fear.gif'},
      {name: 'Frustrated',  gif2: 'assets/emoji/frustrated.gif'},
      {name: 'Greed',  gif2: 'assets/emoji/greed.gif'},
      {name: 'Hope', gif2: 'assets/emoji/hope.gif'},
      {name: 'Excited',  gif2: 'assets/emoji/excited.gif'}
  
    ];
  
    getEmoji2(value){
      this.gif2 = value;
      console.log(value);
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
