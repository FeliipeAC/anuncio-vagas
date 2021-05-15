import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  listJobs = [
    {
      name: 'Front end Developer',
      mode: 'Remote',
      location: '',
      category: 'Front-end',
      type: 'Full-time',
      technologies: ['Angular', 'HTML/CSS', 'TypeScript'],
      posted: 1620575818000,
    },

    {
      name: 'Fulltstack Developer',
      mode: 'Remove/Presential',
      location: 'Salvador, BA',
      category: 'FullStack',
      type: 'Full-time',
      technologies: [
        'Angular',
        'HTML/CSS',
        'TypeScript',
        'PostgreSQL',
        'Ruby',
        'Node JS',
      ],
      posted: 1619884618000,
    },

    {
      name: 'Back-end Developer',
      mode: 'Remote',
      location: '',
      category: 'Back-end',
      type: 'Part-time',
      technologies: ['TypeScript', 'PostgreSQL', 'Node JS'],
      posted: 1619193418000,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
