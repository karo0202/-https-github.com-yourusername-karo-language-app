export interface Post {
  id: number;
  author: string;
  avatar: string;
  title: string;
  category: 'General' | 'Grammar' | 'Pronunciation' | 'Resources';
  content: string;
  likes: number;
  replies: number;
  timestamp: string;
}

export const communityData: Post[] = [
  {
    id: 1,
    author: "Jane Doe",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    title: "What's the best way to remember new vocabulary?",
    category: "Resources",
    content: "I'm having trouble remembering all the new words I'm learning. Any tips or techniques that have worked well for you?",
    likes: 42,
    replies: 8,
    timestamp: "2 hours ago"
  },
  {
    id: 2,
    author: "John Smith",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704e",
    title: "Can someone explain the difference between 'affect' and 'effect'?",
    category: "Grammar",
    content: "I always get these two confused. I know one is a verb and one is a noun, but I can never remember which is which in the moment.",
    likes: 28,
    replies: 5,
    timestamp: "5 hours ago"
  },
  {
    id: 3,
    author: "Emily White",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704f",
    title: "Tips for improving my pronunciation of 'th'?",
    category: "Pronunciation",
    content: "I'm a native Spanish speaker and I really struggle with the 'th' sound in English. Any advice would be greatly appreciated!",
    likes: 64,
    replies: 12,
    timestamp: "1 day ago"
  }
]; 