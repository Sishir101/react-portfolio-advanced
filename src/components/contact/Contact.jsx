import { useState } from "react";
import { FaGithub, FaLinkedin, FaMapMarkerAlt, FaPaperPlane, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import SectionHeading from "../ui/SectionHeading";
import AnimateIn from "../ui/AnimateIn";
import { CONTACT_EMAIL, FORMSPREE_FORM_ID } from "../../config/site";

const CONTACT_PHONE = "+91 6372662335";
const CONTACT_CITY = "Bhubaneswar, India";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");
  const [feedback, setFeedback] = useState("");

  const usesFormspree = Boolean(FORMSPREE_FORM_ID);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const submitViaMailto = () => {
    const subject = encodeURIComponent(`Portfolio message from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`,
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    setStatus("success");
    setFeedback("Your email app should open. If not, email me directly at the address on the left.");
    setForm({ name: "", email: "", message: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    setFeedback("");

    if (!usesFormspree) {
      submitViaMailto();
      return;
    }

    try {
      const response = await fetch(
        `https://formspree.io/f/${FORMSPREE_FORM_ID}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: form.name,
            email: form.email,
            message: form.message,
            _subject: `Portfolio contact from ${form.name}`,
          }),
        },
      );

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(data.error || "Form submission failed");
      }

      setStatus("success");
      setFeedback("Message sent — thank you! I will get back to you soon.");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus("error");
      setFeedback(
        err.message ||
          "Something went wrong. Please try again or use the email link on the left.",
      );
    }
  };

  return (
    <section id="contact" className="relative scroll-mt-24 bg-[#0B1120] py-24 sm:py-28">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-purple-600/15 blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 md:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="Let's Connect"
          subtitle="Have a project in mind or want to collaborate? Send a message — I'd love to hear from you."
        />

        <div className="grid gap-10 lg:gap-12 lg:grid-cols-5">
          <AnimateIn className="lg:col-span-2">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-white">Get in touch</h3>
                <p className="mt-3 text-slate-400 leading-relaxed">
                  Open to internships, freelance work, and full-time opportunities in
                  full stack development.
                </p>
                {!usesFormspree && import.meta.env.DEV && (
                  <p className="mt-3 rounded-lg border border-cyan-500/20 bg-cyan-500/5 px-4 py-3 text-sm text-cyan-100/90 leading-relaxed">
                    Tip: add <code className="text-cyan-300">VITE_FORMSPREE_FORM_ID</code>{" "}
                    in <code className="text-cyan-300">.env</code> to send messages without
                    opening your mail app.
                  </p>
                )}
              </div>

              <ul className="space-y-5 text-slate-300">
                <li className="flex items-center gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 border border-cyan-400/20 flex-shrink-0">
                    <MdEmail className="text-xl text-cyan-400" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-slate-500 uppercase tracking-wider">Email</p>
                    <a href={`mailto:${CONTACT_EMAIL}`} className="text-slate-200 hover:text-cyan-400 transition break-all">
                      {CONTACT_EMAIL}
                    </a>
                  </div>
                </li>
                <li className="flex items-center gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 border border-cyan-400/20 flex-shrink-0">
                    <FaPhoneAlt className="text-lg text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-wider">Phone</p>
                    <span className="text-slate-200">{CONTACT_PHONE}</span>
                  </div>
                </li>
                <li className="flex items-center gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 border border-cyan-400/20 flex-shrink-0">
                    <FaMapMarkerAlt className="text-lg text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-wider">Location</p>
                    <span className="text-slate-200">{CONTACT_CITY}</span>
                  </div>
                </li>
              </ul>

              <div className="flex gap-3 pt-2">
                <a
                  href="https://github.com/Sishir101"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-cyan-400 transition hover:border-cyan-400 hover:bg-cyan-500/10"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/sishir-sanbad/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-cyan-400 transition hover:border-cyan-400 hover:bg-cyan-500/10"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </AnimateIn>

          <AnimateIn delay={0.12} className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8 backdrop-blur-sm"
            >
              <div className="grid gap-5 sm:gap-6 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-slate-300">Name</span>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-white/10 bg-[#030712]/80 px-4 py-3 text-white outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                    placeholder="Your name"
                  />
                </label>
                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-slate-300">Email</span>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-white/10 bg-[#030712]/80 px-4 py-3 text-white outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                    placeholder="you@email.com"
                  />
                </label>
              </div>

              <label className="mt-6 block">
                <span className="mb-2 block text-sm font-medium text-slate-300">Message</span>
                <textarea
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  className="w-full resize-none rounded-xl border border-white/10 bg-[#030712]/80 px-4 py-3 text-white outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                  placeholder="Tell me about your project..."
                />
              </label>

              <button
                type="submit"
                disabled={status === "sending"}
                className="mt-6 inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-8 py-3 font-semibold text-black transition hover:scale-[1.02] hover:bg-cyan-400 disabled:cursor-not-allowed disabled:opacity-60"
              >
                <FaPaperPlane />
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>

              {feedback && (
                <p
                  className={`mt-5 text-sm leading-relaxed rounded-lg px-4 py-3 ${
                    status === "error"
                      ? "text-red-300 bg-red-500/10 border border-red-500/20"
                      : "text-emerald-300 bg-emerald-500/10 border border-emerald-500/20"
                  }`}
                >
                  {feedback}
                </p>
              )}
            </form>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}

export default Contact;
