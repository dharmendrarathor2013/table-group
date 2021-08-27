import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  event_list = [
    {
      paragraph: 'Given her excellent repertoire with my child and other parents, we decided to also hire her for babysitting duties. She has truly been God-sent. I have never felt more comfortable leaving my child in someone else’s hands than I have with Daijha. She is CPR certified, attentive to small details, always on time and professional,…',
      footer:'Ash M. (parent)',
      eventLocation: 'Bangalore',
      eventDescription: 'In bangalore, first event is going to happen. Please be careful about it',
      img: 'https://picsum.photos/900/500?random&t=1',
      eventStartDate: new Date('2019/05/20'),
      eventEndingDate: new Date('2019/05/24')
    },
    {
      paragraph: 'We love Daijha! She is great with our active 3-year old son and finds activities that help cultivate his learning while also allowing him to expend energy. She is dependable and knowledgeable in her craft. We utilize her for day sitting and overnight sitting when we do “staycations” in order to have quality parent time.',
      footer:'Lydia B. (Parent)',
      eventLocation: 'Dubai',
      eventDescription: 'Dubai is another place to host so,e, first event is going to happen. Please be careful about it',
      img: 'https://picsum.photos/900/500?random&t=3',
      eventStartDate: new Date('2019/07/28'),
      eventEndingDate: new Date('2019/07/30')
    },
    {
      paragraph: 'Daijha was our first non-family-member sitter, and she has since become part of our family. Not only is she reliable and thorough as a professional, she is caring and attentive to our children, pets and family overall. She is a joy and a comfort to our family every time we see her!  We couldn’t ask…',
      footer:'Helen P. (Parent)',
      eventLocation: 'New York',
      eventDescription: 'NewYork sits on top of event hosting',
      img: 'https://picsum.photos/900/500?random&t=4',
      eventStartDate: new Date('2020/05/20'),
      eventEndingDate: new Date('2020/05/24')
    },
   
  ]

  // upcoming_events =  this.event_list.filter( event => event.eventStartDate > new Date());
  past_events = this.event_list.filter(event => event.eventEndingDate < new Date());
  // current_events =  this.event_list.filter( event => (event.eventStartDate >= new Date() && (event.eventEndingDate <= new Date())))

  constructor() { }

  ngOnInit(): void {
  }

}
