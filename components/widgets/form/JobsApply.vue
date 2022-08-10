<template>
  <v-form v-model="valid">
      <v-subheader class="pa-0 mt-3">Suas informações</v-subheader>
      <v-text-field
        label="Nome"
        name="fullname"
        placeholder="Seu nome"
        v-model="formModel.name"
        v-validate="'required'"
        data-vv-name="Nome"     
        :error-messages="errors.collect('Nome')"  
        required
      ></v-text-field>      
      <v-text-field
        label="E-mail"
        name="email"
        placeholder="Seu E-mail"
        v-model="formModel.name"
        v-validate="'required'"
        data-vv-name="E-mail"     
        :error-messages="errors.collect('E-mail')"  
        required
      ></v-text-field>
      <v-spacer></v-spacer>
      <v-btn
        :loading="loading3"
        @click.native="loader = 'loading3'"
        :disabled="loading3"
        color="blue-grey"
        class="white--text"
      >
        Upload
        <v-icon right dark>cloud_upload</v-icon>        
      </v-btn>
        <v-subheader class="pa-0 mt-3">Anexar Currículo(.pdf ou .docx)</v-subheader>         
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
