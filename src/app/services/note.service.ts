import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/pairs';
import * as _ from 'lodash';
import {Note} from '../models/note';

@Injectable()
export class NoteService {

  private apiUrl = '';
  private db: Array<Note> = [];
  private id = 0;

  constructor() {
    this.add({title: 'hello', content: 'jdksngdngs', categories: 'blabla'});
    this.add({title: 'h4esdgllo', content: 'jdk124sngdngs', categories: 'blabla'});
    this.add({title: '12412', content: '1111jdksngdngs', categories: 'blabla'});
  }

  public getNote(id: number): Observable<Note> {
    return Observable.from(this.db.filter(note => note.id === id));
  }

  public getNotes(): Observable<Note> {
    return Observable.from(this.db);
  }

  public add(note: Note): void {
    this.db.push(Object.assign(note, {id: this.id++}));

    console.log(note, this.db);
  }

  public remove(id: number): void {
    _.remove(this.db, note => note.id === id);
  }

}
