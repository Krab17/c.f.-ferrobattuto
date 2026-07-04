import { Phone, MessageCircle, Mail } from "lucide-react";

const WHATSAPP = "https://wa.me/393804668154";

export function MobileStickyBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-white/10 bg-carbone text-avorio md:hidden">
      <a href="tel:3804668154" className="flex items-center justify-center gap-2 py-3 text-[12px] uppercase tracking-widest hover:text-rame">
        <Phone className="h-4 w-4" /> Chiama
      </a>
      <a href={WHATSAPP} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 border-x border-white/10 py-3 text-[12px] uppercase tracking-widest hover:text-rame">
        <MessageCircle className="h-4 w-4" /> WhatsApp
      </a>
      <a href="mailto:Info@CFFerrobattuto.com" className="flex items-center justify-center gap-2 py-3 text-[12px] uppercase tracking-widest hover:text-rame">
        <Mail className="h-4 w-4" /> Email
      </a>
    </div>
  );
}
