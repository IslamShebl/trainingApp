import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginModule } from './loginmodule/login.module';
import { SharedModule } from './sharedmodules/shared.module';
import { AuthGuard } from './auth-guard.service';
import { HomeComponent } from './home/home.component';
import {HttpClientModule,HTTP_INTERCEPTORS,HttpClient} from '@angular/common/http';
import {Interceptor} from './sharedmodules/interceptors/interceptor';


import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
//import {TranslateModule} from "ng2-translate";



export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}
 @NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
    LoginModule,
    SharedModule //,TranslateModule.forRoot()
    ,TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
    }
    })
  ],
  providers: [
    AuthGuard, {provide:HTTP_INTERCEPTORS,
    useClass:Interceptor,
  multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
