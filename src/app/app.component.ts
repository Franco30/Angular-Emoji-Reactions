import { Component, Inject } from '@angular/core';
import { Emoji, Emoji2 } from './emoji';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ModalComponent } from './modal/modal.component';

export interface DialogData {
  animal: string;
  name2: string;
  gif2: any;
  regalo: any;
}

export interface PeriodicElement {
  emojiname: string;
  gift: any;
  id: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, emojiname: 'Like',  gift: 'assets/emoji/like.gif'},
  {id: 1, emojiname: 'Haha',  gift: 'assets/emoji/haha.gif'},
  {id: 1, emojiname: 'Wow',  gift: 'assets/emoji/angry.gif'},
  {id: 1, emojiname: 'Sad',  gift: 'assets/emoji/sad.gif'},
  {id: 1, emojiname: 'Super Angry',  gift: 'assets/emoji/super_anger.gif'},
  {id: 1, emojiname: 'Anxious',  gift: 'assets/emoji/anxious.gif'},
  {id: 1, emojiname: 'Bored',  gift: 'assets/emoji/bored.gif'},
  {id: 1, emojiname: 'Cool',  gift: 'assets/emoji/cool.gif'},
  {id: 1, emojiname: 'Fear', gift: 'assets/emoji/fear.gif'},
  {id: 1, emojiname: 'Frustrated',  gift: 'assets/emoji/frustrated.gif'},
  {id: 1, emojiname: 'Greed',  gift: 'assets/emoji/greed.gif'},
  {id: 1, emojiname: 'Hope', gift: 'assets/emoji/hope.gif'},
  {id: 1, emojiname: 'Excited',  gift: 'assets/emoji/excited.gif'}
];


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  displayedColumns: string[] = ['id', 'emojiname', 'gift'];
  dataSource = ELEMENT_DATA;

  animal: string;
  name2: string;
  gif: any;
  gif2: any;
  gift: any;
  regalo: any;
  constructor(public dialog: MatDialog) {

  }
  

  emojis2: Emoji2[] = [
    {name: 'Like',  gif2: 'assets/emoji/like.gif'},
    {name: 'Haha',  gif2: 'assets/emoji/haha.gif'},
    {name: 'Wow',  gif2: 'assets/emoji/wow.gif'},
    {name: 'Angry',  gif2: 'assets/emoji/angry.gif'},
    {name: 'Sad',  gif2: 'assets/emoji/sad.gif'},
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

  openModal(element): void {
    console.log('***', element)
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '250px',
      data: {gift: element}
    });

    dialogRef.afterClosed().subscribe(result => {

    });
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
    {react: 'Wow', viewValue: 'Wow', gif: 'assets/emoji/wow.gif'},
    {react: 'Angry', viewValue: 'Angry', gif: 'assets/emoji/angry.gif'},
    {react: 'Sad', viewValue: 'Sad', gif: 'assets/emoji/sad.gif'},
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
      {name: 'Wow',  gif2: 'assets/emoji/wow.gif'},
      {name: 'Angry',  gif2: 'assets/emoji/angry.gif'},
      {name: 'Sad',  gif2: 'assets/emoji/sad.gif'},
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
