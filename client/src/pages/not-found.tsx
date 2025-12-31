import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background flex-col gap-8">
      <h1 className="text-9xl font-black font-display text-white/5 select-none">404</h1>
      <div className="absolute flex flex-col items-center gap-4">
        <h2 className="text-2xl font-bold uppercase tracking-widest">Página no encontrada</h2>
        <p className="text-muted-foreground">Te perdiste en el estilo.</p>
        <Link href="/" className="px-6 py-3 border border-white/20 hover:bg-white hover:text-black transition-all uppercase tracking-widest font-bold mt-4">
          Volver al inicio
        </Link>
      </div>
    </div>
  );
}
