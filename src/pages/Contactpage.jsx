import React from 'react';

const Contactpage = () => {
    return (
        <div className="container mx-auto pt-16 px-4 md:px-0 max-w-7xl">
            <h1 className="text-3xl font-bold text-center mb-10 text-[#7F57F1]">Contact Us</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <ContactCard title="General Inquiries" email="info@example.com" phone="+1234567890" />
                    <ContactCard title="Sales" email="sales@example.com" phone="+1234567890" />
                    <ContactCard title="Customer Support" email="support@example.com" phone="+1234567890" />
                    
                </div>
                <div>
                <BeautifulMessage />
                    <ContactForm />
                </div>
            </div>
        </div>
    );
};

const ContactCard = ({ title, email, phone }) => {
    return (
        <div className="border rounded-lg shadow-md p-6 bg-white">
            <h2 className="text-lg font-semibold mb-2">{title}</h2>
            <p className="text-gray-600 mb-2">Email: <a href={`mailto:${email}`} className="text-[#7F57F1]">{email}</a></p>
            <p className="text-gray-600">Phone: <span className="text-[#7F57F1]">{phone}</span></p>
        </div>
    );
};

const ContactForm = () => {
    return (
        <div className="border rounded-lg shadow-md p-6 bg-white mt-8 mb-8">
            <h2 className="text-lg font-semibold mb-4">Send us a Message</h2>
            <form>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700">Your Name</label>
                    <input type="text" id="name" name="name" className="mt-1 p-2 border rounded-lg w-full" />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700">Your Email</label>
                    <input type="email" id="email" name="email" className="mt-1 p-2 border rounded-lg w-full" />
                </div>
                <div className="mb-4">
                    <label htmlFor="message" className="block text-gray-700">Your Message</label>
                    <textarea id="message" name="message" rows="5" className="mt-1 p-2 border rounded-lg w-full"></textarea>
                </div>
                <button type="submit" className="bg-[#7F57F1] text-white px-4 py-2 rounded-lg hover:bg-purple-600">Send</button>
            </form>
        </div>
    );
};

const BeautifulMessage = () => {
    return (
        <div className="border rounded-lg shadow-md p-6 bg-white">
            <h2 className="text-lg font-semibold mb-2 text-[#7F57F1]">Welcome to Our Contact Page!</h2>
            <p className="text-gray-600 mb-4">Thank you for considering contacting us. We appreciate your interest and are eager to assist you with any questions or concerns you may have. Feel free to reach out to us through the provided contact information or use the form below to send us a message. We look forward to hearing from you!</p>
            <p className="text-gray-600">Best regards,<br />The Contact Us Team</p>
        </div>
    );
};

export default Contactpage;
