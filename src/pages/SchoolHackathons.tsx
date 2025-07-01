
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Clock, MapPin, Users, Trophy, Star } from "lucide-react";

const SchoolHackathons = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");

  const hackathons = [
    {
      id: 1,
      name: "High School AI Challenge",
      date: "2024-08-20",
      time: "09:00 AM",
      location: "Tech High School, San Francisco",
      description: "Introduce high school students to AI and machine learning",
      participants: 85,
      maxParticipants: 100,
      status: "Ongoing",
      difficulty: "Beginner",
      prize: "$5,000",
      tags: ["AI", "Beginner-Friendly", "Educational"],
      badges: ["Flagship"],
      grade: "9-12",
      duration: "1 day"
    },
    {
      id: 2,
      name: "Junior Web Dev Bootcamp",
      date: "2024-09-01",
      time: "08:30 AM",
      location: "Innovation Academy, Austin",
      description: "Learn web development fundamentals through hands-on projects",
      participants: 45,
      maxParticipants: 60,
      status: "Upcoming",
      difficulty: "Beginner",
      prize: "$3,000",
      tags: ["Web Development", "HTML/CSS", "JavaScript"],
      badges: [],
      grade: "9-12",
      duration: "2 days"
    },
    {
      id: 3,
      name: "Mobile App Creation Workshop",
      date: "2024-09-15",
      time: "10:00 AM",
      location: "Central High School, Chicago",
      description: "Build your first mobile app using no-code tools",
      participants: 30,
      maxParticipants: 40,
      status: "Upcoming",
      difficulty: "Beginner",
      prize: "$2,500",
      tags: ["Mobile Development", "No-Code", "App Design"],
      badges: ["Invite-only"],
      grade: "10-12",
      duration: "1 day"
    },
    {
      id: 4,
      name: "Game Development Jam",
      date: "2024-07-25",
      time: "09:00 AM",
      location: "Metro High School, New York",
      description: "Create fun games while learning programming basics",
      participants: 60,
      maxParticipants: 60,
      status: "Past",
      difficulty: "Intermediate",
      prize: "$4,000",
      tags: ["Game Development", "Unity", "C#"],
      badges: ["Flagship"],
      grade: "9-12",
      duration: "2 days",
      winner: "Team CodeCrafters"
    },
    {
      id: 5,
      name: "Cybersecurity Basics Challenge",
      date: "2024-10-05",
      time: "09:30 AM",
      location: "Tech Prep Academy, Seattle",
      description: "Learn cybersecurity fundamentals and ethical hacking",
      participants: 20,
      maxParticipants: 30,
      status: "Upcoming",
      difficulty: "Intermediate",
      prize: "$3,500",
      tags: ["Cybersecurity", "Ethical Hacking", "Network Security"],
      badges: ["Invite-only"],
      grade: "11-12",
      duration: "1 day"
    },
    {
      id: 6,
      name: "Environmental Tech Solutions",
      date: "2024-10-20",
      time: "08:00 AM",
      location: "Green Valley High, Portland",
      description: "Develop technology solutions for environmental challenges",
      participants: 0,
      maxParticipants: 50,
      status: "Upcoming",
      difficulty: "Beginner",
      prize: "$6,000",
      tags: ["Environmental Tech", "Sustainability", "Green Innovation"],
      badges: ["Flagship"],
      grade: "9-12",
      duration: "3 days"
    }
  ];

  const filteredHackathons = hackathons.filter(hackathon => {
    const matchesSearch = hackathon.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      hackathon.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      hackathon.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesStatus = filterStatus === "all" || hackathon.status.toLowerCase() === filterStatus.toLowerCase();
    
    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Ongoing": return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300";
      case "Upcoming": return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
      case "Past": return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300";
      default: return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300";
    }
  };

  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case "Flagship": return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300";
      case "Invite-only": return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300";
      default: return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300";
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner": return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
      case "Intermediate": return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300";
      case "Advanced": return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300";
      default: return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300";
    }
  };

  const ongoingEvents = filteredHackathons.filter(h => h.status === "Ongoing");
  const upcomingEvents = filteredHackathons.filter(h => h.status === "Upcoming");
  const pastEvents = filteredHackathons.filter(h => h.status === "Past");

  const EventCard = ({ hackathon, index }: { hackathon: any, index: number }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Card className="h-full card-hover border-2 hover:border-primary/50">
        <CardHeader>
          <div className="flex justify-between items-start mb-2">
            <div className="flex gap-2">
              <Badge className={getStatusColor(hackathon.status)}>
                {hackathon.status}
              </Badge>
              {hackathon.badges.map((badge) => (
                <Badge key={badge} className={getBadgeColor(badge)}>
                  {badge}
                </Badge>
              ))}
            </div>
            <Badge className={getDifficultyColor(hackathon.difficulty)}>
              {hackathon.difficulty}
            </Badge>
          </div>
          <CardTitle className="text-xl mb-2">{hackathon.name}</CardTitle>
          <CardDescription>{hackathon.description}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Calendar className="h-4 w-4" />
              {new Date(hackathon.date).toLocaleDateString()}
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Clock className="h-4 w-4" />
              {hackathon.time}
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="h-4 w-4" />
              {hackathon.location}
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Users className="h-4 w-4" />
              {hackathon.participants}/{hackathon.maxParticipants}
            </div>
          </div>
          
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Trophy className="h-4 w-4 text-yellow-500" />
              <span className="font-bold text-primary">{hackathon.prize}</span>
            </div>
            <div className="text-sm text-muted-foreground">
              Grade {hackathon.grade} • {hackathon.duration}
            </div>
          </div>
          
          {hackathon.winner && (
            <div className="flex items-center gap-2 p-2 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
              <Star className="h-4 w-4 text-yellow-500" />
              <span className="text-sm font-medium">Winner: {hackathon.winner}</span>
            </div>
          )}
          
          <div className="flex flex-wrap gap-1">
            {hackathon.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
          
          <Button 
            className="w-full gradient-bg" 
            disabled={hackathon.status === "Past"}
          >
            {hackathon.status === "Past" ? "View Results" : "Register Now"}
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );

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
            School <span className="text-gradient">Hackathons</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Empowering high school students to explore technology and innovation
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
              placeholder="Search hackathons..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="h-12"
            />
          </div>
          <Select value={filterStatus} onValueChange={setFilterStatus}>
            <SelectTrigger className="w-full md:w-48 h-12">
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Events</SelectItem>
              <SelectItem value="ongoing">Ongoing</SelectItem>
              <SelectItem value="upcoming">Upcoming</SelectItem>
              <SelectItem value="past">Past</SelectItem>
            </SelectContent>
          </Select>
        </motion.div>

        {/* Tabs */}
        <Tabs defaultValue="all" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="all">All Events</TabsTrigger>
            <TabsTrigger value="ongoing">Ongoing</TabsTrigger>
            <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
            <TabsTrigger value="past">Past</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredHackathons.map((hackathon, index) => (
                <EventCard key={hackathon.id} hackathon={hackathon} index={index} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="ongoing" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {ongoingEvents.map((hackathon, index) => (
                <EventCard key={hackathon.id} hackathon={hackathon} index={index} />
              ))}
            </div>
            {ongoingEvents.length === 0 && (
              <div className="text-center py-12">
                <h3 className="text-2xl font-semibold mb-4">No ongoing events</h3>
                <p className="text-muted-foreground">Check back soon for new hackathons!</p>
              </div>
            )}
          </TabsContent>

          <TabsContent value="upcoming" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {upcomingEvents.map((hackathon, index) => (
                <EventCard key={hackathon.id} hackathon={hackathon} index={index} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="past" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pastEvents.map((hackathon, index) => (
                <EventCard key={hackathon.id} hackathon={hackathon} index={index} />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {filteredHackathons.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <h3 className="text-2xl font-semibold mb-4">No hackathons found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search or filter criteria
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default SchoolHackathons;
