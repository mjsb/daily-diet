export type MealStorageDTO = {
    id: string | number;
    title: string | Date;
    data: {
        name: string;
        description: string;
        hour: string | Date;
        status: string;
    };
}