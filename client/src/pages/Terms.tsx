import { motion } from "framer-motion";
import { HOOTI_CONFIG } from "@shared/config";

export default function Terms() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-4 bg-[#0a0a0a]">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl font-black font-display tracking-tighter mb-12 text-white uppercase">
            Términos y Condiciones
          </h1>

          <div className="space-y-12 text-muted-foreground leading-relaxed">
            <section>
              <p className="text-xl text-white/80">
                Bienvenido a {HOOTI_CONFIG.siteName}. Al acceder y utilizar este sitio web, aceptas los presentes Términos y Condiciones. Si no estás de acuerdo con alguno de ellos, te recomendamos no utilizar nuestros servicios.
              </p>
            </section>

            <section className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-white uppercase tracking-tight">1. Uso del sitio web</h2>
                <p>Este sitio está destinado exclusivamente para:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Navegar por nuestros productos</li>
                  <li>Realizar compras</li>
                  <li>Obtener información sobre nuestros servicios</li>
                </ul>
                <p>El usuario se compromete a utilizar el sitio de forma lícita y a no realizar actividades que puedan dañar, sobrecargar o afectar el correcto funcionamiento del sitio web.</p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-white uppercase tracking-tight">2. Productos</h2>
                <p>Todos los productos ofrecidos en {HOOTI_CONFIG.siteName}:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Están sujetos a disponibilidad</li>
                  <li>Pueden presentar ligeras variaciones de color debido a la iluminación o pantalla del dispositivo</li>
                  <li>Incluyen descripciones y tallas informativas que el cliente debe revisar antes de comprar</li>
                </ul>
                <p>Nos reservamos el derecho de modificar o descontinuar productos sin previo aviso.</p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-white uppercase tracking-tight">3. Precios</h2>
                <p>Todos los precios:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Están expresados en la moneda indicada en el sitio</li>
                  <li>Pueden cambiar sin previo aviso</li>
                  <li>No incluyen costos de envío, salvo que se indique lo contrario</li>
                </ul>
                <p>El precio final será el mostrado al momento de confirmar la compra.</p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-white uppercase tracking-tight">4. Proceso de compra</h2>
                <p>Al realizar una compra, el cliente declara que:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>La información proporcionada es veraz y completa</li>
                  <li>Ha revisado correctamente el producto, talla y dirección de envío</li>
                  <li>Acepta estos Términos y Condiciones y la Política de Privacidad</li>
                </ul>
                <p>La compra se considera confirmada una vez recibido el pago.</p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-white uppercase tracking-tight">5. Pagos</h2>
                <p>Los pagos se procesan a través de plataformas externas seguras. {HOOTI_CONFIG.siteName} no almacena información bancaria ni datos de tarjetas de crédito.</p>
                <p>Nos reservamos el derecho de cancelar pedidos en caso de pagos no verificados, errores evidentes de precio o sospecha de fraude.</p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-white uppercase tracking-tight">6. Envíos</h2>
                <p>Realizamos envíos a nivel nacional desde Mérida, Venezuela. El tiempo de entrega depende de la empresa de mensajería seleccionada y la ubicación del destinatario. Una vez entregado el pedido a la empresa de envíos, la responsabilidad del transporte recae en dicha empresa.</p>
              </div>

              <div className="space-y-4 border-l-4 border-primary pl-6 py-2 bg-primary/5">
                <h2 className="text-2xl font-bold text-white uppercase tracking-tight">7. Política de devoluciones y reembolsos</h2>
                <p className="font-bold text-primary">{HOOTI_CONFIG.siteName} no realiza devoluciones ni reembolsos.</p>
                <p>El cliente es responsable de verificar talla, modelo, color y dirección de envío. Al completar la compra, el cliente acepta expresamente esta política.</p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-white uppercase tracking-tight">8. Cancelaciones</h2>
                <p>Los pedidos no pueden ser cancelados una vez confirmado el pago y procesado el envío.</p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-white uppercase tracking-tight">9. Propiedad intelectual</h2>
                <p>Todo el contenido de este sitio, incluyendo logos, imágenes, textos y diseños, es propiedad de {HOOTI_CONFIG.siteName} y está protegido por derechos de propiedad intelectual. Queda prohibido su uso sin autorización previa.</p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-white uppercase tracking-tight">10. Limitación de responsabilidad</h2>
                <p>{HOOTI_CONFIG.siteName} no será responsable por retrasos atribuibles a empresas de mensajería, uso indebido de los productos o daños indirectos derivados del uso del sitio web.</p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-white uppercase tracking-tight">11. Modificaciones de los términos</h2>
                <p>Nos reservamos el derecho de modificar estos Términos y Condiciones en cualquier momento. Las modificaciones entrarán en vigor desde su publicación en el sitio web.</p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-white uppercase tracking-tight">12. Legislación aplicable</h2>
                <p>Estos Términos y Condiciones se rigen por las leyes aplicables en la República Bolivariana de Venezuela.</p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-white uppercase tracking-tight">13. Contacto</h2>
                <p>Para cualquier consulta relacionada con estos Términos y Condiciones, puedes contactarnos a través de:</p>
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
