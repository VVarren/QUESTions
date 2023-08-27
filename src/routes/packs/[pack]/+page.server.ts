// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
import type { PageServerLoad } from './$types';
import { Client } from 'pg'


export const prerender = true;
export const load: PageServerLoad = async ({params}) =>  {
    const client = new Client(process.env.DATABASE_URL)
    await client.connect()

    const res = await client.query('SELECT * FROM all_cards WHERE pack_id = $1', [params.pack])
    return {cards: res.rows}
};