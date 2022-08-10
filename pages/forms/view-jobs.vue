<template>
  <div id="page-forms">
    <v-container grid-list-xl fluid>
      <v-layout row wrap>
        <v-flex lg8 sm12>          
          <v-card>
            <v-toolbar color="success" dark flat dense cad>
              <v-toolbar-title class="subheading">Aplicar a Vaga</v-toolbar-title>
              <v-spacer></v-spacer>
            </v-toolbar>
            <v-divider></v-divider>
            <v-card-text class="">
              <jobs-apply></jobs-apply>
            </v-card-text>
          </v-card>
        </v-flex>        
      </v-layout>
    </v-container>
  </div>
</template>

<script>
  import VWidget from '@/components/VWidget';
  import JobsApply from '@/components/widgets/form/JobsApply';

  export default {
    components: {
      VWidget,
      JobsApply,      
    },
    data() {
      return {};
    },
    computed: {},
    methods: {}
  };
</script>
