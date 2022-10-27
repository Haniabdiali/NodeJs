const nodemailer=require('nodemailer')
var transporter =nodemailer.createTransport({ 
    service:'gmail',
     auth: {
        user:'haniabdiali14@gmail.com',
        pass:'hani14..!'
 }});

 var mailOptions = {
    from:'haniabdiali14@gmail.com',
    to:'aishaabshir557@gmail.ocm',
    subject:'Sending Email using Node.js',
    text: 'hellow Aisha!'
};
transporter.sendMail(mailOptions,function(error, info){
    if (error) {
        console.log(error);
     }else{
        console.log('Email sent: ' + info.response);
     }
})