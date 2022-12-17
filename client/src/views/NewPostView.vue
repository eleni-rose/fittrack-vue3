<script setup lang="ts">
    import session, { api, isLoading, setError } from "@/stores/session";
    import { ref } from "vue";
    import { useRoute, useRouter } from "vue-router";       

    import { addPost, getPost, updatePost, type Post } from "@/stores/posts";

    const route = useRoute();
    const router = useRouter();
    
    const post = ref({} as Post);
    const isNew = ref(route.params.id == undefined)

    if(!isNew.value) {
        
        getPost(route.params.id as string).then(x => {
            if(x){
                post.value = x            
            }else{
                isNew.value = true;
            }

        });        
    }

    async function save() {
        try {

            if(isNew.value) {
                const data = await addPost(post.value);
                session.messages.push({ type: "success", text: `Created post by: ${data.username}`})
            }

            else {
                const data = await updatePost(post.value._id, post.value);
                session.messages.push({ type: "success", text: `Successfully updated ${data.username}'s post'`})
            }

            await router.push({ name: 'activity' });

        }

        catch (error) {
            //setError(error as string); being set in the api function
        }
    }

    async function cancel() {
        await router.push({ name: 'activity' });    
   } 

</script>

<template>
    <section class="section is-medium">
        <div class="columns">

            <div class="column is-half is-offset-one-quarter">
                <form class="card" @submit.prevent="save"> 

                    <header class="card-header pt-3 is-shadowless">
                        <p class="card-header-title is-centered has-text-grey has-text-weight-semibold is-size-5">
                            New workout
                        </p>
                    </header>

                    <section class="card-content m-2">
                    
                        <div class="field">
                            <label class="label"><span class="has-text-grey has-text-weight-normal">Username</span></label>
                                <div class="field-body">
                                    <div class="field">
                                        <p class="control">
                                            <input class="input" type="text" placeholder="johnsmith123" v-model="post.username">
                                        </p>
                                    </div>
                                </div>
                            </div>

                        <div class="field">
                            <label class="label"><span class="has-text-grey has-text-weight-normal">Display name</span></label>
                                <div class="field-body">
                                    <div class="field">
                                        <p class="control">
                                            <input class="input" type="text" placeholder="John Smith" v-model="post.displayName">
                                        </p>
                                    </div>
                                </div>
                            </div>

                        <div class="field">
                            <label class="label"><span class="has-text-grey has-text-weight-normal">Post text</span></label>
                                <div class="field-body">
                                    <div class="field">
                                        <p class="control">
                                            <textarea class="input" type="text" placeholder="Tell the world about your life!" v-model="post.postText"></textarea>
                                        </p>
                                    </div>
                                </div>
                            </div>

                        <div class="field">
                            <label class="label"><span class="has-text-grey has-text-weight-normal">Hashtag</span></label>
                                <div class="field-body">
                                    <div class="field">
                                        <p class="control">
                                            <input class="input" type="text" placeholder="#hashtag" v-model="post.postTag">
                                        </p>
                                    </div>
                                </div>
                            </div>

                        
                        <div class="field">
                            <label class="label"><span class="has-text-grey has-text-weight-normal">Post image</span></label>
                                <div class="field-body">
                                    <div class="field">
                                        <div class="control">
                                            <input class="input" type="text" placeholder="Must be a x64 encode, leave empty for no image" v-model="post.postImg">
                                        </div>
                                    </div>
                                </div>
                            </div>

                        <div class="field">
                            <label class="label"><span class="has-text-grey has-text-weight-normal">Profile photo</span></label>
                                <div class="field-body">
                                    <div class="field">
                                        <div class="control">
                                            <input class="input" type="text" placeholder="Must be a x64 encode" v-model="post.profileImg">
                                        </div>
                                    </div>
                                </div>
                            </div>

                        <footer class="card-footer p-5">

                            <button class="button card-footer-item mr-5 is-info is-rounded">Create post!</button>

                            <button class="button card-footer-item mr-5 is-light is-rounded" @click.prevent="cancel">Cancel</button>

                        </footer>
                        
                    </section>
                </form>
            </div>
        </div>
    </section>
</template>