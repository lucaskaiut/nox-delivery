import { Tenant } from "../types/Tenant";

interface useApiResponse {
    getTenant: (tenantSlug: string) => boolean | Tenant,
}

export const api = (): useApiResponse => ({
    getTenant: (tenantSlug: string): boolean | Tenant => {
        switch (tenantSlug) {
            case 'the-great-burger':
                return {
                    slug: 'the-great-burger',
                    name: 'The Great Burger',
                    mainColor: '#ff0000',
                    secondaryColor: '#00ff00'
                }
            case 'the-great-pizza':
                return {
                    slug: 'the-great-pizza',
                    name: 'The Great Pizza',
                    mainColor: '#00ff00',
                    secondaryColor: '#0000ff'
                }
            default: return false;
        }

    }
});