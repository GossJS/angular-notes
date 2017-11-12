import {Component} from '@angular/core';
import {NoteService} from '../../services/note.service';
import {Note} from '../../models/note';
import {DisplayNote, DisplayNoteFactory} from '../../factories/note.factory';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-note-viewer',
  templateUrl: './note-viewer.component.html',
  styleUrls: ['./note-viewer.component.css']
})
export class NoteViewerComponent {

  private displayNote: DisplayNote;
  private noteId: number = parseInt(this.route.snapshot.params['id'], 10);

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private noteService: NoteService
  ) {
    this.fetchNotes();
  }

  public delete(): void {
    this.noteService.remove(this.noteId);

    this.router.navigate(['']);
  }

  private fetchNotes(): void {
    this.noteService.getNote(this.noteId)
      .subscribe(
        (note: Note) => {
          this.displayNote = DisplayNoteFactory.createDisplayNote(note);
        },
        error => console.error(error)
      );
  }
}
