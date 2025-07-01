
"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { TestimonialsCarousel } from "@/components/ui/testimonials-carousel";
import { ParticlesBackground } from "@/components/ui/particles-background";
import { Link } from "react-router-dom";

const Index = () => {
  const features = [
    {
      title: "School Hackathons",
      description: "Tailored events for high school students to explore coding and innovation",
      icon: "🏫",
      href: "/school-hackathons"
    },
    {
      title: "College Hackathons",
      description: "Advanced competitions for university students and professionals",
      icon: "🎓",
      href: "/college-hackathons"
    },
    {
      title: "Team Building",
      description: "Find your perfect teammates and build lasting connections",
      icon: "🤝",
      href: "/join-team"
    },
    {
      title: "Mentorship",
      description: "Learn from industry experts and experienced developers",
      icon: "👨‍🏫",
      href: "/about"
    }
  ];

  const stats = [
    { label: "Total Events", value: 150, suffix: "+" },
    { label: "Participants", value: 25000, suffix: "+" },
    { label: "Sponsors", value: 200, suffix: "+" },
    { label: "Winners", value: 500, suffix: "+" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <ParticlesBackground />
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-blue-600/20 to-cyan-600/20"></div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <Badge variant="secondary" className="mb-4 text-sm px-4 py-2">
              🚀 Join the Innovation Revolution
            </Badge>
            
            <h1 className="text-4xl md:text-7xl font-bold mb-6 leading-tight">
              Welcome to{" "}
              <span className="text-gradient">BotBuddies</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Empowering the next generation of innovators through collaborative hackathons, 
              team building, and cutting-edge technology challenges.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Button size="lg" className="gradient-bg text-lg px-8 py-3" asChild>
                <Link to="/events">Explore Events</Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-3" asChild>
                <Link to="/join-team">Join Team</Link>
              </Button>
              <Button size="lg" variant="secondary" className="text-lg px-8 py-3" asChild>
                <Link to="/events">Register Now</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-background/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Our <span className="text-gradient">Impact</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Building a community of innovators, one hackathon at a time
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <AnimatedCounter 
                  end={stat.value} 
                  suffix={stat.suffix}
                  duration={2.5}
                />
                <p className="text-lg text-muted-foreground mt-2">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Why Choose <span className="text-gradient">BotBuddies</span>?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience the future of collaborative innovation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link to={feature.href}>
                  <Card className="h-full card-hover cursor-pointer border-2 hover:border-primary/50">
                    <CardHeader className="text-center">
                      <div className="text-4xl mb-4">{feature.icon}</div>
                      <CardTitle className="text-xl">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-center">
                        {feature.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              What Our <span className="text-gradient">Community</span> Says
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Stories from innovators who've grown with BotBuddies
            </p>
          </motion.div>

          <TestimonialsCarousel />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Start Your <span className="text-gradient">Journey</span>?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of innovators who are building the future, one hackathon at a time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gradient-bg text-lg px-8 py-3" asChild>
                <Link to="/join-team">Join Our Team</Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-3" asChild>
                <Link to="/events">View Upcoming Events</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
