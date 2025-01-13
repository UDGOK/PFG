'use client';

import { Model } from 'survey-core';
import { Survey } from 'survey-react-ui';
import 'survey-core/defaultV2.min.css';
import { useCallback } from 'react';
import { JobApplication } from '@/types/job-application';

const surveyJson = {
  title: "Job Application Form",
  description: "Thank you for your interest in joining our team! Please fill out the form below.",
  logoPosition: "right",
  pages: [
    {
      name: "personal-info",
      title: "Personal Information",
      elements: [
        {
          type: "text",
          name: "firstName",
          title: "First Name",
          isRequired: true,
          maxLength: 50
        },
        {
          type: "text",
          name: "lastName",
          title: "Last Name",
          isRequired: true,
          maxLength: 50
        },
        {
          type: "email",
          name: "email",
          title: "Email Address",
          isRequired: true,
          validators: [
            {
              type: "email"
            }
          ]
        },
        {
          type: "text",
          name: "phone",
          title: "Phone Number",
          isRequired: true,
          inputFormat: "phone"
        },
        {
          type: "text",
          name: "address",
          title: "Address",
          isRequired: true
        }
      ]
    },
    {
      name: "employment",
      title: "Employment Details",
      elements: [
        {
          type: "dropdown",
          name: "position",
          title: "Position Applying For",
          isRequired: true,
          choices: [
            "Store Manager",
            "Assistant Manager",
            "Sales Associate",
            "Cashier",
            "Food Service Worker",
            "Kitchen Staff",
            "Maintenance",
            "Other"
          ]
        },
        {
          type: "radiogroup",
          name: "employmentType",
          title: "Employment Type",
          isRequired: true,
          choices: [
            "Full-time",
            "Part-time",
            "Temporary",
            "Seasonal"
          ]
        },
        {
          type: "radiogroup",
          name: "availability",
          title: "When can you start?",
          isRequired: true,
          choices: [
            "Immediately",
            "In 2 weeks",
            "In 1 month",
            "Other"
          ]
        },
        {
          type: "checkbox",
          name: "shifts",
          title: "Available Shifts",
          isRequired: true,
          choices: [
            "Morning (6AM-2PM)",
            "Afternoon (2PM-10PM)",
            "Night (10PM-6AM)",
            "Weekends"
          ]
        }
      ]
    },
    {
      name: "experience",
      title: "Work Experience",
      elements: [
        {
          type: "paneldynamic",
          name: "workExperience",
          title: "Previous Employment",
          templateElements: [
            {
              type: "text",
              name: "employer",
              title: "Employer Name",
              isRequired: true
            },
            {
              type: "text",
              name: "position",
              title: "Position",
              isRequired: true
            },
            {
              type: "text",
              name: "duration",
              title: "Duration of Employment",
              isRequired: true
            },
            {
              type: "comment",
              name: "responsibilities",
              title: "Key Responsibilities"
            }
          ],
          panelCount: 1,
          maxPanelCount: 3
        }
      ]
    },
    {
      name: "education",
      title: "Education",
      elements: [
        {
          type: "dropdown",
          name: "educationLevel",
          title: "Highest Level of Education",
          isRequired: true,
          choices: [
            "High School",
            "Some College",
            "Associate's Degree",
            "Bachelor's Degree",
            "Master's Degree",
            "Other"
          ]
        },
        {
          type: "text",
          name: "school",
          title: "School Name",
          isRequired: true
        },
        {
          type: "text",
          name: "graduationYear",
          title: "Year of Completion",
          inputType: "number",
          isRequired: true
        }
      ]
    },
    {
      name: "additional",
      title: "Additional Information",
      elements: [
        {
          type: "file",
          name: "resume",
          title: "Upload Resume",
          maxSize: 10485760,
          acceptedTypes: ".pdf,.doc,.docx"
        },
        {
          type: "comment",
          name: "additionalInfo",
          title: "Additional Information",
          placeholder: "Tell us anything else you'd like us to know about you"
        },
        {
          type: "boolean",
          name: "legallyEligible",
          title: "Are you legally eligible to work in the United States?",
          isRequired: true
        },
        {
          type: "boolean",
          name: "consent",
          title: "I understand that by submitting this application, I certify that all the information provided is accurate and complete to the best of my knowledge.",
          isRequired: true
        }
      ]
    }
  ],
  showQuestionNumbers: "off",
  completeText: "Submit Application",
  showPrevButton: true,
  progressBarType: "buttons"
};

