import { Component, OnInit } from '@angular/core';
import { CalendarEvent, CalendarView, DAYS_OF_WEEK } from 'angular-calendar';
import { isSameDay, isSameMonth } from 'date-fns';
import { IOrder } from 'src/app/interfaces/iorder';
import { OrderService } from 'src/app/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit{


  constructor (private service: OrderService) {}

  ngOnInit(): void {
    this.getOrders();
  }

  orders: IOrder[] = [];

  getOrders() {
    this.service.findAll().subscribe((data: IOrder[]) => {
      this.orders = data;
      this.events = this.orders.map(order => ({
        title: "Commande n° " + order.id + " | " + order.userId.email,
        start: new Date(order.depositDate),
        end: new Date(order.retrievalDate),
      }));
    });
  }


  //Calendrier 

  viewDate: Date = new Date();
  view: CalendarView = CalendarView.Week;
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
}
