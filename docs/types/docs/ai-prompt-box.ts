export interface PromptInputBoxProps {
  /**
   * Callback function triggered when the send button is clicked or Enter is pressed.
   * @param message - The text message from the input.
   * @param files - Optional array of files attached to the message.
   */
  onSend?: (message: string, files?: File[]) => void;

  /**
   * Whether the component is in a loading state.
   * @default false
   */
  isLoading?: boolean;

  /**
   * Placeholder text for the input area.
   * @default "Type your message here..."
   */
  placeholder?: string;

  /**
   * Additional CSS classes for the component.
   */
  className?: string;
}

export interface PromptInputProps {
  /**
   * Whether the component is in a loading state.
   * @default false
   */
  isLoading?: boolean;

  /**
   * Current value of the input.
   */
  value?: string;

  /**
   * Callback function triggered when the input value changes.
   */
  onValueChange?: (value: string) => void;

  /**
   * Maximum height of the input area.
   * @default 240
   */
  maxHeight?: number | string;

  /**
   * Callback function triggered when the form is submitted.
   */
  onSubmit?: () => void;

  /**
   * Child elements to be rendered inside the component.
   */
  children: React.ReactNode;

  /**
   * Additional CSS classes for the component.
   */
  className?: string;

  /**
   * Whether the input is disabled.
   * @default false
   */
  disabled?: boolean;
}

export interface PromptInputTextareaProps {
  /**
   * Whether to disable the autosize functionality.
   * @default false
   */
  disableAutosize?: boolean;

  /**
   * Placeholder text for the textarea.
   */
  placeholder?: string;
}

export interface PromptInputActionProps {
  /**
   * Content to display in the tooltip.
   */
  tooltip: React.ReactNode;

  /**
   * The element that triggers the tooltip.
   */
  children: React.ReactNode;

  /**
   * The side where the tooltip should appear.
   * @default "top"
   */
  side?: "top" | "bottom" | "left" | "right";
}
