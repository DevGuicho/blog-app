<template>
  <v-form>
    <v-card class="pa-5">
      <v-container>
        <v-row>
          <v-col cols="12">
            <h2>{{ this.comment.id ? 'Actualizar comentario' : 'Nuevo comentario' }}</h2>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-text-field label="Email" placeholder="example@example.com"
                          v-model="comment.email_commenter" variant="solo-filled"></v-text-field>
            <v-textarea label="Comentario" v-model="comment.body" variant="solo-filled"></v-textarea>
            <div class="mb-3">
              <v-rating :size="23" active-color="yellow-accent-4" :model-value="comment.article_rate"
                        v-model="comment.article_rate"></v-rating>
            </div>
            <div class="d-flex justify-end">
              <v-btn @click="$emit('saved-form')" variant="plain" color="red-darken-3">Cancelar</v-btn>
              <v-btn @click="saveComment" variant="tonal" color="success">Guardar</v-btn>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-form>

</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import moment from 'moment/moment';

export default {
  name: 'CommentForm',
  props: {
    id: {
      type: Number,
      required: false,
    },
    article_id: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      comment: { email_commenter: '', body: '', id: null, article_rate: 0 },
    };
  },
  computed: {
    ...mapGetters('comments', ['getCommentById', 'getDialog']),
  },
  methods: {
    ...mapActions('comments', ['createComment', 'updateComment', 'showDialog']),
    async saveComment() {
      if(this.comment.email_commenter.trim() =='')
        return
      if(this.comment.body.trim() == '')
        return

      if (this.comment.id)
        await this.updateComment({ article_id: this.article_id, comment: this.comment });
      else
        await this.createComment({
          article_id: this.article_id,
          comment: this.comment,
          article_rate: this.article_rate,
        });

      this.showDialog(false);
      this.comment = { email_commenter: '', body: '', article_rate: 0 };
      this.$emit('saved-form');
    },
    createForm() {
      if (this.id)
        this.comment = this.getCommentById(this.id);
      else
        this.comment = { email_commenter: '', body: '', id: null, article_rate: 0 };
    },
  },
  created() {
    this.createForm();
  },
};
</script>
