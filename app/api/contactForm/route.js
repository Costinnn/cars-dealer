// sending email 2/2

import { transporter } from "@/lib/nodemailer";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const reqData = await req.json();
    const email = process.env.NODEMAILER_EMAIL;

    await transporter.sendMail({
      from: email,
      to: email,
      subject: `${reqData.name} sent an email`,
      text: "",
      html: `<h1>Sent from: ${reqData.email}</h1>
      <p>Phone: ${reqData.phone}</p>
      <p>Message: ${reqData.message}</p>`,
    });

    return NextResponse.json({ message: "OK" }, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { error: `SEND_EMAIL_ERROR ${err}` },
      { status: 500 }
    );
  }
}
