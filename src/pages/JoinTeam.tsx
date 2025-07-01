
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
import { Upload, Users, Code, Zap } from "lucide-react";

const JoinTeam = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    experience: "",
    skills: "",
    motivation: "",
    availability: "",
    portfolio: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Team application submitted:", formData);
    // Here you would typically send the data to your backend
  };

  const teamBenefits = [
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Collaborative Environment",
      description: "Work with like-minded innovators and learn from each other"
    },
    {
      icon: <Code className="h-8 w-8 text-primary" />,
      title: "Skill Development",
      description: "Enhance your technical skills through hands-on projects"
    },
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "Innovation Impact",
      description: "Build solutions that make a real difference in the world"
    }
  ];

  const skillOptions = [
    "Frontend Development", "Backend Development", "Full Stack", "Mobile Development",
    "UI/UX Design", "Data Science", "Machine Learning", "Blockchain", "DevOps",
    "Cybersecurity", "Game Development", "Product Management", "Marketing"
  ];

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
            Join the <span className="text-gradient">BotBuddies</span> Team
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Become part of our core team and help shape the future of hackathons
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <Card>
              <CardHeader>
                <CardTitle>Why Join Our Team?</CardTitle>
                <CardDescription>
                  Be part of something bigger than yourself
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {teamBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4">
                    {benefit.icon}
                    <div>
                      <h3 className="font-semibold mb-2">{benefit.title}</h3>
                      <p className="text-sm text-muted-foreground">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>What We're Looking For</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary">Passionate</Badge>
                    <span className="text-sm">About technology and innovation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary">Collaborative</Badge>
                    <span className="text-sm">Team player mindset</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary">Committed</Badge>
                    <span className="text-sm">Ready to make an impact</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary">Learner</Badge>
                    <span className="text-sm">Always growing and improving</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Application Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <Card>
              <CardHeader>
                <CardTitle>Application Form</CardTitle>
                <CardDescription>
                  Tell us about yourself and why you want to join our team
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="experience">Experience Level *</Label>
                      <Select
                        value={formData.experience}
                        onValueChange={(value) => handleInputChange("experience", value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select your experience level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="beginner">Beginner (0-1 years)</SelectItem>
                          <SelectItem value="intermediate">Intermediate (1-3 years)</SelectItem>
                          <SelectItem value="advanced">Advanced (3-5 years)</SelectItem>
                          <SelectItem value="expert">Expert (5+ years)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="skills">Primary Skills *</Label>
                    <Select
                      value={formData.skills}
                      onValueChange={(value) => handleInputChange("skills", value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select your primary skill area" />
                      </SelectTrigger>
                      <SelectContent>
                        {skillOptions.map((skill) => (
                          <SelectItem key={skill} value={skill.toLowerCase().replace(/\s+/g, '-')}>
                            {skill}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="motivation">Why do you want to join BotBuddies? *</Label>
                    <Textarea
                      id="motivation"
                      value={formData.motivation}
                      onChange={(e) => handleInputChange("motivation", e.target.value)}
                      placeholder="Tell us what motivates you to join our team..."
                      className="min-h-[100px]"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="availability">Availability *</Label>
                    <Select
                      value={formData.availability}
                      onValueChange={(value) => handleInputChange("availability", value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="How much time can you commit?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="part-time">Part-time (5-10 hours/week)</SelectItem>
                        <SelectItem value="significant">Significant (10-20 hours/week)</SelectItem>
                        <SelectItem value="full-time">Full-time (20+ hours/week)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="portfolio">Portfolio/GitHub URL</Label>
                    <Input
                      id="portfolio"
                      value={formData.portfolio}
                      onChange={(e) => handleInputChange("portfolio", e.target.value)}
                      placeholder="https://github.com/yourusername or your portfolio URL"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="resume">Resume Upload</Label>
                    <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center">
                      <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                      <p className="text-sm text-muted-foreground mb-2">
                        Click to upload your resume or drag and drop
                      </p>
                      <p className="text-xs text-muted-foreground">
                        PDF, DOC, or DOCX (max 5MB)
                      </p>
                      <Button variant="outline" className="mt-2">
                        Choose File
                      </Button>
                    </div>
                  </div>

                  <Button type="submit" className="w-full gradient-bg text-lg py-6">
                    Submit Application
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default JoinTeam;
