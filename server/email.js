const nodemailer = require("nodemailer");
const pug = require("pug");
const { htmlToText } = require("html-to-text");

// new Email(user, url).sendMail();

module.exports = class Email {
	constructor(user, url) {
		this.to = user.email;
		this.firstName = user.name.split(" ")[0];
		this.url = url;
		this.from = "nothing zZZ";
	}

	createTransport() {
		return nodemailer.createTransport({
			host: "sandbox.smtp.mailtrap.io",
			port: 2525,
			auth: {
				user: process.env.EMAIL_USER,
				pass: process.env.EMAIL_PASS,
			},
		});
	}

	async send(subject) {
		//render the html! abi na template we go call am

		console.log(`${__dirname}../html-files/nothingPage.pug`);
		const html = pug.renderFile(`${__dirname}/html-files/nothingPage.pug`, {
			firstName: this.firstName,
			url: this.url,
			subject,
		});
		const mailOptions = {
			from: this.from,
			to: this.to,
			subject,
			html,
			text: htmlToText(html),
		};

		await this.createTransport().sendMail(mailOptions);
	}

	async sendNothing() {
		await this.send("welcome to nothing baby");
	}
};
