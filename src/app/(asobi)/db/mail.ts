"use server";
import { Media, Order } from "@/payload-types";
import nodemailer from "nodemailer";
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  auth: {
    user: "vicnet.video@gmail.com",
    pass: process.env.SMTP_PASS,
  },
});

const testmark = process.env.NODE_ENV === "development" ? "[TEST]" : "";
const asobuMail = "asobu.officialindonesia@gmail.com";
export async function submitAudisi(d: any) {
  const info = await transporter.sendMail({
    from: "Shubamium <vicnet.video@gmail.com>",
    to: [asobuMail],
    replyTo: [d.email],
    subject: `${testmark}[FORM AUDISI ASOBIPRO] ${d.name}`,
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

export async function NotifyNewOrder(order: Order) {
  const sellerInfo = await transporter.sendMail({
    from: "Shubamium <vicnet.video@gmail.com>",
    to: [asobuMail],
    subject: `${testmark}[NEW ORDER] ${order["track-id"]}`,
    html: `
		<h1>Asobu Production Shop - New Order</h1/>
		<p>Check admin site untuk cek detail order dan update status nya !</p>
		<h2>Nama</h2>
		<p>${order.name}</p>
		
		<h2>Email</h2>
		<p>${order.email}</p>
		<h2>Order ID</h2>
		<p>${order["track-id"]}</p>
		<img src="${(order.payment as Media)?.url}" width="600"/>
		`,
    // attachments: [{ path: (order.payment as Media).url ?? "" }],
  });
  const buyerInfo = await transporter.sendMail({
    from: "AsobuProduction <vicnet.video@gmail.com>",
    to: [order.email],
    subject: `[ORDER CONFIRMATION] Asobu Production ${order["track-id"]}`,
    html: `
		<h1>Terima kasih telah melakukan order di Asobu Production</h1/>
		<p>Untuk tracking order, klik di <span><a href="https://asobuproduction.com/track">sini</a></span></p>
		<p><strong>Tracking ID: ${order["track-id"]}</strong></p>
		`,
  });
  console.log(sellerInfo, buyerInfo);
}
