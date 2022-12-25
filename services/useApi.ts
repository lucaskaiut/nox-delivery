export type getTenantResponse = {
    name: string;
    mainColor: string;
    secondaryColor: string;
}

interface useApiResponse {
    getTenant: (tenantSlug: string) => boolean | getTenantResponse,
}

export const useApi = (): useApiResponse => ({
    getTenant: (tenantSlug: string): boolean | getTenantResponse => {
        switch (tenantSlug) {
            case 'the-great-burger':
                return {
                    name: 'The Great Burger',
                    mainColor: '#ff0000',
                    secondaryColor: '#00ff00'
                }
            case 'the-great-pizza':
                return {
                    name: 'The Great Pizza',
                    mainColor: '#00ff00',
                    secondaryColor: '#0000ff'
                }
            default: return false;
        }

    }
});