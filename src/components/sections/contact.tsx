
import { Phone, Mail, MessageCircle } from "lucide-react";
import Link from 'next/link';
import ContactForm from '@/components/forms/contact-form';

const contactDetails = [
  {
    icon: Phone,
    label: "Phone",
    value: "+91 9971800278",
    href: "tel:+919971800278",
    isExternal: true,
  },
  {
    icon: Mail,
    label: "Email",
    value: "binodsingh9971@gmail.com",
    href: "mailto:binodsingh9971@gmail.com",
    isExternal: false,
  },
  {
    icon: Mail,
    label: "Support Email",
    value: "glassarch.helpdesk@gmail.com",
    href: "mailto:glassarch.helpdesk@gmail.com",
    isExternal: false,
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+91 9971800278",
    href: "https://wa.me/919971800278",
    isExternal: true,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-muted-foreground">
            Have a project in mind? We'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-start">
          <div className="bg-card p-8 rounded-lg shadow-sm animate-in fade-in-0 slide-in-from-left-20 duration-1000">
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <div className="space-y-6">
              {contactDetails.map((detail, index) => (
                <div key={detail.label} className="flex items-start gap-4 animate-in fade-in-0 slide-in-from-bottom-5 duration-1000" style={{ animationDelay: `${index * 150}ms` }}>
                  <div className="bg-primary/10 p-3 rounded-full">
                    <detail.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">{detail.label}</h4>
                    <Link 
                      href={detail.href} 
                      className="text-muted-foreground hover:text-primary transition-colors break-all"
                      target={detail.isExternal ? "_blank" : undefined}
                      rel={detail.isExternal ? "noopener noreferrer" : undefined}
                    >
                      {detail.value}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div id="contact-form" className="animate-in fade-in-0 slide-in-from-right-20 duration-1000">
             <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
