import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Settings, BarChart3, Users, Zap, X } from 'lucide-react';

const AdminPanel = ({ user = null }) => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [campaigns, setCampaigns] = useState([]);
  const [developers, setDevelopers] = useState([]);
  const [discounts, setDiscounts] = useState([]);
  const [newCampaign, setNewCampaign] = useState({ name: '', description: '', discount: 0 });
  const [newDiscount, setNewDiscount] = useState({ code: '', percentage: 0, active: true });
  const [stats, setStats] = useState({ totalUsers: 0, totalPosts: 0, totalLikes: 0 });

  // Verificar si es admin
  const isAdmin = user?.email === 'di.ck.nina29@gmail.com';

  useEffect(() => {
    if (isAdmin) {
      fetchData();
    }
  }, [isAdmin]);

  const fetchData = async () => {
    try {
      const [campaignsRes, developersRes, discountsRes, statsRes] = await Promise.all([
        fetch('http://localhost:3001/api/admin/campaigns'),
        fetch('http://localhost:3001/api/developers'),
        fetch('http://localhost:3001/api/admin/discounts'),
        fetch('http://localhost:3001/api/admin/stats')
      ]);

      if (campaignsRes.ok) setCampaigns(await campaignsRes.json());
      if (developersRes.ok) setDevelopers(await developersRes.json());
      if (discountsRes.ok) setDiscounts(await discountsRes.json());
      if (statsRes.ok) setStats(await statsRes.json());
    } catch (error) {
      console.error('Error fetching admin data:', error);
    }
  };

  const handleAddCampaign = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/admin/campaigns', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify(newCampaign)
      });

      if (response.ok) {
        setCampaigns([...campaigns, await response.json()]);
        setNewCampaign({ name: '', description: '', discount: 0 });
      }
    } catch (error) {
      console.error('Error adding campaign:', error);
    }
  };

  const handleAddDiscount = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/admin/discounts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify(newDiscount)
      });

      if (response.ok) {
        setDiscounts([...discounts, await response.json()]);
        setNewDiscount({ code: '', percentage: 0, active: true });
      }
    } catch (error) {
      console.error('Error adding discount:', error);
    }
  };

  if (!isAdmin) {
    return (
      <section className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
        <motion.div
          className="bg-red-500/10 border border-red-500/50 rounded-lg p-8 text-center max-w-md"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <h2 className="text-2xl font-bold text-red-400 mb-3">Acceso Denegado</h2>
          <p className="text-gray-300">Solo administradores pueden acceder a este panel.</p>
        </motion.div>
      </section>
    );
  }

  const tabs = [
    { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
    { id: 'campaigns', label: 'Campañas', icon: Zap },
    { id: 'discounts', label: 'Códigos de Descuento', icon: Settings },
    { id: 'developers', label: 'Desarrolladores', icon: Users }
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 px-4 md:px-8">
      <motion.div
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">
            Panel Administrativo
          </h1>
          <p className="text-gray-400">Gestiona campañas, descuentos y contenido de CyberCode</p>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded transition-all whitespace-nowrap ${
                activeTab === tab.id
                  ? 'bg-cyan-500 text-white'
                  : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
              }`}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Dashboard Tab */}
        {activeTab === 'dashboard' && (
          <motion.div
            className="grid md:grid-cols-4 gap-4 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {[
              { label: 'Total de Usuarios', value: stats.totalUsers, icon: Users, color: 'from-cyan-400' },
              { label: 'Total de Posts', value: stats.totalPosts, icon: BarChart3, color: 'from-purple-400' },
              { label: 'Total de Likes', value: stats.totalLikes, icon: Zap, color: 'from-pink-400' },
              { label: 'Campañas Activas', value: campaigns.filter(c => c.active).length, icon: Settings, color: 'from-green-400' }
            ].map((stat, i) => (
              <div
                key={i}
                className={`bg-gradient-to-br ${stat.color}/10 border border-${stat.color.split('-')[1]}-500/30 rounded-lg p-6`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-400 text-sm mb-1">{stat.label}</p>
                    <p className={`text-3xl font-bold bg-gradient-to-r ${stat.color} to-transparent bg-clip-text text-transparent`}>
                      {stat.value}
                    </p>
                  </div>
                  <stat.icon className="w-8 h-8 opacity-20" />
                </div>
              </div>
            ))}
          </motion.div>
        )}

        {/* Campaigns Tab */}
        {activeTab === 'campaigns' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {/* Add New Campaign */}
            <div className="bg-slate-800 rounded-lg p-6 mb-8 border border-cyan-500/30">
              <h3 className="text-xl font-bold text-cyan-400 mb-4">Nueva Campaña</h3>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Nombre de campaña"
                  value={newCampaign.name}
                  onChange={e => setNewCampaign({ ...newCampaign, name: e.target.value })}
                  className="w-full bg-slate-700 text-white px-4 py-2 rounded border border-slate-600 focus:border-cyan-500 focus:outline-none"
                />
                <textarea
                  placeholder="Descripción"
                  value={newCampaign.description}
                  onChange={e => setNewCampaign({ ...newCampaign, description: e.target.value })}
                  className="w-full bg-slate-700 text-white px-4 py-2 rounded border border-slate-600 focus:border-cyan-500 focus:outline-none h-24"
                />
                <input
                  type="number"
                  placeholder="Descuento (%)"
                  value={newCampaign.discount}
                  onChange={e => setNewCampaign({ ...newCampaign, discount: Number(e.target.value) })}
                  className="w-full bg-slate-700 text-white px-4 py-2 rounded border border-slate-600 focus:border-cyan-500 focus:outline-none"
                />
                <button
                  onClick={handleAddCampaign}
                  className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-2 rounded font-semibold transition-colors"
                >
                  Crear Campaña
                </button>
              </div>
            </div>

            {/* Campaigns List */}
            <div className="space-y-4">
              {campaigns.map(campaign => (
                <div
                  key={campaign.id}
                  className="bg-slate-800 rounded-lg p-6 border border-purple-500/30 hover:border-purple-400/60 transition-colors"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-lg font-bold text-purple-400">{campaign.name}</h4>
                    <span className="bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded text-sm font-semibold">
                      {campaign.discount}% OFF
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm">{campaign.description}</p>
                </div>
              ))}
              {campaigns.length === 0 && (
                <p className="text-gray-400 text-center py-8">Sin campañas aún</p>
              )}
            </div>
          </motion.div>
        )}

        {/* Discounts Tab */}
        {activeTab === 'discounts' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {/* Add New Discount */}
            <div className="bg-slate-800 rounded-lg p-6 mb-8 border border-green-500/30">
              <h3 className="text-xl font-bold text-green-400 mb-4">Nuevo Código de Descuento</h3>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Código (ej: CYBER20)"
                  value={newDiscount.code}
                  onChange={e => setNewDiscount({ ...newDiscount, code: e.target.value.toUpperCase() })}
                  className="w-full bg-slate-700 text-white px-4 py-2 rounded border border-slate-600 focus:border-green-500 focus:outline-none font-mono"
                />
                <input
                  type="number"
                  placeholder="Porcentaje de descuento"
                  value={newDiscount.percentage}
                  onChange={e => setNewDiscount({ ...newDiscount, percentage: Number(e.target.value) })}
                  className="w-full bg-slate-700 text-white px-4 py-2 rounded border border-slate-600 focus:border-green-500 focus:outline-none"
                />
                <button
                  onClick={handleAddDiscount}
                  className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded font-semibold transition-colors"
                >
                  Crear Código
                </button>
              </div>
            </div>

            {/* Discounts List */}
            <div className="space-y-4">
              {discounts.map(discount => (
                <div
                  key={discount.id}
                  className="bg-slate-800 rounded-lg p-6 border border-green-500/30 hover:border-green-400/60 transition-colors flex justify-between items-center"
                >
                  <div>
                    <h4 className="text-lg font-bold text-green-400 font-mono">{discount.code}</h4>
                    <p className="text-gray-400 text-sm">{discount.percentage}% descuento</p>
                  </div>
                  <span className={`px-3 py-1 rounded text-sm font-semibold ${
                    discount.active
                      ? 'bg-green-500/20 text-green-300'
                      : 'bg-red-500/20 text-red-300'
                  }`}>
                    {discount.active ? 'Activo' : 'Inactivo'}
                  </span>
                </div>
              ))}
              {discounts.length === 0 && (
                <p className="text-gray-400 text-center py-8">Sin códigos aún</p>
              )}
            </div>
          </motion.div>
        )}

        {/* Developers Tab */}
        {activeTab === 'developers' && (
          <motion.div
            className="grid md:grid-cols-2 gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {developers.map(dev => (
              <div
                key={dev.id}
                className="bg-slate-800 rounded-lg p-6 border border-cyan-500/30 hover:border-cyan-400/60 transition-colors"
              >
                <h4 className="text-lg font-bold text-cyan-400 mb-2">
                  {dev.nombre} {dev.apellido}
                </h4>
                <p className="text-gray-400 text-sm mb-3">{dev.bio}</p>
                <div className="text-sm text-gray-400">
                  <p>📧 {dev.email}</p>
                  <p>📱 {dev.teléfono}</p>
                </div>
              </div>
            ))}
            {developers.length === 0 && (
              <p className="text-gray-400 col-span-2 text-center py-8">Sin desarrolladores configurados</p>
            )}
          </motion.div>
        )}
      </motion.div>
    </section>
  );
};

export default AdminPanel;
