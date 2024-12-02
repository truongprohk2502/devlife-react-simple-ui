type Variant = "success" | "error";

export type CommandLine = {
  prompt: string;
  command: string;
  output: string;
  type: Variant;
}