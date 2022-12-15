<script setup lang="ts">
    import session, { api, isLoading, setError } from "@/stores/session";
    import { ref, watch } from "vue";
    import { useRoute, useRouter } from "vue-router";       

    import { addPost, getPost, updatePost, type Post } from "@/stores/posts";

    const route = useRoute();
    const router = useRouter();
    
    const post = ref({} as Post);
    const isNew = ref(route.params.id == 'new')

    if(!isNew.value){
        getPost(route.params.id as string).then(x => {
            if(x){
                post.value = x            
            }else{
                isNew.value = true;
            }

        });        
    }

    async function save(){
        try {
            if(isNew.value){
                const data = await addPost(post.value);
                session.messages.push({ type: "success", text: `Created post with unique ID: ${data._id}`})
            }else{
                const data = await updatePost(post.value._id, post.value);
                session.messages.push({ type: "success", text: `Successfully updated post ${data._id}`})
            }
            await router.push({ name: 'posts' });
        } catch (error) {
            //setError(error as string); being set in the api function
        }
    }

   async function cancel() {
    await router.push({ name: 'posts' });    
   } 

</script>

<template>
    <section class="section is-medium">
        <div class="columns">

            <div class="column is-three-quarters">
                <form class="modal-card" @submit.prevent="save">
                    <header class="modal-card-head">
                        <p class="modal-card-title">
                            {{ isNew ? 'New' : 'Edit' }} Post 
                        </p>
                        
                    </header>
                    <section class="modal-card-body">
                    
                        <div class="field is-horizontal">
                            <div class="field-label is-normal">
                                <label class="label">Username</label>
                            </div>
                            <div class="field-body">
                                <div class="field">
                                    <p class="control is-expanded has-icons-left">
                                        <input class="input" type="text" placeholder="Username" v-model="post.username">
                                        <span class="icon is-small is-left">
                                            <i class="fas fa-user"></i>
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div class="field is-horizontal">
                            <div class="field-label is-normal">
                                <label class="label">Display Name</label>
                            </div>
                            <div class="field-body">
                                <div class="field">
                                    <p class="control is-expanded has-icons-left">
                                        <input class="input" type="text" placeholder="Display Name" v-model="post.displayName">
                                        <span class="icon is-small is-left">
                                            <i class="fas fa-user"></i>
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div class="field is-horizontal">
                            <div class="field-label is-normal">
                                <label class="label">Post Text</label>
                            </div>
                            <div class="field-body">
                                <div class="field">
                                    <p class="control is-expanded has-icons-left">
                                        <input class="input" type="text" placeholder="post text" v-model="post.postText">
                                        <span class="icon is-small is-left">
                                            <i class="fas fa-user"></i>
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div class="field is-horizontal">
                            <div class="field-label is-normal">
                                <label class="label">Post Tag</label>
                            </div>
                            <div class="field-body">
                                <div class="field">
                                    <p class="control is-expanded has-icons-left">
                                        <input class="input" type="text" placeholder="post tag" v-model="post.postTag">
                                        <span class="icon is-small is-left">
                                            <i class="fas fa-user"></i>
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>

                        
                        <div class="field is-horizontal">
                            <div class="field-label is-normal">
                                <label class="label">Post Image</label>
                            </div>
                            <div class="field-body">
                                <div class="field  has-addons">
                                    <div class="control is-expanded">
                                        <input class="input" type="text" placeholder="x64 encode for image or leave empty for no image" v-model="post.postImg">
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="field is-horizontal">
                            <div class="field-label is-normal">
                                <label class="label">Profile Image</label>
                            </div>
                            <div class="field-body">
                                <div class="field  has-addons">
                                    <div class="control is-expanded">
                                        <input class="input" type="text" placeholder="x64 encode for image or leave empty for no image" v-model="post.profileImg">
                                    </div>
                                </div>
                            </div>
                        </div>
                        </section>
                        <footer class="modal-card-foot">
                            <button class="button is-success">Create post!</button>
                            <button class="button" @click.prevent="cancel">Cancel</button>
                        </footer>
                    </form>
                </div>
        </div>
    </section>
</template>