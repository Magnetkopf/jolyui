export interface LiquidMetalButtonProps {
  /**
   * The text to display on the button.
   * @default "Get Started"
   */
  label?: string

  /**
   * Callback function triggered when the button is clicked.
   */
  onClick?: () => void

  /**
   * The view mode of the button.
   * @default "text"
   */
  viewMode?: "text" | "icon"
}
