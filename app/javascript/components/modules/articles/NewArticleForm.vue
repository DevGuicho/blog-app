<template>
  <v-container class="bg-white rounded elevation-1">
    <v-form>
      <h1 class="mb-3 text-center">{{ this.id ? 'Actualizar Articulo' : 'Nuevo articulo' }}</h1>
      <v-row>
        <v-col cols="12">
          <v-text-field v-model="article.title" label="Titulo"></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-textarea v-model="article.body" label="Contenido"></v-textarea>
        </v-col>
        <v-col cols="12">
          <v-select label="Categoria" v-model="article.category_id" :items="getCategories" item-title="name"
                    item-value="id"></v-select>
        </v-col>
        <v-col cols="12">
          <v-text-field v-model="article.image_url" label="Imagen"
                        placeholder="https://image.example.img"></v-text-field>
        </v-col>
        <v-col cols="12" class="text-right">
          <router-link to="/">
            <v-btn color="red-darken-1" variant="text" class="mr-2">Cancelar</v-btn>
          </router-link>
          <v-btn @click="saveArticle" color="green-darken-1" variant="tonal">{{ this.id ? 'Actualizar' : 'Guardar' }}
          </v-btn>
        </v-col>
      </v-row>
    </v-form>

  </v-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { vModelSelect } from 'vue';

export default {
  name: 'NewArticleForm',
  props: {
    id: {
      type: String,
      required: false,
    },
  },
  data() {
    return {
      article: {},
    };
  },
  computed: {
    ...mapGetters('categories', ['getCategories']),
    ...mapGetters('articles', ['getArticleById']),
  },
  methods: {
    ...mapActions('articles', ['createArticle', 'updateArticle']),
    loadArticle() {
      let article;
      if (this.id)
        article = this.getArticleById(this.id);
      else
        article = { title: '', body: '' };
      this.article = article;
    },
    async saveArticle() {
      let new_id;

      if(this.article.title.trim() == '')
        return
      if(this.article.body.trim() == '')
        return
      if(this.article.category_id == '' || !this.article.category_id)
        return
      if(this.article.image_url.trim() == '')
        return

      if (this.id)
        new_id = await this.updateArticle(this.article);
      else
        new_id = await this.createArticle(this.article);


      this.$router.push({ name: 'article', params: { id: new_id } });
    },
  },
  created() {
    this.loadArticle();
  },
};
</script>
