import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';
import getDocument from '$lib/utils/firebase/firestore/getDocument';

export const load = (async ({ params }) => {
    if (!params.teacher) throw error(404, 'Not found');

    const teacher = await getDocument("teachers", params.teacher)
    return {
        teacher
    };
}) satisfies PageLoad;
