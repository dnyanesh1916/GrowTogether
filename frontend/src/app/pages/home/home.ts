import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {

  fullText = "Welcome to GrowTogether 🚀";
  displayedText = '';
  index = 0;

  ngOnInit() {
    this.typeEffect();
  }

  typeEffect() {
    setInterval(() => {
      if (this.index < this.fullText.length) {
        this.displayedText += this.fullText[this.index];
        this.index++;
      }
    }, 100); // speed (ms)
  }
}