export default function JobApplicationForm() {
  const survey = new Model(surveyJson);
  
  const handleComplete = useCallback(async (sender: { data: JobApplication }) => {
    try {
      const response = await fetch('/api/job-application', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(sender.data)
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Failed to submit application');
      }

      alert('Thank you for submitting your application! Our HR team will review it and contact you soon.');
    } catch (error) {
      console.error('Error submitting application:', error);
      alert('There was an error submitting your application. Please try again later or contact HR directly.');
    }
  }, []);

  // Custom theme
  survey.applyTheme({
    "cssVariables": {
      "--sjs-general-backcolor": "rgba(255, 255, 255, 1)",
      "--sjs-general-backcolor-dark": "rgba(248, 248, 248, 1)",
      "--sjs-primary-backcolor": "rgba(220, 38, 38, 1)",
      "--sjs-primary-backcolor-light": "rgba(254, 226, 226, 1)",
      "--sjs-primary-backcolor-dark": "rgba(185, 28, 28, 1)",
      "--sjs-primary-forecolor": "rgba(255, 255, 255, 1)",
      "--sjs-base-unit": "8px",
      "--sjs-corner-radius": "4px",
      "--sjs-secondary-backcolor": "rgba(255, 255, 255, 1)",
      "--sjs-secondary-backcolor-light": "rgba(255, 255, 255, 1)",
      "--sjs-secondary-backcolor-semi-light": "rgba(255, 255, 255, 1)",
      "--sjs-secondary-forecolor": "rgba(0, 0, 0, 0.91)",
      "--sjs-secondary-forecolor-light": "rgba(0, 0, 0, 0.45)",
      "--sjs-shadow-small": "0px 1px 2px 0px rgba(0, 0, 0, 0.15)",
      "--sjs-shadow-medium": "0px 2px 6px 0px rgba(0, 0, 0, 0.1)",
      "--sjs-shadow-large": "0px 8px 16px 0px rgba(0, 0, 0, 0.1)",
      "--sjs-shadow-inner": "inset 0px 1px 2px 0px rgba(0, 0, 0, 0.15)",
      "--sjs-border-light": "rgba(0, 0, 0, 0.09)",
      "--sjs-border-default": "rgba(0, 0, 0, 0.16)",
      "--sjs-border-inside": "rgba(0, 0, 0, 0.16)",
      "--sjs-special-red": "rgba(239, 68, 68, 1)",
      "--sjs-special-red-light": "rgba(254, 242, 242, 1)",
      "--sjs-special-red-forecolor": "rgba(255, 255, 255, 1)",
      "--sjs-special-green": "rgba(34, 197, 94, 1)",
      "--sjs-special-green-light": "rgba(240, 253, 244, 1)",
      "--sjs-special-green-forecolor": "rgba(255, 255, 255, 1)",
      "--sjs-special-blue": "rgba(59, 130, 246, 1)",
      "--sjs-special-blue-light": "rgba(219, 234, 254, 1)",
      "--sjs-special-blue-forecolor": "rgba(255, 255, 255, 1)",
      "--sjs-special-yellow": "rgba(234, 179, 8, 1)",
      "--sjs-special-yellow-light": "rgba(254, 249, 195, 1)",
      "--sjs-special-yellow-forecolor": "rgba(255, 255, 255, 1)"
    }
  });

  survey.onComplete.add(handleComplete);

  return (
    <div className="max-w-4xl mx-auto p-4 bg-white rounded-lg shadow-lg">
      <Survey model={survey} />
    </div>
  );
}