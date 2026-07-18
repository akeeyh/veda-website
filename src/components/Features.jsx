import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Lightbulb, AlertTriangle, ArrowUpRight, Moon, DollarSign } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <MessageSquare size={24} />,
      title: "Eye-Tracking Communication",
      description: "Express basic needs instantly. Select options like water, pain, or medicine using targeted eye movements."
    },
    {
      icon: <Lightbulb size={24} />,
      title: "IoT & Home Control",
      description: "Regain autonomy by controlling room lights, fans, and blinds directly through the VEDA interface."
    },
    {
      icon: <AlertTriangle size={24} />,
      title: "Emergency Safety System",
      description: "A 'Dead Man's Switch' that triggers a loud alert or notification if prolonged eye closure is detected."
    },
    {
      icon: <ArrowUpRight size={24} />,
      title: "Request Escalation Matrix",
      description: "Unanswered requests automatically escalate in priority, ensuring caregivers are notified of urgent needs."
    },
    {
      icon: <Moon size={24} />,
      title: "Smart Sleep Mode",
      description: "Enter or exit a power-saving sleep mode using a specific blink sequence, preventing accidental triggers while resting."
    },
    {
      icon: <DollarSign size={24} />,
      title: "Affordable & Accessible",
      description: "Total hardware cost is ~₹10,000. No proprietary or specialized equipment is required to run the system."
    }
  ];

  return (
    <section id="features" className="section" style={{ backgroundColor: 'var(--color-white)' }}>
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">What We Provide</h2>
          <p className="section-subtitle">
            A comprehensive suite of features designed to restore autonomy and ensure safety for patients and peace of mind for caregivers.
          </p>
        </motion.div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '2rem',
          marginTop: '4rem'
        }}>
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="card"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              style={{
                borderTop: '4px solid var(--color-cyprus)'
              }}
            >
              <div style={{ 
                display: 'inline-flex', 
                padding: '0.75rem', 
                backgroundColor: 'rgba(0, 71, 65, 0.05)', 
                color: 'var(--color-cyprus)', 
                borderRadius: '12px', 
                marginBottom: '1rem' 
              }}>
                {feature.icon}
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', color: 'var(--color-cyprus)' }}>
                {feature.title}
              </h3>
              <p style={{ color: 'var(--text-secondary)' }}>
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
