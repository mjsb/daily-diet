export type MealStorageDTO = {
    title: Date;
    data: {
        id: number;
        name: string;
        description: string;
        hour: string;
        status: string;
    };
}