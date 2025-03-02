import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, Clock, MapPin, Video } from 'lucide-react';

const EventDetails = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut"
      }
    })
  };

  const details = [
    {
      icon: <Calendar className="text-google-blue" size={24} />,
      title: "Date",
      info: "October 15-17, 2025",
      description: "Three days of intensive coding, workshops, and networking"
    },
    {
      icon: <Clock className="text-google-red" size={24} />,
      title: "Time",
      info: "9:00 AM - 6:00 PM",
      description: "Doors open at 8:00 AM for registration and breakfast"
    },
    {
      icon: <MapPin className="text-google-yellow" size={24} />,
      title: "Location",
      info: "Anna Auditorium VIT Vellore",
      description: "Vellore Institute of Technology, Tamil Nadu"
    },
    {
      icon: <Video className="text-google-green" size={24} />,
      title: "Virtual Attendance",
      info: "Live Streaming Available",
      description: "Access all sessions remotely with interactive features"
    }
  ];

  return (
    <section id="details" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Event Details</h2>
          <p className="section-subtitle">
            Join us for the most anticipated developer event of the year. Connect with industry leaders,
            learn cutting-edge technologies, and showcase your skills.
          </p>
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {details.map((detail, index) => (
            <motion.div
              key={detail.title}
              className="material-card p-6"
              custom={index}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={cardVariants}
            >
              <div className="flex items-center mb-4">
                {detail.icon}
                <h3 className="text-xl font-semibold ml-2">{detail.title}</h3>
              </div>
              <p className="text-lg font-medium mb-2">{detail.info}</p>
              <p className="text-gray-400">{detail.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16"
        >
          <div className="material-card p-6 overflow-hidden">
            <h3 className="text-xl font-semibold mb-4">Event Location</h3>
            <div className="aspect-video rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.5698211066897!2d79.15567541482233!3d12.969813490855768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bad38e61fa68ffb%3A0xf8c220050e542b56!2sAnna%20Auditorium!5e0!3m2!1sen!2sin!4v1623252234537!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Event Location"
              ></iframe>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EventDetails;