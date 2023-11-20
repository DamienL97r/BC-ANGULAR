import { Component, OnInit } from '@angular/core';
import { CalendarEvent, CalendarView, DAYS_OF_WEEK, DateAdapter } from 'angular-calendar';
import { isSameDay, isSameMonth } from 'date-fns';
import { IOrder } from 'src/app/interfaces/iorder';
import { OrderService } from 'src/app/order.service';

import { EventColor } from 'calendar-utils';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { CalendarDatePipe } from 'angular-calendar/modules/common/calendar-date/calendar-date.pipe';
const colors: Record<string, EventColor> = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3',
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF',
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA',
  },
};

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit{


  constructor (private service: OrderService, private router: Router) {}

  ngOnInit(): void {
    this.getOrders();
    
  }

  orders: IOrder[] = [];
  isCliked: boolean = false;
  calendar:boolean = true;
  list:boolean = false;
  title:string = 'Liste';

  displayCalendar() {
    this.calendar = !this.calendar;
    this.title = 'Calendrier';
    if (this.isCliked === false) {
      this.isCliked = !this.isCliked;
    }
  }

  displayList() {
    this.list = !this.list;
    this.title = 'Liste';
    if (this.isCliked === true) {
      this.isCliked = !this.isCliked;
    }
  }

  getOrders() {
    this.service.findAll().subscribe((data: IOrder[]) => {
      this.orders = data;
      console.log(this.orders);
      
      for (const order of this.orders) {
        if (order.isDone === false) {
          console.log(order.id+'pas fini');
        } else {
          console.log(order.id+'FINI');
        }
        if (order.isAssigned === false) {
          console.log(order.id+'Veuillez assigner cette commande');
        } else {
          console.log(order.id+'OK');
        }
      }
      
      this.events = this.orders.map(order => {
        const depositDateFormatted = new Intl.DateTimeFormat('fr-FR', {
          year: 'numeric',
          month: 'long',
          day: '2-digit',
        }).format(new Date(order.depositDate));
  
        const retrievalDateFormatted = new Intl.DateTimeFormat('fr-FR', {
          year: 'numeric',
          month: 'long',
          day: '2-digit',
        }).format(new Date(order.retrievalDate));
  
        return {
          title: `Commande n° ${order.id} | ${order.userId.email}</br> Date de dépot : ${depositDateFormatted} </br> Date de retrait : ${retrievalDateFormatted}`,
          start: new Date(order.depositDate),
          color: { ...colors['blue'] },
          id: order.id,
        };
      });
    });
  }


  //Calendrier 

  viewDate: Date = new Date();
  view: CalendarView = CalendarView.Month;
  CalendarView = CalendarView;

  events: CalendarEvent<IOrder>[] = [];

  locale: string = 'fr';

  excludeDays: number[] = [0, 6];

  weekStartsOn = DAYS_OF_WEEK.SUNDAY;

  activeDayIsOpen: boolean = false;

  setView(view: CalendarView) {
    this.view = view;
  }

  dayClicked({ date, events}: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) || events.length === 0 
        ) {
          this.activeDayIsOpen = false;
        } else {
          this.activeDayIsOpen = true; 
        }
        this.viewDate = date;
    }
  }

  eventClicked(event: any) {
    console.log(event.event);
    // this.router.navigate(['/admin/commandes/' + event.event.id]);
  }
}
