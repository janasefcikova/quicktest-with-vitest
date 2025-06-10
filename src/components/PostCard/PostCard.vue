<template>
    <div>
        <div v-if="post" style="padding: 1em; border: 2px solid gray; border-radius: 5px;">
            <h1>Post card without shadcn</h1>
            <h2 data-testid="post-title">{{ post.title }}</h2>
            <p data-testid="post-body">{{ post.body }}</p>
        </div>
        <p v-if="loading" data-testid="loader">Loading...</p>
        <p v-if="error" data-testid="error-message">{{ error }}</p>
    </div>
</template>

<script setup>

import { ref, onMounted } from "vue";
import axios from "axios";

const post = ref(null);
const loading = ref(true);
const error = ref(null);

const fetchPost = async () => {
    try {
        const { data } = await axios.get(
            "https://jsonplaceholder.typicode.com/posts/1"
        );
        post.value = data;
    } catch (err) {
        error.value = err.message;
    } finally {
        loading.value = false;
    }
};

onMounted(() => {
    fetchPost();
});

</script>