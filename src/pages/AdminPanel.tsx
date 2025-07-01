
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Switch } from "@/components/ui/switch";
import { Plus, Edit, Trash2, Users, Calendar, MessageSquare, Trophy } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [events, setEvents] = useState([
    {
      id: 1,
      name: "AI Innovation Challenge",
      date: "2024-08-15",
      type: "Hackathon",
      status: "Open",
      participants: 250,
      maxParticipants: 300
    },
    {
      id: 2,
      name: "Web3 Builder Summit",
      date: "2024-08-22",
      type: "Workshop",
      status: "Open",
      participants: 120,
      maxParticipants: 150
    }
  ]);

  const [newEvent, setNewEvent] = useState({
    name: "",
    date: "",
    type: "hackathon",
    description: "",
    location: "",
    maxParticipants: ""
  });

  const registrations = [
    {
      id: 1,
      eventName: "AI Innovation Challenge",
      participantName: "John Doe",
      email: "john@example.com",
      registrationDate: "2024-07-20",
      status: "Confirmed"
    },
    {
      id: 2,
      eventName: "Web3 Builder Summit",
      participantName: "Jane Smith",
      email: "jane@example.com",
      registrationDate: "2024-07-21",
      status: "Pending"
    }
  ];

  const feedback = [
    {
      id: 1,
      eventName: "Mobile App Marathon",
      participantName: "Alice Johnson",
      rating: 5,
      comment: "Amazing event! Great organization and mentorship.",
      date: "2024-07-16"
    },
    {
      id: 2,
      eventName: "AI Innovation Challenge",
      participantName: "Bob Wilson",
      rating: 4,
      comment: "Good event but could use more networking time.",
      date: "2024-07-17"
    }
  ];

  const teamApplications = [
    {
      id: 1,
      name: "Sarah Chen",
      email: "sarah@example.com",
      skills: "Frontend Development",
      experience: "Intermediate",
      status: "Pending"
    },
    {
      id: 2,
      name: "Marcus Rodriguez",
      email: "marcus@example.com",
      skills: "Backend Development",
      experience: "Advanced",
      status: "Approved"
    }
  ];

  const handleAddEvent = () => {
    const event = {
      id: events.length + 1,
      ...newEvent,
      participants: 0,
      status: "Open",
      maxParticipants: parseInt(newEvent.maxParticipants)
    };
    setEvents([...events, event]);
    setNewEvent({
      name: "",
      date: "",
      type: "hackathon",
      description: "",
      location: "",
      maxParticipants: ""
    });
  };

  const stats = [
    { title: "Total Events", value: "25", icon: Calendar },
    { title: "Active Participants", value: "1,234", icon: Users },
    { title: "Feedback Received", value: "89", icon: MessageSquare },
    { title: "Awards Given", value: "156", icon: Trophy }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold mb-2">
            Admin <span className="text-gradient">Panel</span>
          </h1>
          <p className="text-muted-foreground">
            Manage events, participants, and platform settings
          </p>
        </motion.div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="events">Events</TabsTrigger>
            <TabsTrigger value="registrations">Registrations</TabsTrigger>
            <TabsTrigger value="feedback">Feedback</TabsTrigger>
            <TabsTrigger value="team">Team Applications</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <stat.icon className="h-8 w-8 text-primary" />
                        <div>
                          <p className="text-2xl font-bold">{stat.value}</p>
                          <p className="text-sm text-muted-foreground">{stat.title}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Events</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {events.slice(0, 3).map((event) => (
                      <div key={event.id} className="flex items-center justify-between p-3 border rounded-lg">
                        <div>
                          <p className="font-medium">{event.name}</p>
                          <p className="text-sm text-muted-foreground">{event.date}</p>
                        </div>
                        <Badge variant="outline">{event.status}</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Recent Feedback</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {feedback.slice(0, 3).map((item) => (
                      <div key={item.id} className="p-3 border rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="font-medium">{item.participantName}</span>
                          <div className="flex">
                            {[...Array(item.rating)].map((_, i) => (
                              <span key={i} className="text-yellow-400">⭐</span>
                            ))}
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground">{item.comment}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Events Tab */}
          <TabsContent value="events" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Event Management</h2>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="gradient-bg">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Event
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl">
                  <DialogHeader>
                    <DialogTitle>Add New Event</DialogTitle>
                    <DialogDescription>
                      Create a new hackathon or workshop event
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="eventName">Event Name</Label>
                        <Input
                          id="eventName"
                          value={newEvent.name}
                          onChange={(e) => setNewEvent({...newEvent, name: e.target.value})}
                          placeholder="Event name"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="eventDate">Date</Label>
                        <Input
                          id="eventDate"
                          type="date"
                          value={newEvent.date}
                          onChange={(e) => setNewEvent({...newEvent, date: e.target.value})}
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="eventType">Type</Label>
                        <Select
                          value={newEvent.type}
                          onValueChange={(value) => setNewEvent({...newEvent, type: value})}
                        >
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="hackathon">Hackathon</SelectItem>
                            <SelectItem value="workshop">Workshop</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="maxParticipants">Max Participants</Label>
                        <Input
                          id="maxParticipants"
                          type="number"
                          value={newEvent.maxParticipants}
                          onChange={(e) => setNewEvent({...newEvent, maxParticipants: e.target.value})}
                          placeholder="200"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="location">Location</Label>
                      <Input
                        id="location"
                        value={newEvent.location}
                        onChange={(e) => setNewEvent({...newEvent, location: e.target.value})}
                        placeholder="City, State"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="description">Description</Label>
                      <Textarea
                        id="description"
                        value={newEvent.description}
                        onChange={(e) => setNewEvent({...newEvent, description: e.target.value})}
                        placeholder="Event description..."
                      />
                    </div>
                    <Button onClick={handleAddEvent} className="w-full gradient-bg">
                      Create Event
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>

            <Card>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Event Name</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Participants</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {events.map((event) => (
                      <TableRow key={event.id}>
                        <TableCell className="font-medium">{event.name}</TableCell>
                        <TableCell>{event.date}</TableCell>
                        <TableCell>
                          <Badge variant="outline">{event.type}</Badge>
                        </TableCell>
                        <TableCell>{event.participants}/{event.maxParticipants}</TableCell>
                        <TableCell>
                          <Badge className={event.status === "Open" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}>
                            {event.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm">
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button variant="outline" size="sm">
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Registrations Tab */}
          <TabsContent value="registrations" className="space-y-6">
            <h2 className="text-2xl font-bold">Registration Management</h2>
            <Card>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Event</TableHead>
                      <TableHead>Participant</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Registration Date</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {registrations.map((reg) => (
                      <TableRow key={reg.id}>
                        <TableCell className="font-medium">{reg.eventName}</TableCell>
                        <TableCell>{reg.participantName}</TableCell>
                        <TableCell>{reg.email}</TableCell>
                        <TableCell>{reg.registrationDate}</TableCell>
                        <TableCell>
                          <Badge variant={reg.status === "Confirmed" ? "default" : "secondary"}>
                            {reg.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm">Approve</Button>
                            <Button variant="outline" size="sm">Reject</Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Feedback Tab */}
          <TabsContent value="feedback" className="space-y-6">
            <h2 className="text-2xl font-bold">Feedback Management</h2>
            <div className="grid gap-6">
              {feedback.map((item) => (
                <Card key={item.id}>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg">{item.eventName}</CardTitle>
                        <CardDescription>
                          By {item.participantName} on {item.date}
                        </CardDescription>
                      </div>
                      <div className="flex">
                        {[...Array(item.rating)].map((_, i) => (
                          <span key={i} className="text-yellow-400 text-lg">⭐</span>
                        ))}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{item.comment}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Team Applications Tab */}
          <TabsContent value="team" className="space-y-6">
            <h2 className="text-2xl font-bold">Team Applications</h2>
            <Card>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Skills</TableHead>
                      <TableHead>Experience</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {teamApplications.map((app) => (
                      <TableRow key={app.id}>
                        <TableCell className="font-medium">{app.name}</TableCell>
                        <TableCell>{app.email}</TableCell>
                        <TableCell>{app.skills}</TableCell>
                        <TableCell>{app.experience}</TableCell>
                        <TableCell>
                          <Badge variant={app.status === "Approved" ? "default" : "secondary"}>
                            {app.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm">Review</Button>
                            <Button variant="outline" size="sm">Interview</Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminPanel;
