import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, Clock, User, Users } from 'lucide-react';

interface Session {
  id: number;
  time: string;
  title: string;
  speaker: string;
  type: 'workshop' | 'talk' | 'panel' | 'networking';
  description: string;
}

interface DaySchedule {
  date: string;
  day: string;
  sessions: Session[];
}

const Schedule = () => {
  const [activeDay, setActiveDay] = useState(0);
  const [expandedSession, setExpandedSession] = useState<number | null>(null);
  
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const schedule: DaySchedule[] = [
    {
      date: "October 15, 2025",
      day: "Day 1",
      sessions: [
        {
          id: 1,
          time: "9:00 AM - 10:00 AM",
          title: "Opening Keynote: The Future of Development",
          speaker: "Sarah Johnson, CTO at TechGiant",
          type: "talk",
          description: "An inspiring talk about where the industry is headed and how developers can prepare for the future of technology."
        },
        {
          id: 2,
          time: "10:30 AM - 12:00 PM",
          title: "Workshop: Building with Modern Frameworks",
          speaker: "Michael Chen, Senior Developer Advocate",
          type: "workshop",
          description: "Hands-on workshop exploring the latest features in React, Vue, and Angular with practical examples and best practices."
        },
        {
          id: 3,
          time: "1:00 PM - 2:30 PM",
          title: "Panel: Diversity in Tech",
          speaker: "Various Industry Leaders",
          type: "panel",
          description: "A thoughtful discussion on improving diversity and inclusion in the tech industry with actionable takeaways."
        },
        {
          id: 4,
          time: "3:00 PM - 5:00 PM",
          title: "Hackathon Kickoff",
          speaker: "DevJams Team",
          type: "networking",
          description: "Form teams and start working on your hackathon projects with mentorship from industry experts."
        }
      ]
    },
    {
      date: "October 16, 2025",
      day: "Day 2",
      sessions: [
        {
          id: 5,
          time: "9:00 AM - 10:00 AM",
          title: "AI and Machine Learning in Production",
          speaker: "Dr. Emily Rodriguez, AI Research Lead",
          type: "talk",
          description: "Learn how to implement AI and ML solutions in your applications with practical examples and case studies."
        },
        {
          id: 6,
          time: "10:30 AM - 12:00 PM",
          title: "Workshop: Cloud-Native Development",
          speaker: "James Wilson, Cloud Architect",
          type: "workshop",
          description: "Dive into containerization, orchestration, and microservices architecture with hands-on exercises."
        },
        {
          id: 7,
          time: "1:00 PM - 2:30 PM",
          title: "Security Best Practices for Developers",
          speaker: "Alexandra Kim, Security Engineer",
          type: "talk",
          description: "Essential security concepts every developer should know to build robust and secure applications."
        },
        {
          id: 8,
          time: "3:00 PM - 6:00 PM",
          title: "Hackathon Continued",
          speaker: "DevJams Team",
          type: "networking",
          description: "Continue working on your hackathon projects with technical support and mentorship."
        }
      ]
    },
    {
      date: "October 17, 2025",
      day: "Day 3",
      sessions: [
        {
          id: 9,
          time: "9:00 AM - 10:30 AM",
          title: "Workshop: Performance Optimization",
          speaker: "David Park, Performance Engineer",
          type: "workshop",
          description: "Techniques and tools for optimizing web and mobile applications for speed and efficiency."
        },
        {
          id: 10,
          time: "11:00 AM - 12:00 PM",
          title: "The Future of Web Standards",
          speaker: "Olivia Martinez, W3C Member",
          type: "talk",
          description: "An overview of upcoming web standards and how they will shape the future of web development."
        },
        {
          id: 11,
          time: "1:00 PM - 3:00 PM",
          title: "Hackathon Presentations",
          speaker: "All Participants",
          type: "panel",
          description: "Teams present their hackathon projects to judges and attendees."
        },
        {
          id: 12,
          time: "3:30 PM - 5:00 PM",
          title: "Closing Ceremony & Awards",
          speaker: "DevJams Team",
          type: "networking",
          description: "Celebrate the end of DevJams with awards, prizes, and final networking opportunities."
        }
      ]
    }
  ];

  const getSessionIcon = (type: string) => {
    switch (type) {
      case 'workshop':
        return <Calendar className="text-google-blue" size={20} />;
      case 'talk':
        return <User className="text-google-red" size={20} />;
      case 'panel':
        return <Users className="text-google-yellow" size={20} />;
      case 'networking':
        return <Clock className="text-google-green" size={20} />;
      default:
        return <Calendar className="text-google-blue" size={20} />;
    }
  };

  const toggleSession = (id: number) => {
    if (expandedSession === id) {
      setExpandedSession(null);
    } else {
      setExpandedSession(id);
    }
  };

  return (
    <section id="schedule" className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Event Schedule</h2>
          <p className="section-subtitle">
            Three days packed with inspiring talks, hands-on workshops, and networking opportunities.
            Plan your DevJams experience to make the most of this event.
          </p>
        </motion.div>

        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-surface-1 rounded-full p-1">
            {schedule.map((day, index) => (
              <button
                key={index}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  activeDay === index
                    ? 'bg-google-blue text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
                onClick={() => setActiveDay(index)}
              >
                {day.day}
              </button>
            ))}
          </div>
        </div>

        <div ref={ref} className="relative">
          <div className="timeline-line"></div>
          
          {schedule[activeDay].sessions.map((session, index) => (
            <motion.div
              key={session.id}
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="relative pl-8 mb-8"
            >
              <div className="timeline-dot"></div>
              <div 
                className={`session-card ${session.type}`}
                onClick={() => toggleSession(session.id)}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <div className="flex items-center mb-1">
                      {getSessionIcon(session.type)}
                      <span className="text-sm font-medium ml-2 text-gray-400">{session.time}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-1">{session.title}</h3>
                    <p className="text-gray-400">{session.speaker}</p>
                  </div>
                  <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                    session.type === 'workshop' ? 'bg-google-blue/20 text-google-blue' :
                    session.type === 'talk' ? 'bg-google-red/20 text-google-red' :
                    session.type === 'panel' ? 'bg-google-yellow/20 text-google-yellow' :
                    'bg-google-green/20 text-google-green'
                  }`}>
                    {session.type.charAt(0).toUpperCase() + session.type.slice(1)}
                  </span>
                </div>
                
                <div className={`accordion-content mt-4 ${expandedSession === session.id ? 'open' : ''}`}>
                  <p className="text-gray-300">{session.description}</p>
                  <div className="mt-4 flex justify-between">
                    <button className="text-google-blue text-sm font-medium">
                      Add to Calendar
                    </button>
                    <button className="text-gray-400 text-sm font-medium">
                      Set Reminder
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Schedule;