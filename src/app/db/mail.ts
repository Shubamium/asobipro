"use server";
import nodemailer from "nodemailer";
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  auth: {
    user: "vicnet.video@gmail.com",
    pass: process.env.SMTP_PASS,
  },
});

export async function submitAudisi(d: any) {
  const info = await transporter.sendMail({
    from: "Shubamium <vicnet.video@gmail.com>",
    to: ["liusvinv@gmail.com"],
    subject: `[FORM AUDISI ASOBIPRO] ${d.name}`,
    html: `
		<h1>Asobi Production Website - Form Audisi</h1/>
		<h2>Nama</h2>
		<p>${d.name}</p>
		
		<h2>Email</h2>
		<p>${d.email}</p>
				
		<h2>Umur</h2>
		<p>${d.age}</p>

		<h2>Generation</h2>
		<p>${d.gen}</p>

		<h2>Bio<h2/>
		<p>${d.mess}</p>
		`,
  });
  console.log(info);
}
