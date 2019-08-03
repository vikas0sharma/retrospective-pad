import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sprint-list',
  templateUrl: './sprint-list.component.html',
  styleUrls: ['./sprint-list.component.scss']
})
export class SprintListComponent implements OnInit {
    sprints = [
        {
          id: 1,
          title: 'Sprint 1',
          img: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/8V46UZCS0V.jpg'
        },
        {
          id: 2,
          title: 'Sprint 2',
          img: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/LTLE4QGRVQ.jpg'
        },
        {
          id: 3,
          title: 'Sprint 3',
          img: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/R926LU1YEA.jpg'
        },
        {
          id: 4,
          title: 'Sprint 4',
          img: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/U9PP3KXXY2.jpg'
        },
        {
          id: 5,
          title: 'Sprint 5',
          img: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/NO9CN3QYR3.jpg'
        },
        {
          id: 6,
          title: 'Sprint 6',
          img: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/X1UK6NLGRU.jpg'
        },
      ];
  constructor() { }

  ngOnInit() {
  }

}
