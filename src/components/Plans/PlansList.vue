<template>
  <Modal>
    <div class="plans-list">
      <button class="btn-close" @click="() => $emit('close-plan-list')">X</button>
      <div class="plans-itens" v-if="plans && plans.length > 0">
        <PlanItem v-for="plan in plans" :key="plan.id" :plan="plan" />
      </div>
      <div class="no-plans" v-else>
        <h3 >Nenhum plano encontrado com base nos dados enviados</h3>

      </div>
      <!-- <ul v-if="plans && plans.length > 0">
        <li v-for="plan in plans" :key="plan.id"></li>
      </ul> -->
    </div>
  </Modal>
</template>

<script>
import PlanItem from './PlanItem';
import Modal from '../Modal';
export default {
  name: 'PlansList',
  props: ['plans'],
  components: {
    PlanItem,
    Modal
  }
}
</script>

<style scoped>
  .plans-list {
    padding: 20px;
    width: 90%;
    max-width: 960px;
    height: 90vh;
    background-color: #fff;
    overflow: auto;
    position: relative;
  }

  .plans-itens {
    display: flex;
    flex-wrap: wrap;
    gap: 5%;
    margin-top: 60px;
  }

  .no-plans {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .btn-close {
    position: absolute;
    top: 20px;
    right: 30px;
  }

  @media (max-width: 679px) {
    .plans-itens {
      flex-direction: column;
      align-items: center;
    }
  }
</style>