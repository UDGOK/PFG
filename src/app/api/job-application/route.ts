import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

import { JobApplication, WorkExperience } from '@/types/job-application';

// Email configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

const recipients = [
  'yuba@pfgstores.com',
  'yasir@futonix.com',
  'perfectfoodandgas@yahoo.com'
];

function formatWorkExperience(experience: WorkExperience[]): string {
  if (!experience || !Array.isArray(experience)) {
    return 'No work experience provided';
  }

  return experience.map((job, index) => `
    Experience ${index + 1}:
    Employer: ${job.employer}
    Position: ${job.position}
    Duration: ${job.duration}
    Responsibilities: ${job.responsibilities || 'Not provided'}
  `).join('\n');
}

export async function POST(request: Request) {
  try {
    const data = await request.json() as JobApplication;

    // Format the application data into a readable email
    const emailContent = `
      New Job Application Received

      Personal Information:
      --------------------
      Name: ${data.firstName} ${data.lastName}
      Email: ${data.email}
      Phone: ${data.phone}
      Address: ${data.address}

      Employment Details:
      -----------------
      Position: ${data.position}
      Employment Type: ${data.employmentType}
      Availability: ${data.availability}
      Shifts: ${Array.isArray(data.shifts) ? data.shifts.join(', ') : data.shifts}

      Work Experience:
      --------------
      ${formatWorkExperience(data.workExperience)}

      Education:
      ---------
      Level: ${data.educationLevel}
      School: ${data.school}
      Graduation Year: ${data.graduationYear}

      Additional Information:
      --------------------
      ${data.additionalInfo || 'None provided'}

      Legal Status:
      ------------
      Legally Eligible to Work: ${data.legallyEligible ? 'Yes' : 'No'}
    `;

    // Send email to all recipients
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: recipients.join(', '),
      subject: `New Job Application - ${data.firstName} ${data.lastName} for ${data.position}`,
      text: emailContent,
    });

    return NextResponse.json({ 
      success: true, 
      message: 'Application submitted successfully' 
    });
  } catch (error) {
    console.error('Error processing application:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: 'Failed to process application. Please try again later.' 
      },
      { status: 500 }
    );
  }
}