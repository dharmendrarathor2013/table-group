import { ViewChild } from '@angular/core';
import { Component, OnInit, Renderer2, OnDestroy } from '@angular/core';
import { NgbCarousel, NgbDateStruct, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { NgbAccordionConfig } from '@ng-bootstrap/ng-bootstrap';

import * as Rellax from 'rellax';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styles: [`
    ngb-progressbar {
        margin-top: 5rem;
    }
    `]
})

export class ComponentsComponent implements OnInit, OnDestroy {

  // slidebar

  event_list = [
    {
      footer: 'Lydia B. (Parent)',
      paragraph: 'We love Daijha! She is great with our active 3-year old son and finds activities that help cultivate his learning while also allowing him to expend energy. She is dependable and knowledgeable in her craft. We utilize her for day sitting and overnight sitting when we do “staycations” in order to have quality parent time.',
      eventLocation: 'Bangalore',
      eventDescription: 'In bangalore, first event is going to happen. Please be careful about it',
      img: 'https://picsum.photos/900/500?random&t=1',
      eventStartDate: new Date('2019/05/20'),
      eventEndingDate: new Date('2019/05/24')
    },
    {
      footer:'Helen P. (Parent)',
      paragraph: 'Daijha was our first non-family-member sitter, and she has since become part of our family. Not only is she reliable and thorough as a professional, she is caring and attentive to our children, pets and family overall. She is a joy and a comfort to our family every time we see her!  We couldn’t ask for a better care provider…',
      eventLocation: 'Dubai',
      eventDescription: 'Dubai is another place to host so,e, first event is going to happen. Please be careful about it',
      img: 'https://picsum.photos/900/500?random&t=3',
      eventStartDate: new Date('2019/07/28'),
      eventEndingDate: new Date('2019/07/30')
    },
    {
      footer: 'Ash M. (parent)',
      paragraph: 'Given her excellent repertoire with my child and other parents, we decided to also hire her for babysitting duties. She has truly been God-sent. I have never felt more comfortable leaving my child in someone else’s hands than I have with Daijha. She is CPR certified, attentive to small details, always on time and professional, and has proved herself a…',
      eventLocation: 'New York',
      eventDescription: 'NewYork sits on top of event hosting',
      img: 'https://picsum.photos/900/500?random&t=4',
      eventStartDate: new Date('2020/05/20'),
      eventEndingDate: new Date('2020/05/24')
    },
    {
      footer: 'Naneki C. (Former Co Teacher)',
      paragraph: 'She’s an awesome, hands on and loving care giver. Kids and families love her! They can count on her to care for their littles while they are away.',
      eventLocation: 'Singapore',
      eventDescription: 'Singapore is another great hosting city',
      img: 'https://picsum.photos/900/500?random&t=6',
      eventStartDate: new Date('2018/05/20'),
      eventEndingDate: new Date('2018/05/24')
    },
  ]

  // upcoming_events =  this.event_list.filter( event => event.eventStartDate > new Date());
  past_events = this.event_list.filter(event => event.eventEndingDate < new Date());
  // current_events =  this.event_list.filter( event => (event.eventStartDate >= new Date() && (event.eventEndingDate <= new Date())))





  images = [62, 83, 466, 965, 982, 1043, 738].map((n) => `https://picsum.photos/id/${n}/900/500`);

  paused = false;
  unpauseOnArrow = false;
  pauseOnIndicator = false;
  pauseOnHover = true;
  pauseOnFocus = true;

  @ViewChild('carousel', { static: true }) carousel: NgbCarousel;

  togglePaused() {
    if (this.paused) {
      this.carousel.cycle();
    } else {
      this.carousel.pause();
    }
    this.paused = !this.paused;
  }

  onSlide(slideEvent: NgbSlideEvent) {
    if (this.unpauseOnArrow && slideEvent.paused &&
      (slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)) {
      this.togglePaused();
    }
    if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
      this.togglePaused();
    }
  }

  data: Date = new Date();

  page = 4;
  page1 = 5;
  page2 = 3;
  focus;
  focus1;
  focus2;

  date: { year: number, month: number };
  model: NgbDateStruct;

  public isCollapsed = true;
  public isCollapsed1 = true;
  public isCollapsed2 = true;

  state_icon_primary = true;

  constructor(private renderer: Renderer2, config: NgbAccordionConfig) {
    config.closeOthers = true;
    config.type = 'info';
  }
  isWeekend(date: NgbDateStruct) {
    const d = new Date(date.year, date.month - 1, date.day);
    return d.getDay() === 0 || d.getDay() === 6;
  }

  isDisabled(date: NgbDateStruct, current: { month: number }) {
    return date.month !== current.month;
  }

  ngOnInit() {
    var rellaxHeader = new Rellax('.rellax-header');

    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.add('navbar-transparent');
    var body = document.getElementsByTagName('body')[0];
    body.classList.add('index-page');
  }
  ngOnDestroy() {
    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.remove('navbar-transparent');
    var body = document.getElementsByTagName('body')[0];
    body.classList.remove('index-page');
  }
}

