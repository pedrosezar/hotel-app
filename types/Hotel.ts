type Hotel = {
  id: string; // reserved for firestore id
  cover: string;
  name: string;
  price: number;
  description: string;
  info: string;
  gallery: Array<string>;
};

export default Hotel;
