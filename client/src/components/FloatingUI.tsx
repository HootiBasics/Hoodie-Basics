import { motion, useScroll, useSpring } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { HOOTI_CONFIG } from "@shared/config";

export function FloatingUI() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const whatsappMessage = encodeURIComponent("Hola!\nEstoy interesado/a en sus hoodies y me gustaría aclarar algunas dudas antes de realizar la compra:)");

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary origin-left z-[60]"
        style={{ scaleX }}
      />

      {/* Floating WhatsApp Button */}
      <motion.a
        href={`https://wa.me/${HOOTI_CONFIG.whatsapp.numberClean}?text=${whatsappMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring" }}
        className="fixed bottom-6 right-6 z-40 bg-[#25D366] text-white p-4 rounded-full shadow-lg shadow-black/50 hover:scale-110 hover:shadow-green-500/20 transition-all duration-300 group"
      >
        <MessageCircle className="w-8 h-8 fill-current" />
        <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-black px-3 py-1 rounded text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Chatea con nosotros
        </span>
      </motion.a>
    </>
  );
}
