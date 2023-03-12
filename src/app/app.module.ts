import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavebarComponent } from './shared/navebar/navebar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AddComponent } from './student/add/add.component';
import { ListComponent } from './student/list/list.component';
import { EditComponent } from './student/edit/edit.component';
import { HttpClientModule} from'@angular/common/http';
import { FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavebarComponent,
    FooterComponent,
    HomeComponent,
    AddComponent,
    ListComponent,
    EditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
