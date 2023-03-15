export type PriceType = 'fixed' | 'negotiation';

export interface ClassifiedSummary {
    id: string;
    title: string;
    price: number;
    creationDate: string;
    online: boolean;
    onlineSince: string | null;
}
