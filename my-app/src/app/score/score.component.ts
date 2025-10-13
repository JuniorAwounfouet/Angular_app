import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {
  // score = 0;

  // constructor(private route: ActivatedRoute) {}

   ngOnInit() {
    // this.score = parseInt(this.route.snapshot.paramMap.get('score') ?? 0);
   }

}
