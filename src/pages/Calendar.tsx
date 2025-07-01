
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Calendar from "react-calendar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar as CalendarIcon, Clock, MapPin, Users } from "lucide-react";
import "react-calendar/dist/Calendar.css";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

const CalendarPage = () => {
  const [selectedDate, setSelectedDate] = useState<Value>(new Date());

  const events = [
    {
      id: 1,
      name: "AI Innovation Challenge",
      date: new Date(2024, 7, 15), // August 15, 2024
      time: "09:00 AM",
      type: "Hackathon",
      location: "San Francisco, CA",
      participants: 250,
      status: "Open"
    },
    {
      id: 2,
      name: "Web3 Builder Summit",
      date: new Date(2024, 7, 22), // August 22, 2024
      time: "10:00 AM",
      type: "Workshop",
      location: "New York, NY",
      participants: 120,
      status: "Open"
    },
    {
      id: 3,
      name: "Mobile App Marathon",
      date: new Date(2024, 7, 29), // August 29, 2024
      time: "08:00 AM",
      type: "Hackathon",
      location: "Austin, TX",
      participants: 180,
      status: "Filling Fast"
    },
    {
      id: 4,
      name: "Sustainability Tech Challenge",
      date: new Date(2024, 8, 5), // September 5, 2024
      time: "09:30 AM",
      type: "Hackathon",
      location: "Seattle, WA",
      participants: 95,
      status: "Open"
    },
    {
      id: 5,
      name: "Cybersecurity Bootcamp",
      date: new Date(2024, 8, 12), // September 12, 2024
      time: "11:00 AM",
      type: "Workshop",
      location: "Boston, MA",
      participants: 75,
      status: "Open"
    }
  ];

  const getEventsForDate = (date: Date) => {
    return events.filter(event => 
      event.date.toDateString() === date.toDateString()
    );
  };

  const hasEvents = (date: Date) => {
    return getEventsForDate(date).length > 0;
  };

  const selectedEvents = selectedDate instanceof Date 
    ? getEventsForDate(selectedDate) 
    : [];

  const tileContent = ({ date, view }: { date: Date; view: string }) => {
    if (view === 'month' && hasEvents(date)) {
      return (
        <div className="flex justify-center">
          <div className="w-2 h-2 bg-primary rounded-full mt-1"></div>
        </div>
      );
    }
    return null;
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Open": return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
      case "Filling Fast": return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300";
      case "Almost Full": return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300";
      case "Full": return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300";
      default: return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300";
    }
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Event <span className="text-gradient">Calendar</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Never miss an event! View all upcoming hackathons and workshops
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Calendar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <Card className="p-6">
              <div className="calendar-container">
                <Calendar
                  onChange={setSelectedDate}
                  value={selectedDate}
                  tileContent={tileContent}
                  className="w-full border-none"
                  tileClassName={({ date }) => 
                    hasEvents(date) ? "has-events" : ""
                  }
                />
              </div>
            </Card>
          </motion.div>

          {/* Events for Selected Date */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CalendarIcon className="h-5 w-5" />
                  {selectedDate instanceof Date 
                    ? selectedDate.toLocaleDateString('en-US', { 
                        weekday: 'long', 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })
                    : 'Select a date'
                  }
                </CardTitle>
              </CardHeader>
              <CardContent>
                {selectedEvents.length > 0 ? (
                  <div className="space-y-4">
                    {selectedEvents.map((event) => (
                      <div key={event.id} className="border rounded-lg p-4 space-y-2">
                        <div className="flex justify-between items-start">
                          <h4 className="font-semibold">{event.name}</h4>
                          <Badge className={getStatusColor(event.status)}>
                            {event.status}
                          </Badge>
                        </div>
                        <div className="space-y-1 text-sm text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4" />
                            {event.time}
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4" />
                            {event.location}
                          </div>
                          <div className="flex items-center gap-2">
                            <Users className="h-4 w-4" />
                            {event.participants} participants
                          </div>
                        </div>
                        <Button size="sm" className="w-full gradient-bg">
                          Register
                        </Button>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-muted-foreground">No events scheduled for this date.</p>
                )}
              </CardContent>
            </Card>

            {/* Upcoming Events */}
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Events</CardTitle>
                <CardDescription>Next 3 events</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {events.slice(0, 3).map((event) => (
                    <div key={event.id} className="flex items-center justify-between p-2 rounded-lg border">
                      <div>
                        <p className="font-medium text-sm">{event.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {event.date.toLocaleDateString()}
                        </p>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {event.type}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .calendar-container :global(.react-calendar) {
          width: 100%;
          background: transparent;
          border: none;
          font-family: inherit;
        }
        
        .calendar-container :global(.react-calendar__tile) {
          position: relative;
          padding: 0.75rem 0.5rem;
          background: transparent;
          border: none;
          border-radius: 0.375rem;
          transition: all 0.2s;
        }
        
        .calendar-container :global(.react-calendar__tile:hover) {
          background-color: hsl(var(--accent));
        }
        
        .calendar-container :global(.react-calendar__tile--active) {
          background-color: hsl(var(--primary));
          color: hsl(var(--primary-foreground));
        }
        
        .calendar-container :global(.react-calendar__tile.has-events) {
          background-color: hsl(var(--primary) / 0.1);
        }
        
        .calendar-container :global(.react-calendar__navigation) {
          display: flex;
          height: 44px;
          margin-bottom: 1rem;
        }
        
        .calendar-container :global(.react-calendar__navigation__label) {
          font-weight: bold;
          font-size: 1.125rem;
        }
        
        .calendar-container :global(.react-calendar__navigation button) {
          min-width: 44px;
          background: transparent;
          border: none;
          border-radius: 0.375rem;
          transition: all 0.2s;
        }
        
        .calendar-container :global(.react-calendar__navigation button:hover) {
          background-color: hsl(var(--accent));
        }
        
        .calendar-container :global(.react-calendar__month-view__weekdays) {
          text-align: center;
          text-transform: uppercase;
          font-weight: bold;
          font-size: 0.75rem;
          color: hsl(var(--muted-foreground));
        }
        
        .calendar-container :global(.react-calendar__month-view__weekdays__weekday) {
          padding: 0.5rem;
        }
      `}</style>
    </div>
  );
};

export default CalendarPage;
