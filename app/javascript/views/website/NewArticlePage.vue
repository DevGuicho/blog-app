<template>
  <NewArticleForm :id="this.id"></NewArticleForm>
</template>

<script>

import { defineComponent } from 'vue';
import NewArticleForm from '@/components/modules/articles/NewArticleForm.vue';

export default defineComponent({
  components: { NewArticleForm },
  props: {
    id: {
      type: String,
      required: false,
    },
  },
});
</script>
