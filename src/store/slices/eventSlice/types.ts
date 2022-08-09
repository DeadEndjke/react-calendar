


export type EventItem = {
    year: string;
    month: string;
    day: string;
    time: string;
    event: string;
  };
  
  export interface EventSliceState {
    items: EventItem[];
  }
  