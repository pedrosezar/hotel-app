type Hotel = {
  id: string; // reserved for firestore id
  cover: string;
  name: string;
  price: number;
  description: string;
  gallery: Array<{ id: number; photo: string }>;
};

export default Hotel;
