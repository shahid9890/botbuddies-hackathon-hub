
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Calendar, Download, Star, Trophy, Users, Clock } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Dashboard = () => {
  const [feedbackText, setFeedbackText] = useState("");
  const [rating, setRating] = useState("");

  const registeredEvents = [
    {
      id: 1,
      name: "AI Innovation Challenge",
      date: "2024-08-15",
      status: "Upcoming",
      team: "Team Alpha",
      members: 4,
      progress: 75
    },
    {
      id: 2,
      name: "Web3 Builder Summit",
      date: "2024-08-22",
      status: "Registered",
      team: "Solo",
      members: 1,
      progress: 25
    },
    {
      id: 3,
      name: "Mobile App Marathon",
      date: "2024-07-15",
      status: "Completed",
      team: "Team Beta",
      members: 3,
      progress: 100,
      placement: "2nd Place",
      points: 850
    }
  ];

  const certificates = [
    {
      id: 1,
      name: "Blockchain Fundamentals",
      event: "Web3 Builder Summit 2024",
      date: "2024-07-01",
      type: "Completion"
    },
    {
      id: 2,
      name: "Second Place Winner",
      event: "Mobile App Marathon",
      date: "2024-07-15",
      type: "Achievement"
    },
    {
      id: 3,
      name: "Team Leadership",
      event: "AI Innovation Challenge",
      date: "2024-06-20",
      type: "Skill"
    }
  ];

  const achievements = [
    {
      icon: "🏆",
      title: "Event Winner",
      description: "Won 1st place in hackathon",
      earned: "2024-06-15",
      rarity: "Rare"
    },
    {
      icon: "🤝",
      title: "Team Player",
      description: "Participated in 5+ team events",
      earned: "2024-07-01",
      rarity: "Common"
    },
    {
      icon: "🔥",
      title: "Streak Master",
      description: "Participated in 3 consecutive events",
      earned: "2024-07-20",
      rarity: "Uncommon"
    },
    {
      icon: "💡",
      title: "Innovation Leader",
      description: "Led innovative project solution",
      earned: "2024-08-01",
      rarity: "Epic"
    }
  ];

  const handleFeedbackSubmit = () => {
    // Mock feedback submission
    console.log("Feedback submitted:", { rating, text: feedbackText });
    setFeedbackText("");
    setRating("");
  };

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case "Common": return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300";
      case "Uncommon": return "bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-300";
      case "Rare": return "bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-300";
      case "Epic": return "bg-purple-100 text-purple-800 dark:bg-purple-800 dark:text-purple-300";
      default: return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300";
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
          className="mb-8"
        >
          <div className="flex items-center gap-4 mb-6">
            <Avatar className="h-16 w-16">
              <AvatarImage src="/api/placeholder/64/64" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-3xl font-bold">Welcome back, John!</h1>
              <p className="text-muted-foreground">Ready for your next challenge?</p>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-primary">12</div>
                <div className="text-sm text-muted-foreground">Events Joined</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-primary">3</div>
                <div className="text-sm text-muted-foreground">Awards Won</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-primary">1,250</div>
                <div className="text-sm text-muted-foreground">Points Earned</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-primary">8</div>
                <div className="text-sm text-muted-foreground">Team Members</div>
              </CardContent>
            </Card>
          </div>
        </motion.div>

        <Tabs defaultValue="events" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="events">My Events</TabsTrigger>
            <TabsTrigger value="certificates">Certificates</TabsTrigger>
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
            <TabsTrigger value="feedback">Feedback</TabsTrigger>
          </TabsList>

          <TabsContent value="events" className="space-y-6">
            <div className="grid gap-6">
              {registeredEvents.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="card-hover">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-xl">{event.name}</CardTitle>
                          <CardDescription className="flex items-center gap-2 mt-2">
                            <Calendar className="h-4 w-4" />
                            {new Date(event.date).toLocaleDateString()}
                          </CardDescription>
                        </div>
                        <Badge variant={event.status === "Completed" ? "default" : "secondary"}>
                          {event.status}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-2">
                          <Users className="h-4 w-4" />
                          {event.team} ({event.members} members)
                        </div>
                        {event.placement && (
                          <Badge variant="outline" className="text-primary">
                            <Trophy className="h-3 w-3 mr-1" />
                            {event.placement}
                          </Badge>
                        )}
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Progress</span>
                          <span>{event.progress}%</span>
                        </div>
                        <Progress value={event.progress} className="h-2" />
                      </div>
                      
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                        {event.status === "Upcoming" && (
                          <Button size="sm" className="gradient-bg">
                            Join Event
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="certificates" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certificates.map((cert, index) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="card-hover">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-lg">{cert.name}</CardTitle>
                          <CardDescription>{cert.event}</CardDescription>
                        </div>
                        <Badge variant="secondary">{cert.type}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          {new Date(cert.date).toLocaleDateString()}
                        </div>
                        <Button size="sm" variant="outline">
                          <Download className="h-4 w-4 mr-1" />
                          Download
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="achievements" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="card-hover">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="text-3xl">{achievement.icon}</div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="text-lg font-semibold">{achievement.title}</h3>
                            <Badge className={getRarityColor(achievement.rarity)}>
                              {achievement.rarity}
                            </Badge>
                          </div>
                          <p className="text-muted-foreground mb-2">{achievement.description}</p>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Clock className="h-4 w-4" />
                            Earned {new Date(achievement.earned).toLocaleDateString()}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="feedback" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Submit Feedback</CardTitle>
                <CardDescription>
                  Help us improve your BotBuddies experience
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Rating</label>
                  <Select value={rating} onValueChange={setRating}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a rating" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="5">⭐⭐⭐⭐⭐ Excellent</SelectItem>
                      <SelectItem value="4">⭐⭐⭐⭐ Good</SelectItem>
                      <SelectItem value="3">⭐⭐⭐ Average</SelectItem>
                      <SelectItem value="2">⭐⭐ Poor</SelectItem>
                      <SelectItem value="1">⭐ Very Poor</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Your Feedback</label>
                  <Textarea
                    placeholder="Tell us about your experience..."
                    value={feedbackText}
                    onChange={(e) => setFeedbackText(e.target.value)}
                    className="min-h-[120px]"
                  />
                </div>
                
                <Button onClick={handleFeedbackSubmit} className="gradient-bg">
                  Submit Feedback
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;
