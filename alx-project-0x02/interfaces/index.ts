export interface CardProps{
    title: string;
    content: string;
}

export interface PostData {
  title: string;
  content: string;
}

export interface PostModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (post: PostData) => void;
}

export interface Post extends PostData {
  id: number;
  createdAt: string;
}

export interface ButtonProps {
  styles: string;
  title: string
}

export interface PostProps {
  userId: number;
  id: number;
  title: string;
  body: string;
  posts?:PostProps[];
}