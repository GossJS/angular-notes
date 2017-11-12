import {Component} from '@angular/core';
import {NoteService} from '../../services/note.service';
import {Note} from '../../models/note';
import {DisplayNote, DisplayNoteFactory} from '../../factories/note.factory';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent {

  private displayNotes: DisplayNote[] = [];

  constructor(
    private noteService: NoteService
  ) {
    this.fetchNotes();
  }

  private fetchNotes(): void {
    this.noteService.getNotes()
      .subscribe(
        (note: Note) => {
          this.displayNotes.push(DisplayNoteFactory.createDisplayNote(note));
        },
        error => console.error(error)
      );
  }
}
