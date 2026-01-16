export type CuisineType = "japanese" | "korean";

export interface Restaurant {
  id: string;
  name: string;
  cuisineType: CuisineType;
  coordinates: {
    longitude: number;
    latitude: number;
  };
  address: string;
  arrondissement: number;

  // Liens et contacts
  googleMapsUrl?: string;
  website?: string;
  instagram?: string;
  phone?: string;

  // Contenu éditorial
  tagline: string; // Courte description/slogan
  keywords: string[]; // Style: ramen, bbq, izakaya, etc.
  mainImage: string; // Photo d'accroche
  gallery?: string[]; // Photos supplémentaires

  // Interview & authenticité
  ownerStory?: string; // Interview du propriétaire
  authenticityNote: string; // Ton avis sur l'authenticité

  // Métadonnées
  isVerified: boolean; // Restaurant vérifié/visité
  addedDate: string; // Date d'ajout
}
