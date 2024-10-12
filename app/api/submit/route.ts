import { google } from 'googleapis';
import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';
import { JWT } from 'google-auth-library';

export async function POST(req: NextRequest) {
  try {
    const { firstname, lastname, email, phone, message } = await req.json();

    // Load environment variables
    const clientEmail = process.env.GOOGLE_CLIENT_EMAIL;
    const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'); // Handle newlines in the key
    const spreadsheetId = process.env.GOOGLE_SHEET_ID;

    if (!clientEmail || !privateKey || !spreadsheetId) {
      throw new Error('Missing Google API credentials or spreadsheet ID.');
    }

    // Use JWT to create a client
    const auth = new JWT({
      email: clientEmail,
      key: privateKey,
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });

    // Define the range where data should be added
    const range = 'Sheet1!A:E'; // Adjust this range to match your sheet

    // Prepare the data to be inserted
    const values = [[firstname, lastname, email, phone, message]];

    // Append data to the Google Sheet
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range,
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values,
      },
    });

    return NextResponse.json({ status: 'success', message: 'Form submitted successfully!' });
  } catch (error) {
    console.error('Error submitting form:', error);
    return NextResponse.json({ status: 'error', message: 'Failed to submit form.' });
  }
}
