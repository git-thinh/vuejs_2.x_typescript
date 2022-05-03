
import http from '@/services/http';


export default class NewsService {

    getHero(heroId: string) {
        return http.get(`heroes/${heroId}`);
    }

}

export async function getItemById(itemId: string): Promise<any> {
    const response = await http.get(`/${itemId}`)
    return response.data
}

export async function createItem(item: any): Promise<any> {
    const response = await http.post('/', JSON.stringify(item))
    return response.data
}

// A singleton instance
export const newsService = new NewsService();