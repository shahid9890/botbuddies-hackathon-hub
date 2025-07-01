
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin, Users, Zap, Rocket, Code, Trophy, Plus, Edit, Trash2, Eye } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const Marketing = () => {
  const [events, setEvents] = useState([
    {
      id: 1,
      name: "AI Innovation Summit 2024",
      description: "Explore the future of artificial intelligence and machine learning",
      date: "2024-12-15",
      time: "09:00",
      location: "Tech Hub, San Francisco",
      type: "Conference",
      category: "AI/ML",
      maxParticipants: 500,
      currentParticipants: 342,
      prize: "$100,000",
      status: "Active",
      organizer: "TechCorp Inc.",
      image: "/placeholder.svg"
    },
    {
      id: 2,
      name: "Blockchain Builders Bootcamp",
      description: "Learn to build decentralized applications from scratch",
      date: "2024-12-20",
      time: "10:00",
      location: "Innovation Center, Austin",
      type: "Workshop",
      category: "Blockchain",
      maxParticipants: 200,
      currentParticipants: 156,
      prize: "$50,000",
      status: "Active",
      organizer: "CryptoLearn Ltd.",
      image: "/placeholder.svg"
    }
  ]);

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    date: "",
    time: "",
    location: "",
    type: "",
    category: "",
    maxParticipants: "",
    prize: "",
    organizer: "",
    image: ""
  });

  const [editingEvent, setEditingEvent] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    if (editingEvent) {
      setEvents(prev => prev.map(event => 
        event.id === editingEvent.id 
          ? { ...event, ...formData, currentParticipants: event.currentParticipants }
          : event
      ));
    } else {
      const newEvent = {
        id: Date.now(),
        ...formData,
        currentParticipants: 0,
        status: "Active",
        maxParticipants: parseInt(formData.maxParticipants) || 100
      };
      setEvents(prev => [...prev, newEvent]);
    }
    
    setFormData({
      name: "",
      description: "",
      date: "",
      time: "",
      location: "",
      type: "",
      category: "",
      maxParticipants: "",
      prize: "",
      organizer: "",
      image: ""
    });
    setEditingEvent(null);
    setIsDialogOpen(false);
  };

  const handleEdit = (event) => {
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

  const handleDelete = (eventId) => {
    setEvents(prev => prev.filter(event => event.id !== eventId));
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Active": return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
      case "Draft": return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300";
      case "Completed": return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300";
      default: return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300";
    }
  };

  return (
    <div className="min-h-screen py-12 matrix-bg">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 holographic">
            Event <span className="text-gradient">Marketing Hub</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Create, manage, and promote your hackathons with our advanced event management system
          </p>
        </motion.div>

        {/* Stats Dashboard */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12"
        >
          <Card className="card-hover neon-border">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-gradient mb-2">{events.length}</div>
              <div className="text-sm text-muted-foreground flex items-center justify-center gap-2">
                <Calendar className="h-4 w-4" />
                Total Events
              </div>
            </CardContent>
          </Card>
          <Card className="card-hover neon-border">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-gradient mb-2">
                {events.reduce((sum, event) => sum + event.currentParticipants, 0)}
              </div>
              <div className="text-sm text-muted-foreground flex items-center justify-center gap-2">
                <Users className="h-4 w-4" />
                Total Participants
              </div>
            </CardContent>
          </Card>
          <Card className="card-hover neon-border">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-gradient mb-2">
                {events.filter(event => event.status === "Active").length}
              </div>
              <div className="text-sm text-muted-foreground flex items-center justify-center gap-2">
                <Zap className="h-4 w-4" />
                Active Events
              </div>
            </CardContent>
          </Card>
          <Card className="card-hover neon-border">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-gradient mb-2">
                {events.reduce((sum, event) => sum + parseInt(event.prize.replace(/[^0-9]/g, '')), 0).toLocaleString()}
              </div>
              <div className="text-sm text-muted-foreground flex items-center justify-center gap-2">
                <Trophy className="h-4 w-4" />
                Total Prize Pool
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Create Event Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button 
                className="cyber-button text-white px-8 py-3 text-lg"
                onClick={() => {
                  setEditingEvent(null);
                  setFormData({
                    name: "",
                    description: "",
                    date: "",
                    time: "",
                    location: "",
                    type: "",
                    category: "",
                    maxParticipants: "",
                    prize: "",
                    organizer: "",
                    image: ""
                  });
                }}
              >
                <Plus className="h-5 w-5 mr-2" />
                Create New Event
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>{editingEvent ? "Edit Event" : "Create New Event"}</DialogTitle>
                <DialogDescription>
                  {editingEvent ? "Update your event details" : "Fill in the details to create a new hackathon event"}
                </DialogDescription>
              </DialogHeader>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Event Name *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    placeholder="Enter event name"
                    className="neon-border"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="organizer">Organizer *</Label>
                  <Input
                    id="organizer"
                    value={formData.organizer}
                    onChange={(e) => handleInputChange("organizer", e.target.value)}
                    placeholder="Your company/organization"
                    className="neon-border"
                  />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="description">Description *</Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => handleInputChange("description", e.target.value)}
                    placeholder="Describe your event"
                    className="neon-border h-24"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="date">Date *</Label>
                  <Input
                    id="date"
                    type="date"
                    value={formData.date}
                    onChange={(e) => handleInputChange("date", e.target.value)}
                    className="neon-border"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="time">Time *</Label>
                  <Input
                    id="time"
                    type="time"
                    value={formData.time}
                    onChange={(e) => handleInputChange("time", e.target.value)}
                    className="neon-border"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="location">Location *</Label>
                  <Input
                    id="location"
                    value={formData.location}
                    onChange={(e) => handleInputChange("location", e.target.value)}
                    placeholder="Event location"
                    className="neon-border"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="type">Event Type *</Label>
                  <Select value={formData.type} onValueChange={(value) => handleInputChange("type", value)}>
                    <SelectTrigger className="neon-border">
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Hackathon">Hackathon</SelectItem>
                      <SelectItem value="Workshop">Workshop</SelectItem>
                      <SelectItem value="Conference">Conference</SelectItem>
                      <SelectItem value="Bootcamp">Bootcamp</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="category">Category *</Label>
                  <Select value={formData.category} onValueChange={(value) => handleInputChange("category", value)}>
                    <SelectTrigger className="neon-border">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="AI/ML">AI/ML</SelectItem>
                      <SelectItem value="Blockchain">Blockchain</SelectItem>
                      <SelectItem value="Web Development">Web Development</SelectItem>
                      <SelectItem value="Mobile">Mobile</SelectItem>
                      <SelectItem value="IoT">IoT</SelectItem>
                      <SelectItem value="Cybersecurity">Cybersecurity</SelectItem>
                      <SelectItem value="Gaming">Gaming</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="maxParticipants">Max Participants *</Label>
                  <Input
                    id="maxParticipants"
                    type="number"
                    value={formData.maxParticipants}
                    onChange={(e) => handleInputChange("maxParticipants", e.target.value)}
                    placeholder="100"
                    className="neon-border"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="prize">Prize Pool</Label>
                  <Input
                    id="prize"
                    value={formData.prize}
                    onChange={(e) => handleInputChange("prize", e.target.value)}
                    placeholder="$10,000"
                    className="neon-border"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="image">Event Image URL</Label>
                  <Input
                    id="image"
                    value={formData.image}
                    onChange={(e) => handleInputChange("image", e.target.value)}
                    placeholder="https://example.com/image.jpg"
                    className="neon-border"
                  />
                </div>
              </div>
              <div className="flex gap-4 mt-6">
                <Button 
                  onClick={handleSubmit}
                  className="flex-1 cyber-button text-white"
                  disabled={!formData.name || !formData.description || !formData.date || !formData.organizer}
                >
                  <Rocket className="h-4 w-4 mr-2" />
                  {editingEvent ? "Update Event" : "Create Event"}
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => setIsDialogOpen(false)}
                  className="neon-border"
                >
                  Cancel
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </motion.div>

        {/* Events Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full card-hover neon-border circuit-lines">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="outline" className="animate-glow">
                      {event.type}
                    </Badge>
                    <Badge className={getStatusColor(event.status)}>
                      {event.status}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl mb-2 text-gradient">{event.name}</CardTitle>
                  <CardDescription>{event.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    {new Date(event.date).toLocaleDateString()}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    {event.time}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    {event.location}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Users className="h-4 w-4" />
                    {event.currentParticipants}/{event.maxParticipants} participants
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <Badge className="text-gradient-alt font-bold">
                      {event.category}
                    </Badge>
                    <span className="text-lg font-bold text-gradient">{event.prize}</span>
                  </div>
                  
                  <div className="text-xs text-muted-foreground">
                    Organized by {event.organizer}
                  </div>
                  
                  <div className="flex gap-2 mt-4">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1 neon-border"
                      onClick={() => handleEdit(event)}
                    >
                      <Edit className="h-4 w-4 mr-1" />
                      Edit
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="neon-border"
                    >
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button 
                      variant="destructive" 
                      size="sm"
                      onClick={() => handleDelete(event.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {events.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <Code className="h-16 w-16 mx-auto mb-4 text-muted-foreground animate-pulse-slow" />
            <h3 className="text-2xl font-semibold mb-4 text-gradient">No events created yet</h3>
            <p className="text-muted-foreground">
              Start by creating your first hackathon event
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Marketing;
