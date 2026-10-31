import React, { useState } from 'react';
import { Mail, Send, CheckCircle2, Linkedin, Github } from 'lucide-react';
import SectionReveal from './SectionReveal';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    honeypot: '', // Security honeypot trap for spam bots
  });

  const [status, setStatus] = useState({ state: 'idle', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Security Check: If bot filled the hidden honeypot field, discard quietly
    if (formData.honeypot) {
      console.warn('Bot submission blocked');
      setStatus({ state: 'success', message: 'Your message has been received!' });
      return;
    }

    // Basic Input Validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus({ state: 'error', message: 'Please fill out all required fields.' });
      return;
    }

    setStatus({ state: 'loading', message: 'Sending message...' });

    try {
      // ✅ Real email delivery via Web3Forms (free, no backend needed)
      const accessKey = '40036502-f46f-493a-824f-6135931de178';

      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name.trim(),
          email: formData.email.trim(),
          subject: formData.subject.trim() || 'New Message from Portfolio',
          message: formData.message.trim(),
          from_page: 'Portfolio Contact Form',
          botcheck: false, // required by Web3Forms
        }),
      });

      const data = await res.json();

      if (data.success) {
        setStatus({
          state: 'success',
          message: 'Message sent successfully! I will reply to your email within 24 hours.',
        });
        setFormData({ name: '', email: '', subject: '', message: '', honeypot: '' });
      } else {
        throw new Error(data.message || 'Failed to send message.');
      }
    } catch (err) {
      console.error('Web3Forms error:', err);
      setStatus({
        state: 'error',
        message: 'Failed to send message. Please try again or contact me directly via email.',
      });
    }
  };

  return (
    <section id="contact" className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <SectionReveal>
      <div className="reiatsu-card rounded-2xl sm:rounded-3xl overflow-hidden border border-cyan-500/30 shadow-sm hover:shadow-md transition-all">
        
        {/* Top Solid Accent Bar */}
        <div className="h-1.5 w-full bg-cyan-500" />

        {/* Top Header Block: Solid Color */}
        <div className="p-6 sm:p-8 bg-cyan-50/85 dark:bg-[#06202e] border-b border-cyan-200/80 dark:border-cyan-900/60 text-center space-y-2">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-bankai">
            CONTACT <span className="text-cyan-600 dark:text-cyan-400">ME</span>
          </h2>
          <div className="w-24 h-1 bg-cyan-500 mx-auto rounded-full" />
        </div>

        <div className="p-5 sm:p-10 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
          
          {/* Direct Contact Info (Left) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 space-y-3 shadow-xs">
              <div className="text-xs font-mono text-cyan-700 dark:text-cyan-400 font-bold uppercase">Direct Contact</div>
              
              {/* Email */}
              <div className="flex items-center gap-3 text-sm text-slate-700 dark:text-gray-300">
                <div className="w-9 h-9 rounded-lg bg-cyan-50 dark:bg-cyan-950/80 border border-cyan-200 dark:border-cyan-500/40 flex items-center justify-center text-cyan-700 dark:text-cyan-300 shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <div className="text-[11px] text-slate-500 dark:text-gray-400">Professional Email</div>
                  <a href="mailto:amirrullahahnafagil@gmail.com" className="font-mono text-xs text-slate-800 dark:text-gray-200 hover:text-cyan-700 dark:hover:text-cyan-300 transition-colors truncate block">
                    amirrullahahnafagil@gmail.com
                  </a>
                </div>
              </div>

              {/* LinkedIn */}
              <div className="flex items-center gap-3 text-sm text-slate-700 dark:text-gray-300">
                <div className="w-9 h-9 rounded-lg bg-sky-50 dark:bg-sky-950/80 border border-sky-200 dark:border-sky-500/40 flex items-center justify-center text-sky-700 dark:text-sky-300 shrink-0">
                  <Linkedin className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <div className="text-[11px] text-slate-500 dark:text-gray-400">LinkedIn Profile</div>
                  <a href="https://www.linkedin.com/in/amirrullah-ahnaf-agil-0b1a63373?utm_source=share_via&utm_content=profile&utm_medium=member_ios" target="_blank" rel="noopener noreferrer" className="font-mono text-xs text-slate-800 dark:text-gray-200 hover:text-cyan-700 dark:hover:text-cyan-300 transition-colors truncate block">
                    linkedin.com/in/amirrullah-ahnaf-agil
                  </a>
                </div>
              </div>

              {/* GitHub */}
              <div className="flex items-center gap-3 text-sm text-slate-700 dark:text-gray-300">
                <div className="w-9 h-9 rounded-lg bg-blue-50 dark:bg-blue-950/80 border border-blue-200 dark:border-blue-500/40 flex items-center justify-center text-blue-700 dark:text-blue-300 shrink-0">
                  <Github className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <div className="text-[11px] text-slate-500 dark:text-gray-400">GitHub Repositories</div>
                  <a href="https://github.com/AmirrullahAhnafAgil" target="_blank" rel="noopener noreferrer" className="font-mono text-xs text-slate-800 dark:text-gray-200 hover:text-cyan-700 dark:hover:text-cyan-300 transition-colors truncate block">
                    github.com/AmirrullahAhnafAgil
                  </a>
                </div>
              </div>
            </div>

            <div className="p-3.5 sm:p-4 rounded-xl bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-200 dark:border-cyan-500/30 text-[11px] sm:text-xs text-slate-600 dark:text-gray-400 space-y-1 shadow-xs">
              <span className="font-mono font-bold text-cyan-700 dark:text-cyan-300">💡 Quick Response:</span>
              <p>Emails and inquiries are monitored on business days (08:00 - 18:00 WIB / UTC+7).</p>
            </div>
          </div>

          {/* Contact Form (Right) */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">
              
              {/* Security Honeypot */}
              <div className="hidden" aria-hidden="true">
                <label htmlFor="honeypot">Do not fill this field</label>
                <input
                  type="text"
                  id="honeypot"
                  name="honeypot"
                  tabIndex={-1}
                  autoComplete="off"
                  value={formData.honeypot}
                  onChange={handleChange}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label className="block text-[11px] sm:text-xs font-mono font-medium text-slate-700 dark:text-gray-300 mb-1 sm:mb-1.5">FULL NAME / RECRUITER</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="e.g. Alex Johnson"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl bg-white dark:bg-black/60 border border-slate-300 dark:border-slate-800 focus:border-cyan-500 dark:focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20 text-xs sm:text-sm text-slate-900 dark:text-white outline-none transition-all placeholder:text-slate-400 dark:placeholder:text-gray-600 shadow-xs"
                  />
                </div>
                <div>
                  <label className="block text-[11px] sm:text-xs font-mono font-medium text-slate-700 dark:text-gray-300 mb-1 sm:mb-1.5">OFFICIAL EMAIL</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="hr@company.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl bg-white dark:bg-black/60 border border-slate-300 dark:border-slate-800 focus:border-cyan-500 dark:focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20 text-xs sm:text-sm text-slate-900 dark:text-white outline-none transition-all placeholder:text-slate-400 dark:placeholder:text-gray-600 shadow-xs"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] sm:text-xs font-mono font-medium text-slate-700 dark:text-gray-300 mb-1 sm:mb-1.5">SUBJECT</label>
                <input
                  type="text"
                  name="subject"
                  placeholder="Frontend Job Offer / Project Collaboration"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl bg-white dark:bg-black/60 border border-slate-300 dark:border-slate-800 focus:border-cyan-500 dark:focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20 text-xs sm:text-sm text-slate-900 dark:text-white outline-none transition-all placeholder:text-slate-400 dark:placeholder:text-gray-600 shadow-xs"
                />
              </div>

              <div>
                <label className="block text-[11px] sm:text-xs font-mono font-medium text-slate-700 dark:text-gray-300 mb-1 sm:mb-1.5">MESSAGE / DETAILS</label>
                <textarea
                  name="message"
                  rows={4}
                  required
                  placeholder="Write down the job opportunity or project details..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl bg-white dark:bg-black/60 border border-slate-300 dark:border-slate-800 focus:border-cyan-500 dark:focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20 text-xs sm:text-sm text-slate-900 dark:text-white outline-none transition-all placeholder:text-slate-400 dark:placeholder:text-gray-600 resize-none shadow-xs"
                />
              </div>

              <button
                type="submit"
                disabled={status.state === 'loading'}
                className="w-full py-3.5 sm:py-4 rounded-xl bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 text-white font-bold text-xs sm:text-sm tracking-wider shadow-[0_4px_16px_rgba(14,165,233,0.3)] dark:shadow-[0_0_20px_rgba(56,189,248,0.4)] hover:shadow-[0_6px_24px_rgba(14,165,233,0.5)] dark:hover:shadow-[0_0_30px_rgba(56,189,248,0.7)] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 border border-cyan-300/40"
              >
                <Send className="w-4 h-4" />
                {status.state === 'loading' ? 'SENDING...' : 'SEND MESSAGE NOW'}
              </button>

              {/* Status alerts */}
              {status.state === 'success' && (
                <div className="p-3.5 sm:p-4 rounded-xl bg-cyan-50 dark:bg-cyan-950/80 border border-cyan-400 text-cyan-900 dark:text-cyan-200 text-xs font-mono flex items-center gap-2 shadow-xs">
                  <CheckCircle2 className="w-4 h-4 text-cyan-600 dark:text-cyan-300 shrink-0" />
                  <span>{status.message}</span>
                </div>
              )}

              {status.state === 'error' && (
                <div className="p-3.5 sm:p-4 rounded-xl bg-rose-50 dark:bg-sky-950/80 border border-rose-300 dark:border-sky-500 text-rose-800 dark:text-sky-200 text-xs font-mono shadow-xs">
                  {status.message}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
      </div>
      </SectionReveal>
    </section>
  );
}
