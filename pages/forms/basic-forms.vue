<template>
  <div id="page-forms">
    <v-container grid-list-xl fluid>
      <v-layout row wrap>
        <v-flex lg5 sm12>          
          <v-card>
            <v-toolbar color="success" dark flat dense cad>
              <v-toolbar-title class="subheading">Cadastrar Nova Vaga</v-toolbar-title>
              <v-spacer></v-spacer>
            </v-toolbar>
            <v-divider></v-divider>
            <v-card-text class="">
              <shipment-form></shipment-form>
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex lg7 sm12 xs12>
          <plain-table></plain-table>
        </v-flex>        
      </v-layout>
    </v-container>
  </div>
</template>

<script>
  import VWidget from '@/components/VWidget';
  import ShipmentForm from '@/components/widgets/form/ShipmentForm';
  import PlainTable from '@/components/widgets/list/PlainTable';

  export default {
    components: {
      VWidget,
      ShipmentForm,
      PlainTable,      
    },
    data() {
      return {};
    },
    computed: {},
    methods: {}
  };
</script>
