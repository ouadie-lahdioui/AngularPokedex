import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';

import {MdToolbarModule} from '@angular2-material/toolbar/toolbar';
import { MdIconModule, MdIconRegistry } from '@angular2-material/icon';
import {MdCardModule} from '@angular2-material/card/card';
import {MdInputModule} from '@angular2-material/input/input';

@NgModule({
  declarations: [
    AppComponent,
    PokemonListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MdToolbarModule,
    MdIconModule,
    MdCardModule,
    MdInputModule
  ],
  providers: [
    MdIconRegistry
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
