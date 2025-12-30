/**
 * Props for the GitHubStarButton component
 */
export interface GitHubStarButtonProps {
  /**
   * The owner of the GitHub repository
   * @example "johuniq"
   */
  owner: string;
  /**
   * The name of the GitHub repository
   * @example "jolyui"
   */
  repo: string;
  /**
   * Manual star count override. If provided, the component will not fetch from GitHub API.
   */
  stars?: number;
  /**
   * Additional CSS classes for the button
   */
  className?: string;
}
