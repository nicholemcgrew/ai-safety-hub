import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    status: 'ok',
    service: 'ai-safety-hub',
    timestamp: new Date().toISOString(),
  });
}
