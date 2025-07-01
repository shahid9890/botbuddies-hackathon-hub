
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Clock, MapPin, Users } from "lucide-react";

const Events = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("all");

  const events = [
    {
      id: 1,
      name: "AI Innovation Challenge",
      date: "2024-08-15",
      time: "09:00 AM",
      type: "Hackathon",
      location: "San Francisco, CA",
      description: "Build the next generation of AI-powered applications",
      participants: 250,
      maxParticipants: 300,
      status: "Open",
      prize: "$50,000",
      difficulty: "Advanced",
      tags: ["AI", "Machine Learning", "Innovation"]
    },
    {
      id: 2,
      name: "Web3 Builder Summit",
      date: "2024-08-22",
      time: "10:00 AM",
      type: "Workshop",
      location: "New York, NY",
      description: "Learn to build decentralized applications on the blockchain",
      participants: 120,
      maxParticipants: 150,
      status: "Open",
      prize: "$25,000",
      difficulty: "Intermediate",
      tags: ["Web3", "Blockchain", "DeFi"]
    },
    {
      id: 3,
      name: "Mobile App Marathon",
      date: "2024-08-29",
      time: "08:00 AM",
      type: "Hackathon",
      location: "Austin, TX",
      description: "48-hour mobile app development competition",
      participants: 180,
      maxParticipants: 200,
      status: "Filling Fast",
      prize: "$30,000",
      difficulty: "Beginner",
      tags: ["Mobile", "iOS", "Android"]
    },
    {
      id: 4,
      name: "Sustainability Tech Challenge",
      date: "2024-09-05",
      time: "09:30 AM",
      type: "Hackathon",
      location: "Seattle, WA",
      description: "Create technology solutions for environmental challenges",
      participants: 95,
      maxParticipants: 100,
      status: "Almost Full",
      prize: "$40,000",
      difficulty: "Intermediate",
      tags: ["Sustainability", "GreenTech", "Climate"]
    },
    {
      id: 5,
      name: "Cybersecurity Bootcamp",
      date: "2024-09-12",
      time: "11:00 AM",
      type: "Workshop",
      location: "Boston, MA",
      description: "Intensive cybersecurity training and ethical hacking",
      participants: 75,
      maxParticipants: 80,
      status: "Open",
      prize: "$15,000",
      difficulty: "Advanced",
      tags: ["Security", "Ethical Hacking", "Privacy"]
    },
    {
      id: 6,
      name: "Game Development Jam",
      date: "2024-09-19",
      time: "02:00 PM",
      type: "Hackathon",
      location: "Los Angeles, CA",
      description: "Create innovative games in 72 hours",
      participants: 160,
      maxParticipants: 180,
      status: "Open",
      prize: "$35,000",
      difficulty: "Beginner",
      tags: ["Gaming", "Unity", "Unreal Engine"]
    }
  ];

  const filteredEvents = events.filter(event => {
    const matchesSearch = event.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesType = filterType === "all" || event.type.toLowerCase() === filterType.toLowerCase();
    
    return matchesSearch && matchesType;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Open": return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
      case "Filling Fast": return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300";
      case "Almost Full": return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300";
      case "Full": return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300";
      default: return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300";
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner": return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300";
      case "Intermediate": return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300";
      case "Advanced": return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300";
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
            Upcoming <span className="text-gradient">Events</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join our community of innovators in exciting hackathons and workshops
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col md:flex-row gap-4 mb-8"
        >
          <div className="flex-1">
            <Input
              placeholder="Search events..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="h-12"
            />
          </div>
          <Select value={filterType} onValueChange={setFilterType}>
            <SelectTrigger className="w-full md:w-48 h-12">
              <SelectValue placeholder="Filter by type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Events</SelectItem>
              <SelectItem value="hackathon">Hackathons</SelectItem>
              <SelectItem value="workshop">Workshops</SelectItem>
            </SelectContent>
          </Select>
        </motion.div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full card-hover border-2 hover:border-primary/50">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="outline" className="mb-2">
                      {event.type}
                    </Badge>
                    <Badge className={getStatusColor(event.status)}>
                      {event.status}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl mb-2">{event.name}</CardTitle>
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
                    {event.participants}/{event.maxParticipants} participants
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <Badge className={getDifficultyColor(event.difficulty)}>
                      {event.difficulty}
                    </Badge>
                    <span className="text-lg font-bold text-primary">{event.prize}</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-1">
                    {event.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <Button className="w-full gradient-bg">
                    Register Now
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {filteredEvents.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <h3 className="text-2xl font-semibold mb-4">No events found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search or filter criteria
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Events;
