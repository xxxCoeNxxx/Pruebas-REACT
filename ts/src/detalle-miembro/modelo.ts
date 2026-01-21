export interface Miembro {
  avatar_url: string;
  id: string;
  login: string;
  blog: string;
}

export const crearMiembroVacio = () => ({
  id: "",
  login: "",
  avatar_url: "",
  blog: "",
});