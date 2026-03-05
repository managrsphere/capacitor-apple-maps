export interface AppleMapsPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
