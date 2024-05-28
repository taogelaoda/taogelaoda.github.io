import nodemailer from 'nodemailer'
const transporter = nodemailer.createTransport({
	host: 'smtp.163.com',
	port: 465,
	secure: true,
	auth: {
		user: 'zhugangtao98@163.com',
		pass: 'GWFSGHYQQPYGZHKE',
	},
});

async function main() {
	const info = await transporter.sendMail({
		from: 'zhugangtao98@163.com',
		to: '331274350@qq.com,3123078600@qq.com,zhugt@lonbon.com',
		subject: '来邦前端笔记',
		text: '发布内容',
	});
	console.log('邮件发送成功：', info.messageId);
}

main().catch(console.error);
