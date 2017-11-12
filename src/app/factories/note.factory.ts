import {Note} from '../models/note';

export interface DisplayNote {
  note: Note;
  title: string;
  content: string;
  categories: string;
}

export class DisplayNoteFactory {

  public static createDisplayNote(note: Note): DisplayNote {
    return {
      note,

      title: note.title,
      content: note.content,
      categories: note.categories
    } as DisplayNote;
  }
}
