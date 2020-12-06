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
import { AddDoorOptionDialogComponent } from './features/dialogs/add-door-option-dialog/add-door-option-dialog.component';
import { AddRewardMansusDialogComponent } from './features/dialogs/add-reward-mansus-dialog/add-reward-mansus-dialog.component';
import { AddInfluenceDecayDialogComponent } from './features/dialogs/add-influence-decay-dialog/add-influence-decay-dialog.component';
import { BoardItemComponent } from './features/board/board-item/board-item.component';
import { EntityGroupComponent } from './features/entity-group/entity-group.component';
import { OutputLabelPipe, IconLabelPipe } from './shared/pipe-transforms';
import { AddLocationDialogComponent } from './features/dialogs/add-location-dialog/add-location-dialog.component';
import { EntityGroupItemComponent } from './features/entity-group/entity-group-item/entity-group-item.component';
import { AddObstacleLocationDialogComponent } from './features/dialogs/add-obstacle-location-dialog/add-obstacle-location-dialog.component';
import { AddLoreUpgradeDialogComponent } from './features/dialogs/add-lore-upgrade-dialog/add-lore-upgrade-dialog.component';
import { AddDesireChangeDialogComponent } from './features/dialogs/add-desire-change-dialog/add-desire-change-dialog.component';
import { AddTutorTeachesDialogComponent } from './features/dialogs/add-tutor-teaches-dialog/add-tutor-teaches-dialog.component';
import { AspectComponent } from './features/entity-group/entity-group-item/aspect/aspect.component';

@NgModule({
    declarations: [
        AppComponent,
        OutputLabelPipe,
        IconLabelPipe,
        BoardComponent,
        AddRewardLocationDialogComponent,
        AddItemDialogComponent,
        AddRewardBookDialogComponent,
        AddRewardMansusDialogComponent,
        AddInfluenceDecayDialogComponent,
        BoardItemComponent,
        EntityGroupComponent,
        AddLocationDialogComponent,
        EntityGroupItemComponent,
        AddObstacleLocationDialogComponent,
        AddLoreUpgradeDialogComponent,
        AddDesireChangeDialogComponent,
        AddDoorOptionDialogComponent,
        AddTutorTeachesDialogComponent,
        AspectComponent
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
    bootstrap: [AppComponent]
})
export class AppModule { }
