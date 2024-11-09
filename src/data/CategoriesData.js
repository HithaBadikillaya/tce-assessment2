// src/data/CategoryData.js
export const categoriesData = [
    {
      id: 1,
      name: 'Chocolate Cakes',
      image: '/images/chocolate-category.jpeg', 
      description: 'Indulge in our rich and decadent chocolate cakes.',
      cakes: [
        { id: 1, name: 'Chocolate Cake', description: 'Rich chocolate cake', price: 20, image: '/images/chocolate-cake.jpeg' },
        { id: 2, name: 'Chocolate Mousse', description: 'Creamy chocolate mousse', price: 25, image: '/images/chocolate-moussejpeg.jpeg' },
      ],
    },
    {
      id: 2,
      name: 'Fruit Cakes',
      image: '/images/fruit-category.jpeg', 
      description: 'Fresh and fruity cakes perfect for any occasion.',
      cakes: [
        { id: 3, name: 'Strawberry Cake', description: 'Fresh strawberry cake', price: 22, image: '/images/strawberry-cakejpeg.jpeg' },
        { id: 4, name: 'Mango Cake', description: 'Delicious mango cake', price: 18, image: '/images/mango-cakejpeg.jpeg' },
      ],
    },
    {
      id: 3,
      name: 'Cheesecakes',
      image: '/images/cheesecake-categoryjpeg.jpeg', 
      description: 'Creamy and delicious cheesecakes that melt in your mouth.',
      cakes: [
        { id: 5, name: 'Classic Cheesecake', description: 'Rich and creamy cheesecake', price: 30, image: '/images/classic-cheesecake.jpeg' },
        { id: 6, name: 'Blueberry Cheesecake', description: 'Cheesecake topped with fresh blueberries', price: 32, image: '/images/blueberry-cheesecake.jpeg' },
      ],
    },
    {
      id: 4,
      name: 'Special Occasion Cakes',
      image: '/images/special-occasion-categoryjpeg.jpeg', 
      description: 'Cakes designed for your special celebrations.',
      cakes: [
        { id: 7, name: 'Wedding Cake', description: 'Elegant wedding cake', price: 100, image: '/images/wedding-cake.jpeg' },
        { id: 8, name: 'Birthday Cake', description: 'Custom birthday cake', price: 50, image: '/images/vanilla-bean-cake.jpeg' },
      ],
    },
  ];