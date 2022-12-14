import myFetch from "@/services/myFetch";
import { computed, reactive } from "vue";

const session = reactive( {
    user: null as User | null,
    loading: 0,
    error: null as string | null,
    messages: [] as Message[],
});
export default session;

export function setError(error: string | null) {
    session.error = error;
    if(error){
        session.messages.push({ type: 'danger', text: 'Uh oh. Something broke. Try restarting the page.' });
    }
}

export const isLoading = computed(() => !! session.loading);

export async function api<T>(url: string, data: any = null, method?: string ){
    session.loading++;
    setError(null);
    try {
        return await myFetch<T>(url, data, method);
    } catch (error:any) {
        setError(error.message ?? error as string);
        throw error;
    }finally{
        session.loading--;
    }
    return {} as T;
}

export function addUser(user: User) {
    return api<User>(`users`, user);
}

export function updateUser(id: string, user: User) {
    return api<User>(`users/${id}`, user, 'PATCH');
}

export function deleteUser(id: string) {
    return api<{deletedCount:boolean}>(`users/${id}`,{}, 'DELETE');
}

export function login(email: string, password: string) {
    session.user = {
        email,
        password,
    }
}
export function logout() {
    session.user = null;
}
export interface User {
    _id?: string;
    username?: string;
    email: string;
    password: string;
    displayName?: string;
    profilePic?: string;
}