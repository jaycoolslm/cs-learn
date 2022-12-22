import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import getCollection from '$lib/utils/firebase/firestore/getCollection';

const today = new Date();

export const load = (async () => {

    const teachers = await getCollection("teachers")

    return { teachers }



    throw error(404, 'Not found');
}) satisfies PageLoad;