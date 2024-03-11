import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Import both FormsModule and ReactiveFormsModule


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginScreenComponent } from './login-screen/login-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginScreenComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // Include FormsModule here
    ReactiveFormsModule, // Include ReactiveFormsModule here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
