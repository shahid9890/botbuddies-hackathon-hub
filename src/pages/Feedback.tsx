
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Star, MessageSquare, TrendingUp, Users } from "lucide-react";

const Feedback = () => {
  const [newFeedback, setNewFeedback] = useState({
    name: "",
    email: "",
    event: "",
    rating: "",
    category: "",
    comment: ""
  });

  const [submittedFeedback, setSubmittedFeedback] = useState<any[]>([]);

  const publicFeedback = [
    {
      id: 1,
      name: "Sarah Chen",
      event: "AI Innovation Challenge 2024",
      rating: 5,
      category: "Organization",
      comment: "Absolutely incredible event! The organization was flawless, mentors were amazing, and I learned so much. Already looking forward to the next one!",
      date: "2024-07-20",
      verified: true
    },
    {
      id: 2,
      name: "Marcus Rodriguez",
      event: "Web3 Builder Summit",
      rating: 4,
      category: "Content Quality",
      comment: "Great content and workshops. The blockchain sessions were particularly insightful. Would love to see more hands-on coding sessions next time.",
      date: "2024-07-18",
      verified: true
    },
    {
      id: 3,
      name: "Emily Johnson",
      event: "Mobile App Marathon",
      rating: 5,
      category: "Networking",
      comment: "Met some amazing people and formed lasting connections. The networking events were well-organized and really helped break the ice.",
      date: "2024-07-15",
      verified: true
    },
    {
      id: 4,
      name: "David Park",
      event: "Sustainability Tech Challenge",
      rating: 5,
      category: "Impact",
      comment: "This hackathon opened my eyes to the potential of technology in solving climate issues. The judges provided excellent feedback on our green energy project.",
      date: "2024-07-12",
      verified: true
    },
    {
      id: 5,
      name: "Lisa Wang",
      event: "Cybersecurity Bootcamp",
      rating: 4,
      category: "Learning Experience",
      comment: "Learned a ton about ethical hacking and network security. The instructors were knowledgeable and patient. Would recommend to anyone interested in cybersecurity.",
      date: "2024-07-10",
      verified: true
    },
    {
      id: 6,
      name: "Alex Garcia",
      event: "Game Development Jam",
      rating: 5,
      category: "Fun Factor",
      comment: "Most fun I've had at a hackathon! Building games with Unity was exciting, and the creative challenges pushed us to think outside the box.",
      date: "2024-07-08",
      verified: true
    }
  ];

  const allFeedback = [...publicFeedback, ...submittedFeedback];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const feedback = {
      ...newFeedback,
      id: Date.now(),
      date: new Date().toISOString().split('T')[0],
      verified: false
    };
    setSubmittedFeedback([feedback, ...submittedFeedback]);
    setNewFeedback({
      name: "",
      email: "",
      event: "",
      rating: "",
      category: "",
      comment: ""
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setNewFeedback(prev => ({ ...prev, [field]: value }));
  };

  const getRatingStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      "Organization": "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
      "Content Quality": "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
      "Networking": "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300",
      "Impact": "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300",
      "Learning Experience": "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300",
      "Fun Factor": "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
      "Overall Experience": "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300"
    };
    return colors[category] || "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300";
  };

  const averageRating = allFeedback.length > 0 
    ? (allFeedback.reduce((sum, feedback) => sum + parseInt(feedback.rating), 0) / allFeedback.length).toFixed(1)
    : "0.0";

  const ratingDistribution = Array.from({ length: 5 }, (_, i) => {
    const rating = 5 - i;
    const count = allFeedback.filter(f => parseInt(f.rating) === rating).length;
    const percentage = allFeedback.length > 0 ? (count / allFeedback.length) * 100 : 0;
    return { rating, count, percentage };
  });

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
            Community <span className="text-gradient">Feedback</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Your voice matters! Share your experience and help us improve our events
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12"
        >
          <Card>
            <CardContent className="p-6 text-center">
              <div className="flex justify-center mb-2">
                <Star className="h-8 w-8 text-yellow-400 fill-current" />
              </div>
              <div className="text-3xl font-bold text-primary mb-1">{averageRating}</div>
              <div className="text-sm text-muted-foreground">Average Rating</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <MessageSquare className="h-8 w-8 text-primary mx-auto mb-2" />
              <div className="text-3xl font-bold text-primary mb-1">{allFeedback.length}</div>
              <div className="text-sm text-muted-foreground">Total Reviews</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <TrendingUp className="h-8 w-8 text-primary mx-auto mb-2" />
              <div className="text-3xl font-bold text-primary mb-1">96%</div>
              <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <Users className="h-8 w-8 text-primary mx-auto mb-2" />
              <div className="text-3xl font-bold text-primary mb-1">12</div>
              <div className="text-sm text-muted-foreground">Events Rated</div>
            </CardContent>
          </Card>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Feedback Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-1"
          >
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="text-2xl">Share Your Feedback</CardTitle>
                <CardDescription>
                  Help us improve by sharing your experience
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      value={newFeedback.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      placeholder="Your name"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={newFeedback.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="event">Event *</Label>
                    <Select
                      value={newFeedback.event}
                      onValueChange={(value) => handleInputChange("event", value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select event" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="AI Innovation Challenge 2024">AI Innovation Challenge 2024</SelectItem>
                        <SelectItem value="Web3 Builder Summit">Web3 Builder Summit</SelectItem>
                        <SelectItem value="Mobile App Marathon">Mobile App Marathon</SelectItem>
                        <SelectItem value="Sustainability Tech Challenge">Sustainability Tech Challenge</SelectItem>
                        <SelectItem value="Cybersecurity Bootcamp">Cybersecurity Bootcamp</SelectItem>
                        <SelectItem value="Game Development Jam">Game Development Jam</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="rating">Rating *</Label>
                    <Select
                      value={newFeedback.rating}
                      onValueChange={(value) => handleInputChange("rating", value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select rating" />
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
                    <Label htmlFor="category">Category *</Label>
                    <Select
                      value={newFeedback.category}
                      onValueChange={(value) => handleInputChange("category", value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Overall Experience">Overall Experience</SelectItem>
                        <SelectItem value="Organization">Organization</SelectItem>
                        <SelectItem value="Content Quality">Content Quality</SelectItem>
                        <SelectItem value="Networking">Networking</SelectItem>
                        <SelectItem value="Learning Experience">Learning Experience</SelectItem>
                        <SelectItem value="Fun Factor">Fun Factor</SelectItem>
                        <SelectItem value="Impact">Impact</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="comment">Comment *</Label>
                    <Textarea
                      id="comment"
                      value={newFeedback.comment}
                      onChange={(e) => handleInputChange("comment", e.target.value)}
                      placeholder="Share your detailed feedback..."
                      className="min-h-[100px]"
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full gradient-bg">
                    Submit Feedback
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Feedback Display */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Rating Distribution */}
            <Card>
              <CardHeader>
                <CardTitle>Rating Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {ratingDistribution.map(({ rating, count, percentage }) => (
                    <div key={rating} className="flex items-center gap-3">
                      <div className="flex items-center gap-1 w-20">
                        <span className="text-sm font-medium">{rating}</span>
                        <Star className="h-3 w-3 text-yellow-400 fill-current" />
                      </div>
                      <div className="flex-1 bg-muted rounded-full h-2">
                        <div
                          className="bg-primary h-2 rounded-full transition-all duration-300"
                          style={{ width: `${percentage}%` }}
                        />
                      </div>
                      <span className="text-sm text-muted-foreground w-12 text-right">
                        {count}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Feedback List */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Community Reviews</h2>
              {allFeedback.map((feedback, index) => (
                <motion.div
                  key={feedback.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <Card className="border-2 hover:border-primary/50 transition-colors">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <Avatar className="h-12 w-12">
                          <AvatarImage src={`/api/placeholder/48/48`} />
                          <AvatarFallback>
                            {feedback.name.split(' ').map((n: string) => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <div className="flex items-center gap-2">
                                <h3 className="font-semibold">{feedback.name}</h3>
                                {feedback.verified && (
                                  <Badge variant="secondary" className="text-xs">
                                    Verified
                                  </Badge>
                                )}
                              </div>
                              <p className="text-sm text-muted-foreground">{feedback.event}</p>
                            </div>
                            <div className="text-right">
                              <div className="flex gap-1 mb-1">
                                {getRatingStars(parseInt(feedback.rating))}
                              </div>
                              <p className="text-xs text-muted-foreground">{feedback.date}</p>
                            </div>
                          </div>
                          <div className="mb-3">
                            <Badge className={getCategoryColor(feedback.category)}>
                              {feedback.category}
                            </Badge>
                          </div>
                          <p className="text-muted-foreground">{feedback.comment}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
