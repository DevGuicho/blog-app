<template>
  <v-data-iterator :items="getArticles" :page="page" items-per-page="5">
    <template v-slot:default="{ items }">
      <template v-for="(item, i) in items" :key="i">
        <v-card>
          <div class="ma-4">
            <small>{{ formatDate(item.raw.created_at) }}</small>
            <h3 class="mb-1 title" @click="goTo(item.raw.id)">{{ item.raw.title }}</h3>
            <span
              class="bg-blue-grey-lighten-5 rounded py-0 px-2 text-caption d-inline-block">{{ getCategoryById(item.raw.category_id).name
              }}</span>
            <div class="d-flex justify-end">
              <v-btn @click="goToEdit(item.raw.id)" color="yellow-darken-3" variant="text" density="comfortable" ><v-icon icon="mdi-pencil"></v-icon></v-btn>
              <v-btn @click="removeArticle(item.raw.id)" variant="text" color="red-darken-3" density="comfortable"><v-icon icon="mdi-delete"></v-icon></v-btn>
            </div>
          </div>
        </v-card>
        <br />
      </template>
    </template>
    <template v-slot:footer="{ page, pageCount, prevPage, nextPage }">
      <div class="d-flex align-center justify-center pa-4">
        <v-btn
          :disabled="page === 1"
          icon="mdi-arrow-left"
          density="comfortable"
          variant="tonal"
          rounded
          @click="prevPage"
        ></v-btn>

        <div class="mx-2 text-caption">
          Pagina {{ page }} de {{ pageCount }}
        </div>

        <v-btn
          :disabled="page >= pageCount"
          icon="mdi-arrow-right"
          density="comfortable"
          variant="tonal"
          rounded
          @click="nextPage"
        ></v-btn>
      </div>
    </template>
  </v-data-iterator>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import Swal from 'sweetalert2';
import moment from 'moment';

export default {
  data() {
    return {
      pageName: 'Index',
      page: 1,
    };
  },
  computed: {
    ...mapGetters('articles', ['getArticles']),
    ...mapGetters('categories', ['getCategoryById']),
  },
  methods: {
    ...mapActions('articles', ['loadArticles', 'deleteArticle']),
    goTo(id) {
      this.$router.push({ name: 'article', params: { id } });
    },
    goToEdit(id) {
      this.$router.push({ name: 'editArticle', params: { id } });
    },
    removeArticle(id) {
      Swal.fire({
        title: '¡Atención!',
        text: '¿Seguro deseas eliminar el articulo?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Continuar',
        cancelButtonText: 'Cancelar',
        reverseButtons: true,
      }).then(res => {
        if (res.isConfirmed) {
          this.deleteArticle(id);
          Swal.fire({
            icon: 'success',
            title: 'Eliminacion exitosa',
            text: 'Se elimino correctamente el articulo',
          });
        }
      });
    },
    formatDate(date) {
      return moment(date).fromNow();
    },
  },
  created() {
    this.loadArticles();
  },
};
</script>

<style scoped>
.title {
  cursor: pointer;
}

.title:hover {
  color: #1565C0;
}
</style>