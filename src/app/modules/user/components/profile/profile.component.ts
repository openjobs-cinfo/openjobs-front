import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  public likeInTheVacancies = [
    {
      name: 'React',
      code: 10329,
    },
    {
      name: 'Angular',
      code: 11323,
    },
    {
      name: 'Nodejs',
      code: 10424,
    },
  ];
  public selectedLikeInTheVacancies = [];
  public institutions = [
    {
      name: 'IFAL',
      code: 13245,
    },
    {
      name: 'UFAL',
      code: 13248,
    },
    {
      name: 'CESMAC',
      code: 16245,
    },
  ];
  public selectedInstitutions = [];
  public courses = [
    {
      name: 'Sistemas de Informação',
      code: 23245,
    },
    {
      name: 'Eng. da Computação',
      code: 13641,
    },
    {
      name: 'Ciências da Computação',
      code: 13235,
    },
  ];
  public selectedCourses = [];
  public periods = [
    {
      name: '1°',
      code: 53245,
    },
    {
      name: '2°',
      code: 13295,
    },
  ];
  public selectedPeriods = [];

  constructor() {}

  ngOnInit(): void {}
}
