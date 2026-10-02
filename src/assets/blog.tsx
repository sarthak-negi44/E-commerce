interface BlogPost {
  id: number;
  title: string;
  category: string;
  date: string;
  image: string;
  excerpt: string;
}
const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "How to Build a Simple Everyday Outfit",
    category: "Fashion",
    date: "October 2, 2026",
    image:
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=800",
    excerpt:
      "Simple tips to create stylish everyday outfits without overcomplicating your wardrobe.",
  },
  {
    id: 2,
    title: "5 Skincare Essentials for Your Daily Routine",
    category: "Beauty",
    date: "September 28, 2026",
    image:
      "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=800",
    excerpt:
      "Discover the basic skincare products that can make your daily routine simple and effective.",
  },
  {
    id: 3,
    title: "How to Choose the Right Outfit for Your Style",
    category: "Fashion",
    date: "September 22, 2026",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800",
    excerpt:
      "Learn how to choose clothes that match your personal style and everyday lifestyle.",
  },
  {
    id: 4,
    title: "Beginner's Guide to Hair Care",
    category: "Beauty",
    date: "September 18, 2026",
    image:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800",
    excerpt:
      "A simple guide to building a basic hair-care routine for healthier-looking hair.",
  },
  {
    id: 5,
    title: "Casual Fashion Trends You Can Try",
    category: "Trends",
    date: "September 12, 2026",
    image:
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800",
    excerpt:
      "Explore simple casual looks that can easily become part of your everyday wardrobe.",
  },
  {
    id: 6,
    title: "Skincare Mistakes You Should Avoid",
    category: "Beauty",
    date: "September 5, 2026",
    image:
      "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=800",
    excerpt:
      "Learn about common skincare mistakes and simple ways to improve your routine.",
  },
];

export default blogPosts;