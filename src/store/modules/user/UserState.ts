export default interface UserState {
    token: string;
    current: object | null;
    currentEComStore: object;
    instanceUrl: string;
    shopifyConfigs: any,
    currentShopifyConfig: any,
}