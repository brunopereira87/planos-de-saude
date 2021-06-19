<template>
  <div>
    <Loading v-if="isLoading" />
    <FormulateForm 
      class="plans-form" 
      :ref="'form'" 
      v-model="formValues" 
      @input="performValidation"
      @submit="findPlan">

      <FormulateInput 
          type="date"
          name="birthdate"
          label="Data de Nascimento"
          validation="required"
          outer-class="form-group"
          input-class="form-control"
        />

      <div class="city-state">
        <FormulateInput 
          type="text"
          name="city"
          label="Cidade"
          validation="required"
          outer-class="form-group"
          input-class="form-control"
        />
        <FormulateInput 
          type="select"
          name="state"
          label="Estado"
          :options="states"
          validation="required"
          outer-class="form-group"
          input-class="form-control"
        />
        <button 
          type="button" 
          @click.prevent="findJobs"
          :disabled="!(formValues.city && formValues.state)"
        >
          Buscar profissões
        </button>
      </div>

      <div class="jobs"  v-if="jobs">
        <FormulateInput
          :options="jobs"
          type="select"
          name="job"
          label="Profissão"
          validation="required"
          outer-class="form-group"
          input-class="form-control"
        />
        <button 
          type="button" 
          @click.prevent="findEntities"
          :disabled="!(formValues.city && formValues.state && formValues.job)"
        >
          Buscar entidades
        </button>
      </div>
      

      <FormulateInput
        v-if="entities"
        :options="entities"
        type="select"
        name="entity"
        label="Entidade"
        validation="required"
        outer-class="form-group"
        input-class="form-control"
      />

      <FormulateInput 
        v-if="entities"
        type="submit"
        :disabled="hasErrors"
        name="Buscar Plano" />
    </FormulateForm>
  </div>
  
</template>

<script>
import {api} from '@/api';
import Loading from '../Loading';
export default {
  name: 'PlansForm',
  components: {
    Loading
  },
  data() {
    return {
      isLoading: false,
      hasErrors:true,
      formValues: {
        city: "",
        state: "",
        birthdate: "",
        entity: "" 
      },
      states: [
        "AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", 
        "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RO", "RS", "RR", "SC", 
        "SE", "SP", "TO"
      ],
      jobs: null,
      entities: null
    }
  },
  methods: {
    async findJobs(){
      this.isLoading = true;
      
      if(this.formValues.city && this.formValues.state){
        try {
          const { city, state } = this.formValues;
          const res = await api.get(
            `/profissao/${state}/${city}?api-key=${process.env.VUE_APP_API1_KEY}`
          );
          
          this.jobs = this.getSelectJobs(res.data);
          
        }catch ( err ){
          console.log(err)
        }finally {
          this.isLoading = false;
        }
      }
    },
    async findEntities(){
      this.isLoading = true;
      if(this.formValues.city && this.formValues.state && this.formValues.job){
        try {
          const { city, state,job } = this.formValues;
          const res = await api.get(
            `/entidade/${job}/${state}/${city}?api-key=${process.env.VUE_APP_API2_KEY}`
          );

          this.entities = this.getSelectEntities(res.data)

        } catch( err ){
          console.log(err)
        } finally {
          this.isLoading = false;
        }
      }
    },

    async findPlan(){
      this.isLoading = true;
      if(this.hasErrors == false){
        try {
          const { city, state, birthdate, entity } = this.formValues;
          const body = {
            entidade: entity,
            uf: state,
            cidade: city,
            datanascimento: [birthdate]
          }
          const res = await api.post(
            `/plano?api-key=${process.env.VUE_APP_API3_KEY}`,
            body
          );
          
          this.$emit('load-plans', res.data.planos);
          
        } catch( err ){
          console.log(err)
        } finally {
          this.isLoading = false;
        }
      }
    },
    getSelectJobs(jobs){
      return jobs.map( job => job.profissao );
    },

    getSelectEntities(entities){
      return entities.map( entity => {
        return {
          value: entity.NomeFantasia,
          label: entity.RazaoSocial
        }
      });
    },
    async performValidation() {
      if (this.$refs.form)
        this.hasErrors = await this.$refs.form.hasValidationErrors();
    },
  }
}
</script>

<style scoped>

</style>