
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Trophy, Users, Calendar, Star, Play, Image, Award } from "lucide-react";

const PastEvents = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterYear, setFilterYear] = useState("all");

  const pastEvents = [
    {
      id: 1,
      name: "AI Innovation Challenge 2024",
      date: "2024-06-15",
      location: "San Francisco, CA",
      participants: 485,
      duration: "48 hours",
      prize: "$100,000",
      description: "The largest AI hackathon of the year, bringing together brilliant minds to solve real-world problems",
      winners: [
        {
          place: "1st",
          team: "Neural Nexus",
          project: "AI-Powered Healthcare Diagnostics",
          members: ["Alice Chen", "Bob Martinez", "Carol Wang", "David Kim"],
          prize: "$50,000",
          description: "Revolutionary AI system for early disease detection using computer vision and machine learning"
        },
        {
          place: "2nd",
          team: "Code Catalysts",
          project: "Smart City Traffic Optimizer",
          members: ["Eva Rodriguez", "Frank Liu", "Grace Adams"],
          prize: "$30,000",
          description: "AI-driven traffic management system that reduced congestion by 40% in simulation"
        },
        {
          place: "3rd",
          team: "Innovation Squad",
          project: "Educational AI Tutor",
          members: ["Henry Park", "Iris Johnson", "Jack Wilson"],
          prize: "$20,000",
          description: "Personalized AI tutoring platform that adapts to individual learning styles"
        }
      ],
      highlights: [
        "500+ developers from 50+ universities",
        "30+ mentors from top tech companies",
        "Record-breaking $100k prize pool",
        "15 sponsor companies including Google, Microsoft, OpenAI"
      ],
      media: {
        photos: 45,
        videos: 8,
        livestream: "https://youtube.com/watch?v=example"
      },
      testimonials: [
        {
          name: "Alice Chen",
          team: "Neural Nexus",
          quote: "This hackathon changed my life. The mentorship and resources were incredible!"
        },
        {
          name: "Bob Martinez",
          team: "Neural Nexus", 
          quote: "Amazing experience working with such talented people. Can't wait for the next one!"
        }
      ]
    },
    {
      id: 2,
      name: "Web3 Revolution Summit 2024",
      date: "2024-05-20",
      location: "Austin, TX",
      participants: 320,
      duration: "36 hours",
      prize: "$75,000",
      description: "Exploring the future of decentralized applications and blockchain technology",
      winners: [
        {
          place: "1st",
          team: "Blockchain Builders",
          project: "DeFi Insurance Platform",
          members: ["Sarah Mitchell", "Tom Anderson", "Lisa Zhang"],
          prize: "$40,000",
          description: "Decentralized insurance platform using smart contracts and oracles"
        },
        {
          place: "2nd",
          team: "Crypto Crusaders",
          project: "NFT Marketplace for Education",
          members: ["Mike Johnson", "Nina Patel", "Oscar Chen"],
          prize: "$25,000",
          description: "Educational NFT marketplace connecting students with verified credentials"
        }
      ],
      highlights: [
        "320 blockchain enthusiasts",
        "25+ industry mentors",
        "Focus on DeFi and NFT innovation",
        "Partnership with Ethereum Foundation"
      ],
      media: {
        photos: 32,
        videos: 5,
        livestream: "https://youtube.com/watch?v=example2"
      }
    },
    {
      id: 3,
      name: "Sustainability Tech Challenge 2024",
      date: "2024-04-10",
      location: "Seattle, WA",
      participants: 275,
      duration: "24 hours",
      prize: "$60,000",
      description: "Building technology solutions for environmental challenges and climate change",
      winners: [
        {
          place: "1st",
          team: "Green Innovators",
          project: "Carbon Footprint Tracker",
          members: ["Emma Davis", "Ryan Lee", "Sophia Brown"],
          prize: "$35,000",
          description: "AI-powered personal carbon footprint tracking and reduction recommendations"
        }
      ],
      highlights: [
        "Focus on climate tech solutions",
        "Partnership with Tesla and SolarCity",
        "Real-world environmental impact",
        "Mentorship from sustainability experts"
      ],
      media: {
        photos: 28,
        videos: 4
      }
    },
    {
      id: 4,
      name: "Mobile Innovation Hackathon 2023",
      date: "2023-11-18",
      location: "New York, NY",
      participants: 380,
      duration: "48 hours",
      prize: "$80,000",
      description: "Creating the next generation of mobile applications and experiences",
      winners: [
        {
          place: "1st",
          team: "App Architects",
          project: "AR Learning Platform",
          members: ["James Wilson", "Kate Miller", "Alex Garcia"],
          prize: "$45,000",
          description: "Augmented reality platform for immersive educational experiences"
        }
      ],
      highlights: [
        "Focus on AR/VR and mobile innovation",
        "380 mobile developers",
        "Partnership with Apple and Google",
        "Demo day with 1000+ attendees"
      ],
      media: {
        photos: 40,
        videos: 6
      }
    }
  ];

  const filteredEvents = pastEvents.filter(event => {
    const matchesSearch = event.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const eventYear = new Date(event.date).getFullYear().toString();
    const matchesYear = filterYear === "all" || eventYear === filterYear;
    
    return matchesSearch && matchesYear;
  });

  const years = [...new Set(pastEvents.map(event => new Date(event.date).getFullYear().toString()))];

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
            Past <span className="text-gradient">Events</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Celebrating the incredible innovations and achievements from our hackathon community
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
              <div className="text-2xl font-bold text-primary mb-1">25+</div>
              <div className="text-sm text-muted-foreground">Events Completed</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-primary mb-1">8,500+</div>
              <div className="text-sm text-muted-foreground">Total Participants</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-primary mb-1">$2M+</div>
              <div className="text-sm text-muted-foreground">Prizes Awarded</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-primary mb-1">150+</div>
              <div className="text-sm text-muted-foreground">Winning Projects</div>
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
              placeholder="Search past events..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="h-12"
            />
          </div>
          <Select value={filterYear} onValueChange={setFilterYear}>
            <SelectTrigger className="w-full md:w-48 h-12">
              <SelectValue placeholder="Filter by year" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Years</SelectItem>
              {years.map(year => (
                <SelectItem key={year} value={year}>{year}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </motion.div>

        {/* Events Grid */}
        <div className="space-y-12">
          {filteredEvents.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden border-2 hover:border-primary/50 transition-colors">
                <CardHeader className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div>
                      <CardTitle className="text-2xl md:text-3xl mb-2">{event.name}</CardTitle>
                      <CardDescription className="text-lg">{event.description}</CardDescription>
                    </div>
                    <Badge variant="secondary" className="text-lg px-4 py-2">
                      {new Date(event.date).getFullYear()}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  {/* Event Info */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <div className="font-medium">{new Date(event.date).toLocaleDateString()}</div>
                        <div className="text-sm text-muted-foreground">{event.location}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <div className="font-medium">{event.participants}</div>
                        <div className="text-sm text-muted-foreground">Participants</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Trophy className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <div className="font-medium">{event.prize}</div>
                        <div className="text-sm text-muted-foreground">Prize Pool</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Star className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <div className="font-medium">{event.duration}</div>
                        <div className="text-sm text-muted-foreground">Duration</div>
                      </div>
                    </div>
                  </div>

                  {/* Winners */}
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                      <Award className="h-5 w-5" />
                      Winners
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {event.winners.map((winner) => (
                        <Card key={winner.place} className="border-2">
                          <CardHeader className="pb-3">
                            <div className="flex items-center justify-between">
                              <Badge variant={winner.place === "1st" ? "default" : "secondary"} className="text-sm">
                                {winner.place} Place
                              </Badge>
                              <span className="font-bold text-primary">{winner.prize}</span>
                            </div>
                            <CardTitle className="text-lg">{winner.team}</CardTitle>
                            <CardDescription className="font-medium">{winner.project}</CardDescription>
                          </CardHeader>
                          <CardContent className="pt-0">
                            <p className="text-sm text-muted-foreground mb-3">{winner.description}</p>
                            <div className="flex flex-wrap gap-1">
                              {winner.members.map((member) => (
                                <Badge key={member} variant="outline" className="text-xs">
                                  {member}
                                </Badge>
                              ))}
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold mb-4">Event Highlights</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {event.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span className="text-sm">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Media & Actions */}
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pt-4 border-t">
                    <div className="flex items-center gap-6 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Image className="h-4 w-4" />
                        <span>{event.media.photos} Photos</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Play className="h-4 w-4" />
                        <span>{event.media.videos} Videos</span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline">View Details</Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                          <DialogHeader>
                            <DialogTitle>{event.name}</DialogTitle>
                            <DialogDescription>Complete event details and results</DialogDescription>
                          </DialogHeader>
                          <div className="space-y-6">
                            <div>
                              <h4 className="font-semibold mb-2">Event Overview</h4>
                              <p className="text-muted-foreground">{event.description}</p>
                            </div>
                            {event.testimonials && (
                              <div>
                                <h4 className="font-semibold mb-4">Participant Testimonials</h4>
                                <div className="space-y-4">
                                  {event.testimonials.map((testimonial, idx) => (
                                    <Card key={idx}>
                                      <CardContent className="p-4">
                                        <div className="flex items-start gap-3">
                                          <Avatar className="h-10 w-10">
                                            <AvatarFallback>
                                              {testimonial.name.split(' ').map(n => n[0]).join('')}
                                            </AvatarFallback>
                                          </Avatar>
                                          <div>
                                            <p className="italic mb-2">"{testimonial.quote}"</p>
                                            <p className="text-sm font-medium">{testimonial.name}</p>
                                            <p className="text-xs text-muted-foreground">{testimonial.team}</p>
                                          </div>
                                        </div>
                                      </CardContent>
                                    </Card>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        </DialogContent>
                      </Dialog>
                      <Button className="gradient-bg">View Media</Button>
                    </div>
                  </div>
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

export default PastEvents;
