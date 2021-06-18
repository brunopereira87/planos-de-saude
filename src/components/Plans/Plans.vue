<template>
  <section class="plans">
    <h1>Digite os dados para encontrar seu plano</h1>
    <PlansForm @load-plans="getPlans" />
    <PlansList v-if="openPlansList" :plans="plans" @close-plan-list="() => openPlansList = false" />
  </section>
</template>

<script>
import PlansForm from './PlansForm';
import PlansList from './PlansList';
export default {
  name: 'Plans',
  components: {
    PlansForm,
    PlansList
  },
  data() {
    return {
      plans: null,
      openPlansList: false
    }
  },
  methods: {
    getPlans(plans){
      this.plans = plans;
      this.openPlansList = true;
    }
  }
}
</script>

<style scoped>
.plans {
  margin: 60px auto;
  max-width: 750px;
  padding: 20px;
}

.plans h1 {
  text-align: center;
  font-size: 3rem;
  margin-bottom: 30px;
}
</style>