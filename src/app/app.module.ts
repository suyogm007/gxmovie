import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrontComponent } from './front/front.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/List';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatPaginatorModule} from '@angular/material/paginator';
import { FormsModule } from '@angular/forms';
import { MDBBootstrapModule } from 'ng-uikit-pro-standard';
import { AssamesemoviesComponent } from './assamesemovies/assamesemovies.component';
import { BhojpurimoviesComponent } from './bhojpurimovies/bhojpurimovies.component';
import { BollywoodmoviesComponent } from './bollywoodmovies/bollywoodmovies.component';
import { DualaudioComponent } from './dualaudio/dualaudio.component';
import { GujratimoviesComponent } from './gujratimovies/gujratimovies.component';
import { HindidubbedComponent } from './hindidubbed/hindidubbed.component';
import { HollywoodmoviesComponent } from './hollywoodmovies/hollywoodmovies.component';
import { KannadamoviesComponent } from './kannadamovies/kannadamovies.component';
import { MalayalammoviesComponent } from './malayalammovies/malayalammovies.component';
import { MarathimoviesComponent } from './marathimovies/marathimovies.component';
import { PakistanimoviesComponent } from './pakistanimovies/pakistanimovies.component';
import { PrereleaseComponent } from './prerelease/prerelease.component';
import { PunjabimoviesComponent } from './punjabimovies/punjabimovies.component';
import { TamilmoviesComponent } from './tamilmovies/tamilmovies.component';
import { TelugumoviesComponent } from './telugumovies/telugumovies.component';
import { TrailorComponent } from './trailor/trailor.component';
import { TvshowsComponent } from './tvshows/tvshows.component';
import { UncategorizedComponent } from './uncategorized/uncategorized.component';
import { WebseriesComponent } from './webseries/webseries.component';
import { HttpClientModule } from '@angular/common/http';
import { MoviesdataService } from './moviesdata.service';
import { FilterPipe } from './filter.pipe';



@NgModule({
  declarations: [
    AppComponent,
    FrontComponent,
    AssamesemoviesComponent,
    BhojpurimoviesComponent,
    BollywoodmoviesComponent,
    DualaudioComponent,
    GujratimoviesComponent,
    HindidubbedComponent,
    HollywoodmoviesComponent,
    KannadamoviesComponent,
    MalayalammoviesComponent,
    MarathimoviesComponent,
    PakistanimoviesComponent,
    PrereleaseComponent,
    PunjabimoviesComponent,
    TamilmoviesComponent,
    TelugumoviesComponent,
    TrailorComponent,
    TvshowsComponent,
    UncategorizedComponent,
    WebseriesComponent,
    FilterPipe,
    
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    
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
    MatToolbarModule,
    MatButtonModule,
    MatRadioModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatPaginatorModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [MoviesdataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
