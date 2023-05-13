import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {
  value: any | undefined;
  constructor(public dialogRef: MatDialogRef<VideoComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any) { 
      this.value = data;
       }

  ngOnInit(): void {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
