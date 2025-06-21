export interface Tutor {
  id: number;
  name: string;
  avatar: string;
  specialties: string[];
  rating: number;
  reviews: number;
  pricePerHour: number;
}

export const liveTutoringData: Tutor[] = [
  {
    id: 1,
    name: "Dr. Evelyn Reed",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    specialties: ["Business English", "IELTS Prep", "Advanced Grammar"],
    rating: 4.9,
    reviews: 123,
    pricePerHour: 45,
  },
  {
    id: 2,
    name: "Marcus Holloway",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704e",
    specialties: ["Conversation Practice", "Pronunciation", "Beginner Friendly"],
    rating: 4.8,
    reviews: 98,
    pricePerHour: 35,
  },
  {
    id: 3,
    name: "Sofia Chen",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704f",
    specialties: ["Academic Writing", "TOEFL Prep", "Intermediate Grammar"],
    rating: 4.9,
    reviews: 154,
    pricePerHour: 50,
  }
]; 