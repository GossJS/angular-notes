import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {NoteViewerComponent} from './pages/note-viewer/note-viewer.component';
import {AppRoutingModule} from './/app-routing.module';
import {NoteService} from './services/note.service';
import {NoteListComponent} from './pages/note-list/note-list.component';
import {NoteEditorComponent} from './pages/note-editor/note-editor.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    NoteViewerComponent,
    NoteListComponent,
    NoteEditorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    NoteService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
