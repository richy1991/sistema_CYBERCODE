// Funciones auxiliares para la autenticación social

/**
 * Buscar usuario en la base de datos por email y proveedor
 */
export const findUser = async (email, provider) => {
  try {
    const response = await fetch(`/api/auth/find-user`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, provider }),
    });

    if (response.ok) {
      const data = await response.json();
      return data.user;
    } else {
      return null;
    }
  } catch (error) {
    console.error('Error buscando usuario:', error);
    return null;
  }
};

/**
 * Registrar un nuevo usuario con información de autenticación social
 */
export const registerSocialUser = async (userData) => {
  try {
    const response = await fetch('/api/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    if (response.ok) {
      return await response.json();
    } else {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Error registrando usuario');
    }
  } catch (error) {
    console.error('Error registrando usuario social:', error);
    throw error;
  }
};

/**
 * Iniciar sesión con un usuario existente
 */
export const loginSocialUser = async (email, provider) => {
  try {
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, provider }),
    });

    if (response.ok) {
      return await response.json();
    } else {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Error iniciando sesión');
    }
  } catch (error) {
    console.error('Error iniciando sesión social:', error);
    throw error;
  }
};

/**
 * Generar un nickname único basado en el nombre y proveedor
 */
export const generateNickname = (name, provider) => {
  const baseName = name.toLowerCase().replace(/\s+/g, '');
  return `${baseName}_${provider.substring(0, 2)}${Math.random().toString(36).substr(2, 5)}`;
};