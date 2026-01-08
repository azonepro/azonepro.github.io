"use client"

import { useState } from 'react';

export default function ContactForm() {
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const getMailtoLink = () => {
        const { name, email, subject, message } = formData;
        const bodyContent = "Name: " + name + "\nEmail: " + email + "\n\nMessage:\n" + message;
        return "mailto:projects.azone@gmail.com?subject=" + encodeURIComponent(subject || 'Inquiry from Website') + "&body=" + encodeURIComponent(bodyContent);
    };

    const getWhatsAppLink = () => {
        const { name, subject, message } = formData;
        const text = "Hello Azone Projects!\n\nMy Name: " + name + "\nSubject: " + subject + "\nMessage: " + message;
        return "https://wa.me/971556230065?text=" + encodeURIComponent(text);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const searchParams = new URLSearchParams();
            searchParams.append('name', formData.name);
            searchParams.append('email', formData.email);
            searchParams.append('subject', formData.subject);
            searchParams.append('message', formData.message);

            await fetch('https://script.google.com/macros/s/AKfycbxPrvBeO-dWy3nmZjOM_NSsBF8_pivhFKyHQLncSSNqU-XAXSZZLDIYM9CopJF7bmk/exec', {
                method: 'POST',
                body: searchParams,
                mode: 'no-cors'
            });

            // Since no-cors doesn't allow reading the response, we assume success if no error is thrown
            setStatus('success');
            setFormData({ name: '', email: '', subject: '', message: '' });
        } catch (error) {
            console.error('Form submission error:', error);
            setStatus('error');
        }
    };

    return (
        <div className="contact-form-container">
            <form id="submit-form" className="" onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-md-6 form-group">
                        <input type="text" name="name" className="form-control" placeholder="Your Name" required value={formData.name} onChange={handleInputChange} disabled={status === 'loading'} />
                    </div>
                    <div className="col-md-6 form-group mt-3 mt-md-0">
                        <input type="email" name="email" className="form-control" placeholder="Your Email" required value={formData.email} onChange={handleInputChange} disabled={status === 'loading'} />
                    </div>
                </div>
                <div className="form-group mt-3">
                    <input type="text" name="subject" className="form-control" placeholder="Subject" required value={formData.subject} onChange={handleInputChange} disabled={status === 'loading'} />
                </div>
                <div className="form-group mt-3">
                    <textarea name="message" className="form-control" rows={5} placeholder="Message" required value={formData.message} onChange={handleInputChange} disabled={status === 'loading'}></textarea>
                </div>

                <div className="my-3 text-center">
                    {status === 'loading' && <div className="loading d-block">Sending message...</div>}
                    {status === 'error' && <div className="error-message d-block">Something went wrong. Please try again or contact us via WhatsApp.</div>}
                    {status === 'success' && <div className="sent-message d-block">Your message has been sent. Thank you!</div>}

                    <div className="text-center mt-3">
                        <button type="submit" className="btn btn-primary" style={{ padding: '10px 40px', background: '#994eef', border: 'none' }} disabled={status === 'loading'}>
                            {status === 'loading' ? 'Sending...' : 'Send Message'}
                        </button>
                    </div>
                </div>
            </form>

            {status !== 'success' && (
                <div className="mt-4 text-center">
                    <p className="text-muted small">Or reachable via:</p>
                    <a href={getWhatsAppLink()} target="_blank" className="btn btn-sm btn-success" style={{ backgroundColor: '#25d366', color: 'white', border: 'none', padding: '5px 15px', borderRadius: '20px' }}>
                        <i className="fab fa-whatsapp me-2"></i> Quick WhatsApp
                    </a>
                </div>
            )}
        </div>
    );
}
