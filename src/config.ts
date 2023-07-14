export type STORAGE_PROVIDERS = "AZURE_STORAGE" | "AWS_S3"

export class Config {
    public static STORAGE_URL: string = '';
    public static STORAGE_PROVIDER: STORAGE_PROVIDERS = 'AZURE_STORAGE';
}