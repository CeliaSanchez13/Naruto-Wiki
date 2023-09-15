import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { HomeComponent } from './pages/home/home.component';
import { CharactersComponent } from './pages/characters/characters.component';
import { ClansComponent } from './pages/clans/clans.component';
import { VillagesComponent } from './pages/villages/villages.component';
import { AkatsukiComponent } from './pages/akatsuki/akatsuki.component';
import { TailedBComponent } from './pages/tailed-b/tailed-b.component';
import { TeamsComponent } from './pages/teams/teams.component';
import { SharedModule } from './shared/shared.module';
import { ByCharacterComponent } from './pages/characters/by-character/by-character.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ClanComponent } from './pages/clans/clan/clan.component';
import { ByTailedBComponent } from './pages/tailed-b/by-tailed-b/by-tailed-b.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HomeComponent,
    CharactersComponent,
    ClansComponent,
    VillagesComponent,
    AkatsukiComponent,
    TailedBComponent,
    TeamsComponent,
    ByCharacterComponent,
    ClanComponent,
    ByTailedBComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AppRoutingModule,

    SharedModule,
     BrowserAnimationsModule,
     NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
