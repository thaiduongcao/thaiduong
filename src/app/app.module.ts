import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TrangchuComponent } from './trangchu/trangchu.component';
import { DetaiComponent } from './detai/detai.component';
import { ActivatedRoute } from '@angular/router';
import { RouterModule } from '@angular/router';
import { Trangchu2Component } from './trangchu2/trangchu2.component';
import { Trangchu3Component } from './trangchu3/trangchu3.component';

@NgModule({
  declarations: [
    AppComponent,
    TrangchuComponent,
    DetaiComponent,
    Trangchu2Component,
    Trangchu3Component
  ],
  imports: [
    BrowserModule,
  
    RouterModule.forRoot([
      { path: '', component: TrangchuComponent },
      { path: 'trangchu', component: TrangchuComponent },
      { path: 'trangchu2', component: Trangchu2Component },
      { path: 'trangchu3', component: Trangchu3Component },
      { path: 'trangchu/:ID', component: DetaiComponent },
    ])
  ], 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
