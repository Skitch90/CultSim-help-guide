import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material.module';
import { BoardComponent } from './features/board/board.component';
import { GraphqlService } from './features/graphql/graphql.service';
import { AddItemDialogComponent } from './features/dialogs/add-item-dialog/add-item-dialog.component';
import { AddRewardBookDialogComponent } from './features/dialogs/add-reward-book-dialog/add-reward-book-dialog.component';
import { AddRewardLocationDialogComponent } from './features/dialogs/add-reward-location-dialog/add-reward-location-dialog.component';
import { AddMansusDoorOptionDialogComponent } from './features/dialogs/add-mansus-door-option-dialog/add-mansus-door-option-dialog.component';
import { AddRewardMansusDialogComponent } from './features/dialogs/add-reward-mansus-dialog/add-reward-mansus-dialog.component';
import { AddInfluenceDecayDialogComponent } from './features/dialogs/add-influence-decay-dialog/add-influence-decay-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    AddRewardLocationDialogComponent,
    AddItemDialogComponent,
    AddRewardBookDialogComponent,
    AddMansusDoorOptionDialogComponent,
    AddRewardMansusDialogComponent,
    AddInfluenceDecayDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    GraphQLModule,
    HttpClientModule
  ],
  providers: [GraphqlService],
  entryComponents: [
    BoardComponent, 
    AddRewardLocationDialogComponent,
    AddItemDialogComponent,
    AddRewardBookDialogComponent,
    AddMansusDoorOptionDialogComponent,
    AddRewardMansusDialogComponent,
    AddInfluenceDecayDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
