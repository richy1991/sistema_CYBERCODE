-- Insertar desarrolladores de ejemplo (ejecutar después de crear la BD)

INSERT INTO developers (nombre, apellido, teléfono, email, perfil_git, linkedin, bio, skills)
VALUES (
  'Ricardo',
  'Desarrollador Senior',
  '+34 612 345 678',
  'ricardo@cybercode.com',
  'https://github.com/richy1991',
  'https://linkedin.com/in/ricardo-dev',
  'Especialista en ciberseguridad, arquitectura backend y desarrollo seguro. 10+ años de experiencia en soluciones enterprise.',
  '["Node.js", "Python", "Security Architecture", "Docker", "Kubernetes", "Pentesting"]'
);

INSERT INTO developers (nombre, apellido, teléfono, email, perfil_git, linkedin, bio, skills)
VALUES (
  'Carlos',
  'Desarrollador Full Stack',
  '+34 634 567 890',
  'carlos@cybercode.com',
  'https://github.com/richy1991',
  'https://linkedin.com/in/carlos-dev',
  'Full Stack Developer con experiencia en React, Node.js y Web3. Apasionado por crear aplicaciones seguras y escalables.',
  '["React", "Node.js", "TypeScript", "Web3", "Tailwind CSS", "Testing"]'
);

-- Insertar campañas de ejemplo
INSERT INTO campaigns (name, description, discount, active)
VALUES (
  'Auditoría de Seguridad 30% OFF',
  'Descuento especial para nuevos clientes en servicios de auditoría de seguridad',
  30,
  1
);

INSERT INTO campaigns (name, description, discount, active)
VALUES (
  'Dev Training Bundle',
  'Incluye 5 sesiones de entrenamiento en desarrollo seguro',
  25,
  1
);

-- Insertar códigos de descuento
INSERT INTO discounts (code, percentage, active)
VALUES ('CYBER20', 20, 1);

INSERT INTO discounts (code, percentage, active)
VALUES ('SECURE30', 30, 1);

INSERT INTO discounts (code, percentage, active)
VALUES ('WELCOME15', 15, 1);

-- Verificar datos
SELECT * FROM developers;
SELECT * FROM campaigns;
SELECT * FROM discounts;
