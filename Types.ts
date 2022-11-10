export interface CompProps {}
export interface AppProps {}
export interface CodeComponent {
  codeString: string;
  isDetails?: boolean;
}

export interface fileInfo {
  title: string;
  codeString: string;
  link: string;
  challengeID: string;
  rank: string;
}

export interface challengeInfo {
  id: string;
  name: string;
  slug: string;
  category: string;
  publishedAt: string;
  approvedAt: string;
  languages?: string[] | null;
  url: string;
  rank: Rank;
  createdAt: string;
  createdBy: CreatedByOrApprovedBy;
  approvedBy: CreatedByOrApprovedBy;
  description: string;
  totalAttempts: number;
  totalCompleted: number;
  totalStars: number;
  voteScore: number;
  tags?: string[] | null;
  contributorsWanted: boolean;
  unresolved: Unresolved;
}
export interface Rank {
  id: number;
  name: string;
  color: string;
}
export interface CreatedByOrApprovedBy {
  username: string;
  url: string;
}
export interface Unresolved {
  issues: number;
  suggestions: number;
}
