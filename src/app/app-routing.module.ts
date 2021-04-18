import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
import {FrontComponent } from './front/front.component';


const routes: Routes = [
  {path:'assamesemovies',component: AssamesemoviesComponent},
  {path:'bhojpurimovies',component: BhojpurimoviesComponent},
  {path:'bollywoodmovies',component: BollywoodmoviesComponent},
  {path:'assamesemovies',component: AssamesemoviesComponent},
  {path:'dualaudio',component: DualaudioComponent},
  {path:'gujratimovies',component: GujratimoviesComponent},
  {path:'hindidubbed',component: HindidubbedComponent},
  {path:'hollywoodmovies',component: HollywoodmoviesComponent},
  {path:'kannadamovies',component: KannadamoviesComponent},
  {path:'malayalammovies',component: MalayalammoviesComponent},
  {path:'marathimovies',component: MarathimoviesComponent},
  {path:'pakistanimovies',component: PakistanimoviesComponent},
  {path:'prerelease',component: PrereleaseComponent},
  {path:'punjabimovies',component: PunjabimoviesComponent},
  {path:'tamilmovies',component: TamilmoviesComponent},
  {path:'telugumovies',component: TelugumoviesComponent},
  {path:'trailor',component: TrailorComponent},
  {path:'tvshows',component: TvshowsComponent},
  {path:'uncategorized',component: UncategorizedComponent},
  {path:'webseries',component: WebseriesComponent},
  {path:'',component: FrontComponent},
  {path:'front',component: FrontComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
