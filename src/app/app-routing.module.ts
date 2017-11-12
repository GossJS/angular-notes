import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NoteViewerComponent} from './pages/note-viewer/note-viewer.component';
import {NoteListComponent} from './pages/note-list/note-list.component';
import {NoteEditorComponent} from './pages/note-editor/note-editor.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '', component: NoteListComponent },
  { path: 'view/:id', component: NoteViewerComponent },
  { path: 'new', component: NoteEditorComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
