import { Component } from '@angular/core';
import { WordsService } from './services/words.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private wordService: WordsService) {}

  nouns = this.wordService.getNouns();
  verbs = this.wordService.getVerbs();
}
