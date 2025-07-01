
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Clock, MapPin, Users, Zap, Rocket, Code, Trophy, Plus, Edit, Trash2, Eye, TrendingUp, Activity, BarChart3 } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ParticlesBackground } from "@/components/ui/particles-background";

interface EventType {
  id: number;
  name: string;
  description: string;
  date: string;
  time: string;
  location: string;
  type: string;
  category: string;
  maxParticipants: number;
  currentParticipants: number;
  prize: string;
  status: string;
  organizer: string;
  image: string;
}

const Marketing = () => {
  const [events, setEvents] = useState<EventType[]>([
    {
      id: 1,
      name: "AI Innovation Summit 2024",
      description: "Join us for the biggest AI hackathon of the year! Build innovative solutions using cutting-edge AI technologies.",
      date: "2024-08-15",
      time: "09:00",
      location: "Tech Hub, Silicon Valley",
      type: "Hackathon",
      category: "AI/ML",
      maxParticipants: 500,
      currentParticipants: 342,
      prize: "$50,000",
      status: "Active",
      organizer: "BotBuddies Team",
      image: ""
    },
    {
      id: 2,
      name: "Web3 Future Forum",
      description: "Explore the future of decentralized web and blockchain technologies. Network with industry leaders.",
      date: "2024-09-20",
      time: "10:00",
      location: "Crypto Center, New York",
      type: "Conference",
      category: "Blockchain",
      maxParticipants: 300,
      currentParticipants: 156,
      prize: "$25,000",
      status: "Draft",
      organizer: "Crypto Alliance",
      image: ""
    }
  ]);

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    date: "",
    time: "",
    location: "",
    type: "Hackathon",
    category: "AI/ML",
    maxParticipants: "100",
    prize: "",
    organizer: "",
    image: ""
  });

  const [editingEvent, setEditingEvent] = useState<EventType | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    if (editingEvent) {
      setEvents(prev => prev.map(event => 
        event.id === editingEvent.id 
          ? { 
              ...event, 
              ...formData, 
              maxParticipants: parseInt(formData.maxParticipants) || 100,
              currentParticipants: event.currentParticipants 
            }
          : event
      ));
    } else {
      const newEvent: EventType = {
        id: Date.now(),
        ...formData,
        maxParticipants: parseInt(formData.maxParticipants) || 100,
        currentParticipants: 0,
        status: "Draft"
      };
      setEvents(prev => [...prev, newEvent]);
    }
    
    setFormData({
      name: "",
      description: "",
      date: "",
      time: "",
      location: "",
      type: "Hackathon",
      category: "AI/ML",
      maxParticipants: "100",
      prize: "",
      organizer: "",
      image: ""
    });
    setEditingEvent(null);
    setIsDialogOpen(false);
  };

  const handleEdit = (event: EventType) => {
    setEditingEvent(event);
    setFormData({
      name: event.name,
      description: event.description,
      date: event.date,
      time: event.time,
      location: event.location,
      type: event.type,
      category: event.category,
      maxParticipants: event.maxParticipants.toString(),
      prize: event.prize,
      organizer: event.organizer,
      image: event.image
    });
    setIsDialogOpen(true);
  };

  const handleDelete = (eventId: number) => {
    setEvents(prev => prev.filter(event => event.id !== eventId));
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active": return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 neon-border";
      case "Draft": return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300 neon-border";
      case "Completed": return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 neon-border";
      default: return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300";
    }
  };

  const totalEvents = events.length;
  const activeEvents = events.filter(e => e.status === "Active").length;
  const totalParticipants = events.reduce((sum, e) => sum + e.currentParticipants, 0);
  const avgParticipants = totalEvents > 0 ? Math.round(totalParticipants / totalEvents) : 0;

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <ParticlesBackground />
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute inset-0 circuit-lines opacity-20" />
      
      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="mb-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gradient holographic mb-4 animate-glow">
            Marketing Dashboard
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Create, manage, and track your hackathon events with our advanced marketing platform
          </p>
        </div>

        {/* Statistics Dashboard */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="card-hover neon-border bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center">
                <BarChart3 className="h-4 w-4 mr-2 text-purple-500" />
                Total Events
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-gradient">{totalEvents}</div>
            </CardContent>
          </Card>

          <Card className="card-hover neon-border bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center">
                <Activity className="h-4 w-4 mr-2 text-green-500" />
                Active Events
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-green-600">{activeEvents}</div>
            </CardContent>
          </Card>

          <Card className="card-hover neon-border bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center">
                <Users className="h-4 w-4 mr-2 text-blue-500" />
                Total Participants
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-blue-600">{totalParticipants}</div>
            </CardContent>
          </Card>

          <Card className="card-hover neon-border bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center">
                <TrendingUp className="h-4 w-4 mr-2 text-orange-500" />
                Avg Participants
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-orange-600">{avgParticipants}</div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="events" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 cyber-button">
            <TabsTrigger value="events" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <Eye className="h-4 w-4 mr-2" />
              View Events
            </TabsTrigger>
            <TabsTrigger value="create" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <Plus className="h-4 w-4 mr-2" />
              Create Event
            </TabsTrigger>
          </TabsList>

          <TabsContent value="events" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {events.map((event) => (
                <Card key={event.id} className="card-hover neon-border bg-gradient-to-br from-background to-muted/20">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-gradient holographic">{event.name}</CardTitle>
                        <CardDescription className="mt-2">{event.description}</CardDescription>
                      </div>
                      <Badge className={getStatusColor(event.status)}>{event.status}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-2 text-primary" />
                        {event.date}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="h-4 w-4 mr-2 text-primary" />
                        {event.time}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4 mr-2 text-primary" />
                        {event.location}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Users className="h-4 w-4 mr-2 text-primary" />
                        {event.currentParticipants}/{event.maxParticipants} participants
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Trophy className="h-4 w-4 mr-2 text-primary" />
                        Prize: {event.prize}
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="cyber-button">{event.type}</Badge>
                      <Badge variant="outline" className="neon-border">{event.category}</Badge>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" size="sm" onClick={() => handleEdit(event)} className="cyber-button">
                      <Edit className="h-4 w-4 mr-2" />
                      Edit
                    </Button>
                    <Button variant="destructive" size="sm" onClick={() => handleDelete(event.id)} className="cyber-button">
                      <Trash2 className="h-4 w-4 mr-2" />
                      Delete
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="create">
            <Card className="card-hover neon-border bg-gradient-to-br from-background to-muted/20">
              <CardHeader>
                <CardTitle className="text-gradient holographic">Create New Event</CardTitle>
                <CardDescription>Fill in the details to create a new hackathon event</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Event Name</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      placeholder="Enter event name"
                      className="cyber-button"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="organizer">Organizer</Label>
                    <Input
                      id="organizer"
                      value={formData.organizer}
                      onChange={(e) => handleInputChange("organizer", e.target.value)}
                      placeholder="Enter organizer name"
                      className="cyber-button"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => handleInputChange("description", e.target.value)}
                    placeholder="Enter event description"
                    className="cyber-button"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="date">Date</Label>
                    <Input
                      id="date"
                      type="date"
                      value={formData.date}
                      onChange={(e) => handleInputChange("date", e.target.value)}
                      className="cyber-button"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="time">Time</Label>
                    <Input
                      id="time"
                      type="time"
                      value={formData.time}
                      onChange={(e) => handleInputChange("time", e.target.value)}
                      className="cyber-button"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="maxParticipants">Max Participants</Label>
                    <Input
                      id="maxParticipants"
                      type="number"
                      value={formData.maxParticipants}
                      onChange={(e) => handleInputChange("maxParticipants", e.target.value)}
                      placeholder="100"
                      className="cyber-button"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="location">Location</Label>
                    <Input
                      id="location"
                      value={formData.location}
                      onChange={(e) => handleInputChange("location", e.target.value)}
                      placeholder="Enter location"
                      className="cyber-button"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="prize">Prize</Label>
                    <Input
                      id="prize"
                      value={formData.prize}
                      onChange={(e) => handleInputChange("prize", e.target.value)}
                      placeholder="$10,000"
                      className="cyber-button"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="type">Event Type</Label>
                    <Select value={formData.type} onValueChange={(value) => handleInputChange("type", value)}>
                      <SelectTrigger className="cyber-button">
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Hackathon">Hackathon</SelectItem>
                        <SelectItem value="Conference">Conference</SelectItem>
                        <SelectItem value="Workshop">Workshop</SelectItem>
                        <SelectItem value="Meetup">Meetup</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="category">Category</Label>
                    <Select value={formData.category} onValueChange={(value) => handleInputChange("category", value)}>
                      <SelectTrigger className="cyber-button">
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="AI/ML">AI/ML</SelectItem>
                        <SelectItem value="Blockchain">Blockchain</SelectItem>
                        <SelectItem value="Web Development">Web Development</SelectItem>
                        <SelectItem value="Mobile Development">Mobile Development</SelectItem>
                        <SelectItem value="IoT">IoT</SelectItem>
                        <SelectItem value="Game Development">Game Development</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button onClick={handleSubmit} className="cyber-button bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white">
                  <Plus className="h-4 w-4 mr-2" />
                  Create Event
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Edit Dialog */}
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="neon-border matrix-bg">
            <DialogHeader>
              <DialogTitle className="text-gradient holographic">Edit Event</DialogTitle>
              <DialogDescription>Update the event details below</DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="edit-name">Event Name</Label>
                  <Input
                    id="edit-name"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    className="cyber-button"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="edit-organizer">Organizer</Label>
                  <Input
                    id="edit-organizer"
                    value={formData.organizer}
                    onChange={(e) => handleInputChange("organizer", e.target.value)}
                    className="cyber-button"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="edit-description">Description</Label>
                <Textarea
                  id="edit-description"
                  value={formData.description}
                  onChange={(e) => handleInputChange("description", e.target.value)}
                  className="cyber-button"
                />
              </div>
              <div className="flex justify-end">
                <Button onClick={handleSubmit} className="cyber-button bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white">
                  <Edit className="h-4 w-4 mr-2" />
                  Update Event
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default Marketing;
