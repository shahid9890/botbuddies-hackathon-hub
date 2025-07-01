
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Clock, MapPin, Users, Trophy, Star, Zap } from "lucide-react";

const CollegeHackathons = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");

  const hackathons = [
    {
      id: 1,
      name: "MIT AI Revolution Hackathon",
      date: "2024-09-15",
      time: "08:00 AM",
      location: "MIT Campus, Cambridge, MA",
      description: "Build the next generation of AI applications that will transform industries",
      participants: 450,
      maxParticipants: 500,
      status: "Ongoing",
      difficulty: "Advanced",
      prize: "$100,000",
      tags: ["AI", "Machine Learning", "Deep Learning", "Neural Networks"],
      badges: ["Flagship"],
      university: "MIT",
      duration: "48 hours",
      sponsor: "Google, Microsoft, OpenAI"
    },
    {
      id: 2,
      name: "Stanford Blockchain Summit",
      date: "2024-10-01",
      time: "09:00 AM",
      location: "Stanford University, Palo Alto, CA",
      description: "Develop decentralized applications and explore Web3 technologies",
      participants: 280,
      maxParticipants: 300,
      status: "Upcoming",
      difficulty: "Advanced",
      prize: "$75,000",
      tags: ["Blockchain", "Web3", "DeFi", "Smart Contracts"],
      badges: ["Invite-only"],
      university: "Stanford",
      duration: "36 hours",
      sponsor: "Ethereum Foundation, Coinbase"
    },
    {
      id: 3,
      name: "Harvard Health Tech Challenge",
      date: "2024-10-20",
      time: "10:00 AM",
      location: "Harvard Medical School, Boston, MA",
      description: "Innovation in healthcare technology and medical devices",
      participants: 120,
      maxParticipants: 150,
      status: "Upcoming",
      difficulty: "Intermediate",
      prize: "$50,000",
      tags: ["HealthTech", "Medical AI", "Biotechnology", "Digital Health"],
      badges: ["Flagship"],
      university: "Harvard",
      duration: "24 hours",
      sponsor: "Johnson & Johnson, Pfizer"
    },
    {
      id: 4,
      name: "Berkeley Sustainability Hackathon",
      date: "2024-08-10",
      time: "09:00 AM",
      location: "UC Berkeley, Berkeley, CA",
      description: "Create technology solutions for climate change and sustainability",
      participants: 200,
      maxParticipants: 200,
      status: "Past",
      difficulty: "Intermediate",
      prize: "$60,000",
      tags: ["Climate Tech", "Sustainability", "Green Energy", "Environmental"],
      badges: ["Flagship"],
      university: "UC Berkeley",
      duration: "48 hours",
      sponsor: "Tesla, SolarCity",
      winner: "Team EcoInnovators",
      winnerProject: "Smart Grid Optimization Platform"
    },
    {
      id: 5,
      name: "Carnegie Mellon Robotics Challenge",
      date: "2024-11-05",
      time: "08:30 AM",
      location: "Carnegie Mellon University, Pittsburgh, PA",
      description: "Advanced robotics and autonomous systems development",
      participants: 85,
      maxParticipants: 100,
      status: "Upcoming",
      difficulty: "Advanced",
      prize: "$80,000",
      tags: ["Robotics", "Autonomous Systems", "Computer Vision", "IoT"],
      badges: ["Invite-only"],
      university: "Carnegie Mellon",
      duration: "72 hours",
      sponsor: "Boston Dynamics, NVIDIA"
    },
    {
      id: 6,
      name: "Caltech Space Tech Innovation",
      date: "2024-11-25",
      time: "07:00 AM",
      location: "Caltech, Pasadena, CA",
      description: "Develop cutting-edge space technology and aerospace solutions",
      participants: 0,
      maxParticipants: 80,
      status: "Upcoming",
      difficulty: "Advanced",
      prize: "$120,000",
      tags: ["Space Tech", "Aerospace", "Satellite Systems", "Propulsion"],
      badges: ["Flagship", "Invite-only"],
      university: "Caltech",
      duration: "60 hours",
      sponsor: "SpaceX, NASA, Blue Origin"
    },
    {
      id: 7,
      name: "NYU Fintech Revolution",
      date: "2024-07-20",
      time: "09:00 AM",
      location: "NYU Stern, New York, NY",
      description: "Innovate the future of financial technology and digital banking",
      participants: 180,
      maxParticipants: 180,
      status: "Past",
      difficulty: "Intermediate",
      prize: "$45,000",
      tags: ["Fintech", "Digital Banking", "Cryptocurrency", "Payment Systems"],
      badges: [],
      university: "NYU",
      duration: "30 hours",
      sponsor: "JPMorgan Chase, Goldman Sachs",
      winner: "Team CryptoFlow",
      winnerProject: "Decentralized Payment Gateway"
    },
    {
      id: 8,
      name: "Georgia Tech Cybersecurity Warfare",
      date: "2024-12-10",
      time: "08:00 AM",
      location: "Georgia Tech, Atlanta, GA",
      description: "Advanced cybersecurity challenges and ethical hacking competitions",
      participants: 60,
      maxParticipants: 75,
      status: "Upcoming",
      difficulty: "Advanced",
      prize: "$40,000",
      tags: ["Cybersecurity", "Ethical Hacking", "Network Security", "Cryptography"],
      badges: ["Invite-only"],
      university: "Georgia Tech",
      duration: "24 hours",
      sponsor: "Lockheed Martin, IBM"
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
      <Card className="h-full card-hover border-2 hover:border-primary/50 relative overflow-hidden">
        {hackathon.badges.includes("Flagship") && (
          <div className="absolute top-4 right-4">
            <Zap className="h-5 w-5 text-yellow-500 animate-pulse" />
          </div>
        )}
        <CardHeader>
          <div className="flex justify-between items-start mb-2">
            <div className="flex gap-2 flex-wrap">
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
          <div className="text-sm text-muted-foreground font-medium mb-2">
            {hackathon.university}
          </div>
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
              {hackathon.duration}
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="h-4 w-4" />
              {hackathon.location.split(',')[0]}
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Users className="h-4 w-4" />
              {hackathon.participants}/{hackathon.maxParticipants}
            </div>
          </div>
          
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Trophy className="h-4 w-4 text-yellow-500" />
              <span className="font-bold text-primary text-lg">{hackathon.prize}</span>
            </div>
            <div className="text-xs text-muted-foreground">
              {hackathon.time}
            </div>
          </div>

          <div className="text-xs text-muted-foreground">
            <strong>Sponsors:</strong> {hackathon.sponsor}
          </div>
          
          {hackathon.winner && (
            <div className="space-y-2 p-3 bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-lg border">
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4 text-yellow-500" />
                <span className="text-sm font-medium">Winner: {hackathon.winner}</span>
              </div>
              <p className="text-xs text-muted-foreground">{hackathon.winnerProject}</p>
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
            College <span className="text-gradient">Hackathons</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Elite hackathons at top universities, pushing the boundaries of technology and innovation
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-primary mb-1">$650K+</div>
              <div className="text-sm text-muted-foreground">Total Prize Pool</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-primary mb-1">1,375</div>
              <div className="text-sm text-muted-foreground">Participants</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-primary mb-1">8</div>
              <div className="text-sm text-muted-foreground">Universities</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-primary mb-1">25+</div>
              <div className="text-sm text-muted-foreground">Sponsors</div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
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
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {filteredHackathons.map((hackathon, index) => (
                <EventCard key={hackathon.id} hackathon={hackathon} index={index} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="ongoing" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
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
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {upcomingEvents.map((hackathon, index) => (
                <EventCard key={hackathon.id} hackathon={hackathon} index={index} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="past" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
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

export default CollegeHackathons;
