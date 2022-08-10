<template>
  <v-form v-model="valid">
      <v-subheader class="pa-0 mt-3">Detalhes Da Vaga</v-subheader>
      <v-text-field
        label="Cargo"
        name="fullname"
        placeholder="Designer"
        v-model="formModel.name"
        v-validate="'required'"
        data-vv-name="Cargo"     
        :error-messages="errors.collect('Cargo')"  
        required
      ></v-text-field>
      <v-text-field
        label="Habilidades Desejadas"
        name="fullname"
        placeholder="Javascript, react, etc..."
        v-model="formModel.name"
        v-validate="'required'"
        data-vv-name="Habilidades Desejadas"     
        :error-messages="errors.collect('Habilidades Desejadas')"  
        required
      ></v-text-field>
      <v-text-field
        label="Benefícios"
        name="fullname"
        placeholder="Benefícios"
        v-model="formModel.name"
        v-validate="'required'"
        data-vv-name="Benefícios"     
        :error-messages="errors.collect('Benefícios')"  
        required
      ></v-text-field>              
      <v-select
        :items="countries"
        v-validate="'required'"
        data-vv-name="Tipo de Contrato"     
        :error-messages="errors.collect('Tipo de Contrato')"           
        v-model="formModel.country"
        label="Tipo de Contrato"
        auto
        required
        item-text="country"
        item-value="abbr"
      ></v-select> 
       <v-flex lg12 sm12>
            <v-text-field 
            textarea label="Descrição Da Vaga"
            v-validate="'required'"
            data-vv-name="Descrição"
            :error-messages="errors.collect('Descrição')"
            required
            ></v-text-field>
        </v-flex>                
    <div class="form-btn">
      <v-btn outline @click="submit" color="primary">Enviar</v-btn>
      <v-btn outline @click="clear">Apagar</v-btn>
    </div>

  </v-form>
</template>

<script>
import Countries from '@/api/country.js';
export default {
  $_veeValidate: {
    validator: 'new'
  },    
  data: () => ({
    formModel: {
      country: null,
    },
    countries: Countries,
    states: [
      { name: 'Florida', abbr: 'FL', id: 1, country_id: 1 },
      { name: 'Georgia', abbr: 'GA', id: 2, country_id: 1 },
      { name: 'Nebraska', abbr: 'NE', id: 3, country_id: 1 },
      { name: 'California', abbr: 'CA', id: 4, country_id: 1 },
    ],    
    cities: [
      { name: 'New York', abbr: 'NY', id: 1, country_id: 1 },
      { name: 'Tample', abbr: 'TA', id: 2, country_id: 1 },
      { name: 'San Francisco', abbr: 'SF', id: 3, country_id: 1 },
    ],    
    valid: true,

  }),
  mounted () {
    this.$validator.localize('en', this.dictionary);
  },  
  methods: {
    submit () {
      this.$validator.validateAll();
    },
    clear () {
      this.formModel = {};
      this.$validator.reset();
    }    
  }
};
</script>
