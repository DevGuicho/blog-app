<template>
  <v-app class="bg-blue-grey-lighten-5">
    <v-app-bar elevation="1">
      <v-container class="mx-auto w-75">
        <v-row class="d-flex align-center">
          <h3 class="mr-3" @click="this.$router.push({name: 'index'})" style="cursor: pointer">Blog App</h3>
          <v-responsive max-width="360">
            <v-text-field
              flat
              rounded="lg"
              label="Search"
              density="compact"
              single-line
              hide-details
              variant="solo-filled"
              v-model="query"
              @input="updateQuery(query)"
              append-inner-icon="mdi-magnify"
            ></v-text-field>
          </v-responsive>
        </v-row>
      </v-container>
    </v-app-bar>

    <v-main>
      <v-container class="mx-auto w-75">
        <v-row>
          <v-col cols="2" class="px-0">
            <v-row>
              <v-col>
                <router-link to="/articles/new">
                  <v-btn color="blue-darken-2" variant="flat" width="100%">
                    Crear articulo
                  </v-btn>
                </router-link>
              </v-col>
            </v-row>
            <v-divider class="my-5"></v-divider>
            <v-row>
              <v-col>
                <ol style="list-style: none">
                  <li class="custom-list pa-2 rounded" v-for="category in getCategories">
                    <a>{{ category.name }}</a>
                  </li>
                </ol>
              </v-col>
            </v-row>
          </v-col>


          <v-col>
            <router-view />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  data() {
    const menuItems = [
      { title: 'Inicio', routeName: 'index' },
      { title: 'About', routeName: 'about' },
      { title: 'Crear Articulo', routeName: 'newArticle' },
    ];

    return {
      menuItems,
      query: '',
    };
  },
  computed: {
    ...mapGetters('categories', ['getCategories']),
  },
  methods: {
    ...mapActions('categories', ['loadCategories']),
    ...mapActions('articles', ['updateQuery']),
    goTo(item) {
      this.$router.push({ name: item.routeName });
    },
  },
  created() {
    this.loadCategories();
  },
};
</script>

<style scoped>
.custom-list:hover {
  background-color: #C5CAE9;
}

.custom-list:hover a {
  display: block;
  text-decoration: underline;
  color: #1A237E;
  cursor: pointer;
}
</style>