/* Core */
import { NgModule }         from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';
import { FormsModule }      from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { HttpClientXsrfModule } from '@angular/common/http';

/* AngularFire */
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';

/* Init */
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyNavbarComponent } from './my-navbar/my-navbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { RouterModule, Routes } from '@angular/router';

/* Components */
import { AppComponent } from './app.component';
import { MyDashboardComponent } from './my-dashboard/my-dashboard.component';
import { NameComponent } from './name/name.component';
import { ApiCallerComponent } from './api-caller/api-caller.component';
import { ApiCallService } from 'src/app/api-call/api-call.service';
import { PageOneComponent } from './page-one/page-one.component';
import { PageTwoComponent } from './page-two/page-two.component';
import { PageThreeComponent } from './page-three/page-three.component';
import { AddObjectComponent, DialogOverviewExampleDialog } from './add-object/add-object.component';
import { TaskService } from './page-one/app.service';
import { McdonaldsComponent } from './mcdonalds/mcdonalds.component';
import { McdonaldsService } from './mcdonalds/mcdonalds.service';
import {  } from './mcdonalds/matchningsdata.model';

/* Angular Material */
import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,
} from '@angular/material';
import { importExpr, importType } from '@angular/compiler/src/output/output_ast';
import { PageFourComponent } from './page-four/page-four.component';
import { DataTableComponent, DialogOverviewExample2, DialogOverviewExampleDialog2,  } from './data-table/data-table.component';
import { DataTable2Component } from './data-table2/data-table2.component';


const appRoutes: Routes = [
  { path: 'page-one/page-one', component: PageOneComponent },
  { path: 'page-two/page-two', component: PageTwoComponent },
  { path: 'page-three/page-three', component: PageThreeComponent },
  { path: 'page-four/page-four', component: PageFourComponent },
  { path: 'data-table2/data-table2', component: DataTable2Component }
];


@NgModule({
  declarations: [
    AppComponent,
    MyNavbarComponent,
    MyDashboardComponent,
    NameComponent,
    ApiCallerComponent,
    PageOneComponent,
    PageTwoComponent,
    PageThreeComponent,
    AddObjectComponent,
    DialogOverviewExampleDialog,
    McdonaldsComponent,
    PageFourComponent,
    DataTableComponent,
    DialogOverviewExample2,
    DialogOverviewExampleDialog2,
    DataTable2Component
  ],
  entryComponents: [
    AddObjectComponent,
    DialogOverviewExampleDialog,
    DialogOverviewExampleDialog2
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    HttpClientModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule // imports firebase/storage only needed for storage features
  ],
  providers: [ApiCallService, TaskService, McdonaldsService],
  bootstrap: [AppComponent],
  exports: [PageFourComponent],
})


export class AppModule { }
