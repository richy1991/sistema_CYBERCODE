const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const DBSOURCE = "cybercode.db";
const db = new sqlite3.Database(DBSOURCE);

console.log('📊 Inicializando datos de ejemplo en CyberCode...\n');

// Insertar desarrolladores
const developers = [
  {
    nombre: 'Ricardo',
    apellido: 'Desarrollador Senior',
    teléfono: '+34 612 345 678',
    email: 'ricardo@cybercode.com',
    perfil_git: 'https://github.com/richy1991',
    linkedin: 'https://linkedin.com/in/ricardo-dev',
    bio: 'Especialista en ciberseguridad, arquitectura backend y desarrollo seguro. 10+ años de experiencia en soluciones enterprise.',
    skills: JSON.stringify(['Node.js', 'Python', 'Security Architecture', 'Docker', 'Kubernetes', 'Pentesting'])
  },
  {
    nombre: 'Carlos',
    apellido: 'Desarrollador Full Stack',
    teléfono: '+34 634 567 890',
    email: 'carlos@cybercode.com',
    perfil_git: 'https://github.com/richy1991',
    linkedin: 'https://linkedin.com/in/carlos-dev',
    bio: 'Full Stack Developer con experiencia en React, Node.js y Web3. Apasionado por crear aplicaciones seguras y escalables.',
    skills: JSON.stringify(['React', 'Node.js', 'TypeScript', 'Web3', 'Tailwind CSS', 'Testing'])
  }
];

let completedDevelopers = 0;

developers.forEach((dev, index) => {
  db.run(
    `INSERT OR IGNORE INTO developers (nombre, apellido, teléfono, email, perfil_git, linkedin, bio, skills) 
     VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
    [dev.nombre, dev.apellido, dev.teléfono, dev.email, dev.perfil_git, dev.linkedin, dev.bio, dev.skills],
    function(err) {
      if (err) {
        console.error(`Error insertando desarrollador ${index + 1}:`, err.message);
      } else {
        console.log(`✓ Desarrollador "${dev.nombre}" insertado`);
        completedDevelopers++;
      }

      if (completedDevelopers === developers.length) {
        insertCampaigns();
      }
    }
  );
});

function insertCampaigns() {
  const campaigns = [
    {
      name: 'Auditoría de Seguridad 30% OFF',
      description: 'Descuento especial para nuevos clientes en servicios de auditoría de seguridad',
      discount: 30
    },
    {
      name: 'Dev Training Bundle',
      description: 'Incluye 5 sesiones de entrenamiento en desarrollo seguro',
      discount: 25
    },
    {
      name: 'Consultoría Empresarial - 20% OFF',
      description: 'Para proyectos de consultoría a nivel empresarial',
      discount: 20
    }
  ];

  let completedCampaigns = 0;

  campaigns.forEach((campaign, index) => {
    db.run(
      `INSERT OR IGNORE INTO campaigns (name, description, discount, active) VALUES (?, ?, ?, 1)`,
      [campaign.name, campaign.description, campaign.discount],
      function(err) {
        if (err) {
          console.error(`Error insertando campaña ${index + 1}:`, err.message);
        } else {
          console.log(`✓ Campaña "${campaign.name}" insertada`);
          completedCampaigns++;
        }

        if (completedCampaigns === campaigns.length) {
          insertDiscounts();
        }
      }
    );
  });
}

function insertDiscounts() {
  const discounts = [
    { code: 'CYBER20', percentage: 20 },
    { code: 'SECURE30', percentage: 30 },
    { code: 'WELCOME15', percentage: 15 },
    { code: 'CYBERCODE25', percentage: 25 }
  ];

  let completedDiscounts = 0;

  discounts.forEach((discount, index) => {
    db.run(
      `INSERT OR IGNORE INTO discounts (code, percentage, active) VALUES (?, ?, 1)`,
      [discount.code, discount.percentage],
      function(err) {
        if (err) {
          console.error(`Error insertando descuento ${index + 1}:`, err.message);
        } else {
          console.log(`✓ Código de descuento "${discount.code}" insertado`);
          completedDiscounts++;
        }

        if (completedDiscounts === discounts.length) {
          console.log('\n✅ Base de datos inicializada exitosamente!');
          console.log('\n📋 Datos creados:');
          console.log(`  - ${developers.length} desarrolladores`);
          console.log(`  - ${discounts.length} campaña(s)`);
          console.log(`  - ${discounts.length} código(s) de descuento`);
          console.log('\n💡 Tip: Admin email es "di.ck.nina29@gmail.com"');
          db.close();
        }
      }
    );
  });
}
