import {Component} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Note} from '../../models/note';
import {NoteService} from '../../services/note.service';
import {Router} from '@angular/router';

interface NoteFormFields {
  title: string;
  content: string;
  categories: string;
}


@Component({
  selector: 'app-note-editor',
  templateUrl: './note-editor.component.html',
  styleUrls: ['./note-editor.component.css']
})
export class NoteEditorComponent {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private noteService: NoteService,
    private router: Router
  ) {
    this.buildForm();
  }

  public submit(): void {
    if (this.form.valid) {
      const model: Note = this.getFormModel();

      this.noteService.add(model);
      this.router.navigate(['']);
    }
  }

  private buildForm(): void {
    this.form = this.formBuilder.group({
      title: null,
      content: null,
      categories: null
    });
  }

  private getFormModel(): Note {
    const fields: NoteFormFields = this.form.getRawValue();

    return {
      title: fields.title,
      content: fields.content,
      categories: fields.categories
    } as Note;
  }
}
