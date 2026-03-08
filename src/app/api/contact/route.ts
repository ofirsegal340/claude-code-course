import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, businessName, message } = body;

    if (!name || !phone) {
      return NextResponse.json(
        { error: "שם וטלפון הם שדות חובה" },
        { status: 400 }
      );
    }

    console.log("=== פנייה חדשה ===");
    console.log("שם:", name);
    console.log("טלפון:", phone);
    console.log("עסק:", businessName || "לא צוין");
    console.log("הודעה:", message || "ללא הודעה");
    console.log("==================");

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "שגיאה בשרת" },
      { status: 500 }
    );
  }
}
