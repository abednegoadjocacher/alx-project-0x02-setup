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