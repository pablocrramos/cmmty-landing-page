"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/atoms/Section";
import { CheckCircleIcon } from "@phosphor-icons/react";

const employeeOptions = [
  "1 – 10 empleados",
  "11 – 50 empleados",
  "51 – 200 empleados",
  "201 – 500 empleados",
  "Más de 500 empleados",
];

const inputClass =
  "w-full rounded-lg border border-border bg-white px-4 py-3 text-base text-foreground placeholder:text-muted-foreground/50 transition-colors focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/10";

const labelClass = "mb-1.5 block text-sm font-medium text-foreground";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <Section variant="light-gray">
      <div className="mx-auto max-w-3xl px-4 py-20 pt-24 sm:px-6 lg:px-8">
        <div className="mb-10">
          <p className="text-primary mb-3 text-xs font-medium tracking-widest uppercase">
            Contacto
          </p>
          <h1 className="font-heading text-3xl font-normal tracking-tighter lg:text-4xl">
            Hablemos de tu negocio
          </h1>
          <p className="text-muted-foreground mt-3 text-base">
            Cuéntanos sobre tu empresa y uno de nuestros expertos te contactará
            en menos de 24 horas.
          </p>
        </div>

        <div className="rounded-2xl bg-white p-8 shadow-[0_2px_24px_rgba(0,0,0,0.06)] md:p-12">
          {submitted ? (
            <div className="flex flex-col items-center gap-4 py-16 text-center">
              <CheckCircleIcon className="text-primary size-12" />
              <h2 className="font-heading text-2xl font-normal tracking-tight">
                ¡Mensaje recibido!
              </h2>
              <p className="text-muted-foreground max-w-sm text-base">
                Nos pondremos en contacto contigo en menos de 24 horas hábiles.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Row 1 */}
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="nombre" className={labelClass}>
                    Nombre completo <span className="text-primary">*</span>
                  </label>
                  <input
                    id="nombre"
                    name="nombre"
                    type="text"
                    required
                    placeholder="Juan Pérez"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="correo" className={labelClass}>
                    Correo electrónico <span className="text-primary">*</span>
                  </label>
                  <input
                    id="correo"
                    name="correo"
                    type="email"
                    required
                    placeholder="juan@empresa.com"
                    className={inputClass}
                  />
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="empresa" className={labelClass}>
                    Empresa{" "}
                    <span className="text-muted-foreground font-normal">
                      (opcional)
                    </span>
                  </label>
                  <input
                    id="empresa"
                    name="empresa"
                    type="text"
                    placeholder="Empresa S.A. de C.V."
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="telefono" className={labelClass}>
                    Teléfono{" "}
                    <span className="text-muted-foreground font-normal">
                      (opcional)
                    </span>
                  </label>
                  <input
                    id="telefono"
                    name="telefono"
                    type="tel"
                    placeholder="+52 (81) 0000-0000"
                    className={inputClass}
                  />
                </div>
              </div>

              {/* Row 3 — employees */}
              <div>
                <label htmlFor="empleados" className={labelClass}>
                  Número de empleados <span className="text-primary">*</span>
                </label>
                <select
                  id="empleados"
                  name="empleados"
                  required
                  defaultValue=""
                  className={inputClass}
                >
                  <option value="" disabled>
                    Selecciona un rango
                  </option>
                  {employeeOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              {/* Row 4 — message */}
              <div>
                <label htmlFor="mensaje" className={labelClass}>
                  ¿En qué podemos ayudarte?{" "}
                  <span className="text-primary">*</span>
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  required
                  rows={5}
                  placeholder="Cuéntanos sobre tu operación actual, qué necesitas mejorar o cualquier duda que tengas..."
                  className={inputClass}
                />
              </div>

              <Button type="submit" className="w-full sm:w-auto">
                Enviar solicitud
              </Button>
            </form>
          )}
        </div>
      </div>
    </Section>
  );
}
