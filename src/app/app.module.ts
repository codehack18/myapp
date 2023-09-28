import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WorkersComponent } from './workers/workers.component';
import { UserDataComponent } from './user-data/user-data.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchPipe } from './search.pipe';
import { FirstTryComponent } from './first-try/first-try.component';
import { SecondTryComponent } from './second-try/second-try.component';
import { EditItemComponent } from './edit-item/edit-item.component';
import { ApiService } from './api.service';
import { ThirdFormComponent } from './third-form/third-form.component';

@NgModule({
  declarations: [
    AppComponent,
    WorkersComponent,
    UserDataComponent,
    SearchPipe,
    FirstTryComponent,
    SecondTryComponent,
    EditItemComponent,
    ThirdFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
