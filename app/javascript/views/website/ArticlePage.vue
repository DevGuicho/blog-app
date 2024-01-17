<template>
  <v-container class="bg-white rounded elevation-1">
    <v-row>
      <v-img :src="article.image_url" max-height="350" cover></v-img>
    </v-row>
    <v-container class="mt-10">
      <v-row class="mx-5">
        <v-col>
          <v-row>
            <v-col cols="12">
              <v-rating :size="23" active-color="yellow-accent-4" :length="5"
                        half-increments
                        :model-value="getAverageRate"
                        readonly></v-rating>
              <h1>{{ article.title }}</h1>
              <small>Publicado {{ formatDate(article.created_at) }}</small>
            </v-col>
          </v-row>
          <v-row class="mb-5">
            <v-col cols="12">
              <p>{{ article.body }}</p>
            </v-col>
          </v-row>
          <v-divider class="mb-5"></v-divider>

          <CommentList :article_id="this.id"></CommentList>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import moment from 'moment';
import CommentForm from '@/components/modules/comments/CommentForm.vue';
import CommentList from '@/components/modules/comments/CommentList.vue';

export default {
  components: { CommentList, CommentForm },
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      article: null,
      comment_id: null,
      dialog: false,
    };
  },
  computed: {
    ...mapGetters('articles', ['getArticleById']),
    ...mapGetters('comments',['getAverageRate'])
  },
  methods: {
    ...mapActions('comments', ['loadComments']),
    formatDate(date) {
      return moment(date).format('LLL');
    },
  },
  created() {
    this.article = this.getArticleById(this.id);
    this.loadComments(this.id);
  },
};
</script>
