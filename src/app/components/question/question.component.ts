import { Component, OnInit, OnDestroy } from '@angular/core';
import { WordsService } from 'src/app/services/words.service';
import { WordType } from 'src/app/data/models';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css'],
})
export class QuestionComponent implements OnInit, OnDestroy {
  word: WordType = null;
  private words = [];
  private subscriptions: Subscription;
  constructor(private wordService: WordsService) {}

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  ngOnInit(): void {
    this.subscriptions = this.wordService
      .getWords()
      .subscribe((words: WordType[]) => {
        this.words = words;
        this.fetchWord();
      });
  }

  private fetchWord(): void {
    // this.word = this.wordService.getWords().shift(); //shitf pobiera 1 element z listy i go usuwa z tej listy
    this.word = this.words.shift();
  }

  addToVerbs(word: WordType) {
    this.wordService.addVerb(word);
    this.fetchWord();
  }

  addToNouns(word: WordType) {
    this.wordService.addNoun(word);
    this.fetchWord();
  }
}
