"use client"

import { useState, useEffect, useRef } from 'react';

const SERVICE_DETAILS = {
    web: {
        label: 'Web & Software',
        icon: 'bi-window-sidebar',
        details: '🚀 We build high-performance Web Apps, custom CRM systems, and E-commerce platforms using the latest tech stacks.',
    },
    assign: {
        label: 'Assignment Help',
        icon: 'bi-journal-check',
        details: '🎓 Expert assistance for Thesis, Dissertations, and Capstone projects. 100% original, high-quality academic support.',
    },
    graphic: {
        label: 'Graphic & Design',
        icon: 'bi-palette',
        details: '🎨 Creative Branding, Logo Design, 3D Animations, and Professional Video Production that makes you stand out.',
    },
    marketing: {
        label: 'Digital Marketing',
        icon: 'bi-megaphone',
        details: '📈 Growth-focused SEO, Social Media Management, and PPC campaigns to scale your business presence.',
    },
    trainings: {
        label: 'Online Trainings',
        icon: 'bi-laptop',
        details: '👨‍💻 Master Programming, UI/UX Design, and Data Analytics with our industry-led certificate courses.',
    }
};

export default function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [isTyping, setIsTyping] = useState(false);
    const [messages, setMessages] = useState<{ text: string, sender: 'bot' | 'user', isContact?: boolean }[]>([
        { text: '👋 Hi there! Welcome to Azone Projects. I\'m your Digital Assistant. How can I help you today?', sender: 'bot' }
    ]);
    const [showOptions, setShowOptions] = useState(true);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        if (isOpen) {
            scrollToBottom();
        }
    }, [messages, isOpen, isTyping]);

    const handleServiceClick = (key: keyof typeof SERVICE_DETAILS) => {
        const service = SERVICE_DETAILS[key];
        setMessages(prev => [...prev, { text: service.label, sender: 'user' }]);
        setShowOptions(false);
        setIsTyping(true);

        setTimeout(() => {
            setIsTyping(false);
            setMessages(prev => [
                ...prev,
                { text: service.details, sender: 'bot' },
                { text: 'Would you like to speak with an agent for a custom quote or more details?', sender: 'bot' }
            ]);
            setShowOptions(true);
        }, 1200);
    };

    const handleAgentClick = () => {
        setMessages(prev => [...prev, { text: 'Talk to Agent', sender: 'user' }]);
        setShowOptions(false);
        setIsTyping(true);

        setTimeout(() => {
            setIsTyping(false);
            setMessages(prev => [...prev, {
                text: 'Connect with us instantly:',
                sender: 'bot',
                isContact: true
            }]);
            setShowOptions(true);
        }, 1000);
    };

    const handleStartOver = () => {
        setMessages([{ text: 'Choose a service to learn more or speak with an agent below:', sender: 'bot' }]);
        setShowOptions(true);
    };

    return (
        <div className="chatbot-wrapper" style={{ position: 'fixed', bottom: '100px', right: '30px', zIndex: 9999 }}>
            {/* Chat Window */}
            {isOpen && (
                <div className="chat-window" style={{
                    width: '350px',
                    height: '520px',
                    backgroundColor: 'rgba(255, 255, 255, 0.98)',
                    backdropFilter: 'blur(20px)',
                    borderRadius: '28px',
                    boxShadow: '0 20px 60px rgba(153, 78, 239, 0.25)',
                    display: 'flex',
                    flexDirection: 'column',
                    overflow: 'hidden',
                    border: '1px solid rgba(153, 78, 239, 0.15)',
                    marginBottom: '20px',
                    animation: 'slideUp 0.5s cubic-bezier(0.19, 1, 0.22, 1)'
                }}>
                    {/* Header */}
                    <div style={{
                        padding: '24px 20px',
                        background: 'linear-gradient(135deg, #994eef 0%, #7a3ec9 100%)',
                        color: 'white',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                            <div style={{ position: 'relative' }}>
                                <div style={{
                                    width: '46px',
                                    height: '46px',
                                    backgroundColor: 'rgba(255,255,255,0.15)',
                                    borderRadius: '16px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    border: '1px solid rgba(255,255,255,0.2)'
                                }}>
                                    <i className="bi bi-stars" style={{ fontSize: '24px' }}></i>
                                </div>
                                <div style={{
                                    position: 'absolute',
                                    bottom: '-2px',
                                    right: '-2px',
                                    width: '14px',
                                    height: '14px',
                                    backgroundColor: '#22c55e',
                                    borderRadius: '50%',
                                    border: '3px solid #994eef'
                                }}></div>
                            </div>
                            <div>
                                <div style={{ fontWeight: '700', fontSize: '1.1rem', letterSpacing: '-0.5px' }}>Azone Project</div>
                                <div style={{ fontSize: '0.75rem', opacity: 0.9, display: 'flex', alignItems: 'center', gap: '4px' }}>
                                    <span style={{ width: '6px', height: '6px', backgroundColor: '#22c55e', borderRadius: '50%' }}></span>
                                    AI Assistant Online
                                </div>
                            </div>
                        </div>
                        <button onClick={() => setIsOpen(false)} style={{ background: 'rgba(255,255,255,0.1)', border: 'none', color: 'white', fontSize: '20px', borderRadius: '50%', width: '32px', height: '32px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <i className="bi bi-x-lg" style={{ fontSize: '14px' }}></i>
                        </button>
                    </div>

                    {/* Messages Section */}
                    <div style={{
                        flex: 1,
                        padding: '24px 20px',
                        overflowY: 'auto',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '20px',
                        background: '#ffffff'
                    }}>
                        {messages.map((msg, i) => (
                            <div key={i} style={{
                                alignSelf: msg.sender === 'bot' ? 'flex-start' : 'flex-end',
                                maxWidth: '85%',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '8px'
                            }}>
                                <div style={{
                                    padding: '14px 18px',
                                    borderRadius: msg.sender === 'bot' ? '20px 20px 20px 6px' : '20px 20px 6px 20px',
                                    background: msg.sender === 'bot' ? '#f3f4f6' : 'linear-gradient(135deg, #994eef 0%, #8b5cf6 100%)',
                                    color: msg.sender === 'bot' ? '#374151' : 'white',
                                    fontSize: '0.92rem',
                                    lineHeight: '1.5',
                                    boxShadow: msg.sender === 'bot' ? '0 2px 8px rgba(0,0,0,0.03)' : '0 4px 12px rgba(139, 92, 246, 0.25)',
                                    animation: 'msgPop 0.3s ease-out forwards'
                                }}>
                                    {msg.text}
                                </div>
                                {msg.isContact && (
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '4px' }}>
                                        <a href="https://wa.me/971556230065" target="_blank" style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '10px',
                                            padding: '12px 16px',
                                            background: '#25d366',
                                            color: 'white',
                                            borderRadius: '14px',
                                            textDecoration: 'none',
                                            fontSize: '0.9rem',
                                            fontWeight: '600',
                                            boxShadow: '0 4px 12px rgba(37, 211, 102, 0.2)'
                                        }}>
                                            <i className="bi bi-whatsapp" style={{ fontSize: '18px' }}></i>
                                            WhatsApp Agent
                                        </a>
                                        <a href="mailto:projects.azone@gmail.com" style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '10px',
                                            padding: '12px 16px',
                                            background: '#ef4444',
                                            color: 'white',
                                            borderRadius: '14px',
                                            textDecoration: 'none',
                                            fontSize: '0.9rem',
                                            fontWeight: '600',
                                            boxShadow: '0 4px 12px rgba(239, 68, 68, 0.2)'
                                        }}>
                                            <i className="bi bi-envelope-fill" style={{ fontSize: '18px' }}></i>
                                            Shoot an Email
                                        </a>
                                    </div>
                                )}
                            </div>
                        ))}

                        {isTyping && (
                            <div style={{ alignSelf: 'flex-start', background: '#f3f4f6', padding: '12px 16px', borderRadius: '20px 20px 20px 6px', display: 'flex', gap: '4px' }}>
                                <span className="typing-dot"></span>
                                <span className="typing-dot"></span>
                                <span className="typing-dot"></span>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Action Area */}
                    {showOptions && (
                        <div style={{
                            padding: '20px',
                            background: '#f9fafb',
                            borderTop: '1px solid rgba(153, 78, 239, 0.1)',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '12px'
                        }}>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                                {Object.keys(SERVICE_DETAILS).map((key) => {
                                    const serviceKey = key as keyof typeof SERVICE_DETAILS;
                                    return (
                                        <button
                                            key={key}
                                            onClick={() => handleServiceClick(serviceKey)}
                                            style={{
                                                padding: '10px 12px',
                                                borderRadius: '14px',
                                                border: '1px solid rgba(153, 78, 239, 0.3)',
                                                backgroundColor: 'white',
                                                color: '#7c3aed',
                                                fontSize: '0.8rem',
                                                fontWeight: '600',
                                                cursor: 'pointer',
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '8px',
                                                transition: 'all 0.2s'
                                            }}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.borderColor = '#994eef';
                                                e.currentTarget.style.backgroundColor = 'rgba(153, 78, 239, 0.05)';
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.borderColor = 'rgba(153, 78, 239, 0.3)';
                                                e.currentTarget.style.backgroundColor = 'white';
                                            }}
                                        >
                                            <i className={`bi ${SERVICE_DETAILS[serviceKey].icon}`} style={{ fontSize: '1rem' }}></i>
                                            {SERVICE_DETAILS[serviceKey].label}
                                        </button>
                                    );
                                })}
                            </div>

                            <div style={{ display: 'flex', gap: '8px' }}>
                                <button
                                    onClick={handleAgentClick}
                                    style={{
                                        flex: 2,
                                        padding: '12px',
                                        borderRadius: '14px',
                                        background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                                        color: 'white',
                                        fontSize: '0.85rem',
                                        fontWeight: '700',
                                        border: 'none',
                                        cursor: 'pointer',
                                        boxShadow: '0 4px 12px rgba(16, 185, 129, 0.2)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        gap: '8px'
                                    }}
                                >
                                    🚀 Speak with Agent
                                </button>
                                <button
                                    onClick={handleStartOver}
                                    style={{
                                        flex: 1,
                                        padding: '12px',
                                        borderRadius: '14px',
                                        background: '#fff',
                                        border: '1px solid #e5e7eb',
                                        color: '#6b7280',
                                        fontSize: '0.85rem',
                                        fontWeight: '600',
                                        cursor: 'pointer'
                                    }}
                                >
                                    Start Over
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            )}

            {/* Toggle Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                style={{
                    width: '72px',
                    height: '72px',
                    borderRadius: '24px',
                    background: 'linear-gradient(135deg, #994eef 0%, #7a3ec9 100%)',
                    color: 'white',
                    border: 'none',
                    fontSize: '32px',
                    cursor: 'pointer',
                    boxShadow: '0 12px 40px rgba(153, 78, 239, 0.4)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    transition: 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                    float: 'right',
                    position: 'relative'
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.1) translateY(-5px)';
                    e.currentTarget.style.boxShadow = '0 15px 45px rgba(153, 78, 239, 0.5)';
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1) translateY(0)';
                    e.currentTarget.style.boxShadow = '0 12px 40px rgba(153, 78, 239, 0.4)';
                }}
            >
                {isOpen ? (
                    <i className="bi bi-x"></i>
                ) : (
                    <>
                        <i className="bi bi-chat-heart-fill"></i>
                        <span style={{
                            position: 'absolute',
                            top: '-8px',
                            right: '-8px',
                            padding: '4px 8px',
                            background: '#ff4d4d',
                            color: 'white',
                            borderRadius: '12px',
                            fontSize: '11px',
                            fontWeight: '800',
                            border: '3px solid #fff',
                            boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
                        }}>Online</span>
                    </>
                )}
            </button>

            <style jsx>{`
                @keyframes slideUp {
                    from { transform: translateY(40px) scale(0.95); opacity: 0; }
                    to { transform: translateY(0) scale(1); opacity: 1; }
                }
                @keyframes msgPop {
                    from { opacity: 0; transform: scale(0.9); }
                    to { opacity: 1; transform: scale(1); }
                }
                .typing-dot {
                    width: 6px;
                    height: 6px;
                    background: #994eef;
                    border-radius: 50%;
                    animation: typing 1s infinite alternate;
                }
                .typing-dot:nth-child(2) { animation-delay: 0.2s; }
                .typing-dot:nth-child(3) { animation-delay: 0.4s; }
                @keyframes typing {
                    from { transform: translateY(0); opacity: 0.3; }
                    to { transform: translateY(-4px); opacity: 1; }
                }
            `}</style>
        </div>
    );
}
