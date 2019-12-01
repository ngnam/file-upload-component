import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadComponent } from './upload.component';
import {
  MatButtonModule,
  MatDialogModule,
  MatListModule,
  MatProgressBarModule,
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { UploadRoutingModule } from './upload-routing.module';
import { UploadService } from './upload.service';
import { DialogComponent } from './dialog/dialog.component';


@NgModule({
  declarations: [UploadComponent, DialogComponent],
  imports: [
    CommonModule,
    UploadRoutingModule,
    MatButtonModule,
    MatDialogModule,
    MatListModule,
    FlexLayoutModule,
    MatProgressBarModule,
  ],
  providers: [UploadService],
  entryComponents: [DialogComponent]
})
export class UploadModule { }
