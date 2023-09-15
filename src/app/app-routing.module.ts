import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CharactersComponent } from './pages/characters/characters.component';
import { ClansComponent } from './pages/clans/clans.component';
import { VillagesComponent } from './pages/villages/villages.component';
import { AkatsukiComponent } from './pages/akatsuki/akatsuki.component';
import { TailedBComponent } from './pages/tailed-b/tailed-b.component';
import { TeamsComponent } from './pages/teams/teams.component';
import { ByCharacterComponent } from './pages/characters/by-character/by-character.component';
import { ClanComponent } from './pages/clans/clan/clan.component';
import { ByTailedBComponent } from './pages/tailed-b/by-tailed-b/by-tailed-b.component';

const routes: Routes = [
  { path:'', component:HomeComponent},
  { path:'home', component:HomeComponent},
  { path:'characters', component:CharactersComponent},
  { path:'character/:id', component:ByCharacterComponent},
  { path:'clans', component:ClansComponent},
  { path:'clans/:id', component:ClanComponent},
  { path:'villages', component:VillagesComponent},
  { path:'akatsuki', component:AkatsukiComponent},
  { path:'tailedB', component:TailedBComponent},
  { path:'tailedB/:id', component:ByTailedBComponent},
  { path:'teams', component:TeamsComponent},
  { path:'**', pathMatch:'full', redirectTo:'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
