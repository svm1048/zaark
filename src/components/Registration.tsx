import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Check, ChevronRight } from 'lucide-react';

const Registration = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    jobTitle: '',
    attendanceType: '',
    dietaryRestrictions: '',
    interests: [] as string[],
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const validateStep = (currentStep: number) => {
    const newErrors: Record<string, string> = {};
    
    if (currentStep === 1) {
      if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
      if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
      if (!formData.email.trim()) {
        newErrors.email = 'Email is required';
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = 'Email is invalid';
      }
    } else if (currentStep === 2) {
      if (!formData.company.trim()) newErrors.company = 'Company is required';
      if (!formData.jobTitle.trim()) newErrors.jobTitle = 'Job title is required';
      if (!formData.attendanceType) newErrors.attendanceType = 'Please select attendance type';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(step)) {
      setStep(step + 1);
    }
  };

  const handlePrevious = () => {
    setStep(step - 1);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    // Clear error when user types
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    
    if (checked) {
      setFormData({
        ...formData,
        interests: [...formData.interests, value]
      });
    } else {
      setFormData({
        ...formData,
        interests: formData.interests.filter(interest => interest !== value)
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateStep(step)) {
      // In a real app, you would submit the form data to your backend here
      console.log('Form submitted:', formData);
      setIsSubmitted(true);
    }
  };

  const interestOptions = [
    'Web Development',
    'Mobile Development',
    'Cloud Computing',
    'DevOps',
    'AI/Machine Learning',
    'Blockchain',
    'Security',
    'UX/UI Design'
  ];

  return (
    <section id="register" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Register for DevJams</h2>
          <p className="section-subtitle">
            Secure your spot at the most anticipated developer event of the year.
            Early bird registration closes soon!
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          {!isSubmitted ? (
            <div className="material-card p-8">
              <div className="mb-8">
                <div className="progress-bar">
                  <div 
                    className="progress-value" 
                    style={{ width: `${(step / 3) * 100}%` }}
                  ></div>
                </div>
                <div className="flex justify-between mt-2 text-sm text-gray-400">
                  <span>Personal Info</span>
                  <span>Professional Info</span>
                  <span>Preferences</span>
                </div>
              </div>
              
              <form onSubmit={handleSubmit}>
                {step === 1 && (
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold mb-4">Personal Information</h3>
                    
                    <div>
                      <label htmlFor="firstName" className="form-label">First Name</label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="form-input"
                      />
                      {errors.firstName && <p className="form-error">{errors.firstName}</p>}
                    </div>
                    
                    <div>
                      <label htmlFor="lastName" className="form-label">Last Name</label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="form-input"
                      />
                      {errors.lastName && <p className="form-error">{errors.lastName}</p>}
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="form-label">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="form-input"
                      />
                      {errors.email && <p className="form-error">{errors.email}</p>}
                    </div>
                  </div>
                )}
                
                {step === 2 && (
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold mb-4">Professional Information</h3>
                    
                    <div>
                      <label htmlFor="company" className="form-label">Company/Organization</label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="form-input"
                      />
                      {errors.company && <p className="form-error">{errors.company}</p>}
                    </div>
                    
                    <div>
                      <label htmlFor="jobTitle" className="form-label">Job Title</label>
                      <input
                        type="text"
                        id="jobTitle"
                        name="jobTitle"
                        value={formData.jobTitle}
                        onChange={handleChange}
                        className="form-input"
                      />
                      {errors.jobTitle && <p className="form-error">{errors.jobTitle}</p>}
                    </div>
                    
                    <div>
                      <label htmlFor="attendanceType" className="form-label">Attendance Type</label>
                      <select
                        id="attendanceType"
                        name="attendanceType"
                        value={formData.attendanceType}
                        onChange={handleChange}
                        className="form-input"
                      >
                        <option value="">Select attendance type</option>
                        <option value="in-person">In-Person</option>
                        <option value="virtual">Virtual</option>
                      </select>
                      {errors.attendanceType && <p className="form-error">{errors.attendanceType}</p>}
                    </div>
                  </div>
                )}
                
                {step === 3 && (
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold mb-4">Preferences</h3>
                    
                    <div>
                      <label htmlFor="dietaryRestrictions" className="form-label">Dietary Restrictions (if any)</label>
                      <textarea
                        id="dietaryRestrictions"
                        name="dietaryRestrictions"
                        value={formData.dietaryRestrictions}
                        onChange={handleChange}
                        className="form-input"
                        rows={3}
                      ></textarea>
                    </div>
                    
                    <div>
                      <label className="form-label">Areas of Interest</label>
                      <div className="grid grid-cols-2 gap-2 mt-2">
                        {interestOptions.map(option => (
                          <div key={option} className="flex items-center">
                            <input
                              type="checkbox"
                              id={option}
                              name="interests"
                              value={option}
                              checked={formData.interests.includes(option)}
                              onChange={handleCheckboxChange}
                              className="mr-2"
                            />
                            <label htmlFor={option} className="text-sm">{option}</label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
                
                <div className="flex justify-between mt-8">
                  {step > 1 && (
                    <button
                      type="button"
                      onClick={handlePrevious}
                      className="btn-secondary"
                    >
                      Back
                    </button>
                  )}
                  
                  {step < 3 ? (
                    <button
                      type="button"
                      onClick={handleNext}
                      className="btn-primary ml-auto flex items-center"
                    >
                      Next <ChevronRight size={18} className="ml-1" />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="btn-primary ml-auto flex items-center"
                    >
                      Register <Check size={18} className="ml-1" />
                    </button>
                  )}
                </div>
              </form>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="material-card p-8 text-center"
            >
              <div className="w-16 h-16 bg-google-green/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check size={32} className="text-google-green" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Registration Complete!</h3>
              <p className="text-gray-300 mb-6">
                Thank you for registering for DevJams! We've sent a confirmation email to {formData.email} with all the details.
              </p>
              <p className="text-gray-400 mb-8">
                We look forward to seeing you at the event!
              </p>
              <a href="#hero" className="btn-primary">
                Back to Home
              </a>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Registration;