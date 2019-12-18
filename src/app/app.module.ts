import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';


import { AppComponent } from './app.component';
import { NewoneComponent } from './newone/newone.component';
import { NewtwoComponent } from './newtwo/newtwo.component';
import { MainComponent } from './main/main.component';
import { FailureComponent } from './failure/failure.component';
import { ThirddoneComponent } from './thirddone/thirddone.component';
import { MyFirstService } from './service/my-first.service';
import {HttpClientJsonpModule, HttpClientModule} from '@angular/common/http';

const appRoutes: Routes = [
  {path: '', component: MainComponent},
  {path: 'one', component: NewoneComponent},
  {path: 'two', component: NewtwoComponent},
  {path: 'three', component: ThirddoneComponent},
  {path: '**', component: FailureComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    NewoneComponent,
    NewtwoComponent,
    MainComponent,
    FailureComponent,
    ThirddoneComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(appRoutes), HttpClientJsonpModule, HttpClientModule
  ],
  providers: [MyFirstService],
  bootstrap: [AppComponent]
})
export class AppModule { }
