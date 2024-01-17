<template>
  <v-dialog v-model="dialog" max-width="70vw">

      <CommentForm :id="this.comment_id" :article_id="this.article_id" v-on:saved-form="dialog = false"></CommentForm>
  </v-dialog>

  <v-row>
    <v-col cols="12" class="d-flex justify-space-between">
      <h2>Top comments ({{ this.getComments.length }})</h2>
      <v-btn class="mb-2" @click="openFormDialog()" color="blue-darken-2" variant="flat">Comentar</v-btn>
    </v-col>
  </v-row>

  <v-row class="mb-4" v-for="comment in getComments">
    <v-col cols="1" class="d-flex justify-center">
      <v-avatar color="surface-variant"></v-avatar>
    </v-col>
    <v-col cols="11" class="border rounded-lg">
      <v-row>
        <v-col cols="12" class="pb-0 d-flex justify-space-between align-center">
          <div>
            <h4>{{ comment.email_commenter }}</h4>
            <small>{{ formatDate(comment.created_at) }}</small>
            <div>
              <v-rating size="17" readonly :model-value="comment.article_rate"
                        active-color="yellow-accent-4" half-increments></v-rating>
            </div>
          </div>
          <div>
            <v-btn
              density="compact"
              size="medium"
              class="m-0 mr-2"
              variant="text"
              color="yellow-darken-3"
              icon="mdi-pencil"
              @click="loadComment(comment.id)"
            />
            <v-btn
              density="compact"
              size="medium"
              class="m-0"
              variant="text"
              icon="mdi-delete"
              color="red-darken-3"
              @click="removeComment(comment.id)"
            />
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <p>{{ comment.body }}</p>
        </v-col>
      </v-row>
    </v-col>
  </v-row>

</template>


<script>
import { mapActions, mapGetters } from 'vuex';
import CommentForm from '@/components/modules/comments/CommentForm.vue';
import moment from 'moment';
import Swal from 'sweetalert2';


export default {
  name: 'CommentList',
  components: { CommentForm },
  props: {
    article_id: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      dialog: false,
      comment_id: null,
    };
  },
  computed: {
    ...mapGetters('comments', ['getComments', 'getCommentById']),
  },
  methods: {
    ...mapActions('comments', ['loadComments', 'deleteComment']),
    openFormDialog(comment_id = '') {
      if (comment_id == '')
        this.comment_id = null;
      else
        this.comment_id = comment_id;
      this.dialog = true;
    },
    loadComment(comment_id) {
      this.comment_id = comment_id;
      this.dialog = true;
    },
    async removeComment(comment_id) {
      Swal.fire({
        title: '¡Atención!',
        text: '¿Seguro deseas eliminar el comentario?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Continuar',
        cancelButtonText: 'Cancelar',
        reverseButtons: true,
      }).then(res => {
        if (res.isConfirmed) {
          this.deleteComment({ article_id: this.id, comment_id });
          Swal.fire({
            icon: 'success',
            title: 'Eliminacion exitosa',
            text: 'Se elimino correctamente el comentario',
          });
        }
      });
    },
    formatDate(date) {
      return moment(date).format('LLL');
    },
  },
  created() {

  },
};
</script>