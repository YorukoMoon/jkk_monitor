const nodemailer = require('nodemailer');

// 创建一个 SMTP 传输器
let transporter = nodemailer.createTransport({
    service: 'gmail',  // 这里使用 Gmail 的 SMTP 服务，其他邮件服务商可以使用相应的设置
    auth: {
        user: 'your-email@gmail.com',  // 发件人邮箱地址
        pass: 'your-email-password',   // 发件人邮箱密码
    },
});

// 设置邮件内容
let mailOptions = {
    from: 'your-email@gmail.com',  // 发件人邮箱地址
    to: 'recipient-email@example.com',  // 收件人邮箱地址
    subject: 'Test Email',  // 邮件主题
    text: 'This is a test email sent from Node.js using nodemailer.',  // 邮件正文
};

// 发送邮件
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log('Error occurred:', error);
    } else {
        console.log('Email sent:', info.response);
    }
});
