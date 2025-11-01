import { NextRequest, NextResponse } from 'next/server';

const rateLimitMap = new Map<string, { count: number; timestamp: number }>();
const RATE_LIMIT_WINDOW = 60 * 1000;
const MAX_REQUESTS_PER_WINDOW = 3;

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record || now - record.timestamp > RATE_LIMIT_WINDOW) {
    rateLimitMap.set(ip, { count: 1, timestamp: now });
    return true;
  }

  if (record.count >= MAX_REQUESTS_PER_WINDOW) {
    return false;
  }

  record.count++;
  return true;
}

function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function sanitizeInput(input: string): string {
  return input.trim().slice(0, 1000);
}

export async function POST(request: NextRequest) {
  try {
    const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown';

    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { name, company, email, phone, industry, interest, message, consent, honeypot } = body;

    if (honeypot) {
      return NextResponse.json({ success: true }, { status: 200 });
    }

    if (!name || !company || !email || !industry || !consent) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    if (!validateEmail(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    const sanitizedData = {
      name: sanitizeInput(name),
      company: sanitizeInput(company),
      email: sanitizeInput(email),
      phone: phone ? sanitizeInput(phone) : '',
      industry: sanitizeInput(industry),
      interest: interest ? sanitizeInput(interest) : '',
      message: message ? sanitizeInput(message) : '',
      timestamp: new Date().toISOString(),
      ip,
    };

    console.log('Contact form submission:', {
      ...sanitizedData,
      ip: ip.substring(0, 10) + '...',
    });

    // In production, send email via SendGrid/SES and/or save to database
    // Example with SendGrid:
    /*
    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    
    await sgMail.send({
      to: 'contact@genrecai.com',
      from: 'noreply@genrecai.com',
      subject: `New Demo Request from ${sanitizedData.company}`,
      text: `
        Name: ${sanitizedData.name}
        Company: ${sanitizedData.company}
        Email: ${sanitizedData.email}
        Phone: ${sanitizedData.phone}
        Industry: ${sanitizedData.industry}
        Interest: ${sanitizedData.interest}
        Message: ${sanitizedData.message}
      `,
      html: `...`
    });
    */

    // For now, just log and return success
    // TODO: Implement actual email sending or database storage

    return NextResponse.json(
      {
        success: true,
        message: 'Contact request received successfully',
        ticketId: `REQ-${Date.now()}`,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  );
}
