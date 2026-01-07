import { motion } from "framer-motion";
import { HOOTI_CONFIG } from "@shared/config";

export default function Privacy() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-4 bg-[#0a0a0a]">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl font-black font-display tracking-tighter mb-12 text-white uppercase">
            Políticas de Privacidad
          </h1>

          <div className="space-y-12 text-muted-foreground leading-relaxed">
            <section>
              <p className="text-xl text-white/80">
                En {HOOTI_CONFIG.siteName} respetamos y protegemos la privacidad de nuestros usuarios y clientes. Esta Política de Privacidad describe cómo recopilamos, utilizamos y protegemos la información personal proporcionada a través de nuestro sitio web.
              </p>
              <p className="mt-4">
                Al acceder y utilizar este sitio, aceptas las prácticas descritas en esta política.
              </p>
            </section>

            <section className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-white uppercase tracking-tight">1. Información que recopilamos</h2>
                <p>Podemos recopilar información personal cuando el usuario:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Realiza una compra</li>
                  <li>Se registra en el sitio</li>
                  <li>Completa un formulario</li>
                  <li>Contacta a nuestro equipo</li>
                </ul>
                <p>La información puede incluir:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Nombre y apellido</li>
                  <li>Correo electrónico</li>
                  <li>Número de teléfono</li>
                  <li>Dirección de envío y facturación</li>
                  <li>Información relacionada con el pedido</li>
                </ul>
                <p className="italic">Los datos de pago son procesados por plataformas externas seguras. No almacenamos información bancaria ni datos de tarjetas de crédito.</p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-white uppercase tracking-tight">2. Uso de la información</h2>
                <p>La información recopilada se utiliza para:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Procesar y gestionar pedidos</li>
                  <li>Coordinar envíos y entregas</li>
                  <li>Enviar confirmaciones y actualizaciones del pedido</li>
                  <li>Brindar atención al cliente</li>
                  <li>Mejorar la experiencia del usuario en el sitio</li>
                  <li>Enviar comunicaciones promocionales, solo si el usuario lo autoriza</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-white uppercase tracking-tight">3. Protección de la información</h2>
                <p>Aplicamos medidas de seguridad técnicas y organizativas para proteger los datos personales contra accesos no autorizados, pérdida, alteración o uso indebido.</p>
                <p>El acceso a la información está limitado únicamente a personal autorizado y a proveedores necesarios para la operación del servicio.</p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-white uppercase tracking-tight">4. Compartición de información con terceros</h2>
                <p>La información personal podrá ser compartida únicamente con:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Empresas de mensajería y envíos</li>
                  <li>Plataformas de pago</li>
                  <li>Proveedores de servicios tecnológicos</li>
                </ul>
                <p>Estos terceros solo reciben la información necesaria para cumplir su función. No vendemos, alquilamos ni comercializamos datos personales.</p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-white uppercase tracking-tight">5. Cookies y tecnologías similares</h2>
                <p>Este sitio utiliza cookies para mejorar la navegación, analizar el tráfico del sitio y recordar preferencias del usuario.</p>
                <p>El usuario puede desactivar las cookies desde la configuración de su navegador. Algunas funciones del sitio pueden verse afectadas.</p>
              </div>


              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-white uppercase tracking-tight">6. Derechos del usuario</h2>
                <p>El usuario tiene derecho a:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Acceder a su información personal</li>
                  <li>Solicitar la corrección de datos incorrectos</li>
                  <li>Solicitar la eliminación de sus datos</li>
                  <li>Retirar su consentimiento para comunicaciones promocionales</li>
                </ul>
                <p>Las solicitudes pueden realizarse a través de los canales de contacto indicados.</p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-white uppercase tracking-tight">7. Conservación de los datos</h2>
                <p>Los datos personales se conservarán únicamente durante el tiempo necesario para cumplir con los fines descritos en esta política y con obligaciones legales o comerciales.</p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-white uppercase tracking-tight">8. Enlaces a sitios de terceros</h2>
                <p>Nuestro sitio puede contener enlaces a plataformas externas (pagos, envíos o redes sociales). No somos responsables por las políticas de privacidad ni el contenido de dichos sitios.</p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-white uppercase tracking-tight">9. Privacidad de menores</h2>
                <p>Este sitio no está dirigido a menores de edad. No recopilamos intencionalmente información personal de menores.</p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-white uppercase tracking-tight">10. Cambios en la Política de Privacidad</h2>
                <p>Nos reservamos el derecho de modificar esta Política de Privacidad en cualquier momento. Las actualizaciones serán publicadas en esta sección y entrarán en vigor desde su publicación.</p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-white uppercase tracking-tight">11. Información de contacto</h2>
                <p>Para consultas relacionadas con esta Política de Privacidad o el tratamiento de datos personales, puedes contactarnos a través de:</p>
                <div className="bg-white/5 p-6 rounded-md">
                  <p>Correo electrónico: <a href={`mailto:${HOOTI_CONFIG.contactEmail}`} className="text-primary hover:underline">{HOOTI_CONFIG.contactEmail}</a></p>
                  <p>Nombre comercial: {HOOTI_CONFIG.siteName}</p>
                </div>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
